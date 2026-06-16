const SUBJECTS = [
    "Intellectual Disability",
    "ICT",
    "English",
    "Telugu",
];

const QUESTIONS = [
    {
        question: "మేధో వైకల్యం (Intellectual Disability) యొక్క ముఖ్య లక్షణం ఏది?",
        options: [
            "కేవలం భాషా లోపం",
            "అనుకూల ప్రవర్తనలో పరిమితులు మరియు తక్కువ మేధస్సు",
            "కేవలం శారీరక లోపం",
            "దృష్టి లోపం"
        ],
        correct: 1,
        explanation: "మేధో వైకల్యం అనేది తక్కువ మేధో సామర్థ్యంతో పాటు దైనందిన జీవితంలో అవసరమైన అనుకూల ప్రవర్తనా నైపుణ్యాలలో గణనీయమైన పరిమితులు కలిగి ఉండే స్థితి."
    },
    {
        question: "క్రింది వాటిలో IEP యొక్క ప్రధాన భాగం ఏది?",
        options: [
            "సూచిక",
            "ముందుమాట",
            "లక్ష్యాలు",
            "గ్రంథసూచి"
        ],
        correct: 2,
        explanation: "IEPలో విద్యార్థి సాధించాల్సిన కొలవదగిన స్వల్పకాలిక మరియు దీర్ఘకాలిక లక్ష్యాలు అత్యంత ముఖ్యమైన భాగంగా పరిగణించబడతాయి."
    },
    {
        question: "50–70 IQ పరిధి సాధారణంగా ఏ వర్గానికి చెందుతుంది?",
        options: [
            "తీవ్రమైన మేధో వైకల్యం",
            "మధ్యస్థ మేధో వైకల్యం",
            "స్వల్ప మేధో వైకల్యం",
            "అత్యంత తీవ్రమైన మేధో వైకల్యం"
        ],
        correct: 2,
        explanation: "APTET మరియు ప్రత్యేక విద్యలో సాధారణంగా IQ 50 నుండి 70 మధ్య ఉంటే దానిని స్వల్ప మేధో వైకల్యం (Mild Intellectual Disability)గా వర్గీకరిస్తారు."
    },
    {
        question: "IEP తయారీలో అత్యంత ప్రాధాన్యత ఇవ్వాల్సింది",
        options: [
            "పాఠ్యపుస్తకం",
            "విద్యార్థి వ్యక్తిగత అవసరాలు",
            "పాఠశాల నియమాలు",
            "తల్లిదండ్రుల వృత్తి"
        ],
        correct: 1,
        explanation: "IEP విద్యార్థి యొక్క బలాలు, బలహీనతలు, అవసరాలు మరియు ప్రస్తుత పనితీరు ఆధారంగా రూపొందించబడాలి."
    },
    {
        question: "మేధో వైకల్యం గల విద్యార్థులకు బోధనలో అత్యంత సముచితమైన పద్ధతి",
        options: [
            "ఉపన్యాస పద్ధతి",
            "అమూర్త భావనలు",
            "మూర్తం నుండి అమూర్తానికి",
            "స్వయంఅధ్యయనం"
        ],
        correct: 2,
        explanation: "మేధో వైకల్యం గల విద్యార్థులు ప్రత్యక్ష అనుభవాల ద్వారా బాగా నేర్చుకుంటారు. అందువల్ల మూర్త భావనల నుండి అమూర్త భావనలకు బోధించడం సమర్థవంతం."
    },
    {
        question: "“సమాజంలో స్వతంత్రంగా జీవించడానికి అవసరమైన మేధస్సు లేకపోవడం” అని మేధో వైకల్యాన్ని నిర్వచించినవారు",
        options: [
            "Benda",
            "Piaget",
            "Kohlberg",
            "Skinner"
        ],
        correct: 0,
        explanation: "సమాజంలో స్వతంత్ర జీవనానికి తగిన మేధో సామర్థ్యం లేకపోవడాన్ని Benda మేధో వైకల్యంగా నిర్వచించారు. ఇది గత APTET ప్రశ్నల్లో కూడా కనిపించింది."
    },
    {
        question: "IEP సాధారణంగా ఎవరి సహకారంతో రూపొందించబడుతుంది?",
        options: [
            "ప్రత్యేక ఉపాధ్యాయుడు మాత్రమే",
            "ప్రధానోపాధ్యాయుడు మాత్రమే",
            "బహుళశాఖ బృందం",
            "సహవిద్యార్థులు"
        ],
        correct: 2,
        explanation: "IEP రూపకల్పనలో ప్రత్యేక ఉపాధ్యాయుడు, సాధారణ ఉపాధ్యాయుడు, తల్లిదండ్రులు, నిపుణులు మరియు అవసరమైతే విద్యార్థి కూడా భాగస్వాములు అవుతారు."
    },
    {
        question: "Curriculum Adaptation యొక్క ప్రధాన ఉద్దేశ్యం",
        options: [
            "పరీక్షలు రద్దు చేయడం",
            "అందరికీ ఒకే పాఠ్యాంశం",
            "విద్యార్థి అవసరాలకు అనుగుణంగా మార్పులు",
            "తరగతి పరిమాణం తగ్గించడం"
        ],
        correct: 2,
        explanation: "Curriculum Adaptation ద్వారా విద్యార్థి సామర్థ్యాలు మరియు అవసరాలకు అనుగుణంగా బోధనా ప్రక్రియలో మార్పులు చేస్తారు."
    },
    {
        question: "క్రింది వాటిలో Accommodation ఉదాహరణ ఏది?",
        options: [
            "ప్రశ్నల సంఖ్య తగ్గించడం",
            "అదనపు సమయం ఇవ్వడం",
            "సిలబస్ తొలగించడం",
            "గ్రేడ్ మార్చడం"
        ],
        correct: 1,
        explanation: "Accommodationలో విద్యార్థి నేర్చుకునే లక్ష్యాలను మార్చకుండా బోధన లేదా మూల్యాంకనంలో సౌకర్యాలు కల్పిస్తారు. అదనపు సమయం అందులో ఒకటి."
    },
    {
        question: "Modification కు ఉదాహరణ",
        options: [
            "పెద్ద అక్షరాలు",
            "రీడర్ సహాయం",
            "పాఠ్యాంశ లక్ష్యాలలో మార్పు",
            "అదనపు సమయం"
        ],
        correct: 2,
        explanation: "Modificationలో విద్యార్థి సామర్థ్యానికి అనుగుణంగా పాఠ్యాంశ లక్ష్యాలు లేదా నేర్చుకోవాల్సిన అంశాలను మార్చడం జరుగుతుంది."
    },
    {
        question: "మేధో వైకల్యం గల విద్యార్థుల మూల్యాంకనంలో ముఖ్యంగా పరిశీలించేది",
        options: [
            "కేవలం IQ",
            "అనుకూల ప్రవర్తన",
            "ఎత్తు",
            "బరువు"
        ],
        correct: 1,
        explanation: "ప్రస్తుతం మేధో వైకల్య నిర్ధారణలో IQతో పాటు అనుకూల ప్రవర్తనా నైపుణ్యాల మూల్యాంకనానికి కూడా సమాన ప్రాధాన్యత ఇస్తారు."
    },
    {
        question: "Task Analysis అంటే",
        options: [
            "పనిని చిన్న దశలుగా విభజించడం",
            "పరీక్ష నిర్వహణ",
            "శిక్ష విధానం",
            "గ్రేడింగ్"
        ],
        correct: 0,
        explanation: "సంక్లిష్టమైన పనిని చిన్నచిన్న దశలుగా విభజించి క్రమపద్ధతిలో బోధించడాన్ని Task Analysis అంటారు."
    },
    {
        question: "Chaining బోధనా పద్ధతి ఎక్కువగా ఉపయోగించేది",
        options: [
            "జీవన నైపుణ్యాల బోధనలో",
            "కవిత్వ బోధనలో",
            "వ్యాకరణంలో",
            "చిత్రలేఖనంలో"
        ],
        correct: 0,
        explanation: "చేతులు కడుక్కోవడం, దంతాలు తోముకోవడం వంటి జీవన నైపుణ్యాలను దశలవారీగా బోధించడానికి Chaining పద్ధతి ఉపయోగిస్తారు."
    },
    {
        question: "క్రింది వాటిలో Reinforcement ఉదాహరణ",
        options: [
            "శిక్ష",
            "ప్రశంస",
            "నిర్లక్ష్యం",
            "హెచ్చరిక"
        ],
        correct: 1,
        explanation: "విద్యార్థి సరైన ప్రవర్తనను పునరావృతం చేయడానికి ప్రశంస, బహుమతి వంటి ప్రోత్సాహకాలను Reinforcement అంటారు."
    },
    {
        question: "Functional Curriculum ప్రధానంగా దృష్టి సారించేది",
        options: [
            "పోటీ పరీక్షలు",
            "జీవిత నైపుణ్యాలు",
            "సాహిత్యం",
            "పరిశోధన"
        ],
        correct: 1,
        explanation: "Functional Curriculum విద్యార్థి స్వతంత్ర జీవనానికి అవసరమైన వ్యక్తిగత, సామాజిక మరియు వృత్తి నైపుణ్యాల అభివృద్ధిపై దృష్టి పెడుతుంది."
    },
    {
        question: "IEP సమీక్ష సాధారణంగా",
        options: [
            "ఒకసారి మాత్రమే",
            "అవసరానుసారం కాలానుగుణంగా",
            "10 సంవత్సరాలకు ఒకసారి",
            "ఎప్పుడూ కాదు"
        ],
        correct: 1,
        explanation: "IEP స్థిరమైన పత్రం కాదు. విద్యార్థి పురోగతి, అవసరాలు మరియు సాధనలను బట్టి క్రమం తప్పకుండా సమీక్షించి సవరించాలి."
    },
    {
        question: "Least Restrictive Environment (LRE) భావన సంబంధించింది",
        options: [
            "ప్రత్యేక పాఠశాల",
            "సమగ్ర విద్య",
            "వృత్తి విద్య",
            "హోమ్ స్కూలింగ్"
        ],
        correct: 1,
        explanation: "LRE ప్రకారం విద్యార్థిని సాధ్యమైనంత వరకు సాధారణ తరగతి గదిలో తగిన సహాయాలతో బోధించాలి. ఇది సమగ్ర విద్య యొక్క ముఖ్య సూత్రం."
    },
    {
        question: "క్రింది వాటిలో Teaching Strategy కాదు",
        options: [
            "Prompting",
            "Modeling",
            "Shaping",
            "Audiogram"
        ],
        correct: 3,
        explanation: "Audiogram అనేది వినికిడి సామర్థ్యాన్ని కొలిచే గ్రాఫికల్ నివేదిక. ఇది బోధనా వ్యూహం కాదు."
    },
    {
        question: "ఒక విద్యార్థి దంతాల శుభ్రత నేర్చుకునేందుకు ప్రతి దశను విడిగా బోధించడం",
        options: [
            "Chaining",
            "Acceleration",
            "Streaming",
            "Team Teaching"
        ],
        correct: 0,
        explanation: "ఒక పనిని దశలుగా విభజించి క్రమపద్ధతిలో నేర్పడం Chaining. జీవన నైపుణ్యాల బోధనలో ఇది విస్తృతంగా ఉపయోగిస్తారు."
    },
    {
        question: "IEP లక్ష్యాలు ఎలా ఉండాలి?",
        options: [
            "అస్పష్టంగా",
            "కొలవలేనివిగా",
            "SMART విధానంలో",
            "దీర్ఘంగా మాత్రమే"
        ],
        correct: 2,
        explanation: "IEP లక్ష్యాలు Specific, Measurable, Achievable, Relevant, Time-bound (SMART) సూత్రాల ఆధారంగా ఉండాలి."
    },
    {
        question: "మల్టీమీడియా బోధనలో ప్రధాన లక్షణం",
        options: [
            "కేవలం పాఠ్యాంశం",
            "కేవలం ధ్వని",
            "ధ్వని, చిత్రం, వీడియోల సమన్వయం",
            "కేవలం గ్రాఫిక్స్"
        ],
        correct: 2,
        explanation: "మల్టీమీడియా అనేది పాఠ్యం, ధ్వని, చిత్రాలు, యానిమేషన్ మరియు వీడియోలను కలిపి అభ్యాసాన్ని ప్రభావవంతంగా చేసే విధానం."
    },
    {
        question: "Flanders Interaction Analysis ప్రధానంగా దేనిని విశ్లేషిస్తుంది?",
        options: [
            "పరీక్ష ఫలితాలు",
            "తరగతి గది పరస్పర చర్యలు",
            "పాఠ్యపుస్తకాలు",
            "కంప్యూటర్ పనితీరు"
        ],
        correct: 1,
        explanation: "Flanders వ్యవస్థ ఉపాధ్యాయుడు మరియు విద్యార్థుల మధ్య జరిగే మౌఖిక పరస్పర చర్యలను విశ్లేషించడానికి ఉపయోగించబడుతుంది."
    },
    {
        question: "DIKSHA అనేది",
        options: [
            "ఆపరేటింగ్ సిస్టమ్",
            "విద్యా డిజిటల్ వేదిక",
            "యాంటీవైరస్",
            "ఈమెయిల్ సేవ"
        ],
        correct: 1,
        explanation: "DIKSHA భారత ప్రభుత్వ విద్యా డిజిటల్ ప్లాట్‌ఫారమ్. ఇందులో ఉపాధ్యాయులు మరియు విద్యార్థులకు అనేక వనరులు అందుబాటులో ఉంటాయి."
    },
    {
        question: "Moodle దేనికి ఉదాహరణ?",
        options: [
            "Learning Management System",
            "Spreadsheet Software",
            "Search Engine",
            "Programming Language"
        ],
        correct: 0,
        explanation: "Moodle ఒక Learning Management System (LMS). ఇది ఆన్‌లైన్ బోధన, మూల్యాంకనం మరియు అభ్యాస నిర్వహణకు ఉపయోగించబడుతుంది."
    },
    {
        question: "Instructional Media యొక్క ప్రధాన ఉద్దేశ్యం",
        options: [
            "అభ్యాసాన్ని సులభతరం చేయడం",
            "తరగతి సమయం తగ్గించడం",
            "హాజరు నియంత్రణ",
            "పరీక్షలు రద్దు చేయడం"
        ],
        correct: 0,
        explanation: "Instructional Media ద్వారా భావనలను స్పష్టంగా అందించి అభ్యాసాన్ని మరింత ఆసక్తికరంగా మరియు ప్రభావవంతంగా చేయవచ్చు."
    },
    {
        question: "MOOC యొక్క విస్తరణ ఏమిటి?",
        options: [
            "Modern Online Open Course",
            "Massive Open Online Course",
            "Media Oriented Open Course",
            "Multiple Online Open Class"
        ],
        correct: 1,
        explanation: "MOOC అంటే Massive Open Online Course. ఇది ప్రపంచవ్యాప్తంగా అనేక మంది అభ్యాసకులకు అందుబాటులో ఉండే ఆన్‌లైన్ కోర్సు."
    },
    {
        question: "వీడియో ప్రదర్శన ఏ Instructional Media వర్గానికి చెందుతుంది?",
        options: [
            "Print Media",
            "Aural Media",
            "Multimedia",
            "Verbal Media"
        ],
        correct: 2,
        explanation: "వీడియోలో ధ్వని మరియు దృశ్య అంశాలు రెండూ ఉంటాయి. అందువల్ల ఇది Multimedia వర్గంలోకి వస్తుంది."
    },
    {
        question: "Identify the error: Each of the students have submitted the project.",
        options: [
            "Each",
            "students",
            "have",
            "submitted"
        ],
        correct: 2,
        explanation: "‘Each of the students’ అనే Subject ఏకవచనం. కాబట్టి ‘have’ స్థానంలో ‘has’ ఉపయోగించాలి."
    },
    {
        question: "She is good ___ Mathematics.",
        options: [
            "in",
            "at",
            "on",
            "for"
        ],
        correct: 1,
        explanation: "‘Good at’ అనేది సరైన Prepositional usage. ఒక వ్యక్తి నైపుణ్యాన్ని సూచించేటప్పుడు ‘at’ ఉపయోగిస్తారు."
    },
    {
        question: "No sooner did he arrive ___ it started raining.",
        options: [
            "when",
            "than",
            "then",
            "but"
        ],
        correct: 1,
        explanation: "No sooner ... than అనేది స్థిరమైన English Correlative structure. APTETలో తరచుగా పరీక్షించే వ్యాకరణ అంశం."
    },
    {
        question: "One of the students ___ absent today.",
        options: [
            "are",
            "were",
            "is",
            "have"
        ],
        correct: 2,
        explanation: "‘One of the students’ అనే Subject ఏకవచనంగా పరిగణించబడుతుంది. అందువల్ల singular verb ‘is’ ఉపయోగించాలి."
    },
    {
        question: "Neither the teacher nor the students ___ ready.",
        options: [
            "was",
            "is",
            "are",
            "has"
        ],
        correct: 2,
        explanation: "Neither...nor నిర్మాణంలో దగ్గరలో ఉన్న Subject ప్రకారం Verb వస్తుంది. ఇక్కడ 'students' బహువచనం కాబట్టి 'are' సరైనది."
    },
    {
        question: "Identify the error: He discussed about the issue.",
        options: [
            "He",
            "discussed",
            "about",
            "issue"
        ],
        correct: 2,
        explanation: "Discuss అనే Verb తర్వాత 'about' అవసరం లేదు. సరైన వాక్యం: 'He discussed the issue.'"
    },
    {
        question: "The news ___ shocking.",
        options: [
            "are",
            "were",
            "is",
            "have"
        ],
        correct: 2,
        explanation: "News అనే పదం రూపంలో pluralలా కనిపించినా grammaticalంగా singular noun. కాబట్టి 'is' ఉపయోగించాలి."
    },
    {
        question: "She has been living here ___ 2018.",
        options: [
            "for",
            "since",
            "from",
            "by"
        ],
        correct: 1,
        explanation: "ఒక నిర్దిష్ట కాల బిందువును సూచించేటప్పుడు Present Perfect Continuous Tenseలో 'since' ఉపయోగిస్తారు."
    },
    {
        question: "The furniture ___ expensive.",
        options: [
            "are",
            "were",
            "is",
            "have"
        ],
        correct: 2,
        explanation: "Furniture అనేది uncountable singular noun. అందువల్ల singular verb 'is' వాడాలి."
    },
    {
        question: "Identify the error: Ravi and not his friends have won the prize.",
        options: [
            "Ravi",
            "and not",
            "have",
            "prize"
        ],
        correct: 2,
        explanation: "వాక్యంలోని ప్రధాన Subject 'Ravi'. కాబట్టి singular verb 'has' రావాలి. 'have' తప్పు."
    },
    {
        question: "‘లాభం’ కు విరుద్ధ పదం ఏది?",
        options: [
            "నష్టం",
            "ఆదాయం",
            "సంపద",
            "శ్రేయస్సు"
        ],
        correct: 0,
        explanation: "లాభం అంటే పొందిన ప్రయోజనం. దానికి వ్యతిరేక భావం కలిగిన పదం నష్టం."
    },
    {
        question: "‘ధైర్యం’ కు విరుద్ధ పదం ఏది?",
        options: [
            "సాహసం",
            "పిరికితనం",
            "పట్టుదల",
            "శక్తి"
        ],
        correct: 1,
        explanation: "ధైర్యం అంటే భయంలేకుండా వ్యవహరించడం. దానికి వ్యతిరేక పదం పిరికితనం."
    },
    {
        question: "‘సత్యం’ కు విరుద్ధ పదం ఏది?",
        options: [
            "నీతి",
            "ధర్మం",
            "అసత్యం",
            "న్యాయం"
        ],
        correct: 2,
        explanation: "సత్యం అంటే నిజం. దానికి విరుద్ధార్థక పదం అసత్యం."
    },
    {
        question: "‘ఆరోహణ’ కు విరుద్ధ పదం ఏది?",
        options: [
            "ప్రగతి",
            "అభివృద్ధి",
            "అవరోహణ",
            "ఉన్నతి"
        ],
        correct: 2,
        explanation: "ఆరోహణ అంటే పైకి వెళ్లడం. అవరోహణ అంటే క్రిందికి దిగడం. ఇవి పరస్పర విరుద్ధ పదాలు."
    },
    {
        question: "‘విజయం’ కు విరుద్ధ పదం ఏది?",
        options: [
            "సాధన",
            "గెలుపు",
            "పరాజయం",
            "కీర్తి"
        ],
        correct: 2,
        explanation: "విజయం అంటే గెలుపు. దానికి వ్యతిరేక భావం కలిగిన పదం పరాజయం."
    },
    {
        question: "‘ఉన్నతి’ కు విరుద్ధ పదం ఏది?",
        options: [
            "అభివృద్ధి",
            "ప్రగతి",
            "అవనతి",
            "స్థిరత్వం"
        ],
        correct: 2,
        explanation: "ఉన్నతి అంటే ఎదుగుదల. అవనతి అంటే దిగజారడం. కాబట్టి ఇది సరైన విరుద్ధ పదం."
    },
    {
        question: "‘శాంతి’ కు విరుద్ధ పదం ఏది?",
        options: [
            "స్నేహం",
            "సహనం",
            "యుద్ధం",
            "క్రమం"
        ],
        correct: 2,
        explanation: "శాంతి అంటే ప్రశాంత పరిస్థితి. యుద్ధం అంటే ఘర్షణ పరిస్థితి. అందువల్ల ఇవి విరుద్ధ పదాలు."
    },
    {
        question: "‘ఆదాయం’ కు విరుద్ధ పదం ఏది?",
        options: [
            "వ్యయం",
            "సంపాదన",
            "వేతనం",
            "పొదుపు"
        ],
        correct: 0,
        explanation: "ఆదాయం అంటే వచ్చే ధనం. వ్యయం అంటే ఖర్చు చేయబడే ధనం. కాబట్టి ఇది సరైన విరుద్ధ పదం."
    },
    {
        question: "‘ప్రశంస’ కు విరుద్ధ పదం ఏది?",
        options: [
            "గౌరవం",
            "కీర్తి",
            "నింద",
            "అభినందన"
        ],
        correct: 2,
        explanation: "ప్రశంస అంటే మెచ్చుకోవడం. నింద అంటే తప్పుబట్టడం. ఈ రెండు పరస్పర విరుద్ధ భావాలను సూచిస్తాయి."
    },
    {
        question: "‘స్వర్గం’ కు విరుద్ధ పదం ఏది?",
        options: [
            "భూమి",
            "లోకం",
            "నరకం",
            "పర్వతం"
        ],
        correct: 2,
        explanation: "సాంప్రదాయిక భావనలో స్వర్గం సుఖానికి, నరకం దుఃఖానికి ప్రతీకలు. అందువల్ల ఇవి విరుద్ధ పదాలు."
    },
    {
        question: "‘విస్తరణ’ కు విరుద్ధ పదం ఏది?",
        options: [
            "అభివృద్ధి",
            "వ్యాకోచం",
            "సంకోచం",
            "పెరుగుదల"
        ],
        correct: 2,
        explanation: "విస్తరణ అంటే వ్యాపించడం లేదా పెరగడం. సంకోచం అంటే కుదించుకోవడం లేదా తగ్గిపోవడం."
    },
    {
        question: "‘స్వతంత్రం’ కు విరుద్ధ పదం ఏది?",
        options: [
            "ఆధీనత",
            "స్వేచ్ఛ",
            "హక్కు",
            "సార్వభౌమత్వం"
        ],
        correct: 0,
        explanation: "స్వతంత్రం అంటే ఇతరుల నియంత్రణ లేకుండా ఉండటం. ఆధీనత అంటే ఇతరులపై ఆధారపడటం లేదా వారి నియంత్రణలో ఉండటం."
    },
    {
        question: "‘నూతన’ కు విరుద్ధ పదం ఏది?",
        options: [
            "తాజా",
            "పురాతన",
            "ఆధునిక",
            "వినూత్న"
        ],
        correct: 1,
        explanation: "నూతన అంటే కొత్త. పురాతన అంటే చాలా కాలం నాటి లేదా పాతది. కాబట్టి ఇది సరైన విరుద్ధ పదం."
    }
];