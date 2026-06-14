
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

const SUBJECTS = [
    "Child Development",
    "ICT",
    "English",
    "Telugu",
    "Autism",
    "Hearing Impairment",
    "Learning Disability"
];

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

/* ─── Countdown ──────────────────────────────── */
(function () {
    const diff = Math.ceil((EXAM_DATE - new Date()) / 86400000);
    document.getElementById('days-left').textContent = diff > 0 ? diff : 0;
})();

/* ─── Start / Restart ────────────────────────── */
function startQuiz() {
    qIdx = 0; score = 0; wrongCount = 0; answered = false;
    hideBottomBar();
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    loadQ();
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
    const waitTime = timeLeft - 45; // 60 - 45 = 15

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
    reveal(QUESTIONS[qIdx].correct, -1);
}

/* ─── Pick ───────────────────────────────────── */
function pick(idx) {
    if (answered) return;
    clearInterval(timerInt);
    answered = true;
    const correct = (idx === QUESTIONS[qIdx].correct);
    if (correct) score++;
    else wrongCount++;
    reveal(QUESTIONS[qIdx].correct, idx);
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

/* ─── Boot ───────────────────────────────────── */
function renderSubjects() {
    const container = document.getElementById('subjects-strip');
    if (container) {
        container.innerHTML = SUBJECTS.map(s => `<span class="subject-tag">${s}</span>`).join('');
    }
}

renderSubjects();
startQuiz();