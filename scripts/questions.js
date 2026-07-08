const SUBJECTS = [
    "Psychology",
    "English",
    "Special Education"
];

const QUESTIONS = [
    {
        question: "విద్యార్థి అభ్యసన పురోగతిని నిరంతరం గమనించి, వెంటనే బోధనలో మార్పులు చేయడానికి అత్యంత అనుకూలమైన మూల్యాంకనం ఏది?",
        options: [
            "సమాపన మూల్యాంకనం (Summative Assessment)",
            "నిర్మాణాత్మక మూల్యాంకనం (Formative Assessment)",
            "ప్రమాణీకృత పరీక్ష (Standardized Test)",
            "సాధన పరీక్ష (Achievement Test)"
        ],
        correct: 1,
        explanation: "నిర్మాణాత్మక మూల్యాంకనం బోధన జరుగుతున్న సమయంలోనే విద్యార్థుల అభ్యసన లోపాలను గుర్తించి, తక్షణ ప్రతిస్పందనతో బోధనను సవరించి అభ్యసన నాణ్యతను మెరుగుపరచడానికి ఉపయోగపడుతుంది."
    },
    {
        question: "కొలత (Measurement) మరియు మూల్యాంకనం (Evaluation) గురించి క్రింది వాటిలో సరైనది ఏది?",
        options: [
            "రెండూ ఒకే అర్థాన్ని సూచిస్తాయి.",
            "మూల్యాంకనం సంఖ్యాత్మక సమాచారం మాత్రమే అందిస్తుంది.",
            "కొలత పరిమాణాత్మక సమాచారం ఇస్తుంది; మూల్యాంకనం విలువ నిర్ణయాన్ని కూడా కలిగి ఉంటుంది.",
            "మూల్యాంకనం లేకుండా కొలత సాధ్యం కాదు."
        ],
        correct: 2,
        explanation: "కొలత విద్యార్థి ప్రదర్శనను సంఖ్యల రూపంలో తెలియజేస్తుంది. మూల్యాంకనం ఆ సమాచారాన్ని విశ్లేషించి విద్యా లక్ష్యాలు ఎంతవరకు సాధించబడ్డాయో విలువ నిర్ణయం చేస్తుంది."
    },
    {
        question: "ఒక ఉపాధ్యాయుడు ప్రతి పాఠం అనంతరం చిన్న ప్రశ్నల ద్వారా విద్యార్థుల అవగాహనను పరీక్షించి, మరుసటి రోజు బోధనను మార్చుతున్నాడు. ఇది ఏ మూల్యాంకనానికి ఉదాహరణ?",
        options: [
            "సమాపన మూల్యాంకనం",
            "నిర్మాణాత్మక మూల్యాంకనం",
            "ప్రవేశ పరీక్ష",
            "నిర్ధారణ పరీక్ష"
        ],
        correct: 1,
        explanation: "పాఠం తర్వాత వెంటనే అభ్యసన స్థాయిని తెలుసుకొని తదుపరి బోధనను మార్చడం నిర్మాణాత్మక మూల్యాంకనానికి ముఖ్య లక్షణం. దీని ఉద్దేశ్యం అభ్యసనాన్ని మెరుగుపరచడం."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి.\n\n(a) కొలత ఎల్లప్పుడూ సంఖ్యాత్మక ఫలితాన్ని ఇస్తుంది.\n(b) మూల్యాంకనం గుణాత్మక మరియు పరిమాణాత్మక సమాచారాన్ని పరిగణిస్తుంది.\n\nసరైన సమాధానం:",
        options: [
            "(a) మాత్రమే సరైనది",
            "(b) మాత్రమే సరైనది",
            "(a), (b) రెండూ సరైనవి",
            "రెండూ తప్పు"
        ],
        correct: 2,
        explanation: "కొలతలో సంఖ్యాత్మక ఫలితాలు లభిస్తాయి. మూల్యాంకనం మాత్రం సంఖ్యలతో పాటు గుణాత్మక అంశాలను కూడా పరిగణనలోకి తీసుకొని సమగ్ర నిర్ణయం చేస్తుంది."
    },
    {
        question: "క్రింది వాటిలో మూల్యాంకనం (Evaluation) యొక్క ప్రధాన ఉద్దేశ్యం ఏది?",
        options: [
            "మార్కులను నమోదు చేయడం",
            "విద్యార్థులను ర్యాంక్ చేయడం",
            "విద్యా లక్ష్యాలు ఎంతవరకు సాధించబడ్డాయో నిర్ణయించడం",
            "పరీక్ష నిర్వహించడం"
        ],
        correct: 2,
        explanation: "మూల్యాంకనం కేవలం మార్కులను నమోదు చేయడం కాదు. విద్యార్థులు నిర్దేశించిన విద్యా లక్ష్యాలను ఎంతవరకు సాధించారో విశ్లేషించి నిర్ణయించడం దీని ప్రధాన ఉద్దేశ్యం."
    },
    {
        question: "నిరంతర సమగ్ర మూల్యాంకనం (CCE) యొక్క ప్రధాన లక్షణం ఏది?",
        options: [
            "వార్షిక పరీక్షలకు మాత్రమే ప్రాధాన్యం ఇవ్వడం",
            "విద్యార్థి విద్యా మరియు సహవిద్యా అభివృద్ధిని సమగ్రంగా అంచనా వేయడం",
            "కేవలం లిఖిత పరీక్షల ఆధారంగా మూల్యాంకనం చేయడం",
            "సంవత్సరాంతంలో మాత్రమే మూల్యాంకనం నిర్వహించడం"
        ],
        correct: 1,
        explanation: "CCE విద్యార్థి విద్యా, సహవిద్యా, వ్యక్తిత్వ అభివృద్ధిని నిరంతరంగా పరిశీలించి సమగ్రంగా మూల్యాంకనం చేస్తుంది. ఇది ఒక్క పరీక్షపై ఆధారపడదు."
    },
    {
        question: "క్రింది వాటిలో సమాపన మూల్యాంకనం (Summative Assessment) కు సరైన ఉదాహరణ ఏది?",
        options: [
            "తరగతి గది పరిశీలన",
            "యూనిట్ అనంతర చర్చ",
            "వార్షిక పరీక్ష",
            "గృహపని పరిశీలన"
        ],
        correct: 2,
        explanation: "సమాపన మూల్యాంకనం బోధన పూర్తయిన తర్వాత నిర్వహించబడుతుంది. వార్షిక పరీక్ష విద్యార్థి మొత్తం అభ్యసన ఫలితాన్ని అంచనా వేయడానికి నిర్వహించే పరీక్ష."
    },
    {
        question: "క్రింది వాటిలో కొలత (Measurement) యొక్క లక్షణం కానిది ఏది?",
        options: [
            "పరిమాణాత్మక సమాచారం అందిస్తుంది",
            "సంఖ్యాత్మక ఫలితాన్ని ఇస్తుంది",
            "విలువ నిర్ణయాన్ని కలిగి ఉంటుంది",
            "ప్రమాణాలతో పోల్చవచ్చు"
        ],
        correct: 2,
        explanation: "కొలత సంఖ్యలు మరియు పరిమాణాత్మక సమాచారాన్ని మాత్రమే అందిస్తుంది. విలువ నిర్ణయం చేయడం మూల్యాంకన లక్షణం కానీ కొలత లక్షణం కాదు."
    },
    {
        question: "ఒక విద్యార్థి గణితంలో 40/50 మార్కులు సాధించాడు. \"అతని గణిత నైపుణ్యం సంతృప్తికరంగా ఉంది\" అని ఉపాధ్యాయుడు వ్యాఖ్యానించాడు.\n\n40/50 అనేది ________, \"సంతృప్తికరంగా ఉంది\" అనేది ________.",
        options: [
            "మూల్యాంకనం, కొలత",
            "కొలత, మూల్యాంకనం",
            "పరీక్ష, పరిశీలన",
            "పరిశీలన, పరీక్ష"
        ],
        correct: 1,
        explanation: "40/50 మార్కులు సంఖ్యాత్మక కొలతను సూచిస్తాయి. ఆ మార్కుల ఆధారంగా 'సంతృప్తికరంగా ఉంది' అనే విలువ నిర్ణయం చేయడం మూల్యాంకనం అవుతుంది."
    },
    {
        question: "క్రింది వాటిలో నిర్మాణాత్మక మూల్యాంకనం (Formative Assessment) యొక్క ముఖ్య ఉద్దేశ్యం ఏది?",
        options: [
            "విద్యార్థులకు గ్రేడ్ ఇవ్వడం",
            "అభ్యసన లోపాలను గుర్తించి తక్షణ మెరుగుదలకు సహాయపడడం",
            "పదోన్నతి నిర్ణయించడం",
            "విద్యార్థులను వర్గీకరించడం"
        ],
        correct: 1,
        explanation: "నిర్మాణాత్మక మూల్యాంకనం అభ్యసనలో ఉన్న లోపాలను గుర్తించి వెంటనే సవరణ చర్యలు చేపట్టేందుకు ఉపాధ్యాయుడు మరియు విద్యార్థికి ఉపయోగకరమైన ప్రతిస్పందనను అందిస్తుంది."
    },
    {
        question: "ఒక ఉపాధ్యాయుడు విద్యార్థుల ప్రవర్తన, పాల్గొనడం, నాయకత్వ లక్షణాలను రోజువారీ పరిశీలన ద్వారా నమోదు చేస్తున్నాడు. ఈ మూల్యాంకన సాధనం ఏది?",
        options: [
            "రేటింగ్ స్కేలు (Rating Scale)",
            "ప్రశ్నాపత్రం",
            "సాధన పరీక్ష",
            "ప్రమాణీకృత పరీక్ష"
        ],
        correct: 0,
        explanation: "రేటింగ్ స్కేలు ద్వారా విద్యార్థుల ప్రవర్తన, పాల్గొనడం, నాయకత్వం, సహకారం వంటి లక్షణాలను క్రమబద్ధంగా పరిశీలించి వివిధ స్థాయిలలో అంచనా వేయడం సాధ్యమవుతుంది."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి.\n\n(a) పరీక్ష (Test) అనేది సమాచార సేకరణకు ఉపయోగించే ఒక సాధనం.\n(b) మూల్యాంకనం (Evaluation) అనేది పరీక్ష కంటే విస్తృతమైన ప్రక్రియ.\n\nసరైన సమాధానం:",
        options: [
            "(a) మాత్రమే",
            "(b) మాత్రమే",
            "(a), (b) రెండూ",
            "రెండూ తప్పు"
        ],
        correct: 2,
        explanation: "పరీక్ష అనేది విద్యార్థి పనితీరుకు సంబంధించిన సమాచారాన్ని సేకరించే సాధనం మాత్రమే. మూల్యాంకనం పరీక్షతో పాటు ఇతర ఆధారాలను ఉపయోగించి సమగ్ర విలువ నిర్ణయం చేస్తుంది."
    },
    {
        question: "ఒక పాఠశాలలో ఉపాధ్యాయుడు విద్యార్థుల ప్రాజెక్టులు, తరగతి కార్యకలాపాలు, గృహపనులు, మౌఖిక ప్రతిస్పందనలు అన్నింటినీ పరిగణనలోకి తీసుకొని అభ్యసనాన్ని అంచనా వేస్తున్నాడు. ఇది ఏ విధానానికి అనుగుణం?",
        options: [
            "సమాపన మూల్యాంకనం",
            "నిరంతర సమగ్ర మూల్యాంకనం (CCE)",
            "ప్రవేశ పరీక్ష",
            "ప్రమాణ పరీక్ష"
        ],
        correct: 1,
        explanation: "CCEలో ప్రాజెక్టులు, తరగతి కార్యకలాపాలు, గృహపనులు, మౌఖిక ప్రతిస్పందనలు వంటి అనేక ఆధారాల ద్వారా విద్యార్థి అభ్యసనాన్ని నిరంతరంగా మరియు సమగ్రంగా అంచనా వేస్తారు."
    },
    {
        question: "క్రింది వాటిలో ఏది కొలత (Measurement) యొక్క లక్ష్యం?",
        options: [
            "విద్యార్థి విలువలను నిర్ణయించడం",
            "విద్యార్థి సాధనను సంఖ్యల రూపంలో తెలియజేయడం",
            "బోధనా పద్ధతిని నిర్ణయించడం",
            "పాఠ్యాంశాన్ని రూపొందించడం"
        ],
        correct: 1,
        explanation: "కొలత యొక్క ప్రధాన లక్ష్యం విద్యార్థి సాధనను సంఖ్యలు లేదా స్కోర్ల రూపంలో వ్యక్తపరచడం. ఇది విలువ నిర్ణయం చేయకుండా పరిమాణాత్మక సమాచారాన్ని మాత్రమే అందిస్తుంది."
    },
    {
        question: "సమాపన మూల్యాంకనం ప్రధానంగా దేనికి ఉపయోగపడుతుంది?",
        options: [
            "బోధనలో తక్షణ మార్పులకు",
            "అభ్యసన లోపాలను వెంటనే సరిదిద్దడానికి",
            "అభ్యసన ఫలితాలను ధృవీకరించడానికి",
            "విద్యార్థి ఆసక్తులను గుర్తించడానికి"
        ],
        correct: 2,
        explanation: "సమాపన మూల్యాంకనం బోధన పూర్తైన తరువాత నిర్వహించబడుతుంది. ఇది విద్యార్థి సాధించిన అభ్యసన ఫలితాలను ధృవీకరించి గ్రేడ్ లేదా ప్రమోషన్ నిర్ణయాలకు ఉపయోగపడుతుంది."
    },
    {
        question: "క్రింది వాటిలో నిర్ధారణ మూల్యాంకనం (Diagnostic Assessment) యొక్క ప్రధాన ఉద్దేశ్యం ఏది?",
        options: [
            "తుది గ్రేడ్ ఇవ్వడం",
            "అభ్యసన లోపాల కారణాలను గుర్తించడం",
            "విద్యార్థులను ర్యాంక్ చేయడం",
            "పాఠశాల పనితీరును అంచనా వేయడం"
        ],
        correct: 1,
        explanation: "నిర్ధారణ మూల్యాంకనం విద్యార్థి అభ్యసనంలో ఉన్న లోపాలు, వాటి కారణాలను గుర్తించి తగిన సవరణ బోధన అందించడానికి ఉపయోగించే ముఖ్యమైన ప్రక్రియ."
    },
    {
        question: "క్రింది జతలలో సరైనది ఏది?",
        options: [
            "కొలత — విలువ నిర్ణయం",
            "మూల్యాంకనం — సంఖ్యాత్మక సమాచారం మాత్రమే",
            "పరీక్ష — సమాచార సేకరణ సాధనం",
            "CCE — వార్షిక పరీక్ష మాత్రమే"
        ],
        correct: 2,
        explanation: "పరీక్ష అనేది విద్యార్థి అభ్యసనానికి సంబంధించిన సమాచారాన్ని సేకరించే సాధనం. ఇది మూల్యాంకన ప్రక్రియలో భాగం మాత్రమే, పూర్తి మూల్యాంకనం కాదు."
    },
    {
        question: "ఒక ఉపాధ్యాయుడు ప్రతి వారాంతంలో చిన్న పరీక్ష నిర్వహించి, ఫలితాల ఆధారంగా తదుపరి బోధన ప్రణాళికను రూపొందిస్తున్నాడు. ఇది ఏ సూత్రాన్ని ప్రతిబింబిస్తుంది?",
        options: [
            "సమాపన మూల్యాంకనం",
            "నిర్మాణాత్మక మూల్యాంకనం",
            "ప్రమాణ పరీక్ష",
            "ఎంపిక పరీక్ష"
        ],
        correct: 1,
        explanation: "చిన్న పరీక్షల ఫలితాలను ఉపయోగించి తదుపరి బోధనలో మార్పులు చేయడం నిర్మాణాత్మక మూల్యాంకనానికి ముఖ్య లక్షణం. దీని ద్వారా అభ్యసనాన్ని నిరంతరం మెరుగుపరచవచ్చు."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి.\n\n(a) CCEలో విద్యార్థి సహపాఠ్య కార్యకలాపాలకు కూడా ప్రాధాన్యం ఉంటుంది.\n(b) CCEలో కేవలం లిఖిత పరీక్షల ఆధారంగానే మూల్యాంకనం జరుగుతుంది.\n\nసరైన సమాధానం:",
        options: [
            "(a) మాత్రమే",
            "(b) మాత్రమే",
            "రెండూ సరైనవి",
            "రెండూ తప్పు"
        ],
        correct: 0,
        explanation: "CCEలో విద్యార్థి విద్యా మరియు సహపాఠ్య అభివృద్ధి రెండింటినీ పరిగణనలోకి తీసుకుంటారు. కేవలం లిఖిత పరీక్షల ఆధారంగా మాత్రమే మూల్యాంకనం జరగదు."
    },
    {
        question: "క్రింది వాటిలో మూల్యాంకనం (Evaluation) యొక్క అత్యంత సమగ్ర నిర్వచనం ఏది?",
        options: [
            "పరీక్ష నిర్వహించడం",
            "మార్కులు కేటాయించడం",
            "కొలత ఆధారంగా విద్యార్థి సాధనపై విలువ నిర్ణయం చేయడం",
            "ప్రశ్నాపత్రం రూపొందించడం"
        ],
        correct: 2,
        explanation: "మూల్యాంకనం అనేది కొలత ద్వారా పొందిన సమాచారాన్ని విశ్లేషించి విద్యార్థి సాధన, పురోగతి మరియు విద్యా లక్ష్యాల సాధనపై విలువ నిర్ణయం చేసే సమగ్ర ప్రక్రియ."
    },
    {
        question: "Choose the correct passive voice of the following sentence.\n\nThe teacher praised the student.",
        options: [
            "The student has been praised by the teacher.",
            "The student was praised by the teacher.",
            "The student is praised by the teacher.",
            "The student had praised by the teacher."
        ],
        correct: 1,
        explanation: "The sentence is in the Simple Past tense. The passive voice follows the pattern 'was/were + past participle'. Therefore, 'The student was praised by the teacher' is the correct answer."
    },
    {
        question: "Choose the correct indirect speech.\n\nRavi said, \"I am preparing for APTET.\"",
        options: [
            "Ravi said that I was preparing for APTET.",
            "Ravi said that he was preparing for APTET.",
            "Ravi said that he is preparing for APTET.",
            "Ravi told that he was preparing for APTET."
        ],
        correct: 1,
        explanation: "In reported speech, the pronoun 'I' changes to 'he' and the present tense 'am' changes to the past tense 'was'. Hence option B is correct."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "Each of the boys have completed the work.",
            "Each of the boys has completed the work.",
            "Each of the boys were completed the work.",
            "Each of the boys are completed the work."
        ],
        correct: 1,
        explanation: "The subject 'Each' is singular even though it refers to many boys. Therefore, it always takes a singular verb, making 'has completed' grammatically correct."
    },
    {
        question: "Choose the correct passive form.\n\nPeople speak Telugu in Andhra Pradesh.",
        options: [
            "Telugu is spoken in Andhra Pradesh.",
            "Telugu was spoken in Andhra Pradesh.",
            "Telugu has spoken in Andhra Pradesh.",
            "Telugu speaks in Andhra Pradesh."
        ],
        correct: 0,
        explanation: "The sentence is in the Simple Present tense. Its passive voice is formed using 'is/am/are + past participle', giving 'Telugu is spoken in Andhra Pradesh'."
    },
    {
        question: "Choose the correct indirect speech.\n\nThe teacher said to the students, \"Work hard.\"",
        options: [
            "The teacher advised the students to work hard.",
            "The teacher advised the students that work hard.",
            "The teacher told the students work hard.",
            "The teacher asked the students worked hard."
        ],
        correct: 0,
        explanation: "Imperative sentences are generally reported using verbs like advised, told, or ordered followed by 'to + base verb'. Therefore, option A is grammatically correct."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "By next June, she will complete the course.",
            "By next June, she will have completed the course.",
            "By next June, she completed the course.",
            "By next June, she has completed the course."
        ],
        correct: 1,
        explanation: "The Future Perfect tense expresses an action that will be completed before a specified future time. The correct form is 'will have completed'."
    },
    {
        question: "Choose the correct passive voice.\n\nSomeone has stolen my bicycle.",
        options: [
            "My bicycle has stolen.",
            "My bicycle has been stolen.",
            "My bicycle had been stolen.",
            "My bicycle was stolen."
        ],
        correct: 1,
        explanation: "The sentence is in the Present Perfect tense. The passive voice is formed with 'has/have been + past participle', making option B the correct answer."
    },
    {
        question: "Choose the correct indirect speech.\n\nShe said, \"I have finished my homework.\"",
        options: [
            "She said that she had finished her homework.",
            "She said that she has finished her homework.",
            "She said that I had finished my homework.",
            "She told that she had finished her homework."
        ],
        correct: 0,
        explanation: "In reported speech, the Present Perfect tense changes to the Past Perfect tense. Pronouns also change appropriately, resulting in option A."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "Neither of the answers are correct.",
            "Neither of the answers were correct.",
            "Neither of the answers is correct.",
            "Neither of the answers have been correct."
        ],
        correct: 2,
        explanation: "The subject 'Neither' is treated as singular in standard English and therefore requires the singular verb 'is', making option C grammatically correct."
    },
    {
        question: "Choose the correct tense.\n\nWhen I reached the station, the train ________.",
        options: [
            "leaves",
            "has left",
            "had left",
            "will leave"
        ],
        correct: 2,
        explanation: "The Past Perfect tense describes an action completed before another action in the past. Since reaching the station happened later, 'had left' is correct."
    },
    {
        question: "Choose the correct passive voice.\n\nWho wrote this novel?",
        options: [
            "By whom was this novel written?",
            "By whom this novel was written?",
            "Who was this novel written by?",
            "This novel was written by whom?"
        ],
        correct: 0,
        explanation: "Interrogative sentences beginning with 'Who' change to passive using 'By whom was + object + past participle'. Therefore, 'By whom was this novel written?' is the correct passive form."
    },
    {
        question: "Choose the correct indirect speech.\n\nThe teacher said, \"The Earth revolves around the Sun.\"",
        options: [
            "The teacher said that the Earth revolved around the Sun.",
            "The teacher said that the Earth revolves around the Sun.",
            "The teacher said that the Earth has revolved around the Sun.",
            "The teacher said that the Earth had revolved around the Sun."
        ],
        correct: 1,
        explanation: "Universal truths and scientific facts do not undergo tense changes in reported speech. Therefore, the present tense 'revolves' remains unchanged in the indirect speech."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "If I knew the answer, I will tell you.",
            "If I know the answer, I would tell you.",
            "If I knew the answer, I would tell you.",
            "If I had known the answer, I would tell you."
        ],
        correct: 2,
        explanation: "The Second Conditional expresses unreal or imaginary situations in the present. It follows the structure: 'If + Past Simple, would + base verb', making option C correct."
    },
    {
        question: "Choose the correct passive voice.\n\nThey are repairing the bridge.",
        options: [
            "The bridge is repaired.",
            "The bridge is being repaired.",
            "The bridge has been repaired.",
            "The bridge was being repaired."
        ],
        correct: 1,
        explanation: "The sentence is in the Present Continuous tense. Its passive voice is formed using 'is/am/are being + past participle', resulting in 'The bridge is being repaired'."
    },
    {
        question: "Choose the correct indirect speech.\n\nMother said to her son, \"Do not waste your time.\"",
        options: [
            "Mother advised her son not to waste his time.",
            "Mother advised her son to not wasted his time.",
            "Mother said that her son should not wasted time.",
            "Mother told her son don't waste time."
        ],
        correct: 0,
        explanation: "Negative imperative sentences are reported using 'advised/told + object + not to + base verb'. Hence, 'Mother advised her son not to waste his time' is correct."
    },
    {
        question: "క్రింది వాటిలో ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) యొక్క ప్రధాన లక్షణం ఏది?",
        options: [
            "నిరంతరం జ్వరంతో బాధపడటం",
            "సామాజిక పరస్పర చర్యలు మరియు సంభాషణలో లోపాలు",
            "కేవలం దృష్టి లోపం ఉండటం",
            "కేవలం వినికిడి లోపం ఉండటం"
        ],
        correct: 1,
        explanation: "ASD ఉన్న పిల్లల్లో ప్రధానంగా సామాజిక పరస్పర చర్యలు, కమ్యూనికేషన్ నైపుణ్యాలు మరియు ప్రవర్తనలో పరిమిత లేదా పునరావృత నమూనాలు కనిపిస్తాయి. ఇవే ప్రధాన నిర్ధారణ లక్షణాలు."
    },
    {
        question: "ఒక విద్యార్థి ఉపాధ్యాయుడు చెప్పిన చివరి పదాలను అర్థం లేకుండా పదేపదే పునరావృతం చేస్తున్నాడు. ఈ లక్షణాన్ని ఏమంటారు?",
        options: [
            "స్టీరియోటైపీ",
            "ఎకోలాలియా (Echolalia)",
            "ఎకోప్రాక్సియా",
            "డిస్ఫేసియా"
        ],
        correct: 1,
        explanation: "ఇతరులు చెప్పిన పదాలు లేదా వాక్యాలను అర్థం లేకుండా వెంటనే లేదా కొంత సమయం తర్వాత పునరావృతం చేయడాన్ని ఎకోలాలియా అంటారు. ఇది ASDలో సాధారణ లక్షణం."
    },
    {
        question: "IQ 35–49 ఉన్న విద్యార్థి ఏ మేధో వైకల్య వర్గానికి చెందినవాడు?",
        options: [
            "స్వల్ప మేధో వైకల్యం (Mild)",
            "మధ్యస్థ మేధో వైకల్యం (Moderate)",
            "తీవ్రమైన మేధో వైకల్యం (Severe)",
            "అత్యంత తీవ్రమైన మేధో వైకల్యం (Profound)"
        ],
        correct: 1,
        explanation: "సాంప్రదాయ IQ వర్గీకరణ ప్రకారం 35–49 IQ పరిధి మధ్యస్థ (Moderate) మేధో వైకల్యంగా పరిగణించబడుతుంది. వీరికి స్వతంత్ర జీవనానికి గణనీయమైన శిక్షణ అవసరం."
    },
    {
        question: "ఒక విద్యార్థి \"beautiful\" అనే పదాన్ని తరచూ \"beutiful\" లేదా \"butiful\" అని వ్రాస్తున్నాడు. ఇది ప్రధానంగా ఏ వైకల్యానికి సంకేతం?",
        options: [
            "మేధో వైకల్యం",
            "అభ్యాస వైకల్యం (Learning Disability)",
            "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్",
            "వినికిడి లోపం"
        ],
        correct: 1,
        explanation: "స్పెల్లింగ్, అక్షరాల క్రమం మరియు పదాలను సరైన విధంగా వ్రాయడంలో నిరంతర ఇబ్బందులు డిస్లెక్సియా వంటి అభ్యాస వైకల్యాలకు సాధారణ లక్షణాలుగా పరిగణించబడతాయి."
    },
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న విద్యార్థికి బోధనలో అత్యంత ప్రభావవంతమైన వ్యూహం ఏది?",
        options: [
            "ప్రతిరోజూ బోధనా పద్ధతిని పూర్తిగా మార్చడం",
            "దృశ్య సూచనలు, క్రమబద్ధమైన దినచర్య మరియు స్పష్టమైన సూచనలు ఉపయోగించడం",
            "మౌఖిక ఉపన్యాసం మాత్రమే ఇవ్వడం",
            "ఒకేసారి అనేక కార్యకలాపాలు ఇవ్వడం"
        ],
        correct: 1,
        explanation: "ASD విద్యార్థులు దృశ్య మద్దతు, స్థిరమైన దినచర్య, స్పష్టమైన సూచనలు మరియు నిర్మిత బోధన ద్వారా మెరుగైన అవగాహన, భాగస్వామ్యం మరియు అభ్యసన ఫలితాలను సాధిస్తారు."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి.\n\n(a) ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న ప్రతి విద్యార్థికి మేధో వైకల్యం ఉంటుంది.\n(b) ASD ఉన్న కొంతమంది విద్యార్థులు సాధారణ లేదా అధిక మేధస్సును కలిగి ఉండవచ్చు.\n\nసరైన సమాధానం ఏది?",
        options: [
            "(a) మాత్రమే సరైనది",
            "(b) మాత్రమే సరైనది",
            "రెండూ సరైనవి",
            "రెండూ తప్పు"
        ],
        correct: 1,
        explanation: "ASD మరియు మేధో వైకల్యం ఒకే పరిస్థితి కావు. కొంతమంది ASD విద్యార్థులకు సాధారణ లేదా అధిక మేధస్సు ఉండవచ్చు. అందువల్ల ప్రతి ASD విద్యార్థికి మేధో వైకల్యం ఉండాల్సిన అవసరం లేదు."
    },
    {
        question: "అభ్యాస వైకల్యం (Learning Disability) ఉన్న విద్యార్థిని గుర్తించడానికి ప్రారంభ దశలో అత్యంత ఉపయోగకరమైన పద్ధతి ఏది?",
        options: [
            "ఒక్కసారి నిర్వహించే వార్షిక పరీక్ష",
            "తరగతి గది పరిశీలన, నిరంతర మూల్యాంకనం మరియు సాధన విశ్లేషణ",
            "IQ పరీక్ష మాత్రమే",
            "వైద్య పరీక్ష మాత్రమే"
        ],
        correct: 1,
        explanation: "Learning Disability ప్రారంభ గుర్తింపులో తరగతి గది పరిశీలన, నిరంతర మూల్యాంకనం, విద్యార్థి పనితీరు విశ్లేషణ మరియు బహుళ ఆధారాలపై సమాచార సేకరణ అత్యంత ప్రభావవంతమైన పద్ధతి."
    },
    {
        question: "క్రింది వాటిలో మేధో వైకల్యం (Intellectual Disability) యొక్క ముఖ్య లక్షణం ఏది?",
        options: [
            "వినికిడి శక్తి తగ్గిపోవడం",
            "అనుకూల ప్రవర్తన (Adaptive Behaviour) మరియు మేధో సామర్థ్యంలో గణనీయమైన లోపం",
            "కేవలం చదవడంలో మాత్రమే ఇబ్బంది",
            "కేవలం మాట ఆలస్యంగా రావడం"
        ],
        correct: 1,
        explanation: "మేధో వైకల్యం అనేది మేధో సామర్థ్యం మరియు అనుకూల ప్రవర్తనలో గణనీయమైన లోపాలతో గుర్తించబడుతుంది. ఈ రెండు అంశాలు నిర్ధారణలో ప్రధాన ప్రమాణాలుగా పరిగణించబడతాయి."
    },
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న విద్యార్థికి కొత్త నైపుణ్యాన్ని బోధించేటప్పుడు ఉపాధ్యాయుడు మొదట చేయవలసినది ఏది?",
        options: [
            "ఒకేసారి అనేక నైపుణ్యాలు బోధించడం",
            "నైపుణ్యాన్ని చిన్న చిన్న దశలుగా విభజించి బోధించడం",
            "కేవలం మౌఖిక సూచనలు ఇవ్వడం",
            "పొరపాట్లు చేసినప్పుడల్లా శిక్షించడం"
        ],
        correct: 1,
        explanation: "Task Analysis ద్వారా క్లిష్టమైన నైపుణ్యాన్ని చిన్న చిన్న దశలుగా విభజించి క్రమంగా బోధించడం ASD విద్యార్థులకు అర్థం చేసుకోవడం మరియు నేర్చుకోవడం సులభతరం చేస్తుంది."
    },
    {
        question: "డిస్క్యాల్కులియా (Dyscalculia) ప్రధానంగా ఏ రంగంలో సమస్యను సూచిస్తుంది?",
        options: [
            "పఠనం",
            "గణిత నైపుణ్యాలు",
            "చేతిరాత",
            "ఉచ్చారణ"
        ],
        correct: 1,
        explanation: "Dyscalculia అనేది సంఖ్యల అవగాహన, గణనలు, గణిత భావనలు మరియు సమస్య పరిష్కారానికి సంబంధించిన ప్రత్యేక అభ్యాస వైకల్యం. ఇది ప్రధానంగా గణిత నైపుణ్యాలను ప్రభావితం చేస్తుంది."
    },
    {
        question: "మేధో వైకల్యం ఉన్న విద్యార్థికి వ్యక్తిగత విద్యా ప్రణాళిక (IEP) రూపొందించే ముందు అత్యంత ముఖ్యమైన దశ ఏది?",
        options: [
            "తల్లిదండ్రుల అభిప్రాయం లేకుండా లక్ష్యాలు నిర్ణయించడం",
            "సమగ్ర కార్యాత్మక మూల్యాంకనం (Comprehensive Functional Assessment)",
            "వార్షిక పరీక్ష మార్కులు మాత్రమే పరిశీలించడం",
            "తరగతి ఉపాధ్యాయుని అభిప్రాయం మాత్రమే తీసుకోవడం"
        ],
        correct: 1,
        explanation: "IEP విద్యార్థి వ్యక్తిగత అవసరాలు, సామర్థ్యాలు మరియు కార్యాత్మక పనితీరుపై ఆధారపడాలి. అందుకే సమగ్ర కార్యాత్మక మూల్యాంకనం IEP రూపకల్పనకు మొదటి మరియు ముఖ్యమైన దశ."
    },
    {
        question: "క్రింది వాటిలో Learning Disability ఉన్న విద్యార్థులకు అత్యంత అనుకూలమైన బోధనా విధానం ఏది?",
        options: [
            "ఒకే విధమైన ఉపన్యాస పద్ధతి",
            "బహుఇంద్రియ (Multisensory) బోధన",
            "గృహపని మాత్రమే",
            "కంఠస్థ పద్ధతి మాత్రమే"
        ],
        correct: 1,
        explanation: "Multisensory బోధనలో దృశ్య, శ్రవణ, స్పర్శ మరియు కదలిక ఆధారిత అనుభవాలను ఉపయోగిస్తారు. ఈ విధానం Learning Disability ఉన్న విద్యార్థుల అభ్యసనాన్ని గణనీయంగా మెరుగుపరుస్తుంది."
    },
    {
        question: "క్రింది జతలలో సరైనది ఏది?",
        options: [
            "Dyslexia — గణిత సమస్య",
            "Dysgraphia — రచనా నైపుణ్య సమస్య",
            "Dyscalculia — సామాజిక పరస్పర చర్య సమస్య",
            "Dyspraxia — చదవడంలో మాత్రమే సమస్య"
        ],
        correct: 1,
        explanation: "Dysgraphia ప్రధానంగా రచనా నైపుణ్యాలు, అక్షర నిర్మాణం, చేతిరాత మరియు వ్రాత వ్యక్తీకరణను ప్రభావితం చేస్తుంది. మిగతా జతలు సంబంధిత వైకల్యాలకు సరిపోవు."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి.\n\n(a) ASD ఉన్న విద్యార్థులందరికీ ఒకే విధమైన లక్షణాలు ఉంటాయి.\n(b) ASDలో లక్షణాల తీవ్రత వ్యక్తికి వ్యక్తికి భిన్నంగా ఉంటుంది.\n\nసరైన సమాధానం ఏది?",
        options: [
            "(a) మాత్రమే",
            "(b) మాత్రమే",
            "రెండూ సరైనవి",
            "రెండూ తప్పు"
        ],
        correct: 1,
        explanation: "Autism ఒక స్పెక్ట్రమ్ రుగ్మత. అందువల్ల లక్షణాల స్వభావం, తీవ్రత మరియు అవసరాలు వ్యక్తికి వ్యక్తికి మారుతూ ఉంటాయి. ప్రతి ASD విద్యార్థి ఒకే విధంగా ఉండరు."
    },
    {
        question: "ఒక Learning Disability ఉన్న విద్యార్థి పదేపదే అదే రకమైన చదవడం మరియు వ్రాయడంలో తప్పులు చేస్తున్నాడు. ఉపాధ్యాయుని మొదటి చర్య ఏమై ఉండాలి?",
        options: [
            "తక్కువ మార్కులు ఇవ్వడం",
            "తరగతి ముందు మందలించడం",
            "నిర్దిష్ట లోపాన్ని విశ్లేషించి తగిన పరిహార బోధన (Remedial Teaching) ప్రారంభించడం",
            "అదే పనిని ఎక్కువసార్లు కాపీ చేయించడం"
        ],
        correct: 2,
        explanation: "Learning Disabilityలో విద్యార్థి చేసిన నిర్దిష్ట లోపాలను విశ్లేషించి, వాటికి అనుగుణంగా లక్ష్యబద్ధమైన పరిహార బోధన అందించడం అత్యంత సమర్థవంతమైన మరియు శాస్త్రీయమైన విధానం."
    }
];