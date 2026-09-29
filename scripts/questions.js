const SUBJECTS = [
    "Telugu",
    "English"
];

const QUESTIONS = [
    {
        question: "“రాము నిన్న పాఠశాలకు త్వరగా వెళ్లాడు.” అనే వాక్యంలో “త్వరగా” అనే పదం ఏ పదభేదానికి చెందుతుంది?",
        options: ["నామవాచకం", "విశేషణం", "క్రియావిశేషణం", "సర్వనామం"],
        correct: 2,
        explanation: "“త్వరగా” అనే పదం “వెళ్లాడు” అనే క్రియను ఎలా చేశాడో తెలియజేస్తుంది. క్రియను విశేషించే పదాన్ని క్రియావిశేషణం అంటారు. అందువల్ల “త్వరగా” క్రియావిశేషణం అవుతుంది."
    },
    {
        question: "క్రింది వాక్యాలలో సర్వనామం ఉపయోగించబడిన వాక్యం ఏది?",
        options: ["సీత పుస్తకం చదివింది.", "అతడు పుస్తకం చదివాడు.", "మంచి బాలుడు బహుమతి పొందాడు.", "బాలుడు వేగంగా పరుగెత్తాడు."],
        correct: 1,
        explanation: "“అతడు” అనే పదం ఒక వ్యక్తి పేరుకు బదులుగా ఉపయోగించబడింది. నామవాచకానికి బదులుగా ఉపయోగించే పదాన్ని సర్వనామం అంటారు. కాబట్టి సరైన జవాబు B."
    },
    {
        question: "“తెలివైన విద్యార్థి ప్రశ్నకు సమాధానం చెప్పాడు.” ఈ వాక్యంలో “తెలివైన” అనే పదం ఏది?",
        options: ["నామవాచకం", "సర్వనామం", "విశేషణం", "క్రియావిశేషణం"],
        correct: 2,
        explanation: "“తెలివైన” అనే పదం “విద్యార్థి” అనే నామవాచకానికి గుణాన్ని తెలియజేస్తుంది. నామవాచకం లేదా సర్వనామం యొక్క లక్షణాన్ని తెలిపే పదాన్ని విశేషణం అంటారు."
    },
    {
        question: "క్రింది వాటిలో భావవాచక నామవాచకం ఏది?",
        options: ["పుస్తకం", "బాలుడు", "అందం", "చెట్టు"],
        correct: 2,
        explanation: "“అందం” అనేది ప్రత్యక్షంగా కనిపించే వ్యక్తి లేదా వస్తువు పేరు కాదు; ఒక గుణం లేదా భావాన్ని సూచిస్తుంది. అందువల్ల ఇది భావవాచక నామవాచకంగా పరిగణించబడుతుంది."
    },
    {
        question: "క్రింది జతలలో వ్యక్తివాచక నామవాచకం – జాతివాచక నామవాచకం సరైన జత ఏది?",
        options: ["గోదావరి – నది", "బాలుడు – రాము", "పక్షి – కోయిల", "పుస్తకం – రామాయణం"],
        correct: 0,
        explanation: "“గోదావరి” ఒక నిర్దిష్ట నది పేరు కాబట్టి వ్యక్తివాచకం. “నది” సాధారణ జాతిని సూచిస్తుంది కాబట్టి జాతివాచకం. అందువల్ల ఈ జత సరైనది."
    },
    {
        question: "“అతను తన పుస్తకాన్ని తీసుకున్నాడు.” ఈ వాక్యంలో “తన” అనే పదం ఏ పదభేదానికి చెందుతుంది?",
        options: ["ప్రశ్నార్థక సర్వనామం", "స్వీయార్థక సర్వనామం", "సంబంధసూచక సర్వనామం", "అనిశ్చిత సర్వనామం"],
        correct: 1,
        explanation: "“తన” అనే పదం కర్త అయిన “అతను” వైపే తిరిగి సూచిస్తుంది. కర్తను తిరిగి సూచించే రూపాన్ని స్వీయార్థక సర్వనామంగా ఇక్కడ ఉపయోగించారు."
    },
    {
        question: "క్రింది వాక్యంలో క్రియను గుర్తించండి. “పిల్లలు మైదానంలో ఆడుతున్నారు.”",
        options: ["పిల్లలు", "మైదానంలో", "ఆడుతున్నారు", "లో"],
        correct: 2,
        explanation: "“ఆడుతున్నారు” అనే పదం పిల్లలు చేస్తున్న పనిని తెలియజేస్తుంది. పని లేదా చర్యను తెలియజేసే పదాన్ని క్రియ అంటారు. కాబట్టి ఇది వాక్యంలోని క్రియ."
    },
    {
        question: "“రవి నెమ్మదిగా నడిచాడు.” అనే వాక్యంలో “నెమ్మదిగా” అనే పదం —",
        options: ["నామవాచకాన్ని విశేషిస్తుంది", "సర్వనామాన్ని విశేషిస్తుంది", "క్రియను విశేషిస్తుంది", "విభక్తిని విశేషిస్తుంది"],
        correct: 2,
        explanation: "“నెమ్మదిగా” అనే పదం రవి ఎలా నడిచాడో వివరిస్తుంది. ఇది “నడిచాడు” అనే క్రియను విశేషిస్తోంది. అందువల్ల ఇది క్రియావిశేషణంగా పనిచేస్తుంది."
    },
    {
        question: "క్రింది వాటిలో అవ్యయం ఏది?",
        options: ["రాము", "అందమైన", "నిన్న", "పుస్తకం"],
        correct: 2,
        explanation: "“నిన్న” అనే పదం కాలాన్ని సూచిస్తుంది మరియు రూపాంతరం చెందకుండా ఉపయోగించబడుతుంది. ఇలాంటి మార్పులేని పదాలను అవ్యయాలు అంటారు. అందువల్ల సరైన జవాబు C."
    },
    {
        question: "“రాముడు పాఠశాలకు వెళ్లాడు.” అనే వాక్యంలో “కు” ఏ విభక్తిని సూచిస్తుంది?",
        options: ["ప్రథమా విభక్తి", "ద్వితీయా విభక్తి", "చతుర్థీ విభక్తి", "సప్తమీ విభక్తి"],
        correct: 2,
        explanation: "“పాఠశాలకు” అనే పదంలోని “కు” గమ్యం లేదా ప్రయోజనాన్ని సూచిస్తుంది. తెలుగులో “కు” సాధారణంగా చతుర్థీ విభక్తిని సూచిస్తుంది. కాబట్టి సరైనది C."
    },
    {
        question: "“రాముడు కత్తితో పండును కోశాడు.” ఈ వాక్యంలో “తో” ఏ విభక్తిని సూచిస్తుంది?",
        options: ["తృతీయా విభక్తి", "చతుర్థీ విభక్తి", "పంచమీ విభక్తి", "షష్ఠీ విభక్తి"],
        correct: 0,
        explanation: "“కత్తితో” అనే పదం కత్తిని సాధనంగా ఉపయోగించి పని జరిగినట్లు తెలియజేస్తుంది. సాధనం లేదా సహాయాన్ని సూచించే “తో” తృతీయా విభక్తిని సూచిస్తుంది."
    },
    {
        question: "క్రింది వాక్యాలలో సంబంధాన్ని సూచించే షష్ఠీ విభక్తి ఉన్నది ఏది?",
        options: ["రాముడు పాఠశాలకు వెళ్లాడు.", "రాముని పుస్తకం బల్లపై ఉంది.", "రాముడు కత్తితో కోశాడు.", "రాముడు ఇంటి నుండి వచ్చాడు."],
        correct: 1,
        explanation: "“రాముని పుస్తకం”లో “రాముని” అనే పదం పుస్తకానికి రాముడితో ఉన్న సంబంధాన్ని తెలియజేస్తుంది. సంబంధాన్ని సూచించే రూపం షష్ఠీ విభక్తికి ఉదాహరణ."
    },
    {
        question: "“బాలుడు బంతిని విసిరాడు.” అనే వాక్యంలో “బంతిని” ఏ విభక్తిని సూచిస్తుంది?",
        options: ["ప్రథమా", "ద్వితీయా", "తృతీయా", "చతుర్థీ"],
        correct: 1,
        explanation: "“బంతిని” అనేది క్రియ అయిన “విసిరాడు”కు కర్మగా ఉంది. కర్మను సూచించే విభక్తిని ద్వితీయా విభక్తి అంటారు. అందువల్ల సరైన జవాబు B."
    },
    {
        question: "క్రింది వాక్యాలలో కర్మణి వాక్యం ఏది?",
        options: ["రాము కథ రాశాడు.", "సీత పూలు కోసింది.", "రామునిచే కథ రాయబడింది.", "పిల్లలు ఆట ఆడారు."],
        correct: 2,
        explanation: "“రామునిచే కథ రాయబడింది”లో చర్యను చేసినవాడికంటే చర్యకు గురైన “కథ” ప్రధానంగా ఉంది. అందువల్ల ఇది కర్మణి వాక్యానికి ఉదాహరణ."
    },
    {
        question: "“నీవు ఈ రోజు పాఠశాలకు వెళ్తావా?” ఈ వాక్యం ఏ వాక్యభేదానికి చెందుతుంది?",
        options: ["విధ్యర్థక వాక్యం", "ప్రశ్నార్థక వాక్యం", "ఆశ్చర్యార్థక వాక్యం", "నిషేధార్థక వాక్యం"],
        correct: 1,
        explanation: "ఈ వాక్యం ఒక విషయాన్ని ప్రశ్నిస్తుంది మరియు చివరలో ప్రశ్నార్థక భావాన్ని వ్యక్తపరుస్తుంది. ప్రశ్న అడిగే వాక్యాన్ని ప్రశ్నార్థక వాక్యం అంటారు."
    },
    {
        question: "“అయ్యో! గాజు పగిలిపోయింది!” ఈ వాక్యం ఏ రకానికి చెందుతుంది?",
        options: ["ప్రశ్నార్థక వాక్యం", "ఆశ్చర్యార్థక వాక్యం", "ఆజ్ఞార్థక వాక్యం", "సామాన్య వాక్యం"],
        correct: 1,
        explanation: "“అయ్యో!” అనే పదం విచారం లేదా ఆశ్చర్యభావాన్ని వ్యక్తపరుస్తుంది. బలమైన భావోద్వేగాన్ని వ్యక్తపరిచే వాక్యాన్ని ఆశ్చర్యార్థక వాక్యం అంటారు. కాబట్టి B సరైనది."
    },
    {
        question: "క్రింది వాటిలో ఆజ్ఞార్థక వాక్యం ఏది?",
        options: ["నీవు ఎక్కడికి వెళ్తున్నావు?", "అతను నిన్న వచ్చాడు.", "దయచేసి తలుపు మూయండి.", "ఎంత అందమైన దృశ్యం!"],
        correct: 2,
        explanation: "“దయచేసి తలుపు మూయండి”లో ఒక పనిని చేయమని ఆదేశం లేదా అభ్యర్థన ఉంది. ఆజ్ఞ, అభ్యర్థన, సూచనలను వ్యక్తపరిచే వాక్యాన్ని ఆజ్ఞార్థక వాక్యం అంటారు."
    },
    {
        question: "“వర్షం పడితే నేను ఇంట్లోనే ఉంటాను.” అనే వాక్యం ప్రధానంగా ఏ సంబంధాన్ని వ్యక్తపరుస్తుంది?",
        options: ["కారణ–ఫలిత సంబంధం", "షరతు–ఫలిత సంబంధం", "వ్యతిరేక సంబంధం", "పోలిక సంబంధం"],
        correct: 1,
        explanation: "“వర్షం పడితే” అనేది ఒక షరతును సూచిస్తుంది; “ఇంట్లోనే ఉంటాను” దాని ఫలితాన్ని తెలియజేస్తుంది. కాబట్టి ఇది షరతు–ఫలిత సంబంధాన్ని వ్యక్తపరుస్తుంది."
    },
    {
        question: "క్రింది వాటిలో కర్త–క్రియ అన్వయం సరిగా ఉన్న వాక్యం ఏది?",
        options: ["పిల్లలు మైదానంలో ఆడుతున్నాడు.", "బాలుడు మైదానంలో ఆడుతున్నారు.", "పిల్లలు మైదానంలో ఆడుతున్నారు.", "బాలికలు పాఠశాలకు వెళ్లాడు."],
        correct: 2,
        explanation: "“పిల్లలు” బహువచన కర్త. దీనికి అనుగుణంగా “ఆడుతున్నారు” అనే బహువచన క్రియ ఉపయోగించబడింది. కాబట్టి కర్త–క్రియ అన్వయం ఈ వాక్యంలో సరిగ్గా ఉంది."
    },
    {
        question: "క్రింది వాక్యంలో విశేషణం–విశేష్యం సరైన జతను గుర్తించండి. “పచ్చని చెట్టు నీడనిచ్చింది.”",
        options: ["పచ్చని – చెట్టు", "చెట్టు – నీడ", "నీడ – ఇచ్చింది", "పచ్చని – ఇచ్చింది"],
        correct: 0,
        explanation: "“పచ్చని” అనే పదం “చెట్టు” యొక్క లక్షణాన్ని తెలియజేస్తుంది. కాబట్టి “పచ్చని” విశేషణం, “చెట్టు” విశేష్యం. అందువల్ల A సరైన జత."
    },
    {
        question: "క్రింది వాటిలో క్రియావిశేషణం మరియు అది విశేషించే క్రియ సరైన జత ఏది?",
        options: ["వేగంగా – పరుగెత్తాడు", "మంచి – బాలుడు", "పెద్ద – ఇల్లు", "తెలివైన – విద్యార్థి"],
        correct: 0,
        explanation: "“వేగంగా” అనే పదం “పరుగెత్తాడు” అనే క్రియ ఎలా జరిగిందో తెలియజేస్తుంది. కాబట్టి ఇది క్రియావిశేషణం–క్రియకు సరైన జత."
    },
    {
        question: "క్రింది పదాలలో సర్వనామం కానిది ఏది?",
        options: ["నేను", "ఎవరు", "ఇది", "అందమైన"],
        correct: 3,
        explanation: "“నేను”, “ఎవరు”, “ఇది” అనే పదాలు నామవాచకాలకు బదులుగా ఉపయోగించగల సర్వనామాలు. “అందమైన” మాత్రం లక్షణాన్ని తెలిపే విశేషణం."
    },
    {
        question: "క్రింది వాక్యాలను పరిశీలించండి. i) రాము పాఠశాలకు వెళ్లాడు. ii) అతడు పాఠశాలకు వెళ్లాడు. iii) మంచి బాలుడు పాఠశాలకు వెళ్లాడు. iv) అతను త్వరగా నడిచాడు. సర్వనామం ఉన్న వాక్యాల సముదాయం ఏది?",
        options: ["i, ii మాత్రమే", "ii, iv మాత్రమే", "i, iii మాత్రమే", "iii, iv మాత్రమే"],
        correct: 1,
        explanation: "iiలో “అతడు”, ivలో “అతను” నామవాచకానికి బదులుగా ఉపయోగించిన సర్వనామాలు. iలో “రాము”, iiiలో “బాలుడు” నామవాచకాలు. కాబట్టి ii, iv మాత్రమే."
    },
    {
        question: "క్రింది జతలను పరిశీలించండి. i) ఇంటి నుండి — పంచమీ విభక్తి ii) రాముని పుస్తకం — షష్ఠీ విభక్తి iii) కత్తితో — తృతీయా విభక్తి iv) పాఠశాలకు — చతుర్థీ విభక్తి. సరైనవి ఏవి?",
        options: ["i, ii మాత్రమే", "i, iii మాత్రమే", "ii, iii, iv మాత్రమే", "i, ii, iii, iv"],
        correct: 3,
        explanation: "“నుండి” పంచమీ, “రాముని” సంబంధాన్ని సూచించే షష్ఠీ, “తో” తృతీయా, “కు” చతుర్థీ విభక్తులను సూచిస్తాయి. కాబట్టి నాలుగు జతలూ సరైనవి."
    },
    {
        question: "క్రింది వాక్యాల పరిశీలనలో క్రియావిశేషణం కలిగిన వాక్యాల సముదాయం ఏది? i) బాలుడు వేగంగా పరుగెత్తాడు. ii) ఆమె మంచి విద్యార్థిని. iii) రాము నిన్న వచ్చాడు. iv) తెలివైన బాలుడు గెలిచాడు.",
        options: ["i, iii మాత్రమే", "i, ii మాత్రమే", "ii, iv మాత్రమే", "iii, iv మాత్రమే"],
        correct: 0,
        explanation: "iలో “వేగంగా”, iiiలో “నిన్న” క్రియను విశేషిస్తున్నాయి. iiలో “మంచి”, ivలో “తెలివైన” నామవాచకాలను విశేషించే విశేషణాలు. కాబట్టి i, iii మాత్రమే."
    },
    {
        question: "Identify the noun in the following sentence: “The teacher praised the student.”",
        options: ["teacher", "praised", "the", "the"],
        correct: 0,
        explanation: "“Teacher” is a noun because it names a person. “Praised” is a verb, while “the” is an article. Therefore, “teacher” is the required noun in this sentence."
    },
    {
        question: "Which of the following contains a pronoun?",
        options: ["Ravi bought a book.", "She bought a book.", "Ravi bought an interesting book.", "The student bought a book."],
        correct: 1,
        explanation: "“She” is a pronoun because it replaces or represents a person’s name. The other sentences use nouns such as Ravi, student, and book instead."
    },
    {
        question: "Identify the adjective in the sentence: “The little boy opened the heavy box.”",
        options: ["boy", "opened", "little", "box"],
        correct: 2,
        explanation: "“Little” describes the noun “boy,” so it functions as an adjective. It provides information about the boy’s size or degree, modifying the noun directly."
    },
    {
        question: "Identify the adverb in the sentence: “The child answered the question correctly.”",
        options: ["child", "answered", "question", "correctly"],
        correct: 3,
        explanation: "“Correctly” describes how the child answered the question. Since it modifies the verb “answered” by expressing manner, it functions as an adverb in this sentence."
    },
    {
        question: "Which word functions as a verb in the sentence? “The students discussed the problem.”",
        options: ["students", "discussed", "problem", "the"],
        correct: 1,
        explanation: "“Discussed” expresses the action performed by the students. Therefore, it functions as the main verb. “Students” and “problem” are nouns, while “the” is an article."
    },
    {
        question: "Choose the correct helping verb: “The children ______ playing in the garden.”",
        options: ["is", "am", "are", "was"],
        correct: 2,
        explanation: "“Children” is a plural subject, so the helping verb “are” agrees with it. The present continuous structure is “are playing,” making C correct."
    },
    {
        question: "Choose the correct ordinary verb form: “She ______ to school every day.”",
        options: ["go", "goes", "going", "gone"],
        correct: 1,
        explanation: "The subject “She” is third-person singular, and “every day” indicates simple present tense. Therefore, the verb “go” takes the singular form “goes.”"
    },
    {
        question: "Choose the grammatically correct sentence.",
        options: ["He don't like coffee.", "He doesn't likes coffee.", "He doesn't like coffee.", "He not like coffee."],
        correct: 2,
        explanation: "With the singular subject “He,” we use “doesn't.” After “doesn't,” the main verb remains in base form, so “doesn't like” is grammatically correct."
    },
    {
        question: "Choose the correct option: “Neither the teacher nor the students ______ ready.”",
        options: ["is", "was", "are", "has"],
        correct: 2,
        explanation: "With “neither...nor,” the verb generally agrees with the nearer subject. The nearer subject is plural “students,” so the plural verb “are” is correct."
    },
    {
        question: "Choose the correct verb: “Each of the boys ______ a notebook.”",
        options: ["have", "has", "are having", "were having"],
        correct: 1,
        explanation: "“Each” is grammatically singular even though it refers to members of a group. Therefore, it takes the singular verb “has,” making option B correct."
    },
    {
        question: "Choose the correct sentence based on subject–verb agreement.",
        options: ["The list of names are on the table.", "The list of names is on the table.", "The list of names were on the table.", "The list of names have on the table."],
        correct: 1,
        explanation: "The main subject is singular “list,” not the plural noun “names.” Therefore, the singular verb “is” must agree with “list,” making sentence B correct."
    },
    {
        question: "In the sentence “My brother can swim very well,” the word “can” is a:",
        options: ["Main verb", "Modal auxiliary", "Noun", "Adjective"],
        correct: 1,
        explanation: "“Can” is a modal auxiliary verb. It combines with the base form “swim” to express ability. Therefore, it is not the main lexical verb."
    },
    {
        question: "Identify the function of the modal in the sentence: “You should consult a doctor.”",
        options: ["Ability", "Permission", "Advice", "Possibility"],
        correct: 2,
        explanation: "The modal “should” commonly expresses advice or recommendation. In this sentence, it suggests that consulting a doctor is advisable, so the correct function is advice."
    },
    {
        question: "Choose the correct form: “There ______ many students in the classroom.”",
        options: ["is", "was", "are", "has"],
        correct: 2,
        explanation: "The noun following “there” is the plural noun “students.” Therefore, the present-tense plural verb “are” is required. The correct sentence is “There are many students.”"
    },
    {
        question: "Which sentence contains an adverb modifying a verb?",
        options: ["She is a careful driver.", "She drives carefully.", "She is careful.", "She has a careful attitude."],
        correct: 1,
        explanation: "In “She drives carefully,” the adverb “carefully” modifies the verb “drives” by describing how the action is performed. Therefore, option B is correct."
    },
    {
        question: "Choose the correct option: “One of my friends ______ in Hyderabad.”",
        options: ["live", "lives", "living", "are living"],
        correct: 1,
        explanation: "The subject is “One,” which is singular, while “of my friends” is a modifying phrase. Therefore, the singular verb “lives” is required."
    },
    {
        question: "Identify the pronoun in the sentence: “The teacher gave them the books.”",
        options: ["teacher", "gave", "them", "books"],
        correct: 2,
        explanation: "“Them” is a personal pronoun functioning as the object of “gave.” The words “teacher” and “books” are nouns, while “gave” is the verb."
    },
    {
        question: "Which of the following is a proper noun?",
        options: ["city", "river", "India", "country"],
        correct: 2,
        explanation: "“India” is the specific name of a country, so it is a proper noun. “City,” “river,” and “country” are common nouns."
    },
    {
        question: "Identify the type of the underlined word: “The beautiful flowers attracted everyone.”",
        options: ["Noun", "Pronoun", "Adjective", "Adverb"],
        correct: 2,
        explanation: "“Beautiful” describes the noun “flowers,” telling us their quality. A word that modifies or describes a noun is an adjective, so option C is correct."
    },
    {
        question: "Choose the correct verb: “The news ______ true.”",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "“News” ends in “s” but is treated as a singular uncountable noun in standard English. Therefore, it takes the singular verb “is.”"
    },
    {
        question: "Choose the correct sentence.",
        options: ["Mathematics are my favourite subject.", "Mathematics is my favourite subject.", "Mathematics were my favourite subject.", "Mathematics have been my favourite subject."],
        correct: 1,
        explanation: "“Mathematics” is the name of an academic subject and normally takes a singular verb. Therefore, “Mathematics is my favourite subject” is grammatically correct."
    },
    {
        question: "Consider the following statements:\n1. A noun can name a person, place, thing or idea.\n2. A pronoun can replace a noun or noun phrase.\n3. An adverb can modify a verb.\nWhich of the above statements are correct?",
        options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
        correct: 3,
        explanation: "All three statements accurately describe basic grammatical functions. Nouns name entities or ideas, pronouns replace nouns or noun phrases, and adverbs can modify verbs."
    },
    {
        question: "Match Column-I with Column-II.\n\nColumn-I: i) quickly  ii) they  iii) honest  iv) teacher\n\nColumn-II: a) Pronoun  b) Adverb  c) Adjective  d) Noun",
        options: ["i-b, ii-a, iii-c, iv-d", "i-a, ii-b, iii-d, iv-c", "i-c, ii-a, iii-b, iv-d", "i-b, ii-c, iii-a, iv-d"],
        correct: 0,
        explanation: "“Quickly” is an adverb, “they” is a pronoun, “honest” is an adjective, and “teacher” is a noun. Therefore, the first matching option is correct."
    },
    {
        question: "Choose the correct sentence.",
        options: ["The quality of these apples are good.", "The quality of these apples is good.", "The quality of these apples have good.", "The quality of these apples were good."],
        correct: 1,
        explanation: "The main subject is singular “quality,” while “of these apples” is a prepositional phrase. Therefore, the singular verb “is” correctly agrees with “quality.”"
    },
    {
        question: "Identify the parts of speech of the underlined words: “The young boy ran quickly.”",
        options: ["young – noun; quickly – adjective", "young – adjective; quickly – adverb", "young – adverb; quickly – adjective", "young – pronoun; quickly – verb"],
        correct: 1,
        explanation: "“Young” describes the noun “boy,” so it is an adjective. “Quickly” modifies the verb “ran,” so it is an adverb. Therefore, B is correct."
    }
];