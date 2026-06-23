const SUBJECTS = [
    "CDP",
    "English"
];

const QUESTIONS = [
    {
        question: "క్లాసికల్ కండిషనింగ్ సిద్ధాంతాన్ని ప్రతిపాదించిన మనోవిజ్ఞాన శాస్త్రవేత్త",
        options: ["స్కిన్నర్", "థార్న్‌డైక్", "పావ్‌లావ్", "కోహ్లర్"],
        correct: 2,
        explanation: "క్లాసికల్ కండిషనింగ్ సిద్ధాంతాన్ని ఇవాన్ పావ్‌లావ్ ప్రతిపాదించాడు. గంట శబ్దాన్ని ఆహారంతో అనుసంధానించి కుక్కలలో షరతు ప్రతిస్పందన ఏర్పడుతుందని తన ప్రయోగంలో చూపించాడు."
    },
    {
        question: "\"ఉద్దీపన - ప్రతిస్పందన\" (Stimulus-Response) అనుబంధానికి ప్రాధాన్యత ఇచ్చిన సిద్ధాంతం",
        options: ["అనుసంధానవాదం", "గెస్టాల్ట్ సిద్ధాంతం", "నిర్మాణవాదం", "మానవతావాదం"],
        correct: 0,
        explanation: "అనుసంధానవాదం ప్రకారం అభ్యసనం ఉద్దీపన మరియు ప్రతిస్పందన మధ్య సంబంధాల ఏర్పాటుతో జరుగుతుంది. దీనిని ప్రధానంగా థార్న్‌డైక్ అభివృద్ధి చేశాడు."
    },
    {
        question: "క్రింది వారిలో ఆపరెంట్ కండిషనింగ్ సిద్ధాంతాన్ని ప్రతిపాదించినవారు",
        options: ["పావ్‌లావ్", "స్కిన్నర్", "వాట్సన్", "బ్రూనర్"],
        correct: 1,
        explanation: "బి.ఎఫ్. స్కిన్నర్ ఆపరెంట్ కండిషనింగ్ సిద్ధాంతాన్ని ప్రతిపాదించాడు. ప్రవర్తనపై బలపరచడం మరియు శిక్ష ప్రభావాన్ని వివరించాడు."
    },
    {
        question: "థార్న్‌డైక్ ప్రతిపాదించిన అభ్యసన నియమాలలో ప్రధానమైనది",
        options: ["సన్నద్ధత నియమం", "వ్యాయామ నియమం", "ఫలిత నియమం", "అనుకరణ నియమం"],
        correct: 2,
        explanation: "ఫలిత నియమం థార్న్‌డైక్ అభ్యసన నియమాలలో అత్యంత ముఖ్యమైనది. సంతృప్తికర ఫలితాలు వచ్చే ప్రవర్తనలు పునరావృతం అవుతాయని ఇది చెబుతుంది."
    },
    {
        question: "పిల్లవాడు సరైన సమాధానం చెప్పిన వెంటనే ఉపాధ్యాయుడు ప్రశంసిస్తే అది",
        options: ["శిక్ష", "ప్రతికూల బలపరచడం", "సానుకూల బలపరచడం", "అంతరాయం"],
        correct: 2,
        explanation: "ప్రశంస ఒక సానుకూల బలపరచడం. ఇది విద్యార్థి సరైన ప్రవర్తనను మళ్లీ ప్రదర్శించే అవకాశాన్ని పెంచుతుంది."
    },
    {
        question: "కుక్క గంట శబ్దం విన్న వెంటనే లాలాజలం విడుదల చేయడం పావ్‌లావ్ ప్రయోగంలో",
        options: ["సహజ ప్రతిస్పందన", "షరతు ప్రతిస్పందన", "ప్రేరణ", "అంతర్దృష్టి"],
        correct: 1,
        explanation: "గంట శబ్దం విన్న తర్వాత లాలాజలం విడుదల కావడం షరతు ప్రతిస్పందన. ఇది అభ్యసన ఫలితంగా ఏర్పడిన ప్రతిస్పందన."
    },
    {
        question: "\"Law of Effect\" ను ప్రతిపాదించినవారు",
        options: ["స్కిన్నర్", "థార్న్‌డైక్", "పావ్‌లావ్", "బినెట్"],
        correct: 1,
        explanation: "లా ఆఫ్ ఎఫెక్ట్‌ను థార్న్‌డైక్ ప్రతిపాదించాడు. అనుకూల ఫలితాలు ఇచ్చే చర్యలు భవిష్యత్తులో మరింత బలపడతాయని తెలిపాడు."
    },
    {
        question: "విద్యార్థి గణితంలో నేర్చుకున్న సమస్య పరిష్కార నైపుణ్యాన్ని సైన్స్‌లో ఉపయోగించగలిగితే అది",
        options: ["మరుపు", "బదిలీ అభ్యసనం", "అంతర్దృష్టి", "అనుకరణ"],
        correct: 1,
        explanation: "ఒక సందర్భంలో నేర్చుకున్న జ్ఞానం లేదా నైపుణ్యాన్ని మరో సందర్భంలో ఉపయోగించడం బదిలీ అభ్యసనం అంటారు."
    },
    {
        question: "సానుకూల బదిలీ అభ్యసనానికి ఉదాహరణ",
        options: [
            "సైకిల్ నేర్చుకున్న తర్వాత మోటార్ సైకిల్ నేర్చుకోవడం",
            "తెలుగు నేర్చుకున్న తర్వాత ఇంగ్లీషు మరచిపోవడం",
            "ఒక విషయం మరో విషయానికి ఆటంకం కలిగించడం",
            "పరీక్ష భయం"
        ],
        correct: 0,
        explanation: "సైకిల్ నేర్చుకున్న అనుభవం మోటార్ సైకిల్ నేర్చుకోవడాన్ని సులభతరం చేస్తుంది. ఇది సానుకూల బదిలీకి మంచి ఉదాహరణ."
    },
    {
        question: "ప్రతికూల బదిలీ అభ్యసనానికి ఉదాహరణ",
        options: [
            "టైపింగ్ నేర్చుకోవడం",
            "ఈత నేర్చుకోవడం",
            "పాత అలవాటు కొత్త అభ్యసనానికి ఆటంకం కలిగించడం",
            "సాధన వల్ల పురోగతి"
        ],
        correct: 2,
        explanation: "పాత అభ్యసనం కొత్త అభ్యసనాన్ని అడ్డుకుంటే దాన్ని ప్రతికూల బదిలీ అంటారు. ఇది అభ్యసన పురోగతిని తగ్గిస్తుంది."
    },
    {
        question: "స్కిన్నర్ ప్రకారం ప్రవర్తనను బలపరచేది",
        options: ["వారసత్వం", "పరిణతి", "బలపరచడం", "అంతర్దృష్టి"],
        correct: 2,
        explanation: "స్కిన్నర్ ప్రకారం బలపరచడం ద్వారా ప్రవర్తన కొనసాగుతుంది. బలపరచిన ప్రవర్తనలు ఎక్కువగా పునరావృతమవుతాయి."
    },
    {
        question: "విద్యార్థి హోంవర్క్ పూర్తి చేస్తే స్టిక్కర్ ఇవ్వడం",
        options: ["శిక్ష", "సానుకూల బలపరచడం", "ప్రతికూల బలపరచడం", "మరుపు"],
        correct: 1,
        explanation: "స్టిక్కర్ వంటి బహుమతి ఇవ్వడం సానుకూల బలపరచడం. ఇది హోంవర్క్ పూర్తి చేసే అలవాటును పెంచుతుంది."
    },
    {
        question: "క్రింది వాటిలో అభ్యసన సిద్ధాంతవేత్త కాదు",
        options: ["పావ్‌లావ్", "స్కిన్నర్", "థార్న్‌డైక్", "క్రెట్ష్మర్"],
        correct: 3,
        explanation: "క్రెట్ష్మర్ వ్యక్తిత్వ సిద్ధాంతాలకు ప్రసిద్ధుడు. ఆయన ప్రధానంగా అభ్యసన సిద్ధాంతవేత్తగా గుర్తించబడడు."
    },
    {
        question: "పిల్లవాడు పొరపాట్లు చేస్తూ సరైన సమాధానానికి చేరుకోవడం",
        options: ["అంతర్దృష్టి", "ట్రయల్ అండ్ ఎరర్", "అనుకరణ", "పరిశీలన"],
        correct: 1,
        explanation: "పొరపాట్లు చేస్తూ సరైన పరిష్కారాన్ని కనుగొనడం ట్రయల్ అండ్ ఎరర్ అభ్యసనం. ఇది థార్న్‌డైక్ సిద్ధాంతానికి సంబంధించినది."
    },
    {
        question: "ట్రయల్ అండ్ ఎరర్ అభ్యసనాన్ని ప్రతిపాదించినవారు",
        options: ["థార్న్‌డైక్", "పావ్‌లావ్", "స్కిన్నర్", "ఫ్రాయిడ్"],
        correct: 0,
        explanation: "ట్రయల్ అండ్ ఎరర్ అభ్యసనాన్ని ఎడ్వర్డ్ థార్న్‌డైక్ ప్రతిపాదించాడు. ఆయన పిల్లి పజిల్ బాక్స్ ప్రయోగం ద్వారా దీనిని వివరించాడు."
    },
    {
        question: "క్రింది వాటిలో బలపరచడం యొక్క ముఖ్య ఉద్దేశ్యం",
        options: ["ప్రవర్తన తగ్గించడం", "ప్రవర్తన కొనసాగించడం", "మరుపు పెంచడం", "శిక్షించడం"],
        correct: 1,
        explanation: "బలపరచడం యొక్క ప్రధాన ఉద్దేశ్యం కోరుకున్న ప్రవర్తనను కొనసాగించడం మరియు దాని పునరావృతిని పెంచడం. ఇది అభ్యసనాన్ని మరింత స్థిరపరుస్తుంది."
    },
    {
        question: "క్రింది జతలలో సరైనది",
        options: [
            "పావ్‌లావ్ – ఆపరెంట్ కండిషనింగ్",
            "స్కిన్నర్ – క్లాసికల్ కండిషనింగ్",
            "థార్న్‌డైక్ – ఫలిత నియమం",
            "కోహ్లర్ – బలపరచడం"
        ],
        correct: 2,
        explanation: "థార్న్‌డైక్ ఫలిత నియమాన్ని ప్రతిపాదించాడు. మిగిలిన జతలు సిద్ధాంతవేత్తలు మరియు వారి సిద్ధాంతాలకు సరిపోవు."
    },
    {
        question: "విద్యార్థి శబ్దం చేయకుండా ఉంటే జరిమానా తొలగించడం",
        options: ["సానుకూల బలపరచడం", "ప్రతికూల బలపరచడం", "శిక్ష", "బదిలీ"],
        correct: 1,
        explanation: "అసౌకర్యకరమైన పరిస్థితిని తొలగించడం ద్వారా ప్రవర్తనను పెంచితే దాన్ని ప్రతికూల బలపరచడం అంటారు. జరిమానా తొలగించడం దీనికి ఉదాహరణ."
    },
    {
        question: "క్రింది వాటిలో సానుకూల బలపరచడానికి ఉదాహరణ",
        options: ["ప్రశంస", "హెచ్చరిక", "జరిమానా", "మందలింపు"],
        correct: 0,
        explanation: "ప్రశంస, బహుమతి లేదా ప్రోత్సాహం వంటి చర్యలు సానుకూల బలపరచడానికి ఉదాహరణలు. ఇవి మంచి ప్రవర్తనను పెంచుతాయి."
    },
    {
        question: "అభ్యసన బదిలీని ప్రభావితం చేయని అంశం",
        options: ["పూర్వ జ్ఞానం", "అభ్యసన సారూప్యత", "ప్రేరణ", "రక్తగ్రూప్"],
        correct: 3,
        explanation: "రక్తగ్రూప్‌కు అభ్యసన బదిలీతో ఎలాంటి సంబంధం లేదు. పూర్వ జ్ఞానం, సారూప్యత మరియు ప్రేరణ మాత్రం ప్రభావితం చేస్తాయి."
    },
    {
        question: "Assertion (A): బలపరచడం అభ్యసనాన్ని బలపరుస్తుంది. Reason (R): బలపరచడం ప్రవర్తన పునరావృతిని పెంచుతుంది.",
        options: [
            "A, R రెండూ సత్యాలు; R సరైన వివరణ",
            "A, R రెండూ సత్యాలు; R వివరణ కాదు",
            "A సత్యం; R అసత్యం",
            "A అసత్యం; R సత్యం"
        ],
        correct: 0,
        explanation: "బలపరచడం వల్ల ప్రవర్తన పునరావృతమవుతుంది. అందువల్ల అభ్యసనం బలపడుతుంది. కాబట్టి R, Aకి సరైన వివరణ."
    },
    {
        question: "క్రింది వాటిలో షరతు ఉద్దీపన",
        options: ["ఆహారం", "గంట శబ్దం", "లాలాజలం", "ఆకలి"],
        correct: 1,
        explanation: "పావ్‌లావ్ ప్రయోగంలో గంట శబ్దం ప్రారంభంలో తటస్థ ఉద్దీపన. తరువాత అది షరతు ఉద్దీపనగా మారింది."
    },
    {
        question: "పిల్లవాడు నేర్చుకున్న నైపుణ్యాన్ని కొత్త పరిస్థితిలో ఉపయోగించడం",
        options: ["ప్రేరణ", "బదిలీ అభ్యసనం", "మరుపు", "పునశ్చరణ"],
        correct: 1,
        explanation: "పూర్వ అభ్యసనాన్ని కొత్త పరిస్థితుల్లో ఉపయోగించడం బదిలీ అభ్యసనం. ఇది విద్యా ప్రక్రియలో ముఖ్యమైన లక్ష్యం."
    },
    {
        question: "క్రింది వారిలో అభ్యసనాన్ని 'ప్రవర్తనలో సాపేక్ష స్థిరమైన మార్పు'గా వివరించిన దృక్పథం",
        options: ["ప్రవర్తనావాదం", "మానవతావాదం", "నిర్మాణవాదం", "గెస్టాల్ట్"],
        correct: 0,
        explanation: "ప్రవర్తనావాదులు అభ్యసనాన్ని అనుభవం వల్ల ప్రవర్తనలో వచ్చే సాపేక్ష స్థిరమైన మార్పుగా నిర్వచించారు."
    },
    {
        question: "స్కిన్నర్ బాక్స్ ప్రయోగం ప్రధానంగా దేనికి సంబంధించినది?",
        options: ["అంతర్దృష్టి", "ఆపరెంట్ కండిషనింగ్", "క్లాసికల్ కండిషనింగ్", "సామాజిక అభ్యసనం"],
        correct: 1,
        explanation: "స్కిన్నర్ బాక్స్ ప్రయోగం ఆపరెంట్ కండిషనింగ్‌ను వివరించడానికి ఉపయోగించబడింది. బలపరచడం ప్రభావాన్ని ఇది చూపిస్తుంది."
    },
    {
        question: "Each of the boys ______ a notebook.",
        options: ["have", "has", "are having", "were having"],
        correct: 1,
        explanation: "‘Each’ ఏకవచన భావాన్ని ఇస్తుంది. కాబట్టి singular verb అయిన ‘has’ ఉపయోగించాలి."
    },
    {
        question: "Neither the teacher nor the students ______ present.",
        options: ["was", "is", "were", "has"],
        correct: 2,
        explanation: "Neither...nor నిర్మాణంలో క్రియ దగ్గర ఉన్న subject ప్రకారం verb వస్తుంది. 'students' plural కాబట్టి 'were' సరైనది."
    },
    {
        question: "Identify the error: One of the students have completed the work.",
        options: ["One", "students", "have", "work"],
        correct: 2,
        explanation: "‘One of the students’ అనే subject ఏకవచనం. కాబట్టి ‘have’ స్థానంలో ‘has’ రావాలి."
    },
    {
        question: "The list of items ______ on the table.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "Subject 'list' ఏకవచనం. 'items' కాదు. కాబట్టి singular verb 'is' వాడాలి."
    },
    {
        question: "Either Ram or his friends ______ responsible.",
        options: ["is", "was", "are", "has"],
        correct: 2,
        explanation: "Either...or నిర్మాణంలో దగ్గర subject 'friends' plural. అందువల్ల plural verb 'are' ఉపయోగించాలి."
    },
    {
        question: "The news ______ very surprising.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "‘News’ రూపంలో plural లాగా కనిపించినా, అది singular noun. అందువల్ల singular verb ‘is’ ఉపయోగించాలి."
    },
    {
        question: "Identify the error: Each of the players were given a medal.",
        options: ["Each", "players", "were", "medal"],
        correct: 2,
        explanation: "‘Each of the players’ అనే subject singular. కాబట్టి ‘were’ స్థానంలో ‘was’ రావాలి."
    },
    {
        question: "Mathematics ______ my favourite subject.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "Mathematics ఒక subject name. ఇది singular noun గా పరిగణించబడుతుంది. కాబట్టి ‘is’ సరైనది."
    },
    {
        question: "Neither of the answers ______ correct.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "‘Neither’ ఎప్పుడూ singular భావాన్ని ఇస్తుంది. అందువల్ల singular verb ‘is’ ఉపయోగించాలి."
    },
    {
        question: "The committee ______ decided to postpone the meeting.",
        options: ["has", "have", "are", "were"],
        correct: 0,
        explanation: "Committee ఒక collective noun. ఒక యూనిట్‌గా భావించినప్పుడు singular verb ‘has’ వాడాలి."
    },
    {
        question: "Identify the error: The quality of the apples are good.",
        options: ["quality", "apples", "are", "good"],
        correct: 2,
        explanation: "Subject ‘quality’ singular. కాబట్టి ‘are’ స్థానంలో singular verb ‘is’ రావాలి."
    },
    {
        question: "Bread and butter ______ his usual breakfast.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "Bread and butter ఒకే ఆహారంగా భావించినప్పుడు singular verb ఉపయోగిస్తారు. కాబట్టి ‘is’ సరైనది."
    },
    {
        question: "Every student and every teacher ______ invited.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "Every...and every నిర్మాణం singular భావాన్ని ఇస్తుంది. అందువల్ల ‘is’ ఉపయోగించాలి."
    },
    {
        question: "The furniture ______ old.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "Furniture అనేది uncountable noun. ఇది singular గా పరిగణించబడుతుంది. కాబట్టి ‘is’ సరైనది."
    },
    {
        question: "Identify the error: Neither of the boys have arrived.",
        options: ["Neither", "boys", "have", "arrived"],
        correct: 2,
        explanation: "‘Neither’ singular pronoun. కాబట్టి ‘have’ స్థానంలో singular verb ‘has’ ఉపయోగించాలి."
    },
    {
        question: "A number of students ______ absent today.",
        options: ["is", "was", "are", "has"],
        correct: 2,
        explanation: "‘A number of’ తరువాత plural noun వస్తే plural verb ఉపయోగించాలి. అందువల్ల ‘are’ సరైనది."
    },
    {
        question: "The number of students ______ increasing.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "‘The number of’ అనే subject singular. కాబట్టి singular verb ‘is’ ఉపయోగించాలి."
    },
    {
        question: "Identify the error: The poet along with his friends are attending the function.",
        options: ["poet", "along with", "are", "function"],
        correct: 2,
        explanation: "Subject ‘poet’ singular. ‘along with’ subjectను మార్చదు. కాబట్టి ‘are’ స్థానంలో ‘is’ రావాలి."
    },
    {
        question: "Not only the principal but also the teachers ______ present.",
        options: ["was", "is", "are", "has"],
        correct: 2,
        explanation: "Not only...but also నిర్మాణంలో దగ్గర subject ‘teachers’ plural. కాబట్టి ‘are’ సరైనది."
    },
    {
        question: "The police ______ investigating the case.",
        options: ["is", "was", "are", "has"],
        correct: 2,
        explanation: "Police అనే collective noun సాధారణంగా plural verb తీసుకుంటుంది. అందువల్ల ‘are’ సరైనది."
    },
    {
        question: "Identify the error: Either the students or the teacher have made the mistake.",
        options: ["Either", "students", "have", "mistake"],
        correct: 2,
        explanation: "దగ్గర subject ‘teacher’ singular. కాబట్టి ‘have’ స్థానంలో ‘has’ ఉపయోగించాలి."
    },
    {
        question: "Ten kilometers ______ a long distance to walk.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "దూరం, సమయం, డబ్బు వంటి కొలతలు ఒక యూనిట్‌గా భావించినప్పుడు singular verb వాడాలి. కాబట్టి ‘is’ సరైనది."
    },
    {
        question: "The scissors ______ on the table.",
        options: ["is", "was", "are", "has"],
        correct: 2,
        explanation: "Scissors plural noun. కాబట్టి plural verb ‘are’ ఉపయోగించాలి."
    },
    {
        question: "Identify the error: Everybody know the answer.",
        options: ["Everybody", "know", "the", "answer"],
        correct: 1,
        explanation: "Everybody singular pronoun. కాబట్టి ‘know’ స్థానంలో ‘knows’ రావాలి."
    },
    {
        question: "One of my friends ______ selected for the competition.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "‘One of my friends’ అనే subject singular. కాబట్టి singular verb ‘is’ సరైనది."
    }
];