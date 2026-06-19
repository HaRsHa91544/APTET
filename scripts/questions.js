const SUBJECTS = [
    "Multiple Disabilities",
    "ICT",
    "English",
    "Telugu",
];

const QUESTIONS = [
    {
        question: "Hearing Impairment మరియు Intellectual Disability రెండూ కలిగి ఉన్న వ్యక్తిని ఏమంటారు?",
        options: [
            "Learning Disability",
            "Multiple Disabilities",
            "Autism",
            "Cerebral Palsy"
        ],
        correct: 1,
        explanation: "రెండు లేదా అంతకంటే ఎక్కువ వైకల్యాలు ఒకే వ్యక్తిలో కలిసివుంటే దానిని Multiple Disabilities అంటారు. Hearing Impairment మరియు Intellectual Disability కలిసి ఉన్నప్పుడు ఈ వర్గంలోకి వస్తుంది."
    },
    {
        question: "Multiple Disabilities యొక్క సరైన నిర్వచనం ఏది?",
        options: [
            "ఒకే వైకల్యం కలిగి ఉండటం",
            "రెండు లేదా అంతకంటే ఎక్కువ వైకల్యాలు కలిసి ఉండటం",
            "తాత్కాలిక వైకల్యం",
            "మానసిక వ్యాధి"
        ],
        correct: 1,
        explanation: "Multiple Disabilities అనగా ఒక వ్యక్తికి రెండు లేదా అంతకంటే ఎక్కువ వైకల్యాలు ఒకేసారి ఉండటం. దీనివల్ల ప్రత్యేక బోధన మరియు మద్దతు అవసరం అవుతుంది."
    },
    {
        question: "క్రింది వాటిలో Multiple Disabilities కు ఉదాహరణ ఏది?",
        options: [
            "Blindness మాత్రమే",
            "Hearing Loss మాత్రమే",
            "Visual Impairment + Cerebral Palsy",
            "Dyslexia మాత్రమే"
        ],
        correct: 2,
        explanation: "Visual Impairment మరియు Cerebral Palsy రెండు వేర్వేరు వైకల్యాలు. ఇవి ఒకే వ్యక్తిలో ఉన్నప్పుడు Multiple Disabilities కు ఉదాహరణగా పరిగణిస్తారు."
    },
    {
        question: "Multiple Disabilities గల విద్యార్థి అవసరాలను గుర్తించడానికి మొదటి దశ",
        options: [
            "పరీక్ష నిర్వహణ",
            "Assessment",
            "Remediation",
            "Certification"
        ],
        correct: 1,
        explanation: "విద్యార్థి బలాలు, బలహీనతలు, అవసరాలను తెలుసుకోవడానికి మొదట Assessment నిర్వహించాలి. దాని ఆధారంగా విద్యా ప్రణాళిక రూపొందించబడుతుంది."
    },
    {
        question: "Functional Assessment ప్రధానంగా దేనిని తెలుసుకోవడానికి ఉపయోగపడుతుంది?",
        options: [
            "IQ",
            "రోజువారీ జీవన నైపుణ్యాలు",
            "వయస్సు",
            "హాజరు"
        ],
        correct: 1,
        explanation: "Functional Assessment ద్వారా విద్యార్థి రోజువారీ జీవన నైపుణ్యాలు, స్వీయ సంరక్షణ, సామాజిక మరియు ప్రాయోగిక సామర్థ్యాలను అంచనా వేస్తారు."
    },
    {
        question: "విద్యార్థికి వినికిడి లోపం మరియు దృష్టి లోపం రెండూ ఉంటే దానిని",
        options: [
            "Autism",
            "Deafblindness",
            "Dysgraphia",
            "ADHD"
        ],
        correct: 1,
        explanation: "వినికిడి మరియు దృష్టి లోపాలు రెండూ కలిసి ఉన్న పరిస్థితిని Deafblindness అంటారు. దీనికి ప్రత్యేక కమ్యూనికేషన్ మరియు బోధనా పద్ధతులు అవసరం."
    },
    {
        question: "Multiple Disabilities విద్యార్థుల కోసం IEP లో తప్పనిసరిగా ఉండవలసిన అంశం",
        options: [
            "Index",
            "Goals",
            "Preface",
            "Annexure"
        ],
        correct: 1,
        explanation: "IEP లో విద్యార్థి సాధించాల్సిన స్పష్టమైన లక్ష్యాలు ఉండాలి. Goals ఆధారంగా బోధన, మూల్యాంకనం మరియు పురోగతి పర్యవేక్షణ జరుగుతుంది."
    },
    {
        question: "క్రింది వాటిలో Assistive Technology కు ఉదాహరణ",
        options: [
            "Chalk Piece",
            "Braille Display",
            "Blackboard",
            "Notebook"
        ],
        correct: 1,
        explanation: "Braille Display దృష్టి లోపం గల వ్యక్తులకు డిజిటల్ సమాచారాన్ని బ్రెయిల్ రూపంలో అందించే Assistive Technology పరికరం."
    },
    {
        question: "Wheelchair ప్రధానంగా దేనికి సహాయపడుతుంది?",
        options: [
            "Communication",
            "Mobility",
            "Hearing",
            "Vision"
        ],
        correct: 1,
        explanation: "Wheelchair కదలికలలో ఇబ్బందులు ఉన్న వ్యక్తులకు స్వతంత్రంగా ప్రయాణించడానికి మరియు చలనం మెరుగుపరచడానికి ఉపయోగపడుతుంది."
    },
    {
        question: "UDL యొక్క పూర్తి రూపం",
        options: [
            "Universal Development of Learning",
            "Universal Design for Learning",
            "Unified Design for Learners",
            "Universal Disability Learning"
        ],
        correct: 1,
        explanation: "UDL అంటే Universal Design for Learning. ఇది వివిధ అవసరాలున్న విద్యార్థులందరికీ అందుబాటులో ఉండే బోధన విధానాలను ప్రోత్సహిస్తుంది."
    },
    {
        question: "UDL యొక్క ప్రధాన ఉద్దేశ్యం",
        options: [
            "అందరికీ ఒకే బోధన",
            "వైవిధ్యమైన అభ్యాస అవసరాలను తీర్చడం",
            "పరీక్షల నిర్వహణ",
            "హాజరు పెంచడం"
        ],
        correct: 1,
        explanation: "UDL యొక్క లక్ష్యం ప్రతి విద్యార్థి అభ్యాస శైలిని గుర్తించి, వివిధ మార్గాల్లో బోధన అందించడం ద్వారా అభ్యాసాన్ని సులభతరం చేయడం."
    },
    {
        question: "UDL లో Multiple Means of Representation అంటే",
        options: [
            "అనేక విధాలుగా సమాచారం అందించడం",
            "ఒకే పాఠ్యపుస్తకం ఉపయోగించడం",
            "పరీక్షలు నిర్వహించడం",
            "శిక్షణ ఇవ్వడం"
        ],
        correct: 0,
        explanation: "Multiple Means of Representation అనగా సమాచారం, భావనలు మరియు విషయాలను విద్యార్థులకు వివిధ రూపాల్లో అందించడం. ఇది UDL యొక్క ప్రధాన సూత్రాలలో ఒకటి."
    },
    {
        question: "Assistive Technology ఎంపికకు ముందు చేయవలసింది",
        options: [
            "Admission",
            "Need Assessment",
            "Examination",
            "Promotion"
        ],
        correct: 1,
        explanation: "Assistive Technology ఎంపికకు ముందు విద్యార్థి అవసరాలు, సామర్థ్యాలు మరియు పరిసరాలను అంచనా వేయడానికి Need Assessment చేయాలి."
    },
    {
        question: "Multiple Disabilities గల విద్యార్థి పురోగతిని కొలవడానికి సరైన పద్ధతి",
        options: [
            "Continuous Assessment",
            "Punishment",
            "Attendance Record",
            "Oral Reading Only"
        ],
        correct: 0,
        explanation: "Continuous Assessment ద్వారా విద్యార్థి అభ్యాస పురోగతిని నిరంతరం గమనించి, అవసరమైన మార్పులు బోధనలో చేయవచ్చు."
    },
    {
        question: "Inclusive Education లో Multiple Disabilities గల పిల్లల కోసం ప్రధాన సూత్రం",
        options: [
            "Segregation",
            "Exclusion",
            "Participation",
            "Isolation"
        ],
        correct: 2,
        explanation: "Inclusive Education లో ప్రతి విద్యార్థి పూర్తి భాగస్వామ్యంతో నేర్చుకునే అవకాశం పొందాలి. Participation అనేది సమగ్ర విద్య యొక్క ప్రధాన సూత్రం."
    },
    {
        question: "Communication Board ఉపయోగించేది",
        options: [
            "Mobility కోసం",
            "Communication కోసం",
            "Vision కోసం",
            "Hearing కోసం"
        ],
        correct: 1,
        explanation: "Communication Board మాట్లాడడంలో ఇబ్బంది ఉన్న విద్యార్థులకు చిత్రాలు, చిహ్నాలు లేదా పదాల ద్వారా తమ ఆలోచనలు వ్యక్తపరచడానికి సహాయపడే పరికరం."
    },
    {
        question: "Assistive Devices ఎంపికలో ముఖ్యమైనది",
        options: [
            "Cost మాత్రమే",
            "Student Need",
            "Brand",
            "Colour"
        ],
        correct: 1,
        explanation: "Assistive Device ఎంపికలో విద్యార్థి అవసరాలు, సామర్థ్యాలు మరియు ఉపయోగించే పరిస్థితులు ముఖ్యమైనవి. ఖర్చు లేదా బ్రాండ్ మాత్రమే ప్రమాణం కాదు."
    },
    {
        question: "Multiple Disabilities గుర్తింపులో భాగం కానిది",
        options: [
            "Medical Assessment",
            "Educational Assessment",
            "Functional Assessment",
            "Election Assessment"
        ],
        correct: 3,
        explanation: "Medical, Educational మరియు Functional Assessments గుర్తింపు ప్రక్రియలో భాగాలు. Election Assessment కు వైకల్యాల గుర్తింపుతో సంబంధం లేదు."
    },
    {
        question: "Family involvement ఎందుకు అవసరం?",
        options: [
            "Attendance కోసం",
            "Consistency of support కోసం",
            "Marks కోసం",
            "Certification కోసం"
        ],
        correct: 1,
        explanation: "కుటుంబ సభ్యుల భాగస్వామ్యం వల్ల పాఠశాల మరియు ఇంటి మధ్య మద్దతు కొనసాగుతుంది. ఇది విద్యార్థి అభివృద్ధికి ఎంతో ఉపయోగపడుతుంది."
    },
    {
        question: "Multiple Disabilities విద్యార్థుల బోధనలో ఉత్తమ విధానం",
        options: [
            "One-size-fits-all",
            "Individualized Approach",
            "Rote Learning",
            "Memorization Only"
        ],
        correct: 1,
        explanation: "ప్రతి విద్యార్థి అవసరాలు వేర్వేరుగా ఉంటాయి. అందువల్ల Individualized Approach ద్వారా వ్యక్తిగత అవసరాలకు అనుగుణంగా బోధించాలి."
    },
    {
        question: "MOOC యొక్క పూర్తి రూపం",
        options: [
            "Massive Open Online Course",
            "Massive Online Open Class",
            "Modern Open Online Course",
            "Multiple Open Online Course"
        ],
        correct: 0,
        explanation: "MOOC అంటే Massive Open Online Course. ఇది ప్రపంచవ్యాప్తంగా పెద్ద సంఖ్యలో విద్యార్థులకు అందుబాటులో ఉండే ఆన్‌లైన్ కోర్సు."
    },
    {
        question: "DIKSHA ప్రధానంగా",
        options: [
            "Social Media Platform",
            "Educational Platform",
            "Gaming Platform",
            "Shopping Portal"
        ],
        correct: 1,
        explanation: "DIKSHA భారత విద్యా రంగానికి సంబంధించిన డిజిటల్ ప్లాట్‌ఫారమ్. ఇందులో ఉపాధ్యాయులు మరియు విద్యార్థుల కోసం పాఠ్య వనరులు ఉంటాయి."
    },
    {
        question: "Moodle అనేది",
        options: [
            "Operating System",
            "Learning Management System",
            "Browser",
            "Search Engine"
        ],
        correct: 1,
        explanation: "Moodle ఒక Learning Management System (LMS). ఇది ఆన్‌లైన్ కోర్సుల నిర్వహణ, బోధన మరియు మూల్యాంకనానికి ఉపయోగపడుతుంది."
    },
    {
        question: "MOOCs యొక్క ముఖ్య లక్షణం",
        options: [
            "Limited Access",
            "Open Access Learning",
            "Offline Only",
            "Printed Learning"
        ],
        correct: 1,
        explanation: "MOOCs యొక్క ముఖ్య లక్షణం Open Access. ఇంటర్నెట్ ఉన్న ఎవరైనా ఈ కోర్సుల్లో చేరి నేర్చుకోవచ్చు."
    },
    {
        question: "DIKSHA ను అభివృద్ధి చేసిన సంస్థ",
        options: [
            "NCERT",
            "RBI",
            "ISRO",
            "UGC"
        ],
        correct: 0,
        explanation: "DIKSHA వేదికను NCERT మరియు విద్యా శాఖల సహకారంతో అభివృద్ధి చేశారు. ఇది డిజిటల్ విద్యా వనరులను అందిస్తుంది."
    },
    {
        question: "Moodle ఉపయోగించేది",
        options: [
            "Online Course Management",
            "Hardware Repair",
            "Network Installation",
            "Email Creation"
        ],
        correct: 0,
        explanation: "Moodle ద్వారా కోర్సులను రూపొందించడం, విద్యార్థులను నిర్వహించడం, అసైన్‌మెంట్లు ఇవ్వడం మరియు మూల్యాంకనం చేయడం సాధ్యమవుతుంది."
    },
    {
        question: "E-learning లో ప్రధాన ప్రయోజనం",
        options: [
            "Time Flexibility",
            "Chalk Saving",
            "Classroom Reduction",
            "Examination Avoidance"
        ],
        correct: 0,
        explanation: "E-learning లో విద్యార్థులు తమకు అనుకూలమైన సమయాల్లో నేర్చుకునే అవకాశం ఉంటుంది. దీనిని Time Flexibility అంటారు."
    },
    {
        question: "MOOCs లో సాధారణంగా ఉండేది",
        options: [
            "Video Lectures",
            "Cinema Songs",
            "Newspapers",
            "Magazines"
        ],
        correct: 0,
        explanation: "MOOCs లో సాధారణంగా వీడియో లెక్చర్లు, క్విజ్‌లు, అసైన్‌మెంట్లు మరియు చర్చా వేదికలు ఉంటాయి. Video Lectures ప్రధాన భాగం."
    },
    {
        question: "DIKSHA లో QR Code వినియోగం దేనికి?",
        options: [
            "Attendance",
            "Digital Content Access",
            "Fee Collection",
            "Examination"
        ],
        correct: 1,
        explanation: "పాఠ్యపుస్తకాలలోని QR కోడ్‌ను స్కాన్ చేసి సంబంధిత డిజిటల్ కంటెంట్, వీడియోలు మరియు అభ్యాస వనరులను పొందవచ్చు."
    },
    {
        question: "Moodle లో Teacher చేయగలిగేది",
        options: [
            "Course Creation",
            "Vehicle Registration",
            "Banking",
            "Ticket Booking"
        ],
        correct: 0,
        explanation: "Moodle లో ఉపాధ్యాయులు కోర్సులను సృష్టించడం, అభ్యాస పదార్థాలను అప్‌లోడ్ చేయడం మరియు విద్యార్థుల పురోగతిని పర్యవేక్షించడం చేయగలరు."
    },
    {
        question: "She is good ___ Mathematics.",
        options: [
            "in",
            "on",
            "at",
            "for"
        ],
        correct: 2,
        explanation: "The adjective 'good' is commonly followed by the preposition 'at' when referring to skill or ability in a subject or activity."
    },
    {
        question: "Each of the boys ___ present.",
        options: [
            "are",
            "were",
            "is",
            "have"
        ],
        correct: 2,
        explanation: "Each is a singular subject. Therefore, it takes the singular verb 'is' regardless of the plural noun that follows."
    },
    {
        question: "The train arrived ___ time.",
        options: [
            "on",
            "at",
            "in",
            "for"
        ],
        correct: 0,
        explanation: "The correct expression is 'on time', which means arriving at the scheduled or expected time without delay."
    },
    {
        question: "Neither Ram nor his friends ___ coming.",
        options: [
            "is",
            "are",
            "was",
            "be"
        ],
        correct: 1,
        explanation: "With 'neither...nor', the verb agrees with the subject nearest to it. Since 'friends' is plural, 'are' is correct."
    },
    {
        question: "We have lived here ___ 2015.",
        options: [
            "for",
            "since",
            "from",
            "by"
        ],
        correct: 1,
        explanation: "Since is used with a specific point of time. Here, 2015 is a specific starting year, so 'since' is correct."
    },
    {
        question: "One of the students ___ selected.",
        options: [
            "were",
            "have",
            "are",
            "was"
        ],
        correct: 3,
        explanation: "The subject is 'One', which is singular. Therefore, the singular verb 'was' must be used."
    },
    {
        question: "The book is ___ the table.",
        options: [
            "on",
            "at",
            "into",
            "from"
        ],
        correct: 0,
        explanation: "The preposition 'on' is used when something is placed on the surface of an object, such as a table."
    },
    {
        question: "Mathematics ___ my favourite subject.",
        options: [
            "are",
            "were",
            "is",
            "have"
        ],
        correct: 2,
        explanation: "Although Mathematics ends with 's', it is treated as a singular subject name and takes the singular verb 'is'."
    },
    {
        question: "He divided the sweets ___ the children.",
        options: [
            "among",
            "between",
            "over",
            "into"
        ],
        correct: 0,
        explanation: "Among is used when something is distributed to more than two people. Here, sweets are shared among children."
    },
    {
        question: "Everybody ___ appreciated the program.",
        options: [
            "were",
            "are",
            "have",
            "was"
        ],
        correct: 3,
        explanation: "Everybody is a singular indefinite pronoun. Therefore, it takes the singular verb 'was'."
    },
    {
        question: "“భగీరథ ప్రయత్నం” అనే జాతీయానికి అర్థం",
        options: [
            "చిన్న పని",
            "కష్టసాధ్యమైన ప్రయత్నం",
            "వ్యర్థ ప్రయత్నం",
            "రహస్య పని"
        ],
        correct: 1,
        explanation: "భగీరథుడు గంగను భూమికి తీసుకురావడానికి చేసిన గొప్ప కృషిని సూచిస్తూ, అత్యంత కష్టమైన ప్రయత్నాన్ని భగీరథ ప్రయత్నం అంటారు."
    },
    {
        question: "“వల్లభ” పదానికి పర్యాయపదం",
        options: [
            "శత్రువు",
            "ప్రియుడు",
            "సేవకుడు",
            "రాజు"
        ],
        correct: 1,
        explanation: "వల్లభ అంటే ఇష్టమైనవాడు లేదా ప్రియమైనవాడు. అందువల్ల 'ప్రియుడు' సరైన పర్యాయపదం."
    },
    {
        question: "“అదిగో పులి అంటే ఇదిగో తోక” అనేది",
        options: [
            "జాతీయం",
            "సామెత",
            "పద్యం",
            "కథ"
        ],
        correct: 1,
        explanation: "ఇది ఒక ప్రసిద్ధ సామెత. ఎవరైనా చెప్పిన విషయాన్ని వెంటనే ఆధారం లేకుండా నమ్మే పరిస్థితిని సూచిస్తుంది."
    },
    {
        question: "“నరుడు” పదానికి పర్యాయపదం",
        options: [
            "మానవుడు",
            "దేవుడు",
            "రాక్షసుడు",
            "పక్షి"
        ],
        correct: 0,
        explanation: "నరుడు అంటే మనిషి. మానవుడు అనే పదం అదే అర్థాన్ని ఇస్తుంది కాబట్టి ఇది సరైన పర్యాయపదం."
    },
    {
        question: "“కాలధర్మం చెందడం” జాతీయానికి అర్థం",
        options: [
            "ఎదగడం",
            "మరణించడం",
            "ప్రయాణించడం",
            "గెలవడం"
        ],
        correct: 1,
        explanation: "కాలధర్మం చెందడం అనే జాతీయం మరణాన్ని సూచిస్తుంది. ప్రతి జీవి కాలక్రమంలో మరణించడం సహజ ధర్మమని భావం."
    },
    {
        question: "“కవి” పదానికి వికృతి",
        options: [
            "కావ్యం",
            "కవిత",
            "కై",
            "కయ్యం"
        ],
        correct: 2,
        explanation: "తెలుగు వ్యాకరణంలో 'కవి' పదానికి వికృతి రూపం 'కై'. ఇది తత్సమ పదం నుండి రూపాంతరం చెందిన వికృత పదంగా పరిగణించబడుతుంది."
    },
    {
        question: "“యమకం” ఏ విభాగానికి చెందుతుంది?",
        options: [
            "ఛందస్సు",
            "అలంకారం",
            "సమాసం",
            "సంధి"
        ],
        correct: 1,
        explanation: "యమకం ఒక శబ్దాలంకారం. ఒకే పదం లేదా శబ్దం పునరావృతమైనా అర్థభేదం కలిగే విధంగా ఉపయోగించడం యమక లక్షణం."
    },
    {
        question: "“ఉపమ” అనేది",
        options: [
            "అర్థాలంకారం",
            "శబ్దాలంకారం",
            "సమాసం",
            "సంధి"
        ],
        correct: 0,
        explanation: "ఉపమలో ఒక వస్తువును మరొక వస్తువుతో పోల్చి భావాన్ని వ్యక్తపరుస్తారు. అందువల్ల ఇది అర్థాలంకారాల విభాగానికి చెందుతుంది."
    },
    {
        question: "“భాను” పదానికి పర్యాయపదం",
        options: [
            "చంద్రుడు",
            "సూర్యుడు",
            "నక్షత్రం",
            "గ్రహం"
        ],
        correct: 1,
        explanation: "భాను అంటే సూర్యుడు. తెలుగు సాహిత్యంలో భాస్కరుడు, రవి, ఆదిత్యుడు వంటి పదాలు కూడా సూర్యుని పర్యాయపదాలే."
    },
    {
        question: "“అత్వ సంధి” తెలుగు సంధులలో ఒకటి.",
        options: [
            "సరైనది",
            "తప్పు",
            "సమాసం",
            "అలంకారం"
        ],
        correct: 0,
        explanation: "అత్వ సంధి తెలుగు సంధులలో ఒకటి. తెలుగు వ్యాకరణంలో అత్వ, ఇత్వ, ఉత్వ వంటి సంధులు ముఖ్యమైనవి."
    }
];