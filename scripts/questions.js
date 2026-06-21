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
        question: "బహుళ మేధస్సుల సిద్ధాంతాన్ని ప్రతిపాదించిన మనోవిజ్ఞాన శాస్త్రవేత్త ఎవరు?",
        options: ["థార్న్‌డైక్", "గార్డ్నర్", "టర్మన్", "బినే"],
        correct: 1,
        explanation: "హోవర్డ్ గార్డ్నర్ బహుళ మేధస్సుల సిద్ధాంతాన్ని ప్రతిపాదించాడు. వ్యక్తులలో భాషా, తార్కిక, సంగీత, దృశ్య తదితర విభిన్న మేధస్సులు ఉంటాయని ఈ సిద్ధాంతం వివరిస్తుంది."
    },
    {
        question: "మేధస్సు అనేది సమస్యలను పరిష్కరించే సామర్థ్యం అని పేర్కొన్నది",
        options: ["గార్డ్నర్", "స్పియర్‌మన్", "బినే", "కోహ్లర్"],
        correct: 2,
        explanation: "ఆల్ఫ్రెడ్ బినే మేధస్సును సమస్యలను పరిష్కరించే మరియు పరిస్థితులకు అనుగుణంగా ఆలోచించే సామర్థ్యంగా నిర్వచించాడు. IQ పరీక్షల అభివృద్ధిలో కూడా అతని పాత్ర ముఖ్యమైనది."
    },
    {
        question: "ఒక విద్యార్థి బహుమతి కోసం మాత్రమే చదువుతున్నాడు. ఇది ఏ రకమైన ప్రేరణ?",
        options: ["అంతర్గత ప్రేరణ", "బాహ్య ప్రేరణ", "జీవసంబంధ ప్రేరణ", "సామాజిక ప్రేరణ"],
        correct: 1,
        explanation: "బహుమతి, మార్కులు లేదా ఇతర బాహ్య ప్రయోజనాల కోసం చేసే చర్యలను బాహ్య ప్రేరణ అంటారు. ఇందులో అభ్యాసం కంటే ఫలితంపై ఎక్కువ దృష్టి ఉంటుంది."
    },
    {
        question: "మాస్లో అవసరాల సోపానక్రమంలో అత్యున్నత స్థాయి",
        options: ["భద్రత అవసరాలు", "ప్రేమ అవసరాలు", "ఆత్మసాక్షాత్కారం", "గౌరవ అవసరాలు"],
        correct: 2,
        explanation: "మాస్లో అవసరాల సోపానక్రమంలో అత్యున్నత స్థాయి ఆత్మసాక్షాత్కారం. వ్యక్తి తన పూర్తి సామర్థ్యాన్ని తెలుసుకొని అభివృద్ధి చెందే స్థితిని ఇది సూచిస్తుంది."
    },
    {
        question: "ఒక ఉపాధ్యాయుడు పాఠం చెప్పేటప్పుడు విద్యార్థి కేవలం ఉపాధ్యాయుని స్వరంపైనే దృష్టి కేంద్రీకరిస్తున్నాడు. ఇది",
        options: ["అవగాహన", "గ్రహణశక్తి", "శ్రద్ధ", "ఆలోచన"],
        correct: 2,
        explanation: "ఒక నిర్దిష్ట ఉద్దీపనపై మనస్సును కేంద్రీకరించడం శ్రద్ధ. ఇక్కడ విద్యార్థి ఉపాధ్యాయుని స్వరంపై మాత్రమే దృష్టి పెట్టడం శ్రద్ధకు ఉదాహరణ."
    },
    {
        question: "గ్రహణశక్తి (Perception) ప్రధానంగా సంబంధించేది",
        options: ["అర్థాన్ని నిర్మించడం", "గుర్తుంచుకోవడం", "పునరావృతం చేయడం", "మరచిపోవడం"],
        correct: 0,
        explanation: "గ్రహణశక్తి అనేది ఇంద్రియాల ద్వారా వచ్చిన సమాచారానికి అర్థాన్ని నిర్మించే ప్రక్రియ. కేవలం ఉద్దీపనను స్వీకరించడం కాదు, దానిని అర్థం చేసుకోవడం కూడా."
    },
    {
        question: "\"g\" కారక సిద్ధాంతాన్ని ప్రతిపాదించినవారు",
        options: ["స్పియర్‌మన్", "బినే", "థార్న్‌డైక్", "గిల్‌ఫోర్డ్"],
        correct: 0,
        explanation: "చార్లెస్ స్పియర్‌మన్ సాధారణ మేధస్సు లేదా g factor సిద్ధాంతాన్ని ప్రతిపాదించాడు. అన్ని మానసిక కార్యకలాపాలకు ఒక సాధారణ మేధస్సు ఆధారం అని పేర్కొన్నాడు."
    },
    {
        question: "మేధస్సును కొలవడానికి రూపొందించిన తొలి పరీక్ష",
        options: ["వెక్స్లర్ స్కేల్", "బినే-సైమన్ పరీక్ష", "స్టాన్‌ఫోర్డ్ పరీక్ష", "CAT"],
        correct: 1,
        explanation: "బినే మరియు సైమన్ కలిసి మేధస్సును కొలవడానికి తొలి శాస్త్రీయ పరీక్షను రూపొందించారు. ఇది ఆధునిక మేధస్సు పరీక్షలకు పునాది వేసింది."
    },
    {
        question: "ఒక విద్యార్థి తరగతిలో బోధనను వింటున్నా దాని అర్థాన్ని తప్పుగా గ్రహిస్తున్నాడు. ఇది",
        options: ["శ్రద్ధ సమస్య", "ప్రేరణ సమస్య", "గ్రహణ సమస్య", "జ్ఞాపకశక్తి సమస్య"],
        correct: 2,
        explanation: "విద్యార్థి వినుతున్నప్పటికీ సమాచారాన్ని తప్పుగా అర్థం చేసుకుంటే అది గ్రహణశక్తి సమస్య. ఇది శ్రద్ధ లేదా జ్ఞాపకశక్తికి సంబంధించినది కాదు."
    },
    {
        question: "అంతర్గత ప్రేరణకు ఉదాహరణ",
        options: ["బహుమతి కోసం చదవడం", "మార్కుల కోసం చదవడం", "జ్ఞానం కోసం చదవడం", "శిక్ష భయంతో చదవడం"],
        correct: 2,
        explanation: "వ్యక్తిగత ఆసక్తి లేదా జ్ఞాన సాధన కోసం చేసే అభ్యాసం అంతర్గత ప్రేరణకు ఉదాహరణ. ఇందులో బాహ్య బహుమతులు లేదా ఒత్తిడులు ఉండవు."
    },
    {
        question: "\"ప్రాథమిక మానసిక సామర్థ్యాలు\" సిద్ధాంతాన్ని ప్రతిపాదించినవారు",
        options: ["థర్‌స్టోన్", "గార్డ్నర్", "స్పియర్‌మన్", "బినే"],
        correct: 0,
        explanation: "థర్‌స్టోన్ ప్రాథమిక మానసిక సామర్థ్యాల సిద్ధాంతాన్ని ప్రతిపాదించాడు. మేధస్సు ఒకే కారకం కాదని, అనేక ప్రత్యేక సామర్థ్యాల సమాహారమని వివరించాడు."
    },
    {
        question: "క్రింది వాటిలో శ్రద్ధను ప్రభావితం చేసే అంశం",
        options: ["ఆసక్తి", "వయస్సు", "ఆరోగ్యం", "పైవన్నీ"],
        correct: 3,
        explanation: "ఆసక్తి, వయస్సు, ఆరోగ్యం వంటి అనేక అంశాలు శ్రద్ధను ప్రభావితం చేస్తాయి. అందువల్ల ఇచ్చిన అన్ని ఎంపికలు సరైనవే."
    },
    {
        question: "సరైన జతను గుర్తించండి. a. గార్డ్నర్ – బహుళ మేధస్సులు b. స్పియర్‌మన్ – ద్వికారక సిద్ధాంతం",
        options: ["a మాత్రమే", "b మాత్రమే", "a, b రెండూ", "రెండూ కాదు"],
        correct: 2,
        explanation: "గార్డ్నర్ బహుళ మేధస్సుల సిద్ధాంతాన్ని ప్రతిపాదించాడు. స్పియర్‌మన్ ద్వికారక సిద్ధాంతాన్ని ప్రతిపాదించాడు. కాబట్టి రెండు జతలూ సరైనవే."
    },
    {
        question: "ఒక విద్యార్థి చిత్రాలను త్వరగా గుర్తించగలడు కానీ గణితంలో బలహీనుడు. ఇది గార్డ్నర్ ప్రకారం",
        options: ["భాషా మేధస్సు", "తార్కిక మేధస్సు", "దృశ్య-స్థల మేధస్సు", "సంగీత మేధస్సు"],
        correct: 2,
        explanation: "చిత్రాలు, ఆకారాలు మరియు స్థల సంబంధాలను బాగా అర్థం చేసుకునే సామర్థ్యాన్ని దృశ్య-స్థల మేధస్సు అంటారు. ఇది గార్డ్నర్ సిద్ధాంతంలోని ఒక మేధస్సు రకం."
    },
    {
        question: "మాస్లో సిద్ధాంతం ప్రకారం ఆహారం, నీరు, నిద్ర ఏ అవసరాలకు చెందుతాయి?",
        options: ["భద్రత", "గౌరవం", "శారీరక అవసరాలు", "సామాజిక అవసరాలు"],
        correct: 2,
        explanation: "ఆహారం, నీరు, నిద్ర వంటి జీవనాధార అవసరాలు మాస్లో ప్రకారం శారీరక అవసరాలు. ఇవి అవసరాల సోపానక్రమంలో ప్రాథమిక స్థాయిలో ఉంటాయి."
    },
    {
        question: "విద్యార్థుల మార్కుల పంపిణీని చూపించడానికి అనువైన గ్రాఫ్",
        options: ["హిస్టోగ్రామ్", "పైచార్ట్", "పిక్టోగ్రామ్", "మ్యాప్"],
        correct: 0,
        explanation: "నిరంతర డేటా పంపిణీని చూపించడానికి హిస్టోగ్రామ్ ఉపయోగిస్తారు. విద్యార్థుల మార్కుల ఫ్రీక్వెన్సీ పంపిణీని స్పష్టంగా విశ్లేషించేందుకు ఇది అత్యంత అనుకూలమైన గ్రాఫ్."
    },
    {
        question: "మొత్తం తరగతిలో బాలురు-బాలికల నిష్పత్తిని చూపడానికి ఉత్తమ పద్ధతి",
        options: ["లైన్ గ్రాఫ్", "హిస్టోగ్రామ్", "పైచార్ట్", "ఫ్రీక్వెన్సీ టేబుల్"],
        correct: 2,
        explanation: "మొత్తంలో భాగాల వాటాను చూపించడానికి పైచార్ట్ ఉత్తమ సాధనం. బాలురు మరియు బాలికల శాతాన్ని సులభంగా పోల్చి చూపించవచ్చు."
    },
    {
        question: "IQ పరీక్షల అభివృద్ధితో ఎక్కువగా సంబంధం ఉన్నవారు",
        options: ["బినే", "కోహ్లర్", "వాట్సన్", "స్కిన్నర్"],
        correct: 0,
        explanation: "ఆల్ఫ్రెడ్ బినే మేధస్సు కొలత కోసం మొదటి శాస్త్రీయ పరీక్షలను రూపొందించాడు. అందువల్ల IQ పరీక్షల అభివృద్ధితో అతని పేరు ఎక్కువగా సంబంధించింది."
    },
    {
        question: "శ్రద్ధ నుండి గ్రహణశక్తికి జరిగే ప్రక్రియలో మొదటిది",
        options: ["అర్థం చేసుకోవడం", "ఉద్దీపనను గమనించడం", "నిర్ణయం తీసుకోవడం", "స్పందించడం"],
        correct: 1,
        explanation: "గ్రహణ ప్రక్రియ ప్రారంభం ఉద్దీపనను గమనించడం ద్వారా జరుగుతుంది. తరువాత దానిపై శ్రద్ధ కేంద్రీకరించి అర్థాన్ని నిర్మించే దశ వస్తుంది."
    },
    {
        question: "ఒక విద్యార్థి తరచుగా ప్రశంసలు పొందిన తర్వాత మరింత బాగా చదవడం ప్రారంభించాడు. దీనికి కారణం",
        options: ["గ్రహణం", "శ్రద్ధ", "ప్రేరణ", "మేధస్సు"],
        correct: 2,
        explanation: "ప్రశంసలు విద్యార్థిలో అభ్యాసానికి ఉత్సాహాన్ని పెంచుతాయి. ఈ ప్రవర్తనను ప్రేరణ ప్రభావంగా పరిగణిస్తారు."
    },
    {
        question: "పాఠ్యాంశాలను ధ్వని, చిత్రం, వీడియో రూపంలో అందించడాన్ని ఏమంటారు?",
        options: ["నెట్‌వర్కింగ్", "మల్టీమీడియా", "ఈ-మెయిల్", "బ్రౌజింగ్"],
        correct: 1,
        explanation: "ధ్వని, చిత్రం, వీడియో, యానిమేషన్ వంటి అనేక మాధ్యమాలను కలిపి సమాచారాన్ని అందించే విధానాన్ని మల్టీమీడియా అంటారు."
    },
    {
        question: "DIKSHA ప్రధానంగా",
        options: ["సోషల్ మీడియా వేదిక", "డిజిటల్ లెర్నింగ్ వేదిక", "ఈ-మెయిల్ సేవ", "సెర్చ్ ఇంజిన్"],
        correct: 1,
        explanation: "DIKSHA భారత ప్రభుత్వ డిజిటల్ విద్యా వేదిక. ఇందులో ఉపాధ్యాయులు మరియు విద్యార్థుల కోసం డిజిటల్ పాఠ్య వనరులు అందుబాటులో ఉంటాయి."
    },
    {
        question: "MOOCs యొక్క విస్తరించిన రూపం",
        options: [
            "Massive Open Online Courses",
            "Modern Online Open Classes",
            "Multiple Online Open Courses",
            "Massive Offline Courses"
        ],
        correct: 0,
        explanation: "MOOCs అంటే Massive Open Online Courses. ఇవి పెద్ద సంఖ్యలో విద్యార్థులకు ఆన్‌లైన్ ద్వారా విద్యను అందించే కోర్సులు."
    },
    {
        question: "Moodle అనేది",
        options: [
            "ఆపరేటింగ్ సిస్టమ్",
            "లెర్నింగ్ మేనేజ్‌మెంట్ సిస్టమ్",
            "వెబ్ బ్రౌజర్",
            "యాంటీవైరస్"
        ],
        correct: 1,
        explanation: "Moodle ఒక Learning Management System (LMS). దీని ద్వారా ఉపాధ్యాయులు కోర్సులను రూపొందించి, నిర్వహించి, మూల్యాంకనం చేయగలరు."
    },
    {
        question: "విద్యా సాంకేతికత యొక్క ప్రధాన లక్ష్యం",
        options: [
            "పరీక్షలు నిర్వహించడం",
            "బోధనను సమర్థవంతం చేయడం",
            "ఫీజులు వసూలు చేయడం",
            "హాజరు నమోదు"
        ],
        correct: 1,
        explanation: "విద్యా సాంకేతికత యొక్క ప్రధాన ఉద్దేశ్యం బోధన-అభ్యాస ప్రక్రియను మరింత ప్రభావవంతంగా మరియు సమర్థవంతంగా చేయడం."
    },
    {
        question: "ఇంటర్నెట్‌లో సమాచారాన్ని వెతకడానికి ఉపయోగించేది",
        options: ["మోడెం", "సెర్చ్ ఇంజిన్", "CPU", "RAM"],
        correct: 1,
        explanation: "గూగుల్ వంటి సెర్చ్ ఇంజిన్లు ఇంటర్నెట్‌లో అవసరమైన సమాచారాన్ని కనుగొనడానికి ఉపయోగపడతాయి. ఇవి వెబ్ పేజీలను శోధించి ఫలితాలను చూపిస్తాయి."
    },
    {
        question: "ఈ-మెయిల్ చిరునామాలో @ గుర్తు ఏమి సూచిస్తుంది?",
        options: ["పంపినవాడు", "వద్ద", "ఫైల్", "ఫోల్డర్"],
        correct: 1,
        explanation: "ఈ-మెయిల్ చిరునామాలో @ గుర్తు వినియోగదారు పేరు మరియు డొమైన్ పేరును కలుపుతుంది. దీని అర్థం 'వద్ద' లేదా 'at' అని."
    },
    {
        question: "LAN అంటే",
        options: [
            "Local Area Network",
            "Large Area Network",
            "Long Area Network",
            "Linked Area Network"
        ],
        correct: 0,
        explanation: "LAN అంటే Local Area Network. ఇది ఒక చిన్న భౌగోళిక ప్రాంతంలో ఉన్న కంప్యూటర్లను అనుసంధానించే నెట్‌వర్క్."
    },
    {
        question: "WAN యొక్క పూర్తి రూపం",
        options: [
            "Wide Area Network",
            "Web Area Network",
            "Wired Area Network",
            "World Access Network"
        ],
        correct: 0,
        explanation: "WAN అంటే Wide Area Network. ఇది పెద్ద భౌగోళిక ప్రాంతాలను కవర్ చేస్తూ అనేక LANలను అనుసంధానిస్తుంది."
    },
    {
        question: "ఆన్‌లైన్ కోర్సులను పెద్ద సంఖ్యలో విద్యార్థులకు అందించేందుకు అనువైనది",
        options: ["MOOC", "Printer", "Scanner", "Pendrive"],
        correct: 0,
        explanation: "MOOCs ద్వారా ప్రపంచవ్యాప్తంగా వేలాది మంది విద్యార్థులు ఒకేసారి ఆన్‌లైన్ కోర్సులను అభ్యసించవచ్చు. అందువల్ల ఇవి భారీ స్థాయి అభ్యాసానికి అనువైనవి."
    },
    {
        question: "ఉపాధ్యాయుడు వీడియో, యానిమేషన్, ఆడియోలను కలిపి బోధిస్తే అది",
        options: ["మల్టీమీడియా బోధన", "ప్రోగ్రామ్డ్ లెర్నింగ్", "మైక్రో టీచింగ్", "డెమోన్స్ట్రేషన్"],
        correct: 0,
        explanation: "వీడియో, ఆడియో, యానిమేషన్ వంటి అనేక మాధ్యమాలను కలిపి బోధించడం మల్టీమీడియా బోధన. ఇది విద్యార్థుల ఆసక్తిని పెంచి అభ్యాసాన్ని సమర్థవంతం చేస్తుంది."
    },
    {
        question: "DIKSHAలో ప్రధానంగా లభించేవి",
        options: ["డిజిటల్ పాఠ్య వనరులు", "బ్యాంకింగ్ సేవలు", "సోషల్ చాట్", "గేమ్స్"],
        correct: 0,
        explanation: "DIKSHA వేదికలో డిజిటల్ పాఠ్యపుస్తకాలు, వీడియోలు, వర్క్‌షీట్లు మరియు ఇతర విద్యా వనరులు లభిస్తాయి. ఇది ఉపాధ్యాయులు మరియు విద్యార్థులకు ఉపయోగపడుతుంది."
    },
    {
        question: "Moodle ద్వారా ఉపాధ్యాయుడు చేయగలిగేది",
        options: ["కోర్సు నిర్వహణ", "బ్యాంకింగ్", "కాలింగ్", "ప్రింటింగ్"],
        correct: 0,
        explanation: "Moodle ఒక LMS కావడంతో కోర్సుల రూపకల్పన, అసైన్‌మెంట్లు, పరీక్షలు మరియు అభ్యాస పురోగతిని నిర్వహించడానికి ఉపయోగపడుతుంది."
    },
    {
        question: "కంప్యూటర్ నెట్‌వర్క్ ప్రధాన ప్రయోజనం",
        options: ["వనరుల భాగస్వామ్యం", "విద్యుత్ ఆదా", "ప్రింటర్ తయారీ", "డేటా తొలగింపు"],
        correct: 0,
        explanation: "నెట్‌వర్క్ ద్వారా కంప్యూటర్లు ఫైళ్లు, ప్రింటర్లు, ఇంటర్నెట్ వంటి వనరులను పరస్పరం పంచుకోవచ్చు. ఇది సమయం మరియు వ్యయాన్ని తగ్గిస్తుంది."
    },
    {
        question: "విద్యార్థులకు స్వయంకల్పిత అభ్యాస అవకాశాలు కల్పించేది",
        options: ["MOOCs", "CPU", "UPS", "Monitor"],
        correct: 0,
        explanation: "MOOCs విద్యార్థులు తమ సౌకర్యానుసారం స్వయంగా నేర్చుకునే అవకాశాన్ని కల్పిస్తాయి. ఎప్పుడైనా, ఎక్కడైనా అభ్యసించవచ్చు."
    },
    {
        question: "ఇంటర్నెట్ ద్వారా సందేశాలు పంపే సేవ",
        options: ["Email", "Scanner", "Modem", "Router"],
        correct: 0,
        explanation: "ఈ-మెయిల్ అనేది ఇంటర్నెట్ ద్వారా సందేశాలు మరియు ఫైళ్లను పంపించడానికి, స్వీకరించడానికి ఉపయోగించే ప్రసిద్ధ కమ్యూనికేషన్ సేవ."
    },
    {
        question: "Flanders Interaction Analysis ప్రధానంగా సంబంధించింది",
        options: ["తరగతి పరస్పర చర్యలు", "నెట్‌వర్క్ భద్రత", "ఈ-మెయిల్ నిర్వహణ", "హార్డ్‌వేర్"],
        correct: 0,
        explanation: "Flanders Interaction Analysis System తరగతి గదిలో ఉపాధ్యాయుడు మరియు విద్యార్థుల మధ్య జరిగే పరస్పర చర్యలను విశ్లేషించడానికి ఉపయోగిస్తారు."
    },
    {
        question: "విద్యార్థుల కోసం ఉచిత డిజిటల్ పాఠ్య వనరులను అందించే భారత ప్రభుత్వ వేదిక",
        options: ["Moodle", "DIKSHA", "Yahoo", "Linux"],
        correct: 1,
        explanation: "DIKSHA భారత ప్రభుత్వ విద్యా వేదిక. ఇందులో పాఠ్యపుస్తకాలు, వీడియోలు, అభ్యాస వనరులు ఉచితంగా అందుబాటులో ఉంటాయి."
    },
    {
        question: "మల్టీమీడియాలో భాగం కానిది",
        options: ["ధ్వని", "వీడియో", "చిత్రం", "కీబోర్డ్"],
        correct: 3,
        explanation: "మల్టీమీడియా అనేది ఆడియో, వీడియో, చిత్రాలు వంటి కంటెంట్ రూపాలను సూచిస్తుంది. కీబోర్డ్ ఒక ఇన్‌పుట్ పరికరం మాత్రమే."
    },
    {
        question: "\"Anywhere, Anytime Learning\" భావన ఎక్కువగా సంబంధించింది",
        options: ["MOOCs", "Printer", "Scanner", "Mouse"],
        correct: 0,
        explanation: "MOOCs ద్వారా విద్యార్థులు తమ సమయానికి అనుగుణంగా ఎక్కడి నుంచైనా అభ్యసించగలరు. అందుకే Anywhere, Anytime Learning భావనకు ఇవి అనుసంధానించబడ్డాయి."
    },
    {
        question: "\"నరుడు\" పదానికి పర్యాయపదం",
        options: ["మానవుడు", "వృక్షం", "గిరి", "సింహం"],
        correct: 0,
        explanation: "నరుడు అంటే మనిషి. మానవుడు అనే పదం అదే అర్థాన్ని సూచిస్తుంది కాబట్టి ఇది సరైన పర్యాయపదం."
    },
    {
        question: "\"వల్లభ\" పదానికి సరైన అర్థం",
        options: ["భార్య", "ప్రియుడు", "శత్రువు", "సేవకుడు"],
        correct: 1,
        explanation: "వల్లభ అనే పదానికి ప్రియమైన వ్యక్తి లేదా ప్రియుడు అనే అర్థం వస్తుంది. ఇది సాహిత్యంలో విరివిగా ఉపయోగించబడుతుంది."
    },
    {
        question: "\"భగీరథ ప్రయత్నం\" జాతీయానికి అర్థం",
        options: ["సులభమైన పని", "గొప్ప కృషి", "ప్రమాదకర పని", "నిరుపయోగ పని"],
        correct: 1,
        explanation: "భగీరథుడు గంగను భూమికి తీసుకురావడానికి చేసిన అపార కృషిని సూచిస్తూ భగీరథ ప్రయత్నం అనే జాతీయం గొప్ప శ్రమ అనే అర్థాన్ని ఇస్తుంది."
    },
    {
        question: "\"అదిగో పులి అంటే ఇదిగో తోక\" అనేది",
        options: ["జాతీయం", "సామెత", "పద్యం", "కథ"],
        correct: 1,
        explanation: "ఇది ఒక ప్రసిద్ధ తెలుగు సామెత. ఆధారాలు లేకుండా వెంటనే నమ్మే వ్యక్తుల గురించి ఈ సామెతను ఉపయోగిస్తారు."
    },
    {
        question: "\"దళము\" పదానికి పర్యాయపదం",
        options: ["సైన్యం", "పుస్తకం", "నది", "గడియారం"],
        correct: 0,
        explanation: "దళము అంటే సైన్యం లేదా బలగం. రెండూ ఒకే భావాన్ని సూచించే పదాలు కాబట్టి సైన్యం సరైన సమాధానం."
    },
    {
        question: "\"రాముడు + అతడు\" సంధి వల్ల ఏర్పడేది",
        options: ["రాముడతడు", "రాముడతడు", "రాముడతడూ", "సందర్భానుసారం"],
        correct: 3,
        explanation: "తెలుగు సంధి నియమాల ప్రకారం పదరూపం సందర్భం మరియు వ్యాకరణ ప్రయోగాన్ని బట్టి మారవచ్చు. అందువల్ల సందర్భానుసారం అనే సమాధానం సరైనది."
    },
    {
        question: "గుణసంధి చెందినది",
        options: ["దేవ + ఇంద్రుడు", "మహా + ఋషి", "లోక + ఈశ్వరుడు", "రాజ + ఉత్సవం"],
        correct: 2,
        explanation: "లోక + ఈశ్వరుడు కలిసినప్పుడు గుణసంధి నియమం ప్రకారం లోకేశ్వరుడు అనే రూపం ఏర్పడుతుంది. ఇది గుణసంధికి ఉదాహరణ."
    },
    {
        question: "\"కవి\" యొక్క వికృతి",
        options: ["కవి", "కావ్యం", "కవిత", "కవిగాడు"],
        correct: 2,
        explanation: "కవి అనే మూలపదం నుండి ఉద్భవించిన రూపం కవిత. ఇది వికృతి పదంగా పరిగణించబడుతుంది."
    },
    {
        question: "\"కాలధర్మం చెందడం\" జాతీయానికి అర్థం",
        options: ["జన్మించడం", "మరణించడం", "గెలవడం", "పారిపోవడం"],
        correct: 1,
        explanation: "కాలధర్మం చెందడం అనే జాతీయం మరణించడం అనే అర్థాన్ని సూచిస్తుంది. ఇది సాహిత్య మరియు సాధారణ భాషలో విరివిగా ఉపయోగించబడుతుంది."
    },
    {
        question: "\"సమగ్ర విద్య\"లో \"సమగ్ర\" పదానికి సమీపార్థకం",
        options: ["సంపూర్ణ", "చిన్న", "వేగవంతమైన", "అసంపూర్ణ"],
        correct: 0,
        explanation: "సమగ్ర అంటే సంపూర్ణమైన, అన్ని అంశాలను కలిగి ఉన్నది. అందువల్ల సంపూర్ణ అనే పదం సమీపార్థకంగా సరిపోతుంది."
    },
    {
        question: "ఈ పద్య రచయిత",
        options: ["పోతన", "వేమన", "సోమన", "భీమన"],
        correct: 1,
        explanation: "ఈ పద్యం వేమన శతకంలోని ప్రసిద్ధ పద్యం. ఆచారాల కంటే మనస్సు, ఆత్మ శుద్ధికి ఎక్కువ ప్రాధాన్యం ఉందని వేమన ఇందులో బోధించాడు."
    },
    {
        question: "పై పద్యంలో ప్రధాన భావం",
        options: ["విద్య ప్రాముఖ్యత", "భక్తి కంటే సంపద గొప్పది", "అంతరంగ శుద్ధి అవసరం", "పూజా విధానాలు"],
        correct: 2,
        explanation: "ఆత్మశుద్ధి, చిత్తశుద్ధి లేకుండా చేసే ఆచారాలు, పూజలు వ్యర్థమని పద్యం తెలియజేస్తుంది. అంతరంగ పవిత్రతే ప్రధాన సందేశం."
    },
    {
        question: "\"అక్షరం\" పాఠ్యాంశం యొక్క ప్రధాన ఇతివృత్తం",
        options: ["దేశభక్తి", "విద్య విశిష్టత", "వ్యవసాయం", "ప్రకృతి"],
        correct: 1,
        explanation: "అక్షరం పాఠ్యాంశం విద్య యొక్క ప్రాముఖ్యతను, జ్ఞానం ద్వారా వ్యక్తి జీవితంలో కలిగే మార్పులను వివరిస్తుంది."
    },
    {
        question: "\"దురితం\" పదానికి వ్యతిరేక పదం",
        options: ["పాపం", "దుఃఖం", "పుణ్యం", "కష్టం"],
        correct: 2,
        explanation: "దురితం అంటే పాపం లేదా చెడు. దానికి వ్యతిరేక పదం పుణ్యం. ఇది తెలుగు పదజాలంలో సాధారణ వ్యతిరేక పద జంట."
    },
    {
        question: "\"మానవుడు\" అనే అర్థాన్ని ఇచ్చే పదం",
        options: ["నరుడు", "వనము", "వల్లభుడు", "దళము"],
        correct: 0,
        explanation: "నరుడు అనే పదం మానవుడు అనే అర్థాన్ని సూచిస్తుంది. మిగతా పదాలు వేర్వేరు అర్థాలను కలిగి ఉంటాయి."
    },
    {
        question: "\"అదిగో పులి అంటే ఇదిగో తోక\" అనేది",
        options: ["జాతీయం", "సామెత", "నానుడి", "అలంకారం"],
        correct: 1,
        explanation: "ఇది ఒక సామెత. ఎవరైనా చెప్పిన విషయాన్ని వెంటనే నమ్మి నిర్ధారణ లేకుండా అంగీకరించే స్వభావాన్ని సూచిస్తుంది."
    },
    {
        question: "\"నరుడు\" పదానికి పర్యాయపదం",
        options: ["మానవుడు", "సింహం", "శత్రువు", "వృక్షం"],
        correct: 0,
        explanation: "నరుడు మరియు మానవుడు రెండూ ఒకే అర్థాన్ని కలిగి ఉంటాయి. అందువల్ల మానవుడు సరైన పర్యాయపదం."
    },
    {
        question: "\"భగీరథ ప్రయత్నం\" జాతీయానికి సరైన అర్థం",
        options: ["అసాధ్య ప్రయత్నం", "గొప్ప కృషి", "నిరుపయోగ పని", "సాధారణ పని"],
        correct: 1,
        explanation: "భగీరథుడు గంగను భూమికి తీసుకురావడానికి చేసిన కఠోర తపస్సును సూచిస్తూ గొప్ప కృషి అనే అర్థంలో ఈ జాతీయం వాడబడుతుంది."
    },
    {
        question: "\"కాలధర్మం చెందడం\" అంటే",
        options: ["జన్మించడం", "వృద్ధాప్యం రావడం", "మరణించడం", "కష్టపడటం"],
        correct: 2,
        explanation: "కాలధర్మం చెందడం అనే జాతీయం మరణించడం అనే అర్థాన్ని సూచిస్తుంది. ఇది సాహిత్యంలో విరివిగా ఉపయోగిస్తారు."
    },
    {
        question: "\"వల్లభ\" పదానికి పర్యాయపదం",
        options: ["ప్రియుడు", "సేవకుడు", "మిత్రుడు", "నాయకుడు"],
        correct: 0,
        explanation: "వల్లభ అంటే ఇష్టమైన వ్యక్తి లేదా ప్రియుడు. అందువల్ల ప్రియుడు సరైన పర్యాయపదం అవుతుంది."
    },
    {
        question: "\"కవి\" పదానికి వికృతి",
        options: ["కవిత", "కావ్యం", "కవి", "కవిగాడు"],
        correct: 0,
        explanation: "కవి అనే ప్రకృతి పదం నుండి కవిత అనే వికృతి పదం ఏర్పడింది. ప్రకృతి-వికృతి అంశంలో ఇది ముఖ్యమైన ఉదాహరణ."
    },
    {
        question: "\"రాజు + ఉత్సవం\" లో ఏర్పడిన సంధి",
        options: ["గుణసంధి", "వృద్ధి సంధి", "అత్వసంధి", "యణాదేశ సంధి"],
        correct: 0,
        explanation: "రాజు మరియు ఉత్సవం కలిసినప్పుడు గుణసంధి ఏర్పడుతుంది. స్వరాల కలయికలో ఈ సంధి లక్షణాలు కనిపిస్తాయి."
    },
    {
        question: "\"దేవ + ఇంద్రుడు\" లో ఏర్పడిన సంధి",
        options: ["యణాదేశ", "గుణసంధి", "వృద్ధి సంధి", "అత్వ"],
        correct: 1,
        explanation: "దేవ + ఇంద్రుడు కలయికలో గుణసంధి జరుగుతుంది. ఇది సంస్కృత సంధులలో ముఖ్యమైన సంధి రకం."
    },
    {
        question: "\"లోక + ఈశ్వరుడు\" లో ఏర్పడిన సంధి",
        options: ["వృద్ధి సంధి", "గుణసంధి", "యణాదేశ సంధి", "అత్వ"],
        correct: 0,
        explanation: "లోక మరియు ఈశ్వరుడు పదాల కలయికలో వృద్ధి సంధి ఏర్పడుతుంది. ఇది తెలుగు వ్యాకరణంలో తరచుగా అడిగే అంశం."
    },
    {
        question: "\"భాషాభాగాలు\" అనే అంశం దేనికి సంబంధించినది?",
        options: ["ఛందస్సు", "వ్యాకరణం", "అలంకారం", "సాహిత్యం"],
        correct: 1,
        explanation: "భాషాభాగాలు అనేవి నామవాచకం, సర్వనామం, క్రియ వంటి వ్యాకరణ సంబంధ అంశాలు. కాబట్టి ఇది వ్యాకరణానికి చెందినది."
    },
    {
        question: "\"దళము\" పదానికి సరైన పర్యాయపదం",
        options: ["సైన్యం", "చెట్టు", "గడియారం", "పుస్తకం"],
        correct: 0,
        explanation: "దళము అంటే సమూహం లేదా సైన్యం. ముఖ్యంగా సైనిక బృందాన్ని సూచించడానికి ఈ పదం ఉపయోగించబడుతుంది."
    },
    {
        question: "\"నీలిమ\" పదానికి సమీపార్థకం",
        options: ["నీలం", "ఆకుపచ్చ", "తెలుపు", "ఎరుపు"],
        correct: 0,
        explanation: "నీలిమ అంటే నీలిరంగు లేదా నీలి ఛాయ. అందువల్ల నీలం అనే పదం దీనికి సమీపార్థక పదం."
    },
    {
        question: "\"వృక్షం\" యొక్క ప్రకృతి రూపం",
        options: ["చెట్టు", "వృక్షం", "వనము", "మొక్క"],
        correct: 1,
        explanation: "ప్రకృతి-వికృతి సంబంధంలో మూలరూపాన్ని ప్రకృతి అంటారు. వృక్షం అనే పదమే ఇక్కడ ప్రకృతి రూపం."
    },
    {
        question: "\"రాముడు వచ్చెను\" వాక్యం",
        options: ["సంయుక్త వాక్యం", "ఆశ్చర్యార్థక వాక్యం", "సాధారణ వాక్యం", "ప్రశ్నార్థక వాక్యం"],
        correct: 2,
        explanation: "ఈ వాక్యంలో ఒకే కర్త, ఒకే క్రియ ఉన్నాయి. కాబట్టి ఇది సాధారణ వాక్యంగా పరిగణించబడుతుంది."
    },
    {
        question: "\"శార్దూలం\" అనేది",
        options: ["అలంకారం", "ఛందస్సు", "సమాసం", "సంధి"],
        correct: 1,
        explanation: "శార్దూలం తెలుగు ఛందస్సులలో ఒక వృత్తం. ఇది పద్యరచనలో ఉపయోగించే ప్రత్యేక ఛందస్సు."
    },
    {
        question: "The main idea of the passage is",
        options: ["Importance of luck", "Value of hard work", "Teacher's role", "School life"],
        correct: 1,
        explanation: "The passage highlights Ravi's continuous effort and determination. It emphasizes that hard work is the key to success."
    },
    {
        question: "Ravi succeeded because of his",
        options: ["Wealth", "Friends", "Continuous effort", "Family status"],
        correct: 2,
        explanation: "The passage clearly states that Ravi believed in continuous effort and never gave up despite difficulties."
    },
    {
        question: "The word \"determination\" means",
        options: ["Weakness", "Firmness of purpose", "Anger", "Fear"],
        correct: 1,
        explanation: "Determination refers to a strong decision and firmness of purpose in achieving a goal despite obstacles."
    },
    {
        question: "Which title suits the passage best?",
        options: ["A Lazy Student", "Importance of Money", "Success through Effort", "School Building"],
        correct: 2,
        explanation: "The passage focuses on Ravi's success achieved through hard work and persistence, making this title most suitable."
    },
    {
        question: "The opposite of \"success\" is",
        options: ["Achievement", "Progress", "Failure", "Victory"],
        correct: 2,
        explanation: "Failure is the antonym of success. Success means achieving a goal, while failure means not achieving it."
    },
    {
        question: "Choose the synonym of \"Brave\"",
        options: ["Cowardly", "Fearful", "Courageous", "Weak"],
        correct: 2,
        explanation: "Brave and courageous have similar meanings. Both describe a person who shows courage in difficult situations."
    },
    {
        question: "Choose the antonym of \"Ancient\"",
        options: ["Old", "Modern", "Traditional", "Historic"],
        correct: 1,
        explanation: "Ancient means very old. Modern refers to something recent or contemporary, making it the opposite."
    },
    {
        question: "\"Once in a blue moon\" means",
        options: ["Frequently", "Rarely", "Daily", "Suddenly"],
        correct: 1,
        explanation: "This idiom means something that happens very rarely or infrequently, not on a regular basis."
    },
    {
        question: "\"A blessing in disguise\" means",
        options: ["A hidden problem", "Something good appearing bad at first", "A punishment", "A surprise gift"],
        correct: 1,
        explanation: "A blessing in disguise is an event that seems bad initially but later turns out to be beneficial."
    },
    {
        question: "Meaning of phrasal verb \"look after\"",
        options: ["Search", "Care for", "Observe", "Ignore"],
        correct: 1,
        explanation: "Look after means to take care of someone or something and ensure their well-being and safety."
    },
    {
        question: "Meaning of phrasal verb \"call off\"",
        options: ["Continue", "Postpone or cancel", "Call loudly", "Meet"],
        correct: 1,
        explanation: "Call off means to cancel or postpone an event, meeting, match, or activity that was previously planned."
    },
    {
        question: "He is ___ honest man.",
        options: ["a", "an", "the", "no article"],
        correct: 1,
        explanation: "The word 'honest' begins with a vowel sound because 'h' is silent. Therefore, the article 'an' is used."
    },
    {
        question: "Sun rises in ___ east.",
        options: ["a", "an", "the", "no article"],
        correct: 2,
        explanation: "Names of directions such as east, west, north, and south generally take the definite article 'the'."
    },
    {
        question: "She has been living here ___ 2018.",
        options: ["for", "since", "from", "at"],
        correct: 1,
        explanation: "Since is used with a specific point of time. Here, 2018 is a definite starting point."
    },
    {
        question: "The train arrived ___ time.",
        options: ["in", "at", "on", "by"],
        correct: 2,
        explanation: "The expression 'on time' means arriving at the scheduled or expected time without delay."
    },
    {
        question: "If I had studied harder, I ___ the exam.",
        options: ["pass", "will pass", "would have passed", "passed"],
        correct: 2,
        explanation: "This is a Type-3 conditional sentence referring to a past unreal situation. 'Would have passed' is correct."
    },
    {
        question: "She ___ her homework before dinner yesterday.",
        options: ["completed", "completes", "completing", "complete"],
        correct: 0,
        explanation: "The action happened in the past and is indicated by 'yesterday', so the simple past form 'completed' is correct."
    },
    {
        question: "Each of the boys ___ a notebook.",
        options: ["have", "are having", "has", "were having"],
        correct: 2,
        explanation: "Each is treated as a singular subject. Therefore, the singular verb 'has' must be used."
    },
    {
        question: "Neither Ravi nor his friends ___ present.",
        options: ["was", "is", "were", "be"],
        correct: 2,
        explanation: "With neither...nor, the verb agrees with the subject nearest to it. 'Friends' is plural, so 'were' is correct."
    },
    {
        question: "One of the students ___ selected.",
        options: ["were", "have", "was", "are"],
        correct: 2,
        explanation: "The subject is 'one', which is singular. Hence the singular verb 'was' is required."
    },
    {
        question: "Identify the error. 'He do not like coffee.'",
        options: ["He", "do", "not", "coffee"],
        correct: 1,
        explanation: "With the singular subject 'He', the auxiliary verb should be 'does', not 'do'."
    },
    {
        question: "Identify the error. 'She is senior than me.'",
        options: ["She", "is", "senior", "than"],
        correct: 3,
        explanation: "The adjective 'senior' is followed by 'to', not 'than'. The correct sentence is 'She is senior to me.'"
    },
    {
        question: "Identify the error. 'The news are interesting.'",
        options: ["The", "news", "are", "interesting"],
        correct: 2,
        explanation: "News is a singular noun and takes a singular verb. The correct form is 'The news is interesting.'"
    },
    {
        question: "Change into passive voice: 'The teacher explained the lesson.'",
        options: [
            "The lesson explained by the teacher.",
            "The lesson was explained by the teacher.",
            "The lesson is explained by the teacher.",
            "The lesson had explained."
        ],
        correct: 1,
        explanation: "The active sentence is in simple past tense. Therefore, the passive form uses 'was explained'."
    },
    {
        question: "Change into indirect speech: Ravi said, 'I am happy.'",
        options: [
            "Ravi said that he was happy.",
            "Ravi said he is happy.",
            "Ravi says he was happy.",
            "Ravi told happy."
        ],
        correct: 0,
        explanation: "In indirect speech, the pronoun and tense change appropriately. 'I am' becomes 'he was'."
    },
    {
        question: "Arrange in dictionary order. 1. Banana 2. Ball 3. Basket 4. Bank",
        options: ["2,4,1,3", "1,2,3,4", "4,2,1,3", "2,1,4,3"],
        correct: 0,
        explanation: "Alphabetically: Ball, Bank, Banana, Basket. Therefore, the correct sequence is 2, 4, 1, 3."
    },
    {
        question: "Which is a Notice?",
        options: [
            "Personal daily record",
            "Formal public announcement",
            "Conversation",
            "Story"
        ],
        correct: 1,
        explanation: "A notice is a formal written announcement meant to inform a group of people about an event or instruction."
    },
    {
        question: "Which discourse is written day-wise?",
        options: ["Report", "Diary", "Speech", "Notice"],
        correct: 1,
        explanation: "A diary is maintained daily and records events, experiences, or thoughts in chronological order."
    },
    {
        question: "Which sentence is correct?",
        options: [
            "He don't know.",
            "He doesn't knows.",
            "He doesn't know.",
            "He not know."
        ],
        correct: 2,
        explanation: "After 'doesn't', the base form of the verb is used. Hence 'He doesn't know' is correct."
    },
    {
        question: "The correctly punctuated sentence is",
        options: [
            "Ravi said \"I am ready\".",
            "Ravi said, \"I am ready.\"",
            "Ravi said \"I am ready.\"",
            "Ravi said; I am ready."
        ],
        correct: 1,
        explanation: "A comma is used before the quotation, and the full stop is placed inside the quotation marks."
    },
    {
        question: "Hearing Impairment మరియు Intellectual Disability కలిగి ఉన్న వ్యక్తి ఏ వర్గానికి చెందుతాడు?",
        options: [
            "Visual Impairment",
            "Multiple Disabilities",
            "Learning Disability",
            "Autism"
        ],
        correct: 1,
        explanation: "ఒక వ్యక్తికి రెండు లేదా అంతకంటే ఎక్కువ వైకల్యాలు కలిసి ఉన్నప్పుడు దానిని Multiple Disabilities అంటారు. Hearing Impairment మరియు Intellectual Disability కలయిక దీనికి ఉదాహరణ."
    },
    {
        question: "Multiple Disabilities యొక్క ప్రధాన లక్షణం",
        options: [
            "ఒకే వైకల్యం ఉండటం",
            "రెండు లేదా అంతకంటే ఎక్కువ వైకల్యాలు కలిగి ఉండటం",
            "కేవలం శారీరక వైకల్యం",
            "కేవలం మేధో వైకల్యం"
        ],
        correct: 1,
        explanation: "Multiple Disabilities అంటే ఒకే వ్యక్తిలో రెండు లేదా అంతకంటే ఎక్కువ వైకల్యాలు ఉండటం. ఈ పరిస్థితి ప్రత్యేక బోధన మరియు మద్దతు అవసరాన్ని కలిగిస్తుంది."
    },
    {
        question: "Multiple Disabilities ఉన్న విద్యార్థుల కోసం బోధనలో ముఖ్యమైనది",
        options: [
            "ఒకే పద్ధతి",
            "వ్యక్తిగతీకరించిన ప్రణాళిక",
            "పరీక్షల పెంపు",
            "కంఠస్థం"
        ],
        correct: 1,
        explanation: "ప్రతి విద్యార్థి అవసరాలు భిన్నంగా ఉంటాయి. అందువల్ల వ్యక్తిగతీకరించిన విద్యా ప్రణాళిక ద్వారా సమర్థవంతమైన బోధన అందించాలి."
    },
    {
        question: "Assistive Technology యొక్క ప్రధాన ఉద్దేశ్యం",
        options: [
            "పరీక్షలు నిర్వహించడం",
            "కార్యనిర్వహణ సామర్థ్యాన్ని పెంచడం",
            "మార్కులు పెంచడం",
            "హాజరు నమోదు"
        ],
        correct: 1,
        explanation: "Assistive Technology వ్యక్తి స్వతంత్రంగా పనులు చేయడానికి, నేర్చుకోవడానికి మరియు రోజువారీ జీవితంలో పాల్గొనడానికి సహాయపడే పరికరాలు మరియు సాంకేతికతలను సూచిస్తుంది."
    },
    {
        question: "క్రింది వాటిలో Assistive Technology ఉదాహరణ",
        options: [
            "Wheelchair",
            "Blackboard",
            "Chalk",
            "Notebook"
        ],
        correct: 0,
        explanation: "Wheelchair ఒక Assistive Technology పరికరం. ఇది కదలికలో ఇబ్బందులు ఉన్న వ్యక్తులకు స్వతంత్రంగా ప్రయాణించడంలో సహాయపడుతుంది."
    },
    {
        question: "Communication Board ప్రధానంగా ఉపయోగపడేది",
        options: [
            "కదలికల కోసం",
            "సంభాషణ కోసం",
            "చదవడం కోసం",
            "వినికిడి కోసం"
        ],
        correct: 1,
        explanation: "Communication Board మాట్లాడలేని లేదా పరిమిత భాషా నైపుణ్యాలు ఉన్న వ్యక్తులకు తమ ఆలోచనలను మరియు అవసరాలను వ్యక్తపరచడానికి ఉపయోగపడుతుంది."
    },
    {
        question: "Multiple Disabilities విద్యార్థుల మూల్యాంకనంలో మొదటి దశ",
        options: [
            "శిక్షణ",
            "గుర్తింపు",
            "పరీక్ష",
            "ప్రమోషన్"
        ],
        correct: 1,
        explanation: "సరైన సేవలు అందించడానికి ముందుగా విద్యార్థి వైకల్యాలను గుర్తించడం అవసరం. అందుకే గుర్తింపు మూల్యాంకనంలో మొదటి దశ."
    },
    {
        question: "విద్యార్థి అవసరాలకు అనుగుణంగా పరికరాల ఎంపికను ఏమంటారు?",
        options: [
            "Need Assessment",
            "Remediation",
            "Evaluation",
            "Reinforcement"
        ],
        correct: 0,
        explanation: "Need Assessment ద్వారా విద్యార్థి సామర్థ్యాలు, పరిమితులు మరియు అవసరాలను అంచనా వేసి సరైన పరికరాలను ఎంపిక చేస్తారు."
    },
    {
        question: "AAC యొక్క పూర్తి రూపం",
        options: [
            "Alternative and Augmentative Communication",
            "Automatic Audio Communication",
            "Academic Assessment Centre",
            "Assisted Ability Classification"
        ],
        correct: 0,
        explanation: "AAC అంటే Alternative and Augmentative Communication. ఇది మాట్లాడే సామర్థ్యం తక్కువగా ఉన్న వ్యక్తులకు కమ్యూనికేషన్‌కు ప్రత్యామ్నాయ మార్గాలను అందిస్తుంది."
    },
    {
        question: "Touch Screen ఆధారిత కమ్యూనికేషన్ పరికరాలు ఏ వర్గంలోకి వస్తాయి?",
        options: [
            "Assistive Technology",
            "Curriculum",
            "Assessment Tool",
            "Policy"
        ],
        correct: 0,
        explanation: "Touch Screen ఆధారిత కమ్యూనికేషన్ పరికరాలు వ్యక్తుల సంభాషణ సామర్థ్యాన్ని మెరుగుపరచడానికి ఉపయోగించే Assistive Technology పరికరాలు."
    },
    {
        question: "Multiple Disabilities విద్యార్థులకు ముఖ్యమైన కుటుంబ మద్దతు అంశం",
        options: [
            "నిర్లక్ష్యం",
            "సాధికారత",
            "వేరుచేయడం",
            "శిక్ష"
        ],
        correct: 1,
        explanation: "కుటుంబ సాధికారత ద్వారా విద్యార్థికి భావోద్వేగ, సామాజిక మరియు విద్యా మద్దతు లభిస్తుంది. ఇది అభివృద్ధికి కీలకమైన అంశం."
    },
    {
        question: "క్రింది వాటిలో Low-Tech Assistive Device",
        options: [
            "Pencil Grip",
            "Tablet",
            "Speech Generating Device",
            "Laptop"
        ],
        correct: 0,
        explanation: "Pencil Grip ఒక సరళమైన మరియు తక్కువ ఖర్చు గల Low-Tech Assistive Device. ఇది రాయడాన్ని సులభతరం చేస్తుంది."
    },
    {
        question: "High-Tech Assistive Device",
        options: [
            "Slate",
            "Pencil Grip",
            "Speech Generating Device",
            "Flash Card"
        ],
        correct: 2,
        explanation: "Speech Generating Device ఆధునిక సాంకేతికతతో పనిచేసే High-Tech Assistive Device. ఇది మాట్లాడలేని వ్యక్తులకు సంభాషణలో సహాయపడుతుంది."
    },
    {
        question: "Functional Assessment ప్రధానంగా దేనిని అంచనా వేస్తుంది?",
        options: [
            "రోజువారీ నైపుణ్యాలు",
            "ఎత్తు",
            "బరువు",
            "వయస్సు"
        ],
        correct: 0,
        explanation: "Functional Assessment ద్వారా వ్యక్తి రోజువారీ జీవితంలో అవసరమైన పనులను ఎంత సమర్థవంతంగా చేయగలడో అంచనా వేస్తారు."
    },
    {
        question: "Multiple Disabilities విద్యార్థుల కోసం ఉత్తమ బోధన విధానం",
        options: [
            "సమగ్ర విద్య",
            "ఒంటరి విద్య",
            "దూరవిద్య",
            "పరీక్షా కేంద్రిత విద్య"
        ],
        correct: 0,
        explanation: "సమగ్ర విద్య ద్వారా వైకల్యం ఉన్న విద్యార్థులు ఇతర విద్యార్థులతో కలిసి నేర్చుకునే అవకాశం పొందుతారు మరియు సామాజిక భాగస్వామ్యం పెరుగుతుంది."
    },
    {
        question: "Assistive Technology ఎంపికలో పరిగణించాల్సిన అంశం",
        options: [
            "విద్యార్థి అవసరం",
            "ఉపాధ్యాయుడి ఇష్టం",
            "ధర మాత్రమే",
            "రంగు"
        ],
        correct: 0,
        explanation: "Assistive Technology ఎంపికలో విద్యార్థి సామర్థ్యాలు, అవసరాలు మరియు నేర్చుకునే పరిస్థితులను పరిగణనలోకి తీసుకోవాలి. సరైన పరికరం విద్యార్థి స్వతంత్రతను పెంచుతుంది."
    },
    {
        question: "Communication Device ఉపయోగం",
        options: [
            "కదలిక",
            "భాషా వ్యక్తీకరణ",
            "వినికిడి పరీక్ష",
            "వైద్యం"
        ],
        correct: 1,
        explanation: "Communication Devices వ్యక్తులు తమ ఆలోచనలు, భావాలు మరియు అవసరాలను వ్యక్తపరచడానికి ఉపయోగపడతాయి. ముఖ్యంగా మాట్లాడడంలో ఇబ్బంది ఉన్నవారికి ఇవి ఉపయోగకరమైనవి."
    },
    {
        question: "Multiple Disabilities ఉన్న విద్యార్థుల IEPలో ప్రధాన భాగం",
        options: [
            "వ్యక్తిగత లక్ష్యాలు",
            "సెలవులు",
            "ఫీజు వివరాలు",
            "హాజరు పట్టిక"
        ],
        correct: 0,
        explanation: "IEPలో విద్యార్థి అవసరాలకు అనుగుణంగా వ్యక్తిగత విద్యా లక్ష్యాలు నిర్దేశించబడతాయి. ఇవే బోధన మరియు మూల్యాంకనానికి ఆధారంగా ఉంటాయి."
    },
    {
        question: "Inclusive Education యొక్క లక్ష్యం",
        options: [
            "వేరు చేయడం",
            "అందరికీ విద్య",
            "ప్రత్యేక పాఠశాలలు మాత్రమే",
            "పరీక్షల నిర్వహణ"
        ],
        correct: 1,
        explanation: "Inclusive Education యొక్క ప్రధాన లక్ష్యం ప్రతి విద్యార్థికి సమాన విద్యా అవకాశాలను కల్పించడం. వైకల్యం ఉన్నవారు మరియు లేనివారు కలిసి నేర్చుకుంటారు."
    },
    {
        question: "Assistive Technology వలన పెరుగేది",
        options: [
            "ఆధారపడటం",
            "స్వతంత్రత",
            "ఒంటరితనం",
            "భయం"
        ],
        correct: 1,
        explanation: "Assistive Technology వ్యక్తులు తమ పనులను స్వయంగా చేయడానికి సహాయపడుతుంది. దీనివల్ల స్వతంత్రత, ఆత్మవిశ్వాసం మరియు భాగస్వామ్యం పెరుగుతాయి."
    },
    {
        question: "IQ 50–69 మధ్య ఉన్నవారు",
        options: [
            "Mild ID",
            "Moderate ID",
            "Severe ID",
            "Profound ID"
        ],
        correct: 0,
        explanation: "IQ 50 నుండి 69 మధ్య ఉన్న వ్యక్తులు సాధారణంగా Mild Intellectual Disability వర్గంలోకి వస్తారు. వీరు సరైన మద్దతుతో అనేక నైపుణ్యాలను అభివృద్ధి చేసుకోగలరు."
    },
    {
        question: "IQ 35–49 మధ్య ఉన్నవారు",
        options: [
            "Mild",
            "Moderate",
            "Severe",
            "Profound"
        ],
        correct: 1,
        explanation: "IQ 35 నుండి 49 మధ్య ఉన్నవారు Moderate Intellectual Disability వర్గానికి చెందుతారు. వీరికి రోజువారీ కార్యకలాపాలలో కొంత మద్దతు అవసరం."
    },
    {
        question: "IQ 20–34 మధ్య ఉన్నవారు",
        options: [
            "Mild",
            "Moderate",
            "Severe",
            "Profound"
        ],
        correct: 2,
        explanation: "IQ 20 నుండి 34 మధ్య ఉన్నవారు Severe Intellectual Disability వర్గంలోకి వస్తారు. వీరికి నిరంతర శిక్షణ మరియు మద్దతు అవసరం."
    },
    {
        question: "IQ 20 కంటే తక్కువ ఉన్నవారు",
        options: [
            "Mild",
            "Moderate",
            "Severe",
            "Profound"
        ],
        correct: 3,
        explanation: "IQ 20 కంటే తక్కువగా ఉన్న వ్యక్తులు Profound Intellectual Disability వర్గానికి చెందుతారు. వీరికి అధిక స్థాయి సహాయం మరియు పర్యవేక్షణ అవసరం."
    },
    {
        question: "Intellectual Disability యొక్క ముఖ్య లక్షణం",
        options: [
            "అనుకూలన ప్రవర్తనలో లోపం",
            "అధిక మేధస్సు",
            "శ్రవణ లోపం",
            "దృష్టి లోపం"
        ],
        correct: 0,
        explanation: "Intellectual Disabilityలో మేధో సామర్థ్యం తగ్గడంతో పాటు అనుకూలన ప్రవర్తనలో కూడా లోపాలు కనిపిస్తాయి. ఇది ముఖ్యమైన గుర్తింపు ప్రమాణం."
    },
    {
        question: "IEP యొక్క పూర్తి రూపం",
        options: [
            "Individual Education Programme",
            "Individualized Education Plan",
            "Inclusive Education Programme",
            "Individual Evaluation Process"
        ],
        correct: 1,
        explanation: "IEP అంటే Individualized Education Plan. ఇది విద్యార్థి ప్రత్యేక అవసరాలకు అనుగుణంగా రూపొందించిన వ్యక్తిగత విద్యా ప్రణాళిక."
    },
    {
        question: "IEPలో తప్పనిసరిగా ఉండాల్సిన అంశం",
        options: [
            "Index",
            "Goals",
            "Foreword",
            "Appendix"
        ],
        correct: 1,
        explanation: "IEPలో స్పష్టమైన మరియు కొలవగలిగే లక్ష్యాలు ఉండాలి. ఇవి విద్యార్థి పురోగతిని అంచనా వేయడానికి ఉపయోగపడతాయి."
    },
    {
        question: "IEP ప్రధానంగా రూపొందించేది",
        options: [
            "విద్యార్థి అవసరాల ఆధారంగా",
            "ఉపాధ్యాయుని సౌకర్యం కోసం",
            "పాఠశాల నియమాల కోసం",
            "పరీక్షల కోసం"
        ],
        correct: 0,
        explanation: "IEP విద్యార్థి బలాలు, బలహీనతలు మరియు అవసరాలను పరిగణనలోకి తీసుకుని రూపొందించబడుతుంది. ఇది వ్యక్తిగతీకరించిన విద్యను అందిస్తుంది."
    },
    {
        question: "AAMD అనేది సంబంధించింది",
        options: [
            "Intellectual Disability",
            "Autism",
            "Hearing Impairment",
            "Visual Impairment"
        ],
        correct: 0,
        explanation: "AAMD (American Association on Mental Deficiency) ప్రధానంగా Intellectual Disability రంగానికి సంబంధించిన సంస్థగా ప్రసిద్ధి చెందింది."
    },
    {
        question: "Intellectual Disability గుర్తింపులో ముఖ్యమైనది",
        options: [
            "IQ మరియు అనుకూలన ప్రవర్తన",
            "వయస్సు మాత్రమే",
            "ఎత్తు మాత్రమే",
            "బరువు మాత్రమే"
        ],
        correct: 0,
        explanation: "Intellectual Disability నిర్ధారణలో IQ స్కోరు మరియు అనుకూలన ప్రవర్తన రెండింటినీ పరిగణనలోకి తీసుకుంటారు. ఇవి ప్రధాన ప్రమాణాలు."
    }, {
        question: "క్రింది వారిలో IQ పరీక్షలతో సంబంధం ఉన్నవారు",
        options: [
            "బినే",
            "వాట్సన్",
            "కోహ్లర్",
            "పావ్‌లావ్"
        ],
        correct: 0,
        explanation: "ఆల్ఫ్రెడ్ బినే మొదటి మేధస్సు పరీక్షలను అభివృద్ధి చేశారు. ఆయన రూపొందించిన Binet-Simon Scale ఆధునిక IQ పరీక్షలకు పునాది అయింది."
    },
    {
        question: "Mild ID విద్యార్థులకు అత్యంత అనుకూలమైనది",
        options: [
            "సమగ్ర విద్య",
            "బోధన లేకపోవడం",
            "వేరుచేయడం",
            "శిక్ష"
        ],
        correct: 0,
        explanation: "Mild Intellectual Disability ఉన్న విద్యార్థులు సరైన మద్దతుతో సాధారణ తరగతుల్లో నేర్చుకోగలరు. అందువల్ల సమగ్ర విద్య ఉత్తమ ఎంపిక."
    },
    {
        question: "Functional Academics అంటే",
        options: [
            "జీవితానికి ఉపయోగపడే విద్య",
            "కేవలం పరీక్షా విద్య",
            "కళలు మాత్రమే",
            "క్రీడలు మాత్రమే"
        ],
        correct: 0,
        explanation: "Functional Academics అనేది రోజువారీ జీవితంలో ఉపయోగపడే చదవడం, లెక్కించడం, డబ్బు నిర్వహణ వంటి నైపుణ్యాలపై దృష్టి సారిస్తుంది."
    },
    {
        question: "Intellectual Disability ఉన్న విద్యార్థులకు ముఖ్యమైనది",
        options: [
            "నైపుణ్యాభివృద్ధి",
            "కంఠస్థం",
            "శిక్ష",
            "పోటీ"
        ],
        correct: 0,
        explanation: "ఈ విద్యార్థులకు స్వీయ సంరక్షణ, సామాజిక మరియు వృత్తి నైపుణ్యాల అభివృద్ధి చాలా ముఖ్యం. ఇది స్వతంత్ర జీవనానికి సహాయపడుతుంది."
    },
    {
        question: "Transition Planning ప్రారంభమయ్యేది",
        options: [
            "బాల్యం నుండి యౌవనానికి మారే దశలో",
            "జననం సమయంలో",
            "పరీక్షల తర్వాత",
            "ఉద్యోగం తర్వాత"
        ],
        correct: 0,
        explanation: "Transition Planning విద్యార్థిని పాఠశాల నుండి వయోజన జీవితానికి సిద్ధం చేయడానికి యౌవన దశలో ప్రారంభమవుతుంది."
    },
    {
        question: "అంధుల కోసం ఉపయోగించే లిపి",
        options: [
            "Morse",
            "Braille",
            "Sign Language",
            "Roman"
        ],
        correct: 1,
        explanation: "Braille అనేది అంధులు స్పర్శ ద్వారా చదవడానికి మరియు రాయడానికి ఉపయోగించే ప్రత్యేక లిపి వ్యవస్థ."
    },
    {
        question: "Braille ను అభివృద్ధి చేసినవారు",
        options: [
            "Louis Braille",
            "Helen Keller",
            "Samuel Gridley Howe",
            "Edison"
        ],
        correct: 0,
        explanation: "Louis Braille అంధుల కోసం Braille లిపిని అభివృద్ధి చేశారు. ఇది ప్రపంచవ్యాప్తంగా విస్తృతంగా ఉపయోగించబడుతోంది."
    },
    {
        question: "JAWS అనేది",
        options: [
            "Screen Reader Software",
            "Hearing Aid",
            "Braille Slate",
            "Magnifier"
        ],
        correct: 0,
        explanation: "JAWS ఒక Screen Reader Software. ఇది కంప్యూటర్ తెరపై ఉన్న సమాచారాన్ని శబ్ద రూపంలో వినిపిస్తుంది."
    },
    {
        question: "JAWS ప్రధానంగా ఉపయోగపడేది",
        options: [
            "దృష్టిలోపం ఉన్నవారికి",
            "వినికిడి లోపం ఉన్నవారికి",
            "ASD విద్యార్థులకు",
            "LD విద్యార్థులకు"
        ],
        correct: 0,
        explanation: "JAWS సాఫ్ట్‌వేర్ దృష్టిలోపం ఉన్న వ్యక్తులకు కంప్యూటర్ ఉపయోగించడాన్ని సులభతరం చేస్తుంది మరియు సమాచార ప్రాప్యతను పెంచుతుంది."
    },
    {
        question: "Snellen Chart ఉపయోగం",
        options: [
            "IQ పరీక్ష",
            "వినికిడి పరీక్ష",
            "దృష్టి తీక్షణత పరీక్ష",
            "భాషా పరీక్ష"
        ],
        correct: 2,
        explanation: "Snellen Chart కంటి దృష్టి తీక్షణతను కొలవడానికి ఉపయోగించే సాధారణ మరియు ప్రామాణిక పరీక్షా పరికరం."
    },
    {
        question: "6/6 దృష్టి సూచించేది",
        options: [
            "సాధారణ దృష్టి",
            "అంధత్వం",
            "తక్కువ దృష్టి",
            "రంగు అంధత్వం"
        ],
        correct: 0,
        explanation: "6/6 దృష్టి అంటే సాధారణ దృష్టి. వ్యక్తి ఆరు మీటర్ల దూరం నుండి సాధారణంగా చూడగలడని సూచిస్తుంది."
    },
    {
        question: "Braille సెల్‌లో మొత్తం చుక్కల సంఖ్య",
        options: [
            "4",
            "5",
            "6",
            "8"
        ],
        correct: 2,
        explanation: "ప్రామాణిక Braille సెల్‌లో 6 చుక్కలు ఉంటాయి. వీటి వివిధ కలయికలతో అక్షరాలు మరియు సంకేతాలు రూపొందుతాయి."
    },
    {
        question: "White Cane ప్రధానంగా ఉపయోగపడేది",
        options: [
            "కదలిక మరియు మార్గదర్శకత్వం",
            "వినికిడి",
            "రాయడం",
            "మాట్లాడడం"
        ],
        correct: 0,
        explanation: "White Cane దృష్టిలోపం ఉన్న వ్యక్తులకు స్వతంత్రంగా నడవడానికి, అడ్డంకులను గుర్తించడానికి మరియు మార్గదర్శకత్వానికి ఉపయోగపడుతుంది."
    },
    {
        question: "Low Vision విద్యార్థులకు ఉపయోగపడే పరికరం",
        options: [
            "Magnifier",
            "Hearing Aid",
            "Wheelchair",
            "Communication Board"
        ],
        correct: 0,
        explanation: "Magnifier అక్షరాలు మరియు వస్తువులను పెద్దగా చూపిస్తుంది. ఇది Low Vision ఉన్న విద్యార్థులకు చదవడంలో సహాయపడుతుంది."
    },
    {
        question: "Visual Acuity కొలవడానికి ఉపయోగించే సాధనం",
        options: [
            "Snellen Chart",
            "Audiometer",
            "EEG",
            "ECG"
        ],
        correct: 0,
        explanation: "Visual Acuity అనగా దృష్టి తీక్షణత. దీనిని కొలవడానికి Snellen Chart అత్యంత సాధారణంగా ఉపయోగించే సాధనం."
    },
    {
        question: "Braille Slate ఉపయోగం",
        options: [
            "Braille రాయడానికి",
            "వినికిడి పరీక్షకు",
            "నడకకు",
            "కమ్యూనికేషన్‌కు"
        ],
        correct: 0,
        explanation: "Braille Slate మరియు Stylus సహాయంతో అంధులు Braille లిపిలో రాయగలరు. ఇది ప్రాథమిక రచనా పరికరం."
    },
    {
        question: "Screen Reader ప్రధానంగా",
        options: [
            "తెరపై ఉన్న సమాచారాన్ని శబ్ద రూపంలో చదవడం",
            "చిత్రాలు గీయడం",
            "వీడియోలు తీయడం",
            "పరీక్షలు నిర్వహించడం"
        ],
        correct: 0,
        explanation: "Screen Reader కంప్యూటర్ లేదా మొబైల్ స్క్రీన్‌పై ఉన్న సమాచారాన్ని శబ్దంగా చదివి దృష్టిలోపం ఉన్నవారికి అందిస్తుంది."
    },
    {
        question: "Orientation and Mobility Training ఉద్దేశ్యం",
        options: [
            "స్వతంత్ర ప్రయాణం",
            "IQ పెంపు",
            "చదవడం",
            "రాయడం"
        ],
        correct: 0,
        explanation: "Orientation and Mobility Training ద్వారా దృష్టిలోపం ఉన్న వ్యక్తులు సురక్షితంగా మరియు స్వతంత్రంగా ప్రయాణించడం నేర్చుకుంటారు."
    },
    {
        question: "Visual Impairment విద్యార్థులకు తరగతిలో ముఖ్యమైన అనుసరణ",
        options: [
            "స్పష్టమైన మౌఖిక సూచనలు",
            "చిన్న అక్షరాలు",
            "వెనుక బెంచ్",
            "తక్కువ వెలుతురు"
        ],
        correct: 0,
        explanation: "స్పష్టమైన మౌఖిక సూచనలు దృష్టిలోపం ఉన్న విద్యార్థులకు పాఠ్య విషయాన్ని అర్థం చేసుకోవడంలో మరియు కార్యకలాపాలలో పాల్గొనడంలో సహాయపడతాయి."
    },
    {
        question: "Assistive Technology in Visual Impairment కు ఉదాహరణ",
        options: [
            "JAWS",
            "Audiometer",
            "Speech Trainer",
            "ABR"
        ],
        correct: 0,
        explanation: "JAWS ఒక ప్రముఖ Assistive Technology. ఇది దృష్టిలోపం ఉన్న వ్యక్తులకు డిజిటల్ సమాచారాన్ని శబ్ద రూపంలో అందిస్తుంది."
    }
];