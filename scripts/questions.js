const SUBJECTS = [
    "CDP",
    "English"
];

const QUESTIONS = [
    {
        question: "విద్యార్థి సరైన సమాధానం చెప్పిన ప్రతిసారి ఉపాధ్యాయుడు ప్రశంసిస్తే అది",
        options: ["శిక్ష", "పునర్బలనం", "అనుకరణ", "అవగాహన"],
        correct: 1,
        explanation: "విద్యార్థి సరైన ప్రవర్తన తర్వాత ప్రశంస అందుకోవడం వల్ల ఆ ప్రవర్తన మళ్లీ జరగే అవకాశం పెరుగుతుంది. దీనిని పునర్బలనం (Reinforcement) అంటారు."
    },
    {
        question: "మాస్లో అవసరాల సిద్ధాంతంలో అత్యున్నత స్థాయి అవసరం",
        options: ["భద్రత", "శారీరక అవసరాలు", "ఆత్మసాక్షాత్కారం", "ప్రేమ మరియు అనుబంధం"],
        correct: 2,
        explanation: "మాస్లో అవసరాల క్రమంలో అత్యున్నత స్థానం ఆత్మసాక్షాత్కారం. వ్యక్తి తన సామర్థ్యాలను పూర్తిగా అభివృద్ధి చేసుకోవాలనే అవసరాన్ని ఇది సూచిస్తుంది."
    },
    {
        question: "విద్యార్థి చదవడానికి అంతర్గత ఆసక్తితో కృషి చేయడం",
        options: ["బాహ్య ప్రేరణ", "అంతర్గత ప్రేరణ", "ప్రతికూల ప్రేరణ", "బలవంతపు ప్రేరణ"],
        correct: 1,
        explanation: "వ్యక్తి స్వంత ఆసక్తి, ఆనందం లేదా సంతృప్తి కోసం చేసే కృషిని అంతర్గత ప్రేరణ అంటారు. దీనికి బాహ్య బహుమతులు అవసరం ఉండవు."
    },
    {
        question: "“పురస్కారం ప్రవర్తనను బలపరుస్తుంది” అని చెప్పిన మనోవిజ్ఞాన శాస్త్రవేత్త",
        options: ["స్కిన్నర్", "పియాజే", "కోహ్ల్బర్గ్", "బ్రూనర్"],
        correct: 0,
        explanation: "బి.ఎఫ్. స్కిన్నర్ ఆపరెంట్ కండిషనింగ్ సిద్ధాంతంలో పురస్కారాలు ప్రవర్తనను బలపరుస్తాయని వివరించాడు. ఇది అభ్యసనంలో ముఖ్యమైన భావన."
    },
    {
        question: "క్రింది వాటిలో విద్యార్థుల అభ్యసనానికి అత్యంత శక్తివంతమైన ప్రేరణ ఏది?",
        options: ["శిక్ష", "పరీక్ష భయం", "విజయం అనుభవం", "పోటీ"],
        correct: 2,
        explanation: "విజయం అనుభవం విద్యార్థిలో ఆత్మవిశ్వాసాన్ని పెంచి మరింత నేర్చుకోవాలనే ఆసక్తిని కలిగిస్తుంది. అందువల్ల ఇది బలమైన ప్రేరణగా పనిచేస్తుంది."
    },
    {
        question: "తరగతి గదిలో ఆసక్తి మరియు ఉత్సాహం పెంచడానికి ఉపాధ్యాయుడు ఎక్కువగా ఉపయోగించవలసినది",
        options: ["పునరావృతం", "పునర్బలనం", "నిర్బంధం", "పరీక్ష"],
        correct: 1,
        explanation: "సానుకూల పునర్బలనం విద్యార్థులలో ఆసక్తి, పాల్గొనడం మరియు ఉత్సాహాన్ని పెంచుతుంది. ప్రశంసలు, బహుమతులు దీనికి ఉదాహరణలు."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి. a) ప్రేరణ అభ్యసనాన్ని ప్రభావితం చేస్తుంది b) ప్రేరణ లేకుండా కూడా సమర్థవంతమైన అభ్యసనం జరుగుతుంది",
        options: ["a మాత్రమే సరైనది", "b మాత్రమే సరైనది", "రెండూ సరైనవి", "రెండూ తప్పు"],
        correct: 0,
        explanation: "ప్రేరణ అభ్యసన నాణ్యతను ప్రభావితం చేస్తుంది. సరైన ప్రేరణ లేకుండా సమర్థవంతమైన అభ్యసనం సాధారణంగా జరగదు."
    },
    {
        question: "ఒక విద్యార్థి ఉపాధ్యాయుడు చెప్పే విషయాన్ని మాత్రమే గమనించి మిగిలిన శబ్దాలను విస్మరిస్తే అది",
        options: ["విభజిత అవధానం", "ఎంపిక చేసిన అవధానం", "అనైచ్ఛిక అవధానం", "వ్యాప్త అవధానం"],
        correct: 1,
        explanation: "అనేక ఉద్దీపనలలో ఒకదానిపై మాత్రమే దృష్టి కేంద్రీకరించి మిగతావాటిని విస్మరించడాన్ని ఎంపిక చేసిన అవధానం అంటారు."
    },
    {
        question: "అవధానాన్ని ఎక్కువసేపు కొనసాగించే సామర్థ్యాన్ని",
        options: ["గ్రహణం", "నిలకడైన అవధానం", "స్మరణ", "అవగాహన"],
        correct: 1,
        explanation: "ఒక పనిపై లేదా ఉద్దీపనపై ఎక్కువసేపు దృష్టిని నిలుపుకోవడాన్ని నిలకడైన అవధానం లేదా Sustained Attention అంటారు."
    },
    {
        question: "పెద్ద శబ్దం వినిపించగానే విద్యార్థి దృష్టి ఆ దిశగా మళ్లితే అది",
        options: ["స్వచ్ఛంద అవధానం", "అనైచ్ఛిక అవధానం", "ఎంపిక అవధానం", "స్థిర అవధానం"],
        correct: 1,
        explanation: "ఆకస్మికంగా వచ్చిన శబ్దం వంటి బాహ్య ఉద్దీపనల కారణంగా స్వయంచాలకంగా దృష్టి మళ్లడాన్ని అనైచ్ఛిక అవధానం అంటారు."
    },
    {
        question: "అవధాన వ్యవధిని ప్రభావితం చేయని అంశం",
        options: ["ఆసక్తి", "ఆరోగ్యం", "వయస్సు", "రక్తగ్రూప్"],
        correct: 3,
        explanation: "ఆసక్తి, ఆరోగ్యం, వయస్సు అవధానాన్ని ప్రభావితం చేస్తాయి. రక్తగ్రూప్‌కు అవధాన వ్యవధితో ప్రత్యక్ష సంబంధం లేదు."
    },
    {
        question: "ఒకేసారి రెండు పనులపై దృష్టి పెట్టడాన్ని",
        options: ["స్థిర అవధానం", "విభజిత అవధానం", "ఎంపిక అవధానం", "కేంద్రీకరణ"],
        correct: 1,
        explanation: "ఒకేసారి రెండు లేదా అంతకంటే ఎక్కువ పనులపై దృష్టిని విభజించి పనిచేయడాన్ని విభజిత అవధానం అంటారు."
    },
    {
        question: "అవధానం పెరగడానికి ఉపాధ్యాయుడు చేయవలసినది",
        options: ["ఏకరీతి బోధన", "బోధనలో వైవిధ్యం", "దీర్ఘ ఉపన్యాసం", "ఎక్కువ గృహపాఠం"],
        correct: 1,
        explanation: "బోధనలో వైవిధ్యం, చర్చలు, చిత్రాలు, కార్యకలాపాలు విద్యార్థుల ఆసక్తిని పెంచి అవధానాన్ని మెరుగుపరుస్తాయి."
    },
    {
        question: "క్రింది వాటిలో అవధానానికి సంబంధించినది",
        options: ["Concentration", "Retention", "Recall", "Recognition"],
        correct: 0,
        explanation: "Concentration అనేది అవధానానికి సంబంధించిన భావన. ఇది ఒక నిర్దిష్ట విషయంపై మనస్సును కేంద్రీకరించే సామర్థ్యాన్ని సూచిస్తుంది."
    },
    {
        question: "ఉద్దీపనలకు అర్థం ఇవ్వడం",
        options: ["అవధానం", "గ్రహణం", "ప్రేరణ", "స్మరణ"],
        correct: 1,
        explanation: "ఇంద్రియాల ద్వారా వచ్చిన సమాచారాన్ని అర్థవంతంగా వ్యాఖ్యానించే మానసిక ప్రక్రియను గ్రహణం లేదా Perception అంటారు."
    },
    {
        question: "ఒకే చిత్రం కొందరికి భిన్నంగా కనిపించడం కారణం",
        options: ["వ్యక్తిగత అనుభవాలు", "కంటి రంగు", "ఎత్తు", "బరువు"],
        correct: 0,
        explanation: "ప్రతి వ్యక్తి గత అనుభవాలు, ఆసక్తులు, అంచనాల ఆధారంగా సమాచారాన్ని అర్థం చేసుకుంటాడు. అందువల్ల ఒకే చిత్రం భిన్నంగా గ్రహించబడవచ్చు."
    },
    {
        question: "భ్రమలు (Illusions) సంబంధించిన మానసిక ప్రక్రియ",
        options: ["స్మృతి", "ప్రేరణ", "గ్రహణం", "అవధానం"],
        correct: 2,
        explanation: "భ్రమలు ఉద్దీపనలను తప్పుగా అర్థం చేసుకోవడం వల్ల ఏర్పడతాయి. కాబట్టి ఇవి గ్రహణం అనే మానసిక ప్రక్రియకు సంబంధించినవి."
    },
    {
        question: "“మొత్తం భాగాల కంటే గొప్పది” అనే భావన ఏ సిద్ధాంతానికి సంబంధించినది?",
        options: ["ప్రవర్తనావాదం", "గెస్టాల్ట్", "అనుసంధానవాదం", "మానవతావాదం"],
        correct: 1,
        explanation: "గెస్టాల్ట్ సిద్ధాంతం ప్రకారం వ్యక్తి విషయాలను మొత్తం రూపంలో గ్రహిస్తాడు. మొత్తం భాగాల సమాహారంకంటే ఎక్కువ అర్థాన్ని కలిగి ఉంటుంది."
    },
    {
        question: "క్రింది వాటిలో గ్రహణాన్ని ప్రభావితం చేసేది",
        options: ["అనుభవం", "ఆసక్తి", "అంచనాలు", "పైవన్నీ"],
        correct: 3,
        explanation: "వ్యక్తి అనుభవాలు, ఆసక్తులు మరియు అంచనాలు గ్రహణాన్ని ప్రభావితం చేస్తాయి. అందువల్ల సరైన సమాధానం పైవన్నీ."
    },
    {
        question: "తరగతిలో ఒక విద్యార్థి “6” ను “9” గా చదవడం ప్రధానంగా ఏ సమస్యకు ఉదాహరణ?",
        options: ["ప్రేరణ", "గ్రహణం", "అవధానం", "శిక్షణ"],
        correct: 1,
        explanation: "సంఖ్యను తప్పుగా అర్థం చేసుకోవడం గ్రహణ దోషానికి ఉదాహరణ. ఇది సమాచారాన్ని సరిగ్గా వ్యాఖ్యానించలేకపోవడాన్ని సూచిస్తుంది."
    },
    {
        question: "కొద్దిసేపు మాత్రమే సమాచారాన్ని నిల్వచేసే స్మృతి",
        options: ["దీర్ఘకాలిక స్మృతి", "తక్షణ స్మృతి", "శాశ్వత స్మృతి", "అర్థ స్మృతి"],
        correct: 1,
        explanation: "తక్షణ స్మృతి లేదా Short-Term Memory కొద్దిసేపు మాత్రమే సమాచారాన్ని నిల్వ చేస్తుంది. తరువాత అది మరచిపోవచ్చు లేదా దీర్ఘకాలిక స్మృతికి మారవచ్చు."
    },
    {
        question: "దీర్ఘకాలిక స్మృతిలో సమాచారాన్ని నిల్వచేయడానికి ముఖ్యమైన ప్రక్రియ",
        options: ["పునరావృతం", "మరచిపోవడం", "శిక్ష", "అలసట"],
        correct: 0,
        explanation: "పునరావృతం ద్వారా సమాచారం బలపడుతుంది. ఇది దీర్ఘకాలిక స్మృతిలో సమాచారాన్ని నిల్వ చేయడంలో ముఖ్య పాత్ర పోషిస్తుంది."
    },
    {
        question: "స్మృతి ప్రక్రియల సరైన క్రమం",
        options: [
            "Recall → Encoding → Storage",
            "Storage → Recall → Encoding",
            "Encoding → Storage → Recall",
            "Storage → Encoding → Recall"
        ],
        correct: 2,
        explanation: "మొదట సమాచారం Encoding చేయబడుతుంది, తరువాత Storageలో నిల్వ అవుతుంది, అవసరమైనప్పుడు Recall ద్వారా తిరిగి గుర్తుకు తెచ్చుకుంటాం."
    },
    {
        question: "క్రింది వాటిలో గుర్తింపు స్మృతికి ఉదాహరణ",
        options: ["సమాధానం వ్రాయడం", "కవిత చెప్పడం", "ఫోటో చూసి వ్యక్తిని గుర్తించడం", "నిర్వచనం చెప్పడం"],
        correct: 2,
        explanation: "గుర్తింపు స్మృతిలో ముందుగా చూసిన లేదా తెలిసిన విషయాన్ని గుర్తిస్తారు. ఫోటో చూసి వ్యక్తిని గుర్తించడం దీనికి ఉదాహరణ."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి. a) మరచిపోవడం ఎల్లప్పుడూ హానికరం b) అవసరం లేని సమాచారాన్ని తొలగించడంలో మరచిపోవడం సహాయపడుతుంది",
        options: ["a మాత్రమే", "b మాత్రమే", "రెండూ", "రెండూ కాదు"],
        correct: 1,
        explanation: "మరచిపోవడం ఎల్లప్పుడూ హానికరం కాదు. అవసరం లేని సమాచారాన్ని తొలగించి ఉపయోగకరమైన సమాచారానికి స్థలం కల్పిస్తుంది."
    },
    {
        question: "She ____ to school every day.",
        options: ["go", "goes", "went", "going"],
        correct: 1,
        explanation: "‘She’ మూడవ వ్యక్తి ఏకవచనం కాబట్టి Simple Present Tenseలో verb కు ‘s/es’ జతచేయాలి. కాబట్టి ‘goes’ సరైనది."
    },
    {
        question: "They ____ cricket when it started raining.",
        options: ["play", "played", "were playing", "have played"],
        correct: 2,
        explanation: "ఒక పని జరుగుతున్న సమయంలో మరో పని జరిగితే Past Continuous Tense ఉపయోగిస్తారు. కాబట్టి ‘were playing’ సరైన సమాధానం."
    },
    {
        question: "By next year, I ____ this course.",
        options: ["complete", "completed", "will complete", "will have completed"],
        correct: 3,
        explanation: "భవిష్యత్తులో ఒక నిర్దిష్ట సమయానికి ముందు పని పూర్తవుతుందని చెప్పడానికి Future Perfect Tense ఉపయోగిస్తారు."
    },
    {
        question: "He ____ in Hyderabad since 2020.",
        options: ["lives", "lived", "has lived", "is living"],
        correct: 2,
        explanation: "‘Since 2020’ అనే కాల సూచన Present Perfect Tense ను సూచిస్తుంది. కాబట్టి ‘has lived’ సరైన సమాధానం."
    },
    {
        question: "Choose the correct tense. “I ____ my homework already.”",
        options: ["did", "do", "have done", "doing"],
        correct: 2,
        explanation: "‘Already’ అనే పదంతో పూర్తి అయిన పనిని సూచించడానికి Present Perfect Tense ఉపయోగిస్తారు. కాబట్టి ‘have done’ సరైనది."
    },
    {
        question: "If she worked harder, she ____ the exam.",
        options: ["passes", "passed", "would pass", "will pass"],
        correct: 2,
        explanation: "ఇది Second Conditional sentence. If + Past Simple వచ్చినప్పుడు ప్రధాన వాక్యంలో would + verb ఉపయోగిస్తారు. కాబట్టి 'would pass' సరైనది."
    },
    {
        question: "The train ____ before we reached the station.",
        options: ["leaves", "left", "had left", "has left"],
        correct: 2,
        explanation: "గతంలో మరో చర్యకు ముందు పూర్తైన చర్యను సూచించడానికి Past Perfect Tense ఉపయోగిస్తారు. కాబట్టి 'had left' సరైన సమాధానం."
    },
    {
        question: "While the teacher was teaching, the students ____ notes.",
        options: ["take", "took", "were taking", "have taken"],
        correct: 2,
        explanation: "రెండు చర్యలు ఒకేసారి గతంలో కొనసాగుతున్నప్పుడు Past Continuous Tense ఉపయోగిస్తారు. కాబట్టి 'were taking' సరైనది."
    },
    {
        question: "I ____ him yesterday.",
        options: ["see", "saw", "seen", "have seen"],
        correct: 1,
        explanation: "‘Yesterday’ గత కాలాన్ని సూచిస్తుంది. కాబట్టి Simple Past Tense ఉపయోగించి 'saw' అని వ్రాయాలి."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "I am knowing the answer.",
            "I know the answer.",
            "I have knowing the answer.",
            "I knew the answer now."
        ],
        correct: 1,
        explanation: "‘Know’ ఒక stative verb. ఇది సాధారణంగా continuous form లో ఉపయోగించరు. అందువల్ల 'I know the answer' సరైన వాక్యం."
    },
    {
        question: "The letter was written by Raju. Active Voice:",
        options: [
            "Raju writes the letter.",
            "Raju wrote the letter.",
            "Raju has written the letter.",
            "Raju writing the letter."
        ],
        correct: 1,
        explanation: "Passive sentence 'was written' Past Simple Tenseలో ఉంది. Active Voiceలో 'Raju wrote the letter' అవుతుంది."
    },
    {
        question: "Active: The teacher praised the student. Passive:",
        options: [
            "The student was praised by the teacher.",
            "The student is praised by the teacher.",
            "The student has praised by the teacher.",
            "The student praised by the teacher."
        ],
        correct: 0,
        explanation: "Simple Past Active Voiceను Passive Voiceలోకి మార్చినప్పుడు was/were + V3 ఉపయోగిస్తారు. కాబట్టి మొదటి ఎంపిక సరైనది."
    },
    {
        question: "Passive: The work will be completed tomorrow. Active:",
        options: [
            "They complete the work tomorrow.",
            "They will complete the work tomorrow.",
            "They completed the work tomorrow.",
            "They have completed the work tomorrow."
        ],
        correct: 1,
        explanation: "Future Passive Voiceలోని 'will be completed' ను Active Voiceలో 'will complete' గా మారుస్తారు."
    },
    {
        question: "Choose the correct passive form. 'People speak English all over the world.'",
        options: [
            "English is spoken all over the world.",
            "English was spoken all over the world.",
            "English has spoken all over the world.",
            "English speaks all over the world."
        ],
        correct: 0,
        explanation: "Simple Present Active Voiceకు Passive రూపం is/am/are + V3. కాబట్టి 'English is spoken' సరైనది."
    },
    {
        question: "The room ____ every day.",
        options: ["cleans", "cleaned", "is cleaned", "cleaning"],
        correct: 2,
        explanation: "గది శుభ్రం చేయబడుతుంది కాబట్టి Passive Voice అవసరం. Simple Present Passive రూపం 'is cleaned'."
    },
    {
        question: "Active: Somebody stole my bicycle. Passive:",
        options: [
            "My bicycle stole.",
            "My bicycle was stolen.",
            "My bicycle is stolen.",
            "My bicycle has stolen."
        ],
        correct: 1,
        explanation: "Simple Past Active Voiceలోని objectను subjectగా మార్చి was + V3 ఉపయోగిస్తారు. కాబట్టి 'was stolen' సరైనది."
    },
    {
        question: "Choose the correct passive form. 'They are building a bridge.'",
        options: [
            "A bridge is being built.",
            "A bridge was being built.",
            "A bridge has built.",
            "A bridge built."
        ],
        correct: 0,
        explanation: "Present Continuous Passive Voice రూపం is/am/are + being + V3. కాబట్టి 'is being built' సరైనది."
    },
    {
        question: "The homework ____ by the students yesterday.",
        options: ["completed", "was completed", "is completed", "completes"],
        correct: 1,
        explanation: "‘Yesterday’ గత కాలాన్ని సూచిస్తుంది. Passive Voiceలో Simple Past రూపం was/were + V3 అవుతుంది."
    },
    {
        question: "Active: The police arrested the thief. Passive:",
        options: [
            "The thief arrested.",
            "The thief is arrested.",
            "The thief was arrested by the police.",
            "The thief has arrested."
        ],
        correct: 2,
        explanation: "Simple Past Active Voiceను Passive Voiceలోకి మార్చినప్పుడు 'was arrested by the police' రూపం వస్తుంది."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "The meeting has been postponed.",
            "The meeting has postponed.",
            "The meeting postponed.",
            "The meeting being postponed."
        ],
        correct: 0,
        explanation: "Present Perfect Passive Voiceలో has/have been + V3 ఉపయోగిస్తారు. కాబట్టి మొదటి వాక్యం సరైనది."
    },
    {
        question: "Identify the error. 'The project has completed yesterday.'",
        options: ["project", "has completed", "yesterday", "No error"],
        correct: 1,
        explanation: "‘Yesterday’తో Present Perfect ఉపయోగించరు. అలాగే Passive రూపం కావాలి. కాబట్టి 'has completed' భాగంలో తప్పు ఉంది."
    },
    {
        question: "Choose the correct form. 'By 8 PM, she ____ dinner.'",
        options: ["cooks", "cooked", "will cook", "will have cooked"],
        correct: 3,
        explanation: "భవిష్యత్తులో నిర్దిష్ట సమయానికి ముందు పని పూర్తవుతుందని సూచించడానికి Future Perfect Tense ఉపయోగిస్తారు."
    },
    {
        question: "If I had known the answer, I ____ you.",
        options: ["help", "helped", "would have helped", "will help"],
        correct: 2,
        explanation: "ఇది Third Conditional sentence. If + Past Perfect వచ్చినప్పుడు would have + V3 ఉపయోగిస్తారు."
    },
    {
        question: "Passive form of: 'They have finished the work.'",
        options: [
            "The work has finished.",
            "The work has been finished.",
            "The work was finished.",
            "The work is finished."
        ],
        correct: 1,
        explanation: "Present Perfect Passive Voice రూపం has/have been + V3. కాబట్టి 'has been finished' సరైనది."
    },
    {
        question: "Choose the correct tense. 'Look! The children ____ in the playground.'",
        options: ["play", "played", "are playing", "have played"],
        correct: 2,
        explanation: "‘Look!’ అనే సూచన ప్రస్తుతం జరుగుతున్న చర్యను తెలియజేస్తుంది. కాబట్టి Present Continuous Tense ఉపయోగించాలి."
    }
];