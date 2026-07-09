const SUBJECTS = [
    "Psychology",
    "ICT",
    "English",
    "Special Education"
];

const QUESTIONS = [
    {
        question: "సమగ్ర విద్య (Inclusive Education) యొక్క ప్రధాన లక్ష్యం ఏది?",
        options: [
            "ప్రత్యేక అవసరాలున్న విద్యార్థులను ప్రత్యేక పాఠశాలల్లో మాత్రమే బోధించడం",
            "విద్యార్థులను వారి వైకల్యం ఆధారంగా వేరు చేయడం",
            "అన్ని విద్యార్థులు ఒకే తరగతి గదిలో అవసరమైన సహాయంతో నేర్చుకునే అవకాశాన్ని కల్పించడం",
            "ప్రతిభావంతులైన విద్యార్థులకు మాత్రమే ప్రత్యేక బోధన అందించడం"
        ],
        correct: 2,
        explanation: "సమగ్ర విద్యలో అన్ని విద్యార్థులు కలిసి నేర్చుకుంటారు. అవసరమైన సహాయక సేవలు, బోధనా అనుకూలీకరణలు మరియు సమాన అవకాశాలు కల్పించడం దీని ప్రధాన లక్ష్యం."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి.\n\n(a) మార్గదర్శనం (Guidance) ప్రధానంగా అభివృద్ధి ప్రక్రియ.\n(b) కౌన్సెలింగ్ (Counselling) వ్యక్తిగత సమస్యల పరిష్కారానికి సహాయపడుతుంది.\n\nసరైన సమాధానం ఏది?",
        options: [
            "(a) మాత్రమే సరైనది",
            "(b) మాత్రమే సరైనది",
            "(a), (b) రెండూ సరైనవి",
            "(a), (b) రెండూ తప్పు"
        ],
        correct: 2,
        explanation: "మార్గదర్శనం వ్యక్తి అభివృద్ధికి దోహదపడే నిరంతర ప్రక్రియ. కౌన్సెలింగ్ వ్యక్తిగత, భావోద్వేగ లేదా విద్యాసంబంధ సమస్యలను అర్థం చేసుకొని పరిష్కరించేందుకు సహాయపడుతుంది."
    },
    {
        question: "ఒక విద్యార్థి పరీక్షలో విఫలమైన తర్వాత తన భావోద్వేగాలను నియంత్రించి, మళ్లీ ప్రణాళిక రూపొందించి చదవడం ప్రారంభించాడు. ఇది ప్రధానంగా దేనిని సూచిస్తుంది?",
        options: [
            "మానసిక ఆరోగ్యం",
            "భావోద్వేగ మేధస్సు (Emotional Intelligence)",
            "ప్రేరణ (Motivation)",
            "అవధానం (Attention)"
        ],
        correct: 1,
        explanation: "విఫలమైన తర్వాత నిరాశను నియంత్రించి, కొత్త ప్రణాళికతో ముందుకు సాగడం స్వీయ నియంత్రణకు ఉదాహరణ. ఇది భావోద్వేగ మేధస్సులోని ముఖ్యమైన అంశం."
    },
    {
        question: "పాఠశాల కౌన్సెలర్ ఒక విద్యార్థి సమస్యను వింటూ, ఎటువంటి తీర్పు ఇవ్వకుండా అతని భావాలను అర్థం చేసుకోవడానికి ప్రయత్నిస్తాడు. ఇది ఏ కౌన్సెలింగ్ నైపుణ్యాన్ని సూచిస్తుంది?",
        options: [
            "విమర్శించడం",
            "క్రియాశీల వినికిడి (Active Listening)",
            "శిక్షించడం",
            "సూచనలు మాత్రమే ఇవ్వడం"
        ],
        correct: 1,
        explanation: "కౌన్సెలింగ్‌లో క్రియాశీల వినికిడి ద్వారా వ్యక్తి భావాలను శ్రద్ధగా విని, తీర్పు ఇవ్వకుండా అర్థం చేసుకోవడం విశ్వాసాన్ని పెంపొందించి సమస్య పరిష్కారానికి సహాయపడుతుంది."
    },
    {
        question: "మానసిక ఆరోగ్యాన్ని అత్యుత్తమంగా ప్రతిబింబించే లక్షణం ఏది?",
        options: [
            "ఎప్పుడూ సమస్యలు లేకపోవడం",
            "భావోద్వేగాలను పూర్తిగా దాచుకోవడం",
            "ఒత్తిడిని సమర్థంగా ఎదుర్కొంటూ సాధారణ జీవితాన్ని కొనసాగించడం",
            "ఇతరులతో సంబంధాలు పెట్టుకోకపోవడం"
        ],
        correct: 2,
        explanation: "మానసిక ఆరోగ్యం అంటే సమస్యలు లేకపోవడం కాదు. ఒత్తిడిని సమర్థంగా ఎదుర్కొని, సంబంధాలు కొనసాగిస్తూ, సాధారణ జీవితాన్ని సమతుల్యంగా నిర్వహించడం."
    },
    {
        question: "సమగ్ర విద్యలో క్రింది వాటిలో ఏది 'Accommodation' కు ఉదాహరణ?",
        options: [
            "పాఠ్యాంశాలను పూర్తిగా మార్చడం",
            "నేర్చుకునే లక్ష్యాలను తగ్గించడం",
            "అదనపు పరీక్షా సమయం కల్పించడం",
            "విద్యార్థిని ప్రత్యేక పాఠశాలకు పంపించడం"
        ],
        correct: 2,
        explanation: "Accommodationలో నేర్చుకునే లక్ష్యాలు మారవు. బోధన లేదా మూల్యాంకన విధానంలో మాత్రమే మార్పులు చేస్తారు. అదనపు పరీక్షా సమయం దీనికి సాధారణ ఉదాహరణ."
    },
    {
        question: "ఒక విద్యార్థి తన సహచరుడు బాధలో ఉన్నాడని గుర్తించి అతనికి సహాయం చేశాడు. ఇది భావోద్వేగ మేధస్సులో ఏ అంశానికి ఉదాహరణ?",
        options: [
            "స్వీయ అవగాహన",
            "స్వీయ నియంత్రణ",
            "సానుభూతి (Empathy)",
            "జ్ఞాపకశక్తి"
        ],
        correct: 2,
        explanation: "ఇతరుల భావాలను గుర్తించి, వాటిని అర్థం చేసుకొని సహాయం చేయడం సానుభూతి. ఇది భావోద్వేగ మేధస్సులో అత్యంత ముఖ్యమైన సామాజిక నైపుణ్యం."
    },
    {
        question: 'Choose the correct synonym of "Abundant."',
        options: [
            "Scarce",
            "Plentiful",
            "Tiny",
            "Weak"
        ],
        correct: 1,
        explanation: "The word 'Abundant' means available in large quantities or more than enough. 'Plentiful' carries the same meaning, while the remaining options have different meanings."
    },
    {
        question: 'Choose the correct idiom.\n\n"To spill the beans" means:',
        options: [
            "To cook food",
            "To reveal a secret",
            "To waste money",
            "To lose interest"
        ],
        correct: 1,
        explanation: "The idiom 'spill the beans' means to reveal confidential information or disclose a secret unintentionally or deliberately. It has no connection with cooking or money."
    },
    {
        question: "Choose the correct phrasal verb.\n\nThe meeting was ______ because the principal was absent.",
        options: [
            "called off",
            "looked after",
            "brought up",
            "carried out"
        ],
        correct: 0,
        explanation: "'Called off' means cancelled. Since the principal was absent, the meeting was cancelled. The other phrasal verbs have unrelated meanings in this context."
    },
    {
        question: "Choose the correct one-word substitution.\n\nA person who cannot read or write",
        options: [
            "Scholar",
            "Illiterate",
            "Author",
            "Orator"
        ],
        correct: 1,
        explanation: "An illiterate person is unable to read or write. A scholar is learned, an author writes books, and an orator is a skilled public speaker."
    },
    {
        question: 'Choose the correct idiom.\n\n"Once in a blue moon" means:',
        options: [
            "Every day",
            "Frequently",
            "Very rarely",
            "Suddenly"
        ],
        correct: 2,
        explanation: "The idiom 'once in a blue moon' refers to something that happens very rarely. It describes an event that occurs infrequently rather than regularly."
    },
    {
        question: "DIKSHA platform is primarily designed to:",
        options: [
            "Conduct parliamentary elections",
            "Support digital teaching-learning resources",
            "Develop operating systems",
            "Manage school admissions"
        ],
        correct: 1,
        explanation: "DIKSHA is India's national digital education platform. It provides teachers and learners with digital textbooks, lesson plans, assessments and interactive educational resources."
    },
    {
        question: "Which of the following is an example of a MOOC platform?",
        options: [
            "Moodle",
            "SWAYAM",
            "Photoshop",
            "LibreOffice"
        ],
        correct: 1,
        explanation: "SWAYAM is India's official Massive Open Online Course platform that offers free online courses. Moodle is an LMS, while Photoshop and LibreOffice are not MOOC platforms."
    },
    {
        question: "Moodle is mainly used as:",
        options: [
            "Database software",
            "Learning Management System (LMS)",
            "Antivirus software",
            "Operating System"
        ],
        correct: 1,
        explanation: "Moodle is an open-source Learning Management System used to create, manage and deliver online courses, assignments, quizzes and other digital learning activities."
    },
    {
        question: "Which statement correctly describes Open Educational Resources (OER)?",
        options: [
            "They can only be accessed after purchasing a license.",
            "They are freely accessible educational resources that may be reused under open licenses.",
            "They are available only to universities.",
            "They cannot be modified by educators."
        ],
        correct: 1,
        explanation: "Open Educational Resources are freely available teaching and learning materials released under open licenses, allowing educators to use, adapt, modify and redistribute them legally."
    },
    {
        question: "Which combination best represents multimedia in educational technology?",
        options: [
            "Text only",
            "Audio and video only",
            "Text, audio, images, animation and video",
            "Printed books only"
        ],
        correct: 2,
        explanation: "Multimedia integrates multiple forms of media such as text, audio, images, animation and video to improve learner engagement and make teaching more interactive and effective."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education) సందర్భంలో క్రింది ప్రకటనలను పరిశీలించండి.\n\n(a) పాఠ్యాంశంలో అవసరమైన మార్పులు చేయడం Modification.\n(b) బోధనా విధానంలో మార్పులు చేసి విద్యార్థికి అవకాశాలు కల్పించడం Accommodation.\n\nసరైన సమాధానం ఏది?",
        options: [
            "(a) మాత్రమే సరైనది",
            "(b) మాత్రమే సరైనది",
            "(a), (b) రెండూ సరైనవి",
            "(a), (b) రెండూ తప్పు"
        ],
        correct: 2,
        explanation: "Modificationలో పాఠ్యాంశం లేదా నేర్చుకునే లక్ష్యాలు మారతాయి. Accommodationలో లక్ష్యాలు మారకుండా బోధన, పరీక్ష లేదా అభ్యాస విధానంలో మాత్రమే అవసరమైన సర్దుబాట్లు చేస్తారు."
    },
    {
        question: "క్రింది వాటిలో పాఠశాల మార్గదర్శనం (Guidance) యొక్క ప్రధాన ఉద్దేశ్యం ఏది?",
        options: [
            "విద్యార్థులకు శిక్ష విధించడం",
            "విద్యార్థుల సమగ్ర అభివృద్ధికి సహాయపడడం",
            "పరీక్షల్లో ఉత్తీర్ణత మాత్రమే సాధించడం",
            "బలహీన విద్యార్థులను వేరు చేయడం"
        ],
        correct: 1,
        explanation: "మార్గదర్శనం విద్యార్థుల విద్యా, వ్యక్తిగత, సామాజిక మరియు వృత్తి అభివృద్ధికి సహాయపడుతుంది. వారి సామర్థ్యాలను గుర్తించి సరైన నిర్ణయాలు తీసుకునేలా ప్రోత్సహిస్తుంది."
    },
    {
        question: "ఒక ఉపాధ్యాయుడు విద్యార్థుల భావోద్వేగాలను గౌరవిస్తూ, భయరహిత తరగతి వాతావరణాన్ని కల్పిస్తాడు. ఇది ప్రధానంగా దేనిని ప్రోత్సహిస్తుంది?",
        options: [
            "జ్ఞాపకశక్తి",
            "మానసిక ఆరోగ్యం",
            "శారీరక వికాసం",
            "తెలివితేటలు"
        ],
        correct: 1,
        explanation: "భయరహిత, మద్దతుతో కూడిన తరగతి వాతావరణం విద్యార్థుల ఆత్మవిశ్వాసం, భావోద్వేగ స్థిరత్వం మరియు మానసిక ఆరోగ్యాన్ని పెంపొందించి మెరుగైన అభ్యాసానికి దోహదపడుతుంది."
    },
    {
        question: 'Choose the correct synonym of "Reluctant."',
        options: [
            "Willing",
            "Hesitant",
            "Confident",
            "Cheerful"
        ],
        correct: 1,
        explanation: "The word 'Reluctant' means unwilling or showing hesitation before doing something. 'Hesitant' has the closest meaning, whereas the other options express different ideas."
    },
    {
        question: "Choose the correct one-word substitution.\n\nOne who speaks many languages",
        options: [
            "Linguist",
            "Polyglot",
            "Interpreter",
            "Translator"
        ],
        correct: 1,
        explanation: "A polyglot is a person who can speak and use several languages fluently. A linguist studies language, while interpreters and translators perform language conversion."
    },
    {
        question: "Choose the correct phrasal verb.\n\nThe teacher asked the students to ______ their assignments before Monday.",
        options: [
            "put off",
            "hand in",
            "look into",
            "break down"
        ],
        correct: 1,
        explanation: "'Hand in' means to submit assignments or documents. 'Put off' means postpone, 'look into' means investigate, and 'break down' means stop functioning."
    },
    {
        question: 'Choose the correct idiom.\n\n"Hit the nail on the head" means',
        options: [
            "To make a careless mistake",
            "To speak exactly the right thing",
            "To work very slowly",
            "To become angry"
        ],
        correct: 1,
        explanation: "The idiom 'hit the nail on the head' means to describe or explain something with complete accuracy by saying exactly what is correct."
    },
    {
        question: 'Choose the correct synonym of "Brief."',
        options: [
            "Lengthy",
            "Short",
            "Ancient",
            "Difficult"
        ],
        correct: 1,
        explanation: "The adjective 'Brief' means short in length or duration. It refers to something that lasts for only a small amount of time or contains few words."
    },
    {
        question: "Choose the correct one-word substitution.\n\nOne who loves books",
        options: [
            "Bibliophile",
            "Biologist",
            "Biographer",
            "Librarian"
        ],
        correct: 0,
        explanation: "A bibliophile is a person who has a great love for books and reading. The other options refer to different professions or areas of study."
    },
    {
        question: 'Choose the correct idiom.\n\n"A blessing in disguise" means',
        options: [
            "A visible reward",
            "Something that appears bad but turns out to be good",
            "A hidden treasure",
            "A dangerous situation"
        ],
        correct: 1,
        explanation: "The idiom 'a blessing in disguise' refers to an event that initially seems unfortunate but later brings positive results or unexpected benefits."
    },
    {
        question: "Which of the following is an example of an Open Educational Resource (OER)?",
        options: [
            "A copyrighted textbook that cannot be shared",
            "A learning module released under a Creative Commons license",
            "A private examination answer key",
            "A licensed antivirus program"
        ],
        correct: 1,
        explanation: "Open Educational Resources are teaching and learning materials released under open licenses such as Creative Commons, allowing users to reuse, adapt and share them legally."
    },
    {
        question: "Which feature best distinguishes MOOCs from conventional classroom courses?",
        options: [
            "Limited enrollment",
            "Open access to a large number of learners through the Internet",
            "Only face-to-face instruction",
            "Printed learning materials only"
        ],
        correct: 1,
        explanation: "MOOCs are designed to provide online learning opportunities for thousands of learners simultaneously through the Internet without the limitations of physical classrooms."
    },
    {
        question: "A teacher uploads lessons, conducts quizzes, records grades and facilitates discussions through a single online platform. Which platform is most suitable?",
        options: [
            "Moodle",
            "Paint",
            "Notepad",
            "Calculator"
        ],
        correct: 0,
        explanation: "Moodle is a Learning Management System that enables teachers to manage courses, assignments, quizzes, grades, discussions and learning resources from one platform."
    },
    {
        question: "Which of the following is the primary objective of Educational Technology?",
        options: [
            "Replacing teachers with computers",
            "Enhancing teaching-learning through systematic use of resources and methods",
            "Conducting only online examinations",
            "Increasing the number of textbooks"
        ],
        correct: 1,
        explanation: "Educational Technology aims to improve teaching and learning by systematically applying appropriate methods, media, instructional strategies and technological resources for better outcomes."
    },
    {
        question: "In classroom communication, the use of animation, narration, graphics and video together mainly improves",
        options: [
            "Printer speed",
            "Multisensory learning",
            "Keyboard efficiency",
            "Hard disk capacity"
        ],
        correct: 1,
        explanation: "Combining text, audio, animation, graphics and video stimulates multiple senses simultaneously, improving learner engagement, understanding, memory retention and overall learning effectiveness."
    },
    {
        question: "DIKSHA platform primarily supports teachers by providing",
        options: [
            "Banking services",
            "Digital teaching-learning resources and professional development",
            "Social networking only",
            "Computer programming software"
        ],
        correct: 1,
        explanation: "DIKSHA provides teachers with digital textbooks, lesson plans, assessments, QR-based resources, training courses and professional development opportunities to enhance classroom teaching."
    },
    {
        question: "Which of the following is NOT an essential characteristic of Educational Technology?",
        options: [
            "Goal-oriented instruction",
            "Systematic planning",
            "Scientific approach",
            "Memorization without feedback"
        ],
        correct: 3,
        explanation: "Educational Technology emphasizes systematic planning, scientific methods, learner interaction and continuous feedback. Memorization without feedback does not support effective learning or improvement."
    },
    {
        question: "ఒక విద్యార్థి తన వృత్తి ఎంపికపై అయోమయంలో ఉన్నాడు. అతని ఆసక్తులు, సామర్థ్యాలు, విలువలను విశ్లేషించి సరైన నిర్ణయం తీసుకునేందుకు సహాయపడే సేవ ఏది?",
        options: [
            "మూల్యాంకనం",
            "కౌన్సెలింగ్ (Counselling)",
            "పర్యవేక్షణ",
            "శిక్షణ"
        ],
        correct: 1,
        explanation: "కౌన్సెలింగ్ వ్యక్తి ఆసక్తులు, సామర్థ్యాలు, విలువలు మరియు వ్యక్తిగత లక్ష్యాలను విశ్లేషించి స్వతంత్రంగా సరైన విద్యా లేదా వృత్తి నిర్ణయం తీసుకునేలా సహాయపడుతుంది."
    },
    {
        question: "భావోద్వేగ మేధస్సు (Emotional Intelligence)లో క్రింది వాటిలో ఏది ప్రధాన భాగం కాదు?",
        options: [
            "స్వీయ అవగాహన",
            "స్వీయ నియంత్రణ",
            "సామాజిక నైపుణ్యాలు",
            "యాంత్రిక జ్ఞాపకశక్తి"
        ],
        correct: 3,
        explanation: "భావోద్వేగ మేధస్సులో స్వీయ అవగాహన, స్వీయ నియంత్రణ, ప్రేరణ, సానుభూతి మరియు సామాజిక నైపుణ్యాలు ఉంటాయి. యాంత్రిక జ్ఞాపకశక్తి దీనిలో భాగం కాదు."
    },
    {
        question: "సమగ్ర విద్యలో ఉపాధ్యాయుడు బోధనను విద్యార్థుల వ్యక్తిగత అవసరాలకు అనుగుణంగా మార్చడం ఏ సూత్రాన్ని ప్రతిబింబిస్తుంది?",
        options: [
            "సమాన బోధన",
            "వ్యక్తిగత భేదాలకు గౌరవం",
            "పోటీ ఆధారిత బోధన",
            "ప్రమాణీకృత బోధన"
        ],
        correct: 1,
        explanation: "సమగ్ర విద్య ప్రతి విద్యార్థి ప్రత్యేక అవసరాలను గుర్తించి, వ్యక్తిగత భేదాలను గౌరవిస్తూ బోధన, వనరులు మరియు వ్యూహాలను అనుకూలపరచడాన్ని ప్రోత్సహిస్తుంది."
    },
    {
        question: "Choose the correct phrasal verb.\n\nThe principal asked the committee to ______ the complaint carefully.",
        options: [
            "look into",
            "call off",
            "put away",
            "give up"
        ],
        correct: 0,
        explanation: "The phrasal verb 'look into' means to investigate or examine something carefully. It fits the context of examining a complaint before taking action."
    },
    {
        question: 'Choose the correct synonym of "Diligent."',
        options: [
            "Lazy",
            "Careless",
            "Hardworking",
            "Proud"
        ],
        correct: 2,
        explanation: "The word 'Diligent' describes someone who works carefully, consistently and with great effort. 'Hardworking' is its closest synonym among the given choices."
    },
    {
        question: 'Choose the correct idiom.\n\n"Burn the midnight oil" means',
        options: [
            "Waste electricity",
            "Work or study late into the night",
            "Sleep early",
            "Travel at night"
        ],
        correct: 1,
        explanation: "The idiom 'burn the midnight oil' refers to studying or working late into the night, usually to complete important tasks or prepare for examinations."
    },
    {
        question: "Choose the correct one-word substitution.\n\nOne who studies the origin of words",
        options: [
            "Archaeologist",
            "Lexicographer",
            "Etymologist",
            "Philatelist"
        ],
        correct: 2,
        explanation: "An etymologist studies the origin, historical development and evolution of words. A lexicographer compiles dictionaries, while the other options refer to different fields."
    },
    {
        question: 'Choose the correct synonym of "Transparent."',
        options: [
            "Opaque",
            "Clear",
            "Rough",
            "Narrow"
        ],
        correct: 1,
        explanation: "The word 'Transparent' means allowing light to pass through so objects can be seen clearly. Therefore, 'Clear' is the correct synonym."
    },
    {
        question: "Open Educational Resources (OER) are primarily intended to",
        options: [
            "Restrict access to educational content",
            "Promote free access, reuse and adaptation of learning resources",
            "Replace classroom teaching completely",
            "Provide only paid certification"
        ],
        correct: 1,
        explanation: "Open Educational Resources are openly licensed learning materials that encourage free access, adaptation, reuse and sharing to improve educational opportunities for everyone."
    },
    {
        question: "Which ICT platform is specifically developed by the Government of India to support digital school education?",
        options: [
            "Moodle",
            "Coursera",
            "DIKSHA",
            "Blackboard"
        ],
        correct: 2,
        explanation: "DIKSHA is the Government of India's national digital infrastructure for school education, providing e-content, teacher training, assessments and QR-enabled learning resources."
    },
    {
        question: "Which of the following best defines Educational Technology?",
        options: [
            "Teaching only through computers",
            "Scientific application of methods, media and resources to improve learning",
            "Replacing teachers with digital devices",
            "Conducting examinations online"
        ],
        correct: 1,
        explanation: "Educational Technology applies scientific principles, instructional methods, media and technological resources systematically to improve teaching effectiveness and enhance student learning outcomes."
    },
    {
        question: "A teacher asks students to watch an instructional video, participate in an online discussion and submit assignments digitally. This approach mainly promotes",
        options: [
            "Passive learning",
            "ICT-enriched learning",
            "Mechanical memorization",
            "Printed instruction"
        ],
        correct: 1,
        explanation: "ICT-enriched learning integrates digital technologies such as videos, online discussions and electronic assignments to create interactive, collaborative and engaging learning experiences."
    },
    {
        question: "Which of the following is an example of a Massive Open Online Course (MOOC)?",
        options: [
            "SWAYAM",
            "MS Paint",
            "Windows Explorer",
            "Adobe Reader"
        ],
        correct: 0,
        explanation: "SWAYAM is India's official Massive Open Online Course platform that provides free online courses from schools to higher education through the Internet."
    },
    {
        question: "Which feature of Moodle helps teachers continuously monitor student learning?",
        options: [
            "Attendance register only",
            "Gradebook and quiz reports",
            "Screen resolution",
            "File compression"
        ],
        correct: 1,
        explanation: "Moodle's Gradebook and quiz reports allow teachers to monitor learner performance, analyze progress, identify learning gaps and provide timely academic feedback."
    },
    {
        question: "Educational multimedia becomes most effective when",
        options: [
            "Only text is presented",
            "Multiple media are integrated according to learning objectives",
            "Only animation is used",
            "Audio is completely avoided"
        ],
        correct: 1,
        explanation: "Educational multimedia is most effective when text, audio, images, animation and video are purposefully combined to support instructional objectives and learner understanding."
    },
    {
        question: "Which statement best reflects the purpose of ICT integration in education?",
        options: [
            "To reduce teacher-student interaction",
            "To improve learning experiences through appropriate technology",
            "To eliminate classroom teaching",
            "To replace textbooks permanently"
        ],
        correct: 1,
        explanation: "ICT integration aims to enrich teaching and learning through appropriate digital technologies, improving engagement, collaboration, accessibility and overall educational outcomes without replacing teachers."
    }
];