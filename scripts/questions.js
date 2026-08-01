const SUBJECTS = [
    "CDP",
    "Telugu",
    "English",
    "Special Education"
];

const QUESTIONS = [
    {
        "question": "విద్యార్థి తన స్వంత అనుభవాల ఆధారంగా కొత్త జ్ఞానాన్ని నిర్మించుకుంటాడని చెప్పే అభ్యాస సిద్ధాంతం ఏది?",
        "options": [
            "ప్రవర్తనావాదం",
            "నిర్మాణవాదం",
            "పరిపక్వత సిద్ధాంతం",
            "సంబంధవాదం"
        ],
        "correct": 1,
        "explanation": "నిర్మాణవాదం ప్రకారం విద్యార్థి తన అనుభవాలు, పూర్వజ్ఞానం ఆధారంగా కొత్త జ్ఞానాన్ని నిర్మించుకుంటాడు. ఉపాధ్యాయుడు మార్గదర్శకుడిగా వ్యవహరిస్తాడు."
    },
    {
        "question": "థార్న్‌డైక్ ప్రతిపాదించిన అభ్యాస నియమాలలో 'అభ్యాసం ఎక్కువైతే నేర్చుకోవడం మెరుగవుతుంది' అనే భావన ఏ నియమానికి చెందింది?",
        "options": [
            "సిద్ధత నియమం",
            "ఫలిత నియమం",
            "అభ్యాస నియమం",
            "సామ్య నియమం"
        ],
        "correct": 2,
        "explanation": "అభ్యాస నియమం (Law of Exercise) ప్రకారం పునరావృత సాధన వల్ల అభ్యాసం బలపడుతుంది. సాధన లేకుంటే అభ్యాసం బలహీనమవుతుంది."
    },
    {
        "question": "పియాజే ప్రకారం వస్తువు కనిపించకపోయినా అది ఉనికిలోనే ఉందని గ్రహించే సామర్థ్యాన్ని ఏమంటారు?",
        "options": [
            "సంరక్షణ భావన",
            "వస్తు స్థిరత్వం",
            "తార్కిక ఆలోచన",
            "ఆత్మకేంద్రితత"
        ],
        "correct": 1,
        "explanation": "వస్తు స్థిరత్వం (Object Permanence) సంచలన-చలన దశలో అభివృద్ధి చెందుతుంది. ఇది పియాజే సిద్ధాంతంలోని ముఖ్య భావన."
    },
    {
        "question": "వైగోట్స్కీ ప్రతిపాదించిన సమీప వికాస మండలం (ZPD) ప్రధానంగా దేనిని సూచిస్తుంది?",
        "options": [
            "విద్యార్థి ఒంటరిగా చేయగల పని",
            "ఉపాధ్యాయ సహాయంతో చేయగల పని",
            "పరీక్షలో సాధించిన మార్కులు",
            "శారీరక ఎదుగుదల"
        ],
        "correct": 1,
        "explanation": "సమీప వికాస మండలం (ZPD) అనేది విద్యార్థి మార్గదర్శక సహాయంతో సాధించగల అభ్యాస స్థాయిని సూచిస్తుంది."
    },
    {
        "question": "బాండూరా సామాజిక అభ్యాస సిద్ధాంతంలో పిల్లలు ప్రధానంగా ఎలా నేర్చుకుంటారని చెప్పారు?",
        "options": [
            "శిక్ష ద్వారా",
            "అనుకరణ ద్వారా",
            "పునరావృతం ద్వారా",
            "వంశపారంపర్యం ద్వారా"
        ],
        "correct": 1,
        "explanation": "బాండూరా ప్రకారం పరిశీలన, అనుకరణ ద్వారా పిల్లలు కొత్త ప్రవర్తనలను నేర్చుకుంటారు. దీనిని పరిశీలనా అభ్యాసం అంటారు."
    },
    {
        "question": "తరగతిలో విద్యార్థి సరైన సమాధానం చెప్పిన వెంటనే ఉపాధ్యాయుడు ప్రశంసించడం ఏ భావనకు ఉదాహరణ?",
        "options": [
            "శిక్ష",
            "ధనాత్మక బలపరచడం",
            "ప్రతికూల బలపరచడం",
            "అంతర్దృష్టి"
        ],
        "correct": 1,
        "explanation": "ధనాత్మక బలపరచడం (Positive Reinforcement) ద్వారా ఆశించిన ప్రవర్తన మరింత బలపడుతుంది. స్కిన్నర్ దీనిని విస్తృతంగా వివరించాడు."
    },
    {
        "question": "విద్యార్థి సమస్యను అకస్మాత్తుగా అర్థం చేసుకొని పరిష్కారం కనుగొనడాన్ని కోహ్లర్ ఏమని పేర్కొన్నారు?",
        "options": [
            "ప్రయత్న–పొరపాటు అభ్యాసం",
            "అంతర్దృష్టి అభ్యాసం",
            "అనుకరణ అభ్యాసం",
            "సంబంధిత అభ్యాసం"
        ],
        "correct": 1,
        "explanation": "కోహ్లర్ ప్రకారం సమస్య పరిష్కారం ఒక్కసారిగా అర్థమయ్యే ప్రక్రియను అంతర్దృష్టి (Insight Learning) అంటారు."
    },
    {
        "question": "మాస్లో అవసరాల క్రమంలో అత్యున్నత స్థానం దేనికి ఇవ్వబడింది?",
        "options": [
            "భద్రత అవసరాలు",
            "గౌరవ అవసరాలు",
            "ఆత్మసాక్షాత్కారం",
            "శారీరక అవసరాలు"
        ],
        "correct": 2,
        "explanation": "మాస్లో అవసరాల క్రమంలో అత్యున్నత స్థాయి ఆత్మసాక్షాత్కారం (Self-Actualization). వ్యక్తి తన పూర్తి సామర్థ్యాన్ని అభివృద్ధి చేసుకోవడం దీని లక్ష్యం."
    },
    {
        "question": "సమగ్ర విద్య (Inclusive Education) యొక్క ప్రధాన లక్ష్యం ఏమిటి?",
        "options": [
            "ప్రత్యేక పాఠశాలల సంఖ్య పెంచడం",
            "అన్ని పిల్లలకు ఒకే తరగతిలో సమాన అవకాశాలతో విద్య అందించడం",
            "వైకల్యం ఉన్న పిల్లలను వేరు చేయడం",
            "పరీక్షల సంఖ్య పెంచడం"
        ],
        "correct": 1,
        "explanation": "సమగ్ర విద్యలో అన్ని విద్యార్థులు ఒకే విద్యా వాతావరణంలో సమాన అవకాశాలతో అభ్యసించేలా బోధనను రూపకల్పన చేస్తారు."
    },
    {
        "question": "క్రింది వాటిలో ఆకృతిమూల్యాంకనం (Formative Assessment) యొక్క ప్రధాన ఉద్దేశ్యం ఏది?",
        "options": [
            "చివరి ఫలితం ప్రకటించడం",
            "అభ్యాస లోపాలను గుర్తించి వెంటనే మెరుగుపరచడం",
            "ర్యాంకులు నిర్ణయించడం",
            "సర్టిఫికేట్ ఇవ్వడం"
        ],
        "correct": 1,
        "explanation": "ఆకృతిమూల్యాంకనం అభ్యాస ప్రక్రియలోనే విద్యార్థి పురోగతిని అంచనా వేసి అవసరమైన సవరణలు చేయడానికి ఉపయోగపడుతుంది."
    },
    {
        "question": "క్రింది వాటిలో కంప్యూటర్ యొక్క ప్రధాన అవుట్‌పుట్ పరికరం ఏది?",
        "options": [
            "కీబోర్డ్",
            "మౌస్",
            "మానిటర్",
            "స్కానర్"
        ],
        "correct": 2,
        "explanation": "మానిటర్ కంప్యూటర్ ప్రాసెస్ చేసిన సమాచారాన్ని వినియోగదారునికి చూపించే ప్రధాన అవుట్‌పుట్ పరికరం."
    },
    {
        "question": "సీపీయూ (CPU) యొక్క పూర్తి రూపం ఏమిటి?",
        "options": [
            "సెంట్రల్ ప్రాసెస్ యూనిట్",
            "కంప్యూటర్ ప్రోగ్రామ్ యూనిట్",
            "కంట్రోల్ పవర్ యూనిట్",
            "సెంట్రల్ ప్రింట్ యూనిట్"
        ],
        "correct": 0,
        "explanation": "CPU అంటే Central Processing Unit. ఇది కంప్యూటర్ యొక్క ప్రధాన ప్రాసెసింగ్ భాగం మరియు అన్ని సూచనలను అమలు చేస్తుంది."
    },
    {
        "question": "క్రింది వాటిలో శాశ్వత నిల్వ (Permanent Storage) పరికరం ఏది?",
        "options": [
            "రామ్ (RAM)",
            "క్యాష్ మెమరీ",
            "హార్డ్ డిస్క్ (HDD)",
            "రిజిస్టర్"
        ],
        "correct": 2,
        "explanation": "హార్డ్ డిస్క్ (HDD) విద్యుత్ లేకున్నా సమాచారాన్ని నిల్వ ఉంచుతుంది. అందువల్ల ఇది శాశ్వత నిల్వ పరికరం."
    },
    {
        "question": "ఇ-మెయిల్ (E-mail) యొక్క ప్రధాన ఉపయోగం ఏమిటి?",
        "options": [
            "సంగీతం వినడం",
            "వీడియో ఎడిటింగ్ చేయడం",
            "ఇంటర్నెట్ ద్వారా సందేశాలు పంపడం మరియు స్వీకరించడం",
            "ఆపరేటింగ్ సిస్టమ్ ఇన్‌స్టాల్ చేయడం"
        ],
        "correct": 2,
        "explanation": "ఇ-మెయిల్ ద్వారా ఇంటర్నెట్ సహాయంతో సందేశాలు, పత్రాలు మరియు ఇతర ఫైళ్లను వేగంగా పంపడం, స్వీకరించడం సాధ్యమవుతుంది."
    },
    {
        "question": "ఎంఎస్ పవర్‌పాయింట్ (MS PowerPoint) ప్రధానంగా దేనికి ఉపయోగిస్తారు?",
        "options": [
            "స్ప్రెడ్‌షీట్ తయారు చేయడానికి",
            "ప్రదర్శనలు (Presentations) రూపొందించడానికి",
            "డేటాబేస్ నిర్వహణకు",
            "ప్రోగ్రామింగ్ చేయడానికి"
        ],
        "correct": 1,
        "explanation": "MS PowerPoint ద్వారా స్లైడ్ ఆధారిత ప్రదర్శనలు రూపొందించి బోధన, సమావేశాలు మరియు శిక్షణ కార్యక్రమాల్లో ఉపయోగిస్తారు."
    },
    {
        "question": "గార్డ్నర్ బహుళ మేధస్సుల సిద్ధాంతం ప్రకారం క్రింది వాటిలో ఏది ఒక మేధస్సు రకం?",
        "options": [
            "సామాజిక మేధస్సు",
            "భావోద్వేగ మేధస్సు",
            "సంగీత మేధస్సు",
            "సృజనాత్మక మేధస్సు"
        ],
        "correct": 2,
        "explanation": "గార్డ్నర్ బహుళ మేధస్సుల సిద్ధాంతంలో సంగీత మేధస్సు స్వతంత్ర మేధస్సు రకంగా పేర్కొన్నారు. భావోద్వేగ, సామాజిక మేధస్సులు ఈ జాబితాలో భాగం కావు."
    },
    {
        "question": "స్టెర్న్‌బర్గ్ త్రిముఖ మేధస్సు సిద్ధాంతంలో క్రింది వాటిలో ఏది భాగం కాదు?",
        "options": [
            "విశ్లేషణాత్మక మేధస్సు",
            "సృజనాత్మక మేధస్సు",
            "ఆచరణాత్మక మేధస్సు",
            "సంగీత మేధస్సు"
        ],
        "correct": 3,
        "explanation": "స్టెర్న్‌బర్గ్ త్రిముఖ సిద్ధాంతంలో విశ్లేషణాత్మక, సృజనాత్మక, ఆచరణాత్మక మేధస్సులు మాత్రమే ఉంటాయి. సంగీత మేధస్సు గార్డ్నర్ సిద్ధాంతానికి చెందినది."
    },
    {
        "question": "తరగతి గదిలో విద్యార్థుల వ్యక్తిగత భిన్నతలను గౌరవించే ఉపాధ్యాయుని లక్షణం ఏమిటి?",
        "options": [
            "అందరికీ ఒకే విధమైన బోధన చేయడం",
            "విద్యార్థుల అవసరాలకు అనుగుణంగా బోధనలో మార్పులు చేయడం",
            "మంచి మార్కులు వచ్చిన వారికి మాత్రమే బోధించడం",
            "బలహీన విద్యార్థులను ప్రత్యేకంగా వేరు చేయడం"
        ],
        "correct": 1,
        "explanation": "వ్యక్తిగత భిన్నతలను గుర్తించిన ఉపాధ్యాయుడు విద్యార్థుల సామర్థ్యాలు, ఆసక్తులు, అవసరాలకు అనుగుణంగా బోధనను అనుసరిస్తాడు."
    },
    {
        "question": "క్రింది వాటిలో అంతర్గత ప్రేరణ (Intrinsic Motivation) కు ఉదాహరణ ఏది?",
        "options": [
            "బహుమతి కోసం చదవడం",
            "శిక్ష భయంతో చదవడం",
            "విషయంపై ఆసక్తితో చదవడం",
            "తల్లిదండ్రుల ఒత్తిడితో చదవడం"
        ],
        "correct": 2,
        "explanation": "అంతర్గత ప్రేరణలో వ్యక్తి బాహ్య బహుమతుల కోసం కాకుండా స్వీయ ఆసక్తి, సంతృప్తి కోసం అభ్యసిస్తాడు."
    },
    {
        "question": "పిల్లల అభివృద్ధి సాధారణం నుండి ప్రత్యేకానికి జరుగుతుందని చెప్పే సూత్రం ఏది?",
        "options": [
            "సెఫాలో-కాడల్ సూత్రం",
            "ప్రాక్సిమో-డిస్టల్ సూత్రం",
            "సాధారణం నుండి ప్రత్యేకానికి",
            "వ్యక్తిగత భిన్నతల సూత్రం"
        ],
        "correct": 2,
        "explanation": "పిల్లల అభివృద్ధి మొదట సాధారణ కదలికలతో ప్రారంభమై తరువాత ప్రత్యేక నైపుణ్యాల వైపు అభివృద్ధి చెందుతుంది."
    },
    {
        "question": "స్కిన్నర్ సిద్ధాంతం ప్రధానంగా దేనిపై ఆధారపడింది?",
        "options": [
            "అంతర్దృష్టి",
            "పరిశీలన",
            "పర్యవసానాల ద్వారా ప్రవర్తన",
            "పరిపక్వత"
        ],
        "correct": 2,
        "explanation": "స్కిన్నర్ ప్రతిపాదించిన ఆపరెంట్ కండిషనింగ్ సిద్ధాంతం ప్రకారం ప్రవర్తన దాని ఫలితాల ద్వారా బలపడుతుంది లేదా తగ్గుతుంది."
    },
    {
        "question": "క్రింది వారిలో 'సామాజిక నిర్మాణవాదం'కు ప్రసిద్ధి చెందిన మనోవిజ్ఞాన శాస్త్రవేత్త ఎవరు?",
        "options": [
            "పియాజే",
            "వైగోట్స్కీ",
            "స్కిన్నర్",
            "పావ్‌లవ్"
        ],
        "correct": 1,
        "explanation": "వైగోట్స్కీ సామాజిక పరస్పర చర్యలు అభ్యాసానికి కీలకమని ప్రతిపాదించి సామాజిక నిర్మాణవాద సిద్ధాంతాన్ని అభివృద్ధి చేశాడు."
    },
    {
        "question": "సాధన పరీక్షలు (Achievement Tests) ప్రధానంగా దేనిని కొలుస్తాయి?",
        "options": [
            "సామర్థ్యాన్ని",
            "మేధస్సును",
            "నేర్చుకున్న విద్యా ఫలితాలను",
            "వ్యక్తిత్వాన్ని"
        ],
        "correct": 2,
        "explanation": "సాధన పరీక్షలు విద్యార్థి ఇప్పటికే అభ్యసించిన జ్ఞానం, నైపుణ్యాలు మరియు విద్యా ఫలితాలను అంచనా వేస్తాయి."
    },
    {
        "question": "క్రింది వాటిలో అభివృద్ధిని ప్రభావితం చేసే ప్రధాన కారకాలు ఏవి?",
        "options": [
            "వంశపారంపర్యం మాత్రమే",
            "పరిసరాలు మాత్రమే",
            "వంశపారంపర్యం మరియు పరిసరాలు",
            "వాతావరణం మాత్రమే"
        ],
        "correct": 2,
        "explanation": "పిల్లల అభివృద్ధి వంశపారంపర్య లక్షణాలు మరియు పరిసరాల పరస్పర ప్రభావంతో జరుగుతుంది."
    },
    {
        "question": "బ్లూమ్ విద్యా లక్ష్యాల వర్గీకరణలో జ్ఞానాత్మక రంగానికి చెందనిది ఏది?",
        "options": [
            "గుర్తుంచుకోవడం",
            "అర్థం చేసుకోవడం",
            "విలువలను స్వీకరించడం",
            "విశ్లేషించడం"
        ],
        "correct": 2,
        "explanation": "విలువలను స్వీకరించడం భావావేశ (Affective) రంగానికి చెందినది. మిగిలినవి జ్ఞానాత్మక రంగంలోని స్థాయిలు."
    },
    {
        "question": "పావ్‌లవ్ ప్రయోగాలలో గంట శబ్దం ఏ ఉద్దీపనగా మారింది?",
        "options": [
            "సహజ ఉద్దీపన",
            "సహజ ప్రతిస్పందన",
            "నియంత్రిత ఉద్దీపన",
            "నియంత్రిత ప్రతిస్పందన"
        ],
        "correct": 2,
        "explanation": "ప్రారంభంలో తటస్థమైన గంట శబ్దం, ఆహారంతో అనుసంధానం తర్వాత నియంత్రిత ఉద్దీపన (Conditioned Stimulus)గా మారింది."
    },
    {
        "question": "పిల్లలలో సృజనాత్మకతను పెంపొందించడానికి ఉత్తమ ఉపాధ్యాయ పద్ధతి ఏది?",
        "options": [
            "కేవలం కంఠస్థం చేయించడం",
            "ఒకే సరైన సమాధానాన్ని ప్రోత్సహించడం",
            "స్వేచ్ఛగా ఆలోచించే అవకాశాలు కల్పించడం",
            "తరచూ శిక్షించడం"
        ],
        "correct": 2,
        "explanation": "సృజనాత్మకత అభివృద్ధికి ప్రశ్నించడం, అన్వేషించడం, స్వేచ్ఛగా ఆలోచించడం మరియు కొత్త పరిష్కారాలను ప్రయత్నించే అవకాశాలు అవసరం."
    },
    {
        "question": "పిల్లల మానసిక ఆరోగ్యాన్ని ప్రోత్సహించడానికి ఉపాధ్యాయుడు ముందుగా చేయవలసినది ఏమిటి?",
        "options": [
            "కఠిన శిక్షలు విధించడం",
            "భయపెట్టే వాతావరణం సృష్టించడం",
            "సురక్షిత మరియు ప్రోత్సాహక తరగతి వాతావరణం కల్పించడం",
            "పరీక్షల సంఖ్య పెంచడం"
        ],
        "correct": 2,
        "explanation": "సురక్షితమైన, ప్రోత్సాహక మరియు ఒత్తిడి లేని తరగతి వాతావరణం విద్యార్థుల మానసిక ఆరోగ్యాన్ని మెరుగుపరుస్తుంది."
    },
    {
        "question": "విద్యార్థుల అభ్యాస పురోగతిని నిరంతరం పరిశీలించి వెంటనే అభిప్రాయం ఇవ్వడం ఏ మూల్యాంకన లక్షణం?",
        "options": [
            "సంకలన మూల్యాంకనం",
            "ఆకృతిమూల్యాంకనం",
            "ప్రామాణిక పరీక్ష",
            "మేధస్సు పరీక్ష"
        ],
        "correct": 1,
        "explanation": "ఆకృతిమూల్యాంకనం అభ్యాస సమయంలోనే విద్యార్థి పురోగతిని అంచనా వేసి తక్షణ అభిప్రాయం అందిస్తుంది."
    },
    {
        "question": "పిల్లల అభివృద్ధి ప్రతి ఒక్కరిలో ఒకే వేగంతో జరగదని సూచించే సూత్రం ఏది?",
        "options": [
            "వ్యక్తిగత భిన్నతల సూత్రం",
            "సెఫాలో-కాడల్ సూత్రం",
            "ప్రాక్సిమో-డిస్టల్ సూత్రం",
            "సాధారణం నుండి ప్రత్యేకానికి సూత్రం"
        ],
        "correct": 0,
        "explanation": "ప్రతి పిల్లవాడి అభివృద్ధి వేగం, సామర్థ్యం, ఆసక్తులు భిన్నంగా ఉంటాయి. దీనినే వ్యక్తిగత భిన్నతల సూత్రం వివరిస్తుంది."
    },
    {
        "question": "Choose the correct article.\nShe is ____ honest teacher.",
        "options": [
            "a",
            "an",
            "the",
            "no article"
        ],
        "correct": 1,
        "explanation": "The word 'honest' begins with a silent 'h' and is pronounced with a vowel sound. Therefore, the correct article is 'an'."
    },
    {
        "question": "Choose the correct question tag.\nYou have completed the assignment, ____?",
        "options": [
            "haven't you",
            "have you",
            "don't you",
            "didn't you"
        ],
        "correct": 0,
        "explanation": "The statement is positive and uses the auxiliary 'have'. Therefore, the correct negative question tag is 'haven't you'."
    },
    {
        "question": "Choose the correct passive voice.\nThe teacher praised the student.",
        "options": [
            "The student praised by the teacher.",
            "The student was praised by the teacher.",
            "The student is praised by the teacher.",
            "The student has praised by the teacher."
        ],
        "correct": 1,
        "explanation": "The active sentence is in the simple past tense. Its passive form is 'was + past participle', making option two correct."
    },
    {
        "question": "Choose the correct phrasal verb.\nThe meeting has been ____ until Monday.",
        "options": [
            "put off",
            "put on",
            "put up",
            "put away"
        ],
        "correct": 0,
        "explanation": "'Put off' means postpone. The sentence indicates that the meeting has been postponed until Monday."
    },
    {
        "question": "Choose the correctly punctuated sentence.",
        "options": [
            "Yes I will come tomorrow.",
            "Yes, I will come tomorrow.",
            "Yes I, will come tomorrow.",
            "Yes; I will come tomorrow."
        ],
        "correct": 1,
        "explanation": "A comma is required after the introductory word 'Yes'. The remaining sentence follows standard punctuation rules."
    },
    {
        "question": "Choose the correctly spelled word.",
        "options": [
            "Accomodation",
            "Accommodation",
            "Acommodation",
            "Accommadation"
        ],
        "correct": 1,
        "explanation": "'Accommodation' is the correct spelling. It contains double 'c' and double 'm'."
    },
    {
        "question": "Choose the correct preposition.\nThe principal congratulated the students ____ their success.",
        "options": [
            "at",
            "on",
            "for",
            "with"
        ],
        "correct": 1,
        "explanation": "The verb 'congratulate' is commonly followed by the preposition 'on' when referring to an achievement or success."
    },
    {
        "question": "Choose the correct form of the verb.\nEach of the students ____ present.",
        "options": [
            "are",
            "were",
            "is",
            "have"
        ],
        "correct": 2,
        "explanation": "'Each' is treated as a singular subject. Therefore, it takes the singular verb 'is'."
    },
    {
        "question": "Choose the correct reported speech.\nHe said, \"I am busy.\"",
        "options": [
            "He said that he is busy.",
            "He said that I was busy.",
            "He said that he was busy.",
            "He said he has been busy."
        ],
        "correct": 2,
        "explanation": "In reported speech, the present tense changes to the past tense when the reporting verb is in the past."
    },
    {
        "question": "Choose the synonym of the word 'Brave'.",
        "options": [
            "Cowardly",
            "Timid",
            "Courageous",
            "Weak"
        ],
        "correct": 2,
        "explanation": "'Courageous' has the same meaning as 'brave'. The remaining options express opposite or unrelated meanings."
    },
    {
        "question": "Read the passage and answer the question.\n\nTrees provide oxygen, reduce pollution, and give shelter to many birds and animals. Planting more trees helps maintain ecological balance.\n\nWhy should we plant more trees?",
        "options": [
            "To increase pollution",
            "To maintain ecological balance",
            "To reduce rainfall",
            "To destroy wildlife"
        ],
        "correct": 1,
        "explanation": "The passage clearly states that planting more trees helps maintain ecological balance while supporting the environment and wildlife."
    },
    {
        "question": "Read the passage and answer the question.\n\nTrees provide oxygen, reduce pollution, and give shelter to many birds and animals. Planting more trees helps maintain ecological balance.\n\nWhich word from the passage means 'protection or home'?",
        "options": [
            "Balance",
            "Shelter",
            "Pollution",
            "Oxygen"
        ],
        "correct": 1,
        "explanation": "'Shelter' means protection or a safe place to live. The passage uses this word for birds and animals."
    },
    {
        "question": "Choose the correct sentence.",
        "options": [
            "Neither of the boys were absent.",
            "Neither of the boys was absent.",
            "Neither of the boys are absent.",
            "Neither of the boys have been absent."
        ],
        "correct": 1,
        "explanation": "'Neither' is a singular subject and takes the singular verb 'was' in formal English grammar."
    },
    {
        "question": "Choose the correct modal verb.\nYou ____ wear a helmet while riding a motorcycle.",
        "options": [
            "may",
            "must",
            "might",
            "could"
        ],
        "correct": 1,
        "explanation": "'Must' expresses obligation or necessity. Wearing a helmet is a mandatory safety requirement."
    },
    {
        "question": "Choose the correct meaning of the idiom.\n'Once in a blue moon' means:",
        "options": [
            "Every day",
            "Very rarely",
            "Very quickly",
            "At midnight"
        ],
        "correct": 1,
        "explanation": "The idiom 'once in a blue moon' refers to something that happens very rarely or infrequently."
    },
    {
        "question": "Choose the correct tense.\nBy this time tomorrow, we ____ the project.",
        "options": [
            "complete",
            "will complete",
            "will have completed",
            "have completed"
        ],
        "correct": 2,
        "explanation": "The Future Perfect Tense is used to express an action that will be completed before a specified future time. Hence, 'will have completed' is correct."
    },
    {
        "question": "Choose the correct passive voice.\nPeople speak English all over the world.",
        "options": [
            "English is spoken all over the world.",
            "English was spoken all over the world.",
            "English has spoken all over the world.",
            "English speaks all over the world."
        ],
        "correct": 0,
        "explanation": "The sentence is in the Simple Present Tense. Its passive form is 'is/am/are + past participle', making option one correct."
    },
    {
        "question": "Choose the correct question tag.\nLet's start the lesson, ____?",
        "options": [
            "shall we",
            "will we",
            "don't we",
            "aren't we"
        ],
        "correct": 0,
        "explanation": "The standard question tag for sentences beginning with 'Let's' is 'shall we?', which is used to make suggestions politely."
    },
    {
        "question": "Choose the correct article.\nHe is ____ MLA from our district.",
        "options": [
            "a",
            "an",
            "the",
            "no article"
        ],
        "correct": 1,
        "explanation": "The abbreviation 'MLA' begins with the vowel sound /em/. Therefore, 'an MLA' is grammatically correct."
    },
    {
        "question": "Choose the correct preposition.\nShe has been working here ____ 2018.",
        "options": [
            "since",
            "for",
            "from",
            "by"
        ],
        "correct": 0,
        "explanation": "'Since' is used with a specific point in time such as a year or date. 'For' is used with a duration."
    },
    {
        "question": "Choose the correct phrasal verb.\nThe teacher asked the students to ____ the new words in a dictionary.",
        "options": [
            "look after",
            "look into",
            "look up",
            "look over"
        ],
        "correct": 2,
        "explanation": "'Look up' means to search for information, especially in a dictionary or reference book."
    },
    {
        "question": "Choose the correct reported speech.\nThe teacher said, \"Work hard.\"",
        "options": [
            "The teacher advised us to work hard.",
            "The teacher said us to work hard.",
            "The teacher told work hard.",
            "The teacher says to work hard."
        ],
        "correct": 0,
        "explanation": "Imperative sentences are commonly reported using 'advised', 'told', or 'ordered' followed by the infinitive form of the verb."
    },
    {
        "question": "Choose the antonym of the word 'Generous'.",
        "options": [
            "Kind",
            "Selfish",
            "Helpful",
            "Polite"
        ],
        "correct": 1,
        "explanation": "'Selfish' is the opposite of 'Generous'. A generous person willingly gives, whereas a selfish person thinks mainly of themselves."
    },
    {
        "question": "Choose the correctly punctuated sentence.",
        "options": [
            "Ravi, Mohan and Sita attended the meeting.",
            "Ravi Mohan, and Sita attended the meeting.",
            "Ravi, Mohan, and Sita attended the meeting.",
            "Ravi Mohan and, Sita attended the meeting."
        ],
        "correct": 2,
        "explanation": "The sentence correctly separates items in a series with commas. The serial comma before 'and' is grammatically acceptable in standard English."
    },
    {
        "question": "Choose the correctly spelled word.",
        "options": [
            "Pronounciation",
            "Pronunciation",
            "Pronounciaton",
            "Pronounciasion"
        ],
        "correct": 1,
        "explanation": "'Pronunciation' is the correct spelling. Although the verb is 'pronounce', the noun drops the letter 'o'."
    },
    {
        "question": "Read the passage and answer the question.\n\nReading books regularly improves vocabulary, develops imagination, and enhances critical thinking. Good readers become confident communicators.\n\nAccording to the passage, one benefit of reading books is:",
        "options": [
            "Reducing imagination",
            "Improving vocabulary",
            "Increasing stress",
            "Weakening communication"
        ],
        "correct": 1,
        "explanation": "The passage clearly mentions that regular reading improves vocabulary, along with imagination, critical thinking, and communication skills."
    },
    {
        "question": "Read the passage and answer the question.\n\nReading books regularly improves vocabulary, develops imagination, and enhances critical thinking. Good readers become confident communicators.\n\nThe word 'enhances' means:",
        "options": [
            "Reduces",
            "Improves",
            "Destroys",
            "Avoids"
        ],
        "correct": 1,
        "explanation": "The word 'enhances' means 'improves' or 'increases the quality of something'. It is used positively in the passage."
    },
    {
        "question": "Choose the correct form of the verb.\nNeither Raju nor his friends ____ ready.",
        "options": [
            "is",
            "was",
            "are",
            "has"
        ],
        "correct": 2,
        "explanation": "With 'Neither...nor...', the verb agrees with the subject nearest to it. Since 'friends' is plural, 'are' is correct."
    },
    {
        "question": "Choose the correct modal verb.\nStudents ____ submit the assignment before Friday.",
        "options": [
            "must",
            "might",
            "could",
            "would"
        ],
        "correct": 0,
        "explanation": "'Must' expresses obligation or necessity. The sentence indicates that submission before Friday is compulsory."
    },
    {
        "question": "Choose the meaning of the idiom.\n'A blessing in disguise' means:",
        "options": [
            "A hidden danger",
            "Something that seems bad but turns out to be good",
            "A great achievement",
            "An impossible task"
        ],
        "correct": 1,
        "explanation": "The idiom 'a blessing in disguise' refers to something that appears unfortunate initially but later proves to be beneficial."
    },
    {
        "question": "క్రింది పదాలలో సరైన పర్యాయపదం ఏది?\n'అంబరం' అనగా",
        "options": [
            "భూమి",
            "ఆకాశం",
            "సముద్రం",
            "అడవి"
        ],
        "correct": 1,
        "explanation": "'అంబరం' అనే పదానికి పర్యాయపదం 'ఆకాశం'. ఇది తెలుగు సాహిత్యంలో విస్తృతంగా ఉపయోగించే పదం."
    },
    {
        "question": "క్రింది వాటిలో వ్యతిరేక పదాల జత సరైనది ఏది?",
        "options": [
            "లాభం – నష్టం",
            "శుభం – శాంతి",
            "పగలు – వెలుగు",
            "ఆనందం – సంతోషం"
        ],
        "correct": 0,
        "explanation": "'లాభం'కు వ్యతిరేక పదం 'నష్టం'. మిగిలినవి వ్యతిరేక పదాల జతలు కావు."
    },
    {
        "question": "'రాముడు పాఠశాలకు వెళ్తున్నాడు.' ఈ వాక్యంలో 'పాఠశాలకు' ఏ విభక్తి?",
        "options": [
            "ప్రథమా విభక్తి",
            "ద్వితీయా విభక్తి",
            "చతుర్థీ విభక్తి",
            "సప్తమీ విభక్తి"
        ],
        "correct": 2,
        "explanation": "'పాఠశాలకు'లో 'కు' ప్రత్యయం చతుర్థీ విభక్తిని సూచిస్తుంది. ఇది గమ్యస్థానాన్ని తెలియజేస్తుంది."
    },
    {
        "question": "'చదువుకొను' అనే పదంలో ఉన్న సమాసం ఏది?",
        "options": [
            "ద్వంద్వ సమాసం",
            "కర్మధారయ సమాసం",
            "క్రియా సమాసం",
            "తత్పురుష సమాసం"
        ],
        "correct": 2,
        "explanation": "'చదువుకొను' అనే రూపం క్రియల కలయికతో ఏర్పడిన క్రియా సమాసానికి ఉదాహరణ."
    },
    {
        "question": "'కరుణ' పదానికి సరైన పర్యాయపదం ఏది?",
        "options": [
            "దయ",
            "కోపం",
            "గర్వం",
            "ధైర్యం"
        ],
        "correct": 0,
        "explanation": "'కరుణ'కు పర్యాయపదం 'దయ'. రెండూ జాలి, అనుకంప అనే భావాన్ని వ్యక్తపరుస్తాయి."
    },
    {
        "question": "'చేతులు కాలిన తర్వాత ఆకులు పట్టుకున్నాడు' అనే సామెత యొక్క భావం ఏమిటి?",
        "options": [
            "ముందస్తు జాగ్రత్తలు తీసుకోవడం",
            "ఆలస్యంగా జాగ్రత్త పడడం",
            "త్వరగా పని పూర్తి చేయడం",
            "ఇతరులకు సహాయం చేయడం"
        ],
        "correct": 1,
        "explanation": "ఈ సామెత నష్టం జరిగిన తర్వాత జాగ్రత్తలు తీసుకోవడం వల్ల ప్రయోజనం ఉండదనే భావాన్ని తెలియజేస్తుంది."
    },
    {
        "question": "'గురు' పదానికి బహువచన రూపం ఏది?",
        "options": [
            "గురువులు",
            "గురులు",
            "గురువు",
            "గురుసులు"
        ],
        "correct": 0,
        "explanation": "'గురు' పదానికి సరైన బహువచన రూపం 'గురువులు'. ఇది ప్రామాణిక తెలుగు వ్యాకరణానికి అనుగుణంగా ఉంటుంది."
    },
    {
        "question": "క్రింది వాటిలో శుద్ధమైన వాక్యం ఏది?",
        "options": [
            "నేను నిన్న స్కూలుకు వెళ్ళాను.",
            "నేను నిన్న పాఠశాలకు వెళ్లాను.",
            "నేను నిన్న పాఠశాలకు వెళ్ళినాను.",
            "నేను నిన్న పాఠశాలకి వెళ్ళి."
        ],
        "correct": 1,
        "explanation": "'నేను నిన్న పాఠశాలకు వెళ్లాను.' అనే వాక్యం వ్యాకరణపరంగా, శైలీపరంగా సరైనది."
    },
    {
        "question": "'పర్వతం' పదానికి వ్యతిరేక పదం ఏది?",
        "options": [
            "కొండ",
            "లోయ",
            "శిఖరం",
            "గుట్ట"
        ],
        "correct": 1,
        "explanation": "'పర్వతం'కు వ్యతిరేక భావాన్ని సూచించే పదం 'లోయ'. ఇది ఎత్తు-తక్కువ భావాన్ని తెలియజేస్తుంది."
    },
    {
        "question": "'అతడు వేగంగా పరుగెత్తాడు.' ఈ వాక్యంలో 'వేగంగా' ఏ పదభేదం?",
        "options": [
            "నామవాచకం",
            "విశేషణం",
            "క్రియావిశేషణం",
            "సర్వనామం"
        ],
        "correct": 2,
        "explanation": "'వేగంగా' అనేది క్రియను విశేషించే పదం కాబట్టి ఇది క్రియావిశేషణం."
    },
    {
        "question": "క్రింది పదాలలో తత్సమ పదం ఏది?",
        "options": [
            "నెత్తురు",
            "పువ్వు",
            "విద్య",
            "ఇల్లు"
        ],
        "correct": 2,
        "explanation": "'విద్య' సంస్కృతం నుండి యథాతథంగా వచ్చిన తత్సమ పదం. మిగిలినవి తద్భవ లేదా దేశ్య పదాలు."
    },
    {
        "question": "క్రింది గద్యాన్ని చదివి ప్రశ్నకు సమాధానం చెప్పండి.\n\n'చెట్లు మనకు ప్రాణవాయువును అందిస్తాయి. వర్షాలను కురిపించడంలో కూడా వాటి పాత్ర ఎంతో ముఖ్యమైనది. ప్రతి వ్యక్తి కనీసం ఒక మొక్కను నాటాలి.'\n\nగద్యాంశం యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        "options": [
            "వ్యవసాయం గురించి వివరించడం",
            "చెట్ల ప్రాముఖ్యతను తెలియజేయడం",
            "పూల పెంపకం నేర్పడం",
            "అడవుల చరిత్ర చెప్పడం"
        ],
        "correct": 1,
        "explanation": "గద్యాంశం మొత్తం చెట్ల వల్ల కలిగే ప్రయోజనాలు మరియు మొక్కలు నాటాల్సిన అవసరాన్ని వివరించింది."
    },
    {
        "question": "పై గద్యాంశం ప్రకారం ప్రతి వ్యక్తి ఏమి చేయాలి?",
        "options": [
            "ఒక చెట్టును నరుకాలి",
            "ఒక మొక్కను నాటాలి",
            "అడవిలో నివసించాలి",
            "వ్యవసాయం చేయాలి"
        ],
        "correct": 1,
        "explanation": "గద్యాంశంలో ప్రతి వ్యక్తి కనీసం ఒక మొక్కను నాటాలని స్పష్టంగా పేర్కొనబడింది."
    },
    {
        "question": "'నీరు' అనే పదానికి సరైన పర్యాయపదం ఏది?",
        "options": [
            "జలం",
            "అగ్ని",
            "వాయువు",
            "భూమి"
        ],
        "correct": 0,
        "explanation": "'జలం' అనేది 'నీరు'కు పర్యాయపదం. రెండూ ఒకే అర్థాన్ని సూచిస్తాయి."
    },
    {
        "question": "'దేశభక్తి' అనే పదంలో ఉన్న సమాసం ఏది?",
        "options": [
            "ద్వంద్వ సమాసం",
            "తత్పురుష సమాసం",
            "అవ్యయీభావ సమాసం",
            "బహువ్రీహి సమాసం"
        ],
        "correct": 1,
        "explanation": "'దేశభక్తి'లో 'దేశముపట్ల భక్తి' అనే విగ్రహవాక్యం ఉంటుంది. అందువల్ల ఇది తత్పురుష సమాసం."
    },
    {
        "question": "క్రింది పద్యంలో ప్రశ్నలకు సమాధానాలు చెప్పండి.\n\n'ఉప్పు కప్పురంబు నొక్క పోలిక నుండు\nచూడ చూడ రుచుల జాడ వేరు\nపురుషులందు పుణ్య పురుషులు వేరయా\nవిశ్వదాభిరామ వినుర వేమ.'\n\nఈ పద్య రచయిత ఎవరు?",
        "options": [
            "సుమతీ శతకకర్త",
            "వేమన",
            "పోతన",
            "శ్రీనాథుడు"
        ],
        "correct": 1,
        "explanation": "ఈ ప్రసిద్ధ పద్యం వేమన శతకానికి చెందినది. వేమన తన పద్యాలలో సామాజిక విలువలు, నీతి మరియు జీవిత సత్యాలను సులభమైన భాషలో వివరించాడు."
    },
    {
        "question": "పై పద్యం యొక్క ప్రధాన భావం ఏమిటి?",
        "options": [
            "అందరూ ఒకే స్వభావం కలవారు",
            "బాహ్య రూపం ఒకేలా ఉన్నా గుణాలు వేరుగా ఉంటాయి",
            "ఉప్పు మరియు కర్పూరం ఒకటే",
            "మనుషులు అందరూ సమానంగా ప్రవర్తిస్తారు"
        ],
        "correct": 1,
        "explanation": "ఉప్పు, కర్పూరం ఒకేలా కనిపించినా వాటి గుణాలు భిన్నంగా ఉంటాయి. అలాగే మనుషులలో కూడా గుణగణాల్లో తేడా ఉంటుందని పద్యం తెలియజేస్తుంది."
    },
    {
        "question": "'విశ్వవిద్యాలయం' అనే పదం ఏ సమాసానికి ఉదాహరణ?",
        "options": [
            "తత్పురుష సమాసం",
            "కర్మధారయ సమాసం",
            "ద్వంద్వ సమాసం",
            "బహువ్రీహి సమాసం"
        ],
        "correct": 0,
        "explanation": "'విశ్వానికి సంబంధించిన విద్యాలయం' అనే విగ్రహవాక్యంతో ఏర్పడిన పదం తత్పురుష సమాసానికి చెందుతుంది."
    },
    {
        "question": "'పుస్తకాలు' అనే పదంలో మూలపదం ఏది?",
        "options": [
            "పుస్త",
            "పుస్తకం",
            "పుస్త",
            "పుస్తక"
        ],
        "correct": 1,
        "explanation": "'పుస్తకాలు' అనే బహువచన రూపానికి మూలపదం 'పుస్తకం'. బహువచన ప్రత్యయం కలవడంతో రూపం మారింది."
    },
    {
        "question": "'అతడు నిజాయితీగల వ్యక్తి.' ఈ వాక్యంలో 'నిజాయితీగల' ఏ పదభేదం?",
        "options": [
            "సర్వనామం",
            "క్రియ",
            "విశేషణం",
            "క్రియావిశేషణం"
        ],
        "correct": 2,
        "explanation": "'నిజాయితీగల' అనే పదం 'వ్యక్తి' అనే నామవాచకాన్ని విశేషిస్తుంది. అందువల్ల ఇది విశేషణం."
    },
    {
        "question": "'అక్షరం' అనే పదానికి సరైన పర్యాయపదం ఏది?",
        "options": [
            "వర్ణం",
            "వాక్యం",
            "పదం",
            "భాష"
        ],
        "correct": 0,
        "explanation": "'అక్షరం'కు 'వర్ణం' పర్యాయపదం. రెండూ భాషలోని ప్రాథమిక లిపి చిహ్నాన్ని సూచిస్తాయి."
    },
    {
        "question": "'ఆరోగ్యం' పదానికి వ్యతిరేక పదం ఏది?",
        "options": [
            "శక్తి",
            "అనారోగ్యం",
            "బలం",
            "ఉత్సాహం"
        ],
        "correct": 1,
        "explanation": "'ఆరోగ్యం'కు వ్యతిరేక పదం 'అనారోగ్యం'. ఇది ఆరోగ్య లేమిని సూచిస్తుంది."
    },
    {
        "question": "'వచ్చినవాడు' అనే పదంలో ఉన్న ప్రత్యయం ఏది?",
        "options": [
            "వాడు",
            "న",
            "చి",
            "డు"
        ],
        "correct": 0,
        "explanation": "'వచ్చిన' అనే క్రియారూపానికి 'వాడు' అనే ప్రత్యయం చేరి నామవాచక రూపం ఏర్పడింది."
    },
    {
        "question": "'కాకి పిల్ల కాకికి ముద్దు' అనే సామెత యొక్క భావం ఏమిటి?",
        "options": [
            "అందరూ సమానంగా ఉంటారు",
            "ప్రతి ఒక్కరికీ తనవే గొప్పగా అనిపిస్తాయి",
            "కాకులు అందంగా ఉంటాయి",
            "పిల్లలను పెంచడం కష్టం"
        ],
        "correct": 1,
        "explanation": "ప్రతి వ్యక్తికి తనకు సంబంధించినవే ఎక్కువగా ఇష్టంగా, గొప్పగా కనిపిస్తాయని ఈ సామెత తెలియజేస్తుంది."
    },
    {
        "question": "క్రింది వాటిలో దేశ్య పదం ఏది?",
        "options": [
            "పువ్వు",
            "విద్య",
            "సూర్యుడు",
            "అగ్ని"
        ],
        "correct": 0,
        "explanation": "'పువ్వు' దేశ్య పదం. మిగిలిన పదాలు సంస్కృత ప్రభావంతో వచ్చిన తత్సమ లేదా తద్భవ పదాలు."
    },
    {
        "question": "క్రింది గద్యాన్ని చదివి ప్రశ్నకు సమాధానం చెప్పండి.\n\n'విద్య మనిషిని వినయవంతుడిగా చేస్తుంది. జ్ఞానం పెరిగిన కొద్దీ బాధ్యత కూడా పెరుగుతుంది. విద్య సమాజాభివృద్ధికి బలమైన పునాది.'\n\nగద్యాంశం ప్రకారం విద్య వల్ల ఏమి పెరుగుతుంది?",
        "options": [
            "భయం",
            "బాధ్యత",
            "అలసత్వం",
            "కోపం"
        ],
        "correct": 1,
        "explanation": "గద్యాంశంలో జ్ఞానం పెరిగిన కొద్దీ బాధ్యత కూడా పెరుగుతుందని స్పష్టంగా పేర్కొనబడింది."
    },
    {
        "question": "పై గద్యాంశానికి తగిన శీర్షిక ఏది?",
        "options": [
            "వ్యవసాయం",
            "విద్య యొక్క ప్రాముఖ్యత",
            "ప్రకృతి అందాలు",
            "ఆరోగ్య నియమాలు"
        ],
        "correct": 1,
        "explanation": "గద్యాంశం మొత్తం విద్య వల్ల కలిగే ప్రయోజనాలను వివరిస్తున్నందున 'విద్య యొక్క ప్రాముఖ్యత' సరైన శీర్షిక."
    },
    {
        "question": "'విద్యార్థులు శ్రద్ధగా చదువుతున్నారు.' ఈ వాక్యంలో 'శ్రద్ధగా' ఏ పదభేదం?",
        "options": [
            "విశేషణం",
            "క్రియావిశేషణం",
            "నామవాచకం",
            "సర్వనామం"
        ],
        "correct": 1,
        "explanation": "'శ్రద్ధగా' అనే పదం 'చదువుతున్నారు' అనే క్రియను విశేషిస్తుంది. అందువల్ల ఇది క్రియావిశేషణం."
    },
    {
        "question": "'నది' పదానికి సరైన పర్యాయపదం ఏది?",
        "options": [
            "సరిత",
            "పర్వతం",
            "సముద్రం",
            "చెరువు"
        ],
        "correct": 0,
        "explanation": "'సరిత' అనేది 'నది'కు పర్యాయపదం. ఈ పదం తెలుగు సాహిత్యంలో విస్తృతంగా ఉపయోగించబడుతుంది."
    },
    {
        "question": "'మంచి మాట మాణిక్యం' అనే సామెత యొక్క భావం ఏమిటి?",
        "options": [
            "మాటలకు విలువ ఉండదు",
            "మంచి మాట అమూల్యమైనది",
            "మాటలు ఎక్కువగా మాట్లాడాలి",
            "మాణిక్యాలు సేకరించాలి"
        ],
        "correct": 1,
        "explanation": "ఈ సామెత మంచి మాట విలువైనదని, అది మనుషుల మధ్య మంచి సంబంధాలను ఏర్పరుస్తుందని తెలియజేస్తుంది."
    },
    {
        "question": "సమగ్ర విద్య (Inclusive Education) యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        "options": [
            "వైకల్యం గల పిల్లలను ప్రత్యేక పాఠశాలలకు మాత్రమే పంపించడం",
            "అన్ని పిల్లలకు ఒకే విద్యా వాతావరణంలో సమాన అవకాశాలు కల్పించడం",
            "ప్రతిభావంతులైన విద్యార్థులను మాత్రమే ప్రోత్సహించడం",
            "ప్రత్యేక విద్యను సాధారణ విద్యకు వేరు చేయడం"
        ],
        "correct": 1,
        "explanation": "సమగ్ర విద్యలో వైకల్యం ఉన్నా లేకపోయినా అన్ని విద్యార్థులు ఒకే తరగతి గదిలో సమాన అవకాశాలతో అభ్యసించేలా బోధనను రూపొందిస్తారు."
    },
    {
        "question": "వ్యక్తిగత విద్యా ప్రణాళిక (IEP) ప్రధానంగా ఎవరి కోసం రూపొందించబడుతుంది?",
        "options": [
            "అన్ని విద్యార్థుల కోసం",
            "పరీక్షల్లో విఫలమైన విద్యార్థుల కోసం",
            "ప్రత్యేక అవసరాలు గల విద్యార్థి కోసం",
            "ఉపాధ్యాయుల కోసం"
        ],
        "correct": 2,
        "explanation": "వ్యక్తిగత విద్యా ప్రణాళిక (IEP) ప్రత్యేక అవసరాలు గల విద్యార్థి యొక్క సామర్థ్యాలు, అవసరాలు మరియు లక్ష్యాలను దృష్టిలో ఉంచుకొని రూపొందించబడుతుంది."
    },
    {
        "question": "హెలెన్ కెల్లర్ ప్రధానంగా ఏ వైకల్యాలకు ప్రసిద్ధి చెందారు?",
        "options": [
            "దృష్టి లోపం మరియు శ్రవణ లోపం",
            "మేధో వైకల్యం",
            "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD)",
            "సెరిబ్రల్ పాల్సీ"
        ],
        "correct": 0,
        "explanation": "హెలెన్ కెల్లర్ దృష్టి మరియు శ్రవణ లోపం ఉన్నప్పటికీ విశేష విజయాలు సాధించి ప్రపంచవ్యాప్తంగా ప్రేరణగా నిలిచారు."
    },
    {
        "question": "మేధో వైకల్యం (Intellectual Disability) యొక్క ప్రధాన లక్షణం ఏమిటి?",
        "options": [
            "కేవలం వినికిడి సమస్య",
            "బుద్ధి సామర్థ్యం మరియు అనుకూల ప్రవర్తనలో గణనీయమైన పరిమితులు",
            "కేవలం చూపు లోపం",
            "మాట్లాడలేకపోవడం మాత్రమే"
        ],
        "correct": 1,
        "explanation": "మేధో వైకల్యం అనేది బుద్ధి సామర్థ్యం మరియు దైనందిన జీవితానికి అవసరమైన అనుకూల ప్రవర్తనలో పరిమితులతో గుర్తించబడుతుంది."
    },
    {
        "question": "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న పిల్లల్లో సాధారణంగా కనిపించే లక్షణం ఏది?",
        "options": [
            "తరచుగా ఎకోలాలియా (Echolalia)",
            "వేగంగా చూపు కోల్పోవడం",
            "వినికిడి పూర్తిగా కోల్పోవడం",
            "ఎముకల బలహీనత"
        ],
        "correct": 0,
        "explanation": "ఎకోలాలియా అంటే ఇతరులు చెప్పిన మాటలను తిరిగి పునరావృతం చేయడం. ఇది ఆటిజం ఉన్న కొంతమంది పిల్లల్లో కనిపించే సాధారణ లక్షణం."
    },
    {
        "question": "బ్రెయిల్ (Braille) లిపి ప్రధానంగా ఎవరి కోసం ఉపయోగించబడుతుంది?",
        "options": [
            "శ్రవణ లోపం గల విద్యార్థులు",
            "దృష్టి లోపం గల విద్యార్థులు",
            "మేధో వైకల్యం గల విద్యార్థులు",
            "ఆటిజం ఉన్న విద్యార్థులు"
        ],
        "correct": 1,
        "explanation": "బ్రెయిల్ అనేది స్పర్శ ఆధారిత లిపి. ఇది దృష్టి లోపం గల వ్యక్తులు చదవడం మరియు వ్రాయడానికి ఉపయోగిస్తారు."
    },
    {
        "question": "శ్రవణ లోపం గల విద్యార్థి సాధారణ తరగతి గదిలో కూర్చోవడానికి అనువైన స్థానం ఏది?",
        "options": [
            "చివరి వరుస",
            "మొదటి వరుస",
            "కిటికీ బయట",
            "తలుపు బయట"
        ],
        "correct": 1,
        "explanation": "శ్రవణ లోపం గల విద్యార్థి ఉపాధ్యాయుడిని స్పష్టంగా చూడటానికి మరియు వినికిడి పరికరాన్ని సమర్థవంతంగా ఉపయోగించడానికి మొదటి వరుస అనుకూలం."
    },
    {
        "question": "జాస్ (JAWS) సాఫ్ట్‌వేర్ ప్రధానంగా ఎవరు ఉపయోగిస్తారు?",
        "options": [
            "దృష్టి లోపం గల వ్యక్తులు",
            "శ్రవణ లోపం గల వ్యక్తులు",
            "ఆటిజం ఉన్న విద్యార్థులు",
            "మేధో వైకల్యం గల విద్యార్థులు"
        ],
        "correct": 0,
        "explanation": "JAWS ఒక స్క్రీన్ రీడర్ సాఫ్ట్‌వేర్. ఇది కంప్యూటర్‌లోని సమాచారాన్ని శబ్ద రూపంలో చదివి దృష్టి లోపం గల వ్యక్తులకు సహాయపడుతుంది."
    },
    {
        "question": "ప్రత్యేక విద్యావేత్త (Special Educator) యొక్క ప్రధాన బాధ్యత ఏమిటి?",
        "options": [
            "పాఠశాల భవన నిర్మాణం పర్యవేక్షించడం",
            "ప్రత్యేక అవసరాలు గల విద్యార్థుల అభ్యాసానికి తగిన బోధన అందించడం",
            "పరీక్ష ఫీజులు వసూలు చేయడం",
            "పాఠశాల ఖాతాలు నిర్వహించడం"
        ],
        "correct": 1,
        "explanation": "ప్రత్యేక విద్యావేత్త విద్యార్థి అవసరాలను అంచనా వేసి తగిన బోధన, సహాయక పద్ధతులు మరియు వ్యక్తిగత ప్రణాళికలను అమలు చేస్తాడు."
    },
    {
        "question": "డిస్లెక్సియా (Dyslexia) ప్రధానంగా దేనికి సంబంధించిన అభ్యాస సమస్య?",
        "options": [
            "చదవడం",
            "వినికిడి",
            "చూపు",
            "నడక"
        ],
        "correct": 0,
        "explanation": "డిస్లెక్సియా అనేది చదవడం, పదాలను గుర్తించడం మరియు భాషా ప్రాసెసింగ్‌లో ఇబ్బందులను కలిగించే నిర్దిష్ట అభ్యాస వైకల్యం."
    },
    {
        "question": "డిస్కాల్కులియా (Dyscalculia) ప్రధానంగా దేనికి సంబంధించినది?",
        "options": [
            "గణిత అభ్యాసం",
            "చిత్రలేఖనం",
            "వినికిడి",
            "మాట్లాడడం"
        ],
        "correct": 0,
        "explanation": "డిస్కాల్కులియా అనేది సంఖ్యలు, లెక్కలు మరియు గణిత భావనలను అర్థం చేసుకోవడంలో ఇబ్బందిని కలిగించే నిర్దిష్ట అభ్యాస వైకల్యం."
    },
    {
        "question": "వ్యక్తిగత విద్యా ప్రణాళిక (IEP)లో తప్పనిసరిగా ఉండవలసిన అంశం ఏది?",
        "options": [
            "విద్యార్థి బలాలు మరియు లక్ష్యాలు",
            "పాఠశాల వార్షిక బడ్జెట్",
            "ఉపాధ్యాయుల జీత వివరాలు",
            "పాఠశాల భవన పటం"
        ],
        "correct": 0,
        "explanation": "IEPలో విద్యార్థి ప్రస్తుత స్థాయి, బలాలు, అవసరాలు, అభ్యాస లక్ష్యాలు మరియు అవసరమైన మద్దతు వివరాలు తప్పనిసరిగా ఉంటాయి."
    },
    {
        "question": "సహాయక సాంకేతికత (Assistive Technology) యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        "options": [
            "పరీక్షల సంఖ్య పెంచడం",
            "వైకల్యం గల వ్యక్తుల కార్యనిర్వహణ మరియు అభ్యాసాన్ని సులభతరం చేయడం",
            "కేవలం కంప్యూటర్ బోధించడం",
            "పాఠశాల నిర్వహణను మెరుగుపరచడం"
        ],
        "correct": 1,
        "explanation": "సహాయక సాంకేతిక పరికరాలు వైకల్యం గల వ్యక్తుల స్వతంత్రత, సంభాషణ మరియు అభ్యాస సామర్థ్యాన్ని మెరుగుపరచడానికి ఉపయోగపడతాయి."
    },
    {
        "question": "సమగ్ర విద్య (Inclusive Education)లో ఉపాధ్యాయుని పాత్ర ఏమిటి?",
        "options": [
            "అందరికీ ఒకే విధమైన బోధన చేయడం",
            "విద్యార్థుల వ్యక్తిగత అవసరాలకు అనుగుణంగా బోధనలో మార్పులు చేయడం",
            "ప్రత్యేక అవసరాలు గల విద్యార్థులను వేరు చేయడం",
            "ప్రత్యేక పాఠ్యపుస్తకాలు మాత్రమే బోధించడం"
        ],
        "correct": 1,
        "explanation": "సమగ్ర విద్యలో ఉపాధ్యాయుడు భిన్న అవసరాలను గుర్తించి బోధన, మూల్యాంకనం మరియు తరగతి కార్యకలాపాల్లో తగిన అనుసరణలు చేస్తాడు."
    },
    {
        "question": "క్రింది వాటిలో నిర్దిష్ట అభ్యాస వైకల్యం (Specific Learning Disability) ఏది?",
        "options": [
            "డిస్లెక్సియా (Dyslexia)",
            "దృష్టి లోపం",
            "శ్రవణ లోపం",
            "లోకోమోటర్ వైకల్యం"
        ],
        "correct": 0,
        "explanation": "డిస్లెక్సియా నిర్దిష్ట అభ్యాస వైకల్యాల్లో ఒకటి. ఇది ప్రధానంగా చదవడం మరియు భాషా ప్రాసెసింగ్‌పై ప్రభావం చూపుతుంది."
    },
    {
        "question": "భారత ప్రభుత్వం అమలు చేస్తున్న దివ్యాంగుల హక్కుల చట్టం ఏది?",
        "options": [
            "విద్యా హక్కు చట్టం, 2009",
            "సమాచార హక్కు చట్టం, 2005",
            "దివ్యాంగుల హక్కుల చట్టం (RPWD Act), 2016",
            "బాల కార్మిక నిషేధ చట్టం, 1986"
        ],
        "correct": 2,
        "explanation": "దివ్యాంగుల హక్కుల చట్టం (RPWD Act), 2016 దివ్యాంగుల హక్కులు, సమాన అవకాశాలు మరియు సమగ్ర విద్యను చట్టబద్ధంగా పరిరక్షించే ప్రధాన చట్టం."
    },
    {
        "question": "దివ్యాంగుల హక్కుల చట్టం (RPWD Act), 2016 ప్రకారం 'శ్రవణ లోపం'లో ఏ రెండు వర్గాలు ఉంటాయి?",
        "options": [
            "చెవిటితనం మరియు తక్కువ వినికిడి",
            "డిస్లెక్సియా మరియు డిస్గ్రాఫియా",
            "పాక్షిక అంధత్వం మరియు సంపూర్ణ అంధత్వం",
            "మేధో వైకల్యం మరియు ఆటిజం"
        ],
        "correct": 0,
        "explanation": "RPWD Act, 2016 ప్రకారం Hearing Impairmentలో Deaf మరియు Hard of Hearing అనే రెండు వర్గాలు ఉన్నాయి."
    },
    {
        "question": "సెరిబ్రల్ పాల్సీ (Cerebral Palsy) ప్రధానంగా దేనిని ప్రభావితం చేస్తుంది?",
        "options": [
            "రక్త ప్రసరణ వ్యవస్థను",
            "కదలికలు మరియు శరీర సమన్వయాన్ని",
            "జీర్ణ వ్యవస్థను",
            "మూత్రపిండాలను"
        ],
        "correct": 1,
        "explanation": "సెరిబ్రల్ పాల్సీ మెదడు అభివృద్ధిలో లోపం వల్ల కదలికలు, కండరాల నియంత్రణ మరియు శరీర సమన్వయంపై ప్రభావం చూపుతుంది."
    },
    {
        "question": "డిస్గ్రాఫియా (Dysgraphia) ప్రధానంగా ఏ నైపుణ్యానికి సంబంధించిన నిర్దిష్ట అభ్యాస వైకల్యం?",
        "options": [
            "చదవడం",
            "వ్రాయడం",
            "లెక్కించడం",
            "వినడం"
        ],
        "correct": 1,
        "explanation": "డిస్గ్రాఫియా ఉన్న విద్యార్థులకు అక్షరాలను సరిగ్గా వ్రాయడం, వ్రాత స్పష్టత మరియు లిఖిత వ్యక్తీకరణలో ఇబ్బందులు ఉంటాయి."
    },
    {
        "question": "డౌన్ సిండ్రోమ్ (Down Syndrome) ప్రధానంగా దేనివల్ల సంభవిస్తుంది?",
        "options": [
            "వినికిడి లోపం",
            "క్రోమోజోమ్ అసాధారణత",
            "పోషకాహార లోపం",
            "సంవాహక వ్యాధి"
        ],
        "correct": 1,
        "explanation": "డౌన్ సిండ్రోమ్ క్రోమోజోమ్-21 అదనపు ప్రతితో ఏర్పడే జన్యుపరమైన పరిస్థితి."
    },
    {
        "question": "శ్రవణ లోపం గల విద్యార్థికి బోధించేటప్పుడు ఉపాధ్యాయుడు ముఖ్యంగా ఏమి చేయాలి?",
        "options": [
            "విద్యార్థిని వెనుక వరుసలో కూర్చోబెట్టాలి",
            "ముఖాన్ని విద్యార్థి వైపు ఉంచి స్పష్టంగా మాట్లాడాలి",
            "చాలా వేగంగా మాట్లాడాలి",
            "ఎల్లప్పుడూ బోర్డు వైపు తిరిగి మాట్లాడాలి"
        ],
        "correct": 1,
        "explanation": "శ్రవణ లోపం గల విద్యార్థి పెదవుల కదలికలు మరియు ముఖ భావాలను గమనించేందుకు ఉపాధ్యాయుడు ఎదురుగా నిలబడి స్పష్టంగా మాట్లాడాలి."
    },
    {
        "question": "ప్రత్యేక అవసరాలు గల విద్యార్థుల కోసం బోధనలో 'Concrete to Abstract' పద్ధతి అంటే ఏమిటి?",
        "options": [
            "సూత్రాలతో ప్రారంభించడం",
            "నిజమైన వస్తువుల నుండి భావనల వైపు తీసుకెళ్లడం",
            "పరీక్షలతో ప్రారంభించడం",
            "నిర్వచనాలు మాత్రమే బోధించడం"
        ],
        "correct": 1,
        "explanation": "Concrete to Abstract పద్ధతిలో ముందుగా నిజమైన వస్తువులు, నమూనాలు చూపించి తరువాత భావనలను బోధిస్తారు."
    },
    {
        "question": "క్రింది వాటిలో దృష్టి లోపం గల విద్యార్థికి సహాయక పరికరం ఏది?",
        "options": [
            "హియరింగ్ ఎయిడ్",
            "బ్రెయిల్ స్లేట్ మరియు స్టైలస్",
            "వీల్ చెయిర్",
            "వాకర్"
        ],
        "correct": 1,
        "explanation": "బ్రెయిల్ స్లేట్ మరియు స్టైలస్ ద్వారా దృష్టి లోపం గల విద్యార్థులు బ్రెయిల్ లిపిలో చదవడం, వ్రాయడం నేర్చుకుంటారు."
    },
    {
        "question": "లోకోమోటర్ వైకల్యం (Locomotor Disability) ప్రధానంగా దేనిని ప్రభావితం చేస్తుంది?",
        "options": [
            "మాట్లాడే సామర్థ్యాన్ని",
            "కదలికలు మరియు శారీరక చలనం",
            "వినికిడి",
            "చూపు"
        ],
        "correct": 1,
        "explanation": "లోకోమోటర్ వైకల్యం శరీర కదలికలు, నడక మరియు అవయవాల వినియోగాన్ని ప్రభావితం చేసే శారీరక వైకల్యం."
    },
    {
        "question": "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న విద్యార్థికి అత్యంత ఉపయోగకరమైన బోధనా విధానం ఏది?",
        "options": [
            "స్పష్టమైన దినచర్య మరియు దృశ్య సూచనలు",
            "ప్రతిరోజూ మారే బోధనా విధానం",
            "మాటల ద్వారా మాత్రమే బోధించడం",
            "ఎటువంటి సూచనలు ఇవ్వకపోవడం"
        ],
        "correct": 0,
        "explanation": "ASD ఉన్న విద్యార్థులు క్రమబద్ధమైన దినచర్య, దృశ్య సూచనలు మరియు ముందస్తు నిర్మాణం ఉన్న బోధనలో మెరుగ్గా నేర్చుకుంటారు."
    },
    {
        "question": "డిస్కాల్కులియా (Dyscalculia) ఉన్న విద్యార్థికి గణితం బోధించేటప్పుడు ఏ పద్ధతి అనుకూలం?",
        "options": [
            "సంఖ్యా బ్లాకులు మరియు దృశ్య సామగ్రి ఉపయోగించడం",
            "కంఠస్థం మాత్రమే చేయించడం",
            "వేగంగా పరీక్షలు నిర్వహించడం",
            "గణితం బోధించకుండా ఉండటం"
        ],
        "correct": 0,
        "explanation": "దృశ్య సామగ్రి, సంఖ్యా బ్లాకులు మరియు దశలవారీ బోధన డిస్కాల్కులియా ఉన్న విద్యార్థులకు గణిత భావనలను సులభతరం చేస్తాయి."
    },
    {
        "question": "వ్యక్తిగత విద్యా ప్రణాళిక (IEP)ను కాలానుగుణంగా ఎందుకు సమీక్షించాలి?",
        "options": [
            "ఉపాధ్యాయుల సంఖ్య పెంచడానికి",
            "విద్యార్థి పురోగతిని బట్టి లక్ష్యాలను సవరించడానికి",
            "పరీక్ష తేదీలు మార్చడానికి",
            "పాఠశాల సమయాన్ని మార్చడానికి"
        ],
        "correct": 1,
        "explanation": "IEP స్థిరమైన పత్రం కాదు. విద్యార్థి పురోగతి మరియు అవసరాలను బట్టి లక్ష్యాలు, బోధనా విధానాలు పునఃసమీక్షించాలి."
    },
    {
        "question": "మేధో వైకల్యం (Intellectual Disability) మరియు మానసిక అనారోగ్యం (Mental Illness) గురించి సరైన వాక్యం ఏది?",
        "options": [
            "రెండూ ఒకటే",
            "రెండూ భిన్నమైన పరిస్థితులు",
            "మేధో వైకల్యం మానసిక అనారోగ్యంలో భాగం",
            "మానసిక అనారోగ్యం ఎల్లప్పుడూ జన్యుపరమైనది"
        ],
        "correct": 1,
        "explanation": "మేధో వైకల్యం మరియు మానసిక అనారోగ్యం వేర్వేరు పరిస్థితులు. వాటి కారణాలు, లక్షణాలు మరియు నిర్వహణ విధానాలు భిన్నంగా ఉంటాయి."
    },
    {
        "question": "ప్రత్యేక అవసరాలు గల విద్యార్థుల మూల్యాంకనంలో అత్యంత ముఖ్యమైన సూత్రం ఏది?",
        "options": [
            "అందరికీ ఒకే పరీక్ష",
            "విద్యార్థి అవసరాలకు అనుగుణమైన మూల్యాంకనం",
            "మార్కుల ఆధారంగా మాత్రమే నిర్ణయం",
            "మౌఖిక పరీక్షలు పూర్తిగా తొలగించడం"
        ],
        "correct": 1,
        "explanation": "సమగ్ర విద్యలో విద్యార్థి వైకల్యం, అవసరాలు మరియు అభ్యాస లక్ష్యాలను దృష్టిలో ఉంచుకొని తగిన మూల్యాంకన పద్ధతులు ఉపయోగించాలి."
    },
    {
        "question": "సమగ్ర విద్య (Inclusive Education) విజయవంతం కావడానికి అత్యంత అవసరమైన అంశం ఏది?",
        "options": [
            "విద్యార్థులను వేరు చేయడం",
            "ఉపాధ్యాయులు, తల్లిదండ్రులు మరియు పాఠశాల మధ్య సహకారం",
            "పరీక్షల సంఖ్య పెంచడం",
            "ప్రత్యేక పాఠశాలల సంఖ్య పెంచడం"
        ],
        "correct": 1,
        "explanation": "సమగ్ర విద్య విజయానికి ఉపాధ్యాయులు, తల్లిదండ్రులు, ప్రత్యేక విద్యావేత్తలు మరియు పాఠశాల యాజమాన్యం మధ్య సమన్వయం అత్యంత అవసరం."
    },
    {
        "question": "దివ్యాంగుల హక్కుల చట్టం (RPWD Act), 2016 ప్రకారం గుర్తించబడిన వైకల్యాల సంఖ్య ఎంత?",
        "options": [
            "15",
            "18",
            "21",
            "24"
        ],
        "correct": 2,
        "explanation": "దివ్యాంగుల హక్కుల చట్టం (RPWD Act), 2016 ప్రకారం మొత్తం 21 రకాల వైకల్యాలు గుర్తించబడ్డాయి. ఈ ప్రశ్న AP TETలో తరచుగా అడిగే ప్రత్యక్ష ప్రశ్న."
    },
    {
        "question": "సమగ్ర విద్య (Inclusive Education)లో 'Least Restrictive Environment (LRE)' అనే భావన దేనిని సూచిస్తుంది?",
        "options": [
            "ప్రత్యేక పాఠశాలలో మాత్రమే బోధించడం",
            "విద్యార్థిని సాధ్యమైనంత వరకు సాధారణ తరగతిలోనే బోధించడం",
            "విద్యార్థికి పరీక్షలు నిర్వహించకపోవడం",
            "విద్యార్థిని ఇంటి వద్దనే బోధించడం"
        ],
        "correct": 1,
        "explanation": "Least Restrictive Environment (LRE) ప్రకారం ప్రత్యేక అవసరాలు గల విద్యార్థి సాధ్యమైనంత వరకు సాధారణ విద్యార్థులతో కలిసి అభ్యసించాలి."
    },
    {
        "question": "శామ్యూల్ కిర్క్ (Samuel Kirk) 'Learning Disability' అనే పదాన్ని మొదటిసారిగా ఏ సంవత్సరంలో ఉపయోగించారు?",
        "options": [
            "1958",
            "1961",
            "1963",
            "1965"
        ],
        "correct": 2,
        "explanation": "శామ్యూల్ కిర్క్ 1963లో 'Learning Disability' అనే పదాన్ని అధికారికంగా ఉపయోగించారు. ప్రత్యేక విద్య చరిత్రలో ఇది ఒక ముఖ్యమైన మైలురాయి."
    },
    {
        "question": "క్రింది వారిలో బ్రెయిల్ లిపిని అభివృద్ధి చేసిన వ్యక్తి ఎవరు?",
        "options": [
            "హెలెన్ కెల్లర్",
            "లూయిస్ బ్రెయిల్",
            "జీన్ ఇటార్డ్",
            "ఎడ్వర్డ్ సెగ్విన్"
        ],
        "correct": 1,
        "explanation": "లూయిస్ బ్రెయిల్ దృష్టి లోపం గల వ్యక్తుల కోసం బ్రెయిల్ లిపిని రూపొందించారు. ఇది ప్రపంచవ్యాప్తంగా ప్రామాణిక స్పర్శ లిపిగా ఉపయోగించబడుతోంది."
    },
    {
        "question": "శ్రవణ లోపం గల విద్యార్థికి తరగతి గదిలో ఉపాధ్యాయుడు ప్రధానంగా దేనిని తగ్గించాలి?",
        "options": [
            "వెలుతురు",
            "నేపథ్య శబ్దం",
            "పుస్తకాల సంఖ్య",
            "తరగతి గది విస్తీర్ణం"
        ],
        "correct": 1,
        "explanation": "నేపథ్య శబ్దం తగ్గించడం ద్వారా శ్రవణ లోపం గల విద్యార్థి ఉపాధ్యాయుని మాటలను లేదా హియరింగ్ ఎయిడ్ ద్వారా వినడాన్ని సులభతరం చేయవచ్చు."
    },
    {
        "question": "డిస్లెక్సియా (Dyslexia) ఉన్న విద్యార్థిలో ప్రధానంగా ఏ నైపుణ్యం ప్రభావితమవుతుంది?",
        "options": [
            "చదవడం",
            "నడక",
            "వినికిడి",
            "చూపు"
        ],
        "correct": 0,
        "explanation": "డిస్లెక్సియా ప్రధానంగా చదవడం, పదాలను గుర్తించడం మరియు ధ్వని-అక్షర సంబంధాన్ని అర్థం చేసుకోవడంలో ఇబ్బందిని కలిగిస్తుంది."
    },
    {
        "question": "ప్రత్యేక అవసరాలు గల విద్యార్థికి అదనపు పరీక్ష సమయం కల్పించడం ఏ సూత్రానికి ఉదాహరణ?",
        "options": [
            "సమానత్వం",
            "సముచిత సౌకర్యం (Reasonable Accommodation)",
            "విభజన",
            "పోటీ మూల్యాంకనం"
        ],
        "correct": 1,
        "explanation": "Reasonable Accommodation అంటే విద్యార్థి వైకల్యాన్ని దృష్టిలో ఉంచుకొని అవసరమైన సౌకర్యాలు కల్పించడం. అదనపు పరీక్ష సమయం అందులో ఒకటి."
    },
    {
        "question": "క్రింది వాటిలో ప్రత్యామ్నాయ మరియు వృద్ధి సంభాషణ (AAC) సాధనం ఏది?",
        "options": [
            "కమ్యూనికేషన్ బోర్డు",
            "బ్రెయిల్ స్లేట్",
            "అబాకస్",
            "వీల్ చెయిర్"
        ],
        "correct": 0,
        "explanation": "AAC (Augmentative and Alternative Communication)లో కమ్యూనికేషన్ బోర్డులు, పిక్చర్ కార్డులు మరియు స్పీచ్ జనరేటింగ్ పరికరాలు ఉపయోగిస్తారు."
    },
    {
        "question": "క్రింది వాటిలో ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD)కు సాధారణ లక్షణం ఏది?",
        "options": [
            "సామాజిక పరస్పర చర్యలో ఇబ్బంది",
            "చూపు పూర్తిగా కోల్పోవడం",
            "వినికిడి పూర్తిగా కోల్పోవడం",
            "ఎముకలు బలహీనపడటం"
        ],
        "correct": 0,
        "explanation": "ASD ఉన్న పిల్లల్లో సామాజిక పరస్పర చర్యలు, సంభాషణ మరియు పరిమిత పునరావృత ప్రవర్తనలు సాధారణంగా కనిపిస్తాయి."
    },
    {
        "question": "ప్రత్యేక విద్యలో 'టాస్క్ అనాలిసిస్ (Task Analysis)' అంటే ఏమిటి?",
        "options": [
            "ఒక పనిని చిన్న చిన్న దశలుగా విభజించి బోధించడం",
            "విద్యార్థుల మార్కులు లెక్కించడం",
            "పరీక్ష ప్రశ్నలు తయారు చేయడం",
            "తరగతి గదిని విభజించడం"
        ],
        "correct": 0,
        "explanation": "Task Analysis ద్వారా క్లిష్టమైన పనిని చిన్న దశలుగా విభజించి బోధించడం వల్ల ప్రత్యేక అవసరాలు గల విద్యార్థులు సులభంగా నేర్చుకుంటారు."
    },
    {
        "question": "మేధో వైకల్యం (Intellectual Disability) నిర్ధారణలో IQతో పాటు ఇంకేదాన్ని తప్పనిసరిగా పరిగణిస్తారు?",
        "options": [
            "ఎత్తు",
            "అనుకూల ప్రవర్తన (Adaptive Behaviour)",
            "బరువు",
            "రక్త గ్రూపు"
        ],
        "correct": 1,
        "explanation": "మేధో వైకల్య నిర్ధారణలో IQ ఒక్కటే సరిపోదు. అనుకూల ప్రవర్తనలో గణనీయమైన పరిమితులు కూడా ఉండాలి."
    },
    {
        "question": "సమగ్ర విద్య (Inclusive Education)లో సహవిద్యార్థుల పాత్ర ఏమిటి?",
        "options": [
            "ప్రత్యేక అవసరాలు గల విద్యార్థులను వేరుచేయడం",
            "సహకారం, అంగీకారం మరియు సామాజిక భాగస్వామ్యాన్ని పెంపొందించడం",
            "పరీక్షలు మాత్రమే నిర్వహించడం",
            "ఉపాధ్యాయుడి స్థానంలో బోధించడం"
        ],
        "correct": 1,
        "explanation": "సహవిద్యార్థుల సహకారం ద్వారా సామాజిక పరస్పర చర్యలు పెరిగి సమగ్ర విద్య లక్ష్యాలు సులభంగా సాధ్యమవుతాయి."
    },
    {
        "question": "ప్రత్యేక అవసరాలు గల విద్యార్థి పురోగతిని అంచనా వేయడానికి అత్యంత అనుకూలమైన పద్ధతి ఏది?",
        "options": [
            "నిరంతర సమగ్ర మూల్యాంకనం",
            "వార్షిక పరీక్ష మాత్రమే",
            "ర్యాంకుల పోలిక",
            "ఒకే రాత పరీక్ష"
        ],
        "correct": 0,
        "explanation": "నిరంతర సమగ్ర మూల్యాంకనం ద్వారా విద్యార్థి అభ్యాస పురోగతి, ప్రవర్తన మరియు నైపుణ్యాలను నిరంతరం పరిశీలించవచ్చు."
    },
    {
        "question": "దృష్టి లోపం గల విద్యార్థికి గణితం బోధించడానికి అత్యంత అనుకూలమైన సాధనం ఏది?",
        "options": [
            "బ్రెయిల్ గణిత కిట్",
            "హియరింగ్ ఎయిడ్",
            "కమ్యూనికేషన్ బోర్డు",
            "సైన్ లాంగ్వేజ్ చార్ట్"
        ],
        "correct": 0,
        "explanation": "బ్రెయిల్ గణిత కిట్లు మరియు స్పర్శ ఆధారిత సామగ్రి ద్వారా దృష్టి లోపం గల విద్యార్థులు గణిత భావనలను సులభంగా నేర్చుకుంటారు."
    },
    {
        "question": "సమగ్ర విద్య (Inclusive Education) విజయవంతంగా అమలుకావడానికి పాఠశాల ముందుగా ఏ దృక్పథాన్ని కలిగి ఉండాలి?",
        "options": [
            "విభజన దృక్పథం",
            "స్వీకారం మరియు సమాన అవకాశాల దృక్పథం",
            "పోటీ ఆధారిత దృక్పథం",
            "పరీక్షా కేంద్రిత దృక్పథం"
        ],
        "correct": 1,
        "explanation": "సమగ్ర విద్య విజయానికి పాఠశాల, ఉపాధ్యాయులు మరియు సమాజం అందరూ స్వీకారం, సమానత్వం మరియు భాగస్వామ్య దృక్పథాన్ని అవలంబించాలి."
    },
    {
        "question": "ప్రత్యేక అవసరాలు గల విద్యార్థి యొక్క ప్రస్తుత విద్యా స్థాయి, వార్షిక లక్ష్యాలు మరియు అవసరమైన సేవలను నమోదు చేసే పత్రం ఏది?",
        "options": [
            "వ్యక్తిగత ఆరోగ్య నివేదిక",
            "వ్యక్తిగత విద్యా ప్రణాళిక (IEP)",
            "పాఠశాల వార్షిక నివేదిక",
            "ప్రవేశ నమోదు పత్రం"
        ],
        "correct": 1,
        "explanation": "వ్యక్తిగత విద్యా ప్రణాళిక (IEP)లో విద్యార్థి ప్రస్తుత పనితీరు, వార్షిక లక్ష్యాలు, బోధనా వ్యూహాలు మరియు అవసరమైన ప్రత్యేక సేవలు నమోదు చేయబడతాయి."
    },
    {
        "question": "సమగ్ర విద్య (Inclusive Education) విజయవంతంగా అమలు కావడానికి అత్యంత ముఖ్యమైనది ఏది?",
        "options": [
            "విద్యార్థులను వైకల్యం ఆధారంగా వేరు చేయడం",
            "ఉపాధ్యాయులు, తల్లిదండ్రులు మరియు నిపుణుల సమన్వయం",
            "ప్రత్యేక పాఠశాలల్లో మాత్రమే బోధించడం",
            "పరీక్షల సంఖ్య పెంచడం"
        ],
        "correct": 1,
        "explanation": "సమగ్ర విద్యలో ఉపాధ్యాయులు, తల్లిదండ్రులు, ప్రత్యేక విద్యావేత్తలు మరియు పాఠశాల పరిపాలన మధ్య సమన్వయం విద్యార్థి అభివృద్ధికి కీలకం."
    },
    {
        "question": "డిస్ప్రాక్సియా (Dyspraxia) ప్రధానంగా దేనిని ప్రభావితం చేస్తుంది?",
        "options": [
            "శరీర కదలికల సమన్వయం",
            "వినికిడి సామర్థ్యం",
            "దృష్టి సామర్థ్యం",
            "రంగులను గుర్తించడం"
        ],
        "correct": 0,
        "explanation": "డిస్ప్రాక్సియా ఉన్న వ్యక్తులకు శరీర కదలికల సమన్వయం మరియు మోటార్ నైపుణ్యాల నిర్వహణలో ఇబ్బందులు ఉంటాయి."
    },
    {
        "question": "క్రింది వాటిలో శ్రవణ లోపం గల విద్యార్థికి సహాయక పరికరం ఏది?",
        "options": [
            "బ్రెయిల్ స్లేట్",
            "హియరింగ్ ఎయిడ్",
            "వాకర్",
            "వీల్ చెయిర్"
        ],
        "correct": 1,
        "explanation": "హియరింగ్ ఎయిడ్ శబ్దాన్ని పెంచి శ్రవణ లోపం గల వ్యక్తికి వినికిడిని మెరుగుపరచడంలో సహాయపడుతుంది."
    },
    {
        "question": "ప్రత్యేక అవసరాలు గల విద్యార్థి పురోగతిని నమోదు చేయడానికి అత్యంత అనుకూలమైన పద్ధతి ఏది?",
        "options": [
            "పోర్ట్‌ఫోలియో మూల్యాంకనం",
            "వార్షిక పరీక్ష మాత్రమే",
            "ర్యాంకుల జాబితా",
            "ఒకే మౌఖిక పరీక్ష"
        ],
        "correct": 0,
        "explanation": "పోర్ట్‌ఫోలియో ద్వారా విద్యార్థి పనులు, పురోగతి మరియు నైపుణ్యాల అభివృద్ధిని నిరంతరంగా పరిశీలించవచ్చు."
    },
    {
        "question": "దృష్టి లోపం గల విద్యార్థికి తరగతి గదిలో ఉపాధ్యాయుడు ముఖ్యంగా ఏ బోధనా విధానాన్ని అనుసరించాలి?",
        "options": [
            "దృశ్య సూచనలు మాత్రమే ఇవ్వడం",
            "స్పర్శ మరియు శ్రవణ ఆధారిత బోధన",
            "బోర్డుపై మాత్రమే వ్రాయడం",
            "సైగలతో మాత్రమే బోధించడం"
        ],
        "correct": 1,
        "explanation": "దృష్టి లోపం గల విద్యార్థులకు స్పర్శ, శ్రవణ మరియు వాచిక వివరణల ఆధారంగా బోధించడం అత్యంత ప్రభావవంతమైన పద్ధతి."
    },
    {
        "question": "సైన్ లాంగ్వేజ్ (Sign Language) ప్రధానంగా ఎవరి సంభాషణకు ఉపయోగపడుతుంది?",
        "options": [
            "దృష్టి లోపం గల వ్యక్తులు",
            "శ్రవణ లోపం గల వ్యక్తులు",
            "లోకోమోటర్ వైకల్యం గల వ్యక్తులు",
            "మేధో వైకల్యం గల వ్యక్తులు"
        ],
        "correct": 1,
        "explanation": "సైన్ లాంగ్వేజ్ చేతి సంజ్ఞలు మరియు ముఖ కవళికల ద్వారా సంభాషించడానికి ఉపయోగించే భాష. ఇది ప్రధానంగా శ్రవణ లోపం గల వ్యక్తులకు ఉపయోగపడుతుంది."
    },
    {
        "question": "సమగ్ర విద్యలో 'పీర్ ట్యూటరింగ్ (Peer Tutoring)' అంటే ఏమిటి?",
        "options": [
            "ఉపాధ్యాయుడు మాత్రమే బోధించడం",
            "విద్యార్థి మరొక విద్యార్థికి అభ్యాసంలో సహాయం చేయడం",
            "తల్లిదండ్రులు తరగతి నిర్వహించడం",
            "ఆన్‌లైన్ పరీక్ష నిర్వహించడం"
        ],
        "correct": 1,
        "explanation": "పీర్ ట్యూటరింగ్‌లో ఒక విద్యార్థి మరొక విద్యార్థికి అభ్యాసంలో సహాయం చేస్తాడు. ఇది సమగ్ర విద్యలో సహకార అభ్యాసాన్ని ప్రోత్సహిస్తుంది."
    },
    {
        "question": "మేధో వైకల్యం (Intellectual Disability) ఉన్న విద్యార్థికి బోధించేటప్పుడు ఏ పద్ధతి అనుకూలం?",
        "options": [
            "వేగంగా బోధించడం",
            "చిన్న దశలుగా బోధించి పునరావృత సాధన కల్పించడం",
            "ఒకేసారి క్లిష్టమైన అంశాలు బోధించడం",
            "వివరణ లేకుండా పనులు ఇవ్వడం"
        ],
        "correct": 1,
        "explanation": "మేధో వైకల్యం గల విద్యార్థులకు చిన్న దశలు, పునరావృతం మరియు ప్రత్యక్ష అనుభవాల ద్వారా బోధించడం ప్రభావవంతంగా ఉంటుంది."
    },
    {
        "question": "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న విద్యార్థికి మార్పులను తెలియజేయడం ఎందుకు అవసరం?",
        "options": [
            "పరీక్షల సంఖ్య పెంచడానికి",
            "దినచర్యలో ఆకస్మిక మార్పుల వల్ల కలిగే ఆందోళనను తగ్గించడానికి",
            "వారిని ప్రత్యేక తరగతికి పంపడానికి",
            "హాజరు నమోదు చేయడానికి"
        ],
        "correct": 1,
        "explanation": "ASD ఉన్న విద్యార్థులు స్థిరమైన దినచర్యను ఇష్టపడతారు. ముందస్తు సమాచారం ఇవ్వడం ద్వారా ఆందోళన తగ్గి అభ్యాసం మెరుగుపడుతుంది."
    },
    {
        "question": "క్రింది వాటిలో సహాయక సాంకేతిక పరికరం (Assistive Technology) ఏది?",
        "options": [
            "స్క్రీన్ రీడర్",
            "చాక్",
            "బ్లాక్‌బోర్డ్",
            "హాజరు పట్టిక"
        ],
        "correct": 0,
        "explanation": "స్క్రీన్ రీడర్ దృష్టి లోపం గల వ్యక్తులకు కంప్యూటర్‌లోని సమాచారాన్ని శబ్ద రూపంలో అందించే సహాయక సాంకేతిక పరికరం."
    },
    {
        "question": "ప్రత్యేక అవసరాలు గల విద్యార్థి బలాలను గుర్తించి వాటి ఆధారంగా బోధించడం ఏ సూత్రానికి ఉదాహరణ?",
        "options": [
            "లోపాల ఆధారిత విధానం",
            "బలాల ఆధారిత విధానం",
            "శిక్ష ఆధారిత విధానం",
            "పోటీ ఆధారిత విధానం"
        ],
        "correct": 1,
        "explanation": "బలాల ఆధారిత విధానంలో విద్యార్థి సామర్థ్యాలను గుర్తించి వాటిని ఉపయోగించి అభ్యాసాన్ని అభివృద్ధి చేస్తారు."
    },
    {
        "question": "సమగ్ర విద్యలో 'యూనివర్సల్ డిజైన్ ఫర్ లెర్నింగ్ (UDL)' యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        "options": [
            "అందరికీ ఒకే బోధనా విధానం",
            "వివిధ అవసరాలున్న విద్యార్థులకు అనువైన బహుళ బోధనా అవకాశాలు కల్పించడం",
            "ప్రత్యేక అవసరాలు గల విద్యార్థులను వేరుచేయడం",
            "పరీక్షలపై మాత్రమే దృష్టి పెట్టడం"
        ],
        "correct": 1,
        "explanation": "UDL అన్ని విద్యార్థుల అభ్యాస అవసరాలను దృష్టిలో ఉంచుకుని బహుళ ప్రాతినిధ్యాలు, వ్యక్తీకరణలు మరియు భాగస్వామ్య అవకాశాలను అందిస్తుంది."
    },
    {
        "question": "దృష్టి లోపం గల విద్యార్థికి పాఠ్యపుస్తకానికి ప్రత్యామ్నాయంగా ఏది అత్యంత అనుకూలం?",
        "options": [
            "ఆడియో పుస్తకం",
            "చిత్ర పుస్తకం మాత్రమే",
            "గోడ పత్రిక",
            "రంగుల చార్ట్"
        ],
        "correct": 0,
        "explanation": "ఆడియో పుస్తకాలు మరియు బ్రెయిల్ పుస్తకాలు దృష్టి లోపం గల విద్యార్థులకు సమాచారాన్ని సులభంగా అందించడానికి ఉపయోగపడతాయి."
    },
    {
        "question": "ప్రత్యేక విద్యలో కుటుంబ భాగస్వామ్యం ఎందుకు ముఖ్యమైనది?",
        "options": [
            "పరీక్ష మార్కులు పెంచడానికి మాత్రమే",
            "ఇల్లు మరియు పాఠశాల మధ్య అభ్యాస నిరంతరతను ապահովించడానికి",
            "పాఠశాల ఖర్చులు తగ్గించడానికి",
            "ఉపాధ్యాయుల పనిని తగ్గించడానికి"
        ],
        "correct": 1,
        "explanation": "తల్లిదండ్రుల భాగస్వామ్యం ద్వారా ఇంటిలో కూడా ఒకే విధమైన అభ్యాస మద్దతు లభించి విద్యార్థి సమగ్ర అభివృద్ధికి తోడ్పడుతుంది."
    }
];