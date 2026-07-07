const SUBJECTS = [
    "Psychology",
    "English",
    "Special Education"
];

const QUESTIONS = [
    {
        question: "పియాజే ప్రకారం, ఒక విద్యార్థి \"ద్రవ పరిమాణం పాత్ర ఆకారాన్ని బట్టి మారుతుంది\" అని నమ్ముతున్నాడు. ఈ విద్యార్థి ఏ జ్ఞాన వికాస దశలో ఉండే అవకాశం ఎక్కువ?",
        options: [
            "సంచేతన-చలన దశ",
            "పూర్వ కార్యాచరణ దశ",
            "స్పష్ట కార్యాచరణ దశ",
            "సాంప్రదాయిక కార్యాచరణ దశ"
        ],
        correct: 1,
        explanation:
            "పూర్వ కార్యాచరణ దశలో పిల్లలు సంరక్షణ (Conservation) భావనను ఇంకా పూర్తిగా అర్థం చేసుకోరు. పాత్ర ఆకారం మారితే ద్రవ పరిమాణం కూడా మారిందని భావించడం ఈ దశకు ముఖ్య లక్షణం."
    },
    {
        question: "విద్యార్థి తనకు సాధ్యమైన దానికంటే కాస్త క్లిష్టమైన పనిని ఉపాధ్యాయుడి సహాయంతో పూర్తి చేస్తున్నాడు. ఈ పరిస్థితి ఏ సిద్ధాంతాన్ని సూచిస్తుంది?",
        options: [
            "స్కాఫోల్డింగ్ (Scaffolding)",
            "క్లాసికల్ కండిషనింగ్",
            "డిస్కవరీ లెర్నింగ్",
            "ట్రయల్ అండ్ ఎరర్"
        ],
        correct: 0,
        explanation:
            "విద్యార్థి స్వతంత్రంగా చేయలేని పనిని ఉపాధ్యాయుడి తాత్కాలిక సహాయంతో పూర్తి చేయడం స్కాఫోల్డింగ్. ఇది విగోట్స్కీ యొక్క ZPD భావనకు సంబంధించిన ముఖ్యమైన బోధనా పద్ధతి."
    },
    {
        question: "\"విద్యార్థి స్వయంగా అన్వేషించి జ్ఞానాన్ని నిర్మించుకోవాలి\" అనే భావనను ఎక్కువగా సమర్థించిన మనోవిజ్ఞాన శాస్త్రవేత్త ఎవరు?",
        options: [
            "బాండురా",
            "బ్రూనర్",
            "స్కిన్నర్",
            "థార్న్‌డైక్"
        ],
        correct: 1,
        explanation:
            "బ్రూనర్ డిస్కవరీ లెర్నింగ్ సిద్ధాంతాన్ని ప్రతిపాదించాడు. ఇందులో విద్యార్థులు అన్వేషణ, పరిశీలన, సమస్య పరిష్కారం ద్వారా స్వయంగా జ్ఞానాన్ని నిర్మించుకోవాలని ఆయన సూచించాడు."
    },
    {
        question: "\"మంచి బాలుడు/బాలికగా గుర్తింపు పొందాలని కోరుకోవడం\" కోల్‌బర్గ్ నైతిక వికాసంలోని ఏ దశకు చెందినది?",
        options: [
            "శిక్ష-విధేయత దశ",
            "వ్యక్తిగత ప్రయోజన దశ",
            "మంచి బాలుడు/బాలిక దశ",
            "చట్టం మరియు క్రమం దశ"
        ],
        correct: 2,
        explanation:
            "ఇతరుల ప్రశంసలు, ఆమోదం పొందేందుకు మంచి ప్రవర్తన చూపడం కోల్‌బర్గ్ Conventional స్థాయిలోని 'Good Boy/Good Girl Orientation' దశకు చెందిన లక్షణం."
    },
    {
        question: "ఒక విద్యార్థి గణితంలో అత్యుత్తమ ప్రతిభ కనబరుస్తున్నాడు కానీ సంగీతంలో ఆసక్తి తక్కువగా ఉంది. గార్డ్నర్ సిద్ధాంతం ప్రకారం దీనిని ఎలా అర్థం చేసుకోవాలి?",
        options: [
            "సాధారణ మేధస్సు ఎక్కువ",
            "తార్కిక-గణిత మేధస్సు బలంగా ఉంది",
            "సృజనాత్మక మేధస్సు అధికం",
            "ప్రాయోగిక మేధస్సు అధికం"
        ],
        correct: 1,
        explanation:
            "గార్డ్నర్ ప్రకారం మేధస్సు ఒకటే కాదు. తార్కిక-గణిత మేధస్సు బలంగా ఉండవచ్చు, సంగీత మేధస్సు తక్కువగా ఉండవచ్చు. ప్రతి మేధస్సు స్వతంత్రంగా అభివృద్ధి చెందుతుంది."
    },
    {
        question: "స్టెర్న్‌బర్గ్ త్రిముఖ మేధస్సు సిద్ధాంతంలో \"కొత్త పరిస్థితులకు సృజనాత్మకంగా స్పందించే సామర్థ్యం\" ఏ మేధస్సుకు చెందినది?",
        options: [
            "విశ్లేషణాత్మక మేధస్సు",
            "ప్రాయోగిక మేధస్సు",
            "సృజనాత్మక మేధస్సు",
            "భాషా మేధస్సు"
        ],
        correct: 2,
        explanation:
            "కొత్త పరిస్థితులను ఎదుర్కొని వినూత్న పరిష్కారాలను రూపొందించే సామర్థ్యాన్ని స్టెర్న్‌బర్గ్ Creative Intelligenceగా వివరించాడు. ఇది కొత్త అనుభవాలకు అనుకూలంగా ఆలోచించే శక్తిని సూచిస్తుంది."
    },
    {
        question: "కింది వాటిలో థార్న్‌డైక్ \"ప్రభావ నియమం (Law of Effect)\"ను ఉత్తమంగా ప్రతిబింబించేది ఏది?",
        options: [
            "పరిశీలన ద్వారా నేర్చుకోవడం",
            "ఆనందకర ఫలితాలు వచ్చే ప్రతిస్పందనలు బలపడతాయి",
            "తటస్థ ఉద్దీపన ప్రతిచర్యను కలిగిస్తుంది",
            "అనుకరణ ద్వారా అభ్యాసం జరుగుతుంది"
        ],
        correct: 1,
        explanation:
            "థార్న్‌డైక్ ప్రకారం సంతృప్తికర ఫలితాలను ఇచ్చే ప్రతిస్పందనలు భవిష్యత్తులో మరింత బలపడతాయి. అసంతృప్తికర ఫలితాలు ఇచ్చే ప్రతిస్పందనలు క్రమంగా బలహీనపడతాయి."
    },
    {
        question: "ఉపాధ్యాయుడు ప్రతి సరైన సమాధానానికి విద్యార్థికి స్టార్ ఇస్తున్నాడు. ఇది స్కిన్నర్ ప్రకారం ఏ ప్రక్రియ?",
        options: [
            "నెగటివ్ రీన్‌ఫోర్స్‌మెంట్",
            "పాజిటివ్ రీన్‌ఫోర్స్‌మెంట్",
            "శిక్ష",
            "నిర్మూలనం"
        ],
        correct: 1,
        explanation:
            "కావలసిన ప్రవర్తన తరువాత స్టార్ వంటి బహుమతి ఇవ్వడం ద్వారా ఆ ప్రవర్తన పునరావృతం అయ్యే అవకాశం పెరుగుతుంది. దీనిని పాజిటివ్ రీన్‌ఫోర్స్‌మెంట్ అంటారు."
    },
    {
        question: "గంట శబ్దాన్ని పలుమార్లు ఆహారంతో కలిపి చూపిన తరువాత, గంట శబ్దం విన్న వెంటనే కుక్క లాలాజలం స్రవించడం ఏ అభ్యాస సిద్ధాంతానికి ఉదాహరణ?",
        options: [
            "ఆపరెంట్ కండిషనింగ్",
            "పరిశీలనాత్మక అభ్యాసం",
            "క్లాసికల్ కండిషనింగ్",
            "అంతర్దృష్టి అభ్యాసం"
        ],
        correct: 2,
        explanation:
            "పావ్‌లవ్ క్లాసికల్ కండిషనింగ్ ప్రకారం తటస్థ ఉద్దీపనను సహజ ఉద్దీపనతో పదేపదే అనుసంధానిస్తే, తటస్థ ఉద్దీపనే తరువాత ప్రతిచర్యను కలిగిస్తుంది."
    },
    {
        question: "ఒక విద్యార్థి తన ఉపాధ్యాయుడు ప్రశంసలు పొందుతున్న మరో విద్యార్థిని గమనించి, అదే విధంగా ప్రవర్తించడం ప్రారంభించాడు. ఇది బాండురా సిద్ధాంతంలోని ఏ భావనను సూచిస్తుంది?",
        options: [
            "ట్రయల్ అండ్ ఎరర్",
            "పరిశీలనాత్మక అభ్యాసం",
            "క్లాసికల్ కండిషనింగ్",
            "డిస్కవరీ లెర్నింగ్"
        ],
        correct: 1,
        explanation:
            "బాండురా ప్రకారం ఇతరుల ప్రవర్తనను గమనించి, దానిని అనుకరించడం పరిశీలనాత్మక అభ్యాసం. మోడల్‌కు లభించిన ప్రశంస కూడా నేర్చుకోవడాన్ని ప్రభావితం చేస్తుంది."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి.\n\na) పియాజే సిద్ధాంతంలో అభ్యాసం అభివృద్ధికి ముందు జరుగుతుంది.\n\nb) వైగాట్స్కీ సిద్ధాంతంలో సామాజిక పరస్పర చర్య అభ్యాసానికి ప్రధాన ఆధారం.\n\nసరైన సమాధానాన్ని గుర్తించండి.",
        options: [
            "a మాత్రమే సరైనది",
            "b మాత్రమే సరైనది",
            "a, b రెండూ సరైనవి",
            "a, b రెండూ తప్పు"
        ],
        correct: 1,
        explanation: "వైగాట్స్కీ ప్రకారం సామాజిక పరస్పర చర్య, భాష మరియు మార్గదర్శకత్వం అభ్యాసానికి కీలకం. పియాజే ప్రకారం అభివృద్ధి స్థాయి సిద్ధమైన తరువాతే నిర్దిష్ట అభ్యాసం సమర్థవంతంగా జరుగుతుంది."
    },
    {
        question: "క్రింది వాటిలో సామాజిక అభ్యాస సిద్ధాంతం (Social Learning Theory) కు సంబంధించిన భావన ఏది?",
        options: [
            "స్కాఫోల్డింగ్",
            "మోడలింగ్",
            "రీన్‌ఫోర్స్‌మెంట్ షెడ్యూల్",
            "సంరక్షణ (Conservation)"
        ],
        correct: 1,
        explanation: "బాండురా సామాజిక అభ్యాస సిద్ధాంతంలో పరిశీలన, అనుకరణ, మోడలింగ్ ముఖ్యమైనవి. ఇతరుల ప్రవర్తనను గమనించి నేర్చుకోవడాన్ని మోడలింగ్ అంటారు."
    },
    {
        question: "ఒక ఉపాధ్యాయుడు కొత్త పాఠాన్ని ప్రారంభించే ముందు విద్యార్థులు ఇప్పటికే తెలిసిన భావనలను గుర్తు చేసి వాటిపై కొత్త భావనలను నిర్మిస్తున్నాడు. ఈ విధానం బ్రూనర్ ఏ భావనకు దగ్గరగా ఉంటుంది?",
        options: [
            "స్పైరల్ కరికులం",
            "క్లాసికల్ కండిషనింగ్",
            "ప్రతిస్పందన సాధారణీకరణ",
            "శిక్షణ ద్వారా అభ్యాసం"
        ],
        correct: 0,
        explanation: "బ్రూనర్ యొక్క స్పైరల్ కరికులంలో అదే భావనలను విద్యార్థుల స్థాయికి అనుగుణంగా మళ్లీ మళ్లీ లోతుగా బోధిస్తారు. పూర్వజ్ఞానం కొత్త అభ్యాసానికి పునాది అవుతుంది."
    },
    {
        question: "గార్డ్నర్ బహుళ మేధస్సుల సిద్ధాంతం ప్రకారం, ఇతరుల భావాలను అర్థం చేసుకొని సమర్థవంతంగా వ్యవహరించే సామర్థ్యాన్ని ఏమంటారు?",
        options: [
            "అంతర్వ్యక్తి మేధస్సు",
            "అంతర్ముఖ మేధస్సు",
            "భాషా మేధస్సు",
            "సంగీత మేధస్సు"
        ],
        correct: 0,
        explanation: "ఇతరుల భావోద్వేగాలు, ఉద్దేశాలు, అవసరాలను అర్థం చేసుకొని వారితో సమర్థవంతంగా మెలగగల సామర్థ్యాన్ని గార్డ్నర్ అంతర్వ్యక్తి మేధస్సుగా వివరించాడు."
    },
    {
        question: "క్రింది జతలలో తప్పుగా ఉన్నది ఏది?",
        options: [
            "పావ్‌లవ్ — క్లాసికల్ కండిషనింగ్",
            "స్కిన్నర్ — ఆపరెంట్ కండిషనింగ్",
            "థార్న్‌డైక్ — ట్రయల్ అండ్ ఎరర్",
            "బాండురా — డిస్కవరీ లెర్నింగ్"
        ],
        correct: 3,
        explanation: "డిస్కవరీ లెర్నింగ్ సిద్ధాంతాన్ని ప్రతిపాదించింది బ్రూనర్. బాండురా సామాజిక అభ్యాస సిద్ధాంతాన్ని ప్రతిపాదించి పరిశీలనాత్మక అభ్యాసానికి ప్రాధాన్యత ఇచ్చాడు."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి.\n\na) రీన్‌ఫోర్స్‌మెంట్ ప్రవర్తన సంభావ్యతను పెంచుతుంది.\n\nb) శిక్ష (Punishment) ఎల్లప్పుడూ శాశ్వత ప్రవర్తనా మార్పును కలిగిస్తుంది.\n\nసరైన సమాధానం ఏది?",
        options: [
            "a మాత్రమే సరైనది",
            "b మాత్రమే సరైనది",
            "రెండూ సరైనవి",
            "రెండూ తప్పు"
        ],
        correct: 0,
        explanation: "రీన్‌ఫోర్స్‌మెంట్ కావలసిన ప్రవర్తనను బలపరుస్తుంది. అయితే శిక్ష ఎల్లప్పుడూ శాశ్వత ప్రవర్తనా మార్పును కలిగించదు; తాత్కాలిక ప్రభావం మాత్రమే ఉండవచ్చు."
    },
    {
        question: "ఒక విద్యార్థి సమస్యను అనేక కోణాల నుండి విశ్లేషించి, ఉత్తమ పరిష్కారాన్ని ఎంచుకుంటాడు. స్టెర్న్‌బర్గ్ సిద్ధాంతం ప్రకారం ఇది ఏ మేధస్సు?",
        options: [
            "ప్రాయోగిక మేధస్సు",
            "విశ్లేషణాత్మక మేధస్సు",
            "సృజనాత్మక మేధస్సు",
            "సంగీత మేధస్సు"
        ],
        correct: 1,
        explanation: "సమస్యలను విశ్లేషించడం, పోల్చడం, తర్కించడం, మూల్యాంకనం చేసి సరైన నిర్ణయం తీసుకోవడం స్టెర్న్‌బర్గ్ విశ్లేషణాత్మక మేధస్సుకు చెందిన లక్షణం."
    },
    {
        question: "క్రింది వాటిలో ఉద్దీపన సాధారణీకరణ (Stimulus Generalization) కు సరైన ఉదాహరణ ఏది?",
        options: [
            "పాఠశాల గంట విన్నప్పుడే విద్యార్థి తరగతిలోకి రావడం",
            "ఒకే రకమైన రెండు గంటల శబ్దాలకు ఒకే విధంగా ప్రతిస్పందించడం",
            "తప్పు సమాధానానికి మార్కులు తగ్గించడం",
            "ఉపాధ్యాయుని ప్రవర్తనను అనుకరించడం"
        ],
        correct: 1,
        explanation: "ఒక ఉద్దీపనకు ఏర్పడిన ప్రతిచర్య అదే పోలిక ఉన్న ఇతర ఉద్దీపనలకు కూడా కనిపించడం ఉద్దీపన సాధారణీకరణగా పావ్‌లవ్ వివరించాడు."
    },
    {
        question: "ఒక ఉపాధ్యాయుడు \"విద్యార్థులు స్వయంగా అన్వేషించి భావనను నిర్మించాలి\" అని నమ్ముతాడు. అదే సమయంలో అవసరమైనప్పుడు సూచనలు కూడా ఇస్తాడు. ఈ విధానానికి అత్యంత దగ్గరైన సిద్ధాంతాల కలయిక ఏది?",
        options: [
            "పావ్‌లవ్ మరియు స్కిన్నర్",
            "బ్రూనర్ మరియు వైగాట్స్కీ",
            "థార్న్‌డైక్ మరియు పావ్‌లవ్",
            "గార్డ్నర్ మరియు స్టెర్న్‌బర్గ్"
        ],
        correct: 1,
        explanation: "స్వయంగా అన్వేషించడం బ్రూనర్ డిస్కవరీ లెర్నింగ్‌ను సూచిస్తుంది. అవసరమైనప్పుడు ఉపాధ్యాయుని మార్గదర్శకత్వం ఇవ్వడం వైగాట్స్కీ స్కాఫోల్డింగ్ భావనకు అనుగుణంగా ఉంటుంది."
    },
    {
        question: "క్రింది జతలను పరిశీలించండి.\n\n1. పియాజే — జ్ఞాన వికాస దశలు\n2. కోల్‌బర్గ్ — నైతిక వికాస దశలు\n3. గార్డ్నర్ — బహుళ మేధస్సులు\n4. బాండురా — సామాజిక అభ్యాస సిద్ధాంతం\n\nసరైన సమాధానం ఏది?",
        options: [
            "1, 2 మాత్రమే",
            "2, 3 మాత్రమే",
            "1, 2, 3 మాత్రమే",
            "1, 2, 3, 4"
        ],
        correct: 3,
        explanation: "ఈ నాలుగు జతలూ సరైనవే. పియాజే జ్ఞాన వికాసం, కోల్‌బర్గ్ నైతిక వికాసం, గార్డ్నర్ బహుళ మేధస్సులు, బాండురా సామాజిక అభ్యాస సిద్ధాంతాన్ని ప్రతిపాదించారు."
    },
    {
        question: "Choose the correct article.\n\nRavi is ____ honest boy.",
        options: ["a", "an", "the", "No article"],
        correct: 1,
        explanation: "The word 'honest' begins with a silent 'h', producing a vowel sound. English articles depend on pronunciation rather than spelling, so 'an honest boy' is grammatically correct."
    },
    {
        question: "Choose the correct preposition.\n\nThe meeting will start _____ 9:30 a.m.",
        options: ["in", "on", "at", "by"],
        correct: 2,
        explanation: "The preposition 'at' is used before exact clock times such as 9:30 a.m., 5:00 p.m., or midnight. Therefore, 'at 9:30 a.m.' is the correct expression."
    },
    {
        question: "Choose the correct verb.\n\nEach of the students _____ submitted the assignment.",
        options: ["have", "are", "has", "were"],
        correct: 2,
        explanation: "The subject 'Each' is singular, although followed by a plural noun. Singular subjects require singular verbs, making 'has submitted' the correct grammatical choice."
    },
    {
        question: "Identify the part containing an error.\n\nA. One of my friends\nB. have bought\nC. a new laptop\nD. yesterday.",
        options: [
            "One of my friends",
            "have bought",
            "a new laptop",
            "yesterday."
        ],
        correct: 1,
        explanation: "The subject 'One' is singular, so the verb should also be singular. 'Have bought' should be replaced with 'has bought' to maintain subject–verb agreement."
    },
    {
        question: "Choose the correct option.\n\nNeither the teacher nor the students _____ present in the classroom.",
        options: ["was", "is", "were", "has"],
        correct: 2,
        explanation: "With 'Neither...nor', the verb agrees with the subject nearest to it. Since 'students' is plural and closest to the verb, 'were' is the correct choice."
    },
    {
        question: "Choose the correct preposition.\n\nShe has been living here _____ 2018.",
        options: ["for", "since", "from", "by"],
        correct: 1,
        explanation: "The preposition 'since' is used before a specific point in time, such as a year or date. 'For' is used with durations like two years or five months."
    },
    {
        question: "Choose the correct article.\n\nHe bought _____ umbrella because it was raining.",
        options: ["a", "an", "the", "no article"],
        correct: 1,
        explanation: "The word 'umbrella' begins with a vowel sound, so the indefinite article 'an' is required. Therefore, 'an umbrella' is the grammatically correct expression."
    },
    {
        question: "Identify the sentence with the correct Subject–Verb Agreement.",
        options: [
            "Mathematics are my favourite subject.",
            "Mathematics is my favourite subject.",
            "Mathematics have my favourite subject.",
            "Mathematics were my favourite subject."
        ],
        correct: 1,
        explanation: "When referring to the academic subject, 'Mathematics' is treated as singular. Therefore, it takes the singular verb 'is' instead of plural verb forms."
    },
    {
        question: "Choose the correct option.\n\nThe principal, along with the teachers, _____ attending the meeting.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "The phrase 'along with the teachers' is parenthetical and does not affect the verb. The main subject 'principal' is singular, so the correct verb is 'is'."
    },
    {
        question: "Identify the part containing an error.\n\nA. The news\nB. are\nC. very encouraging\nD. today.",
        options: [
            "The news",
            "are",
            "very encouraging",
            "today."
        ],
        correct: 1,
        explanation: "Although 'news' ends with 's', it is a singular uncountable noun. Therefore, it requires the singular verb 'is', making 'are' the incorrect part."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "Every one of the boys have completed the work.",
            "Every one of the boys has completed the work.",
            "Every one of the boys were completed the work.",
            "Every one of the boys are completed the work."
        ],
        correct: 1,
        explanation: "The subject is 'Every one', which is singular. Therefore, it requires the singular auxiliary verb 'has'. The phrase 'of the boys' does not affect subject–verb agreement."
    },
    {
        question: "Choose the correct preposition.\n\nThe train arrived _____ the station before sunrise.",
        options: ["in", "at", "on", "into"],
        correct: 1,
        explanation: "The preposition 'at' is used for arrival at specific places such as stations, airports, or bus stops. Hence, 'arrived at the station' is grammatically correct."
    },
    {
        question: "Identify the part containing an error.\n\nA. Neither of the answers\nB. are\nC. correct\nD. today.",
        options: [
            "Neither of the answers",
            "are",
            "correct",
            "today."
        ],
        correct: 1,
        explanation: "'Neither' is treated as a singular subject in standard English. Therefore, it should take the singular verb 'is' instead of the plural verb 'are'."
    },
    {
        question: "Choose the correct article.\n\nShe is _____ M.A. student.",
        options: ["a", "an", "the", "no article"],
        correct: 1,
        explanation: "The abbreviation 'M.A.' begins with the vowel sound /em/. Since articles depend on pronunciation rather than spelling, 'an M.A. student' is correct."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "The quality of the books are excellent.",
            "The quality of the books were excellent.",
            "The quality of the books is excellent.",
            "The quality of the books have been excellent."
        ],
        correct: 2,
        explanation: "The main subject is 'quality', which is singular. The phrase 'of the books' only modifies the subject and does not influence the verb."
    },
    {
        question: "Choose the correct preposition.\n\nHe insisted _____ paying the bill himself.",
        options: ["on", "in", "for", "with"],
        correct: 0,
        explanation: "The verb 'insist' is followed by the preposition 'on' before a noun or gerund. Therefore, 'insisted on paying' is the correct collocation."
    },
    {
        question: "Identify the sentence without any grammatical error.",
        options: [
            "One of the girls have won the prize.",
            "One of the girls has won the prize.",
            "One of the girls were won the prize.",
            "One of the girls are winning the prize."
        ],
        correct: 1,
        explanation: "The subject is 'One', which is singular. Hence, the singular auxiliary verb 'has' must be used. The phrase 'of the girls' does not affect agreement."
    },
    {
        question: "Choose the correct option.\n\nThe furniture _____ very expensive.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "'Furniture' is an uncountable noun in English and always takes a singular verb. Therefore, 'The furniture is very expensive' is grammatically correct."
    },
    {
        question: "Identify the part containing an error.\n\nA. My brother\nB. as well as his friends\nC. are going to attend\nD. the seminar.",
        options: [
            "My brother",
            "as well as his friends",
            "are going to attend",
            "the seminar."
        ],
        correct: 2,
        explanation: "The phrase 'as well as his friends' is parenthetical. The main subject is 'My brother', which is singular, so the correct verb is 'is going to attend'."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "The teacher divided the sweets among the two boys.",
            "The teacher divided the sweets between the two boys.",
            "The teacher divided the sweets into the two boys.",
            "The teacher divided the sweets from the two boys."
        ],
        correct: 1,
        explanation: "'Between' is used when referring to exactly two people or things, while 'among' is generally used for three or more. Hence, 'between the two boys' is correct."
    },
    {
        question: "వ్యక్తిగత విద్యా ప్రణాళిక (IEP) యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        options: [
            "పాఠశాల వార్షిక ప్రణాళికను రూపొందించడం",
            "ప్రతి విద్యార్థి అవసరాలకు అనుగుణంగా వ్యక్తిగత విద్యా లక్ష్యాలను రూపొందించడం",
            "ఉపాధ్యాయుల పనితీరును అంచనా వేయడం",
            "పరీక్షల షెడ్యూల్ రూపొందించడం"
        ],
        correct: 1,
        explanation: "IEP (Individualized Education Plan) ప్రతి ప్రత్యేక అవసరాలు గల విద్యార్థి సామర్థ్యాలు, అవసరాలు, విద్యా లక్ష్యాలు, బోధనా వ్యూహాలు మరియు మద్దతు సేవలను వ్యక్తిగతంగా నిర్దేశించే అధికారిక పత్రం."
    },
    {
        question: "దివ్యాంగుల హక్కుల చట్టం (RPWD Act), 2016 ప్రకారం గుర్తించబడిన దివ్యాంగతల సంఖ్య ఎంత?",
        options: [
            "18",
            "19",
            "21",
            "24"
        ],
        correct: 2,
        explanation: "RPWD Act, 2016 ప్రకారం 21 రకాల దివ్యాంగతలు అధికారికంగా గుర్తించబడ్డాయి. ఈ చట్టం సమాన అవకాశాలు, హక్కుల పరిరక్షణ మరియు సమగ్ర భాగస్వామ్యాన్ని ప్రోత్సహిస్తుంది."
    },
    {
        question: "పునరావాస వృత్తి నిపుణుల విద్య, శిక్షణ మరియు నమోదు (Registration)ను నియంత్రించే చట్టం ఏది?",
        options: [
            "జాతీయ ట్రస్ట్ చట్టం, 1999",
            "RCI చట్టం, 1992",
            "RTE చట్టం, 2009",
            "RPWD చట్టం, 2016"
        ],
        correct: 1,
        explanation: "Rehabilitation Council of India (RCI) Act, 1992 పునరావాస వృత్తి నిపుణుల శిక్షణ, అర్హతలు, నమోదు మరియు వృత్తి ప్రమాణాలను నియంత్రించే ప్రధాన చట్టం."
    },
    {
        question: "జాతీయ ట్రస్ట్ చట్టం, 1999 ప్రధానంగా క్రింది వారిలో ఎవరి సంక్షేమం కోసం రూపొందించబడింది?",
        options: [
            "అన్ని రకాల దివ్యాంగుల కోసం",
            "ఆటిజం, సెరెబ్రల్ పాల్సీ, మేధో వైకల్యం మరియు బహుళ వైకల్యాలు గల వ్యక్తుల కోసం",
            "కేవలం దృష్టి లోపం గల వ్యక్తుల కోసం",
            "కేవలం శ్రవణ లోపం గల వ్యక్తుల కోసం"
        ],
        correct: 1,
        explanation: "National Trust Act, 1999 ప్రధానంగా Autism, Cerebral Palsy, Intellectual Disability మరియు Multiple Disabilities గల వ్యక్తుల సంక్షేమం, సంరక్షణ మరియు స్వతంత్ర జీవనాన్ని ప్రోత్సహించేందుకు రూపొందించబడింది."
    },
    {
        question: "సమగ్ర శిక్ష (Samagra Shiksha) కార్యక్రమం యొక్క ప్రధాన లక్ష్యం ఏది?",
        options: [
            "ఉన్నత విద్యాభివృద్ధి మాత్రమే",
            "పాఠశాల విద్యలో సమగ్ర, సమాన మరియు నాణ్యమైన విద్యను అందించడం",
            "కేవలం వృత్తి విద్యను అభివృద్ధి చేయడం",
            "పరీక్షా విధానాన్ని మార్చడం"
        ],
        correct: 1,
        explanation: "Samagra Shiksha కార్యక్రమం పాఠశాల విద్యలో సమానత్వం, నాణ్యత, సమగ్రత మరియు అందరికీ అందుబాటులో ఉండే విద్యను ప్రోత్సహించే సమగ్ర కేంద్ర ప్రభుత్వ పథకం."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి.\n\na) IEP ప్రతి విద్యార్థికి ఒకే విధంగా రూపొందించబడుతుంది.\n\nb) IEP రూపకల్పనలో తల్లిదండ్రుల భాగస్వామ్యం ముఖ్యమైనది.\n\nసరైన సమాధానం ఏది?",
        options: [
            "a మాత్రమే సరైనది",
            "b మాత్రమే సరైనది",
            "రెండూ సరైనవి",
            "రెండూ తప్పు"
        ],
        correct: 1,
        explanation: "IEP ప్రతి విద్యార్థి వ్యక్తిగత అవసరాల ఆధారంగా రూపొందించబడుతుంది. దాని రూపకల్పన, అమలు మరియు సమీక్షలో తల్లిదండ్రుల భాగస్వామ్యం అత్యంత ముఖ్యమైన అంశంగా పరిగణించబడుతుంది."
    },
    {
        question: "క్రింది జతలలో సరైనది ఏది?",
        options: [
            "RCI Act — ఉచిత మరియు నిర్బంధ విద్య",
            "RPWD Act — దివ్యాంగుల హక్కుల పరిరక్షణ",
            "National Trust Act — ఉపాధ్యాయుల నియామకం",
            "Samagra Shiksha — పునరావాస నిపుణుల నమోదు"
        ],
        correct: 1,
        explanation: "RPWD Act, 2016 దివ్యాంగుల హక్కులు, సమాన అవకాశాలు, వివక్ష నిరోధం మరియు సమగ్ర భాగస్వామ్యాన్ని నిర్ధారించే ముఖ్యమైన భారతీయ చట్టం."
    },
    {
        question: "ఒక ప్రత్యేక అవసరాలు గల విద్యార్థికి బోధనా విధానంలో మార్పులు, అనుకూలీకరణలు మరియు వార్షిక లక్ష్యాలను లిఖితపూర్వకంగా నమోదు చేసే అధికారిక పత్రం ఏది?",
        options: [
            "పాఠశాల అభివృద్ధి ప్రణాళిక",
            "వ్యక్తిగత విద్యా ప్రణాళిక (IEP)",
            "నిరంతర సమగ్ర మూల్యాంకన పత్రం",
            "ప్రవేశ నమోదు పత్రం"
        ],
        correct: 1,
        explanation: "IEP అనేది ప్రత్యేక అవసరాలు గల విద్యార్థి కోసం విద్యా లక్ష్యాలు, సేవలు, అనుకూలీకరణలు, మూల్యాంకన విధానాలు మరియు బాధ్యతలను లిఖితపూర్వకంగా నమోదు చేసే అధికారిక పత్రం."
    },
    {
        question: "క్రింది వాటిలో సమగ్ర విద్య (Inclusive Education) సూత్రానికి అత్యంత అనుకూలమైనది ఏది?",
        options: [
            "ప్రత్యేక అవసరాలు గల పిల్లలను ఎల్లప్పుడూ ప్రత్యేక పాఠశాలలోనే ఉంచడం",
            "అన్ని విద్యార్థులను ఒకే విధంగా బోధించడం",
            "సాధారణ పాఠశాలలో అవసరమైన అనుకూలీకరణలతో విద్యను అందించడం",
            "పరీక్షల్లో మాత్రమే అదనపు సమయం ఇవ్వడం"
        ],
        correct: 2,
        explanation: "సమగ్ర విద్యలో ప్రత్యేక అవసరాలు గల పిల్లలు సాధారణ పాఠశాలలోనే అవసరమైన సౌకర్యాలు, అనుకూలీకరణలు మరియు మద్దతుతో ఇతర విద్యార్థులతో కలిసి అభ్యసిస్తారు."
    },
    {
        question: "క్రింది జతలను పరిశీలించండి.\n\n1. RCI Act — 1992\n2. National Trust Act — 1999\n3. RPWD Act — 2016\n4. Samagra Shiksha — పాఠశాల విద్యలో సమగ్ర పథకం\n\nసరైన సమాధానం ఏది?",
        options: [
            "1, 2 మాత్రమే",
            "2, 3 మాత్రమే",
            "1, 2, 3 మాత్రమే",
            "1, 2, 3, 4"
        ],
        correct: 3,
        explanation: "ఈ నాలుగు జతలూ సరైనవే. RCI Act (1992), National Trust Act (1999), RPWD Act (2016), Samagra Shiksha పాఠశాల విద్యలో సమగ్ర అభివృద్ధికి సంబంధించిన ముఖ్యమైన అంశాలు."
    }
];