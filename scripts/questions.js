const SUBJECTS = [
    "Child Development",
    "English",
    "Telugu",
    "Special Education"
];

const QUESTIONS = [
    {
        question: "మాస్లో అవసరాల క్రమానుగత సిద్ధాంతం ప్రకారం అత్యున్నత స్థాయి అవసరం ఏది?",
        options: [
            "భద్రత అవసరాలు",
            "సామాజిక అవసరాలు",
            "ఆత్మసాక్షాత్కారం",
            "గౌరవ అవసరాలు"
        ],
        correct: 2,
        explanation: "మాస్లో సిద్ధాంతంలో అత్యున్నత స్థాయి అవసరం ఆత్మసాక్షాత్కారం. వ్యక్తి తన పూర్తి సామర్థ్యాన్ని సాధించడానికి చేసే ప్రయత్నాన్ని ఇది సూచిస్తుంది."
    },
    {
        question: "జ్ఞాన వికాస సిద్ధాంతాన్ని ప్రతిపాదించిన మనోవిజ్ఞాన శాస్త్రవేత్త ఎవరు?",
        options: [
            "వైగాట్స్కీ",
            "పియాజే",
            "స్కిన్నర్",
            "థార్న్‌డైక్"
        ],
        correct: 1,
        explanation: "జీన్ పియాజే జ్ఞాన వికాస సిద్ధాంతాన్ని ప్రతిపాదించాడు. పిల్లల ఆలోచనా విధానం దశలవారీగా అభివృద్ధి చెందుతుందని వివరించాడు."
    },
    {
        question: "‘సమీప వికాస ప్రాంతం’ (Zone of Proximal Development) భావనను ప్రతిపాదించినవారు ఎవరు?",
        options: [
            "పియాజే",
            "గార్డ్నర్",
            "వైగాట్స్కీ",
            "కోల్బర్గ్"
        ],
        correct: 2,
        explanation: "సమీప వికాస ప్రాంతం భావనను లెవ్ వైగాట్స్కీ ప్రతిపాదించాడు. సహకార అభ్యాసంలో దీనికి ముఖ్యమైన స్థానం ఉంది."
    },
    {
        question: "క్రింది వాటిలో అభ్యాసాన్ని ‘ప్రయత్నం మరియు దోషం’ (Trial and Error) ద్వారా వివరించినవారు ఎవరు?",
        options: [
            "పావ్‌లవ్",
            "స్కిన్నర్",
            "థార్న్‌డైక్",
            "కోహ్లర్"
        ],
        correct: 2,
        explanation: "థార్న్‌డైక్ ప్రయత్నం మరియు దోషం సిద్ధాంతాన్ని ప్రతిపాదించాడు. సరైన ప్రతిస్పందనలు పునరావృతమవుతాయని తెలిపాడు."
    },
    {
        question: "బహుళ మేధస్సుల సిద్ధాంతాన్ని ప్రతిపాదించినవారు ఎవరు?",
        options: [
            "స్పియర్‌మన్",
            "గిల్‌ఫోర్డ్",
            "గార్డ్నర్",
            "టర్మన్"
        ],
        correct: 2,
        explanation: "హోవర్డ్ గార్డ్నర్ బహుళ మేధస్సుల సిద్ధాంతాన్ని ప్రతిపాదించాడు. మేధస్సు అనేక రూపాల్లో వ్యక్తమవుతుందని పేర్కొన్నాడు."
    },
    {
        question: "విద్యార్థి చేసిన సరైన పనిని ప్రశంసించడం ఏ రకమైన ప్రేరణకు ఉదాహరణ?",
        options: [
            "శిక్ష",
            "ప్రతికూల బలపరిచడం",
            "ధనాత్మక బలపరిచడం",
            "అంతర్గత ప్రేరణ"
        ],
        correct: 2,
        explanation: "సరైన ప్రవర్తన తర్వాత ప్రశంస ఇవ్వడం ధనాత్మక బలపరిచడం. ఇది ఆ ప్రవర్తన పునరావృతం అయ్యే అవకాశాన్ని పెంచుతుంది."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education) యొక్క ప్రధాన లక్ష్యం ఏమిటి?",
        options: [
            "వైకల్యం గల పిల్లలను ప్రత్యేక పాఠశాలల్లో ఉంచడం",
            "ప్రతిభావంతులకే ప్రత్యేక బోధన ఇవ్వడం",
            "అందరు పిల్లలకు కలిసి నేర్చుకునే అవకాశాలు కల్పించడం",
            "కేవలం సాధారణ విద్యార్థుల అభివృద్ధి"
        ],
        correct: 2,
        explanation: "సమగ్ర విద్యలో అన్ని పిల్లలు కలిసి నేర్చుకునేలా సమాన అవకాశాలు కల్పించడం ప్రధాన లక్ష్యం."
    },
    {
        question: "వ్యక్తిగత విద్యా ప్రణాళిక (IEP) ప్రధానంగా ఎవరికి రూపొందించబడుతుంది?",
        options: [
            "అందరు విద్యార్థులకు",
            "కేవలం ప్రతిభావంతులకు",
            "వైకల్యం గల విద్యార్థులకు",
            "ఉపాధ్యాయులకు"
        ],
        correct: 2,
        explanation: "వ్యక్తిగత విద్యా ప్రణాళిక (IEP) వైకల్యం గల విద్యార్థుల ప్రత్యేక అవసరాలను దృష్టిలో ఉంచుకుని రూపొందించబడుతుంది."
    },
    {
        question: "కంప్యూటర్‌లో సమాచారాన్ని తాత్కాలికంగా నిల్వచేసే మెమరీ ఏది?",
        options: [
            "ROM",
            "RAM",
            "హార్డ్ డిస్క్",
            "పెన్ డ్రైవ్"
        ],
        correct: 1,
        explanation: "RAM తాత్కాలిక మెమరీ. కంప్యూటర్ పనిచేస్తున్న సమయంలో డేటాను నిల్వచేస్తుంది; పవర్ ఆఫ్ అయితే డేటా తొలగిపోతుంది."
    },
    {
        question: "ICT యొక్క పూర్తి రూపం ఏమిటి?",
        options: [
            "Information and Computer Technology",
            "Information and Communication Technology",
            "Internet and Communication Technology",
            "Information and Control Technology"
        ],
        correct: 1,
        explanation: "ICT అంటే Information and Communication Technology. సమాచార సేకరణ, నిల్వ, ప్రసారం మరియు వినియోగానికి సంబంధించిన సాంకేతికతలను సూచిస్తుంది."
    },
    {
        question: "క్రింది వాటిలో శోధన యంత్రం (Search Engine) ఏది?",
        options: [
            "MS Word",
            "Google",
            "PowerPoint",
            "Excel"
        ],
        correct: 1,
        explanation: "Google ఒక శోధన యంత్రం. ఇంటర్నెట్‌లో సమాచారం కోసం శోధించడానికి ఉపయోగిస్తారు."
    },
    {
        question: "బ్లూమ్ వర్గీకరణలో జ్ఞానాత్మక రంగంలో అత్యున్నత స్థాయి ఏది?",
        options: [
            "గుర్తుంచుకోవడం",
            "అర్థం చేసుకోవడం",
            "విశ్లేషించడం",
            "సృష్టించడం"
        ],
        correct: 3,
        explanation: "సవరించిన బ్లూమ్ వర్గీకరణలో సృష్టించడం (Creating) అత్యున్నత స్థాయి. కొత్త ఆలోచనలు, ఉత్పత్తులు రూపొందించడం ఇందులో భాగం."
    },
    {
        question: "క్రింది వాటిలో రూపకల్పనాత్మక మూల్యాంకనం (Formative Assessment) కు ఉదాహరణ ఏది?",
        options: [
            "వార్షిక పరీక్ష",
            "సెమిస్టర్ పరీక్ష",
            "రోజువారీ తరగతి ప్రశ్నలు",
            "పబ్లిక్ పరీక్ష"
        ],
        correct: 2,
        explanation: "రోజువారీ తరగతి ప్రశ్నలు రూపకల్పనాత్మక మూల్యాంకనానికి ఉదాహరణ. బోధన సమయంలో నేర్చుకునే పురోగతిని అంచనా వేస్తాయి."
    },
    {
        question: "క్రింది వాటిలో ఉపాధ్యాయ కేంద్రిత బోధన కంటే విద్యార్థి కేంద్రిత బోధనకు అనుకూలమైన విధానం ఏది?",
        options: [
            "ఉపన్యాస పద్ధతి",
            "కంఠస్థ పద్ధతి",
            "ప్రాజెక్టు పద్ధతి",
            "డిక్టేషన్"
        ],
        correct: 2,
        explanation: "ప్రాజెక్టు పద్ధతిలో విద్యార్థి క్రియాశీల పాత్ర పోషిస్తాడు. అన్వేషణ, సహకారం, సమస్య పరిష్కారం అభివృద్ధి చెందుతాయి."
    },
    {
        question: "డిజిటల్ పాఠ్యవస్తువులు, వీడియోలు, పరీక్షలు మరియు అభ్యాస వనరులను అందించే భారత ప్రభుత్వ వేదిక ఏది?",
        options: [
            "SWAYAM",
            "DIKSHA",
            "eBay",
            "IRCTC"
        ],
        correct: 1,
        explanation: "DIKSHA భారత ప్రభుత్వ డిజిటల్ విద్యా వేదిక. ఉపాధ్యాయులు, విద్యార్థులకు పాఠ్యవనరులు మరియు శిక్షణ సామగ్రిని అందిస్తుంది."
    },
    {
        question: "పియాజే సిద్ధాంతం ప్రకారం పిల్లలు తార్కిక ఆలోచనను వస్తువులపై ప్రయోగించడం ప్రారంభించే దశ ఏది?",
        options: [
            "సెన్సరీ-మోటార్ దశ",
            "పూర్వ కార్యాచరణ దశ",
            "మూర్త కార్యాచరణ దశ",
            "అమూర్త కార్యాచరణ దశ"
        ],
        correct: 2,
        explanation: "మూర్త కార్యాచరణ దశలో పిల్లలు వాస్తవ వస్తువులపై తార్కికంగా ఆలోచించడం ప్రారంభిస్తారు. సంరక్షణ, వర్గీకరణ వంటి నైపుణ్యాలు అభివృద్ధి చెందుతాయి."
    },
    {
        question: "కోల్బర్గ్ నైతిక వికాస సిద్ధాంతం ప్రకారం ‘శిక్షను నివారించడం’ ఏ స్థాయికి చెందినది?",
        options: [
            "సాంప్రదాయ పూర్వ స్థాయి",
            "సాంప్రదాయ స్థాయి",
            "సాంప్రదాయానంతర స్థాయి",
            "సామాజిక ఒప్పంద స్థాయి"
        ],
        correct: 0,
        explanation: "శిక్షను నివారించడం సాంప్రదాయ పూర్వ స్థాయికి చెందుతుంది. ఈ దశలో పిల్లలు శిక్ష, బహుమతి ఆధారంగా నిర్ణయాలు తీసుకుంటారు."
    },
    {
        question: "‘అంతర్దృష్టి ద్వారా అభ్యాసం’ (Insight Learning) సిద్ధాంతాన్ని ప్రతిపాదించినవారు ఎవరు?",
        options: [
            "కోహ్లర్",
            "పావ్‌లవ్",
            "స్కిన్నర్",
            "థార్న్‌డైక్"
        ],
        correct: 0,
        explanation: "వోల్ఫ్‌గ్యాంగ్ కోహ్లర్ అంతర్దృష్టి ద్వారా అభ్యాసం సిద్ధాంతాన్ని ప్రతిపాదించాడు. సమస్య పరిష్కారంలో అకస్మాత్తుగా అవగాహన కలగడాన్ని వివరించాడు."
    },
    {
        question: "విద్యార్థుల మధ్య వ్యక్తిగత భేదాలు ఉండటానికి ప్రధాన కారణం ఏమిటి?",
        options: [
            "వంశపారంపర్యత మరియు పరిసరాలు",
            "పాఠ్యపుస్తకాలు మాత్రమే",
            "పరీక్షలు మాత్రమే",
            "వయస్సు మాత్రమే"
        ],
        correct: 0,
        explanation: "వ్యక్తిగత భేదాలు వంశపారంపర్యత మరియు పరిసరాల పరస్పర ప్రభావం వల్ల ఏర్పడతాయి. అభ్యాసం, ప్రవర్తనపై ఇవి ప్రభావం చూపుతాయి."
    },
    {
        question: "గిల్‌ఫోర్డ్ సిద్ధాంతం ప్రధానంగా దేనికి సంబంధించినది?",
        options: [
            "ప్రేరణ",
            "మేధస్సు నిర్మాణం",
            "నైతిక వికాసం",
            "భాషా వికాసం"
        ],
        correct: 1,
        explanation: "గిల్‌ఫోర్డ్ మేధస్సు నిర్మాణ నమూనాను ప్రతిపాదించాడు. మేధస్సులో అనేక సామర్థ్యాలు ఉంటాయని వివరించాడు."
    },
    {
        question: "క్రింది వాటిలో అంతర్గత ప్రేరణకు ఉదాహరణ ఏది?",
        options: [
            "బహుమతి కోసం చదవడం",
            "మార్కుల కోసం చదవడం",
            "జ్ఞానం పొందాలనే ఆసక్తితో చదవడం",
            "శిక్ష భయంతో చదవడం"
        ],
        correct: 2,
        explanation: "జ్ఞానం పొందాలనే ఆసక్తితో చదవడం అంతర్గత ప్రేరణ. ఇది వ్యక్తి లోపలి ఆసక్తి, సంతృప్తి ఆధారంగా ఉంటుంది."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education)లో ఉపాధ్యాయుని ముఖ్య బాధ్యత ఏది?",
        options: [
            "అందరికీ ఒకే విధమైన బోధన",
            "విద్యార్థుల వైవిధ్యాన్ని పరిగణనలోకి తీసుకుని బోధన",
            "వైకల్యం గల విద్యార్థులను వేరుచేయడం",
            "కేవలం ప్రతిభావంతులపై దృష్టి పెట్టడం"
        ],
        correct: 1,
        explanation: "సమగ్ర విద్యలో విద్యార్థుల వైవిధ్యాన్ని గుర్తించి వారి అవసరాలకు అనుగుణంగా బోధన అందించడం ఉపాధ్యాయుని ప్రధాన బాధ్యత."
    },
    {
        question: "‘చేయడం ద్వారా నేర్చుకోవడం’ (Learning by Doing) అనే భావనతో ఎక్కువగా సంబంధం ఉన్న విద్యావేత్త ఎవరు?",
        options: [
            "జాన్ డ్యూయీ",
            "పియాజే",
            "బినే",
            "టర్మన్"
        ],
        correct: 0,
        explanation: "జాన్ డ్యూయీ అనుభవాత్మక అభ్యాసాన్ని ప్రోత్సహించాడు. చేయడం ద్వారా నేర్చుకోవడం విద్యార్థుల క్రియాశీల భాగస్వామ్యాన్ని పెంచుతుంది."
    },
    {
        question: "క్రింది వాటిలో రూపకల్పనాత్మక మూల్యాంకనం యొక్క లక్షణం ఏది?",
        options: [
            "అభ్యాసం ముగిసిన తర్వాత నిర్వహించడం",
            "ర్యాంకులు నిర్ణయించడం",
            "అభ్యాస సమయంలో అభివృద్ధిని గమనించడం",
            "ప్రమోషన్ నిర్ణయించడం"
        ],
        correct: 2,
        explanation: "రూపకల్పనాత్మక మూల్యాంకనం అభ్యాస సమయంలో విద్యార్థి పురోగతిని తెలుసుకోవడానికి ఉపయోగపడుతుంది. బోధన మెరుగుదలకు సహాయపడుతుంది."
    },
    {
        question: "బినే-సైమన్ పరీక్ష ప్రధానంగా దేనిని కొలవడానికి రూపొందించబడింది?",
        options: [
            "వ్యక్తిత్వం",
            "సృజనాత్మకత",
            "మేధస్సు",
            "ఆసక్తులు"
        ],
        correct: 2,
        explanation: "బినే-సైమన్ పరీక్ష మేధస్సును కొలవడానికి రూపొందించబడింది. మానసిక వయస్సు భావన అభివృద్ధికి ఇది దోహదపడింది."
    },
    {
        question: "క్రింది వాటిలో అభివృద్ధి యొక్క సరైన సూత్రం ఏది?",
        options: [
            "అభివృద్ధి యాదృచ్ఛికంగా జరుగుతుంది",
            "అభివృద్ధి తల నుండి పాదాల దిశగా సాగుతుంది",
            "అభివృద్ధి అందరిలో ఒకే వేగంతో జరుగుతుంది",
            "అభివృద్ధి కేవలం శారీరక మార్పులే"
        ],
        correct: 1,
        explanation: "అభివృద్ధి తల నుండి పాదాల దిశగా (Cephalocaudal Principle) సాగుతుంది. ఇది శారీరక వికాసంలోని ముఖ్య సూత్రం."
    },
    {
        question: "ఒక విద్యార్థి సమస్యను పరిష్కరించడానికి విభిన్న మార్గాలను సూచిస్తే, అది ఏ రకమైన ఆలోచనకు ఉదాహరణ?",
        options: [
            "ఏకాభిముఖ ఆలోచన",
            "అభిసరణ ఆలోచన",
            "విభిన్న ఆలోచన",
            "యాంత్రిక ఆలోచన"
        ],
        correct: 2,
        explanation: "విభిన్న ఆలోచనలో ఒక సమస్యకు అనేక పరిష్కారాలను సూచిస్తారు. ఇది సృజనాత్మకతకు సంబంధించిన ముఖ్య లక్షణం."
    },
    {
        question: "పిల్లల భాషా వికాసంలో మొదట అభివృద్ధి చెందేది ఏది?",
        options: [
            "వాక్య నిర్మాణం",
            "పదజాలం",
            "శబ్ద ఉచ్చారణ",
            "వ్యాకరణ నియమాలు"
        ],
        correct: 2,
        explanation: "భాషా వికాసంలో మొదట శబ్ద ఉచ్చారణ అభివృద్ధి చెందుతుంది. తరువాత పదజాలం, వాక్య నిర్మాణం, వ్యాకరణం అభివృద్ధి చెందుతాయి."
    },
    {
        question: "పాఠశాలలో విద్యార్థులు కలిసి పనిచేసి ఒక లక్ష్యాన్ని సాధించే పద్ధతిని ఏమంటారు?",
        options: [
            "వ్యక్తిగత అభ్యాసం",
            "సహకార అభ్యాసం",
            "కంఠస్థ అభ్యాసం",
            "స్వాధ్యాయం"
        ],
        correct: 1,
        explanation: "సహకార అభ్యాసంలో విద్యార్థులు సమూహంగా పనిచేసి లక్ష్యాలను సాధిస్తారు. పరస్పర సహకారం, సామాజిక నైపుణ్యాలు పెరుగుతాయి."
    },
    {
        question: "పిల్లలలో ఉన్నత స్థాయి ఆలోచనా నైపుణ్యాలను అభివృద్ధి చేయడానికి అత్యంత అనుకూలమైన ప్రశ్న ఏది?",
        options: [
            "భారత రాజధాని ఏమిటి?",
            "ఈ పదానికి అర్థం ఏమిటి?",
            "ఈ సమస్యకు మీ పరిష్కారాన్ని సమర్థించండి.",
            "ఈ తేదీని గుర్తుంచుకోండి."
        ],
        correct: 2,
        explanation: "పరిష్కారాన్ని సమర్థించమని అడిగే ప్రశ్న విశ్లేషణ, మూల్యాంకనం వంటి ఉన్నత స్థాయి ఆలోచనా నైపుణ్యాలను ప్రోత్సహిస్తుంది."
    },
    {
        question: "క్రింది వాటిలో 'సంధి'కి సరైన నిర్వచనం ఏది?",
        options: [
            "రెండు పదాలు కలవడం",
            "రెండు అక్షరాలు కలిసినప్పుడు వాటిలో మార్పు రావడం",
            "పదాన్ని విభజించడం",
            "వాక్యాన్ని నిర్మించడం"
        ],
        correct: 1,
        explanation: "రెండు అక్షరాలు లేదా వర్ణాలు కలిసినప్పుడు వాటిలో ధ్వని మార్పు ఏర్పడటాన్ని సంధి అంటారు. ఇది తెలుగు వ్యాకరణంలో ముఖ్యమైన అంశం."
    },
    {
        question: "'రామాలయం' అనే పదంలో సంధి రకం ఏది?",
        options: [
            "గుణ సంధి",
            "యణాదేశ సంధి",
            "సవర్ణ దీర్ఘ సంధి",
            "వృద్ధి సంధి"
        ],
        correct: 2,
        explanation: "రామ + ఆలయం = రామాలయం. ఒకే స్వరాలు కలిసినప్పుడు దీర్ఘ స్వరం ఏర్పడుతుంది. దీనిని సవర్ణ దీర్ఘ సంధి అంటారు."
    },
    {
        question: "'రాజపుత్రుడు' అనే పదం ఏ సమాసానికి ఉదాహరణ?",
        options: [
            "ద్వంద్వ సమాసం",
            "తత్పురుష సమాసం",
            "బహువ్రీహి సమాసం",
            "కర్మధారయ సమాసం"
        ],
        correct: 1,
        explanation: "రాజు యొక్క పుత్రుడు అనే భావం ఉన్నందున ఇది తత్పురుష సమాసానికి ఉదాహరణ."
    },
    {
        question: "క్రింది వాటిలో 'ఉపమా అలంకారం' ఉన్నది ఏది?",
        options: [
            "అతడు సింహం",
            "ఆమె చంద్రునివలె అందంగా ఉంది",
            "గాలి పాట పాడింది",
            "సముద్రం నవ్వింది"
        ],
        correct: 1,
        explanation: "ఉపమా అలంకారంలో 'వలె', 'లాగా' వంటి ఉపమాన వాచక పదాలు ఉంటాయి. రెండవ వాక్యం ఉపమా అలంకారానికి ఉదాహరణ."
    },
    {
        question: "'అతడు సింహం' అనే వాక్యంలో ఉన్న అలంకారం ఏది?",
        options: [
            "ఉపమా",
            "అతిశయోక్తి",
            "రూపకం",
            "శ్లేషం"
        ],
        correct: 2,
        explanation: "ఉపమాన వాచక పదం లేకుండా ఒకదానిని మరొకదానిగా పేర్కొంటే రూపక అలంకారం అవుతుంది."
    },
    {
        question: "'చేతికి ఎముక లేకపోవడం' అనే జాతీయం అర్థం ఏమిటి?",
        options: [
            "బలహీనంగా ఉండడం",
            "అధికంగా ఖర్చు చేయడం",
            "అనారోగ్యంగా ఉండడం",
            "పని చేయకపోవడం"
        ],
        correct: 1,
        explanation: "చేతికి ఎముక లేకపోవడం అనే జాతీయం డబ్బును విచక్షణ లేకుండా ఖర్చు చేయడాన్ని సూచిస్తుంది."
    },
    {
        question: "'కన్ను మీద కునుకు లేకపోవడం' అనే జాతీయం అర్థం ఏమిటి?",
        options: [
            "నిద్ర లేకపోవడం",
            "కోపంగా ఉండడం",
            "ఆశ్చర్యపడడం",
            "సంతోషంగా ఉండడం"
        ],
        correct: 0,
        explanation: "కన్ను మీద కునుకు లేకపోవడం అంటే నిద్ర లేకపోవడం లేదా తీవ్రమైన ఆందోళనలో ఉండడం."
    },
    {
        question: "'పాఠశాల' అనే పదానికి సమానార్థక పదం ఏది?",
        options: [
            "విద్యాలయం",
            "గ్రంథాలయం",
            "ఆసుపత్రి",
            "దేవాలయం"
        ],
        correct: 0,
        explanation: "పాఠశాల మరియు విద్యాలయం రెండూ విద్య బోధించే సంస్థను సూచించే సమానార్థక పదాలు."
    },
    {
        question: "'అంధకారం' అనే పదానికి వ్యతిరేక పదం ఏది?",
        options: [
            "వెలుగు",
            "చీకటి",
            "నిశ్శబ్దం",
            "నీడ"
        ],
        correct: 0,
        explanation: "అంధకారం అంటే చీకటి. దానికి వ్యతిరేక పదం వెలుగు."
    },
    {
        question: "'గజం' అనే పదానికి నానార్థాలలో ఒకటి ఏది?",
        options: [
            "ఏనుగు",
            "పక్షి",
            "చెట్టు",
            "నది"
        ],
        correct: 0,
        explanation: "గజం అనే పదానికి ఏనుగు అనే అర్థం ఉంది. సందర్భానుసారం ఇతర అర్థాలు కూడా వస్తాయి."
    },
    {
        question: "క్రింది వాటిలో శుద్ధ పదం ఏది?",
        options: [
            "విద్యార్ధి",
            "విద్యార్థి",
            "విద్యార్ధీ",
            "విద్యర్తి"
        ],
        correct: 1,
        explanation: "సరైన రూపం 'విద్యార్థి'. మిగిలిన రూపాలు అక్షరదోషాలతో ఉన్నాయి."
    },
    {
        question: "'తెలుగు భాష చాలా మధురమైనది.' ఈ వాక్యంలో విశేషణం ఏది?",
        options: [
            "తెలుగు",
            "భాష",
            "చాలా",
            "మధురమైనది"
        ],
        correct: 3,
        explanation: "భాష యొక్క గుణాన్ని తెలియజేసే పదం 'మధురమైనది'. కాబట్టి అది విశేషణం."
    },
    {
        question: "'పక్షులు ఆకాశంలో ఎగురుతున్నాయి.' ఈ వాక్యంలో క్రియ ఏది?",
        options: [
            "పక్షులు",
            "ఆకాశంలో",
            "ఎగురుతున్నాయి",
            "ఆకాశం"
        ],
        correct: 2,
        explanation: "క్రియ అనగా పని లేదా స్థితిని తెలిపే పదం. ఇక్కడ 'ఎగురుతున్నాయి' క్రియ."
    },
    {
        question: "'దేశభాషలందు తెలుగు లెస్స' అని చెప్పిన కవి ఎవరు?",
        options: [
            "నన్నయ",
            "తిక్కన",
            "శ్రీకృష్ణదేవరాయలు",
            "పోతన"
        ],
        correct: 2,
        explanation: "దేశభాషలందు తెలుగు లెస్స అనే ప్రసిద్ధ వాక్యాన్ని శ్రీకృష్ణదేవరాయలు పేర్కొన్నారు."
    },
    {
        question: "'భాగవతము' గ్రంథ రచయిత ఎవరు?",
        options: [
            "నన్నయ",
            "తిక్కన",
            "ఎర్రప్రగడ",
            "పోతన"
        ],
        correct: 3,
        explanation: "ఆంధ్ర మహాభాగవతాన్ని బమ్మెర పోతన రచించారు. ఇది తెలుగు సాహిత్యంలో ప్రముఖ గ్రంథం."
    },
    {
        question: "'అన్నదమ్ములు' అనే పదం ఏ సమాసానికి ఉదాహరణ?",
        options: [
            "ద్వంద్వ సమాసం",
            "తత్పురుష సమాసం",
            "కర్మధారయ సమాసం",
            "బహువ్రీహి సమాసం"
        ],
        correct: 0,
        explanation: "అన్న మరియు తమ్ముడు అనే రెండు పదాలు సమాన ప్రాధాన్యంతో కలిసినందున ఇది ద్వంద్వ సమాసానికి ఉదాహరణ."
    },
    {
        question: "'లోకోపకారం' అనే పదంలో సమాస రకం ఏది?",
        options: [
            "ద్విగు సమాసం",
            "తత్పురుష సమాసం",
            "ద్వంద్వ సమాసం",
            "అవ్యయీభావ సమాసం"
        ],
        correct: 1,
        explanation: "లోకానికి ఉపకారం అనే భావం ఉన్నందున ఇది తత్పురుష సమాసానికి చెందిన పదం."
    },
    {
        question: "'పరోపకారం పుణ్యాయ' అనే సూక్తి యొక్క భావం ఏమిటి?",
        options: [
            "ఇతరులకు హాని చేయడం మంచిది",
            "పరోపకారం పుణ్యాన్ని ఇస్తుంది",
            "స్వార్థం ఉత్తమం",
            "ధనం సంపాదించడం గొప్పది"
        ],
        correct: 1,
        explanation: "ఇతరులకు సహాయం చేయడం పుణ్యకార్యమని ఈ సూక్తి సూచిస్తుంది."
    },
    {
        question: "'మాట నిలబెట్టుకోవడం' అనే జాతీయం అర్థం ఏమిటి?",
        options: [
            "మాటలు ఎక్కువగా మాట్లాడడం",
            "వాగ్దానాన్ని నెరవేర్చడం",
            "వాదించడం",
            "మౌనంగా ఉండడం"
        ],
        correct: 1,
        explanation: "మాట నిలబెట్టుకోవడం అంటే ఇచ్చిన హామీని లేదా వాగ్దానాన్ని అమలు చేయడం."
    },
    {
        question: "'ఆకాశానికి ఎత్తడం' అనే జాతీయం అర్థం ఏమిటి?",
        options: [
            "ఆకాశంలోకి పంపడం",
            "అతిగా పొగడడం",
            "ఎత్తైన ప్రదేశానికి తీసుకెళ్లడం",
            "ప్రయాణం చేయించడం"
        ],
        correct: 1,
        explanation: "ఒక వ్యక్తిని లేదా విషయాన్ని అతిగా ప్రశంసించడం అనే అర్థంలో ఈ జాతీయం వాడబడుతుంది."
    },
    {
        question: "'అమృతం' అనే పదానికి వ్యతిరేక పదం ఏది?",
        options: [
            "విషం",
            "నీరు",
            "పాలు",
            "ఔషధం"
        ],
        correct: 0,
        explanation: "అమృతం జీవాన్ని ప్రసాదించేదిగా భావిస్తారు. దానికి వ్యతిరేక భావం కలిగిన పదం విషం."
    },
    {
        question: "'సత్యం' అనే పదానికి సమానార్థక పదం ఏది?",
        options: [
            "అసత్యం",
            "నిజం",
            "అబద్ధం",
            "సందేహం"
        ],
        correct: 1,
        explanation: "సత్యం మరియు నిజం రెండూ ఒకే భావాన్ని సూచించే సమానార్థక పదాలు."
    },
    {
        question: "'చల్లని గాలి వీచింది' అనే వాక్యంలో విశేషణం ఏది?",
        options: [
            "చల్లని",
            "గాలి",
            "వీచింది",
            "చల్లని గాలి"
        ],
        correct: 0,
        explanation: "గాలి యొక్క గుణాన్ని తెలిపే పదం 'చల్లని'. అందువల్ల అది విశేషణం."
    },
    {
        question: "'విద్యార్థులు పుస్తకాలు చదువుతున్నారు.' ఈ వాక్యంలో కర్త ఏది?",
        options: [
            "పుస్తకాలు",
            "చదువుతున్నారు",
            "విద్యార్థులు",
            "చదువు"
        ],
        correct: 2,
        explanation: "క్రియను నిర్వహిస్తున్న వ్యక్తి లేదా వస్తువు కర్త. ఇక్కడ 'విద్యార్థులు' కర్త."
    },
    {
        question: "'ఆమె వేగంగా పరుగెత్తింది.' ఈ వాక్యంలో క్రియావిశేషణం ఏది?",
        options: [
            "ఆమె",
            "వేగంగా",
            "పరుగెత్తింది",
            "పరుగెత్తు"
        ],
        correct: 1,
        explanation: "క్రియ ఎలా జరిగిందో తెలిపే పదం క్రియావిశేషణం. ఇక్కడ 'వేగంగా' ఆ పాత్రను నిర్వహిస్తుంది."
    },
    {
        question: "'గురజాడ అప్పారావు' రచించిన నాటకం ఏది?",
        options: [
            "కన్యాశుల్కం",
            "వరవిక్రయం",
            "మాలపల్లి",
            "రాజశేఖర చరిత్ర"
        ],
        correct: 0,
        explanation: "కన్యాశుల్కం గురజాడ అప్పారావు రచించిన ప్రసిద్ధ సామాజిక నాటకం."
    },
    {
        question: "'మాలపల్లి' నవల రచయిత ఎవరు?",
        options: [
            "ఉన్నవ లక్ష్మీనారాయణ",
            "కందుకూరి వీరేశలింగం",
            "విశ్వనాథ సత్యనారాయణ",
            "చిలకమర్తి లక్ష్మీనరసింహం"
        ],
        correct: 0,
        explanation: "మాలపల్లి నవలను ఉన్నవ లక్ష్మీనారాయణ రచించారు. ఇది తెలుగు సాహిత్యంలో ప్రముఖ నవల."
    },
    {
        question: "'వేయి పడగలు' గ్రంథ రచయిత ఎవరు?",
        options: [
            "శ్రీశ్రీ",
            "విశ్వనాథ సత్యనారాయణ",
            "దేవులపల్లి కృష్ణశాస్త్రి",
            "రాయప్రోలు సుబ్బారావు"
        ],
        correct: 1,
        explanation: "వేయి పడగలు విశ్వనాథ సత్యనారాయణ రచించిన ప్రముఖ నవల."
    },
    {
        question: "'మహాప్రస్థానం' కవితా సంపుటి రచయిత ఎవరు?",
        options: [
            "శ్రీశ్రీ",
            "గురజాడ అప్పారావు",
            "దాశరథి",
            "జాషువా"
        ],
        correct: 0,
        explanation: "మహాప్రస్థానం శ్రీశ్రీ రచించిన విప్లవాత్మక కవితా సంపుటి."
    },
    {
        question: "క్రింది వాటిలో అచ్చ తెలుగు పదం ఏది?",
        options: [
            "పుస్తకం",
            "విద్య",
            "ఇల్లు",
            "భాష"
        ],
        correct: 2,
        explanation: "ఇల్లు అచ్చ తెలుగు పదం. మిగిలిన పదాలు ఇతర భాషల ప్రభావంతో వచ్చినవి."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "She go to school every day.",
            "She goes to school every day.",
            "She going to school every day.",
            "She gone to school every day."
        ],
        correct: 1,
        explanation: "With third person singular subjects like 'She', the simple present tense requires the verb to take 's' or 'es'."
    },
    {
        question: "Fill in the blank: Ravi and Rani _____ playing in the park.",
        options: [
            "is",
            "was",
            "are",
            "has"
        ],
        correct: 2,
        explanation: "The subject 'Ravi and Rani' is plural. Therefore, the correct auxiliary verb is 'are'."
    },
    {
        question: "Choose the correct article: He is _____ honest man.",
        options: [
            "a",
            "an",
            "the",
            "no article"
        ],
        correct: 1,
        explanation: "The word 'honest' begins with a vowel sound. Therefore, the correct article is 'an'."
    },
    {
        question: "Fill in the blank: The book is _____ the table.",
        options: [
            "in",
            "on",
            "at",
            "from"
        ],
        correct: 1,
        explanation: "The preposition 'on' is used when an object is placed on the surface of another object."
    },
    {
        question: "Identify the correct past tense form of 'write'.",
        options: [
            "writed",
            "written",
            "wrote",
            "writes"
        ],
        correct: 2,
        explanation: "The simple past tense of 'write' is 'wrote'. 'Written' is the past participle form."
    },
    {
        question: "Choose the synonym of 'Brave'.",
        options: [
            "Cowardly",
            "Fearful",
            "Courageous",
            "Weak"
        ],
        correct: 2,
        explanation: "Both 'brave' and 'courageous' refer to showing courage and facing difficulties without fear."
    },
    {
        question: "Choose the antonym of 'Ancient'.",
        options: [
            "Old",
            "Historic",
            "Modern",
            "Traditional"
        ],
        correct: 2,
        explanation: "Ancient refers to something very old, whereas modern refers to something recent or contemporary."
    },
    {
        question: "Identify the noun in the sentence: 'The children enjoyed the game.'",
        options: [
            "enjoyed",
            "the",
            "children",
            "game"
        ],
        correct: 2,
        explanation: "A noun names a person, place, thing, or idea. 'Children' is a noun referring to people."
    },
    {
        question: "Choose the correct passive voice: 'The teacher praised the student.'",
        options: [
            "The student praised the teacher.",
            "The student was praised by the teacher.",
            "The teacher was praised by the student.",
            "The student is praised by the teacher."
        ],
        correct: 1,
        explanation: "In passive voice, the object becomes the subject. 'The student was praised by the teacher' is correct."
    },
    {
        question: "Choose the correctly punctuated sentence.",
        options: [
            "What is your name.",
            "What is your name?",
            "What is your name!",
            "What is your name,"
        ],
        correct: 1,
        explanation: "A direct question must end with a question mark. Therefore, the second option is correct."
    },
    {
        question: "Fill in the blank: If I _____ rich, I would help the poor.",
        options: [
            "am",
            "was",
            "were",
            "be"
        ],
        correct: 2,
        explanation: "In hypothetical conditional sentences, 'were' is used with all subjects in formal English."
    },
    {
        question: "Choose the correct reported speech: Ram said, 'I am busy.'",
        options: [
            "Ram said that I am busy.",
            "Ram said that he was busy.",
            "Ram said that he is busy.",
            "Ram said he busy."
        ],
        correct: 1,
        explanation: "In reported speech, the pronoun changes and the present tense usually shifts to the past tense."
    },
    {
        question: "Which word is an adjective?",
        options: [
            "Quickly",
            "Beauty",
            "Beautiful",
            "Beautify"
        ],
        correct: 2,
        explanation: "An adjective describes a noun. 'Beautiful' describes the quality of a person, place, or thing."
    },
    {
        question: "Choose the correctly spelled word.",
        options: [
            "Enviroment",
            "Environment",
            "Envirnment",
            "Enviornment"
        ],
        correct: 1,
        explanation: "The correct spelling is 'Environment'. The other options contain spelling errors."
    },
    {
        question: "Read the sentence and answer: 'The sun rises in the east.' Which tense is used?",
        options: [
            "Present Continuous",
            "Simple Past",
            "Simple Present",
            "Present Perfect"
        ],
        correct: 2,
        explanation: "Universal truths and scientific facts are generally expressed using the Simple Present tense."
    },
    {
        question: "Choose the correct subject-verb agreement.",
        options: [
            "Each of the students have a notebook.",
            "Each of the students has a notebook.",
            "Each of the students having a notebook.",
            "Each of the students are having a notebook."
        ],
        correct: 1,
        explanation: "The subject 'Each' is singular. Therefore, it takes the singular verb 'has' regardless of the plural noun following it."
    },
    {
        question: "Fill in the blank: Neither Ravi nor his friends _____ present.",
        options: [
            "was",
            "is",
            "are",
            "has"
        ],
        correct: 2,
        explanation: "With 'neither...nor', the verb agrees with the subject nearest to it. 'Friends' is plural, so 'are' is correct."
    },
    {
        question: "Choose the correct article: _____ Ganga is a sacred river.",
        options: [
            "A",
            "An",
            "The",
            "No article"
        ],
        correct: 2,
        explanation: "Names of rivers generally take the definite article 'the'. Therefore, 'The Ganga' is correct."
    },
    {
        question: "Fill in the blank: She has been living here _____ 2018.",
        options: [
            "for",
            "since",
            "from",
            "by"
        ],
        correct: 1,
        explanation: "Since is used with a specific point in time. '2018' is a specific year, so 'since' is correct."
    },
    {
        question: "Choose the correct meaning of the idiom 'A blessing in disguise'.",
        options: [
            "A visible blessing",
            "A hidden problem",
            "Something good that seemed bad at first",
            "An unexpected punishment"
        ],
        correct: 2,
        explanation: "A blessing in disguise refers to something that initially appears unfortunate but later proves beneficial."
    },
    {
        question: "Identify the adverb in the sentence: 'He answered the question correctly.'",
        options: [
            "He",
            "answered",
            "question",
            "correctly"
        ],
        correct: 3,
        explanation: "An adverb modifies a verb, adjective, or another adverb. 'Correctly' describes how the question was answered."
    },
    {
        question: "Choose the correct comparative form of 'good'.",
        options: [
            "gooder",
            "more good",
            "better",
            "best"
        ],
        correct: 2,
        explanation: "The comparative form of 'good' is 'better'. 'Best' is the superlative form."
    },
    {
        question: "Choose the correctly spelled word.",
        options: [
            "Occasion",
            "Occassion",
            "Ocassion",
            "Occsion"
        ],
        correct: 0,
        explanation: "The correct spelling is 'Occasion'. The other options contain spelling mistakes."
    },
    {
        question: "Choose the passive form of: 'People speak English all over the world.'",
        options: [
            "English is spoken all over the world.",
            "English was spoken all over the world.",
            "English speaks all over the world.",
            "English has spoken all over the world."
        ],
        correct: 0,
        explanation: "The sentence is in simple present tense. Its passive form is 'English is spoken all over the world.'"
    },
    {
        question: "Choose the correct question tag: 'She is a doctor, _____?'",
        options: [
            "is she",
            "isn't she",
            "doesn't she",
            "does she"
        ],
        correct: 1,
        explanation: "A positive statement takes a negative question tag. Therefore, 'isn't she' is correct."
    },
    {
        question: "Fill in the blank: I prefer tea _____ coffee.",
        options: [
            "than",
            "to",
            "from",
            "with"
        ],
        correct: 1,
        explanation: "The standard expression is 'prefer A to B'. Hence, 'to' is the correct preposition."
    },
    {
        question: "Choose the correct reported speech: The teacher said, 'The Earth revolves around the Sun.'",
        options: [
            "The teacher said that the Earth revolved around the Sun.",
            "The teacher said that the Earth revolves around the Sun.",
            "The teacher said that the Earth had revolved around the Sun.",
            "The teacher said that the Earth was revolving around the Sun."
        ],
        correct: 1,
        explanation: "Universal truths remain unchanged in reported speech. Therefore, the present tense is retained."
    },
    {
        question: "Read the passage and answer the question.\n\n'Rani waters the plants every morning. She believes that plants need regular care to grow well.'\n\nWhy does Rani water the plants every morning?",
        options: [
            "To decorate her house",
            "Because plants need regular care to grow well",
            "To save water",
            "Because her teacher told her"
        ],
        correct: 1,
        explanation: "The passage directly states that Rani believes plants need regular care to grow well. Therefore, option B is correct."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "One of the boys have completed the work.",
            "One of the boys has completed the work.",
            "One of the boys are completed the work.",
            "One of the boys were completed the work."
        ],
        correct: 1,
        explanation: "The subject is 'One', which is singular. Therefore, the singular verb 'has' must be used."
    },
    {
        question: "Which of the following is a compound word?",
        options: [
            "Teacher",
            "Kindness",
            "Blackboard",
            "Careful"
        ],
        correct: 2,
        explanation: "A compound word is formed by combining two words. 'Blackboard' is formed from 'black' and 'board'."
    },
    {
        question: "వ్యక్తిగత విద్యా ప్రణాళిక (IEP) యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        options: [
            "అన్ని విద్యార్థులకు ఒకే విధమైన బోధన అందించడం",
            "విద్యార్థి వ్యక్తిగత అవసరాలకు అనుగుణంగా విద్యా లక్ష్యాలు రూపొందించడం",
            "పరీక్షల నిర్వహణను సులభతరం చేయడం",
            "ఉపాధ్యాయుల పనిభారాన్ని తగ్గించడం"
        ],
        correct: 1,
        explanation: "IEP అనేది వైకల్యం గల విద్యార్థి వ్యక్తిగత అవసరాలు, లక్ష్యాలు మరియు అవసరమైన సహాయ సేవలను నిర్దేశించే విద్యా ప్రణాళిక."
    },
    {
        question: "ఒక విద్యార్థి చదివేటప్పుడు అక్షరాలను తారుమారు చేయడం, పదాలను గుర్తించడంలో ఇబ్బంది పడడం ఏ అభ్యాస వైకల్యం (Learning Disability) లక్షణం?",
        options: [
            "డిస్క్యాల్కులియా (Dyscalculia)",
            "డిస్గ్రాఫియా (Dysgraphia)",
            "డిస్లెక్సియా (Dyslexia)",
            "అప్రాక్సియా"
        ],
        correct: 2,
        explanation: "చదవడంలో, పదాలను గుర్తించడంలో, అక్షరాలను తారుమారు చేయడంలో ఇబ్బంది డిస్లెక్సియా యొక్క ప్రధాన లక్షణం."
    },
    {
        question: "సంఖ్యలను అర్థం చేసుకోవడం, గణిత గణనలు చేయడంలో నిరంతర ఇబ్బంది ఉండటం ఏ వైకల్యానికి సూచన?",
        options: [
            "డిస్లెక్సియా (Dyslexia)",
            "డిస్క్యాల్కులియా (Dyscalculia)",
            "డిస్గ్రాఫియా (Dysgraphia)",
            "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD)"
        ],
        correct: 1,
        explanation: "సంఖ్యలు, గణిత భావనలు, గణనలు అర్థం చేసుకోవడంలో ఇబ్బంది డిస్క్యాల్కులియా లక్షణం."
    },
    {
        question: "చేతిరాత అస్పష్టంగా ఉండటం, అక్షరాల ఆకారాలు సరిగా రాయకపోవడం ఏ అభ్యాస వైకల్యానికి సంబంధించినది?",
        options: [
            "డిస్గ్రాఫియా (Dysgraphia)",
            "డిస్లెక్సియా (Dyslexia)",
            "డిస్క్యాల్కులియా (Dyscalculia)",
            "ADHD"
        ],
        correct: 0,
        explanation: "రాయడంలో, అక్షర నిర్మాణంలో, చేతిరాతలో సమస్యలు డిస్గ్రాఫియా యొక్క ప్రధాన లక్షణాలు."
    },
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న పిల్లలలో సాధారణంగా కనిపించే లక్షణం ఏది?",
        options: [
            "సామాజిక పరస్పర చర్యలో ఇబ్బంది",
            "వినికిడి లోపం",
            "దృష్టి లోపం మాత్రమే",
            "శారీరక ఎదుగుదల లేకపోవడం"
        ],
        correct: 0,
        explanation: "ASD ఉన్న పిల్లలలో సామాజిక సంభాషణ, పరస్పర చర్యలు మరియు ప్రవర్తనలో ప్రత్యేక నమూనాలు కనిపిస్తాయి."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education) యొక్క ముఖ్య సూత్రం ఏమిటి?",
        options: [
            "వైకల్యం గల పిల్లలను వేరుగా బోధించడం",
            "అందరు పిల్లలకు కలిసి నేర్చుకునే అవకాశం కల్పించడం",
            "ప్రతిభావంతులకు మాత్రమే ప్రత్యేక తరగతులు నిర్వహించడం",
            "ప్రత్యేక పాఠశాలలను మాత్రమే ప్రోత్సహించడం"
        ],
        correct: 1,
        explanation: "సమగ్ర విద్యలో వైవిధ్యాన్ని గౌరవిస్తూ అందరు పిల్లలు కలిసి నేర్చుకునే అవకాశాలు కల్పిస్తారు."
    },
    {
        question: "RPWD Act, 2016 యొక్క పూర్తి రూపం ఏమిటి?",
        options: [
            "Rights of Persons with Disabilities Act",
            "Rehabilitation of Persons with Disabilities Act",
            "Rights and Protection Welfare Disabilities Act",
            "Regional Persons Welfare Development Act"
        ],
        correct: 0,
        explanation: "RPWD Act, 2016 అంటే Rights of Persons with Disabilities Act. ఇది వైకల్యం గల వ్యక్తుల హక్కులను పరిరక్షించే చట్టం."
    },
    {
        question: "క్రింది వాటిలో శ్రవణ వైకల్యం (Hearing Impairment) గల విద్యార్థికి అత్యంత అనుకూలమైన బోధనా సహాయం ఏది?",
        options: [
            "బ్రెయిల్ పుస్తకాలు",
            "దృశ్య ఆధారిత బోధన",
            "కేవలం ఉపన్యాసం",
            "కళ్లకు గంతలు కట్టడం"
        ],
        correct: 1,
        explanation: "శ్రవణ వైకల్యం గల విద్యార్థులకు చిత్రాలు, సంకేతాలు, దృశ్య ఆధారిత బోధన ప్రభావవంతంగా ఉంటుంది."
    },
    {
        question: "దృష్టి వైకల్యం (Visual Impairment) గల విద్యార్థుల కోసం ఉపయోగించే స్పర్శ ఆధారిత లిపి ఏది?",
        options: [
            "సంకేత భాష",
            "బ్రెయిల్",
            "మోర్స్ కోడ్",
            "ఫోనెటిక్ లిపి"
        ],
        correct: 1,
        explanation: "బ్రెయిల్ అనేది దృష్టి వైకల్యం గల వ్యక్తులు చదవడానికి మరియు రాయడానికి ఉపయోగించే స్పర్శ ఆధారిత లిపి."
    },
    {
        question: "మేధో వైకల్యం (Intellectual Disability) యొక్క ముఖ్య లక్షణం ఏది?",
        options: [
            "కేవలం దృష్టి లోపం",
            "అనుకూల ప్రవర్తన మరియు మేధో పనితీరులో గణనీయ పరిమితులు",
            "వినికిడి లోపం మాత్రమే",
            "శారీరక వైకల్యం మాత్రమే"
        ],
        correct: 1,
        explanation: "మేధో వైకల్యంలో మేధో సామర్థ్యం మరియు రోజువారీ జీవితానికి అవసరమైన అనుకూల ప్రవర్తనలో పరిమితులు ఉంటాయి."
    },
    {
        question: "వైకల్యం గల విద్యార్థి కోసం బోధనా లక్ష్యాలు, సేవలు, మూల్యాంకన విధానాలు పేర్కొనే పత్రం ఏది?",
        options: [
            "పాఠ్య ప్రణాళిక",
            "ప్రగతి పత్రం",
            "వ్యక్తిగత విద్యా ప్రణాళిక (IEP)",
            "హాజరు రిజిస్టర్"
        ],
        correct: 2,
        explanation: "IEPలో విద్యార్థి లక్ష్యాలు, సహాయక సేవలు, బోధనా విధానాలు మరియు మూల్యాంకన అంశాలు పొందుపరుస్తారు."
    },
    {
        question: "ఒక విద్యార్థి కంటి చూపు బలహీనంగా ఉండటం వల్ల బోర్డుపై వ్రాసినది చదవలేకపోతున్నాడు. ఉపాధ్యాయుడు ముందుగా చేయవలసిన చర్య ఏది?",
        options: [
            "విద్యార్థిని తరగతి వెనుక కూర్చోబెట్టడం",
            "విద్యార్థిని ముందువరుసలో కూర్చోబెట్టడం",
            "తరగతి నుండి బయటకు పంపించడం",
            "పరీక్షలు రాయకుండా చేయడం"
        ],
        correct: 1,
        explanation: "దృష్టి సమస్య ఉన్న విద్యార్థిని ముందువరుసలో కూర్చోబెట్టడం ద్వారా బోర్డు స్పష్టంగా కనిపించే అవకాశం ఉంటుంది."
    },
    {
        question: "సంకేత భాష (Sign Language) ప్రధానంగా ఎవరితో కమ్యూనికేషన్ కోసం ఉపయోగిస్తారు?",
        options: [
            "దృష్టి వైకల్యం గల వ్యక్తులు",
            "శ్రవణ వైకల్యం గల వ్యక్తులు",
            "మేధో వైకల్యం గల వ్యక్తులు",
            "శారీరక వైకల్యం గల వ్యక్తులు"
        ],
        correct: 1,
        explanation: "సంకేత భాష శ్రవణ వైకల్యం గల వ్యక్తులతో సమర్థవంతమైన సంభాషణ కోసం ఉపయోగించబడుతుంది."
    },
    {
        question: "అభ్యాస వైకల్యం (Learning Disability) ఉన్న విద్యార్థుల గురించి సరైన వాక్యం ఏది?",
        options: [
            "వారికి మేధస్సు ఉండదు",
            "వారందరికీ దృష్టి లోపం ఉంటుంది",
            "సాధారణ లేదా సాధారణ కంటే ఎక్కువ మేధస్సు ఉండవచ్చు",
            "వారు నేర్చుకోలేరు"
        ],
        correct: 2,
        explanation: "అభ్యాస వైకల్యం ఉన్న విద్యార్థులకు సాధారణ లేదా ఎక్కువ మేధస్సు ఉండవచ్చు. సమస్య ప్రత్యేక అభ్యాస ప్రక్రియలో ఉంటుంది."
    },
    {
        question: "సమగ్ర తరగతి గదిలో (Inclusive Classroom) ఉపాధ్యాయుని ఉత్తమ విధానం ఏది?",
        options: [
            "అందరికీ ఒకే విధమైన బోధన",
            "విద్యార్థుల అవసరాలకు అనుగుణంగా బోధనలో మార్పులు చేయడం",
            "వైకల్యం గల విద్యార్థులను వేరుగా ఉంచడం",
            "కేవలం పాఠ్యపుస్తకాన్ని చదవడం"
        ],
        correct: 1,
        explanation: "సమగ్ర తరగతిలో విద్యార్థుల వైవిధ్యాన్ని గుర్తించి బోధన, కార్యకలాపాలు, మూల్యాంకనంలో తగిన మార్పులు చేయాలి."
    },
    {
        question: "RPWD Act, 2016 ప్రకారం బెంచ్‌మార్క్ వైకల్యం (Benchmark Disability) అనగా ఏమిటి?",
        options: [
            "20% లేదా అంతకంటే ఎక్కువ వైకల్యం",
            "30% లేదా అంతకంటే ఎక్కువ వైకల్యం",
            "40% లేదా అంతకంటే ఎక్కువ వైకల్యం",
            "50% లేదా అంతకంటే ఎక్కువ వైకల్యం"
        ],
        correct: 2,
        explanation: "RPWD Act, 2016 ప్రకారం కనీసం 40% వైకల్యం కలిగిన వ్యక్తిని బెంచ్‌మార్క్ వైకల్యం కలిగిన వ్యక్తిగా పరిగణిస్తారు."
    },
    {
        question: "ఒక విద్యార్థి ఇతరులతో కంటి సంపర్కం చేయకపోవడం, ఒకే పనిని పదేపదే చేయడం, సామాజిక సంభాషణలో ఇబ్బంది పడడం ఏ వైకల్యానికి సూచన?",
        options: [
            "డిస్గ్రాఫియా (Dysgraphia)",
            "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD)",
            "డిస్క్యాల్కులియా (Dyscalculia)",
            "దృష్టి వైకల్యం"
        ],
        correct: 1,
        explanation: "సామాజిక పరస్పర చర్యలో ఇబ్బంది, పునరావృత ప్రవర్తనలు ASD యొక్క ముఖ్య లక్షణాలు."
    },
    {
        question: "క్రింది వాటిలో వ్యక్తిగత విద్యా ప్రణాళిక (IEP) బృందంలో సాధారణంగా సభ్యుడు కానివారు ఎవరు?",
        options: [
            "తల్లిదండ్రులు",
            "ప్రత్యేక ఉపాధ్యాయుడు",
            "విద్యార్థి అవసరాన్ని బట్టి సంబంధిత నిపుణుడు",
            "గ్రామ సర్పంచ్"
        ],
        correct: 3,
        explanation: "IEP బృందంలో విద్యార్థి, తల్లిదండ్రులు, ఉపాధ్యాయులు మరియు సంబంధిత నిపుణులు ఉంటారు. గ్రామ సర్పంచ్ సాధారణ సభ్యుడు కాదు."
    },
    {
        question: "మేధో వైకల్యం (Intellectual Disability) ఉన్న విద్యార్థికి అత్యంత అనుకూలమైన బోధనా విధానం ఏది?",
        options: [
            "వేగవంతమైన ఉపన్యాసం",
            "చిన్న చిన్న దశలలో బోధన",
            "కేవలం గృహపాఠాలు ఇవ్వడం",
            "పాఠ్యపుస్తకం కంఠస్థం చేయించడం"
        ],
        correct: 1,
        explanation: "చిన్న దశలుగా విభజించి, పునరావృత అభ్యాసంతో బోధించడం మేధో వైకల్యం గల విద్యార్థులకు ప్రభావవంతంగా ఉంటుంది."
    },
    {
        question: "డిస్లెక్సియా (Dyslexia) ఉన్న విద్యార్థి కోసం ఉపాధ్యాయుడు అనుసరించదగిన ఉత్తమ వ్యూహం ఏది?",
        options: [
            "గట్టిగా మందలించడం",
            "అదనపు పఠన సహాయం మరియు బహుఇంద్రియ బోధన",
            "చదవడం పూర్తిగా నిలిపివేయడం",
            "పరీక్షల నుండి తొలగించడం"
        ],
        correct: 1,
        explanation: "డిస్లెక్సియా ఉన్న విద్యార్థులకు దృశ్య, శ్రవణ, స్పర్శ ఆధారిత బహుఇంద్రియ బోధన ప్రయోజనకరంగా ఉంటుంది."
    },
    {
        question: "సెరిబ్రల్ పాల్సీ (Cerebral Palsy) ప్రధానంగా దేనిని ప్రభావితం చేస్తుంది?",
        options: [
            "శరీర కదలికలు మరియు భంగిమ",
            "వినికిడి మాత్రమే",
            "దృష్టి మాత్రమే",
            "జీర్ణక్రియ మాత్రమే"
        ],
        correct: 0,
        explanation: "సెరిబ్రల్ పాల్సీ కదలికలు, కండరాల నియంత్రణ మరియు శరీర భంగిమను ప్రభావితం చేసే నాడీ సంబంధిత పరిస్థితి."
    },
    {
        question: "బ్రెయిల్ లిపి ప్రధానంగా ఏ ఇంద్రియంపై ఆధారపడి ఉంటుంది?",
        options: [
            "చూపు",
            "వినికిడి",
            "స్పర్శ",
            "వాసన"
        ],
        correct: 2,
        explanation: "బ్రెయిల్‌లోని ఎత్తైన బిందువులను వేళ్లతో స్పృశించి చదువుతారు. అందువల్ల ఇది స్పర్శ ఆధారిత లిపి."
    },
    {
        question: "క్రింది వాటిలో సమగ్ర విద్య (Inclusive Education) యొక్క ప్రయోజనం ఏది?",
        options: [
            "విద్యార్థులను వర్గీకరించడం",
            "సామాజిక భాగస్వామ్యం మరియు సమాన అవకాశాలు పెంచడం",
            "వైకల్యం గల విద్యార్థులను వేరుచేయడం",
            "ప్రత్యేక పాఠశాలల సంఖ్య పెంచడం"
        ],
        correct: 1,
        explanation: "సమగ్ర విద్య విద్యార్థుల మధ్య పరస్పర గౌరవం, సామాజిక భాగస్వామ్యం మరియు సమాన అవకాశాలను పెంచుతుంది."
    },
    {
        question: "శ్రవణ వైకల్యం గల విద్యార్థితో మాట్లాడేటప్పుడు ఉపాధ్యాయుడు చేయవలసిన ఉత్తమ చర్య ఏది?",
        options: [
            "విద్యార్థి వెనుక నుండి మాట్లాడటం",
            "ముఖాముఖిగా స్పష్టంగా మాట్లాడటం",
            "చాలా వేగంగా మాట్లాడటం",
            "మాట్లాడకుండా ఉండటం"
        ],
        correct: 1,
        explanation: "ముఖాముఖిగా మాట్లాడడం వల్ల పెదవుల కదలికలు, ముఖ భావాలు అర్థం చేసుకోవడానికి సహాయపడుతుంది."
    },
    {
        question: "అభ్యాస వైకల్యం (Learning Disability) మరియు మేధో వైకల్యం (Intellectual Disability) మధ్య ప్రధాన తేడా ఏమిటి?",
        options: [
            "రెండూ ఒకటే",
            "అభ్యాస వైకల్యంలో మేధస్సు సాధారణంగా ఉండవచ్చు",
            "మేధో వైకల్యంలో చదవడం మాత్రమే ప్రభావితమవుతుంది",
            "అభ్యాస వైకల్యంలో శారీరక కదలికలు మాత్రమే ప్రభావితమవుతాయి"
        ],
        correct: 1,
        explanation: "అభ్యాస వైకల్యం ఉన్నవారికి సాధారణ మేధస్సు ఉండవచ్చు. సమస్య ప్రత్యేక అభ్యాస నైపుణ్యాలలో ఉంటుంది."
    },
    {
        question: "ప్రత్యేక అవసరాలు గల విద్యార్థి పురోగతిని నిరంతరం పరిశీలించి IEP లక్ష్యాలను సవరించే ప్రక్రియను ఏమంటారు?",
        options: [
            "ప్రవేశ పరీక్ష",
            "నిరంతర సమీక్ష మరియు మూల్యాంకనం",
            "వర్గీకరణ",
            "పదోన్నతి"
        ],
        correct: 1,
        explanation: "IEPలో విద్యార్థి పురోగతిని నిరంతరం పరిశీలించి అవసరమైన మార్పులు చేయడం ముఖ్యమైన ప్రక్రియ."
    },
    {
        question: "భారతదేశంలో ప్రత్యేక ఉపాధ్యాయుల శిక్షణ ప్రమాణాలను నియంత్రించే సంస్థ ఏది?",
        options: [
            "NCERT",
            "UGC",
            "పునరావాస మండలి భారతదేశం (RCI)",
            "CBSE"
        ],
        correct: 2,
        explanation: "RCI (Rehabilitation Council of India) ప్రత్యేక విద్య మరియు పునరావాస నిపుణుల శిక్షణ ప్రమాణాలను నియంత్రిస్తుంది."
    },
    {
        question: "ఒక విద్యార్థి రాయడంలో తీవ్ర ఇబ్బంది పడుతున్నాడు కానీ చదవడం మరియు గణితం సాధారణంగా ఉన్నాయి. ఇది ఎక్కువగా ఏ వైకల్యాన్ని సూచిస్తుంది?",
        options: [
            "డిస్లెక్సియా (Dyslexia)",
            "డిస్క్యాల్కులియా (Dyscalculia)",
            "డిస్గ్రాఫియా (Dysgraphia)",
            "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD)"
        ],
        correct: 2,
        explanation: "రచనా నైపుణ్యాలలో ప్రత్యేక ఇబ్బందులు డిస్గ్రాఫియాకు సూచన. ఇతర విద్యా రంగాలు సాధారణంగా ఉండవచ్చు."
    },
    {
        question: "RPWD Act, 2016 ప్రకారం విద్యా సంస్థలు వైకల్యం గల విద్యార్థులకు ఏమి నిర్ధారించాలి?",
        options: [
            "ప్రవేశ నిరాకరణ",
            "సమాన అవకాశాలు మరియు తగిన సౌకర్యాలు",
            "ప్రత్యేక పరీక్షలు మాత్రమే",
            "వేరు పాఠ్యాంశాలు మాత్రమే"
        ],
        correct: 1,
        explanation: "RPWD Act సమాన అవకాశాలు, వివక్ష రహిత వాతావరణం మరియు తగిన సౌకర్యాలను కల్పించాలని నిర్దేశిస్తుంది."
    },
    {
        question: "సమగ్ర తరగతి గదిలో 'సహ విద్యార్థి సహకారం' (Peer Tutoring) యొక్క ప్రధాన ప్రయోజనం ఏమిటి?",
        options: [
            "ఉపాధ్యాయుడి పాత్రను తొలగించడం",
            "సామాజిక మరియు విద్యా అభ్యాసాన్ని మెరుగుపరచడం",
            "పరీక్షలు తగ్గించడం",
            "పాఠశాల సమయాన్ని తగ్గించడం"
        ],
        correct: 1,
        explanation: "Peer Tutoring ద్వారా విద్యార్థుల పరస్పర సహకారం, సామాజిక నైపుణ్యాలు మరియు విద్యా ఫలితాలు మెరుగుపడతాయి."
    },
    {
        question: "బహుళ వైకల్యం (Multiple Disabilities) అనగా ఏమిటి?",
        options: [
            "ఒకే వైకల్యం ఉండటం",
            "రెండు లేదా అంతకంటే ఎక్కువ వైకల్యాలు కలిసిఉండటం",
            "కేవలం శారీరక వైకల్యం ఉండటం",
            "కేవలం మేధో వైకల్యం ఉండటం"
        ],
        correct: 1,
        explanation: "బహుళ వైకల్యం అనగా ఒక వ్యక్తిలో రెండు లేదా అంతకంటే ఎక్కువ వైకల్యాలు కలిసి ఉండడం, తద్వారా ప్రత్యేక విద్యా అవసరాలు ఏర్పడడం."
    },
    {
        question: "దృష్టి వైకల్యం (Visual Impairment) గల విద్యార్థికి తరగతి గదిలో అత్యంత అనుకూలమైన సౌకర్యం ఏది?",
        options: [
            "చిన్న అక్షరాలతో పాఠ్యసామగ్రి",
            "బోర్డుకు దూరంగా కూర్చోబెట్టడం",
            "పెద్ద అక్షరాల పాఠ్యసామగ్రి మరియు తగిన వెలుతురు",
            "కేవలం మౌఖిక పరీక్షలు మాత్రమే"
        ],
        correct: 2,
        explanation: "తక్కువ దృష్టి గల విద్యార్థులకు పెద్ద అక్షరాలు, సరైన వెలుతురు మరియు స్పష్టమైన పాఠ్యసామగ్రి సహాయపడతాయి."
    },
    {
        question: "శ్రవణ వైకల్యం (Hearing Impairment) గల విద్యార్థి బోధనను అర్థం చేసుకోవడానికి ఉపాధ్యాయుడు ఏ పద్ధతిని ఎక్కువగా ఉపయోగించాలి?",
        options: [
            "దృశ్య సహాయకాలు",
            "వెనక్కి తిరిగి బోధించడం",
            "చాలా వేగంగా మాట్లాడటం",
            "కేవలం డిక్టేషన్ ఇవ్వడం"
        ],
        correct: 0,
        explanation: "చిత్రాలు, చార్టులు, సంకేతాలు వంటి దృశ్య సహాయకాలు శ్రవణ వైకల్యం గల విద్యార్థుల అభ్యాసాన్ని మెరుగుపరుస్తాయి."
    },
    {
        question: "డిస్క్యాల్కులియా (Dyscalculia) ఉన్న విద్యార్థికి అత్యంత కష్టంగా ఉండే పని ఏది?",
        options: [
            "కథ చదవడం",
            "సంఖ్యా భావనను అర్థం చేసుకోవడం",
            "చిత్రాలు గీయడం",
            "పాటలు పాడడం"
        ],
        correct: 1,
        explanation: "డిస్క్యాల్కులియాలో సంఖ్యల గుర్తింపు, గణిత భావనలు మరియు గణనలు చేయడంలో ప్రధాన ఇబ్బందులు ఉంటాయి."
    },
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) గల విద్యార్థులకు బోధించేటప్పుడు ఏ లక్షణాన్ని పరిగణనలోకి తీసుకోవాలి?",
        options: [
            "స్థిరమైన దినచర్య అవసరం",
            "వినికిడి లోపం మాత్రమే",
            "కేవలం శారీరక పరిమితులు",
            "కంటి చూపు లోపం మాత్రమే"
        ],
        correct: 0,
        explanation: "ASD గల విద్యార్థులు సాధారణంగా స్థిరమైన దినచర్యలు మరియు ముందస్తు సూచనలతో మెరుగ్గా నేర్చుకుంటారు."
    },
    {
        question: "ప్రత్యేక అవసరాలు గల విద్యార్థి బలాలు మరియు అవసరాలను గుర్తించడానికి మొదట నిర్వహించాల్సిన ప్రక్రియ ఏది?",
        options: [
            "మూల్యాంకనం",
            "శిక్ష",
            "పదోన్నతి",
            "హాజరు నమోదు"
        ],
        correct: 0,
        explanation: "విద్యార్థి అవసరాలు, సామర్థ్యాలు మరియు మద్దతు అవసరాలను తెలుసుకోవడానికి మూల్యాంకనం మొదటి దశ."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education)లో 'తక్కువ పరిమిత వాతావరణం' (Least Restrictive Environment) అంటే ఏమిటి?",
        options: [
            "విద్యార్థిని ఇంట్లోనే బోధించడం",
            "వైకల్యం గల విద్యార్థిని సాధ్యమైనంతవరకు సాధారణ తరగతిలో బోధించడం",
            "ప్రత్యేక పాఠశాలలో మాత్రమే బోధించడం",
            "పరీక్షలు నిర్వహించకపోవడం"
        ],
        correct: 1,
        explanation: "Least Restrictive Environment ప్రకారం విద్యార్థిని సాధ్యమైనంత ఎక్కువ సమయం సాధారణ విద్యార్థులతో కలిసి బోధించాలి."
    },
    {
        question: "మేధో వైకల్యం (Intellectual Disability) గల విద్యార్థుల బోధనలో ముఖ్యంగా అభివృద్ధి చేయవలసిన నైపుణ్యాలు ఏవి?",
        options: [
            "జీవన నైపుణ్యాలు",
            "కేవలం కంఠస్థం",
            "ఉన్నత గణితం మాత్రమే",
            "విదేశీ భాషలు మాత్రమే"
        ],
        correct: 0,
        explanation: "స్వయం సంరక్షణ, సామాజిక నైపుణ్యాలు, దైనందిన జీవన నైపుణ్యాలు మేధో వైకల్యం గల విద్యార్థులకు అత్యంత ముఖ్యమైనవి."
    },
    {
        question: "RPWD Act, 2016 ప్రకారం విద్యలో వైకల్యం గల విద్యార్థులకు కల్పించాల్సిన ముఖ్య సూత్రం ఏది?",
        options: [
            "వివక్ష",
            "సమాన అవకాశాలు",
            "ప్రత్యేక పరీక్షలు మాత్రమే",
            "వేరుచేయడం"
        ],
        correct: 1,
        explanation: "RPWD Act విద్యలో వివక్ష లేకుండా సమాన అవకాశాలు మరియు అందుబాటు సౌకర్యాలను కల్పించాలని పేర్కొంటుంది."
    },
    {
        question: "ఒక విద్యార్థి సాధారణ మేధస్సు కలిగి ఉన్నప్పటికీ పదాలను సరిగ్గా చదవలేకపోతున్నాడు. ఇది ఎక్కువగా ఏ పరిస్థితిని సూచిస్తుంది?",
        options: [
            "మేధో వైకల్యం",
            "డిస్లెక్సియా (Dyslexia)",
            "శ్రవణ వైకల్యం",
            "సెరిబ్రల్ పాల్సీ"
        ],
        correct: 1,
        explanation: "సాధారణ మేధస్సు ఉన్నప్పటికీ చదవడంలో ప్రత్యేక ఇబ్బంది ఉండటం డిస్లెక్సియా యొక్క ప్రధాన లక్షణం."
    },
    {
        question: "సెరిబ్రల్ పాల్సీ (Cerebral Palsy) గల విద్యార్థికి తరగతి గదిలో ముఖ్యమైన మద్దతు ఏది?",
        options: [
            "భౌతిక ప్రాప్యత మరియు అనుకూల కూర్చోవడం",
            "బ్రెయిల్ పుస్తకాలు మాత్రమే",
            "సంకేత భాష మాత్రమే",
            "కేవలం మౌఖిక పరీక్ష"
        ],
        correct: 0,
        explanation: "సెరిబ్రల్ పాల్సీ గల విద్యార్థులకు భౌతిక ప్రాప్యత, అనుకూల ఫర్నిచర్ మరియు కదలికలకు సహకారం అవసరం."
    },
    {
        question: "డిస్గ్రాఫియా (Dysgraphia) గల విద్యార్థి మూల్యాంకనంలో ఉపాధ్యాయుడు ఏ సర్దుబాటు చేయవచ్చు?",
        options: [
            "అదనపు సమయం ఇవ్వడం",
            "పరీక్ష రాయకుండా చేయడం",
            "తక్కువ మార్కులు ఇవ్వడం",
            "విద్యార్థిని తరగతి నుండి తొలగించడం"
        ],
        correct: 0,
        explanation: "డిస్గ్రాఫియా ఉన్న విద్యార్థులకు అదనపు సమయం లేదా ప్రత్యామ్నాయ ప్రతిస్పందన విధానాలు ఉపయోగకరంగా ఉంటాయి."
    },
    {
        question: "సంకేత భాష (Sign Language) గురించి సరైన వాక్యం ఏది?",
        options: [
            "ఇది ప్రపంచవ్యాప్తంగా ఒకే విధంగా ఉంటుంది",
            "ఇది కేవలం అక్షరాల వ్యవస్థ",
            "ఇది దృశ్య-చలన ఆధారిత భాష",
            "ఇది బ్రెయిల్‌కు సమానం"
        ],
        correct: 2,
        explanation: "సంకేత భాష చేతి సంకేతాలు, ముఖ భావాలు మరియు శరీర కదలికల ద్వారా సంభాషించే పూర్తి భాషా వ్యవస్థ."
    },
    {
        question: "ప్రత్యేక అవసరాలు గల విద్యార్థుల కోసం బోధనలో మార్పులు చేయడాన్ని ఏమంటారు?",
        options: [
            "అనుకూలీకరణ (Accommodation)",
            "శిక్ష",
            "వర్గీకరణ",
            "నిరాకరణ"
        ],
        correct: 0,
        explanation: "అనుకూలీకరణ ద్వారా విద్యార్థి అవసరాలకు అనుగుణంగా బోధన, మూల్యాంకనం లేదా వాతావరణంలో మార్పులు చేస్తారు."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education) విజయవంతం కావడానికి అత్యంత ముఖ్యమైన అంశం ఏది?",
        options: [
            "విద్యార్థులను వేరు చేయడం",
            "ఉపాధ్యాయులు, తల్లిదండ్రులు మరియు సమాజం సహకారం",
            "కేవలం ప్రత్యేక ఉపాధ్యాయుడు",
            "పరీక్షల సంఖ్య పెంచడం"
        ],
        correct: 1,
        explanation: "సమగ్ర విద్య విజయవంతం కావడానికి పాఠశాల, తల్లిదండ్రులు, ఉపాధ్యాయులు మరియు సమాజం మధ్య సహకారం అవసరం."
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
        explanation: "డిస్లెక్సియా ప్రధానంగా చదవడం, పదాలను గుర్తించడం మరియు ధ్వని-అక్షర సంబంధాలను అర్థం చేసుకోవడాన్ని ప్రభావితం చేస్తుంది."
    },
    {
        question: "క్రింది వాటిలో దృష్టి వైకల్యం (Visual Impairment) గల విద్యార్థికి అనుకూలమైన బోధనా సామగ్రి ఏది?",
        options: [
            "సూక్ష్మ అక్షరాల పుస్తకాలు",
            "బ్రెయిల్ పుస్తకాలు",
            "వినికిడి యంత్రం",
            "సంకేత భాష చార్ట్"
        ],
        correct: 1,
        explanation: "బ్రెయిల్ లిపి దృష్టి వైకల్యం గల విద్యార్థులు చదవడానికి మరియు రాయడానికి ఉపయోగించే ప్రధాన సాధనం."
    },
    {
        question: "అభ్యాస వైకల్యం (Learning Disability) గురించి సరైన వాక్యం ఏది?",
        options: [
            "ఇది మేధో వైకల్యంతో సమానం",
            "ఇది ప్రత్యేక విద్యా నైపుణ్యాలను ప్రభావితం చేస్తుంది",
            "ఇది కేవలం శారీరక వైకల్యం",
            "ఇది తాత్కాలిక అనారోగ్యం"
        ],
        correct: 1,
        explanation: "అభ్యాస వైకల్యం చదవడం, రాయడం లేదా గణితం వంటి నిర్దిష్ట విద్యా నైపుణ్యాలను ప్రభావితం చేస్తుంది."
    },
    {
        question: "శ్రవణ వైకల్యం (Hearing Impairment) గల విద్యార్థితో సంభాషణలో ఉపాధ్యాయుడు ఏది పాటించాలి?",
        options: [
            "వెనక్కి తిరిగి మాట్లాడాలి",
            "ముఖం కప్పుకొని మాట్లాడాలి",
            "స్పష్టంగా ముఖాముఖిగా మాట్లాడాలి",
            "మాట్లాడకుండా సంకేతాలు మాత్రమే చేయాలి"
        ],
        correct: 2,
        explanation: "ముఖాముఖిగా స్పష్టంగా మాట్లాడడం ద్వారా పెదవుల కదలికలు మరియు ముఖ భావాలు అర్థం చేసుకోవడానికి సహాయపడుతుంది."
    },
    {
        question: "IEPలో నిర్దేశించిన లక్ష్యాలు ఎలా ఉండాలి?",
        options: [
            "అస్పష్టంగా ఉండాలి",
            "కొలవలేనివిగా ఉండాలి",
            "స్పష్టంగా మరియు కొలవదగినవిగా ఉండాలి",
            "విద్యార్థికి సంబంధం లేకుండా ఉండాలి"
        ],
        correct: 2,
        explanation: "IEP లక్ష్యాలు స్పష్టంగా, కొలవదగినవిగా మరియు విద్యార్థి అవసరాలకు అనుగుణంగా ఉండాలి."
    },
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) గల విద్యార్థులలో సాధారణంగా కనిపించే మరో లక్షణం ఏది?",
        options: [
            "సామాజిక సంభాషణలో ఇబ్బంది",
            "దృష్టి నష్టం",
            "వినికిడి నష్టం",
            "ఎముకల బలహీనత"
        ],
        correct: 0,
        explanation: "ASD గల విద్యార్థులలో సామాజిక సంభాషణ మరియు పరస్పర చర్యలలో ఇబ్బందులు ప్రధాన లక్షణాలు."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education)లో 'వైవిధ్యాన్ని గౌరవించడం' అంటే ఏమిటి?",
        options: [
            "అందరినీ ఒకే విధంగా చూడడం",
            "విద్యార్థుల భిన్న అవసరాలను గుర్తించి మద్దతు ఇవ్వడం",
            "వైకల్యం గల విద్యార్థులను వేరుచేయడం",
            "ప్రత్యేక పాఠశాలలకు పంపించడం"
        ],
        correct: 1,
        explanation: "సమగ్ర విద్యలో ప్రతి విద్యార్థి ప్రత్యేకతను గుర్తించి తగిన మద్దతు అందించడం ముఖ్యమైన సూత్రం."
    },
    {
        question: "మేధో వైకల్యం (Intellectual Disability) ఉన్న విద్యార్థుల మూల్యాంకనంలో ఏ అంశం ముఖ్యమైనది?",
        options: [
            "కేవలం పరీక్ష మార్కులు",
            "అనుకూల ప్రవర్తన మరియు కార్యనిర్వహణ నైపుణ్యాలు",
            "హాజరు మాత్రమే",
            "క్రీడా ప్రదర్శన మాత్రమే"
        ],
        correct: 1,
        explanation: "మేధో వైకల్యాన్ని అంచనా వేయడంలో అనుకూల ప్రవర్తన మరియు రోజువారీ జీవిత నైపుణ్యాలు ముఖ్యమైనవి."
    },
    {
        question: "డిస్గ్రాఫియా (Dysgraphia) ఉన్న విద్యార్థికి సహాయపడే పద్ధతి ఏది?",
        options: [
            "రాతపని మరింత పెంచడం",
            "సహాయక సాంకేతిక పరికరాల వినియోగం",
            "రాయడానికి అనుమతించకపోవడం",
            "తరగతి నుండి తొలగించడం"
        ],
        correct: 1,
        explanation: "కంప్యూటర్, కీబోర్డ్ లేదా ఇతర సహాయక పరికరాలు డిస్గ్రాఫియా ఉన్న విద్యార్థులకు ఉపయోగపడతాయి."
    },
    {
        question: "క్రింది వాటిలో సహాయక సాంకేతికత (Assistive Technology) కు ఉదాహరణ ఏది?",
        options: [
            "బ్రెయిల్ డిస్ప్లే",
            "చాక్ ముక్క",
            "హాజరు రిజిస్టర్",
            "పాఠ్యపుస్తకం కవర్"
        ],
        correct: 0,
        explanation: "బ్రెయిల్ డిస్ప్లే వంటి పరికరాలు వైకల్యం గల విద్యార్థుల అభ్యాసాన్ని సులభతరం చేసే సహాయక సాంకేతికతలు."
    },
    {
        question: "సమగ్ర తరగతి గదిలో సహ విద్యార్థుల సహకారం (Peer Support) వల్ల కలిగే ప్రయోజనం ఏమిటి?",
        options: [
            "విద్యార్థులను వేరుచేయడం",
            "సామాజిక మరియు విద్యా భాగస్వామ్యాన్ని పెంచడం",
            "పరీక్షలను రద్దు చేయడం",
            "ఉపాధ్యాయుని అవసరం తొలగించడం"
        ],
        correct: 1,
        explanation: "Peer Support ద్వారా విద్యార్థుల మధ్య పరస్పర సహకారం, సామాజిక అంగీకారం మరియు అభ్యాసం మెరుగుపడతాయి."
    },
    {
        question: "RPWD Act, 2016 యొక్క ప్రధాన లక్ష్యం ఏమిటి?",
        options: [
            "వైకల్యం గల వ్యక్తులను వేరుచేయడం",
            "వారి హక్కులను రక్షించడం మరియు సమాన అవకాశాలు కల్పించడం",
            "ప్రత్యేక పాఠశాలలను మాత్రమే ఏర్పాటు చేయడం",
            "విద్యను పరిమితం చేయడం"
        ],
        correct: 1,
        explanation: "RPWD Act వైకల్యం గల వ్యక్తుల హక్కులను రక్షించి సమాన అవకాశాలు మరియు భాగస్వామ్యాన్ని ప్రోత్సహిస్తుంది."
    },
    {
        question: "ఒక విద్యార్థి గణితంలో ఇబ్బంది పడుతున్నాడు కానీ చదవడం మరియు రాయడం సాధారణంగా ఉన్నాయి. ఇది ఎక్కువగా ఏ పరిస్థితిని సూచిస్తుంది?",
        options: [
            "డిస్లెక్సియా (Dyslexia)",
            "డిస్గ్రాఫియా (Dysgraphia)",
            "డిస్క్యాల్కులియా (Dyscalculia)",
            "ASD"
        ],
        correct: 2,
        explanation: "సంఖ్యలు, గణనలు మరియు గణిత భావనలలో ప్రత్యేక ఇబ్బంది డిస్క్యాల్కులియాకు ప్రధాన సూచన."
    },
    {
        question: "ప్రత్యేక అవసరాలు గల విద్యార్థి కోసం పాఠ్యాంశంలో లేదా బోధనలో మార్పులు చేయడాన్ని ఏమంటారు?",
        options: [
            "మోడిఫికేషన్ (Modification)",
            "శిక్ష",
            "వర్గీకరణ",
            "పదోన్నతి"
        ],
        correct: 0,
        explanation: "విద్యార్థి సామర్థ్యాలకు అనుగుణంగా పాఠ్యాంశం లేదా అభ్యాస అంచనాలను మార్చడాన్ని Modification అంటారు."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education) యొక్క అంతిమ లక్ష్యం ఏమిటి?",
        options: [
            "ప్రత్యేక తరగతుల సంఖ్య పెంచడం",
            "అందరు విద్యార్థుల పూర్తి భాగస్వామ్యం మరియు సమానత్వం",
            "విద్యార్థులను వర్గీకరించడం",
            "కేవలం విద్యా ఫలితాలను మెరుగుపరచడం"
        ],
        correct: 1,
        explanation: "సమగ్ర విద్య యొక్క లక్ష్యం అందరు విద్యార్థులు సమాన గౌరవంతో, పూర్తి భాగస్వామ్యంతో నేర్చుకునే వాతావరణాన్ని కల్పించడం."
    }
];