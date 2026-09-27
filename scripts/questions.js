const SUBJECTS = [
    "Telugu",
    "English"
];

const QUESTIONS = [
    {
        question: "‘ఆకాశం’కు సరైన పర్యాయపదాల సమూహం ఏది?",
        options: ["గగనం, నభం, వ్యోమం", "సాగరం, రత్నాకరం, అంబుధి", "భువి, ధర, వసుధ", "అనిలం, పవనం, వాయువు"],
        correct: 0,
        explanation: "గగనం, నభం, వ్యోమం అనే మూడు పదాలు ఆకాశాన్ని సూచించే పర్యాయపదాలు. మిగతా ఎంపికలు వరుసగా సముద్రం, భూమి, గాలి అనే అర్థాలను సూచిస్తాయి."
    },
    {
        question: "‘క్షణికం’ అనే పదానికి వ్యతిరేక పదం ఏది?",
        options: ["తాత్కాలికం", "శాశ్వతం", "త్వరితం", "స్వల్పం"],
        correct: 1,
        explanation: "క్షణికం అంటే కొద్దిసేపు మాత్రమే ఉండేది లేదా తాత్కాలికమైనది. దీనికి వ్యతిరేక భావం ఎక్కువకాలం లేదా ఎల్లప్పుడూ ఉండేది, అంటే శాశ్వతం."
    },
    {
        question: "క్రింది వాటిలో ‘నానార్థాలు’ కలిగిన పదజంట ఏది?",
        options: ["కరం — చేయి, పన్ను", "గృహం — ఇల్లు, నివాసం", "వనం — అడవి, అరణ్యం", "భోజనం — ఆహారం, తిండి"],
        correct: 0,
        explanation: "‘కరం’ అనే పదానికి చేయి, పన్ను అనే రెండు భిన్న అర్థాలు ఉన్నాయి. ఒకే పదానికి సందర్భానుసారం వేర్వేరు అర్థాలు ఉండటాన్ని నానార్థకత్వం అంటారు."
    },
    {
        question: "క్రింది వాక్యాలలో సరైన పదప్రయోగం ఉన్నది ఏది?",
        options: ["అతను గురువుకు దీనం సమర్పించాడు.", "అతను గురువుకు దీనం అయ్యాడు.", "అతను గురువుకు దీనం ఇచ్చాడు.", "అతను గురువుకు దీనం రాశాడు."],
        correct: 1,
        explanation: "ఇచ్చిన ఎంపికలలో ‘అతను గురువుకు దీనం అయ్యాడు’ అనే వాక్యమే ప్రశ్నలో సూచించిన సరైన పదప్రయోగంగా ఉంది. మిగతా వాక్యాలలో ‘దీనం’ క్రియలతో సహజంగా సరిపోదు."
    },
    {
        question: "క్రింది వాటిలో సరైన స్పెల్లింగ్ గల పదం ఏది?",
        options: ["అభ్యుదయం", "అభ్యుదయము", "అభ్యుదయం", "అభ్యుదయం"],
        correct: 0,
        explanation: "‘అభ్యుదయం’ అనే రూపం ప్రామాణికంగా ఉపయోగించే సరైన స్పెల్లింగ్. ఈ ప్రశ్నలో A, C, D ఎంపికలు ఒకే విధంగా కనిపిస్తున్నందున ఇచ్చిన answer key ప్రకారం A సరైనదిగా తీసుకోవాలి."
    },
    {
        question: "‘చెవిలో పువ్వు పెట్టడం’ అనే జాతీయానికి సరైన అర్థం ఏది?",
        options: ["రహస్యంగా మాట్లాడటం", "మోసం చేయడం / నమ్మించడం", "శ్రద్ధగా వినడం", "ప్రశంసించడం"],
        correct: 1,
        explanation: "‘చెవిలో పువ్వు పెట్టడం’ అనే జాతీయానికి సాధారణంగా ఎదుటివారిని మోసగించడం, మాటలతో నమ్మించడం అనే భావం వస్తుంది. ఇది అక్షరార్థంలో చెవిలో పువ్వు పెట్టడాన్ని సూచించదు."
    },
    {
        question: "‘అందని ద్రాక్ష పుల్లన’ అనే సామెతలోని భావం ఏది?",
        options: ["అందుబాటులో ఉన్నదాన్ని నిర్లక్ష్యం చేయడం", "లభించనిదాన్ని తక్కువ చేసి చెప్పడం", "కష్టపడి సాధించడం", "ఇతరులకు సహాయం చేయడం"],
        correct: 1,
        explanation: "మనకు లభించని లేదా అందని వస్తువును పొందలేకపోయినప్పుడు దాని విలువను తక్కువగా చూపించడం ‘అందని ద్రాక్ష పుల్లన’ అనే సామెతలోని ప్రధాన భావం."
    },
    {
        question: "‘ఇతరులకు ఉపకారం చేసేవాడు’ అనే అర్థానికి సరైన ఏకపదం ఏది?",
        options: ["స్వార్థపరుడు", "పరోపకారి", "దురాశాపరుడు", "అపకారి"],
        correct: 1,
        explanation: "ఇతరులకు మేలు లేదా సహాయం చేసేవాడిని ‘పరోపకారి’ అంటారు. స్వార్థపరుడు తన ప్రయోజనాన్ని చూసేవాడు; అపకారి ఇతరులకు హాని చేసేవాడు."
    },
    {
        question: "‘అన్యాయం’ అనే పదంలో ‘అన్/అన-’ ఏ పాత్రను నిర్వహిస్తోంది?",
        options: ["ప్రత్యయం", "విభక్తి", "ఉపసర్గ", "సమాసం"],
        correct: 2,
        explanation: "‘అన-’ అనే భాగం మూలపదానికి ముందు చేరి దానికి వ్యతిరేక లేదా నిషేధ భావాన్ని కలిగిస్తుంది. మూలపదానికి ముందు చేరే ఇలాంటి భాగాన్ని ఉపసర్గ అంటారు."
    },
    {
        question: "‘మానవత్వం’ అనే పద నిర్మాణంలో ‘-త్వం’ ఏది?",
        options: ["ఉపసర్గ", "ప్రత్యయం", "సమాసం", "విభక్తి"],
        correct: 1,
        explanation: "‘-త్వం’ పదం చివర చేరి మానవునికి సంబంధించిన గుణం లేదా స్థితిని సూచించే కొత్త నామవాచకాన్ని ఏర్పరుస్తుంది. పదాంతంలో చేరేది ప్రత్యయం."
    },
    {
        question: "క్రింది వాటిలో సరైన సమాసపదం ఏది?",
        options: ["రాజు యొక్క కుమారుడు", "రాజకుమారుడు", "రాజుకు కుమారుడు", "రాజుతో కుమారుడు"],
        correct: 1,
        explanation: "‘రాజు యొక్క కుమారుడు’ అనే విగ్రహ వాక్యానికి సంక్షిప్త సమాసరూపం ‘రాజకుమారుడు’. సమాసంలో పదాల మధ్య ఉన్న విభక్తులు సాధారణంగా లుప్తమవుతాయి."
    },
    {
        question: "‘నీలాకాశం’ అనే పదం ఏ సమాసానికి ఉదాహరణ?",
        options: ["ద్వంద్వ సమాసం", "తత్పురుష సమాసం", "కర్మధారయ సమాసం", "బహువ్రీహి సమాసం"],
        correct: 2,
        explanation: "‘నీలమైన ఆకాశం’ అనే విగ్రహం కలిగిన ‘నీలాకాశం’లో మొదటి పదం రెండవ పదాన్ని విశేషిస్తుంది. అందువల్ల ఇది కర్మధారయ సమాసానికి ఉదాహరణ."
    },
    {
        question: "‘విజయం’ అనే పదానికి సమీపార్థక పదం ఏది?",
        options: ["జయం", "భయం", "పరాజయం", "అపజయం"],
        correct: 0,
        explanation: "‘విజయం’ మరియు ‘జయం’ రెండూ గెలుపు లేదా సాఫల్యం అనే సమీపమైన అర్థాలను కలిగి ఉంటాయి. పరాజయం, అపజయం విజయానికి వ్యతిరేక భావాలను సూచిస్తాయి."
    },
    {
        question: "‘విస్తరణ’కు వ్యతిరేక పదం ఏది?",
        options: ["అభివృద్ధి", "సంకోచం", "పరిణామం", "ప్రగతి"],
        correct: 1,
        explanation: "విస్తరణ అంటే విస్తరించడం లేదా పరిమాణాన్ని పెంచడం. దీనికి వ్యతిరేక భావం పరిమాణం తగ్గడం లేదా కుదించబడడం, దీనిని ‘సంకోచం’ అంటారు."
    },
    {
        question: "‘కరం’ అనే పదం ‘చేయి’ అనే అర్థంలోనూ, ‘పన్ను’ అనే అర్థంలోనూ ఉపయోగించబడుతుంది. ఇది ఏ పద సంబంధానికి ఉదాహరణ?",
        options: ["పర్యాయపదం", "వ్యతిరేక పదం", "నానార్థకం", "అన్యదేశ్య పదం"],
        correct: 2,
        explanation: "‘కరం’ అనే ఒకే పదం సందర్భాన్ని బట్టి ‘చేయి’ మరియు ‘పన్ను’ అనే వేర్వేరు అర్థాలను ఇస్తుంది. కాబట్టి ఇది నానార్థక పదానికి ఉదాహరణ."
    },
    {
        question: "క్రింది వాటిలో జాతీయానికి సరైన అర్థాన్ని గుర్తించండి: ‘తలకెక్కడం’",
        options: ["కోపంతో తల పట్టుకోవడం", "అతిగా చనువు పొందడం / అదుపు తప్పడం", "ఆలోచన చేయడం", "బాధ్యత స్వీకరించడం"],
        correct: 1,
        explanation: "‘తలకెక్కడం’ అనే జాతీయ ప్రయోగం సాధారణంగా అతిగా చనువు పొందడం లేదా ఎదుటివారి మాట వినకుండా అదుపు తప్పడం అనే భావాన్ని సూచిస్తుంది."
    },
    {
        question: "‘ఇంట గెలిచి రచ్చ గెలవాలి’ అనే సామెత ప్రధానంగా ఏ భావాన్ని సూచిస్తుంది?",
        options: ["ముందుగా సన్నిహిత వర్గంలో గుర్తింపు పొందాలి", "ఇతరులతో పోటీ పడకూడదు", "ఇంట్లోనే ఉండాలి", "విజయం ఎప్పుడూ ఆలస్యంగా వస్తుంది"],
        correct: 0,
        explanation: "‘ఇంట గెలిచి రచ్చ గెలవాలి’ అంటే ముందుగా ఇంటి లేదా సన్నిహితుల వద్ద తన సామర్థ్యాన్ని నిరూపించుకొని, తరువాత బయటి ప్రపంచంలో విజయాన్ని సాధించాలి."
    },
    {
        question: "‘భూమిపై నివసించేవాడు’ అనే అర్థానికి సరైన ఏకపదం ఏది?",
        options: ["భూచరుడు", "భూలోకవాసి", "ఖేచరుడు", "జలచరుడు"],
        correct: 1,
        explanation: "భూమిపై లేదా భూలోకంలో నివసించేవాడిని ‘భూలోకవాసి’ అని అంటారు. ఖేచరుడు ఆకాశంలో సంచరించేవాడు; జలచరుడు నీటిలో నివసించేవాడు."
    },
    {
        question: "క్రింది వాటిలో ‘సు-’ ఉపసర్గను సరైన రీతిలో ఉపయోగించిన పదం ఏది?",
        options: ["సుగుణం", "దుర్గుణం", "నిర్గుణం", "విగుణం"],
        correct: 0,
        explanation: "‘సు-’ ఉపసర్గ శుభం, మంచి లేదా ఉత్తమం అనే భావాన్ని ఇస్తుంది. ‘సుగుణం’ అంటే మంచి గుణం. మిగతా పదాలలో ఇతర ఉపసర్గలు ఉన్నాయి."
    },
    {
        question: "‘దేశభక్తి’ అనే పదాన్ని విడదీసినప్పుడు సరైన రూపం ఏది?",
        options: ["దేశం + భక్తి", "దేశ + భక్తి", "దేశము + అభక్తి", "దేశి + భక్తి"],
        correct: 1,
        explanation: "‘దేశభక్తి’ పదం ‘దేశ + భక్తి’ అనే రెండు పదాల కలయికతో ఏర్పడింది. సమాస రూపంలో ‘దేశం’లోని చివరి భాగం మారి ‘దేశ’ రూపం కనిపిస్తుంది."
    },
    {
        question: "క్రింది వాటిలో ఒకే అర్థానికి దగ్గరగా ఉన్న పదాల సమూహం ఏది?",
        options: ["కోపం — ఆగ్రహం — రోషం", "కోపం — శాంతి — సౌమ్యం", "భయం — ధైర్యం — సాహసం", "ఆనందం — విషాదం — దుఃఖం"],
        correct: 0,
        explanation: "కోపం, ఆగ్రహం, రోషం అనే మూడు పదాలు కోపం లేదా ఆగ్రహ భావాన్ని సూచిస్తాయి. అందువల్ల ఇవి ఒకే అర్థానికి దగ్గరగా ఉన్న పర్యాయ పదాల సమూహం."
    },
    {
        question: "‘ఆది’ మరియు ‘ఆది’ అనే రూపాలు వేర్వేరు అర్థాల్లో ఉపయోగించబడితే, వాటి మధ్య సంబంధాన్ని గుర్తించడానికి ప్రధానంగా ఏ అంశాన్ని పరిశీలించాలి?",
        options: ["అక్షరాల సంఖ్య", "సందర్భం మరియు అర్థం", "పదం పొడవు", "ఉచ్చారణ వేగం"],
        correct: 1,
        explanation: "ఒకే రూపంలో ఉన్న పదం వేర్వేరు అర్థాలను ఇవ్వవచ్చు. ఆ అర్థాన్ని నిర్ణయించడానికి పదం ఉపయోగించిన సందర్భం మరియు దాని భావాన్ని పరిశీలించడం ముఖ్యమైనది."
    },
    {
        question: "క్రింది వాటిలో పద నిర్మాణం సరైనది ఏది?",
        options: ["నీతి + వంతుడు = నీతివంతుడు", "నీతి + వంతుడు = నీతియవంతుడు", "నీతి + వంతుడు = నీత్వంతుడు", "నీతి + వంతుడు = నీతిమంతుడు"],
        correct: 0,
        explanation: "ఇచ్చిన answer key ప్రకారం ‘నీతి + వంతుడు = నీతివంతుడు’ సరైన పద నిర్మాణం. ‘నీతివంతుడు’ అంటే నీతి కలిగిన వ్యక్తి అనే అర్థాన్ని ఇస్తుంది."
    },
    {
        question: "‘నిరాశ’ అనే పదానికి వ్యతిరేక పదం ఏది?",
        options: ["నిర్లక్ష్యం", "ఆశ", "అసంతృప్తి", "విషాదం"],
        correct: 1,
        explanation: "నిరాశ అంటే ఆశ లేకపోవడం లేదా ఆశాభంగం. దీనికి వ్యతిరేక భావం ఆశ లేదా ఆశావాదం. కాబట్టి సరైన వ్యతిరేక పదం ‘ఆశ’."
    },
    {
        question: "క్రింది పదాలలో అక్షరాల క్రమాన్ని మార్చి కొత్త పదాన్ని ఏర్పరచే ప్రక్రియను ఏమంటారు?",
        options: ["సంధి", "సమాసం", "అనాగ్రామ్", "ప్రత్యయాంతం"],
        correct: 2,
        explanation: "ఒక పదంలోని అక్షరాల క్రమాన్ని మార్చి మరో అర్థవంతమైన పదాన్ని రూపొందించే ప్రక్రియను అనాగ్రామ్ అంటారు. సంధి, సమాసం పద నిర్మాణానికి వేర్వేరు ప్రక్రియలు."
    },
    {
        question: "Choose the word that is closest in meaning to the underlined word: The scientist gave a precise description of the experiment.",
        options: ["vague", "accurate", "lengthy", "ordinary"],
        correct: 1,
        explanation: "‘Precise’ means exact, accurate, or clearly defined. Therefore, ‘accurate’ is the closest meaning. ‘Vague’ means unclear, while the other options do not convey exactness."
    },
    {
        question: "Choose the antonym of the underlined word: The manager appreciated her generous attitude.",
        options: ["charitable", "helpful", "selfish", "friendly"],
        correct: 2,
        explanation: "‘Generous’ describes someone willing to give or help others. Its opposite is ‘selfish’, which describes concern mainly for oneself rather than for other people."
    },
    {
        question: "Choose the word that is NOT correctly spelt.",
        options: ["accommodate", "separate", "privilege", "occassion"],
        correct: 3,
        explanation: "The correct spelling is ‘occasion’, with only one ‘c’ after the initial ‘o’ and double ‘c’ overall. ‘Occassion’ incorrectly contains an extra ‘s’."
    },
    {
        question: "Choose the correctly spelt word.",
        options: ["questionnaire", "questionaire", "questionnare", "questionnair"],
        correct: 0,
        explanation: "‘Questionnaire’ is the correct spelling for a written set of questions used to collect information. The other forms incorrectly omit or rearrange letters in the word."
    },
    {
        question: "Choose the word that describes a person who speaks two languages fluently.",
        options: ["bilingual", "biannual", "bilateral", "bilingualism"],
        correct: 0,
        explanation: "A ‘bilingual’ person can use two languages. ‘Biannual’ means occurring twice a year, ‘bilateral’ means involving two sides, and ‘bilingualism’ refers to the condition itself."
    },
    {
        question: "Choose the word that means: One who cannot read or write",
        options: ["immigrant", "illiterate", "ignorant", "innocent"],
        correct: 1,
        explanation: "‘Illiterate’ specifically describes a person who cannot read or write. An immigrant moves to another country, ignorant means lacking knowledge, and innocent means not guilty."
    },
    {
        question: "Choose the correct meaning of the idiom: “A blessing in disguise”",
        options: ["a hidden enemy", "something that seems bad but proves beneficial", "a religious ceremony", "an unexpected punishment"],
        correct: 1,
        explanation: "‘A blessing in disguise’ refers to something that initially appears negative or unfortunate but later turns out to have a beneficial or positive result."
    },
    {
        question: "Choose the correct meaning of the idiom: “To hit the nail on the head”",
        options: ["to work very hard", "to make a careless mistake", "to say or do exactly the right thing", "to avoid an important issue"],
        correct: 2,
        explanation: "‘To hit the nail on the head’ means to identify or express something exactly correctly. It is used when someone gives the precise answer or explanation."
    },
    {
        question: "Choose the correct phrasal verb: The teacher asked the students to ______ the assignment before Friday.",
        options: ["hand in", "hand out", "hand over", "hand down"],
        correct: 0,
        explanation: "‘Hand in’ means to submit something, such as an assignment, to a teacher or authority. ‘Hand out’ means distribute, while the others have different meanings."
    },
    {
        question: "Choose the correct phrasal verb: The meeting was ______ because the chairman was ill.",
        options: ["called off", "called in", "called on", "called up"],
        correct: 0,
        explanation: "‘Called off’ means cancelled, so it correctly describes a meeting that did not take place because the chairman was ill. The other phrasal verbs have different meanings."
    },
    {
        question: "Choose the word formed by adding the correct suffix to child.",
        options: ["childful", "childness", "childhood", "childity"],
        correct: 2,
        explanation: "Adding the suffix ‘-hood’ to ‘child’ forms ‘childhood’, meaning the period or state of being a child. The other options are not standard English formations."
    },
    {
        question: "Choose the word formed by adding the appropriate prefix: ___regular",
        options: ["un", "dis", "ir", "im"],
        correct: 2,
        explanation: "The correct word is ‘irregular’. The prefix ‘ir-’ is a form of the negative prefix used before words beginning with ‘r’, changing regular to its opposite."
    },
    {
        question: "Choose the correct noun form of decide.",
        options: ["deciding", "decision", "decisive", "decided"],
        correct: 1,
        explanation: "The noun form of the verb ‘decide’ is ‘decision’. ‘Deciding’ is a participle or gerund, ‘decisive’ is an adjective, and ‘decided’ is a past form."
    },
    {
        question: "Choose the correct adjective form of danger.",
        options: ["dangerously", "endangered", "dangerous", "dangerless"],
        correct: 2,
        explanation: "‘Dangerous’ is the adjective formed from ‘danger’ and describes something capable of causing harm. ‘Dangerously’ is an adverb, while the other choices do not fit."
    },
    {
        question: "Choose the word that best completes the collocation: The committee will ______ a decision tomorrow.",
        options: ["do", "make", "take", "build"],
        correct: 1,
        explanation: "The standard collocation is ‘make a decision’. English commonly uses ‘make’ with decision in this expression, whereas do, take, and build do not fit here."
    },
    {
        question: "Choose the correct collocation:",
        options: ["heavy rain", "strong rain", "powerful rain", "hard rain"],
        correct: 0,
        explanation: "‘Heavy rain’ is the standard English collocation for a large amount of rainfall. Although ‘hard’ can appear in some contexts, ‘heavy rain’ is the conventional expression."
    },
    {
        question: "Choose the word that best fits the context: The instructions were so ______ that even a beginner could follow them.",
        options: ["obscure", "explicit", "reluctant", "fragile"],
        correct: 1,
        explanation: "‘Explicit’ means clearly expressed and leaving little room for confusion. This fits instructions that a beginner can easily follow. The other options do not suit the context."
    },
    {
        question: "Choose the word closest in meaning to the underlined word: The witness gave a brief account of the incident.",
        options: ["short", "doubtful", "detailed", "inaccurate"],
        correct: 0,
        explanation: "‘Brief’ means short or lasting only a small amount of time. In this sentence, a brief account is a short description of the incident."
    },
    {
        question: "Choose the antonym of the underlined word: The instructions were mandatory for all candidates.",
        options: ["compulsory", "essential", "optional", "official"],
        correct: 2,
        explanation: "‘Mandatory’ means required or compulsory. Its opposite is ‘optional’, meaning something that may be chosen but is not required. Therefore, optional is the correct antonym."
    },
    {
        question: "Choose the correctly spelt word.",
        options: ["maintenance", "maintainance", "maintanence", "maintenence"],
        correct: 0,
        explanation: "‘Maintenance’ is the correct spelling of the noun meaning the process of preserving something in good condition. The other spellings incorrectly arrange or omit letters."
    },
    {
        question: "Choose the word that means: A person who studies the origin and development of languages",
        options: ["lexicographer", "linguist", "biographer", "archaeologist"],
        correct: 1,
        explanation: "A ‘linguist’ studies language, including its structure, development, and use. A lexicographer compiles dictionaries, a biographer writes biographies, and an archaeologist studies material remains."
    },
    {
        question: "Choose the correct meaning of the phrasal verb “look into”.",
        options: ["postpone", "investigate", "admire", "avoid"],
        correct: 1,
        explanation: "The phrasal verb ‘look into’ means to investigate or examine something carefully. For example, an authority may look into a complaint before taking further action."
    },
    {
        question: "Choose the correct meaning of the idiom “once in a blue moon.”",
        options: ["at the right moment", "very frequently", "very rarely", "unexpectedly"],
        correct: 2,
        explanation: "‘Once in a blue moon’ is an idiom meaning something happens very rarely or only on unusual occasions. It does not refer to frequent or regular events."
    },
    {
        question: "Choose the word that best completes the sentence: The teacher encouraged the student to ______ confidence in public speaking.",
        options: ["gain", "do", "make", "perform"],
        correct: 0,
        explanation: "‘Gain confidence’ is the standard collocation meaning to become more confident through experience or practice. The other verbs do not naturally combine with confidence in this sentence."
    },
    {
        question: "Choose the word that is closest in meaning to the underlined word: The explanation was concise, yet it contained all the essential information.",
        options: ["complicated", "brief and clear", "uncertain", "repetitive"],
        correct: 1,
        explanation: "‘Concise’ means expressing information clearly and briefly without unnecessary words. Therefore, ‘brief and clear’ is the closest meaning and fits the context of the sentence."
    }
];