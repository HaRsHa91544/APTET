const SUBJECTS = [
    "Psychology",
    "English",
    "Telugu"
];

const QUESTIONS = [
    {
        question: "మానసిక వికాసాన్ని నాలుగు దశలుగా వివరించిన మనోవిజ్ఞాన శాస్త్రవేత్త ఎవరు?",
        options: [
            "లెవ్ వైగోట్స్కీ",
            "జీన్ పియాజే",
            "జెరోమ్ బ్రూనర్",
            "ఎరిక్ ఎరిక్సన్"
        ],
        correct: 1,
        explanation: "జీన్ పియాజే జ్ఞాన వికాసాన్ని సెన్సరీమోటార్, ప్రీఆపరేషనల్, కాంక్రీట్ ఆపరేషనల్, ఫార్మల్ ఆపరేషనల్ అనే నాలుగు దశలుగా వివరించాడు. పిల్లల ఆలోచనా వికాసాన్ని అర్థం చేసుకోవడంలో ఈ సిద్ధాంతం ఎంతో ముఖ్యమైనది."
    },
    {
        question: "\"Zone of Proximal Development (ZPD)\" అనే భావనను ప్రతిపాదించినది ఎవరు?",
        options: [
            "జెరోమ్ బ్రూనర్",
            "ఆల్బర్ట్ బండూరా",
            "లెవ్ వైగోట్స్కీ",
            "బి.ఎఫ్. స్కిన్నర్"
        ],
        correct: 2,
        explanation: "లెవ్ వైగోట్స్కీ ప్రతిపాదించిన ZPD భావన ప్రకారం విద్యార్థి స్వయంగా చేయలేని పనిని గురువు లేదా సహచరుల సహాయంతో చేయగలిగే సామర్థ్యాన్ని సూచిస్తుంది."
    },
    {
        question: "క్రింది జతలలో సరైనది ఏది?",
        options: [
            "స్కిన్నర్ — Classical Conditioning",
            "పావ్‌లవ్ — Operant Conditioning",
            "థార్న్‌డైక్ — Laws of Learning",
            "బండూరా — Mental Age"
        ],
        correct: 2,
        explanation: "థార్న్‌డైక్ అభ్యాస నియమాలను (Laws of Learning) ప్రతిపాదించాడు. ముఖ్యంగా సిద్ధత, అభ్యాసం మరియు ఫలిత నియమాలు విద్యా మనోవిజ్ఞానంలో అత్యంత ప్రాధాన్యం కలిగినవి."
    },
    {
        question: "Multiple Intelligences సిద్ధాంతాన్ని ప్రతిపాదించిన మనోవిజ్ఞాన శాస్త్రవేత్త ఎవరు?",
        options: [
            "స్పియర్‌మాన్",
            "హోవర్డ్ గార్డ్నర్",
            "స్టెర్న్‌బర్గ్",
            "గిల్‌ఫోర్డ్"
        ],
        correct: 1,
        explanation: "హోవర్డ్ గార్డ్నర్ వ్యక్తిలో ఒకే మేధస్సు కాకుండా భాషా, సంగీత, తార్కిక, అంతర్వ్యక్తిగత వంటి అనేక మేధస్సులు ఉంటాయని ప్రతిపాదించాడు."
    },
    {
        question: "శరీర నిర్మాణం ఆధారంగా వ్యక్తిత్వ వర్గీకరణను ప్రతిపాదించినది ఎవరు?",
        options: [
            "క్రెట్ష్మర్",
            "మాస్లో",
            "రోజర్స్",
            "వెక్స్లర్"
        ],
        correct: 0,
        explanation: "క్రెట్ష్మర్ శరీర నిర్మాణాన్ని ఆధారంగా వ్యక్తిత్వాన్ని వర్గీకరించాడు. శారీరక ఆకృతి మరియు వ్యక్తిత్వ లక్షణాల మధ్య సంబంధం ఉందని ఆయన వివరించాడు."
    },
    {
        question: "\"Self-Actualization\" అనే భావన ఏ సిద్ధాంతానికి సంబంధించినది?",
        options: [
            "Psychoanalytic Theory",
            "Hierarchy of Needs",
            "Social Learning Theory",
            "Triarchic Theory"
        ],
        correct: 1,
        explanation: "మాస్లో అవసరాల శ్రేణి సిద్ధాంతంలో Self-Actualization అత్యున్నత స్థాయి. వ్యక్తి తన సంపూర్ణ సామర్థ్యాన్ని అభివృద్ధి చేసుకోవడాన్ని ఇది సూచిస్తుంది."
    },
    {
        question: "Neither Ravi nor his friends ____ present yesterday.",
        options: [
            "was",
            "were",
            "is",
            "has"
        ],
        correct: 1,
        explanation: "Neither...nor నిర్మాణంలో క్రియ సమీపంలోని కర్తతో సరిపోతుంది. ఇక్కడ 'friends' బహువచనం కావడంతో 'were' అనే క్రియ సరైనది."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "Hardly had I reached the station than the train left.",
            "Hardly had I reached the station when the train left.",
            "Hardly I reached the station when the train left.",
            "Hardly had I reached station when train left."
        ],
        correct: 1,
        explanation: "Hardly అనే నిర్మాణంతో సాధారణంగా 'Hardly...when' వాడాలి. 'Than' ఉపయోగించడం వ్యాకరణపరంగా తప్పు కాబట్టి రెండవ వాక్యమే సరైనది."
    },
    {
        question: "Change into Passive Voice:\n\nThey will complete the project next week.",
        options: [
            "The project is completed next week.",
            "The project will be completed next week.",
            "The project was completed next week.",
            "The project has been completed next week."
        ],
        correct: 1,
        explanation: "Future Simple Passive నిర్మాణం 'will be + past participle'. అందువల్ల 'The project will be completed next week' సరైన Passive Voice."
    },
    {
        question: "Choose the correct conditional sentence.",
        options: [
            "If I had money, I will buy a car.",
            "If I have money, I would buy a car.",
            "If I have money, I will buy a car.",
            "If I had had money, I will have bought a car."
        ],
        correct: 2,
        explanation: "First Conditional లో If-Clause లో Present Simple మరియు Main Clause లో 'will + verb' ఉపయోగిస్తారు. అందువల్ల మూడవ వాక్యం సరైనది."
    },
    {
        question: "Change into Indirect Speech:\n\nHe said, \"I am busy.\"",
        options: [
            "He said that he is busy.",
            "He said that he was busy.",
            "He said he had been busy.",
            "He told that he was busy."
        ],
        correct: 1,
        explanation: "Reported Speech లో Reporting Verb Past Tense లో ఉన్నప్పుడు Present Tense సాధారణంగా Past Tense గా మారుతుంది. కాబట్టి 'was busy' సరైన రూపం."
    },
    {
        question: "\"రాజపుత్రుడు\" అనే పదం ఏ సమాసానికి ఉదాహరణ?",
        options: [
            "ద్వంద్వ సమాసం",
            "తత్పురుష సమాసం",
            "బహువ్రీహి సమాసం",
            "అవ్యయీభావ సమాసం"
        ],
        correct: 1,
        explanation: "'రాజు యొక్క పుత్రుడు' అనే విగ్రహ వాక్యంతో ఏర్పడిన సమాసం తత్పురుష సమాసం. ఇందులో పూర్వపదం ఉత్తరపదాన్ని విశేషిస్తుంది."
    },
    {
        question: "\"నయనం\" అనే పదానికి సరైన పర్యాయపదం ఏది?",
        options: [
            "కర్ణం",
            "నేత్రం",
            "నాసిక",
            "హస్తం"
        ],
        correct: 1,
        explanation: "'నయనం' మరియు 'నేత్రం' రెండూ కంటిని సూచించే పర్యాయపదాలు. మిగిలిన పదాలు చెవి, ముక్కు, చేయి అనే అర్థాలను సూచిస్తాయి."
    },
    {
        question: "\"భగీరథ ప్రయత్నం\" అనే జాతీయానికి సరైన అర్థం ఏమిటి?",
        options: [
            "చిన్న పని",
            "అత్యంత కష్టమైన ప్రయత్నం",
            "వ్యర్థమైన పని",
            "తొందరపాటు నిర్ణయం"
        ],
        correct: 1,
        explanation: "'భగీరథ ప్రయత్నం' అంటే అత్యంత కష్టసాధ్యమైన పని కోసం నిరంతర శ్రమ చేయడం. గంగను భూమికి తీసుకువచ్చిన భగీరథుని కథ ఆధారంగా ఈ జాతీయం ఏర్పడింది."
    },
    {
        question: "క్రింది పదాల్లో తత్సమ పదం ఏది?",
        options: [
            "చెయ్యి",
            "మనిషి",
            "విద్య",
            "ఊరు"
        ],
        correct: 2,
        explanation: "'విద్య' అనే పదం సంస్కృతం నుండి యథాతథంగా తెలుగులోకి వచ్చిన తత్సమ పదం. మిగిలిన పదాలు తద్భవ లేదా దేశ్య పదాలుగా పరిగణించబడతాయి."
    },
    {
        question: "\"Scaffolding\" అనే భావన ప్రధానంగా ఏ మనోవిజ్ఞాన శాస్త్రవేత్తతో సంబంధం కలిగి ఉంది?",
        options: [
            "జీన్ పియాజే",
            "జెరోమ్ బ్రూనర్",
            "లెవ్ వైగోట్స్కీ",
            "ఆల్బర్ట్ బండూరా"
        ],
        correct: 1,
        explanation: "Discovery Learning సిద్ధాంతంలో జెరోమ్ బ్రూనర్ Scaffolding భావనను అభివృద్ధి చేశాడు. అవసరమైన సమయంలో గురువు ఇచ్చే తాత్కాలిక సహాయం ద్వారా విద్యార్థి స్వతంత్రంగా నేర్చుకునే స్థాయికి చేరుకుంటాడు."
    },
    {
        question: "\"Analytical, Creative, Practical Intelligence\" అనే మూడు మేధస్సుల సిద్ధాంతాన్ని ప్రతిపాదించినది ఎవరు?",
        options: [
            "హోవర్డ్ గార్డ్నర్",
            "చార్లెస్ స్పియర్‌మాన్",
            "రాబర్ట్ స్టెర్న్‌బర్గ్",
            "ఎల్.ఎల్. థర్‌స్టోన్"
        ],
        correct: 2,
        explanation: "రాబర్ట్ స్టెర్న్‌బర్గ్ Triarchic Theory of Intelligenceను ప్రతిపాదించాడు. ఇందులో విశ్లేషణాత్మక, సృజనాత్మక మరియు ప్రాయోగిక మేధస్సులు వ్యక్తి విజయాన్ని నిర్ణయిస్తాయని వివరించాడు."
    },
    {
        question: "\"g Factor\" అనే భావన ఏ సిద్ధాంతానికి సంబంధించినది?",
        options: [
            "Multiple Intelligences",
            "Structure of Intellect",
            "Two-Factor Theory",
            "Primary Mental Abilities"
        ],
        correct: 2,
        explanation: "స్పియర్‌మాన్ ప్రతిపాదించిన Two-Factor Theoryలో General Intelligence (g Factor) అన్ని మానసిక సామర్థ్యాలకు సాధారణమైన అంశంగా పరిగణించబడింది."
    },
    {
        question: "క్రింది వాటిలో \"Mental Age\"తో సంబంధం కలిగిన మనోవిజ్ఞాన శాస్త్రవేత్త ఎవరు?",
        options: [
            "డేవిడ్ వెక్స్లర్",
            "ఆల్ఫ్రెడ్ బినే",
            "గిల్‌ఫోర్డ్",
            "గార్డ్నర్"
        ],
        correct: 1,
        explanation: "ఆల్ఫ్రెడ్ బినే మొదటి మేధస్సు పరీక్షను రూపొందించి Mental Age భావనను ఉపయోగించాడు. తరువాత IQ లెక్కింపుకు ఈ భావన ఆధారంగా ఉపయోగించబడింది."
    },
    {
        question: "క్రింది వాటిలో సామాజిక పరిశీలన ద్వారా అభ్యాసం జరుగుతుందని తెలిపిన సిద్ధాంతం ఏది?",
        options: [
            "Operant Conditioning",
            "Classical Conditioning",
            "Social Learning Theory",
            "Psychoanalytic Theory"
        ],
        correct: 2,
        explanation: "ఆల్బర్ట్ బండూరా యొక్క Social Learning Theory ప్రకారం వ్యక్తులు ఇతరులను గమనించి, అనుకరించి మరియు పరిశీలన ద్వారా కొత్త ప్రవర్తనలను నేర్చుకుంటారు."
    },
    {
        question: "\"Readiness, Exercise, Effect\" అనే అభ్యాస నియమాలను ప్రతిపాదించినది ఎవరు?",
        options: [
            "స్కిన్నర్",
            "పావ్‌లవ్",
            "థార్న్‌డైక్",
            "బ్రూనర్"
        ],
        correct: 2,
        explanation: "థార్న్‌డైక్ Laws of Learningగా ప్రసిద్ధి చెందిన Readiness, Exercise మరియు Effect నియమాలను ప్రతిపాదించాడు. ఇవి అభ్యాస ప్రక్రియను అర్థం చేసుకోవడంలో ప్రాథమిక సూత్రాలు."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "No sooner did the bell ring when the students entered.",
            "No sooner had the bell rung than the students entered.",
            "No sooner the bell rang than the students entered.",
            "No sooner had the bell rung when the students entered."
        ],
        correct: 1,
        explanation: "No sooner అనే నిర్మాణంతో ఎల్లప్పుడూ 'than' ఉపయోగించాలి. సరైన నిర్మాణం 'No sooner had...than...' కాబట్టి రెండవ వాక్యం సరైనది."
    },
    {
        question: "Each of the players ____ given a certificate.",
        options: [
            "have",
            "were",
            "has",
            "are"
        ],
        correct: 2,
        explanation: "'Each of' అనే పదబంధం ఎల్లప్పుడూ ఏకవచనంగా పరిగణించబడుతుంది. అందువల్ల Singular Verb అయిన 'has' మాత్రమే సరైన సమాధానం."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "Either the teachers or the principal are attending the meeting.",
            "Either the teachers or the principal is attending the meeting.",
            "Either the teachers or the principal have attended the meeting.",
            "Either the teachers or principal were attending the meeting."
        ],
        correct: 1,
        explanation: "Either...or నిర్మాణంలో క్రియ సమీపంలోని కర్తతో సరిపోతుంది. ఇక్కడ 'principal' ఏకవచనం కాబట్టి 'is attending' సరైనది."
    },
    {
        question: "Change into Indirect Speech.\n\nShe said, \"Do you know the answer?\"",
        options: [
            "She asked whether I knew the answer.",
            "She asked that I knew the answer.",
            "She told whether I knew the answer.",
            "She asked do I know the answer."
        ],
        correct: 0,
        explanation: "Yes/No ప్రశ్నలను Reported Speechలో మార్చేటప్పుడు 'whether' లేదా 'if' ఉపయోగిస్తారు. అలాగే Tense కూడా అవసరమైన విధంగా మారుతుంది."
    },
    {
        question: "Choose the correct passive form.\n\nPeople speak Telugu in Andhra Pradesh.",
        options: [
            "Telugu speaks in Andhra Pradesh.",
            "Telugu is spoken in Andhra Pradesh.",
            "Telugu was spoken in Andhra Pradesh.",
            "Telugu has spoken in Andhra Pradesh."
        ],
        correct: 1,
        explanation: "Present Simple Passive నిర్మాణం 'is/am/are + past participle'. కాబట్టి 'Telugu is spoken in Andhra Pradesh' సరైన Passive Voice."
    },
    {
        question: "\"రామలక్ష్మణులు\" ఏ సమాసానికి ఉదాహరణ?",
        options: [
            "ద్వంద్వ సమాసం",
            "కర్మధారయ సమాసం",
            "తత్పురుష సమాసం",
            "బహువ్రీహి సమాసం"
        ],
        correct: 0,
        explanation: "'రామలక్ష్మణులు'లో రెండు సమాన ప్రాధాన్యం గల పదాలు కలిశాయి. ఇటువంటి సమాసాన్ని ద్వంద్వ సమాసం అంటారు."
    },
    {
        question: "క్రింది వాటిలో దేశ్య పదం ఏది?",
        options: [
            "పుష్పం",
            "విద్య",
            "ఊరు",
            "అగ్ని"
        ],
        correct: 2,
        explanation: "'ఊరు' స్వదేశీ మూలం గల దేశ్య పదం. 'పుష్పం', 'విద్య', 'అగ్ని' సంస్కృత ప్రభావంతో వచ్చిన తత్సమ పదాలు."
    },
    {
        question: "\"అరచేతిలో వైకుంఠం\" అనే జాతీయానికి సరైన అర్థం ఏమిటి?",
        options: [
            "చాలా సులభమైన పని",
            "అత్యంత కష్టమైన పని",
            "పనికిరాని వస్తువు",
            "అనుకోని లాభం"
        ],
        correct: 0,
        explanation: "'అరచేతిలో వైకుంఠం' అనే జాతీయం చాలా సులభంగా సాధించగల పనిని సూచిస్తుంది. ఎటువంటి కష్టం లేకుండా జరిగే పనికి దీనిని ఉపయోగిస్తారు."
    },
    {
        question: "క్రింది వాటిలో యణాదేశ సంధికి ఉదాహరణ ఏది?",
        options: [
            "ప్రతి + ఒకరు",
            "గురు + ఆశ్రమం",
            "అతి + ఉత్సాహం",
            "పితృ + ఆజ్ఞ"
        ],
        correct: 3,
        explanation: "'పితృ + ఆజ్ఞ' యణాదేశ సంధికి ప్రామాణిక ఉదాహరణగా పరిగణించబడుతుంది. సంధి నియమాల ప్రకారం యణ్ ఆదేశం ఏర్పడి సంయుక్త రూపం వస్తుంది."
    },
    {
        question: "మానవ అభివృద్ధిని \"Psychosocial Stages\"గా వివరించిన మనోవిజ్ఞాన శాస్త్రవేత్త ఎవరు?",
        options: [
            "సిగ్మండ్ ఫ్రాయిడ్",
            "ఎరిక్ ఎరిక్సన్",
            "జీన్ పియాజే",
            "కోల్‌బర్గ్"
        ],
        correct: 1,
        explanation: "ఎరిక్ ఎరిక్సన్ మానవ జీవితాన్ని శిశుదశ నుంచి వృద్ధాప్యం వరకు ఎనిమిది మానసిక-సామాజిక దశలుగా విభజించాడు. ప్రతి దశలో వ్యక్తి ఒక నిర్దిష్ట మానసిక సంఘర్షణను విజయవంతంగా అధిగమించాలి."
    },
    {
        question: "\"Operant Conditioning\"లో ప్రవర్తనను బలపరిచే ప్రధాన అంశం ఏది?",
        options: [
            "పరిశీలన",
            "పునర్బలనం (Reinforcement)",
            "అనుకరణ",
            "అంతర్దృష్టి"
        ],
        correct: 1,
        explanation: "బి.ఎఫ్. స్కిన్నర్ ప్రకారం పునర్బలనం (Reinforcement) వల్ల ప్రవర్తన పునరావృతమై బలపడుతుంది. సానుకూల మరియు ప్రతికూల పునర్బలనాలు అభ్యాసంలో ముఖ్యమైన పాత్ర పోషిస్తాయి."
    },
    {
        question: "క్రింది జతలలో తప్పుగా ఉన్నది ఏది?",
        options: [
            "గార్డ్నర్ – Multiple Intelligences",
            "స్పియర్‌మాన్ – g Factor",
            "గిల్‌ఫోర్డ్ – Structure of Intellect",
            "వెక్స్లర్ – Mental Age"
        ],
        correct: 3,
        explanation: "Mental Age భావన ఆల్ఫ్రెడ్ బినేతో సంబంధం కలిగి ఉంది. వెక్స్లర్ మాత్రం ఆధునిక మేధస్సు పరీక్షలను రూపొందించి IQ కొలిచే విధానాన్ని అభివృద్ధి చేశాడు."
    },
    {
        question: "\"Unconscious Mind\" భావన ప్రధానంగా ఎవరి సిద్ధాంతంలో కనిపిస్తుంది?",
        options: [
            "మాస్లో",
            "ఫ్రాయిడ్",
            "ఎరిక్సన్",
            "బండూరా"
        ],
        correct: 1,
        explanation: "సిగ్మండ్ ఫ్రాయిడ్ Psychoanalytic Theoryలో అచేతన మనస్సుకు అత్యంత ప్రాధాన్యం ఇచ్చాడు. మన ప్రవర్తనలో చాలా భాగం అచేతన మనస్సు ప్రభావంతోనే జరుగుతుందని వివరించాడు."
    },
    {
        question: "విద్యార్థి తన సహచరుడిని గమనించి అదే విధంగా ప్రవర్తించడం ఏ సిద్ధాంతాన్ని సూచిస్తుంది?",
        options: [
            "Classical Conditioning",
            "Social Learning Theory",
            "Hierarchy of Needs",
            "Discovery Learning"
        ],
        correct: 1,
        explanation: "ఆల్బర్ట్ బండూరా Social Learning Theory ప్రకారం వ్యక్తులు ఇతరులను పరిశీలించి, అనుకరించి కొత్త ప్రవర్తనలను నేర్చుకుంటారు. దీనినే Observational Learning అంటారు."
    },
    {
        question: "\"Scaffolding\" బోధనలో ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        options: [
            "శిక్ష విధించడం",
            "విద్యార్థికి తాత్కాలిక సహాయం అందించడం",
            "పరీక్ష నిర్వహించడం",
            "మార్కులు కేటాయించడం"
        ],
        correct: 1,
        explanation: "Scaffoldingలో గురువు అవసరమైనంత వరకు మాత్రమే సహాయం అందిస్తాడు. విద్యార్థి స్వతంత్రంగా చేయగలిగే స్థాయికి చేరుకున్న తర్వాత ఆ సహాయాన్ని క్రమంగా తగ్గిస్తారు."
    },
    {
        question: "క్రింది వారిలో మానవతావాద (Humanistic) సిద్ధాంతానికి చెందినవారు ఎవరు?",
        options: [
            "స్కిన్నర్ మరియు పావ్‌లవ్",
            "మాస్లో మరియు కార్ల్ రోజర్స్",
            "ఫ్రాయిడ్ మరియు ఎరిక్సన్",
            "బినే మరియు వెక్స్లర్"
        ],
        correct: 1,
        explanation: "అబ్రహం మాస్లో మరియు కార్ల్ రోజర్స్ Humanistic Psychologyకి ప్రముఖ ప్రతినిధులు. వ్యక్తి సామర్థ్యాభివృద్ధి మరియు స్వీయసాకారానికి వారు అత్యంత ప్రాధాన్యం ఇచ్చారు."
    },
    {
        question: "Primary Mental Abilities సిద్ధాంతాన్ని ప్రతిపాదించినది ఎవరు?",
        options: [
            "స్పియర్‌మాన్",
            "స్టెర్న్‌బర్గ్",
            "ఎల్.ఎల్. థర్‌స్టోన్",
            "గిల్‌ఫోర్డ్"
        ],
        correct: 2,
        explanation: "ఎల్.ఎల్. థర్‌స్టోన్ Primary Mental Abilities సిద్ధాంతంలో ఏడు ప్రాథమిక మానసిక సామర్థ్యాలను ప్రతిపాదించాడు. ఆయన ఒకే సాధారణ మేధస్సు భావనను అంగీకరించలేదు."
    },
    {
        question: "Neither the teacher nor the students ____ ready.",
        options: [
            "is",
            "was",
            "are",
            "has"
        ],
        correct: 2,
        explanation: "Neither...nor నిర్మాణంలో క్రియ సమీపంలోని కర్తతో సరిపోతుంది. ఇక్కడ 'students' బహువచనం కాబట్టి 'are' సరైన సమాధానం."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "If he studied hard, he will pass.",
            "If he studies hard, he will pass.",
            "If he studies hard, he would pass.",
            "If he had studied hard, he will have passed."
        ],
        correct: 1,
        explanation: "First Conditionalలో If-Clauseలో Present Simple మరియు Main Clauseలో 'will + base verb' ఉపయోగిస్తారు. అందువల్ల రెండవ వాక్యం మాత్రమే వ్యాకరణపరంగా సరైనది."
    },
    {
        question: "Change into Passive Voice.\n\nThe committee has selected the winner.",
        options: [
            "The winner selected by the committee.",
            "The winner has been selected by the committee.",
            "The winner was selected by the committee.",
            "The winner is selected by the committee."
        ],
        correct: 1,
        explanation: "Present Perfect Passive నిర్మాణం 'has/have been + past participle'. అందువల్ల 'The winner has been selected by the committee' సరైన Passive Voice."
    },
    {
        question: "She said, \"I have finished my work.\"",
        options: [
            "She said that she has finished her work.",
            "She said that she had finished her work.",
            "She told she had finished her work.",
            "She said she finished my work."
        ],
        correct: 1,
        explanation: "Reported Speechలో Present Perfect సాధారణంగా Past Perfectగా మారుతుంది. అలాగే 'my' అనే సర్వనామం 'her'గా మారుతుంది."
    },
    {
        question: "Hardly had the match started ____ it began to rain.",
        options: [
            "than",
            "when",
            "then",
            "while"
        ],
        correct: 1,
        explanation: "Hardly అనే నిర్మాణంతో ఎల్లప్పుడూ 'when' ఉపయోగించాలి. 'Hardly...when' అనేది స్థిరమైన వ్యాకరణ నిర్మాణం."
    },
    {
        question: "\"నీలాకాశం\" ఏ సమాసానికి ఉదాహరణ?",
        options: [
            "ద్వంద్వ సమాసం",
            "కర్మధారయ సమాసం",
            "బహువ్రీహి సమాసం",
            "అవ్యయీభావ సమాసం"
        ],
        correct: 1,
        explanation: "'నీలమైన ఆకాశం' అనే విగ్రహ వాక్యంతో ఏర్పడిన సమాసం కర్మధారయ సమాసం. ఇందులో విశేషణం మరియు విశేష్యం మధ్య సంబంధం ఉంటుంది."
    },
    {
        question: "\"చేయి\" అనే పదం ఏ వర్గానికి చెందుతుంది?",
        options: [
            "తత్సమ",
            "తద్భవ",
            "దేశ్య",
            "వైకృత"
        ],
        correct: 2,
        explanation: "'చేయి' స్వదేశీ మూలం గల తెలుగు పదం. అందువల్ల దీనిని దేశ్య పదంగా వర్గీకరిస్తారు."
    },
    {
        question: "\"ముఖం\"కు సరైన పర్యాయపదం ఏది?",
        options: [
            "వదనం",
            "పాదం",
            "కర్ణం",
            "నాసిక"
        ],
        correct: 0,
        explanation: "'వదనం' అనేది 'ముఖం'కు పర్యాయపదం. మిగిలిన పదాలు వరుసగా పాదం, చెవి, ముక్కు అనే అర్థాలను సూచిస్తాయి."
    },
    {
        question: "\"పులిని చూసి నక్క వాత పెట్టుకున్నట్లు\" అనే సామెత అర్థం ఏమిటి?",
        options: [
            "తనకు తగని పనిని అనుకరించడం",
            "ధైర్యంగా వ్యవహరించడం",
            "శ్రమించి విజయం సాధించడం",
            "సమయాన్ని వృథా చేయడం"
        ],
        correct: 0,
        explanation: "ఈ సామెత ఇతరులను ఆలోచించకుండా అనుకరించడం వల్ల నష్టం కలుగుతుందని తెలియజేస్తుంది. తన సామర్థ్యాన్ని తెలుసుకొని ప్రవర్తించాలని సూచిస్తుంది."
    },
    {
        question: "క్రింది వాటిలో తద్భవ పదం ఏది?",
        options: [
            "పుష్పం",
            "విద్య",
            "పువ్వు",
            "అగ్ని"
        ],
        correct: 2,
        explanation: "'పువ్వు' అనే పదం సంస్కృతంలోని 'పుష్పం' నుండి రూపాంతరం చెంది వచ్చిన తద్భవ పదం. మిగిలిన పదాలు తత్సమ పదాలు."
    },
    {
        question: "\"గజాననుడు\" అనే పదం ఏ సమాసానికి ఉదాహరణ?",
        options: [
            "తత్పురుష సమాసం",
            "బహువ్రీహి సమాసం",
            "ద్విగు సమాసం",
            "అవ్యయీభావ సమాసం"
        ],
        correct: 1,
        explanation: "'గజమువంటి ఆననం గలవాడు' అనే అర్థంతో ఏర్పడిన సమాసం బహువ్రీహి సమాసం. సమాస పదం వేరొక వ్యక్తిని సూచిస్తుంది."
    },
    {
        question: "క్రింది వాటిలో గుణసంధికి ఉదాహరణ ఏది?",
        options: [
            "దేవ + ఆలయం → దేవాలయం",
            "ప్రతి + ఒకరు",
            "అతి + ఉత్సాహం",
            "పితృ + ఆజ్ఞ"
        ],
        correct: 0,
        explanation: "'దేవ + ఆలయం → దేవాలయం'లో అ + ఆ కలిసి ఆ అవడం గుణసంధికి ఉదాహరణ. ఇది సంస్కృత సంధులలో ముఖ్యమైన సంధి."
    }
];