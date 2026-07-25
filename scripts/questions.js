const SUBJECTS = [
    "CDP",
    "English",
    "Telugu",
    "Special Education"
];

const QUESTIONS = [
    {
        question: "అబ్రహాం మాస్లో ప్రేరణా సిద్ధాంతం ప్రకారం అవసరాల క్రమంలో అత్యున్నత స్థాయి ఏది?",
        options: [
            "శారీరక అవసరాలు",
            "భద్రత అవసరాలు",
            "ఆత్మసాక్షాత్కారం",
            "గౌరవ అవసరాలు"
        ],
        correct: 2,
        explanation: "మాస్లో అవసరాల సోపానక్రమంలో ఆత్మసాక్షాత్కారం అత్యున్నత స్థాయి. వ్యక్తి తన పూర్తి సామర్థ్యాన్ని అభివృద్ధి చేసుకొని జీవిత లక్ష్యాన్ని సాధించే స్థితిని ఇది సూచిస్తుంది."
    },
    {
        question: "నిర్మాణవాద (Constructivism) అభ్యాస సిద్ధాంతాన్ని ప్రధానంగా ప్రతిపాదించిన మనోవిజ్ఞాన శాస్త్రవేత్త ఎవరు?",
        options: [
            "బి.ఎఫ్. స్కిన్నర్",
            "లెవ్ వైగోట్స్కీ",
            "ఎడ్వర్డ్ థార్న్‌డైక్",
            "ఇవాన్ పావ్‌లోవ్"
        ],
        correct: 1,
        explanation: "వైగోట్స్కీ నిర్మాణవాద దృక్పథాన్ని సామాజిక పరస్పర చర్యలతో అనుసంధానించాడు. విద్యార్థి ఇతరులతో పరస్పర చర్యల ద్వారా జ్ఞానాన్ని నిర్మించుకుంటాడని ఈ సిద్ధాంతం వివరిస్తుంది."
    },
    {
        question: "క్రెట్ష్మర్ వ్యక్తిత్వ వర్గీకరణలో కింది వాటిలో ఏది ఒక శరీర నిర్మాణ రకం?",
        options: [
            "అంతర్ముఖి",
            "పైక్నిక్",
            "భావోద్వేగ స్థిరత్వం",
            "బహిర్ముఖి"
        ],
        correct: 1,
        explanation: "క్రెట్ష్మర్ వ్యక్తిత్వాన్ని శరీర నిర్మాణం ఆధారంగా పైక్నిక్, అథ్లెటిక్, అస్తెనిక్ రకాలుగా వర్గీకరించాడు. అంతర్ముఖి, బహిర్ముఖి వేరే వ్యక్తిత్వ లక్షణాలు."
    },
    {
        question: "విద్యార్థుల అభ్యాసాన్ని మెరుగుపరచడానికి నిరంతర అభిప్రాయం (Feedback) ఇవ్వడం ప్రధానంగా ఏ మూల్యాంకనానికి చెందిన లక్షణం?",
        options: [
            "సారాంశ మూల్యాంకనం",
            "నిర్మాణాత్మక మూల్యాంకనం",
            "ప్రవేశ మూల్యాంకనం",
            "సర్టిఫికేషన్ మూల్యాంకనం"
        ],
        correct: 1,
        explanation: "నిర్మాణాత్మక మూల్యాంకనం బోధన జరుగుతున్న సమయంలో విద్యార్థి పురోగతిని తెలుసుకొని వెంటనే అభిప్రాయం ఇవ్వడానికి ఉపయోగపడుతుంది. ఇది అభ్యాసాన్ని మెరుగుపరచడంపై దృష్టి పెడుతుంది."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education) యొక్క ప్రధాన లక్ష్యం ఏమిటి?",
        options: [
            "ప్రత్యేక పాఠశాలల్లో మాత్రమే బోధించడం",
            "దివ్యాంగ విద్యార్థులను సాధారణ విద్యార్థుల నుండి వేరు చేయడం",
            "అన్ని విద్యార్థులకు ఒకే విద్యా వాతావరణంలో సమాన అవకాశాలు కల్పించడం",
            "అధిక ప్రతిభ గల విద్యార్థులకు మాత్రమే ప్రత్యేక బోధన అందించడం"
        ],
        correct: 2,
        explanation: "సమగ్ర విద్యలో అన్ని విద్యార్థులు ఒకే పాఠశాలలో కలిసి నేర్చుకునే అవకాశాన్ని కల్పిస్తారు. అవసరమైన సహాయ సేవలు, బోధనా మార్పులతో సమాన విద్యా హక్కు కల్పించడం దీని లక్ష్యం."
    },
    {
        question: "హోవర్డ్ గార్డ్నర్ ప్రతిపాదించిన సిద్ధాంతం ఏది?",
        options: [
            "బహుళ మేధస్సుల సిద్ధాంతం",
            "సాంప్రదాయ ప్రేరణ సిద్ధాంతం",
            "సామాజిక అభ్యాస సిద్ధాంతం",
            "క్లాసికల్ కండిషనింగ్ సిద్ధాంతం"
        ],
        correct: 0,
        explanation: "హోవర్డ్ గార్డ్నర్ బహుళ మేధస్సుల సిద్ధాంతాన్ని ప్రతిపాదించాడు. ప్రతి వ్యక్తిలో విభిన్న రకాల మేధస్సులు వేర్వేరు స్థాయిల్లో ఉంటాయని ఈ సిద్ధాంతం పేర్కొంటుంది."
    },
    {
        question: "విద్యార్థి తన అభ్యాసంపై స్వయంగా ఆలోచించి తన బలాలు, బలహీనతలను గుర్తించే ప్రక్రియను ఏమంటారు?",
        options: [
            "సహపాఠి మూల్యాంకనం",
            "స్వీయ మూల్యాంకనం",
            "బాహ్య మూల్యాంకనం",
            "సారాంశ మూల్యాంకనం"
        ],
        correct: 1,
        explanation: "స్వీయ మూల్యాంకనం ద్వారా విద్యార్థి తన అభ్యాసాన్ని తానే విశ్లేషించుకొని మెరుగుదలకు అవసరమైన చర్యలను గుర్తించగలడు. ఇది స్వీయ నియంత్రిత అభ్యాసాన్ని ప్రోత్సహిస్తుంది."
    },
    {
        question: "క్రింది వాటిలో ఏది బాలకేంద్రిత బోధన లక్షణం?",
        options: [
            "ఉపాధ్యాయుడు మాత్రమే మాట్లాడటం",
            "పాఠ్యపుస్తకాన్ని యథాతథంగా బోధించడం",
            "విద్యార్థి చురుకైన భాగస్వామ్యం",
            "కేవలం జ్ఞాపకశక్తిని పరీక్షించడం"
        ],
        correct: 2,
        explanation: "బాలకేంద్రిత బోధనలో విద్యార్థి చురుకుగా పాల్గొంటాడు. అన్వేషణ, చర్చ, సమస్య పరిష్కారం వంటి కార్యకలాపాల ద్వారా అభ్యాసం జరుగుతుంది."
    },
    {
        question: "కింది వాటిలో ఏది సమాచార మరియు ప్రసార సాంకేతికత (ICT) సాధనం?",
        options: [
            "బ్లాక్‌బోర్డు",
            "స్మార్ట్ బోర్డు",
            "చాక్ ముక్క",
            "హాజరు నమోదు పుస్తకం"
        ],
        correct: 1,
        explanation: "స్మార్ట్ బోర్డు సమాచార మరియు ప్రసార సాంకేతికత (ICT) ఆధారిత బోధనా సాధనం. ఇది మల్టీమీడియా, పరస్పర చర్యలు మరియు డిజిటల్ వనరులను ఉపయోగించేందుకు సహాయపడుతుంది."
    },
    {
        question: "డిజిటల్ విద్యలో LMS యొక్క పూర్తి రూపం ఏమిటి?",
        options: [
            "Learning Management System",
            "Language Monitoring Service",
            "Learning Memory Source",
            "Lesson Management Structure"
        ],
        correct: 0,
        explanation: "Learning Management System (LMS) అనేది ఆన్‌లైన్ బోధన, పాఠ్యాంశాల నిర్వహణ, మూల్యాంకనం మరియు విద్యార్థుల పురోగతిని పర్యవేక్షించడానికి ఉపయోగించే వేదిక."
    },
    {
        question: "కింది వాటిలో ఏది క్లౌడ్ నిల్వ (Cloud Storage) సేవకు ఉదాహరణ?",
        options: [
            "గూగుల్ డ్రైవ్",
            "ఎం.ఎస్. పెయింట్",
            "నోట్‌ప్యాడ్",
            "కాలిక్యులేటర్"
        ],
        correct: 0,
        explanation: "గూగుల్ డ్రైవ్ క్లౌడ్ నిల్వ సేవ. ఇది ఫైళ్లను ఆన్‌లైన్‌లో భద్రపరచడం, పంచుకోవడం మరియు వివిధ పరికరాల నుండి యాక్సెస్ చేయడానికి ఉపయోగపడుతుంది."
    },
    {
        question: "సురక్షితమైన పాస్‌వర్డ్ యొక్క ముఖ్య లక్షణం ఏమిటి?",
        options: [
            "కేవలం సంఖ్యలు మాత్రమే ఉండటం",
            "పేరు మాత్రమే ఉపయోగించడం",
            "అక్షరాలు, సంఖ్యలు, ప్రత్యేక చిహ్నాల కలయిక ఉండటం",
            "పుట్టిన తేదీని ఉపయోగించడం"
        ],
        correct: 2,
        explanation: "బలమైన పాస్‌వర్డ్‌లో పెద్ద, చిన్న అక్షరాలు, సంఖ్యలు మరియు ప్రత్యేక చిహ్నాల కలయిక ఉండాలి. ఇది అనధికార ప్రవేశాన్ని నిరోధించడంలో సహాయపడుతుంది."
    },
    {
        question: "కింది వాటిలో ఏది ఈ-మెయిల్ సేవకు ఉదాహరణ?",
        options: [
            "జీమెయిల్",
            "ఎంఎస్ ఎక్సెల్",
            "పవర్‌పాయింట్",
            "వీఎల్‌సీ మీడియా ప్లేయర్"
        ],
        correct: 0,
        explanation: "జీమెయిల్ ఒక ప్రముఖ ఈ-మెయిల్ సేవ. దీని ద్వారా సందేశాలు, పత్రాలు మరియు ఇతర డిజిటల్ సమాచారాన్ని ఇంటర్నెట్ ద్వారా పంపించవచ్చు."
    },
    {
        question: "ఇంటర్నెట్‌లో వ్యక్తిగత సమాచారాన్ని రక్షించడానికి కింది వాటిలో ఏది సరైన పద్ధతి?",
        options: [
            "ప్రతి వెబ్‌సైట్‌లో ఒకే పాస్‌వర్డ్ ఉపయోగించడం",
            "తెలియని లింకులను వెంటనే తెరవడం",
            "వ్యక్తిగత సమాచారాన్ని అందరికీ పంచుకోవడం",
            "రెండు-దశల ధృవీకరణ (Two-Factor Authentication) ఉపయోగించడం"
        ],
        correct: 3,
        explanation: "రెండు-దశల ధృవీకరణ పాస్‌వర్డ్‌తో పాటు అదనపు భద్రతను అందిస్తుంది. ఖాతాను అనధికారికంగా ఉపయోగించే అవకాశాన్ని ఇది గణనీయంగా తగ్గిస్తుంది."
    },
    {
        question: "తరగతి గదిలో ICT వినియోగం వల్ల ప్రధాన ప్రయోజనం ఏమిటి?",
        options: [
            "విద్యార్థుల పాల్గొనడం తగ్గుతుంది",
            "అభ్యాసాన్ని మరింత పరస్పర చర్యలతో, ఆసక్తికరంగా చేస్తుంది",
            "ఉపాధ్యాయుడి అవసరం పూర్తిగా తొలగిపోతుంది",
            "కేవలం పరీక్షల నిర్వహణకే ఉపయోగపడుతుంది"
        ],
        correct: 1,
        explanation: "ICT ద్వారా చిత్రాలు, వీడియోలు, అనుకరణలు మరియు పరస్పర చర్యలతో కూడిన బోధన సాధ్యమవుతుంది. దీనివల్ల విద్యార్థుల ఆసక్తి, అవగాహన మరియు పాల్గొనడం పెరుగుతుంది."
    },
    {
        question: "జీన్ పియాజే ప్రకారం 'నిర్దిష్ట క్రియాత్మక దశ' (Concrete Operational Stage) సాధారణంగా ఏ వయస్సులో ఉంటుంది?",
        options: [
            "0–2 సంవత్సరాలు",
            "2–7 సంవత్సరాలు",
            "7–11 సంవత్సరాలు",
            "11 సంవత్సరాల తరువాత"
        ],
        correct: 2,
        explanation: "పియాజే ప్రకారం 7–11 సంవత్సరాల మధ్య పిల్లలు నిర్దిష్ట క్రియాత్మక దశలో ఉంటారు. ఈ దశలో తార్కిక ఆలోచన, వర్గీకరణ, పరిరక్షణ (Conservation) వంటి సామర్థ్యాలు అభివృద్ధి చెందుతాయి."
    },
    {
        question: "లెవ్ వైగోట్స్కీ ప్రతిపాదించిన 'సమీప అభివృద్ధి ప్రాంతం' (Zone of Proximal Development - ZPD) అంటే ఏమిటి?",
        options: [
            "పిల్లవాడు స్వయంగా చేయగలిగే పనుల పరిధి",
            "ఉపాధ్యాయుడు మాత్రమే చేయగలిగే పనుల పరిధి",
            "సహాయం ద్వారా పిల్లవాడు చేయగలిగే పనుల పరిధి",
            "పరీక్షల్లో మాత్రమే ఉపయోగించే విధానం"
        ],
        correct: 2,
        explanation: "ZPD అనేది పిల్లవాడు ఒంటరిగా చేయలేని కానీ ఉపాధ్యాయుడు లేదా నైపుణ్యం ఉన్న సహచరుడి సహాయంతో చేయగలిగే అభ్యాస పరిధిని సూచిస్తుంది."
    },
    {
        question: "బి.ఎఫ్. స్కిన్నర్ సిద్ధాంతంలో 'పునర్బలం' (Reinforcement) యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        options: [
            "ప్రవర్తనను తగ్గించడం",
            "ప్రవర్తనను బలపరచడం",
            "జ్ఞాపకశక్తిని తగ్గించడం",
            "తెలివితేటలను కొలవడం"
        ],
        correct: 1,
        explanation: "స్కిన్నర్ ప్రకారం పునర్బలం వల్ల కోరుకున్న ప్రవర్తన మళ్లీ మళ్లీ జరిగే అవకాశం పెరుగుతుంది. ఇది ఆపరెంట్ కండిషనింగ్ సిద్ధాంతంలో ప్రధాన అంశం."
    },
    {
        question: "విద్యార్థుల పూర్వజ్ఞానాన్ని తెలుసుకోవడానికి ఉపాధ్యాయుడు ఉపయోగించే మూల్యాంకనం ఏది?",
        options: [
            "నిర్మాణాత్మక మూల్యాంకనం",
            "సారాంశ మూల్యాంకనం",
            "నిర్ధారణాత్మక (Diagnostic) మూల్యాంకనం",
            "స్వీయ మూల్యాంకనం"
        ],
        correct: 2,
        explanation: "నిర్ధారణాత్మక మూల్యాంకనం ద్వారా విద్యార్థుల పూర్వజ్ఞానం, లోపాలు మరియు అభ్యాస అవసరాలను గుర్తించి బోధనను తగిన విధంగా ప్రణాళిక చేస్తారు."
    },
    {
        question: "క్రింది వాటిలో అభ్యాసాన్ని ప్రభావితం చేసే అంతర్గత కారకం ఏది?",
        options: [
            "తరగతి గది వాతావరణం",
            "ప్రేరణ",
            "పాఠశాల భవనం",
            "బోధనా సామగ్రి"
        ],
        correct: 1,
        explanation: "ప్రేరణ విద్యార్థిలోని అంతర్గత మానసిక శక్తి. ఇది అభ్యాసంపై ఆసక్తి, పట్టుదల మరియు లక్ష్యసాధనను ప్రభావితం చేస్తుంది."
    },
    {
        question: "కింది వాటిలో సహకార అభ్యాసం (Cooperative Learning) యొక్క ముఖ్య లక్షణం ఏది?",
        options: [
            "విద్యార్థులు ఒంటరిగా పనిచేయడం",
            "ఉపాధ్యాయుడు మాత్రమే సమాధానాలు చెప్పడం",
            "చిన్న బృందాలుగా కలిసి నేర్చుకోవడం",
            "కేవలం గృహపాఠాలపై ఆధారపడడం"
        ],
        correct: 2,
        explanation: "సహకార అభ్యాసంలో విద్యార్థులు చిన్న బృందాలుగా కలిసి సమస్యలను పరిష్కరిస్తారు. దీనివల్ల సామాజిక నైపుణ్యాలు మరియు అభ్యాస ఫలితాలు మెరుగుపడతాయి."
    },
    {
        question: "బ్లూమ్ విద్యా లక్ష్యాల వర్గీకరణలో 'విశ్లేషణ' (Analysis) ఏ స్థాయికి చెందుతుంది?",
        options: [
            "ఉన్నత జ్ఞానాత్మక స్థాయి",
            "భావావేశ స్థాయి",
            "చలనాత్మక స్థాయి",
            "శారీరక స్థాయి"
        ],
        correct: 0,
        explanation: "బ్లూమ్ జ్ఞానాత్మక రంగంలో విశ్లేషణ ఉన్నత స్థాయి ఆలోచనా నైపుణ్యం. ఇందులో అంశాలను విడదీసి వాటి సంబంధాలను అర్థం చేసుకుంటారు."
    },
    {
        question: "క్రింది వాటిలో ఓపెన్ సోర్స్ ఆపరేటింగ్ సిస్టమ్ ఏది?",
        options: [
            "లినక్స్",
            "విండోస్",
            "మ్యాక్ ఓఎస్",
            "ఐఓఎస్"
        ],
        correct: 0,
        explanation: "లినక్స్ ఓపెన్ సోర్స్ ఆపరేటింగ్ సిస్టమ్. దీని మూలకోడ్ అందుబాటులో ఉండటంతో అవసరాలకు అనుగుణంగా మార్చుకోవచ్చు."
    },
    {
        question: "కంప్యూటరులో 'CPU' యొక్క ప్రధాన పని ఏమిటి?",
        options: [
            "సమాచారాన్ని శాశ్వతంగా నిల్వ చేయడం",
            "ప్రాసెసింగ్ మరియు నియంత్రణ నిర్వహించడం",
            "చిత్రాలను ముద్రించడం",
            "ఇంటర్నెట్ కనెక్షన్ అందించడం"
        ],
        correct: 1,
        explanation: "CPU కంప్యూటర్ యొక్క మెదడు. ఇది సూచనలను అమలు చేయడం, లెక్కలు చేయడం మరియు ఇతర భాగాల పనిని నియంత్రించడం వంటి బాధ్యతలను నిర్వహిస్తుంది."
    },
    {
        question: "క్రింది వాటిలో వెబ్ బ్రౌజర్ ఏది?",
        options: [
            "గూగుల్ క్రోమ్",
            "ఎంఎస్ వర్డ్",
            "ఎంఎస్ ఎక్సెల్",
            "అడోబ్ రీడర్"
        ],
        correct: 0,
        explanation: "గూగుల్ క్రోమ్ ఒక వెబ్ బ్రౌజర్. ఇది ఇంటర్నెట్‌లో వెబ్‌సైట్లను తెరవడం, శోధించడం మరియు బ్రౌజింగ్ చేయడానికి ఉపయోగిస్తారు."
    },
    {
        question: "ఇంటర్నెట్‌లో సమాచారం కనుగొనడానికి ప్రధానంగా ఉపయోగించే సేవ ఏది?",
        options: [
            "సెర్చ్ ఇంజిన్",
            "స్ప్రెడ్‌షీట్",
            "టెక్స్ట్ ఎడిటర్",
            "మీడియా ప్లేయర్"
        ],
        correct: 0,
        explanation: "సెర్చ్ ఇంజిన్ ద్వారా వినియోగదారులు ఇంటర్నెట్‌లో అవసరమైన సమాచారాన్ని కీలక పదాల ఆధారంగా వేగంగా శోధించవచ్చు."
    },
    {
        question: "క్రింది వాటిలో 'ఫిషింగ్' (Phishing) అంటే ఏమిటి?",
        options: [
            "కంప్యూటర్ వేగాన్ని పెంచే ప్రక్రియ",
            "వ్యక్తిగత సమాచారాన్ని మోసపూరితంగా దొంగిలించే ప్రయత్నం",
            "ఫైళ్లను కుదించే సాంకేతికత",
            "ఇంటర్నెట్ వేగాన్ని పరీక్షించే విధానం"
        ],
        correct: 1,
        explanation: "ఫిషింగ్ అనేది నకిలీ ఈమెయిల్లు లేదా వెబ్‌సైట్ల ద్వారా పాస్‌వర్డ్లు, బ్యాంకు వివరాలు వంటి వ్యక్తిగత సమాచారాన్ని మోసపూరితంగా సేకరించే సైబర్ దాడి."
    },
    {
        question: "క్రింది వాటిలో డేటాను తాత్కాలికంగా నిల్వ చేసే మెమరీ ఏది?",
        options: [
            "హార్డ్ డిస్క్",
            "RAM",
            "DVD",
            "పెన్ డ్రైవ్"
        ],
        correct: 1,
        explanation: "RAM తాత్కాలిక మెమరీ. కంప్యూటర్ పనిచేస్తున్న సమయంలో మాత్రమే డేటాను నిల్వ చేస్తుంది. విద్యుత్ నిలిచిపోయినప్పుడు ఇందులోని సమాచారం తొలగిపోతుంది."
    },
    {
        question: "ఈ-మెయిల్‌లో 'CC' యొక్క పూర్తి రూపం ఏమిటి?",
        options: [
            "Carbon Copy",
            "Computer Copy",
            "Control Copy",
            "Central Copy"
        ],
        correct: 0,
        explanation: "Carbon Copy (CC) ద్వారా ప్రధాన గ్రహీతతో పాటు ఇతరులకు కూడా అదే ఈమెయిల్ ప్రతిని పంపవచ్చు. అందరికీ CCలో ఉన్న వారి వివరాలు కనిపిస్తాయి."
    },
    {
        question: "డిజిటల్ తరగతి గదిలో మల్టీమీడియా వినియోగం వల్ల ప్రధాన ప్రయోజనం ఏమిటి?",
        options: [
            "విద్యార్థుల ఆసక్తి తగ్గుతుంది",
            "బోధన మరింత దృశ్య, శ్రావ్య మరియు ఆసక్తికరంగా మారుతుంది",
            "పుస్తకాల అవసరం పూర్తిగా ఉండదు",
            "పరీక్షలు నిర్వహించడం అసాధ్యం అవుతుంది"
        ],
        correct: 1,
        explanation: "మల్టీమీడియా ద్వారా చిత్రాలు, శబ్దం, వీడియోలు మరియు యానిమేషన్‌ల సహాయంతో బోధన ప్రభావవంతంగా మారి విద్యార్థుల అవగాహన మరియు ఆసక్తి పెరుగుతుంది."
    },
    {
        question: "Choose the sentence with the correct use of the article.",
        options: [
            "He is an university student.",
            "He is a university student.",
            "He is the university student.",
            "He is university student."
        ],
        correct: 1,
        explanation: "The word 'university' begins with the consonant sound /juː/, so the correct article is 'a', not 'an'. Articles depend on pronunciation rather than spelling."
    },
    {
        question: "Identify the correctly spelt word.",
        options: [
            "Accomodation",
            "Acommodation",
            "Accommodation",
            "Accommadation"
        ],
        correct: 2,
        explanation: "Accommodation is the correct spelling. It contains double 'c' and double 'm'. This word is frequently tested in competitive examinations."
    },
    {
        question: "Choose the synonym of 'Rapid'.",
        options: [
            "Slow",
            "Quick",
            "Weak",
            "Quiet"
        ],
        correct: 1,
        explanation: "Rapid means happening in a very short time or moving quickly. 'Quick' is the closest synonym, whereas the other options have different meanings."
    },
    {
        question: "Choose the antonym of 'Generous'.",
        options: [
            "Kind",
            "Helpful",
            "Selfish",
            "Honest"
        ],
        correct: 2,
        explanation: "A generous person is willing to give or share. The opposite quality is selfishness, where a person is mainly concerned with personal benefit."
    },
    {
        question: "Choose the correct passive voice of: 'The teacher praised the student.'",
        options: [
            "The student praised the teacher.",
            "The student was praised by the teacher.",
            "The teacher was praised by the student.",
            "The student is praised by the teacher."
        ],
        correct: 1,
        explanation: "In the passive voice, the object becomes the subject. Since the action happened in the past, 'was praised' correctly represents the simple past passive form."
    },
    {
        question: "Choose the correct question tag: 'She is a doctor, ______?'",
        options: [
            "is she",
            "isn't she",
            "doesn't she",
            "does she"
        ],
        correct: 1,
        explanation: "A positive statement takes a negative question tag. Since the helping verb is 'is', the correct tag is 'isn't she?'."
    },
    {
        question: "Fill in the blank: Neither Ravi nor his friends ______ present yesterday.",
        options: [
            "was",
            "were",
            "is",
            "has"
        ],
        correct: 1,
        explanation: "In 'Neither...nor', the verb agrees with the subject nearest to it. Here, 'friends' is plural, so the correct verb is 'were'."
    },
    {
        question: "Choose the correct meaning of the idiom 'Once in a blue moon'.",
        options: [
            "Every day",
            "Very frequently",
            "Very rarely",
            "At midnight"
        ],
        correct: 2,
        explanation: "The idiom 'Once in a blue moon' means something that happens very rarely or infrequently, not on a regular basis."
    },
    {
        question: "Choose the correct preposition: He is good ______ Mathematics.",
        options: [
            "at",
            "in",
            "on",
            "for"
        ],
        correct: 0,
        explanation: "The adjective 'good' is commonly followed by the preposition 'at' when referring to skill or ability in a subject or activity."
    },
    {
        question: "Identify the correctly punctuated sentence.",
        options: [
            "Where are you going.",
            "Where are you going?",
            "Where are you going!",
            "Where are you going,"
        ],
        correct: 1,
        explanation: "A direct question must end with a question mark. Therefore, 'Where are you going?' is correctly punctuated."
    },
    {
        question: "Choose the correct indirect speech: Ram said, 'I am busy.'",
        options: [
            "Ram said that I am busy.",
            "Ram said that he was busy.",
            "Ram said that he is busy.",
            "Ram said he busy."
        ],
        correct: 1,
        explanation: "In reported speech, the pronoun changes according to the speaker and the present tense changes to the past tense when the reporting verb is in the past."
    },
    {
        question: "Which one is a compound word?",
        options: [
            "Teacher",
            "Sunflower",
            "Beautiful",
            "Running"
        ],
        correct: 1,
        explanation: "A compound word is formed by combining two independent words. 'Sunflower' combines 'sun' and 'flower' into one meaningful word."
    },
    {
        question: "Which teaching method emphasizes communication rather than memorizing grammar rules?",
        options: [
            "Grammar Translation Method",
            "Communicative Language Teaching",
            "Lecture Method",
            "Drill Method"
        ],
        correct: 1,
        explanation: "Communicative Language Teaching focuses on meaningful communication, interaction and language use in real-life situations instead of memorizing grammar rules."
    },
    {
        question: "Which of the following is an open-ended question?",
        options: [
            "Is the Earth round?",
            "Did you finish your homework?",
            "What do you think about online learning?",
            "Are you happy?"
        ],
        correct: 2,
        explanation: "Open-ended questions encourage learners to explain, describe and express ideas rather than simply answering with 'yes' or 'no'."
    },
    {
        question: "Reading a passage quickly to understand its main idea is called:",
        options: [
            "Scanning",
            "Skimming",
            "Proofreading",
            "Editing"
        ],
        correct: 1,
        explanation: "Skimming means reading rapidly to understand the general idea of a passage. Scanning is used to locate specific information or details."
    },
    {
        question: "Choose the correctly punctuated sentence.",
        options: [
            "My favourite subjects are English Mathematics Science and Social Studies.",
            "My favourite subjects are English, Mathematics, Science and Social Studies.",
            "My favourite subjects are English Mathematics, Science, and Social Studies.",
            "My favourite subjects are English; Mathematics; Science; and Social Studies."
        ],
        correct: 1,
        explanation: "Items in a series should be separated by commas. The sentence with commas between the subjects is correctly punctuated and follows standard English writing conventions."
    },
    {
        question: "Fill in the blank: If I ______ enough money, I would buy a new laptop.",
        options: [
            "have",
            "had",
            "will have",
            "am having"
        ],
        correct: 1,
        explanation: "This is a second conditional sentence expressing an unreal or imaginary situation. The correct structure is 'If + past simple, would + base verb', so 'had' is correct."
    },
    {
        question: "Choose the correctly spelt word.",
        options: [
            "Pronounciation",
            "Pronunciation",
            "Pronounciaton",
            "Pronunciaton"
        ],
        correct: 1,
        explanation: "The correct spelling is 'Pronunciation'. It is derived from 'pronounce', but the spelling changes by omitting the letter 'o' after 'n'."
    },
    {
        question: "Choose the synonym of 'Ancient'.",
        options: [
            "Modern",
            "Recent",
            "Old",
            "Future"
        ],
        correct: 2,
        explanation: "Ancient means belonging to the distant past or very old. Among the given options, 'Old' is the closest synonym."
    },
    {
        question: "Choose the antonym of 'Expand'.",
        options: [
            "Increase",
            "Enlarge",
            "Contract",
            "Develop"
        ],
        correct: 2,
        explanation: "Expand means to become larger or wider. The opposite meaning is 'Contract', which means to become smaller or narrower."
    },
    {
        question: "Choose the correct passive voice: 'They are repairing the road.'",
        options: [
            "The road repaired by them.",
            "The road is repaired by them.",
            "The road is being repaired by them.",
            "The road has been repaired by them."
        ],
        correct: 2,
        explanation: "The sentence is in the present continuous tense. Its passive voice is formed using 'is being + past participle', making 'The road is being repaired by them' correct."
    },
    {
        question: "Choose the correct preposition: The train arrived ______ the station on time.",
        options: [
            "at",
            "in",
            "into",
            "over"
        ],
        correct: 0,
        explanation: "The preposition 'at' is used with places like stations, airports and bus stops when referring to arrival at a specific location."
    },
    {
        question: "Which one of the following is an interrogative sentence?",
        options: [
            "Please open the window.",
            "What a beautiful flower!",
            "Where do you live?",
            "She lives in Hyderabad."
        ],
        correct: 2,
        explanation: "An interrogative sentence asks a question and ends with a question mark. 'Where do you live?' is the only question among the given options."
    },
    {
        question: "Choose the correct reported speech: The teacher said, 'Work hard.'",
        options: [
            "The teacher said that work hard.",
            "The teacher advised us to work hard.",
            "The teacher said work hard.",
            "The teacher told that work hard."
        ],
        correct: 1,
        explanation: "Imperative sentences in reported speech are usually changed using 'advised', 'ordered', or 'requested' followed by an infinitive. 'Advised us to work hard' is the correct transformation."
    },
    {
        question: "Which of the following is a modal auxiliary verb?",
        options: [
            "Runs",
            "Can",
            "Playing",
            "Writing"
        ],
        correct: 1,
        explanation: "Modal auxiliary verbs express ability, permission, possibility or obligation. 'Can' is a modal auxiliary verb commonly used to express ability or permission."
    },
    {
        question: "Which language skill is primarily developed by writing essays?",
        options: [
            "Listening",
            "Speaking",
            "Reading",
            "Writing"
        ],
        correct: 3,
        explanation: "Essay writing develops the writing skill by improving organization of ideas, grammar, vocabulary, coherence and the ability to express thoughts effectively."
    },
    {
        question: "Which of the following is most suitable for assessing speaking skills?",
        options: [
            "Dictation",
            "Oral presentation",
            "Reading comprehension",
            "Grammar worksheet"
        ],
        correct: 1,
        explanation: "Speaking skills are best assessed through oral tasks such as presentations, discussions or interviews where learners demonstrate pronunciation, fluency and communication skills."
    },
    {
        question: "Reading a text carefully to understand every detail is called:",
        options: [
            "Skimming",
            "Scanning",
            "Intensive reading",
            "Extensive reading"
        ],
        correct: 2,
        explanation: "Intensive reading focuses on understanding vocabulary, grammar and detailed meaning. It is different from skimming or scanning, which involve faster reading techniques."
    },
    {
        question: "According to Communicative Language Teaching (CLT), the role of the teacher is mainly that of a:",
        options: [
            "Dictator",
            "Facilitator",
            "Examiner only",
            "Lecturer only"
        ],
        correct: 1,
        explanation: "In Communicative Language Teaching, the teacher acts as a facilitator who creates opportunities for meaningful communication and guides learners rather than dominating the classroom."
    },
    {
        question: "Which of the following activities best develops vocabulary in an English classroom?",
        options: [
            "Copying the lesson repeatedly",
            "Memorizing grammar rules only",
            "Using words in meaningful sentences",
            "Writing the alphabet daily"
        ],
        correct: 2,
        explanation: "Vocabulary develops effectively when learners use new words in meaningful contexts. Constructing sentences helps improve understanding, retention and practical language use."
    }, {
        question: "కింది వాటిలో 'సమాస పదం' ఏది?",
        options: [
            "పాఠశాల",
            "రాజమార్గం",
            "విద్యార్థి",
            "తెలుగు"
        ],
        correct: 1,
        explanation: "'రాజమార్గం' అనేది 'రాజ + మార్గం' అనే రెండు పదాల కలయికతో ఏర్పడిన సమాస పదం. సమాసంలో రెండు లేదా అంతకంటే ఎక్కువ పదాలు కలిసి ఒకే అర్థాన్ని ఇస్తాయి."
    },
    {
        question: "కింది వాటిలో 'పర్యాయపదం' జత సరైనది ఏది?",
        options: [
            "ఆకాశం – గగనం",
            "నీరు – నిప్పు",
            "సూర్యుడు – చంద్రుడు",
            "భూమి – ఆకాశం"
        ],
        correct: 0,
        explanation: "'ఆకాశం' మరియు 'గగనం' ఒకే అర్థాన్ని సూచించే పర్యాయపదాలు. పర్యాయపదాలు ఒకే భావాన్ని వ్యక్తపరచే వేర్వేరు పదాలు."
    },
    {
        question: "'ధైర్యం' పదానికి వ్యతిరేక పదం ఏది?",
        options: [
            "సాహసం",
            "భయం",
            "బలం",
            "ఉత్సాహం"
        ],
        correct: 1,
        explanation: "'ధైర్యం'కు వ్యతిరేక పదం 'భయం'. వ్యతిరేక పదాలు పరస్పర విరుద్ధమైన అర్థాన్ని తెలియజేస్తాయి."
    },
    {
        question: "కింది వాటిలో శుద్ధ రూపం ఏది?",
        options: [
            "భాద్యత",
            "బాద్యత",
            "బాధ్యత",
            "భాధ్యత"
        ],
        correct: 2,
        explanation: "'బాధ్యత' సరైన రూపం. తెలుగు భాషలో సరైన వర్ణవిన్యాసం (Spelling) భాషా నైపుణ్యాలలో ముఖ్యమైనది."
    },
    {
        question: "'గుర్రం పరుగెత్తింది.' వాక్యంలో 'పరుగెత్తింది' ఏ పదభాగానికి చెందుతుంది?",
        options: [
            "నామవాచకం",
            "సర్వనామం",
            "క్రియ",
            "విశేషణం"
        ],
        correct: 2,
        explanation: "'పరుగెత్తింది' పని లేదా చర్యను సూచిస్తుంది. చర్యను తెలియజేసే పదాన్ని క్రియ అంటారు."
    },
    {
        question: "'రాముడు మంచి బాలుడు.' వాక్యంలో 'మంచి' ఏది?",
        options: [
            "క్రియ",
            "విశేషణం",
            "సర్వనామం",
            "అవ్యయం"
        ],
        correct: 1,
        explanation: "'మంచి' అనే పదం 'బాలుడు' అనే నామవాచకాన్ని విశేషిస్తుంది. కాబట్టి అది విశేషణం."
    },
    {
        question: "కింది వాటిలో సర్వనామం ఏది?",
        options: [
            "రాము",
            "పుస్తకం",
            "అతడు",
            "చెట్టు"
        ],
        correct: 2,
        explanation: "'అతడు' నామవాచకానికి బదులుగా ఉపయోగించే పదం. అలాంటి పదాలను సర్వనామాలు అంటారు."
    },
    {
        question: "'పుస్తకాలు' అనే పదం ఏ వచనానికి ఉదాహరణ?",
        options: [
            "ఏకవచనం",
            "బహువచనం",
            "ఉభయవచనం",
            "నపుంసకవచనం"
        ],
        correct: 1,
        explanation: "'పుస్తకాలు' ఒకటి కంటే ఎక్కువ పుస్తకాలను సూచిస్తుంది. అందువల్ల అది బహువచన రూపం."
    },
    {
        question: "'చేతికి అందిన పండు' అనే జాతీయానికి సరైన భావం ఏది?",
        options: [
            "సులభంగా లభించేది",
            "చాలా దూరంలో ఉన్నది",
            "అసాధ్యమైన పని",
            "ఖరీదైన వస్తువు"
        ],
        correct: 0,
        explanation: "'చేతికి అందిన పండు' అంటే సులభంగా లభించే అవకాశం లేదా సులభంగా సాధించగలిగే విషయం అని అర్థం."
    },
    {
        question: "'అరచేతిలో వైకుంఠం' అనే జాతీయానికి సరైన అర్థం ఏది?",
        options: [
            "చాలా సులభమైన పని",
            "అసాధ్యమైన పని",
            "అడవిలో జీవించడం",
            "పండుగ రోజు"
        ],
        correct: 0,
        explanation: "'అరచేతిలో వైకుంఠం' అనే జాతీయం చాలా సులభంగా లభించే లేదా సులభంగా సాధించగలిగే విషయాన్ని సూచిస్తుంది."
    },
    {
        question: "భాషా బోధనలో 'వినికిడి నైపుణ్యం' (Listening Skill) అభివృద్ధి చెందడానికి అత్యంత అనుకూలమైన కార్యాచరణ ఏది?",
        options: [
            "కథ వినిపించడం",
            "వ్యాసరచన",
            "పద్యాన్ని వ్రాయించడం",
            "వ్యాకరణాభ్యాసం"
        ],
        correct: 0,
        explanation: "కథలు, సంభాషణలు, ప్రసంగాలు వినిపించడం ద్వారా వినికిడి నైపుణ్యం అభివృద్ధి చెందుతుంది. ఇది భాషా బోధనలో ప్రాథమిక నైపుణ్యాలలో ఒకటి."
    },
    {
        question: "తెలుగు బోధనలో 'చదవడం' (Reading Skill) నైపుణ్యాన్ని మెరుగుపరచడానికి ఏ కార్యాచరణ అత్యంత అనుకూలం?",
        options: [
            "పాఠ్యాంశాన్ని మౌనంగా చదివి ప్రశ్నలకు సమాధానాలు చెప్పడం",
            "అక్షరాలను పదేపదే వ్రాయడం",
            "పద్యాన్ని కంఠస్థం చేయడం",
            "వ్యాకరణ నియమాలు వ్రాయించడం"
        ],
        correct: 0,
        explanation: "మౌన పఠనం తరువాత ప్రశ్నలకు సమాధానాలు చెప్పించడం ద్వారా పఠన గ్రహణశక్తి (Reading Comprehension) మెరుగుపడుతుంది."
    },
    {
        question: "కింది వాటిలో భాషా బోధనలో 'సంభాషణ పద్ధతి' (Conversation Method) యొక్క ప్రధాన ప్రయోజనం ఏమిటి?",
        options: [
            "వ్యాకరణ నియమాలను కంఠస్థం చేయించడం",
            "మౌఖిక వ్యక్తీకరణను అభివృద్ధి చేయడం",
            "కేవలం పరీక్షలకు సిద్ధం చేయడం",
            "పద్యాలను గుర్తుపెట్టించడం"
        ],
        correct: 1,
        explanation: "సంభాషణ పద్ధతి ద్వారా విద్యార్థుల మాట్లాడే నైపుణ్యం, పదసంపద మరియు ఆత్మవిశ్వాసం పెరుగుతాయి."
    },
    {
        question: "భాషా బోధనలో 'నిర్మాణాత్మక మూల్యాంకనం' (Formative Assessment) యొక్క ముఖ్య ఉద్దేశ్యం ఏమిటి?",
        options: [
            "చివరి గ్రేడ్ ఇవ్వడం",
            "అభ్యాసంలో పురోగతిని తెలుసుకొని అవసరమైన మార్పులు చేయడం",
            "ప్రమోషన్ నిర్ణయించడం",
            "ర్యాంకులు ప్రకటించడం"
        ],
        correct: 1,
        explanation: "నిర్మాణాత్మక మూల్యాంకనం బోధన జరుగుతున్న సమయంలో విద్యార్థి అభ్యాసాన్ని అంచనా వేసి వెంటనే అవసరమైన మార్పులు చేయడానికి ఉపయోగపడుతుంది."
    },
    {
        question: "తెలుగు భాషా బోధనలో పదసంపద (Vocabulary) పెంపొందించడానికి అత్యంత ప్రభావవంతమైన పద్ధతి ఏది?",
        options: [
            "కొత్త పదాలను వాక్యాలలో ఉపయోగించడం",
            "అక్షరమాలను ప్రతిరోజూ వ్రాయడం",
            "వ్యాకరణ నిర్వచనాలను కంఠస్థం చేయడం",
            "కేవలం పరీక్షా ప్రశ్నలు సాధన చేయడం"
        ],
        correct: 0,
        explanation: "కొత్త పదాలను సందర్భానుసారంగా వాక్యాలలో ఉపయోగించడం ద్వారా వాటి అర్థం స్పష్టమవుతుంది మరియు పదసంపద దీర్ఘకాలం గుర్తుంటుంది."
    },
    {
        question: "క్రింది పదాలలో తత్సమ పదం ఏది?",
        options: [
            "పుస్తకం",
            "విద్య",
            "చెట్టు",
            "మొక్క"
        ],
        correct: 1,
        explanation: "సంస్కృత భాష నుండి రూపంలో మార్పులేకుండా తెలుగులోకి వచ్చిన పదాలను తత్సమ పదాలు అంటారు. 'విద్య' అలాంటి తత్సమ పదం."
    },
    {
        question: "క్రింది వాటిలో 'దేశభాషలందు తెలుగు లెస్స' అని చెప్పిన కవి ఎవరు?",
        options: [
            "శ్రీనాథుడు",
            "నన్నయ భట్టారకుడు",
            "శ్రీకృష్ణదేవరాయలు",
            "తిక్కన సోమయాజి"
        ],
        correct: 2,
        explanation: "'దేశభాషలందు తెలుగు లెస్స' అనే ప్రసిద్ధ వాక్యం ఆముక్తమాల్యదలో శ్రీకృష్ణదేవరాయలు పేర్కొన్నారు. తెలుగు భాష గొప్పతనాన్ని చాటే ప్రసిద్ధ ఉక్తి ఇది."
    },
    {
        question: "క్రింది వాటిలో సరైన సంధి ఏది?",
        options: [
            "దేవ + ఆలయం = దేవాలయం",
            "రామ + అయ్య = రామయ్య",
            "సుర + ఇంద్రుడు = సురేంద్రుడు",
            "పైవన్నీ"
        ],
        correct: 3,
        explanation: "ఇచ్చిన మూడు పదాలు కూడా సంధి నియమాల ప్రకారం ఏర్పడిన సరైన రూపాలే. కాబట్టి 'పైవన్నీ' సరైన సమాధానం."
    },
    {
        question: "'చేతికి ఎముక లేదు' అనే సామెత యొక్క భావం ఏమిటి?",
        options: [
            "ఎక్కువ పని చేయడం",
            "ఇష్టం వచ్చినట్లు ఖర్చు చేయడం",
            "ధైర్యంగా ఉండడం",
            "చేతి నొప్పి రావడం"
        ],
        correct: 1,
        explanation: "'చేతికి ఎముక లేదు' అనే సామెత డబ్బును విచక్షణ లేకుండా ఖర్చు చేసే వ్యక్తిని సూచిస్తుంది."
    },
    {
        question: "'ఆకాశానికి నిచ్చెన వేయడం' అనే జాతీయానికి సరైన భావం ఏమిటి?",
        options: [
            "సులభమైన పని చేయడం",
            "అసాధ్యమైన పని చేయడం",
            "ఎత్తైన ప్రదేశానికి వెళ్లడం",
            "విజయం సాధించడం"
        ],
        correct: 1,
        explanation: "'ఆకాశానికి నిచ్చెన వేయడం' అనే జాతీయం అసాధ్యమైన లేదా సాధ్యం కాని పనిని చేయడానికి ప్రయత్నించడం అనే అర్థాన్ని ఇస్తుంది."
    },
    {
        question: "క్రింది వాటిలో విశేషణం ఏది?",
        options: [
            "పరిగెత్తు",
            "అందమైన",
            "పుస్తకం",
            "నవ్వు"
        ],
        correct: 1,
        explanation: "నామవాచకాన్ని విశేషించే పదాన్ని విశేషణం అంటారు. 'అందమైన' అనే పదం నామవాచకానికి గుణాన్ని తెలియజేస్తుంది."
    },
    {
        question: "'రాము వేగంగా పరుగెత్తాడు.' ఈ వాక్యంలో క్రియావిశేషణం ఏది?",
        options: [
            "రాము",
            "వేగంగా",
            "పరుగెత్తాడు",
            "వాక్యంలో లేదు"
        ],
        correct: 1,
        explanation: "క్రియను విశేషించే పదాన్ని క్రియావిశేషణం అంటారు. 'వేగంగా' అనే పదం పరుగెత్తాడు అనే క్రియను విశేషిస్తుంది."
    },
    {
        question: "'నేను పాఠశాలకు వెళ్తున్నాను.' ఈ వాక్యంలో కర్త ఏది?",
        options: [
            "నేను",
            "పాఠశాలకు",
            "వెళ్తున్నాను",
            "కు"
        ],
        correct: 0,
        explanation: "వాక్యంలో క్రియను చేసే వ్యక్తి లేదా వస్తువును కర్త అంటారు. ఈ వాక్యంలో 'నేను' కర్త."
    },
    {
        question: "క్రింది వాటిలో ద్విత్వాక్షర పదం ఏది?",
        options: [
            "పుస్తకం",
            "చెక్క",
            "మామిడి",
            "బడి"
        ],
        correct: 1,
        explanation: "ఒకే హల్లును రెండుసార్లు ఉపయోగించినప్పుడు ద్విత్వాక్షరం ఏర్పడుతుంది. 'చెక్క'లో 'క్క' ద్విత్వాక్షరం ఉంది."
    },
    {
        question: "'అన్నం' అనే పదానికి సరైన పర్యాయపదం ఏది?",
        options: [
            "ఓదనం",
            "నిప్పు",
            "నీరు",
            "పండు"
        ],
        correct: 0,
        explanation: "'ఓదనం' అనేది 'అన్నం'కు పర్యాయపదం. పర్యాయపదాలు ఒకే లేదా సమానార్థాన్ని సూచించే పదాలు."
    },
    {
        question: "'అమృతం' అనే పదానికి వ్యతిరేక పదం ఏది?",
        options: [
            "నీరు",
            "విషం",
            "పాలు",
            "ఆహారం"
        ],
        correct: 1,
        explanation: "'అమృతం'కు వ్యతిరేక పదం 'విషం'. వ్యతిరేక పదాలు పరస్పర విరుద్ధమైన అర్థాన్ని తెలియజేస్తాయి."
    },
    {
        question: "తెలుగు వర్ణమాలలో అచ్చుల సంఖ్య ఎంత?",
        options: [
            "14",
            "15",
            "16",
            "18"
        ],
        correct: 2,
        explanation: "సాంప్రదాయ తెలుగు వ్యాకరణం ప్రకారం తెలుగు వర్ణమాలలో 16 అచ్చులు ఉంటాయి. ఇవి స్వతంత్రంగా ఉచ్చరించబడే వర్ణాలు."
    },
    {
        question: "క్రింది వాటిలో సర్వనామం ఏది?",
        options: [
            "పుస్తకం",
            "అతను",
            "పరుగెత్తు",
            "అందంగా"
        ],
        correct: 1,
        explanation: "నామవాచకానికి బదులుగా ఉపయోగించే పదాన్ని సర్వనామం అంటారు. 'అతను' ఒక సర్వనామం."
    },
    {
        question: "'మాట వెండి అయితే మౌనం బంగారం' అనే సామెత యొక్క భావం ఏమిటి?",
        options: [
            "ఎక్కువ మాట్లాడాలి",
            "అవసరమైనప్పుడు మౌనం విలువైనది",
            "వెండి బంగారం కంటే గొప్పది",
            "మాట్లాడకూడదు"
        ],
        correct: 1,
        explanation: "ఈ సామెత అవసరం లేని సందర్భాల్లో మాట్లాడకుండా మౌనంగా ఉండటం మరింత శ్రేయస్కరమని సూచిస్తుంది."
    },
    {
        question: "విద్యార్థుల భాషా నైపుణ్యాల అభివృద్ధికి అత్యంత అనుకూలమైన బోధనా పద్ధతి ఏది?",
        options: [
            "కేవలం కంఠస్థం చేయించడం",
            "భాషా కార్యకలాపాల ఆధారిత బోధన",
            "రోజూ పరీక్షలు నిర్వహించడం",
            "వ్యాకరణ నియమాలను మాత్రమే బోధించడం"
        ],
        correct: 1,
        explanation: "భాషా కార్యకలాపాలు, సంభాషణలు, పఠనం మరియు రచనా వ్యాయామాలు విద్యార్థుల వినడం, మాట్లాడడం, చదవడం, రాయడం అనే నాలుగు భాషా నైపుణ్యాలను సమగ్రంగా అభివృద్ధి చేస్తాయి."
    },
    {
        question: "తెలుగు సాహిత్యానికి ఆదికవి అని ఎవరిని పిలుస్తారు?",
        options: [
            "తిక్కన సోమయాజి",
            "ఎర్రప్రగడ",
            "నన్నయ భట్టారకుడు",
            "శ్రీనాథుడు"
        ],
        correct: 2,
        explanation: "తెలుగు మహాభారత రచనను ప్రారంభించిన నన్నయ భట్టారకుడిని తెలుగు ఆదికవిగా గౌరవిస్తారు. తెలుగు సాహిత్యానికి ఆయన చేసిన సేవ విశిష్టమైనది."
    },
    {
        question: "'సుమతీ శతకం' రచయిత ఎవరు?",
        options: [
            "వేమన",
            "బద్దెన",
            "పోతన",
            "ధూర్జటి"
        ],
        correct: 1,
        explanation: "సుమతీ శతకాన్ని బద్దెన రచించారు. ఇందులోని నీతిపద్యాలు సరళమైన భాషలో ఉండి నైతిక విలువలను బోధిస్తాయి."
    },
    {
        question: "'పండిత పుత్రః పరమ శుంఠః' అనే జాతీయానికి సరైన భావం ఏమిటి?",
        options: [
            "పండితుని కుమారుడు తప్పకుండా పండితుడే అవుతాడు.",
            "తల్లిదండ్రుల గుణాలు పిల్లలకు తప్పనిసరిగా వస్తాయి.",
            "పండితుని కుమారుడు కూడా అజ్ఞాని కావచ్చు.",
            "పండితుడు తన కుమారునికి మాత్రమే బోధిస్తాడు."
        ],
        correct: 2,
        explanation: "ఈ జాతీయం తల్లిదండ్రుల ప్రతిభ లేదా జ్ఞానం పిల్లలకు తప్పనిసరిగా సంక్రమించదని సూచిస్తుంది."
    },
    {
        question: "'మొక్కై వంగనిది మానై వంగునా' అనే సామెత యొక్క భావం ఏమిటి?",
        options: [
            "చిన్నప్పుడే మంచి అలవాట్లు నేర్పాలి.",
            "పెద్దవారిని మాత్రమే గౌరవించాలి.",
            "మొక్కలను జాగ్రత్తగా పెంచాలి.",
            "పెద్దయ్యాక చదవాలి."
        ],
        correct: 0,
        explanation: "ఈ సామెత బాల్యంలోనే మంచి అలవాట్లు, క్రమశిక్షణ, విలువలను నేర్పాలని సూచిస్తుంది. తరువాత వాటిని మార్చడం కష్టమవుతుంది."
    },
    {
        question: "'విద్యార్థి' అనే పదంలో మూలపదం ఏది?",
        options: [
            "విద్య",
            "అర్థి",
            "విద్",
            "విద్యార్థ"
        ],
        correct: 0,
        explanation: "'విద్యార్థి' అనే పదంలో 'విద్య' మూలపదం. విద్యను అభ్యసించే వ్యక్తిని విద్యార్థి అంటారు."
    },
    {
        question: "క్రింది వాటిలో నామవాచకం ఏది?",
        options: [
            "పరిగెత్తు",
            "అందంగా",
            "పుస్తకం",
            "నెమ్మదిగా"
        ],
        correct: 2,
        explanation: "వ్యక్తి, వస్తువు, స్థలం లేదా భావాన్ని సూచించే పదాన్ని నామవాచకం అంటారు. 'పుస్తకం' ఒక వస్తువును సూచించే నామవాచకం."
    },
    {
        question: "'అతను మంచి బాలుడు.' ఈ వాక్యంలో విశేషణం ఏది?",
        options: [
            "అతను",
            "మంచి",
            "బాలుడు",
            "అతను మంచి"
        ],
        correct: 1,
        explanation: "'మంచి' అనే పదం 'బాలుడు' అనే నామవాచకాన్ని విశేషిస్తుంది. అందువల్ల అది విశేషణం."
    },
    {
        question: "క్రింది వాటిలో సరైన బహువచన రూపం ఏది?",
        options: [
            "పుస్తకాలు",
            "పుస్తకములులు",
            "పుస్తకంలు",
            "పుస్తకములులు"
        ],
        correct: 0,
        explanation: "'పుస్తకం' అనే పదానికి సరైన బహువచన రూపం 'పుస్తకాలు'. ఇది ఆధునిక తెలుగులో సాధారణంగా ఉపయోగించే రూపం."
    },
    {
        question: "'అగ్ని' అనే పదానికి పర్యాయపదం ఏది?",
        options: [
            "అనలుడు",
            "ఆకాశం",
            "గాలి",
            "వర్షం"
        ],
        correct: 0,
        explanation: "'అనలుడు' అనేది అగ్నికి పర్యాయపదం. పర్యాయపదాలు ఒకే భావాన్ని తెలియజేసే భిన్న పదాలు."
    },
    {
        question: "'సుఖం' అనే పదానికి వ్యతిరేక పదం ఏది?",
        options: [
            "ఆనందం",
            "శాంతి",
            "దుఃఖం",
            "సంతోషం"
        ],
        correct: 2,
        explanation: "'సుఖం'కు వ్యతిరేక పదం 'దుఃఖం'. ఇవి పరస్పర విరుద్ధమైన భావాలను తెలియజేస్తాయి."
    },
    {
        question: "'కాకి' అనే పదంలో అక్షరాల సంఖ్య ఎంత?",
        options: [
            "2",
            "3",
            "4",
            "5"
        ],
        correct: 1,
        explanation: "'కాకి' అనే పదంలో 'కా', 'కి' అనే రెండు అక్షరాలు ఉంటాయి. అక్షరాల లెక్కింపు ఉచ్చారణ ఆధారంగా జరుగుతుంది."
    },
    {
        question: "క్రింది వాటిలో ఉభయాక్షరం ఏది?",
        options: [
            "క్ష",
            "అ",
            "క",
            "య"
        ],
        correct: 0,
        explanation: "'క్ష' అనేది క్ + ష కలయికతో ఏర్పడిన సంయుక్తాక్షరం (ఉభయాక్షరం). తెలుగు లిపిలో ఇది ప్రత్యేక ప్రాధాన్యం కలిగి ఉంది."
    },
    {
        question: "భాషా బోధనలో 'శ్రవణం' (Listening) నైపుణ్యాన్ని అభివృద్ధి చేయడానికి అత్యంత అనుకూలమైన కార్యక్రమం ఏది?",
        options: [
            "వ్యాసరచన",
            "కథను శ్రద్ధగా వినిపించి ప్రశ్నలు అడగడం",
            "కంఠస్థం చేయించడం",
            "వ్యాకరణ నియమాలు రాయించడం"
        ],
        correct: 1,
        explanation: "కథలు, సంభాషణలు లేదా ఆడియోలను వినిపించి వాటిపై ప్రశ్నలు అడగడం ద్వారా విద్యార్థుల శ్రవణ నైపుణ్యం సమర్థవంతంగా అభివృద్ధి చెందుతుంది."
    },
    {
        question: "భాషా బోధనలో 'మాట్లాడే నైపుణ్యం' (Speaking Skill) పెంపొందించడానికి ఉత్తమ పద్ధతి ఏది?",
        options: [
            "నిశ్శబ్ద పఠనం",
            "సమూహ చర్చలు మరియు పాత్రధారణ",
            "కేవలం వ్యాకరణ వ్యాయామాలు",
            "కాపీ రాయించడం"
        ],
        correct: 1,
        explanation: "సమూహ చర్చలు, పాత్రధారణ, ప్రసంగం వంటి కార్యక్రమాలు విద్యార్థుల్లో మాట్లాడే ధైర్యాన్ని, భాషా ప్రవాహాన్ని మరియు వ్యక్తీకరణ సామర్థ్యాన్ని పెంచుతాయి."
    },
    {
        question: "సమర్థవంతమైన తెలుగు భాషా బోధనలో ఉపాధ్యాయుని ప్రధాన పాత్ర ఏమిటి?",
        options: [
            "కేవలం పాఠ్యపుస్తకాన్ని చదవడం",
            "విద్యార్థులు భాషను ఉపయోగించే అవకాశాలను కల్పించే సౌకర్యకర్తగా వ్యవహరించడం",
            "రోజూ పరీక్షలు మాత్రమే నిర్వహించడం",
            "కంఠస్థం చేయించడం మాత్రమే"
        ],
        correct: 1,
        explanation: "ఆధునిక భాషా బోధనలో ఉపాధ్యాయుడు సౌకర్యకర్త (Facilitator). విద్యార్థులు వినడం, మాట్లాడడం, చదవడం, రాయడం వంటి నాలుగు భాషా నైపుణ్యాలను అభివృద్ధి చేసుకునే అవకాశాలను కల్పించాలి."
    },
    {
        question: "కింది వాటిలో దృష్టి లోపం (Visual Impairment) యొక్క ప్రధాన వర్గీకరణ ఏది?",
        options: [
            "పాక్షిక దృష్టి (Low Vision) మరియు అంధత్వం (Blindness)",
            "మయోపియా మరియు హైపర్‌మెట్రోపియా",
            "రంగు గ్రహణ లోపం మరియు కంటి నొప్పి",
            "దగ్గరి చూపు మరియు దూరపు చూపు"
        ],
        correct: 0,
        explanation: "ప్రత్యేక విద్యలో దృష్టి లోపాన్ని ప్రధానంగా పాక్షిక దృష్టి (Low Vision) మరియు అంధత్వం (Blindness)గా వర్గీకరిస్తారు. ఈ వర్గీకరణ విద్యా సేవల ప్రణాళికలో ఉపయోగపడుతుంది."
    },
    {
        question: "బ్రెయిల్ (Braille) లిపిని అభివృద్ధి చేసిన వ్యక్తి ఎవరు?",
        options: [
            "లూయిస్ బ్రెయిల్ (Louis Braille)",
            "హెలెన్ కెల్లర్",
            "సామ్యూల్ గ్రిడ్లీ హోవ్",
            "జీన్ మార్క్ ఇటార్డ్"
        ],
        correct: 0,
        explanation: "లూయిస్ బ్రెయిల్ దృష్టి లోపం గల వ్యక్తుల కోసం ఆరు చుక్కల ఆధారిత బ్రెయిల్ లిపిని రూపొందించాడు. ఇది ప్రపంచవ్యాప్తంగా విస్తృతంగా ఉపయోగించబడుతోంది."
    },
    {
        question: "బ్రెయిల్ (Braille) వ్యవస్థలో ఒక సెల్‌లో మొత్తం ఎన్ని చుక్కల (Dots) ఉంటాయి?",
        options: [
            "4",
            "5",
            "6",
            "8"
        ],
        correct: 2,
        explanation: "ప్రామాణిక బ్రెయిల్ సెల్‌లో రెండు నిలువు వరుసలలో మొత్తం ఆరు చుక్కలు ఉంటాయి. వీటి కలయికతో అక్షరాలు, సంఖ్యలు మరియు ఇతర సంకేతాలు రూపొందుతాయి."
    },
    {
        question: "JAWS (Job Access With Speech) అనేది ఏమిటి?",
        options: [
            "దృష్టి లోపం గల విద్యార్థుల కోసం స్క్రీన్ రీడర్",
            "బ్రెయిల్ ప్రింటర్",
            "వినికిడి యంత్రం",
            "సంకేత భాషా నిఘంటువు"
        ],
        correct: 0,
        explanation: "JAWS ఒక స్క్రీన్ రీడర్ సాఫ్ట్‌వేర్. ఇది కంప్యూటర్ తెరపై ఉన్న సమాచారాన్ని శబ్ద రూపంలో చదివి దృష్టి లోపం గల వినియోగదారులకు సహాయపడుతుంది."
    },
    {
        question: "కింది వాటిలో దృష్టి లోపం గల విద్యార్థికి సహాయక సాంకేతిక పరికరం (Assistive Technology) ఏది?",
        options: [
            "బ్రెయిల్ స్లేట్ మరియు స్టైలస్",
            "హియరింగ్ ఎయిడ్ (Hearing Aid)",
            "కాక్లియర్ ఇంప్లాంట్ (Cochlear Implant)",
            "ఎఫ్.ఎం. వ్యవస్థ (FM System)"
        ],
        correct: 0,
        explanation: "బ్రెయిల్ స్లేట్ మరియు స్టైలస్ దృష్టి లోపం గల విద్యార్థులు బ్రెయిల్‌లో చదవడం, రాయడం కోసం ఉపయోగించే ప్రాథమిక సహాయక పరికరాలు."
    },
    {
        question: "వినికిడి లోపం (Hearing Impairment) ఉన్న విద్యార్థులకు ధ్వనిని పెంచి వినిపించే పరికరం ఏది?",
        options: [
            "బ్రెయిల్ టైప్‌రైటర్",
            "హియరింగ్ ఎయిడ్ (Hearing Aid)",
            "అబాకస్",
            "మాగ్నిఫైయర్"
        ],
        correct: 1,
        explanation: "హియరింగ్ ఎయిడ్ శబ్దాన్ని పెంచి వినికిడి అవశేష సామర్థ్యాన్ని ఉపయోగించుకునేలా చేస్తుంది. ఇది వినికిడి లోపం గల అనేక మంది విద్యార్థులకు ఉపయోగపడుతుంది."
    },
    {
        question: "కాక్లియర్ ఇంప్లాంట్ (Cochlear Implant) ప్రధానంగా ఎవరికోసం ఉపయోగిస్తారు?",
        options: [
            "దృష్టి లోపం గల విద్యార్థుల కోసం",
            "తీవ్ర నుండి అతితీవ్ర వినికిడి లోపం గల వ్యక్తుల కోసం",
            "శారీరక వైకల్యం గల వ్యక్తుల కోసం",
            "అభ్యాస లోపం గల విద్యార్థుల కోసం"
        ],
        correct: 1,
        explanation: "కాక్లియర్ ఇంప్లాంట్ తీవ్రమైన లేదా అతితీవ్రమైన వినికిడి లోపం గల కొంతమంది వ్యక్తులకు శ్రవణ సమాచారాన్ని అందించడానికి ఉపయోగించే శస్త్రచికిత్స ఆధారిత పరికరం."
    },
    {
        question: "కింది వాటిలో వినికిడి లోపం గల విద్యార్థితో మాట్లాడేటప్పుడు ఉపాధ్యాయుడు పాటించాల్సిన సరైన పద్ధతి ఏది?",
        options: [
            "విద్యార్థి వైపు చూడకుండా మాట్లాడటం",
            "ముఖం స్పష్టంగా కనిపించేలా ఎదురుగా మాట్లాడటం",
            "వెనుక నుంచి సూచనలు ఇవ్వడం",
            "ఎప్పుడూ గట్టిగా అరవడం"
        ],
        correct: 1,
        explanation: "ముఖాన్ని స్పష్టంగా చూపిస్తూ మాట్లాడడం వల్ల పెదవుల కదలికలు, ముఖ భావాలను గమనించి వినికిడి లోపం గల విద్యార్థి అర్థం చేసుకోవడానికి సులభమవుతుంది."
    },
    {
        question: "కింది వాటిలో భారతీయ సంకేత భాష (Indian Sign Language - ISL) గురించి సరైన వాక్యం ఏది?",
        options: [
            "ఇది ప్రపంచంలోని అన్ని దేశాల్లో ఒకే విధంగా ఉంటుంది.",
            "ఇది వినికిడి లోపం గల వ్యక్తుల సహజ భాష.",
            "ఇది కేవలం వేళ్లతో అక్షరాలు చూపించే విధానం మాత్రమే.",
            "ఇది కేవలం ఉపాధ్యాయులు మాత్రమే ఉపయోగిస్తారు."
        ],
        correct: 1,
        explanation: "భారతీయ సంకేత భాష (ISL) వినికిడి లోపం గల వ్యక్తుల దృశ్య-సంకేత ఆధారిత భాష. దీనికి స్వంత వ్యాకరణ నిర్మాణం ఉంటుంది."
    },
    {
        question: "కింది వాటిలో లో విజన్ (Low Vision) గల విద్యార్థికి అత్యంత అనుకూలమైన బోధనా అనుసరణ ఏది?",
        options: [
            "పెద్ద అక్షరాలతో ముద్రించిన పాఠ్యాంశం",
            "కళ్లకు గంతలు కట్టడం",
            "వెనుక బెంచీలో కూర్చోబెట్టడం",
            "చిత్రాలు ఉపయోగించకపోవడం"
        ],
        correct: 0,
        explanation: "పెద్ద అక్షరాలు, అధిక వ్యత్యాసం (Contrast), తగిన వెలుతురు వంటి అనుసరణలు లో విజన్ గల విద్యార్థుల అభ్యాసాన్ని సులభతరం చేస్తాయి."
    },
    {
        question: "వినికిడి తీవ్రతను కొలిచే ప్రమాణం ఏది?",
        options: [
            "లీటర్ (Litre)",
            "డెసిబెల్ (dB)",
            "సెంటీమీటర్ (cm)",
            "కిలోగ్రామ్ (kg)"
        ],
        correct: 1,
        explanation: "వినికిడి స్థాయిని డెసిబెల్ (dB)లో కొలుస్తారు. వినికిడి లోపం వర్గీకరణలో dB విలువలు ముఖ్యమైన ప్రమాణంగా ఉపయోగిస్తారు."
    },
    {
        question: "కింది వాటిలో వినికిడి లోపం గల విద్యార్థుల కోసం ఉపయోగించే సహాయక పరికరం ఏది?",
        options: [
            "ఎఫ్.ఎం. వ్యవస్థ (FM System)",
            "బ్రెయిల్ సెల్",
            "మాగ్నిఫైయింగ్ గ్లాస్ మాత్రమే",
            "స్టైలస్"
        ],
        correct: 0,
        explanation: "FM వ్యవస్థ ఉపాధ్యాయుని స్వరాన్ని నేరుగా విద్యార్థి వినికిడి పరికరానికి చేరవేసి తరగతి గదిలో శబ్ద అంతరాయాన్ని తగ్గిస్తుంది."
    },
    {
        question: "దృష్టి లోపం గల విద్యార్థికి తరగతి గదిలో అత్యంత అనుకూలమైన ఏర్పాటు ఏది?",
        options: [
            "తగిన వెలుతురు మరియు అడ్డంకులు లేని మార్గం",
            "వెలుతురు లేకుండా ఉంచడం",
            "తరచూ సీటు మార్చడం",
            "ఎల్లప్పుడూ చివరి బెంచీలో కూర్చోబెట్టడం"
        ],
        correct: 0,
        explanation: "సురక్షితమైన కదలిక కోసం అడ్డంకులు లేని మార్గం, తగిన వెలుతురు మరియు స్థిరమైన తరగతి గది అమరిక దృష్టి లోపం గల విద్యార్థికి ఉపయోగకరంగా ఉంటుంది."
    },
    {
        question: "ఓరియెంటేషన్ అండ్ మొబిలిటీ (Orientation and Mobility) శిక్షణ ప్రధానంగా ఎవరికి అవసరం?",
        options: [
            "దృష్టి లోపం గల విద్యార్థులకు",
            "వినికిడి లోపం గల విద్యార్థులకు",
            "మేధో వైకల్యం గల విద్యార్థులకు",
            "అభ్యాస లోపం గల విద్యార్థులకు"
        ],
        correct: 0,
        explanation: "ఓరియెంటేషన్ అండ్ మొబిలిటీ శిక్షణ ద్వారా దృష్టి లోపం గల వ్యక్తులు పరిసరాలను గుర్తించడం, సురక్షితంగా స్వతంత్రంగా సంచరించడం నేర్చుకుంటారు."
    },
    {
        question: "వినికిడి లోపం గల విద్యార్థికి ఉపాధ్యాయుడు సూచనలు ఇవ్వేటప్పుడు అత్యంత ముఖ్యమైన విషయం ఏది?",
        options: [
            "ముఖాన్ని తిప్పుకొని మాట్లాడటం",
            "నోటిని చేతితో కప్పుకొని మాట్లాడటం",
            "స్పష్టమైన ముఖాభినయాలు, సహజ వేగంతో మాట్లాడటం",
            "కేవలం బ్లాక్‌బోర్డు వైపు చూస్తూ మాట్లాడటం"
        ],
        correct: 2,
        explanation: "స్పష్టమైన ముఖాభినయాలు, పెదవుల కదలికలు కనిపించేలా సహజ వేగంతో మాట్లాడటం వినికిడి లోపం గల విద్యార్థి అర్థం చేసుకోవడాన్ని మెరుగుపరుస్తుంది."
    },
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) యొక్క ప్రధాన లక్షణం ఏది?",
        options: [
            "సామాజిక పరస్పర చర్యలు మరియు సంభాషణలో ఇబ్బందులు",
            "వినికిడి శక్తి పూర్తిగా లేకపోవడం",
            "దృష్టి పూర్తిగా కోల్పోవడం",
            "శారీరక ఎదుగుదల మందగించడం"
        ],
        correct: 0,
        explanation: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న పిల్లల్లో సామాజిక పరస్పర చర్యలు, సంభాషణ నైపుణ్యాలు మరియు పరిమిత, పునరావృత ప్రవర్తనలు ప్రధాన లక్షణాలుగా కనిపిస్తాయి."
    },
    {
        question: "ఎకోలాలియా (Echolalia) అంటే ఏమిటి?",
        options: [
            "అక్షరాలను తలక్రిందులుగా రాయడం",
            "ఇతరులు చెప్పిన పదాలు లేదా వాక్యాలను మళ్లీ మళ్లీ పునరావృతం చేయడం",
            "వినికిడి శక్తి కోల్పోవడం",
            "చూపు మందగించడం"
        ],
        correct: 1,
        explanation: "ఎకోలాలియా అనేది ఇతరులు చెప్పిన పదాలు లేదా వాక్యాలను వెంటనే లేదా కొంత సమయం తరువాత పునరావృతం చేయడం. ఇది ఆటిజం ఉన్న కొంతమంది పిల్లల్లో సాధారణంగా కనిపించే లక్షణం."
    },
    {
        question: "కింది వాటిలో ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న విద్యార్థికి అనుకూలమైన బోధనా పద్ధతి ఏది?",
        options: [
            "దృశ్య సహాయకాలు (Visual Supports) ఉపయోగించడం",
            "ప్రతి రోజు తరగతి నియమాలను మార్చడం",
            "మౌఖిక సూచనలు మాత్రమే ఇవ్వడం",
            "శబ్దం ఎక్కువగా ఉండే వాతావరణంలో బోధించడం"
        ],
        correct: 0,
        explanation: "దృశ్య షెడ్యూళ్లు, చిత్రాలు, సంకేతాలు వంటి Visual Supports ఆటిజం ఉన్న విద్యార్థులకు సూచనలను అర్థం చేసుకోవడంలో మరియు దినచర్యను అనుసరించడంలో సహాయపడతాయి."
    },
    {
        question: "డిస్లెక్సియా (Dyslexia) ప్రధానంగా ఏ నైపుణ్యాన్ని ప్రభావితం చేస్తుంది?",
        options: [
            "చదవడం (Reading)",
            "వినికిడి (Hearing)",
            "చూపు (Vision)",
            "నడక (Walking)"
        ],
        correct: 0,
        explanation: "డిస్లెక్సియా ఒక నిర్దిష్ట అభ్యాస లోపం (Specific Learning Disability). ఇది ప్రధానంగా చదవడం, పదాలను గుర్తించడం మరియు అక్షర-ధ్వని సంబంధాన్ని ప్రభావితం చేస్తుంది."
    },
    {
        question: "డిస్గ్రాఫియా (Dysgraphia) ప్రధానంగా దేనికి సంబంధించిన అభ్యాస లోపం?",
        options: [
            "రచన (Writing)",
            "చదవడం",
            "గణితం",
            "మాట్లాడడం"
        ],
        correct: 0,
        explanation: "డిస్గ్రాఫియా ఉన్న విద్యార్థులకు అక్షరాలను సరిగా రాయడం, అక్షరాల ఆకృతి, స్పెల్లింగ్ మరియు రచనా నైపుణ్యాలలో ఇబ్బందులు కనిపిస్తాయి."
    },
    {
        question: "డిస్కాల్కులియా (Dyscalculia) ప్రధానంగా దేనికి సంబంధించిన అభ్యాస లోపం?",
        options: [
            "గణిత నైపుణ్యాలు",
            "చదవడం",
            "వినికిడి",
            "మాట్లాడడం"
        ],
        correct: 0,
        explanation: "డిస్కాల్కులియా గణితానికి సంబంధించిన నిర్దిష్ట అభ్యాస లోపం. సంఖ్యల అవగాహన, లెక్కలు మరియు గణిత భావనలను నేర్చుకోవడంలో ఇబ్బందులు ఉంటాయి."
    },
    {
        question: "నిర్దిష్ట అభ్యాస లోపం (Specific Learning Disability - SLD) ఉన్న విద్యార్థి సాధారణంగా ఎలా ఉంటాడు?",
        options: [
            "మేధస్సు సాధారణ స్థాయిలో ఉండవచ్చు",
            "ఎల్లప్పుడూ మేధో వైకల్యం ఉంటుంది",
            "వినికిడి లోపం తప్పనిసరిగా ఉంటుంది",
            "దృష్టి లోపం తప్పనిసరిగా ఉంటుంది"
        ],
        correct: 0,
        explanation: "నిర్దిష్ట అభ్యాస లోపం ఉన్న విద్యార్థుల మేధస్సు సాధారణంగా సాధారణ స్థాయిలో లేదా అంతకంటే ఎక్కువగా ఉండవచ్చు. సమస్య నిర్దిష్ట విద్యా నైపుణ్యాలకు మాత్రమే పరిమితమవుతుంది."
    },
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న పిల్లల్లో సాధారణంగా కనిపించే మరో లక్షణం ఏది?",
        options: [
            "పునరావృత ప్రవర్తనలు (Repetitive Behaviours)",
            "తాత్కాలిక వినికిడి లోపం",
            "ఎముకల బలహీనత",
            "శారీరక వైకల్యం"
        ],
        correct: 0,
        explanation: "చేతులు ఊపడం, ఒకే పనిని పదేపదే చేయడం, ఒకే దినచర్యను అనుసరించడం వంటి పునరావృత ప్రవర్తనలు ఆటిజం ఉన్న పిల్లల్లో సాధారణంగా కనిపిస్తాయి."
    },
    {
        question: "డిస్లెక్సియా ఉన్న విద్యార్థికి అత్యంత అనుకూలమైన బోధనా పద్ధతి ఏది?",
        options: [
            "బహుఇంద్రియ బోధన (Multisensory Teaching)",
            "ఎక్కువ కాపీ రాయించడం",
            "వేగంగా చదవమని ఒత్తిడి చేయడం",
            "తప్పులకు శిక్షించడం"
        ],
        correct: 0,
        explanation: "Multisensory Teaching ద్వారా చూడటం, వినడం, మాట్లాడడం, రాయడం వంటి అనేక ఇంద్రియాలను ఉపయోగించి బోధించడం డిస్లెక్సియా ఉన్న విద్యార్థులకు ప్రభావవంతంగా ఉంటుంది."
    },
    {
        question: "కింది వాటిలో నిర్దిష్ట అభ్యాస లోపం (SLD) కాదు?",
        options: [
            "డిస్లెక్సియా (Dyslexia)",
            "డిస్గ్రాఫియా (Dysgraphia)",
            "డిస్కాల్కులియా (Dyscalculia)",
            "దృష్టి లోపం (Visual Impairment)"
        ],
        correct: 3,
        explanation: "దృష్టి లోపం ఒక సంచేతన వైకల్యం. డిస్లెక్సియా, డిస్గ్రాఫియా, డిస్కాల్కులియా మాత్రం Specific Learning Disabilities (SLD)గా పరిగణించబడతాయి."
    },
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న విద్యార్థికి తరగతి గదిలో ఏది అత్యంత సహాయకరం?",
        options: [
            "స్థిరమైన దినచర్య (Structured Routine)",
            "ప్రతి గంటకు నియమాలను మార్చడం",
            "అధిక శబ్దం ఉండే తరగతి గది",
            "సూచనలు ఇవ్వకుండా పనులు అప్పగించడం"
        ],
        correct: 0,
        explanation: "స్థిరమైన దినచర్య మరియు ముందుగా ఊహించగలిగే కార్యకలాపాలు ఆటిజం ఉన్న విద్యార్థులలో ఆందోళనను తగ్గించి అభ్యాసాన్ని మెరుగుపరుస్తాయి."
    },
    {
        question: "కింది వాటిలో డిస్లెక్సియా లక్షణం ఏది?",
        options: [
            "అక్షరాలు లేదా పదాలను గుర్తించడంలో ఇబ్బంది",
            "వినికిడి పూర్తిగా లేకపోవడం",
            "రంగులను గుర్తించలేకపోవడం",
            "నడవలేకపోవడం"
        ],
        correct: 0,
        explanation: "డిస్లెక్సియా ఉన్న విద్యార్థులకు అక్షరాలు, పదాలను చదవడం, స్పెల్లింగ్ మరియు ధ్వని-అక్షర సంబంధాన్ని అర్థం చేసుకోవడంలో ఇబ్బందులు కనిపిస్తాయి."
    },
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న విద్యార్థి ప్రవర్తనను మెరుగుపరచడానికి ఉపాధ్యాయుడు ప్రధానంగా ఏ పద్ధతిని అనుసరించాలి?",
        options: [
            "సానుకూల పునర్బలం (Positive Reinforcement)",
            "కఠినమైన శిక్షలు",
            "తరచూ గద్దించడం",
            "విద్యార్థిని ఒంటరిగా ఉంచడం"
        ],
        correct: 0,
        explanation: "సానుకూల పునర్బలం ద్వారా కోరుకున్న ప్రవర్తనను ప్రోత్సహించవచ్చు. ఇది ఆటిజం ఉన్న విద్యార్థులలో సరైన ప్రవర్తనను అభివృద్ధి చేయడంలో ప్రభావవంతంగా ఉంటుంది."
    },
    {
        question: "కింది వాటిలో ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) గురించి సరైన వాక్యం ఏది?",
        options: [
            "ఇది న్యూరో-డెవలప్‌మెంటల్ రుగ్మత (Neurodevelopmental Disorder).",
            "ఇది అంటువ్యాధి.",
            "ఇది కంటి వ్యాధి.",
            "ఇది ఎముకల వ్యాధి."
        ],
        correct: 0,
        explanation: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ ఒక న్యూరో-డెవలప్‌మెంటల్ రుగ్మత. ఇది మెదడు అభివృద్ధికి సంబంధించినది మరియు అంటువ్యాధి కాదు."
    },
    {
        question: "నిర్దిష్ట అభ్యాస లోపం (SLD) ఉన్న విద్యార్థుల మూల్యాంకనంలో ఉపాధ్యాయుడు ఏ అనుసరణ (Accommodation) కల్పించడం సముచితం?",
        options: [
            "అదనపు సమయం (Extra Time)",
            "ప్రశ్నాపత్రం ఇవ్వకపోవడం",
            "పరీక్షకు అనుమతించకపోవడం",
            "విద్యార్థి తరపున అన్ని సమాధానాలు రాయడం"
        ],
        correct: 0,
        explanation: "అదనపు సమయం వంటి అనుసరణలు SLD ఉన్న విద్యార్థులు తమ జ్ఞానాన్ని సమర్థంగా వ్యక్తపరచడానికి సహాయపడతాయి. ఇది అభ్యాస లోపాన్ని దృష్టిలో ఉంచుకొని కల్పించే విద్యా సౌకర్యం."
    },
    {
        question: "మేధో వైకల్యం (Intellectual Disability) నిర్ధారణలో ప్రధానంగా పరిగణించే మూడు అంశాలు ఏవి?",
        options: [
            "మేధో పనితీరు, అనుకూల ప్రవర్తన, 18 సంవత్సరాల లోపు ప్రారంభం",
            "ఎత్తు, బరువు, వయస్సు",
            "వినికిడి, దృష్టి, భాష",
            "జ్ఞాపకశక్తి, చదవడం, రాయడం"
        ],
        correct: 0,
        explanation: "మేధో వైకల్య నిర్ధారణలో సగటు కంటే తక్కువ మేధో పనితీరు (IQ), అనుకూల ప్రవర్తనలో లోపాలు మరియు 18 సంవత్సరాల లోపు ప్రారంభం అనే మూడు ప్రమాణాలు ముఖ్యమైనవి."
    },
    {
        question: "మేధో వైకల్యం (Intellectual Disability) యొక్క ప్రధాన లక్షణం ఏది?",
        options: [
            "మేధో పనితీరు మరియు అనుకూల ప్రవర్తనలో గణనీయమైన పరిమితులు",
            "కేవలం శారీరక ఎదుగుదల మందగించడం",
            "వినికిడి లోపం మాత్రమే ఉండడం",
            "దృష్టి లోపం మాత్రమే ఉండడం"
        ],
        correct: 0,
        explanation: "మేధో వైకల్యంలో మేధో పనితీరు (Intellectual Functioning)తో పాటు అనుకూల ప్రవర్తన (Adaptive Behaviour)లో కూడా గణనీయమైన పరిమితులు ఉంటాయి."
    },
    {
        question: "క్రింది వాటిలో అనుకూల ప్రవర్తన (Adaptive Behaviour)కు ఉదాహరణ ఏది?",
        options: [
            "స్వీయ సంరక్షణ మరియు దైనందిన జీవిత నైపుణ్యాలు",
            "కంటి రంగు",
            "శరీర బరువు",
            "రక్త గ్రూపు"
        ],
        correct: 0,
        explanation: "స్వీయ సంరక్షణ, వ్యక్తిగత పరిశుభ్రత, డబ్బు వినియోగం, సామాజిక నైపుణ్యాలు వంటి రోజువారీ జీవిత నైపుణ్యాలను అనుకూల ప్రవర్తన అంటారు."
    },
    {
        question: "IQ ఆధారంగా మేధో వైకల్యం వర్గీకరణలో 50–55 నుండి సుమారు 70 వరకు ఉన్న స్థాయిని ఏమంటారు?",
        options: [
            "స్వల్ప మేధో వైకల్యం (Mild Intellectual Disability)",
            "మధ్యస్థ మేధో వైకల్యం (Moderate Intellectual Disability)",
            "తీవ్ర మేధో వైకల్యం (Severe Intellectual Disability)",
            "అతితీవ్ర మేధో వైకల్యం (Profound Intellectual Disability)"
        ],
        correct: 0,
        explanation: "APTETలో సాధారణంగా ఉపయోగించే IQ వర్గీకరణ ప్రకారం 50–55 నుండి సుమారు 70 వరకు ఉన్న IQ స్వల్ప (Mild) మేధో వైకల్యంగా పరిగణించబడుతుంది."
    },
    {
        question: "క్రింది వాటిలో బహుళ వైకల్యం (Multiple Disabilities)కు సరైన నిర్వచనం ఏది?",
        options: [
            "ఒకే వ్యక్తిలో రెండు లేదా అంతకంటే ఎక్కువ వైకల్యాలు కలిసి ఉండడం",
            "కేవలం రెండు శారీరక వైకల్యాలు మాత్రమే ఉండడం",
            "ఒకే అభ్యాస లోపం ఉండడం",
            "తాత్కాలిక అనారోగ్యం ఉండడం"
        ],
        correct: 0,
        explanation: "బహుళ వైకల్యం అంటే ఒక వ్యక్తిలో రెండు లేదా అంతకంటే ఎక్కువ వైకల్యాలు కలిసి ఉండటం వల్ల ప్రత్యేక విద్యా అవసరాలు ఏర్పడే పరిస్థితి."
    },
    {
        question: "బహుళ వైకల్యం (Multiple Disabilities) గల విద్యార్థులకు బోధనలో అత్యంత ముఖ్యమైనది ఏది?",
        options: [
            "వ్యక్తిగత విద్యా ప్రణాళిక (IEP)",
            "అందరికీ ఒకే విధమైన బోధన",
            "కేవలం పాఠ్యపుస్తకం చదివించడం",
            "రోజూ పరీక్షలు మాత్రమే నిర్వహించడం"
        ],
        correct: 0,
        explanation: "బహుళ వైకల్యం గల ప్రతి విద్యార్థి అవసరాలు భిన్నంగా ఉంటాయి. అందువల్ల వ్యక్తిగత విద్యా ప్రణాళిక (IEP) అత్యంత ముఖ్యమైనది."
    },
    {
        question: "మేధో వైకల్యం గల విద్యార్థికి బోధించేటప్పుడు ఉపాధ్యాయుడు ప్రధానంగా ఏ పద్ధతిని అనుసరించాలి?",
        options: [
            "చిన్న చిన్న దశల్లో (Task Analysis) బోధించడం",
            "ఒకేసారి క్లిష్టమైన అంశాలు బోధించడం",
            "ఎక్కువ గృహపాఠాలు ఇవ్వడం",
            "వేగంగా పాఠం పూర్తి చేయడం"
        ],
        correct: 0,
        explanation: "పెద్ద పనిని చిన్న చిన్న దశలుగా విభజించి బోధించడం (Task Analysis) మేధో వైకల్యం గల విద్యార్థుల అభ్యాసానికి ప్రభావవంతమైన పద్ధతి."
    },
    {
        question: "క్రింది వాటిలో మేధో వైకల్యం గల విద్యార్థికి అత్యంత ప్రాధాన్యమిచ్చే బోధనా లక్ష్యం ఏది?",
        options: [
            "క్రియాత్మక విద్యా నైపుణ్యాలు (Functional Academics)",
            "ఉన్నత స్థాయి బీజగణితం",
            "కేవలం కంఠస్థం చేయించడం",
            "పరీక్ష మార్కులు మాత్రమే"
        ],
        correct: 0,
        explanation: "క్రియాత్మక విద్య (Functional Academics) ద్వారా డబ్బు వినియోగం, సమయం గుర్తించడం, దైనందిన జీవన నైపుణ్యాలు వంటి అంశాలు అభివృద్ధి చేయబడతాయి."
    },
    {
        question: "మేధో వైకల్యం గల విద్యార్థుల పురోగతిని అంచనా వేయడానికి అత్యంత అనుకూలమైన విధానం ఏది?",
        options: [
            "నిరంతర మరియు సమగ్ర మూల్యాంకనం",
            "సంవత్సరాంత పరీక్ష మాత్రమే",
            "ఒక్కసారి మాత్రమే పరీక్షించడం",
            "మౌఖిక పరీక్షలను పూర్తిగా మానేయడం"
        ],
        correct: 0,
        explanation: "నిరంతర మూల్యాంకనం ద్వారా విద్యార్థి పురోగతిని దశలవారీగా అంచనా వేసి బోధనలో అవసరమైన మార్పులు చేయవచ్చు."
    },
    {
        question: "క్రింది వాటిలో డౌన్ సిండ్రోమ్ (Down Syndrome) గురించి సరైన వాక్యం ఏది?",
        options: [
            "ఇది క్రోమోజోమ్ అసాధారణతతో సంబంధం ఉన్న పరిస్థితి",
            "ఇది అంటువ్యాధి",
            "ఇది వినికిడి వ్యాధి మాత్రమే",
            "ఇది కంటి వ్యాధి"
        ],
        correct: 0,
        explanation: "డౌన్ సిండ్రోమ్ సాధారణంగా అదనపు 21వ క్రోమోజోమ్ (Trisomy 21) కారణంగా ఏర్పడే జన్యుపరమైన పరిస్థితి. మేధో వైకల్యంతో సంబంధం ఉండవచ్చు."
    },
    {
        question: "మేధో వైకల్యం గల విద్యార్థులలో స్వతంత్ర జీవన నైపుణ్యాలను అభివృద్ధి చేయడానికి అత్యంత ముఖ్యమైనది ఏది?",
        options: [
            "స్వీయ సంరక్షణ (Self-help Skills) శిక్షణ",
            "కేవలం సిద్ధాంత పాఠాలు",
            "రోజంతా వ్రాయించడం",
            "కేవలం పరీక్షలపై దృష్టి"
        ],
        correct: 0,
        explanation: "దుస్తులు ధరించడం, భోజనం చేయడం, పరిశుభ్రత పాటించడం వంటి స్వీయ సంరక్షణ నైపుణ్యాలు స్వతంత్ర జీవనానికి ఎంతో అవసరం."
    },
    {
        question: "బహుళ వైకల్యం గల విద్యార్థి బోధనలో ఎవరి భాగస్వామ్యం అత్యంత అవసరం?",
        options: [
            "తల్లిదండ్రులు, ప్రత్యేక ఉపాధ్యాయులు మరియు ఇతర నిపుణుల బృందం",
            "కేవలం ప్రధానోపాధ్యాయుడు",
            "కేవలం తరగతి ఉపాధ్యాయుడు",
            "కేవలం వైద్యుడు"
        ],
        correct: 0,
        explanation: "బహుళ వైకల్యం గల విద్యార్థి సమగ్ర అభివృద్ధికి తల్లిదండ్రులు, ప్రత్యేక ఉపాధ్యాయులు, థెరపిస్టులు మరియు ఇతర నిపుణుల సమన్వయం అవసరం."
    },
    {
        question: "మేధో వైకల్యం గల విద్యార్థికి సానుకూల ప్రవర్తనను పెంపొందించడానికి ఉత్తమ పద్ధతి ఏది?",
        options: [
            "సానుకూల పునర్బలం (Positive Reinforcement)",
            "శారీరక శిక్ష",
            "గద్దించడం",
            "తరగతి నుండి బయటకు పంపించడం"
        ],
        correct: 0,
        explanation: "సానుకూల పునర్బలం ద్వారా కోరుకున్న ప్రవర్తనను ప్రోత్సహించవచ్చు. ఇది మేధో వైకల్యం గల విద్యార్థుల ప్రవర్తనా వికాసంలో ప్రభావవంతమైన పద్ధతి."
    },
    {
        question: "క్రింది వాటిలో మేధో వైకల్యం గల విద్యార్థికి సరైన తరగతి గది అనుసరణ (Accommodation) ఏది?",
        options: [
            "సరళమైన సూచనలు, అదనపు సమయం మరియు పునరావృత అభ్యాసం",
            "వేగంగా బోధించడం",
            "ఒకేసారి ఎక్కువ పనులు ఇవ్వడం",
            "అవసరమైన సహాయం ఇవ్వకపోవడం"
        ],
        correct: 0,
        explanation: "సరళమైన సూచనలు, పునరావృత అభ్యాసం, దృశ్య సహాయకాలు మరియు అదనపు సమయం వంటి అనుసరణలు మేధో వైకల్యం గల విద్యార్థుల అభ్యాసాన్ని మెరుగుపరుస్తాయి."
    },
    {
        question: "క్రింది వాటిలో బహుళ వైకల్యం (Multiple Disabilities) గల విద్యార్థి కోసం IEP యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        options: [
            "వ్యక్తిగత అవసరాలకు అనుగుణంగా లక్ష్యాలు మరియు సేవలను ప్రణాళిక చేయడం",
            "అందరికీ ఒకే పాఠ్యాంశం బోధించడం",
            "కేవలం పరీక్ష మార్కులు నమోదు చేయడం",
            "విద్యార్థిని ప్రత్యేక పాఠశాలకు పంపించడం మాత్రమే"
        ],
        correct: 0,
        explanation: "వ్యక్తిగత విద్యా ప్రణాళిక (IEP) ద్వారా విద్యార్థి సామర్థ్యాలు, అవసరాలు మరియు దీర్ఘకాలిక లక్ష్యాలకు అనుగుణంగా విద్యా, చికిత్సా మరియు సహాయక సేవలను ప్రణాళిక చేస్తారు."
    }
];