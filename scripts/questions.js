const SUBJECTS = [
    "Telugu",
    "English"
];

const QUESTIONS = [
    {
        question: "“రామాలయం” అనే పదంలో జరిగిన సంధి ఏది?",
        options: ["గుణసంధి", "వృద్ధి సంధి", "సవర్ణదీర్ఘ సంధి", "యణాదేశ సంధి"],
        correct: 2,
        explanation: "“రామాలయం” పదంలో రామ + ఆలయం కలిసినప్పుడు అ + ఆ కలిసి ఆ అవుతుంది. ఒకే స్వరాల దీర్ఘరూపం ఏర్పడటం వల్ల దీనిని సవర్ణదీర్ఘ సంధి అంటారు."
    },
    {
        question: "“నరేంద్రుడు” అనే పదానికి సరైన సంధి విభజన ఏది?",
        options: ["నర + ఇంద్రుడు — గుణసంధి", "నర + ఇంద్రుడు — వృద్ధి సంధి", "నరే + ఇంద్రుడు — సవర్ణదీర్ఘ సంధి", "నర + ఏంద్రుడు — యణాదేశ సంధి"],
        correct: 0,
        explanation: "నర + ఇంద్రుడు కలిసినప్పుడు అ + ఇ కలిసి ఏ అవుతుంది. అ లేదా ఆకు ఇ లేదా ఈ కలిసినప్పుడు ఏ ఏర్పడటం గుణసంధి లక్షణం."
    },
    {
        question: "“ఏకైక” అనే పదంలో కనిపించే సంధి ఏది?",
        options: ["సవర్ణదీర్ఘ సంధి", "గుణసంధి", "వృద్ధి సంధి", "యణాదేశ సంధి"],
        correct: 2,
        explanation: "“ఏకైక”లో ఏక + ఏక పదాలు కలిసినప్పుడు ఏ + ఏ కలిసి ఐ రూపం ఏర్పడుతుంది. ఏ, ఐ వంటి వృద్ధి స్వరాల ఏర్పాటును వృద్ధి సంధిగా గుర్తించాలి."
    },
    {
        question: "“కలిగియున్నాడు” అనే రూపంలో జరిగిన సంధి ఏది?",
        options: ["గుణసంధి", "యడాగమ సంధి", "వృద్ధి సంధి", "సవర్ణదీర్ఘ సంధి"],
        correct: 1,
        explanation: "“కలిగి + ఉన్నాడు” కలిసినప్పుడు రెండు పదాల మధ్య య్ ఆగమంగా వచ్చి “కలిగియున్నాడు” రూపం ఏర్పడుతుంది. పదాల మధ్య య్ చేరడాన్ని యడాగమ సంధి అంటారు."
    },
    {
        question: "“తల్లిదండ్రులు” అనే పదం ఏ సమాసానికి ఉదాహరణ?",
        options: ["ద్విగు సమాసం", "ద్వంద్వ సమాసం", "బహువ్రీహి సమాసం", "కర్మధారయ సమాసం"],
        correct: 1,
        explanation: "“తల్లిదండ్రులు”లో తల్లి, తండ్రి అనే రెండు సమాన ప్రాధాన్య పదాలు కలిసి ఒక సమూహాన్ని సూచిస్తున్నాయి. అందువల్ల ఇది ద్వంద్వ సమాసానికి ఉదాహరణ."
    },
    {
        question: "“నీలమేఘం” అనే సమాసపదానికి సరైన విగ్రహ వాక్యం ఏది?",
        options: ["నీలము యొక్క మేఘము", "నీలమైన మేఘము", "నీలమును మరియు మేఘమును", "నీలము గల మేఘము"],
        correct: 1,
        explanation: "“నీలమేఘం”లో నీలమైన అనే విశేషణం మేఘం అనే విశేష్యాన్ని వివరిస్తుంది. విశేషణం, విశేష్యం కలిసి ఏర్పడినందువల్ల విగ్రహం “నీలమైన మేఘము” అవుతుంది."
    },
    {
        question: "“పంచపాండవులు” ఏ సమాసానికి ఉదాహరణ?",
        options: ["ద్వంద్వ సమాసం", "తత్పురుష సమాసం", "ద్విగు సమాసం", "బహువ్రీహి సమాసం"],
        correct: 2,
        explanation: "“పంచపాండవులు”లో పంచ అనే సంఖ్యావాచక పదం పాండవులు అనే పదాన్ని సూచిస్తుంది. సంఖ్యాపూర్వకంగా ఏర్పడిన సమాసాన్ని ద్విగు సమాసం అంటారు."
    },
    {
        question: "“రాజపుత్రుడు” అనే పదానికి సరైన సమాస విగ్రహం ఏది?",
        options: ["రాజైన పుత్రుడు", "రాజు మరియు పుత్రుడు", "రాజు యొక్క పుత్రుడు", "రాజు కొరకు పుత్రుడు"],
        correct: 2,
        explanation: "“రాజపుత్రుడు” అంటే రాజు యొక్క పుత్రుడు. ఇందులో పూర్వపదం రాజు, ఉత్తరపదం పుత్రుడు; సంబంధాన్ని సూచించే షష్ఠీ విభక్తి లుప్తమై సమాసం ఏర్పడింది."
    },
    {
        question: "“యథాశక్తి” అనే పదం ఏ సమాసానికి ఉదాహరణ?",
        options: ["అవ్యయీభావ సమాసం", "ద్విగు సమాసం", "ద్వంద్వ సమాసం", "కర్మధారయ సమాసం"],
        correct: 0,
        explanation: "“యథాశక్తి” అంటే శక్తికి తగినట్లు లేదా శక్తి అనుసరించి అని అర్థం. అవ్యయపూర్వకంగా ఏర్పడిన ఈ సమాసం అవ్యయీభావ సమాసానికి ఉదాహరణ."
    },
    {
        question: "“ఆమె ముఖం చంద్రునివలె ప్రకాశిస్తోంది.” ఈ వాక్యంలో ఉన్న అలంకారం ఏది?",
        options: ["రూపకం", "ఉపమ", "అతిశయోక్తి", "ఉత్ప్రేక్ష"],
        correct: 1,
        explanation: "ముఖాన్ని చంద్రునితో పోల్చడానికి “వలె” అనే ఉపమావాచక పదం ఉపయోగించబడింది. పోలిక స్పష్టంగా వ్యక్తమవుతున్నందువల్ల ఈ అలంకారం ఉపమ."
    },
    {
        question: "“ఆమె ముఖచంద్రుడు అందంగా ఉన్నాడు.” అనే ప్రయోగంలో ప్రధానంగా కనిపించే అలంకారం ఏది?",
        options: ["ఉపమ", "రూపకం", "అతిశయోక్తి", "స్వభావోక్తి"],
        correct: 1,
        explanation: "ఇక్కడ ముఖాన్ని చంద్రునితో పోల్చి “వలె” వంటి పోలిక పదం లేకుండా నేరుగా ముఖమే చంద్రుడిగా చెప్పబడింది. అందువల్ల ఇది రూపక అలంకారం."
    },
    {
        question: "“ఆకాశంలో మేఘమో, పర్వతమో కనిపిస్తోంది.” అనే ప్రయోగంలో వస్తువును మరొకదిగా ఊహించే అలంకారం ఏది?",
        options: ["ఉపమ", "రూపకం", "ఉత్ప్రేక్ష", "అనుప్రాస"],
        correct: 2,
        explanation: "ఒక వస్తువు మరొక వస్తువుగా ఉండవచ్చని ఊహించడం ఉత్ప్రేక్ష లక్షణం. ఇక్కడ కనిపిస్తున్న వస్తువును మేఘమో పర్వతమో అని ఊహిస్తున్నారు."
    },
    {
        question: "“అతని కీర్తి ఆకాశాన్ని దాటి వ్యాపించింది.” అనే ప్రయోగంలో అసాధారణమైన అతిశయాన్ని వ్యక్తం చేయడానికి ఉపయోగించిన అలంకారం ఏది?",
        options: ["రూపకం", "ఉపమ", "అతిశయోక్తి", "ఉత్ప్రేక్ష"],
        correct: 2,
        explanation: "కీర్తి నిజంగా ఆకాశాన్ని దాటడం సాధ్యం కాకపోయినా, గొప్పతనాన్ని అతిశయంగా వ్యక్తీకరించారు. అసాధారణమైన అధికోక్తి ఉన్నందువల్ల ఇది అతిశయోక్తి."
    },
    {
        question: "“రాము కత్తితో కూరగాయలు కోశాడు.” వాక్యంలో “కత్తితో” ఏ విభక్తిని సూచిస్తుంది?",
        options: ["ద్వితీయా విభక్తి", "తృతీయా విభక్తి", "చతుర్థీ విభక్తి", "పంచమీ విభక్తి"],
        correct: 1,
        explanation: "“కత్తితో” అనే పదం పని చేయడానికి ఉపయోగించిన సాధనాన్ని సూచిస్తుంది. సాధనం లేదా ఉపకరణాన్ని సూచించే అర్థంలో తృతీయా విభక్తి ఉపయోగించబడుతుంది."
    },
    {
        question: "“గురువు విద్యార్థికి బహుమతి ఇచ్చాడు.” వాక్యంలో “విద్యార్థికి” ఏ విభక్తి?",
        options: ["తృతీయా", "చతుర్థీ", "పంచమీ", "షష్ఠీ"],
        correct: 1,
        explanation: "“విద్యార్థికి” అనే పదం బహుమతి ఎవరికి ఇచ్చాడో సూచిస్తుంది. అందుకునే వ్యక్తిని లేదా ప్రయోజనాన్ని సూచించే విభక్తి చతుర్థీ విభక్తి."
    },
    {
        question: "“రవి పాఠశాల నుండి ఇంటికి వెళ్లాడు.” వాక్యంలో “పాఠశాల నుండి” ఏ విభక్త్యర్థాన్ని సూచిస్తుంది?",
        options: ["ద్వితీయా", "తృతీయా", "పంచమీ", "సప్తమీ"],
        correct: 2,
        explanation: "“పాఠశాల నుండి” అనే పదబంధం ప్రారంభ స్థానం లేదా వేరుపడే స్థానాన్ని సూచిస్తుంది. ఇలాంటి వియోగం లేదా ప్రారంభస్థానాన్ని పంచమీ విభక్తి సూచిస్తుంది."
    },
    {
        question: "“రాముని స్నేహితుడు వచ్చాడు.” వాక్యంలో “రాముని” ఏ విభక్తిని సూచిస్తుంది?",
        options: ["ద్వితీయా", "చతుర్థీ", "పంచమీ", "షష్ఠీ"],
        correct: 3,
        explanation: "“రాముని స్నేహితుడు” అంటే రాముని యొక్క స్నేహితుడు. యాజమాన్యం లేదా సంబంధాన్ని సూచిస్తున్నందువల్ల “రాముని” షష్ఠీ విభక్తి."
    },
    {
        question: "“సురేష్ కథను చదివాడు.” వాక్యంలో కర్త–కర్మ–క్రియల సరైన క్రమం ఏది?",
        options: ["సురేష్ – చదివాడు – కథను", "కథను – సురేష్ – చదివాడు", "సురేష్ – కథను – చదివాడు", "చదివాడు – సురేష్ – కథను"],
        correct: 2,
        explanation: "వాక్యంలో పని చేసేవాడు సురేష్ కర్త. చదివిన వస్తువు కథను కర్మ. చేసిన పని చదివాడు క్రియ. కాబట్టి కర్త–కర్మ–క్రియ క్రమం సరైనది."
    },
    {
        question: "క్రింది వాక్యాలలో కర్మ లేని వాక్యం ఏది?",
        options: ["రవి పుస్తకం చదివాడు.", "సీత పువ్వును కోసింది.", "బాలుడు మైదానంలో పరుగెత్తాడు.", "ఉపాధ్యాయుడు పాఠాన్ని బోధించాడు."],
        correct: 2,
        explanation: "“బాలుడు మైదానంలో పరుగెత్తాడు” వాక్యంలో పరుగెత్తాడు అనే క్రియకు ప్రత్యక్ష కర్మ లేదు. అందువల్ల ఇది కర్మ లేని లేదా అకర్మక క్రియతో కూడిన వాక్యం."
    },
    {
        question: "“ఉపాధ్యాయుడు విద్యార్థితో సమాధానం రాయించాడు.” వాక్యంలో “రాయించాడు” అనే క్రియ ఏ భావాన్ని సూచిస్తుంది?",
        options: ["అకర్మక క్రియ", "సకర్మక క్రియ", "ప్రేరణార్థక క్రియ", "నిషేధార్థక క్రియ"],
        correct: 2,
        explanation: "ఉపాధ్యాయుడు స్వయంగా రాయకుండా విద్యార్థితో రాయించాడు. ఒక వ్యక్తితో మరొక పని చేయించడాన్ని సూచించే క్రియను ప్రేరణార్థక క్రియ అంటారు."
    },
    {
        question: "“రవి అన్నాడు: ‘నేను రేపు వస్తాను.’” దీనికి సరైన పరోక్ష వాక్యం ఏది?",
        options: ["రవి తాను రేపు వస్తానని అన్నాడు.", "రవి నేను మరుసటి రోజు వస్తానని అన్నాడు.", "రవి తాను మరుసటి రోజు వస్తానని అన్నాడు.", "రవి తాను నిన్న వస్తానని అన్నాడు."],
        correct: 2,
        explanation: "ప్రత్యక్ష వాక్యంలోని “నేను” పరోక్ష వాక్యంలో “తాను”గా మారుతుంది. “రేపు” కూడా సందర్భానుసారం “మరుసటి రోజు”గా మారుతుంది."
    },
    {
        question: "“అమ్మ చెప్పింది: ‘ఇక్కడికి రా.’” దీనికి సరైన పరోక్ష వాక్యం ఏది?",
        options: ["అమ్మ అక్కడికి రమ్మని చెప్పింది.", "అమ్మ ఇక్కడికి వచ్చిందని చెప్పింది.", "అమ్మ అక్కడికి వచ్చానని చెప్పింది.", "అమ్మ ఇక్కడికి రమ్మని అడిగింది."],
        correct: 0,
        explanation: "ఆజ్ఞార్థక ప్రత్యక్ష వాక్యం పరోక్షంగా మార్చినప్పుడు “రా” → “రమ్మని” అవుతుంది. “ఇక్కడికి” సందర్భానుసారం “అక్కడికి”గా మారుతుంది."
    },
    {
        question: "“ఉపాధ్యాయుడు పాఠాన్ని బోధించాడు.” దీనికి సరైన కర్మణి వాక్యం ఏది?",
        options: ["పాఠం ఉపాధ్యాయునిచేత బోధించబడింది.", "ఉపాధ్యాయునిచేత పాఠాన్ని బోధించాడు.", "పాఠాన్ని ఉపాధ్యాయుడు బోధించబడింది.", "ఉపాధ్యాయుడు పాఠంచేత బోధించబడ్డాడు."],
        correct: 0,
        explanation: "కర్తరి వాక్యంలో కర్మ అయిన “పాఠం” కర్మణి వాక్యంలో కర్త స్థానంలోకి వస్తుంది. “ఉపాధ్యాయునిచేత” కర్తను సూచిస్తూ క్రియ కర్మణి రూపం పొందుతుంది."
    },
    {
        question: "కింది వాటిని సరైన జతగా గుర్తించండి: i) రామాలయం ii) తల్లిదండ్రులు iii) ముఖచంద్రుడు iv) రామునికి A) రూపకం B) సవర్ణదీర్ఘ సంధి C) చతుర్థీ విభక్తి D) ద్వంద్వ సమాసం",
        options: ["i-B, ii-D, iii-A, iv-C", "i-C, ii-D, iii-B, iv-A", "i-B, ii-A, iii-D, iv-C", "i-D, ii-B, iii-A, iv-C"],
        correct: 0,
        explanation: "రామాలయం సవర్ణదీర్ఘ సంధి, తల్లిదండ్రులు ద్వంద్వ సమాసం, ముఖచంద్రుడు రూపకం, రామునికి చతుర్థీ విభక్తి. కాబట్టి మొదటి జత సరైనది."
    },
    {
        question: "కింది వాక్యాలను పరిశీలించండి. 1. “రాము పుస్తకం చదివాడు” — ఇది సకర్మక క్రియతో కూడిన వాక్యం. 2. “బాలుడు నిద్రపోయాడు” — ఇది అకర్మక క్రియతో కూడిన వాక్యం. 3. “గురువు విద్యార్థితో వ్యాయామం చేయించాడు” — ఇది ప్రేరణార్థక క్రియకు ఉదాహరణ. సరైన సమాధానాన్ని గుర్తించండి.",
        options: ["1 మాత్రమే", "1 మరియు 2 మాత్రమే", "2 మరియు 3 మాత్రమే", "1, 2 మరియు 3"],
        correct: 3,
        explanation: "రాము పుస్తకాన్ని చదివాడు కాబట్టి సకర్మక క్రియ. బాలుడు నిద్రపోయాడు కాబట్టి అకర్మక క్రియ. గురువు విద్యార్థితో చేయించాడు కాబట్టి ప్రేరణార్థక క్రియ."
    },

    {
        question: "Choose the correct article: He is ___ honest officer.",
        options: ["a", "an", "the", "no article"],
        correct: 1,
        explanation: "“Honest” begins with a vowel sound because the initial h is silent. Therefore, the indefinite article “an” is used before “honest officer” in this sentence."
    },
    {
        question: "Choose the correct article: ___ Himalayas are covered with snow during much of the year.",
        options: ["A", "An", "The", "No article"],
        correct: 2,
        explanation: "Names of mountain ranges take the definite article “the.” Therefore, we say “the Himalayas,” not “a Himalayas” or “Himalayas” alone."
    },
    {
        question: "Choose the correct preposition: She is senior ___ me in the department.",
        options: ["than", "from", "to", "with"],
        correct: 2,
        explanation: "The adjective “senior” is conventionally followed by the preposition “to,” not “than.” Therefore, the correct expression is “senior to me” in standard English."
    },
    {
        question: "Choose the correct preposition: The manager insisted ___ checking the documents personally.",
        options: ["at", "on", "for", "with"],
        correct: 1,
        explanation: "The verb “insist” is followed by the preposition “on” when referring to an action. The correct structure is “insisted on checking the documents personally.”"
    },
    {
        question: "Choose the correct tense: By the time we reached the station, the train ___.",
        options: ["leaves", "has left", "had left", "was leaving"],
        correct: 2,
        explanation: "The train left before another past event, our reaching the station. The past perfect “had left” correctly shows the earlier completed past action."
    },
    {
        question: "Choose the correct verb form: I ___ in this town since 2022.",
        options: ["live", "lived", "have lived", "am living"],
        correct: 2,
        explanation: "“Since 2022” indicates an action or state that began in the past and continues to the present. Therefore, the present perfect “have lived” is appropriate."
    },
    {
        question: "Choose the correct tense: At this time tomorrow, I ___ to Delhi.",
        options: ["travel", "travelled", "will be travelling", "have travelled"],
        correct: 2,
        explanation: "The phrase “at this time tomorrow” refers to an action that will be in progress at a specific future time. Hence, the future continuous is required."
    },
    {
        question: "Choose the correct modal: You ___ submit the application by Friday; it is compulsory.",
        options: ["might", "could", "must", "would"],
        correct: 2,
        explanation: "“Must” expresses strong obligation or necessity. Since submitting the application is compulsory, “must submit” correctly communicates the required action."
    },
    {
        question: "Choose the correct modal expression: You ___ have informed me earlier; I could have helped you.",
        options: ["may", "should", "can", "must"],
        correct: 1,
        explanation: "“Should have” expresses an action that was advisable but was not done in the past. Therefore, “should have informed” correctly expresses past criticism or regret."
    },
    {
        question: "Choose the correct modal: ___ I borrow your dictionary for a few minutes?",
        options: ["Must", "May", "Should", "Would"],
        correct: 1,
        explanation: "“May I...?” is a standard polite expression used when asking permission. Therefore, “May I borrow your dictionary?” is grammatically and contextually correct."
    },
    {
        question: "Choose the correct conjunction: He is poor ___ honest.",
        options: ["because", "but", "unless", "since"],
        correct: 1,
        explanation: "The sentence contrasts two qualities: being poor and being honest. The coordinating conjunction “but” expresses this contrast correctly."
    },
    {
        question: "Choose the correct linker: The road was flooded; ___, the buses stopped running.",
        options: ["however", "therefore", "meanwhile", "otherwise"],
        correct: 1,
        explanation: "The second clause gives the result of the flooded road. “Therefore” is a result linker, showing that the buses stopped because the road was flooded."
    },
    {
        question: "Identify the type of clause underlined: I know what she wants.",
        options: ["Adjective clause", "Adverb clause", "Noun clause", "Main clause"],
        correct: 2,
        explanation: "“What she wants” functions as the object of the verb “know.” Since it performs a noun-like function in the sentence, it is a noun clause."
    },
    {
        question: "Identify the type of clause underlined: The boy who won the prize is my brother.",
        options: ["Noun clause", "Adverb clause", "Relative/Adjective clause", "Main clause"],
        correct: 2,
        explanation: "“Who won the prize” describes or modifies the noun “boy.” A clause that modifies a noun is called a relative or adjective clause."
    },
    {
        question: "Identify the type of conditional: If he had left earlier, he would have caught the train.",
        options: ["Zero conditional", "First conditional", "Second conditional", "Third conditional"],
        correct: 3,
        explanation: "The sentence describes an unreal past condition and its imagined past result. The structure “if + past perfect, would have + past participle” identifies third conditional."
    },
    {
        question: "Identify the type of conditional: If you work hard, you will succeed.",
        options: ["First conditional", "Second conditional", "Third conditional", "Zero conditional"],
        correct: 0,
        explanation: "The first conditional expresses a realistic or possible future condition and result. Its common structure is “if + present simple” followed by “will + base verb.”"
    },
    {
        question: "Choose the sentence with the same meaning: Unless you hurry, you will miss the bus.",
        options: ["If you hurry, you will miss the bus.", "If you do not hurry, you will miss the bus.", "If you did not hurry, you would miss the bus.", "If you had hurried, you would miss the bus."],
        correct: 1,
        explanation: "“Unless” means “if not” in this context. Therefore, “Unless you hurry” has the same meaning as “If you do not hurry.”"
    },
    {
        question: "Identify the simple sentence.",
        options: ["When the teacher arrived, the students became silent.", "The teacher arrived and the students became silent.", "Having finished the work, she went home.", "She went home because she was tired."],
        correct: 2,
        explanation: "“Having finished the work” is a non-finite participial phrase, not an independent clause. The sentence therefore contains one finite main clause and is simple."
    },
    {
        question: "Identify the compound sentence.",
        options: ["Although he was tired, he continued working.", "He was tired, but he continued working.", "Being tired, he stopped working.", "When he was tired, he stopped working."],
        correct: 1,
        explanation: "A compound sentence contains two independent clauses joined by a coordinating conjunction. Here, “He was tired” and “he continued working” are joined by “but.”"
    },
    {
        question: "Identify the complex sentence.",
        options: ["He was tired, but he continued working.", "He finished the work and went home.", "Although he was tired, he continued working.", "Having finished the work, he went home."],
        correct: 2,
        explanation: "“Although he was tired” is a dependent adverb clause, while “he continued working” is the independent clause. Therefore, the sentence is complex."
    },
    {
        question: "Identify the sentence structure of: “The teacher gave the students a task.”",
        options: ["S + V + C", "S + V + O", "S + V + O + O", "S + V + O + C"],
        correct: 2,
        explanation: "“The teacher” is the subject, “gave” is the verb, “the students” is the indirect object, and “a task” is the direct object. Hence, S + V + O + O."
    },
    {
        question: "Identify the sentence structure of: “The news made him happy.”",
        options: ["S + V + O", "S + V + C", "S + V + O + C", "S + V + O + O"],
        correct: 2,
        explanation: "“The news” is the subject, “made” is the verb, “him” is the object, and “happy” describes the object. Therefore, the structure is S + V + O + C."
    },
    {
        question: "Choose the grammatically correct sentence.",
        options: ["Because he was ill, therefore he stayed at home.", "He was ill, therefore he stayed at home.", "Although he was ill, but he attended the class.", "Unless he was ill, so he stayed at home."],
        correct: 1,
        explanation: "“Therefore” expresses a result and can connect two independent clauses with suitable punctuation. The other options incorrectly combine paired or incompatible conjunctions."
    },
    {
        question: "Match Column-I with Column-II. i) because ii) although iii) unless iv) therefore — A) Contrast B) Condition C) Cause D) Result",
        options: ["i-C, ii-A, iii-B, iv-D", "i-A, ii-C, iii-D, iv-B", "i-C, ii-B, iii-A, iv-D", "i-D, ii-A, iii-C, iv-B"],
        correct: 0,
        explanation: "“Because” introduces a cause, “although” introduces contrast, “unless” introduces a condition, and “therefore” indicates a result. Thus, option A gives all correct matches."
    },
    {
        question: "Consider the following statements: 1. Unless can introduce a negative condition. 2. Although introduces a contrast between ideas. 3. Therefore is a coordinating conjunction. Which of the statements given above is/are correct?",
        options: ["1 only", "2 only", "1 and 2 only", "1, 2 and 3"],
        correct: 2,
        explanation: "“Unless” introduces a negative condition and “although” introduces contrast. However, “therefore” is a conjunctive adverb, not a coordinating conjunction. Hence, statements 1 and 2 are correct."
    }
];