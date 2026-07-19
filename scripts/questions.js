const SUBJECTS = [
    "CDP",
    "ICT",
    "Telugu",
    "English",
    "Special Education"
];

const QUESTIONS = [
    {
        question: "మాస్లో అవసరాల శ్రేణి సిద్ధాంతం ప్రకారం స్వీయ సాక్షాత్కారం (Self-Actualization) గురించి సరైన ప్రకటన ఏది?",
        options: [
            "ప్రతి వ్యక్తి తప్పనిసరిగా ఈ స్థాయిని చేరుకుంటాడు.",
            "అన్ని ప్రాథమిక అవసరాలు తీరిన తరువాత వ్యక్తి తన సంపూర్ణ సామర్థ్యాన్ని సాధించడానికి ప్రయత్నిస్తాడు.",
            "ఇది శారీరక అవసరాల కంటే ముందు వస్తుంది.",
            "ఇది కేవలం మేధావులకు మాత్రమే వర్తిస్తుంది."
        ],
        correct: 1,
        explanation: "మాస్లో సిద్ధాంతం ప్రకారం శారీరక, భద్రత, ప్రేమ, గౌరవ అవసరాలు తీరిన తరువాత వ్యక్తి తన సంపూర్ణ సామర్థ్యాన్ని సాధించేందుకు ప్రయత్నించే దశ స్వీయ సాక్షాత్కారం అని పేర్కొన్నాడు."
    },
    {
        question: "క్రెచ్‌మర్ (Kretschmer) వ్యక్తిత్వ వర్గీకరణలో పైక్నిక్ (Pyknic), అథ్లెటిక్ (Athletic), అస్తెనిక్ (Asthenic) అనే వర్గీకరణ ఏ ఆధారంపై ఉంది?",
        options: [
            "శరీర నిర్మాణం",
            "మేధస్సు స్థాయి",
            "అభ్యాస శైలి",
            "భావోద్వేగ నియంత్రణ"
        ],
        correct: 0,
        explanation: "క్రెచ్‌మర్ వ్యక్తిత్వాన్ని ప్రధానంగా శరీర నిర్మాణ లక్షణాల ఆధారంగా పైక్నిక్, అథ్లెటిక్, అస్తెనిక్ వర్గాలుగా విభజించాడు. ఇది శారీరక ఆకృతిపై ఆధారపడిన సిద్ధాంతంగా ప్రసిద్ధి చెందింది."
    },
    {
        question: "నిర్మాణవాద సిద్ధాంతం (Constructivism) ప్రకారం అభ్యాసం ఉత్తమంగా ఎప్పుడు జరుగుతుంది?",
        options: [
            "ఉపాధ్యాయుడు సమాచారం చెప్పినప్పుడు మాత్రమే",
            "విద్యార్థి స్వయంగా అనుభవాల ద్వారా జ్ఞానాన్ని నిర్మించుకున్నప్పుడు",
            "పాఠాన్ని కంఠస్థం చేసినప్పుడు",
            "పరీక్షలకు మాత్రమే సిద్ధమైనప్పుడు"
        ],
        correct: 1,
        explanation: "నిర్మాణవాద సిద్ధాంతం ప్రకారం విద్యార్థి అనుభవాలు, పరస్పర చర్యలు, ఆలోచనల ద్వారా జ్ఞానాన్ని స్వయంగా నిర్మించుకుంటాడు. ఈ ప్రక్రియలో ఉపాధ్యాయుడు మార్గదర్శకునిగా ముఖ్యపాత్ర పోషిస్తాడు."
    },
    {
        question: "థార్న్‌డైక్ (Thorndike) ప్రతిపాదించిన ట్రయల్ అండ్ ఎరర్ (Trial and Error) అభ్యాస సిద్ధాంతంలో ప్రధాన నియమం ఏది?",
        options: [
            "సిద్ధత నియమం (Law of Readiness)",
            "సమానత్వ నియమం",
            "సృజనాత్మకత నియమం",
            "పరిశీలన నియమం"
        ],
        correct: 0,
        explanation: "థార్న్‌డైక్ సిద్ధాంతంలో సిద్ధత నియమం, అభ్యాస నియమం, ఫలిత నియమం ప్రధానమైనవి. సిద్ధత ఉన్నప్పుడు అభ్యాసం సులభంగా, సమర్థవంతంగా జరుగుతుందని ఈ నియమం వివరిస్తుంది."
    },
    {
        question: "సెఫాలో-కాడల్ అభివృద్ధి (Cephalo-Caudal Development) సూత్రం ప్రకారం శిశువు అభివృద్ధి ఎలా జరుగుతుంది?",
        options: [
            "తల నుండి పాదాల వరకు",
            "వేళ్ల నుండి భుజాల వరకు",
            "శరీర మధ్య భాగం నుండి బయటకు",
            "పాదాల నుండి తల వరకు"
        ],
        correct: 0,
        explanation: "సెఫాలో-కాడల్ అభివృద్ధి సూత్రం ప్రకారం శిశువు అభివృద్ధి తల భాగం నుండి ప్రారంభమై క్రమంగా మెడ, మొండెం, కాళ్ల వరకు కొనసాగుతుంది అని వివరిస్తుంది."
    },
    {
        question: "వైగాట్స్కీ (Vygotsky) ప్రతిపాదించిన సమీప వికాస మండలం (Zone of Proximal Development - ZPD) భావనలో ముఖ్యమైనది ఏమిటి?",
        options: [
            "విద్యార్థి ఒంటరిగా చేయగలిగిన పని మాత్రమే",
            "ఉపాధ్యాయుడు లేదా సహచరుల సహాయంతో చేయగలిగిన అభ్యాసం",
            "కేవలం పరీక్షా ఫలితాలు",
            "జన్యుపరమైన మేధస్సు"
        ],
        correct: 1,
        explanation: "సమీప వికాస మండలం అంటే విద్యార్థి సహాయం లేకుండా చేయలేని కానీ ఉపాధ్యాయుడు లేదా నైపుణ్యం ఉన్న సహచరుల సహాయంతో సాధించగలిగే అభ్యాస పరిధిని సూచిస్తుంది."
    },
    {
        question: "గార్డ్నర్ (Gardner) బహుళ మేధస్సుల సిద్ధాంతం (Multiple Intelligences Theory) ప్రకారం ప్రతి విద్యార్థి",
        options: [
            "ఒకే రకమైన మేధస్సు కలిగి ఉంటాడు.",
            "ఒకే విధంగా నేర్చుకుంటాడు.",
            "వివిధ రకాల మేధస్సుల కలయికను కలిగి ఉంటాడు.",
            "కేవలం భాషా మేధస్సు ద్వారానే నేర్చుకుంటాడు."
        ],
        correct: 2,
        explanation: "గార్డ్నర్ ప్రకారం ప్రతి వ్యక్తిలో వివిధ రకాల మేధస్సులు భిన్న స్థాయిలలో ఉంటాయి. అందువల్ల అభ్యాస పద్ధతులు కూడా విద్యార్థుల అవసరాలకు అనుగుణంగా మారాలి."
    },
    {
        question: "ఫార్మేటివ్ మూల్యాంకనం (Formative Assessment) యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        options: [
            "తుది గ్రేడ్ ఇవ్వడం",
            "విద్యార్థుల అభ్యాసాన్ని నిరంతరం మెరుగుపరచడం",
            "ర్యాంకులు ప్రకటించడం",
            "పాఠశాలల పోలిక చేయడం"
        ],
        correct: 1,
        explanation: "ఫార్మేటివ్ మూల్యాంకనం బోధన సమయంలో విద్యార్థుల అభ్యాస పురోగతిని గుర్తించి తక్షణ ఫీడ్‌బ్యాక్ అందించడం ద్వారా నేర్చుకునే ప్రక్రియను మెరుగుపరచడానికి ఉపయోగపడుతుంది."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education)లో ఉపాధ్యాయుని ప్రధాన బాధ్యత ఏమిటి?",
        options: [
            "అందరికీ ఒకే విధమైన బోధన అందించడం",
            "విద్యార్థుల వైవిధ్యాన్ని గుర్తించి అవసరాలకు అనుగుణంగా బోధన చేయడం",
            "ప్రతిభావంతులపై మాత్రమే దృష్టి పెట్టడం",
            "పరీక్ష మార్కుల ఆధారంగా బోధన మార్చడం"
        ],
        correct: 1,
        explanation: "సమగ్ర విద్యలో ప్రతి విద్యార్థి ప్రత్యేక అవసరాలను గుర్తించి వారికి అనుకూలమైన బోధన, సహాయక వనరులు, సమాన అవకాశాలు కల్పించడం ఉపాధ్యాయుని ప్రధాన బాధ్యతగా ఉంటుంది."
    },
    {
        question: "పియాజే (Piaget) ప్రకారం వస్తు శాశ్వతత్వం (Object Permanence) ఏ దశలో అభివృద్ధి చెందుతుంది?",
        options: [
            "సెన్సరీ-మోటార్ దశ",
            "ప్రీ-ఆపరేషనల్ దశ",
            "కాంక్రీట్ ఆపరేషనల్ దశ",
            "ఫార్మల్ ఆపరేషనల్ దశ"
        ],
        correct: 0,
        explanation: "పియాజే ప్రకారం సెన్సరీ-మోటార్ దశలో శిశువు కనిపించని వస్తువులు కూడా కొనసాగి ఉంటాయని అర్థం చేసుకుంటాడు. దీనినే వస్తు శాశ్వతత్వం అంటారు అభివృద్ధి లక్షణంగా."
    },
    {
        question: "పిల్లల అభివృద్ధిలో పరిపక్వత (Maturation) అనేది ప్రధానంగా దేనిపై ఆధారపడి ఉంటుంది?",
        options: [
            "జన్యుపరమైన ఎదుగుదల",
            "పరీక్షా మార్కులు",
            "పాఠ్యపుస్తకాలు",
            "హోంవర్క్ పరిమాణం"
        ],
        correct: 0,
        explanation: "పరిపక్వత ప్రధానంగా జన్యుపరమైన శారీరక, నాడీ వ్యవస్థ అభివృద్ధిపై ఆధారపడుతుంది. అనుభవాలు అభ్యాసాన్ని ప్రభావితం చేసినప్పటికీ పరిపక్వత సహజ అభివృద్ధి ప్రక్రియగా పరిగణించబడుతుంది."
    },
    {
        question: "ప్రేరణ (Motivation) యొక్క అంతర్గత రూపం (Intrinsic Motivation)కి ఉదాహరణ ఏది?",
        options: [
            "బహుమతి కోసం చదవడం",
            "శిక్ష భయంతో చదవడం",
            "కొత్త విషయం తెలుసుకోవాలనే ఆసక్తితో చదవడం",
            "పోటీ గెలవడానికి మాత్రమే చదవడం"
        ],
        correct: 2,
        explanation: "అంతర్గత ప్రేరణలో వ్యక్తి బాహ్య బహుమతుల కోసం కాదు. జ్ఞానం పొందాలనే ఆసక్తి, సంతృప్తి, వ్యక్తిగత అభివృద్ధి కోసం స్వచ్ఛందంగా అభ్యాసంలో పాల్గొంటాడు ఎల్లప్పుడూ ఉత్సాహంగా."
    },
    {
        question: "బ్లూమ్ విద్యా లక్ష్యాల వర్గీకరణ (Bloom's Taxonomy)లో విశ్లేషణ (Analysis) స్థాయి విద్యార్థిని ఏమి చేయమని ఆశిస్తుంది?",
        options: [
            "నిజాలను గుర్తుంచుకోవడం",
            "భాగాలను విడదీసి సంబంధాలను గుర్తించడం",
            "పదాలను కంఠస్థం చేయడం",
            "నిర్వచనాలను వ్రాయడం"
        ],
        correct: 1,
        explanation: "విశ్లేషణ స్థాయిలో విద్యార్థి అంశాన్ని భాగాలుగా విడదీసి వాటి పరస్పర సంబంధాలు, కారణాలు, నిర్మాణం అర్థం చేసుకుంటాడు. ఇది ఉన్నత స్థాయి ఆలోచనా నైపుణ్యాన్ని ప్రతిబింబిస్తుంది."
    },
    {
        question: "ఉపాధ్యాయుడు తరగతిలో ప్రతి విద్యార్థి అభిప్రాయాన్ని గౌరవించి చర్చకు అవకాశం ఇవ్వడం ఏ అభ్యాస దృక్పథాన్ని బలపరుస్తుంది?",
        options: [
            "ఉపన్యాస పద్ధతి",
            "విద్యార్థి కేంద్రిత బోధన",
            "శిక్షా ఆధారిత బోధన",
            "కంఠస్థ అభ్యాసం"
        ],
        correct: 1,
        explanation: "విద్యార్థి కేంద్రిత బోధనలో విద్యార్థుల అభిప్రాయాలు, అనుభవాలు, చర్చలు, సహకార అభ్యాసం ప్రోత్సహించబడతాయి. దీనివల్ల విమర్శనాత్మక ఆలోచన, చురుకైన పాల్గొనడం మరియు లోతైన అభ్యాసం అభివృద్ధి చెందుతుంది."
    },
    {
        question: "సహకార అభ్యాసం (Cooperative Learning) యొక్క ప్రధాన లక్షణం ఏమిటి?",
        options: [
            "విద్యార్థులు వ్యక్తిగతంగా మాత్రమే పనిచేయడం",
            "విద్యార్థులు పరస్పరం సహకరించి సాధారణ లక్ష్యాన్ని చేరుకోవడం",
            "ఉపాధ్యాయుడు మాత్రమే మాట్లాడడం",
            "కేవలం పరీక్షల కోసం అభ్యాసం చేయడం"
        ],
        correct: 1,
        explanation: "సహకార అభ్యాసంలో విద్యార్థులు చిన్న బృందాలుగా కలిసి పనిచేసి పరస్పరం నేర్చుకుంటారు. ఉమ్మడి లక్ష్యాలు, బాధ్యత, సంభాషణ, సామాజిక నైపుణ్యాలు ఈ విధానంలో అభివృద్ధి చెందుతాయి."
    },
    {
        question: "కంప్యూటర్‌లో సెంట్రల్ ప్రాసెసింగ్ యూనిట్ (CPU) యొక్క ప్రధాన పని ఏమిటి?",
        options: [
            "సమాచారాన్ని శాశ్వతంగా నిల్వ చేయడం",
            "అన్ని సూచనలను అమలు చేసి కంప్యూటర్ కార్యకలాపాలను నియంత్రించడం",
            "పత్రాలను ముద్రించడం",
            "ఇంటర్నెట్‌కు మాత్రమే అనుసంధానం కల్పించడం"
        ],
        correct: 1,
        explanation: "సెంట్రల్ ప్రాసెసింగ్ యూనిట్ కంప్యూటర్ మెదడుగా పనిచేస్తుంది. ఇది సూచనలను అమలు చేసి గణనలు నిర్వహిస్తూ అన్ని భాగాల పనితీరును సమన్వయం చేసి నియంత్రిస్తుంది సమర్థవంతంగా ఎల్లప్పుడూ."
    },
    {
        question: "క్రింది వాటిలో ఇన్‌పుట్ పరికరం (Input Device) ఏది?",
        options: [
            "మానిటర్",
            "ప్రింటర్",
            "కీబోర్డ్",
            "స్పీకర్"
        ],
        correct: 2,
        explanation: "కీబోర్డ్ ద్వారా వినియోగదారు అక్షరాలు, సంఖ్యలు, ఆదేశాలను కంప్యూటర్‌కు అందిస్తాడు. అందువల్ల ఇది ఇన్‌పుట్ పరికరంగా వర్గీకరించబడుతుంది. ఇతర ఎంపికలు అవుట్‌పుట్ పరికరాలకు చెందినవి."
    },
    {
        question: "క్రింది వాటిలో అవుట్‌పుట్ పరికరం (Output Device) ఏది?",
        options: [
            "మౌస్",
            "స్కానర్",
            "మానిటర్",
            "వెబ్‌క్యామ్"
        ],
        correct: 2,
        explanation: "మానిటర్ కంప్యూటర్ ప్రాసెస్ చేసిన సమాచారాన్ని వినియోగదారునికి దృశ్యరూపంలో చూపిస్తుంది. అందువల్ల ఇది అవుట్‌పుట్ పరికరంగా పరిగణించబడుతుంది. మిగిలినవి సమాచారాన్ని అందించే పరికరాలు."
    },
    {
        question: "క్రింది వాటిలో శాశ్వత నిల్వ పరికరం (Secondary Storage Device) ఏది?",
        options: [
            "ర్యామ్ (RAM)",
            "రిజిస్టర్ (Register)",
            "హార్డ్ డిస్క్ (Hard Disk)",
            "క్యాష్ మెమరీ (Cache Memory)"
        ],
        correct: 2,
        explanation: "హార్డ్ డిస్క్ విద్యుత్ సరఫరా నిలిచిపోయిన తరువాత కూడా సమాచారాన్ని భద్రపరుస్తుంది. అందువల్ల ఇది శాశ్వత నిల్వ పరికరంగా ఉపయోగించబడుతుంది కంప్యూటర్లలో విస్తృతంగా ఉపయోగిస్తారు."
    },
    {
        question: "ఎంఎస్ వర్డ్ (MS Word) ప్రధానంగా దేనికి ఉపయోగిస్తారు?",
        options: [
            "డేటాబేస్ నిర్వహణ",
            "పత్రాల తయారీ మరియు సవరణ",
            "ప్రోగ్రామింగ్",
            "వీడియో ఎడిటింగ్"
        ],
        correct: 1,
        explanation: "ఎంఎస్ వర్డ్ పత్రాలను తయారు చేయడం, సవరించడం, ఆకృతీకరించడం, ముద్రించడం వంటి కార్యాలయ పనులకు ఉపయోగించే వర్డ్ ప్రాసెసింగ్ సాఫ్ట్‌వేర్. ఇది విస్తృతంగా ఉపయోగించబడుతుంది విద్యాసంస్థల్లో."
    },
    {
        question: "ఎంఎస్ ఎక్సెల్ (MS Excel) ప్రధానంగా దేనికి ఉపయోగిస్తారు?",
        options: [
            "స్ప్రెడ్షీట్‌లలో గణనలు మరియు డేటా విశ్లేషణ",
            "చిత్రలేఖనం",
            "వీడియో ప్రదర్శన",
            "ఇ-మెయిల్ పంపడం"
        ],
        correct: 0,
        explanation: "ఎంఎస్ ఎక్సెల్ స్ప్రెడ్షీట్‌లలో డేటాను నమోదు చేసి గణనలు, సూత్రాలు, పట్టికలు, చార్టులు తయారు చేయడానికి ఉపయోగించే ప్రముఖ సాఫ్ట్‌వేర్. విశ్లేషణకు అత్యంత ఉపయోగకరమైన సాధనం కూడా."
    },
    {
        question: "ఇ-మెయిల్ (E-mail) యొక్క ప్రధాన ఉపయోగం ఏమిటి?",
        options: [
            "ఫైళ్లను మాత్రమే నిల్వ చేయడం",
            "విద్యుత్ బిల్లులు చెల్లించడం మాత్రమే",
            "ఇంటర్నెట్ ద్వారా సందేశాలు మరియు ఫైళ్లు పంపడం",
            "కంప్యూటర్ వైరస్ తొలగించడం"
        ],
        correct: 2,
        explanation: "ఇ-మెయిల్ ద్వారా ఇంటర్నెట్ సహాయంతో సందేశాలు, పత్రాలు, చిత్రాలు మరియు ఇతర ఫైళ్లను వేగంగా పంపడం, స్వీకరించడం సాధ్యమవుతుంది. ఇది సమర్థవంతమైన సమాచార మార్పిడి సాధనం."
    },
    {
        question: "వెబ్ బ్రౌజర్ (Web Browser) యొక్క ప్రధాన పని ఏమిటి?",
        options: [
            "వైరస్‌లను తొలగించడం",
            "వెబ్ పేజీలను వీక్షించడం",
            "ఫోటోలు ముద్రించడం",
            "స్పీకర్లను నియంత్రించడం"
        ],
        correct: 1,
        explanation: "వెబ్ బ్రౌజర్ ఇంటర్నెట్‌లోని వెబ్‌సైట్లను తెరిచి సమాచారం వీక్షించడానికి ఉపయోగించే సాఫ్ట్‌వేర్. వినియోగదారుడు వెబ్ పేజీలను సులభంగా ఉపయోగించడానికి సహాయపడుతుంది ప్రతిరోజూ."
    },
    {
        question: "క్రింది వాటిలో వెబ్ బ్రౌజర్ (Web Browser) ఏది?",
        options: [
            "గూగుల్ క్రోమ్ (Google Chrome)",
            "ఎంఎస్ వర్డ్ (MS Word)",
            "పెయింట్ (Paint)",
            "నోట్‌ప్యాడ్ (Notepad)"
        ],
        correct: 0,
        explanation: "గూగుల్ క్రోమ్ ఒక వెబ్ బ్రౌజర్. ఇది ఇంటర్నెట్‌లోని వెబ్‌సైట్లను తెరవడానికి, శోధించడానికి మరియు ఆన్‌లైన్ సేవలను ఉపయోగించడానికి రూపొందించబడిన సాఫ్ట్‌వేర్."
    },
    {
        question: "క్రింది వాటిలో సురక్షితమైన పాస్‌వర్డ్ (Strong Password) ఏది?",
        options: [
            "12345678",
            "password",
            "Harsha123",
            "T@p9#Lm2!"
        ],
        correct: 3,
        explanation: "బలమైన పాస్‌వర్డ్‌లో పెద్ద, చిన్న అక్షరాలు, సంఖ్యలు, ప్రత్యేక గుర్తులు కలిపి ఉండాలి. ఊహించడం కష్టంగా ఉండటం వల్ల ఖాతా భద్రత మెరుగుపడుతుంది గణనీయంగా ఎల్లప్పుడూ."
    },
    {
        question: "ఫిషింగ్ (Phishing) అంటే ఏమిటి?",
        options: [
            "చేపలు పట్టే విధానం",
            "మోసపూరిత సందేశాల ద్వారా వ్యక్తిగత సమాచారాన్ని దొంగిలించే ప్రయత్నం",
            "కంప్యూటర్ వేగం పెంచే సాఫ్ట్‌వేర్",
            "ఫైళ్లను కుదించే ప్రక్రియ"
        ],
        correct: 1,
        explanation: "ఫిషింగ్‌లో నకిలీ ఇ-మెయిల్లు లేదా వెబ్‌సైట్ల ద్వారా వినియోగదారుల పాస్‌వర్డ్లు, బ్యాంకు వివరాలు వంటి వ్యక్తిగత సమాచారాన్ని మోసపూరితంగా సేకరించడానికి ప్రయత్నిస్తారు. జాగ్రత్త అవసరం ఎల్లప్పుడూ."
    },
    {
        question: "సమాచార మరియు ప్రసార సాంకేతికత (ICT)ను తరగతి గదిలో ఉపయోగించడం వల్ల ప్రధాన ప్రయోజనం ఏమిటి?",
        options: [
            "పాఠ్యపుస్తకాల అవసరం పూర్తిగా తొలగిపోతుంది",
            "విద్యార్థుల అభ్యాసాన్ని మరింత ఆసక్తికరంగా మరియు పరస్పర చర్యతో కూడినదిగా చేస్తుంది",
            "ఉపాధ్యాయుడి పాత్ర అవసరం ఉండదు",
            "పరీక్షలు నిర్వహించాల్సిన అవసరం ఉండదు"
        ],
        correct: 1,
        explanation: "ఐసీటీ ద్వారా చిత్రాలు, వీడియోలు, అనుకరణలు, పరస్పర చర్యలు ఉపయోగించి అభ్యాసం ఆసక్తికరంగా మారుతుంది. విద్యార్థుల అవగాహన, పాల్గొనడం మరియు అభ్యాస ఫలితాలు మెరుగుపడతాయి సమర్థవంతంగా."
    },
    {
        question: "డిజిటల్ భద్రత (Digital Safety) దృష్ట్యా అపరిచితుల నుండి వచ్చిన అనుమానాస్పద లింకులను అందుకున్నప్పుడు సరైన చర్య ఏమిటి?",
        options: [
            "వెంటనే తెరవాలి",
            "అందరికీ పంపాలి",
            "తెరవకుండా తొలగించి అవసరమైతే నివేదించాలి",
            "పాస్‌వర్డ్ నమోదు చేయాలి"
        ],
        correct: 2,
        explanation: "అనుమానాస్పద లింకులు మాల్వేర్ లేదా ఫిషింగ్‌కు దారితీయవచ్చు. వాటిని తెరవకుండా తొలగించి అవసరమైతే సంబంధిత అధికారులకు లేదా సేవాదాతకు నివేదించడం సురక్షితమైన చర్య అవుతుంది."
    },
    {
        question: "ఉపాధ్యాయుడు విద్యార్థులతో ఆన్‌లైన్‌లో అసైన్‌మెంట్‌లు పంచుకోవడం, సేకరించడం కోసం అత్యంత అనుకూలమైన సాధనం ఏది?",
        options: [
            "డిజిటల్ అభ్యాస నిర్వహణ వ్యవస్థ (Learning Management System - LMS)",
            "కాలిక్యులేటర్",
            "పెన్ డ్రైవ్ మాత్రమే",
            "స్పీకర్"
        ],
        correct: 0,
        explanation: "లెర్నింగ్ మేనేజ్‌మెంట్ సిస్టమ్ ద్వారా ఉపాధ్యాయుడు అసైన్‌మెంట్‌లు, పాఠ్యసామగ్రి, మూల్యాంకనాలు, అభిప్రాయాలు ఒకే వేదికలో నిర్వహించగలడు. ఇది ఆన్‌లైన్ బోధనను సమర్థవంతంగా సులభతరం చేస్తుంది."
    },
    {
        question: "క్లౌడ్ నిల్వ (Cloud Storage) యొక్క ముఖ్యమైన ప్రయోజనం ఏమిటి?",
        options: [
            "ఫైళ్లు ఒకే కంప్యూటర్‌లో మాత్రమే ఉంటాయి",
            "ఇంటర్నెట్ ద్వారా వివిధ పరికరాల నుంచి ఫైళ్లను పొందవచ్చు",
            "ఇది ఇంటర్నెట్ లేకుండా మాత్రమే పనిచేస్తుంది",
            "ఇది కేవలం వీడియోలకే ఉపయోగపడుతుంది"
        ],
        correct: 1,
        explanation: "క్లౌడ్ నిల్వలో ఫైళ్లు ఆన్‌లైన్ సర్వర్లలో భద్రపరచబడతాయి. ఇంటర్నెట్ ఉన్న ఏ పరికరం నుంచైనా వాటిని సురక్షితంగా పొందడం, పంచుకోవడం మరియు నవీకరించడం సాధ్యమవుతుంది."
    },
    {
        question: "క్రింది వాక్యంలో గీత గీసిన పదానికి విరుద్ధపదం ఏది?\n\n'ఆమె ఎల్లప్పుడూ **వినయంగా** ప్రవర్తిస్తుంది.'",
        options: [
            "అహంకారంగా",
            "మర్యాదగా",
            "సంతోషంగా",
            "సహనంగా"
        ],
        correct: 0,
        explanation: "వినయం అంటే నమ్రత, మర్యాదతో ప్రవర్తించడం. దీనికి విరుద్ధమైన భావాన్ని సూచించే పదం అహంకారంగా. మిగిలిన పదాలు వినయానికి వ్యతిరేక అర్థాన్ని సూచించవు పూర్తిగా కావు."
    },
    {
        question: "క్రింది పదాల్లో శుద్ధరూపం ఏది?",
        options: [
            "ప్రదానోపాధ్యాయుడు",
            "ప్రధానోపాధ్యాయుడు",
            "ప్రధానోపద్యాయుడు",
            "ప్రధానోపాధ్యాయడు"
        ],
        correct: 1,
        explanation: "ప్రధానోపాధ్యాయుడు అనే పదమే వ్యాకరణపరంగా, అక్షరదోషరహితంగా సరైన రూపం. మిగిలిన ఎంపికల్లో అక్షరాల మార్పు లేదా లోపం కారణంగా అవి శుద్ధరూపాలు కావు."
    },
    {
        question: "'చేయి కలపడం' అనే జాతీయం యొక్క సరైన అర్థం ఏమిటి?",
        options: [
            "చేతులు కడుక్కోవడం",
            "సహకరించడం",
            "వివాదించడం",
            "శిక్షించడం"
        ],
        correct: 1,
        explanation: "చేయి కలపడం అనే జాతీయం కలిసి పనిచేయడం, సహకరించడం అనే భావాన్ని సూచిస్తుంది. ఇది శారీరక చర్యను కాకుండా సహాయ సహకార భావాన్ని వ్యక్తపరుస్తుంది సందర్భానుసారంగా ఎల్లప్పుడూ."
    },
    {
        question: "క్రింది వాటిలో సమాస పదం ఏది?",
        options: [
            "పాఠశాల",
            "రాజమార్గం",
            "పుస్తకం",
            "విద్యార్థి"
        ],
        correct: 1,
        explanation: "రాజమార్గం రెండు పదాల కలయికతో ఏర్పడిన సమాస పదం. మిగిలిన పదాలు సమాస నిర్మాణాన్ని సూచించవు. సమాసంలో పదాలు కలిసి కొత్త భావాన్ని ఇస్తాయి."
    },
    {
        question: "క్రింది వాక్యంలో క్రియ పదం ఏది?\n\n'రాము ప్రతిరోజూ పాఠశాలకు వెళ్తాడు.'",
        options: [
            "రాము",
            "ప్రతిరోజూ",
            "పాఠశాలకు",
            "వెళ్తాడు"
        ],
        correct: 3,
        explanation: "వాక్యంలో జరిగే పనిని సూచించే పదాన్ని క్రియ అంటారు. ఇక్కడ వెళ్తాడు అనే పదం రాము చేసే చర్యను సూచిస్తున్నందున అది క్రియ పదం అవుతుంది."
    },
    {
        question: "'ఆకాశాన్ని అందుకోవడం' అనే జాతీయానికి సరైన భావం ఏమిటి?",
        options: [
            "ఆకాశంలో ఎగరడం",
            "అసాధ్యమైన పనిని చేయాలని ప్రయత్నించడం",
            "వర్షాన్ని ఆపడం",
            "ఎత్తైన భవనం నిర్మించడం"
        ],
        correct: 1,
        explanation: "ఆకాశాన్ని అందుకోవడం అనే జాతీయం సాధ్యం కాని లేదా అత్యంత కష్టమైన లక్ష్యాన్ని సాధించడానికి ప్రయత్నించడం అనే భావాన్ని సూచిస్తుంది. ఇది రూపకాలంకార ప్రయోగంగా ఉపయోగిస్తారు."
    },
    {
        question: "క్రింది పదాల్లో బహువచన రూపం సరైనది ఏది?",
        options: [
            "పుస్తకములు",
            "పుస్తకాలు",
            "పుస్తకాల్",
            "పుస్తకలు"
        ],
        correct: 1,
        explanation: "పుస్తకం యొక్క ప్రామాణిక బహువచన రూపం పుస్తకాలు. ఇతర ఎంపికలు వ్యాకరణపరంగా లేదా వాడుకపరంగా సరైన రూపాలు కావు. ప్రామాణిక తెలుగు భాషలో ఇదే ఉపయోగిస్తారు."
    },
    {
        question: "క్రింది వాటిలో పర్యాయపదం జంట సరైనది ఏది?",
        options: [
            "సూర్యుడు - రవి",
            "నీరు - నిప్పు",
            "రాత్రి - పగలు",
            "చెట్టు - పువ్వు"
        ],
        correct: 0,
        explanation: "సూర్యుడు మరియు రవి రెండూ ఒకే అర్థాన్ని సూచించే పర్యాయపదాలు. మిగిలిన ఎంపికల్లో పదాలు వేర్వేరు భావాలను సూచిస్తాయి. అందువల్ల అవి పర్యాయపదాలు కావు."
    },
    {
        question: "క్రింది వాక్యంలో విశేషణం ఏది?\n\n'తెలివైన విద్యార్థి బహుమతి పొందాడు.'",
        options: [
            "తెలివైన",
            "విద్యార్థి",
            "బహుమతి",
            "పొందాడు"
        ],
        correct: 0,
        explanation: "నామవాచకానికి గుణాన్ని తెలిపే పదాన్ని విశేషణం అంటారు. ఇక్కడ విద్యార్థి యొక్క లక్షణాన్ని తెలిపే తెలివైన అనే పదం విశేషణంగా ఉపయోగించబడింది ఈ వాక్యంలో స్పష్టంగా."
    },
    {
        question: "క్రింది పదాల్లో సరైన సంధి పదం ఏది?",
        options: [
            "దేవాలయం",
            "దేవఆలయం",
            "దేవ ఆలయము",
            "దేవాలయములు"
        ],
        correct: 0,
        explanation: "దేవ + ఆలయం కలయికతో దేవాలయం అనే సంధి పదం ఏర్పడింది. మిగిలిన ఎంపికలు సంధి నియమాలకు అనుగుణంగా లేవు. సరైన రూపం ఇదే తెలుగు వ్యాకరణంలో."
    },
    {
        question: "క్రింది వాక్యంలో కర్త ఏది?\n\n'సీత కథను చదివింది.'",
        options: [
            "సీత",
            "కథను",
            "చదివింది",
            "ను"
        ],
        correct: 0,
        explanation: "వాక్యంలో చర్యను నిర్వహించే వ్యక్తిని కర్త అంటారు. ఇక్కడ చదివింది అనే పనిని సీత నిర్వహించినందున సీత కర్తగా గుర్తించబడుతుంది. ఇది ప్రాథమిక వ్యాకరణ నియమం."
    },
    {
        question: "క్రింది పదాల్లో తత్సమ పదం ఏది?",
        options: [
            "విద్య",
            "బడి",
            "ఇల్లు",
            "చెయ్యి"
        ],
        correct: 0,
        explanation: "విద్య అనే పదం సంస్కృతం నుండి మార్పులేకుండా వచ్చిన తత్సమ పదం. మిగిలిన పదాలు తద్భవ లేదా దేశ్య పదాలుగా పరిగణించబడతాయి తెలుగు వ్యాకరణంలో సాధారణంగా."
    },
    {
        question: "క్రింది వాటిలో సరైన సామెత ఏది?",
        options: [
            "మొక్కై వంగనిది మానై వంగునా",
            "మొక్క వంగితే మనిషి వంగడు",
            "చెట్టు వంగితే పండు రాదు",
            "పిల్ల వంగితే పాఠం రాదు"
        ],
        correct: 0,
        explanation: "మొక్కై వంగనిది మానై వంగునా అనే సామెత చిన్నప్పుడే మంచి అలవాట్లు నేర్పాలని సూచిస్తుంది. ఇది తెలుగు భాషలో ప్రసిద్ధమైన సామెతగా విస్తృతంగా ఉపయోగిస్తారు."
    },
    {
        question: "క్రింది వాక్యంలో సరైన విరామచిహ్నాలతో ఉన్నది ఏది?",
        options: [
            "రాము, నువ్వు ఎక్కడికి వెళ్తున్నావు?",
            "రాము నువ్వు, ఎక్కడికి వెళ్తున్నావు?",
            "రాము నువ్వు ఎక్కడికి, వెళ్తున్నావు?",
            "రాము నువ్వు ఎక్కడికి వెళ్తున్నావు,"
        ],
        correct: 0,
        explanation: "సంబోధన తర్వాత కామా, ప్రశ్నార్థక వాక్యం చివర ప్రశ్నార్థకం ఉపయోగించడం తెలుగు విరామచిహ్నాల నియమాలకు అనుగుణం. అందువల్ల మొదటి వాక్యమే సరైనది వ్యాకరణపరంగా ఉంటుంది."
    },
    {
        question: "పఠన నైపుణ్యాన్ని (Reading Comprehension) మెరుగుపరచడానికి అత్యంత ఉపయుక్తమైన అలవాటు ఏది?",
        options: [
            "కేవలం ప్రశ్నల జవాబులు కంఠస్థం చేయడం",
            "నిత్యం వివిధ రకాల పాఠ్యాంశాలను చదవడం",
            "వ్యాకరణాన్ని మాత్రమే చదవడం",
            "పదాలను విడివిడిగా కంఠస్థం చేయడం"
        ],
        correct: 1,
        explanation: "వివిధ రకాల పాఠ్యాంశాలను నిరంతరం చదవడం వల్ల పదసంపద, భావగ్రహణం, విశ్లేషణా సామర్థ్యం మెరుగుపడతాయి. ఇది పఠన నైపుణ్యాన్ని సమగ్రంగా అభివృద్ధి చేసే ఉత్తమ అలవాటు అవుతుంది."
    },
    {
        question: "క్రింది గద్యాంశాన్ని చదివి ప్రశ్నకు సమాధానం గుర్తించండి.\n\n'పుస్తకాలు మనిషికి మంచి మిత్రులు. అవి జ్ఞానాన్ని పెంచడంతో పాటు ఆలోచనా శక్తిని కూడా అభివృద్ధి చేస్తాయి. ప్రతిరోజూ పఠనం చేసే అలవాటు ఉన్నవారు జీవితంలో మంచి నిర్ణయాలు తీసుకోగలుగుతారు.'\n\nగద్యాంశం ప్రకారం పుస్తకాల ప్రధాన ప్రయోజనం ఏమిటి?",
        options: [
            "సమయాన్ని మాత్రమే గడపడం",
            "జ్ఞానాన్ని మరియు ఆలోచనా శక్తిని పెంపొందించడం",
            "కేవలం పరీక్షలలో ఉత్తీర్ణత సాధించడం",
            "వినోదాన్ని మాత్రమే అందించడం"
        ],
        correct: 1,
        explanation: "గద్యాంశంలో పుస్తకాలు జ్ఞానాన్ని పెంచి ఆలోచనా శక్తిని అభివృద్ధి చేస్తాయని స్పష్టంగా పేర్కొన్నారు. అందువల్ల రెండవ ఎంపిక గద్యాంశ భావానికి పూర్తిగా అనుగుణంగా ఉంటుంది మరియు సరైన సమాధానం."
    },
    {
        question: "పై గద్యాంశం ప్రకారం మంచి నిర్ణయాలు తీసుకోవడానికి దోహదపడే అలవాటు ఏది?",
        options: [
            "ఆటలు ఆడడం",
            "ప్రతిరోజూ పఠనం చేయడం",
            "ఎక్కువసేపు నిద్రపోవడం",
            "టెలివిజన్ చూడడం"
        ],
        correct: 1,
        explanation: "గద్యాంశంలో ప్రతిరోజూ పఠనం చేసే అలవాటు ఉన్నవారు మంచి నిర్ణయాలు తీసుకోగలరని స్పష్టంగా చెప్పబడింది. అందువల్ల రెండవ ఎంపిక మాత్రమే భావానికి సరిపోతుంది పూర్తిగా సరైనది."
    },
    {
        question: "'విద్యార్థులు క్రమశిక్షణతో చదివితే మంచి ఫలితాలు సాధిస్తారు.' ఈ వాక్యంలో క్రియావిశేషణం ఏది?",
        options: [
            "విద్యార్థులు",
            "క్రమశిక్షణతో",
            "చదివితే",
            "ఫలితాలు"
        ],
        correct: 1,
        explanation: "క్రియ ఎలా జరుగుతుందో తెలిపే పదాన్ని క్రియావిశేషణం అంటారు. ఇక్కడ చదివే విధానాన్ని సూచించే క్రమశిక్షణతో అనే పదం క్రియావిశేషణంగా పనిచేస్తుంది ఈ వాక్యంలో స్పష్టంగా."
    },
    {
        question: "'నిజాయితీ' అనే పదానికి సమీపార్థక పదం ఏది?",
        options: [
            "నిష్కపటత్వం",
            "అసూయ",
            "అహంకారం",
            "దురాశ"
        ],
        correct: 0,
        explanation: "నిజాయితీ మరియు నిష్కపటత్వం ఒకే భావాన్ని సూచించే సమీపార్థక పదాలు. మిగిలిన పదాలు భిన్నమైన లక్షణాలను సూచిస్తాయి. అందువల్ల మొదటి ఎంపిక మాత్రమే సరైనది ఇక్కడ."
    },
    {
        question: "క్రింది వాటిలో ద్వంద్వ సమాసం ఏది?",
        options: [
            "తల్లిదండ్రులు",
            "రాజభవనం",
            "పాదరక్షలు",
            "పాఠశాల"
        ],
        correct: 0,
        explanation: "తల్లి మరియు తండ్రి అనే రెండు సమాన ప్రాధాన్యం గల పదాల కలయికతో తల్లిదండ్రులు అనే ద్వంద్వ సమాసం ఏర్పడింది. ఇది సమాస నియమాలకు అనుగుణమైన ఉదాహరణ."
    },
    {
        question: "'కన్నుల పండుగ' అనే జాతీయం యొక్క భావం ఏమిటి?",
        options: [
            "కన్నులకు వ్యాధి రావడం",
            "చాలా అందంగా కనిపించడం",
            "కన్నీళ్లు రావడం",
            "నిద్రపోవడం"
        ],
        correct: 1,
        explanation: "కన్నుల పండుగ అనే జాతీయం అత్యంత అందమైన దృశ్యం లేదా మనోహరమైన విషయాన్ని చూసి ఆనందించడం అనే భావాన్ని వ్యక్తపరుస్తుంది. ఇది రూపక ప్రయోగంగా ప్రసిద్ధి పొందింది."
    },
    {
        question: "క్రింది పదాల్లో దేశ్య పదం ఏది?",
        options: [
            "బడి",
            "విద్య",
            "విద్యాలయం",
            "ప్రజ్ఞ"
        ],
        correct: 0,
        explanation: "బడి స్వచ్ఛమైన తెలుగు మూలం గల దేశ్య పదంగా పరిగణించబడుతుంది. మిగిలిన పదాలు సంస్కృత ప్రభావంతో వచ్చిన తత్సమ లేదా తద్భవ పదాలకు చెందుతాయి సాధారణంగా."
    },
    {
        question: "'ఆయన మాట నిలబెట్టుకున్నాడు.' ఈ వాక్యంలో 'మాట నిలబెట్టుకోవడం' అంటే ఏమిటి?",
        options: [
            "బిగ్గరగా మాట్లాడడం",
            "ఇచ్చిన వాగ్దానాన్ని నెరవేర్చడం",
            "మాట్లాడకుండా ఉండడం",
            "ఇతరులను ప్రశంసించడం"
        ],
        correct: 1,
        explanation: "మాట నిలబెట్టుకోవడం అంటే ఇచ్చిన హామీ లేదా వాగ్దానాన్ని తప్పకుండా నెరవేర్చడం. ఇది వ్యక్తి విశ్వసనీయతను మరియు బాధ్యతాయుతమైన ప్రవర్తనను సూచించే జాతీయం అవుతుంది."
    },
    {
        question: "క్రింది వాటిలో సరైన విరుద్ధపదాల జంట ఏది?",
        options: [
            "విజయం - అపజయం",
            "విజయం - గెలుపు",
            "ఆనందం - సంతోషం",
            "వేగం - త్వర"
        ],
        correct: 0,
        explanation: "విజయం మరియు అపజయం పరస్పర విరుద్ధమైన అర్థాలను సూచిస్తాయి. మిగిలిన ఎంపికల్లో పదాలు సమానార్థకాలు లేదా సమీపార్థకాలు కావడంతో విరుద్ధపదాలుగా పరిగణించబడవు."
    },
    {
        question: "'సమయం అమూల్యమైనది.' ఈ వాక్యంలో నామవాచకం ఏది?",
        options: [
            "సమయం",
            "అమూల్యమైనది",
            "అనే",
            "ది"
        ],
        correct: 0,
        explanation: "వ్యక్తి, వస్తువు, స్థలం లేదా భావాన్ని సూచించే పదాన్ని నామవాచకం అంటారు. ఇక్కడ సమయం అనే భావాన్ని సూచించే పదం నామవాచకంగా ఉపయోగించబడింది స్పష్టంగా ఈ వాక్యంలో."
    },
    {
        question: "క్రింది వాటిలో సరైన వాక్యం ఏది?",
        options: [
            "విద్యార్థులు పాఠం చదువుతున్నాడు.",
            "విద్యార్థులు పాఠం చదువుతున్నారు.",
            "విద్యార్థులు పాఠం చదువుతున్నాను.",
            "విద్యార్థులు పాఠం చదువుతున్నావు."
        ],
        correct: 1,
        explanation: "విద్యార్థులు బహువచనం కాబట్టి దానికి అనుగుణంగా చదువుతున్నారు అనే బహువచన క్రియ వాడాలి. అందువల్ల రెండవ వాక్యం మాత్రమే వ్యాకరణపరంగా సరైనది పూర్తిగా ఉంటుంది."
    },
    {
        question: "పఠనానంతర కార్యకలాపం (Post-reading Activity) యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        options: [
            "పాఠాన్ని కంఠస్థం చేయించడం",
            "పాఠ్యాంశంపై అవగాహనను పరిశీలించి విస్తరించడం",
            "పాఠాన్ని మళ్లీ చదవకుండా చేయడం",
            "వ్యాకరణాన్ని మాత్రమే బోధించడం"
        ],
        correct: 1,
        explanation: "పఠనానంతర కార్యకలాపాలు విద్యార్థి పాఠాన్ని ఎంతవరకు అర్థం చేసుకున్నాడో తెలుసుకుని, భావాన్ని విస్తరించడానికి మరియు అన్వయించడానికి అవకాశాన్ని కల్పిస్తాయి. అభ్యాసం మరింత స్థిరపడుతుంది."
    },
    {
        question: "భాషా బోధనలో శ్రవణ నైపుణ్యాన్ని అభివృద్ధి చేయడానికి అత్యంత అనుకూలమైన కార్యాచరణ ఏది?",
        options: [
            "కథ విని ప్రశ్నలకు సమాధానాలు చెప్పడం",
            "వ్యాకరణ నియమాలు వ్రాయడం",
            "పదాలను కంఠస్థం చేయడం",
            "అక్షరాలను మాత్రమే వ్రాయడం"
        ],
        correct: 0,
        explanation: "శ్రవణ నైపుణ్యం అభివృద్ధికి కథలు, సంభాషణలు శ్రద్ధగా విని వాటిపై స్పందించడం అత్యంత సమర్థవంతమైన పద్ధతి. ఇది భావగ్రహణం మరియు వినికిడి సామర్థ్యాన్ని పెంచుతుంది గణనీయంగా."
    },
    {
        question: "భాషా బోధనలో పదసంపద (Vocabulary) అభివృద్ధికి ఉత్తమమైన పద్ధతి ఏది?",
        options: [
            "పదాలను అర్థంతో సందర్భంలో ఉపయోగించడం",
            "పదాలను మాత్రమే కంఠస్థం చేయడం",
            "వ్యాకరణ నియమాలు మాత్రమే చదవడం",
            "పరీక్షల ముందు మాత్రమే చదవడం"
        ],
        correct: 0,
        explanation: "పదాలను సందర్భానుసారంగా ఉపయోగించడం ద్వారా వాటి అర్థం, వినియోగం మరియు గుర్తుంచుకునే సామర్థ్యం మెరుగుపడుతుంది. ఇది పదసంపద అభివృద్ధికి అత్యంత ప్రభావవంతమైన విధానంగా గుర్తించబడింది."
    },
    {
        question: "భాషా అభ్యాసంలో 'విని - మాట్లాడి - చదివి - వ్రాయడం' అనే సరైన క్రమాన్ని సూచించే సంక్షిప్త రూపం ఏది?",
        options: [
            "LSRW",
            "RLWS",
            "WSLR",
            "SRWL"
        ],
        correct: 0,
        explanation: "భాషా అభ్యాసంలో ముందుగా వినడం, తరువాత మాట్లాడడం, చదవడం, చివరకు వ్రాయడం సహజ క్రమం. దీనినే Listening, Speaking, Reading, Writing అంటే LSRW అని సూచిస్తారు."
    },
    {
        question: "Identify the part containing the error.\n\nThe children (A) / was playing (B) / in the playground (C) / yesterday. (D)",
        options: [
            "A",
            "B",
            "C",
            "D"
        ],
        correct: 1,
        explanation: "The plural subject 'children' requires the plural auxiliary verb 'were.' Therefore, 'was playing' should be replaced with 'were playing' to make the sentence grammatically correct."
    },
    {
        question: "Choose the correct improvement.\n\nShe is senior than me.",
        options: [
            "She is senior to me.",
            "She is more senior than me.",
            "She is senior from me.",
            "No improvement."
        ],
        correct: 0,
        explanation: "The adjective 'senior' is always followed by the preposition 'to,' not 'than.' Hence, 'She is senior to me' is the grammatically correct expression."
    },
    {
        question: "Choose the correct passive voice.\n\nThe teacher praised the student.",
        options: [
            "The student praised by the teacher.",
            "The student was praised by the teacher.",
            "The student is praised by the teacher.",
            "The teacher was praised by the student."
        ],
        correct: 1,
        explanation: "The simple past active sentence changes into passive by using 'was' plus the past participle 'praised.' Therefore, 'The student was praised by the teacher' is correct."
    },
    {
        question: "Choose the correct indirect speech.\n\nHe said, \"I am busy.\"",
        options: [
            "He said that I am busy.",
            "He said that he was busy.",
            "He told that he was busy.",
            "He said he is busy."
        ],
        correct: 1,
        explanation: "In indirect speech, the pronoun changes according to the speaker and the present tense changes to past tense after a reporting verb in the past."
    },
    {
        question: "Fill in the blank.\n\nShe has been working here ______ 2021.",
        options: [
            "for",
            "since",
            "from",
            "by"
        ],
        correct: 1,
        explanation: "The preposition 'since' is used before a specific point of time. Since '2021' refers to a definite starting year, 'since' is the correct answer."
    },
    {
        question: "Choose the correctly spelt word.",
        options: [
            "Recieve",
            "Receive",
            "Receeve",
            "Receve"
        ],
        correct: 1,
        explanation: "The correct spelling is 'Receive.' Remember the spelling rule: 'i before e except after c.' The remaining options contain spelling mistakes and are incorrect."
    },
    {
        question: "Choose the synonym of 'Ancient'.",
        options: [
            "Modern",
            "Old",
            "Recent",
            "New"
        ],
        correct: 1,
        explanation: "The word 'Ancient' means very old or belonging to the distant past. Therefore, 'Old' is its correct synonym among the given choices provided here."
    },
    {
        question: "Choose the antonym of 'Victory'.",
        options: [
            "Success",
            "Achievement",
            "Defeat",
            "Triumph"
        ],
        correct: 2,
        explanation: "The opposite meaning of 'Victory' is 'Defeat.' Victory indicates winning, whereas defeat refers to losing. Therefore, 'Defeat' is the appropriate antonym in this context."
    },
    {
        question: "Choose the correct article.\n\nHe is ______ honest man.",
        options: [
            "a",
            "an",
            "the",
            "no article"
        ],
        correct: 1,
        explanation: "The word 'honest' begins with a silent 'h,' producing a vowel sound. Therefore, the article 'an' is correctly used before the word 'honest' here."
    },
    {
        question: "Choose the correct question tag.\n\nShe can swim, ______?",
        options: [
            "can't she",
            "can she",
            "doesn't she",
            "didn't she"
        ],
        correct: 0,
        explanation: "A positive statement requires a negative question tag. Since the auxiliary verb is 'can,' the correct tag becomes 'can't she' according to grammar rules."
    },
    {
        question: "Read the passage and answer the question.\n\nRavi loves reading books. Every evening he spends an hour in the library. He believes reading improves knowledge and imagination.\n\nWhy does Ravi spend time in the library?",
        options: [
            "To play games",
            "To improve knowledge and imagination",
            "To watch movies",
            "To meet friends"
        ],
        correct: 1,
        explanation: "The passage clearly states that Ravi believes reading improves knowledge and imagination. Therefore, he spends time in the library to develop these qualities through regular reading."
    },
    {
        question: "According to the passage, how much time does Ravi spend in the library every evening?",
        options: [
            "Half an hour",
            "One hour",
            "Two hours",
            "Three hours"
        ],
        correct: 1,
        explanation: "The passage explicitly mentions that Ravi spends one hour in the library every evening. Hence, 'One hour' is the correct answer based on the given information."
    },
    {
        question: "Choose the correct meaning of the idiom.\n\n'Once in a blue moon'",
        options: [
            "Every day",
            "Very frequently",
            "Very rarely",
            "At midnight"
        ],
        correct: 2,
        explanation: "The idiom 'Once in a blue moon' refers to something that happens very rarely. It does not describe regular, frequent, or daily events in usage."
    },
    {
        question: "Arrange the words to form a meaningful sentence.\n\nalways / speaks / politely / she",
        options: [
            "Always politely she speaks.",
            "She speaks always politely.",
            "She always speaks politely.",
            "Politely speaks she always."
        ],
        correct: 2,
        explanation: "The correct English word order is Subject + Adverb + Verb + Adverb. Therefore, 'She always speaks politely' forms the grammatically correct and natural sentence."
    },
    {
        question: "Which word would appear first in a dictionary?",
        options: [
            "Ability",
            "Able",
            "About",
            "Above"
        ],
        correct: 0,
        explanation: "Dictionary words are arranged alphabetically. 'Ability' comes before 'Able,' 'About,' and 'Above' because its letter sequence appears earliest in alphabetical dictionary order."
    },
    {
        question: "Choose the correctly punctuated sentence.",
        options: [
            "What a beautiful flower.",
            "What a beautiful flower!",
            "What, a beautiful flower!",
            "What a beautiful, flower!"
        ],
        correct: 1,
        explanation: "An exclamatory sentence expresses strong emotion and ends with an exclamation mark. Therefore, 'What a beautiful flower!' is punctuated correctly according to standard English grammar."
    },
    {
        question: "Choose the correct form of the verb.\n\nIf I ______ enough money, I would buy a laptop.",
        options: [
            "have",
            "had",
            "will have",
            "has"
        ],
        correct: 1,
        explanation: "A second conditional sentence uses the simple past tense in the if-clause and 'would' with the base verb in the main clause. Hence, 'had' is correct."
    },
    {
        question: "Choose the correct preposition.\n\nThe train arrived ______ the station on time.",
        options: [
            "at",
            "in",
            "on",
            "into"
        ],
        correct: 0,
        explanation: "The preposition 'at' is used with specific places such as stations, airports, and bus stops. Therefore, 'arrived at the station' is grammatically correct English usage."
    },
    {
        question: "Choose the correctly spelt word.",
        options: [
            "Accomodation",
            "Accommodation",
            "Acommodation",
            "Accommadation"
        ],
        correct: 1,
        explanation: "The correct spelling is 'Accommodation,' containing double 'c' and double 'm.' The remaining spellings omit or change letters, making them incorrect according to standard English."
    },
    {
        question: "Choose the synonym of 'Generous'.",
        options: [
            "Kind",
            "Selfish",
            "Cruel",
            "Lazy"
        ],
        correct: 0,
        explanation: "The word 'Generous' means willing to give or share freely. 'Kind' best matches this meaning, whereas the remaining options express different or opposite qualities."
    },
    {
        question: "Choose the antonym of 'Expand'.",
        options: [
            "Increase",
            "Develop",
            "Reduce",
            "Grow"
        ],
        correct: 2,
        explanation: "The verb 'Expand' means to become larger or wider. Its opposite is 'Reduce,' which means to make something smaller in size or amount."
    },
    {
        question: "Choose the correct passive voice.\n\nPeople speak Telugu in Andhra Pradesh.",
        options: [
            "Telugu is spoken in Andhra Pradesh.",
            "Telugu was spoken in Andhra Pradesh.",
            "Telugu speaks in Andhra Pradesh.",
            "People are spoken in Andhra Pradesh."
        ],
        correct: 0,
        explanation: "The present simple passive is formed using 'is' plus the past participle. Therefore, 'Telugu is spoken in Andhra Pradesh' is the correct passive construction."
    },
    {
        question: "Choose the correct indirect speech.\n\nThe teacher said, \"Work hard.\"",
        options: [
            "The teacher said that work hard.",
            "The teacher advised us to work hard.",
            "The teacher told work hard.",
            "The teacher said work hard."
        ],
        correct: 1,
        explanation: "Imperative sentences in indirect speech are commonly reported using verbs like 'advised,' 'requested,' or 'ordered' followed by an infinitive. Hence, the second option is correct."
    },
    {
        question: "Fill in the blank.\n\nNeither Ravi nor his friends ______ present today.",
        options: [
            "was",
            "were",
            "is",
            "has"
        ],
        correct: 1,
        explanation: "With 'Neither...nor,' the verb agrees with the subject nearest to it. Since 'friends' is plural, the correct verb is 'were' in this sentence."
    },
    {
        question: "Choose the correct article.\n\nShe bought ______ umbrella yesterday.",
        options: [
            "a",
            "an",
            "the",
            "no article"
        ],
        correct: 1,
        explanation: "The noun 'umbrella' begins with a vowel sound. Therefore, the indefinite article 'an' should be used before it according to English grammar rules."
    },
    {
        question: "Read the passage and answer the question.\n\nTrees are essential for life. They provide oxygen, reduce pollution, and help maintain ecological balance. Everyone should protect trees for a healthier environment.\n\nAccording to the passage, why should people protect trees?",
        options: [
            "To build houses",
            "To reduce rainfall",
            "To ensure a healthier environment",
            "To increase pollution"
        ],
        correct: 2,
        explanation: "The passage concludes that protecting trees contributes to a healthier environment. Therefore, the third option directly reflects the central idea expressed by the author clearly."
    },
    {
        question: "According to the passage, which one is NOT mentioned as a benefit of trees?",
        options: [
            "Providing oxygen",
            "Reducing pollution",
            "Maintaining ecological balance",
            "Producing electricity"
        ],
        correct: 3,
        explanation: "The passage mentions oxygen, pollution reduction, and ecological balance as benefits. It never states that trees produce electricity. Therefore, the fourth option is the correct answer."
    },
    {
        question: "Choose the meaning of the idiom.\n\n'Hit the nail on the head'",
        options: [
            "To make a mistake",
            "To say exactly the right thing",
            "To work with wood",
            "To speak loudly"
        ],
        correct: 1,
        explanation: "The idiom 'Hit the nail on the head' means saying or doing exactly the right thing. It refers to accuracy rather than physical action or loud speaking."
    },
    {
        question: "Choose the correctly arranged sentence.",
        options: [
            "Yesterday went I to school.",
            "I yesterday school went to.",
            "I went to school yesterday.",
            "Went yesterday I school to."
        ],
        correct: 2,
        explanation: "English sentences usually follow the Subject + Verb + Object + Time pattern. Therefore, 'I went to school yesterday' is the grammatically correct arrangement."
    },
    {
        question: "Which word comes last in dictionary order?",
        options: [
            "Victory",
            "Village",
            "Visitor",
            "Vision"
        ],
        correct: 0,
        explanation: "Dictionary order depends on alphabetical sequence. Among the given words, 'Victory' appears after 'Village,' 'Vision,' and 'Visitor,' making it the last entry alphabetically."
    },
    {
        question: "దృష్టి లోపం (Visual Impairment) ఉన్న విద్యార్థికి బ్రెయిల్ (Braille) లిపిని అభివృద్ధి చేసిన వ్యక్తి ఎవరు?",
        options: [
            "లూయిస్ బ్రెయిల్ (Louis Braille)",
            "జీన్ పియాజే (Jean Piaget)",
            "లెవ్ వైగాట్స్కీ (Lev Vygotsky)",
            "సామ్యూల్ హోవ్ (Samuel Howe)"
        ],
        correct: 0,
        explanation: "లూయిస్ బ్రెయిల్ దృష్టి లోపం ఉన్న వ్యక్తుల కోసం బ్రెయిల్ లిపిని అభివృద్ధి చేశాడు. ఆరు చుక్కల నమూనాతో రూపొందిన ఈ లిపి ప్రపంచవ్యాప్తంగా అంధుల విద్యలో విస్తృతంగా ఉపయోగించబడుతోంది."
    },
    {
        question: "బ్రెయిల్ (Braille) కణం (Cell)లో మొత్తం ఎన్ని చుక్కలు (Dots) ఉంటాయి?",
        options: [
            "4",
            "5",
            "6",
            "8"
        ],
        correct: 2,
        explanation: "ప్రామాణిక బ్రెయిల్ కణం ఆరు చుక్కలతో రూపొందుతుంది. ఈ చుక్కల వివిధ కలయికల ద్వారా అక్షరాలు, సంఖ్యలు, విరామచిహ్నాలు మరియు ఇతర సంకేతాలను సూచిస్తారు సమర్థవంతంగా విద్యలో."
    },
    {
        question: "క్రింది వాటిలో దృష్టి లోపం (Visual Impairment) ఉన్న విద్యార్థికి అత్యంత అనుకూలమైన బోధన సామగ్రి ఏది?",
        options: [
            "బ్రెయిల్ పుస్తకాలు (Braille Books)",
            "చిన్న అక్షరాలతో ముద్రించిన పుస్తకాలు",
            "రంగురంగుల చిత్రాలు మాత్రమే",
            "బోర్డుపై వ్రాసిన సమాచారం మాత్రమే"
        ],
        correct: 0,
        explanation: "బ్రెయిల్ పుస్తకాలు స్పర్శ ద్వారా చదివే అవకాశాన్ని కల్పిస్తాయి. అందువల్ల పూర్తిగా దృష్టి లోపం ఉన్న విద్యార్థుల అభ్యాసానికి ఇవి అత్యంత అనుకూలమైన బోధన సామగ్రిగా పరిగణించబడతాయి."
    },
    {
        question: "తక్కువ దృష్టి (Low Vision) ఉన్న విద్యార్థికి తరగతి గదిలో ఉపాధ్యాయుడు మొదట చేయవలసిన సౌకర్యం ఏది?",
        options: [
            "వెనుక బెంచీలో కూర్చోబెట్టడం",
            "ముందు వరుసలో తగిన వెలుతురుతో కూర్చోబెట్టడం",
            "పాఠశాలకు రానివ్వకపోవడం",
            "వినికిడి ఆధారంగా మాత్రమే బోధించడం"
        ],
        correct: 1,
        explanation: "తక్కువ దృష్టి ఉన్న విద్యార్థిని ముందువరుసలో తగిన వెలుతురుతో కూర్చోబెట్టడం వల్ల బోర్డు స్పష్టంగా కనిపిస్తుంది. అవసరమైన దృశ్య సహాయాలు అందించడం అభ్యాసాన్ని మరింత ప్రభావవంతంగా చేస్తుంది."
    },
    {
        question: "వైట్ కేన్ (White Cane) యొక్క ప్రధాన ఉపయోగం ఏమిటి?",
        options: [
            "రచన చేయడానికి",
            "సురక్షితంగా సంచరించడానికి",
            "శ్రవణాన్ని మెరుగుపరచడానికి",
            "గణిత బోధనకు"
        ],
        correct: 1,
        explanation: "వైట్ కేన్ దృష్టి లోపం ఉన్న వ్యక్తులకు అడ్డంకులను గుర్తించి సురక్షితంగా స్వతంత్రంగా సంచరించేందుకు సహాయపడుతుంది. ఇది దిశానిర్దేశం మరియు చలన శిక్షణలో ముఖ్యమైన సాధనం."
    },
    {
        question: "శ్రవణ లోపం (Hearing Impairment) ఉన్న విద్యార్థులలో శేష శ్రవణ సామర్థ్యాన్ని ఉపయోగించేందుకు సహాయపడే పరికరం ఏది?",
        options: [
            "హియరింగ్ ఎయిడ్ (Hearing Aid)",
            "బ్రెయిల్ స్లేట్",
            "వైట్ కేన్",
            "అబాకస్"
        ],
        correct: 0,
        explanation: "హియరింగ్ ఎయిడ్ శబ్దాన్ని పెంచి మిగిలిన శ్రవణ సామర్థ్యాన్ని సమర్థవంతంగా ఉపయోగించడానికి సహాయపడుతుంది. ఇది వినికిడి శిక్షణ మరియు భాషా అభివృద్ధికి ఉపయోగకరమైన సహాయక పరికరం."
    },
    {
        question: "శ్రవణ లోపం (Hearing Impairment) ఉన్న చిన్నారుల భాషా అభివృద్ధికి అత్యంత ముఖ్యమైన అంశం ఏది?",
        options: [
            "త్వరిత గుర్తింపు మరియు ప్రారంభ జోక్యం",
            "కేవలం పరీక్షలు నిర్వహించడం",
            "వారిని ఒంటరిగా కూర్చోబెట్టడం",
            "రచనాభ్యాసం మాత్రమే చేయించడం"
        ],
        correct: 0,
        explanation: "శ్రవణ లోపాన్ని త్వరగా గుర్తించి ప్రారంభ దశలో జోక్యం చేసుకోవడం వల్ల వినికిడి, భాష, సంభాషణ మరియు సామాజిక నైపుణ్యాల అభివృద్ధికి అత్యుత్తమ ఫలితాలు లభిస్తాయి."
    },
    {
        question: "భారతీయ సంకేత భాష (Indian Sign Language - ISL) ప్రధానంగా ఎవరికి ఉపయోగపడుతుంది?",
        options: [
            "దృష్టి లోపం ఉన్న విద్యార్థులకు",
            "శ్రవణ లోపం ఉన్న విద్యార్థులకు",
            "మేధో వైకల్యం ఉన్న విద్యార్థులకు",
            "అభ్యాస వైకల్యం ఉన్న విద్యార్థులకు"
        ],
        correct: 1,
        explanation: "భారతీయ సంకేత భాష శ్రవణ లోపం ఉన్న వ్యక్తుల సంభాషణకు ఉపయోగించే సహజ దృశ్య భాష. ఇది సంభాషణ, అభ్యాసం మరియు సామాజిక భాగస్వామ్యాన్ని మెరుగుపరుస్తుంది సమర్థవంతంగా."
    },
    {
        question: "కోక్లియర్ ఇంప్లాంట్ (Cochlear Implant) ప్రధానంగా ఎవరికి ఉపయోగపడుతుంది?",
        options: [
            "తక్కువ దృష్టి ఉన్న విద్యార్థులకు",
            "తీవ్రమైన శ్రవణ లోపం ఉన్న వ్యక్తులకు",
            "మాటల లోపం మాత్రమే ఉన్న వారికి",
            "శారీరక వైకల్యం ఉన్న వారికి"
        ],
        correct: 1,
        explanation: "కోక్లియర్ ఇంప్లాంట్ సాధారణ హియరింగ్ ఎయిడ్ ఉపయోగం పరిమితమైన తీవ్రమైన శ్రవణ లోపం ఉన్న వ్యక్తులకు శబ్ద సంకేతాలను నేరుగా నాడీ వ్యవస్థకు అందించేందుకు సహాయపడుతుంది."
    },
    {
        question: "శ్రవణ లోపం (Hearing Impairment) ఉన్న విద్యార్థికి బోధించే సమయంలో ఉపాధ్యాయుడు ముఖ్యంగా పాటించాల్సిన పద్ధతి ఏది?",
        options: [
            "వెనక్కి తిరిగి మాట్లాడడం",
            "ముఖం స్పష్టంగా కనిపించేలా మాట్లాడడం",
            "చాలా వేగంగా మాట్లాడడం",
            "కేవలం బోర్డుపై మాత్రమే వ్రాయడం"
        ],
        correct: 1,
        explanation: "ముఖం స్పష్టంగా కనిపించేలా మాట్లాడడం వల్ల విద్యార్థి పెదవుల కదలికలు, ముఖ భావాలు గమనించి అర్థం చేసుకోవచ్చు. ఇది సమర్థవంతమైన సంభాషణకు సహాయపడుతుంది తరగతి గదిలో."
    },
    {
        question: "దృష్టి లోపం (Visual Impairment) ఉన్న విద్యార్థికి గణిత బోధనలో అత్యంత ఉపయోగకరమైన సాధనం ఏది?",
        options: [
            "టేలర్ ఫ్రేమ్ (Taylor Frame)",
            "ఫ్లాష్ కార్డులు మాత్రమే",
            "రంగు పెన్సిల్లు",
            "చార్ట్ పేపర్ మాత్రమే"
        ],
        correct: 0,
        explanation: "టేలర్ ఫ్రేమ్ బ్రెయిల్ ఆధారంగా గణిత గణనలు చేయడానికి ఉపయోగించే ప్రత్యేక సాధనం. ఇది దృష్టి లోపం ఉన్న విద్యార్థుల సంఖ్యా నైపుణ్యాల అభివృద్ధికి సహాయపడుతుంది సమర్థవంతంగా."
    },
    {
        question: "తక్కువ దృష్టి (Low Vision) ఉన్న విద్యార్థికి క్రింది వాటిలో ఏ సహాయక పరికరం అత్యంత అనుకూలం?",
        options: [
            "లో విజన్ ఎయిడ్స్ (Low Vision Aids)",
            "హియరింగ్ ఎయిడ్ (Hearing Aid)",
            "వీల్ చైర్",
            "కోక్లియర్ ఇంప్లాంట్"
        ],
        correct: 0,
        explanation: "లో విజన్ ఎయిడ్స్ అక్షరాలను పెద్దగా చూపించి మిగిలిన దృష్టిని సమర్థవంతంగా ఉపయోగించుకునే అవకాశం కల్పిస్తాయి. చదవడం, వ్రాయడం మరియు దృశ్య కార్యకలాపాలు సులభమవుతాయి విద్యార్థికి."
    },
    {
        question: "శ్రవణ లోపం (Hearing Impairment) ఉన్న విద్యార్థుల కోసం తరగతి గదిలో శబ్ద కాలుష్యాన్ని తగ్గించడం వల్ల ప్రధాన ప్రయోజనం ఏమిటి?",
        options: [
            "పరీక్షలు సులభమవుతాయి",
            "మాటలను స్పష్టంగా వినడం మరియు అర్థం చేసుకోవడం సులభమవుతుంది",
            "తరగతి సమయం తగ్గుతుంది",
            "హోంవర్క్ అవసరం ఉండదు"
        ],
        correct: 1,
        explanation: "తరగతి గదిలో అనవసర శబ్దాన్ని తగ్గించడం వల్ల ఉపాధ్యాయుని స్వరం స్పష్టంగా వినిపిస్తుంది. ఇది శ్రవణ లోపం ఉన్న విద్యార్థుల వినికిడి మరియు అవగాహనను మెరుగుపరుస్తుంది."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education)లో దృష్టి లోపం మరియు శ్రవణ లోపం ఉన్న విద్యార్థుల కోసం అత్యంత ముఖ్యమైన సూత్రం ఏది?",
        options: [
            "అందరికీ ఒకే విధమైన బోధన",
            "వ్యక్తిగత అవసరాలకు అనుగుణమైన సహాయాలు మరియు బోధన",
            "ప్రత్యేక పాఠ్యపుస్తకాలు మాత్రమే",
            "పరీక్షల నుండి మినహాయింపు మాత్రమే"
        ],
        correct: 1,
        explanation: "సమగ్ర విద్యలో ప్రతి విద్యార్థి ప్రత్యేక అవసరాలను గుర్తించి తగిన సహాయక పరికరాలు, బోధన పద్ధతులు మరియు సహాయక సేవలు అందించడం సమాన విద్యా అవకాశాలకు అత్యంత అవసరం."
    },
    {
        question: "బ్రెయిల్ (Braille) చదివే సమయంలో దృష్టి లోపం ఉన్న విద్యార్థి ప్రధానంగా ఏ ఇంద్రియాన్ని ఉపయోగిస్తాడు?",
        options: [
            "చూపు",
            "స్పర్శ",
            "వాసన",
            "రుచి"
        ],
        correct: 1,
        explanation: "బ్రెయిల్ లిపిలోని చుక్కలను వేళ్లతో స్పర్శించి గుర్తించడం ద్వారా చదవడం జరుగుతుంది. అందువల్ల స్పర్శ ఇంద్రియమే బ్రెయిల్ అభ్యాసంలో ప్రధాన పాత్రను పోషిస్తుంది విద్యార్థుల కోసం."
    },
    {
        question: "మేధో వైకల్యం (Intellectual Disability) నిర్ధారణలో ముఖ్యంగా పరిగణించే మూడు అంశాలు ఏవి?",
        options: [
            "వయస్సు, లింగం, ఎత్తు",
            "మేధస్సు (IQ), అనుకూల ప్రవర్తన (Adaptive Behaviour), 18 సంవత్సరాల లోపు ప్రారంభం",
            "చదవడం, వ్రాయడం, గణితం",
            "దృష్టి, శ్రవణం, మాట్లాడటం"
        ],
        correct: 1,
        explanation: "మేధో వైకల్యం నిర్ధారణకు మేధస్సు పరిమితులు, అనుకూల ప్రవర్తనలో లోపాలు, పదెనిమిది సంవత్సరాల లోపు ప్రారంభమైన పరిస్థితి తప్పనిసరిగా పరిగణించబడతాయి అంతర్జాతీయ ప్రమాణాల ప్రకారం ఎల్లప్పుడూ."
    },
    {
        question: "అమెరికన్ అసోసియేషన్ ఆన్ ఇంటెలెక్చువల్ అండ్ డెవలప్మెంటల్ డిజెబిలిటీస్ (AAIDD) ప్రకారం అనుకూల ప్రవర్తన (Adaptive Behaviour) అంటే ఏమిటి?",
        options: [
            "పరీక్షల్లో ఎక్కువ మార్కులు సాధించడం",
            "రోజువారీ జీవితంలో అవసరమైన భావనాత్మక, సామాజిక, ఆచరణాత్మక నైపుణ్యాలు",
            "కేవలం మాట్లాడే సామర్థ్యం",
            "క్రీడల్లో ప్రతిభ చూపడం"
        ],
        correct: 1,
        explanation: "అనుకూల ప్రవర్తనలో భావనాత్మక, సామాజిక, ఆచరణాత్మక నైపుణ్యాలు ఉంటాయి. ఇవి వ్యక్తి స్వతంత్రంగా జీవించడం, సమాజంలో పాల్గొనడం మరియు రోజువారీ బాధ్యతలను నిర్వహించడానికి అవసరమవుతాయి."
    },
    {
        question: "మేధో వైకల్యం (Intellectual Disability) ఉన్న విద్యార్థికి బోధనలో అత్యంత ప్రభావవంతమైన విధానం ఏది?",
        options: [
            "వేగంగా పాఠ్యాంశాన్ని పూర్తి చేయడం",
            "చిన్న దశలుగా బోధించి పునరావృత అభ్యాసం కల్పించడం",
            "హోంవర్క్ మాత్రమే ఇవ్వడం",
            "మౌఖిక పరీక్షలు మాత్రమే నిర్వహించడం"
        ],
        correct: 1,
        explanation: "చిన్న దశలుగా బోధించడం, పునరావృత అభ్యాసం, దృశ్య సహాయాలు మరియు నిరంతర ప్రోత్సాహం మేధో వైకల్యం ఉన్న విద్యార్థుల అభ్యాసాన్ని స్థిరపరచడంలో అత్యంత ప్రభావవంతమైన బోధనా పద్ధతులు."
    },
    {
        question: "ప్రత్యేక అభ్యాస వైకల్యం (Specific Learning Disability - SLD) ప్రధానంగా దేనిని ప్రభావితం చేస్తుంది?",
        options: [
            "వినికిడి సామర్థ్యాన్ని",
            "చదవడం, వ్రాయడం లేదా గణిత అభ్యాసాన్ని",
            "దృష్టి సామర్థ్యాన్ని",
            "శారీరక ఎదుగుదలను"
        ],
        correct: 1,
        explanation: "ప్రత్యేక అభ్యాస వైకల్యం ప్రధానంగా చదవడం, వ్రాయడం, అక్షరక్రమం లేదా గణిత నైపుణ్యాలను ప్రభావితం చేస్తుంది. సాధారణ మేధస్సు ఉన్నప్పటికీ అభ్యాసంలో నిర్దిష్ట ఇబ్బందులు కనిపిస్తాయి."
    },
    {
        question: "డిస్లెక్సియా (Dyslexia) ప్రధానంగా ఏ నైపుణ్యానికి సంబంధించిన అభ్యాస వైకల్యం?",
        options: [
            "గణితం",
            "చదవడం",
            "రచన",
            "చిత్రలేఖనం"
        ],
        correct: 1,
        explanation: "డిస్లెక్సియా చదవడంలో ఖచ్చితత్వం, ప్రవాహం, పద గుర్తింపు మరియు ధ్వని అవగాహనలో ఇబ్బందులను కలిగించే ప్రత్యేక అభ్యాస వైకల్యం. ఇది మేధస్సుతో సంబంధం కలిగి ఉండదు."
    },
    {
        question: "డిస్గ్రాఫియా (Dysgraphia) ప్రధానంగా ఏ సామర్థ్యాన్ని ప్రభావితం చేస్తుంది?",
        options: [
            "రచన మరియు చేతివ్రాత",
            "వినికిడి",
            "దృష్టి",
            "నడక"
        ],
        correct: 0,
        explanation: "డిస్గ్రాఫియా వల్ల చేతివ్రాత, అక్షర నిర్మాణం, పదాల కూర్పు మరియు వ్రాతలో ఆలోచనలను వ్యక్తపరచడం కష్టమవుతుంది. ఇది రచనా నైపుణ్యాన్ని ప్రధానంగా ప్రభావితం చేస్తుంది."
    },
    {
        question: "డిస్క్యాల్కులియా (Dyscalculia) ప్రధానంగా దేనిలో ఇబ్బందిని కలిగిస్తుంది?",
        options: [
            "చదవడం",
            "గణిత భావనలు మరియు లెక్కలు",
            "మాట్లాడడం",
            "వినికిడి"
        ],
        correct: 1,
        explanation: "డిస్క్యాల్కులియా సంఖ్యల అవగాహన, లెక్కలు, గణిత భావనలు మరియు సమస్య పరిష్కారంలో ఇబ్బందులను కలిగించే ప్రత్యేక అభ్యాస వైకల్యం. ఇది గణిత అభ్యాసాన్ని ప్రభావితం చేస్తుంది."
    },
    {
        question: "ప్రత్యేక అభ్యాస వైకల్యం (Specific Learning Disability - SLD) ఉన్న విద్యార్థుల విషయంలో సరైన ప్రకటన ఏది?",
        options: [
            "వారికి మేధో వైకల్యం తప్పనిసరిగా ఉంటుంది.",
            "సాధారణ లేదా అంతకంటే ఎక్కువ మేధస్సు ఉన్నప్పటికీ అభ్యాసంలో నిర్దిష్ట ఇబ్బందులు ఉండవచ్చు.",
            "వారు చదువుకోలేరు.",
            "వారికి ప్రత్యేక బోధన అవసరం లేదు."
        ],
        correct: 1,
        explanation: "ప్రత్యేక అభ్యాస వైకల్యం ఉన్న విద్యార్థులు సాధారణ లేదా అధిక మేధస్సు కలిగి ఉండవచ్చు. అయినప్పటికీ చదవడం, వ్రాయడం లేదా గణితంలో నిర్దిష్ట ఇబ్బందులు కనిపిస్తాయి తరచుగా."
    },
    {
        question: "వ్యక్తిగత విద్యా ప్రణాళిక (IEP) యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        options: [
            "అందరికీ ఒకే పాఠ్యాంశం బోధించడం",
            "విద్యార్థి వ్యక్తిగత అవసరాలకు అనుగుణంగా లక్ష్యాలు మరియు బోధన ప్రణాళిక రూపొందించడం",
            "కేవలం పరీక్షలు నిర్వహించడం",
            "హాజరు నమోదు చేయడం"
        ],
        correct: 1,
        explanation: "వ్యక్తిగత విద్యా ప్రణాళిక ప్రతి విద్యార్థి అవసరాలు, లక్ష్యాలు, సహాయక సేవలు మరియు మూల్యాంకన విధానాలను నిర్దేశించి వ్యక్తిగత అభ్యాసాన్ని సమర్థవంతంగా ప్రణాళిక చేయడానికి ఉపయోగపడుతుంది."
    },
    {
        question: "మేధో వైకల్యం (Intellectual Disability) ఉన్న విద్యార్థికి స్వయం సంరక్షణ (Self-help Skills) బోధించేటప్పుడు ఉత్తమ పద్ధతి ఏది?",
        options: [
            "ఒకేసారి అన్ని నైపుణ్యాలు బోధించడం",
            "పని విశ్లేషణ (Task Analysis) ద్వారా చిన్న దశలుగా బోధించడం",
            "వీడియో చూపించడం మాత్రమే",
            "హోంవర్క్ ఇవ్వడం మాత్రమే"
        ],
        correct: 1,
        explanation: "పని విశ్లేషణలో క్లిష్టమైన పనిని చిన్న చిన్న దశలుగా విభజించి వరుసగా బోధిస్తారు. దీనివల్ల స్వయం సంరక్షణ నైపుణ్యాలు సులభంగా నేర్చుకోవడం సాధ్యమవుతుంది విద్యార్థులకు."
    },
    {
        question: "డిస్లెక్సియా (Dyslexia) ఉన్న విద్యార్థికి తరగతి గదిలో అత్యంత అనుకూలమైన సౌకర్యం ఏది?",
        options: [
            "చదవడానికి అదనపు సమయం ఇవ్వడం",
            "ఎక్కువ హోంవర్క్ ఇవ్వడం",
            "వేగంగా చదవమని ఒత్తిడి చేయడం",
            "పాఠం చదవకుండా శిక్షించడం"
        ],
        correct: 0,
        explanation: "డిస్లెక్సియా ఉన్న విద్యార్థులకు అదనపు సమయం, పెద్ద అక్షరాలు, స్పష్టమైన సూచనలు మరియు ప్రత్యామ్నాయ మూల్యాంకన పద్ధతులు అభ్యాసాన్ని సమర్థవంతంగా చేయడానికి సహాయపడతాయి తరగతి గదిలో."
    },
    {
        question: "మేధో వైకల్యం (Intellectual Disability) ఉన్న విద్యార్థుల మూల్యాంకనంలో ప్రధానంగా దేనికి ప్రాధాన్యం ఇవ్వాలి?",
        options: [
            "ఇతర విద్యార్థులతో పోలిక",
            "వ్యక్తిగత పురోగతి మరియు కార్యనిర్వహణ నైపుణ్యాలు",
            "ర్యాంకులు",
            "వేగంగా సమాధానాలు వ్రాయడం"
        ],
        correct: 1,
        explanation: "మూల్యాంకనంలో ఇతరులతో పోల్చడం కాకుండా విద్యార్థి వ్యక్తిగత పురోగతి, కార్యనిర్వహణ నైపుణ్యాలు మరియు నిర్దేశించిన లక్ష్యాల సాధనకు ప్రాధాన్యం ఇవ్వడం సముచితమైన విధానం అవుతుంది."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education)లో ప్రత్యేక అభ్యాస వైకల్యం (Specific Learning Disability - SLD) ఉన్న విద్యార్థుల కోసం ఉపాధ్యాయుని ముఖ్య బాధ్యత ఏమిటి?",
        options: [
            "వారిని వేరు తరగతికి పంపించడం",
            "బోధనలో అవసరమైన అనుసరణలు (Accommodations) మరియు మద్దతు అందించడం",
            "పరీక్షల నుండి పూర్తిగా మినహాయించడం",
            "కేవలం తల్లిదండ్రులపై బాధ్యత వేయడం"
        ],
        correct: 1,
        explanation: "సమగ్ర విద్యలో ఉపాధ్యాయుడు అవసరమైన అనుసరణలు, వ్యక్తిగత మద్దతు, బోధనా మార్పులు మరియు సానుకూల అభ్యాస వాతావరణాన్ని కల్పించడం ద్వారా విద్యార్థి విజయాన్ని ప్రోత్సహిస్తాడు."
    },
    {
        question: "ప్రత్యేక అభ్యాస వైకల్యం (Specific Learning Disability - SLD)ను ముందుగానే గుర్తించడం వల్ల ప్రధాన ప్రయోజనం ఏమిటి?",
        options: [
            "విద్యార్థిని ప్రత్యేక పాఠశాలకు పంపడం",
            "సకాలంలో జోక్యం ద్వారా అభ్యాస లోపాలను తగ్గించడం",
            "పరీక్షల నుండి మినహాయించడం",
            "హోంవర్క్ నిలిపివేయడం"
        ],
        correct: 1,
        explanation: "ప్రారంభ దశలో గుర్తించి తగిన బోధన, జోక్యం మరియు మద్దతు అందించడం ద్వారా అభ్యాస సమస్యలను తగ్గించి విద్యార్థి విద్యా పురోగతిని గణనీయంగా మెరుగుపరచవచ్చు సమర్థవంతంగా ఎల్లప్పుడూ."
    },
    {
        question: "డిస్లెక్సియా (Dyslexia), డిస్గ్రాఫియా (Dysgraphia), డిస్క్యాల్కులియా (Dyscalculia) ఇవన్నీ ఏ వర్గానికి చెందుతాయి?",
        options: [
            "ప్రత్యేక అభ్యాస వైకల్యాలు (Specific Learning Disabilities - SLD)",
            "దృష్టి లోపాలు (Visual Impairments)",
            "శ్రవణ లోపాలు (Hearing Impairments)",
            "బహుళ వైకల్యాలు (Multiple Disabilities)"
        ],
        correct: 0,
        explanation: "డిస్లెక్సియా, డిస్గ్రాఫియా మరియు డిస్క్యాల్కులియా ప్రత్యేక అభ్యాస వైకల్యాల వర్గానికి చెందినవి. ఇవి చదవడం, వ్రాయడం, గణిత నైపుణ్యాలలో నిర్దిష్ట ఇబ్బందులను సూచిస్తాయి సాధారణ మేధస్సుతో కూడి."
    },
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) యొక్క ప్రధాన లక్షణాలలో ఒకటి ఏది?",
        options: [
            "సామాజిక పరస్పర చర్య మరియు సంభాషణలో ఇబ్బందులు",
            "దృష్టి లోపం మాత్రమే",
            "శ్రవణ లోపం మాత్రమే",
            "శారీరక ఎదుగుదల లేకపోవడం"
        ],
        correct: 0,
        explanation: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్‌లో ప్రధానంగా సామాజిక పరస్పర చర్య, సంభాషణ నైపుణ్యాలు మరియు పరిమిత, పునరావృత ప్రవర్తనల్లో ఇబ్బందులు కనిపిస్తాయి. ఇవే ముఖ్య నిర్ధారణ లక్షణాలుగా పరిగణించబడుతున్నాయి."
    },
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న పిల్లలలో తరచుగా కనిపించే ప్రవర్తన ఏది?",
        options: [
            "ఒకే చర్యను పదేపదే చేయడం",
            "ప్రతి వ్యక్తితో సులభంగా కలవడం",
            "అత్యుత్తమ వినికిడి మాత్రమే కలిగి ఉండడం",
            "ఎప్పుడూ ఒకే వేగంతో చదవడం"
        ],
        correct: 0,
        explanation: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ ఉన్న పిల్లలలో ఒకే చర్యను పదేపదే చేయడం, పరిమిత ఆసక్తులు మరియు దినచర్యలో మార్పులను ఇష్టపడకపోవడం సాధారణంగా కనిపించే లక్షణాలు."
    },
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న విద్యార్థికి బోధించేటప్పుడు అత్యంత ప్రభావవంతమైన పద్ధతి ఏది?",
        options: [
            "దృశ్య సహాయాలు (Visual Supports) మరియు స్థిరమైన దినచర్య",
            "ప్రతి రోజు బోధన పూర్తిగా మార్చడం",
            "మౌఖిక సూచనలు మాత్రమే ఇవ్వడం",
            "సహాయక సామగ్రి ఉపయోగించకపోవడం"
        ],
        correct: 0,
        explanation: "దృశ్య సహాయాలు, స్థిరమైన దినచర్య, స్పష్టమైన సూచనలు మరియు నిర్మాణాత్మక అభ్యాస వాతావరణం ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ ఉన్న విద్యార్థుల అభ్యాసాన్ని సమర్థవంతంగా మెరుగుపరుస్తాయి."
    },
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న విద్యార్థి అకస్మాత్తుగా దినచర్య మారితే ఉపాధ్యాయుడు ఏమి చేయాలి?",
        options: [
            "ముందుగానే దృశ్య సూచనలు మరియు వివరణ ఇవ్వాలి",
            "మార్పును ఎటువంటి సమాచారం లేకుండా అమలు చేయాలి",
            "విద్యార్థిని తరగతి బయటకు పంపాలి",
            "హోంవర్క్ పెంచాలి"
        ],
        correct: 0,
        explanation: "దినచర్య మార్పులను ముందుగానే దృశ్య సూచనలు, స్పష్టమైన వివరణలు మరియు సమయం ఇచ్చి తెలియజేయడం ద్వారా ఆటిజం ఉన్న విద్యార్థుల ఆందోళనను తగ్గించవచ్చు సమర్థవంతంగా తరగతిలో."
    },
    {
        question: "చలన వైకల్యం (Locomotor Disability) అంటే ఏమిటి?",
        options: [
            "కదలికలు మరియు శారీరక చలన సామర్థ్యంలో లోపం",
            "చదవడంలో మాత్రమే ఇబ్బంది",
            "వినికిడిలో మాత్రమే లోపం",
            "దృష్టిలో మాత్రమే లోపం"
        ],
        correct: 0,
        explanation: "చలన వైకల్యం శరీర కదలికలు, నడక, చేతులు లేదా కాళ్ల వినియోగంలో పరిమితిని కలిగించే పరిస్థితి. ఇది వ్యక్తి స్వతంత్ర చలన సామర్థ్యాన్ని ప్రభావితం చేస్తుంది ముఖ్యంగా రోజువారీ జీవితంలో."
    },
    {
        question: "చలన వైకల్యం (Locomotor Disability) ఉన్న విద్యార్థికి తరగతి గదిలో ముఖ్యమైన సౌకర్యం ఏది?",
        options: [
            "అడ్డంకులు లేని సులభ ప్రవేశం (Barrier-free Access)",
            "వెనుక వరుసలో మాత్రమే కూర్చోబెట్టడం",
            "ప్రత్యేక పాఠ్యాంశం మాత్రమే బోధించడం",
            "తరగతికి రానివ్వకపోవడం"
        ],
        correct: 0,
        explanation: "అడ్డంకులు లేని ప్రవేశం, ర్యాంపులు, అనుకూలమైన కూర్చునే ఏర్పాట్లు మరియు సులభ సంచారం చలన వైకల్యం ఉన్న విద్యార్థుల సమగ్ర భాగస్వామ్యాన్ని ప్రోత్సహిస్తాయి విద్యా వాతావరణంలో."
    },
    {
        question: "సెరెబ్రల్ పాల్సీ (Cerebral Palsy - CP) ప్రధానంగా దేనిని ప్రభావితం చేస్తుంది?",
        options: [
            "శరీర కదలికలు మరియు భంగిమ నియంత్రణ",
            "కంటి చూపు మాత్రమే",
            "శ్రవణ సామర్థ్యం మాత్రమే",
            "దంతాల ఎదుగుదల"
        ],
        correct: 0,
        explanation: "సెరెబ్రల్ పాల్సీ మెదడు ప్రారంభ అభివృద్ధిలో జరిగిన నష్టంతో శరీర కదలికలు, కండర నియంత్రణ మరియు భంగిమను ప్రభావితం చేసే నాడీ సంబంధిత పరిస్థితిగా గుర్తించబడుతుంది."
    },
    {
        question: "బహుళ వైకల్యాలు (Multiple Disabilities) అంటే ఏమిటి?",
        options: [
            "రెండు లేదా అంతకంటే ఎక్కువ వైకల్యాలు ఒకేసారి ఉండడం",
            "కేవలం దృష్టి లోపం ఉండడం",
            "కేవలం శ్రవణ లోపం ఉండడం",
            "కేవలం మేధో వైకల్యం ఉండడం"
        ],
        correct: 0,
        explanation: "బహుళ వైకల్యాలు అంటే రెండు లేదా అంతకంటే ఎక్కువ వైకల్యాలు కలిసి ఉండి విద్యార్థి విద్యా అవసరాలను గణనీయంగా ప్రభావితం చేసే పరిస్థితిని సూచిస్తాయి సాధారణంగా."
    },
    {
        question: "బహుళ వైకల్యాలు (Multiple Disabilities) ఉన్న విద్యార్థుల కోసం బోధనలో అత్యంత ముఖ్యమైనది ఏది?",
        options: [
            "బహుశాఖ నిపుణుల సహకారం (Multidisciplinary Team)",
            "కేవలం పాఠ్యపుస్తకం",
            "వార్షిక పరీక్ష మాత్రమే",
            "హోంవర్క్ మాత్రమే"
        ],
        correct: 0,
        explanation: "ఉపాధ్యాయులు, తల్లిదండ్రులు, థెరపిస్టులు మరియు ఇతర నిపుణుల సమన్వయంతో పనిచేసే బహుశాఖ బృందం బహుళ వైకల్యాలు ఉన్న విద్యార్థుల సమగ్ర అభివృద్ధికి అత్యంత అవసరం."
    },
    {
        question: "వ్యక్తిగత విద్యా ప్రణాళిక (IEP) బహుళ వైకల్యాలు (Multiple Disabilities) ఉన్న విద్యార్థికి ఎందుకు అవసరం?",
        options: [
            "ప్రత్యేక అవసరాలకు అనుగుణమైన వ్యక్తిగత లక్ష్యాలు రూపొందించడానికి",
            "అందరికీ ఒకే లక్ష్యాలు ఇవ్వడానికి",
            "పరీక్షల సంఖ్య పెంచడానికి",
            "హాజరు నమోదు చేయడానికి"
        ],
        correct: 0,
        explanation: "బహుళ వైకల్యాలు ఉన్న ప్రతి విద్యార్థి అవసరాలు భిన్నంగా ఉంటాయి. వ్యక్తిగత విద్యా ప్రణాళిక లక్ష్యాలు, సేవలు మరియు బోధనను వ్యక్తిగత అవసరాలకు అనుగుణంగా రూపొందిస్తుంది."
    },
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న విద్యార్థికి సామాజిక నైపుణ్యాలను అభివృద్ధి చేయడానికి అత్యంత అనుకూలమైన పద్ధతి ఏది?",
        options: [
            "సామాజిక కథలు (Social Stories) మరియు సహచరుల సహకారం",
            "వారిని ఒంటరిగా ఉంచడం",
            "పరీక్షలు మాత్రమే నిర్వహించడం",
            "హోంవర్క్ పెంచడం"
        ],
        correct: 0,
        explanation: "సామాజిక కథలు, నమూనా ప్రదర్శన, సహచరుల సహకారం మరియు నిర్మాణాత్మక సామాజిక కార్యకలాపాలు ఆటిజం ఉన్న విద్యార్థుల సామాజిక సంభాషణ నైపుణ్యాలను సమర్థవంతంగా అభివృద్ధి చేస్తాయి."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education)లో చలన వైకల్యం (Locomotor Disability) ఉన్న విద్యార్థికి మూల్యాంకనంలో సరైన అనుసరణ (Accommodation) ఏది?",
        options: [
            "అదనపు సమయం లేదా రచయిత (Scribe) అవసరమైతే అందించడం",
            "పరీక్ష రాయకుండా మినహాయించడం",
            "తక్కువ మార్కులు ఇవ్వడం",
            "ప్రశ్నపత్రం మార్చకుండా వేగంగా పూర్తి చేయించడం"
        ],
        correct: 0,
        explanation: "చలన వైకల్యం ఉన్న విద్యార్థుల కార్యనిర్వహణ పరిమితులను దృష్టిలో ఉంచుకొని అదనపు సమయం లేదా రచయిత వంటి అనుసరణలు సమాన అవకాశాలను కల్పించడానికి ఉపయోగపడతాయి."
    },
    {
        question: "చలన వైకల్యం (Locomotor Disability) ఉన్న విద్యార్థి వీల్ చైర్ (Wheelchair) ఉపయోగిస్తున్నప్పుడు ఉపాధ్యాయుని సరైన వైఖరి ఏది?",
        options: [
            "స్వతంత్రతను గౌరవిస్తూ అవసరమైనప్పుడు మాత్రమే సహాయం చేయడం",
            "అనుమతి లేకుండా వీల్ చైర్‌ను నెట్టడం",
            "తరగతి కార్యక్రమాల నుండి దూరంగా ఉంచడం",
            "ఎప్పుడూ ఇతర విద్యార్థులపై ఆధారపడేలా చేయడం"
        ],
        correct: 0,
        explanation: "విద్యార్థి స్వతంత్రతను గౌరవించడం, అవసరమైనప్పుడు మాత్రమే సహాయం చేయడం మరియు అనుమతి తీసుకుని సహకరించడం సమగ్ర విద్యలో గౌరవప్రదమైన, విద్యార్థి కేంద్రిత విధానంగా పరిగణించబడుతుంది."
    },
    {
        question: "బహుళ వైకల్యాలు (Multiple Disabilities) ఉన్న విద్యార్థుల బోధనలో ప్రధాన లక్ష్యం ఏమిటి?",
        options: [
            "కేవలం విద్యా ఫలితాలు",
            "కార్యనిర్వహణ, సంభాషణ, స్వయం సంరక్షణ మరియు సామాజిక నైపుణ్యాల అభివృద్ధి",
            "పరీక్షల్లో ర్యాంకులు సాధించడం మాత్రమే",
            "అందరికీ ఒకే బోధనా పద్ధతి ఉపయోగించడం"
        ],
        correct: 1,
        explanation: "బహుళ వైకల్యాలు ఉన్న విద్యార్థుల బోధనలో విద్యా అభ్యాసంతో పాటు కార్యనిర్వహణ, సంభాషణ, స్వయం సంరక్షణ మరియు సామాజిక స్వావలంబన నైపుణ్యాల అభివృద్ధి ప్రధాన లక్ష్యంగా ఉంటుంది."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education)లో ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD), చలన వైకల్యం (Locomotor Disability), బహుళ వైకల్యాలు (Multiple Disabilities) ఉన్న విద్యార్థులందరికీ వర్తించే ప్రాథమిక సూత్రం ఏది?",
        options: [
            "సమాన అవకాశాలతో వ్యక్తిగత అవసరాలకు అనుగుణమైన మద్దతు అందించడం",
            "అందరికీ ఒకే బోధనా విధానం అనుసరించడం",
            "ప్రత్యేక పాఠశాలకు మాత్రమే పంపించడం",
            "వారిని పరీక్షల నుండి పూర్తిగా మినహాయించడం"
        ],
        correct: 0,
        explanation: "సమగ్ర విద్యలో ప్రతి విద్యార్థి ప్రత్యేక అవసరాలను గుర్తించి సమాన అవకాశాలు, తగిన అనుసరణలు, సహాయక సేవలు మరియు వ్యక్తిగత మద్దతు అందించడం ప్రాథమిక సూత్రంగా పరిగణించబడుతుంది."
    },
    {
        question: "సెరెబ్రల్ పాల్సీ (Cerebral Palsy - CP) ప్రధానంగా ఏ కారణం వల్ల సంభవిస్తుంది?",
        options: [
            "మెదడు ప్రారంభ అభివృద్ధి సమయంలో జరిగిన నష్టం",
            "విటమిన్ లోపం మాత్రమే",
            "అంటువ్యాధి వల్ల మాత్రమే",
            "యుక్తవయస్సులో కలిగే వ్యాధి"
        ],
        correct: 0,
        explanation: "సెరెబ్రల్ పాల్సీ గర్భధారణ, ప్రసవం లేదా జననం తరువాత ప్రారంభ దశలో మెదడుకు జరిగిన నష్టం వల్ల ఏర్పడే శాశ్వత చలన, భంగిమ సంబంధిత నాడీ అభివృద్ధి లోపం."
    },
    {
        question: "సెరెబ్రల్ పాల్సీ (Cerebral Palsy - CP) ఉన్న విద్యార్థికి బోధనలో అత్యంత ముఖ్యమైనది ఏది?",
        options: [
            "విద్యార్థి సామర్థ్యానికి అనుగుణంగా అనుసరణలు (Accommodations) కల్పించడం",
            "కేవలం మౌఖిక పరీక్షలు నిర్వహించడం",
            "తరగతి నుండి వేరు చేయడం",
            "హోంవర్క్ ఇవ్వకపోవడం"
        ],
        correct: 0,
        explanation: "సెరెబ్రల్ పాల్సీ ఉన్న విద్యార్థులకు వ్యక్తిగత అవసరాలకు అనుగుణంగా బోధనా మార్పులు, సహాయక పరికరాలు మరియు అనుసరణలు కల్పించడం సమర్థవంతమైన సమగ్ర విద్యకు అవసరమైన పద్ధతి."
    },
    {
        question: "ధ్యాన లోపం మరియు అధిక చురుకుదనం రుగ్మత (ADHD) యొక్క ప్రధాన లక్షణాలలో ఒకటి ఏది?",
        options: [
            "ధ్యానం నిలుపుకోవడంలో మరియు ప్రవర్తన నియంత్రణలో ఇబ్బంది",
            "దృష్టి లోపం మాత్రమే",
            "శ్రవణ లోపం మాత్రమే",
            "మేధో వైకల్యం తప్పనిసరిగా ఉండడం"
        ],
        correct: 0,
        explanation: "ధ్యాన లోపం మరియు అధిక చురుకుదనం రుగ్మతలో ప్రధానంగా అజాగ్రత్త, అధిక చురుకుదనం మరియు హఠాత్ ప్రవర్తన కనిపిస్తాయి. ప్రతి విద్యార్థిలో లక్షణాల తీవ్రత ఒకేలా ఉండదు."
    },
    {
        question: "ధ్యాన లోపం మరియు అధిక చురుకుదనం రుగ్మత (ADHD) ఉన్న విద్యార్థికి తరగతి గదిలో సరైన బోధనా వ్యూహం ఏది?",
        options: [
            "చిన్న సూచనలు, క్రమబద్ధమైన పనులు మరియు సానుకూల ప్రోత్సాహం ఇవ్వడం",
            "ఒకేసారి అనేక పనులు అప్పగించడం",
            "తప్పులు చేసినప్పుడల్లా శిక్షించడం",
            "వెనుక బెంచీలో ఒంటరిగా కూర్చోబెట్టడం"
        ],
        correct: 0,
        explanation: "చిన్న సూచనలు, పనులను దశలవారీగా విభజించడం, సానుకూల ప్రోత్సాహం మరియు తక్కువ దృష్టి మరల్చే వాతావరణం ADHD ఉన్న విద్యార్థుల అభ్యాసాన్ని మెరుగుపరుస్తాయి సమర్థవంతంగా."
    },
    {
        question: "డౌన్ సిండ్రోమ్ (Down Syndrome) సాధారణంగా దేనితో సంబంధం కలిగి ఉంటుంది?",
        options: [
            "క్రోమోజోమ్ 21 అదనపు ప్రతితో (Trisomy 21)",
            "క్రోమోజోమ్ 18 లేకపోవడం",
            "విటమిన్ లోపం",
            "వినికిడి లోపం మాత్రమే"
        ],
        correct: 0,
        explanation: "డౌన్ సిండ్రోమ్ సాధారణంగా క్రోమోజోమ్ 21 యొక్క అదనపు ప్రతితో ఏర్పడుతుంది. దీనిని ట్రైసోమీ 21 అని పిలుస్తారు. ఇది జన్యుపరమైన పరిస్థితిగా గుర్తించబడింది ప్రపంచవ్యాప్తంగా."
    },
    {
        question: "డౌన్ సిండ్రోమ్ (Down Syndrome) ఉన్న విద్యార్థులకు బోధనలో ప్రధానంగా ఏ విధానం అనుసరించాలి?",
        options: [
            "నెమ్మదిగా, పునరావృత అభ్యాసంతో మరియు దృశ్య సహాయాలతో బోధించడం",
            "వేగంగా పాఠ్యాంశాన్ని పూర్తి చేయడం",
            "కేవలం పరీక్షలపై దృష్టి పెట్టడం",
            "పాఠ్యపుస్తకం మాత్రమే ఉపయోగించడం"
        ],
        correct: 0,
        explanation: "డౌన్ సిండ్రోమ్ ఉన్న విద్యార్థులు పునరావృత అభ్యాసం, దృశ్య సహాయాలు, చిన్న దశల బోధన మరియు నిరంతర ప్రోత్సాహంతో మెరుగైన అభ్యాస ఫలితాలను సాధించగలరు సాధారణంగా."
    },
    {
        question: "మాట మరియు భాషా లోపం (Speech and Language Disability) ఉన్న విద్యార్థికి ఉపాధ్యాయుడు మొదట చేయవలసినది ఏది?",
        options: [
            "మాట్లాడేందుకు తగిన సమయం మరియు ప్రోత్సాహం ఇవ్వడం",
            "విద్యార్థి తరపున ఎప్పుడూ సమాధానం చెప్పడం",
            "మాట్లాడనివ్వకుండా ఆపడం",
            "తరగతి కార్యక్రమాల నుండి దూరంగా ఉంచడం"
        ],
        correct: 0,
        explanation: "మాట మరియు భాషా లోపం ఉన్న విద్యార్థికి మాట్లాడేందుకు సమయం ఇవ్వడం, సహనంతో వినడం మరియు సానుకూల ప్రోత్సాహం అందించడం సమర్థవంతమైన సంభాషణ అభివృద్ధికి దోహదపడుతుంది."
    },
    {
        question: "మాట మరియు భాషా లోపం (Speech and Language Disability) ఉన్న విద్యార్థి కోసం క్రింది వాటిలో ఏది సహాయక వ్యూహం?",
        options: [
            "చిత్రాలు, సంకేతాలు మరియు దృశ్య సహాయాలు ఉపయోగించడం",
            "వేగంగా మాట్లాడడం",
            "తప్పులను ఎగతాళి చేయడం",
            "సమాధానం చెప్పేందుకు అవకాశం ఇవ్వకపోవడం"
        ],
        correct: 0,
        explanation: "చిత్రాలు, సంకేతాలు మరియు దృశ్య సహాయాలు మాట మరియు భాషా లోపం ఉన్న విద్యార్థుల భావ వ్యక్తీకరణ, అవగాహన మరియు సంభాషణ సామర్థ్యాలను సమర్థవంతంగా అభివృద్ధి చేస్తాయి."
    },
    {
        question: "ధ్యాన లోపం మరియు అధిక చురుకుదనం రుగ్మత (ADHD) ఉన్న విద్యార్థిని తరగతి గదిలో ఎక్కడ కూర్చోబెట్టడం అనుకూలం?",
        options: [
            "ఉపాధ్యాయునికి సమీపంగా, తక్కువ దృష్టి మరల్చే ప్రదేశంలో",
            "తలుపు దగ్గర",
            "కిటికీ పక్కన",
            "చివరి బెంచీలో"
        ],
        correct: 0,
        explanation: "ఉపాధ్యాయునికి సమీపంగా, తక్కువ దృష్టి మరల్చే ప్రదేశంలో కూర్చోబెట్టడం ద్వారా ADHD ఉన్న విద్యార్థి ధ్యానాన్ని నిలుపుకోవడం మరియు సూచనలు అనుసరించడం సులభమవుతుంది."
    },
    {
        question: "డౌన్ సిండ్రోమ్ (Down Syndrome) ఉన్న విద్యార్థులలో సాధారణంగా బలంగా కనిపించే అంశం ఏది?",
        options: [
            "సామాజిక పరస్పర చర్యల పట్ల ఆసక్తి",
            "దృష్టి లోపం తప్పనిసరిగా ఉండడం",
            "శ్రవణ లోపం తప్పనిసరిగా ఉండడం",
            "చదవలేకపోవడం"
        ],
        correct: 0,
        explanation: "డౌన్ సిండ్రోమ్ ఉన్న అనేక మంది విద్యార్థులు స్నేహపూర్వక స్వభావం, సామాజిక పరస్పర చర్యల పట్ల ఆసక్తి మరియు సహకార భావాన్ని ప్రదర్శిస్తారు. వ్యక్తిగత భిన్నతలు సహజంగా ఉంటాయి."
    },
    {
        question: "మాట మరియు భాషా లోపం (Speech and Language Disability) ఉన్న విద్యార్థి కోసం స్పీచ్ థెరపిస్ట్ (Speech Therapist) పాత్ర ఏమిటి?",
        options: [
            "మాట, ఉచ్చారణ మరియు సంభాషణ నైపుణ్యాలను అభివృద్ధి చేయడం",
            "గణితం మాత్రమే బోధించడం",
            "వైద్య చికిత్స మాత్రమే అందించడం",
            "పరీక్షలు నిర్వహించడం మాత్రమే"
        ],
        correct: 0,
        explanation: "స్పీచ్ థెరపిస్ట్ మాట, ఉచ్చారణ, భాషా అవగాహన మరియు సంభాషణ నైపుణ్యాలను అభివృద్ధి చేయడానికి ప్రత్యేక శిక్షణ మరియు జోక్యాన్ని అందిస్తారు విద్యార్థుల అవసరాలకు అనుగుణంగా."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education)లో సెరెబ్రల్ పాల్సీ (CP), ADHD, డౌన్ సిండ్రోమ్ (Down Syndrome), మాట మరియు భాషా లోపం (Speech and Language Disability) ఉన్న విద్యార్థులందరికీ వర్తించే ప్రధాన సూత్రం ఏది?",
        options: [
            "వ్యక్తిగత అవసరాలకు అనుగుణంగా అనుసరణలు మరియు మద్దతు కల్పించడం",
            "అందరికీ ఒకే బోధనా విధానం",
            "ప్రత్యేక పాఠశాలకు మాత్రమే పంపించడం",
            "పరీక్షల నుండి పూర్తిగా మినహాయించడం"
        ],
        correct: 0,
        explanation: "సమగ్ర విద్యలో ప్రతి విద్యార్థి ప్రత్యేక అవసరాలను గుర్తించి తగిన అనుసరణలు, సహాయక సేవలు మరియు సమాన అవకాశాలు కల్పించడం ప్రధాన విద్యా సూత్రంగా పరిగణించబడుతుంది."
    },
    {
        question: "ధ్యాన లోపం మరియు అధిక చురుకుదనం రుగ్మత (ADHD) ఉన్న విద్యార్థిని మూల్యాంకనం చేసేటప్పుడు సరైన అనుసరణ (Accommodation) ఏది?",
        options: [
            "అదనపు సమయం మరియు చిన్న విరామాలు కల్పించడం",
            "తక్కువ మార్కులు ఇవ్వడం",
            "పరీక్ష రాయకుండా మినహాయించడం",
            "ఒకేసారి ఎక్కువ ప్రశ్నలు ఇవ్వడం"
        ],
        correct: 0,
        explanation: "అదనపు సమయం, చిన్న విరామాలు మరియు స్పష్టమైన సూచనలు ADHD ఉన్న విద్యార్థి తన నిజమైన సామర్థ్యాన్ని ప్రదర్శించేందుకు సహాయపడే సముచిత మూల్యాంకన అనుసరణలుగా గుర్తించబడతాయి."
    },
    {
        question: "డౌన్ సిండ్రోమ్ (Down Syndrome) ఉన్న విద్యార్థికి వ్యక్తిగత విద్యా ప్రణాళిక (IEP) రూపొందించేటప్పుడు ప్రధానంగా దేనిపై దృష్టి పెట్టాలి?",
        options: [
            "వ్యక్తిగత సామర్థ్యాలు, కార్యనిర్వహణ నైపుణ్యాలు మరియు సాధ్యమైన లక్ష్యాలు",
            "ఇతర విద్యార్థులతో పోలిక",
            "కేవలం వార్షిక పరీక్షలు",
            "పాఠ్యపుస్తకంలోని అన్ని అంశాలు ఒకేసారి"
        ],
        correct: 0,
        explanation: "వ్యక్తిగత విద్యా ప్రణాళిక విద్యార్థి బలాలు, అవసరాలు, కార్యనిర్వహణ నైపుణ్యాలు మరియు సాధ్యమైన లక్ష్యాల ఆధారంగా రూపొందించబడాలి. ఇది సమగ్ర అభివృద్ధిని సమర్థవంతంగా ప్రోత్సహిస్తుంది."
    },
    {
        question: "మాట మరియు భాషా లోపం (Speech and Language Disability) ఉన్న విద్యార్థితో ఉపాధ్యాయుని అత్యంత అనుకూలమైన వైఖరి ఏది?",
        options: [
            "సహనంతో విని, సంభాషించేందుకు ప్రోత్సహించడం",
            "విద్యార్థి మాటలను పూర్తి చేయడం",
            "తప్పులను ఎగతాళి చేయడం",
            "మాట్లాడకుండా నిరోధించడం"
        ],
        correct: 0,
        explanation: "సహనంతో వినడం, విద్యార్థి తన భావాలను స్వయంగా వ్యక్తపరచేందుకు అవకాశం ఇవ్వడం మరియు సానుకూల ప్రోత్సాహం అందించడం సంభాషణ నైపుణ్యాల అభివృద్ధికి అత్యంత అవసరమైన ఉపాధ్యాయ వైఖరి."
    }
];