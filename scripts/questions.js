const SUBJECTS = [
    "Psychology",
    "ICT",
    "English",
    "Special Education"
];

const QUESTIONS = [
    {
        question: "వృద్ధి (Growth) మరియు అభివృద్ధి (Development) మధ్య సరైన తేడా ఏది?",
        options: [
            "వృద్ధి గుణాత్మక మార్పు, అభివృద్ధి పరిమాణాత్మక మార్పు",
            "వృద్ధి పరిమాణాత్మక మార్పు, అభివృద్ధి పరిమాణాత్మక మరియు గుణాత్మక మార్పుల సమాహారం",
            "రెండూ ఒకే భావన",
            "వృద్ధి జీవితాంతం కొనసాగుతుంది, అభివృద్ధి బాల్యంలోనే ముగుస్తుంది"
        ],
        correct: 1,
        explanation: "వృద్ధి శరీర పరిమాణంలో వచ్చే మార్పులను సూచిస్తుంది. అభివృద్ధి మాత్రం శారీరక, మానసిక, సామాజిక, భావోద్వేగ పరమైన గుణాత్మక మరియు పరిమాణాత్మక మార్పుల సమగ్ర ప్రక్రియగా జీవితాంతం కొనసాగుతుంది."
    },
    {
        question: "క్రింది వాటిలో మూల్యాంకనం (Evaluation) యొక్క ప్రధాన లక్షణం ఏది?",
        options: [
            "విద్యార్థి పనితీరుకు మార్కులు ఇవ్వడం మాత్రమే",
            "సమాచారాన్ని సేకరించడం మాత్రమే",
            "సేకరించిన సమాచారంపై విలువ నిర్ణయం చేయడం",
            "పరీక్ష నిర్వహించడం మాత్రమే"
        ],
        correct: 2,
        explanation: "మూల్యాంకనం అనేది పరీక్షలు, పరిశీలనలు వంటి ఆధారాల ద్వారా సేకరించిన సమాచారాన్ని విశ్లేషించి విద్యార్థి పురోగతి, లక్ష్యాల సాధన మరియు బోధన ప్రభావాన్ని విలువ నిర్ణయం చేసే ప్రక్రియ."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education)లో Accommodation యొక్క ముఖ్య ఉద్దేశ్యం ఏమిటి?",
        options: [
            "పాఠ్యాంశాలను తగ్గించడం",
            "అభ్యాస లక్ష్యాలను మార్చడం",
            "లక్ష్యాలను మార్చకుండా నేర్చుకునే అవకాశాన్ని కల్పించడం",
            "పరీక్షలను తొలగించడం"
        ],
        correct: 2,
        explanation: "Accommodationలో బోధనా పద్ధతి, పరీక్ష సమయం, కూర్చునే స్థానం లేదా సహాయక సాధనాల్లో మార్పులు చేస్తారు. కానీ విద్యార్థి నేర్చుకోవాల్సిన అభ్యాస లక్ష్యాలు లేదా ప్రమాణాలు మారవు."
    },
    {
        question: "Modification గురించి సరైన వాక్యం ఏది?",
        options: [
            "విద్యార్థి కోసం పాఠ్య లక్ష్యాలను మార్చరు",
            "పరీక్ష సమయాన్ని మాత్రమే పెంచుతారు",
            "విద్యార్థి అవసరాలకు అనుగుణంగా అభ్యాస లక్ష్యాలను మారుస్తారు",
            "ఇది Accommodationకు సమానం"
        ],
        correct: 2,
        explanation: "Modificationలో విద్యార్థి సామర్థ్యాన్ని దృష్టిలో ఉంచుకొని పాఠ్యాంశం లేదా అభ్యాస లక్ష్యాలను మార్చుతారు. ఇది Accommodationతో భిన్నం, ఎందుకంటే లక్ష్యాలే సవరించబడతాయి."
    },
    {
        question: "\"beautiful\" అనే పదాన్ని విద్యార్థి తరచుగా \"dueatiful\"గా వ్రాస్తున్నాడు. ఇది ప్రధానంగా ఏ సమస్యకు సూచన?",
        options: [
            "డిస్కాల్కులియా (Dyscalculia)",
            "డిస్‌గ్రాఫియా (Dysgraphia)",
            "డిస్‌లెక్సియా (Dyslexia)",
            "డైస్ప్రాక్సియా (Dyspraxia)"
        ],
        correct: 2,
        explanation: "పదాలను తప్పుగా చదవడం, అక్షరాల క్రమాన్ని మార్చడం లేదా స్పెల్లింగ్‌లో పొరపాట్లు చేయడం డిస్‌లెక్సియా లక్షణాలు. ఇది ప్రధానంగా చదవడం మరియు భాషా ప్రాసెసింగ్‌కు సంబంధించిన అభ్యాస లోపం."
    },
    {
        question: "అక్షరాలను స్పష్టంగా వ్రాయడంలో ఇబ్బంది పడే విద్యార్థిలో ఎక్కువగా కనిపించే సమస్య ఏది?",
        options: [
            "డిస్‌లెక్సియా",
            "డిస్‌గ్రాఫియా",
            "డిస్కాల్కులియా",
            "ADHD"
        ],
        correct: 1,
        explanation: "డిస్‌గ్రాఫియా ఉన్న విద్యార్థులకు అక్షరాల ఆకారం, స్పేసింగ్, వ్రాత వేగం మరియు చేతివ్రాత స్పష్టతలో ఇబ్బందులు ఉంటాయి. ఇది ప్రధానంగా వ్రాత నైపుణ్యాలకు సంబంధించిన అభ్యాస లోపం."
    },
    {
        question: "స్కిన్నర్ ప్రకారం విద్యార్థి మంచి పనితీరును ప్రశంసించడం ఏది?",
        options: [
            "శిక్ష (Punishment)",
            "ప్రతికూల పునర్బలం (Negative Reinforcement)",
            "సానుకూల పునర్బలం (Positive Reinforcement)",
            "నిరోధం (Extinction)"
        ],
        correct: 2,
        explanation: "సరైన ప్రవర్తన తర్వాత ప్రశంస, బహుమతి లేదా ప్రోత్సాహం ఇవ్వడం ద్వారా ఆ ప్రవర్తన మళ్లీ జరగే అవకాశాన్ని పెంచడం సానుకూల పునర్బలం అని స్కిన్నర్ వివరించాడు."
    },
    {
        question: "Negative Reinforcement అంటే ఏమిటి?",
        options: [
            "తప్పు చేసినందుకు శిక్షించడం",
            "ఇష్టంలేని పరిస్థితిని తొలగించి సరైన ప్రవర్తనను పెంచడం",
            "మంచి పనికి బహుమతి ఇవ్వడం",
            "ప్రవర్తనను పూర్తిగా నిర్లక్ష్యం చేయడం"
        ],
        correct: 1,
        explanation: "Negative Reinforcementలో శిక్ష ఉండదు. విద్యార్థి సరైన ప్రవర్తన చూపినప్పుడు అసౌకర్యం లేదా ఇష్టంలేని పరిస్థితిని తొలగించడం ద్వారా ఆ ప్రవర్తనను బలపరుస్తారు."
    },
    {
        question: "Intelligence మరియు Aptitude మధ్య సరైన తేడా ఏది?",
        options: [
            "రెండూ ఒకే భావన",
            "Intelligence భవిష్యత్ సామర్థ్యాన్ని, Aptitude ప్రస్తుత సామర్థ్యాన్ని కొలుస్తుంది",
            "Intelligence సాధారణ మేధస్సు; Aptitude నిర్దిష్ట రంగంలో సామర్థ్యాన్ని సూచిస్తుంది",
            "రెండూ విద్యా ఫలితాలను మాత్రమే కొలుస్తాయి"
        ],
        correct: 2,
        explanation: "Intelligence వ్యక్తి యొక్క సాధారణ మేధస్సు మరియు సమస్య పరిష్కార సామర్థ్యాన్ని సూచిస్తుంది. Aptitude మాత్రం సంగీతం, గణితం లేదా భాష వంటి నిర్దిష్ట రంగాల్లో భవిష్యత్ సామర్థ్యాన్ని సూచిస్తుంది."
    },
    {
        question: "Guidance మరియు Counselling మధ్య సరైన జత ఏది?",
        options: [
            "రెండూ ఒకే ప్రక్రియ",
            "Guidance వ్యక్తిగత సమస్యల పరిష్కారం మాత్రమే",
            "Counselling వ్యక్తిగత పరస్పర చర్య; Guidance విస్తృత మార్గదర్శక ప్రక్రియ",
            "Guidance నిపుణులు మాత్రమే అందించగలరు"
        ],
        correct: 2,
        explanation: "Guidance విద్య, వృత్తి మరియు వ్యక్తిగత అభివృద్ధికి సంబంధించిన విస్తృత మార్గదర్శక ప్రక్రియ. Counselling మాత్రం వ్యక్తిగత సమస్యలను పరిష్కరించేందుకు పరస్పర చర్చ ద్వారా అందించే సహాయక సేవ."
    },
    {
        question: "Identify the error.\n\nEach of the students have submitted the assignment.",
        options: [
            "Each",
            "of the students",
            "have",
            "submitted the assignment"
        ],
        correct: 2,
        explanation: "The subject 'Each' is singular, so it requires the singular verb 'has'. The correct sentence is 'Each of the students has submitted the assignment.'"
    },
    {
        question: "Identify the error.\n\nShe is good in Mathematics.",
        options: [
            "She",
            "is",
            "in",
            "Mathematics"
        ],
        correct: 2,
        explanation: "The adjective 'good' takes the preposition 'at' when referring to skill or ability. Therefore, the correct expression is 'good at Mathematics.'"
    },
    {
        question: "Identify the error.\n\nNeither the teacher nor the students was present.",
        options: [
            "Neither",
            "teacher",
            "students",
            "was"
        ],
        correct: 3,
        explanation: "With 'Neither...nor', the verb agrees with the subject nearest to it. Since 'students' is plural, the correct verb is 'were' instead of 'was'."
    },
    {
        question: "Identify the error.\n\nHe has been working here since three years.",
        options: [
            "has been",
            "working",
            "since",
            "three years"
        ],
        correct: 2,
        explanation: "Use 'for' to indicate a period or duration of time and 'since' to indicate a specific starting point. Therefore, 'for three years' is correct."
    },
    {
        question: "Identify the error.\n\nOne of my friends are a Special Educator.",
        options: [
            "One",
            "my friends",
            "are",
            "Special Educator"
        ],
        correct: 2,
        explanation: "The subject is 'One', which is singular. Therefore, the singular verb 'is' should be used. The correct sentence is 'One of my friends is a Special Educator.'"
    },
    {
        question: "Identify the error.\n\nThe Principal as well as the teachers were present.",
        options: [
            "Principal",
            "as well as",
            "teachers",
            "were"
        ],
        correct: 3,
        explanation: "The phrase 'as well as' does not change the number of the main subject. 'Principal' is singular, so the correct verb is 'was', not 'were'."
    },
    {
        question: "Identify the error.\n\nThe information are useful for teachers.",
        options: [
            "information",
            "are",
            "useful",
            "teachers"
        ],
        correct: 1,
        explanation: "The noun 'information' is uncountable and always takes a singular verb. Therefore, the correct sentence is 'The information is useful for teachers.'"
    },
    {
        question: "నిర్మాణాత్మక మూల్యాంకనం (Formative Assessment) యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        options: [
            "తుది గ్రేడ్ నిర్ణయించడం",
            "అభ్యాస ప్రక్రియలో అభిప్రాయం ఇచ్చి అభివృద్ధిని మెరుగుపరచడం",
            "విద్యార్థులను ర్యాంకుల ప్రకారం విభజించడం",
            "ప్రమోషన్ నిర్ణయించడం"
        ],
        correct: 1,
        explanation: "నిర్మాణాత్మక మూల్యాంకనం బోధన జరుగుతున్న సమయంలోనే విద్యార్థి పురోగతిని తెలుసుకొని తక్షణ అభిప్రాయం ఇవ్వడానికి ఉపయోగపడుతుంది. దీనివల్ల బోధనలో మార్పులు చేసి అభ్యాసాన్ని మరింత సమర్థవంతంగా చేయవచ్చు."
    },
    {
        question: "సమ్మేటివ్ మూల్యాంకనం (Summative Assessment) సాధారణంగా ఎప్పుడు నిర్వహిస్తారు?",
        options: [
            "ప్రతి పాఠం అనంతరం",
            "బోధన ప్రారంభానికి ముందు",
            "యూనిట్/టర్మ్ ముగింపులో",
            "ప్రతి తరగతి ప్రారంభంలో"
        ],
        correct: 2,
        explanation: "Summative Assessment సాధారణంగా యూనిట్, సెమిస్టర్ లేదా టర్మ్ ముగింపులో నిర్వహించబడుతుంది. ఇది విద్యార్థి మొత్తం అభ్యాస ఫలితాన్ని కొలిచి గ్రేడ్ లేదా ప్రమోషన్ నిర్ణయానికి ఉపయోగపడుతుంది."
    },
    {
        question: "క్రింది వాటిలో ప్రమాణ ఆధారిత మూల్యాంకనం (Criterion-referenced Assessment)కు ఉదాహరణ ఏది?",
        options: [
            "తరగతిలో మొదటి 10 మంది ఎంపిక",
            "ఇతర విద్యార్థులతో పోల్చి మార్కులు ఇవ్వడం",
            "నిర్ణయించిన అభ్యాస ఫలితాలను విద్యార్థి సాధించాడా లేదా అనేది నిర్ధారించడం",
            "శాతం ఆధారంగా ర్యాంకులు ఇవ్వడం"
        ],
        correct: 2,
        explanation: "Criterion-referenced Assessmentలో విద్యార్థి పనితీరును ముందుగా నిర్ణయించిన అభ్యాస ప్రమాణాలతో పోలుస్తారు. ఇతర విద్యార్థుల పనితీరుతో పోల్చకుండా లక్ష్యాలను సాధించాడా లేదా అనే అంశాన్ని పరిశీలిస్తారు."
    },
    {
        question: "Norm-referenced Assessment యొక్క ప్రధాన లక్షణం ఏమిటి?",
        options: [
            "నిర్దిష్ట లక్ష్యాలతో పోల్చడం",
            "ఇతర విద్యార్థులతో పనితీరును పోల్చడం",
            "వ్యక్తిగత IEP లక్ష్యాలను కొలవడం",
            "నిరంతర పరిశీలన చేయడం"
        ],
        correct: 1,
        explanation: "Norm-referenced Assessmentలో ఒక విద్యార్థి పనితీరును అదే సమూహంలోని ఇతర విద్యార్థులతో పోల్చుతారు. ర్యాంకులు, శాతాలు మరియు సాపేక్ష స్థానం నిర్ణయించడానికి ఇది ఉపయోగపడుతుంది."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education) మరియు సమీకృత విద్య (Integrated Education) మధ్య ప్రధాన తేడా ఏమిటి?",
        options: [
            "రెండూ ఒకే భావన",
            "సమీకృత విద్యలో విద్యార్థి వ్యవస్థకు అనుగుణంగా మారాలి; సమగ్ర విద్యలో వ్యవస్థ విద్యార్థికి అనుగుణంగా మారాలి",
            "సమగ్ర విద్య ప్రత్యేక పాఠశాలల్లో మాత్రమే ఉంటుంది",
            "సమీకృత విద్యలో IEP ఉండదు"
        ],
        correct: 1,
        explanation: "Integrated Educationలో విద్యార్థి ప్రస్తుత విద్యా వ్యవస్థకు అనుగుణంగా మారాలి. Inclusive Educationలో మాత్రం పాఠశాల, బోధన మరియు వాతావరణం విద్యార్థి అవసరాలకు అనుగుణంగా సవరించబడుతుంది."
    },
    {
        question: "RPWD Act–2016 ప్రకారం \"Impairment\" అనే పదం ప్రధానంగా దేనిని సూచిస్తుంది?",
        options: [
            "సామాజిక పరిమితి",
            "శారీరక లేదా మానసిక క్రియలో లోపం",
            "విద్యా వెనుకబాటు",
            "ఉపాధి లోపం"
        ],
        correct: 1,
        explanation: "Impairment అనేది శారీరక నిర్మాణం, అవయవం లేదా మానసిక క్రియలో ఏర్పడిన లోపాన్ని సూచిస్తుంది. ఇది Disability మరియు Handicap భావనలకు పునాది అయిన ప్రాథమిక పరిస్థితి."
    },
    {
        question: "క్రింది వాటిలో అభ్యాస కష్టం (Learning Difficulty) మరియు అభ్యాస వైకల్యం (Learning Disability) మధ్య సరైన తేడా ఏది?",
        options: [
            "రెండూ ఒకటే",
            "Learning Disability నాడీ సంబంధితది; Learning Difficulty అనేక బాహ్య కారణాల వల్ల కలగవచ్చు",
            "రెండూ IQ తక్కువగా ఉండటాన్ని సూచిస్తాయి",
            "రెండింటికీ IEP అవసరం ఉండదు"
        ],
        correct: 1,
        explanation: "Learning Disability అనేది నాడీ వ్యవస్థకు సంబంధించిన నిర్దిష్ట అభ్యాస లోపం. Learning Difficulty మాత్రం బోధనా పద్ధతి, భాష, పర్యావరణం లేదా ఇతర బాహ్య కారణాల వల్ల కూడా కలగవచ్చు."
    },
    {
        question: "ఆడిటరీ-వర్బల్ థెరపీ (AVT) యొక్క ప్రధాన లక్ష్యం ఏమిటి?",
        options: [
            "సంకేత భాష నేర్పడం",
            "మిగిలిన వినికిడి సామర్థ్యాన్ని ఉపయోగించి మాట్లాడే భాష అభివృద్ధి చేయడం",
            "బ్రెయిల్ నేర్పడం",
            "పెదవుల కదలికలు మాత్రమే నేర్పడం"
        ],
        correct: 1,
        explanation: "Auditory-Verbal Therapyలో వినికిడి పరికరాల సహాయంతో మిగిలిన వినికిడి సామర్థ్యాన్ని ఉపయోగించి పిల్లల్లో వినడం, అర్థం చేసుకోవడం మరియు మాట్లాడే భాషను సహజంగా అభివృద్ధి చేస్తారు."
    },
    {
        question: "Auditory Training ప్రధానంగా దేనిపై దృష్టి పెడుతుంది?",
        options: [
            "వ్రాత నైపుణ్యాలు",
            "వినికిడి ద్వారా శబ్దాలను గుర్తించడం మరియు అర్థం చేసుకోవడం",
            "గణిత నైపుణ్యాలు",
            "సంకేత భాష మాత్రమే"
        ],
        correct: 1,
        explanation: "Auditory Trainingలో శబ్దాలను గుర్తించడం, వేరు చేయడం, అర్థం చేసుకోవడం మరియు మాట్లాడే భాషను వినికిడి ద్వారా అభివృద్ధి చేయడంపై ప్రత్యేక శిక్షణ అందిస్తారు."
    },
    {
        question: "వ్యక్తిగత విద్యా ప్రణాళిక (IEP) ప్రధానంగా ఎవరి కోసం రూపొందించబడుతుంది?",
        options: [
            "మొత్తం తరగతి కోసం",
            "ఒకే పాఠశాల కోసం",
            "ప్రతి ప్రత్యేక అవసరాలున్న విద్యార్థి కోసం",
            "ఉపాధ్యాయుల శిక్షణ కోసం"
        ],
        correct: 2,
        explanation: "IEP అనేది ప్రతి ప్రత్యేక అవసరాలున్న విద్యార్థి యొక్క సామర్థ్యాలు, అవసరాలు, అభ్యాస లక్ష్యాలు మరియు అవసరమైన సహాయక సేవలను దృష్టిలో ఉంచుకొని వ్యక్తిగతంగా రూపొందించే విద్యా ప్రణాళిక."
    },
    {
        question: "Identify the error.\n\nEither of the answers are correct.",
        options: [
            "Either",
            "of the answers",
            "are",
            "correct"
        ],
        correct: 2,
        explanation: "The pronoun 'Either' is singular and always takes a singular verb. Therefore, 'are' is incorrect and should be replaced with 'is' in this sentence."
    },
    {
        question: "Identify the error.\n\nHe insisted to go there immediately.",
        options: [
            "insisted",
            "to",
            "go",
            "immediately"
        ],
        correct: 1,
        explanation: "The verb 'insist' is followed by 'on' and a gerund. The correct expression is 'insisted on going there immediately', not 'insisted to go'."
    },
    {
        question: "Identify the error.\n\nShe prefers tea than coffee.",
        options: [
            "prefers",
            "tea",
            "than",
            "coffee"
        ],
        correct: 2,
        explanation: "The verb 'prefer' is followed by the preposition 'to' while comparing two things. Therefore, 'than' should be replaced with 'to'."
    },
    {
        question: "Identify the error.\n\nNo sooner did he reached the school than the bell rang.",
        options: [
            "did",
            "reached",
            "school",
            "bell"
        ],
        correct: 1,
        explanation: "After the auxiliary verb 'did', the main verb must be in its base form. Therefore, 'reached' is incorrect and should be changed to 'reach'."
    },
    {
        question: "Identify the error.\n\nThe committee have submitted its report.",
        options: [
            "committee",
            "have",
            "submitted",
            "its"
        ],
        correct: 1,
        explanation: "Here 'committee' is treated as a singular collective noun because it acts as one unit. Therefore, the correct verb is 'has', not 'have'."
    },
    {
        question: "Identify the error.\n\nHardly had I entered the room than the phone rang.",
        options: [
            "Hardly",
            "entered",
            "than",
            "phone"
        ],
        correct: 2,
        explanation: "The correct correlative conjunction is 'Hardly...when...'. Using 'than' is grammatically incorrect. The sentence should read 'Hardly had I entered the room when the phone rang.'"
    },
    {
        question: "Identify the error.\n\nThe teacher asked me where was I going.",
        options: [
            "teacher",
            "asked",
            "where was I going",
            "going"
        ],
        correct: 2,
        explanation: "Indirect questions follow statement word order instead of question word order. Therefore, the correct expression is 'where I was going', not 'where was I going'."
    },
    {
        question: "పియాజే సిద్ధాంతంలో Assimilation అంటే ఏమిటి?",
        options: [
            "కొత్త అనుభవాలకు అనుగుణంగా మానసిక నిర్మాణాన్ని మార్చడం",
            "ఇప్పటికే ఉన్న మానసిక నిర్మాణంలో కొత్త సమాచారాన్ని చేర్చడం",
            "నేర్చుకున్న విషయాన్ని మరచిపోవడం",
            "పునర్బలం ద్వారా ప్రవర్తన మార్పు"
        ],
        correct: 1,
        explanation: "Assimilationలో కొత్త సమాచారాన్ని ఇప్పటికే ఉన్న స్కీమా లేదా మానసిక నిర్మాణంలోనే కలిపి అర్థం చేసుకుంటారు. కొత్త సమాచారం కోసం స్కీమాను మార్చాల్సిన అవసరం ఉండదు."
    },
    {
        question: "Accommodation (Piaget) యొక్క సరైన వివరణ ఏది?",
        options: [
            "కొత్త సమాచారాన్ని పాత స్కీమాలో చేర్చడం",
            "అనుభవానికి అనుగుణంగా స్కీమాను సవరించడం",
            "జ్ఞాపకశక్తిని పెంచడం",
            "ప్రవర్తనను శిక్ష ద్వారా నియంత్రించడం"
        ],
        correct: 1,
        explanation: "Accommodationలో కొత్త అనుభవాలు పాత స్కీమాతో సరిపోకపోతే, వ్యక్తి తన మానసిక నిర్మాణాన్ని సవరించి కొత్త సమాచారాన్ని అర్థం చేసుకునే విధంగా మార్పులు చేసుకుంటాడు."
    },
    {
        question: "క్రింది వాటిలో Attention యొక్క సరైన నిర్వచనం ఏది?",
        options: [
            "అనుభవాలకు అర్థం ఇవ్వడం",
            "ఒక నిర్దిష్ట ఉద్దీపనపై చైతన్యాన్ని కేంద్రీకరించడం",
            "సమస్యలను పరిష్కరించే సామర్థ్యం",
            "గత అనుభవాలను గుర్తుంచుకోవడం"
        ],
        correct: 1,
        explanation: "Attention అనేది అనేక ఉద్దీపనలలో ఒక ముఖ్యమైన ఉద్దీపనపై మనస్సు మరియు చైతన్యాన్ని కేంద్రీకరించే మానసిక ప్రక్రియ. సమర్థవంతమైన అభ్యాసానికి ఇది అత్యంత అవసరం."
    },
    {
        question: "Perception ప్రధానంగా దేనిని సూచిస్తుంది?",
        options: [
            "సమాచారాన్ని గుర్తుంచుకోవడం",
            "ఇంద్రియాల ద్వారా వచ్చిన సమాచారానికి అర్థం ఇవ్వడం",
            "ప్రేరణను కలిగించడం",
            "అభ్యాసాన్ని కొలవడం"
        ],
        correct: 1,
        explanation: "Perception అనేది కళ్ళు, చెవులు వంటి ఇంద్రియాల ద్వారా వచ్చిన సమాచారాన్ని మెదడు విశ్లేషించి దానికి అర్థవంతమైన రూపం ఇవ్వడం జరిగే మానసిక ప్రక్రియ."
    },
    {
        question: "క్రింది వాటిలో Aptitude Test యొక్క ప్రధాన ఉద్దేశ్యం ఏది?",
        options: [
            "ప్రస్తుత విద్యా ఫలితాలను కొలవడం",
            "భవిష్యత్తులో నిర్దిష్ట రంగంలో విజయసామర్థ్యాన్ని అంచనా వేయడం",
            "వ్యక్తిత్వాన్ని కొలవడం",
            "మానసిక ఆరోగ్యాన్ని కొలవడం"
        ],
        correct: 1,
        explanation: "Aptitude Test వ్యక్తి భవిష్యత్తులో సంగీతం, గణితం, భాష లేదా ఇతర నిర్దిష్ట రంగాలలో ఎంత విజయవంతంగా ఉండగలడో అంచనా వేయడానికి ఉపయోగించబడుతుంది."
    },
    {
        question: "విద్యార్థి ప్రవర్తనను తగ్గించేందుకు అవాంఛనీయ ఫలితాన్ని ఇవ్వడం ఏమని అంటారు?",
        options: [
            "Positive Reinforcement",
            "Negative Reinforcement",
            "Punishment",
            "Shaping"
        ],
        correct: 2,
        explanation: "Punishmentలో అవాంఛిత ప్రవర్తన తర్వాత అసహ్యకరమైన పరిణామం లేదా శిక్ష ఇవ్వడం ద్వారా ఆ ప్రవర్తన మళ్లీ జరగకుండా తగ్గించే ప్రయత్నం చేస్తారు."
    },
    {
        question: "Identify the error.\n\nEveryone in the class know the answer.",
        options: [
            "Everyone",
            "in the class",
            "know",
            "the answer"
        ],
        correct: 2,
        explanation: "The pronoun 'Everyone' is singular and always takes a singular verb. Therefore, 'know' should be replaced with 'knows' in the sentence."
    },
    {
        question: "Identify the error.\n\nThe scenery are very beautiful.",
        options: [
            "scenery",
            "are",
            "very",
            "beautiful"
        ],
        correct: 1,
        explanation: "The noun 'scenery' is an uncountable singular noun. Hence it requires the singular verb 'is' instead of the plural verb 'are'."
    },
    {
        question: "Identify the error.\n\nShe is married with a doctor.",
        options: [
            "is",
            "married",
            "with",
            "doctor"
        ],
        correct: 2,
        explanation: "The adjective 'married' is followed by the preposition 'to', not 'with'. Therefore, the correct expression is 'married to a doctor'."
    },
    {
        question: "Identify the error.\n\nI look forward to meet you.",
        options: [
            "look",
            "forward",
            "to meet",
            "you"
        ],
        correct: 2,
        explanation: "The phrase 'look forward to' is always followed by a noun or gerund. Therefore, 'to meet' should be replaced with 'meeting'."
    },
    {
        question: "Identify the error.\n\nOne should do their duty sincerely.",
        options: [
            "One",
            "should",
            "their",
            "duty"
        ],
        correct: 2,
        explanation: "In formal grammar, the pronoun referring to 'One' should remain singular. Therefore, 'their' should be replaced with 'one's' or 'his or her'."
    },
    {
        question: "Identify the error.\n\nNeither Ravi nor his friends has completed the work.",
        options: [
            "Neither",
            "Ravi",
            "has",
            "completed"
        ],
        correct: 2,
        explanation: "In 'Neither...nor' constructions, the verb agrees with the subject nearest to it. Since 'friends' is plural, the correct verb is 'have'."
    },
    {
        question: "Identify the error.\n\nHe is one of the best teachers who teaches English.",
        options: [
            "one",
            "best",
            "teaches",
            "English"
        ],
        correct: 2,
        explanation: "The relative pronoun 'who' refers to the plural noun 'teachers'. Therefore, the verb should also be plural: 'teach', not 'teaches'."
    },
    {
        question: "Identify the error.\n\nThe news are encouraging.",
        options: [
            "news",
            "are",
            "encouraging",
            "No error"
        ],
        correct: 1,
        explanation: "Although 'news' ends with 's', it is a singular uncountable noun. Therefore, the correct verb is 'is', making 'are' the grammatical error."
    },
    {
        question: "Identify the error.\n\nShe has been living here from 2021.",
        options: [
            "has been",
            "living",
            "from",
            "2021"
        ],
        correct: 2,
        explanation: "Use 'since' with a specific point in time such as a year or date. Therefore, 'from 2021' should be replaced with 'since 2021'."
    },
    {
        question: "Identify the error.\n\nIf I would have known, I would have informed you earlier.",
        options: [
            "would have known",
            "would have informed",
            "earlier",
            "No error"
        ],
        correct: 0,
        explanation: "In third conditional sentences, the if-clause uses the past perfect tense. Therefore, 'would have known' should be replaced with 'had known'."
    }
];