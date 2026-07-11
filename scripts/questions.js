const SUBJECTS = [
    "CDP",
    "English",
    "Telugu",
    "Special Education"
];

const QUESTIONS = [
    {
        "question": "శిశువులో తల నుండి పాదాల వైపునకు సాగే వికాస దిశ నియమాన్ని ఏమంటారు?",
        "options": [
            "సమీప-దూరస్థ వికాసం (Proximo-distal Development)",
            "శిరోపాదాభిముఖ వికాసం (Cephalo-caudal Development)",
            "సాధారణం నుండి నిర్దిష్ట వికాసం (General to Specific)",
            "పరస్పర సంబంధ సూత్రం (Principle of Interrelation)"
        ],
        "correct": 1,
        "explanation": "శిశువు వికాసం మొదట తలలో ప్రారంభమై తర్వాత క్రింది భాగాలకు విస్తరిస్తుంది. దీనిని శిరోపాదాభిముఖ వికాసం అంటారు. వికాస దిశను అర్థం చేసుకోవడానికి ఇది అత్యంత ప్రాథమిక నియమము."
    },
    {
        "question": "థోర్న్‌డైక్ ప్రతిపాదించిన అభ్యసన నియమాలలో 'ఉపయోగ-నిరుపయోగ నియమాలు' ఏ ప్రధాన నియమClass కిందకు వస్తాయి?",
        "options": [
            "సమాయత్తతా నియమం (Law of Readiness)",
            "ఫలిత నియమం (Law of Effect)",
            "అభ్యాస నియమం (Law of Exercise)",
            "బహుళ ప్రతిస్పందన నియమం (Law of Multiple Response)"
        ],
        "correct": 2,
        "explanation": "థోర్న్‌డైక్ అభ్యాస నియమాన్ని రెండు భాగాలుగా విభజించారు. ఒక ఉద్దీపన-ప్రతిస్పందన సంసర్గం పదేపదే పునరావృతమైతే అది బలపడుతుంది (ఉపయోగ నియమం), లేదంటే బలహీనపడుతుంది (నిరుపయోగ నియమం)."
    },
    {
        "question": "ఒక బాలుడి మానసిక వయస్సు (MA) 9 సంవత్సరాలు మరియు శారీరక వయస్సు (CA) 10 సంవత్సరాలు అయితే అతని ప్రజ్ఞాలబ్ధి (IQ) ఎంత?",
        "options": [
            "111",
            "90",
            "100",
            "80"
        ],
        "correct": 1,
        "explanation": "ప్రజ్ఞాలబ్ధి సూత్రం (MA/CA) * 100 ప్రకారం ఇక్కడ (9/10) * 100 లెక్కిస్తే 90 వస్తుంది. ఈ స్థాయి ప్రజ్ఞ కలవారిని సగటు కంటే తక్కువ ప్రజ్ఞావంతులుగా వర్గీకరిస్తారు."
    },
    {
        "question": "శాస్త్రీయ నిబంధనంలో నిబంధిత ఉద్దీపన (CS) కు మాత్రమే లాలాజలం స్రవించడం, ఇతర పోలిక ఉన్న ఉద్దీపనలను నిరోధించడాన్ని ఏమంటారు?",
        "options": [
            "ఉద్దీపన సామాన్యీకరణం (Stimulus Generalization)",
            "ఉద్దీపన విచక్షణ (Stimulus Discrimination)",
            "విరమణ (Extinction)",
            "ఆయత్నసిద్ధ స్వాస్థ్యం (Spontaneous Recovery)"
        ],
        "correct": 1,
        "explanation": "లాలాజలం కేవలం గంట శబ్దానికి మాత్రమే వచ్చి, ఇతర శబ్దాలకు రాకపోవడాన్ని ఉద్దీపన విచక్షణ అంటారు. ఇది జీవి ఒకే రకమైన ఉద్దీపనల మధ్య తేడాను గుర్తించడాన్ని సూచిస్తుంది."
    },
    {
        "question": "కింది వాటిలో ఏది కంప్యూటర్ సహాయక బోధన (CAI) లో ప్రత్యేక అవసరాలు గల పిల్లల కోసం ఉపయోగించే సహాయక సాంకేతికత (Assistive Technology) కాదు?",
        "options": [
            "స్క్రీన్ రీడింగ్ సాఫ్ట్‌వేర్ (JAWS)",
            "టాకింగ్ కీబోర్డ్ (Talking Keyboard)",
            "రిఫ్రెషబుల్ బ్రెయిలీ డిస్‌ప్లే (Refreshable Braille Display)",
            "ప్రామాణిక లేజర్ ప్రింటర్ (Standard Laser Printer)"
        ],
        "correct": 3,
        "explanation": "ప్రామాణిక లేజర్ ప్రింటర్ సాధారణ ముద్రణకు ఉపయోగపడుతుంది కానీ ప్రత్యేక అవసరాలు గల పిల్లల కోసం నిర్దేశించిన ప్రత్యేక సహాయక సాంకేతిక సాధనం కాదు. మిగిలిన మూడు అంధ విద్యార్థులకు తోడ్పడతాయి."
    },
    {
        "question": "ప్రత్యేక పాఠశాలల్లో ఐసిటి (ICT) ని ఉపయోగించి 'వ్యక్తిగత విద్యా ప్రణాళిక' (IEP) ని రూపొందించడం వల్ల కలిగే ప్రధాన ప్రయోజనం ఏమిటి?",
        "options": [
            "ఉపాధ్యాయులందరికీ ఒకే రకమైన బోధనను అందించడం",
            "పిల్లల ప్రగతిని డిజిటల్ రూపంలో ఖచ్చితంగా నమోదు చేసి విశ్లేషించడం",
            "పాఠశాల నిర్వహణ ఖర్చులను పూర్తిగా తగ్గించడం",
            "విద్యార్థుల శారీరక సామర్థ్యాన్ని నేరుగా పెంచడం"
        ],
        "correct": 1,
        "explanation": "డిజిటల్ సాధనాల ద్వారా IEP ని రూపొందించడం వల్ల ప్రతి ప్రత్యేక విద్యార్థి యొక్క శారీరక, మానసిక వికాస ప్రగతిని నిరంతరం పర్యవేక్షించడం మరియు అవసరమైన మార్పులు చేయడం సులువవుతుంది."
    },
    {
        "question": "పియాజే సంజ్ఞానాత్మక వికాస సిద్ధాంతం ప్రకారం, వస్తువు కంటికి కనిపించకపోయినా అది ఉనికిలోనే ఉంటుందని గ్రహించే 'వస్తు స్థిరత్వ భావన' (Object Permanence) ఏ దశలో ఏర్పడుతుంది?",
        "options": [
            "ఇంద్రియ చాలక దశ (Sensory Motor Stage)",
            "పూర్వ ప్రచాలక దశ (Pre-operational Stage)",
            "మూర్త ప్రచాలక దశ (Concrete Operational Stage)",
            "అమూర్త ప్రచాలక దశ (Formal Operational Stage)"
        ],
        "correct": 0,
        "explanation": "పియాజే ప్రకారం ఇంద్రియ చాలక దశ (0-2 సంవత్సరాలు) చివరి భాగంలో శిశువుకు వస్తు స్థిరత్వ భావన ఏర్పడుతుంది. వస్తువులు దాచినా అవి అక్కడే ఉన్నాయని వెతకడం ప్రారంభిస్తారు."
    },
    {
        "options": [
            "పరిపక్వత కేవలం పర్యావరణ కారకాలపైనే ఆధారపడుతుంది",
            "వికాసం పరిపక్వత మరియు అభ్యసనాల పరస్పర చర్య ఫలితం",
            "వికాసం అనేది శిక్షణ లేకుండానే గరిష్టంగా సాగుతుంది",
            "అభ్యసనం కేవలం శారీరక పెరుగుదలను మాత్రమే సూచిస్తుంది"
        ],
        "question": "పరిపక్వత (Maturation) మరియు వికాసం (Development) మధ్య గల సరైన సంబంధాన్ని గుర్తించండి.",
        "correct": 1,
        "explanation": "వికాసం అనేది వ్యక్తి యొక్క సహజ పరిపక్వత మరియు అతను పొందే అభ్యసన అనుభవాల కలయిక వల్ల సంభవిస్తుంది. పరిపక్వత పునాదిని ఇస్తే, అభ్యసనం దానికి ఆకారాన్ని ఇస్తుంది."
    },
    {
        "question": "వైగోట్‌స్కీ సిద్ధాంతం ప్రకారం, ఒక పిల్లవాడు స్వయంగా చేయలేని పనిని పెద్దల లేదా నిపుణుల సహాయంతో చేయగలిగే పరిధిని ఏమంటారు?",
        "options": [
            "స్వీయ నియంత్రణ మండలం (Zone of Self-regulation)",
            "సమీప వికాస మండలం (Zone of Proximal Development - ZPD)",
            "సమతుల్యత (Equilibration)",
            "అనుగుణ్యత (Accommodation)"
        ],
        "correct": 1,
        "explanation": "ZPD అనగా పిల్లవాడు సొంతంగా సాధించగల ప్రస్తుత వికాస స్థాయికి మరియు ఇతరుల సహాయంతో సాధించగల సంభావ్య వికాస స్థాయికి మధ్య గల వ్యత్యాసం లేదా పరిధి."
    },
    {
        "question": "కోహ్‌ల్‌బర్గ్ నైతిక వికాస సిద్ధాంతంలో 'మంచి బాలుడు/మంచి బాలిక' భావన ఏ నైతికత స్థాయికి చెందుతుంది?",
        "options": [
            "పూర్వ సాంప్రదాయ నైతికత (Pre-conventional Morality)",
            "సాంప్రదాయ నైతికత (Conventional Morality)",
            "ఉత్తర సాంప్రదాయ నైతికత (Post-conventional Morality)",
            "స్వీయ స్వీకృత నైతిక సూత్రాలు (Self-chosen Moral Principles)"
        ],
        "correct": 1,
        "explanation": "సాంప్రదాయ నైతికతలో భాగంగా సమాజం లేదా కుటుంబం నుండి మెప్పు పొందడం కోసం, ఇతరుల దృష్టిలో మంచిగా అనిపించడం కోసం పిల్లలు ప్రవర్తిస్తారు. ఇది మూడవ దశకు చెందుతుంది."
    },
    {
        "question": "ఒక ఉపాధ్యాయుడు తరగతి గదిలో అంధ విద్యార్థుల కోసం స్క్రీన్ రీడర్ సాఫ్ట్‌వేర్ సహాయంతో కంప్యూటర్ ఆధారిత పరీక్షను నిర్వహించారు. ఇది ఏ రకమైన విద్యా విధానం కిందకు వస్తుంది?",
        "options": [
            "మినహాయింపు విద్యా విధానం (Exclusive Education)",
            "సమగ్ర విద్యా విధానం (Inclusive Education)",
            "సాధారణ విద్యా విధానం (General Education)",
            "ప్రత్యేక విద్యా విధానం (Segregated Education)"
        ],
        "correct": 1,
        "explanation": "సమగ్ర విద్య (Inclusive Education) లో సాధారణ పిల్లలతో పాటు ప్రత్యేక అవసరాలు గల పిల్లలకు కూడా తగిన వసతులు కల్పించి ఒకే తరగతి గదిలో సమాన అభ్యసన అవకాశాలు అందిస్తారు."
    },
    {
        "question": "కింది వాటిలో ఏది అంతర్గత ప్రేరణకు (Intrinsic Motivation) సరైన ఉదాహరణ?",
        "options": [
            "ఉపాధ్యాయుని తిట్లు తప్పించుకోవడానికి హోంవర్క్ చేయడం",
            "మొదటి ర్యాంకు సాధించి నగదు బహుమతి పొందాలని చదవడం",
            "ఒక సబ్జెక్టుపై ఉన్న ఆసక్తి, జ్ఞానాన్ని పెంచుకోవాలనే ఉద్దేశంతో పుస్తకాలు చదవడం",
            "తల్లిదండ్రులు మొబైల్ కొనిస్తారని పరీక్షల్లో మంచి మార్కులు తేవడం"
        ],
        "correct": 2,
        "explanation": "బాహ్య బహుమతులు లేదా శిక్షల భయం లేకుండా, కేవలం సొంత ఆనందం, సంతృప్తి మరియు ఆసక్తి కోసం చేసే పనులను అంతర్గత ప్రేరణ ప్రేరేపిత పనులుగా పరిగణిస్తారు."
    },
    {
        "question": "ఎరిక్‌సన్ మనోసాంఘిక వికాస సిద్ధాంతం ప్రకారం, కౌమారదశలో (Adolescence) ఎదురయ్యే ప్రధాన మనోసాంఘిక క్లిష్ట పరిస్థితి ఏమిటి?",
        "options": [
            "శ్రమించడం వర్సెస్ न्यूनత (Industry vs Inferiority)",
            "పాత్ర తాదాత్మ్యం వర్సెస్ పాత్ర గందరగోళం (Identity vs Role Confusion)",
            "చొరవ వర్సెస్ తప్పుభావన (Initiative vs Guilt)",
            "నమ్మకం వర్సెస్ అవిశ్వాసం (Trust vs Mistrust)"
        ],
        "correct": 1,
        "explanation": "కౌమారదశలో పిల్లలు సమాజంలో తమకంటూ ఒక గుర్తింపును ఏర్పరచుకోవడానికి ప్రయత్నిస్తారు. ఇందులో విఫలమైతే పాత్ర గందరగోళానికి గురవుతారని ఎరిక్‌సన్ పేర్కొన్నారు."
    },
    {
        "question": "కింది వాటిలో ఏది వినికిడి లోపం ఉన్న విద్యార్థులకు ఉపయోగపడే మల్టీమీడియా ఐసిటి (ICT) సాధనం?",
        "options": [
            "ఆడియో పాడ్‌కాస్ట్‌లు (Audio Podcasts)",
            "సంకేత భాషా వీడియోలు మరియు క్లోజ్డ్ క్యాప్షన్లు (Sign Language Videos & Captions)",
            "రేడియో ప్రసారాలు (Radio Broadcasts)",
            "స్క్రీన్ రీడింగ్ టూల్స్ (Screen Reading Tools)"
        ],
        "correct": 1,
        "explanation": "వినికిడి లోపం గల పిల్లలు దృశ్య రూపంలో ఉన్న సమాచారాన్ని సులభంగా గ్రహిస్తారు. అందువల్ల క్యాప్షన్లు (సబ్‌టైటిల్స్) మరియు సంకేత భాష గల వీడియోలు వారికి ఉత్తమ ఐసిటి సాధనాలు."
    },
    {
        "question": "స్కిన్నర్ కార్యసాధక నిబంధన ప్రకారం, తరగతి గదిలో ఒక విద్యార్థి మంచి సమాధానం చెప్పినప్పుడు ఉపాధ్యాయుడు 'చాలా బాగుంది' అని ప్రశంసించడం ఏ రకమైన ఉపబలనం?",
        "options": [
            "ప్రతికూల ఉపబలనం (Negative Reinforcement)",
            "ధనాత్మక ఉపబలనం (Positive Reinforcement)",
            "శిక్ష (Punishment)",
            "విరమణ (Extinction)"
        ],
        "correct": 1,
        "explanation": "మంచి ప్రవర్తనను పునరావృతం చేయడానికి ప్రోత్సాహకరమైన బహుమతి లేదా ప్రశంసను అందించడాన్ని ధనాత్మక ఉపబలనం (Positive Reinforcement) అంటారు. ఇది అభ్యసనాన్ని వేగవంతం చేస్తుంది."
    },
    {
        "question": "ఒక ఉపాధ్యాయుడు బోధనా ప్రణాళికను రూపొందించేటప్పుడు బ్లూమ్స్ వర్గీకరణ (Bloom's Taxonomy) లోని ఏ రంగానికి అత్యధిక ప్రాధాన్యత ఇస్తారు?",
        "options": [
            "సంజ్ఞానాత్మక రంగం (Cognitive Domain)",
            "భావావేశ రంగం (Affective Domain)",
            "మానసిక చాలక రంగం (Psychomotor Domain)",
            "పైవన్నీ సమానంగా"
        ],
        "correct": 3,
        "explanation": "ఆధునిక సమగ్ర విద్యా విధానంలో విద్యార్థి యొక్క సర్వతోముఖాభివృద్ధి కోసం జ్ఞానం (సంజ్ఞానాత్మక), వైఖరులు (భావావేశ), మరియు నైపుణ్యాలు (మానసిక చాలక) అనే మూడు రంగాలకు సమాన ప్రాధాన్యత ఇవ్వాలి."
    },
    {
        "question": "ప్రత్యేక అవసరాలు గల పిల్లల కోసం డిజిటల్ లెర్నింగ్ మెటీరియల్స్ రూపొందించేటప్పుడు అనుసరించాల్సిన 'సార్వత్రిక అభ్యసన రూపకల్పన' (Universal Design for Learning - UDL) లో లేని సూత్రం ఏది?",
        "options": [
            "బహుళ ప్రాతినిధ్య మార్గాలు (Multiple Means of Representation)",
            "బహుళ ప్రదర్శన మరియు వ్యక్తీకరణ మార్గాలు (Multiple Means of Expression)",
            "ఒకే రకమైన కఠినమైన మూల్యాంకన మార్గం (Single Rigid Means of Assessment)",
            "బహుళ భాగస్వామ్య మార్గాలు (Multiple Means of Engagement)"
        ],
        "correct": 2,
        "explanation": "UDL సిద్ధాంతం ప్రకారం ప్రతి విద్యార్థి అవసరాలకు అనుగుణంగా అభ్యసన మరియు మూల్యాంకన విధానాలు సరళంగా, బహుళ రకాలుగా ఉండాలి కానీ కఠినంగా ఒకే విధంగా ఉండకూడదు."
    },
    {
        "question": "గతంలో నేర్చుకున్న విషయాలు ప్రస్తుత కొత్త అభ్యసనానికి ఎటువంటి ఆటంకం కలిగించకపోతే లేదా సహాయపడకపోతే ఆ అభ్యసన బదలాయింపును ఏమంటారు?",
        "options": [
            "అనుకూల బదలాయింపు (Positive Transfer)",
            "ప్రతికూల బదలాయింపు (Negative Transfer)",
            "శూన్య బదలాయింపు (Zero Transfer)",
            "ద్విపార్శ్వ బదలాయింపు (Bilateral Transfer)"
        ],
        "correct": 2,
        "explanation": "ఒక రంగంలోని అభ్యసనం మరొక రంగంలోని అభ్యసనాన్ని అనుకూలంగా గానీ, ప్రతికూలంగా గానీ ప్రభావితం చేయని పరిస్థితిని శూన్య అభ్యసన బదలాయింపు అంటారు."
    },
    {
        "question": "పిల్లల ఆలోచనా విధానంలో 'అహంకేంద్రవాదం' (Egocentrism) అనగా తన కోణం నుండి మాత్రమే ప్రపంచాన్ని చూడటం ఏ దశ యొక్క ముఖ్య లక్షణం?",
        "options": [
            "ఇంద్రియ చాలక దశ (Sensory Motor Stage)",
            "పూర్వ ప్రచాలక దశ (Pre-operational Stage)",
            "మూర్త ప్రచాలక దశ (Concrete Operational Stage)",
            "అమూర్త ప్రచాలక దశ (Formal Operational Stage)"
        ],
        "correct": 1,
        "explanation": "పూర్వ ప్రచాలక దశ (2-7 సంవత్సరాలు) లో పిల్లలు ఇతరుల ఆలోచనలు లేదా కోణాలను అర్థం చేసుకోలేరు. తాము చూసేదే, అనుకునేదే అందరికీ నిజమని నమ్ముతారు."
    },
    {
        "question": "కింది వాటిలో ఏది ఉపాధ్యాయ కేంద్రీకృత బోధనా పద్ధతి యొక్క లోపంగా పరిగణించబడుతుంది?",
        "options": [
            "విద్యార్థులు నిష్క్రియాత్మక శ్రోతలుగా (Passive Listeners) మారుతారు",
            "తరగతి గది క్రమశిక్షణ పూర్తిగా తప్పుతుంది",
            "సిలబస్ పూర్తి చేయడం అసాధ్యం అవుతుంది",
            "బోధనా ఉపకరణాల వాడకం చాలా ఎక్కువ అవుతుంది"
        ],
        "correct": 0,
        "explanation": "ఉపాధ్యాయ కేంద్రీకృత పద్ధతిలో (ఉదాహరణకు ఉపన్యాస పద్ధతి) ఉపాధ్యాయుడే క్రియాశీలకంగా ఉంటారు, విద్యార్థులు కేవలం వినడానికే పరిమితమై నిష్క్రియాత్మకంగా మారే ప్రమాదం ఉంది."
    },
    {
        "question": "బుద్ధిమాంద్యత (Intellectual Disability) గల పిల్లలకు కంప్యూటర్ ఆధారిత గేమ్స్ ద్వారా గణిత భావనలను బోధించడం ఏ రకమైన అభ్యసనానికి చెందుతుంది?",
        "options": [
            "సహజసిద్ధ అభ్యసనం (Natural Learning)",
            "ఆటల ద్వారా అభ్యసనం (Gamified Learning)",
            "ఆవిష్కరణ అభ్యసనం (Discovery Learning)",
            "సాంప్రదాయ ఉపన్యాస అభ్యసనం (Traditional Lecture Learning)"
        ],
        "correct": 1,
        "explanation": "ప్రత్యేక అవసరాలు గల పిల్లలకు గేమిఫైడ్ లెర్నింగ్ (Gamified Learning) ద్వారా విజువల్స్ ఉపయోగించి బోధించడం వల్ల వారి ఏకాగ్రత సమయం (Attention Span) పెరిగి భావనలు త్వరగా అర్థమవుతాయి."
    },
    {
        "question": "సృజనాత్మకత (Creativity) కలిగిన పిల్లలలో సాధారణంగా కనిపించే ఆలోచనా విధానం ఏది?",
        "options": [
            "సమరూప ఆలోచన (Convergent Thinking)",
            "విభిన్న ఆలోచన (Divergent Thinking)",
            "రైఖిక ఆలోచన (Linear Thinking)",
            "తార్కిక నిరపేక్ష ఆలోచన (Rigid Thinking)"
        ],
        "correct": 1,
        "explanation": "సృజనాత్మకత గల పిల్లలు ఒకే సమస్యకు అనేక రకాల వినూత్న పరిష్కారాలను ఆలోచించగలరు. దీనినే విభిన్న ఆలోచన లేదా డైవర్జెంట్ థింకింగ్ అని పిలుస్తారు."
    },
    {
        "question": "గెస్టాల్ట్ (Gestalt) మనోవిజ్ఞాన శాస్త్రవేత్తలు ప్రతిపాదించిన అభ్యసన సిద్ధాంతం ఏది?",
        "options": [
            "యత్నదోష అభ్యసన సిద్ధాంతం (Trial and Error)",
            "నిబంధిత ప్రతిస్పాందన సిద్ధాంతం (Classical Conditioning)",
            "అంతర్దృష్టి అభ్యసన సిద్ధాంతం (Insightful Learning)",
            "సాంఘిక అభ్యసన సిద్ధాంతం (Social Learning)"
        ],
        "correct": 2,
        "explanation": "కోహ్లర్ చింపాంజీలపై చేసిన ప్రయోగాల ద్వారా అంతర్దృష్టి అభ్యసనాన్ని ప్రతిపాదించారు. సమస్యను విడిభాగాలుగా కాకుండా సమగ్రంగా (గెస్టాల్ట్) చూసినప్పుడే అంతర్దృష్టి కలుగుతుందని వీరి వాదన."
    },
    {
        "question": "ఆర్టీఈ చట్టం 2009 (RTE Act 2009) ప్రకారం ప్రాథమిక పాఠశాలల్లో (1 నుండి 5 తరగతులు) ఉపాధ్యాయ-విద్యార్థి నిష్పత్తి (PTR) ఎంత ఉండాలి?",
        "options": [
            "1:35",
            "1:30",
            "1:40",
            "1:25"
        ],
        "correct": 1,
        "explanation": "ఉచిత మరియు నిర్బంధ విద్యా హక్కు చట్టం 2009 నిబంధనల ప్రకారం ప్రాథమిక పాఠశాల స్థాయిలో ప్రతి 30 మంది విద్యార్థులకు ఒక ఉపాధ్యాయుడు (1:30 నిష్పత్తి) ఉండాలి."
    },
    {
        "question": "మల్టిపుల్ ఇంటెలిజెన్స్ సిద్ధాంతాన్ని (Theory of Multiple Intelligences) ప్రతిపాదించిన శాస్త్రవేత్త ఎవరు?",
        "options": [
            "ఆల్ఫ్రెడ్ బినే (Alfred Binet)",
            "హోవార్డ్ గార్డ్‌నర్ (Howard Gardner)",
            "లూయిస్ థర్‌స్టన్ (Louis Thurstone)",
            "చార్లెస్ స్పియర్‌మన్ (Charles Spearman)"
        ],
        "correct": 1,
        "explanation": "హోవార్డ్ గార్డ్‌నర్ ప్రజ్ఞ అనేది ఒకే అంశం కాదని, మానవునిలో ఎనిమిది లేదా అంతకంటే ఎక్కువ రకాల స్వతంత్ర ప్రజ్ఞలు ఉంటాయని తన సిద్ధాంతంలో వివరించారు."
    },
    {
        "question": "పిల్లవాడు మొదట వస్తువులను చేత్తో పట్టుకోవడం, ఆ తర్వాత వేళ్లతో సన్నని వస్తువులను పట్టుకోవడం అనేది వికాస ఏ సూత్రాన్ని తెలుపుతుంది?",
        "options": [
            "వికాసం క్రమానుగతమైనది (Sequential)",
            "సాధారణ నుండి నిర్దిష్ట దిశగా సాగుతుంది (General to Specific)",
            "వికాసంలో వైయుక్తిక భేదాలు ఉంటాయి (Individual Differences)",
            "వికాసం ఏకీకృత మొత్తం (Integrated Process)"
        ],
        "correct": 1,
        "explanation": "శిశువు మొదట పెద్ద కండరాల నియంత్రణ (సాధారణ ప్రతిస్పందన) సాధించి, ఆ తర్వాతే చిన్న కండరాల లేదా వేళ్ల నియంత్రణ (నిర్దిష్ట ప్రతిస్పందన) సాధిస్తాడు."
    },
    {
        "question": "వినికిడి లోపం ఉన్న పిల్లల కోసం ఉపయోగించే సహాయక సాఫ్ట్‌వేర్లలో 'టెక్స్ట్-టు-స్పీచ్' (TTS) కు బదులుగా ఏ సాంకేతికత అత్యంత అనుకూలమైనది?",
        "options": [
            "స్పీచ్-టు-టెక్స్ట్ కన్వర్టర్ (Speech-to-Text Converter)",
            "ఆడియో డిస్క్రిప్షన్ (Audio Description)",
            "స్క్రీన్ మాగ్నిఫైయర్ (Screen Magnifier)",
            "వాయిస్ రికార్డర్ (Voice Recorder)"
        ],
        "correct": 0,
        "explanation": "వినికిడి లోపం ఉన్నవారికి ఉపాధ్యాయుడు మాట్లాడే మాటలు వినపడవు, కాబట్టి స్పీచ్-టు-టెక్స్ట్ సాంకేతికత ద్వారా మాట్లాడే మాటలను వెంటనే స్క్రీన్‌పై అక్షరాల రూపంలో చూసి చదవగలరు."
    },
    {
        "question": "కింది వాటిలో ఏది నిరంతర సమగ్ర మూల్యాంకనం (CCE) లోని 'నిర్మాణాత్మక మూల్యాంకనం' (Formative Assessment) సాధనం కాదు?",
        "options": [
            "పిల్లల డైరీ మరియు లఘు వ్యాసాలు",
            "ఉపాధ్యాయుని పరిశీలన నోట్స్",
            "వార్షిక లేదా సమిష్టి ముగింపు పరీక్ష (Summative Examination)",
            "ప్రాజెక్ట్ పనులు మరియు కృత్యాలు"
        ],
        "correct": 2,
        "explanation": "వార్షిక లేదా సమిష్టి పరీక్ష అనేది సమ్మేటివ్ అసెస్‌మెంట్‌కు చెందుతుంది. ఇది కోర్సు ముగింపులో మార్కులు లేదా గ్రేడుల కేటాయింపు కోసం నిర్వహిస్తారు."
    },
    {
        "question": "తరగతి గదిలో వెనుకబడిన లేదా అభ్యసన వైకల్యం ఉన్న విద్యార్థులను గుర్తించడానికి ఉపయోగించే ఉత్తమ పద్ధతి ఏది?",
        "options": [
            "లోపనిర్ధారణ పరీక్షలు (Diagnostic Tests)",
            "పోటీ పరీక్షలు (Competitive Exams)",
            "ఆప్టిట్యూడ్ పరీక్షలు (Aptitude Tests)",
            "సాధారణ వార్షిక పరీక్షలు (Annual Exams)"
        ],
        "correct": 0,
        "explanation": "లోపనిర్ధారణ పరీక్షల (Diagnostic Tests) ద్వారా విద్యార్థికి ఏ నిర్దిష్ట అంశంలో లేదా ఏ విభాగంలో సమస్య ఉందో ఖచ్చితంగా గుర్తించి, దానికి తగిన నివారణ బోధన అందించవచ్చు."
    },
    {
        "question": "భావప్రసార లోపాలు (Communication Disorders) ఉన్న పిల్లలకు వాక్ చికిత్స (Speech Therapy) లో సహాయపడే ఐసిటి (ICT) యాప్ ఏది?",
        "options": [
            "టాక్ ఎనేబుల్డ్ యాప్స్ (Augmentative and Alternative Communication - AAC Apps)",
            "గణిత కాలిక్యులేటర్లు (Mathematical Calculators)",
            "జియోజీబ్రా సాఫ్ట్‌వేర్ (GeoGebra)",
            "సి-మాప్ టూల్స్ (C-Map Tools)"
        ],
        "correct": 0,
        "explanation": "AAC యాప్స్ చిత్రాలు మరియు చిహ్నాల ద్వారా మాట్లాడలేని పిల్లలకు తమ భావాలను డిజిటల్ వాయిస్ రూపంలో వ్యక్తపరచడానికి సహాయపడతాయి, ఇది వారి కమ్యూనికేషన్‌ను సులభతరం చేస్తుంది."
    },
    {
        "question": "కింది పద్య భాగాన్ని చదివి ఇచ్చిన ప్రశ్నకు సరైన సమాధానం గుర్తించండి:\n'అల్పుడెపుడు పల్కు నాడంబరము గాను\nసజ్జనుండు పల్కు చల్లగాను\nకంచు మ్రోగినట్లు కనకంబు మ్రోగునా\nవిశ్వదాభిరామ వినురవేమ!'\nఈ పద్యంలో కవి కంచుతో ఎవరిని పోల్చాడు?",
        "options": [
            "సజ్జనుడు",
            "అల్పుడు",
            "కనకము",
            "వేమన"
        ],
        "correct": 1,
        "explanation": "వేమన పద్యం ప్రకారం అల్పుడు ఎల్లప్పుడూ ఆడంబరంగా మాట్లాడతాడని, అది కంచు మోగినట్లు ఉంటుందని, సజ్జనుడి మాట బంగారంలా నిశ్శబ్దంగా, చల్లగా ఉంటుందని వివరించబడింది."
    },
    {
        "question": "'సజ్జనుండు' అనే పదానికి సరైన సంధి విడదీ రూపాన్ని గుర్తించండి.",
        "options": [
            "సత్ + జనుడు",
            "సజ + జనుడు",
            "సజ్జ + నుడు",
            "సదా + జనుడు"
        ],
        "correct": 0,
        "explanation": "'సత్ + జనుడు = సజ్జనుడు' ఇది శ్చుత్వ సంధికి ఉదాహరణ. త్-కారానికి జ్-కారం పరమైనప్పుడు జ్-కారం ఆదేశంగా వస్తుంది."
    },
    {
        "question": "'లాటానుప్రాస అలంకారం' కు సరైన ఉదాహరణను కింది వాటిలో గుర్తించండి.",
        "options": [
            "కమలాక్షు నర్చించు కరములు కరములు",
            "చిలుకలకొలికి ఆ నల్లని నల్లని జడను ముడిచింది",
            "అనఘా! నీ అనురాగం అమృతం",
            "రాజు కువలయానందకరుడు"
        ],
        "correct": 0,
        "explanation": "తాత్పర్య భేదంతో ఒకే పదం వెంటవెంటనే ప్రయోగించబడితే దానిని లాటానుప్రాస అలంకారం అంటారు. ఇక్కడ 'కరములు కరములు' అనగా చేతులే నిజమైన చేతులు అని అర్థం."
    },
    {
        "question": "'సూర్యచంద్రులు' అనేది ఏ సమాసానికి ఉదాహరణ?",
        "options": [
            "తత్పురుష సమాసం",
            "ద్వంద్వ సమాసం",
            "ద్విగు సమాసం",
            "బహువ్రీహి సమాసం"
        ],
        "correct": 1,
        "explanation": "ఉభయ పదార్థ ప్రధానం ద్వంద్వః. సమాసంలోని రెండు పదాలకూ సమాన ప్రాధాన్యత ఉంటే దానిని ద్వంద్వ సమాసం అంటారు. సూర్యుడును, చంద్రుడును అని దీని విగ్రహవాక్యం."
    },
    {
        "question": "కింది వాటిలో 'అవ్యయీభావ సమాసం' కు సరైన ఉదాహరణ ఏది?",
        "options": [
            "యథాశక్తి",
            "రాజప్రసాదము",
            "ముల్లోకములు",
            "నీలోత్పలము"
        ],
        "correct": 0,
        "explanation": "పూర్వపద ప్రాధాన్యత కలిగి, అవ్యయం పూర్వపదంగా ఉన్న సమాసాన్ని అవ్యయీభావ సమాసం అంటారు. 'యథాశక్తి' అనగా శక్తిని అనుసరించి అని అర్థం."
    },
    {
        "question": "'కన్నుల పండుగ' అనే జాతీయానికి సరైన అర్థాన్ని గుర్తించండి.",
        "options": [
            "కళ్లకు జబ్బు చేయడం",
            "చూడటానికి ఎంతో అందంగా, ఆనందంగా ఉండటం",
            "రాత్రి పూట నిద్రపోకపోవడం",
            "ఒకరిని చూసి అసూయపడటం"
        ],
        "correct": 1,
        "explanation": "'కన్నుల పండుగ' అనగా దృశ్యం ఎంతో మనోహరంగా, కళ్లకు ఎనలేని ఆనందాన్ని ఇచ్చే విధంగా ఉందనే సందర్భంలో ఈ జాతీయాన్ని ఉపయోగిస్తారు."
    },
    {
        "question": "'అమృతం' అనే పదానికి సరైన ప్రకృతి-వికృతి జంటను గుర్తించండి.",
        "options": [
            "అమృతం - అమృతం",
            "అమృతం - అమిర్తం",
            "అమృతం - అమృతుడు",
            "అమృతం - మాధుర్యం"
        ],
        "correct": 1,
        "explanation": "సంస్కృత పదాలు ప్రకృతి కాగా, వాటి నుండి పుట్టిన తెలుగు రూపాలు వికృతులు. 'అమృతం' అనే ప్రకృతి పదానికి వికృతి రూపం 'అమిర్తం' లేదా 'అమృతంబు'."
    },
    {
        "question": "కింది వాక్యాలలో 'ఆశ్చర్యార్థక వాక్యం' (Exclamatory Sentence) ను గుర్తించండి.",
        "options": [
            "ఆహా! ఆ హిమాలయ పర్వతాలు ఎంత ఎత్తుగా ఉన్నాయో!",
            "దయచేసి నాకు సహాయం చేయండి.",
            "నీవు రేపు బడికి వస్తావా?",
            "సూర్యుడు తూర్పున ఉదయిస్తాడు."
        ],
        "correct": 0,
        "explanation": "మనసులోని ఆశ్చర్యం, భయం లేదా సంతోషాన్ని వ్యక్తపరిచే వాక్యాలను ఆశ్చర్యార్థక వాక్యాలు అంటారు. దీని చివర ఆశ్చర్యార్థక గుర్తు (!) ఉంటుంది."
    },
    {
        "question": "'విద్యార్థి' అనే పదంలో ఉన్న సంధి ఏది?",
        "options": [
            "గుణ సంధి",
            "సవర్ణదీర్ఘ సంధి",
            "యణాదేశ సంధి",
            "వృద్ధి సంధి"
        ],
        "correct": 1,
        "explanation": "విద్యా + అర్థి = విద్యార్థి. అ, ఇ, ఉ, ఋ లకు అవియే అచ్చులు పరమైనప్పుడు వాటి దీర్ఘం ఏకాదేశమగును. కావున ఇది సవర్ణదీర్ఘ సంధి."
    },
    {
        "question": "కింది వాటిలో 'ఉత్పలమాల' పద్య పాదానికి ఉండే గణ విభజన క్రమం ఏది?",
        "options": [
            "భ ర న భ భ ర వ",
            "న జ భ జ జ జ ర",
            "మ స జ స త త గ",
            "చ భ ర న మ య వ"
        ],
        "correct": 0,
        "explanation": "ఉత్పలమాల వృత్త పద్యానికి ప్రతి పాదంలో 'భ-ర-న-భ-భ-ర-వ' అనే గణాలు వరుసగా వస్తాయి. ఇందులో మొత్తం 20 అక్షరాలు ఉంటాయి, 10వ అక్షరం యతి స్థానం."
    },
    {
        "question": "భాషా బోధనలో 'శ్రవణ నైపుణ్యం' (Listening Skill) పెంపొందించడానికి ఉపాధ్యాయుడు ఉపయోగించదగిన ఉత్తమ కృత్యం ఏది?",
        "options": [
            "విద్యార్థులతో వ్యాసాలు రాయించడం",
            "కథలను క్షుణ్ణంగా వినిపించి వాటిపై ప్రశ్నలు అడగడం",
            "పాఠ్యపుస్తకాన్ని పెద్దగా చదవమనడం",
            "బోర్డుపై ఉన్న అక్షరాలను చూసి రాయమనడం"
        ],
        "correct": 1,
        "explanation": "శ్రవణ నైపుణ్యం అనేది వినడానికి సంబంధించింది. కథలను శ్రద్ధగా వినిపించి, వాటిపై తిరిగి ప్రశ్నలు అడగడం వల్ల విద్యార్థులలో శ్రవణ, అవగాహన సామర్థ్యాలు పెరుగుతాయి."
    },
    {
        "question": "'ఉపాధ్యాయుడు పాఠాన్ని బోధించాడు' - ఈ వాక్యానికి సరైన కర్మణి వాక్యం (Passive Voice) గుర్తించండి.",
        "options": [
            "ఉపాధ్యాయుని చేత పాఠం బోధించబడింది",
            "పాఠం ఉపాధ్యాయునికి బోధించింది",
            "ఉపాధ్యాయుడు పాఠాన్ని రాయించాడు",
            "పాఠం ఉపాధ్యాయుని ద్వారా వినబడింది"
        ],
        "correct": 0,
        "explanation": "కర్తరి వాక్యాన్ని కర్మణి వాక్యంగా మార్చేటప్పుడు కర్తకు 'చేత' వర్ణకం చేరాలి, కర్మ ప్రథమా విభక్తిలోకి మారాలి మరియు క్రియకు 'బడు' అనే ధాతువు చేరాలి."
    },
    {
        "question": "'హస్తము' అనే పదానికి సరైన పర్యాయపదాల జంటను గుర్తించండి.",
        "options": [
            "కరం, చెయ్యి",
            "పాదం, చరణం",
            "నేత్రం, నయనం",
            "శిరస్సు, మస్తకం"
        ],
        "correct": 0,
        "explanation": "ఒకే అర్థాన్ని ఇచ్చే విభిన్న పదాలను పర్యాయపదాలు అంటారు. 'హస్తము' అనగా కరము, చెయ్యి, పాణి అని అర్థాలు వస్తాయి."
    },
    {
        "question": "కింది వాటిలో 'ద్విగు సమాసం' కు సరైన ఉదాహరణ ఏది?",
        "options": [
            "నవరాత్రులు",
            "తల్లీదండ్రులు",
            "మహాత్ముడు",
            "రామబాణము"
        ],
        "correct": 0,
        "explanation": "సంఖ్యా పూర్వో ద్విగుః. సమాసంలో పూర్వపదం సంఖ్యను సూచిస్తే దానిని ద్విగు సమాసం అంటారు. 'నవరాత్రులు' అనగా తొమ్మిది సంఖ్య గల రాత్రులు."
    },
    {
        "question": "'ఆశ' అనే పదానికి సరైన వ్యతిరేక పదాన్ని గుర్తించండి.",
        "options": [
            "నిరాశ",
            "దురాశ",
            "అత్యాశ",
            "పేరాశ"
        ],
        "correct": 0,
        "explanation": "'ఆశ' అనే పదానికి 'నిర్' అనే ఉపసర్గ చేరడం వల్ల వ్యతిరేక రూపమైన 'నిరాశ' ఏర్పడుతుంది. దురాశ, అత్యాశ అనేవి వ్యతిరేక పదాలు కావు, తీవ్రతను తెలిపేవి."
    },
    {
        "question": "ప్రాథమిక స్థాయి తెలుగు బోధనలో 'అక్షర పద్ధతి' (Alphabet Method) లోని ప్రధాన లోపం ఏమిటి?",
        "options": [
            "ఇది చాలా వేగంగా అభ్యసించడానికి తోడ్పడుతుంది",
            "వర్ణమాలలోని విడి అక్షరాలు నేర్చుకోవడం వల్ల పిల్లలకు అభ్యసనంపై ఆసక్తి తగ్గుతుంది",
            "ఇది కేవలం వ్యాకరణ బోధనకు మాత్రమే పరిమితం",
            "దీని ద్వారా ఉచ్ఛారణ దోషాలు అస్సలు రావు"
        ],
        "correct": 1,
        "explanation": "అక్షర పద్ధతిలో విడివిడి అక్షరాలను మొదట నేర్పడం వల్ల అర్థరహితంగా అనిపించి ప్రాథమిక స్థాయి పిల్లలు త్వరగా విసుగు చెందుతారు. పద పద్ధతి దీనికంటే ఉత్తమమైనది."
    },
    {
        "question": "'అమ్మ కొడుకు కొరకు అన్నం వండింది' - ఈ వాక్యంలో 'కొరకు' అనేది ఏ విభక్తికి చెందుతుంది?",
        "options": [
            "ప్రథమా విభక్తి",
            "తృతీయ విభక్తి",
            "చతుర్థీ విభక్తి",
            "పంచమీ విభక్తి"
        ],
        "correct": 2,
        "explanation": "తెలుగు వ్యాకరణం ప్రకారం 'కొఱకున్, కై' అనే ప్రత్యయాలు చతుర్థీ విభక్తికి చెందుతాయి. ఇక్కడ కొడుకు ప్రయోజనం కోసం పని జరిగింది కాబట్టి ఇది చతుర్థి."
    },
    {
        "question": "'ఉప్పొంగిపోయింది గోదావరి' అనేది ఏ రకమైన వాక్యం?",
        "options": [
            "సాధారణ వాక్యం",
            "క్రియారహిత వాక్యం",
            "సంయుక్త వాక్యం",
            "సంక్లిష్ట వాక్యం"
        ],
        "correct": 0,
        "explanation": "ఒకే ఒక సమాపక క్రియ కలిగి ఉండి, పూర్ణమైన అర్థాన్ని ఇచ్చే వాక్యాన్ని సాధారణ వాక్యం అంటారు. ఇక్కడ 'ఉప్పొంగిపోయింది' అనేది సమాపక క్రియ."
    },
    {
        "question": "కింది వాటిలో 'ఉత్ప్రేక్షాలంకారం' యొక్క ప్రధాన లక్షణం ఏమిటి?",
        "options": [
            "ఉపమేయ ఉపమానాలకు చక్కని పోలిక చెప్పడం",
            "ఉపమేయాన్ని ఉపమానంగా ఊహించి చెప్పడం",
            "అక్షరాల పునరావృతం కలిగి ఉండటం",
            "ఒకే పదానికి అనేక అర్థాలు కలిగి ఉండటం"
        ],
        "correct": 1,
        "explanation": "సంభావన మథోత్ప్రేక్షా. ఉపమేయాన్ని మరొక దానిగా ఊహించి చెప్పడాన్ని ఉత్ప్రేక్షాలంకారం అంటారు. ఇందులో సాధారణంగా 'అన్నట్లు', 'ఏమో' అనే ఊహాత్మక పదాలు వస్తాయి."
    },
    {
        "question": "'కవి' అనే పదానికి స్త్రీలింగ రూపం కింది వాటిలో ఏది?",
        "options": [
            "కవయిత్రి",
            "కవిని",
            "కవిపత్ని",
            "కవయిత్రిణి"
        ],
        "correct": 0,
        "explanation": "తెలుగు భాషా నియమాల ప్రకారం 'కవి' అనే పుంలింగ పదానికి సరైన స్త్రీలింగ రూపం 'కవయిత్రి'. దీనిని రాసేటప్పుడు అక్షర దోషాలు లేకుండా చూసుకోవాలి."
    },
    {
        "question": "భాషా నైపుణ్యాల సరైన క్రమాన్ని (LSRW) తెలుగులో గుర్తించండి.",
        "options": [
            "రాయడం, చదవడం, మాట్లాడటం, వినడం",
            "వినడం, మాట్లాడటం, చదవడం, రాయడం",
            "మాట్లాడటం, వినడం, రాయడం, చదవడం",
            "చదవడం, రాయడం, వినడం, మాట్లాడటం"
        ],
        "correct": 1,
        "explanation": "భాషా గ్రహణ మరియు వ్యక్తീകരണ ప్రక్రియలో సహజమైన క్రమం శ్రవణం (వినడం), భాషణం (మాట్లాడటం), పఠనం (చదవడం), మరియు లేఖనం (రాయడం)."
    },
    {
        "question": "'గురుశిష్యులు' విగ్రహవాక్యం రాయండి.",
        "options": [
            "గురువు మరియు శిష్యుడు",
            "గురువు యొక్క శిష్యుడు",
            "గురువు కొరకు శిష్యుడు",
            "గురువు నందు శిష్యుడు"
        ],
        "correct": 0,
        "explanation": "'గురుశిష్యులు' అనేది ద్వంద్వ సమాసం. కావున దీని విగ్రహవాక్యం రాసేటప్పుడు రెండు పదాల ప్రాధాన్యతను తెలుపుతూ 'మరియు' లేదా 'ను, ను' చేర్చాలి."
    },
    {
        "question": "'సముద్రము' అనే పదానికి కింది వాటిలో వికృతి పదం ఏది?",
        "options": [
            "సంద్రము",
            "సాగరము",
            "జలధి",
            "వార్ధి"
        ],
        "correct": 0,
        "explanation": "'సముద్రము' అనే సంస్కృత ప్రకృతి పదం రూపాంతరం చెంది తెలుగులో 'సంద్రము' అనే వికృతి పదంగా మారింది. మిగిలినవన్నీ పర్యాయపదాలు."
    },
    {
        "question": "'చెట్టు' అనే పదానికి బహువచన రూపం ఏది?",
        "options": [
            "చెట్టులు",
            "చెట్లు",
            "చెట్లకు",
            "చెట్టూలు"
        ],
        "correct": 1,
        "explanation": "తెలుగులో ట-కారాంత పదాలకు బహువచన 'లు' పరమైనప్పుడు లుప్తమై 'ట్లు' గా మారుతుంది. కావున 'చెట్టు + లు = చెట్లు' అవుతుంది."
    },
    {
        "question": "కింది వాటిలో 'ధారణ' (Retention) ను పెంపొందించే ఉత్తమ పఠన పద్ధతి ఏది?",
        "options": [
            "పైపైన చదవడం (Skimming)",
            "అర్థం చేసుకొంటూ లయబద్ధంగా క్షుణ్ణంగా చదవడం (Intensive Reading)",
            "కేవలం బొమ్మలు చూడటం",
            "శబ్దం చేయకుండా నిద్రపోతూ చదవడం"
        ],
        "correct": 1,
        "explanation": "విషయాన్ని విశ్లేషిస్తూ, అర్థం చేసుకుంటూ లోతుగా చదవడం (Intensive Reading) వల్ల మెదడులో సమాచారం ఎక్కువ కాలం నిల్వ ఉంటుంది, అనగా ధారణ పెరుగుతుంది."
    },
    {
        "question": "'సూర్యుడు తూర్పున ఉదయిస్తాడు' అనేది ఏ రకమైన కాలానికి సంబంధించిన వాక్యం?",
        "options": [
            "భూతకాలం",
            "భవిష్యత్ కాలం",
            "తద్ధర్మ కాలం",
            "వర్తమాన కాలం"
        ],
        "correct": 2,
        "explanation": "నిత్య సత్యాలు, ప్రకృతి నియమాలు మరియు అలవాట్లను తెలిపే క్రియలను తద్ధర్మ కాలంలో పేర్కొంటారు. ఇది అన్ని కాలాలకూ వర్తిస్తుంది."
    },
    {
        "question": "'రమేశ్ బడికి వెళ్లి, చదువుకొని, ఇంటికి వచ్చాడు' - ఈ వాక్యంలో 'వెళ్లి', 'చదువుకొని' అనేవి ఏ రకమైన క్రియలు?",
        "options": [
            "సమాపక క్రియలు",
            "అసమాపక క్రియలు",
            "కర్మక క్రియలు",
            "సహాయక క్రియలు"
        ],
        "correct": 1,
        "explanation": "వాక్యం యొక్క అర్థాన్ని పూర్తిగా ముగించని క్రియలను అసమాపక క్రియలు అంటారు. ఇక్కడ వెళ్లి, చదువుకొని అనేవి వాక్యం ఇంకా ఉందని సూచిస్తాయి."
    },
    {
        "question": "'పగలు' అనే పదానికి సరైన వ్యతిరేక పదం ఏది?",
        "options": [
            "రాత్రి",
            "సాయంత్రం",
            "ఉదయం",
            "మధ్యాహ్నం"
        ],
        "correct": 0,
        "explanation": "కాల విభజన పరంగా వెలుతురు ఉండే సమయాన్ని పగలు అని, చీకటిగా ఉండే సమయాన్ని రాత్రి అని అంటారు. ఇవి పరస్పర వ్యతిరేక పదాలు."
    },
    {
        "question": "తెలుగు బోధనా పద్ధతులలో 'నాటకీకరణ' (Role Play) వల్ల విద్యార్థిలో ఏ సామర్థ్యం అత్యధికంగా పెరుగుతుంది?",
        "options": [
            "కేవలం లేఖన నైపుణ్యం",
            "మౌఖిక వ్యక్తീകരണ నైపుణ్యం మరియు ఆత్మవిశ్వాసం",
            "నిఘంటువును చూసే నైపుణ్యం",
            "కఠిన పదాల సంధి విడదీసే నైపుణ్యం"
        ],
        "correct": 1,
        "explanation": "నాటకీకరణ ద్వారా విద్యార్థులు పాత్రల్లో లీనమై స్వంతంగా మాట్లాడటం వల్ల వారి ఉచ్ఛారణ దోషాలు పోయి, సంభాషణా చాతుర్యం మరియు నైపుణ్యాలు మెరుగవుతాయి."
    },
    {
        "question": "వ్యాకరణ బోధనలో మొదట ఉదాహరణలను ఇచ్చి, వాటిని విశ్లేషించడం ద్వారా సూత్రాన్ని రాబట్టే పద్ధతిని ఏమంటారు?",
        "options": [
            "నిగమనోపపత్తి పద్ధతి (Deductive Method)",
            "ఆగమనోపపత్తి పద్ధతి (Inductive Method)",
            "ఉపన్యాస పద్ధతి (Lecture Method)",
            "కథన పద్ధతి (Storytelling Method)"
        ],
        "correct": 1,
        "explanation": "ప్రత్యేక ఉదాహరణల నుండి సామాన్య సూత్రానికి వెళ్లే పద్ధతిని ఆగమన పద్ధతి అంటారు. ఇది ప్రాథమిక మరియు మాధ్యమిక స్థాయి పిల్లలకు వ్యాకరణం సులభంగా అర్థం కావడానికి ఉత్తమమైనది."
    },
    {
        "question": "Choose the correct sentence that is in the Passive Voice.",
        "options": [
            "The teacher evaluated the answer sheets carefully.",
            "The answer sheets were evaluated carefully by the teacher.",
            "The teacher was evaluating the answer sheets carefully.",
            "The teacher has evaluated the answer sheets carefully."
        ],
        "correct": 1,
        "explanation": "The passive voice structure for Simple Past tense is 'Object + was/were + V3 + by + Subject'. Option B perfectly follows this rule with 'were evaluated'."
    },
    {
        "question": "Identify the word with the correct spelling from the options given below.",
        "options": [
            "Entrepreneur",
            "Enterpreneur",
            "Entreperneur",
            "Entreprenuer"
        ],
        "correct": 0,
        "explanation": "The correct spelling is 'Entrepreneur', which refers to a person who sets up a business or businesses, taking on financial risks in the hope of profit."
    },
    {
        "question": "Fill in the blank with the correct conditional clause: 'If you studied well, you _______ the examination.'",
        "options": [
            "will pass",
            "would pass",
            "would have passed",
            "pass"
        ],
        "correct": 1,
        "explanation": "This is a Second Conditional sentence (hypothetical/unreal past). The structure is 'If + Simple Past, would + V1 base verb'. Therefore, 'would pass' is correct."
    },
    {
        "question": "Choose the correct preposition to fill in the blank: 'The school principal distributed the prizes _______ the three winners.'",
        "options": [
            "between",
            "among",
            "with",
            "through"
        ],
        "correct": 1,
        "explanation": "'Between' is used for two people or things, whereas 'among' is used when distributing or discussing more than two entities. Here we have 'three winners'."
    },
    {
        "question": "Identify the part of speech of the underlined word: 'Wow! That was an amazing performance by the special children.'",
        "options": [
            "Adjective",
            "Conjunction",
            "Interjection",
            "Adverb"
        ],
        "correct": 2,
        "explanation": "Words that express sudden emotions or feelings like joy, sorrow, or surprise are called interjections. 'Wow!' is followed by an exclamation mark, confirming it."
    },
    {
        "question": "Choose the correct antonym for the underlined word: 'The individual education plan must be flexible.'",
        "options": [
            "Rigid",
            "Elastic",
            "Adaptable",
            "Variable"
        ],
        "correct": 0,
        "explanation": "The word 'flexible' means able to be changed or adapted easily. Its direct opposite or antonym is 'rigid', which means stiff and unyielding."
    },
    {
        "question": "Change the following direct speech into indirect speech: 'She said, \"I am preparing a lesson plan today.\"'",
        "options": [
            "She said that she is preparing a lesson plan today.",
            "She said that she was preparing a lesson plan that day.",
            "She said that I was preparing a lesson plan that day.",
            "She told that she has been preparing a lesson plan today."
        ],
        "correct": 1,
        "explanation": "In indirect speech, Present Continuous changes to Past Continuous ('am preparing' becomes 'was preparing'), pronouns shift ('I' to 'she'), and 'today' becomes 'that day'."
    },
    {
        "question": "Fill in the blank with the correct article: 'He is _______ honorable member of the rehabilitation council.'",
        "options": [
            "a",
            "an",
            "the",
            "no article needed"
        ],
        "correct": 1,
        "explanation": "The word 'honorable' begins with a silent 'h'. Since the initial sound is a vowel sound (/ɒ/), the indefinite article 'an' must be used."
    },
    {
        "question": "Identify the sentence that represents the Present Perfect Tense.",
        "options": [
            "The inclusive education project started last year.",
            "The special educators have completed the training module.",
            "The students are writing their exams now.",
            "The speech therapist will visit the school tomorrow."
        ],
        "correct": 1,
        "explanation": "The Present Perfect Tense structure is 'Subject + has/have + V3 (Past Participle)'. Option B uses 'have completed', perfectly matching this grammatical requirement."
    },
    {
        "question": "What is the primary objective of 'Skimming' as a reading strategy?",
        "options": [
            "To locate specific information or names in a text.",
            "To read every word with absolute detailed comprehension.",
            "To quickly read through a text to get the general gist or main idea.",
            "To analyze the grammatical structure of sentences."
        ],
        "correct": 2,
        "explanation": "Skimming involves running one's eyes quickly over a text to capture the overall meaning or core message without pausing for structural detail."
    },
    {
        "question": "Choose the synonym for the word 'Inclusion' in an educational context.",
        "options": [
            "Integration",
            "Exclusion",
            "Segregation",
            "Separation"
        ],
        "correct": 0,
        "explanation": "In an educational context, 'inclusion' closely aligns with 'integration', meaning bringing diverse learners together into a unified framework, opposite to segregation."
    },
    {
        "question": "Complete the sentence with the appropriate relative pronoun: 'The audiologist _______ tested the child's hearing was very experienced.'",
        "options": [
            "which",
            "whom",
            "who",
            "whose"
        ],
        "correct": 2,
        "explanation": "'Who' is used as a relative pronoun to refer to a person acting as the subject of the relative clause. Here, it refers to 'the audiologist'."
    },
    {
        "question": "Identify the complex sentence among the options provided below.",
        "options": [
            "Although the child faced physical challenges, he completed the race successfully.",
            "The boy practiced daily and he won the gold medal.",
            "The teacher entered the classroom with assistive devices.",
            "Both the students and teachers attended the workshop."
        ],
        "correct": 0,
        "explanation": "A complex sentence contains one independent clause and at least one dependent clause. Option A uses the subordinating conjunction 'Although', making it a complex sentence."
    },
    {
        "question": "Fill in the blank with the correct verb form: 'Neither the headmaster nor the special educators _______ present at the meeting yesterday.'",
        "options": [
            "was",
            "were",
            "is",
            "are"
        ],
        "correct": 1,
        "explanation": "When two subjects are joined by 'neither... nor', the verb agrees with the closer subject. 'Special educators' is plural, and 'yesterday' requires past tense, so 'were' is correct."
    },
    {
        "question": "What does the idiom 'Piece of cake' mean?",
        "options": [
            "Something that is very delicious to eat.",
            "A task or activity that is extremely easy to complete.",
            "A complex situation requiring long debate.",
            "A special gift given on birthdays."
        ],
        "correct": 1,
        "explanation": "The idiom 'piece of cake' is a common colloquial expression used to describe an action or assignment that requires minimal effort to execute."
    },
    {
        "question": "Read the passage and answer the question:\n'Inclusive education means all children in the same classrooms, in the same schools. It means real learning opportunities for groups who have traditionally been excluded. Assistive technologies help bridge gaps efficiently.'\nWhat helps to bridge the gaps efficiently according to the text?",
        "options": [
            "Traditional classrooms",
            "Assistive technologies",
            "Excluded groups",
            "Separate special schools"
        ],
        "correct": 1,
        "explanation": "The last sentence of the short passage explicitly states that 'Assistive technologies help bridge gaps efficiently'. This directly answers the text-based reading comprehension prompt."
    },
    {
        "question": "Choose the sentence with correct punctuation marks.",
        "options": [
            "Does the child need a wheelchair, an IEP, or a braille book?",
            "does the child need a wheelchair an IEP or a braille book.",
            "Does the child need a wheelchair! an IEP or a braille book.",
            "Does the child need a wheelchair, an IEP, or a braille book"
        ],
        "correct": 0,
        "explanation": "Option A correctly capitalizes the first letter, uses commas for listing items, and ends with a question mark since it is an interrogative sentence."
    },
    {
        "question": "Identify the word that means 'a person who specializes in treating diseases of the nervous system'.",
        "options": [
            "Cardiologist",
            "Neurologist",
            "Orthopedist",
            "Pediatrician"
        ],
        "correct": 1,
        "explanation": "A neurologist is a medical doctor who diagnoses and treats conditions affecting the brain, spinal cord, and nerves, which is vital in cerebral palsy cases."
    },
    {
        "question": "Fill in the blank with the correct modal verb expressing capability: 'With the help of a screen reader, a visually impaired person _______ read digital newspapers easily.'",
        "options": [
            "can",
            "must",
            "should",
            "might"
        ],
        "correct": 0,
        "explanation": "The modal verb 'can' is specifically used to denote ability or capability in the present tense. It fits the context of assistive technology empowerment perfectly."
    },
    {
        "question": "What type of noun is the underlined word? 'The team of speech therapists arrived at the camp.'",
        "options": [
            "Proper Noun",
            "Abstract Noun",
            "Collective Noun",
            "Material Noun"
        ],
        "correct": 2,
        "explanation": "A collective noun refers to a collection or group of people or things counted as a whole. 'Team' represents a group of individuals working together."
    },
    {
        "question": "In English language teaching, 'Remedial Teaching' is intended for which group of learners?",
        "options": [
            "Gifted learners who finish tasks ahead of time.",
            "Learners who are lagging behind and struggling with specific concepts.",
            "Learners who want to learn a foreign language.",
            "Teachers who need training in technology tools."
        ],
        "correct": 1,
        "explanation": "Remedial teaching provides extra support and targeted instruction to students who struggle to achieve expected competencies, helping them bridge learning gaps."
    },
    {
        "question": "Choose the correctly transformed comparative degree for: 'Iron is the most useful metal.'",
        "options": [
            "Iron is more useful than any other metal.",
            "No other metal is as useful as iron.",
            "Iron was useful than other metals.",
            "Very few metals are as useful as iron."
        ],
        "correct": 0,
        "explanation": "The standard transformation of a superlative degree ('the most useful') into a comparative degree uses 'more useful than any other' when comparing one against all."
    },
    {
        "question": "Identify the correct phrasal verb that means 'to cancel an event': 'The meeting was _______ due to heavy rain.'",
        "options": [
            "called off",
            "called on",
            "called out",
            "called up"
        ],
        "correct": 0,
        "explanation": "The phrasal verb 'call off' means to abandon, cancel, or decide that something will not take place. It fits the context of a canceled meeting."
    },
    {
        "question": "What is the syllable count for the word 'Education'?",
        "options": [
            "Two",
            "Three",
            "Four",
            "Five"
        ],
        "correct": 2,
        "explanation": "The word 'Education' is broken down phonetically into four syllables: ed-u-ca-tion. Thus, it is classified as a polysyllabic word."
    },
    {
        "question": "Choose the option that correctly changes the sentence into a negative sentence: 'She speaks English fluently.'",
        "options": [
            "She do not speak English fluently.",
            "She does not speak English fluently.",
            "She is not speaking English fluently.",
            "She did not speak English fluently."
        ],
        "correct": 1,
        "explanation": "For Simple Present tense with a third-person singular subject ('she'), the auxiliary verb 'does not' followed by the base verb ('speak') is required."
    },
    {
        "question": "What is the main focus of 'Intensive Reading'?",
        "options": [
            "Reading for pure pleasure and entertainment.",
            "Reading long novels in a short period of time.",
            "Reading short texts thoroughly with extreme care for detailed data.",
            "Guessing the meaning of structural words without checking details."
        ],
        "correct": 2,
        "explanation": "Intensive reading involves a high degree of focus on specific, shorter texts to extract precise meaning, grammatical nuances, and detailed facts."
    },
    {
        "question": "Identify the passive voice form of: 'Someone has broken the glass window.'",
        "options": [
            "The glass window was broken by someone.",
            "The glass window has been broken.",
            "The glass window is broken by someone.",
            "The glass window had been broken."
        ],
        "correct": 1,
        "explanation": "The present perfect active voice ('has broken') changes into 'has/have been + V3' in the passive voice. The agent 'by someone' can be omitted."
    },
    {
        "question": "Fill in the blank with the correct pronoun: 'Every teacher must submit ______ lesson plans by Friday.'",
        "options": [
            "his or her",
            "their",
            "its",
            "them"
        ],
        "correct": 0,
        "explanation": "Grammatically, singular distributive pronouns like 'every' take singular possessive pronouns. 'His or her' is structurally precise, though 'their' is common colloquially."
    },
    {
        "question": "Choose the suffix that can be added to the root word 'Manage' to form a noun.",
        "options": [
            "-less",
            "-ment",
            "-ful",
            "-able"
        ],
        "correct": 1,
        "explanation": "Adding the suffix '-ment' to the verb 'manage' transforms it into the noun 'management', which denotes the process of dealing with or controlling things."
    },
    {
        "question": "Which method of English language teaching emphasizes vocabulary and grammar through active conversation without mother-tongue translation?",
        "options": [
            "Grammar Translation Method",
            "Direct Method",
            "Bilingual Method",
            "Structural Approach"
        ],
        "correct": 1,
        "explanation": "The Direct Method bans the use of the student's native language and focuses entirely on teaching the target language directly through demonstration and conversation."
    },
    {
        "question": "దివ్యాంగుల హక్కుల చట్టం 2016 (RPWD Act 2016) ప్రకారం ప్రభుత్వ ఉద్యోగాలలో దివ్యాంగులకు కేటాయించిన రిజర్వేషన్ శాతం ఎంత?",
        "options": [
            "3 శాతం",
            "4 శాతం",
            "5 శాతం",
            "2 శాతం"
        ],
        "correct": 1,
        "explanation": "RPWD చట్టం 2016 ప్రకారం ప్రభుత్వ ఉద్యోగాలలో బెంచ్‌మార్క్ వైకల్యాలు ఉన్న వ్యక్తులకు రిజర్వేషన్‌ను పాత చట్టంలోని 3 శాతం నుండి 4 శాతానికి పెంచారు."
    },
    {
        "question": "డౌన్స్ సిండ్రోమ్ (Down's Syndrome) అనే జన్యుపరమైన లోపం కింది ఏ క్రోమోజోమ్ అసాధారణత వల్ల సంభవిస్తుంది?",
        "options": [
            "18వ క్రోమోజోమ్ ట్రైసోమి (Trisomy 18)",
            "21వ క్రోమోజోమ్ ట్రైసోమి (Trisomy 21)",
            "13వ క్రోమోజోమ్ డిలీషన్ (Deletion 13)",
            "ఎక్స్-క్రోమోజోమ్ లోపం (Fragile X)"
        ],
        "correct": 1,
        "explanation": "డౌన్స్ సిండ్రోమ్ అనేది 21వ క్రోమోజోమ్ జంటలో రెండుకు బదులు మూడు క్రోమోజోములు ఉండటం (ట్రైసోమి 21) వల్ల వస్తుంది. దీనివల్ల మొత్తం క్రోమోజోముల సంఖ్య 47 అవుతుంది."
    },
    {
        "question": "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న పిల్లలలో ప్రధానంగా కనిపించే లోపం ఏమిటి?",
        "options": [
            "తీవ్రమైన శారీరక వైకల్యం మరియు నడవలేకపోవడం",
            "సాంఘిక పరస్పర చర్య మరియు భావప్రసార లోపం (Social Interaction & Communication)",
            "అంధత్వం మరియు చదవలేకపోవడం",
            "గణిత గణనలను అస్సలు చేయలేకపోవడం"
        ],
        "correct": 1,
        "explanation": "ఆటిజం ఉన్న పిల్లలు ఇతరులతో సులభంగా కలవలేరు, కంటికి కన్ను కలపడం (Eye Contact) కష్టమవుతుంది మరియు పునరావృత ప్రవర్తనలను ప్రదర్శిస్తారు."
    },
    {
        "question": "ఆర్పీడబ్ల్యూడీ చట్టం 2016 (RPWD Act 2016) లో మొత్తం ఎన్ని రకాల వైకల్యాలను గుర్తించారు?",
        "options": [
            "7 రకాలు",
            "14 రకాలు",
            "21 రకాలు",
            "28 రకాలు"
        ],
        "correct": 2,
        "explanation": "గతంలో ఉన్న పీడబ్ల్యూడీ చట్టం 1995 లో 7 రకాల వైకల్యాలుండగా, దాని స్థానంలో వచ్చిన ఆర్పీడబ్ల్యూడీ చట్టం 2016 ఆ సంఖ్యను 21 కి పెంచింది."
    },
    {
        "question": "బుద్ధిమాంద్యత లేదా మేధోపరమైన వైకల్యాన్ని వర్గీకరించేటప్పుడు ఐక్యూ (IQ) 35 నుండి 49 మధ్య ఉంటే ఆ వర్గాన్ని ఏమంటారు?",
        "options": [
            "మృదు బుద్ధిమాంద్యత (Mild Intellectual Disability)",
            "మిత బుద్ధిమాంద్యత (Moderate Intellectual Disability)",
            "తీవ్ర బుద్ధిమాంద్యత (Severe Intellectual Disability)",
            "అతి తీవ్ర బుద్ధిమాంద్యత (Profound Intellectual Disability)"
        ],
        "correct": 1,
        "explanation": "మానసిక వైకల్య వర్గీకరణ ప్రకారం 50-70 మైల్డ్, 35-49 మోడరేట్, 20-34 సివియర్ మరియు 20 కంటే తక్కువ ఉంటే ప్రొఫౌండ్ బుద్ధిమాంద్యతగా పరిగణిస్తారు."
    },
    {
        "question": "మెదడులో కదలికలు మరియు సమతుల్యతను నియంత్రించే భాగం దెబ్బతినడం వల్ల వచ్చే సెరిబ్రల్ పాల్సి (Cerebral Palsy) రకం ఏది?",
        "options": [
            "స్పాస్టిక్ సెరిబ్రల్ పాల్సి (Spastic CP)",
            "అటాక్సిక్ సెరిబ్రల్派ల్సి (Ataxic CP)",
            "అథెటాయిడ్ సెరిబ్రల్ పాల్సి (Athetoid CP)",
            "మిశ్రమ సెరిబ్రల్ పాల్సి (Mixed CP)"
        ],
        "correct": 1,
        "explanation": "అటాక్సిక్ సెరిబ్రల్ పాల్సి ఉన్నవారిలో నడకలో అస్థిరత, శరీర సమతుల్యత లోపించడం మరియు స్వచ్ఛంద కదలికలలో సమన్వయం లేకపోవడం వంటి ముఖ్య లక్షణాలు కనిపిస్తాయి."
    },
    {
        "question": "ప్రత్యేక అవసరాలు గల పిల్లల కోసం రూపొందించే 'వ్యక్తిగత విద్యా ప్రణాళిక' (IEP) లో అత్యంత కీలకమైన మొదటి అడుగు ఏది?",
        "options": [
            "వార్షిక పరీక్షల నిర్వహణ",
            "ప్రస్తుత విద్యా ప్రదర్శన స్థాయిని అంచనా వేయడం (Assessment of Baseline/Current Performance)",
            "వెంటనే బహుమతులు కేటాయించడం",
            "పాఠశాల భవన నిర్మాణాన్ని మార్చడం"
        ],
        "correct": 1,
        "explanation": "IEP ని రూపొందించేటప్పుడు మొదట విద్యార్థి యొక్క ప్రస్తుత సామర్థ్యాలు, లోపాలను బేస్‌లైన్ అసెస్‌మెంట్ ద్వారా అంచనా వేసి, ఆ తర్వాతే లక్ష్యాలను నిర్దేశించాలి."
    },
    {
        "question": "ఒక విద్యార్థి అక్షరాలను వెనుకకు రాయడం (ఉదాహరణకు b ని d గా, p ని q గా) మరియు చదవడంలో తీవ్ర ఇబ్బంది పడుతుంటే అతనికి ఉన్న అభ్యసన వైకల్యం ఏమిటి?",
        "options": [
            "డిస్కాల్క్యులియా (Dyscalculia)",
            "డిస్గ్రాఫియా (Dysgraphia)",
            "డిస్లెక్సియా (Dyslexia)",
            "డిస్ఫేసియా (Dysphasia)"
        ],
        "correct": 2,
        "explanation": "చదవడం, అక్షరాలను గుర్తించడం మరియు వాటి ధ్వనులను సమన్వయం చేసుకోవడంలో వచ్చే లోపాన్ని డిస్లెక్సియా (Dyslexia) అంటారు. ఇది ఒక నిర్దిష్ట అభ్యసన వైకల్యం."
    },
    {
        "question": "అంధ విద్యార్థుల కోసం ఉపయోగించే 'బ్రెయిలీ లిపి' (Braille Script) లో ప్రతి అక్షరం లేదా చిహ్నం ఎన్ని చుక్కల (Dots) అమరికతో రూపొందించబడుతుంది?",
        "options": [
            "4 చుక్కలు",
            "6 చుక్కలు",
            "8 చుక్కలు",
            "10 చుక్కలు"
        ],
        "correct": 1,
        "explanation": "లూయిస్ బ్రెయిలీ కనుగొన్న బ్రెయిలీ లిపి 6 చుక్కల సెల్ (3x2 అమరిక) పై ఆధారపడి ఉంటుంది. ఈ ఆరు చుక్కల విభిన్న అమరికల ద్వారా అక్షరాలను సృష్టిస్తారు."
    },
    {
        "question": "జాతీయ దృశ్య వికలాంగుల సంస్థ (National Institute for the Visually Handicapped - NIVH) భారతదేశంలో ఎక్కడ ఉంది?",
        "options": [
            "సికింద్రాబాద్",
            "డెహ్రాడూన్",
            "కోల్‌కతా",
            "ముంబై"
        ],
        "correct": 1,
        "explanation": "దృశ్య లోపాలు ఉన్నవారికి సంబంధించిన జాతీయ సంస్థ (ప్రస్తుతం NIEPVD) ఉత్తరాఖండ్ లోని డెహ్రాడూన్ లో ఉంది. సికింద్రాబాద్ లో మేధో వైకల్యాల సంస్థ ఉంది."
    },
    {
        "question": "సెరిబ్రల్ పాల్సి (Cerebral Palsy) లో శరీరం యొక్క ఒకే ఒక వైపు ఉన్న చేయి మరియు కాలు రెండూ పక్షవాతానికి గురైతే దానిని ఏమంటారు?",
        "options": [
            "మోనోప్లీజియా (Monoplegia)",
            "హెమిప్లీజియా (Hemiplegia)",
            "డిప్లీజియా (Diplegia)",
            "క్వాడ్రిప్లీజియా (Quadriplegia)"
        ],
        "correct": 1,
        "explanation": "శరీరంలోని ఒక నిలువు సగభాగం (కుడి లేదా ఎడమ వైపు చేయి మరియు కాలు) కదలికలు కోల్పోవడాన్ని హెమిప్లీజియా అంటారు. మోనోప్లీజియా అంటే ఒకే ఒక అవయవం దెబ్బతినడం."
    },
    {
        "question": "మేధో వైకల్యం (Intellectual Disability) మరియు మానసిక రుగ్మత (Mental Illness) మధ్య గల ప్రధాన తేడా ఏమిటి?",
        "options": [
            "మేధో వైకల్యం అనేది ఒక వ్యాధి, మానసిక రుగ్మత వైకల్యం",
            "మేధో వైకల్యం 18 సంవత్సరాల లోపే సంభవిస్తుంది, మానసిక రుగ్మత ఏ వయస్సులోనైనా రావచ్చు",
            "మానసిక రుగ్మతకు చికిత్స లేదు, మేధో వైకల్యాన్ని మందులతో పూర్తిగా నయం చేయవచ్చు",
            "రెండూ ఒకటే, వీటి మధ్య ఎటువంటి తేడా లేదు"
        ],
        "correct": 1,
        "explanation": "మేధో వైకల్యం అనేది వికాస దశలో (18 ఏళ్ల లోపు) వచ్చే మేధోపరమైన పరిమితి. మానసిక రుగ్మత అనేది మానసిక సమతుల్యత దెబ్బతినడం, ఇది జీవితంలో ఎప్పుడైనా రావచ్చు."
    },
    {
        "question": "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న పిల్లలలో ఒకే మాటను లేదా ధ్వనిని పదేపదే అనవసరంగా అనడాన్ని ఏమంటారు?",
        "options": [
            "ఎకోలాలియా (Echolalia)",
            "డిస్ప్రాక్సియా (Dyspraxia)",
            "ఆప్లాసియా (Aplasia)",
            "అグラフసియా (Agraphia)"
        ],
        "correct": 0,
        "explanation": "ఎదుటివారు మాట్లాడిన మాటలను లేదా విన్న శబ్దాలను అర్థం లేకుండా పదేపదే అనుకరించడాన్ని ఎకోలాలియా అంటారు. ఇది ఆటిజం పిల్లలలో సాధారణ భాషా లోపం."
    },
    {
        "question": "పిల్లలలో సూక్ష్మ చాలక నైపుణ్యాల (Fine Motor Skills) లోపం వల్ల పెన్సిల్ పట్టుకోవడం, రాయడం లేదా బటన్లు పెట్టుకోవడంలో వచ్చే ఇబ్బందిని ఏమంటారు?",
        "options": [
            "డిస్గ్రాఫియా",
            "డిస్ప్రాక్సియా (Dyspraxia)",
            "డిస్లెక్సియా",
            "డిస్కాల్క్యులియా"
        ],
        "correct": 1,
        "explanation": "కండరాల సమన్వయ లోపం వల్ల శారీరక కదలికలు, ముఖ్యంగా చేతి వేళ్ల సూక్ష్మ పనులు చేయలేకపోవడాన్ని డిస్ప్రాక్సియా లేదా మోటార్ ప్లానింగ్ డిజార్డర్ అంటారు."
    },
    {
        "question": "దివ్యాంగుల హక్కుల చట్టం 2016 (RPWD Act 2016) ప్రకారం 'బెంచ్‌మార్క్ వైకల్యం' (Benchmark Disability) గా పరిగణించబడటానికి కనీస వైకల్య శాతం ఎంత ఉండాలి?",
        "options": [
            "30 శాతం",
            "40 శాతం",
            "50 శాతం",
            "60 శాతం"
        ],
        "correct": 1,
        "explanation": "చట్టం ప్రకారం ఒక వ్యక్తి గుర్తింపు పొందిన వైద్య అధికారి నుండి కనీసం 40 శాతం లేదా అంతకంటే ఎక్కువ వైకల్యం ఉన్నట్లు సర్టిఫికేట్ పొందితేనే బెంచ్‌మార్క్ వైకల్యంగా పరిగణిస్తారు."
    },
    {
        "question": "కింది వాటిలో ఏది ఆటిజం (ASD) గల పిల్లలకు తరగతి గది వాతావరణాన్ని అనుకూలంగా మార్చడానికి ఉపయోగించే దృశ్య కాలపట్టిక విధానం?",
        "options": [
            "బ్రెయిలీ చార్ట్",
            "పెక్స్ (Picture Exchange Communication System - PECS)",
            "టాకింగ్ బుక్",
            "అబాకస్ (Abacus)"
        ],
        "correct": 1,
        "explanation": "పెక్స్ (PECS) విధానంలో చిత్రాల కార్డులను ఉపయోగించి ఆటిజం పిల్లలు తమ రోజువారీ పనులను, అవసరాలను ఇతరులకు సులభంగా వ్యక్తపరచడానికి మరియు కమ్యూనికేట్ చేయడానికి వీలవుతుంది."
    },
    {
        "question": "నేషనల్ ట్రస్ట్ చట్టం 1999 (National Trust Act 1999) కింది వానిలో ఏ వైకల్యాలు ఉన్న వ్యక్తుల సంక్షేమం కోసం ఉద్దేశించబడింది?",
        "options": [
            "కేవలం అంధత్వం మరియు వినికిడి లోపం",
            "ఆటిజం, సెరిబ్రల్ పాల్సి, బుద్ధిమాంద్యత మరియు బహుళ వైకల్యాలు",
            "శారీరక వైకల్యం మరియు కుష్టు వ్యాధి నివారించబడినవారు",
            "మానసిక రుగ్మత మరియు అభ్యసన వైకల్యాలు"
        ],
        "correct": 1,
        "explanation": "నేషనల్ ట్రస్ట్ యాక్ట్ 1999 ప్రత్యేకంగా నాలుగు రకాల వికాస వైకల్యాలు (ఆటిజం, సీపీ, ఎంఆర్, మరియు మల్టిపుల్ డిజబిలిటీస్) ఉన్నవారి సంరక్షణ మరియు చట్టపరమైన సంరక్షకత్వ బాధ్యతల కోసం చేయబడింది."
    },
    {
        "question": "వినికిడి లోపం తీవ్రతను కొలవడానికి ఉపయోగించే ప్రామాణిక ప్రమాణం (Unit) ఏది?",
        "options": [
            "హెర్ట్జ్ (Hertz)",
            "డెసిబెల్ (Decibel - dB)",
            "మీటర్ (Meter)",
            "వోల్ట్ (Volt)"
        ],
        "correct": 1,
        "explanation": "ధ్వని యొక్క తీవ్రతను డెసిబెల్స్ (dB) లో కొలుస్తారు. దీని ఆధారంగానే స్వల్ప, మిత, తీవ్ర, మరియు అతితీవ్ర వినికిడి లోపాలను వర్గీకరిస్తారు."
    },
    {
        "question": "పీడబ్ల్యూడీ చట్టం 1995 (PWD Act 1995) ప్రకారం వినికిడి లోపం గల వ్యక్తిగా గుర్తించడానికి మెరుగైన చెవిలో కనీసం ఎన్ని డెసిబెల్స్ వినికిడి నష్టం ఉండాలి?",
        "options": [
            "40 dB లేదా అంతకంటే ఎక్కువ",
            "60 dB లేదా అంతకంటే ఎక్కువ",
            "90 dB లేదా అంతకంటే ఎక్కువ",
            "20 dB లేదా అంతకంటే ఎక్కువ"
        ],
        "correct": 1,
        "explanation": "పాత PWD చట్టం 1995 నిబంధనల ప్రకారం సంభాషణ ధ్వని పరిధిలో మెరుగైన చెవిలో 60 dB లేదా అంతకంటే ఎక్కువ వినికిడి లోపం ఉంటే వారిని వినికిడి లోపంగల వారిగా గుర్తించేవారు."
    },
    {
        "question": "గణిత భావనలు, కూడికలు, తీసివేతలు చేయడంలో తీవ్ర ఇబ్బంది పడే నిర్దిష్ట అభ్యసన వైకల్యాన్ని (Specific Learning Disability) ఏమంటారు?",
        "options": [
            "డిస్లెక్సియా",
            "డిస్గ్రాఫియా",
            "డిస్కాల్క్యులియా (Dyscalculia)",
            "డిస్ఫేసియా"
        ],
        "correct": 2,
        "explanation": "గణిత సంకేతాలను అర్థం చేసుకోవడం, అంకెలను తారుమారు చేయడం మరియు లెక్కలు చేయడంలో ఉండే నాడీ సంబంధిత లోపాన్ని డిస్కాల్క్యులియా అని పిలుస్తారు."
    },
    {
        "question": "కింది వాటిలో ఏది శారీరక వైకల్యం (Locomotor Disability) ఉన్న విద్యార్థుల కోసం పాఠశాలలో కల్పించాల్సిన భౌతిక వసతి?",
        "options": [
            "టాకింగ్ సాఫ్ట్‌వేర్",
            "ర్యాంపులు మరియు హ్యాండ్‌రైల్స్ (Ramps and Handrails)",
            "బ్రెయిలీ పుస్తకాలు",
            "సైన్ లాంగ్వేజ్ ఇంటర్‌ప్రెటర్"
        ],
        "correct": 1,
        "explanation": "వీల్‌చైర్ ఉపయోగించే లేదా నడవడానికి ఇబ్బంది పడే విద్యార్థులు పాఠశాల లోపలికి సులభంగా రావడానికి మెట్లకు బదులుగా సరైన వాలు గల ర్యాంపులు మరియు పట్టుకోవడానికి హ్యాండ్‌రైల్స్ నిర్మించాలి."
    },
    {
        "question": "మేధో వైకల్యం (Intellectual Disability) గల పిల్లల సామర్థ్యాలను అంచనా వేయడానికి భారతదేశంలో విస్తృతంగా ఉపయోగించే 'BASIC-MR' లో 'BASIC' అనగా ఏమిటి?",
        "options": [
            "Behavioral Assessment Scales for Indian Children",
            "Basic Assessment System for Inclusive Children",
            "Behavioral Action System for Indian Children",
            "Brain Assessment Scale for Indian Children"
        ],
        "correct": 0,
        "explanation": "BASIC-MR అనగా Behavioral Assessment Scales for Indian Children with Mental Retardation. దీనిని నిమ్హాన్స్ (NIMH) వారు మానసిక వికలాంగ పిల్లల ప్రవర్తనను అంచనా వేయడానికి రూపొందించారు."
    },
    {
        "question": "సమగ్ర విద్యా తరగతి గదిలో ఒక ప్రత్యేక ఉపాధ్యాయుడు మరియు సాధారణ ఉపాధ్యాయుడు కలిసి ప్రణాళిక వేసి బోధించడాన్ని ఏమంటారు?",
        "options": [
            "ప్రత్యేక బోధన (Segregated Teaching)",
            "సహ-బోధన (Co-teaching / Team Teaching)",
            "ఏక బోధన (Individual Teaching)",
            "దూర విద్యా బోధన (Distance Teaching)"
        ],
        "correct": 1,
        "explanation": "సహ-బోధన (Co-teaching) లో ఇద్దరు ఉపాధ్యాయులు తమ నైపుణ్యాలను కలిపి ఒకే తరగతి గదిలోని సాధారణ మరియు ప్రత్యేక పిల్లల అవసరాలకు అనుగుణంగా కలిసి బోధిస్తారు."
    },
    {
        "question": "పుట్టుకతోనే వెన్నుపాము పూర్తిగా మూసుకోకపోవడం వల్ల వచ్చే శారీరక వైకల్యం లేదా నరాల లోపం ఏమిటి?",
        "options": [
            "మస్క్యులర్ డిస్ట్రోఫీ (Muscular Dystrophy)",
            "స్పైనా బైఫిడా (Spina Bifida)",
            "సెరిబ్రల్ పాల్సి",
            "పోలియోమైలిటిస్ (Poliomyelitis)"
        ],
        "correct": 1,
        "explanation": "స్పైనా బైఫిడా అనేది ఒక పుట్టుకతో వచ్చే లోపం (Neural Tube Defect). ఇందులో వెన్నుపూస మరియు వెన్నుపాము సరిగ్గా అభివృద్ధి చెందవు, దీనివల్ల కాళ్ల పక్షవాతం రావచ్చు."
    },
    {
        "question": "కింది వాటిలో ఏది శ్రవణ వైకల్యం (Hearing Impairment) ఉన్న పిల్లల ప్రాథమిక మరియు సహజమైన భావప్రసార భాష?",
        "options": [
            "బ్రెయిలీ భాష",
            "సంకేత భాష (Sign Language)",
            "లిప్ రీడింగ్ మాత్రమే",
            "లిఖిత భాష"
        ],
        "correct": 1,
        "explanation": "వినపడని పిల్లలకు దృశ్య రూపంలో ఉండే సంకేత భాష (Sign Language) అత్యంత సహజమైన మరియు వేగవంతమైన భావప్రసార సాధనంగా ఉపయోగపడుతుంది."
    },
    {
        "question": "ఒక పిల్లవానికి ఒకే చోట ఎక్కువ సమయం ఏకాగ్రతతో కూర్చోలేకపోవడం, అతిగా చలించడం, మరియు తొందరపాటు ప్రవర్తన ఉంటే ఆ రుగ్మతను ఏమంటారు?",
        "options": [
            "ఆటిజం",
            "ఏడీహెచ్‌డీ (Attention Deficit Hyperactivity Disorder - ADHD)",
            "డౌన్స్ సిండ్రోమ్",
            "లెర్నింగ్ డిజబిలిటీ"
        ],
        "correct": 1,
        "explanation": "ADHD ఉన్న పిల్లలలో అవధాన లోపం (ఏకాగ్రత లేకపోవడం) మరియు అతి చంచలత్వం (Hyperactivity) ప్రధానంగా కనిపిస్తాయి. వీరు ఒకే కృత్యంపై ఎక్కువసేపు దృష్టి పెట్టలేరు."
    },
    {
        "question": "ఐఈడీఎస్ఎస్ (IEDSS) పథకం భారతదేశంలో ఏ సంవత్సరంలో ప్రారంభించబడింది మరియు ఇది ఏ స్థాయి విద్యార్థులకు వర్తిస్తుంది?",
        "options": [
            "2001 - ప్రాథమిక స్థాయి",
            "2009 - మాధ్యమిక స్థాయి (Secondary Stage)",
            "2015 - ఉన్నత విద్యా స్థాయి",
            "1995 - పూర్వ ప్రాథమిక స్థాయి"
        ],
        "correct": 1,
        "explanation": "IEDSS అనగా Inclusive Education for Disabled at Secondary Stage. ఇది 2009-10 లో ప్రారంభించబడింది. ఇది 9 నుండి 12వ తరగతి చదివే ప్రత్యేక పిల్లల కోసం ఉద్దేశించబడింది."
    },
    {
        "question": "కుష్టు వ్యాధి నయమైన వ్యక్తులలో (Leprosy Cured Persons) చేతులు లేదా పాదాలలో స్పర్శ కోల్పోవడాన్ని ఆర్పీడబ్ల్యూడీ చట్టం ఏ వర్గం కింద చేర్చింది?",
        "options": [
            "మానసిక వైకల్యం",
            "శారీరక వైకల్యం (Locomotor Disability)",
            "రక్త రుగ్మత",
            "నరాల బలహీనత"
        ],
        "correct": 1,
        "explanation": "కుష్టు వ్యాధి నయమైనప్పటికీ చేతులు, కాళ్ల కండరాలు లేదా నరాలు దెబ్బతిని కదలికలు లోపిస్తే, దానిని శారీరక వైకల్యం (Locomotor Disability) కింద వర్గీకరిస్తారు."
    },
    {
        "question": "కింది వాటిలో ఏది ప్రత్యేక అవసరాలు గల పిల్లల విద్యా హక్కును సంరక్షించే భారత రాజ్యాంగ నిబంధన?",
        "options": [
            "ఆర్టికల్ 45 మరియు ఆర్టికల్ 21-A",
            "ఆర్టికల్ 370",
            "ఆర్టికల్ 356",
            "ఆర్టికల్ 24"
        ],
        "correct": 0,
        "explanation": "రాజ్యాంగంలోని ఆర్టికల్ 21-A ప్రకారం 6 నుండి 14 సంవత్సరాల లోపు పిల్లలందరికీ (దివ్యాంగులతో సహా) ఉచిత, నిర్బంధ ప్రాథమిక విద్యా హక్కు కల్పించబడింది."
    },
    {
        "question": "సమగ్ర విద్య (Inclusive Education) లో కింది వానిలో ఎవరి పాత్ర అత్యంత కీలకమైనది?",
        "options": [
            "కేవలం ప్రత్యేక ఉపాధ్యాయుడు",
            "సాధారణ ఉపాధ్యాయుడు, ప్రత్యేక ఉపాధ్యాయుడు, తల్లిదండ్రులు మరియు సమాజం",
            "కేవలం పాఠశాల ప్రధానోపాధ్యాయుడు",
            "కేవలం వైద్య నిపుణులు"
        ],
        "correct": 1,
        "explanation": "సమగ్ర విద్య విజయవంతం కావాలంటే సాధారణ మరియు ప్రత్యేక ఉపాధ్యాయుల సమన్వయంతో పాటు తల్లిదండ్రుల భాగస్వామ్యం మరియు సానుకూల సామాజిక దృక్పథం అవసరం."
    },
    {
        "question": "దివ్యాంగుల హక్కుల చట్టం 2016 (RPWD Act 2016) లోని సెక్షన్ 16 ప్రకారం, విద్యా సంస్థలు దివ్యాంగులైన పిల్లల కోసం కింది ఏ చర్యను చేపట్టాలి?",
        "options": [
            "ప్రత్యేక పిల్లలను కేవలం ప్రత్యేక పాఠశాలల్లోనే చేర్చుకోవడం",
            "ఎటువంటి భౌతిక వసతులు మార్చకుండా సాధారణ తరగతిలో ఉంచడం",
            "సమగ్ర విద్యా వాతావరణాన్ని కల్పించి, మౌలిక వసతులను అనుకూలంగా మార్చడం (Reasonable Accommodation)",
            "పరీక్షల సమయంలో అదనపు సమయాన్ని పూర్తిగా నిరారించడం"
        ],
        "correct": 2,
        "explanation": "RPWD చట్టం 2016 లోని సెక్షన్ 16 విద్యా సంస్థలు వికలాంగ పిల్లల అవసరాలకు అనుగుణంగా పాఠశాల భవనాలు, బోధనా పద్ధతులు మరియు పరీక్షా విధానాలలో మార్పులు చేయడం తప్పనిసరి అని పేర్కొంటుంది."
    },
    {
        "question": "మేధో వైకల్యం (Intellectual Disability) గల పిల్లలలో వృత్తిపరమైన నైపుణ్యాలను అంచనా వేయడానికి ఉపయోగించే 'MDPS' అనగా ఏమిటి?",
        "options": [
            "Mental Development Performance Scale",
            "Madras Developmental Programming System",
            "Multi-Disability Progressive Scale",
            "Motor Development and Pedagogy System"
        ],
        "correct": 1,
        "explanation": "MDPS అనగా Madras Developmental Programming System. ఇది మానసిక వైకల్యం ఉన్న పిల్లల క్రియాత్మక నైపుణ్యాలు మరియు రోజువారీ జీవన నైపుణ్యాలను 18 విభిన్న విభాగాలలో అంచనా వేయడానికి తోడ్పడుతుంది."
    },
    {
        "question": "కింది వాటిలో ఏది సంకేత భాష (Sign Language) బోధనలో ఉపయోగించే 'టోటల్ కమ్యూనికేషన్' (Total Communication) విధానం యొక్క ముఖ్య లక్షణం?",
        "options": [
            "కేవలం లిప్ రీడింగ్ మాత్రమే ఉపయోగించడం",
            "మాటలు, సంకేతాలు, హావభావాలు మరియు లిఖిత రూపాలను కలిపి ఉపయోగించడం",
            "సాంకేతిక సాధనాలను పూర్తిగా నిషేధించడం",
            "కేవలం శ్రవణ శిక్షణను మాత్రమే బలవంతంగా అమలు చేయడం"
        ],
        "correct": 1,
        "explanation": "టోటల్ కమ్యూనికేషన్ అనేది వినికిడి లోపం ఉన్న పిల్లల కోసం ప్రసంగం, సంకేతాలు, వేలి ముద్రలు (Fingerspelling), మరియు శారీరక కదలికల కలయిక ద్వారా సమాచారాన్ని సమగ్రంగా అందించే పద్ధతి."
    },
    {
        "question": "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న పిల్లలలో ప్రవర్తనా మార్పుల కోసం ఉపయోగించే 'ABA' చికిత్స యొక్క పూర్తి రూపం ఏది?",
        "options": [
            "Autism Behavioral Assessment",
            "Applied Behavior Analysis",
            "Adaptive Behavior Activities",
            "Association of Behavior Analysts"
        ],
        "correct": 1,
        "explanation": "Applied Behavior Analysis (ABA) అనేది శాస్త్రీయ పద్ధతుల ద్వారా ఆటిజం పిల్లలలోని సానుకూల ప్రవర్తనలను పెంపొందించడానికి మరియు హానికరమైన లేదా పునరావృత ప్రవర్తనలను తగ్గించడానికి ఉపయోగించే చికిత్సా విధానం."
    },
    {
        "question": "శ్రవణ వైకల్యం (Hearing Impairment) లో బాహ్య చెవి మరియు మధ్య చెవిలో కలిగే అడ్డంకుల వల్ల వచ్చే వినికిడి లోపాన్ని ఏమంటారు?",
        "options": [
            "సహజ వినికిడి లోపం (Sensorineural Hearing Loss)",
            "వాహక వినికిడి లోపం (Conductive Hearing Loss)",
            "మిశ్రమ వినికిడి లోపం (Mixed Hearing Loss)",
            "కేంద్ర నాడీ వినికిడి లోపం (Central Hearing Loss)"
        ],
        "correct": 1,
        "explanation": "ధ్వని తరంగాలు లోపలి చెవికి చేరడానికి బాహ్య లేదా మధ్య చెవిలో అంతరాయం కలిగితే దానిని వాహక వినికిడి లోపం (Conductive Hearing Loss) అంటారు. దీనిని శస్త్రచికిత్స ద్వారా కొంతవరకు నయం చేయవచ్చు."
    },
    {
        "question": "దివ్యాంగుల హక్కుల చట్టం 2016 ప్రకారం, ఒక వ్యక్తి యొక్క మెరుగైన చెవిలో వినికిడి నష్టం 71 dB కంటే ఎక్కువగా ఉంటే అతన్ని ఏ వర్గంలో చేర్చుతారు?",
        "options": [
            "స్వల్ప వినికిడి లోపం (Mild Hearing Loss)",
            "మిత వినికిడి లోపం (Moderate Hearing Loss)",
            "తీవ్ర వినికిడి లోపం (Severe/Profound Hearing Loss - Deaf)",
            "సాధారణ వినికిడి పరిధి (Normal Hearing)"
        ],
        "correct": 2,
        "explanation": "RPWD చట్టం 2016 ప్రకారం మెరుగైన చెవిలో 70 dB కంటే ఎక్కువ వినికిడి నష్టం కలిగి ఉండి, కేవలం సంభాషణ శబ్దాలను అస్సలు వినలేని వారిని 'Deaf' లేదా తీవ్ర వినికిడి లోపంగల వారిగా వర్గీకరిస్తారు."
    },
    {
        "question": "కింది వాటిలో ఏది అంధ విద్యార్థుల భౌగోళిక మరియు స్థల అవగాహనకు (Orientation and Mobility) ఉపయోగపడే ప్రాథమిక సాధనం?",
        "options": [
            "తెల్లటి చేతికర్ర (White Cane)",
            "అబాకస్ (Abacus)",
            "టాకింగ్ కాలిక్యులేటర్",
            "బ్రెయిలీ స్లేట్"
        ],
        "correct": 0,
        "explanation": "తెల్లటి చేతికర్ర (White Cane) అంధ విద్యార్థులు స్వతంత్రంగా నడవడానికి, తమ ముందున్న అడ్డంకులను గుర్తించడానికి మరియు సురక్షితంగా ప్రయాణించడానికి అత్యంత అవసరమైన భౌతిక ఓరియంటేషన్ సాధనం."
    },
    {
        "question": "జాతీయ శ్రవణ వికలాంగుల సంస్థ (Ali Yavar Jung National Institute of Speech and Hearing Disabilities) భారతదేశంలో ఎక్కడ ఉంది?",
        "options": [
            "న్యూఢిల్లీ",
            "ముంబై",
            "కోల్‌కతా",
            "చెన్నై"
        ],
        "correct": 1,
        "explanation": "వాక్ మరియు శ్రవణ వైకల్యాలకు సంబంధించిన జాతీయ సంస్థ (AYJNISHD) మహారాష్ట్రలోని ముంబైలో ఉంది. ఇది ఈ రంగంలో పరిశోధనలు మరియు ఉపాధ్యాయ శిక్షణను నిర్వహిస్తుంది."
    },
    {
        "question": "సెరిబ్రల్ పాల్సి (Cerebral Palsy) గల పిల్లలలో కండరాలు ఎల్లప్పుడూ కఠినంగా, గట్టిగా ఉండి కదలికలకు తీవ్రమైన ప్రతిరోధాన్ని చూపించే రకాన్ని ఏమంటారు?",
        "options": [
            "అటాక్సిక్ సెరిబ్రల్ పాల్సి",
            "స్పాస్టిక్ సెరిబ్రల్ పాల్సి (Spastic CP)",
            "అథెటాయిడ్ సెరిబ్రల్ పాల్సి",
            "ఫ్లాసిడ్ సెరిబ్రల్ పాల్సి"
        ],
        "correct": 1,
        "explanation": "స్పాస్టిక్ సెరిబ్రల్ పాల్సి అనేది మోటార్ కార్టెక్స్ దెబ్బతినడం వల్ల వస్తుంది. దీనివల్ల కండరాల ఉద్రిక్తత (Muscle Tone) విపరీతంగా పెరిగి, అవయవాలు కదపడం చాలా కష్టంగా మారుతుంది."
    },
    {
        "question": "భారత పునరావాస మండలి చట్టం 1992 (RCI Act 1992) యొక్క ప్రధాన విధి ఏమిటి?",
        "options": [
            "పాఠశాలల భవన నిర్మాణ నిధులను విడుదల చేయడం",
            "ప్రత్యేక విద్యా రంగంలోని నిపుణుల మరియు ఉపాధ్యాయుల శిక్షణా కోర్సులను క్రమబద్ధీకరించడం (Regulating Training Courses)",
            "దివ్యాంగులకు నేరుగా ప్రభుత్వ ఉద్యోగాలు కల్పించడం",
            "వైద్య కళాశాలల ప్రమాణాలను పర్యవేక్షించడం"
        ],
        "correct": 1,
        "explanation": "RCI చట్టం 1992 ద్వారా ప్రత్యేక ఉపాధ్యాయులు మరియు పునరావాస నిపుణుల శిక్షణా ప్రమాణాలను నిర్దేశించడం, మరియు అర్హులైన నిపుణులకు సెంట్రల్ రిహాబిలిటేషన్ రిజిస్టర్ (CRR) లో గుర్తింపు ఇవ్వడం జరుగుతుంది."
    },
    {
        "question": "ఒక ప్రత్యేక అవసరాలు గల విద్యార్థి సాధారణ పాఠశాలలోని తరగతి గదిలో రోజులో కొంత సమయం మాత్రమే ఉండి, మిగిలిన సమయం 'రిసోర్స్ రూమ్' లో గడిపితే ఆ విధానాన్ని ఏమంటారు?",
        "options": [
            "పూర్తి సమగ్ర విద్యా విధానం (Full Inclusion)",
            "సమీకృత విద్యా విధానం (Integrated Education / Resource Support)",
            "మినహాయింపు విద్యా విధానం",
            "హోమ్ బేస్డ్ ఎడ్యుకేషన్"
        ],
        "correct": 1,
        "explanation": "సమీకృత విద్య (Integrated Education) లో ప్రత్యేక విద్యార్థి సాధారణ స్కూల్ లో చేరినప్పటికీ, కఠినమైన సబ్జెక్టుల కొరకు రిసోర్స్ టీచర్ సహాయంతో రిసోర్స్ రూమ్ లో అదనపు శిక్షణ పొందుతాడు."
    },
    {
        "question": "కింది వానిలో మేధో వైకల్యం (Intellectual Disability) రావడానికి గల ప్రసవ పూర్వ (Prenatal) కారకం ఏది?",
        "options": [
            "ప్రసవ సమయంలో బిడ్డ తలకు తీవ్రమైన గాయం కావడం",
            "గర్భధారణ సమయంలో తల్లి రుబెల్లా (German Measles) వంటి ఇన్ఫెక్షన్లకు గురికావడం",
            "పుట్టిన తర్వాత బిడ్డకు తీవ్రమైన మెదడు వాపు జ్వరం రావడం",
            "చిన్నతనంలో పోషకాహార లోపం ఏర్పడటం"
        ],
        "correct": 1,
        "explanation": "గర్భధారణ సమయంలో (ప్రసవానికి ముందు) తల్లికి వచ్చే ఇన్ఫెక్షన్లు, రేడియేషన్ ప్రభావం లేదా క్రోమోజోమ్ లోపాల వల్ల బిడ్డ మేధో వైకల్యంతో పుట్టే అవకాశం ఉంది. ఇది ప్రసవ పూర్వ కారకం."
    },
    {
        "question": "ఆటిజం గల పిల్లల కోసం ఉపయోగించే 'TEACCH' బోధనా కార్యక్రమాన్ని ఏ విశ్వవిద్యాలయంలో అభివృద్ధి చేశారు?",
        "options": [
            "హార్వర్డ్ విశ్వవిద్యాలయం",
            "నార్త్ కరోలినా విశ్వవిద్యాలయం (University of North Carolina)",
            "ఆక్స్‌ఫర్డ్ విశ్వవిద్యాలయం",
            "స్టాన్‌ఫర్డ్ విశ్వవిద్యాలయం"
        ],
        "correct": 1,
        "explanation": "TEACCH (Treatment and Education of Autistic and Related Communication-Handicapped Children) అనే నిర్మాణాత్మక బోధనా విధానాన్ని 1970లలో నార్త్ కరోలినా విశ్వవిద్యాలయంలో ఎరిక్ స్కోప్లర్ అభివృద్ధి చేశారు."
    },
    {
        "question": "పిల్లలలో కండరాల బలహీనత క్రమంగా పెరుగుతూ, కాలక్రమేణా నడిచే సామర్థ్యం పూర్తిగా కోల్పోయే జన్యుపరమైన శారీరక రుగ్మతను ఏమంటారు?",
        "options": [
            "స్పైనా బైఫిడా",
            "మస్క్యులర్ డిస్ట్రోఫీ (Muscular Dystrophy)",
            "సెరిబ్రల్ పాల్సి",
            "కుష్టు వ్యాధి"
        ],
        "correct": 1,
        "explanation": "మస్క్యులర్ డిస్ట్రోఫీ అనేది జన్యు లోపాల వల్ల కండరాల ప్రోటీన్లు క్షీణించే వ్యాధి. దీనివల్ల వయస్సు పెరుగుతున్న కొద్దీ శారీరక కదలికలు పూర్తిగా తగ్గిపోతాయి."
    },
    {
        "question": "నిర్దిష్ట అభ్యసన వైకల్యం (Specific Learning Disability) కలిగిన విద్యార్థులకు నివారణ బోధన (Remedial Teaching) అందించేటప్పుడు అనుసరించాల్సిన ఉత్తమ పద్ధతి ఏది?",
        "options": [
            "బహుళ ఇంద్రియ పద్ధతి (Multisensory Approach - VAKT)",
            "కేవలం సాంప్రదాయ ఉపన్యాస పద్ధతి",
            "తరగతి నుండి పూర్తిగా మినహాయించడం",
            "సొంతంగా చదువుకోమని పుస్తకాలు ఇవ్వడం"
        ],
        "correct": 0,
        "explanation": "VAKT అనగా Visual, Auditory, Kinesthetic, and Tactile. నేర్చుకోవడంలో ఇబ్బంది పడే పిల్లలకు దృశ్య, శ్రవణ, చలన, మరియు స్పర్శ ఇంద్రియాలను ఒకేసారి ఉపయోగించి బోధించడం వల్ల అభ్యసనం సులువవుతుంది."
    },
    {
        "question": "ఆర్పీడబ్ల్యూడీ చట్టం 2016 లో కొత్తగా చేర్చబడిన రక్త రుగ్మతలకు (Blood Disorders) సంబంధించిన వైకల్యం కింది వానిలో ఏది?",
        "options": [
            "డౌన్స్ సిండ్రోమ్",
            "థాలసీమియా మరియు హీమోఫీలియా (Thalassemia & Hemophilia)",
            "ఆల్కహాలిజం",
            "క్రానిక్ న్యూరోలాజికల్ కండిషన్స్"
        ],
        "correct": 1,
        "explanation": "RPWD చట్టం 2016 లో హీమోఫీలియా, థాలసీమియా, మరియు సికిల్ సెల్ ఎనీమియా వంటి మూడు తీవ్రమైన రక్త సంబంధిత రుగ్మతలను వైకల్యాల జాబితాలో చేర్చడం జరిగింది."
    },
    {
        "question": "ప్రత్యేక పాఠశాలల్లో విద్యార్థుల ప్రవర్తనను మార్చడానికి ఉపయోగించే 'టోకెన్ ఎకానమీ' (Token Economy) ఏ సిద్ధాంతంపై ఆధారపడి పనిచేస్తుంది?",
        "options": [
            "పావ్లోవ్ సాంప్రదాయ నిబంధనం",
            "స్కిన్నర్ కార్యసాధక నిబంధనం (Operant Conditioning)",
            "కోహ్లర్ అంతర్దృష్టి సిద్ధాంతం",
            "బండూరా సాంఘిక అభ్యసన సిద్ధాంతం"
        ],
        "correct": 1,
        "explanation": "టోకెన్ ఎకానమీ అనేది కార్యసాధక నిబంధనలోని ఉపబలన నియమంపై ఆధారపడి ఉంటుంది. ఆశించిన మంచి ప్రవర్తనకు బదులుగా టోకెన్లు (స్టార్లు/కాయిన్స్) ఇచ్చి, వాటితో బహుమతులు పొందేలా చేయడం దీని ముఖ్య ఉద్దేశం."
    },
    {
        "question": "మేధో వైకల్యం (Intellectual Disability) ఉన్న పిల్లలకు స్వతంత్రంగా బ్రతకడానికి అవసరమైన సామాజిక మరియు నిత్యజీవిత నైపుణ్యాలను ఏమంటారు?",
        "options": [
            "సంజ్ఞానాత్మక నైపుణ్యాలు",
            "అనుకూల ప్రవర్తనా నైపుణ్యాలు (Adaptive Behavior Skills)",
            "విద్యాపరమైన సృజనాత్మక నైపుణ్యాలు",
            "చలన నైపుణ్యాలు మాత్రమే"
        ],
        "correct": 1,
        "explanation": "సమాజంలో మరియు ఇంట్లో ఒక వ్యక్తి తన వయస్సుకు తగినట్లుగా బాధ్యతాయుతంగా ప్రవర్తించడాన్ని అనుకూల ప్రవర్తన (Adaptive Behavior) అంటారు. మానసిక వైకల్య నిర్ధారణకు ఇది అత్యంత ప్రాముఖ్యమైనది."
    },
    {
        "question": "కింది వాటిలో ఏది తక్కువ చూపు (Low Vision) ఉన్న విద్యార్థుల కోసం తరగతి గదిలో ఉపయోగించే ముద్రిత సహాయక సాధనం?",
        "options": [
            "పెద్ద అక్షరాల పాఠ్యపుస్తకాలు (Large Print Textbooks)",
            "స్టాండర్డ్ సైజు స్క్రీన్",
            "ధ్వని లేని చార్టులు",
            "సాధారణ బ్రెయిలీ పుస్తకాలు"
        ],
        "correct": 0,
        "explanation": "తక్కువ చూపు (Low Vision) ఉన్న పిల్లలు పూర్తిగా అంధులు కారు, కాబట్టి వారికి సాధారణ పుస్తకాల కంటే పెద్ద అక్షరాలతో ముద్రించిన (Large Print) పుస్తకాలు ఇస్తే సులభంగా చదవగలరు."
    },
    {
        "question": "అభ్యసన వైకల్యం గల పిల్లలలో భాషను వ్యక్తపరచడంలో మరియు ఇతరులు చెప్పే భాషను అర్థం చేసుకోవడంలో వచ్చే నాడీ సంబంధిత లోపాన్ని ఏమంటారు?",
        "options": [
            "డిస్లెక్సియా",
            "అఫేసియా / డిస్ఫేసియా (Aphasia / Dysphasia)",
            "డిస్కాల్క్యులియా",
            "డిస్ప్రాక్సియా"
        ],
        "correct": 1,
        "explanation": "మెదడులోని భాషా కేంద్రాలు దెబ్బతినడం వల్ల మాట్లాడటం, సొంతంగా వాక్యాలు నిర్మించడం మరియు ఎదుటివారి మాటలను గ్రహించలేకపోవడాన్ని అఫేసియా లేదా డిస్ఫేసియా అంటారు."
    },
    {
        "question": "సమగ్ర పాఠశాలల్లో (Inclusive Schools) ప్రత్యేక అవసరాలు గల పిల్లల కోసం భౌతిక అడ్డంకులు లేని వాతావరణాన్ని (Barrier-Free Environment) సృష్టించడం వల్ల కలిగే ప్రయోజనం ఏమిటి?",
        "options": [
            "పాఠశాల అందాన్ని పెంచడం",
            "ప్రత్యేక పిల్లలు ఎవరి సహాయం లేకుండా స్వతంత్రంగా పాఠశాల అంతటా తిరగడం (Independent Accessibility)",
            "సాధారణ పిల్లల సంఖ్యను తగ్గించడం",
            "ఉపాధ్యాయుల పనిభారాన్ని పూర్తిగా తొలగించడం"
        ],
        "correct": 1,
        "explanation": "భౌతిక అడ్డంకులు లేని వాతావరణం (ర్యాంపులు, వెడల్పైన తలుపులు, స్పర్శ చిహ్నాలు) ఉండటం వల్ల వీల్‌చైర్ వాడేవారు లేదా అంధులు స్వతంత్రంగా పాఠశాల వసతులను ఉపయోగించుకోగలుగుతారు."
    },
    {
        "question": "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న విద్యార్థులలో తరచుగా కనిపించే 'సందర్భోచిత ఉద్దీపనల పట్ల అతి-ప్రతిస్పందన లేదా అల్ప-ప్రతిస్పందన' ను ఏమంటారు?",
        "options": [
            "చలన పరిమితి",
            "ఇంద్రియ సంవేదన రుగ్మత (Sensory Processing Issues)",
            "మేధో లోపం",
            "భాషాపరమైన వైకల్యం"
        ],
        "correct": 1,
        "explanation": "ఆటిజం పిల్లలు సాధారణ శబ్దాలు, కాంతి, లేదా స్పర్శకు విపరీతంగా భయపడటం లేదా అసలు స్పందించకపోవడం చేస్తారు. దీనిని సెన్సరీ ప్రాసెసింగ్ ఇష్యూస్ అని పిలుస్తారు."
    },
    {
        "question": "జాతీయ మేధో వికలాంగుల సార్థకత సంస్థ (National Institute for the Empowerment of Persons with Intellectual Disabilities - NIEPID) ఎక్కడ ఉంది?",
        "options": [
            "ముంబై",
            "సికింద్రాబాద్ (తెలంగాణ)",
            "కోల్‌కతా",
            "చెన్నై"
        ],
        "correct": 1,
        "explanation": "పూర్వం NIMH (National Institute for the Mentally Handicapped) గా పిలవబడే ఈ కేంద్ర ప్రభుత్వ సంస్థ తెలంగాణలోని సికింద్రాబాద్ లో ఉంది. ఇది మేధో వైకల్య రంగంలో సేవలు అందిస్తుంది."
    },
    {
        "question": "ప్రత్యేక విద్యా బోధనలో 'టాస్క్ ఎనాలసిస్' (Task Analysis) అనగా ఏమిటి?",
        "options": [
            "విద్యార్థికి కఠినమైన శిక్షలు కేటాయించడం",
            "ఒక సంక్లిష్టమైన పనిని చిన్న చిన్న సులభమైన దశలుగా విభజించడం (Breaking a complex skill into smaller steps)",
            "పాఠశాల వార్షిక సిలబస్ ను పూర్తిగా మార్చడం",
            "కేవలం పరీక్షల మార్కులను విశ్లేషించడం"
        ],
        "correct": 1,
        "explanation": "మేధో వైకల్యం ఉన్న పిల్లలకు ఒకేసారి పెద్ద పనులు నేర్పలేము. కాబట్టి బ్రష్ చేసుకోవడం లేదా బట్టలు వేసుకోవడం వంటి పనులను చిన్న చిన్న విడి దశలుగా విడగొట్టి (Task Analysis) నేర్పడం జరుగుతుంది."
    },
    {
        "question": "కింది వాటిలో ఏది వినికిడి లోపం ఉన్న పిల్లల వినికిడి సామర్థ్యాన్ని పెంచడానికి చెవి వెనుక అమర్చే ఎలక్ట్రానిక్ పరికరం?",
        "options": [
            "శ్రవణ సహాయక పరికరం (Hearing Aid)",
            "స్క్రీన్ మాగ్నిఫైయర్",
            "స్పర్శ బోర్డు",
            "వాయిస్ సింథసైజర్"
        ],
        "correct": 0,
        "explanation": "హియరింగ్ ఎయిడ్ (Hearing Aid) అనేది బాహ్య శబ్దాలను మైక్రోఫోన్ ద్వారా గ్రహించి, వాటి తీవ్రతను పెంచి (Amplification) చెవిలోకి పంపే ఒక బ్యాటరీ ఆధారిత సహాయక సాధనం."
    },
    {
        "question": "ఆర్టీఈ చట్టం 2009 లోని సవరణ ప్రకారం, తీవ్రమైన లేదా బహుళ వైకల్యాలు ఉన్న పిల్లలకు కింది ఏ విద్యా హక్కు కల్పించబడింది?",
        "options": [
            "కఠినమైన బోర్డింగ్ స్కూల్ లో మాత్రమే ఉండటం",
            "గృహ ఆధారిత విద్యా హక్కు (Home-Based Education)",
            "పూర్తిగా చదువు నుండి మినహాయించడం",
            "కేవలం వృత్తి విద్యా కేంద్రాలకే పరిమితం కావడం"
        ],
        "correct": 1,
        "explanation": "తీవ్రమైన బహుళ వైకల్యాలు ఉండి పాఠశాలకు రాలేని పిల్లల కోసం ఆర్టీఈ చట్టం సవరణ ద్వారా వారి ఇంటి వద్దకే వెళ్లి విద్యను అందించే 'హోమ్ బేస్డ్ ఎడ్యుకేషన్' హక్కును కల్పించారు."
    },
    {
        "question": "శారీరక చలన వైకల్యం (Locomotor Disability) కలిగిన విద్యార్థికి తరగతి గదిలో డెస్క్ లేదా కూర్చునే వసతిని అమర్చేటప్పుడు ఏ అంశాన్ని ప్రధానంగా గమనించాలి?",
        "options": [
            "డెస్క్ ఎత్తు వీల్‌చైర్ ఎత్తుకు అనుగుణంగా మరియు సౌకర్యవంతంగా ఉండటం (Ergonomic Seating)",
            "అతడిని అందరికంటే వెనుక నిలబెట్టడం",
            "సాధారణ బెంచీలను మాత్రమే వాడటం",
            "తరగతి గది మూలన ఒంటరిగా కూర్చోబెట్టడం"
        ],
        "correct": 0,
        "explanation": "చలన వైకల్యం ఉన్న పిల్లల శరీర నిర్మాణ లోపాలకు అనుగుణంగా డెస్క్‌లు మరియు కుర్చీలను మార్చడం (Frictional/Adjustable furniture) వల్ల వారి శారీరక అలసట తగ్గి అభ్యసనంపై దృష్టి పెట్టగలరు."
    },
    {
        "question": "కింది వాటిలో ఏది అంధ విద్యార్థులకు గణిత శాస్త్రంలోని అంకెలు మరియు రేఖాగణిత రూపాలను స్పర్శ ద్వారా నేర్పడానికి ఉపయోగించే బోర్డు?",
        "options": [
            "టేలర్ ఫ్రేమ్ (Taylor Frame)",
            "స్క్రీన్ రీడర్ సాఫ్ట్‌వేర్",
            "టాకింగ్ గ్లోబ్",
            "లిప్ రీడింగ్ చార్ట్"
        ],
        "correct": 0,
        "explanation": "టేలర్ ఫ్రేమ్ అనేది అంధ విద్యార్థులు గణిత లెక్కలు చేయడానికి, సంఖ్యలను మరియు సమీకరణాలను స్పర్శ రూపంలో అమర్చుకోవడానికి ఉపయోగించే ఒక ప్రత్యేకమైన మెటల్ ప్లేట్ సాధనం."
    },
    {
        "question": "దివ్యాంగుల హక్కుల చట్టం 2016 ప్రకారం, ఏ వయస్సు లోపు ఉన్న బెంచ్‌మార్క్ వైకల్యం గల ప్రతి పిల్లవానికీ ఉచిత విద్యా హక్కు ఉంది?",
        "options": [
            "6 నుండి 14 సంవత్సరాలు",
            "6 నుండి 18 సంవత్సరాలు",
            "3 నుండి 15 సంవత్సరాలు",
            "18 నుండి 25 సంవత్సరాలు"
        ],
        "correct": 1,
        "explanation": "సాధారణ పిల్లలకు ఉచిత విద్యా హక్కు 14 ఏళ్ల వరకు ఉంటే, RPWD చట్టం 2016 లోని సెక్షన్ 31 ప్రకారం బెంచ్‌మార్క్ వైకల్యాలు ఉన్న పిల్లలకు ఈ పరిధిని 18 సంవత్సరాల వరకు పొడిగించారు."
    },
    {
        "question": "కింది వాటిలో ఏది ప్రత్యేక విద్యా బోధనలో 'వ్యక్తిగత విద్యా ప్రణాళిక' (IEP) విజయవంతం కావడానికి సమర్పించాల్సిన నిరంతర నివేదిక?",
        "options": [
            "కేవలం ముగింపు ప్రగతి పత్రం",
            "క్రమబద్ధమైన పర్యవేక్షణ మరియు త్రైమాసిక సమీక్ష నివేదికలు (Monitoring & Review Reports)",
            "పాఠశాల బడ్జెట్ నివేదిక",
            "వైద్యుని పుట్టినరోజు ధృవీకరణ పత్రం"
        ],
        "correct": 1,
        "explanation": "IEP అనేది ఒక నిర్దిష్ట కాలానికి నిర్దేశించిన లక్ష్యాల సమాహారం. కాబట్టి విద్యార్థి ప్రగతిని నిరంతరం పర్యవేక్షిస్తూ, అవసరమైతే ప్రణాళికలో మార్పులు చేయడానికి నిరంతర సమీక్షలు అత్యంత అవసరం."
    }
];