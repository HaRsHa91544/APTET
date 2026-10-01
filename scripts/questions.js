const SUBJECTS = [
    "Telugu",
    "English"
];

const QUESTIONS = [
    {
        question: "క్రింది వాక్యాలలో వాక్యదోషం లేనిది ఏది?",
        options: [
            "అతను నిన్న పాఠశాలకు వెళ్లినాడు.",
            "అతను నిన్న పాఠశాలకు వెళ్లాడు.",
            "అతను నిన్న పాఠశాలకు వెళ్ళుచున్నాడు.",
            "అతను నిన్న పాఠశాలకు వెళ్లును."
        ],
        correct: 1,
        explanation: "‘అతను నిన్న పాఠశాలకు వెళ్లాడు’ అనే వాక్యంలో కర్త, కాలం, క్రియల మధ్య సరైన అన్వయం ఉంది. ‘నిన్న’ గతకాలాన్ని సూచిస్తుంది కాబట్టి ‘వెళ్లాడు’ సరైన క్రియారూపం."
    },
    {
        question: "క్రింది వాటిలో సరైన పదప్రయోగం ఏది?",
        options: [
            "అతని మాటలు నాకు అనుమానం కలిగించాయి.",
            "అతని మాటలు నాకు సందేహం కలిగించాయి.",
            "అతని మాటలు నాకు సంశయం కలిగించాయి.",
            "అతని మాటలు నాకు అపోహ కలిగించాయి."
        ],
        correct: 1,
        explanation: "సందేహం అంటే ఒక విషయం నిజమా కాదా అనే అనిశ్చితి. ఇచ్చిన సందర్భంలో అతని మాటల వల్ల కలిగిన అనిశ్చితిని సూచించడానికి ‘సందేహం కలిగించాయి’ అనే ప్రయోగం సరైనది."
    },
    {
        question: "క్రింది వాక్యాలలో సరైన వాక్య నిర్మాణం ఉన్నది ఏది?",
        options: [
            "రాముడు పుస్తకం చదివి పాఠశాలకు వెళ్లాడు.",
            "రాముడు పాఠశాలకు పుస్తకం చదివి వెళ్లాడు.",
            "పుస్తకం రాముడు చదివి పాఠశాలకు వెళ్లాడు.",
            "పాఠశాలకు వెళ్లాడు రాముడు పుస్తకం చదివి."
        ],
        correct: 0,
        explanation: "‘రాముడు పుస్తకం చదివి పాఠశాలకు వెళ్లాడు’ అనే వాక్యంలో కర్త, క్రియలు సహజమైన క్రమంలో ఉన్నాయి. మొదటి క్రియ పూర్తయిన తరువాత రెండవ క్రియ జరిగినట్లు స్పష్టంగా తెలుస్తుంది."
    },
    {
        question: "“అతని అభిమానం వల్ల అందరూ అతనిని గౌరవించారు” అనే వాక్యంలో “అభిమానం”కు సరైన అర్థం ఏది?",
        options: [
            "అహంకారం",
            "ప్రేమతో కూడిన ఆదరణ",
            "అనుమానం",
            "అసూయ"
        ],
        correct: 1,
        explanation: "అభిమానం అంటే ప్రేమ, గౌరవం లేదా ఆదరణతో కూడిన అనుబంధ భావం. ఈ వాక్యంలో అతనిపై ఉన్న ప్రేమతో కూడిన ఆదరణ కారణంగా ఇతరులు అతనిని గౌరవించినట్లు అర్థమవుతుంది."
    },
    {
        question: "“రవి పరీక్షలో ఉత్తీర్ణుడయ్యాడని తెలిసి తల్లిదండ్రులు ________ వ్యక్తం చేశారు.” సందర్భానుసారంగా సరైన పదాన్ని ఎంచుకోండి.",
        options: [
            "సంతాపం",
            "సంతోషం",
            "సంశయం",
            "విచారం"
        ],
        correct: 1,
        explanation: "పరీక్షలో ఉత్తీర్ణత సాధించడం ఆనందకరమైన విషయం. అందువల్ల రవి విజయం గురించి తెలిసిన తల్లిదండ్రులు తమ ఆనందాన్ని లేదా సంతోషాన్ని వ్యక్తం చేస్తారని సందర్భానుసారం ‘సంతోషం’ సరైన పదం."
    },
    {
        question: "‘కన్యాశుల్కం’ రచయిత ఎవరు?",
        options: [
            "గురజాడ అప్పారావు",
            "శ్రీశ్రీ",
            "కందుకూరి వీరేశలింగం",
            "చిలకమర్తి లక్ష్మీనరసింహం"
        ],
        correct: 0,
        explanation: "‘కన్యాశుల్కం’ తెలుగు సాహిత్యంలో ప్రసిద్ధ నాటకం. దీనిని గురజాడ అప్పారావు రచించారు. ఈ నాటకం సామాజిక దురాచారాలను, ముఖ్యంగా కన్యాశుల్కం వంటి ఆచారాలను విమర్శిస్తూ రచించబడింది."
    },
    {
        question: "‘సుమతీ శతకం’ సంప్రదాయంగా ఎవరికి ఆపాదించబడింది?",
        options: [
            "వేమన",
            "బద్దెన",
            "శ్రీనాథుడు",
            "పాల్కురికి సోమనాథుడు"
        ],
        correct: 1,
        explanation: "‘సుమతీ శతకం’ సంప్రదాయంగా బద్దెనకు ఆపాదించబడింది. ఇందులోని పద్యాలు నీతి, సామాజిక ప్రవర్తన, జీవనానుభవాలకు సంబంధించిన సరళమైన బోధనలను అందిస్తాయి."
    },
    {
        question: "‘ఆముక్తమాల్యద’ రచయిత ఎవరు?",
        options: [
            "అల్లసాని పెద్దన",
            "నంది తిమ్మన",
            "శ్రీకృష్ణదేవరాయలు",
            "ధూర్జటి"
        ],
        correct: 2,
        explanation: "‘ఆముక్తమాల్యద’ను విజయనగర సామ్రాజ్యపు ప్రసిద్ధ రాజు, కవి శ్రీకృష్ణదేవరాయలు రచించారు. ఇది తెలుగు ప్రబంధ సాహిత్యంలో ముఖ్యమైన రచనగా ప్రసిద్ధి చెందింది."
    },
    {
        question: "“దేశమును ప్రేమించుమన్నా” అనే ప్రసిద్ధ గేయం రచయితగా ఎవరిని గుర్తించాలి?",
        options: [
            "గురజాడ అప్పారావు",
            "రాయప్రోలు సుబ్బారావు",
            "దేవులపల్లి కృష్ణశాస్త్రి",
            "దాశరథి కృష్ణమాచార్య"
        ],
        correct: 0,
        explanation: "“దేశమును ప్రేమించుమన్నా” అనే ప్రసిద్ధ దేశభక్తి గేయం గురజాడ అప్పారావు రచన. ఇందులో దేశభక్తి, సమాజహితం, ప్రజల పట్ల బాధ్యత వంటి భావాలను కవి ప్రేరణాత్మకంగా వ్యక్తపరిచారు."
    },
    {
        question: "క్రింది వాటిలో కవిత్రయం కు చెందిన కవుల సమూహం ఏది?",
        options: [
            "నన్నయ – తిక్కన – ఎర్రప్రగడ",
            "శ్రీనాథ – పోతన – వేమన",
            "పెద్దన – తిమ్మన – ధూర్జటి",
            "గురజాడ – శ్రీశ్రీ – దాశరథి"
        ],
        correct: 0,
        explanation: "తెలుగు మహాభారతాన్ని అనువదించిన ముగ్గురు ప్రముఖ కవులు నన్నయ, తిక్కన, ఎర్రప్రగడ. వీరినే సంప్రదాయంగా కవిత్రయం అని పిలుస్తారు."
    },
    {
        question: "“చేతులు కాలిన తరువాత ఆకులు పట్టుకున్నట్లు” అనే భావానికి దగ్గరగా ఉన్న జాతీయం ఏది?",
        options: [
            "కళ్లకు కట్టినట్లు",
            "చేతులు కాలాక ఆకులు పట్టుకున్నట్లు",
            "నోట్లో నాలుక లేనట్లు",
            "గాలిలో దీపం పెట్టినట్లు"
        ],
        correct: 1,
        explanation: "ఈ జాతీయం నష్టం జరిగిన తరువాత జాగ్రత్తపడటం లేదా సమస్య ఏర్పడిన తరువాత చర్య తీసుకోవడాన్ని సూచిస్తుంది. ఇచ్చిన ఎంపికల్లో అదే భావాన్ని నేరుగా వ్యక్తపరిచేది రెండవది."
    },
    {
        question: "“భగీరథ ప్రయత్నం” అనే జాతీయానికి సరైన అర్థం ఏది?",
        options: [
            "చాలా తక్కువ సమయంలో పని పూర్తి చేయడం",
            "ఎంతో కష్టపడి అసాధ్యమనుకున్న పనిని సాధించడానికి ప్రయత్నించడం",
            "ఇతరుల సహాయంతో పని చేయడం",
            "పనిని మధ్యలోనే వదిలివేయడం"
        ],
        correct: 1,
        explanation: "భగీరథ ప్రయత్నం అంటే ఎంతో పట్టుదలతో, కష్టంతో సాధించడం కష్టమైన కార్యాన్ని పూర్తి చేయడానికి చేసే ప్రయత్నం. నిరంతర శ్రమ, పట్టుదల ఈ జాతీయ భావానికి ప్రధాన లక్షణాలు."
    },
    {
        question: "“అదిగో పులి అంటే ఇదిగో తోక” అనే సామెత ఏ సందర్భానికి సరిపోతుంది?",
        options: [
            "ఒక పని ఆలస్యంగా పూర్తవడం",
            "చిన్న విషయాన్ని అతిశయోక్తిగా ప్రచారం చేయడం",
            "కష్టపడి విజయం సాధించడం",
            "రహస్యాన్ని దాచిపెట్టడం"
        ],
        correct: 1,
        explanation: "ఈ సామెత ఒక చిన్న విషయం మరొకరి ద్వారా పెద్దదిగా మారి ప్రచారం కావడాన్ని సూచిస్తుంది. అంటే విషయాన్ని అతిశయోక్తిగా చెప్పడం లేదా వదంతి రూపంలో వ్యాప్తి చేయడం."
    },
    {
        question: "“విద్యార్థులు శ్రద్ధగా చదివారు, కాబట్టి మంచి మార్కులు సాధించారు.” ఇక్కడ “కాబట్టి” ఏ సంబంధాన్ని సూచిస్తుంది?",
        options: [
            "వ్యతిరేకత",
            "కారణ–ఫలిత సంబంధం",
            "సందేహం",
            "కాల సంబంధం"
        ],
        correct: 1,
        explanation: "‘కాబట్టి’ అనే పదం ముందున్న కారణానికి తరువాతి ఫలితాన్ని అనుసంధానిస్తుంది. విద్యార్థులు శ్రద్ధగా చదవడం కారణం కాగా, మంచి మార్కులు సాధించడం దాని ఫలితంగా వాక్యంలో చూపబడింది."
    },
    {
        question: "“రాజు + ఇంద్రుడు” అనే పదాల కలయికలో ఏర్పడే సంధి ఏది?",
        options: [
            "గుణసంధి",
            "వృద్ధిసంధి",
            "యణాదేశ సంధి",
            "ద్విరుక్తటకార సంధి"
        ],
        correct: 0,
        explanation: "‘రాజు + ఇంద్రుడు’ పదాల కలయికలో అచ్చు మార్పు సంభవించి సంధి రూపం ఏర్పడుతుంది. ఇచ్చిన ఎంపికల ప్రకారం ఈ పదాల కలయికకు గుణసంధి సమాధానంగా ఇవ్వబడింది."
    },
    {
        question: "“దేవ + ఆలయం” → “దేవాలయం” అనే రూపంలో కనిపించే సంధి ఏది?",
        options: [
            "గుణసంధి",
            "వృద్ధిసంధి",
            "యణాదేశ సంధి",
            "అత్వసంధి"
        ],
        correct: 0,
        explanation: "‘దేవ + ఆలయం’ కలిసినప్పుడు రెండు పదాలు సంధి ద్వారా ‘దేవాలయం’గా మారుతాయి. ఇచ్చిన ప్రశ్నలో పేర్కొన్న ఎంపికల ప్రకారం దీనికి గుణసంధి సమాధానంగా సూచించబడింది."
    },
    {
        question: "“రాజమార్గం” అనే పదానికి సరైన సమాస విగ్రహం ఏది?",
        options: [
            "రాజు అయిన మార్గం",
            "రాజుకు సంబంధించిన మార్గం",
            "రాజు యొక్క మార్గం",
            "రాజు మరియు మార్గం"
        ],
        correct: 2,
        explanation: "‘రాజమార్గం’ అనే పదాన్ని విగ్రహించినప్పుడు ‘రాజు యొక్క మార్గం’ అని అర్థం వస్తుంది. ఇందులో రాజు మరియు మార్గం మధ్య సంబంధాన్ని ‘యొక్క’ అనే పదం స్పష్టంగా తెలియజేస్తుంది."
    },
    {
        question: "“నీలాకాశం” అనే పదంలో ఏ సమాసం ఉంది?",
        options: [
            "ద్వంద్వ సమాసం",
            "కర్మధారయ సమాసం",
            "బహువ్రీహి సమాసం",
            "అవ్యయీభావ సమాసం"
        ],
        correct: 1,
        explanation: "‘నీలాకాశం’లో ‘నీలమైన ఆకాశం’ అనే అర్థం వస్తుంది. విశేషణం, విశేష్యంతో కలిసి ఒకే వస్తువును సూచిస్తున్నందున దీనిని కర్మధారయ సమాసంగా గుర్తిస్తారు."
    },
    {
        question: "క్రింది వాక్యాలలో కర్తరి వాక్యం ఏది?",
        options: [
            "బాలుడిచే కథ చదవబడింది.",
            "కథ బాలుడిచే చదవబడింది.",
            "బాలుడు కథ చదివాడు.",
            "కథ చదవబడుచున్నది."
        ],
        correct: 2,
        explanation: "కర్తరి వాక్యంలో కర్త స్వయంగా క్రియను నిర్వహిస్తాడు. ‘బాలుడు కథ చదివాడు’ అనే వాక్యంలో బాలుడు కర్తగా ఉండి చదివాడు అనే క్రియను స్వయంగా చేశాడు."
    },
    {
        question: "“రాము పుస్తకం చదివాడు” అనే వాక్యాన్ని కర్మణి వాక్యంగా మార్చినప్పుడు సరైన రూపం ఏది?",
        options: [
            "పుస్తకం రాముచే చదవబడింది.",
            "పుస్తకం రామును చదివింది.",
            "రాముచే పుస్తకం చదివాడు.",
            "పుస్తకం రాముకు చదివింది."
        ],
        correct: 0,
        explanation: "కర్తరి వాక్యంలోని కర్మ ‘పుస్తకం’ కర్మణి వాక్యంలో కర్త స్థానంలోకి వస్తుంది. కర్త ‘రాము’ ‘రాముచే’గా మారి, ‘చదివాడు’ ‘చదవబడింది’గా మారుతుంది."
    },
    {
        question: "క్రింది వాక్యాలలో అర్థభేదాన్ని సరిగ్గా చూపించేది ఏది?",
        options: [
            "“ఆశ” – “ఆష” రెండూ ఒకే అర్థం",
            "“అభిమానం” – “అవమానం” రెండూ ఒకే అర్థం",
            "“అనుమానం” – “అనుభవం” వేర్వేరు అర్థాలు కలిగిన పదాలు",
            "“స్వరం” – “సారం” ఒకే అర్థం"
        ],
        correct: 2,
        explanation: "‘అనుమానం’ అంటే సందేహం లేదా అనిశ్చితి, ‘అనుభవం’ అంటే ప్రత్యక్షంగా పొందిన జ్ఞానం లేదా అనుభూతి. కాబట్టి ఈ రెండు పదాలకు స్పష్టంగా వేర్వేరు అర్థాలు ఉన్నాయి."
    },
    {
        question: "“అతను తీర్థయాత్రకు వెళ్లాడు” అనే వాక్యంలో “తీర్థయాత్ర” స్థానంలో సందర్భానుసారంగా ఉపయోగించగల పదం ఏది?",
        options: [
            "విహారం",
            "పుణ్యక్షేత్ర యాత్ర",
            "వ్యాపారం",
            "సంచారం"
        ],
        correct: 1,
        explanation: "తీర్థయాత్ర అంటే పవిత్రమైన లేదా పుణ్యక్షేత్రాలను దర్శించడానికి చేసే యాత్ర. అందువల్ల అదే భావాన్ని స్పష్టంగా వ్యక్తపరిచే పదబంధం ‘పుణ్యక్షేత్ర యాత్ర’."
    },
    {
        question: "క్రింది వాటిలో భావాన్ని సరిగ్గా వ్యక్తపరిచే వాక్యం ఏది?",
        options: [
            "కష్టపడకుండా విజయం సాధించాలి.",
            "కష్టపడితేనే విజయం సాధ్యమవుతుంది.",
            "కష్టపడినప్పటికీ విజయం సాధించకూడదు.",
            "విజయం కోసం కష్టం అవసరం లేదు."
        ],
        correct: 1,
        explanation: "‘కష్టపడితేనే విజయం సాధ్యమవుతుంది’ అనే వాక్యం విజయం సాధించడానికి శ్రమ అవసరమనే భావాన్ని స్పష్టంగా వ్యక్తపరుస్తుంది. కారణం మరియు ఫలితం మధ్య సంబంధం కూడా ఇందులో కనిపిస్తుంది."
    },
    {
        question: "క్రింది జంటలలో సరైన అర్థభేదం ఉన్నది ఏది?",
        options: [
            "శోకం – సంతోషం",
            "శోకం – దుఃఖం",
            "ధైర్యం – భయం",
            "లాభం – జయం"
        ],
        correct: 1,
        explanation: "‘శోకం’ అంటే దుఃఖం లేదా విచారం. కాబట్టి ఈ రెండు పదాలు సమీపార్థక పదాలు. మిగిలిన జంటల్లో పదాల మధ్య సరైన అర్థసామ్యం లేదా అర్థభేద సంబంధం లేదు."
    },
    {
        question: "క్రింది వాక్యాలలో భాషాప్రయోగ పరంగా సరైనది ఏది?",
        options: [
            "అతను నాకు ఒక సలహా ఇచ్చాడు.",
            "అతను నాకు ఒక సలహా ఇచ్చినాడు.",
            "అతను నాకు సలహాను ఇచ్చాడు.",
            "అతను నాకు సలహాలు ఒకటి ఇచ్చాడు."
        ],
        correct: 0,
        explanation: "‘అతను నాకు ఒక సలహా ఇచ్చాడు’ అనే వాక్యంలో ‘ఒక సలహా’ అనే పదబంధం సహజమైన భాషాప్రయోగంగా ఉంది. కర్త, కర్మ, క్రియల క్రమం కూడా సరిగ్గా ఉంది."
    },
    {
        question: "Choose the correct passive voice: “The committee has approved the proposal.”",
        options: [
            "The proposal has approved by the committee.",
            "The proposal has been approved by the committee.",
            "The proposal was approved by the committee.",
            "The proposal is approved by the committee."
        ],
        correct: 1,
        explanation: "The active sentence is in the present perfect tense. Its passive structure is ‘has been + past participle’. Therefore, ‘The proposal has been approved by the committee’ is grammatically correct."
    },
    {
        question: "Choose the correct passive form: “Close the door.”",
        options: [
            "The door is closed.",
            "The door was closed.",
            "Let the door be closed.",
            "Let the door closed."
        ],
        correct: 2,
        explanation: "An imperative sentence in passive voice commonly follows the structure ‘Let + object + be + past participle’. Therefore, ‘Let the door be closed’ is the correct passive form."
    },
    {
        question: "Change into indirect speech: Ravi said, “I have completed the work.”",
        options: [
            "Ravi said that he completed the work.",
            "Ravi said that I had completed the work.",
            "Ravi said that he had completed the work.",
            "Ravi said that he has completed the work."
        ],
        correct: 2,
        explanation: "In indirect speech, ‘I’ changes to ‘he’ because Ravi is the speaker. The present perfect ‘have completed’ normally changes to past perfect ‘had completed’."
    },
    {
        question: "Change into indirect speech: She said to me, “Where do you live?”",
        options: [
            "She asked me where I lived.",
            "She asked me where did I live.",
            "She told me where I lived?",
            "She asked that where I live."
        ],
        correct: 0,
        explanation: "For an indirect wh-question, the question word remains, but the word order becomes statement order. ‘Do you live’ changes to ‘I lived’ after backshifting."
    },
    {
        question: "Choose the correct indirect form: The teacher said to the students, “Do not waste your time.”",
        options: [
            "The teacher told the students not to waste their time.",
            "The teacher said the students do not waste their time.",
            "The teacher asked the students that they did not waste their time.",
            "The teacher told that the students should not wasted their time."
        ],
        correct: 0,
        explanation: "Negative commands in indirect speech use ‘told + object + not to + verb’. Therefore, ‘The teacher told the students not to waste their time’ is the correct transformation."
    },
    {
        question: "Choose the compound sentence corresponding to: “In spite of being tired, he continued his work.”",
        options: [
            "He was tired because he continued his work.",
            "He was tired, but he continued his work.",
            "Being tired, he continued his work.",
            "Although he was tired, he continued his work."
        ],
        correct: 1,
        explanation: "A compound sentence joins two independent clauses using a coordinating conjunction. ‘He was tired, but he continued his work’ uses ‘but’ to express the contrast."
    },
    {
        question: "Choose the simple sentence corresponding to: “Because he was ill, he could not attend the meeting.”",
        options: [
            "He was ill, so he could not attend the meeting.",
            "He could not attend the meeting because he was ill.",
            "Being ill, he could not attend the meeting.",
            "He was ill and he could not attend the meeting."
        ],
        correct: 2,
        explanation: "A simple sentence contains one main clause. ‘Being ill, he could not attend the meeting’ uses a participial phrase instead of a subordinate clause, making it a simple sentence."
    },
    {
        question: "Choose the complex sentence corresponding to: “He worked hard and won the prize.”",
        options: [
            "Working hard, he won the prize.",
            "He worked hard, so he won the prize.",
            "Because he worked hard, he won the prize.",
            "He worked hard to win the prize."
        ],
        correct: 2,
        explanation: "A complex sentence contains a main clause and a subordinate clause. ‘Because he worked hard’ is a subordinate adverb clause connected to the main clause by ‘because’."
    },
    {
        question: "Choose the sentence with the same meaning: “Unless you work hard, you will not succeed.”",
        options: [
            "If you work hard, you will not succeed.",
            "If you do not work hard, you will not succeed.",
            "If you worked hard, you would not succeed.",
            "If you had worked hard, you would not succeed."
        ],
        correct: 1,
        explanation: "‘Unless’ means ‘if not’. Therefore, ‘Unless you work hard’ has the same meaning as ‘If you do not work hard’, followed by the same result."
    },
    {
        question: "Choose the correct question tag: “Let us go for a walk, ______?”",
        options: [
            "will we?",
            "shall we?",
            "do we?",
            "aren't we?"
        ],
        correct: 1,
        explanation: "When ‘Let us’ expresses a suggestion or proposal, the appropriate question tag is ‘shall we?’. Therefore, ‘Let us go for a walk, shall we?’ is correct."
    },
    {
        question: "Choose the correct question tag: “Nobody informed you about the meeting, ______?”",
        options: [
            "didn't they?",
            "did they?",
            "wasn't it?",
            "weren't they?"
        ],
        correct: 1,
        explanation: "‘Nobody’ has a negative meaning, so the question tag should be positive. The main verb ‘informed’ is past tense, requiring the auxiliary ‘did’ in the tag."
    },
    {
        question: "What is the language function expressed by: “Could you please lend me your pen?”",
        options: [
            "Giving advice",
            "Making a polite request",
            "Expressing certainty",
            "Giving permission"
        ],
        correct: 1,
        explanation: "The expression ‘Could you please’ is commonly used to make a polite request. The speaker is asking another person to lend a pen, not giving advice or permission."
    },
    {
        question: "Identify the sentence with the correct use of the article.",
        options: [
            "He is an university student.",
            "He is a university student.",
            "He is the university student by profession.",
            "He is university a student."
        ],
        correct: 1,
        explanation: "The article depends on pronunciation, not spelling. ‘University’ begins with a consonant sound /juː/, so the correct article is ‘a’: ‘He is a university student.’"
    },
    {
        question: "Choose the correct preposition: “She has been living in Vijayawada ______ 2018.”",
        options: [
            "for",
            "from",
            "since",
            "by"
        ],
        correct: 2,
        explanation: "‘Since’ is used with a specific point in time when an action began. Since 2018 indicates the starting point of her continuing residence in Vijayawada."
    },
    {
        question: "Choose the correct verb: “Each of the students ______ submitted the assignment.”",
        options: [
            "have",
            "are",
            "has",
            "were"
        ],
        correct: 2,
        explanation: "‘Each’ is grammatically singular even when followed by a plural noun phrase. Therefore, it requires the singular auxiliary ‘has’: ‘Each of the students has submitted.’"
    },
    {
        question: "Choose the sentence with the correct word order.",
        options: [
            "Always he comes late to class.",
            "He comes always late to class.",
            "He always comes late to class.",
            "He comes late always to class."
        ],
        correct: 2,
        explanation: "Frequency adverbs such as ‘always’ generally occur before the main verb when the verb is not ‘be’. Therefore, ‘He always comes late to class’ has the correct word order."
    },
    {
        question: "Complete the sentence correctly: “If they had started earlier, they ______ the train.”",
        options: [
            "will catch",
            "would catch",
            "would have caught",
            "had caught"
        ],
        correct: 2,
        explanation: "This is a third conditional sentence describing an unreal past situation. Its structure is ‘if + past perfect’ followed by ‘would have + past participle’."
    },
    {
        question: "Choose the correct passive form: “Students must follow the instructions.”",
        options: [
            "The instructions must follow by students.",
            "The instructions must be followed by students.",
            "The instructions are followed by students must.",
            "The instructions have to followed by students."
        ],
        correct: 1,
        explanation: "With a modal such as ‘must’, passive voice uses ‘must + be + past participle’. Therefore, ‘The instructions must be followed by students’ is grammatically correct."
    },
    {
        question: "Change into indirect speech: He said, “What a beautiful painting it is!”",
        options: [
            "He said that it was a beautiful painting.",
            "He exclaimed that it was a very beautiful painting.",
            "He asked whether it was a beautiful painting.",
            "He told that what a beautiful painting it was."
        ],
        correct: 1,
        explanation: "The original sentence is an exclamation expressing admiration. In indirect speech, ‘said’ changes to ‘exclaimed’ and the exclamatory structure becomes a statement expressing the same feeling."
    },
    {
        question: "Change into indirect speech: The teacher said to me, “Why are you late?”",
        options: [
            "The teacher asked me why I was late.",
            "The teacher asked me why was I late.",
            "The teacher told me why I am late.",
            "The teacher asked that why I had late."
        ],
        correct: 0,
        explanation: "A wh-question in indirect speech uses statement word order. ‘Are you late?’ changes to ‘I was late’ after backshifting, while ‘why’ remains unchanged."
    },
    {
        question: "Choose the correct passive voice: “People speak English in many countries.”",
        options: [
            "English was spoken in many countries.",
            "English is spoken in many countries.",
            "English has spoken in many countries.",
            "English speaks in many countries."
        ],
        correct: 1,
        explanation: "The active sentence uses the simple present tense. Its passive form is ‘is/am/are + past participle’. Therefore, ‘English is spoken in many countries’ is correct."
    },
    {
        question: "Identify the complex sentence.",
        options: [
            "He came home and he went to bed.",
            "He came home, so he went to bed.",
            "After he came home, he went to bed.",
            "Coming home, he went to bed."
        ],
        correct: 2,
        explanation: "A complex sentence contains an independent clause and a dependent clause. ‘After he came home’ is a dependent adverb clause joined to the main clause."
    },
    {
        question: "Choose the appropriate linker: “He is poor, ______ he is honest.”",
        options: [
            "because",
            "although",
            "but",
            "therefore"
        ],
        correct: 2,
        explanation: "The sentence contrasts two facts: being poor and being honest. The coordinating conjunction ‘but’ correctly expresses this contrast between the two independent clauses."
    },
    {
        question: "Identify the sentence that expresses permission.",
        options: [
            "You must submit the form today.",
            "You should submit the form today.",
            "May I leave the classroom?",
            "You ought to submit the form today."
        ],
        correct: 2,
        explanation: "‘May I leave the classroom?’ asks whether the speaker is allowed to leave. The modal ‘may’ commonly expresses or requests permission in formal English."
    },
    {
        question: "Identify the incorrect part of the sentence: “Neither of the two boys have completed his assignment.”",
        options: [
            "Neither",
            "of the two boys",
            "have completed",
            "his assignment"
        ],
        correct: 2,
        explanation: "‘Neither’ is singular and therefore takes a singular verb. The incorrect part is ‘have completed’; it should be ‘has completed’: ‘Neither has completed his assignment.’"
    }
];