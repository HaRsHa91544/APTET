const SUBJECTS = [
    "Intellectual Disability",
    "Child Development",
    "English",
    "Telugu",
];

const QUESTIONS = [
    {
        question: "Mild Intellectual Disability గల వ్యక్తుల IQ పరిధి ఏది?",
        options: ["20-34", "35-49", "50-69", "70-84"],
        correct: 2,
        explanation: "Mild Intellectual Disability గల వ్యక్తుల IQ సాధారణంగా 50-69 మధ్య ఉంటుంది. వీరు ప్రాథమిక విద్యా నైపుణ్యాలను నేర్చుకోగలరు మరియు కొంత స్వతంత్ర జీవనం గడపగలరు."
    },
    {
        question: "Moderate Intellectual Disability కు సంబంధించిన IQ పరిధి",
        options: ["35-49", "50-69", "20-34", "Below 20"],
        correct: 0,
        explanation: "Moderate Intellectual Disability లో IQ సాధారణంగా 35-49 మధ్య ఉంటుంది. వీరికి స్వీయ సంరక్షణ మరియు విద్యా నైపుణ్యాల కోసం నిరంతర శిక్షణ అవసరం."
    },
    {
        question: "Profound Intellectual Disability గల వ్యక్తుల IQ సాధారణంగా",
        options: ["35-49", "Below 20", "50-69", "20-34"],
        correct: 1,
        explanation: "Profound Intellectual Disability అత్యంత తీవ్రమైన స్థాయి. వీరి IQ సాధారణంగా 20 కంటే తక్కువగా ఉంటుంది మరియు జీవితాంతం అధిక సహాయం అవసరమవుతుంది."
    },
    {
        question: "Severe Intellectual Disability కు సంబంధించిన IQ పరిధి",
        options: ["Below 20", "50-69", "35-49", "20-34"],
        correct: 3,
        explanation: "Severe Intellectual Disability గల వ్యక్తుల IQ 20-34 మధ్య ఉంటుంది. వీరికి దైనందిన జీవిత నైపుణ్యాలలో నిరంతర సహాయం అవసరం."
    },
    {
        question: "“సమాజంలో స్వతంత్రంగా జీవించడానికి అవసరమైన మేధో సామర్థ్యం లోపించడం” ను మేధో వైకల్యంగా నిర్వచించిన వారు",
        options: ["Rousseau", "Benda", "Kohlberg", "Thorndike"],
        correct: 1,
        explanation: "సమాజంలో స్వతంత్ర జీవనం గడపడానికి అవసరమైన మేధో సామర్థ్యం లోపించడం అనే నిర్వచనాన్ని Benda ప్రతిపాదించారు. ఇది APTETలో తరచుగా అడిగే అంశం."
    },
    {
        question: "క్రింది వాటిలో Mild Intellectual Disability గల విద్యార్థి యొక్క ముఖ్య లక్షణం",
        options: ["పూర్తి ఆధారపడటం", "విద్యా నైపుణ్యాలను నెమ్మదిగా నేర్చుకోవడం", "భాష అభివృద్ధి లేకపోవడం", "స్వీయ సంరక్షణ అసాధ్యం"],
        correct: 1,
        explanation: "Mild Intellectual Disability గల విద్యార్థులు సాధారణంగా విద్యా నైపుణ్యాలను నెమ్మదిగా నేర్చుకుంటారు. అయితే వారు అనేక పనులను స్వతంత్రంగా నిర్వహించగలరు."
    },
    {
        question: "క్రింది వారిలో గృహ ఆధారిత విద్య (Home Based Education) ఎక్కువగా అవసరమయ్యేది",
        options: ["Mild ID", "Moderate ID", "Severe మరియు Profound ID", "Borderline Intelligence"],
        correct: 2,
        explanation: "Severe మరియు Profound Intellectual Disability గల విద్యార్థులకు సాధారణ పాఠశాల విద్య కష్టతరంగా ఉండవచ్చు. అందువల్ల Home Based Education అవసరమవుతుంది."
    },
    {
        question: "మేధో వైకల్యం నిర్ధారణలో ప్రధానంగా పరిగణించేది",
        options: ["IQ మాత్రమే", "Adaptive Behaviour మాత్రమే", "IQ మరియు Adaptive Behaviour రెండూ", "విద్యా సాధన మాత్రమే"],
        correct: 2,
        explanation: "ప్రస్తుతం మేధో వైకల్యం నిర్ధారణలో IQ స్కోరు మాత్రమే కాకుండా Adaptive Behaviour కూడా సమానంగా పరిగణించబడుతుంది."
    },
    {
        question: "Adaptive Behaviour అంచనా ప్రధానంగా దేనిని సూచిస్తుంది?",
        options: ["శారీరక ఎదుగుదల", "సామాజిక మరియు దైనందిన జీవన నైపుణ్యాలు", "IQ స్కోరు", "పాఠ్యాంశ జ్ఞానం"],
        correct: 1,
        explanation: "Adaptive Behaviour అనేది వ్యక్తి దైనందిన జీవితం, సామాజిక సంబంధాలు మరియు స్వీయ సంరక్షణ నైపుణ్యాలను ఎంతవరకు నిర్వహించగలడో సూచిస్తుంది."
    },
    {
        question: "వ్యక్తిగత విద్యా ప్రణాళిక (IEP) లో తప్పనిసరిగా ఉండాల్సిన అంశం",
        options: ["సూచిక", "ముందుమాట", "లక్ష్యాలు", "ఫోటో"],
        correct: 2,
        explanation: "IEP యొక్క ప్రధాన భాగం విద్యార్థికి నిర్దేశించిన లక్ష్యాలు. ఈ లక్ష్యాల ఆధారంగానే బోధన మరియు మూల్యాంకనం నిర్వహించబడుతుంది."
    },
    {
        question: "Moderate Intellectual Disability గల విద్యార్థికి అత్యంత అనుకూలమైన బోధనా విధానం",
        options: ["ఉపన్యాస పద్ధతి", "Concrete-to-Abstract పద్ధతి", "స్వయంఅధ్యయనం", "ప్రాజెక్ట్ విధానం మాత్రమే"],
        correct: 1,
        explanation: "మేధో వైకల్యం గల విద్యార్థులకు ముందుగా వాస్తవ వస్తువులు చూపించి తరువాత భావనలను బోధించడం అత్యంత ప్రభావవంతమైన విధానం."
    },
    {
        question: "Functional Academics ప్రధానంగా దేనికి సంబంధించినవి?",
        options: ["ఉన్నత గణితం", "దైనందిన జీవిత నైపుణ్యాలు", "పరిశోధన నైపుణ్యాలు", "సాహిత్య విశ్లేషణ"],
        correct: 1,
        explanation: "Functional Academics అనేవి విద్యార్థి స్వతంత్ర జీవనానికి ఉపయోగపడే గణితం, భాష మరియు సామాజిక నైపుణ్యాలపై దృష్టి పెడతాయి."
    },
    {
        question: "మేధో వైకల్యం అంచనాలో ఎక్కువగా ఉపయోగించే పరీక్ష",
        options: ["Snellen Chart", "Audiometer", "Intelligence Test", "Braille Scale"],
        correct: 2,
        explanation: "Intelligence Tests మేధో సామర్థ్యాన్ని కొలవడానికి ఉపయోగిస్తారు. ఇవి IQ నిర్ధారణలో ప్రధాన పాత్ర పోషిస్తాయి."
    },
    {
        question: "IQ 42 ఉన్న బాలుడు ఏ వర్గానికి చెందుతాడు?",
        options: ["Mild", "Moderate", "Severe", "Profound"],
        correct: 1,
        explanation: "IQ 42 అనేది 35-49 పరిధిలో ఉంటుంది. కాబట్టి ఆ విద్యార్థి Moderate Intellectual Disability వర్గానికి చెందుతాడు."
    },
    {
        question: "IQ 63 ఉన్న బాలుడు ఏ వర్గానికి చెందుతాడు?",
        options: ["Mild", "Moderate", "Severe", "Profound"],
        correct: 0,
        explanation: "IQ 63 అనేది 50-69 పరిధిలోకి వస్తుంది. అందువల్ల ఆ విద్యార్థి Mild Intellectual Disability వర్గంలోకి వస్తాడు."
    },
    {
        question: "క్రింది వాటిలో మేధో వైకల్యం విద్యార్థుల విద్యా అవసరం",
        options: ["వేగవంతమైన పాఠ్య ప్రణాళిక", "వ్యక్తిగతీకరించిన బోధన", "పోటీ పరీక్షల శిక్షణ మాత్రమే", "అధిక హోంవర్క్"],
        correct: 1,
        explanation: "మేధో వైకల్యం గల విద్యార్థుల అవసరాలు పరస్పరం భిన్నంగా ఉంటాయి. అందువల్ల వ్యక్తిగతీకరించిన బోధన మరియు IEP ఆధారిత ప్రణాళిక అవసరం."
    },
    {
        question: "Case History ద్వారా ప్రధానంగా తెలుసుకునేది",
        options: ["కుటుంబ మరియు అభివృద్ధి నేపథ్యం", "IQ మాత్రమే", "దృష్టి సామర్థ్యం", "శ్రవణ సామర్థ్యం"],
        correct: 0,
        explanation: "Case History ద్వారా విద్యార్థి జనన చరిత్ర, కుటుంబ పరిస్థితులు, అభివృద్ధి దశలు మరియు వైద్య నేపథ్యం వంటి వివరాలు సేకరిస్తారు."
    },
    {
        question: "IQ వర్గీకరణకు ఎక్కువగా సంబంధించిన భావన",
        options: ["Intelligence Quotient", "Achievement Quotient", "Learning Quotient", "Social Quotient"],
        correct: 0,
        explanation: "IQ అంటే Intelligence Quotient. ఇది వ్యక్తి మేధో సామర్థ్యాన్ని కొలవడానికి ఉపయోగించే ప్రమాణం."
    },
    {
        question: "మేధో వైకల్యం ఉన్న విద్యార్థుల మూల్యాంకనంలో ముఖ్యమైనది",
        options: ["కేవలం వ్రాత పరీక్ష", "నిరంతర మూల్యాంకనం", "వార్షిక పరీక్ష మాత్రమే", "మౌఖిక పరీక్ష మాత్రమే"],
        correct: 1,
        explanation: "మేధో వైకల్యం గల విద్యార్థుల పురోగతిని తెలుసుకోవడానికి నిరంతర మరియు సమగ్ర మూల్యాంకనం అత్యంత అవసరం."
    },
    {
        question: "Intellectual Disability మరియు Mental Illness",
        options: ["ఒకటే", "రెండూ వేర్వేరు", "రెండూ Multiple Disability", "రెండూ Learning Disability"],
        correct: 1,
        explanation: "Intellectual Disability అనేది అభివృద్ధి సంబంధిత వైకల్యం కాగా Mental Illness మానసిక ఆరోగ్య సమస్యలకు సంబంధించినది. రెండూ వేర్వేరు భావనలు."
    },
    {
        question: "Intelligence Quotient (IQ) భావనను ప్రజాదరణ పొందేలా చేసినవారు",
        options: ["Piaget", "Terman", "Skinner", "Bruner"],
        correct: 1,
        explanation: "స్టాన్‌ఫోర్డ్-బినెట్ పరీక్ష ద్వారా Terman IQ భావనను విస్తృతంగా ప్రచారం చేశారు. APTETలో ఇది తరచుగా అడిగే అంశం."
    },
    {
        question: "మొదటి మేధస్సు పరీక్షను అభివృద్ధి చేసినవారు",
        options: ["Binet", "Gardner", "Guilford", "Spearman"],
        correct: 0,
        explanation: "Alfred Binet మొదటి ప్రామాణిక మేధస్సు పరీక్షను రూపొందించారు. తరువాత Terman దానిని సవరించి Stanford-Binet Test గా అభివృద్ధి చేశారు."
    },
    {
        question: "Two-Factor Theory of Intelligence ప్రతిపాదించినవారు",
        options: ["Thurstone", "Spearman", "Gardner", "Sternberg"],
        correct: 1,
        explanation: "Spearman Two-Factor Theoryను ప్రతిపాదించారు. ఇందులో General Factor (g) మరియు Specific Factor (s) అనే రెండు భాగాలు ఉంటాయి."
    },
    {
        question: "Spearman సిద్ధాంతంలో ‘g’ అనేది",
        options: ["Group factor", "General factor", "Growth factor", "Genetic factor"],
        correct: 1,
        explanation: "Spearman ప్రకారం g అంటే General Intelligence. ఇది అన్ని మానసిక కార్యకలాపాలకు సాధారణంగా సహాయపడే సామర్థ్యం."
    },
    {
        question: "Multiple Intelligences సిద్ధాంతాన్ని ప్రతిపాదించినవారు",
        options: ["Gardner", "Binet", "Thorndike", "Piaget"],
        correct: 0,
        explanation: "Howard Gardner వ్యక్తిలో ఒకే మేధస్సు కాకుండా అనేక రకాల మేధస్సులు ఉంటాయని Multiple Intelligences Theoryలో పేర్కొన్నారు."
    },
    {
        question: "Analytical, Creative, Practical Intelligence భావనను ప్రతిపాదించినవారు",
        options: ["Gardner", "Sternberg", "Spearman", "Thurstone"],
        correct: 1,
        explanation: "Robert Sternberg Triarchic Theoryలో Analytical, Creative మరియు Practical Intelligence అనే మూడు భాగాలను ప్రతిపాదించారు."
    },
    {
        question: "Social Intelligence భావనకు ఎక్కువగా సంబంధం ఉన్నవారు",
        options: ["Thorndike", "Freud", "Skinner", "Kohler"],
        correct: 0,
        explanation: "Thorndike Social Intelligence భావనను ప్రతిపాదించారు. ఇది ఇతరులతో సమర్థవంతంగా వ్యవహరించే సామర్థ్యాన్ని సూచిస్తుంది."
    },
    {
        question: "Intelligence పరీక్షల ప్రధాన ఉద్దేశ్యం",
        options: ["శిక్షించడం", "వ్యక్తిగత వ్యత్యాసాలను గుర్తించడం", "గ్రేడ్ ఇవ్వడం", "హాజరు నమోదు"],
        correct: 1,
        explanation: "మేధస్సు పరీక్షలు విద్యార్థుల వ్యక్తిగత వ్యత్యాసాలను గుర్తించి వారికి తగిన విద్యా సహాయాన్ని అందించేందుకు ఉపయోగపడతాయి."
    },
    {
        question: "“Intelligence is the ability to learn” అని పేర్కొన్నవారు",
        options: ["Woodworth", "Skinner", "Gates", "Thorndike"],
        correct: 2,
        explanation: "Gates ప్రకారం Intelligence అనేది నేర్చుకునే సామర్థ్యం. ఇది APTETలో తరచుగా అడిగే నిర్వచన ప్రశ్న."
    },
    {
        question: "క్రింది వాటిలో Intelligence సిద్ధాంతకర్త - సిద్ధాంతం సరైన జత",
        options: [
            "Gardner - Multiple Intelligences",
            "Spearman - Triarchic Theory",
            "Sternberg - Two Factor Theory",
            "Binet - Multiple Intelligences"
        ],
        correct: 0,
        explanation: "Gardner Multiple Intelligences Theoryను ప్రతిపాదించారు. మిగిలిన జతలు సిద్ధాంతకర్తలు మరియు సిద్ధాంతాల మధ్య సరైన సంబంధాన్ని చూపవు."
    },
    {
        question: "Each of the boys _____ a prize.",
        options: ["have won", "has won", "were winning", "win"],
        correct: 1,
        explanation: "‘Each’ అనేది Singular Subject. కాబట్టి Singular Verb ఉపయోగించాలి. అందువల్ల 'has won' సరైన సమాధానం."
    },
    {
        question: "Neither Ravi nor his friends _____ present.",
        options: ["was", "is", "were", "has"],
        correct: 2,
        explanation: "Neither...nor నిర్మాణంలో Verb దగ్గర ఉన్న Subject ను అనుసరిస్తుంది. ఇక్కడ 'friends' plural కాబట్టి 'were' సరైనది."
    },
    {
        question: "Mathematics _____ my favourite subject.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "Mathematics రూపంలో pluralలా కనిపించినా ఒక Subject పేరు. కాబట్టి Singular Verb 'is' ఉపయోగించాలి."
    },
    {
        question: "The quality of the apples _____ good.",
        options: ["are", "were", "have", "is"],
        correct: 3,
        explanation: "Subject 'quality'. Apples కాదు. 'Quality' singular కాబట్టి 'is' సరైన Verb."
    },
    {
        question: "One of the students _____ absent today.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "'One of' తో Subject ఎల్లప్పుడూ singular. అందువల్ల Singular Verb 'is' ఉపయోగించాలి."
    },
    {
        question: "A number of students _____ participated.",
        options: ["has", "is", "have", "was"],
        correct: 2,
        explanation: "'A number of' అంటే చాలా మంది. ఇది plural భావనను ఇస్తుంది. కాబట్టి 'have' సరైనది."
    },
    {
        question: "The number of students _____ increasing.",
        options: ["are", "have", "were", "is"],
        correct: 3,
        explanation: "'The number of' లో Subject 'number'. ఇది singular. అందువల్ల 'is increasing' సరైన రూపం."
    },
    {
        question: "Either the teacher or the students _____ responsible.",
        options: ["is", "was", "are", "has"],
        correct: 2,
        explanation: "Either...or లో Verb దగ్గర ఉన్న Subject ను అనుసరిస్తుంది. ఇక్కడ 'students' plural కాబట్టి 'are' సరైనది."
    },
    {
        question: "Every boy and every girl _____ invited.",
        options: ["are", "have", "is", "were"],
        correct: 2,
        explanation: "Every + noun మరియు Every + noun కలిసినప్పుడు Subject singularగా పరిగణిస్తారు. కాబట్టి 'is' సరైనది."
    },
    {
        question: "Bread and butter _____ my breakfast.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "Bread and butter ఇక్కడ ఒకే ఆహార భావనను సూచిస్తున్నాయి. కాబట్టి Singular Verb 'is' ఉపయోగించాలి."
    },
    {
        question: "“నరుడు” పదానికి పర్యాయపదం",
        options: ["మానవుడు", "పర్వతం", "సింహం", "వృక్షం"],
        correct: 0,
        explanation: "నరుడు అంటే మనిషి. మానవుడు అనే పదం దానికి పర్యాయపదంగా ఉపయోగించబడుతుంది."
    },
    {
        question: "“వల్లభ” పదానికి పర్యాయపదం",
        options: ["శత్రువు", "ప్రియుడు", "గురువు", "సేవకుడు"],
        correct: 1,
        explanation: "వల్లభ అంటే ఇష్టమైన వ్యక్తి లేదా ప్రియమైనవాడు. అందువల్ల 'ప్రియుడు' సరైన పర్యాయపదం."
    },
    {
        question: "“దళము” పదానికి పర్యాయపదం",
        options: ["సేన", "గృహం", "నది", "శిఖరం"],
        correct: 0,
        explanation: "దళము అంటే సైన్యం లేదా బృందం. సేన అనే పదం దానికి సరైన పర్యాయపదం."
    },
    {
        question: "“రవి” పదానికి పర్యాయపదం",
        options: ["చంద్రుడు", "భానుడు", "అగ్ని", "వాయువు"],
        correct: 1,
        explanation: "రవి అనేది సూర్యునికి మరో పేరు. భానుడు కూడా సూర్యుని సూచించే పర్యాయపదం."
    },
    {
        question: "“భూమి” పదానికి పర్యాయపదం",
        options: ["ధరణి", "దివి", "సాగరం", "గిరి"],
        correct: 0,
        explanation: "భూమికి ధరణి, వసుంధర, అవని వంటి పర్యాయపదాలు ఉన్నాయి. ఇక్కడ ధరణి సరైన సమాధానం."
    },
    {
        question: "“గజము” పదానికి పర్యాయపదం",
        options: ["అశ్వము", "మాతంగము", "మృగము", "వానరము"],
        correct: 1,
        explanation: "గజము అంటే ఏనుగు. మాతంగము, ద్విపము, కరివరము వంటి పదాలు గజమునకు పర్యాయపదాలుగా ఉపయోగించబడతాయి."
    },
    {
        question: "“జలము” పదానికి పర్యాయపదం",
        options: ["అనలము", "సలిలము", "అనిలము", "అంబరము"],
        correct: 1,
        explanation: "జలము అంటే నీరు. సలిలము, నీరము, వారి, అంబు వంటి పదాలు జలమునకు పర్యాయపదాలు."
    },
    {
        question: "“అంబరము” పదానికి పర్యాయపదం",
        options: ["ఆకాశము", "సముద్రము", "భూమి", "అడవి"],
        correct: 0,
        explanation: "అంబరము అంటే ఆకాశం. గగనం, నభస్సు, వ్యోమం వంటి పదాలు అంబరమునకు పర్యాయపదాలుగా వస్తాయి."
    },
    {
        question: "“కవి” పదానికి పర్యాయపదం",
        options: ["రచయిత", "వనిత", "యోధుడు", "గాయకుడు"],
        correct: 0,
        explanation: "కవి అంటే కవిత్వాన్ని రచించే వ్యక్తి. రచయిత అనే పదం ఇక్కడ అత్యంత సమీప పర్యాయపదంగా ఉపయోగించబడింది."
    },
    {
        question: "“సముద్రము” పదానికి పర్యాయపదం",
        options: ["సింధువు", "శిఖరం", "ధరణి", "వనం"],
        correct: 0,
        explanation: "సముద్రమునకు సింధువు, సాగరము, రత్నాకరము, జలనిధి వంటి పర్యాయపదాలు ఉన్నాయి. అందువల్ల సింధువు సరైన సమాధానం."
    }
];