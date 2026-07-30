const SUBJECTS = [
    "Psychology",
    "Telugu",
    "English"
];

const QUESTIONS = [
    {
        question: "జ్ఞాన వికాసాన్ని నాలుగు దశలుగా వివరించిన మనోవిజ్ఞాన శాస్త్రవేత్త ఎవరు?",
        options: [
            "వైగోట్స్కీ",
            "పియాజే",
            "బ్రూనర్",
            "గార్డ్నర్"
        ],
        correct: 1,
        explanation: "పియాజే జ్ఞాన వికాసాన్ని సెన్సరీ-మోటర్, ప్రీ-ఆపరేషనల్, కాంక్రీట్ ఆపరేషనల్, ఫార్మల్ ఆపరేషనల్ అనే నాలుగు దశలుగా వివరించాడు. ప్రతి దశలో పిల్లల ఆలోచనా విధానం మరియు సమస్య పరిష్కార సామర్థ్యం అభివృద్ధి చెందుతుంది."
    },
    {
        question: "Zone of Proximal Development (ZPD) భావనను ప్రతిపాదించినది ఎవరు?",
        options: [
            "బ్రూనర్",
            "వైగోట్స్కీ",
            "స్కిన్నర్",
            "స్టెర్న్‌బర్గ్"
        ],
        correct: 1,
        explanation: "వైగోట్స్కీ ప్రతిపాదించిన ZPD ప్రకారం విద్యార్థి స్వయంగా చేయలేని పనిని గురువు లేదా సమర్థుడి సహాయంతో చేయగలడు. ఇది బోధనలో మార్గదర్శకత్వం యొక్క ప్రాముఖ్యతను తెలియజేస్తుంది."
    },
    {
        question: "\"Scaffolding\" భావన ప్రధానంగా ఏ సిద్ధాంతంతో సంబంధం కలిగి ఉంది?",
        options: [
            "బ్రూనర్",
            "పావ్‌లవ్",
            "థార్న్‌డైక్",
            "కోహ్లర్"
        ],
        correct: 0,
        explanation: "బ్రూనర్ ప్రతిపాదించిన Scaffoldingలో విద్యార్థికి అవసరమైన సహాయాన్ని ప్రారంభంలో ఎక్కువగా అందించి, క్రమంగా తగ్గిస్తారు. దీనివల్ల విద్యార్థి స్వతంత్రంగా అభ్యాసం చేయగలడు."
    },
    {
        question: "పరిశీలన ద్వారా నేర్చుకోవడం (Observational Learning) అనే భావనను ప్రతిపాదించినది ఎవరు?",
        options: [
            "స్కిన్నర్",
            "పావ్‌లవ్",
            "బండూరా",
            "పియాజే"
        ],
        correct: 2,
        explanation: "బండూరా సామాజిక అభ్యాస సిద్ధాంతంలో పరిశీలన, అనుకరణ మరియు మోడలింగ్ ద్వారా అభ్యాసం జరుగుతుందని వివరించాడు. దీనిని Observational Learning అంటారు."
    },
    {
        question: "సానుకూల బలపరిచే పద్ధతి (Positive Reinforcement)కు సంబంధిత మనోవిజ్ఞాన శాస్త్రవేత్త ఎవరు?",
        options: [
            "స్కిన్నర్",
            "పావ్‌లవ్",
            "వైగోట్స్కీ",
            "గార్డ్నర్"
        ],
        correct: 0,
        explanation: "స్కిన్నర్ ఆపరెంట్ కండిషనింగ్ సిద్ధాంతంలో సరైన ప్రవర్తన తర్వాత బహుమతి ఇవ్వడం ద్వారా ఆ ప్రవర్తన పునరావృతమవుతుందని వివరించాడు. దీనినే Positive Reinforcement అంటారు."
    },
    {
        question: "గంట శబ్దానికి కుక్క లాలాజలం కారడం ద్వారా అభ్యాసాన్ని వివరించిన శాస్త్రవేత్త ఎవరు?",
        options: [
            "స్కిన్నర్",
            "పావ్‌లవ్",
            "కోహ్లర్",
            "బ్రూనర్"
        ],
        correct: 1,
        explanation: "పావ్‌లవ్ క్లాసికల్ కండిషనింగ్ సిద్ధాంతాన్ని కుక్కలపై చేసిన ప్రయోగం ద్వారా నిరూపించాడు. గంట శబ్దాన్ని ఆహారంతో అనుసంధానించడం వల్ల ప్రతిస్పందన ఏర్పడింది."
    },
    {
        question: "Law of Effectను ప్రతిపాదించినది ఎవరు?",
        options: [
            "పావ్‌లవ్",
            "థార్న్‌డైక్",
            "స్కిన్నర్",
            "బండూరా"
        ],
        correct: 1,
        explanation: "థార్న్‌డైక్ ప్రకారం సంతృప్తికర ఫలితాలను ఇచ్చే ప్రవర్తన మళ్లీ మళ్లీ జరుగుతుంది. అసంతృప్తికర ఫలితాలను ఇచ్చే ప్రవర్తన క్రమంగా తగ్గిపోతుంది."
    },
    {
        question: "చింపాంజీ సమస్య పరిష్కారాన్ని ఆధారంగా చేసుకొని Insight Learningను వివరించినది ఎవరు?",
        options: [
            "కోహ్లర్",
            "స్కిన్నర్",
            "బ్రూనర్",
            "పియాజే"
        ],
        correct: 0,
        explanation: "కోహ్లర్ గెస్టాల్ట్ సిద్ధాంతంలో చింపాంజీలపై చేసిన ప్రయోగాల ద్వారా అంతర్దృష్టి (Insight) ద్వారా సమస్య పరిష్కారం జరుగుతుందని వివరించాడు."
    },
    {
        question: "శరీర నిర్మాణాన్ని ఆధారంగా చేసుకొని వ్యక్తిత్వ వర్గీకరణ చేసినది ఎవరు?",
        options: [
            "గార్డ్నర్",
            "స్టెర్న్‌బర్గ్",
            "క్రెట్ష్మర్",
            "బండూరా"
        ],
        correct: 2,
        explanation: "క్రెట్ష్మర్ వ్యక్తుల శరీర నిర్మాణాన్ని ఆధారంగా తీసుకొని వారి వ్యక్తిత్వ లక్షణాలను వర్గీకరించాడు. ఇది శరీర నిర్మాణ సిద్ధాంతంగా ప్రసిద్ధి పొందింది."
    },
    {
        question: "బహుళ మేధస్సుల సిద్ధాంతాన్ని (Multiple Intelligences) ప్రతిపాదించినది ఎవరు?",
        options: [
            "స్టెర్న్‌బర్గ్",
            "గార్డ్నర్",
            "పియాజే",
            "బ్రూనర్"
        ],
        correct: 1,
        explanation: "హోవర్డ్ గార్డ్నర్ ప్రతి వ్యక్తిలో ఒకే రకమైన మేధస్సు కాకుండా అనేక రకాల మేధస్సులు ఉంటాయని తన Multiple Intelligences సిద్ధాంతంలో వివరించాడు."
    },
    {
        question: "విశ్లేషణాత్మక, సృజనాత్మక, ఆచరణాత్మక మేధస్సులను వివరించినది ఎవరు?",
        options: [
            "గార్డ్నర్",
            "స్టెర్న్‌బర్గ్",
            "పావ్‌లవ్",
            "వైగోట్స్కీ"
        ],
        correct: 1,
        explanation: "స్టెర్న్‌బర్గ్ త్రికోణ మేధస్సు సిద్ధాంతంలో విశ్లేషణాత్మక, సృజనాత్మక మరియు ఆచరణాత్మక మేధస్సులను వివరించాడు. ఇవి జీవిత విజయానికి అవసరమైన మూడు ప్రధాన సామర్థ్యాలు."
    },
    {
        question: "\"భాష ఆలోచన వికాసానికి ముఖ్య సాధనం\" అని పేర్కొన్నది ఎవరు?",
        options: [
            "పియాజే",
            "వైగోట్స్కీ",
            "థార్న్‌డైక్",
            "స్కిన్నర్"
        ],
        correct: 1,
        explanation: "వైగోట్స్కీ ప్రకారం భాష పిల్లల ఆలోచన, సమస్య పరిష్కారం మరియు జ్ఞాన వికాసంలో కీలక పాత్ర పోషిస్తుంది. సామాజిక పరస్పర చర్యలకు కూడా ఇది ముఖ్యమైన సాధనం."
    },
    {
        question: "క్రింది వారిలో Trial and Error Learningకు సంబంధించినవారు ఎవరు?",
        options: [
            "థార్న్‌డైక్",
            "కోహ్లర్",
            "బ్రూనర్",
            "బండూరా"
        ],
        correct: 0,
        explanation: "థార్న్‌డైక్ ప్రయత్నం-పొరపాటు ద్వారా అభ్యాసం జరుగుతుందని తన ప్రయోగాల ద్వారా వివరించాడు. సరైన ప్రతిస్పందన లభించే వరకు ప్రయత్నాలు కొనసాగుతాయి."
    },
    {
        question: "విద్యార్థి స్వయంగా జ్ఞానాన్ని కనుగొనే అభ్యాసాన్ని (Discovery Learning) ప్రోత్సహించినది ఎవరు?",
        options: [
            "బ్రూనర్",
            "స్కిన్నర్",
            "పావ్‌లవ్",
            "క్రెట్ష్మర్"
        ],
        correct: 0,
        explanation: "బ్రూనర్ Discovery Learningను ప్రోత్సహించాడు. ఇందులో విద్యార్థి అన్వేషణ, పరిశీలన మరియు అనుభవం ద్వారా స్వయంగా జ్ఞానాన్ని నిర్మించుకుంటాడు."
    },
    {
        question: "క్రింది జతలలో సరైనది ఏది?",
        options: [
            "పావ్‌లవ్ — ఆపరెంట్ కండిషనింగ్",
            "స్కిన్నర్ — క్లాసికల్ కండిషనింగ్",
            "బండూరా — పరిశీలన ద్వారా అభ్యాసం",
            "కోహ్లర్ — ట్రయల్ అండ్ ఎరర్"
        ],
        correct: 2,
        explanation: "బండూరా సామాజిక అభ్యాస సిద్ధాంతంలో పరిశీలన ద్వారా అభ్యాసాన్ని వివరించాడు. మిగిలిన జతలు తప్పు, ఎందుకంటే అవి సంబంధిత సిద్ధాంతాలతో సరిపోలవు."
    },
    {
        question: "\"రామునిచేత\" అనే పదంలో ఉపయోగించిన విభక్తి ఏది?",
        options: [
            "ప్రథమా విభక్తి",
            "తృతీయా విభక్తి",
            "చతుర్థీ విభక్తి",
            "సప్తమీ విభక్తి"
        ],
        correct: 1,
        explanation: "\"చేత\" అనే విభక్తి ప్రత్యయం తృతీయా విభక్తిని సూచిస్తుంది. ఇది కర్తచేత జరిగే క్రియ లేదా సాధనాన్ని తెలియజేయడానికి ఉపయోగించబడుతుంది."
    },
    {
        question: "\"చెట్టునుండి\" అనే పదంలో ఉన్న విభక్తి ఏది?",
        options: [
            "ద్వితీయా విభక్తి",
            "పంచమీ విభక్తి",
            "షష్ఠీ విభక్తి",
            "సప్తమీ విభక్తి"
        ],
        correct: 1,
        explanation: "\"నుండి\" అనే ప్రత్యయం పంచమీ విభక్తిని సూచిస్తుంది. ఇది ఒక స్థలం, వ్యక్తి లేదా వస్తువు నుండి విడిపోవడం లేదా ప్రారంభాన్ని తెలియజేస్తుంది."
    },
    {
        question: "\"దేవాలయం\" పదం ఏ రకానికి చెందుతుంది?",
        options: [
            "దేశ్య పదం",
            "తద్భవ పదం",
            "తత్సమ పదం",
            "అన్యదేశ్య పదం"
        ],
        correct: 2,
        explanation: "\"దేవాలయం\" సంస్కృత రూపంలోనే తెలుగులో వాడుకలో ఉన్న పదం. రూపంలో మార్పు లేకుండా స్వీకరించినందున ఇది తత్సమ పదంగా పరిగణించబడుతుంది."
    },
    {
        question: "\"మొగము\" పదం ఏ రకానికి చెందుతుంది?",
        options: [
            "తత్సమ",
            "తద్భవ",
            "దేశ్య",
            "అన్యదేశ్య"
        ],
        correct: 1,
        explanation: "\"ముఖము\" అనే సంస్కృత పదం రూపాంతరం చెంది \"మొగము\"గా మారింది. మూల పదంలో మార్పు వచ్చినందున ఇది తద్భవ పదం."
    },
    {
        question: "క్రింది వాటిలో దేశ్య పదం ఏది?",
        options: [
            "సూర్యుడు",
            "కన్ను",
            "విద్య",
            "దేవుడు"
        ],
        correct: 1,
        explanation: "\"కన్ను\" స్వతంత్ర తెలుగు మూలపదం. ఇతర భాషల నుండి స్వీకరించబడకుండా తెలుగులో పుట్టిన పదాలను దేశ్య పదాలు అంటారు."
    },
    {
        question: "\"రామ + ఆలయం = రామాలయం\" ఇది ఏ సంధి?",
        options: [
            "గుణసంధి",
            "వృద్ధి సంధి",
            "యణాదేశ సంధి",
            "ఉత్వ సంధి"
        ],
        correct: 0,
        explanation: "అ + ఆ కలిసి ఆ కావడం గుణసంధి లక్షణం. రెండు అచ్చులు కలిసినప్పుడు గుణ నియమం ప్రకారం ఈ రూపం ఏర్పడుతుంది."
    },
    {
        question: "\"మహా + ఋషి = మహర్షి\" ఇది ఏ సంధి?",
        options: [
            "గుణసంధి",
            "వృద్ధి సంధి",
            "యణాదేశ సంధి",
            "అత్వ సంధి"
        ],
        correct: 2,
        explanation: "\"మహా + ఋషి\" కలయికలో ఏర్పడిన రూపాన్ని యణాదేశ సంధిగా పరిగణిస్తారు. ఇది తెలుగు వ్యాకరణంలోని ముఖ్య సంధి రకాలలో ఒకటి."
    },
    {
        question: "\"రాజపుత్రుడు\" ఏ సమాసానికి ఉదాహరణ?",
        options: [
            "ద్వంద్వ సమాసం",
            "కర్మధారయ సమాసం",
            "తత్పురుష సమాసం",
            "బహువ్రీహి సమాసం"
        ],
        correct: 2,
        explanation: "విభక్తి లోపంతో ఏర్పడే సమాసాన్ని తత్పురుష సమాసం అంటారు. \"రాజు యొక్క పుత్రుడు\" అనే భావం సంక్షిప్త రూపంలో \"రాజపుత్రుడు\" అయింది."
    },
    {
        question: "\"నీలకంఠుడు\" ఏ సమాసానికి ఉదాహరణ?",
        options: [
            "ద్విగు",
            "బహువ్రీహి",
            "అవ్యయీభావ",
            "ద్వంద్వ"
        ],
        correct: 1,
        explanation: "\"నీలకంఠుడు\" అనే సమాస పదం నీలి కంఠం కలిగిన మరొక వ్యక్తిని సూచిస్తుంది. అందువల్ల ఇది బహువ్రీహి సమాసానికి ఉదాహరణ."
    },
    {
        question: "క్రింది వాటిలో ద్వంద్వ సమాసం ఏది?",
        options: [
            "తల్లిదండ్రులు",
            "నీలాకాశం",
            "రాజభవనం",
            "పంచవటి"
        ],
        correct: 0,
        explanation: "\"తల్లి\" మరియు \"తండ్రి\" అనే రెండు సమాన ప్రాధాన్యమున్న పదాల కలయికతో \"తల్లిదండ్రులు\" ఏర్పడింది. ఇది ద్వంద్వ సమాసానికి ఉదాహరణ."
    },
    {
        question: "\"ముఖం చంద్రునివలె ఉంది\" అనే వాక్యంలో ఉన్న అలంకారం ఏది?",
        options: [
            "రూపకం",
            "ఉపమా",
            "యమకం",
            "శ్లేషం"
        ],
        correct: 1,
        explanation: "\"వలె\" అనే ఉపమావాచక పదం ఉపయోగించి రెండు వస్తువులను పోల్చినప్పుడు ఉపమా అలంకారం ఏర్పడుతుంది. అందువల్ల ఇది ఉపమా అలంకారం."
    },
    {
        question: "ఒకే పదం పునరావృతమై భిన్నార్థాలను సూచించినప్పుడు అది ఏ అలంకారం?",
        options: [
            "యమకం",
            "ఉపమా",
            "రూపకం",
            "అనుప్రాస"
        ],
        correct: 0,
        explanation: "ఒకే పదరూపం పునరావృతమై వేర్వేరు అర్థాలను సూచించినప్పుడు యమక అలంకారం ఏర్పడుతుంది. ఇది శబ్దాలంకారాలలో ఒకటి."
    },
    {
        question: "ఒకే అక్షరం లేదా ధ్వని పదేపదే రావడం ఏ అలంకారం?",
        options: [
            "రూపకం",
            "శ్లేషం",
            "అనుప్రాస",
            "ఉపమా"
        ],
        correct: 2,
        explanation: "ఒకే అక్షరం లేదా ధ్వని పదేపదే రావడం వల్ల శ్రావ్యత పెరుగుతుంది. ఇటువంటి అలంకారాన్ని అనుప్రాస అలంకారం అంటారు."
    },
    {
        question: "క్రింది వాటిలో తత్సమ–తద్భవ జత సరైనది ఏది?",
        options: [
            "ముఖము – మొగము",
            "కన్ను – నేత్రము",
            "చెట్టు – వృక్షము",
            "నీరు – జలం"
        ],
        correct: 0,
        explanation: "\"ముఖము\" సంస్కృత రూపంలో ఉన్న తత్సమ పదం. అదే పదం రూపాంతరం చెంది \"మొగము\"గా మారినందున అది తద్భవ పదంగా పరిగణించబడుతుంది."
    },
    {
        question: "క్రింది జతలలో సరైనది ఏది?",
        options: [
            "తత్సమ — సంస్కృతం నుండి యథారూపంగా వచ్చిన పదం",
            "దేశ్య — సంస్కృత పదం",
            "తద్భవ — విదేశీ పదం",
            "దేశ్య — తత్సమ పదానికి మరో పేరు"
        ],
        correct: 0,
        explanation: "సంస్కృత భాష నుండి రూపంలో మార్పు లేకుండా తెలుగులోకి వచ్చిన పదాలను తత్సమ పదాలు అంటారు. మిగిలిన జతలు వ్యాకరణపరంగా సరైనవి కావు."
    },
    {
        question: "Choose the correct article.\n\nShe is ____ honest teacher.",
        options: [
            "a",
            "an",
            "the",
            "no article"
        ],
        correct: 1,
        explanation: "\"Honest\" begins with a silent 'h' and has a vowel sound. Therefore, the indefinite article \"an\" is used before the word."
    },
    {
        question: "Choose the correct question tag.\n\nYou are a teacher, ______?",
        options: [
            "aren't you?",
            "are you?",
            "don't you?",
            "won't you?"
        ],
        correct: 0,
        explanation: "A positive statement takes a negative question tag. Since the sentence uses \"are,\" the correct tag is \"aren't you?\""
    },
    {
        question: "Choose the correct passive voice.\n\nThey built the bridge in 2020.",
        options: [
            "The bridge has built in 2020.",
            "The bridge was built in 2020.",
            "The bridge is built in 2020.",
            "The bridge had built in 2020."
        ],
        correct: 1,
        explanation: "A sentence in the simple past active voice changes to the simple past passive voice using \"was/were + past participle.\" Hence, \"was built\" is correct."
    },
    {
        question: "Choose the correct phrasal verb.\n\nThe meeting was ______ due to heavy rain.",
        options: [
            "called off",
            "called on",
            "called at",
            "called up"
        ],
        correct: 0,
        explanation: "\"Call off\" means to cancel something. Since the meeting did not take place because of heavy rain, \"called off\" is the correct choice."
    },
    {
        question: "Choose the correctly punctuated sentence.",
        options: [
            "Wow what a beautiful flower!",
            "Wow! What a beautiful flower!",
            "Wow, What a beautiful flower.",
            "Wow What a beautiful flower?"
        ],
        correct: 1,
        explanation: "An interjection like \"Wow\" is followed by an exclamation mark. The sentence also ends with an exclamation mark to express strong emotion."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "Each of the students have a notebook.",
            "Each of the students has a notebook.",
            "Each of the students were present.",
            "Each of the students are ready."
        ],
        correct: 1,
        explanation: "\"Each\" is always treated as a singular subject. Therefore, it takes the singular verb \"has\" instead of \"have.\""
    },
    {
        question: "Fill in the blank.\n\nHe is good ______ Mathematics.",
        options: [
            "in",
            "on",
            "at",
            "with"
        ],
        correct: 2,
        explanation: "The correct preposition used with the adjective \"good\" to indicate ability is \"at.\" Therefore, \"good at Mathematics\" is the correct expression."
    },
    {
        question: "Choose the correct reported speech.\n\nRavi said, \"I am busy.\"",
        options: [
            "Ravi said that I am busy.",
            "Ravi said that he was busy.",
            "Ravi said he is busy.",
            "Ravi said that he has been busy."
        ],
        correct: 1,
        explanation: "In reported speech, the present tense changes to the past tense when the reporting verb is in the past. Hence, \"am\" becomes \"was.\""
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
        explanation: "\"Accommodation\" is the correct spelling. It contains double 'c' and double 'm,' making it a commonly tested spelling word."
    },
    {
        question: "The main purpose of skimming is to:",
        options: [
            "remember every word",
            "understand grammar rules",
            "get the general idea quickly",
            "learn spellings"
        ],
        correct: 2,
        explanation: "Skimming is a reading strategy used to understand the main idea of a passage quickly without reading every word in detail."
    },
    {
        question: "Choose the correct article.\n\nMount Everest is ______ highest peak in the world.",
        options: [
            "a",
            "an",
            "the",
            "no article"
        ],
        correct: 2,
        explanation: "Superlative adjectives such as \"highest\" are always preceded by the definite article \"the.\" Therefore, \"the\" is the correct answer."
    },
    {
        question: "Choose the correct question tag.\n\nLet's start the class, ______?",
        options: [
            "shall we?",
            "will we?",
            "don't we?",
            "aren't we?"
        ],
        correct: 0,
        explanation: "Sentences beginning with \"Let's\" are followed by the question tag \"shall we?\" This is the standard grammatical pattern."
    },
    {
        question: "Choose the passive voice.\n\nPeople speak Telugu in Andhra Pradesh.",
        options: [
            "Telugu spoke in Andhra Pradesh.",
            "Telugu is spoken in Andhra Pradesh.",
            "Telugu was spoken in Andhra Pradesh.",
            "Telugu has spoken in Andhra Pradesh."
        ],
        correct: 1,
        explanation: "The simple present passive voice is formed with \"is/am/are + past participle.\" Therefore, \"Telugu is spoken\" is correct."
    },
    {
        question: "Choose the correct phrasal verb.\n\nThe teacher asked the students to ______ the homework.",
        options: [
            "hand in",
            "hand on",
            "hand over to",
            "hand off"
        ],
        correct: 0,
        explanation: "\"Hand in\" means to submit work to a teacher or authority. It is the appropriate phrasal verb in this context."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "Neither Ravi nor his friends was absent.",
            "Neither Ravi nor his friends were absent.",
            "Neither Ravi nor his friends is absent.",
            "Neither Ravi nor his friends has absent."
        ],
        correct: 1,
        explanation: "When subjects are joined by \"neither...nor,\" the verb agrees with the subject nearest to it. Since \"friends\" is plural, \"were\" is correct."
    },
    {
        question: "Fill in the blank.\n\nThe train arrived ______ time.",
        options: [
            "at",
            "in",
            "on",
            "by"
        ],
        correct: 2,
        explanation: "\"On time\" means arriving at the expected or scheduled time. It is the correct expression used in standard English."
    },
    {
        question: "Choose the correct reported speech.\n\nShe said, \"I have finished my work.\"",
        options: [
            "She said that she had finished her work.",
            "She said that she has finished her work.",
            "She said she finished my work.",
            "She said that I had finished her work."
        ],
        correct: 0,
        explanation: "In reported speech, the present perfect tense changes to the past perfect tense. Therefore, \"have finished\" becomes \"had finished.\""
    },
    {
        question: "While reading a passage, identifying the meaning of an unfamiliar word from surrounding sentences is called:",
        options: [
            "scanning",
            "contextual guessing",
            "note making",
            "summarising"
        ],
        correct: 1,
        explanation: "Readers use context clues from surrounding words and sentences to infer the meaning of unfamiliar words. This strategy is called contextual guessing."
    },
    {
        question: "Choose the correctly spelt word.",
        options: [
            "Pronounciation",
            "Pronunciation",
            "Pronounciaton",
            "Pronouncation"
        ],
        correct: 1,
        explanation: "\"Pronunciation\" is the correct spelling. Although it comes from \"pronounce,\" the spelling changes by removing the letter 'o.'"
    },
    {
        question: "Choose the correctly punctuated sentence.",
        options: [
            "My favourite subjects are English, Mathematics, Science, and Telugu.",
            "My favourite subjects are English Mathematics Science and Telugu",
            "My favourite subjects are: English Mathematics Science Telugu.",
            "My favourite subjects are English; Mathematics; Science and Telugu."
        ],
        correct: 0,
        explanation: "Items in a list should be separated by commas for clarity. The first option correctly uses punctuation to separate the subjects."
    }
];