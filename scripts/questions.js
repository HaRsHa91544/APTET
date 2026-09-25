const SUBJECTS = [
    "ICT"
];

const QUESTIONS = [
    {
        question: "క్రింది వాటిలో కంప్యూటర్‌లో తాత్కాలికంగా డేటాను నిల్వ చేసి, CPUకి వేగంగా అందించే మెమరీ ఏది?",
        options: ["ROM", "RAM", "Hard Disk", "Optical Disk"],
        correct: 1,
        explanation: "RAM temporarily stores data and instructions currently being used by the CPU. It is volatile memory, so its contents are normally lost when electrical power is removed from the computer."
    },
    {
        question: "క్రింది వాటిలో System Softwareకు సరైన ఉదాహరణ ఏది?",
        options: ["MS Word", "Canva", "Windows", "PowerPoint"],
        correct: 2,
        explanation: "Windows is system software because it is an operating system that manages hardware resources and provides a platform for running application software such as Word and PowerPoint."
    },
    {
        question: "కంప్యూటర్‌లోని ALU ప్రధానంగా ఏ పనిని నిర్వహిస్తుంది?",
        options: ["డేటాను శాశ్వతంగా నిల్వ చేయడం", "అంకగణిత మరియు తార్కిక కార్యకలాపాలను నిర్వహించడం", "ప్రింటర్‌ను నియంత్రించడం", "ఇంటర్నెట్ కనెక్షన్‌ను ఏర్పాటు చేయడం"],
        correct: 1,
        explanation: "ALU stands for Arithmetic Logic Unit. It performs arithmetic operations such as addition and subtraction and logical operations such as comparisons and Boolean operations within the CPU."
    },
    {
        question: "క్రింది వాటిలో Input Device కానిది ఏది?",
        options: ["Keyboard", "Scanner", "Monitor", "Mouse"],
        correct: 2,
        explanation: "Monitor is an output device because it displays processed information visually. Keyboard, scanner, and mouse are input devices used to enter data or commands into a computer."
    },
    {
        question: "కంప్యూటర్‌ను ప్రారంభించినప్పుడు Operating System ప్రధానంగా ఏ పని చేస్తుంది?",
        options: ["కేవలం పత్రాలను ముద్రిస్తుంది", "కంప్యూటర్ హార్డ్‌వేర్ మరియు సాఫ్ట్‌వేర్ వనరులను నిర్వహిస్తుంది", "ఇంటర్నెట్ వేగాన్ని పెంచుతుంది", "వైరస్‌లన్నింటినీ స్వయంచాలకంగా తొలగిస్తుంది"],
        correct: 1,
        explanation: "An operating system manages computer hardware and software resources, including memory, processes, files, and devices. It provides essential services that allow applications and users to interact with hardware."
    },
    {
        question: "ఒక విద్యార్థి కంప్యూటర్‌ను ఉపయోగించి ఒక presentation తయారు చేసి, దానిలో text, pictures మరియు audioలను కలిపాడు. ఇది ప్రధానంగా ఏ రకమైన విద్యా వనరుల వినియోగాన్ని సూచిస్తుంది?",
        options: ["Multimedia", "Spreadsheet", "Database", "Operating System"],
        correct: 0,
        explanation: "Multimedia combines different forms of media, such as text, images, audio, video, and animation, within one presentation or resource to communicate instructional information more effectively."
    },
    {
        question: "Web 2.0 యొక్క ముఖ్య లక్షణం ఏది?",
        options: ["వినియోగదారులు కేవలం సమాచారాన్ని చదవగలరు", "వినియోగదారుల పరస్పర చర్య మరియు content creationకు అవకాశం ఉంటుంది", "ఇంటర్నెట్ లేకుండా మాత్రమే పనిచేస్తుంది", "ఇది కేవలం operating systemగా పనిచేస్తుంది"],
        correct: 1,
        explanation: "Web 2.0 emphasizes participation, interaction, collaboration, and user-generated content. Unlike mostly static Web 1.0 pages, users can create, share, comment on, and modify online content."
    },
    {
        question: "క్రింది వాటిలో Web 2.0కు అత్యంత అనుకూలమైన ఉదాహరణ ఏది?",
        options: ["Interactive blog", "BIOS", "ROM", "Device driver"],
        correct: 0,
        explanation: "An interactive blog is a Web 2.0 example because users can read content and commonly participate through comments, sharing, discussions, or other forms of user interaction."
    },
    {
        question: "Moodle ప్రధానంగా ఏ ప్రయోజనానికి ఉపయోగించబడుతుంది?",
        options: ["Image compression", "Learning Management Systemగా", "Computer hardware testing", "Antivirus scanning"],
        correct: 1,
        explanation: "Moodle is a Learning Management System designed to support online teaching and learning. Teachers can organize courses, provide materials, conduct assessments, manage activities, and communicate with learners."
    },
    {
        question: "ఒక Special Education teacher విద్యార్థుల కోసం visually attractive instructional posterలను రూపొందించాలనుకుంటున్నారు. క్రింది వాటిలో ఏ సాధనం దీనికి అత్యంత అనుకూలంగా ఉంటుంది?",
        options: ["Canva", "BIOS", "DOS", "Compiler"],
        correct: 0,
        explanation: "Canva is a visual design platform suitable for creating posters, presentations, infographics, and other instructional materials. Its templates and editing tools support visually attractive educational content."
    },
    {
        question: "MOOCలో “O” అనే అక్షరం దేనిని సూచిస్తుంది?",
        options: ["Organized", "Open", "Offline", "Operational"],
        correct: 1,
        explanation: "In MOOC, the first O stands for Open. MOOCs are Massive Open Online Courses designed to provide online learning opportunities to large numbers of participants."
    },
    {
        question: "క్రింది వాటిలో OER (Open Educational Resources) యొక్క ముఖ్య లక్షణం ఏది?",
        options: ["తప్పనిసరిగా చెల్లింపు ఆధారంగా మాత్రమే అందుబాటులో ఉండాలి", "విద్యా ప్రయోజనాల కోసం open access మరియు reuseకు అనుకూలంగా ఉండే వనరులు", "కేవలం printed textbooks మాత్రమే", "కేవలం ప్రభుత్వ ఉద్యోగుల కోసం రూపొందించిన వనరులు"],
        correct: 1,
        explanation: "OER are educational materials that are openly accessible and generally support reuse, adaptation, and redistribution under appropriate open licensing conditions, making them useful for teaching and learning."
    },
    {
        question: "DIKSHA ప్రధానంగా ఏ రంగానికి సంబంధించిన digital platform?",
        options: ["Banking", "School education and teacher learning", "Railway reservation", "Weather forecasting"],
        correct: 1,
        explanation: "DIKSHA is a digital platform associated with school education and teacher learning in India. It provides educational resources, courses, and learning-related digital content for teachers and students."
    },
    {
        question: "ఒక ఉపాధ్యాయుడు విద్యార్థులకు recorded lessons, online quizzes మరియు digital learning materials అందిస్తున్నారు. ఇది ప్రధానంగా ఏ భావనకు సంబంధించినది?",
        options: ["E-learning", "Hardware maintenance", "Data encryption", "Computer booting"],
        correct: 0,
        explanation: "E-learning refers to learning supported through digital technologies and electronic platforms. Recorded lessons, online quizzes, digital materials, and online activities are common examples of e-learning."
    },
    {
        question: "క్రింది వాటిలో MOOCs మరియు OER మధ్య సరైన సంబంధాన్ని సూచించేది ఏది?",
        options: ["రెండూ computer hardware components", "MOOCs online coursesను సూచిస్తాయి; OER open educational resourcesను సూచిస్తాయి", "MOOCs operating systems; OER antivirus programs", "రెండూ exclusively offline teaching methods"],
        correct: 1,
        explanation: "MOOCs are online courses designed for large-scale participation, while OER are openly available educational materials that can support teaching and learning through permitted access, reuse, and adaptation."
    },
    {
        question: "దృష్టి లోపం ఉన్న విద్యార్థి screenపై కనిపించే textను speechగా వినడానికి ఉపయోగించే technologyకి సరైన ఉదాహరణ ఏది?",
        options: ["Screen reader", "Plotter", "Joystick", "Scanner"],
        correct: 0,
        explanation: "A screen reader is assistive technology that converts on-screen text and interface information into synthesized speech or other accessible output, supporting computer access for people with visual impairments."
    },
    {
        question: "ఒక విద్యార్థి online source నుంచి information తీసుకుని sourceను పేర్కొనకుండా తన assignmentలో ఉపయోగించాడు. ఇది ప్రధానంగా ఏ సమస్యకు ఉదాహరణ?",
        options: ["Plagiarism", "Formatting", "Compression", "Animation"],
        correct: 0,
        explanation: "Using information from an online source without properly acknowledging the source can constitute plagiarism. Academic work should appropriately cite borrowed ideas, words, data, or other materials."
    },
    {
        question: "క్రింది వాటిలో computer memory గురించి సరైన statement ఏది?",
        options: ["ROM సాధారణంగా volatile memory", "RAMలోని సమాచారం విద్యుత్ సరఫరా నిలిచిపోయినప్పుడు సాధారణంగా కోల్పోతుంది", "Hard disk CPUలో భాగం", "Cache memory ఎల్లప్పుడూ secondary storageగా పనిచేస్తుంది"],
        correct: 1,
        explanation: "RAM is volatile memory, meaning stored information is generally lost when power is removed. ROM is generally nonvolatile, while hard disks and cache have different storage roles."
    },
    {
        question: "ఒక teacher classroomలో studentsతో real-time online interaction కోసం digital environment ఉపయోగిస్తున్నారు. ఇది క్రింది వాటిలో దేనికి దగ్గరగా ఉంటుంది?",
        options: ["Virtual classroom", "File compression", "Word processing", "Disk formatting"],
        correct: 0,
        explanation: "A virtual classroom provides an online environment where teachers and students can interact synchronously or asynchronously. It may support live communication, discussion, presentation, collaboration, and digital learning activities."
    },
    {
        question: "క్రింది వాటిని సరైన జతగా గుర్తించండి:\ni) Canva\nii) Moodle\niii) DIKSHA\niv) Screen Reader\na) Learning Management\nb) Visual content creation\nc) Digital educational platform\nd) Text-to-speech/accessibility support",
        options: ["i-b, ii-a, iii-c, iv-d", "i-a, ii-b, iii-d, iv-c", "i-c, ii-d, iii-a, iv-b", "i-d, ii-c, iii-b, iv-a"],
        correct: 0,
        explanation: "Canva is used for visual content creation, Moodle functions as a Learning Management System, DIKSHA is a digital educational platform, and screen readers provide accessibility support."
    },
    {
        question: "5, 7, 9, 11, 13 అనే డేటా సమితి యొక్క arithmetic mean ఎంత?",
        options: ["8", "9", "10", "11"],
        correct: 1,
        explanation: "The arithmetic mean is calculated by adding all observations and dividing their sum by the number of observations. Here, the sum is forty-five and five observations exist."
    },
    {
        question: "ఒక distributionలో అత్యధిక సార్లు కనిపించే విలువను ఏమంటారు?",
        options: ["Mean", "Median", "Mode", "Range"],
        correct: 2,
        explanation: "Mode is the value occurring with the highest frequency in a dataset. Unlike mean and median, it depends on frequency and can be used with categorical data."
    },
    {
        question: "క్రింది డేటా యొక్క medianను గుర్తించండి:\n3, 5, 7, 9, 11, 13, 15",
        options: ["7", "9", "11", "13"],
        correct: 1,
        explanation: "For seven ordered observations, the median is the fourth value because three observations lie below it and three lie above it. Therefore, the median is nine."
    },
    {
        question: "క్రింది డేటా యొక్క median ఎంత?\n4, 6, 8, 10, 12, 14",
        options: ["8", "9", "10", "11"],
        correct: 1,
        explanation: "For six ordered observations, the median is the average of the third and fourth values. Here those values are eight and ten, giving a median of nine."
    },
    {
        question: "ఒక విద్యార్థి ఐదు పరీక్షల్లో 12, 15, 18, 20, 25 మార్కులు సాధించాడు. అతని mean score ఎంత?",
        options: ["17", "18", "19", "20"],
        correct: 1,
        explanation: "The mean equals the sum of scores divided by the number of scores. Their total is ninety, and dividing by five gives a mean score of eighteen."
    },
    {
        question: "క్రింది వాటిలో central tendencyకి సంబంధించిన కొలత కానిది ఏది?",
        options: ["Mean", "Median", "Mode", "Standard deviation"],
        correct: 3,
        explanation: "Mean, median, and mode are measures of central tendency. Standard deviation instead measures dispersion, describing how much observations vary around a central value."
    },
    {
        question: "Standard Deviation ప్రధానంగా దేనిని కొలుస్తుంది?",
        options: ["Central tendency", "Dispersion లేదా variability", "Frequency మాత్రమే", "Sample size మాత్రమే"],
        correct: 1,
        explanation: "Standard deviation is a measure of dispersion or variability. It indicates how widely scores are distributed around their mean, with larger values generally indicating greater spread."
    },
    {
        question: "Standard Deviationను సాధారణంగా ఏ notation ద్వారా సూచిస్తారు?",
        options: ["σ", "μ మాత్రమే", "M", "N"],
        correct: 0,
        explanation: "Standard deviation is commonly represented by the Greek letter sigma, σ, when referring to a population. Other notation may be used for sample standard deviation."
    },
    {
        question: "ఒక data setలోని అన్ని విలువలు ఒకే విధంగా ఉంటే, దాని Standard Deviation ఎంత?",
        options: ["0", "1", "−1", "100"],
        correct: 0,
        explanation: "If every observation in a dataset has exactly the same value, there is no variation among observations. Therefore, the standard deviation is zero."
    },
    {
        question: "ఒక data setలో ప్రతి scoreకు 5ను కలిపితే, Standard Deviationపై సాధారణంగా ఏ ప్రభావం ఉంటుంది?",
        options: ["అది 5 పెరుగుతుంది", "అది 5 తగ్గుతుంది", "అది మారదు", "అది రెండింతలు అవుతుంది"],
        correct: 2,
        explanation: "Adding the same constant to every observation shifts the entire distribution without changing distances between observations. Therefore, standard deviation remains unchanged."
    },
    {
        question: "ఒక data setలో ప్రతి observationను 3తో గుణిస్తే, Standard Deviation:",
        options: ["3తో గుణించబడుతుంది", "3తో భాగించబడుతుంది", "మారదు", "9తో గుణించబడుతుంది"],
        correct: 0,
        explanation: "Multiplying every observation by three multiplies every deviation from the mean by three. Consequently, the standard deviation also becomes three times its original value."
    },
    {
        question: "క్రింది వాటిలో Standard Deviation గురించి సరైన statementలను గుర్తించండి.\ni) ఇది dispersionను సూచిస్తుంది.\nii) అన్ని observations సమానంగా ఉంటే దీని విలువ 0 అవుతుంది.\niii) ఇది central tendencyకి చెందిన కొలత.",
        options: ["i మాత్రమే", "ii మాత్రమే", "i మరియు ii మాత్రమే", "i, ii మరియు iii"],
        correct: 2,
        explanation: "Statements i and ii are correct because standard deviation measures dispersion and becomes zero when all observations are identical. Statement iii is incorrect because it measures variability, not central tendency."
    },
    {
        question: "Ungrouped data కోసం arithmetic meanకు సరైన formula ఏది?",
        options: ["ΣX × N", "ΣX / N", "N / ΣX", "Σ(X − M)"],
        correct: 1,
        explanation: "For ungrouped data, arithmetic mean equals the sum of all observations divided by the total number of observations. Thus, the formula is ΣX divided by N."
    },
    {
        question: "ఒక data setలో Mean = 20 మరియు మొత్తం observations సంఖ్య = 5 అయితే, అన్ని observations మొత్తం ఎంత?",
        options: ["25", "50", "100", "125"],
        correct: 2,
        explanation: "Mean equals total of observations divided by their number. Therefore, total equals mean multiplied by number of observations: twenty multiplied by five equals one hundred."
    },
    {
        question: "Mean deviation గురించి క్రింది statementsలో సరైనది ఏది?\ni) ఇది dispersionను కొలిచే measure.\nii) Mean deviationలో deviations యొక్క absolute valuesను ఉపయోగిస్తారు.\niii) Algebraic signsను అలాగే ఉంచి deviationsను నేరుగా average చేస్తారు.",
        options: ["i మాత్రమే", "i మరియు ii మాత్రమే", "ii మరియు iii మాత్రమే", "i, ii మరియు iii"],
        correct: 1,
        explanation: "Mean deviation measures dispersion and uses absolute deviations, removing positive and negative cancellation. Statement iii is incorrect because algebraic signs are not retained for mean deviation."
    },
    {
        question: "Mean deviation about Mean కోసం ungrouped dataలో సరైన expression ఏది?",
        options: ["Σ(X − M) / N", "Σ|X − M| / N", "ΣX / M", "Σ(X + M) / N"],
        correct: 1,
        explanation: "Mean deviation about the mean is calculated by summing the absolute differences between each observation and the mean, then dividing by the number of observations."
    },
    {
        question: "క్రింది dataలో Modeను గుర్తించండి:\n2, 3, 4, 4, 5, 6, 4, 7",
        options: ["3", "4", "5", "6"],
        correct: 1,
        explanation: "The mode is the value appearing most frequently. In this dataset, four occurs three times, while the other values occur only once, so the mode is four."
    },
    {
        question: "ఒక distributionలో Mean = 25, Median = 25 మరియు Mode = 25. ఈ పరిస్థితి ఏదిని సూచిస్తుంది?",
        options: ["సాధారణంగా symmetric distributionకు అనుకూలమైన పరిస్థితి", "తప్పనిసరిగా negative skewness", "తప్పనిసరిగా positive skewness", "Standard deviation = 25"],
        correct: 0,
        explanation: "When mean, median, and mode are equal, the distribution is typically consistent with a symmetric distribution. However, equality alone does not establish every property of the distribution."
    },
    {
        question: "ఒక విద్యార్థుల సమూహం యొక్క scores 20, 20, 20, 20గా ఉన్నాయి. ఈ data గురించి సరైనది ఏది?",
        options: ["Mean = 20 మరియు Standard Deviation = 0", "Mean = 0 మరియు Standard Deviation = 20", "Median = 0", "Mode = 0"],
        correct: 0,
        explanation: "All four scores are identical at twenty. Therefore, their mean is twenty, their median is twenty, and there is no variation, making standard deviation zero."
    },
    {
        question: "ఒక ఉపాధ్యాయుడు రెండు తరగతుల పరీక్షా ఫలితాల్లో ఎవరి scoresలో ఎక్కువ variability ఉందో తెలుసుకోవాలనుకుంటున్నారు. క్రింది వాటిలో ఏ measure అత్యంత అనుకూలమైనది?",
        options: ["Mean", "Median", "Standard Deviation", "Mode"],
        correct: 2,
        explanation: "Standard deviation is appropriate for comparing variability because it quantifies the spread of scores around their central value. Larger standard deviation indicates greater score variability."
    },
    {
        question: "ఒక విద్యార్థి assessment scores: 10, 10, 10, 10, 10. ఈ scoresకు Mean, Median మరియు Mode వరుసగా:",
        options: ["10, 10, 10", "10, 10, 0", "0, 10, 10", "10, 0, 10"],
        correct: 0,
        explanation: "When every assessment score is ten, the mean, median, and mode are all ten. Identical observations also have zero variability, but that is not asked here."
    },
    {
        question: "ఒక teacher ఒకే పరీక్షను రెండు వేర్వేరు తరగతులకు నిర్వహించి, వారి performanceలో variabilityని పోల్చాలనుకుంటున్నారు. క్రింది వాటిలో ఏ measure ఈ ప్రయోజనానికి ఎక్కువగా ఉపయోగపడుతుంది?",
        options: ["Mode", "Standard Deviation", "Median మాత్రమే", "Mean మాత్రమే"],
        correct: 1,
        explanation: "Standard deviation measures variability between groups. Comparing standard deviations directly is informative here because both classes are being compared using the same assessment context."
    },
    {
        question: "ఒక assessment dataలో ఒక అత్యంత పెద్ద విలువ (extreme score) చేర్చబడింది. Mean మరియు Medianలో సాధారణంగా ఏది extreme value వల్ల ఎక్కువగా ప్రభావితమవుతుంది?",
        options: ["Mean", "Median", "రెండూ ఎప్పుడూ సమానంగా ప్రభావితమవుతాయి", "ఏదీ ప్రభావితం కాదు"],
        correct: 0,
        explanation: "Mean uses every observation and can be strongly affected by extreme values. Median depends on ordered position and is generally less affected by an extreme score."
    },
    {
        question: "ఒక Special Education teacher ఒక విద్యార్థి academic performanceను నిరంతరం నమోదు చేసి, తదుపరి instructional planning కోసం ఆ dataను ఉపయోగిస్తున్నారు. ఈ ప్రక్రియలో ప్రధాన ప్రయోజనం ఏది?",
        options: ["Assessment data ఆధారంగా instructionను సవరించడం", "విద్యార్థిని assessment నుంచి తొలగించడం", "అన్ని studentsకు ఒకే interventionను తప్పనిసరి చేయడం", "పరీక్షల అవసరాన్ని పూర్తిగా తొలగించడం"],
        correct: 0,
        explanation: "Continuous recording of assessment data allows teachers to examine student performance over time and adjust instructional planning, strategies, or interventions according to identified learning needs."
    },
    {
        question: "ఒక assessmentలో విద్యార్థుల scores 5, 5, 6, 6, 7, 7, 8గా ఉన్నాయి. ఈ data యొక్క median:",
        options: ["5", "6", "7", "8"],
        correct: 1,
        explanation: "The seven scores are already ordered. With an odd number of observations, the fourth value is the median. The fourth score is six."
    },
    {
        question: "క్రింది statementsలో సరైనవి ఏవి?\ni) Mean అన్ని observationsను పరిగణనలోకి తీసుకుంటుంది.\nii) Median ordered dataలో మధ్యస్థ స్థానాన్ని సూచిస్తుంది.\niii) Mode అత్యధిక frequency కలిగిన విలువను సూచిస్తుంది.",
        options: ["i మాత్రమే", "i మరియు ii మాత్రమే", "ii మరియు iii మాత్రమే", "i, ii మరియు iii"],
        correct: 3,
        explanation: "Mean considers all observations, median identifies the middle position after ordering, and mode identifies the most frequent value. Therefore, all three statements are correct."
    },
    {
        question: "ఒక teacher ఒక విద్యార్థి reading assessmentలో 12, 15, 18, 15, 20 మార్కులు సాధించినట్లు నమోదు చేశారు. ఈ scoresలో Mode ఎంత?",
        options: ["12", "15", "18", "20"],
        correct: 1,
        explanation: "In the scores twelve, fifteen, eighteen, fifteen, and twenty, fifteen occurs twice while every other value occurs once. Therefore, fifteen is the mode."
    },
    {
        question: "ఒక testలో ఒక తరగతి యొక్క Mean = 60 మరియు Standard Deviation = 4. మరొక తరగతి యొక్క Mean = 60 మరియు Standard Deviation = 10. Mean ఒకటే అయినప్పుడు సరైన interpretation ఏది?",
        options: ["మొదటి తరగతిలో scores ఎక్కువ variability కలిగి ఉంటాయి", "రెండవ తరగతిలో scores ఎక్కువ variability కలిగి ఉంటాయి", "రెండు తరగతుల variability తప్పనిసరిగా ఒకటే", "Mean ఆధారంగా మాత్రమే variability నిర్ణయించవచ్చు"],
        correct: 1,
        explanation: "Both classes have the same mean, but the second class has a standard deviation of ten compared with four. Therefore, the second class shows greater score variability."
    },
    {
        question: "క్రింది వాటిలో assessment data యొక్క basic statistical interpretationకు సరైన జత ఏది?",
        options: ["Mean → సాధారణ కేంద్ర విలువను సూచించడానికి; Standard Deviation → scoresలో వ్యాప్తిని సూచించడానికి", "Mean → అత్యధిక frequency; Standard Deviation → మధ్యస్థ score", "Mode → variability; Median → dispersion", "Standard Deviation → అత్యధిక frequency; Mode → variability"],
        correct: 0,
        explanation: "Mean represents an arithmetic average, while standard deviation represents dispersion or variability. Together, these measures provide basic information about a dataset's central level and score spread."
    },
    {
        question: "క్రింది వాటిని సరైన సంబంధంతో జత చేయండి:\ni) Mean\nii) Median\niii) Mode\niv) Standard Deviation\na) అత్యధిక frequency కలిగిన విలువ\nb) Dispersion/variability\nc) Arithmetic average\nd) Ordered dataలో మధ్యస్థ స్థానం",
        options: ["i-c, ii-d, iii-a, iv-b", "i-d, ii-c, iii-b, iv-a", "i-a, ii-b, iii-d, iv-c", "i-b, ii-a, iii-c, iv-d"],
        correct: 0,
        explanation: "Mean is arithmetic average, median is the middle position in ordered data, mode is the most frequent value, and standard deviation measures dispersion or variability."
    }
];