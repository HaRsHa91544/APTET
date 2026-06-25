const SUBJECTS = [
    "Autism",
    "Learning Disability",
    "Intellectual Disability",
    "English"
];

const QUESTIONS = [
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) గల పిల్లలలో సాధారణంగా కనిపించే లక్షణం ఏది?",
        options: [
            "నిరంతరం కొత్త స్నేహితులను ఏర్పరచుకోవడం",
            "సామాజిక పరస్పర చర్యలో ఇబ్బంది కలగడం",
            "వయస్సుకు మించిన భాషా నైపుణ్యం",
            "అధిక గణిత సామర్థ్యం"
        ],
        correct: 1,
        explanation: "ASD గల పిల్లలలో ప్రధాన లక్షణం సామాజిక పరస్పర చర్యలు మరియు కమ్యూనికేషన్‌లో ఇబ్బందులు కనిపించడం. ఇది ఆటిజం నిర్ధారణలో అత్యంత ముఖ్యమైన సూచికగా పరిగణించబడుతుంది."
    },
    {
        question: "పిల్లవాడు ఉపాధ్యాయుడు చెప్పిన ప్రతి వాక్యాన్ని వెంటనే తిరిగి అదే విధంగా పలకడం ఏ లక్షణాన్ని సూచిస్తుంది?",
        options: [
            "Echopraxia",
            "Echolalia",
            "Dysarthria",
            "Aphasia"
        ],
        correct: 1,
        explanation: "Echolalia అంటే ఇతరులు చెప్పిన మాటలను వెంటనే లేదా కొంత సమయం తర్వాత తిరిగి పలకడం. ఇది ఆటిజం స్పెక్ట్రమ్ డిజార్డర్‌లో సాధారణంగా కనిపించే కమ్యూనికేషన్ లక్షణం."
    },
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్‌ను ప్రారంభ దశలో గుర్తించడానికి అత్యంత ముఖ్యమైన అంశం ఏది?",
        options: [
            "రక్త పరీక్ష",
            "ప్రవర్తనా పరిశీలన మరియు అభివృద్ధి చరిత్ర",
            "IQ పరీక్ష",
            "వినికిడి పరీక్ష"
        ],
        correct: 1,
        explanation: "ASDను ప్రారంభ దశలో గుర్తించడానికి పిల్లల ప్రవర్తనను పరిశీలించడం మరియు అభివృద్ధి చరిత్రను విశ్లేషించడం అత్యంత విశ్వసనీయమైన విధానం. ప్రత్యేక రక్త పరీక్ష లేదు."
    },
    {
        question: "క్రింది వాటిలో ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ గల విద్యార్థులకు అత్యంత అనుకూలమైన బోధనా వ్యూహం ఏది?",
        options: [
            "ప్రతిరోజూ మారే బోధనా విధానం",
            "నిర్మిత (Structured) మరియు దృశ్య ఆధారిత బోధన",
            "కేవలం ఉపన్యాస పద్ధతి",
            "పరీక్షల ఆధారిత బోధన"
        ],
        correct: 1,
        explanation: "ASD గల విద్యార్థులు నిర్మిత దినచర్యలు మరియు దృశ్య సూచనల ద్వారా మెరుగ్గా నేర్చుకుంటారు. Visual schedules మరియు structured teaching అత్యంత ప్రభావవంతంగా ఉంటాయి."
    },
    {
        question: "IEP (వ్యక్తిగత విద్యా ప్రణాళిక) రూపొందించేటప్పుడు మొదట పరిగణించవలసిన అంశం ఏది?",
        options: [
            "పాఠ్యపుస్తకంలోని అన్ని పాఠాలు",
            "విద్యార్థి వ్యక్తిగత అవసరాలు మరియు ప్రస్తుత సామర్థ్యం",
            "తరగతి సగటు ఫలితాలు",
            "వార్షిక పరీక్ష షెడ్యూల్"
        ],
        correct: 1,
        explanation: "IEP ఎల్లప్పుడూ విద్యార్థి వ్యక్తిగత అవసరాలు, ప్రస్తుత పనితీరు మరియు సామర్థ్యాల ఆధారంగా రూపొందించాలి. ఇదే వ్యక్తిగత విద్యా ప్రణాళిక యొక్క ప్రధాన ఉద్దేశ్యం."
    },
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ గల పిల్లల మూల్యాంకనంలో కింది వాటిలో ఏది ప్రధానంగా ఉపయోగపడుతుంది?",
        options: [
            "ప్రవర్తనా పరిశీలన",
            "రక్తపోటు పరీక్ష",
            "దృష్టి తీక్షణ పరీక్ష",
            "శారీరక దృఢత్వ పరీక్ష"
        ],
        correct: 0,
        explanation: "ASD మూల్యాంకనంలో పిల్లల ప్రవర్తన, సామాజిక పరస్పర చర్యలు మరియు కమ్యూనికేషన్‌ను పరిశీలించడం ప్రధాన పద్ధతి. వైద్య పరీక్షలు మాత్రమే సరిపోవు."
    },
    {
        question: "క్రింది వాటిలో ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ గల పిల్లల బోధనలో అత్యంత ప్రభావవంతమైనది ఏది?",
        options: [
            "దీర్ఘకాల ఉపన్యాసాలు",
            "స్పష్టమైన దృశ్య సూచనలు మరియు దినచర్య",
            "కేవలం వ్రాతపరీక్షలు",
            "వేగవంతమైన బోధన"
        ],
        correct: 1,
        explanation: "Visual supports, schedules మరియు స్థిరమైన దినచర్య ASD గల విద్యార్థులకు స్పష్టతను అందించి అభ్యాసాన్ని మెరుగుపరుస్తాయి. ఇవి తరగతి నిర్వహణను కూడా సులభతరం చేస్తాయి."
    },
    {
        question: "ASD గల విద్యార్థికి IEPలో తప్పనిసరిగా ఉండవలసిన అంశం ఏది?",
        options: [
            "పాఠశాల చరిత్ర",
            "వ్యక్తిగత లక్ష్యాలు",
            "తరగతి ఉపాధ్యాయుల జాబితా",
            "పాఠశాల నియమాలు"
        ],
        correct: 1,
        explanation: "IEPలో విద్యార్థి అవసరాలకు అనుగుణంగా స్పష్టమైన వ్యక్తిగత విద్యా లక్ష్యాలు తప్పనిసరిగా ఉండాలి. ఇవే బోధన మరియు మూల్యాంకనానికి మార్గదర్శకాలు."
    },
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ ప్రధానంగా ఏ రంగంలో ప్రభావాన్ని చూపుతుంది?",
        options: [
            "సామాజిక పరస్పర చర్య మరియు సంభాషణ",
            "ఎముకల పెరుగుదల",
            "శరీర ఎత్తు",
            "రక్త ప్రసరణ"
        ],
        correct: 0,
        explanation: "ASD ప్రధానంగా సామాజిక పరస్పర చర్యలు, సంభాషణ మరియు ప్రవర్తనా నమూనాలపై ప్రభావం చూపుతుంది. ఇది శారీరక ఎదుగుదలతో సంబంధం కలిగి ఉండదు."
    },
    {
        question: "క్రింది వాటిలో ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ గల పిల్లల తరగతి గది నిర్వహణకు అనుకూలమైనది ఏది?",
        options: [
            "ప్రతిరోజూ సీటింగ్ మార్చడం",
            "స్థిరమైన దినచర్య మరియు ముందస్తు సూచనలు ఇవ్వడం",
            "అకస్మాత్తుగా కార్యకలాపాలు మార్చడం",
            "ఒకేసారి అనేక సూచనలు ఇవ్వడం"
        ],
        correct: 1,
        explanation: "ASD గల విద్యార్థులు ముందస్తు సమాచారం, స్థిరమైన దినచర్య మరియు ఊహించగలిగే వాతావరణంలో మెరుగ్గా నేర్చుకుంటారు. అకస్మాత్తు మార్పులు ఆందోళన కలిగిస్తాయి."
    },
    {
        question: "తరచుగా \"beautiful\" అనే పదాన్ని \"dueatiful\"గా వ్రాసే విద్యార్థికి ప్రధానంగా కనిపించే సమస్య ఏది?",
        options: [
            "మేధో వైకల్యం",
            "అభ్యసన వైకల్యం (Learning Disability)",
            "వినికిడి లోపం",
            "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్"
        ],
        correct: 1,
        explanation: "అక్షరాల క్రమాన్ని తప్పుగా వ్రాయడం లేదా స్పెల్లింగ్‌లో పదేపదే పొరపాట్లు చేయడం Learning Disabilityలో భాగంగా కనిపించవచ్చు. దీనికి ప్రత్యేక విద్యా సహాయం అవసరం."
    },
    {
        question: "చదవడంలో ఇబ్బందులు ప్రధాన లక్షణంగా కనిపించే అభ్యసన వైకల్యం ఏది?",
        options: [
            "Dysgraphia",
            "Dyscalculia",
            "Dyslexia",
            "Dyspraxia"
        ],
        correct: 2,
        explanation: "Dyslexia అనేది ప్రధానంగా చదవడం, పదాలను గుర్తించడం మరియు అర్థం చేసుకోవడంలో ఇబ్బందులు కలిగించే అభ్యసన వైకల్యం. ఇది అత్యంత సాధారణ Learning Disability."
    },
    {
        question: "సంఖ్యా భావనలు, గణిత గణనలు నేర్చుకోవడంలో తీవ్ర ఇబ్బంది కలిగే పరిస్థితిని ఏమంటారు?",
        options: [
            "Dyslexia",
            "Dysgraphia",
            "Dyscalculia",
            "Dysarthria"
        ],
        correct: 2,
        explanation: "Dyscalculia అనేది సంఖ్యల అవగాహన, గణిత భావనలు మరియు లెక్కలు చేయడంలో తీవ్రమైన ఇబ్బందులు కలిగించే అభ్యసన వైకల్యం."
    },
    {
        question: "విద్యార్థి యొక్క అభ్యసన వైకల్యాన్ని గుర్తించడానికి క్రింది వాటిలో అత్యంత అనుకూలమైనది ఏది?",
        options: [
            "పాఠ్యాంశ ఆధారిత విద్యా మూల్యాంకనం",
            "రక్త పరీక్ష",
            "వినికిడి పరీక్ష",
            "ఎత్తు, బరువు కొలత"
        ],
        correct: 0,
        explanation: "Learning Disabilityని గుర్తించడానికి విద్యార్థి విద్యా పనితీరు, నైపుణ్యాలు మరియు పాఠ్యాంశ ఆధారిత మూల్యాంకనం అత్యంత ఉపయోగకరమైన పద్ధతిగా పరిగణించబడుతుంది."
    },
    {
        question: "Learning Disability గల విద్యార్థికి బోధించేటప్పుడు ఉపాధ్యాయుడు మొదట చేయవలసినది ఏది?",
        options: [
            "ఒకే విధానాన్ని అందరికీ ఉపయోగించడం",
            "విద్యార్థి బలాలు, బలహీనతలను గుర్తించడం",
            "తరచుగా శిక్షించడం",
            "పాఠ్యాంశాన్ని వేగంగా పూర్తి చేయడం"
        ],
        correct: 1,
        explanation: "Learning Disability గల ప్రతి విద్యార్థి అవసరాలు భిన్నంగా ఉంటాయి. అందువల్ల బలాలు, బలహీనతలను గుర్తించి వ్యక్తిగత అవసరాలకు అనుగుణంగా బోధన ప్రణాళిక రూపొందించాలి."
    },
    {
        question: "క్రింది వాటిలో అభ్యసన వైకల్యం గల విద్యార్థికి సరైన బోధనా వ్యూహం ఏది?",
        options: [
            "బహుఇంద్రియ (Multi-sensory) బోధన",
            "కేవలం ఉపన్యాస పద్ధతి",
            "రోజూ పరీక్షలు నిర్వహించడం",
            "కేవలం కంఠస్థం చేయించడం"
        ],
        correct: 0,
        explanation: "Multi-sensory teachingలో చూడడం, వినడం, మాట్లాడడం, చేయడం వంటి అనేక ఇంద్రియాలను ఉపయోగిస్తారు. ఇది Learning Disability గల విద్యార్థుల అభ్యాసాన్ని సులభతరం చేసి జ్ఞాపకశక్తిని మెరుగుపరుస్తుంది."
    },
    {
        question: "IEPలో Learning Disability గల విద్యార్థికి లక్ష్యాలు ఎలా ఉండాలి?",
        options: [
            "అన్ని విద్యార్థులకు ఒకే విధంగా",
            "విద్యార్థి అవసరాలు, సామర్థ్యాలకు అనుగుణంగా",
            "పాఠ్యపుస్తకానికి మాత్రమే పరిమితంగా",
            "వార్షిక పరీక్షల ఆధారంగా మాత్రమే"
        ],
        correct: 1,
        explanation: "IEP వ్యక్తిగత విద్యా ప్రణాళిక కాబట్టి లక్ష్యాలు విద్యార్థి ప్రస్తుత పనితీరు, అవసరాలు మరియు సామర్థ్యాలను దృష్టిలో ఉంచుకొని రూపొందించాలి. ఒకే లక్ష్యాలు అందరికీ వర్తించవు."
    },
    {
        question: "క్రింది వాటిలో అభ్యసన వైకల్యానికి సంబంధించినది కాదు?",
        options: [
            "Dyslexia",
            "Dysgraphia",
            "Dyscalculia",
            "Aphasia"
        ],
        correct: 3,
        explanation: "Aphasia అనేది మెదడు గాయాల వల్ల ఏర్పడే భాషా లోపం. ఇది ప్రత్యేక అభ్యసన వైకల్యాలలో భాగం కాదు. Dyslexia, Dysgraphia, Dyscalculia మాత్రం Learning Disabilities."
    },
    {
        question: "విద్యార్థి అక్షరాలను సరైన క్రమంలో వ్రాయలేకపోవడం, చేతివ్రాత స్పష్టంగా లేకపోవడం ప్రధానంగా ఏ సమస్యను సూచిస్తుంది?",
        options: [
            "Dyslexia",
            "Dysgraphia",
            "Dyscalculia",
            "Dyspraxia"
        ],
        correct: 1,
        explanation: "Dysgraphia అనేది వ్రాతకు సంబంధించిన అభ్యసన వైకల్యం. ఇందులో చేతివ్రాత స్పష్టంగా లేకపోవడం, అక్షరాలను సరైన క్రమంలో వ్రాయలేకపోవడం వంటి సమస్యలు కనిపిస్తాయి."
    },
    {
        question: "Learning Disability గల విద్యార్థి పురోగతిని సమర్థవంతంగా అంచనా వేయడానికి సరైన విధానం ఏది?",
        options: [
            "కేవలం వార్షిక పరీక్ష",
            "నిరంతర మరియు సమగ్ర మూల్యాంకనం",
            "ఒకసారి నిర్వహించే IQ పరీక్ష",
            "మౌఖిక పరీక్ష మాత్రమే"
        ],
        correct: 1,
        explanation: "నిరంతర మరియు సమగ్ర మూల్యాంకనం (CCE) ద్వారా విద్యార్థి అభ్యాస పురోగతిని వివిధ సందర్భాల్లో పరిశీలించి అవసరమైన మార్పులు చేయవచ్చు. ఒకే పరీక్ష సరిపోదు."
    },
    {
        question: "క్రింది వాటిలో తేలికపాటి మేధో వైకల్యం (Mild Intellectual Disability) గల విద్యార్థుల IQ పరిధి ఏది?",
        options: [
            "20–34",
            "35–49",
            "50–69",
            "70–84"
        ],
        correct: 2,
        explanation: "సాంప్రదాయ IQ వర్గీకరణ ప్రకారం Mild Intellectual Disability గల వ్యక్తుల IQ సాధారణంగా 50–69 మధ్య ఉంటుంది. వీరు తగిన శిక్షణతో అనేక దైనందిన నైపుణ్యాలను అభివృద్ధి చేసుకోగలరు."
    },
    {
        question: "సమాజంలో స్వతంత్రంగా జీవించడానికి అవసరమైన మేధో సామర్థ్యం గణనీయంగా తక్కువగా ఉండే పరిస్థితిని ఏమంటారు?",
        options: [
            "అభ్యసన వైకల్యం",
            "మేధో వైకల్యం",
            "మానసిక అనారోగ్యం",
            "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్"
        ],
        correct: 1,
        explanation: "మేధో వైకల్యంలో మేధో సామర్థ్యంతో పాటు అనుకూల ప్రవర్తన కూడా ప్రభావితమవుతుంది. దీనివల్ల వ్యక్తి స్వతంత్ర జీవన నైపుణ్యాలలో ఇబ్బందులు ఎదుర్కొంటాడు."
    },
    {
        question: "మేధో వైకల్యం ఉన్న విద్యార్థి యొక్క విద్యా ప్రణాళికను రూపొందించేటప్పుడు మొదట పరిగణించవలసిన అంశం ఏది?",
        options: [
            "తరగతి సగటు మార్కులు",
            "విద్యార్థి ప్రస్తుత పనితీరు స్థాయి",
            "పాఠశాల వార్షిక ప్రణాళిక",
            "పాఠ్యపుస్తక క్రమం"
        ],
        correct: 1,
        explanation: "IEP రూపొందించేటప్పుడు విద్యార్థి ప్రస్తుత పనితీరు స్థాయి (Present Level of Performance) తెలుసుకోవడం అత్యంత అవసరం. దాని ఆధారంగానే లక్ష్యాలు నిర్ణయిస్తారు."
    },
    {
        question: "మేధో వైకల్యం గల విద్యార్థికి బోధించేటప్పుడు అత్యంత అనుకూలమైన వ్యూహం ఏది?",
        options: [
            "వేగవంతమైన ఉపన్యాసం",
            "చిన్న చిన్న దశలుగా బోధించి పునరావృత అభ్యాసం కల్పించడం",
            "కేవలం స్వీయ అధ్యయనం చేయించడం",
            "ఒకేసారి అనేక భావనలు బోధించడం"
        ],
        correct: 1,
        explanation: "మేధో వైకల్యం గల విద్యార్థులకు చిన్న దశలుగా బోధించడం, తరచూ పునరావృతం చేయించడం మరియు తగిన అభ్యాస అవకాశాలు కల్పించడం అత్యంత ప్రభావవంతమైన పద్ధతి."
    },
    {
        question: "క్రింది వాటిలో మేధో వైకల్యం యొక్క ముఖ్య లక్షణం ఏది?",
        options: [
            "గణితంలో మాత్రమే ఇబ్బంది",
            "అనుకూల ప్రవర్తన (Adaptive Behaviour) లోపం",
            "వినికిడి లోపం",
            "దృష్టి లోపం"
        ],
        correct: 1,
        explanation: "మేధో వైకల్యంలో మేధో సామర్థ్యం తగ్గడంతో పాటు Adaptive Behaviourలో లోపాలు కనిపిస్తాయి. ఇవి దైనందిన జీవన నైపుణ్యాలను ప్రభావితం చేస్తాయి."
    },
    {
        question: "వ్యక్తిగత విద్యా ప్రణాళిక (IEP)లో క్రింది వాటిలో తప్పనిసరిగా ఉండవలసినది ఏది?",
        options: [
            "విద్యార్థి వ్యక్తిగత విద్యా లక్ష్యాలు",
            "పాఠశాల సెలవుల జాబితా",
            "ఉపాధ్యాయుల హాజరు వివరాలు",
            "వార్షిక పరీక్ష తేదీలు"
        ],
        correct: 0,
        explanation: "IEPలో విద్యార్థికి సాధించాల్సిన వ్యక్తిగత విద్యా లక్ష్యాలు స్పష్టంగా పేర్కొనాలి. ఇవే బోధన, మూల్యాంకనం మరియు పురోగతి పరిశీలనకు ఆధారం."
    },
    {
        question: "మేధో వైకల్యం గల విద్యార్థి పురోగతిని అంచనా వేయడానికి అత్యంత అనుకూలమైన విధానం ఏది?",
        options: [
            "వార్షిక పరీక్ష మాత్రమే",
            "నిరంతర పరిశీలన మరియు కార్యాచరణ ఆధారిత మూల్యాంకనం",
            "కేవలం IQ పరీక్ష",
            "ఒకే రకమైన వ్రాత పరీక్ష"
        ],
        correct: 1,
        explanation: "నిరంతర పరిశీలన, కార్యాచరణ ఆధారిత మూల్యాంకనం ద్వారా విద్యార్థి వాస్తవ జీవిత నైపుణ్యాలు మరియు విద్యా పురోగతిని సమగ్రంగా అంచనా వేయవచ్చు."
    },
    {
        question: "మేధో వైకల్యం గల విద్యార్థికి జీవన నైపుణ్యాలను అభివృద్ధి చేయడంలో ప్రధాన లక్ష్యం ఏది?",
        options: [
            "పోటీ పరీక్షలకు సిద్ధం చేయడం",
            "స్వతంత్ర జీవన సామర్థ్యాన్ని పెంపొందించడం",
            "పాఠ్యపుస్తకాన్ని పూర్తిగా కంఠస్థం చేయించడం",
            "అన్ని విషయాలలో అత్యధిక మార్కులు సాధించడం"
        ],
        correct: 1,
        explanation: "మేధో వైకల్యం గల విద్యార్థులకు విద్య యొక్క ప్రధాన లక్ష్యం స్వతంత్ర జీవన నైపుణ్యాలు, స్వీయ సంరక్షణ మరియు సామాజిక అనుకూలతను అభివృద్ధి చేయడం."
    },
    {
        question: "క్రింది వారిలో మేధో వైకల్యాన్ని \"సమాజంలో స్వతంత్రంగా జీవించడానికి అవసరమైన మేధో సామర్థ్యం లోపించడం\"గా నిర్వచించిన వారు ఎవరు?",
        options: [
            "Kohlberg",
            "Smith & Neisworth",
            "Piaget",
            "Skinner"
        ],
        correct: 1,
        explanation: "Smith & Neisworth మేధో వైకల్యాన్ని మేధో సామర్థ్యం మరియు అనుకూల ప్రవర్తనలో లోపాల పరంగా నిర్వచించారు. ఈ నిర్వచనం ప్రత్యేక విద్యలో విస్తృతంగా ఉపయోగించబడుతుంది."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి.\n\n(A) మేధో వైకల్యం గల విద్యార్థులందరికీ ఒకే విధమైన IEP అవసరం.\n\n(B) IEP విద్యార్థి వ్యక్తిగత అవసరాలకు అనుగుణంగా రూపొందించబడాలి.\n\nసరైన సమాధానం ఏది?",
        options: [
            "A మాత్రమే సరైనది",
            "B మాత్రమే సరైనది",
            "A మరియు B రెండూ సరైనవి",
            "A మరియు B రెండూ తప్పు"
        ],
        correct: 1,
        explanation: "IEP అనేది వ్యక్తిగత విద్యా ప్రణాళిక. ప్రతి విద్యార్థి అవసరాలు భిన్నంగా ఉండటంతో IEP కూడా వ్యక్తిగత అవసరాలు, సామర్థ్యాలు మరియు లక్ష్యాలకు అనుగుణంగా రూపొందించాలి."
    },
    {
        question: "By the time the teacher arrived, the students ________ the project.",
        options: [
            "complete",
            "completed",
            "had completed",
            "have completed"
        ],
        correct: 2,
        explanation: "The action of completing the project happened before the teacher arrived. Past Perfect (had + V3) is used for an action completed before another past action."
    },
    {
        question: "If it ________ tomorrow, we will postpone the school trip.",
        options: [
            "rained",
            "rains",
            "has rained",
            "had rained"
        ],
        correct: 1,
        explanation: "This is a First Conditional sentence. The if-clause uses the Simple Present tense, while the main clause uses 'will' with the base verb."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "She has finished her homework yesterday.",
            "She finished her homework yesterday.",
            "She had finished her homework yesterday.",
            "She finishes her homework yesterday."
        ],
        correct: 1,
        explanation: "The word 'yesterday' indicates a completed past action. Therefore, the Simple Past tense 'finished' is the correct form."
    },
    {
        question: "The Principal ________ the meeting now.",
        options: [
            "conducts",
            "is conducting",
            "conducted",
            "has conducted"
        ],
        correct: 1,
        explanation: "The word 'now' indicates an action happening at the present moment. Therefore, the Present Continuous tense is the correct choice."
    },
    {
        question: "By next year, Mr. Ramesh ________ in this school for twenty years.",
        options: [
            "will teach",
            "will have taught",
            "teaches",
            "has taught"
        ],
        correct: 1,
        explanation: "The phrase 'By next year' refers to a completed duration in the future. Future Perfect tense (will have + V3) is used."
    },
    {
        question: "Choose the correct tense form.\n\nI ________ this book since Monday.",
        options: [
            "am reading",
            "have been reading",
            "had read",
            "read"
        ],
        correct: 1,
        explanation: "The word 'since' indicates an action that started in the past and continues to the present. Present Perfect Continuous tense is appropriate."
    },
    {
        question: "Identify the incorrect sentence.",
        options: [
            "They were playing when I entered the room.",
            "She has lived here since 2018.",
            "We have seen him yesterday.",
            "The train left on time."
        ],
        correct: 2,
        explanation: "Present Perfect tense cannot be used with definite past time expressions like 'yesterday'. The correct sentence is 'We saw him yesterday.'"
    },
    {
        question: "When I reached the station, the train ________.",
        options: [
            "leaves",
            "has left",
            "had left",
            "left"
        ],
        correct: 2,
        explanation: "The train left before the speaker reached the station. Past Perfect tense correctly expresses the earlier completed action."
    },
    {
        question: "The students usually ________ the National Anthem before the assembly begins.",
        options: [
            "sing",
            "sings",
            "sang",
            "are singing"
        ],
        correct: 0,
        explanation: "The adverb 'usually' indicates a habitual action. Simple Present tense is used, and the plural subject 'students' takes the verb 'sing'."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "I am knowing the answer.",
            "I know the answer.",
            "I have knowing the answer.",
            "I had know the answer."
        ],
        correct: 1,
        explanation: "Know is a stative verb and is generally not used in continuous tenses. Therefore, 'I know the answer' is grammatically correct."
    },
    {
        question: "Choose the correct indirect speech.\n\nThe teacher said, \"The Earth revolves around the Sun.\"",
        options: [
            "The teacher said that the Earth revolved around the Sun.",
            "The teacher said that the Earth revolves around the Sun.",
            "The teacher said that the Earth has revolved around the Sun.",
            "The teacher told that the Earth revolves around the Sun."
        ],
        correct: 1,
        explanation: "Universal truths remain unchanged in indirect speech. Therefore, the Present Simple tense 'revolves' is retained after reporting."
    },
    {
        question: "Choose the correct indirect speech.\n\nRavi said, \"I am studying for the examination.\"",
        options: [
            "Ravi said that he was studying for the examination.",
            "Ravi said that I was studying for the examination.",
            "Ravi said that he is studying for the examination.",
            "Ravi said that he had been studying yesterday."
        ],
        correct: 0,
        explanation: "In reported speech, 'I' changes to 'he' and Present Continuous changes to Past Continuous when the reporting verb is in the past."
    },
    {
        question: "Choose the correct indirect speech.\n\nThe Headmaster said to the students, \"Work hard.\"",
        options: [
            "The Headmaster told the students that work hard.",
            "The Headmaster advised the students to work hard.",
            "The Headmaster asked the students worked hard.",
            "The Headmaster said the students work hard."
        ],
        correct: 1,
        explanation: "Imperative sentences expressing advice are reported using 'advised + object + to + verb'. This is the correct indirect speech transformation."
    },
    {
        question: "Choose the correct indirect speech.\n\nMother said to me, \"Do not waste your time.\"",
        options: [
            "Mother advised me not to waste my time.",
            "Mother told me do not waste my time.",
            "Mother said that I did not waste my time.",
            "Mother requested me don't waste my time."
        ],
        correct: 0,
        explanation: "Negative imperative sentences are reported using 'advised/told + object + not to + verb'. This structure correctly conveys the original meaning."
    },
    {
        question: "Choose the correct indirect speech.\n\nHe said, \"I have finished my homework.\"",
        options: [
            "He said that he has finished his homework.",
            "He said that he had finished his homework.",
            "He said that he finished his homework tomorrow.",
            "He told that he had finished his homework."
        ],
        correct: 1,
        explanation: "Present Perfect changes to Past Perfect in indirect speech when the reporting verb is in the past. Pronouns are also changed accordingly."
    },
    {
        question: "Choose the correct indirect speech.\n\nShe said to me, \"Can you help me?\"",
        options: [
            "She asked me if I could help her.",
            "She told me can I help her.",
            "She asked me can you help me.",
            "She said whether can I help her."
        ],
        correct: 0,
        explanation: "Yes/No questions are reported using 'asked if/whether'. 'Can' changes to 'could', and pronouns change according to the context."
    },
    {
        question: "Choose the correct indirect speech.\n\nThe teacher said, \"Why are you absent today?\"",
        options: [
            "The teacher asked why I was absent that day.",
            "The teacher asked why was I absent that day.",
            "The teacher said why I am absent today.",
            "The teacher asked why are you absent today."
        ],
        correct: 0,
        explanation: "Wh-questions retain the question word in indirect speech, but the sentence changes to statement order. 'Today' changes to 'that day'."
    },
    {
        question: "Choose the correct indirect speech.\n\nThe doctor said, \"Take the medicine regularly.\"",
        options: [
            "The doctor requested that take the medicine regularly.",
            "The doctor advised me to take the medicine regularly.",
            "The doctor said me to take the medicine regularly.",
            "The doctor told that take the medicine regularly."
        ],
        correct: 1,
        explanation: "Advice in imperative sentences is reported using 'advised + object + to + verb'. This is the standard grammatical structure."
    },
    {
        question: "Choose the correct direct speech.\n\nRamesh said that he would attend the meeting the next day.",
        options: [
            "Ramesh said, \"I will attend the meeting tomorrow.\"",
            "Ramesh said, \"I would attend the meeting tomorrow.\"",
            "Ramesh said, \"I attended the meeting tomorrow.\"",
            "Ramesh said, \"I shall attended the meeting tomorrow.\""
        ],
        correct: 0,
        explanation: "When converting back to direct speech, 'would' becomes 'will' and 'the next day' becomes 'tomorrow'. The pronoun also changes to 'I'."
    },
    {
        question: "Identify the incorrect indirect speech.",
        options: [
            "He said that he was busy.",
            "She told me that she had completed the work.",
            "The teacher asked the boy where he lived.",
            "Father told that he would come soon."
        ],
        correct: 3,
        explanation: "'Tell' requires an object. The correct sentence is 'Father told me that he would come soon' or 'Father said that he would come soon.'"
    }
];