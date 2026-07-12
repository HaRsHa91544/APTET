const SUBJECTS = [
    "CDP",
    "English",
    "Telugu",
    "Special Education"
];

const QUESTIONS = [
    
    {
        question: "ప్రేరణ (Motivation) అనగా",
        options: [
            "మరచిపోవడం",
            "వ్యక్తిని లక్ష్యం వైపు చర్యకు ప్రేరేపించే అంతర్గత లేదా బాహ్య శక్తి",
            "జ్ఞాపకశక్తి",
            "వారసత్వ లక్షణం"
        ],
        correct: 1,
        explanation: "ప్రేరణ అనేది వ్యక్తిని ఒక లక్ష్యాన్ని సాధించేందుకు చర్య చేయించే అంతర్గత లేదా బాహ్య ప్రేరక శక్తి."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education) యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        options: [
            "ప్రత్యేక అవసరాల పిల్లలను ప్రత్యేక పాఠశాలలకు మాత్రమే పంపడం",
            "అందరు విద్యార్థులను వారి వైవిధ్యాన్ని గౌరవిస్తూ ఒకే విద్యా వాతావరణంలో నేర్పించడం",
            "కేవలం ప్రతిభావంతుల కోసం ప్రత్యేక తరగతులు ఏర్పాటు చేయడం",
            "వైకల్యం ఉన్న పిల్లలకు పరీక్షలు నిర్వహించకపోవడం"
        ],
        correct: 1,
        explanation: "సమగ్ర విద్యలో అన్ని పిల్లలు సమాన అవకాశాలతో ఒకే తరగతి గదిలో నేర్చుకునేలా విద్యా వాతావరణం రూపొందించబడుతుంది."
    },
    {
        question: "వ్యక్తిగత విద్యా ప్రణాళిక (IEP) ప్రధానంగా దేనికి ఉపయోగపడుతుంది?",
        options: [
            "అన్ని విద్యార్థులకు ఒకే పాఠ్య ప్రణాళిక రూపొందించడానికి",
            "ప్రత్యేక అవసరాలున్న విద్యార్థి అవసరాలకు అనుగుణంగా వ్యక్తిగత విద్యా లక్ష్యాలు రూపొందించడానికి",
            "ఉపాధ్యాయుల వార్షిక సేవా రికార్డు నిర్వహించడానికి",
            "పాఠశాల బడ్జెట్ తయారు చేయడానికి"
        ],
        correct: 1,
        explanation: "IEP ద్వారా ప్రత్యేక అవసరాలున్న విద్యార్థికి వ్యక్తిగత లక్ష్యాలు, బోధనా పద్ధతులు, మూల్యాంకన విధానాలు ప్రణాళికాబద్ధంగా రూపొందిస్తారు."
    },
    {
        question: "క్రింది వాటిలో 'అనుకూలీకరణ' (Accommodation) కు ఉదాహరణ ఏది?",
        options: [
            "పాఠ్యాంశాన్ని తగ్గించడం",
            "విద్యార్థికి అదనపు పరీక్ష సమయం ఇవ్వడం",
            "అభ్యాస లక్ష్యాలను పూర్తిగా మార్చడం",
            "తరగతి నుండి విద్యార్థిని తొలగించడం"
        ],
        correct: 1,
        explanation: "Accommodationలో అభ్యాస లక్ష్యాలను మార్చకుండా, విద్యార్థి నేర్చుకోవడానికి లేదా పరీక్ష రాయడానికి అవసరమైన సౌకర్యాలు కల్పిస్తారు."
    },
    {
        question: "ICT ఆధారిత బోధనలో బహుఇంద్రియ అభ్యాసం (Multi-sensory Learning) యొక్క ప్రధాన ప్రయోజనం ఏమిటి?",
        options: [
            "కేవలం వినికిడి ద్వారా మాత్రమే నేర్చుకోవడం",
            "ఒకేసారి అనేక ఇంద్రియాలను ఉపయోగించడం ద్వారా అభ్యాసాన్ని మరింత ప్రభావవంతం చేయడం",
            "విద్యార్థులకు గృహపాఠాలు ఇవ్వకపోవడం",
            "కేవలం కంప్యూటర్ వినియోగాన్ని పెంచడం"
        ],
        correct: 1,
        explanation: "బహుఇంద్రియ అభ్యాసంలో దృశ్య, శ్రవణ, స్పర్శ వంటి అనేక ఇంద్రియాలను ఉపయోగించడం వల్ల అవగాహన మరియు జ్ఞాపకశక్తి మెరుగుపడుతుంది."
    },
    {
        question: "ఫ్లాండర్స్ పరస్పర చర్య విశ్లేషణ వర్గీకరణ వ్యవస్థ (Flanders Interaction Analysis Category System - FIACS) ప్రధానంగా దేనిని విశ్లేషించడానికి ఉపయోగిస్తారు?",
        options: [
            "విద్యార్థుల మేధస్సును",
            "తరగతి గదిలో ఉపాధ్యాయుడు - విద్యార్థి పరస్పర చర్యలను",
            "పాఠశాల ఆర్థిక నిర్వహణను",
            "పరీక్షా ఫలితాలను మాత్రమే"
        ],
        correct: 1,
        explanation: "FIACS ద్వారా తరగతి గదిలో ఉపాధ్యాయుడు మరియు విద్యార్థుల మధ్య జరిగే మౌఖిక పరస్పర చర్యలను విశ్లేషించి బోధన ప్రభావాన్ని అంచనా వేస్తారు."
    },
    {
        question: "క్రింది వాటిలో వ్యక్తిగత భేదాలు (Individual Differences) గురించి సరైన వాక్యం ఏది?",
        options: [
            "అందరు పిల్లలు ఒకే విధంగా నేర్చుకుంటారు.",
            "వ్యక్తిగత భేదాలు కేవలం మేధస్సులో మాత్రమే ఉంటాయి.",
            "ప్రతి విద్యార్థి అభ్యాస వేగం, ఆసక్తులు, సామర్థ్యాలు భిన్నంగా ఉంటాయి.",
            "వ్యక్తిగత భేదాలను బోధనలో పరిగణించాల్సిన అవసరం లేదు."
        ],
        correct: 2,
        explanation: "ప్రతి విద్యార్థి సామర్థ్యం, ఆసక్తి, అభ్యాస శైలి, అభివృద్ధి వేగం భిన్నంగా ఉంటుంది. సమర్థవంతమైన బోధన ఈ భేదాలను గౌరవించాలి."
    },
    {
        question: "కార్యక్రమిత అభ్యాసం (Programmed Learning) యొక్క ప్రధాన సూత్రం ఏది?",
        options: [
            "ఒకేసారి పెద్ద మొత్తంలో సమాచారం ఇవ్వడం",
            "చిన్న చిన్న దశల్లో అభ్యాసం జరిగేలా చేసి వెంటనే ప్రతిస్పందన (Feedback) ఇవ్వడం",
            "కేవలం ఉపన్యాస పద్ధతిలో బోధించడం",
            "పరీక్షలు నిర్వహించకుండా బోధించడం"
        ],
        correct: 1,
        explanation: "కార్యక్రమిత అభ్యాసంలో విషయాన్ని చిన్న దశలుగా విభజించి, ప్రతి దశకు వెంటనే ప్రతిస్పందన అందించడం ద్వారా అభ్యాసాన్ని బలపరుస్తారు."
    },
    {
        question: "పిల్లవాడు తనకు తెలిసిన భావనలను ఉపయోగించి కొత్త సమాచారాన్ని అర్థం చేసుకోవడాన్ని పియాజే ఏ పేరుతో పేర్కొన్నాడు?",
        options: [
            "అనుకలనం (Accommodation)",
            "పరిపక్వత",
            "సమీకరణ (Assimilation)",
            "ప్రేరణ"
        ],
        correct: 2,
        explanation: "సమీకరణ (Assimilation) అనగా కొత్త అనుభవాన్ని ఇప్పటికే ఉన్న జ్ఞాన నిర్మాణంలో కలిపి అర్థం చేసుకోవడం."
    },
    {
        question: "వ్యక్తిగత విద్యా ప్రణాళిక (IEP) రూపకల్పనలో క్రింది వారిలో అత్యంత ముఖ్యమైన భాగస్వామి ఎవరు?",
        options: [
            "కేవలం ప్రధానోపాధ్యాయుడు",
            "కేవలం ప్రత్యేక ఉపాధ్యాయుడు",
            "విద్యార్థి, తల్లిదండ్రులు మరియు సంబంధిత నిపుణులతో కూడిన బృందం",
            "కేవలం జిల్లా విద్యాశాఖ అధికారి"
        ],
        correct: 2,
        explanation: "IEP బృందంలో తల్లిదండ్రులు, ప్రత్యేక ఉపాధ్యాయులు, సాధారణ ఉపాధ్యాయులు మరియు అవసరమైన నిపుణులు కలిసి నిర్ణయాలు తీసుకుంటారు."
    },
    {
        question: "క్రింది వాటిలో దృష్టి (Attention)ని ప్రభావితం చేసే అంశం ఏది?",
        options: [
            "ప్రేరణ",
            "ఆసక్తి",
            "ఉద్దీపన తీవ్రత",
            "పైవన్నీ"
        ],
        correct: 3,
        explanation: "దృష్టి కేంద్రీకరణపై ప్రేరణ, ఆసక్తి, ఉద్దీపన తీవ్రత, కొత్తదనం వంటి అనేక అంశాలు ప్రభావం చూపుతాయి."
    },
    {
        question: "MOOCs యొక్క పూర్తి రూపం ఏమిటి?",
        options: [
            "Massive Open Online Courses",
            "Modern Online Official Courses",
            "Multiple Offline Open Classes",
            "Modern Open Office Courses"
        ],
        correct: 0,
        explanation: "MOOCs అంటే Massive Open Online Courses. ఇవి ఇంటర్నెట్ ద్వారా అందరికీ అందుబాటులో ఉండే విస్తృత ఆన్‌లైన్ కోర్సులు."
    },
    {
        question: "డిజిటల్ విద్యా వనరుల (Open Educational Resources - OER) ముఖ్య లక్షణం ఏమిటి?",
        options: [
            "అధిక చెల్లింపుతో మాత్రమే ఉపయోగించాలి",
            "ఉపయోగించడం, సవరించడం, పంచుకోవడం సులభంగా ఉండడం",
            "కేవలం ప్రభుత్వ ఉద్యోగులకు మాత్రమే అందుబాటులో ఉండడం",
            "ఇంటర్నెట్ లేకుండా మాత్రమే ఉపయోగించగలగడం"
        ],
        correct: 1,
        explanation: "OER వనరులను ఉచితంగా లేదా అనుమతితో ఉపయోగించడం, సవరించడం మరియు పంచుకోవడం వీలవుతుంది. ఇవి అభ్యాసాన్ని విస్తృతం చేస్తాయి."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education)లో మూల్యాంకనం నిర్వహించేటప్పుడు ఉపాధ్యాయుడు ప్రధానంగా దేనిని పరిగణనలోకి తీసుకోవాలి?",
        options: [
            "అందరికీ ఒకే ప్రశ్నపత్రం మాత్రమే ఇవ్వాలి",
            "విద్యార్థి వ్యక్తిగత అవసరాలకు అనుగుణంగా తగిన సౌకర్యాలు కల్పించాలి",
            "ప్రత్యేక అవసరాలున్న విద్యార్థులను పరీక్షలకు అనుమతించకూడదు",
            "కేవలం మౌఖిక పరీక్షలు మాత్రమే నిర్వహించాలి"
        ],
        correct: 1,
        explanation: "సమగ్ర విద్యలో మూల్యాంకనం విద్యార్థి అవసరాలకు అనుగుణంగా ఉండాలి. అవసరమైతే అదనపు సమయం, స్క్రైబ్ వంటి సౌకర్యాలు కల్పించాలి."
    },
    {
        question: "DIKSHA వేదిక ప్రధానంగా దేనికి సంబంధించినది?",
        options: [
            "ఆన్‌లైన్ షాపింగ్",
            "డిజిటల్ విద్యా వనరులు మరియు ఉపాధ్యాయ శిక్షణ",
            "బ్యాంకింగ్ సేవలు",
            "ఆరోగ్య సేవలు"
        ],
        correct: 1,
        explanation: "DIKSHA అనేది విద్యార్థులు మరియు ఉపాధ్యాయుల కోసం డిజిటల్ పాఠ్యవనరులు, ఈ-కంటెంట్ మరియు శిక్షణను అందించే జాతీయ విద్యా వేదిక."
    },
    {
        question: "జాతీయ విద్యా విధానం – 2020 (NEP–2020) యొక్క ప్రధాన లక్ష్యం ఏమిటి?",
        options: [
            "కేవలం పరీక్షా ఫలితాలను మెరుగుపరచడం",
            "అందరికీ సమాన, సమగ్ర మరియు నాణ్యమైన విద్యను అందించడం",
            "ప్రైవేట్ పాఠశాలలను మాత్రమే అభివృద్ధి చేయడం",
            "కేవలం వృత్తి విద్యను ప్రవేశపెట్టడం"
        ],
        correct: 1,
        explanation: "జాతీయ విద్యా విధానం–2020 విద్యార్థి కేంద్రిత, సమగ్ర, నైపుణ్య ఆధారిత మరియు సమాన అవకాశాలున్న విద్యా వ్యవస్థను అభివృద్ధి చేయడంపై దృష్టి సారిస్తుంది."
    },
    {
        question: "వ్యక్తిగత విద్యా ప్రణాళిక (IEP)ను క్రమానుగతంగా సమీక్షించడానికి ప్రధాన కారణం ఏమిటి?",
        options: [
            "పాఠశాల రికార్డుల కోసం మాత్రమే",
            "విద్యార్థి పురోగతిని బట్టి లక్ష్యాలను సవరించడానికి",
            "ఉపాధ్యాయుల బదిలీల కోసం",
            "తల్లిదండ్రులకు హాజరు తెలియజేయడానికి"
        ],
        correct: 1,
        explanation: "విద్యార్థి సాధించిన పురోగతి, అవసరాలు మరియు కొత్త లక్ష్యాలను పరిగణనలోకి తీసుకొని IEPను నిర్దిష్ట వ్యవధిలో సమీక్షించి సవరిస్తారు."
    },
    {
        question: "కంప్యూటర్‌లో తాత్కాలికంగా సమాచారాన్ని నిల్వ చేసే స్మృతి ఏది?",
        options: [
            "ROM",
            "RAM",
            "హార్డ్ డిస్క్",
            "పెన్ డ్రైవ్"
        ],
        correct: 1,
        explanation: "RAM (Random Access Memory) కంప్యూటర్ పనిచేస్తున్న సమయంలో తాత్కాలిక సమాచారాన్ని నిల్వ చేస్తుంది. విద్యుత్ సరఫరా నిలిచిపోతే ఇందులోని సమాచారం తొలగిపోతుంది."
    },
    {
        question: "సమాచార ప్రసార ప్రక్రియ (Communication Process)లో సందేశాన్ని పంపే వ్యక్తిని ఏమంటారు?",
        options: [
            "గ్రహీత (Receiver)",
            "ప్రతిస్పందన (Feedback)",
            "పంపేవాడు (Sender)",
            "మాధ్యమం (Channel)"
        ],
        correct: 2,
        explanation: "సందేశాన్ని ప్రారంభించి పంపే వ్యక్తిని Sender అంటారు. సందేశం మాధ్యమం ద్వారా Receiverకు చేరి Feedback ద్వారా ప్రక్రియ పూర్తవుతుంది."
    },
    {
        question: "సమాచార ప్రసారంలో (Communication) 'శబ్దం' (Noise) అనగా ఏమిటి?",
        options: [
            "తరగతి గంట శబ్దం మాత్రమే",
            "సందేశాన్ని సరిగా అర్థం చేసుకోవడాన్ని అడ్డుకునే ఏదైనా ఆటంకం",
            "ఉపాధ్యాయుడి స్వరం",
            "విద్యార్థి ప్రశ్న అడగడం"
        ],
        correct: 1,
        explanation: "Communicationలో Noise అనేది సందేశం స్పష్టంగా చేరకుండా చేసే భౌతిక, మానసిక లేదా భాషాపరమైన ఏదైనా ఆటంకాన్ని సూచిస్తుంది."
    },
    {
        question: "బ్లాగులు (Blogs), సమూహ చర్చలు మరియు ప్రాజెక్టుల ద్వారా విద్యార్థులు కలిసి నేర్చుకునే విధానాన్ని ఏమంటారు?",
        options: [
            "వ్యక్తిగత అభ్యాసం",
            "సహకార అభ్యాసం (Collaborative Learning)",
            "కంఠస్థ అభ్యాసం",
            "సాంప్రదాయ ఉపన్యాస పద్ధతి"
        ],
        correct: 1,
        explanation: "Collaborative Learningలో విద్యార్థులు సమూహంగా చర్చలు, ప్రాజెక్టులు మరియు డిజిటల్ వేదికల ద్వారా పరస్పరం నేర్చుకుంటారు."
    },
    {
        question: "క్రింది వాటిలో వెబ్ 2.0 (Web 2.0) సాంకేతికతకు ఉదాహరణ ఏది?",
        options: [
            "క్యాన్వా (Canva)",
            "బ్లాగ్",
            "వికీ",
            "పైవన్నీ"
        ],
        correct: 3,
        explanation: "Web 2.0 సాంకేతికతలో వినియోగదారులు కంటెంట్‌ను సృష్టించడం, పంచుకోవడం మరియు పరస్పర చర్య చేయడం ముఖ్య లక్షణం. బ్లాగులు, వికీలు, Canva వంటి వేదికలు ఉదాహరణలు."
    },
    {
        question: "డిజిటల్ వనరులను ఉపయోగించినప్పుడు 'ప్లేజరిజం' (Plagiarism) అంటే ఏమిటి?",
        options: [
            "స్వంత ఆలోచనలను ప్రచురించడం",
            "ఇతరుల రచనను మూలాన్ని పేర్కొనకుండా స్వంతదిగా ఉపయోగించడం",
            "సమాచారాన్ని గ్రంథాలయంలో భద్రపరచడం",
            "పాఠ్యపుస్తకాన్ని చదవడం"
        ],
        correct: 1,
        explanation: "ఇతరుల ఆలోచనలు లేదా రచనలను సరైన మూలాన్ని పేర్కొనకుండా ఉపయోగించడం Plagiarism. ఇది విద్యా నైతికతకు విరుద్ధమైన చర్య."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education)లో ఉపాధ్యాయుని ముఖ్య పాత్ర ఏమిటి?",
        options: [
            "ప్రత్యేక అవసరాలున్న విద్యార్థులను ప్రత్యేక తరగతికి పంపించడం",
            "ప్రతి విద్యార్థి అవసరాలకు అనుగుణంగా బోధనను సవరించడం",
            "ప్రతిభావంతులపై మాత్రమే దృష్టి పెట్టడం",
            "పరీక్షలు మాత్రమే నిర్వహించడం"
        ],
        correct: 1,
        explanation: "సమగ్ర విద్యలో ఉపాధ్యాయుడు ప్రతి విద్యార్థి అవసరాలు, సామర్థ్యాలు, అభ్యాస శైలిని పరిగణనలోకి తీసుకొని బోధనను అనుకూలీకరించాలి."
    },
    {
        question: "క్రింది వాటిలో ICT ఆధారిత అభ్యాసానికి ప్రధాన ప్రయోజనం ఏది?",
        options: [
            "విద్యార్థుల భాగస్వామ్యాన్ని తగ్గించడం",
            "బహుఇంద్రియ, పరస్పర చర్యతో కూడిన అభ్యాస అనుభవాన్ని కల్పించడం",
            "పాఠ్యపుస్తకాలను పూర్తిగా తొలగించడం",
            "పరీక్షలను రద్దు చేయడం"
        ],
        correct: 1,
        explanation: "ICT ద్వారా వీడియోలు, యానిమేషన్లు, సిమ్యులేషన్లు మరియు పరస్పర చర్యలతో అభ్యాసం మరింత ఆసక్తికరంగా, ప్రభావవంతంగా మరియు విద్యార్థి కేంద్రితంగా మారుతుంది."
    },
    {
        question: "Read the sentence and choose the correct meaning of the underlined idiom.\n\n'After failing twice, Ramesh finally passed the examination by the skin of his teeth.'",
        options: [
            "Very easily",
            "With great difficulty and by a very small margin",
            "Without preparing",
            "Because of cheating"
        ],
        correct: 1,
        explanation: "The idiom 'by the skin of his teeth' means succeeding by a very narrow margin or with great difficulty."
    },
    {
        question: "Choose the correctly spelt word.",
        options: [
            "Enviroment",
            "Environment",
            "Environmant",
            "Enviornment"
        ],
        correct: 1,
        explanation: "The correct spelling is 'Environment'. The other options contain spelling errors."
    },
    {
        question: "Choose the synonym of the word 'Diligent'.",
        options: [
            "Lazy",
            "Hardworking",
            "Careless",
            "Weak"
        ],
        correct: 1,
        explanation: "'Diligent' means hardworking, careful and showing persistent effort in completing a task."
    },
    {
        question: "Choose the antonym of the word 'Expand'.",
        options: [
            "Increase",
            "Develop",
            "Reduce",
            "Stretch"
        ],
        correct: 2,
        explanation: "'Reduce' is the opposite of 'Expand'. Expand means become larger, while reduce means make smaller."
    },
    {
        question: "Choose the correct article.\n\nShe is ____ honest officer.",
        options: [
            "a",
            "an",
            "the",
            "No article"
        ],
        correct: 1,
        explanation: "'Honest' begins with a silent 'h', so it starts with a vowel sound. Therefore, 'an' is the correct article."
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
        explanation: "We use 'arrive at' for small places such as stations, airports and bus stops."
    },
    {
        question: "Choose the correct passive voice.\n\nThe teacher praised the students.",
        options: [
            "The students praised the teacher.",
            "The students were praised by the teacher.",
            "The students are praised by the teacher.",
            "The students have praised the teacher."
        ],
        correct: 1,
        explanation: "The sentence is in the simple past tense. The passive form is 'were praised by the teacher.'"
    },
    {
        question: "Choose the correctly reported speech.\n\nRavi said, 'I am preparing for APTET.'",
        options: [
            "Ravi said that I am preparing for APTET.",
            "Ravi said that he was preparing for APTET.",
            "Ravi said that he is preparing for APTET.",
            "Ravi said he prepare for APTET."
        ],
        correct: 1,
        explanation: "In reported speech, the pronoun changes according to the speaker and the present continuous changes to past continuous."
    },
    {
        question: "Choose the sentence with the correct subject-verb agreement.",
        options: [
            "Each of the boys are present.",
            "Each of the boys is present.",
            "Each of the boys were present.",
            "Each of the boys have been present."
        ],
        correct: 1,
        explanation: "'Each' is treated as a singular subject. Therefore, it takes the singular verb 'is'."
    },
    {
        question: "Which language skill is primarily developed when learners listen to a podcast and identify the main idea?",
        options: [
            "Speaking",
            "Reading",
            "Listening",
            "Writing"
        ],
        correct: 2,
        explanation: "Listening to a podcast and understanding its central idea develops the Listening skill, one of the four LSRW language skills."
    },
    {
        question: "Read the sentence and identify the part containing an error.\n\nNeither the teacher nor the students was present in the classroom.",
        options: [
            "Neither the teacher",
            "nor the students",
            "was present",
            "in the classroom"
        ],
        correct: 2,
        explanation: "When subjects are joined by 'neither...nor', the verb agrees with the subject nearest to it. 'Students' is plural, so 'were present' is correct."
    },
    {
        question: "Choose the correct question tag.\n\nLet's go for a walk, ____?",
        options: [
            "shall we",
            "will we",
            "don't we",
            "aren't we"
        ],
        correct: 0,
        explanation: "Sentences beginning with 'Let's' take the question tag 'shall we?'. It is the standard grammatical pattern."
    },
    {
        question: "Choose the correct tense.\n\nBy this time tomorrow, we ____ the project.",
        options: [
            "complete",
            "will complete",
            "will have completed",
            "have completed"
        ],
        correct: 2,
        explanation: "'By this time tomorrow' indicates an action that will be completed before a future time. Hence, Future Perfect Tense is used."
    },
    {
        question: "Choose the correct meaning of the phrasal verb 'look after'.",
        options: [
            "Search for",
            "Take care of",
            "Look at",
            "Ignore"
        ],
        correct: 1,
        explanation: "'Look after' means to take care of someone or something."
    },
    {
        question: "Choose the correctly punctuated sentence.",
        options: [
            "Where are you going.",
            "Where are you going?",
            "Where are you going!",
            "Where, are you going."
        ],
        correct: 1,
        explanation: "A direct question must end with a question mark. Therefore, 'Where are you going?' is correctly punctuated."
    },
    {
        question: "Choose the correct indirect speech.\n\nThe teacher said, 'Submit your assignments tomorrow.'",
        options: [
            "The teacher told the students to submit their assignments the next day.",
            "The teacher said submit your assignments tomorrow.",
            "The teacher asked that submit the assignments.",
            "The teacher told that submit your assignments."
        ],
        correct: 0,
        explanation: "Imperative sentences in reported speech use 'told/asked + object + to + verb'. 'Tomorrow' changes to 'the next day'."
    },
    {
        question: "Which of the following activities mainly develops speaking skill?",
        options: [
            "Silent reading",
            "Group discussion",
            "Writing a summary",
            "Reading a newspaper"
        ],
        correct: 1,
        explanation: "Group discussion encourages learners to express ideas orally, improving fluency, pronunciation and communication skills."
    },
    {
        question: "Which method emphasizes learning English through real-life communication rather than memorizing grammar rules?",
        options: [
            "Grammar Translation Method",
            "Communicative Language Teaching (CLT)",
            "Audio-Lingual Method",
            "Bilingual Method"
        ],
        correct: 1,
        explanation: "Communicative Language Teaching focuses on meaningful communication, interaction and real-life language use rather than rote grammar learning."
    },
    {
        question: "According to Bloom's Taxonomy, which cognitive level requires learners to justify a decision based on evidence?",
        options: [
            "Remember",
            "Understand",
            "Analyze",
            "Evaluate"
        ],
        correct: 3,
        explanation: "The 'Evaluate' level involves judging, defending opinions and making decisions using appropriate criteria and evidence."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "She enjoys to read novels.",
            "She enjoys reading novels.",
            "She enjoy reading novels.",
            "She enjoyed to reading novels."
        ],
        correct: 1,
        explanation: "The verb 'enjoy' is followed by a gerund (-ing form). Therefore, 'She enjoys reading novels' is grammatically correct."
    },
    {
        question: "Read the passage and answer the question.\n\n'Good teachers encourage students to ask questions. They create a classroom where mistakes are treated as opportunities to learn rather than failures.'\n\nAccording to the passage, mistakes should be viewed as",
        options: [
            "Reasons for punishment",
            "Signs of failure",
            "Opportunities for learning",
            "Causes of poor teaching"
        ],
        correct: 2,
        explanation: "The passage clearly states that mistakes should be treated as opportunities to learn. This promotes confidence and encourages active participation."
    },
    {
        question: "Choose the correct synonym of the word 'Generous'.",
        options: [
            "Selfish",
            "Kind-hearted",
            "Cruel",
            "Lazy"
        ],
        correct: 1,
        explanation: "'Generous' means willing to give or share freely. 'Kind-hearted' is the closest synonym among the given options."
    },
    {
        question: "Choose the correctly formed sentence.",
        options: [
            "Hardly had I reached the station when the train left.",
            "Hardly I had reached the station when the train left.",
            "Hardly had reached I the station when the train left.",
            "Hardly I reached the station when the train had left."
        ],
        correct: 0,
        explanation: "After 'Hardly', inversion is used: 'Hardly had + subject + past participle...' This is the correct grammatical structure."
    },
    {
        question: "Which of the following is an example of a formative assessment?",
        options: [
            "Annual public examination",
            "Unit quiz with feedback",
            "Final semester examination",
            "Entrance examination"
        ],
        correct: 1,
        explanation: "Formative assessment is conducted during the learning process to monitor progress and provide feedback for improvement."
    },
    {
        question: "Which teaching aid is most suitable for improving learners' listening comprehension?",
        options: [
            "Audio recordings",
            "Flash cards",
            "Blackboard diagrams",
            "Charts"
        ],
        correct: 0,
        explanation: "Audio recordings expose learners to authentic pronunciation, stress, intonation and listening practice, improving listening comprehension."
    },
    {
        question: "Choose the correctly completed sentence.\n\nIf I ____ enough money, I would buy a laptop.",
        options: [
            "have",
            "had",
            "will have",
            "am having"
        ],
        correct: 1,
        explanation: "This is a Second Conditional sentence. It uses 'If + past tense' and 'would + base verb' to express an unreal present situation."
    },
    {
        question: "Which of the following is NOT a productive language skill?",
        options: [
            "Speaking",
            "Writing",
            "Listening",
            "Presenting"
        ],
        correct: 2,
        explanation: "Listening is a receptive language skill. Speaking and writing are productive skills because learners produce language."
    },
    {
        question: "A teacher asks students to work in pairs and solve a communication task. This activity mainly promotes",
        options: [
            "Rote memorization",
            "Collaborative learning",
            "Individual learning only",
            "Translation skills only"
        ],
        correct: 1,
        explanation: "Pair work encourages interaction, communication, cooperation and collaborative learning, which are key principles of Communicative Language Teaching."
    },
    {
        question: "Which of the following objectives belongs to the 'Analyze' level of Bloom's Revised Taxonomy?",
        options: [
            "List the parts of a sentence.",
            "Explain the meaning of a paragraph.",
            "Differentiate facts from opinions in a passage.",
            "Recall the definitions of nouns."
        ],
        correct: 2,
        explanation: "The 'Analyze' level requires learners to examine relationships, compare ideas and distinguish facts from opinions."
    },
    {
        question: "While teaching vocabulary, the most effective way to help learners retain new words is to",
        options: [
            "Ask them to copy each word ten times.",
            "Use the words in meaningful contexts and encourage repeated usage.",
            "Give only dictionary meanings.",
            "Memorize spellings without understanding."
        ],
        correct: 1,
        explanation: "Vocabulary is retained better when learners encounter and use words repeatedly in meaningful contexts rather than through rote memorization."
    },
    {
        question: "క్రింది గద్యభాగాన్ని చదివి ప్రశ్నకు సమాధానం గుర్తించండి.\n\n'సమయం అమూల్యమైనది. ఒకసారి గడిచిన సమయం తిరిగి రాదు. సమయాన్ని సద్వినియోగం చేసుకునే వారు జీవితంలో విజయాలను సాధిస్తారు.'\n\nపై గద్యభాగానికి తగిన శీర్షిక ఏది?",
        options: [
            "సమయ ప్రాముఖ్యత",
            "విజయ రహస్యం",
            "జీవిత లక్ష్యం",
            "పట్టుదల"
        ],
        correct: 0,
        explanation: "గద్యభాగం మొత్తం సమయ విలువను, దాని సద్వినియోగాన్ని వివరిస్తుంది. కాబట్టి 'సమయ ప్రాముఖ్యత' సరైన శీర్షిక."
    },
    {
        question: "'పుస్తకం' అనే పదానికి సరైన పర్యాయపదం ఏది?",
        options: [
            "గ్రంథం",
            "కలం",
            "పాఠం",
            "లేఖ"
        ],
        correct: 0,
        explanation: "'గ్రంథం' అనేది 'పుస్తకం'కు పర్యాయపదం. మిగిలిన పదాలు వేర్వేరు అర్థాలను సూచిస్తాయి."
    },
    {
        question: "'అమృతం' అనే పదానికి సరైన విరుద్ధ పదం ఏది?",
        options: [
            "ఆహారం",
            "విషం",
            "నీరు",
            "పాలు"
        ],
        correct: 1,
        explanation: "'అమృతం'కు విరుద్ధ పదం 'విషం'. ఇది అర్థవిరుద్ధ పదజాలానికి చెందిన ప్రశ్న."
    },
    {
        question: "'చేతికి ఎముక లేదు' అనే జాతీయానికి సరైన భావం ఏది?",
        options: [
            "చాలా బలవంతుడు",
            "ఎక్కువ ఖర్చు చేసే వ్యక్తి",
            "చేతి గాయం కావడం",
            "పని చేయలేని వ్యక్తి"
        ],
        correct: 1,
        explanation: "'చేతికి ఎముక లేదు' అంటే డబ్బును విచక్షణ లేకుండా ఖర్చు చేసే వ్యక్తి అని అర్థం."
    },
    {
        question: "'ఆలస్యమైతే అమృతం విషం' అనే సామెత యొక్క భావం ఏమిటి?",
        options: [
            "అమృతం కూడా విషమవుతుంది",
            "సమయానికి చేయని పని విలువ కోల్పోతుంది",
            "విషం తాగకూడదు",
            "ఆలస్యం ఆరోగ్యానికి హానికరం"
        ],
        correct: 1,
        explanation: "సమయానికి చేయని మంచి పని కూడా ప్రయోజనం లేకుండా పోతుందని ఈ సామెత తెలియజేస్తుంది."
    },
    {
        question: "'రాముడు పాఠశాలకు వెళ్లాడు.' ఈ వాక్యంలో 'పాఠశాలకు' అనే పదం ఏ విభక్తిని సూచిస్తుంది?",
        options: [
            "ప్రథమా విభక్తి",
            "ద్వితీయా విభక్తి",
            "చతుర్థీ విభక్తి",
            "సప్తమీ విభక్తి"
        ],
        correct: 2,
        explanation: "'కు' ప్రత్యయం చతుర్థీ విభక్తిని సూచిస్తుంది. ఇది గమ్యస్థానాన్ని లేదా ప్రయోజనాన్ని తెలియజేస్తుంది."
    },
    {
        question: "'దేవాలయం' అనే పదంలో ఉన్న సమాసం ఏది?",
        options: [
            "ద్వంద్వ సమాసం",
            "తత్పురుష సమాసం",
            "బహువ్రీహి సమాసం",
            "ద్విగు సమాసం"
        ],
        correct: 1,
        explanation: "'దేవుని ఆలయం' అనే విగ్రహ వాక్యం ఆధారంగా ఇది తత్పురుష సమాసానికి ఉదాహరణ."
    },
    {
        question: "'లోకో భిన్నరుచిః' అనే నానుడి యొక్క భావం ఏమిటి?",
        options: [
            "ప్రపంచం ఒక్కటే",
            "ప్రతి వ్యక్తి అభిరుచి వేరు",
            "అందరూ ఒకే విధంగా ఆలోచిస్తారు",
            "రుచికరమైన ఆహారం అందరికీ ఇష్టం"
        ],
        correct: 1,
        explanation: "'లోకో భిన్నరుచిః' అంటే ప్రతి వ్యక్తికి అభిరుచులు, అభిప్రాయాలు భిన్నంగా ఉంటాయని అర్థం."
    },
    {
        question: "'పచ్చని పొలాలు రైతుకు ఆనందాన్ని కలిగించాయి.' ఈ వాక్యంలో విశేషణం ఏది?",
        options: [
            "పచ్చని",
            "పొలాలు",
            "రైతుకు",
            "ఆనందాన్ని"
        ],
        correct: 0,
        explanation: "'పచ్చని' అనే పదం 'పొలాలు' అనే నామవాచకాన్ని విశేషించే గుణవాచకం. కాబట్టి ఇది విశేషణం."
    },
    {
        question: "తెలుగు బోధనలో విద్యార్థుల శ్రవణ నైపుణ్యాన్ని అభివృద్ధి చేయడానికి అత్యంత అనుకూలమైన కార్యాచరణ ఏది?",
        options: [
            "వ్యాసరచన చేయించడం",
            "కథను వినిపించి ప్రశ్నలు అడగడం",
            "వ్యాకరణ నియమాలు కంఠస్థం చేయించడం",
            "పదాలను పదేపదే వ్రాయించడం"
        ],
        correct: 1,
        explanation: "కథను శ్రద్ధగా వినిపించి ప్రశ్నలు అడగడం ద్వారా శ్రవణ నైపుణ్యం, అవగాహన మరియు జ్ఞాపకశక్తి అభివృద్ధి చెందుతాయి."
    },
    {
        question: "'పరోపకారార్థమిదం శరీరం' అనే సూక్తి యొక్క భావం ఏమిటి?",
        options: [
            "శరీరాన్ని అలంకరించుకోవాలి",
            "శరీరాన్ని విశ్రాంతికి మాత్రమే ఉపయోగించాలి",
            "ఇతరులకు మేలు చేయడానికే ఈ శరీరం",
            "శరీరాన్ని కాపాడుకోవడం మాత్రమే ముఖ్యము"
        ],
        correct: 2,
        explanation: "'పరోపకారార్థమిదం శరీరం' అంటే మన శరీరం ఇతరులకు సహాయం చేయడానికి, సమాజానికి ఉపయోగపడడానికి ఉద్దేశించబడిందని భావం."
    },
    {
        question: "'విద్య' అనే పదానికి సరైన పర్యాయపదం ఏది?",
        options: [
            "జ్ఞానం",
            "ధనం",
            "వినయం",
            "పాఠశాల"
        ],
        correct: 0,
        explanation: "'జ్ఞానం' అనేది 'విద్య'కు సరైన పర్యాయపదం. మిగిలిన పదాలు విద్యకు సంబంధించినవైనా పర్యాయపదాలు కావు."
    },
    {
        question: "'నోరు జారడం' అనే జాతీయానికి సరైన భావం ఏమిటి?",
        options: [
            "స్పష్టంగా మాట్లాడటం",
            "అనుకోకుండా రహస్యాన్ని బయటపెట్టడం",
            "అస్పష్టంగా మాట్లాడటం",
            "ఎక్కువగా మాట్లాడటం"
        ],
        correct: 1,
        explanation: "'నోరు జారడం' అంటే అనుకోకుండా చెప్పకూడని విషయాన్ని బయటపెట్టడం."
    },
    {
        question: "'కష్టే ఫలీ' అనే సామెత తెలియజేసే సందేశం ఏమిటి?",
        options: [
            "అదృష్టమే అన్నీ",
            "కష్టపడితేనే ఫలితం లభిస్తుంది",
            "ధనవంతులకు మాత్రమే విజయం",
            "సమయం వృథా చేయాలి"
        ],
        correct: 1,
        explanation: "ఈ సామెత ప్రకారం శ్రమ లేకుండా విజయం సాధ్యం కాదు. కష్టానికి తగిన ఫలితం తప్పక లభిస్తుంది."
    },
    {
        question: "'రాముడు పండును తిన్నాడు.' ఈ వాక్యంలో 'పండును' అనే పదం ఏ విభక్తిని సూచిస్తుంది?",
        options: [
            "ప్రథమా విభక్తి",
            "ద్వితీయా విభక్తి",
            "తృతీయా విభక్తి",
            "సప్తమీ విభక్తి"
        ],
        correct: 1,
        explanation: "'పండును' కర్మ పదం. ఇది ద్వితీయా విభక్తిని సూచిస్తుంది."
    },
    {
        question: "'రాజపుత్రుడు' అనే పదం ఏ సమాసానికి ఉదాహరణ?",
        options: [
            "ద్వంద్వ సమాసం",
            "తత్పురుష సమాసం",
            "బహువ్రీహి సమాసం",
            "అవ్యయీభావ సమాసం"
        ],
        correct: 1,
        explanation: "'రాజు యొక్క పుత్రుడు' అనే విగ్రహ వాక్యం ఆధారంగా ఇది తత్పురుష సమాసం."
    },
    {
        question: "'రామ + ఆలయం' సంధి రూపం ఏది?",
        options: [
            "రామాలయం",
            "రామ్యాలయం",
            "రామలయం",
            "రాముఆలయం"
        ],
        correct: 0,
        explanation: "'రామ + ఆలయం' కలిసినప్పుడు సవర్ణదీర్ఘ సంధి జరిగి 'రామాలయం' అవుతుంది."
    },
    {
        question: "'ముఖం' అనే పదానికి నానార్థం కానిది ఏది?",
        options: [
            "మొగము",
            "ముందుభాగం",
            "ప్రవేశద్వారం",
            "పుస్తకం"
        ],
        correct: 3,
        explanation: "'ముఖం' అనే పదానికి మొగము, ముందు భాగం, ప్రవేశద్వారం వంటి అర్థాలు ఉన్నాయి. 'పుస్తకం' నానార్థం కాదు."
    },
    {
        question: "'మొక్కై వంగనిది మానై వంగునా' అనే సామెత యొక్క భావం ఏమిటి?",
        options: [
            "చిన్నప్పుడే మంచి అలవాట్లు నేర్పాలి",
            "చెట్లు ఎప్పుడూ వంగవు",
            "మొక్కలు బలంగా ఉంటాయి",
            "పెద్దవారిని మాత్రమే గౌరవించాలి"
        ],
        correct: 0,
        explanation: "చిన్న వయస్సులోనే మంచి అలవాట్లు, విలువలు నేర్పితేనే జీవితాంతం అవి నిలుస్తాయని ఈ సామెత సూచిస్తుంది."
    },
    {
        question: "తెలుగు భాషా బోధనలో 'చదివి అర్థం చేసుకునే నైపుణ్యాన్ని' అభివృద్ధి చేయడానికి అత్యంత అనుకూలమైన పద్ధతి ఏది?",
        options: [
            "వ్యాకరణ నియమాలు కంఠస్థం చేయించడం",
            "అపరిచిత గద్యాన్ని చదివించి ప్రశ్నలు అడగడం",
            "పదాలను పదేపదే వ్రాయించడం",
            "కేవలం పద్యాలను వల్లెవేయించడం"
        ],
        correct: 1,
        explanation: "అపరిచిత గద్యాన్ని చదివించి ప్రశ్నలు అడగడం ద్వారా పఠన గ్రహణశక్తి, విశ్లేషణ సామర్థ్యం మరియు పదజాలం అభివృద్ధి చెందుతాయి."
    },
    {
        question: "'అరచేతిలో వైకుంఠం' అనే జాతీయానికి సరైన భావం ఏది?",
        options: [
            "చాలా దూరంలో ఉండటం",
            "చాలా సులభంగా లభించడం",
            "చాలా కష్టపడి సంపాదించడం",
            "చేతిలో ఏమీ లేకపోవడం"
        ],
        correct: 1,
        explanation: "'అరచేతిలో వైకుంఠం' అంటే చాలా సులభంగా అందుబాటులో ఉండటం లేదా సులభంగా లభించడం అని అర్థం."
    },
    {
        question: "'కాకి పిల్ల కాకికి ముద్దు' అనే సామెత యొక్క భావం ఏమిటి?",
        options: [
            "కాకులు పిల్లలను ప్రేమించవు",
            "ప్రతి ఒక్కరికీ తనవే గొప్పగా కనిపిస్తాయి",
            "పిల్లలను పెంచడం కష్టం",
            "కాకి చాలా తెలివైన పక్షి"
        ],
        correct: 1,
        explanation: "ఈ సామెత ప్రకారం ప్రతి వ్యక్తికి తన పిల్లలు లేదా తన వస్తువులే అత్యంత విలువైనవిగా అనిపిస్తాయి."
    },
    {
        question: "'గజేంద్రుడు' అనే పదంలో ఉన్న సమాసం ఏది?",
        options: [
            "ద్విగు సమాసం",
            "కర్మధారయ సమాసం",
            "బహువ్రీహి సమాసం",
            "తత్పురుష సమాసం"
        ],
        correct: 2,
        explanation: "'గజేంద్రుడు' అంటే 'ఏనుగులలో శ్రేష్ఠుడు'. ఇది బహువ్రీహి సమాసానికి ఉదాహరణ."
    },
    {
        question: "'లోక + ఈశుడు' సంధి రూపం ఏది?",
        options: [
            "లోకీశుడు",
            "లోకేశుడు",
            "లోకైశుడు",
            "లోకశుడు"
        ],
        correct: 1,
        explanation: "'అ + ఈ' కలిసినప్పుడు గుణసంధి జరిగి 'ఏ' అవుతుంది. కాబట్టి సరైన రూపం 'లోకేశుడు'."
    },
    {
        question: "'నది' అనే పదానికి సరైన పర్యాయపదం ఏది?",
        options: [
            "సరస్సు",
            "తటాకం",
            "సరిత్",
            "సముద్రం"
        ],
        correct: 2,
        explanation: "'సరిత్' అనేది 'నది'కి సరైన పర్యాయపదం. మిగిలిన పదాలు వేర్వేరు జలాశయాలను సూచిస్తాయి."
    },
    {
        question: "'గురు' అనే పదానికి సరైన విరుద్ధ పదం ఏది?",
        options: [
            "శిష్యుడు",
            "లఘు",
            "పండితుడు",
            "మిత్రుడు"
        ],
        correct: 1,
        explanation: "'గురు' అంటే భారమైనది. దీనికి విరుద్ధ పదం 'లఘు', అంటే తేలికైనది."
    },
    {
        question: "'విద్యార్థులు శ్రద్ధగా పాఠం వింటున్నారు.' ఈ వాక్యంలో క్రియావిశేషణం ఏది?",
        options: [
            "విద్యార్థులు",
            "శ్రద్ధగా",
            "పాఠం",
            "వింటున్నారు"
        ],
        correct: 1,
        explanation: "'శ్రద్ధగా' అనే పదం క్రియ ఎలా జరుగుతుందో తెలియజేస్తుంది. కాబట్టి అది క్రియావిశేషణం."
    },
    {
        question: "తెలుగు భాషా బోధనలో 'మౌఖిక వ్యక్తీకరణ నైపుణ్యాన్ని' పెంపొందించడానికి అత్యంత అనుకూలమైన కార్యాచరణ ఏది?",
        options: [
            "అపరిచిత గద్యం చదవడం",
            "చిత్రాన్ని పరిశీలించి మాట్లాడించడం",
            "పదాలను కంఠస్థం చేయించడం",
            "వ్యాకరణ నియమాలు వ్రాయించడం"
        ],
        correct: 1,
        explanation: "చిత్రం ఆధారంగా మాట్లాడించడం వల్ల విద్యార్థుల భావవ్యక్తీకరణ, పదసంపద మరియు మాట్లాడే నైపుణ్యం అభివృద్ధి చెందుతుంది."
    },
    {
        question: "తెలుగు బోధనలో 'నిర్మాణవాద' (Constructivist) విధానానికి అనుకూలమైన బోధనా పద్ధతి ఏది?",
        options: [
            "ఉపాధ్యాయుడు మాత్రమే మాట్లాడడం",
            "విద్యార్థులు చర్చించి స్వయంగా భావాన్ని నిర్మించుకోవడం",
            "ప్రశ్నలు అడగకుండా పాఠం చెప్పడం",
            "కేవలం కంఠస్థం చేయించడం"
        ],
        correct: 1,
        explanation: "నిర్మాణవాదం ప్రకారం విద్యార్థులు తమ అనుభవాలు, చర్చలు మరియు కార్యకలాపాల ద్వారా స్వయంగా జ్ఞానాన్ని నిర్మించుకుంటారు."
    },
    {
        question: "తెలుగు భాషా బోధనలో నిరంతర సమగ్ర మూల్యాంకనం (CCE) యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        options: [
            "కేవలం వార్షిక పరీక్ష నిర్వహించడం",
            "విద్యార్థుల అభ్యాస పురోగతిని నిరంతరం గమనించి తగిన ప్రతిస్పందన ఇవ్వడం",
            "మార్కులు మాత్రమే నమోదు చేయడం",
            "ప్రతిభావంతులైన విద్యార్థులను మాత్రమే గుర్తించడం"
        ],
        correct: 1,
        explanation: "CCE ద్వారా విద్యార్థుల అభ్యాసాన్ని నిరంతరం పరిశీలించి, వారి అభివృద్ధికి అవసరమైన సూచనలు మరియు సహాయాన్ని అందిస్తారు."
    },
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న పిల్లలలో ఎక్కువగా కనిపించే లక్షణం ఏది?",
        options: [
            "సామాజిక పరస్పర చర్యల్లో ఇబ్బంది",
            "ఎల్లప్పుడూ అధిక మేధస్సు కలిగి ఉండటం",
            "ప్రతి విషయంలో అసాధారణ ప్రతిభ చూపడం",
            "కేవలం శారీరక ఎదుగుదలలో ఆలస్యం"
        ],
        correct: 0,
        explanation: "ASD ఉన్న పిల్లలలో సామాజిక పరస్పర చర్యలు, సంభాషణ మరియు ప్రవర్తనలో పరిమితులు ప్రధాన లక్షణాలు. ప్రతి ASD విద్యార్థిలో అన్ని లక్షణాలు ఒకే విధంగా ఉండవు."
    },
    {
        question: "వినికిడి లోపం (Hearing Impairment) ఉన్న విద్యార్థికి తరగతి గదిలో అత్యంత అనుకూలమైన స్థానం ఏది?",
        options: [
            "తరగతి చివరి బెంచ్",
            "ఉపాధ్యాయుడికి సమీపంలో ముందు వరుస",
            "కిటికీ పక్కన వెనుక వరుస",
            "తరగతి వెలుపల"
        ],
        correct: 1,
        explanation: "ఉపాధ్యాయుడికి సమీపంలో కూర్చోబెడితే పెదవుల కదలికలు, ముఖ కవళికలు మరియు సూచనలు స్పష్టంగా గమనించగలుగుతారు."
    },
    {
        question: "డిస్లెక్సియా (Dyslexia) ప్రధానంగా ఏ నైపుణ్యాన్ని ప్రభావితం చేస్తుంది?",
        options: [
            "చదవడం",
            "వినడం",
            "నడవడం",
            "చూడడం"
        ],
        correct: 0,
        explanation: "డిస్లెక్సియా అనేది ప్రత్యేక అభ్యాస వైకల్యం. ఇది ముఖ్యంగా చదవడం, పదాలను గుర్తించడం మరియు అక్షర-ధ్వని సంబంధాన్ని ప్రభావితం చేస్తుంది."
    },
    {
        question: "వ్యక్తిగత విద్యా ప్రణాళిక (IEP) యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        options: [
            "అందరికీ ఒకే విధమైన బోధన అందించడం",
            "ప్రత్యేక అవసరాలున్న విద్యార్థికి వ్యక్తిగత లక్ష్యాలు మరియు బోధనా ప్రణాళిక రూపొందించడం",
            "ఉపాధ్యాయుల సేవా వివరాలు నమోదు చేయడం",
            "పాఠశాల వార్షిక ప్రణాళిక తయారు చేయడం"
        ],
        correct: 1,
        explanation: "IEP ప్రతి విద్యార్థి సామర్థ్యం, అవసరాలు మరియు లక్ష్యాలను పరిగణనలోకి తీసుకొని వ్యక్తిగత అభ్యాస ప్రణాళికను రూపొందిస్తుంది."
    },
    {
        question: "క్రింది వాటిలో వినికిడి లోపం (Hearing Impairment) ఉన్న విద్యార్థులతో సమర్థవంతమైన సంభాషణకు అనుకూలమైన పద్ధతి ఏది?",
        options: [
            "వెనుక వైపు నిలబడి మాట్లాడడం",
            "ముఖాముఖిగా స్పష్టంగా మాట్లాడడం",
            "చాలా వేగంగా మాట్లాడడం",
            "గట్టిగా మాత్రమే అరవడం"
        ],
        correct: 1,
        explanation: "ముఖాముఖిగా స్పష్టంగా మాట్లాడితే విద్యార్థి పెదవుల కదలికలు, ముఖ భావాలు గమనించి సందేశాన్ని సులభంగా అర్థం చేసుకుంటాడు."
    },
    {
        question: "డిస్కాల్కులియా (Dyscalculia) ఉన్న విద్యార్థికి ప్రధానంగా ఏ విషయంలో ఇబ్బంది ఉంటుంది?",
        options: [
            "సంఖ్యా భావన మరియు గణిత గణనలు",
            "రంగులను గుర్తించడం",
            "వినికిడి",
            "శారీరక సమతుల్యత"
        ],
        correct: 0,
        explanation: "డిస్కాల్కులియా ఉన్న విద్యార్థులకు సంఖ్యలు, గణనలు, గణిత చిహ్నాలు మరియు పరిమాణాలను అర్థం చేసుకోవడంలో ఇబ్బందులు ఉంటాయి."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education)లో ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న విద్యార్థికి అత్యంత అనుకూలమైన బోధనా వ్యూహం ఏది?",
        options: [
            "దృశ్య సహాయకాలు (Visual Supports) ఉపయోగించడం",
            "పెద్ద పెద్ద ఉపన్యాసాలు ఇవ్వడం",
            "కేవలం కంఠస్థం చేయించడం",
            "విద్యార్థిని ఒంటరిగా ఉంచడం"
        ],
        correct: 0,
        explanation: "దృశ్య సూచనలు, చిత్రాలు, షెడ్యూల్లు మరియు సంకేతాలు ASD ఉన్న విద్యార్థులకు అర్థం చేసుకోవడంలో మరియు దినచర్యను అనుసరించడంలో సహాయపడతాయి."
    },
    {
        question: "వినికిడి లోపం ఉన్న విద్యార్థులకు భాషా అభివృద్ధి కోసం ఎక్కువగా ఉపయోగించే సంభాషణ విధానం ఏది?",
        options: [
            "సంకేత భాష (Sign Language)",
            "మోర్స్ కోడ్",
            "బ్రెయిల్ లిపి",
            "రోమన్ లిపి"
        ],
        correct: 0,
        explanation: "సంకేత భాష వినికిడి లోపం ఉన్న వ్యక్తుల మధ్య సహజమైన మరియు సమర్థవంతమైన సంభాషణ సాధనం."
    },
    {
        question: "డిస్గ్రాఫియా (Dysgraphia) ఉన్న విద్యార్థికి ఏ నైపుణ్యంలో ఎక్కువ ఇబ్బంది ఉంటుంది?",
        options: [
            "రచనా నైపుణ్యం",
            "ఈత కొట్టడం",
            "వినికిడి",
            "చూపు"
        ],
        correct: 0,
        explanation: "డిస్గ్రాఫియా వల్ల చేతిరాత, అక్షర నిర్మాణం, వ్రాత వేగం మరియు వాక్య నిర్మాణంలో ఇబ్బందులు ఎదురవుతాయి."
    },
    {
        question: "RPWD చట్టం–2016 ప్రకారం సమగ్ర విద్య (Inclusive Education) యొక్క ముఖ్య ఉద్దేశ్యం ఏమిటి?",
        options: [
            "ప్రత్యేక అవసరాలున్న విద్యార్థులను ప్రత్యేక పాఠశాలలకు మాత్రమే పంపడం",
            "అన్ని విద్యార్థులకు సమాన అవకాశాలతో నాణ్యమైన విద్యను అందించడం",
            "వైకల్యం ఉన్న విద్యార్థులకు పరీక్షలు నిర్వహించకపోవడం",
            "సాధారణ పాఠశాలల్లో ప్రవేశం నిరాకరించడం"
        ],
        correct: 1,
        explanation: "RPWD Act–2016 ప్రకారం వైకల్యం ఉన్న విద్యార్థులకు సమాన అవకాశాలు, వివక్ష రహిత విద్య మరియు సమగ్ర విద్యను కల్పించడం ప్రభుత్వ బాధ్యత."
    },
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న విద్యార్థులలో తరచుగా కనిపించే ప్రవర్తనా లక్షణం ఏది?",
        options: [
            "మార్పులను సులభంగా అంగీకరించడం",
            "ఒకే విధమైన దినచర్యను (Routine) ఇష్టపడడం",
            "ప్రతి కొత్త వ్యక్తితో వెంటనే స్నేహం చేయడం",
            "ఎల్లప్పుడూ నాయకత్వం వహించడం"
        ],
        correct: 1,
        explanation: "ASD ఉన్న విద్యార్థులు స్థిరమైన దినచర్యను ఇష్టపడతారు. అకస్మాత్తుగా మార్పులు వస్తే ఆందోళన లేదా అసౌకర్యం వ్యక్తం చేసే అవకాశం ఉంటుంది."
    },
    {
        question: "వినికిడి లోపం (Hearing Impairment) ఉన్న విద్యార్థికి పాఠాన్ని బోధిస్తున్నప్పుడు ఉపాధ్యాయుడు చేయకూడని పని ఏది?",
        options: [
            "ముఖం విద్యార్థి వైపు ఉంచి మాట్లాడడం",
            "బ్లాక్‌బోర్డు వైపు తిరిగి మాట్లాడడం",
            "స్పష్టంగా ఉచ్చరించడం",
            "అవసరమైన దృశ్య సహాయకాలను ఉపయోగించడం"
        ],
        correct: 1,
        explanation: "ఉపాధ్యాయుడు బోర్డు వైపు తిరిగి మాట్లాడితే విద్యార్థి పెదవుల కదలికలను గమనించలేడు. అందువల్ల సందేశాన్ని అర్థం చేసుకోవడం కష్టమవుతుంది."
    },
    {
        question: "డిస్లెక్సియా (Dyslexia) ఉన్న విద్యార్థికి అత్యంత అనుకూలమైన బోధనా పద్ధతి ఏది?",
        options: [
            "ఎక్కువ మొత్తంలో చదవమని ఒత్తిడి చేయడం",
            "బహుఇంద్రియ (Multi-sensory) బోధనా విధానాన్ని ఉపయోగించడం",
            "పదాలను పదేపదే కంఠస్థం చేయించడం",
            "తప్పులకు శిక్షించడం"
        ],
        correct: 1,
        explanation: "దృశ్య, శ్రవణ, స్పర్శ వంటి బహుఇంద్రియ బోధనా పద్ధతులు డిస్లెక్సియా ఉన్న విద్యార్థుల చదవు నైపుణ్యాన్ని మెరుగుపరుస్తాయి."
    },
    {
        question: "డిస్గ్రాఫియా (Dysgraphia) ఉన్న విద్యార్థి అభ్యాసాన్ని మూల్యాంకనం చేయడానికి సరైన అనుకూలీకరణ (Accommodation) ఏది?",
        options: [
            "వ్రాతపరీక్ష మాత్రమే నిర్వహించడం",
            "మౌఖిక సమాధానాలకు అవకాశం కల్పించడం",
            "పరీక్ష రాయకుండా మినహాయించడం",
            "తక్కువ మార్కులు ఇవ్వడం"
        ],
        correct: 1,
        explanation: "డిస్గ్రాఫియా ఉన్న విద్యార్థికి వ్రాయడంలో ఇబ్బంది ఉంటుంది. కాబట్టి మౌఖిక సమాధానాలు లేదా కంప్యూటర్ వినియోగం వంటి అనుకూలీకరణలు ఉపయోగపడతాయి."
    },
    {
        question: "కోక్లియర్ ఇంప్లాంట్ (Cochlear Implant) ప్రధానంగా ఎవరికోసం ఉపయోగిస్తారు?",
        options: [
            "దృష్టి లోపం ఉన్నవారికి",
            "తీవ్రమైన వినికిడి లోపం ఉన్నవారికి",
            "డిస్లెక్సియా ఉన్నవారికి",
            "లోకోమోటర్ వైకల్యం ఉన్నవారికి"
        ],
        correct: 1,
        explanation: "కోక్లియర్ ఇంప్లాంట్ తీవ్రమైన లేదా అత్యంత తీవ్రమైన వినికిడి లోపం ఉన్న వ్యక్తులకు శబ్దాన్ని గ్రహించడంలో సహాయపడే వైద్య పరికరం."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education)లో ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న విద్యార్థికి సామాజిక నైపుణ్యాలను అభివృద్ధి చేయడానికి అత్యంత అనుకూలమైన కార్యాచరణ ఏది?",
        options: [
            "సహచరులతో జతగా (Peer Pairing) కార్యకలాపాలు నిర్వహించడం",
            "విద్యార్థిని ఎల్లప్పుడూ ఒంటరిగా కూర్చోబెట్టడం",
            "కేవలం గృహపాఠాలు ఇవ్వడం",
            "తరగతి చర్చల నుండి దూరంగా ఉంచడం"
        ],
        correct: 0,
        explanation: "Peer Pairing మరియు చిన్న సమూహ కార్యకలాపాలు ASD ఉన్న విద్యార్థుల సామాజిక పరస్పర చర్యలను సహజంగా అభివృద్ధి చేస్తాయి."
    },
    {
        question: "డిస్కాల్కులియా (Dyscalculia) ఉన్న విద్యార్థికి గణితం బోధించేటప్పుడు అత్యంత ప్రభావవంతమైన బోధనా సాధనం ఏది?",
        options: [
            "కేవలం సూత్రాలను కంఠస్థం చేయించడం",
            "కాంక్రీటు వస్తువులు (Concrete Materials) ఉపయోగించడం",
            "ఎక్కువ హోంవర్క్ ఇవ్వడం",
            "పెద్ద సంఖ్యలతో ప్రారంభించడం"
        ],
        correct: 1,
        explanation: "అబాకస్, కౌంటర్లు, కర్రలు వంటి కాంక్రీటు వస్తువులు సంఖ్యా భావనను అభివృద్ధి చేయడంలో డిస్కాల్కులియా ఉన్న విద్యార్థులకు సహాయపడతాయి."
    },
    {
        question: "వినికిడి లోపం (Hearing Impairment) ఉన్న విద్యార్థికి తరగతి గదిలో నేపథ్య శబ్దాన్ని తగ్గించడం వల్ల కలిగే ప్రధాన ప్రయోజనం ఏమిటి?",
        options: [
            "విద్యార్థి నిద్రపోతాడు",
            "ఉపాధ్యాయుడి మాటలు స్పష్టంగా వినిపిస్తాయి",
            "విద్యార్థి వ్రాత వేగం పెరుగుతుంది",
            "పరీక్ష మార్కులు స్వయంగా పెరుగుతాయి"
        ],
        correct: 1,
        explanation: "నేపథ్య శబ్దం తగ్గితే ఉపాధ్యాయుడి స్వరం స్పష్టంగా వినిపించి, వినికిడి పరికరాలను ఉపయోగించే విద్యార్థులకు కూడా అవగాహన మెరుగుపడుతుంది."
    },
    {
        question: "ప్రత్యేక అభ్యాస వైకల్యం (Specific Learning Disability - SLD) ఉన్న విద్యార్థుల మేధస్సు (Intelligence) గురించి సరైన వాక్యం ఏది?",
        options: [
            "వారందరికీ తక్కువ మేధస్సు ఉంటుంది",
            "వారికి సాధారణ లేదా అంతకంటే ఎక్కువ మేధస్సు ఉండవచ్చు",
            "వారికి మేధస్సు ఉండదు",
            "వారు నేర్చుకోలేరు"
        ],
        correct: 1,
        explanation: "SLD అనేది మేధస్సు లోపం కాదు. చాలా మంది విద్యార్థులకు సాధారణ లేదా అధిక మేధస్సు ఉన్నప్పటికీ చదవడం, వ్రాయడం లేదా గణితంలో ప్రత్యేక ఇబ్బందులు ఉంటాయి."
    },
    {
        question: "వ్యక్తిగత విద్యా ప్రణాళిక (IEP) విజయవంతంగా అమలు కావడానికి అత్యంత ముఖ్యమైన అంశం ఏది?",
        options: [
            "ఉపాధ్యాయుడు ఒంటరిగా నిర్ణయాలు తీసుకోవడం",
            "తల్లిదండ్రులు, ఉపాధ్యాయులు మరియు నిపుణుల సహకారం",
            "వార్షిక పరీక్షలపై మాత్రమే దృష్టి పెట్టడం",
            "ఒకే విధమైన లక్ష్యాలను అందరికీ ఇవ్వడం"
        ],
        correct: 1,
        explanation: "IEP విజయవంతంగా అమలవ్వాలంటే తల్లిదండ్రులు, సాధారణ ఉపాధ్యాయులు, ప్రత్యేక ఉపాధ్యాయులు మరియు ఇతర నిపుణులు కలిసి పనిచేయాలి."
    },
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న విద్యార్థి తరచుగా కళ్లలోకి చూడకుండా మాట్లాడుతున్నాడు. ఉపాధ్యాయుడు మొదట చేయవలసిన చర్య ఏది?",
        options: [
            "విద్యార్థిని శిక్షించడం",
            "కళ్లలోకి చూడమని బలవంతం చేయడం",
            "అతని సంభాషణ శైలిని అర్థం చేసుకొని ప్రత్యామ్నాయ సంభాషణ అవకాశాలు కల్పించడం",
            "తరగతి నుండి బయటకు పంపించడం"
        ],
        correct: 2,
        explanation: "ASD ఉన్న ప్రతి విద్యార్థి కంటి సంపర్కాన్ని ఒకే విధంగా చేయడు. బలవంతం చేయకుండా, వారి సంభాషణ శైలిని గౌరవిస్తూ మద్దతు ఇవ్వాలి."
    },
    {
        question: "వినికిడి లోపం (Hearing Impairment) ఉన్న విద్యార్థికి కొత్త పదాలను బోధించేటప్పుడు అత్యంత ప్రభావవంతమైన పద్ధతి ఏది?",
        options: [
            "పదాలను మాత్రమే వ్రాయించడం",
            "చిత్రాలు, సంకేతాలు మరియు పెదవుల కదలికలతో బోధించడం",
            "చాలా వేగంగా మాట్లాడడం",
            "కేవలం గృహపాఠం ఇవ్వడం"
        ],
        correct: 1,
        explanation: "దృశ్య ఆధారాలు, సంకేత భాష మరియు స్పష్టమైన ఉచ్చారణ వినికిడి లోపం ఉన్న విద్యార్థులకు పదాల అర్థాన్ని సులభంగా గ్రహించేందుకు సహాయపడతాయి."
    },
    {
        question: "డిస్లెక్సియా (Dyslexia) ఉన్న విద్యార్థి చదివేటప్పుడు పదాలను వదిలివేస్తున్నాడు. ఉపాధ్యాయుడు ముందుగా ఏమి చేయాలి?",
        options: [
            "ఎక్కువగా శిక్షించడం",
            "అదే పేరాను పదిసార్లు చదవమని చెప్పడం",
            "ధ్వని-అక్షర (Phonics) ఆధారిత బోధన మరియు అదనపు సాధన కల్పించడం",
            "పరీక్షలకు అనుమతించకపోవడం"
        ],
        correct: 2,
        explanation: "Phonics ఆధారిత బోధన, చిన్న దశల్లో అభ్యాసం మరియు నిరంతర సాధన డిస్లెక్సియా ఉన్న విద్యార్థుల చదవు నైపుణ్యాన్ని మెరుగుపరుస్తాయి."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education)లో సహచర బోధన (Peer Tutoring) యొక్క ప్రధాన ప్రయోజనం ఏమిటి?",
        options: [
            "ఉపాధ్యాయుని అవసరం ఉండదు",
            "విద్యార్థుల మధ్య సహకారం మరియు సామాజిక పరస్పర చర్య పెరుగుతుంది",
            "పరీక్షలు అవసరం ఉండవు",
            "ప్రత్యేక అవసరాలున్న విద్యార్థులను వేరు చేయడం"
        ],
        correct: 1,
        explanation: "Peer Tutoring ద్వారా విద్యార్థులు పరస్పరం నేర్చుకుంటారు. ఇది సామాజిక నైపుణ్యాలు, ఆత్మవిశ్వాసం మరియు అభ్యాసాన్ని మెరుగుపరుస్తుంది."
    },
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న విద్యార్థి అకస్మాత్తుగా కోపానికి గురైనప్పుడు ఉపాధ్యాయుడు చేయవలసిన సరైన చర్య ఏది?",
        options: [
            "అందరి ముందు మందలించడం",
            "శాంతమైన వాతావరణం కల్పించి, కారణాన్ని గుర్తించే ప్రయత్నం చేయడం",
            "వెంటనే ఇంటికి పంపించడం",
            "తరగతి నుండి శాశ్వతంగా తొలగించడం"
        ],
        correct: 1,
        explanation: "ASD ఉన్న విద్యార్థుల ప్రవర్తనకు కారణం తెలుసుకోవడం ముఖ్యం. ప్రశాంతమైన వాతావరణం కల్పించడం ద్వారా వారు త్వరగా స్థిరపడతారు."
    },
    {
        question: "హియరింగ్ ఎయిడ్ (Hearing Aid) యొక్క ప్రధాన ఉపయోగం ఏమిటి?",
        options: [
            "దృష్టిని మెరుగుపరచడం",
            "శబ్దాన్ని పెంచి వినికిడిని సులభతరం చేయడం",
            "మాట్లాడే సామర్థ్యాన్ని పూర్తిగా మార్చడం",
            "చదివే వేగాన్ని పెంచడం"
        ],
        correct: 1,
        explanation: "Hearing Aid శబ్దాన్ని పెంచి వినికిడి లోపం ఉన్న వ్యక్తికి వినడాన్ని సులభతరం చేస్తుంది. ఇది వినికిడిని పూర్తిగా సాధారణ స్థితికి తీసుకురాదు."
    },
    {
        question: "డిస్గ్రాఫియా (Dysgraphia) ఉన్న విద్యార్థికి పరీక్షలో అనుకూలీకరణ (Accommodation)గా క్రింది వాటిలో ఏది సరైనది?",
        options: [
            "అదనపు సమయం ఇవ్వడం",
            "పరీక్ష రాయనివ్వకపోవడం",
            "అన్ని ప్రశ్నలకు మార్కులు ఇవ్వడం",
            "విద్యార్థిని వేరే పాఠశాలకు పంపించడం"
        ],
        correct: 0,
        explanation: "డిస్గ్రాఫియా ఉన్న విద్యార్థులకు అదనపు సమయం, కంప్యూటర్ లేదా స్క్రైబ్ వంటి అనుకూలీకరణలు సరైన మూల్యాంకనానికి సహాయపడతాయి."
    },
    {
        question: "ప్రత్యేక అభ్యాస వైకల్యం (Specific Learning Disability - SLD) ఉన్న విద్యార్థి విజయానికి అత్యంత ముఖ్యమైన అంశం ఏది?",
        options: [
            "తరచూ శిక్షించడం",
            "వ్యక్తిగత అవసరాలకు అనుగుణంగా బోధన అందించడం",
            "తక్కువ అంచనాలు పెట్టుకోవడం",
            "సాధారణ తరగతి నుండి తొలగించడం"
        ],
        correct: 1,
        explanation: "SLD ఉన్న విద్యార్థులకు వ్యక్తిగత అవసరాలను దృష్టిలో ఉంచుకొని బోధిస్తే వారి అభ్యాస పురోగతి గణనీయంగా మెరుగుపడుతుంది."
    },
    {
        question: "క్రింది వాటిలో ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న విద్యార్థికి దృశ్య షెడ్యూల్ (Visual Schedule) ఉపయోగించే ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        options: [
            "విద్యార్థిని పరీక్షించడం",
            "రోజువారీ కార్యక్రమాలను ముందుగానే అర్థం చేసుకునేలా చేయడం",
            "గృహపాఠాలను పెంచడం",
            "శిక్ష విధించడం"
        ],
        correct: 1,
        explanation: "Visual Schedule ద్వారా విద్యార్థి రోజులో జరిగే కార్యక్రమాలను ముందుగానే తెలుసుకొని ఆందోళన తగ్గించుకొని స్వతంత్రంగా వ్యవహరిస్తాడు."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education) విజయవంతం కావడానికి అత్యంత అవసరమైనది ఏది?",
        options: [
            "ప్రత్యేక అవసరాలున్న విద్యార్థులను వేరు చేయడం",
            "ఉపాధ్యాయులు, తల్లిదండ్రులు మరియు సమాజం మధ్య సమన్వయం",
            "కేవలం వార్షిక పరీక్షలు నిర్వహించడం",
            "ప్రత్యేక అవసరాలున్న విద్యార్థులకు ప్రవేశం నిరాకరించడం"
        ],
        correct: 1,
        explanation: "సమగ్ర విద్య విజయవంతం కావాలంటే పాఠశాల, తల్లిదండ్రులు, నిపుణులు మరియు సమాజం కలిసి విద్యార్థి అభివృద్ధికి సహకరించాలి."
    },
    {
        question: "మేధో వైకల్యం (Intellectual Disability) యొక్క ప్రధాన లక్షణం ఏది?",
        options: [
            "కేవలం శారీరక ఎదుగుదలలో ఆలస్యం",
            "మేధో సామర్థ్యం మరియు అనుకూల ప్రవర్తనలో గణనీయమైన పరిమితులు",
            "చూపు పూర్తిగా కోల్పోవడం",
            "వినికిడి లోపం మాత్రమే ఉండటం"
        ],
        correct: 1,
        explanation: "మేధో వైకల్యంలో మేధో సామర్థ్యం (IQ)తో పాటు అనుకూల ప్రవర్తన, స్వీయ సంరక్షణ, సామాజిక మరియు దైనందిన జీవన నైపుణ్యాలలో పరిమితులు కనిపిస్తాయి."
    },
    {
        question: "RPWD చట్టం–2016 ప్రకారం ఒక వ్యక్తికి రెండు లేదా అంతకంటే ఎక్కువ వైకల్యాలు కలిగి ఉంటే దానిని ఏమంటారు?",
        options: [
            "మేధో వైకల్యం",
            "బహుళ వైకల్యాలు (Multiple Disabilities)",
            "ప్రత్యేక అభ్యాస వైకల్యం",
            "లోకోమోటర్ వైకల్యం"
        ],
        correct: 1,
        explanation: "రెండు లేదా అంతకంటే ఎక్కువ వైకల్యాలు ఒకే వ్యక్తిలో కలిసి ఉన్నప్పుడు దానిని బహుళ వైకల్యాలు (Multiple Disabilities) అంటారు."
    },
    {
        question: "దృష్టి లోపం (Visual Impairment) ఉన్న విద్యార్థులు చదవడానికి ఎక్కువగా ఉపయోగించే లిపి ఏది?",
        options: [
            "రోమన్ లిపి",
            "బ్రెయిల్ లిపి (Braille)",
            "సంకేత భాష",
            "మోర్స్ కోడ్"
        ],
        correct: 1,
        explanation: "బ్రెయిల్ లిపి స్పర్శ ఆధారిత లిపి. దృష్టి లోపం ఉన్న విద్యార్థులు చదవడం మరియు వ్రాయడం కోసం దీనిని ఉపయోగిస్తారు."
    },
    {
        question: "మేధో వైకల్యం (Intellectual Disability) ఉన్న విద్యార్థికి బోధించేటప్పుడు అత్యంత అనుకూలమైన పద్ధతి ఏది?",
        options: [
            "ఒకేసారి ఎక్కువ సమాచారం ఇవ్వడం",
            "చిన్న చిన్న దశల్లో బోధించి తరచూ పునరావృతం చేయడం",
            "కేవలం గృహపాఠాల ద్వారా నేర్పడం",
            "విద్యార్థిని స్వయంగా నేర్చుకోమని చెప్పడం"
        ],
        correct: 1,
        explanation: "చిన్న దశల్లో బోధించడం, పునరావృత సాధన మరియు నిరంతర ప్రతిస్పందన మేధో వైకల్యం ఉన్న విద్యార్థుల అభ్యాసాన్ని మెరుగుపరుస్తాయి."
    },
    {
        question: "Orientation and Mobility శిక్షణ ప్రధానంగా ఎవరికోసం ఉద్దేశించబడింది?",
        options: [
            "వినికిడి లోపం ఉన్నవారికి",
            "దృష్టి లోపం (Visual Impairment) ఉన్నవారికి",
            "డిస్లెక్సియా ఉన్నవారికి",
            "మేధో వైకల్యం ఉన్నవారికి మాత్రమే"
        ],
        correct: 1,
        explanation: "Orientation and Mobility శిక్షణ ద్వారా దృష్టి లోపం ఉన్న వ్యక్తులు పరిసరాలను సురక్షితంగా గుర్తించి స్వతంత్రంగా సంచరించడం నేర్చుకుంటారు."
    },
    {
        question: "బహుళ వైకల్యాలు (Multiple Disabilities) ఉన్న విద్యార్థి కోసం వ్యక్తిగత విద్యా ప్రణాళిక (IEP) రూపొందించేటప్పుడు ముఖ్యంగా దేనిపై దృష్టి పెట్టాలి?",
        options: [
            "అందరికీ ఒకే లక్ష్యాలు నిర్ణయించడం",
            "విద్యార్థి వ్యక్తిగత అవసరాలు మరియు ప్రతి వైకల్యం ప్రభావాన్ని పరిగణనలోకి తీసుకోవడం",
            "కేవలం పరీక్ష మార్కులపై దృష్టి పెట్టడం",
            "పాఠ్యపుస్తకాన్ని పూర్తిగా పూర్తి చేయడం"
        ],
        correct: 1,
        explanation: "బహుళ వైకల్యాలు ఉన్న విద్యార్థి అవసరాలు ప్రత్యేకంగా ఉంటాయి. అందువల్ల IEPలో వ్యక్తిగత సామర్థ్యాలు మరియు అవసరాలను పరిగణించాలి."
    },
    {
        question: "క్రింది వాటిలో దృష్టి లోపం (Visual Impairment) ఉన్న విద్యార్థికి అనుకూలీకరణ (Accommodation) ఏది?",
        options: [
            "తరగతి నుండి బయటకు పంపించడం",
            "పెద్ద అక్షరాల పుస్తకాలు లేదా బ్రెయిల్ పాఠ్యాంశం అందించడం",
            "పరీక్ష రాయకుండా మినహాయించడం",
            "మార్కులు తగ్గించడం"
        ],
        correct: 1,
        explanation: "Large Print, Braille, Audio Books వంటి అనుకూలీకరణలు దృష్టి లోపం ఉన్న విద్యార్థుల అభ్యాసానికి సహాయపడతాయి."
    },
    {
        question: "మేధో వైకల్యం (Intellectual Disability) ఉన్న విద్యార్థులలో క్రింది ఏ నైపుణ్యాన్ని అభివృద్ధి చేయడం అత్యంత ముఖ్యమైనది?",
        options: [
            "దైనందిన జీవన నైపుణ్యాలు (Daily Living Skills)",
            "అధునాతన ప్రోగ్రామింగ్",
            "పోటీ పరీక్షల శిక్షణ మాత్రమే",
            "విదేశీ భాషలను కంఠస్థం చేయించడం"
        ],
        correct: 0,
        explanation: "స్వీయ సంరక్షణ, వ్యక్తిగత పరిశుభ్రత, డబ్బు వినియోగం, సామాజిక నైపుణ్యాలు వంటి దైనందిన జీవన నైపుణ్యాలు స్వతంత్ర జీవితానికి అవసరం."
    },
    {
        question: "దృష్టి లోపం (Visual Impairment) ఉన్న విద్యార్థికి గణిత బోధనలో అత్యంత ఉపయోగకరమైన సాధనం ఏది?",
        options: [
            "బ్రెయిల్ గణిత పరికరాలు (Braille Mathematics Kit)",
            "కేవలం బ్లాక్‌బోర్డు",
            "చిత్రాలు మాత్రమే",
            "వీడియోలు మాత్రమే"
        ],
        correct: 0,
        explanation: "Braille Mathematics Kit ద్వారా సంఖ్యలు, గణిత చిహ్నాలు మరియు గణనలు స్పర్శ ఆధారంగా నేర్చుకోవడం సులభమవుతుంది."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education)లో మేధో వైకల్యం (Intellectual Disability) ఉన్న విద్యార్థికి అత్యంత అనుకూలమైన మూల్యాంకన విధానం ఏది?",
        options: [
            "కేవలం వార్షిక పరీక్ష",
            "నిరంతర సమగ్ర మూల్యాంకనం (CCE) మరియు కార్యాచరణ ఆధారిత మూల్యాంకనం",
            "మౌఖిక పరీక్షలు పూర్తిగా నిషేధించడం",
            "మార్కుల ఆధారంగా మాత్రమే మూల్యాంకనం చేయడం"
        ],
        correct: 1,
        explanation: "CCE మరియు కార్యాచరణ ఆధారిత మూల్యాంకనం ద్వారా విద్యార్థి నిజమైన అభ్యాస పురోగతి, దైనందిన నైపుణ్యాలు మరియు వ్యక్తిగత అభివృద్ధిని సమగ్రంగా అంచనా వేయవచ్చు."
    },
    {
        question: "మేధో వైకల్యం (Intellectual Disability) ఉన్న విద్యార్థికి కొత్త నైపుణ్యాన్ని బోధించేటప్పుడు అత్యంత ప్రభావవంతమైన పద్ధతి ఏది?",
        options: [
            "ఒకేసారి మొత్తం నైపుణ్యాన్ని బోధించడం",
            "పని విశ్లేషణ (Task Analysis) ద్వారా చిన్న దశలుగా బోధించడం",
            "పుస్తకం చదవమని చెప్పడం",
            "గృహపాఠం మాత్రమే ఇవ్వడం"
        ],
        correct: 1,
        explanation: "Task Analysis ద్వారా క్లిష్టమైన పనిని చిన్న దశలుగా విభజించి బోధిస్తే మేధో వైకల్యం ఉన్న విద్యార్థులు సులభంగా నేర్చుకుంటారు."
    },
    {
        question: "దృష్టి లోపం (Visual Impairment) ఉన్న విద్యార్థికి తరగతి గదిని పరిచయం చేసే సమయంలో ఉపాధ్యాయుడు ముందుగా ఏమి చేయాలి?",
        options: [
            "విద్యార్థిని ఒంటరిగా వదిలేయాలి",
            "తరగతి గదిలోని ముఖ్యమైన ప్రదేశాలను స్పర్శ ఆధారంగా పరిచయం చేయాలి",
            "పాఠ్యపుస్తకం మాత్రమే ఇవ్వాలి",
            "ఇతర విద్యార్థుల సహాయం తీసుకోకూడదు"
        ],
        correct: 1,
        explanation: "Orientation కార్యక్రమంలో తలుపు, బెంచీలు, బోర్డు, మార్గాలు వంటి ప్రదేశాలను స్పర్శ ఆధారంగా పరిచయం చేయడం స్వతంత్రతను పెంచుతుంది."
    },
    {
        question: "బహుళ వైకల్యాలు (Multiple Disabilities) ఉన్న విద్యార్థుల విద్యలో అత్యంత ముఖ్యమైన అంశం ఏది?",
        options: [
            "ఒకే బోధనా పద్ధతిని అందరికీ ఉపయోగించడం",
            "బహుశాఖ నిపుణుల (Multidisciplinary Team) సహకారం",
            "కేవలం వార్షిక పరీక్ష నిర్వహించడం",
            "పాఠ్యపుస్తకాన్ని పూర్తిగా పూర్తి చేయడం"
        ],
        correct: 1,
        explanation: "ప్రత్యేక ఉపాధ్యాయులు, సాధారణ ఉపాధ్యాయులు, థెరపిస్టులు, తల్లిదండ్రులు కలిసి పనిచేస్తే బహుళ వైకల్యాలు ఉన్న విద్యార్థి సమగ్ర అభివృద్ధి సాధ్యమవుతుంది."
    },
    {
        question: "బ్రెయిల్ లిపి (Braille) ప్రధానంగా ఏ ఇంద్రియంపై ఆధారపడి ఉంటుంది?",
        options: [
            "చూపు",
            "వినికిడి",
            "స్పర్శ",
            "వాసన"
        ],
        correct: 2,
        explanation: "బ్రెయిల్ లిపిలో ఉన్న చుక్కలను వేళ్లతో స్పర్శించి చదువుతారు. కాబట్టి ఇది స్పర్శ ఆధారిత లిపి."
    },
    {
        question: "మేధో వైకల్యం (Intellectual Disability) ఉన్న విద్యార్థి స్వీయ సంరక్షణ నైపుణ్యాలను అభివృద్ధి చేయడానికి అత్యంత అనుకూలమైన పద్ధతి ఏది?",
        options: [
            "ప్రదర్శన (Demonstration) చేసి సాధన చేయించడం",
            "కేవలం ఉపన్యాసం ఇవ్వడం",
            "వీడియో చూపించడం మాత్రమే",
            "శిక్షించడం"
        ],
        correct: 0,
        explanation: "ప్రదర్శన, అనుకరణ మరియు పునరావృత సాధన ద్వారా స్వీయ సంరక్షణ నైపుణ్యాలు సమర్థవంతంగా అభివృద్ధి చెందుతాయి."
    },
    {
        question: "దృష్టి లోపం (Visual Impairment) ఉన్న విద్యార్థికి పరీక్షలో సరైన అనుకూలీకరణ (Accommodation) ఏది?",
        options: [
            "ప్రశ్నపత్రం ఇవ్వకపోవడం",
            "స్క్రైబ్ (Scribe) లేదా బ్రెయిల్ ప్రశ్నపత్రం అందించడం",
            "పరీక్ష నుండి మినహాయించడం",
            "తక్కువ మార్కులు ఇవ్వడం"
        ],
        correct: 1,
        explanation: "RPWD Act ప్రకారం అవసరాన్ని బట్టి స్క్రైబ్, బ్రెయిల్ లేదా పెద్ద అక్షరాల ప్రశ్నపత్రం వంటి సౌకర్యాలు కల్పించాలి."
    },
    {
        question: "బహుళ వైకల్యాలు (Multiple Disabilities) ఉన్న విద్యార్థికి వ్యక్తిగత విద్యా ప్రణాళిక (IEP) ఎంత తరచుగా సమీక్షించాలి?",
        options: [
            "ఒకసారి రూపొందిస్తే సరిపోతుంది",
            "విద్యార్థి పురోగతిని బట్టి క్రమానుగతంగా సమీక్షించాలి",
            "పదేళ్లకు ఒకసారి",
            "అవసరం లేదు"
        ],
        correct: 1,
        explanation: "IEP స్థిరమైన పత్రం కాదు. విద్యార్థి పురోగతి, అవసరాలు మరియు లక్ష్యాలను బట్టి నిరంతరం సమీక్షించి సవరించాలి."
    },
    {
        question: "దృష్టి లోపం (Visual Impairment) ఉన్న విద్యార్థికి విజ్ఞానశాస్త్రం బోధించేటప్పుడు అత్యంత ప్రభావవంతమైన పద్ధతి ఏది?",
        options: [
            "చిత్రాలను మాత్రమే చూపించడం",
            "స్పర్శించగల నమూనాలు (Tactile Models) ఉపయోగించడం",
            "కేవలం బ్లాక్‌బోర్డుపై వ్రాయడం",
            "గృహపాఠం మాత్రమే ఇవ్వడం"
        ],
        correct: 1,
        explanation: "స్పర్శించగల నమూనాలు మరియు నిజమైన వస్తువులు ఉపయోగించడం ద్వారా దృష్టి లోపం ఉన్న విద్యార్థులు భావనలను సులభంగా అర్థం చేసుకుంటారు."
    },
    {
        question: "మేధో వైకల్యం (Intellectual Disability) ఉన్న విద్యార్థిని ప్రశంసించడం వల్ల ప్రధాన ప్రయోజనం ఏమిటి?",
        options: [
            "అతను చదవడం మానేస్తాడు",
            "ప్రేరణ (Motivation) మరియు ఆత్మవిశ్వాసం పెరుగుతాయి",
            "పరీక్షలు అవసరం ఉండవు",
            "వైకల్యం పూర్తిగా తగ్గిపోతుంది"
        ],
        correct: 1,
        explanation: "తక్షణ ప్రశంస మరియు సానుకూల ప్రోత్సాహం ద్వారా విద్యార్థి అభ్యాసంపై ఆసక్తి, ఆత్మవిశ్వాసం మరియు సరైన ప్రవర్తన పెరుగుతాయి."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education)లో దృష్టి లోపం (Visual Impairment) ఉన్న విద్యార్థికి సహచరుల (Peers) పాత్ర ఏమిటి?",
        options: [
            "విద్యార్థిని పూర్తిగా నిర్లక్ష్యం చేయడం",
            "అవసరమైనప్పుడు సహాయం చేస్తూ స్వతంత్రతను ప్రోత్సహించడం",
            "అన్ని పనులు వారి తరపున చేయడం",
            "విద్యార్థిని వేరుగా కూర్చోబెట్టడం"
        ],
        correct: 1,
        explanation: "సహచరులు అవసరమైనప్పుడు మాత్రమే సహాయం చేసి, విద్యార్థి స్వతంత్రంగా నేర్చుకునే అవకాశాన్ని కల్పించడం సమగ్ర విద్య లక్ష్యం."
    },
    {
        question: "మేధో వైకల్యం (Intellectual Disability) ఉన్న విద్యార్థికి వృత్తి విద్య (Vocational Education) అందించడం యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        options: [
            "కేవలం పరీక్షల్లో ఉత్తీర్ణత సాధించడం",
            "స్వతంత్ర జీవన నైపుణ్యాలు మరియు ఉపాధి అవకాశాలను పెంపొందించడం",
            "ఉన్నత విద్యకు మాత్రమే సిద్ధం చేయడం",
            "విద్యార్థిని ఇంట్లోనే ఉంచడం"
        ],
        correct: 1,
        explanation: "వృత్తి విద్య ద్వారా మేధో వైకల్యం ఉన్న విద్యార్థులు స్వయం ఉపాధి, ఉద్యోగ నైపుణ్యాలు మరియు స్వతంత్ర జీవనానికి అవసరమైన సామర్థ్యాలను అభివృద్ధి చేసుకుంటారు."
    },
    {
        question: "దృష్టి లోపం (Visual Impairment) ఉన్న విద్యార్థికి ఉపాధ్యాయుడు బ్లాక్‌బోర్డుపై వ్రాస్తున్నప్పుడు అత్యంత అనుకూలమైన చర్య ఏది?",
        options: [
            "బోర్డుపై వ్రాసి నిశ్శబ్దంగా ఉండటం",
            "బోర్డుపై వ్రాసిన విషయాన్ని స్పష్టంగా మౌఖికంగా వివరించడం",
            "విద్యార్థిని బయటకు పంపించడం",
            "బోర్డును మాత్రమే చూపించడం"
        ],
        correct: 1,
        explanation: "దృష్టి లోపం ఉన్న విద్యార్థి బోర్డు చూడలేకపోవచ్చు. కాబట్టి బోర్డుపై ఉన్న సమాచారాన్ని మౌఖికంగా వివరించడం అవసరం."
    },
    {
        question: "బహుళ వైకల్యాలు (Multiple Disabilities) ఉన్న విద్యార్థికి సమర్థవంతమైన బోధన కోసం అత్యంత అవసరమైనది ఏది?",
        options: [
            "ఒకే బోధనా పద్ధతి",
            "వ్యక్తిగత అవసరాలకు అనుగుణమైన బహుఇంద్రియ (Multi-sensory) బోధన",
            "కేవలం ఉపన్యాస పద్ధతి",
            "రోజూ పరీక్షలు నిర్వహించడం"
        ],
        correct: 1,
        explanation: "బహుళ వైకల్యాలు ఉన్న విద్యార్థుల అవసరాలు భిన్నంగా ఉంటాయి. దృశ్య, శ్రవణ, స్పర్శ ఆధారిత బహుఇంద్రియ బోధన మరింత ప్రభావవంతంగా ఉంటుంది."
    },
    {
        question: "క్రింది వాటిలో బ్రెయిల్ లిపి (Braille) గురించి సరైన వాక్యం ఏది?",
        options: [
            "ఇది వినికిడి లోపం ఉన్నవారి కోసం రూపొందించబడింది",
            "ఇది ఆరు చుక్కల (Six-dot Cell) ఆధారిత స్పర్శ లిపి",
            "ఇది కేవలం ఆంగ్ల భాషలో మాత్రమే ఉపయోగిస్తారు",
            "దీనిని కళ్లతో మాత్రమే చదవాలి"
        ],
        correct: 1,
        explanation: "బ్రెయిల్ లిపి ఆరు చుక్కల ఆధారంగా రూపొందించబడిన స్పర్శ లిపి. ప్రపంచంలోని అనేక భాషల్లో దీనిని ఉపయోగిస్తున్నారు."
    },
    {
        question: "మేధో వైకల్యం (Intellectual Disability) ఉన్న విద్యార్థి ఒక పనిని విజయవంతంగా పూర్తి చేసినప్పుడు ఉపాధ్యాయుడు ఏమి చేయాలి?",
        options: [
            "తప్పులను మాత్రమే గుర్తించాలి",
            "సానుకూల ప్రోత్సాహం (Positive Reinforcement) ఇవ్వాలి",
            "మరో కఠినమైన పని వెంటనే ఇవ్వాలి",
            "పని పూర్తయిందని పట్టించుకోకూడదు"
        ],
        correct: 1,
        explanation: "సానుకూల ప్రోత్సాహం విద్యార్థిలో ఆత్మవిశ్వాసాన్ని పెంచి, సరైన ప్రవర్తన మరియు అభ్యాసాన్ని కొనసాగించేందుకు ప్రేరేపిస్తుంది."
    },
    {
        question: "దృష్టి లోపం (Visual Impairment) ఉన్న విద్యార్థికి పాఠ్యాంశాన్ని అందించడానికి క్రింది వాటిలో అత్యంత అనుకూలమైనది ఏది?",
        options: [
            "చిన్న అక్షరాల ముద్రిత పుస్తకం",
            "ఆడియో పుస్తకాలు (Audio Books)",
            "రంగురంగుల పోస్టర్లు మాత్రమే",
            "చిత్రాలు మాత్రమే"
        ],
        correct: 1,
        explanation: "ఆడియో పుస్తకాలు మరియు బ్రెయిల్ పాఠ్యాంశాలు దృష్టి లోపం ఉన్న విద్యార్థులకు సమాచారాన్ని సులభంగా అందుబాటులోకి తీసుకువస్తాయి."
    },
    {
        question: "బహుళ వైకల్యాలు (Multiple Disabilities) ఉన్న విద్యార్థికి కార్యాత్మక మూల్యాంకనం (Functional Assessment) యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        options: [
            "కేవలం IQ కొలవడం",
            "విద్యార్థి దైనందిన జీవితంలో చేయగల పనులను అంచనా వేయడం",
            "వార్షిక పరీక్ష మార్కులు నమోదు చేయడం",
            "తరగతి ర్యాంకు నిర్ణయించడం"
        ],
        correct: 1,
        explanation: "Functional Assessment ద్వారా విద్యార్థి స్వీయ సంరక్షణ, సంభాషణ, సామాజిక మరియు దైనందిన జీవన నైపుణ్యాలను అంచనా వేస్తారు."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education)లో దృష్టి లోపం (Visual Impairment) ఉన్న విద్యార్థికి ఉపాధ్యాయుడు ప్రశ్న అడిగేటప్పుడు సరైన పద్ధతి ఏది?",
        options: [
            "పేరు చెప్పకుండా ప్రశ్న అడగడం",
            "ముందుగా విద్యార్థి పేరును పిలిచి తరువాత ప్రశ్న అడగడం",
            "ఇతర విద్యార్థుల ద్వారా మాత్రమే మాట్లాడించడం",
            "ప్రశ్నలు అడగకపోవడం"
        ],
        correct: 1,
        explanation: "పేరు పిలిచి ప్రశ్న అడిగితే దృష్టి లోపం ఉన్న విద్యార్థికి ప్రశ్న తనకేనని స్పష్టంగా తెలుస్తుంది మరియు స్పందించడానికి అవకాశం లభిస్తుంది."
    },
    {
        question: "మేధో వైకల్యం (Intellectual Disability) ఉన్న విద్యార్థుల బోధనలో 'చేతులు పట్టించి చేయించడం' (Learning by Doing) ఎందుకు ముఖ్యమైనది?",
        options: [
            "సమయం వృథా అవుతుంది",
            "అనుభవం ద్వారా నేర్చుకోవడం సులభమవుతుంది",
            "పుస్తకాల అవసరం ఉండదు",
            "పరీక్షలు అవసరం ఉండవు"
        ],
        correct: 1,
        explanation: "అనుభవాత్మక అభ్యాసం ద్వారా విద్యార్థులు భావనలను త్వరగా అర్థం చేసుకొని ఎక్కువకాలం గుర్తుంచుకుంటారు."
    },
    {
        question: "RPWD Act–2016 ప్రకారం సమగ్ర విద్య (Inclusive Education)లో పాఠశాల యొక్క ప్రధాన బాధ్యత ఏమిటి?",
        options: [
            "వైకల్యం ఉన్న విద్యార్థులకు ప్రవేశం నిరాకరించడం",
            "వివక్ష లేకుండా తగిన సౌకర్యాలు మరియు సమాన విద్యా అవకాశాలు కల్పించడం",
            "ప్రత్యేక అవసరాలున్న విద్యార్థులను ప్రత్యేక పాఠశాలలకు మాత్రమే పంపించడం",
            "కేవలం పరీక్షలు నిర్వహించడం"
        ],
        correct: 1,
        explanation: "RPWD Act–2016 ప్రకారం ప్రతి పాఠశాల వైకల్యం ఉన్న విద్యార్థులకు సమాన అవకాశాలు, తగిన అనుకూలీకరణలు మరియు వివక్ష రహిత సమగ్ర విద్యను అందించాలి."
    }
];