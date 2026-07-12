
/* ══════════════════════════════════════════════════
   ✏️  QUIZ DATA — Replace this array each time
   Structure:
   [
     {
       question: "...",
       options: ["A","B","C","D"],
       correct: 0,        ← 0-based index
       explanation: "..." -> 30 words clear explanation
     }
   ]
══════════════════════════════════════════════════ */

/* ─── CONSTANTS ──────────────────────────────── */
const EXAM_DATE = new Date('2026-08-05T00:00:00');
const SECS_PER_Q = 60;
const CIRCUMFERENCE = 2 * Math.PI * 26; // ≈ 163.4

/* ─── STATE ──────────────────────────────────── */
let qIdx = 0;
let score = 0;
let wrongCount = 0;
let answered = false;
let timerInt = null;
let timeLeft = SECS_PER_Q;
let mistakes = [];
const MISTAKES_KEY = 'aptet_mistakes';
const MISTAKES_EXPIRY_MS = 12 * 60 * 60 * 1000; // 12 hours

/* ─── Countdown ──────────────────────────────── */
(function () {
    const diff = Math.ceil((EXAM_DATE - new Date()) / 86400000);
    document.getElementById('days-left').textContent = diff > 0 ? diff : 0;
})();

/* ─── Start / Restart ────────────────────────── */
function startQuiz() {
    qIdx = 0; score = 0; wrongCount = 0; answered = false;
    mistakes = [];
    localStorage.removeItem(MISTAKES_KEY);
    hideBottomBar();
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    loadQ();
}

function checkMistakesExpiry() {
    try {
        const stored = localStorage.getItem(MISTAKES_KEY);
        if (!stored) return;
        const data = JSON.parse(stored);
        if (Date.now() - data.timestamp > MISTAKES_EXPIRY_MS) {
            localStorage.removeItem(MISTAKES_KEY);
        }
    } catch (e) {
        localStorage.removeItem(MISTAKES_KEY);
    }
}

/* ─── Load question ──────────────────────────── */
function loadQ() {
    const q = QUESTIONS[qIdx];
    const total = QUESTIONS.length;
    answered = false;

    hideBottomBar();

    document.getElementById('q-label').textContent = `Question ${qIdx + 1} of ${total}`;
    document.getElementById('progress-fill').style.width = `${(qIdx / total) * 100}%`;
    updateStats();

    document.getElementById('q-text').textContent = q.question;

    const lockNotice = document.getElementById('lock-notice');
    if (lockNotice) {
        lockNotice.style.display = 'block';
        document.getElementById('lock-timer').textContent = '15';
    }

    const list = document.getElementById('options-list');
    const keys = ['A', 'B', 'C', 'D'];
    list.innerHTML = '';
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'opt';
        btn.innerHTML = `<span class="opt-key">${keys[i]}</span><span>${opt}</span>`;
        btn.onclick = () => pick(i);
        btn.disabled = true; // Initially disabled to force reading
        list.appendChild(btn);
    });

    startTimer();
}

/* ─── Timer ──────────────────────────────────── */
function startTimer() {
    clearInterval(timerInt);
    timeLeft = SECS_PER_Q;
    refreshTimerUI();
    timerInt = setInterval(() => {
        timeLeft--;
        refreshTimerUI();
        if (timeLeft <= 0) { clearInterval(timerInt); if (!answered) timeUp(); }
    }, 1000);
}

function refreshTimerUI() {
    const arc = document.getElementById('tr-arc');
    const secsEl = document.getElementById('timer-secs');
    const ring = document.getElementById('timer-ring');

    // shrink the arc as time drains
    const pct = timeLeft / SECS_PER_Q;
    const offset = CIRCUMFERENCE * (1 - pct);
    arc.style.strokeDashoffset = offset;

    secsEl.textContent = timeLeft;

    // Handle options locking logic
    const lockNotice = document.getElementById('lock-notice');
    const waitTime = timeLeft - 50; // 60 - 45 = 15

    if (waitTime > 0 && !answered) {
        if (lockNotice) {
            lockNotice.style.display = 'block';
            document.getElementById('lock-timer').textContent = waitTime;
        }
    } else {
        if (lockNotice) lockNotice.style.display = 'none';
        // Enable options
        if (!answered) {
            document.querySelectorAll('.opt').forEach(btn => {
                if (btn.disabled) btn.disabled = false;
            });
        }
    }

    const urgent = timeLeft <= 15;
    arc.classList.toggle('urgent', urgent);
    secsEl.classList.toggle('urgent', urgent);
    ring.classList.toggle('urgent-ring', urgent);
}

function timeUp() {
    answered = true;
    wrongCount++;
    recordMistake(-1);
    reveal(QUESTIONS[qIdx].correct, -1);
}

/* ─── Pick ───────────────────────────────────── */
function pick(idx) {
    if (answered) return;
    clearInterval(timerInt);
    answered = true;
    const correct = (idx === QUESTIONS[qIdx].correct);
    if (correct) score++;
    else {
        wrongCount++;
        recordMistake(idx);
    }
    reveal(QUESTIONS[qIdx].correct, idx);
}

function recordMistake(chosenIdx) {
    const q = QUESTIONS[qIdx];
    const keys = ['A', 'B', 'C', 'D'];
    mistakes.push({
        question: q.question,
        options: q.options,
        correctAnswer: `${keys[q.correct]}. ${q.options[q.correct]}`,
        yourAnswer: chosenIdx === -1 ? 'Time Up' : `${keys[chosenIdx]}. ${q.options[chosenIdx]}`,
        explanation: q.explanation
    });
}

function reveal(correctIdx, chosenIdx) {
    document.querySelectorAll('.opt').forEach((btn, i) => {
        btn.disabled = true;
        if (i === correctIdx) btn.classList.add('correct');
        else if (i === chosenIdx) btn.classList.add('wrong');
    });
    updateStats();
    showBottomBar(QUESTIONS[qIdx].explanation);
}

function updateStats() {
    document.getElementById('score-chip').textContent = `✅ ${score}`;
    document.getElementById('wrong-chip').textContent = `❌ ${wrongCount}`;
}

/* ─── Bottom bar ─────────────────────────────── */
function showBottomBar(explanation) {
    const bar = document.getElementById('bottom-bar');
    document.getElementById('exp-text').textContent = explanation;
    const isLast = (qIdx + 1 >= QUESTIONS.length);
    document.getElementById('next-btn').textContent = isLast ? 'See Results →' : 'Next Question →';

    bar.classList.add('visible');

    // Set height variable so padding-bottom on <main> updates
    // Use offsetHeight of the bar (which contains the inner content)
    const height = Number(bar.offsetHeight) - 80;
    document.documentElement.style.setProperty('--bottom-bar-h', height + 'px');
}

function hideBottomBar() {
    document.getElementById('bottom-bar').classList.remove('visible');
    document.documentElement.style.setProperty('--bottom-bar-h', '0px');
}

/* ─── Next ───────────────────────────────────── */
function nextQ() {
    qIdx++;
    if (qIdx >= QUESTIONS.length) showResult();
    else loadQ();
}

/* ─── Result ─────────────────────────────────── */
function showResult() {
    clearInterval(timerInt);
    hideBottomBar();
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';

    const total = QUESTIONS.length;
    const pct = Math.round((score / total) * 100);

    let icon = '😐', title = 'Keep going, Prasad!';
    if (pct === 100) { icon = '🏆'; title = 'Perfect Score!'; }
    else if (pct >= 80) { icon = '🎉'; title = 'Excellent!'; }
    else if (pct >= 60) { icon = '👍'; title = 'Good Job!'; }
    else if (pct >= 40) { icon = '💪'; title = 'You can do it!'; }

    document.getElementById('res-icon').textContent = icon;
    document.getElementById('res-title').textContent = title;
    document.getElementById('res-sub').textContent = `${score} out of ${total} correct`;
    document.getElementById('s-correct').textContent = score;
    document.getElementById('s-wrong').textContent = wrongCount;
    document.getElementById('d-pct').textContent = pct + '%';

    setTimeout(() => {
        document.getElementById('d-arc').style.strokeDashoffset = 314 - (pct / 100) * 314;
    }, 80);

    if (pct >= 80) confetti();

    // Save mistakes to localStorage
    if (mistakes.length > 0) {
        localStorage.setItem(MISTAKES_KEY, JSON.stringify({
            timestamp: Date.now(),
            score: score,
            total: total,
            wrongCount: wrongCount,
            mistakes: mistakes
        }));
    }

    // Show/hide download button
    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
        downloadBtn.style.display = mistakes.length > 0 ? 'inline-block' : 'none';
    }
}

/* ─── Confetti ───────────────────────────────── */
function confetti() {
    const colors = ['#0d7377', '#f05a28', '#f5a623', '#16a34a', '#dc2626', '#0ea5e9'];
    for (let i = 0; i < 70; i++) {
        setTimeout(() => {
            const el = document.createElement('div');
            el.className = 'cf';
            el.style.cssText = `left:${Math.random() * 100}vw;
        background:${colors[i % colors.length]};
        animation-duration:${1.4 + Math.random() * 1.8}s;
        animation-delay:${Math.random() * 0.4}s;
        transform:rotate(${Math.random() * 360}deg);`;
            document.body.appendChild(el);
            el.addEventListener('animationend', () => el.remove());
        }, i * 28);
    }
}

/* ─── PDF Download ───────────────────────────── */
function downloadPDF() {
    const stored = localStorage.getItem(MISTAKES_KEY);
    if (!stored) return;

    const data = JSON.parse(stored);
    const pct = Math.round((data.score / data.total) * 100);
    const dateStr = new Date().toLocaleString();

    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).slice(-2);
    const fileDate = `${day}_${month}_${year}`;

    let mistakesHTML = '';
    if (data.mistakes && data.mistakes.length > 0) {
        mistakesHTML = data.mistakes.map((m, i) => `
            <div class="q-block">
                <div class="q-num">Q${i + 1}</div>
                <div class="q-text">${m.question}</div>
                <div class="your-ans">Your Answer: ${m.yourAnswer}</div>
                <div class="correct-ans">Correct Answer: ${m.correctAnswer}</div>
                <div class="explanation">${m.explanation}</div>
            </div>
        `).join('');
    } else {
        mistakesHTML = '<div class="perfect">No mistakes! Perfect score!</div>';
    }

    const reportHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>APTET_REPORT_${fileDate}</title>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;600;700&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
<style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
        font-family: 'Noto Sans Telugu', 'Inter', sans-serif;
        padding: 40px 36px;
        color: #1a1a1a;
        background: #fff;
    }
    @media print {
        body { padding: 20px 24px; }
        .no-print { display: none !important; }
    }
    .header {
        text-align: center;
        margin-bottom: 28px;
        padding-bottom: 18px;
        border-bottom: 3px solid #0d7377;
    }
    .header h1 {
        color: #0d7377;
        font-size: 30px;
        font-weight: 700;
        letter-spacing: 1px;
        margin-bottom: 6px;
    }
    .header .sub {
        color: #666;
        font-size: 14px;
    }
    .summary {
        background: linear-gradient(135deg, #e6f6f7 0%, #ecfdf5 50%, #fff7ed 100%);
        border: 2px solid #0d7377;
        border-radius: 12px;
        padding: 24px 28px;
        margin-bottom: 28px;
        box-shadow: 0 2px 12px rgba(13, 115, 119, 0.1);
    }
    .summary h2 {
        font-size: 18px;
        color: #0d7377;
        margin-bottom: 14px;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
    .summary .row {
        display: flex;
        justify-content: center;
        gap: 36px;
        flex-wrap: wrap;
    }
    .stat-box {
        text-align: center;
        min-width: 100px;
    }
    .stat-box .label {
        display: block;
        font-size: 12px;
        color: #666;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 4px;
    }
    .stat-box .value {
        font-size: 28px;
        font-weight: 700;
        line-height: 1;
    }
    .stat-box .value.score-color { color: #0d7377; }
    .stat-box .value.green { color: #16a34a; }
    .stat-box .value.red { color: #dc2626; }
    .stat-box .value.amber { color: #f59e0b; }
    .mistakes-title {
        font-size: 18px;
        font-weight: 700;
        color: #0d7377;
        margin-bottom: 16px;
        border-left: 5px solid #f05a28;
        padding-left: 12px;
    }
    .q-block {
        border: 1.5px solid #e5e0d8;
        border-radius: 10px;
        padding: 16px 18px;
        margin-bottom: 14px;
        page-break-inside: avoid;
    }
    .q-num {
        display: inline-block;
        background: #0d7377;
        color: #fff;
        font-size: 12px;
        font-weight: 700;
        padding: 3px 10px;
        border-radius: 4px;
        margin-bottom: 10px;
    }
    .q-text { font-size: 14px; line-height: 1.8; margin-bottom: 10px; }
    .your-ans { font-size: 13px; color: #dc2626; font-weight: 700; margin-bottom: 4px; }
    .correct-ans { font-size: 13px; color: #16a34a; font-weight: 700; margin-bottom: 8px; }
    .explanation {
        font-size: 12px;
        color: #666;
        line-height: 1.6;
        background: #fffbeb;
        border: 1px solid #fde68a;
        border-radius: 6px;
        padding: 10px 12px;
    }
    .perfect { text-align: center; color: #16a34a; font-size: 18px; padding: 28px; }
    .footer {
        text-align: center;
        margin-top: 28px;
        font-size: 11px;
        color: #999;
        border-top: 1px solid #e5e0d8;
        padding-top: 12px;
    }
</style>
</head>
<body>
    <div class="header">
        <h1>APTET Quiz Report</h1>
        <div class="sub">Prepared for Prasad &mdash; ${dateStr}</div>
    </div>
    <div class="summary">
        <h2>Quiz Summary</h2>
        <div class="row">
            <div class="stat-box">
                <span class="label">Score</span>
                <span class="value score-color">${data.score} / ${data.total}</span>
            </div>
            <div class="stat-box">
                <span class="label">Percentage</span>
                <span class="value score-color">${pct}%</span>
            </div>
            <div class="stat-box">
                <span class="label">Correct</span>
                <span class="value green">${data.score}</span>
            </div>
            <div class="stat-box">
                <span class="label">Mistakes</span>
                <span class="value red">${data.wrongCount}</span>
            </div>
        </div>
    </div>
    <div class="mistakes-title">Mistakes Review (${data.wrongCount} questions)</div>
    ${mistakesHTML}
    <div class="footer">APTET Quiz Report &bull; Built with love by your Son</div>
</body>
</html>`;

    const blob = new Blob([reportHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const win = window.open(url, '_blank');

    if (win) {
        win.onload = function () {
            setTimeout(function () {
                win.print();
            }, 600);
        };
    } else {
        window.location.href = url;
    }
}

/* ─── Boot ───────────────────────────────────── */
function renderSubjects() {
    const container = document.getElementById('subjects-strip');
    if (container) {
        container.innerHTML = SUBJECTS.map(s => `<span class="subject-tag">${s}</span>`).join('');
    }
}

checkMistakesExpiry();
renderSubjects();
startQuiz();