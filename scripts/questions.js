const SUBJECTS = [
    "CDP",
    "Visual Impairment",
    "Intellectual Disability",
    "Multiple Disabilities",
    "ICT",
    "English",
    "Telugu",
];

const QUESTIONS = [
    {
        question: "గార్డ్నర్ బహుళ మేధస్సుల సిద్ధాంతంలో \"ఇతరుల భావాలను అర్థం చేసుకునే సామర్థ్యం\" ఏ మేధస్సుకు సంబంధించినది?",
        options: [
            "భాషా మేధస్సు",
            "అంతర్వ్యక్తి మేధస్సు",
            "అంతర్ముఖ మేధస్సు",
            "స్థల మేధస్సు"
        ],
        correct: 1,
        explanation: "అంతర్వ్యక్తి మేధస్సు అనేది ఇతరుల భావాలు, ఉద్దేశాలు, ప్రవర్తనలను అర్థం చేసుకుని వారితో సమర్థవంతంగా పరస్పర చర్యలు నిర్వహించే సామర్థ్యాన్ని సూచిస్తుంది."
    },
    {
        question: "\"మేధస్సు అనేది ఒక సాధారణ కారకం (G-factor)\" అని ప్రతిపాదించిన మనోవిజ్ఞాన శాస్త్రవేత్త",
        options: [
            "థర్‌స్టన్",
            "గార్డ్నర్",
            "స్పీర్మన్",
            "స్టెర్న్‌బర్గ్"
        ],
        correct: 2,
        explanation: "స్పీర్మన్ మేధస్సులో ఒక సాధారణ కారకం G-factor ఉంటుందని ప్రతిపాదించాడు. ఇది వివిధ మానసిక సామర్థ్యాల పనితీరును ప్రభావితం చేస్తుందని భావించాడు."
    },
    {
        question: "ఒక విద్యార్థి బహుమతి పొందిన తరువాత మరింత ఆసక్తితో చదవడం ప్రారంభించాడు. ఇది ఏ ప్రేరణ విధానానికి ఉదాహరణ?",
        options: [
            "అంతర్గత ప్రేరణ",
            "బాహ్య ప్రేరణ",
            "జీవసంబంధ ప్రేరణ",
            "సామాజిక ప్రేరణ"
        ],
        correct: 1,
        explanation: "బహుమతి వంటి బాహ్య ప్రోత్సాహకాలు విద్యార్థి ప్రవర్తనను ప్రభావితం చేస్తే దానిని బాహ్య ప్రేరణ అంటారు. ఇది నేర్చుకోవడంపై ఆసక్తిని పెంచుతుంది."
    },
    {
        question: "మాస్లో అవసరాల సోపానక్రమంలో \"ఆత్మసాక్షాత్కారం\" ఏ స్థాయికి చెందుతుంది?",
        options: [
            "భద్రతా అవసరాలు",
            "గౌరవ అవసరాలు",
            "సామాజిక అవసరాలు",
            "అత్యున్నత అవసరాలు"
        ],
        correct: 3,
        explanation: "ఆత్మసాక్షాత్కారం మాస్లో అవసరాల సోపానక్రమంలో అత్యున్నత స్థాయి. వ్యక్తి తన పూర్తి సామర్థ్యాన్ని సాధించాలనే అవసరాన్ని ఇది సూచిస్తుంది."
    },
    {
        question: "థర్‌స్టన్ ప్రతిపాదించిన మౌలిక మానసిక సామర్థ్యాలలో కిందివాటిలో ఏది ఒకటి?",
        options: [
            "శారీరక సామర్థ్యం",
            "సంఖ్యా సామర్థ్యం",
            "భావోద్వేగ సామర్థ్యం",
            "నాయకత్వ సామర్థ్యం"
        ],
        correct: 1,
        explanation: "థర్‌స్టన్ Primary Mental Abilities లో సంఖ్యా సామర్థ్యాన్ని పేర్కొన్నాడు. సంఖ్యలతో పని చేయడం, గణన చేయడం ఇందులో భాగం."
    },
    {
        question: "\"పరిస్థితిని అర్థవంతంగా గ్రహించి అర్థం చేసుకోవడం\" అనేది",
        options: [
            "సంచలనం",
            "అవధానం",
            "ప్రేరణ",
            "గ్రహణం"
        ],
        correct: 3,
        explanation: "గ్రహణం అనేది ఇంద్రియాల ద్వారా వచ్చిన సమాచారాన్ని అర్థవంతంగా విశ్లేషించి అర్థం చేసుకునే మానసిక ప్రక్రియ. ఇది సంచలనానికి తర్వాతి దశ."
    },
    {
        question: "ఒక ఉపాధ్యాయుడు విద్యార్థులలో నేర్చుకోవాలనే ఆసక్తిని పెంచడానికి ప్రశంసలను ఉపయోగిస్తున్నాడు. ఇది",
        options: [
            "శిక్ష",
            "పునర్బలనం",
            "అంతర్దృష్టి",
            "పరిపక్వత"
        ],
        correct: 1,
        explanation: "ప్రశంసలు సానుకూల పునర్బలనం. ఇవి కోరుకున్న ప్రవర్తనను మళ్లీ ప్రదర్శించడానికి విద్యార్థులను ప్రోత్సహిస్తాయి."
    },
    {
        question: "విద్యార్థులకు వీడియో, ఆడియో, యానిమేషన్, చిత్రాలను కలిపి బోధించే విధానాన్ని ఏమంటారు?",
        options: [
            "వెబ్ డిజైనింగ్",
            "మల్టీమీడియా",
            "ప్రోగ్రామింగ్",
            "నెట్‌వర్కింగ్"
        ],
        correct: 1,
        explanation: "టెక్స్ట్, ఆడియో, వీడియో, యానిమేషన్ మరియు చిత్రాలను సమన్వయపరచి బోధించే విధానాన్ని మల్టీమీడియా అంటారు. ఇది బహుఇంద్రియ అభ్యాసాన్ని ప్రోత్సహిస్తుంది."
    },
    {
        question: "భారత ప్రభుత్వ డిజిటల్ విద్యా వేదిక",
        options: [
            "Moodle",
            "Coursera",
            "DIKSHA",
            "SWAYAMPRABHA"
        ],
        correct: 2,
        explanation: "DIKSHA భారత ప్రభుత్వ డిజిటల్ విద్యా వేదిక. ఇది ఉపాధ్యాయులు మరియు విద్యార్థులకు డిజిటల్ అభ్యాస వనరులను అందిస్తుంది."
    },
    {
        question: "MOOCs యొక్క పూర్తి రూపం",
        options: [
            "Massive Open Online Courses",
            "Multiple Online Open Courses",
            "Massive Offline Open Courses",
            "Modern Online Open Classes"
        ],
        correct: 0,
        explanation: "MOOCs అంటే Massive Open Online Courses. ఇవి ఇంటర్నెట్ ద్వారా పెద్ద సంఖ్యలో అభ్యాసకులకు అందుబాటులో ఉండే కోర్సులు."
    },
    {
        question: "Moodle ప్రధానంగా ఉపయోగించబడేది",
        options: [
            "ఆడియో రికార్డింగ్",
            "Learning Management System",
            "వీడియో ఎడిటింగ్",
            "డేటాబేస్ నిర్వహణ"
        ],
        correct: 1,
        explanation: "Moodle ఒక Learning Management System (LMS). ఇది కోర్సుల నిర్వహణ, అసైన్‌మెంట్లు, మూల్యాంకనం మరియు ఆన్‌లైన్ బోధనకు ఉపయోగపడుతుంది."
    },
    {
        question: "క్రింది వాటిలో మల్టీమీడియా అంశం కానిది",
        options: [
            "టెక్స్ట్",
            "ఆడియో",
            "వీడియో",
            "RAM"
        ],
        correct: 3,
        explanation: "RAM కంప్యూటర్ మెమరీ భాగం. ఇది మల్టీమీడియా అంశం కాదు. టెక్స్ట్, ఆడియో, వీడియోలు మల్టీమీడియా భాగాలు."
    },
    {
        question: "\"భగీరథ ప్రయత్నం\" జాతీయానికి సరైన అర్థం",
        options: [
            "వృథా ప్రయత్నం",
            "గొప్ప కృషి",
            "చిన్న ప్రయత్నం",
            "వేగవంతమైన పని"
        ],
        correct: 1,
        explanation: "భగీరథుడు గంగను భూమికి తీసుకురావడానికి చేసిన మహత్తర కృషి ఆధారంగా 'భగీరథ ప్రయత్నం' అనే జాతీయం ఏర్పడింది."
    },
    {
        question: "\"నరుడు\" పదానికి పర్యాయపదం",
        options: [
            "రాక్షసుడు",
            "దేవుడు",
            "మానవుడు",
            "యక్షుడు"
        ],
        correct: 2,
        explanation: "నరుడు అంటే మనిషి. మానవుడు అనే పదం దీనికి సమానార్థకంగా ఉపయోగించబడుతుంది."
    },
    {
        question: "\"చేయి\" పదానికి వికృతి రూపం",
        options: [
            "చేతి",
            "చేయు",
            "చేత",
            "చేయ"
        ],
        correct: 0,
        explanation: "చేయి పదానికి రూపాంతరం చెందిన వికృతి రూపం 'చేతి'. ఇది వ్యావహారిక వాడుకలో సాధారణంగా కనిపిస్తుంది."
    },
    {
        question: "\"లోక + ఈశుడు\" సంధి రూపం",
        options: [
            "లోకేశుడు",
            "లోకఈశుడు",
            "లోకయీశుడు",
            "లోకైశుడు"
        ],
        correct: 0,
        explanation: "లోక + ఈశుడు పదాలకు గుణసంధి జరిగి 'లోకేశుడు' రూపం ఏర్పడుతుంది. ఇది తెలుగు వ్యాకరణంలోని సాధారణ సంధి ఉదాహరణ."
    },
    {
        question: "\"రాజపుత్రుడు\" ఏ సమాసానికి ఉదాహరణ?",
        options: [
            "ద్వంద్వ",
            "ద్విగు",
            "తత్పురుష",
            "బహువ్రీహి"
        ],
        correct: 2,
        explanation: "రాజు యొక్క పుత్రుడు అనే విగ్రహ వాక్యం కలిగిన సమాసం తత్పురుష సమాసం. ఇందులో ఉత్తరపదార్థం ప్రధానంగా ఉంటుంది."
    },
    {
        question: "\"అదిగో పులి అంటే ఇదిగో తోక\" అనేది",
        options: [
            "జాతీయం",
            "సామెత",
            "పొడుపుకథ",
            "నానుడి"
        ],
        correct: 1,
        explanation: "ఈ వాక్యం ప్రజల అనుభవాల నుంచి వచ్చిన సామెత. ఏదైనా విషయాన్ని వెంటనే నిరూపించడానికి ఉపయోగించే సందర్భంలో వాడతారు."
    },
    {
        question: "\"వల్లభ\" పదానికి పర్యాయపదం",
        options: [
            "శత్రువు",
            "మిత్రుడు",
            "ప్రియుడు",
            "రాజు"
        ],
        correct: 2,
        explanation: "వల్లభ అంటే ఇష్టమైన వ్యక్తి లేదా ప్రియమైనవాడు. అందువల్ల 'ప్రియుడు' సరైన పర్యాయపదం."
    },
    {
        question: "Choose the correct preposition: She is good ___ Mathematics.",
        options: [
            "in",
            "at",
            "on",
            "for"
        ],
        correct: 1,
        explanation: "ఒక వ్యక్తి ఏదైనా నైపుణ్యంలో మంచి ప్రావీణ్యం కలిగి ఉన్నప్పుడు 'good at' అనే preposition combination ఉపయోగిస్తారు."
    },
    {
        question: "Choose the correct verb: Each of the students ___ present.",
        options: [
            "are",
            "were",
            "is",
            "have"
        ],
        correct: 2,
        explanation: "Each అనే పదం singular subject గా పరిగణించబడుతుంది. కాబట్టి singular verb అయిన 'is' ఉపయోగించాలి."
    },
    {
        question: "Identify the error: Neither the teacher nor the students was absent.",
        options: [
            "Neither",
            "teacher",
            "students",
            "was"
        ],
        correct: 3,
        explanation: "Neither...nor నిర్మాణంలో verb సమీప subject కు అనుగుణంగా ఉంటుంది. 'students' plural కాబట్టి 'were' వాడాలి."
    },
    {
        question: "Choose the correct tense: By next year, she ___ her degree.",
        options: [
            "completes",
            "completed",
            "will have completed",
            "has completed"
        ],
        correct: 2,
        explanation: "భవిష్యత్తులో ఒక నిర్దిష్ట సమయానికి ముందే పూర్తయ్యే చర్యను తెలియజేయడానికి Future Perfect Tense ఉపయోగిస్తారు."
    },
    {
        question: "If I ___ harder, I would have passed.",
        options: [
            "study",
            "studied",
            "had studied",
            "have studied"
        ],
        correct: 2,
        explanation: "ఇది Type-3 Conditional sentence. If clause లో Past Perfect (had studied) ఉపయోగించాలి."
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
        explanation: "News అనే పదం రూపంలో plural లాగా కనిపించినా grammatical గా singular noun. కాబట్టి 'is' ఉపయోగించాలి."
    },
    {
        question: "తక్కువ స్థాయి మేధో వైకల్యం (Mild Intellectual Disability) గల వారి IQ పరిధి",
        options: [
            "20–34",
            "35–49",
            "50–69",
            "70–84"
        ],
        correct: 2,
        explanation: "సాధారణ వర్గీకరణ ప్రకారం Mild Intellectual Disability గల వ్యక్తుల IQ పరిధి 50 నుండి 69 వరకు ఉంటుంది."
    },
    {
        question: "\"సమాజంలో స్వతంత్రంగా జీవించడానికి అవసరమైన మేధో సామర్థ్యం లోపించడం\"ను మేధో వైకల్యంగా నిర్వచించినవారు",
        options: [
            "బినెట్",
            "బెండా",
            "గార్డ్నర్",
            "పియాజే"
        ],
        correct: 1,
        explanation: "బెండా మేధో వైకల్యాన్ని సామాజిక అనుకూలన మరియు స్వతంత్ర జీవన సామర్థ్యాల లోపంతో సంబంధపెట్టి నిర్వచించాడు."
    },
    {
        question: "వ్యక్తిగత విద్యా ప్రణాళిక (IEP) లో తప్పనిసరిగా ఉండవలసిన అంశం",
        options: [
            "విషయ సూచిక",
            "పీఠిక",
            "లక్ష్యాలు",
            "ధన్యవాదాలు"
        ],
        correct: 2,
        explanation: "IEP లో విద్యార్థి అవసరాలకు అనుగుణంగా స్పష్టమైన విద్యా లక్ష్యాలు తప్పనిసరిగా ఉండాలి. అవే ప్రణాళికకు ఆధారం."
    },
    {
        question: "తీవ్ర మేధో వైకల్యం (Severe Intellectual Disability) గల వ్యక్తుల IQ పరిధి",
        options: [
            "50–69",
            "35–49",
            "20–34",
            "70–84"
        ],
        correct: 2,
        explanation: "Severe Intellectual Disability వర్గానికి సాధారణంగా IQ 20–34 మధ్యలో ఉంటుంది. దీనికి అధిక మద్దతు అవసరం."
    },
    {
        question: "క్రింది వాటిలో మేధో వైకల్య వర్గీకరణకు ఆధారం",
        options: [
            "ఎత్తు",
            "బరువు",
            "IQ",
            "వయస్సు"
        ],
        correct: 2,
        explanation: "మేధో వైకల్య తీవ్రతను నిర్ణయించడానికి ప్రధానంగా IQ స్కోర్లు మరియు అనుకూలన ప్రవర్తనలను పరిగణనలోకి తీసుకుంటారు."
    },
    {
        question: "IEP ప్రధాన ఉద్దేశ్యం",
        options: [
            "అన్ని పిల్లలకు ఒకే బోధన",
            "వ్యక్తిగత అవసరాలకు అనుగుణంగా విద్యా లక్ష్యాల రూపకల్పన",
            "పరీక్షల సంఖ్య పెంచడం",
            "పాఠశాల నిర్వహణ సులభతరం చేయడం"
        ],
        correct: 1,
        explanation: "IEP యొక్క ప్రధాన లక్ష్యం ప్రతి విద్యార్థి ప్రత్యేక అవసరాలను గుర్తించి వాటికి అనుగుణంగా వ్యక్తిగత విద్యా లక్ష్యాలను రూపొందించడం."
    },
    {
        question: "అత్యంత తీవ్ర మేధో వైకల్యం (Profound Intellectual Disability) గల వారి IQ",
        options: [
            "35–49",
            "20–34",
            "50–69",
            "20 కంటే తక్కువ"
        ],
        correct: 3,
        explanation: "Profound Intellectual Disability గల వ్యక్తుల IQ సాధారణంగా 20 కంటే తక్కువగా ఉంటుంది. వీరికి నిరంతర మద్దతు అవసరం."
    },
    {
        question: "దృష్టి లోపం గల విద్యార్థులు సాధారణంగా ఉపయోగించే లిపి",
        options: [
            "సంకేత లిపి",
            "బ్రెయిల్",
            "మోర్స్ కోడ్",
            "ఫోనెటిక్ లిపి"
        ],
        correct: 1,
        explanation: "బ్రెయిల్ లిపి స్పర్శ ఆధారిత పఠన వ్యవస్థ. దృష్టి లోపం గల వ్యక్తులు చదవడం మరియు వ్రాయడం కోసం దీనిని ఉపయోగిస్తారు."
    },
    {
        question: "దృష్టి స్పష్టత (Visual Acuity) కొలవడానికి ఉపయోగించే పరికరం",
        options: [
            "బ్రెయిల్ స్లేట్",
            "JAWS",
            "Snellen Chart",
            "Stylus"
        ],
        correct: 2,
        explanation: "Snellen Chart కంటి చూపు స్పష్టతను కొలవడానికి ఉపయోగించే ప్రమాణ పరీక్షా పరికరం. ఇది దూర దృష్టిని అంచనా వేస్తుంది."
    },
    {
        question: "క్రింది వాటిలో Screen Reading Software ఏది?",
        options: [
            "MS Office",
            "Windows",
            "JAWS",
            "Paint"
        ],
        correct: 2,
        explanation: "JAWS ఒక ప్రముఖ Screen Reader Software. ఇది కంప్యూటర్ స్క్రీన్‌లోని సమాచారాన్ని శబ్ద రూపంలో వినిపిస్తుంది."
    },
    {
        question: "RPWD Act ప్రకారం అంధత్వం (Blindness) కు సంబంధించిన ప్రమాణం",
        options: [
            "6/60 కంటే తక్కువ",
            "3/60 కంటే తక్కువ",
            "18/60 కంటే తక్కువ",
            "24/60 కంటే తక్కువ"
        ],
        correct: 1,
        explanation: "RPWD Act ప్రకారం ఉత్తమ సవరణతో కూడా Visual Acuity 3/60 కంటే తక్కువగా ఉంటే Blindness గా పరిగణిస్తారు."
    },
    {
        question: "JAWS సాఫ్ట్‌వేర్ ప్రధానంగా సహాయపడేది",
        options: [
            "వినికిడి లోపం",
            "దృష్టి లోపం",
            "మేధో వైకల్యం",
            "ఆటిజం"
        ],
        correct: 1,
        explanation: "JAWS ప్రత్యేకంగా దృష్టి లోపం గల వ్యక్తుల కోసం రూపొందించబడిన Screen Reader. ఇది డిజిటల్ సమాచారాన్ని అందుబాటులోకి తెస్తుంది."
    },
    {
        question: "బ్రెయిల్ లిపిని అభివృద్ధి చేసినవారు",
        options: [
            "హెలెన్ కెల్లర్",
            "లూయిస్ బ్రెయిల్",
            "సామ్యూల్ కిర్క్",
            "బినెట్"
        ],
        correct: 1,
        explanation: "లూయిస్ బ్రెయిల్ దృష్టి లోపం గల వ్యక్తుల కోసం బ్రెయిల్ లిపిని అభివృద్ధి చేశాడు. ఇది ప్రపంచవ్యాప్తంగా ఉపయోగించబడుతోంది."
    },
    {
        question: "Snellen Chart ఉపయోగించబడేది",
        options: [
            "వినికిడి పరీక్ష",
            "మేధస్సు పరీక్ష",
            "దృష్టి స్పష్టత పరీక్ష",
            "భాషా పరీక్ష"
        ],
        correct: 2,
        explanation: "Snellen Chart ద్వారా వ్యక్తి Visual Acuity లేదా దృష్టి స్పష్టతను కొలుస్తారు. ఇది నేత్ర పరీక్షల్లో విస్తృతంగా ఉపయోగిస్తారు."
    },
    {
        question: "వినికిడి లోపం మరియు మేధో వైకల్యం రెండూ కలిగి ఉన్న వ్యక్తిని",
        options: [
            "Learning Disability",
            "Autism",
            "Multiple Disabilities",
            "Cerebral Palsy"
        ],
        correct: 2,
        explanation: "ఒక వ్యక్తికి రెండు లేదా అంతకంటే ఎక్కువ వైకల్యాలు కలిసి ఉన్నప్పుడు దానిని Multiple Disabilities అంటారు."
    },
    {
        question: "బహుళ వైకల్యాలున్న విద్యార్థుల కోసం Assistive Technology యొక్క ప్రధాన ఉద్దేశ్యం",
        options: [
            "పరీక్షలు నిర్వహించడం",
            "స్వతంత్రత పెంపొందించడం",
            "హాజరు నమోదు",
            "గ్రేడింగ్"
        ],
        correct: 1,
        explanation: "Assistive Technology విద్యార్థుల స్వతంత్ర జీవనం, కమ్యూనికేషన్ మరియు అభ్యాసంలో భాగస్వామ్యాన్ని పెంచడానికి ఉపయోగపడుతుంది."
    },
    {
        question: "క్రింది వాటిలో సహాయక సాంకేతిక పరికరం (Assistive Device)",
        options: [
            "Hearing Aid",
            "Attendance Register",
            "Chalk Piece",
            "Time Table"
        ],
        correct: 0,
        explanation: "Hearing Aid వినికిడి లోపం గల వ్యక్తులకు శబ్దాలను స్పష్టంగా వినిపించేందుకు ఉపయోగించే సహాయక పరికరం."
    },
    {
        question: "బహుళ వైకల్యాలున్న విద్యార్థికి కమ్యూనికేషన్ కోసం ఉపయోగించే సాంకేతికత",
        options: [
            "AAC Device",
            "Scanner",
            "Printer",
            "Projector"
        ],
        correct: 0,
        explanation: "AAC (Augmentative and Alternative Communication) పరికరాలు మాట్లాడలేని లేదా కమ్యూనికేషన్ కష్టాలు ఉన్న విద్యార్థులకు సహాయపడతాయి."
    },
    {
        question: "Assistive Technology ఎంపికలో ముఖ్యంగా పరిగణించవలసింది",
        options: [
            "ఉపాధ్యాయుని అభిరుచి",
            "విద్యార్థి అవసరం",
            "పాఠశాల రంగు",
            "తరగతి గది పరిమాణం"
        ],
        correct: 1,
        explanation: "Assistive Technology ఎంపికలో విద్యార్థి వ్యక్తిగత అవసరాలు, సామర్థ్యాలు మరియు లక్ష్యాలు అత్యంత ముఖ్యమైనవి."
    },
    {
        question: "RPWD Act ప్రకారం బహుళ వైకల్యం అనగా",
        options: [
            "ఒకే వైకల్యం",
            "రెండు లేదా అంతకంటే ఎక్కువ వైకల్యాల కలయిక",
            "తాత్కాలిక అనారోగ్యం",
            "భాషా సమస్య"
        ],
        correct: 1,
        explanation: "RPWD Act ప్రకారం రెండు లేదా అంతకంటే ఎక్కువ వైకల్యాలు ఒకే వ్యక్తిలో కలిసి ఉన్న పరిస్థితిని Multiple Disabilities అంటారు."
    },
    {
        question: "బహుళ వైకల్యాలున్న విద్యార్థికి సరైన విద్యా విధానం",
        options: [
            "ఒకే విధాన బోధన",
            "వ్యక్తిగత అవసరాలకు అనుగుణ బోధన",
            "పరీక్షల ఆధారిత బోధన",
            "ఉపన్యాస పద్ధతి మాత్రమే"
        ],
        correct: 1,
        explanation: "బహుళ వైకల్యాలున్న విద్యార్థుల అభ్యాస అవసరాలు భిన్నంగా ఉంటాయి. కాబట్టి వ్యక్తిగత అవసరాలకు అనుగుణంగా బోధన అందించాలి."
    },
    {
        question: "క్రింది వాటిలో IEP కు సంబంధించి సరైనది ఏది?\n\na) విద్యార్థి బలాలను పరిగణిస్తుంది\n\nb) వ్యక్తిగత లక్ష్యాలను కలిగి ఉంటుంది",
        options: [
            "a మాత్రమే",
            "b మాత్రమే",
            "a మరియు b",
            "రెండూ కావు"
        ],
        correct: 2,
        explanation: "IEP విద్యార్థి బలాలు, అవసరాలను పరిగణనలోకి తీసుకుని వ్యక్తిగత లక్ష్యాలను నిర్దేశిస్తుంది. కాబట్టి a మరియు b రెండూ సరైనవే."
    },
    {
        question: "క్రింది జతలలో సరైనది",
        options: [
            "JAWS – Hearing Impairment",
            "Braille – Visual Impairment",
            "Snellen Chart – Intellectual Disability",
            "IEP – Visual Acuity"
        ],
        correct: 1,
        explanation: "Braille దృష్టి లోపం గల వ్యక్తుల కోసం ఉపయోగించే స్పర్శ ఆధారిత లిపి. మిగిలిన జతలు సరైనవి కావు."
    },
    {
        question: "A student with multiple disabilities uses an AAC device to express needs. This device mainly supports",
        options: [
            "Mobility",
            "Communication",
            "Vision Testing",
            "Assessment"
        ],
        correct: 1,
        explanation: "AAC Device యొక్క ప్రధాన ఉద్దేశ్యం కమ్యూనికేషన్‌ను సులభతరం చేయడం. ఇది విద్యార్థి తన అవసరాలు, ఆలోచనలను వ్యక్తపరచడానికి సహాయపడుతుంది."
    },
    {
        question: "Identify the correct sequence from concrete to abstract learning.",
        options: [
            "Sounds → Words → Pictures → Models → Real Objects",
            "Real Objects → Models → Pictures → Symbols → Words",
            "Pictures → Models → Real Objects → Words",
            "Models → Real Objects → Symbols → Pictures"
        ],
        correct: 1,
        explanation: "అభ్యాసం Concrete నుండి Abstract వైపు సాగాలి. మొదట నిజమైన వస్తువులు, తరువాత నమూనాలు, చిత్రాలు, చిహ్నాలు, చివరకు పదాలు వస్తాయి."
    }
];