const SUBJECTS = [
    "CDP",
    "English"
];

const QUESTIONS = [
    {
        question: '"g-factor" అనే భావనను ప్రతిపాదించిన మనోవిజ్ఞాన శాస్త్రవేత్త ఎవరు?',
        options: ["Thurstone", "Gardner", "Spearman", "Sternberg"],
        correct: 2,
        explanation: "Spearman మేధస్సులో ఒక సాధారణ అంశం (g-factor) అన్ని మానసిక పనులలో ప్రభావం చూపుతుందని ప్రతిపాదించాడు. ఇది అతని Two-Factor Theory యొక్క ప్రధాన భాగం."
    },
    {
        question: 'ఒక విద్యార్థి గణితంలో బాగా ప్రతిభ చూపుతాడు కానీ సంగీతంలో ఆసక్తి తక్కువగా ఉంటుంది. ఈ పరిస్థితిని ఏ సిద్ధాంతం బాగా వివరిస్తుంది?',
        options: [
            "Two-Factor Theory",
            "Primary Mental Abilities Theory",
            "Triarchic Theory",
            "Cognitive Theory"
        ],
        correct: 1,
        explanation: "Thurstone ప్రకారం మేధస్సు అనేక స్వతంత్ర సామర్థ్యాల సమాహారం. ఒక వ్యక్తి గణితంలో ప్రతిభ చూపినా సంగీతంలో తక్కువ సామర్థ్యం కలిగి ఉండవచ్చు."
    },
    {
        question: 'క్రింది వాటిలో Thurstone ప్రతిపాదించిన Primary Mental Ability కాదు.',
        options: [
            "Verbal Comprehension",
            "Spatial Ability",
            "Musical Ability",
            "Numerical Ability"
        ],
        correct: 2,
        explanation: "Musical Ability ను Thurstone తన Primary Mental Abilities జాబితాలో చేర్చలేదు. Verbal, Spatial, Numerical వంటి సామర్థ్యాలను మాత్రమే ప్రతిపాదించాడు."
    },
    {
        question: 'Gardner ప్రకారం ఒక విద్యార్థి ఇతరుల భావోద్వేగాలను అర్థం చేసుకొని సమర్థవంతంగా స్పందించగలిగితే అది',
        options: [
            "Intrapersonal Intelligence",
            "Interpersonal Intelligence",
            "Linguistic Intelligence",
            "Logical Intelligence"
        ],
        correct: 1,
        explanation: "Interpersonal Intelligence అనేది ఇతరుల భావాలు, ఉద్దేశాలు మరియు ప్రవర్తనలను అర్థం చేసుకొని సమర్థవంతంగా వ్యవహరించే సామర్థ్యాన్ని సూచిస్తుంది."
    },
    {
        question: 'Sternberg సిద్ధాంతం ప్రకారం కొత్త పరిస్థితులకు సృజనాత్మకంగా అనుగుణం కావడం',
        options: [
            "Analytical Intelligence",
            "Practical Intelligence",
            "Creative Intelligence",
            "Emotional Intelligence"
        ],
        correct: 2,
        explanation: "Creative Intelligence అనేది కొత్త పరిస్థితులను ఎదుర్కొని సృజనాత్మక పరిష్కారాలు కనుగొనే సామర్థ్యం. ఇది Sternberg యొక్క Triarchic Theoryలో ఒక భాగం."
    },
    {
        question: '"Intelligence is the ability to act purposefully, think rationally and deal effectively with environment." అని పేర్కొన్నది',
        options: ["Terman", "Wechsler", "Gardner", "Spearman"],
        correct: 1,
        explanation: "ఈ ప్రసిద్ధ నిర్వచనాన్ని Wechsler ఇచ్చాడు. అతని ప్రకారం మేధస్సు లక్ష్యపూర్వక చర్య, తార్కిక ఆలోచన మరియు పరిసరాలతో సమర్థవంతమైన అనుసంధానం."
    },
    {
        question: 'Cognitive Development Theory ను ప్రతిపాదించినవారు',
        options: ["Piaget", "Vygotsky", "Bruner", "Skinner"],
        correct: 0,
        explanation: "Jean Piaget Cognitive Development Theory ను ప్రతిపాదించాడు. పిల్లల ఆలోచనా విధానం దశలవారీగా అభివృద్ధి చెందుతుందని వివరించాడు."
    },
    {
        question: 'Social interaction నేర్చుకోవడంలో ప్రధాన పాత్ర పోషిస్తుందని నమ్మినవారు',
        options: ["Piaget", "Thorndike", "Vygotsky", "Pavlov"],
        correct: 2,
        explanation: "Vygotsky ప్రకారం సామాజిక పరస్పర చర్యలు మరియు సంస్కృతి నేర్చుకోవడంలో కీలక పాత్ర పోషిస్తాయి. జ్ఞాన వికాసం సామాజిక వాతావరణంతో ముడిపడి ఉంటుంది."
    },
    {
        question: 'ఒక ఉపాధ్యాయుడు విద్యార్థికి సహాయం చేస్తూ క్రమంగా ఆ సహాయాన్ని తగ్గిస్తే దీనిని ఏమంటారు?',
        options: [
            "Conditioning",
            "Reinforcement",
            "Scaffolding",
            "Insight"
        ],
        correct: 2,
        explanation: "Scaffolding లో ఉపాధ్యాయుడు ప్రారంభంలో సహాయం అందించి, విద్యార్థి స్వతంత్రంగా నేర్చుకునే కొద్దీ ఆ సహాయాన్ని క్రమంగా తగ్గిస్తాడు."
    },
    {
        question: 'Piaget ప్రకారం Pre-operational stage వయస్సు',
        options: [
            "0–2 సంవత్సరాలు",
            "2–7 సంవత్సరాలు",
            "7–11 సంవత్సరాలు",
            "11+ సంవత్సరాలు"
        ],
        correct: 1,
        explanation: "Pre-operational Stage సుమారు 2 నుండి 7 సంవత్సరాల మధ్య ఉంటుంది. ఈ దశలో పిల్లలు చిహ్నాలు మరియు భాషను ఉపయోగించడం ప్రారంభిస్తారు."
    },
    {
        question: '"Zone of Proximal Development" భావనకు సంబంధించినవారు',
        options: ["Piaget", "Vygotsky", "Gardner", "Sternberg"],
        correct: 1,
        explanation: "Zone of Proximal Development (ZPD) భావనను Vygotsky ప్రతిపాదించాడు. ఇది సహాయంతో చేయగలిగే మరియు స్వతంత్రంగా చేయలేని పనుల మధ్య వ్యత్యాసం."
    },
    {
        question: 'Concrete Operational Stage లో పిల్లలు అభివృద్ధి చేసుకునే సామర్థ్యం',
        options: [
            "Hypothetical Thinking",
            "Conservation",
            "Abstract Reasoning",
            "Formal Logic"
        ],
        correct: 1,
        explanation: "Concrete Operational Stage లో పిల్లలు Conservation భావనను అర్థం చేసుకుంటారు. వస్తువు ఆకారం మారినా పరిమాణం మారదని గ్రహిస్తారు."
    },
    {
        question: 'ఒక పిల్లవాడు కొత్త సమాచారాన్ని పాత స్కీమాలో కలుపుకుంటే అది',
        options: [
            "Accommodation",
            "Assimilation",
            "Equilibrium",
            "Adaptation"
        ],
        correct: 1,
        explanation: "Assimilation అనేది కొత్త సమాచారాన్ని ఇప్పటికే ఉన్న స్కీమా లేదా జ్ఞాన నిర్మాణంలో చేర్చే ప్రక్రియ. Piaget దీనిని జ్ఞాన వికాసంలో ముఖ్యంగా వివరించాడు."
    },
    {
        question: 'పాత స్కీమాను మార్చి కొత్త సమాచారానికి అనుగుణంగా సవరించడాన్ని',
        options: [
            "Accommodation",
            "Assimilation",
            "Reinforcement",
            "Mediation"
        ],
        correct: 0,
        explanation: "Accommodation లో వ్యక్తి కొత్త అనుభవాలకు అనుగుణంగా తన పాత స్కీమాలను సవరిస్తాడు లేదా కొత్త స్కీమాలను నిర్మించుకుంటాడు."
    },
    {
        question: 'Piaget ప్రకారం Formal Operational Stage లక్షణం',
        options: [
            "Object Permanence",
            "Symbolic Thinking",
            "Conservation",
            "Abstract Thinking"
        ],
        correct: 3,
        explanation: "Formal Operational Stage లో విద్యార్థులు Abstract Thinking మరియు Hypothetical Reasoning సామర్థ్యాలను అభివృద్ధి చేస్తారు. ఇది Piaget చివరి అభివృద్ధి దశ."
    },
    {
        question: 'Gardner సిద్ధాంతం ప్రకారం క్రీడాకారుడి ప్రధాన మేధస్సు',
        options: [
            "Linguistic",
            "Bodily-Kinesthetic",
            "Naturalistic",
            "Musical"
        ],
        correct: 1,
        explanation: "Gardner ప్రకారం క్రీడాకారులు శరీర కదలికలను సమర్థవంతంగా నియంత్రించే Bodily-Kinesthetic Intelligence ను ఎక్కువగా ప్రదర్శిస్తారు. ఇది శారీరక నైపుణ్యాలకు సంబంధించిన మేధస్సు."
    },
    {
        question: 'Sternberg సిద్ధాంతంలో "street smartness" కు దగ్గరైనది',
        options: [
            "Analytical",
            "Creative",
            "Practical",
            "Logical"
        ],
        correct: 2,
        explanation: "Practical Intelligence అనేది రోజువారీ జీవిత సమస్యలను సమర్థవంతంగా పరిష్కరించే సామర్థ్యం. దీనినే సాధారణంగా street smartness అని పిలుస్తారు."
    },
    {
        question: 'Piaget ప్రకారం Sensorimotor Stage లో అభివృద్ధి చెందే ముఖ్య భావన',
        options: [
            "Conservation",
            "Object Permanence",
            "Reversibility",
            "Formal Reasoning"
        ],
        correct: 1,
        explanation: "Sensorimotor Stage లో పిల్లలు వస్తువులు కనబడకపోయినా అవి ఉనికిలో ఉంటాయని గ్రహిస్తారు. దీనినే Object Permanence అంటారు."
    },
    {
        question: '"More Knowledgeable Other" అనే పదం సంబంధించినది',
        options: [
            "Piaget",
            "Vygotsky",
            "Bruner",
            "Skinner"
        ],
        correct: 1,
        explanation: "More Knowledgeable Other (MKO) భావనను Vygotsky ప్రతిపాదించాడు. ఇది విద్యార్థికంటే ఎక్కువ జ్ఞానం లేదా నైపుణ్యం కలిగిన వ్యక్తిని సూచిస్తుంది."
    },
    {
        question: 'Gardner సిద్ధాంతంలో ప్రకృతితో అనుబంధాన్ని సూచించే మేధస్సు',
        options: [
            "Naturalistic",
            "Spatial",
            "Musical",
            "Interpersonal"
        ],
        correct: 0,
        explanation: "Naturalistic Intelligence ప్రకృతి, మొక్కలు, జంతువులు మరియు సహజ వాతావరణాన్ని గుర్తించి అర్థం చేసుకునే సామర్థ్యాన్ని సూచిస్తుంది."
    },
    {
        question: 'Spearman సిద్ధాంతం ప్రకారం ప్రతి పనిలో పాల్గొనే సాధారణ మేధస్సు',
        options: [
            "s-factor",
            "p-factor",
            "g-factor",
            "i-factor"
        ],
        correct: 2,
        explanation: "Spearman ప్రకారం అన్ని మానసిక కార్యకలాపాలలో పాల్గొనే సాధారణ మేధస్సును g-factor అంటారు. ఇది వ్యక్తి యొక్క సాధారణ మేధోశక్తిని సూచిస్తుంది."
    },
    {
        question: 'Thurstone సిద్ధాంతం ప్రధానంగా వ్యతిరేకించినది',
        options: [
            "Multiple Intelligences",
            "Social Learning",
            "Single General Intelligence",
            "Conditioning"
        ],
        correct: 2,
        explanation: "Thurstone ఒకే సాధారణ మేధస్సు సిద్ధాంతాన్ని వ్యతిరేకించాడు. మేధస్సు అనేక స్వతంత్ర సామర్థ్యాల సమాహారమని వాదించాడు."
    },
    {
        question: 'ZPD లో విద్యార్థి పనితీరు అత్యుత్తమంగా ఉండేది',
        options: [
            "ఒంటరిగా పనిచేసినప్పుడు",
            "సహాయం లేనప్పుడు",
            "మార్గదర్శకత్వంతో పనిచేసినప్పుడు",
            "పరీక్ష సమయంలో"
        ],
        correct: 2,
        explanation: "ZPD లో విద్యార్థి తగిన మార్గదర్శకత్వం లేదా సహాయంతో పనిచేసినప్పుడు అత్యుత్తమ పనితీరును ప్రదర్శిస్తాడు."
    },
    {
        question: 'Cognitive development ప్రధానంగా దేనికి సంబంధించినది?',
        options: [
            "భావోద్వేగాలు",
            "ఆలోచన ప్రక్రియలు",
            "శారీరక పెరుగుదల",
            "సామాజిక స్థితి"
        ],
        correct: 1,
        explanation: "Cognitive Development అనేది ఆలోచన, జ్ఞాపకశక్తి, సమస్య పరిష్కారం, నిర్ణయాలు తీసుకోవడం వంటి మానసిక ప్రక్రియల అభివృద్ధికి సంబంధించినది."
    },
    {
        question: 'Piaget మరియు Vygotsky ఇద్దరూ అంగీకరించిన అంశం',
        options: [
            "Learning precedes development",
            "Punishment improves learning",
            "Child is an active learner",
            "Memory is fixed"
        ],
        correct: 2,
        explanation: "Piaget మరియు Vygotsky ఇద్దరూ పిల్లలు నేర్చుకునే ప్రక్రియలో చురుకైన పాత్ర పోషిస్తారని, వారు Active Learners అని అంగీకరించారు."
    },
    {
        question: 'He is ____ honest man.',
        options: ["a", "an", "the", "no article"],
        correct: 1,
        explanation: "Honest అనే పదం vowel sound తో ప్రారంభమవుతుంది. కాబట్టి article గా 'an' ఉపయోగించాలి."
    },
    {
        question: 'I saw ____ moon last night.',
        options: ["a", "an", "the", "no article"],
        correct: 2,
        explanation: "Moon ప్రపంచంలో ఒక్కటే ఉన్న ప్రత్యేక వస్తువు. అందువల్ల definite article 'the' ఉపయోగించాలి."
    },
    {
        question: 'She wants to become ____ engineer.',
        options: ["a", "an", "the", "no article"],
        correct: 1,
        explanation: "Engineer పదం vowel sound తో ప్రారంభమవుతుంది. కాబట్టి 'an engineer' అనడం సరైనది."
    },
    {
        question: 'Ganga is ____ holy river.',
        options: ["a", "an", "the", "no article"],
        correct: 2,
        explanation: "నదుల పేర్ల ముందు సాధారణంగా definite article 'the' ఉపయోగిస్తారు. అందువల్ల 'the Ganga' సరైన రూపం."
    },
    {
        question: 'Hyderabad is ____ capital of Telangana.',
        options: ["a", "an", "the", "no article"],
        correct: 2,
        explanation: "Capital అనే పదం ఒక రాష్ట్రానికి ప్రత్యేకమైనది. అందువల్ల 'the capital of Telangana' అని వాడాలి."
    },
    {
        question: 'He is good ____ Mathematics.',
        options: ["in", "at", "on", "with"],
        correct: 1,
        explanation: "Good at అనేది నైపుణ్యం లేదా ప్రతిభను సూచించే స్థిరమైన prepositional phrase. కాబట్టి 'good at Mathematics' సరైన వాడుక."
    },
    {
        question: 'The meeting starts ____ 10 a.m.',
        options: ["on", "at", "in", "from"],
        correct: 1,
        explanation: "ఖచ్చితమైన సమయాల ముందు 'at' ఉపయోగిస్తారు. కాబట్టి 'at 10 a.m.' అనేది సరైన ప్రయోగం."
    },
    {
        question: 'She has been living here ____ 2020.',
        options: ["for", "since", "from", "by"],
        correct: 1,
        explanation: "ఒక నిర్దిష్ట ప్రారంభ కాలాన్ని సూచించేటప్పుడు Present Perfect Continuous తో 'since' ఉపయోగిస్తారు. 2020 ఒక నిర్దిష్ట సంవత్సరం."
    },
    {
        question: 'The book is ____ the table.',
        options: ["on", "at", "into", "beside"],
        correct: 0,
        explanation: "ఒక వస్తువు మరో వస్తువు మీద ఉన్నప్పుడు 'on' ఉపయోగిస్తారు. కాబట్టి book is on the table."
    },
    {
        question: 'We travelled ____ train.',
        options: ["on", "in", "by", "with"],
        correct: 2,
        explanation: "రవాణా సాధనాన్ని సూచించేటప్పుడు సాధారణంగా 'by' ఉపయోగిస్తారు. ఉదాహరణ: by train, by bus, by car."
    },
    {
        question: 'Each of the boys ____ present.',
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "Each అనే పదం singular subject గా పరిగణించబడుతుంది. కాబట్టి singular verb 'is' ఉపయోగించాలి."
    },
    {
        question: 'Neither Ram nor his friends ____ coming.',
        options: ["is", "are", "was", "has"],
        correct: 1,
        explanation: "Neither...nor నిర్మాణంలో verb దగ్గర ఉన్న subject ను అనుసరిస్తుంది. Friends plural కాబట్టి 'are' సరైనది."
    },
    {
        question: 'One of the students ____ absent today.',
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "One of the students లో ప్రధాన subject 'One'. ఇది singular కాబట్టి 'is' ఉపయోగించాలి."
    },
    {
        question: 'The quality of the apples ____ good.',
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "ఇక్కడ ప్రధాన subject 'quality'. ఇది singular noun కాబట్టి singular verb 'is' వాడాలి."
    },
    {
        question: 'Mathematics ____ my favourite subject.',
        options: ["are", "is", "were", "have"],
        correct: 1,
        explanation: "Mathematics చివర s ఉన్నప్పటికీ ఇది ఒక subject name. కాబట్టి singular verb 'is' ఉపయోగించాలి."
    },
    {
        question: 'Choose the correct sentence.',
        options: [
            "He go to school daily.",
            "He goes to school daily.",
            "He going to school daily.",
            "He gone to school daily."
        ],
        correct: 1,
        explanation: "Simple Present Tense లో third person singular subject 'He' తో verb కు 'es' జతచేస్తారు. కాబట్టి 'He goes' సరైనది."
    },
    {
        question: 'The opposite of "Ancient" is',
        options: ["Old", "Historic", "Modern", "Traditional"],
        correct: 2,
        explanation: "Ancient అంటే చాలా పాతది. దీనికి వ్యతిరేక పదం Modern అంటే ఆధునికమైనది."
    },
    {
        question: '"At sixes and sevens" means',
        options: ["Organized", "Confused", "Happy", "Silent"],
        correct: 1,
        explanation: "At sixes and sevens అనే idiom గందరగోళం లేదా అయోమయం ఉన్న పరిస్థితిని సూచిస్తుంది."
    },
    {
        question: 'One who cannot read or write is',
        options: ["Scholar", "Literate", "Illiterate", "Author"],
        correct: 2,
        explanation: "చదవడం లేదా రాయడం రాని వ్యక్తిని Illiterate అంటారు. ఇది సాధారణ one-word substitution."
    },
    {
        question: 'Choose the correct spelling.',
        options: [
            "Accomodation",
            "Accommodation",
            "Acommodation",
            "Accommadation"
        ],
        correct: 1,
        explanation: "Accommodation అనే పదంలో double 'c' మరియు double 'm' ఉంటాయి. మిగతా spellings తప్పు."
    },
    {
        question: 'Find the correctly punctuated sentence.',
        options: [
            "Where are you going.",
            "Where are you going?",
            "Where are you going,",
            "Where are you going!"
        ],
        correct: 1,
        explanation: "ప్రశ్నార్థక వాక్యం చివర Question Mark (?) ఉపయోగించాలి. కాబట్టి రెండవ వాక్యం సరైనది."
    },
    {
        question: '"Look after" means',
        options: ["Search", "Care for", "Cancel", "Reject"],
        correct: 1,
        explanation: "Look after అనే phrasal verb అర్థం care for లేదా take care of. అంటే చూసుకోవడం."
    },
    {
        question: 'If I ____ rich, I would help the poor.',
        options: ["am", "was", "were", "be"],
        correct: 2,
        explanation: "Second Conditional లో hypothetical situations కోసం 'were' ఉపయోగిస్తారు. కాబట్టి 'If I were rich' సరైనది."
    },
    {
        question: 'Choose the correct article. He bought ____ umbrella yesterday.',
        options: ["a", "an", "the", "no article"],
        correct: 1,
        explanation: "Umbrella vowel sound తో ప్రారంభమవుతుంది. కాబట్టి indefinite article 'an' ఉపయోగించాలి."
    },
    {
        question: 'Identify the error: Each of the players have a certificate.',
        options: ["Each", "players", "have", "certificate"],
        correct: 2,
        explanation: "Each singular subject. కాబట్టి 'have' బదులుగా 'has' రావాలి. అందువల్ల error 'have' లో ఉంది."
    }
];