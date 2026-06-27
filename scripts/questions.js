const SUBJECTS = [
    "Child Development",
    "English",
    "Special Education",
    "Telugu"
];

const QUESTIONS = [
    {
        question: "గార్డ్నర్ యొక్క బహుళ మేధస్సుల సిద్ధాంతం (Multiple Intelligences Theory) ప్రకారం, ఒక విద్యార్థి సంగీతంలో అసాధారణ ప్రతిభ చూపుతూ గణితంలో సాధారణ స్థాయిలో ఉంటే, ఉపాధ్యాయుడు ఏ అంశాన్ని గుర్తించాలి?",
        options: [
            "అతని మొత్తం మేధస్సు తక్కువగా ఉంది",
            "మేధస్సు ఒకే సామర్థ్యంగా ఉంటుంది",
            "విద్యార్థిలో సంగీత మేధస్సు బలంగా అభివృద్ధి చెందింది",
            "అతనికి అభ్యసన వైకల్యం ఉంది"
        ],
        correct: 2,
        explanation: "గార్డ్నర్ ప్రకారం మేధస్సు ఒకే సామర్థ్యం కాదు. ప్రతి వ్యక్తిలో వివిధ రకాల మేధస్సులు వేర్వేరు స్థాయిలో అభివృద్ధి చెందుతాయి. సంగీతంలో ప్రతిభ ఉండటం సంగీత మేధస్సు బలంగా ఉన్నదని సూచిస్తుంది."
    },
    {
        question: "'G' కారకం (General Intelligence) అనే భావనను ప్రతిపాదించిన మనోవిజ్ఞాన శాస్త్రవేత్త ఎవరు?",
        options: [
            "థర్‌స్టోన్",
            "స్పీర్‌మన్",
            "స్టెర్న్‌బర్గ్",
            "గార్డ్నర్"
        ],
        correct: 1,
        explanation: "చార్లెస్ స్పీర్‌మన్ General Intelligence లేదా G-Factor సిద్ధాంతాన్ని ప్రతిపాదించాడు. అన్ని మేధో కార్యకలాపాలకు ఒక సాధారణ మేధస్సు ఆధారమని ఆయన అభిప్రాయపడ్డాడు."
    },
    {
        question: "థర్‌స్టోన్ ప్రకారం క్రింది వాటిలో ప్రాథమిక మానసిక సామర్థ్యం (Primary Mental Ability) కానిది ఏది?",
        options: [
            "పదజాల అవగాహన (Verbal Comprehension)",
            "సంఖ్యా సామర్థ్యం (Number Ability)",
            "సృజనాత్మక మేధస్సు (Creative Intelligence)",
            "స్థల అవగాహన (Spatial Ability)"
        ],
        correct: 2,
        explanation: "సృజనాత్మక మేధస్సు స్టెర్న్‌బర్గ్ త్రికోణ మేధస్సు సిద్ధాంతానికి చెందినది. థర్‌స్టోన్ ప్రతిపాదించిన ప్రాథమిక మానసిక సామర్థ్యాలలో ఇది ఉండదు."
    },
    {
        question: "స్టెర్న్‌బర్గ్ త్రికోణ మేధస్సు సిద్ధాంతంలో (Triarchic Theory) క్రింది వాటిలో ఏది భాగం?",
        options: [
            "భాషా మేధస్సు",
            "సంగీత మేధస్సు",
            "సృజనాత్మక మేధస్సు",
            "శారీరక-కైనస్థెటిక్ మేధస్సు"
        ],
        correct: 2,
        explanation: "స్టెర్న్‌బర్గ్ ప్రకారం మేధస్సు మూడు భాగాలుగా ఉంటుంది. అవి విశ్లేషణాత్మక, సృజనాత్మక మరియు ఆచరణాత్మక మేధస్సులు. సంగీత మేధస్సు గార్డ్నర్ సిద్ధాంతానికి చెందినది."
    },
    {
        question: "ఒక విద్యార్థి కొత్త సమాచారాన్ని తనకు ఇప్పటికే తెలిసిన జ్ఞాన నిర్మాణంలో కలిపి అర్థం చేసుకుంటున్నాడు. పియాజే ప్రకారం ఈ ప్రక్రియను ఏమంటారు?",
        options: [
            "Accommodation",
            "Assimilation",
            "Equilibration",
            "Adaptation"
        ],
        correct: 1,
        explanation: "ఇప్పటికే ఉన్న స్కీమా లేదా జ్ఞాన నిర్మాణంలో కొత్త సమాచారాన్ని కలిపి అర్థం చేసుకోవడాన్ని పియాజే Assimilation అని పేర్కొన్నాడు. ఇది జ్ఞాన వికాసంలో ముఖ్యమైన ప్రక్రియ."
    },
    {
        question: "వైగాట్స్కీ ప్రతిపాదించిన Zone of Proximal Development (ZPD) ప్రధానంగా దేనిని సూచిస్తుంది?",
        options: [
            "విద్యార్థి స్వయంగా చేయగలిగే పనులు మాత్రమే",
            "ఉపాధ్యాయుడు లేదా సహచరుల సహాయంతో చేయగలిగే పనులు",
            "IQ స్థాయిని",
            "శారీరక ఎదుగుదలను"
        ],
        correct: 1,
        explanation: "ZPD అనేది విద్యార్థి స్వయంగా చేయలేని కానీ ఉపాధ్యాయుడు లేదా సహచరుల సహాయంతో విజయవంతంగా పూర్తి చేయగలిగే అభ్యాస స్థాయిని సూచిస్తుంది."
    },
    {
        question: "Choose the correct article.\n\nHe is ____ honest man.",
        options: [
            "a",
            "an",
            "the",
            "no article"
        ],
        correct: 1,
        explanation: "The word 'honest' begins with a silent 'h', so its pronunciation starts with a vowel sound. Therefore, the correct article before it is 'an'."
    },
    {
        question: "Choose the correct preposition.\n\nShe has been waiting ____ two hours.",
        options: [
            "since",
            "from",
            "for",
            "at"
        ],
        correct: 2,
        explanation: "'For' is used to indicate a duration of time. Since 'two hours' refers to a period, the correct preposition is 'for'."
    },
    {
        question: "Choose the correct verb.\n\nEach of the students ____ present.",
        options: [
            "are",
            "were",
            "is",
            "have"
        ],
        correct: 2,
        explanation: "'Each' is always treated as a singular subject. Therefore, it requires a singular verb, making 'is' the grammatically correct answer."
    },
    {
        question: "Identify the sentence with the correct usage.",
        options: [
            "He insisted to go there.",
            "He insisted on going there.",
            "He insisted for going there.",
            "He insisted at going there."
        ],
        correct: 1,
        explanation: "The verb 'insist' is correctly followed by the preposition 'on' and a gerund. Hence, 'He insisted on going there' is the correct construction."
    },
    {
        question: "RPWD Act–2016 ప్రకారం Hearing Impairment కింద క్రింది వాటిలో ఏవి వస్తాయి?",
        options: [
            "Deaf మాత్రమే",
            "Hard of Hearing మాత్రమే",
            "Deaf మరియు Hard of Hearing",
            "Speech Disability మాత్రమే"
        ],
        correct: 2,
        explanation: "RPWD Act–2016 ప్రకారం Hearing Impairment వర్గంలో Deaf మరియు Hard of Hearing అనే రెండు ఉపవర్గాలు ఉంటాయి. రెండింటికీ చట్టపరమైన గుర్తింపు ఉంది."
    },
    {
        question: "26–40 dB వరకు వినికిడి లోపం ఉన్న వ్యక్తిని ఏ వర్గంలో వర్గీకరిస్తారు?",
        options: [
            "Moderate Hearing Loss",
            "Mild Hearing Loss",
            "Severe Hearing Loss",
            "Profound Hearing Loss"
        ],
        correct: 1,
        explanation: "26 నుండి 40 dB వరకు వినికిడి లోపం ఉన్న వ్యక్తిని Mild Hearing Loss వర్గంలో వర్గీకరిస్తారు. ఇది ప్రారంభ స్థాయి వినికిడి లోపంగా పరిగణించబడుతుంది."
    },
    {
        question: "వ్యక్తిగత విద్యా ప్రణాళిక (IEP)లో తప్పనిసరిగా ఉండాల్సిన అంశం ఏది?",
        options: [
            "సూచిక (Index)",
            "ముందుమాట (Foreword)",
            "విద్యార్థి లక్ష్యాలు (Goals)",
            "కథలు (Stories)"
        ],
        correct: 2,
        explanation: "IEP యొక్క ప్రధాన ఉద్దేశ్యం విద్యార్థికి వ్యక్తిగత అవసరాలకు అనుగుణంగా విద్యా లక్ష్యాలను రూపొందించడం. అందువల్ల Goals అనేవి తప్పనిసరిగా ఉండాల్సిన భాగం."
    },
    {
        question: "పియాజే ప్రకారం, 7–11 సంవత్సరాల మధ్య పిల్లలు ప్రధానంగా ఏ జ్ఞాన వికాస దశలో ఉంటారు?",
        options: [
            "సంచలన-చలన దశ (Sensorimotor Stage)",
            "పూర్వ కార్యదశ (Pre-operational Stage)",
            "స్థూల కార్యదశ (Concrete Operational Stage)",
            "సాంప్రదాయ కార్యదశ (Formal Operational Stage)"
        ],
        correct: 2,
        explanation: "పియాజే ప్రకారం 7 నుండి 11 సంవత్సరాల పిల్లలు Concrete Operational Stageలో ఉంటారు. ఈ దశలో వర్గీకరణ, సంరక్షణ, తార్కిక ఆలోచన వంటి నైపుణ్యాలు అభివృద్ధి చెందుతాయి."
    },
    {
        question: "వైగాట్స్కీ సిద్ధాంతంలో అభ్యసనాన్ని ప్రభావితం చేసే ముఖ్యమైన అంశం ఏది?",
        options: [
            "వారసత్వం మాత్రమే",
            "శారీరక పరిపక్వత మాత్రమే",
            "సామాజిక పరస్పర చర్య",
            "మేధస్సు పరీక్ష"
        ],
        correct: 2,
        explanation: "వైగాట్స్కీ ప్రకారం సామాజిక పరస్పర చర్య, భాష మరియు పెద్దల లేదా సహచరుల మార్గదర్శకత్వం అభ్యసనానికి ప్రధాన ఆధారాలు. అందువల్ల Social Interaction సరైన సమాధానం."
    },
    {
        question: "క్రింది వారిలో బహుళ మేధస్సుల (Multiple Intelligences) సిద్ధాంతాన్ని ప్రతిపాదించినవారు ఎవరు?",
        options: [
            "స్పీర్‌మన్",
            "గార్డ్నర్",
            "థర్‌స్టోన్",
            "బినే"
        ],
        correct: 1,
        explanation: "హోవర్డ్ గార్డ్నర్ బహుళ మేధస్సుల సిద్ధాంతాన్ని ప్రతిపాదించాడు. ప్రతి వ్యక్తిలో భాషా, సంగీత, తార్కిక, శారీరక వంటి అనేక మేధస్సులు వేర్వేరు స్థాయిలో అభివృద్ధి చెందుతాయని ఆయన వివరించాడు."
    },
    {
        question: "క్రింది వాటిలో ఉపాధ్యాయుడు విద్యార్థి యొక్క ప్రాక్టికల్ ఇంటెలిజెన్స్ (Practical Intelligence)ను అంచనా వేయడానికి అనువైన పరిస్థితి ఏది?",
        options: [
            "పదాల అర్థాలు చెప్పడం",
            "గణిత సూత్రాలు గుర్తు పెట్టుకోవడం",
            "నిజ జీవిత సమస్యకు పరిష్కారం సూచించడం",
            "కవితను కంఠస్థం చేయడం"
        ],
        correct: 2,
        explanation: "స్టెర్న్‌బర్గ్ ప్రకారం Practical Intelligence అనేది నిజ జీవిత సమస్యలను సమర్థవంతంగా పరిష్కరించే సామర్థ్యం. అందువల్ల వాస్తవ పరిస్థితికి పరిష్కారం సూచించడం దీనికి ఉత్తమ ఉదాహరణ."
    },
    {
        question: "Choose the correct article.\n\n____ Ganga is considered sacred.",
        options: [
            "A",
            "An",
            "The",
            "No article"
        ],
        correct: 2,
        explanation: "Names of rivers normally take the definite article 'The'. Therefore, the correct expression is 'The Ganga is considered sacred.'"
    },
    {
        question: "Choose the correct preposition.\n\nThe train arrived ____ the station on time.",
        options: [
            "at",
            "in",
            "on",
            "into"
        ],
        correct: 0,
        explanation: "We use 'arrive at' for small places such as stations, airports and bus stops. Therefore, 'arrived at the station' is the correct usage."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "Neither of the boys are absent.",
            "Neither of the boys is absent.",
            "Neither of the boys were absent.",
            "Neither of the boys have absent."
        ],
        correct: 1,
        explanation: "'Neither' is treated as a singular subject. Hence it requires the singular verb 'is', making the second sentence grammatically correct."
    },
    {
        question: "Identify the error.\n\nThe teacher as well as the students are attending the meeting.",
        options: [
            "The teacher",
            "as well as",
            "are",
            "attending"
        ],
        correct: 2,
        explanation: "When subjects are connected by 'as well as', the verb agrees with the first subject. Since 'teacher' is singular, the verb should be 'is'."
    },
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న పిల్లలలో తరచుగా కనిపించే లక్షణం ఏది?",
        options: [
            "ఎకోలాలియా (Echolalia)",
            "బ్రాడీకినేసియా",
            "అఫాసియా",
            "అప్నియా"
        ],
        correct: 0,
        explanation: "Echolalia అంటే విన్న పదాలు లేదా వాక్యాలను పునరావృతం చేయడం. ఇది Autism Spectrum Disorder ఉన్న పిల్లలలో తరచుగా కనిపించే ముఖ్యమైన లక్షణం."
    },
    {
        question: "ఒక విద్యార్థి 'beautiful' అనే పదాన్ని పదేపదే 'dueatiful' అని వ్రాస్తున్నాడు. ఈ లక్షణం ప్రధానంగా దేనిని సూచిస్తుంది?",
        options: [
            "Hearing Impairment",
            "Intellectual Disability",
            "Learning Disability",
            "Autism Spectrum Disorder"
        ],
        correct: 2,
        explanation: "స్పెల్లింగ్, అక్షరాల క్రమం మరియు చదవడంలో నిరంతర సమస్యలు Learning Disability, ముఖ్యంగా Dyslexia, యొక్క సాధారణ లక్షణాలుగా పరిగణించబడతాయి."
    },
    {
        question: "క్రింది వాటిలో Mild Intellectual Disability యొక్క సాధారణ IQ పరిధి ఏది?",
        options: [
            "20–34",
            "35–49",
            "50–69",
            "70–89"
        ],
        correct: 2,
        explanation: "Mild Intellectual Disability సాధారణంగా IQ 50–69 లేదా 50–70 మధ్య ఉన్నప్పుడు వర్గీకరించబడుతుంది. ఈ విద్యార్థులు తగిన సహాయంతో సాధారణ నైపుణ్యాలను అభివృద్ధి చేసుకోగలరు."
    },
    {
        question: "వినికిడి యంత్రం (Hearing Aid) ఉపయోగించే విద్యార్థిని సాధారణ తరగతి గదిలో ఎక్కడ కూర్చోబెట్టడం అత్యంత అనుకూలం?",
        options: [
            "చివరి వరుసలో",
            "కిటికీ పక్కన",
            "మొదటి వరుసలో ఉపాధ్యాయునికి సమీపంలో",
            "తలుపు దగ్గర"
        ],
        correct: 2,
        explanation: "హియరింగ్ ఎయిడ్ ఉపయోగించే విద్యార్థి ఉపాధ్యాయుని ముఖాన్ని స్పష్టంగా చూడగలిగేలా, మాటలు బాగా వినగలిగేలా ముందు వరుసలో కూర్చోబెట్టడం ఉత్తమం."
    },
    {
        question: "ఒక ఉపాధ్యాయుడు విద్యార్థికి అతని సామర్థ్యానికి కొద్దిగా మించిన పనిని సహాయంతో చేయిస్తే, వైగాట్స్కీ ప్రకారం ఇది ఏ భావనకు ఉదాహరణ?",
        options: [
            "Assimilation",
            "Zone of Proximal Development (ZPD)",
            "Trial and Error",
            "Reinforcement"
        ],
        correct: 1,
        explanation: "విద్యార్థి స్వయంగా చేయలేని పనిని ఉపాధ్యాయుని లేదా సహచరుల సహాయంతో చేయగలగడం Zone of Proximal Development (ZPD) కు ఉదాహరణ."
    },
    {
        question: "\"Intelligence is the ability to adapt to new situations.\" అనే భావనకు అత్యంత సమీపంగా ఉండే సిద్ధాంతకర్త ఎవరు?",
        options: [
            "Alfred Binet",
            "Jean Piaget",
            "William Stern",
            "Charles Spearman"
        ],
        correct: 0,
        explanation: "అల్ఫ్రెడ్ బినే మేధస్సును కొత్త పరిస్థితులకు అనుగుణంగా ఆలోచించి, సమస్యలను పరిష్కరించే సామర్థ్యంగా నిర్వచించాడు. ఇది ఆయన మేధస్సు భావనలో ముఖ్యమైన అంశం."
    },
    {
        question: "క్రింది వారిలో ఎవరు Constructivism భావనకు ప్రధాన ప్రతినిధిగా గుర్తించబడతారు?",
        options: [
            "Skinner",
            "Piaget",
            "Thorndike",
            "Pavlov"
        ],
        correct: 1,
        explanation: "పియాజే నిర్మాణవాదం (Constructivism)కు ప్రధాన ప్రతినిధిగా గుర్తించబడతాడు. విద్యార్థులు తమ అనుభవాల ఆధారంగా జ్ఞానాన్ని స్వయంగా నిర్మించుకుంటారని ఆయన పేర్కొన్నాడు."
    },
    {
        question: "స్పీర్‌మన్ సిద్ధాంతం ప్రకారం \"S-factor\" దేనిని సూచిస్తుంది?",
        options: [
            "సాధారణ మేధస్సు",
            "ప్రత్యేక సామర్థ్యం",
            "సామాజిక మేధస్సు",
            "భావోద్వేగ మేధస్సు"
        ],
        correct: 1,
        explanation: "స్పీర్‌మన్ ప్రకారం G-factor సాధారణ మేధస్సు కాగా, S-factor అనేది ఒక నిర్దిష్ట పని లేదా అంశానికి సంబంధించిన ప్రత్యేక సామర్థ్యాన్ని సూచిస్తుంది."
    },
    {
        question: "క్రింది వారిలో త్రికోణ మేధస్సు సిద్ధాంతాన్ని ప్రతిపాదించినవారు ఎవరు?",
        options: [
            "Gardner",
            "Sternberg",
            "Thurstone",
            "Binet"
        ],
        correct: 1,
        explanation: "రాబర్ట్ స్టెర్న్‌బర్గ్ త్రికోణ మేధస్సు సిద్ధాంతాన్ని ప్రతిపాదించాడు. ఇందులో Analytical, Creative మరియు Practical Intelligence అనే మూడు ప్రధాన భాగాలు ఉంటాయి."
    },
    {
        question: "పిల్లల అభ్యసనంలో 'Scaffolding' అనే భావన ఎక్కువగా దేనితో సంబంధం కలిగి ఉంటుంది?",
        options: [
            "Thorndike",
            "Skinner",
            "Vygotsky",
            "Spearman"
        ],
        correct: 2,
        explanation: "Scaffolding అనేది విద్యార్థికి ప్రారంభంలో అవసరమైన సహాయాన్ని అందించి, క్రమంగా ఆ సహాయాన్ని తగ్గించే బోధనా విధానం. ఇది వైగాట్స్కీ యొక్క ZPD భావనతో ముడిపడి ఉంటుంది."
    },
    {
        question: "పిల్లవాడు వస్తువులను రంగు, ఆకారం వంటి లక్షణాల ఆధారంగా వర్గీకరించగలగడం పియాజే ఏ దశ లక్షణం?",
        options: [
            "Sensorimotor",
            "Pre-operational",
            "Concrete Operational",
            "Formal Operational"
        ],
        correct: 2,
        explanation: "Concrete Operational దశలో పిల్లలు వర్గీకరణ, సంరక్షణ, క్రమబద్ధీకరణ వంటి తార్కిక కార్యకలాపాలను చేయగలరు. రంగు, ఆకారం ఆధారంగా వస్తువులను వర్గీకరించడం ఈ దశ లక్షణం."
    },
    {
        question: "క్రింది వాటిలో మేధస్సును కొలవడానికి మొదట అభివృద్ధి చేసిన పరీక్ష ఏది?",
        options: [
            "Stanford-Binet Test",
            "Binet-Simon Scale",
            "WISC",
            "WAIS"
        ],
        correct: 1,
        explanation: "1905లో Alfred Binet మరియు Theodore Simon కలిసి Binet-Simon Scaleను అభివృద్ధి చేశారు. ఇది ప్రపంచంలో మొట్టమొదటి వ్యవస్థీకృత మేధస్సు పరీక్షగా గుర్తించబడింది."
    },
    {
        question: "విద్యార్థి తన పొరపాట్లను స్వయంగా గుర్తించి సరిదిద్దుకోవడం ఏ రకమైన అభ్యసనానికి సూచన?",
        options: [
            "Passive Learning",
            "Self-regulated Learning",
            "Mechanical Learning",
            "Memorization"
        ],
        correct: 1,
        explanation: "Self-regulated Learningలో విద్యార్థి తన అభ్యసనాన్ని తానే ప్రణాళిక చేసుకొని, తన తప్పులను గుర్తించి, అవసరమైన మార్పులు చేసుకుంటూ అభివృద్ధి చెందుతాడు."
    },
    {
        question: "క్రింది వారిలో Multiple Intelligences సిద్ధాంతానికి చెందినది ఏది?",
        options: [
            "Logical-Mathematical Intelligence",
            "General Intelligence",
            "G-factor",
            "Primary Mental Ability"
        ],
        correct: 0,
        explanation: "Logical-Mathematical Intelligence గార్డ్నర్ బహుళ మేధస్సుల సిద్ధాంతంలోని ఒక ముఖ్యమైన మేధస్సు. మిగిలినవి ఇతర మనోవిజ్ఞాన శాస్త్రవేత్తల సిద్ధాంతాలకు చెందినవి."
    },
    {
        question: "Choose the correct preposition.\n\nHe is good ____ Mathematics.",
        options: [
            "in",
            "at",
            "on",
            "for"
        ],
        correct: 1,
        explanation: "సామర్థ్యం లేదా నైపుణ్యాన్ని సూచించేటప్పుడు 'good at' అనే ప్రయోగం వాడాలి. కాబట్టి 'He is good at Mathematics' సరైన వాక్యం."
    },
    {
        question: "Choose the correct article.\n\nShe bought ____ umbrella yesterday.",
        options: [
            "a",
            "an",
            "the",
            "no article"
        ],
        correct: 1,
        explanation: "Umbrella అనే పదం vowel soundతో ప్రారంభమవుతుంది. అందువల్ల దానికి ముందు 'an' అనే article ఉపయోగించాలి."
    },
    {
        question: "Identify the correct sentence.",
        options: [
            "One of the boys have completed the work.",
            "One of the boys has completed the work.",
            "One of the boys are completed the work.",
            "One of the boys were completed the work."
        ],
        correct: 1,
        explanation: "'One' అనేది ప్రధాన subject కాబట్టి singular verb 'has' ఉపయోగించాలి. అందువల్ల రెండవ వాక్యం మాత్రమే వ్యాకరణపరంగా సరైనది."
    },
    {
        question: "Choose the correct option.\n\nI have lived here ____ 2018.",
        options: [
            "for",
            "since",
            "from",
            "during"
        ],
        correct: 1,
        explanation: "'Since' ఒక నిర్దిష్ట ప్రారంభ సమయాన్ని సూచిస్తుంది. 2018 ఒక ప్రారంభ సంవత్సరం కాబట్టి 'since' సరైన preposition."
    },
    {
        question: "Identify the error.\n\nEvery student have submitted the assignment.",
        options: [
            "Every",
            "student",
            "have",
            "assignment"
        ],
        correct: 2,
        explanation: "'Every student' singular subject కాబట్టి singular verb 'has' ఉపయోగించాలి. 'Have' అనేది తప్పు ప్రయోగం."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "The news are interesting.",
            "The news is interesting.",
            "The news were interesting.",
            "The news have interesting."
        ],
        correct: 1,
        explanation: "'News' రూపంలో pluralలా కనిపించినప్పటికీ అది singular noun. అందువల్ల singular verb 'is' మాత్రమే సరైనది."
    },
    {
        question: "Fill in the blank.\n\nNeither Ravi nor his friends ____ ready.",
        options: [
            "is",
            "was",
            "are",
            "has"
        ],
        correct: 2,
        explanation: "'Neither...nor...' నిర్మాణంలో verb దగ్గరలో ఉన్న subjectతో సరిపోతుంది. ఇక్కడ 'friends' plural కాబట్టి 'are' సరైన సమాధానం."
    },
    {
        question: "క్రింది వాటిలో Dyscalculia ప్రధానంగా దేనితో సంబంధం కలిగి ఉంటుంది?",
        options: [
            "చదవడం",
            "రాయడం",
            "గణిత అభ్యాసం",
            "వినికిడి"
        ],
        correct: 2,
        explanation: "Dyscalculia అనేది గణిత భావనలు, సంఖ్యలు, లెక్కలు మరియు గణిత సమస్యలను అర్థం చేసుకోవడంలో కనిపించే ప్రత్యేక అభ్యసన వైకల్యం."
    },
    {
        question: "క్రింది వాటిలో ఆటిజం ఉన్న పిల్లల బోధనలో ఎక్కువగా ఉపయోగించే విధానం ఏది?",
        options: [
            "Visual Schedule",
            "Braille",
            "Finger Spelling",
            "Audiometry"
        ],
        correct: 0,
        explanation: "Visual Schedules ద్వారా ఆటిజం ఉన్న పిల్లలు రోజువారీ కార్యక్రమాలను సులభంగా అర్థం చేసుకుంటారు. ఇది వారి ప్రవర్తన మరియు స్వతంత్రతను మెరుగుపరుస్తుంది."
    },
    {
        question: "IEP సిద్ధం చేయడంలో ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        options: [
            "అందరికీ ఒకే బోధన",
            "వ్యక్తిగత అవసరాలకు అనుగుణమైన విద్యా లక్ష్యాలు రూపొందించడం",
            "పరీక్షల సంఖ్య తగ్గించడం",
            "హాజరు నమోదు చేయడం"
        ],
        correct: 1,
        explanation: "Individualized Education Programme (IEP) ప్రతి విద్యార్థి అవసరాలను దృష్టిలో ఉంచుకుని వ్యక్తిగత విద్యా లక్ష్యాలు, బోధనా విధానాలు మరియు మూల్యాంకనాన్ని రూపొందించడానికి ఉపయోగిస్తారు."
    },
    {
        question: "క్రింది వాటిలో Hearing Impairment గుర్తించడానికి ఉపయోగించే పరీక్ష ఏది?",
        options: [
            "Snellen Chart",
            "Audiometry",
            "Braille Test",
            "IQ Test"
        ],
        correct: 1,
        explanation: "Audiometry అనేది వినికిడి సామర్థ్యాన్ని కొలవడానికి ఉపయోగించే ప్రామాణిక పరీక్ష. Hearing Loss స్థాయిని గుర్తించడంలో ఇది అత్యంత ముఖ్యమైన సాధనం."
    },
    {
        question: "క్రింది వాటిలో Learning Disability రకం కానిది ఏది?",
        options: [
            "Dyslexia",
            "Dysgraphia",
            "Dyscalculia",
            "Aphasia"
        ],
        correct: 3,
        explanation: "Dyslexia, Dysgraphia మరియు Dyscalculia ప్రత్యేక అభ్యసన వైకల్యాలు. Aphasia అనేది సాధారణంగా మెదడు దెబ్బతినడం వల్ల కలిగే భాషా లోపం."
    },
    {
        question: "IQ 35–49 సాధారణంగా ఏ వర్గానికి చెందినది?",
        options: [
            "Mild Intellectual Disability",
            "Moderate Intellectual Disability",
            "Severe Intellectual Disability",
            "Profound Intellectual Disability"
        ],
        correct: 1,
        explanation: "IQ 35–49 ఉన్న వ్యక్తులను సాధారణంగా Moderate Intellectual Disability వర్గంలో వర్గీకరిస్తారు. వీరికి దైనందిన జీవితంలో గణనీయమైన సహాయం అవసరమవుతుంది."
    },
    {
        question: "హియరింగ్ ఎయిడ్ ఉపయోగించే విద్యార్థికి బోధించేటప్పుడు ఉపాధ్యాయుడు ముఖ్యంగా ఏమి చేయాలి?",
        options: [
            "వెనుకవైపు నిలబడి మాట్లాడాలి",
            "ముఖం విద్యార్థివైపు ఉంచి స్పష్టంగా మాట్లాడాలి",
            "చాలా వేగంగా మాట్లాడాలి",
            "బోర్డు వైపు చూస్తూ మాట్లాడాలి"
        ],
        correct: 1,
        explanation: "హియరింగ్ ఎయిడ్ ఉపయోగించే విద్యార్థి ఉపాధ్యాయుని పెదవుల కదలికలు మరియు ముఖ భావాలను గమనించగలిగేలా ముఖాముఖిగా స్పష్టంగా మాట్లాడాలి."
    },
    {
        question: "RPWD Act–2016 ప్రకారం Hearing Impairmentలో చేరే వర్గాలు ఏవి?",
        options: [
            "Deaf మాత్రమే",
            "Hard of Hearing మాత్రమే",
            "Deaf మరియు Hard of Hearing",
            "Speech Disorder మరియు Language Disorder"
        ],
        correct: 2,
        explanation: "RPWD Act–2016 ప్రకారం Hearing Impairmentలో రెండు వర్గాలు ఉంటాయి: Deaf మరియు Hard of Hearing. ఈ రెండింటికీ చట్టపరమైన గుర్తింపు మరియు హక్కులు కల్పించబడ్డాయి."
    }
];