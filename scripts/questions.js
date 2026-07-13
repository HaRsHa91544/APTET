const SUBJECTS = [
    "CDP",
    "English"
];

const QUESTIONS = [
    {
        question: "పియాజే (Piaget) సిద్ధాంతం ప్రకారం, పిల్లవాడు తార్కికంగా ఆలోచించడం ప్రారంభించే దశ ఏది?",
        options: [
            "సంజ్ఞా-చలన దశ",
            "పూర్వ కార్యాచరణ దశ",
            "స్పష్ట కార్యాచరణ దశ",
            "సాంప్రదాయానంతర దశ"
        ],
        correct: 2,
        explanation:
            "పియాజే ప్రకారం స్పష్ట కార్యాచరణ దశలో పిల్లలు వాస్తవ వస్తువులు, సంఘటనల ఆధారంగా తార్కికంగా ఆలోచించడం, వర్గీకరించడం మరియు సమస్యలను పరిష్కరించడం ప్రారంభిస్తారు."
    },
    {
        question: "వైగోట్స్కీ (Vygotsky) ప్రతిపాదించిన సమీప అభివృద్ధి మండలం (Zone of Proximal Development) భావన ప్రధానంగా దేనిని సూచిస్తుంది?",
        options: [
            "పిల్లవాడు స్వయంగా చేయగలిగిన పనులు",
            "ఉపాధ్యాయుడు మాత్రమే చేయగలిగిన పనులు",
            "సహాయం ద్వారా పిల్లవాడు చేయగలిగే పనులు",
            "పరీక్షలో సాధించిన మార్కులు"
        ],
        correct: 2,
        explanation:
            "ZPD అనేది విద్యార్థి స్వయంగా చేయలేని కానీ ఉపాధ్యాయుడు, తల్లిదండ్రులు లేదా సహచరుల మార్గదర్శకత్వంతో విజయవంతంగా చేయగలిగే అభ్యాస స్థాయిని సూచిస్తుంది."
    },
    {
        question: "కోహ్ల్బర్గ్ (Kohlberg) ప్రకారం, శిక్షను నివారించేందుకు నియమాలను పాటించే దశ ఏది?",
        options: [
            "సామాజిక ఒప్పంద దశ",
            "శిక్ష–విధేయత దశ",
            "సార్వత్రిక నైతిక సూత్రాల దశ",
            "మంచి బాలుడు/బాలిక దశ"
        ],
        correct: 1,
        explanation:
            "కోహ్ల్బర్గ్ నైతిక వికాసంలో మొదటి దశ శిక్ష–విధేయత దశ. ఇందులో వ్యక్తి శిక్షను తప్పించుకోవడం కోసం నియమాలను పాటిస్తాడు."
    },
    {
        question: "క్రింది వారిలో ఆవిష్కరణాత్మక అభ్యాసం (Discovery Learning) ను ప్రతిపాదించిన మనోవిజ్ఞాన శాస్త్రవేత్త ఎవరు?",
        options: [
            "థార్న్‌డైక్",
            "స్కిన్నర్",
            "బ్రూనర్",
            "పావ్‌లవ్"
        ],
        correct: 2,
        explanation:
            "బ్రూనర్ విద్యార్థి స్వయంగా పరిశీలించి, అన్వేషించి, భావనలను కనుగొనే ఆవిష్కరణాత్మక అభ్యాస విధానాన్ని ప్రతిపాదించాడు."
    },
    {
        question: "గార్డ్నర్ (Gardner) బహుళ మేధస్సుల సిద్ధాంతం ప్రకారం క్రింది వాటిలో ఏది ఒక మేధస్సు?",
        options: [
            "సామాజిక మేధస్సు",
            "భావోద్వేగ మేధస్సు",
            "సంగీత మేధస్సు",
            "సాధారణ మేధస్సు"
        ],
        correct: 2,
        explanation:
            "గార్డ్నర్ బహుళ మేధస్సుల సిద్ధాంతంలో సంగీత మేధస్సు, భాషా మేధస్సు, తార్కిక-గణిత మేధస్సు వంటి అనేక స్వతంత్ర మేధస్సులను వివరించాడు."
    },
    {
        question: "స్టెర్న్‌బర్గ్ (Sternberg) త్రిభాగ మేధస్సు సిద్ధాంతంలో లేనిది ఏది?",
        options: [
            "విశ్లేషణాత్మక మేధస్సు",
            "సృజనాత్మక మేధస్సు",
            "ప్రాయోగిక మేధస్సు",
            "భాషా మేధస్సు"
        ],
        correct: 3,
        explanation:
            "స్టెర్న్‌బర్గ్ విశ్లేషణాత్మక, సృజనాత్మక మరియు ప్రాయోగిక మేధస్సులను ప్రతిపాదించాడు. భాషా మేధస్సు గార్డ్నర్ బహుళ మేధస్సుల సిద్ధాంతానికి చెందింది."
    },
    {
        question: "క్రింది జతలలో సరైనది ఏది?",
        options: [
            "థార్న్‌డైక్ — శాస్త్రీయ నియమిత ప్రతిచర్య",
            "పావ్‌లవ్ — ప్రయత్నం–పొరపాటు అభ్యాసం",
            "స్కిన్నర్ — కార్యసాధక నియమిత ప్రతిచర్య",
            "బండూరా — జ్ఞాన వికాస సిద్ధాంతం"
        ],
        correct: 2,
        explanation:
            "కార్యసాధక నియమిత ప్రతిచర్య (Operant Conditioning) సిద్ధాంతాన్ని బి.ఎఫ్. స్కిన్నర్ ప్రతిపాదించాడు. ప్రోత్సాహం మరియు శిక్ష ప్రవర్తనను ప్రభావితం చేస్తాయని వివరించాడు."
    },
    {
        question: "పావ్‌లవ్ ప్రయోగాలలో గంట శబ్దం చివరకు ఏదిగా మారింది?",
        options: [
            "సహజ ఉదీపనం",
            "షరతులతో కూడిన ఉదీపనం",
            "సహజ ప్రతిస్పందన",
            "షరతులతో కూడిన ప్రతిస్పందన"
        ],
        correct: 1,
        explanation:
            "ఆహారంతో పదేపదే జతచేయబడిన తర్వాత గంట శబ్దం షరతులతో కూడిన ఉదీపనంగా మారి, కుక్కలో లాలాజల స్రావాన్ని కలిగించింది."
    },
    {
        question: "బండూరా సామాజిక అభ్యాస సిద్ధాంతంలో ప్రధాన అభ్యాస విధానం ఏది?",
        options: [
            "పునరావృతం",
            "పరిశీలన ద్వారా అభ్యాసం",
            "శిక్ష ద్వారా అభ్యాసం",
            "కంఠస్థం"
        ],
        correct: 1,
        explanation:
            "బండూరా ప్రకారం ఇతరుల ప్రవర్తనను గమనించడం, అనుకరించడం మరియు నమూనాల ద్వారా నేర్చుకోవడం సామాజిక అభ్యాస సిద్ధాంతానికి ప్రధాన ఆధారం."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి.\n\na. పియాజే జ్ఞాన వికాసాన్ని దశలుగా వివరించాడు.\n\nb. వైగోట్స్కీ సామాజిక పరస్పర చర్యకు ప్రాధాన్యం ఇచ్చాడు.\n\nసరైనది ఏది?",
        options: [
            "a మాత్రమే",
            "b మాత్రమే",
            "a మరియు b రెండూ",
            "రెండూ తప్పు"
        ],
        correct: 2,
        explanation:
            "పియాజే జ్ఞాన వికాసాన్ని దశలుగా వివరించగా, వైగోట్స్కీ అభ్యాసంలో సామాజిక పరస్పర చర్య మరియు మార్గదర్శకత్వానికి అత్యంత ప్రాధాన్యం ఇచ్చాడు."
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
        explanation:
            "The word 'honest' begins with a silent 'h' and starts with a vowel sound. Therefore, the correct article before it is 'an'."
    },
    {
        question: "Choose the correct preposition.\n\nThe meeting starts ____ 9:00 a.m.",
        options: [
            "in",
            "on",
            "at",
            "by"
        ],
        correct: 2,
        explanation:
            "The preposition 'at' is used before specific clock times such as 9:00 a.m., 5:30 p.m., or midnight."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "Each of the students are ready.",
            "Each of the students is ready.",
            "Each of the students were ready.",
            "Each of the students have ready."
        ],
        correct: 1,
        explanation:
            "The subject 'Each' is singular, so it always takes a singular verb. Hence, 'Each of the students is ready' is correct."
    },
    {
        question: "Choose the correct tense.\n\nBy next June, she ____ her degree.",
        options: [
            "completes",
            "completed",
            "will have completed",
            "has completed"
        ],
        correct: 2,
        explanation:
            "The Future Perfect tense expresses an action that will be completed before a specified future time, making 'will have completed' the correct choice."
    },
    {
        question: "Identify the correct sentence.",
        options: [
            "He is good in Mathematics.",
            "He is good at Mathematics.",
            "He is good on Mathematics.",
            "He is good with Mathematics."
        ],
        correct: 1,
        explanation:
            "The standard English collocation is 'good at' when referring to skill or ability in a subject or activity."
    },
    {
        question: "Choose the correct option.\n\nNeither Ravi nor his friends ____ coming today.",
        options: [
            "is",
            "are",
            "was",
            "has"
        ],
        correct: 1,
        explanation:
            "With 'Neither...nor', the verb agrees with the subject nearest to it. Since 'friends' is plural, the correct verb is 'are'."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "The news are interesting.",
            "The news were interesting.",
            "The news is interesting.",
            "The news have interesting."
        ],
        correct: 2,
        explanation:
            "Although 'news' ends with 's', it is treated as a singular uncountable noun. Therefore, it always takes a singular verb like 'is'."
    },
    {
        question: "క్రింది జతలలో సరైనది ఏది?",
        options: [
            "పావ్‌లవ్ — కార్యసాధక నియమిత ప్రతిచర్య",
            "స్కిన్నర్ — శాస్త్రీయ నియమిత ప్రతిచర్య",
            "బండూరా — పరిశీలనాత్మక అభ్యాసం",
            "థార్న్‌డైక్ — సామాజిక అభ్యాస సిద్ధాంతం"
        ],
        correct: 2,
        explanation:
            "పరిశీలన ద్వారా అభ్యాసం (Observational Learning)ను బండూరా ప్రతిపాదించాడు. ఇతరుల ప్రవర్తనను గమనించి, అనుకరించడం ద్వారా కొత్త ప్రవర్తనలను నేర్చుకోవచ్చని ఆయన వివరించాడు."
    },
    {
        question: "ఒక ఉపాధ్యాయుడు విద్యార్థి సరైన సమాధానం చెప్పిన ప్రతిసారి ప్రశంసిస్తున్నాడు. స్కిన్నర్ సిద్ధాంతం ప్రకారం ఇది",
        options: [
            "శిక్ష",
            "సానుకూల బలపరిచడం",
            "ప్రతికూల బలపరిచడం",
            "లుప్తి"
        ],
        correct: 1,
        explanation:
            "కోరుకున్న ప్రవర్తన తర్వాత ప్రశంస, బహుమతి వంటి ప్రోత్సాహం ఇవ్వడం సానుకూల బలపరిచడం. దీని వల్ల ఆ ప్రవర్తన మళ్లీ జరిగే అవకాశాలు పెరుగుతాయి."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి.\n\na. గార్డ్నర్ ఒకే సాధారణ మేధస్సును ప్రతిపాదించాడు.\n\nb. స్టెర్న్‌బర్గ్ ప్రాయోగిక మేధస్సును తన సిద్ధాంతంలో చేర్చాడు.\n\nసరైనది ఏది?",
        options: [
            "a మాత్రమే",
            "b మాత్రమే",
            "a మరియు b రెండూ",
            "రెండూ తప్పు"
        ],
        correct: 1,
        explanation:
            "గార్డ్నర్ బహుళ మేధస్సులను ప్రతిపాదించాడు. స్టెర్న్‌బర్గ్ విశ్లేషణాత్మక, సృజనాత్మక, ప్రాయోగిక మేధస్సులను తన త్రిభాగ మేధస్సు సిద్ధాంతంలో వివరించాడు."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "One of the boys have completed the work.",
            "One of the boys has completed the work.",
            "One of the boys were completed the work.",
            "One of the boys are completed the work."
        ],
        correct: 1,
        explanation:
            "The subject is 'One', which is singular. Therefore, the singular helping verb 'has' must be used instead of 'have'."
    },
    {
        question: "Choose the correct preposition.\n\nThe train arrived ____ the station on time.",
        options: [
            "in",
            "at",
            "on",
            "into"
        ],
        correct: 1,
        explanation:
            "The expression 'arrive at' is used for stations, airports and smaller places. 'Arrive in' is used for cities, states and countries."
    },
    {
        question: "Choose the correct article.\n\nHe bought ____ umbrella yesterday.",
        options: [
            "a",
            "an",
            "the",
            "no article"
        ],
        correct: 1,
        explanation:
            "The word 'umbrella' begins with a vowel sound, so the correct indefinite article before it is 'an'."
    },
    {
        question: "Identify the grammatically correct sentence.",
        options: [
            "Mathematics are my favourite subject.",
            "Mathematics is my favourite subject.",
            "Mathematics were my favourite subject.",
            "Mathematics have my favourite subject."
        ],
        correct: 1,
        explanation:
            "When referring to the academic subject, 'Mathematics' is treated as a singular noun and therefore takes the singular verb 'is'."
    },
    {
        question: "Choose the correct tense.\n\nWhen I reached the station, the train ____.",
        options: [
            "leaves",
            "has left",
            "had left",
            "will leave"
        ],
        correct: 2,
        explanation:
            "The train left before the speaker reached the station. The Past Perfect tense expresses an action completed before another past action."
    },
    {
        question: "Choose the correct preposition.\n\nThe principal congratulated the students ____ their success.",
        options: [
            "on",
            "for",
            "in",
            "at"
        ],
        correct: 0,
        explanation:
            "The standard expression is 'congratulate someone on something'. Therefore, the correct preposition used with 'success' is 'on'."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "Every teacher and every student were present.",
            "Every teacher and every student was present.",
            "Every teacher and every student have present.",
            "Every teacher and every student are present."
        ],
        correct: 1,
        explanation:
            "When each noun is preceded by 'every', the compound subject is treated as singular. Hence the correct verb is 'was'."
    },
    {
        question: "Choose the correct article.\n\n____ Ganga is considered a sacred river.",
        options: [
            "A",
            "An",
            "The",
            "No article"
        ],
        correct: 2,
        explanation:
            "Names of rivers always take the definite article 'the'. Therefore, we say 'The Ganga' and not simply 'Ganga'."
    },
    {
        question: "Choose the correct option.\n\nEither the Principal or the teachers ____ responsible.",
        options: [
            "is",
            "was",
            "are",
            "has"
        ],
        correct: 2,
        explanation:
            "With 'Either...or', the verb agrees with the subject nearest to it. Since 'teachers' is plural, the correct verb is 'are'."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "She has been living here since five years.",
            "She has been living here for five years.",
            "She has living here for five years.",
            "She was living here since five years."
        ],
        correct: 1,
        explanation:
            "'For' is used with a duration or period of time such as five years, while 'since' is used with a specific starting point."
    },
    {
        question: "Choose the correct tense.\n\nI ____ this book before.",
        options: [
            "saw",
            "have seen",
            "see",
            "seeing"
        ],
        correct: 1,
        explanation:
            "The Present Perfect tense is used to describe an experience at an unspecified time in the past. Therefore, 'have seen' is correct."
    },
    {
        question: "Identify the correct sentence.",
        options: [
            "The furniture are expensive.",
            "The furniture is expensive.",
            "The furniture were expensive.",
            "The furniture have expensive."
        ],
        correct: 1,
        explanation:
            "'Furniture' is an uncountable noun and always takes a singular verb. Therefore, the correct sentence uses 'is expensive'."
    },
    {
        question: "Choose the correct preposition.\n\nHe divided the sweets ____ the children.",
        options: [
            "among",
            "between",
            "from",
            "into"
        ],
        correct: 0,
        explanation:
            "'Among' is used when something is distributed to more than two people or groups. 'Between' is generally used for only two."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "Neither of the answers are correct.",
            "Neither of the answers is correct.",
            "Neither of the answers were correct.",
            "Neither of the answers have correct."
        ],
        correct: 1,
        explanation:
            "'Neither' is grammatically singular and therefore takes a singular verb. Hence, 'Neither of the answers is correct' is the correct sentence."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి.\n\na. బ్రూనర్ బోధనలో Scaffolding భావనకు ప్రాధాన్యత ఇచ్చాడు.\n\nb. వైగోట్స్కీ సామాజిక పరస్పర చర్య అభ్యాసాన్ని ప్రభావితం చేస్తుందని పేర్కొన్నాడు.\n\nసరైన సమాధానాన్ని ఎంచుకోండి.",
        options: [
            "a మాత్రమే",
            "b మాత్రమే",
            "a మరియు b రెండూ",
            "రెండూ తప్పు"
        ],
        correct: 2,
        explanation:
            "బ్రూనర్ బోధనా మద్దతు (Scaffolding) భావనను అభివృద్ధి చేశాడు. వైగోట్స్కీ సామాజిక పరస్పర చర్య, మార్గదర్శకత్వం మరియు ZPD అభ్యాసంలో కీలక పాత్ర పోషిస్తాయని వివరించాడు."
    },
    {
        question: "A teacher encourages students to observe a model before performing an activity. This teaching strategy is based on",
        options: [
            "Thorndike's Trial and Error Theory",
            "Pavlov's Classical Conditioning",
            "Bandura's Social Learning Theory",
            "Piaget's Cognitive Development Theory"
        ],
        correct: 2,
        explanation:
            "Bandura explained that people learn new behaviours by observing, imitating and modelling others. This process is called observational or social learning."
    },
    {
        question: "పియాజే ప్రకారం క్రింది వాటిలో సంరక్షణ (Conservation) భావన మొదట కనిపించే దశ ఏది?",
        options: [
            "సంజ్ఞా-చలన దశ",
            "పూర్వ కార్యాచరణ దశ",
            "స్పష్ట కార్యాచరణ దశ",
            "సాంప్రదాయానంతర దశ"
        ],
        correct: 2,
        explanation:
            "పియాజే ప్రకారం సంరక్షణ భావన స్పష్ట కార్యాచరణ దశలో అభివృద్ధి చెందుతుంది. ఈ దశలో పిల్లలు పరిమాణం, బరువు, సంఖ్య వంటి భావనలను తార్కికంగా అర్థం చేసుకుంటారు."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "Hardly had I reached the station when the train left.",
            "Hardly I had reached the station when the train left.",
            "Hardly had I reached the station than the train left.",
            "Hardly I reached the station when the train had left."
        ],
        correct: 0,
        explanation:
            "The correct correlative structure is 'Hardly...when'. It also requires inversion of the auxiliary verb before the subject."
    },
    {
        question: "గార్డ్నర్ సిద్ధాంతం ప్రకారం, ఒక విద్యార్థి సంగీత స్వరాలను సులభంగా గుర్తించి, కొత్త స్వరరచనలు చేయగలిగితే అతనిలో ప్రధానంగా అభివృద్ధి చెందిన మేధస్సు ఏది?",
        options: [
            "తార్కిక-గణిత మేధస్సు",
            "భాషా మేధస్సు",
            "సంగీత మేధస్సు",
            "అంతర్వ్యక్తిగత మేధస్సు"
        ],
        correct: 2,
        explanation:
            "స్వరాలను గుర్తించడం, సంగీతాన్ని అర్థం చేసుకోవడం మరియు కొత్త సంగీతాన్ని సృష్టించడం గార్డ్నర్ పేర్కొన్న సంగీత మేధస్సుకు ముఖ్య లక్షణాలు."
    },
    {
        question: "Choose the correct option.\n\nNo sooner ____ the bell ring than the students rushed out.",
        options: [
            "did they hear",
            "they heard",
            "had they heard",
            "have they heard"
        ],
        correct: 0,
        explanation:
            "The expression 'No sooner...than' uses auxiliary inversion. In this sentence, 'did they hear' correctly forms the inverted structure."
    },
    {
        question: "థార్న్‌డైక్ యొక్క సిద్ధత నియమం (Law of Readiness) ప్రకారం అభ్యాసం సమర్థవంతంగా జరగడానికి ప్రధానంగా అవసరమైనది",
        options: [
            "శిక్ష",
            "సిద్ధత",
            "పరిశీలన",
            "అనుకరణ"
        ],
        correct: 1,
        explanation:
            "థార్న్‌డైక్ ప్రకారం అభ్యాసం ఫలవంతంగా జరగాలంటే విద్యార్థిలో మానసిక, శారీరక మరియు భావోద్వేగ సిద్ధత ఉండాలి."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "Neither the teacher nor the students was present.",
            "Neither the teacher nor the students were present.",
            "Neither the teacher nor the students is present.",
            "Neither the teacher nor the students has present."
        ],
        correct: 1,
        explanation:
            "With 'Neither...nor', the verb agrees with the subject nearest to it. Since 'students' is plural, the correct verb is 'were'."
    },
    {
        question: "క్రింది జతలలో సరైనది ఏది?",
        options: [
            "స్కిన్నర్ — శాస్త్రీయ నియమిత ప్రతిచర్య",
            "పావ్‌లవ్ — కార్యసాధక నియమిత ప్రతిచర్య",
            "బ్రూనర్ — ఆవిష్కరణాత్మక అభ్యాసం",
            "బండూరా — ప్రయత్నం–పొరపాటు అభ్యాసం"
        ],
        correct: 2,
        explanation:
            "Jerome Bruner proposed Discovery Learning, which encourages learners to explore, investigate and discover concepts independently with teacher guidance."
    },
    {
        question: "Choose the correct preposition.\n\nThe committee consists ____ five members.",
        options: [
            "from",
            "with",
            "of",
            "by"
        ],
        correct: 2,
        explanation:
            "The verb 'consists' is always followed by the preposition 'of'. Therefore, the correct expression is 'consists of'."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి.\n\na. Kohlberg నైతిక వికాసాన్ని దశలుగా వివరించాడు.\n\nb. Piaget నైతిక వికాస సిద్ధాంతాన్ని ఆరు దశలుగా వివరించాడు.\n\nసరైనది ఏది?",
        options: [
            "a మాత్రమే",
            "b మాత్రమే",
            "రెండూ సరైనవి",
            "రెండూ తప్పు"
        ],
        correct: 0,
        explanation:
            "Kohlberg ఆరు దశల నైతిక వికాస సిద్ధాంతాన్ని ప్రతిపాదించాడు. Piaget నైతిక వికాసంపై పరిశోధనలు చేసినప్పటికీ ఆరు దశలను ప్రతిపాదించలేదు."
    },
    {
        question: "Choose the correct article.\n\nHe is ____ MLA from our district.",
        options: [
            "a",
            "an",
            "the",
            "no article"
        ],
        correct: 1,
        explanation:
            "The abbreviation 'MLA' begins with the vowel sound 'em'. Therefore, the correct article before it is 'an'."
    },
    {
        question: "ఒక విద్యార్థి తన స్నేహితుడు చేసిన ప్రయోగాన్ని గమనించి అదే విధంగా విజయవంతంగా చేశాడు. ఇది ఏ సిద్ధాంతానికి ఉదాహరణ?",
        options: [
            "పావ్‌లవ్",
            "థార్న్‌డైక్",
            "బండూరా",
            "స్కిన్నర్"
        ],
        correct: 2,
        explanation:
            "ఇతరుల ప్రవర్తనను గమనించి అనుకరించడం పరిశీలనాత్మక అభ్యాసం. దీనిని బండూరా తన సామాజిక అభ్యాస సిద్ధాంతంలో వివరించాడు."
    },
    {
        question: "Choose the correct tense.\n\nBy the time the teacher entered the class, the students ____ their homework.",
        options: [
            "completed",
            "have completed",
            "had completed",
            "complete"
        ],
        correct: 2,
        explanation:
            "The Past Perfect tense is used to show that one action was completed before another action occurred in the past."
    },
    {
        question: "క్రింది వారిలో త్రిభాగ మేధస్సు సిద్ధాంతం (Triarchic Theory of Intelligence)ను ప్రతిపాదించినవారు ఎవరు?",
        options: [
            "గార్డ్నర్",
            "స్టెర్న్‌బర్గ్",
            "బినే",
            "థర్స్టోన్"
        ],
        correct: 1,
        explanation:
            "Robert Sternberg proposed the Triarchic Theory of Intelligence, consisting of analytical, creative and practical intelligence."
    },
    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "Each of the players have brought their kit.",
            "Each of the players has brought his or her kit.",
            "Each of the players are bringing their kit.",
            "Each of the players were bringing his kit."
        ],
        correct: 1,
        explanation:
            "The subject 'Each' is singular and requires the singular verb 'has'. The pronoun 'his or her' maintains standard subject-pronoun agreement."
    }
];