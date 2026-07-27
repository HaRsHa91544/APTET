const SUBJECTS = [
    "Child Development",
    "English"
];

const QUESTIONS = [
    {
        question: "జ్ఞాన వికాసాన్ని నాలుగు దశలుగా వివరించిన మనోవిజ్ఞాన శాస్త్రవేత్త ఎవరు?",
        options: [
            "విగోట్స్కీ (Vygotsky)",
            "పియాజే (Piaget)",
            "బ్రూనర్ (Bruner)",
            "గార్డ్నర్ (Gardner)"
        ],
        correct: 1,
        explanation: "జీన్ పియాజే పిల్లల జ్ఞాన వికాసాన్ని సెన్సరీ-మోటార్, ప్రీ-ఆపరేషనల్, కాంక్రీట్ ఆపరేషనల్, ఫార్మల్ ఆపరేషనల్ అనే నాలుగు వరుస దశలుగా వివరించాడు. ప్రతి దశలో ఆలోచనా విధానం, సమస్య పరిష్కార సామర్థ్యం మరియు తార్కికతలో గణనీయమైన మార్పులు కనిపిస్తాయి."
    },
    {
        question: "విద్యార్థి తనంతట తానే చేయలేని పనిని ఉపాధ్యాయుని సహాయంతో చేయగల స్థితిని ఏమంటారు?",
        options: [
            "సంసిద్ధత నియమం",
            "సమీప వికాస మండలం (ZPD)",
            "అంతర్దృష్టి అభ్యాసం",
            "శాస్త్రీయ నియతీకరణ"
        ],
        correct: 1,
        explanation: "విగోట్స్కీ ప్రతిపాదించిన Zone of Proximal Development (ZPD) అనేది విద్యార్థి స్వయంగా చేయలేని పనిని ఉపాధ్యాయుడు లేదా నైపుణ్యం గల వ్యక్తి సహాయంతో విజయవంతంగా చేయగల అభ్యాస స్థితిని సూచిస్తుంది."
    },
    {
        question: "క్రింది వాటిలో Scaffolding భావనతో అత్యంత సన్నిహిత సంబంధం కలిగినది ఏది?",
        options: [
            "స్కిన్నర్",
            "బ్రూనర్",
            "పావ్‌లవ్",
            "థార్న్‌డైక్"
        ],
        correct: 1,
        explanation: "Scaffolding భావనను జెరోమ్ బ్రూనర్ అభివృద్ధి చేశాడు. ఇందులో ఉపాధ్యాయుడు ప్రారంభంలో అవసరమైన సహాయం అందించి, విద్యార్థి స్వతంత్రంగా నేర్చుకునే స్థాయికి చేరుకున్నప్పుడు ఆ సహాయాన్ని క్రమంగా తగ్గిస్తాడు."
    },
    {
        question: "పరిశీలన ద్వారా నేర్చుకోవడం (Observational Learning) అనే భావనను ప్రతిపాదించినది ఎవరు?",
        options: [
            "స్కిన్నర్",
            "బండూరా",
            "కోహ్లర్",
            "స్టెర్న్‌బర్గ్"
        ],
        correct: 1,
        explanation: "ఆల్బర్ట్ బండూరా సామాజిక అభ్యాస సిద్ధాంతంలో పరిశీలన ద్వారా నేర్చుకోవడాన్ని వివరించాడు. వ్యక్తులు ఇతరుల ప్రవర్తనను గమనించి, అనుకరించి, దాని ఫలితాల ఆధారంగా కొత్త ప్రవర్తనలను అభ్యసిస్తారు."
    },
    {
        question: "సరైన జతను గుర్తించండి.",
        options: [
            "పావ్‌లవ్ — అంతర్దృష్టి అభ్యాసం",
            "కోహ్లర్ — శాస్త్రీయ నియతీకరణ",
            "థార్న్‌డైక్ — ప్రయత్న–దోష అభ్యాసం",
            "స్కిన్నర్ — జ్ఞాన వికాస దశలు"
        ],
        correct: 2,
        explanation: "ఎడ్వర్డ్ థార్న్‌డైక్ Trial and Error Learning సిద్ధాంతాన్ని ప్రతిపాదించాడు. అభ్యాసం అనేది పునరావృత ప్రయత్నాలు, తప్పులు మరియు విజయవంతమైన ప్రతిస్పందనల ద్వారా క్రమంగా ఏర్పడే ప్రక్రియ అని వివరించాడు."
    },
    {
        question: "బహుళ ప్రజ్ఞల సిద్ధాంతాన్ని ప్రతిపాదించినది ఎవరు?",
        options: [
            "స్టెర్న్‌బర్గ్",
            "గార్డ్నర్",
            "క్రెట్ష్మర్",
            "బ్రూనర్"
        ],
        correct: 1,
        explanation: "హోవర్డ్ గార్డ్నర్ ప్రతిపాదించిన బహుళ ప్రజ్ఞల సిద్ధాంతం ప్రకారం ప్రజ్ఞ ఒకటే కాదు. భాషా, తార్కిక, సంగీత, శారీరక, అంతర్వ్యక్తిగత వంటి అనేక రకాల ప్రజ్ఞలు వ్యక్తుల్లో కనిపిస్తాయి."
    },
    {
        question: "శరీర నిర్మాణం ఆధారంగా వ్యక్తిత్వాన్ని వర్గీకరించిన మనోవిజ్ఞాన శాస్త్రవేత్త ఎవరు?",
        options: [
            "స్టెర్న్‌బర్గ్",
            "క్రెట్ష్మర్",
            "బండూరా",
            "విగోట్స్కీ"
        ],
        correct: 1,
        explanation: "ఎర్నెస్ట్ క్రెట్ష్మర్ శరీర నిర్మాణాన్ని ఆధారంగా చేసుకొని వ్యక్తిత్వాన్ని వర్గీకరించాడు. శారీరక నిర్మాణం మరియు వ్యక్తిత్వ లక్షణాల మధ్య సంబంధం ఉందని తన సిద్ధాంతంలో వివరించాడు."
    },
    {
        question: "త్రిభాగ ప్రజ్ఞ (Triarchic Theory of Intelligence) సిద్ధాంతాన్ని ప్రతిపాదించినది ఎవరు?",
        options: [
            "గార్డ్నర్",
            "బినే",
            "స్టెర్న్‌బర్గ్",
            "పియాజే"
        ],
        correct: 2,
        explanation: "రాబర్ట్ స్టెర్న్‌బర్గ్ ప్రజ్ఞను విశ్లేషణాత్మక, సృజనాత్మక మరియు ప్రాయోగిక అనే మూడు ప్రధాన భాగాలుగా వివరించాడు. ఈ సిద్ధాంతాన్ని Triarchic Theory of Intelligence అని పిలుస్తారు."
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
        explanation: "The word 'honest' begins with a silent 'h', so its pronunciation starts with a vowel sound. Therefore, the correct article is 'an', not 'a', before the noun phrase."
    },
    {
        question: "Choose the correct question tag.\n\nLet's start the class, ______?",
        options: [
            "shall we",
            "do we",
            "don't we",
            "aren't we"
        ],
        correct: 0,
        explanation: "Sentences beginning with 'Let's' express a suggestion or proposal. The standard question tag used after such sentences is 'shall we?', making it the grammatically correct choice."
    },
    {
        question: "Choose the correct passive voice.\n\nThey built the bridge last year.",
        options: [
            "The bridge was built last year.",
            "The bridge is built last year.",
            "The bridge has built last year.",
            "The bridge had build last year."
        ],
        correct: 0,
        explanation: "A simple past active sentence changes into the simple past passive by using 'was/were + past participle'. Hence, 'The bridge was built last year' is the correct transformation."
    },
    {
        question: "Choose the correct phrasal verb.\n\nThe meeting was ______ because of heavy rain.",
        options: [
            "called off",
            "called on",
            "called up",
            "called at"
        ],
        correct: 0,
        explanation: "The phrasal verb 'call off' means to cancel an event or activity. Since the meeting did not take place due to heavy rain, 'called off' is the correct answer."
    },
    {
        question: "Which reading skill is mainly used to locate a specific date in a passage?",
        options: [
            "Skimming",
            "Scanning",
            "Intensive Reading",
            "Extensive Reading"
        ],
        correct: 1,
        explanation: "Scanning is the reading technique used to find specific information such as dates, names, numbers, or facts quickly without reading every word of the entire passage carefully."
    },
    {
        question: "Choose the correct article.\n\nHe bought ____ umbrella yesterday.",
        options: [
            "a",
            "an",
            "the",
            "No article"
        ],
        correct: 1,
        explanation: "The word 'umbrella' begins with a vowel sound, so the indefinite article 'an' must be used before it. Therefore, 'an umbrella' is grammatically correct English usage."
    },
    {
        question: "Choose the correct question tag.\n\nNobody came to the meeting, ______?",
        options: [
            "did they",
            "didn't they",
            "did he",
            "wasn't it"
        ],
        correct: 0,
        explanation: "Words like 'nobody', 'no one', and 'nothing' have a negative meaning. Therefore, they take a positive question tag. Hence, 'did they?' is the correct grammatical tag."
    },
    {
        question: "పునర్బలనం (Reinforcement) ఆధారంగా అభ్యాసాన్ని వివరించిన మనోవిజ్ఞాన శాస్త్రవేత్త ఎవరు?",
        options: [
            "పావ్‌లవ్",
            "స్కిన్నర్",
            "కోహ్లర్",
            "పియాజే"
        ],
        correct: 1,
        explanation: "బి.ఎఫ్. స్కిన్నర్ ఆపరెంట్ కండిషనింగ్ సిద్ధాంతాన్ని ప్రతిపాదించాడు. ఈ సిద్ధాంతంలో పునర్బలనం ద్వారా ప్రవర్తన బలపడుతుందని, శిక్ష ద్వారా అవాంఛిత ప్రవర్తన తగ్గుతుందని వివరించాడు."
    },
    {
        question: "క్రింది జతలలో సరైనది ఏది?",
        options: [
            "పావ్‌లవ్ — ఆపరెంట్ కండిషనింగ్",
            "స్కిన్నర్ — శాస్త్రీయ నియతీకరణ",
            "పావ్‌లవ్ — శాస్త్రీయ నియతీకరణ",
            "బండూరా — ప్రయత్న–దోష అభ్యాసం"
        ],
        correct: 2,
        explanation: "ఇవాన్ పావ్‌లవ్ శాస్త్రీయ నియతీకరణ (Classical Conditioning) సిద్ధాంతాన్ని ప్రతిపాదించాడు. కుక్కలపై చేసిన ప్రయోగాల ద్వారా ఉద్దీపన మరియు ప్రతిస్పందనల మధ్య సంబంధాన్ని వివరించాడు."
    },
    {
        question: "ఒక చింపాంజీ కర్రలను కలిపి అరటిపండును అందుకోవడం ఏ అభ్యాస సిద్ధాంతానికి ఉదాహరణ?",
        options: [
            "ప్రయత్న–దోష అభ్యాసం",
            "అంతర్దృష్టి అభ్యాసం",
            "పరిశీలన ద్వారా అభ్యాసం",
            "శాస్త్రీయ నియతీకరణ"
        ],
        correct: 1,
        explanation: "వోల్ఫ్‌గాంగ్ కోహ్లర్ చింపాంజీలపై చేసిన ప్రయోగాల ద్వారా అంతర్దృష్టి అభ్యాసాన్ని వివరించాడు. సమస్యను ఒక్కసారిగా అర్థం చేసుకుని పరిష్కారం కనుగొనడం అంతర్దృష్టి అభ్యాసానికి ముఖ్య లక్షణం."
    },
    {
        question: "\"సిద్ధత నియమం (Law of Readiness)\"ను ప్రతిపాదించినది ఎవరు?",
        options: [
            "థార్న్‌డైక్",
            "పియాజే",
            "స్కిన్నర్",
            "విగోట్స్కీ"
        ],
        correct: 0,
        explanation: "ఎడ్వర్డ్ థార్న్‌డైక్ అభ్యాస నియమాలలో సిద్ధత నియమం ఒకటి. విద్యార్థి అభ్యాసానికి మానసికంగా సిద్ధంగా ఉన్నప్పుడు నేర్చుకోవడం వేగంగా మరియు సమర్థవంతంగా జరుగుతుందని ఈ నియమం వివరిస్తుంది."
    },
    {
        question: "క్రింది వాటిలో పియాజే సిద్ధాంతానికి చెందిన దశ ఏది?",
        options: [
            "సెన్సరీ-మోటార్ దశ",
            "సమీప వికాస మండలం",
            "ఆపరెంట్ కండిషనింగ్",
            "అంతర్దృష్టి అభ్యాసం"
        ],
        correct: 0,
        explanation: "సెన్సరీ-మోటార్ దశ పియాజే జ్ఞాన వికాసంలోని మొదటి దశ. జననం నుండి సుమారు రెండేళ్ల వరకు పిల్లలు ఇంద్రియాలు మరియు కదలికల ద్వారా ప్రపంచాన్ని అర్థం చేసుకుంటారు."
    },
    {
        question: "విద్యార్థి తన అభ్యాసాన్ని పెద్దల సహాయంతో క్రమంగా స్వతంత్రంగా కొనసాగించే ప్రక్రియకు సంబంధించిన సిద్ధాంతం ఏది?",
        options: [
            "పియాజే",
            "బ్రూనర్",
            "స్కిన్నర్",
            "క్రెట్ష్మర్"
        ],
        correct: 1,
        explanation: "జెరోమ్ బ్రూనర్ ప్రతిపాదించిన Scaffolding భావనలో ఉపాధ్యాయుడు ప్రారంభంలో అవసరమైన సహాయం అందిస్తాడు. విద్యార్థి నైపుణ్యం పెరిగేకొద్దీ ఆ సహాయాన్ని క్రమంగా తగ్గిస్తూ స్వతంత్ర అభ్యాసాన్ని ప్రోత్సహిస్తాడు."
    },
    {
        question: "క్రింది వారిలో సామాజిక అభ్యాస సిద్ధాంతాన్ని ప్రతిపాదించినది ఎవరు?",
        options: [
            "గార్డ్నర్",
            "బండూరా",
            "స్టెర్న్‌బర్గ్",
            "థార్న్‌డైక్"
        ],
        correct: 1,
        explanation: "ఆల్బర్ట్ బండూరా సామాజిక అభ్యాస సిద్ధాంతాన్ని ప్రతిపాదించాడు. వ్యక్తులు ఇతరుల ప్రవర్తనను గమనించడం, అనుకరించడం మరియు దాని ఫలితాలను పరిశీలించడం ద్వారా కొత్త విషయాలను నేర్చుకుంటారని వివరించాడు."
    },
    {
        question: "క్రింది జతలలో తప్పుగా ఉన్నది ఏది?",
        options: [
            "గార్డ్నర్ — బహుళ ప్రజ్ఞలు",
            "స్టెర్న్‌బర్గ్ — త్రిభాగ ప్రజ్ఞ",
            "క్రెట్ష్మర్ — శరీర నిర్మాణ వర్గీకరణ",
            "పియాజే — సామాజిక అభ్యాస సిద్ధాంతం"
        ],
        correct: 3,
        explanation: "సామాజిక అభ్యాస సిద్ధాంతాన్ని పియాజే కాదు, ఆల్బర్ట్ బండూరా ప్రతిపాదించాడు. పియాజే ప్రధానంగా పిల్లల జ్ఞాన వికాస దశలను వివరిస్తూ తన సిద్ధాంతాన్ని అభివృద్ధి చేశాడు."
    },
    {
        question: "ప్రయత్న–దోష అభ్యాసం ప్రధానంగా ఏ నియమంతో అనుసంధానించబడింది?",
        options: [
            "ప్రభావ నియమం (Law of Effect)",
            "సమీప వికాస మండలం",
            "అంతర్దృష్టి",
            "మోడలింగ్"
        ],
        correct: 0,
        explanation: "థార్న్‌డైక్ యొక్క ప్రయత్న–దోష అభ్యాసంలో ప్రభావ నియమం ప్రధానమైనది. సంతృప్తికర ఫలితాలు ఇచ్చే ప్రతిస్పందనలు బలపడతాయి, అసంతృప్తికరమైనవి క్రమంగా తగ్గిపోతాయి."
    },
    {
        question: "క్రింది వారిలో ప్రజ్ఞను విశ్లేషణాత్మక, సృజనాత్మక, ప్రాయోగిక రూపాలలో వివరించినది ఎవరు?",
        options: [
            "గార్డ్నర్",
            "స్టెర్న్‌బర్గ్",
            "బినే",
            "పియాజే"
        ],
        correct: 1,
        explanation: "రాబర్ట్ స్టెర్న్‌బర్గ్ ప్రజ్ఞను విశ్లేషణాత్మక, సృజనాత్మక మరియు ప్రాయోగిక అనే మూడు భాగాలుగా వివరించాడు. దీనినే Triarchic Theory of Intelligence అని పిలుస్తారు."
    },
    {
        question: "Choose the correct article.\n\nHe is ____ MLA from our district.",
        options: [
            "a",
            "an",
            "the",
            "No article"
        ],
        correct: 1,
        explanation: "The abbreviation 'MLA' is pronounced as 'em-el-ay'. Since it begins with the vowel sound /e/, the correct indefinite article before it is 'an'."
    },
    {
        question: "Choose the correct passive voice.\n\nPeople speak Telugu in Andhra Pradesh.",
        options: [
            "Telugu is spoken in Andhra Pradesh.",
            "Telugu was spoken in Andhra Pradesh.",
            "Telugu has spoken in Andhra Pradesh.",
            "Telugu speaks in Andhra Pradesh."
        ],
        correct: 0,
        explanation: "The sentence is in the simple present tense. Its passive form is made using 'is + past participle'. Therefore, 'Telugu is spoken in Andhra Pradesh' is correct."
    },
    {
        question: "Choose the correct question tag.\n\nFew students understood the lesson, ______?",
        options: [
            "did they",
            "didn't they",
            "weren't they",
            "do they"
        ],
        correct: 1,
        explanation: "The determiner 'few' has a positive sentence structure but carries a negative sense. In standard grammar for APTET, it takes the negative tag 'didn't they?'."
    },
    {
        question: "Choose the correct phrasal verb.\n\nThe teacher asked the students to ______ the homework before Monday.",
        options: [
            "hand in",
            "hand over",
            "hand down",
            "hand off"
        ],
        correct: 0,
        explanation: "The phrasal verb 'hand in' means to submit assignments, homework, or official documents. Therefore, students are expected to 'hand in' their homework before Monday."
    },
    {
        question: "Which reading skill is mainly used to obtain the general idea of a passage?",
        options: [
            "Scanning",
            "Intensive Reading",
            "Skimming",
            "Silent Reading"
        ],
        correct: 2,
        explanation: "Skimming is a reading technique used to understand the overall meaning or main idea of a passage quickly without focusing on every detail or piece of information."
    },
    {
        question: "పిల్లల జ్ఞాన వికాసంలో భాష మరియు సామాజిక పరస్పర చర్యకు అత్యధిక ప్రాధాన్యం ఇచ్చిన మనోవిజ్ఞాన శాస్త్రవేత్త ఎవరు?",
        options: [
            "పియాజే",
            "విగోట్స్కీ",
            "స్కిన్నర్",
            "కోహ్లర్"
        ],
        correct: 1,
        explanation: "లెవ్ విగోట్స్కీ జ్ఞాన వికాసంలో భాష, సంస్కృతి మరియు సామాజిక పరస్పర చర్యలకు అత్యంత ప్రాధాన్యం ఇచ్చాడు. పెద్దలు, సహచరులతో పరస్పర చర్యల ద్వారా అభ్యాసం మరియు వికాసం మెరుగుపడుతుందని వివరించాడు."
    },
    {
        question: "క్రింది జతలలో సరైనది ఏది?",
        options: [
            "పియాజే — సామాజిక అభ్యాస సిద్ధాంతం",
            "బ్రూనర్ — స్పైరల్ పాఠ్యప్రణాళిక",
            "బండూరా — బహుళ ప్రజ్ఞలు",
            "గార్డ్నర్ — శాస్త్రీయ నియతీకరణ"
        ],
        correct: 1,
        explanation: "జెరోమ్ బ్రూనర్ Spiral Curriculum భావనను ప్రతిపాదించాడు. ఒకే భావనను విద్యార్థి వయస్సు, అవగాహన స్థాయికి అనుగుణంగా పునరావృతంగా మరింత లోతుగా బోధించాలనే ఆలోచన దీనిలో ప్రధానమైనది."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి.\n\n1. పియాజే ప్రకారం అభ్యాసానికి ముందు వికాసం జరుగుతుంది.\n2. విగోట్స్కీ ప్రకారం అభ్యాసం వికాసాన్ని ముందుకు నడిపిస్తుంది.\n\nసరైనది ఏది?",
        options: [
            "1 మాత్రమే",
            "2 మాత్రమే",
            "1 మరియు 2",
            "రెండూ కావు"
        ],
        correct: 2,
        explanation: "పియాజే ప్రకారం పిల్లల వికాసం ముందుగా జరిగి తరువాత అభ్యాసం జరుగుతుంది. విగోట్స్కీ ప్రకారం సరైన మార్గదర్శకత్వంతో జరిగే అభ్యాసం పిల్లల వికాసాన్ని ముందుకు నడిపించే ప్రధాన శక్తిగా పనిచేస్తుంది."
    },
    {
        question: "ఉద్దీపన (Stimulus) మరియు ప్రతిస్పందన (Response) మధ్య సంబంధాన్ని ఏర్పరచే సిద్ధాంతం ఏది?",
        options: [
            "శాస్త్రీయ నియతీకరణ",
            "బహుళ ప్రజ్ఞలు",
            "త్రిభాగ ప్రజ్ఞ",
            "అంతర్దృష్టి అభ్యాసం"
        ],
        correct: 0,
        explanation: "పావ్‌లవ్ ప్రతిపాదించిన శాస్త్రీయ నియతీకరణ సిద్ధాంతంలో ఉద్దీపన మరియు ప్రతిస్పందన మధ్య సంబంధం ఏర్పడుతుంది. పునరావృత అనుబంధం ద్వారా కొత్త ప్రతిస్పందనలు అభివృద్ధి చెందుతాయి."
    },
    {
        question: "విద్యార్థి సరైన సమాధానం చెప్పిన ప్రతిసారి ఉపాధ్యాయుడు ప్రశంసించడం ఏ సిద్ధాంతానికి ఉదాహరణ?",
        options: [
            "పావ్‌లవ్",
            "స్కిన్నర్",
            "కోహ్లర్",
            "పియాజే"
        ],
        correct: 1,
        explanation: "సరైన సమాధానానికి ప్రశంస ఇవ్వడం సానుకూల పునర్బలనం (Positive Reinforcement). స్కిన్నర్ ఆపరెంట్ కండిషనింగ్ సిద్ధాంతం ప్రకారం ఇటువంటి పునర్బలనం కావలసిన ప్రవర్తనను మరింత బలపరుస్తుంది."
    },
    {
        question: "క్రింది వారిలో సృజనాత్మక ప్రజ్ఞ (Creative Intelligence)ను తన సిద్ధాంతంలో భాగంగా పేర్కొన్నది ఎవరు?",
        options: [
            "గార్డ్నర్",
            "స్టెర్న్‌బర్గ్",
            "బినే",
            "థార్న్‌డైక్"
        ],
        correct: 1,
        explanation: "రాబర్ట్ స్టెర్న్‌బర్గ్ Triarchic Theoryలో విశ్లేషణాత్మక, సృజనాత్మక మరియు ప్రాయోగిక ప్రజ్ఞలను వివరించాడు. సృజనాత్మక ప్రజ్ఞ కొత్త పరిస్థితుల్లో వినూత్న పరిష్కారాలను కనుగొనే సామర్థ్యాన్ని సూచిస్తుంది."
    },
    {
        question: "అంతర్దృష్టి అభ్యాస సిద్ధాంతాన్ని ప్రతిపాదించినది ఎవరు?",
        options: [
            "కోహ్లర్",
            "స్కిన్నర్",
            "బండూరా",
            "పావ్‌లవ్"
        ],
        correct: 0,
        explanation: "వోల్ఫ్‌గాంగ్ కోహ్లర్ అంతర్దృష్టి అభ్యాస సిద్ధాంతాన్ని ప్రతిపాదించాడు. సమస్యను అకస్మాత్తుగా అర్థం చేసుకుని సరైన పరిష్కారాన్ని కనుగొనడం ఈ సిద్ధాంతంలోని ముఖ్య లక్షణం."
    },
    {
        question: "క్రింది వాటిలో గార్డ్నర్ సిద్ధాంతానికి చెందిన ప్రజ్ఞ ఏది?",
        options: [
            "భాషా ప్రజ్ఞ",
            "సెన్సరీ-మోటార్ దశ",
            "సమీప వికాస మండలం",
            "ప్రభావ నియమం"
        ],
        correct: 0,
        explanation: "హోవర్డ్ గార్డ్నర్ బహుళ ప్రజ్ఞల సిద్ధాంతంలో భాషా ప్రజ్ఞ (Linguistic Intelligence)ను ప్రధాన ప్రజ్ఞలలో ఒకటిగా పేర్కొన్నాడు. భాషను సమర్థంగా ఉపయోగించే సామర్థ్యాన్ని ఇది సూచిస్తుంది."
    },
    {
        question: "క్రింది వాటిలో ప్రత్యక్ష అనుకరణ (Modeling)కు సంబంధించినది ఏది?",
        options: [
            "థార్న్‌డైక్",
            "బండూరా",
            "పావ్‌లవ్",
            "క్రెట్ష్మర్"
        ],
        correct: 1,
        explanation: "బండూరా సామాజిక అభ్యాస సిద్ధాంతంలో Modeling లేదా ప్రత్యక్ష అనుకరణకు ప్రధాన స్థానం ఇచ్చాడు. ఇతరులను గమనించి వారి ప్రవర్తనను అనుసరించడం ద్వారా అభ్యాసం జరుగుతుందని వివరించాడు."
    },
    {
        question: "శాస్త్రీయ నియతీకరణ సిద్ధాంతానికి సంబంధించిన మనోవిజ్ఞాన శాస్త్రవేత్త ఎవరు?",
        options: [
            "పావ్‌లవ్",
            "బ్రూనర్",
            "గార్డ్నర్",
            "స్టెర్న్‌బర్గ్"
        ],
        correct: 0,
        explanation: "ఇవాన్ పావ్‌లవ్ శాస్త్రీయ నియతీకరణ సిద్ధాంతాన్ని ప్రతిపాదించాడు. సహజ ఉద్దీపనను తటస్థ ఉద్దీపనతో అనుసంధానం చేయడం ద్వారా కొత్త ప్రతిస్పందన ఏర్పడుతుందని నిరూపించాడు."
    },
    {
        question: "క్రింది వాటిలో థార్న్‌డైక్ అభ్యాస నియమం కానిది ఏది?",
        options: [
            "సిద్ధత నియమం",
            "అభ్యాస నియమం",
            "ప్రభావ నియమం",
            "సమీప వికాస మండలం"
        ],
        correct: 3,
        explanation: "సమీప వికాస మండలం (ZPD) విగోట్స్కీ ప్రతిపాదించిన భావన. థార్న్‌డైక్ అభ్యాస నియమాలలో సిద్ధత నియమం, అభ్యాస నియమం మరియు ప్రభావ నియమం ప్రధానమైనవి."
    },
    {
        question: "క్రింది జతలలో తప్పుగా ఉన్నది ఏది?",
        options: [
            "బ్రూనర్ — Scaffolding",
            "విగోట్స్కీ — ZPD",
            "స్టెర్న్‌బర్గ్ — Triarchic Theory",
            "క్రెట్ష్మర్ — Multiple Intelligences"
        ],
        correct: 3,
        explanation: "Multiple Intelligences సిద్ధాంతాన్ని క్రెట్ష్మర్ కాదు, హోవర్డ్ గార్డ్నర్ ప్రతిపాదించాడు. క్రెట్ష్మర్ శరీర నిర్మాణాన్ని ఆధారంగా చేసుకుని వ్యక్తిత్వాన్ని వర్గీకరించిన మనోవిజ్ఞాన శాస్త్రవేత్త."
    },
    {
        question: "Choose the correct article.\n\nShe adopted ____ European child.",
        options: [
            "a",
            "an",
            "the",
            "No article"
        ],
        correct: 0,
        explanation: "The word 'European' begins with the consonant sound /juː/, not a vowel sound. Therefore, the correct article before it is 'a', not 'an'."
    },
    {
        question: "Choose the correct question tag.\n\nEveryone has completed the assignment, ______?",
        options: [
            "haven't they",
            "hasn't he",
            "haven't we",
            "didn't they"
        ],
        correct: 0,
        explanation: "The indefinite pronoun 'everyone' is singular, but modern English commonly uses the plural pronoun 'they' in question tags. Therefore, 'haven't they?' is the correct answer."
    },
    {
        question: "Choose the correct passive voice.\n\nThey are repairing the road.",
        options: [
            "The road is repaired.",
            "The road is being repaired.",
            "The road was being repaired.",
            "The road has been repaired."
        ],
        correct: 1,
        explanation: "The sentence is in the present continuous tense. Its passive form uses 'is being + past participle'. Hence, 'The road is being repaired' is grammatically correct."
    },
    {
        question: "Choose the correct phrasal verb.\n\nPlease ______ your shoes before entering the laboratory.",
        options: [
            "take off",
            "take up",
            "take over",
            "take after"
        ],
        correct: 0,
        explanation: "The phrasal verb 'take off' means to remove clothing, shoes, or accessories. Therefore, visitors should 'take off' their shoes before entering the laboratory."
    },
    {
        question: "Which reading skill is mainly used to understand every detail of a passage?",
        options: [
            "Skimming",
            "Scanning",
            "Intensive Reading",
            "Extensive Reading"
        ],
        correct: 2,
        explanation: "Intensive reading focuses on understanding every detail of a passage, including vocabulary, grammar, facts, and meaning. It is commonly used for careful study and examination preparation."
    },
    {
        question: "Choose the correct question tag.\n\nNothing can stop us now, ______?",
        options: [
            "can it",
            "can't it",
            "can they",
            "could it"
        ],
        correct: 0,
        explanation: "The word 'nothing' has a negative meaning, so it requires a positive question tag. Therefore, 'can it?' is the correct tag according to standard English grammar."
    },
    {
        question: "Choose the correct phrasal verb.\n\nNever ______ your dreams.",
        options: [
            "give up",
            "give away",
            "give out",
            "give in"
        ],
        correct: 0,
        explanation: "The phrasal verb 'give up' means to stop trying or abandon a goal. Therefore, 'Never give up your dreams' is the correct and meaningful expression."
    },
    {
        question: "Read the sentence.\n\n\"The teacher read the title and headings before reading the lesson in detail.\"\n\nWhich reading skill is illustrated?",
        options: [
            "Scanning",
            "Intensive Reading",
            "Skimming",
            "Silent Reading"
        ],
        correct: 2,
        explanation: "Reading titles, headings, and subheadings to understand the general idea of a text before detailed reading is called skimming. It helps readers quickly predict the main content."
    }
];