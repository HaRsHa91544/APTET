const SUBJECTS = [
    "Child development"
];

const QUESTIONS = [
    {
        question: "ఒక శిశువు ఒక సమస్యను పరిష్కరించేటప్పుడు తనకు తెలిసిన పద్ధతి పనిచేయకపోతే కొత్త పద్ధతిని రూపొందిస్తాడు. పియాజే సిద్ధాంతం ప్రకారం ఇది ఏ ప్రక్రియకు సంబంధించినది?",
        options: [
            "సమీకరణం (Assimilation)",
            "అనుకూలనం (Accommodation)",
            "పరిపక్వత (Maturation)",
            "సంరక్షణ (Conservation)"
        ],
        correct: 1,
        explanation: "పాత జ్ఞాన నిర్మాణం కొత్త పరిస్థితికి సరిపోకపోతే, వ్యక్తి తన ఆలోచనా నిర్మాణాన్ని మార్చుకోవడాన్ని Piaget అనుకూలనం (Accommodation)గా పేర్కొన్నాడు."
    },
    {
        question: "వైగాట్స్కీ సిద్ధాంతంలో, విద్యార్థి తనంతట తాను చేయలేని పనిని మరింత నైపుణ్యం కలిగిన వ్యక్తి సహాయంతో చేయగలిగే స్థాయిని ఏమంటారు?",
        options: [
            "Zone of Actual Development",
            "Zone of Proximal Development",
            "Zone of Cognitive Conflict",
            "Zone of Independent Learning"
        ],
        correct: 1,
        explanation: "Zone of Proximal Development అనేది విద్యార్థి స్వతంత్రంగా చేయలేని పనిని, నైపుణ్యం కలిగిన వ్యక్తి సహాయంతో విజయవంతంగా చేయగల పరిధిని సూచిస్తుంది."
    },
    {
        question: "ఒక ఉపాధ్యాయుడు విద్యార్థికి మొదట సమస్య పరిష్కారంలో ఎక్కువ సహాయం అందించి, క్రమంగా ఆ సహాయాన్ని తగ్గిస్తాడు. ఈ ప్రక్రియను ఏమంటారు?",
        options: [
            "Scaffolding",
            "Shaping",
            "Chaining",
            "Generalization"
        ],
        correct: 0,
        explanation: "Scaffoldingలో ఉపాధ్యాయుడు ప్రారంభంలో అవసరమైన సహాయాన్ని అందించి, విద్యార్థి సామర్థ్యం పెరిగే కొద్దీ ఆ సహాయాన్ని క్రమంగా తగ్గిస్తాడు."
    },
    {
        question: "ఒక విద్యార్థి తనకు ఆసక్తి ఉన్న అంశాన్ని ఎటువంటి బహుమతి లేకుండానే నేర్చుకోవడానికి స్వయంగా ప్రయత్నిస్తాడు. ఇది ఏ రకమైన ప్రేరణకు ఉదాహరణ?",
        options: [
            "Extrinsic motivation",
            "Intrinsic motivation",
            "Negative motivation",
            "Social motivation"
        ],
        correct: 1,
        explanation: "Intrinsic motivationలో బాహ్య బహుమతి లేదా శిక్ష అవసరం లేకుండా, వ్యక్తిగత ఆసక్తి, ఆనందం లేదా సంతృప్తి కారణంగా వ్యక్తి ఒక పనిని చేస్తాడు."
    },
    {
        question: "క్రింది వాటిలో వ్యక్తిగత భేదాలకు సంబంధించిన సరైన ప్రకటన ఏది?",
        options: [
            "విద్యార్థులందరూ ఒకే వేగంతో నేర్చుకుంటారు.",
            "వ్యక్తిగత భేదాలు కేవలం మేధస్సులో మాత్రమే ఉంటాయి.",
            "విద్యార్థుల ఆసక్తులు, సామర్థ్యాలు మరియు నేర్చుకునే వేగంలో తేడాలు ఉండవచ్చు.",
            "వ్యక్తిగత భేదాలు బోధనా ప్రక్రియపై ఎటువంటి ప్రభావం చూపవు."
        ],
        correct: 2,
        explanation: "వ్యక్తిగత భేదాలు విద్యార్థుల ఆసక్తులు, సామర్థ్యాలు, మేధస్సు, వ్యక్తిత్వం మరియు నేర్చుకునే వేగం వంటి అనేక అంశాలలో కనిపిస్తాయి."
    },
    {
        question: "ఒక విద్యార్థి ఒకే సమయంలో అనేక ఉద్దీపనల మధ్య ఒక నిర్దిష్ట ఉద్దీపనపై తన మానసిక వనరులను కేంద్రీకరిస్తున్నాడు. ఇది ప్రధానంగా దేనిని సూచిస్తుంది?",
        options: [
            "Perception",
            "Attention",
            "Motivation",
            "Retention"
        ],
        correct: 1,
        explanation: "Attention అనేది అనేక ఉద్దీపనలలో ఒక నిర్దిష్ట ఉద్దీపన లేదా సమాచారంపై మానసిక వనరులను ఎంపికగా కేంద్రీకరించే ప్రక్రియ."
    },
    {
        question: "ఒక ఉపాధ్యాయుడు తరగతిలో విద్యార్థి సరైన ప్రవర్తన చేసిన వెంటనే ప్రశంసను అందిస్తాడు. ఈ పద్ధతి ఏ అభ్యసన సిద్ధాంతంతో ఎక్కువగా సంబంధం కలిగి ఉంటుంది?",
        options: [
            "Classical conditioning",
            "Operant conditioning",
            "Gestalt learning",
            "Insight learning"
        ],
        correct: 1,
        explanation: "Operant conditioningలో ప్రవర్తనను దాని పరిణామాల ద్వారా ప్రభావితం చేస్తారు. సరైన ప్రవర్తన తరువాత ప్రశంస ఇవ్వడం reinforcementగా పనిచేస్తుంది."
    },
    {
        question: "ఒక విద్యార్థి గతంలో నేర్చుకున్న నియమాన్ని కొత్త పరిస్థితిలో కూడా ఉపయోగించగలుగుతున్నాడు. ఇది అభ్యసనలో ఏ లక్షణాన్ని సూచిస్తుంది?",
        options: [
            "Transfer of learning",
            "Extinction",
            "Forgetting",
            "Habituation"
        ],
        correct: 0,
        explanation: "Transfer of learning అనేది గతంలో నేర్చుకున్న జ్ఞానం, నైపుణ్యం లేదా నియమాన్ని కొత్త పరిస్థితి లేదా సంబంధిత సమస్యలో విజయవంతంగా ఉపయోగించడం."
    },
    {
        question: "ఒక ఉపాధ్యాయుడు ఒక నైపుణ్యాన్ని చిన్న చిన్న దశలుగా విభజించి, ప్రతి దశను వరుసగా బోధిస్తాడు. ఇది ఏ బోధనా విధానానికి అత్యంత దగ్గరగా ఉంటుంది?",
        options: [
            "Task analysis",
            "Discovery learning",
            "Cooperative learning",
            "Brainstorming"
        ],
        correct: 0,
        explanation: "Task analysisలో సంక్లిష్టమైన నైపుణ్యం లేదా పనిని చిన్న, నిర్వహించగలిగే దశలుగా విభజించి వాటిని క్రమపద్ధతిలో బోధిస్తారు."
    },
    {
        question: "ఒక విద్యార్థి తన సామర్థ్యానికి తగిన సవాలుతో కూడిన పనిని ఎంచుకొని, విజయవంతంగా పూర్తి చేసిన తర్వాత తనపై నమ్మకం పెంచుకుంటాడు. ఇది ప్రధానంగా ఏ భావనతో సంబంధం కలిగి ఉంటుంది?",
        options: [
            "Self-efficacy",
            "Sensory adaptation",
            "Perceptual constancy",
            "Cognitive dissonance"
        ],
        correct: 0,
        explanation: "Self-efficacy అనేది ఒక నిర్దిష్ట పనిని విజయవంతంగా నిర్వహించగలననే వ్యక్తి యొక్క స్వీయ నమ్మకాన్ని సూచిస్తుంది; విజయవంతమైన అనుభవాలు దీనిని పెంచుతాయి."
    },
    {
        question: "బుద్ధిమత్తను రెండు ప్రధాన భాగాలుగా Fluid Intelligence మరియు Crystallized Intelligenceగా వివరించిన సిద్ధాంతకర్త ఎవరు?",
        options: [
            "Charles Spearman",
            "Raymond Cattell",
            "Howard Gardner",
            "Robert Sternberg"
        ],
        correct: 1,
        explanation: "Raymond Cattell బుద్ధిమత్తను Fluid Intelligence మరియు Crystallized Intelligenceగా విభజించాడు. Fluid intelligence కొత్త సమస్యలను పరిష్కరించడాన్ని, crystallized intelligence నేర్చుకున్న జ్ఞానాన్ని సూచిస్తుంది."
    },
    {
        question: "Spearman యొక్క బుద్ధిమత్త సిద్ధాంతంలో g అనే సంకేతం దేనిని సూచిస్తుంది?",
        options: [
            "Group intelligence",
            "General intelligence",
            "Genetic intelligence",
            "Growth intelligence"
        ],
        correct: 1,
        explanation: "Spearman యొక్క రెండు-కారకాల సిద్ధాంతంలో g అనేది General intelligenceను సూచిస్తుంది. ఇది వివిధ మేధోపరమైన పనులలో సాధారణంగా పనిచేసే సామర్థ్యంగా భావించబడుతుంది."
    },
    {
        question: "ఒక విద్యార్థి తనకు ఇచ్చిన సమాచారాన్ని అర్థవంతమైన నమూనాగా నిర్వహించి దాని ఆధారంగా అర్థాన్ని నిర్మించుకుంటాడు. ఇది ప్రధానంగా ఏ ప్రక్రియకు సంబంధించినది?",
        options: [
            "Perception",
            "Reflex action",
            "Motor maturation",
            "Physical growth"
        ],
        correct: 0,
        explanation: "Perception అనేది ఇంద్రియాల ద్వారా అందిన సమాచారాన్ని ఎంపిక చేసి, నిర్వహించి, అర్థవంతంగా వ్యాఖ్యానించే మానసిక ప్రక్రియ."
    },
    {
        question: "ఒక ఉపాధ్యాయుడు విద్యార్థులందరికీ ఒకే విధమైన బోధనా పద్ధతిని ఉపయోగించకుండా, వారి అవసరాలు మరియు సామర్థ్యాలకు అనుగుణంగా పద్ధతులను మార్చుతున్నాడు. ఇది దేనికి ఉదాహరణ?",
        options: [
            "Differentiated instruction",
            "Rote learning",
            "Programmed extinction",
            "Fixed curriculum"
        ],
        correct: 0,
        explanation: "Differentiated instructionలో విద్యార్థుల వ్యక్తిగత అవసరాలు, సామర్థ్యాలు, ఆసక్తులు మరియు నేర్చుకునే విధానాలను పరిగణించి బోధనను అనుకూలీకరిస్తారు."
    },
    {
        question: "IEPలో ఒక విద్యార్థి సంవత్సరాంతానికి “100లో కనీసం 80 సందర్భాల్లో రెండు అంకెల కూడికను స్వతంత్రంగా పరిష్కరించగలగాలి” అని పేర్కొన్నారు. ఈ లక్ష్యంలోని ముఖ్యమైన లక్షణం ఏమిటి?",
        options: [
            "లక్ష్యం కొలవలేనిది",
            "లక్ష్యం measurable",
            "లక్ష్యం కేవలం సాధారణమైనది",
            "లక్ష్యం విద్యార్థి అవసరాలకు సంబంధం లేనిది"
        ],
        correct: 1,
        explanation: "ఈ IEP లక్ష్యంలో 100లో 80 విజయాలు అనే స్పష్టమైన ప్రమాణం ఉంది. అందువల్ల విద్యార్థి పురోగతిని సంఖ్యాపరంగా కొలవడానికి ఇది measurable objective."
    },
    {
        question: "IEPలో Present Level of Academic Achievement and Functional Performance (PLAAFP) ప్రధానంగా దేనిని వివరిస్తుంది?",
        options: [
            "విద్యార్థి భవిష్యత్తులో చేయాల్సిన వృత్తిని మాత్రమే",
            "విద్యార్థి ప్రస్తుత విద్యా మరియు కార్యనిర్వహణ స్థితిని",
            "పాఠశాల మొత్తం విద్యా ఫలితాలను",
            "ఉపాధ్యాయుని బోధనా పనితీరును"
        ],
        correct: 1,
        explanation: "PLAAFP విద్యార్థి ప్రస్తుత విద్యా సాధన, కార్యనిర్వహణ పనితీరు, బలాలు, అవసరాలు మరియు వైకల్యం ప్రభావాన్ని వివరిస్తుంది."
    },
    {
        question: "ఒక సమగ్ర తరగతిలో దృష్టి లోపం ఉన్న విద్యార్థికి అదే పాఠ్యాంశాన్ని Braille లేదా screen reader ద్వారా అందిస్తున్నారు. ఇది ప్రధానంగా ఏ భావనకు ఉదాహరణ?",
        options: [
            "Accommodation",
            "Grade retention",
            "Curriculum elimination",
            "Segregation"
        ],
        correct: 0,
        explanation: "Accommodationలో విద్యార్థి నేర్చుకోవాల్సిన కంటెంట్ లేదా లక్ష్యాన్ని తప్పనిసరిగా మార్చకుండా, సమాచారానికి ప్రాప్యత కల్పించే విధానాన్ని మార్చవచ్చు."
    },
    {
        question: "క్రింది వాటిలో accommodation మరియు modification మధ్య సరైన వ్యత్యాసాన్ని సూచించేది ఏది?",
        options: [
            "Accommodationలో నేర్చుకునే లక్ష్యం మారుతుంది; modificationలో మారదు.",
            "Accommodationలో విద్యార్థి నేర్చుకునే విధానం/ప్రాప్యతలో మార్పు ఉండవచ్చు; modificationలో అభ్యసన అంచనాలు లేదా కంటెంట్ స్థాయిలో మార్పు ఉండవచ్చు.",
            "రెండింటికీ ఎటువంటి తేడా లేదు.",
            "Modification అనేది కేవలం seating arrangementకు మాత్రమే సంబంధించినది."
        ],
        correct: 1,
        explanation: "Accommodation ప్రాప్యత లేదా స్పందించే విధానాన్ని మార్చవచ్చు; modification మాత్రం విద్యార్థి నుంచి ఆశించే కంటెంట్, స్థాయి లేదా అభ్యసన ప్రమాణాలను మార్చవచ్చు."
    },
    {
        question: "Universal Design for Learning (UDL)లో “Multiple Means of Representation” ప్రధానంగా దేనిని సూచిస్తుంది?",
        options: [
            "విద్యార్థులందరికీ ఒకే పరీక్షను ఇవ్వడం",
            "సమాచారాన్ని విద్యార్థులకు వివిధ విధాలుగా అందించడం",
            "కేవలం మౌఖిక బోధనను ఉపయోగించడం",
            "పాఠ్యాంశాన్ని పూర్తిగా తొలగించడం"
        ],
        correct: 1,
        explanation: "UDLలో Multiple Means of Representation అనేది సమాచారాన్ని దృశ్య, శ్రవణ, పాఠ్య లేదా ఇతర అనుకూల మార్గాల ద్వారా వివిధ విధాలుగా అందించడం."
    },
    {
        question: "ఒక విద్యార్థి రాతపూర్వక సమాధానం ఇవ్వడంలో ఇబ్బంది పడుతున్నప్పటికీ, తన జ్ఞానాన్ని మౌఖికంగా స్పష్టంగా వ్యక్తపరచగలడు. సముచిత accommodation ఏది?",
        options: [
            "పరీక్షను రద్దు చేయడం",
            "మౌఖిక సమాధానం ఇవ్వడానికి అవకాశం కల్పించడం",
            "విద్యార్థిని తరగతి నుండి తొలగించడం",
            "పాఠ్యాంశాన్ని మార్చకుండా పరీక్షలో సున్నా ఇవ్వడం"
        ],
        correct: 1,
        explanation: "మౌఖికంగా సమాధానం ఇవ్వడం విద్యార్థి జ్ఞానాన్ని ప్రత్యామ్నాయ స్పందన విధానం ద్వారా వ్యక్తపరచడానికి సహాయపడుతుంది, అయితే అభ్యసన లక్ష్యం తప్పనిసరిగా మారదు."
    },
    {
        question: "బోధన ప్రారంభించే ముందు విద్యార్థి యొక్క ప్రస్తుత నైపుణ్య స్థాయిని తెలుసుకోవడానికి నిర్వహించే assessmentను సాధారణంగా ఏమంటారు?",
        options: [
            "Summative assessment",
            "Diagnostic assessment",
            "Terminal assessment",
            "Normative assessment"
        ],
        correct: 1,
        explanation: "Diagnostic assessment బోధన ప్రారంభానికి ముందు విద్యార్థి యొక్క ప్రస్తుత జ్ఞానం, నైపుణ్యాలు, బలాలు మరియు అవసరాలను గుర్తించడానికి ఉపయోగించబడుతుంది."
    },
    {
        question: "బోధన జరుగుతున్న సమయంలో విద్యార్థి పురోగతిని తెలుసుకొని అవసరమైన బోధనా మార్పులు చేయడానికి ఉపయోగించే assessment ఏది?",
        options: [
            "Formative assessment",
            "Summative assessment",
            "Placement assessment",
            "Intelligence testing"
        ],
        correct: 0,
        explanation: "Formative assessment బోధన కొనసాగుతున్న సమయంలో విద్యార్థి పురోగతిపై సమాచారం అందిస్తుంది. ఉపాధ్యాయుడు ఆ సమాచారం ఆధారంగా బోధనా వ్యూహాలను మార్చవచ్చు."
    },
    {
        question: "ఒక పరీక్షలో విద్యార్థి పొందిన స్కోర్‌ను నిర్దిష్టమైన అభ్యసన ప్రమాణంతో పోల్చి అతను ఆ ప్రమాణాన్ని చేరుకున్నాడా లేదా తెలుసుకుంటే, అది ఏ assessment?",
        options: [
            "Norm-referenced assessment",
            "Criterion-referenced assessment",
            "Projective assessment",
            "Sociometric assessment"
        ],
        correct: 1,
        explanation: "Criterion-referenced assessmentలో విద్యార్థి పనితీరును ఇతర విద్యార్థులతో కాకుండా ముందుగా నిర్ణయించిన నిర్దిష్ట అభ్యసన ప్రమాణాలు లేదా criteriaతో పోలుస్తారు."
    },
    {
        question: "ఒక విద్యార్థి గణితంలో 80 మార్కులు సాధించాడు. తరగతిలోని మిగతా విద్యార్థులతో పోల్చి అతని స్థానం తెలుసుకోవడం ప్రధాన ఉద్దేశ్యంగా ఉంటే, ఏ రకమైన assessment ఎక్కువగా అనుకూలంగా ఉంటుంది?",
        options: [
            "Criterion-referenced",
            "Norm-referenced",
            "Diagnostic",
            "Informal observation"
        ],
        correct: 1,
        explanation: "Norm-referenced assessmentలో విద్యార్థి స్కోర్‌ను ఇతర విద్యార్థుల పనితీరుతో పోల్చి సాపేక్ష స్థానం లేదా ర్యాంక్ వంటి సమాచారాన్ని తెలుసుకుంటారు."
    },
    {
        question: "ఒక తరగతిలో 5 మంది విద్యార్థుల మార్కులు 10, 20, 30, 40, 50. వారి arithmetic mean ఎంత?",
        options: [
            "25",
            "30",
            "35",
            "40"
        ],
        correct: 1,
        explanation: "Arithmetic mean కోసం అన్ని స్కోర్లను కలిపి మొత్తం పరిశీలనల సంఖ్యతో భాగించాలి. (10 + 20 + 30 + 40 + 50) ÷ 5 = 30."
    },
    {
        question: "ఒక విద్యార్థి మార్కులు 12, 15, 18, 21, 24. ఈ డేటా యొక్క median ఎంత?",
        options: [
            "15",
            "18",
            "20",
            "21"
        ],
        correct: 1,
        explanation: "Median అనేది క్రమపద్ధతిలో అమర్చిన డేటాలో మధ్యలో ఉన్న విలువ. ఇక్కడ ఐదు స్కోర్లు ఉన్నాయి, కాబట్టి మూడవ విలువ 18 median అవుతుంది."
    },
    {
        question: "ఒక assessmentలో విద్యార్థుల స్కోర్లు 8, 10, 12, 14, 16గా ఉన్నాయి. ఈ డేటా యొక్క range ఎంత?",
        options: [
            "6",
            "8",
            "10",
            "12"
        ],
        correct: 2,
        explanation: "Range అనేది గరిష్ఠ విలువ మరియు కనిష్ఠ విలువ మధ్య తేడా. ఇక్కడ గరిష్ఠ స్కోర్ 16, కనిష్ఠ స్కోర్ 8; కాబట్టి range 8."
    },
    {
        question: "ఒక ఉపాధ్యాయుడు ఇద్దరు విద్యార్థుల సగటు మార్కులు సమానంగా ఉన్నప్పటికీ, వారి మార్కుల వ్యాప్తి చాలా భిన్నంగా ఉందని గమనించాడు. ఈ వ్యత్యాసాన్ని తెలుసుకోవడానికి ఏ గణాంక పరిమాణం అత్యంత అనుకూలంగా ఉంటుంది?",
        options: [
            "Mean",
            "Median",
            "Standard deviation",
            "Mode"
        ],
        correct: 2,
        explanation: "Standard deviation డేటా విలువలు mean చుట్టూ ఎంతగా వ్యాపించి ఉన్నాయో కొలుస్తుంది. అందువల్ల సమాన mean ఉన్న సమూహాల variabilityని పోల్చడానికి ఉపయోగపడుతుంది."
    },
    {
        question: "క్రింది వాటిలో standard deviation గురించి సరైన ప్రకటనలను గుర్తించండి.\n\ni) ఇది డేటా యొక్క వ్యాప్తిని కొలుస్తుంది.\nii) అన్ని స్కోర్లు meanకు దగ్గరగా ఉంటే సాధారణంగా SD తక్కువగా ఉంటుంది.\niii) ఇది central tendency యొక్క ఒక కొలత.",
        options: [
            "i మాత్రమే",
            "i మరియు ii మాత్రమే",
            "ii మరియు iii మాత్రమే",
            "i, ii మరియు iii"
        ],
        correct: 1,
        explanation: "Standard deviation డేటా వ్యాప్తిని కొలుస్తుంది. విలువలు meanకు దగ్గరగా ఉంటే variability తక్కువగా ఉండి SD సాధారణంగా తక్కువగా ఉంటుంది; ఇది central tendency కాదు."
    },
    {
        question: "ఒక విద్యార్థి assessmentలో 100లో 72 మార్కులు సాధించాడు. ఉపాధ్యాయుడు అతని శాతం స్కోర్‌ను తెలుసుకోవాలనుకుంటే అది ఎంత?",
        options: [
            "62%",
            "72%",
            "78%",
            "82%"
        ],
        correct: 1,
        explanation: "శాతం స్కోర్ = (సాధించిన మార్కులు ÷ మొత్తం మార్కులు) × 100. కాబట్టి (72 ÷ 100) × 100 = 72 శాతం."
    },
    {
        question: "ఒక ఉపాధ్యాయుడు ఒక విద్యార్థి ప్రవర్తనను పర్యవేక్షిస్తూ, ప్రవర్తన సంభవించిన వెంటనే దాని ముందు జరిగిన సంఘటన మరియు తరువాత వచ్చిన పరిణామాన్ని నమోదు చేస్తున్నాడు. ఈ రికార్డింగ్ విధానం ఏది?",
        options: [
            "Anecdotal record",
            "ABC recording",
            "Sociogram",
            "Checklist"
        ],
        correct: 1,
        explanation: "ABC recordingలో Antecedent, Behavior, Consequence అనే మూడు అంశాలను నమోదు చేస్తారు. ప్రవర్తనకు ముందు జరిగిన సంఘటన, ప్రవర్తన, తరువాతి పరిణామం ఇందులో ఉంటాయి."
    },
    {
        question: "ఒక విద్యార్థి తరగతి పనిని పూర్తి చేయడానికి పదేపదే ఉపాధ్యాయుడి సూచన కోసం ఎదురుచూస్తున్నాడు. స్వతంత్రతను పెంచడానికి ఉపాధ్యాయుడు మొదట స్పష్టమైన prompt ఇచ్చి, తరువాత దానిని క్రమంగా తగ్గిస్తాడు. దీనిని ఏమంటారు?",
        options: [
            "Prompt fading",
            "Punishment",
            "Extinction",
            "Overcorrection"
        ],
        correct: 0,
        explanation: "Prompt fadingలో ప్రారంభంలో అవసరమైన సూచన లేదా సహాయాన్ని అందించి, విద్యార్థి స్వతంత్రంగా స్పందించడం నేర్చుకున్న కొద్దీ ఆ promptను క్రమంగా తగ్గిస్తారు."
    },
    {
        question: "ఒక ఉపాధ్యాయుడు విద్యార్థికి “పుస్తకం తీసుకో” అని చెప్పి, తరువాత “పుస్తకం తెరువు”, “సరైన పేజీ కనుగొను” వంటి దశలను వరుసగా బోధిస్తున్నాడు. ఈ విధానం ప్రధానంగా దేనిపై ఆధారపడి ఉంటుంది?",
        options: [
            "Task analysis",
            "Free association",
            "Insight learning",
            "Trial-and-error without guidance"
        ],
        correct: 0,
        explanation: "Task analysisలో ఒక సంక్లిష్టమైన పనిని వరుసగా ఉండే చిన్న దశలుగా విభజిస్తారు. ప్రతి దశను బోధించడం ద్వారా మొత్తం నైపుణ్యాన్ని అభివృద్ధి చేస్తారు."
    },
    {
        question: "ఒక విద్యార్థి సరైన సమాధానం చెప్పినప్పుడు ఉపాధ్యాయుడు టోకెన్ ఇస్తాడు. నిర్దిష్ట సంఖ్యలో టోకెన్లు సంపాదించిన తర్వాత విద్యార్థి ఇష్టమైన కార్యకలాపాన్ని పొందుతాడు. ఇది ఏ పద్ధతికి ఉదాహరణ?",
        options: [
            "Token economy",
            "Flooding",
            "Response cost",
            "Time-out"
        ],
        correct: 0,
        explanation: "Token economyలో లక్ష్య ప్రవర్తనకు tokens వంటి conditioned reinforcers ఇస్తారు. నిర్ణీత సంఖ్యలో tokens సంపాదించినప్పుడు వాటిని ఇష్టమైన కార్యకలాపం లేదా rewardగా మార్చుకోవచ్చు."
    },
    {
        question: "ఒక సమగ్ర తరగతిలో ఒకే పాఠ్యాంశాన్ని బోధిస్తున్నప్పుడు ఉపాధ్యాయుడు దృశ్య సహాయాలు, మౌఖిక వివరణ, చేతితో చేసే కార్యకలాపాలు మరియు డిజిటల్ వనరులను ఉపయోగిస్తున్నాడు. ఈ విధానం ప్రధానంగా దేనిని ప్రతిబింబిస్తుంది?",
        options: [
            "Multi-sensory approach",
            "Single-channel instruction",
            "Rote memorization",
            "Competitive learning"
        ],
        correct: 0,
        explanation: "Multi-sensory approachలో విద్యార్థుల అభ్యసనకు దృశ్య, శ్రవణ, స్పర్శ లేదా క్రియాత్మక వంటి ఒకటి కంటే ఎక్కువ ఇంద్రియ మార్గాలను ఉపయోగిస్తారు."
    },
    {
        question: "క్రింది జతలలో సరైనది ఏది?",
        options: [
            "Intrinsic motivation — బాహ్య బహుమతి కోసం మాత్రమే నేర్చుకోవడం",
            "Extrinsic motivation — అంతర్గత ఆసక్తి వల్ల మాత్రమే నేర్చుకోవడం",
            "Self-efficacy — ఒక పని విజయవంతంగా చేయగలననే వ్యక్తి నమ్మకం",
            "Attention — ఇప్పటికే నేర్చుకున్న సమాచారాన్ని దీర్ఘకాలం నిల్వచేయడం"
        ],
        correct: 2,
        explanation: "Self-efficacy అనేది ఒక వ్యక్తి నిర్దిష్ట పనిని విజయవంతంగా చేయగలననే నమ్మకం. మిగిలిన జతలు సంబంధిత భావనలకు తప్పుగా నిర్వచనాలు ఇస్తున్నాయి."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి:\n\ni) Inclusive educationలో విద్యార్థులను వారి వైకల్యం ఆధారంగా సాధారణ విద్యా వాతావరణం నుండి తప్పించడం ప్రధాన లక్ష్యం.\nii) Inclusive educationలో అవసరానికి అనుగుణంగా reasonable accommodations అందించవచ్చు.\niii) ప్రత్యేక అవసరాలు ఉన్న విద్యార్థుల విద్యా భాగస్వామ్యానికి classroom adaptations ఉపయోగపడవచ్చు.\n\nసరైన సమాధానం:",
        options: [
            "i మాత్రమే",
            "ii మాత్రమే",
            "ii మరియు iii మాత్రమే",
            "i, ii మరియు iii"
        ],
        correct: 2,
        explanation: "Inclusive educationలో విద్యార్థుల భాగస్వామ్యాన్ని పెంచేందుకు reasonable accommodations మరియు classroom adaptations ఉపయోగించవచ్చు. విద్యార్థులను వైకల్యం కారణంగా తొలగించడం దీని లక్ష్యం కాదు."
    },
    {
        question: "క్రింది వాటిని IEP ప్రక్రియలో సాధారణంగా జరిగే క్రమంలో అమర్చండి:\n\ni) ప్రస్తుత పనితీరు/అవసరాల గుర్తింపు\nii) కొలవగలిగే లక్ష్యాల నిర్ణయం\niii) తగిన బోధనా సేవలు మరియు strategies ఎంపిక\niv) పురోగతి పర్యవేక్షణ మరియు పునఃసమీక్ష",
        options: [
            "i → ii → iii → iv",
            "ii → i → iv → iii",
            "iii → i → ii → iv",
            "i → iii → ii → iv"
        ],
        correct: 0,
        explanation: "IEP సాధారణంగా విద్యార్థి ప్రస్తుత స్థితి మరియు అవసరాలను గుర్తించడం, measurable goals నిర్ణయించడం, సేవలు మరియు strategies ఎంపిక, తరువాత progress monitoringతో కొనసాగుతుంది."
    },
    {
        question: "క్రింది జతలను పరిశీలించండి:\n\nఅభ్యసన సిద్ధాంతం | ప్రధాన భావన\ni) Skinner | A) Observational learning\nii) Bandura | B) Operant conditioning\niii) Pavlov | C) Classical conditioning\niv) Vygotsky | D) Zone of Proximal Development\n\nసరైన జత ఏది?",
        options: [
            "i-B, ii-A, iii-C, iv-D",
            "i-A, ii-B, iii-D, iv-C",
            "i-C, ii-D, iii-B, iv-A",
            "i-D, ii-C, iii-A, iv-B"
        ],
        correct: 0,
        explanation: "Skinner operant conditioningతో, Bandura observational learningతో, Pavlov classical conditioningతో, Vygotsky Zone of Proximal Developmentతో సంబంధం కలిగి ఉన్నారు."
    },
    {
        question: "ఒక ఉపాధ్యాయుడు ఒక విద్యార్థి assessment dataను పరిశీలించినప్పుడు, మొత్తం మార్కుల సగటు సరైన స్థాయిలో ఉన్నప్పటికీ, కొన్ని నిర్దిష్ట నైపుణ్యాలలో విద్యార్థి నిరంతరం తక్కువ స్కోర్లు సాధిస్తున్నట్లు గుర్తించాడు. ఈ సమాచారం ఆధారంగా ఉపాధ్యాయుడు చేయవలసిన అత్యంత సముచితమైన తదుపరి చర్య ఏది?",
        options: [
            "మొత్తం తరగతికి అదే బోధనను కొనసాగించడం",
            "తక్కువగా ఉన్న నైపుణ్యాలను గుర్తించి targeted instructional intervention రూపొందించడం",
            "విద్యార్థి యొక్క అన్ని స్కోర్లను తొలగించడం",
            "విద్యార్థిని వెంటనే తదుపరి తరగతికి పంపించడం"
        ],
        correct: 1,
        explanation: "Assessment dataలో నిర్దిష్ట నైపుణ్య లోపాలు కనిపిస్తే, వాటిని గుర్తించి targeted instructional intervention రూపొందించడం విద్యార్థి అవసరాలకు అనుగుణమైన data-based instructional decision."
    }
];