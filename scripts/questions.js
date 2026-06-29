const SUBJECTS = [
    "Child Development",
    "English",
    "Special Education"
];

const QUESTIONS = [
    {
        question: "వ్యక్తి యొక్క ప్రవర్తన, భావోద్వేగాలు, ఆలోచనలు మరియు సామాజిక పరస్పర చర్యల సమగ్ర రూపాన్ని ఏమని అంటారు?",
        options: [
            "మేధస్సు",
            "వ్యక్తిత్వం",
            "అభిరుచి",
            "వైఖరి"
        ],
        correct: 1,
        explanation:
            "వ్యక్తిత్వం అనేది వ్యక్తి యొక్క శాశ్వత ప్రవర్తన, భావోద్వేగాలు, ఆలోచనలు, విలువలు మరియు సామాజిక సంబంధాల సమగ్ర రూపం. ఇది ఇతరుల నుండి వ్యక్తిని ప్రత్యేకంగా గుర్తించే ముఖ్యమైన లక్షణాల సమాహారం."
    },
    {
        question: '"వ్యక్తిత్వాన్ని శరీర నిర్మాణం ఆధారంగా వర్గీకరించిన" మనోవిజ్ఞాన శాస్త్రవేత్త ఎవరు?',
        options: [
            "ఆల్పోర్ట్",
            "క్రెచ్‌మర్",
            "క్యాటెల్",
            "గిల్‌ఫోర్డ్"
        ],
        correct: 1,
        explanation:
            "క్రెచ్‌మర్ వ్యక్తుల శరీర నిర్మాణాన్ని ఆధారంగా తీసుకొని వ్యక్తిత్వాన్ని వర్గీకరించాడు. శరీర ఆకృతి మరియు వ్యక్తిత్వ లక్షణాల మధ్య సంబంధం ఉంటుందని తన సిద్ధాంతంలో వివరించాడు."
    },
    {
        question: "క్రింది వారిలో లక్షణ సిద్ధాంతం (Trait Theory) కు చెందిన మనోవిజ్ఞాన శాస్త్రవేత్త ఎవరు?",
        options: [
            "కార్ల్ రోజర్స్",
            "సిగ్మండ్ ఫ్రాయిడ్",
            "గార్డన్ ఆల్పోర్ట్",
            "పావ్‌లోవ్"
        ],
        correct: 2,
        explanation:
            "గార్డన్ ఆల్పోర్ట్ వ్యక్తిత్వాన్ని వ్యక్తిలో స్థిరంగా ఉండే లక్షణాల సమాహారంగా వివరించాడు. వ్యక్తుల ప్రవర్తనను అర్థం చేసుకోవడానికి Trait Theoryని ప్రముఖంగా అభివృద్ధి చేశాడు."
    },
    {
        question: "పాఠశాలలో ఒక విద్యార్థి పరీక్షలో విఫలమైనప్పటికీ నిరుత్సాహపడకుండా మరింత కృషి చేసి విజయాన్ని సాధించాడు. ఇది ప్రధానంగా దేనికి ఉదాహరణ?",
        options: [
            "సర్దుబాటు (Adjustment)",
            "గ్రహణం",
            "అనుకరణ",
            "అవధానం"
        ],
        correct: 0,
        explanation:
            "సర్దుబాటు అంటే పరిస్థితులకు అనుగుణంగా సానుకూలంగా స్పందించి సమస్యలను అధిగమించడం. అపజయాన్ని అంగీకరించి మరింత కృషి చేసి విజయం సాధించడం మంచి సర్దుబాటుకు ఉదాహరణ."
    },
    {
        question: 'వ్యక్తిత్వంలోని "ఇడ్ (Id), ఈగో (Ego), సూపర్ ఈగో (Superego)" భావనను ప్రతిపాదించినవారు ఎవరు?',
        options: [
            "ఫ్రాయిడ్",
            "జంగ్",
            "స్కిన్నర్",
            "థార్న్‌డైక్"
        ],
        correct: 0,
        explanation:
            "సిగ్మండ్ ఫ్రాయిడ్ వ్యక్తిత్వాన్ని ఇడ్, ఈగో మరియు సూపర్ ఈగో అనే మూడు భాగాలుగా వివరించాడు. ఈ మూడు భాగాల పరస్పర ప్రభావం వ్యక్తి ప్రవర్తనను నిర్ణయిస్తుందని పేర్కొన్నాడు."
    },
    {
        question: "క్రింది వాటిలో మానసిక ఆరోగ్యానికి ప్రధాన సూచిక ఏది?",
        options: [
            "ఎల్లప్పుడూ ఒంటరిగా ఉండటం",
            "ప్రతి సమస్యను తప్పించుకోవడం",
            "పరిస్థితులకు సమతుల్యంగా స్పందించడం",
            "ఇతరులతో మాట్లాడకపోవడం"
        ],
        correct: 2,
        explanation:
            "మానసిక ఆరోగ్యం ఉన్న వ్యక్తి పరిస్థితులను సమతుల్యంగా ఎదుర్కొంటాడు. భావోద్వేగాలను నియంత్రించి, ఇతరులతో మంచి సంబంధాలు కొనసాగిస్తూ సమస్యలను సమర్థంగా పరిష్కరించగలడు."
    },
    {
        question: '"స్వీయ సాకారత (Self-Actualization)" అనే భావనను ప్రధానంగా ప్రతిపాదించిన మనోవిజ్ఞాన శాస్త్రవేత్త ఎవరు?',
        options: [
            "మాస్లో",
            "వాట్సన్",
            "స్కిన్నర్",
            "బినే"
        ],
        correct: 0,
        explanation:
            "మాస్లో అవసరాల సోపాన సిద్ధాంతంలో స్వీయ సాకారతను అత్యున్నత అవసరంగా పేర్కొన్నాడు. వ్యక్తి తన సంపూర్ణ సామర్థ్యాన్ని అభివృద్ధి చేసుకోవడం దీనికి ప్రధాన అర్థం."
    },
    {
        question:
            "క్రింది వాక్యాలను పరిశీలించండి.\n\na. మంచి సర్దుబాటు మానసిక ఆరోగ్యానికి దోహదం చేస్తుంది.\n\nb. సర్దుబాటు అనేది అన్ని పరిస్థితులను అంగీకరించడం మాత్రమే.\n\nసరైన సమాధానాన్ని గుర్తించండి.",
        options: [
            "a మాత్రమే సరైనది",
            "b మాత్రమే సరైనది",
            "a మరియు b రెండూ సరైనవి",
            "a మరియు b రెండూ తప్పు"
        ],
        correct: 0,
        explanation:
            "మంచి సర్దుబాటు మానసిక ఆరోగ్యాన్ని మెరుగుపరుస్తుంది. అయితే సర్దుబాటు అంటే ప్రతి పరిస్థితిని అంగీకరించడం మాత్రమే కాదు, అవసరానికి అనుగుణంగా సమర్థంగా స్పందించడం కూడా."
    },
    {
        question: "విద్యార్థుల వ్యక్తిగత, విద్యా మరియు వృత్తి సంబంధిత సమస్యలకు సరైన మార్గనిర్దేశం చేయడాన్ని ఏమంటారు?",
        options: [
            "మూల్యాంకనం",
            "మార్గదర్శకత్వం (Guidance)",
            "పునరావృతం",
            "ఉపబలనం"
        ],
        correct: 1,
        explanation:
            "మార్గదర్శకత్వం ద్వారా విద్యార్థులకు వ్యక్తిగత, విద్యా మరియు వృత్తి సంబంధిత నిర్ణయాలలో సరైన సూచనలు అందిస్తారు. వారి సామర్థ్యాలకు అనుగుణంగా అభివృద్ధి చెందేందుకు సహాయపడుతుంది."
    },
    {
        question: "ఒక ఉపాధ్యాయుడు విద్యార్థి సమస్యలను శ్రద్ధగా విని, పరిష్కారాన్ని అతడే కనుగొనేలా సహాయం చేస్తున్నాడు. ఇది దేనికి ఉదాహరణ?",
        options: [
            "శిక్షణ",
            "బోధన",
            "కౌన్సెలింగ్ (Counselling)",
            "మూల్యాంకనం"
        ],
        correct: 2,
        explanation:
            "కౌన్సెలింగ్‌లో వ్యక్తి సమస్యలను శ్రద్ధగా విని, అతనే సరైన పరిష్కారాన్ని గుర్తించేలా ప్రోత్సహిస్తారు. కౌన్సెలర్ సూచనలు ఇస్తాడు కానీ నిర్ణయం వ్యక్తిదే అవుతుంది."
    },
    {
        question: "భావోద్వేగ మేధస్సు (Emotional Intelligence) అంటే ప్రధానంగా ఏమిటి?",
        options: [
            "అధిక మేధస్సు పరీక్ష మార్కులు పొందడం",
            "భావోద్వేగాలను గుర్తించి, నియంత్రించి, సరైన విధంగా ఉపయోగించడం",
            "ఎక్కువ విషయాలను గుర్తుంచుకోవడం",
            "క్లిష్ట గణిత సమస్యలను పరిష్కరించడం"
        ],
        correct: 1,
        explanation:
            "భావోద్వేగ మేధస్సు అనేది తన భావోద్వేగాలను మరియు ఇతరుల భావోద్వేగాలను గుర్తించి, అర్థం చేసుకొని, నియంత్రించి, సరైన నిర్ణయాలు తీసుకుంటూ వ్యక్తిగత మరియు సామాజిక సంబంధాలను సమర్థంగా నిర్వహించే సామర్థ్యం."
    },
    {
        question: '"భావోద్వేగ మేధస్సు (Emotional Intelligence)" భావనను ప్రజాదరణ పొందేలా చేసిన రచయిత ఎవరు?',
        options: [
            "హోవర్డ్ గార్డ్నర్",
            "డేనియల్ గోల్మన్",
            "ఆల్ఫ్రెడ్ బినే",
            "జీన్ పియాజే"
        ],
        correct: 1,
        explanation:
            "డేనియల్ గోల్మన్ తన పుస్తకం ద్వారా భావోద్వేగ మేధస్సు భావనను ప్రపంచవ్యాప్తంగా ప్రజాదరణ పొందేలా చేశాడు. విజయంలో మేధస్సుతో పాటు భావోద్వేగ నియంత్రణ కూడా ముఖ్యమని వివరించాడు."
    },
    {
        question: "మంచి మానసిక ఆరోగ్యం కలిగిన వ్యక్తి లక్షణం ఏది?",
        options: [
            "ప్రతి చిన్న విషయానికి కోపపడడం",
            "ఎప్పుడూ ఒంటరిగా ఉండడం",
            "పరిస్థితులకు సమతుల్యంగా స్పందించడం",
            "ఇతరుల అభిప్రాయాలను పూర్తిగా తిరస్కరించడం"
        ],
        correct: 2,
        explanation:
            "మంచి మానసిక ఆరోగ్యం కలిగిన వ్యక్తి పరిస్థితులకు సమతుల్యంగా స్పందిస్తాడు. భావోద్వేగాలను నియంత్రించి, ఇతరులతో సత్సంబంధాలు కొనసాగిస్తూ సమస్యలను ప్రశాంతంగా పరిష్కరించడానికి ప్రయత్నిస్తాడు."
    },
    {
        question:
            "క్రింది వాక్యాలను పరిశీలించండి.\n\na. మార్గదర్శకత్వం (Guidance) నివారణాత్మక స్వభావం కలిగి ఉంటుంది.\n\nb. కౌన్సెలింగ్ (Counselling) సాధారణంగా వ్యక్తిగత సమస్యల పరిష్కారానికి సహాయపడుతుంది.\n\nసరైన సమాధానాన్ని గుర్తించండి.",
        options: [
            "a మాత్రమే సరైనది",
            "b మాత్రమే సరైనది",
            "a మరియు b రెండూ సరైనవి",
            "a మరియు b రెండూ తప్పు"
        ],
        correct: 2,
        explanation:
            "మార్గదర్శకత్వం సమస్యలు రాకముందే సరైన దిశలో నడిపిస్తుంది. కౌన్సెలింగ్ ఇప్పటికే ఉన్న వ్యక్తిగత, విద్యా లేదా భావోద్వేగ సమస్యలను పరిష్కరించేందుకు వ్యక్తికి సహాయపడే ప్రక్రియ."
    },
    {
        question:
            "తన భావోద్వేగాలను నియంత్రించుకొని, ఇతరులతో సానుకూల సంబంధాలను కొనసాగించే విద్యార్థి ప్రధానంగా ఏ సామర్థ్యాన్ని ప్రదర్శిస్తున్నాడు?",
        options: [
            "అవధానం",
            "సృజనాత్మకత",
            "భావోద్వేగ మేధస్సు",
            "జ్ఞాపకశక్తి"
        ],
        correct: 2,
        explanation:
            "భావోద్వేగాలను నియంత్రించడం, ఇతరులతో సానుకూల సంబంధాలు కొనసాగించడం, సరైన నిర్ణయాలు తీసుకోవడం మరియు సహానుభూతి చూపడం భావోద్వేగ మేధస్సుకు ముఖ్యమైన లక్షణాలుగా పరిగణించబడతాయి."
    },
    {
        question: "వ్యక్తి మరియు పరిసరాల మధ్య సమతుల్యతను సాధించే ప్రక్రియను ఏమంటారు?",
        options: [
            "అవగాహన",
            "సర్దుబాటు (Adjustment)",
            "ప్రేరణ",
            "గ్రహణం"
        ],
        correct: 1,
        explanation:
            "సర్దుబాటు అంటే వ్యక్తి తన అవసరాలు మరియు పరిసర పరిస్థితుల మధ్య సమతుల్యత సాధించడం. ఇది వ్యక్తి మానసిక ఆరోగ్యం మరియు విజయవంతమైన జీవనానికి అత్యంత అవసరం."
    },
    {
        question:
            "పాఠశాలలో విద్యార్థులకు విద్యా, వ్యక్తిగత మరియు వృత్తి సంబంధిత నిర్ణయాలు తీసుకోవడంలో సహాయపడే సేవ ఏది?",
        options: [
            "మూల్యాంకనం",
            "మార్గదర్శకత్వం (Guidance)",
            "పరీక్ష",
            "ఉపబలనం"
        ],
        correct: 1,
        explanation:
            "మార్గదర్శకత్వం విద్యార్థులు విద్యా, వ్యక్తిగత మరియు వృత్తి సంబంధిత నిర్ణయాలను సరైన విధంగా తీసుకోవడానికి సహాయపడుతుంది. వారి ఆసక్తులు, సామర్థ్యాలు మరియు లక్ష్యాలకు అనుగుణంగా దిశానిర్దేశం చేస్తుంది."
    },
    {
        question: "క్రింది వాటిలో కౌన్సెలింగ్ యొక్క ప్రధాన ఉద్దేశ్యం ఏది?",
        options: [
            "విద్యార్థిని శిక్షించడం",
            "సమస్యను ఉపాధ్యాయుడు స్వయంగా పరిష్కరించడం",
            "విద్యార్థి తన సమస్యకు తానే సరైన పరిష్కారం కనుగొనేలా సహాయపడడం",
            "పరీక్ష మార్కులు పెంచడం"
        ],
        correct: 2,
        explanation:
            "కౌన్సెలింగ్‌లో వ్యక్తి సమస్యలను అర్థం చేసుకొని, తన బలాలను గుర్తించి, తానే సరైన నిర్ణయం తీసుకునేలా ప్రోత్సహిస్తారు. కౌన్సెలర్ మార్గనిర్దేశం మాత్రమే చేస్తాడు."
    },
    {
        question: "క్రింది జతలలో సరైనది ఏది?",
        options: [
            "ఫ్రాయిడ్ — లక్షణ సిద్ధాంతం",
            "క్రెచ్‌మర్ — శరీర నిర్మాణ ఆధారిత వ్యక్తిత్వ సిద్ధాంతం",
            "స్కిన్నర్ — అవసరాల సోపానం",
            "మాస్లో — మానసిక విశ్లేషణ సిద్ధాంతం"
        ],
        correct: 1,
        explanation:
            "క్రెచ్‌మర్ వ్యక్తిత్వాన్ని శరీర నిర్మాణం ఆధారంగా వర్గీకరించాడు. మిగిలిన జతలు తప్పు. ఫ్రాయిడ్ మానసిక విశ్లేషణ సిద్ధాంతాన్ని, మాస్లో అవసరాల సోపాన సిద్ధాంతాన్ని ప్రతిపాదించారు."
    },
    {
        question:
            "ఒక విద్యార్థి పరీక్షలో తక్కువ మార్కులు వచ్చినప్పటికీ తన తప్పులను విశ్లేషించి తదుపరి పరీక్షకు ప్రణాళిక రూపొందిస్తున్నాడు. ఇది ప్రధానంగా దేనిని సూచిస్తుంది?",
        options: [
            "భావోద్వేగ మేధస్సు",
            "వ్యక్తిత్వ లోపం",
            "నిరాశ",
            "మానసిక అస్వస్థత"
        ],
        correct: 0,
        explanation:
            "అపజయాన్ని ప్రశాంతంగా అంగీకరించి, భావోద్వేగాలను నియంత్రిస్తూ తప్పులను విశ్లేషించి భవిష్యత్తు కోసం ప్రణాళిక రూపొందించడం భావోద్వేగ మేధస్సు మరియు సానుకూల సర్దుబాటుకు మంచి ఉదాహరణ."
    },
    {
        question: "Choose the correct modal to complete the sentence.\n\nYou _______ wear a helmet while riding a motorcycle.",
        options: [
            "may",
            "must",
            "might",
            "would"
        ],
        correct: 1,
        explanation:
            "'Must' expresses strong obligation or necessity. Wearing a helmet while riding a motorcycle is a legal and safety requirement, so 'must' is the most appropriate modal verb."
    },
    {
        question: "Choose the correct question tag.\n\nShe is a good teacher, _______?",
        options: [
            "isn't she?",
            "doesn't she?",
            "wasn't she?",
            "is she?"
        ],
        correct: 0,
        explanation:
            "A positive statement takes a negative question tag using the same auxiliary verb. Since the sentence uses 'is', the correct tag is 'isn't she?'."
    },
    {
        question: "Choose the correct degree of comparison.\n\nRavi is _______ than his elder brother.",
        options: [
            "more tall",
            "tallest",
            "taller",
            "most tall"
        ],
        correct: 2,
        explanation:
            "The word 'than' indicates a comparison between two people. Therefore, the comparative degree 'taller' is correct. 'More tall' and 'most tall' are grammatically incorrect."
    },
    {
        question: "Choose the sentence that is grammatically correct.",
        options: [
            "Each of the students have completed the work.",
            "Each of the students has completed the work.",
            "Each of the students were completed the work.",
            "Each of the students are completed the work."
        ],
        correct: 1,
        explanation:
            "'Each' is treated as a singular subject. Therefore, it takes the singular verb 'has'. The correct sentence is 'Each of the students has completed the work.'"
    },
    {
        question: "Choose the correct modal.\n\nYou _______ leave now if you have finished your work.",
        options: [
            "can",
            "ought",
            "should have",
            "mustn't"
        ],
        correct: 0,
        explanation:
            "'Can' expresses permission in this sentence. It indicates that the person is allowed to leave after completing the assigned work, making it the correct modal."
    },
    {
        question: "Choose the correct question tag.\n\nLet's go for a walk, _______?",
        options: [
            "shall we?",
            "don't we?",
            "will we?",
            "do we?"
        ],
        correct: 0,
        explanation:
            "Sentences beginning with 'Let's' always take the question tag 'shall we?'. This is the standard grammatical rule used for suggestions and invitations."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "Mount Everest is higher than any mountain in the world.",
            "Mount Everest is the highest mountain in the world.",
            "Mount Everest is more highest than all mountains.",
            "Mount Everest is most high mountain."
        ],
        correct: 1,
        explanation:
            "When comparing one with all others in a group, the superlative degree is used. Therefore, 'Mount Everest is the highest mountain in the world' is correct."
    },
    {
        question: "Choose the best improvement.\n\nNeither of the boys have submitted the assignment.",
        options: [
            "Neither of the boys has submitted the assignment.",
            "Neither of the boys were submitted the assignment.",
            "Neither of the boys are submitted the assignment.",
            "Neither of the boys having submitted the assignment."
        ],
        correct: 0,
        explanation:
            "'Neither' is a singular pronoun and requires a singular verb. Therefore, 'has submitted' is grammatically correct, while the other options contain subject-verb agreement errors."
    },
    {
        question: "Choose the correct modal.\n\nStudents _______ respect their teachers.",
        options: [
            "should",
            "may",
            "might",
            "would"
        ],
        correct: 0,
        explanation:
            "'Should' expresses moral duty, responsibility, or advice. Respecting teachers is considered a moral responsibility, making 'should' the most suitable modal in this context."
    },
    {
        question: "Choose the correct question tag.\n\nNobody informed you, _______?",
        options: [
            "didn't they?",
            "did they?",
            "wasn't it?",
            "weren't they?"
        ],
        correct: 1,
        explanation:
            "Words like 'nobody' have a negative meaning, so they take a positive question tag. Since the verb is in the past tense, the correct tag is 'did they?'."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "This book is more useful than any other books.",
            "This book is the most useful of all the books.",
            "This book is most useful than all books.",
            "This book is more useful of all books."
        ],
        correct: 1,
        explanation:
            "The superlative degree is used when comparing one item with every other member of the same group. Therefore, 'the most useful of all the books' is grammatically correct."
    },
    {
        question: "Choose the correct modal.\n\nYou ________ smoke inside the hospital.",
        options: [
            "can",
            "may",
            "must not",
            "would"
        ],
        correct: 2,
        explanation:
            "'Must not' expresses prohibition or strict restriction. Smoking inside a hospital is prohibited because it is unsafe and against hospital rules and public health regulations."
    },
    {
        question: "Choose the correct question tag.\n\nEveryone enjoyed the programme, ________?",
        options: [
            "didn't they?",
            "don't they?",
            "did he?",
            "wasn't it?"
        ],
        correct: 0,
        explanation:
            "Although 'everyone' is singular in form, question tags usually use the plural pronoun 'they'. Since the verb is in the past tense, the correct tag is 'didn't they?'."
    },
    {
        question: "Choose the correctly improved sentence.\n\nHe is one of the best player in the team.",
        options: [
            "He is one of the best players in the team.",
            "He is one of the better player in the team.",
            "He is one of the best player of the team.",
            "He is one of best players in team."
        ],
        correct: 0,
        explanation:
            "After the expression 'one of the best', the following noun must be in the plural form. Therefore, 'players' is the correct grammatical choice in this sentence."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "No other river in India is longer than the Ganga.",
            "No other river in India is longest than the Ganga.",
            "No other river in India are longer than the Ganga.",
            "No other river in India has longer than the Ganga."
        ],
        correct: 0,
        explanation:
            "The structure 'No other + singular noun + is + comparative adjective + than' is the correct way to compare one person or thing with every other member of a group."
    },
    {
        question: "సెరిబ్రల్ పాల్సీ (Cerebral Palsy) ప్రధానంగా శరీరంలోని ఏ వ్యవస్థను ప్రభావితం చేస్తుంది?",
        options: [
            "జీర్ణవ్యవస్థ",
            "కండరాల నియంత్రణ మరియు కదలికలు",
            "శ్వాసకోశ వ్యవస్థ",
            "రక్త ప్రసరణ వ్యవస్థ"
        ],
        correct: 1,
        explanation:
            "సెరిబ్రల్ పాల్సీ అనేది అభివృద్ధి చెందుతున్న మెదడుకు జరిగిన నష్టం వల్ల ఏర్పడే పరిస్థితి. ఇది ప్రధానంగా కండరాల నియంత్రణ, శరీర భంగిమ, సమతుల్యత మరియు కదలికలను ప్రభావితం చేస్తుంది."
    },
    {
        question: "క్రింది వాటిలో లోకోమోటర్ వైకల్యం (Locomotor Disability) కు ఉదాహరణ ఏది?",
        options: [
            "వినికిడి లోపం",
            "దృష్టి లోపం",
            "కదలికలకు సంబంధించిన అవయవాల లోపం",
            "మేధో వైకల్యం"
        ],
        correct: 2,
        explanation:
            "లోకోమోటర్ వైకల్యం చేతులు, కాళ్లు, కీళ్లు లేదా శరీర కదలికలకు సంబంధించిన అవయవాల పనితీరును ప్రభావితం చేస్తుంది. దీనివల్ల వ్యక్తి నడవడం లేదా కదలడం కష్టమవుతుంది."
    },
    {
        question:
            "క్రింది వాక్యాలను పరిశీలించండి.\n\na. మస్క్యులర్ డిస్ట్రోఫీ (Muscular Dystrophy) అనేది కండరాలు క్రమంగా బలహీనపడే వ్యాధి.\n\nb. ఇది అంటువ్యాధి.\n\nసరైన సమాధానాన్ని గుర్తించండి.",
        options: [
            "a మాత్రమే సరైనది",
            "b మాత్రమే సరైనది",
            "a మరియు b రెండూ సరైనవి",
            "a మరియు b రెండూ తప్పు"
        ],
        correct: 0,
        explanation:
            "మస్క్యులర్ డిస్ట్రోఫీ ఒక జన్యుపరమైన వ్యాధి. ఇందులో కండరాలు క్రమంగా బలహీనపడతాయి. ఇది అంటువ్యాధి కాదు మరియు ఒకరి నుండి మరొకరికి వ్యాపించదు."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education)లో లోకోమోటర్ వైకల్యం గల విద్యార్థికి అత్యంత అనుకూలమైన సౌకర్యం ఏది?",
        options: [
            "బ్రెయిల్ పుస్తకాలు",
            "సంకేత భాష మాత్రమే",
            "ర్యాంప్ మరియు అవరోధరహిత ప్రవేశం",
            "వినికిడి యంత్రం"
        ],
        correct: 2,
        explanation:
            "లోకోమోటర్ వైకల్యం గల విద్యార్థులకు ర్యాంపులు, హ్యాండ్రెయిల్స్, వీల్‌చైర్‌కు అనుకూలమైన మార్గాలు మరియు అవరోధరహిత ప్రవేశం సమగ్ర విద్యలో అత్యంత అవసరమైన సౌకర్యాలు."
    },
    {
        question: "RPWD Act–2016 ప్రకారం, సెరిబ్రల్ పాల్సీ ఏ వర్గంలోకి వస్తుంది?",
        options: [
            "దృష్టి వైకల్యం",
            "లోకోమోటర్ వైకల్యం",
            "మేధో వైకల్యం",
            "వినికిడి వైకల్యం"
        ],
        correct: 1,
        explanation:
            "RPWD Act–2016 ప్రకారం సెరిబ్రల్ పాల్సీ బెంచ్‌మార్క్ వైకల్యాలలో ఒకటి. ఇది లోకోమోటర్ వైకల్యాల వర్గంలో చేర్చబడింది మరియు చట్టపరమైన రక్షణ, విద్యా సౌకర్యాలకు అర్హత కల్పిస్తుంది."
    },
    {
        question: "లోకోమోటర్ వైకల్యం (Locomotor Disability) ప్రధానంగా దేనికి సంబంధించినది?",
        options: [
            "శ్రవణ సామర్థ్యం",
            "కదలికలకు సంబంధించిన అవయవాల పనితీరు",
            "భాషా అభివృద్ధి",
            "దృష్టి సామర్థ్యం"
        ],
        correct: 1,
        explanation:
            "లోకోమోటర్ వైకల్యం ప్రధానంగా చేతులు, కాళ్లు, కీళ్లు లేదా శరీర కదలికలకు సంబంధించిన అవయవాల పనితీరును ప్రభావితం చేస్తుంది. దీనివల్ల నడవడం, నిలబడడం లేదా కదలడం కష్టమవుతుంది."
    },
    {
        question: "క్రింది వాటిలో సెరిబ్రల్ పాల్సీ (Cerebral Palsy) యొక్క ప్రధాన లక్షణం ఏది?",
        options: [
            "వినికిడి పూర్తిగా కోల్పోవడం",
            "కండరాల సమన్వయం మరియు భంగిమలో లోపం",
            "దృష్టి లోపం",
            "చదవడంలో ఇబ్బంది"
        ],
        correct: 1,
        explanation:
            "సెరిబ్రల్ పాల్సీ అభివృద్ధి చెందుతున్న మెదడుకు జరిగిన నష్టం వల్ల ఏర్పడుతుంది. ఇది ప్రధానంగా కండరాల సమన్వయం, శరీర భంగిమ, సమతుల్యత మరియు కదలికలను ప్రభావితం చేస్తుంది."
    },
    {
        question: "క్రింది జతలలో సరైనది ఏది?",
        options: [
            "బ్రెయిల్ — వినికిడి లోపం",
            "వీల్‌చైర్ — లోకోమోటర్ వైకల్యం",
            "హియరింగ్ ఎయిడ్ — దృష్టి లోపం",
            "JAWS — మస్క్యులర్ డిస్ట్రోఫీ"
        ],
        correct: 1,
        explanation:
            "వీల్‌చైర్ లోకోమోటర్ వైకల్యం గల వ్యక్తుల స్వతంత్ర చలనానికి ఉపయోగపడే సహాయక పరికరం. మిగిలిన జతలు సరైనవి కావు, ఎందుకంటే అవి ఇతర వైకల్యాలకు సంబంధించినవి."
    },
    {
        question: "మస్క్యులర్ డిస్ట్రోఫీ (Muscular Dystrophy) గురించి సరైన వాక్యం ఏది?",
        options: [
            "ఇది బాక్టీరియా వల్ల వస్తుంది.",
            "ఇది క్రమంగా కండరాలను బలహీనపరుస్తుంది.",
            "ఇది కంటి వ్యాధి.",
            "ఇది వినికిడి లోపానికి కారణం."
        ],
        correct: 1,
        explanation:
            "మస్క్యులర్ డిస్ట్రోఫీ ఒక జన్యుపరమైన వ్యాధి. ఇది క్రమంగా కండరాల బలహీనత మరియు క్షీణతకు దారితీస్తుంది. ఇది బాక్టీరియా వల్ల వచ్చే అంటువ్యాధి కాదు."
    },
    {
        question: "సెరిబ్రల్ పాల్సీ గల విద్యార్థికి తరగతి గదిలో అత్యంత అనుకూలమైన సౌకర్యం ఏది?",
        options: [
            "ముందు వరుసలో కూర్చోబెట్టడం మాత్రమే",
            "శారీరక ప్రాప్యత (Accessibility) కల్పించడం",
            "బ్రెయిల్ పుస్తకాలు ఇవ్వడం",
            "సంకేత భాష మాత్రమే ఉపయోగించడం"
        ],
        correct: 1,
        explanation:
            "సెరిబ్రల్ పాల్సీ గల విద్యార్థులకు ర్యాంపులు, తగిన కూర్చునే ఏర్పాట్లు, వీల్‌చైర్‌కు అనుకూలమైన మార్గాలు మరియు ఇతర ప్రాప్యతా సౌకర్యాలు కల్పించడం సమగ్ర విద్యలో అత్యంత అవసరం."
    },
    {
        question:
            "క్రింది వాక్యాలను పరిశీలించండి.\n\na. లోకోమోటర్ వైకల్యం గల విద్యార్థులు సాధారణ పాఠశాలల్లో చదవవచ్చు.\n\nb. వారికి అవసరమైన అనుకూల సౌకర్యాలు కల్పించాలి.\n\nసరైన సమాధానాన్ని గుర్తించండి.",
        options: [
            "a మాత్రమే సరైనది",
            "b మాత్రమే సరైనది",
            "a మరియు b రెండూ సరైనవి",
            "a మరియు b రెండూ తప్పు"
        ],
        correct: 2,
        explanation:
            "సమగ్ర విద్య ప్రకారం లోకోమోటర్ వైకల్యం గల విద్యార్థులు సాధారణ పాఠశాలల్లోనే చదవాలి. వారికి అవసరమైన అనుసరణలు, ప్రాప్యతా సౌకర్యాలు మరియు సహాయక సేవలు అందించడం తప్పనిసరి."
    },
    {
        question: "RPWD Act–2016 యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        options: [
            "ప్రత్యేక పాఠశాలల సంఖ్యను పెంచడం",
            "వైకల్యం గల వ్యక్తుల హక్కులను పరిరక్షించడం మరియు సమాన అవకాశాలు కల్పించడం",
            "పరీక్షలను రద్దు చేయడం",
            "ప్రభుత్వ ఉద్యోగాలను తగ్గించడం"
        ],
        correct: 1,
        explanation:
            "RPWD Act–2016 వైకల్యం గల వ్యక్తుల హక్కులను రక్షించడం, సమాన అవకాశాలు కల్పించడం, వివక్షను నివారించడం మరియు సమాజంలోని అన్ని రంగాలలో వారి భాగస్వామ్యాన్ని ప్రోత్సహించడం లక్ష్యంగా రూపొందించబడింది."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education)లో లోకోమోటర్ వైకల్యం గల విద్యార్థికి ఉపాధ్యాయుడు మొదట చేయవలసినది ఏది?",
        options: [
            "వేరే తరగతికి పంపడం",
            "అవసరాలకు అనుగుణంగా తరగతి వాతావరణాన్ని మార్చడం",
            "ఇంటి వద్దనే చదవమని చెప్పడం",
            "పరీక్షల నుండి మినహాయించడం"
        ],
        correct: 1,
        explanation:
            "సమగ్ర విద్యలో ఉపాధ్యాయుడు మొదట విద్యార్థి అవసరాలను గుర్తించి, తరగతి గది వాతావరణం, బోధనా పద్ధతులు మరియు సౌకర్యాలను అందుకు అనుగుణంగా మార్చాలి."
    },
    {
        question: "క్రింది వాటిలో మస్క్యులర్ డిస్ట్రోఫీకి సంబంధించినది ఏది?",
        options: [
            "కండరాల బలహీనత",
            "దృష్టి లోపం",
            "వినికిడి లోపం",
            "మేధో వైకల్యం"
        ],
        correct: 0,
        explanation:
            "మస్క్యులర్ డిస్ట్రోఫీ యొక్క ప్రధాన లక్షణం క్రమంగా పెరుగుతున్న కండరాల బలహీనత. దీని వల్ల నడవడం, మెట్లు ఎక్కడం మరియు రోజువారీ కార్యకలాపాలు క్రమంగా కష్టమవుతాయి."
    },
    {
        question: "క్రింది వాటిలో లోకోమోటర్ వైకల్యం గల విద్యార్థికి అత్యంత అనుకూలమైన బోధనా విధానం ఏది?",
        options: [
            "ఒకే విధమైన బోధన",
            "వ్యక్తిగత అవసరాలకు అనుగుణంగా అనుసరణలు (Accommodations) కల్పించడం",
            "కేవలం మౌఖిక పరీక్షలు నిర్వహించడం",
            "తరగతి కార్యక్రమాల నుండి మినహాయించడం"
        ],
        correct: 1,
        explanation:
            "సమగ్ర విద్యలో ప్రతి విద్యార్థి అవసరాలకు అనుగుణంగా బోధనలో అనుసరణలు చేయాలి. ఇది సమాన అభ్యాస అవకాశాలను కల్పించి, విద్యార్థి పూర్తి భాగస్వామ్యాన్ని ప్రోత్సహిస్తుంది."
    }
];