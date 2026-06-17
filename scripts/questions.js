const SUBJECTS = [
    "Visual Impairment",
    "Child Development",
    "English",
    "Telugu",
];

const QUESTIONS = [
    {
        question: "దృష్టి స్పష్టతను కొలవడానికి ఉపయోగించే పరికరం ఏది?",
        options: ["Braille Slate", "Snellen Chart", "JAWS", "Abacus"],
        correct: 1,
        explanation: "Snellen Chart దృష్టి స్పష్టత (Visual Acuity) ను కొలవడానికి ఉపయోగించే ప్రామాణిక పరికరం. కంటి చూపు ఎంత స్పష్టంగా ఉందో దీనివల్ల అంచనా వేయబడుతుంది."
    },
    {
        question: "6/60 కంటే తక్కువ దృష్టి స్పష్టత కలిగిన వ్యక్తిని సాధారణంగా ఏమని పరిగణిస్తారు?",
        options: ["Low Vision", "Blindness", "Deaf Blind", "Multiple Disability"],
        correct: 1,
        explanation: "6/60 కంటే తక్కువ దృష్టి స్పష్టత ఉన్న వ్యక్తిని సాధారణంగా Blindness వర్గంలో పరిగణిస్తారు. ఇది తీవ్రమైన దృష్టి లోపాన్ని సూచించే ప్రమాణం."
    },
    {
        question: "Braille లిపిని అభివృద్ధి చేసిన వ్యక్తి ఎవరు?",
        options: ["Helen Keller", "Samuel Gridley Howe", "Louis Braille", "Thomas Edison"],
        correct: 2,
        explanation: "Louis Braille దృష్టి లోపం ఉన్నవారి కోసం Braille లిపిని రూపొందించారు. ఈ లిపి స్పర్శ ఆధారంగా చదవడానికి మరియు వ్రాయడానికి ఉపయోగపడుతుంది."
    },
    {
        question: "JAWS ప్రధానంగా ఉపయోగించేది",
        options: ["Hearing Impairment", "Visual Impairment", "Autism", "Intellectual Disability"],
        correct: 1,
        explanation: "JAWS అనేది Visual Impairment ఉన్న వ్యక్తుల కోసం రూపొందించిన స్క్రీన్ రీడర్. ఇది కంప్యూటర్‌లోని సమాచారాన్ని శబ్ద రూపంలో వినిపిస్తుంది."
    },
    {
        question: "JAWS అనేది",
        options: ["Hearing Aid Software", "Screen Reader Software", "Speech Therapy Tool", "Magnification Device"],
        correct: 1,
        explanation: "JAWS ఒక Screen Reader Software. ఇది కంప్యూటర్ స్క్రీన్‌లో కనిపించే సమాచారాన్ని మాటల రూపంలో వినిపించి దృష్టి లోపం ఉన్నవారికి సహాయం చేస్తుంది."
    },
    {
        question: "Snellen Chart లో సాధారణ దృష్టి స్పష్టత",
        options: ["6/6", "6/18", "6/60", "3/60"],
        correct: 0,
        explanation: "6/6 అనేది సాధారణ దృష్టి స్పష్టతకు ప్రామాణిక కొలత. వ్యక్తి 6 మీటర్ల దూరంలో సాధారణ వ్యక్తి చూసే అక్షరాలను స్పష్టంగా చూడగలడు."
    },
    {
        question: "Braille లిపి ప్రధానంగా ఏ ఇంద్రియాన్ని ఆధారంగా చేసుకొని చదవబడుతుంది?",
        options: ["వినికిడి", "చూపు", "స్పర్శ", "వాసన"],
        correct: 2,
        explanation: "Braille లిపిని వేళ్లతో స్పర్శించి చదువుతారు. అందువల్ల ఇది స్పర్శ ఇంద్రియంపై ఆధారపడిన చదవు విధానం."
    },
    {
        question: "క్రింది వాటిలో దృష్టి లోపం ఉన్న విద్యార్థులకు సహాయక సాంకేతికత ఏది?",
        options: ["Braille Display", "Hearing Aid", "Cochlear Implant", "FM System"],
        correct: 0,
        explanation: "Braille Display కంప్యూటర్ సమాచారాన్ని Braille రూపంలో చూపిస్తుంది. ఇది దృష్టి లోపం ఉన్న విద్యార్థులకు ఉపయోగపడే సహాయక సాంకేతికత."
    },
    {
        question: "JAWS యొక్క విస్తరించిన రూపం",
        options: ["Job Access With Speech", "Joint Access With Sound", "Job Assistance With Screen", "Joint Audio Work System"],
        correct: 0,
        explanation: "JAWS యొక్క పూర్తి రూపం Job Access With Speech. ఇది స్క్రీన్‌లోని సమాచారాన్ని శబ్ద రూపంలో వినిపించే ప్రముఖ స్క్రీన్ రీడర్."
    },
    {
        question: "Blindness ప్రమాణాల్లో తరచుగా ఉపయోగించే కొలత",
        options: ["IQ", "Visual Acuity", "Motivation Score", "Achievement Score"],
        correct: 1,
        explanation: "Blindness ను నిర్ధారించడంలో Visual Acuity ప్రధాన ప్రమాణం. వ్యక్తి చూపు స్థాయిని కొలిచి దృష్టి లోప తీవ్రతను నిర్ణయిస్తారు."
    },
    {
        question: "Braille Cell లో మొత్తం చుక్కల సంఖ్య",
        options: ["4", "5", "6", "8"],
        correct: 2,
        explanation: "ఒక Braille Cell లో 6 చుక్కలు ఉంటాయి. వీటి వివిధ కలయికల ద్వారా అక్షరాలు, సంఖ్యలు మరియు చిహ్నాలు సూచించబడతాయి."
    },
    {
        question: "దృష్టి లోపం ఉన్న విద్యార్థికి కంప్యూటర్‌లో పాఠ్యాన్ని వినిపించే సాఫ్ట్‌వేర్",
        options: ["Excel", "Moodle", "JAWS", "Canva"],
        correct: 2,
        explanation: "JAWS సాఫ్ట్‌వేర్ కంప్యూటర్ స్క్రీన్‌పై ఉన్న పాఠ్యాన్ని శబ్దంగా చదివి వినిపిస్తుంది. ఇది దృష్టి లోపం ఉన్న విద్యార్థులకు ఎంతో ఉపయోగకరం."
    },
    {
        question: "Snellen Chart పరీక్ష ప్రధానంగా ఏదిని గుర్తిస్తుంది?",
        options: ["Hearing Loss", "Visual Acuity", "IQ Level", "Speech Disorder"],
        correct: 1,
        explanation: "Snellen Chart ద్వారా వ్యక్తి Visual Acuity లేదా దృష్టి స్పష్టతను కొలుస్తారు. కంటి చూపు స్థాయిని అంచనా వేయడానికి ఇది ఉపయోగపడుతుంది."
    },
    {
        question: "క్రింది వాటిలో Low Vision కు సంబంధించినది",
        options: ["పూర్తిగా చూపులేకపోవడం", "కొంత ఉపయోగకరమైన చూపు ఉండడం", "వినికిడి లోపం", "బుద్ధిమాంద్యం"],
        correct: 1,
        explanation: "Low Vision అంటే పూర్తిగా చూపు కోల్పోకపోయినా సాధారణ చూపు కంటే తక్కువగా ఉండడం. కొంత ఉపయోగకరమైన చూపు మాత్రం మిగిలి ఉంటుంది."
    },
    {
        question: "Braille పుస్తకాలు ప్రధానంగా ఏ విద్యార్థులకు ఉపయోగపడతాయి?",
        options: ["ASD", "LD", "VI", "HI"],
        correct: 2,
        explanation: "Braille పుస్తకాలు ప్రధానంగా Visual Impairment (VI) ఉన్న విద్యార్థుల కోసం రూపొందించబడతాయి. ఇవి స్పర్శ ద్వారా చదవడానికి సహాయపడతాయి."
    },
    {
        question: "Screen Reader ఉపయోగించే విద్యార్థి ఎక్కువగా ఏ వర్గానికి చెందినవాడు?",
        options: ["HI", "VI", "ID", "LD"],
        correct: 1,
        explanation: "Screen Reader సాఫ్ట్‌వేర్ స్క్రీన్‌లోని సమాచారాన్ని శబ్ద రూపంలో చదివి వినిపిస్తుంది. ఇది ప్రధానంగా Visual Impairment (VI) ఉన్న విద్యార్థులకు ఉపయోగపడుతుంది."
    },
    {
        question: "Blindness నిర్వచనంలో తరచుగా పేర్కొనే దృష్టి స్పష్టత",
        options: ["3/60 లేదా తక్కువ", "6/6", "6/9", "6/12"],
        correct: 0,
        explanation: "3/60 లేదా అంతకంటే తక్కువ దృష్టి స్పష్టత తీవ్రమైన దృష్టి లోపాన్ని సూచిస్తుంది. అందువల్ల Blindness నిర్వచనంలో ఈ ప్రమాణాన్ని తరచుగా ఉపయోగిస్తారు."
    },
    {
        question: "Braille ను చదివే సమయంలో ఉపయోగించే వేళ్లు",
        options: ["బొటనవేలు", "చూపుడు వేళ్లు", "చిటికెన వేళ్లు", "మధ్యవేలు"],
        correct: 1,
        explanation: "Braille చదివేటప్పుడు ఎక్కువగా చూపుడు వేళ్లను ఉపయోగిస్తారు. ఇవి స్పర్శను సులభంగా గుర్తించగల సామర్థ్యం కలిగి ఉంటాయి."
    },
    {
        question: "దృష్టి లోపం ఉన్న విద్యార్థులకు కంప్యూటర్ వినియోగంలో అత్యంత ఉపయుక్తమైనది",
        options: ["Screen Reader", "Printer", "Scanner", "Webcam"],
        correct: 0,
        explanation: "Screen Reader కంప్యూటర్ సమాచారాన్ని శబ్దంగా వినిపిస్తుంది. అందువల్ల దృష్టి లోపం ఉన్న విద్యార్థులకు ఇది అత్యంత ముఖ్యమైన సహాయక సాధనం."
    },
    {
        question: "క్రింది వాటిలో Visual Impairment కు సంబంధించినది",
        options: ["Snellen Chart", "Audiometer", "Cochlear Implant", "Speech Trainer"],
        correct: 0,
        explanation: "Snellen Chart కంటి చూపు స్పష్టతను కొలవడానికి ఉపయోగిస్తారు. ఇది Visual Impairment అంచనాలో ముఖ్యమైన పరికరం."
    },
    {
        question: "\"Learning is best when the learner has a strong desire to achieve\" అనే భావన దేనికి సంబంధించినది?",
        options: ["Attention", "Motivation", "Perception", "Memory"],
        correct: 1,
        explanation: "విద్యార్థిలో నేర్చుకోవాలనే బలమైన ఆసక్తి మరియు లక్ష్యసాధన కోరిక ఉండటం Motivation కు సంబంధించిన ముఖ్యమైన అంశం."
    },
    {
        question: "Maslow అవసరాల క్రమంలో అత్యున్నత స్థాయి",
        options: ["Safety Needs", "Social Needs", "Esteem Needs", "Self-Actualization"],
        correct: 3,
        explanation: "Maslow అవసరాల క్రమంలో Self-Actualization అత్యున్నత స్థాయి. వ్యక్తి తన సంపూర్ణ సామర్థ్యాన్ని సాధించాలనే దశను ఇది సూచిస్తుంది."
    },
    {
        question: "బాహ్య బహుమతుల ద్వారా కలిగే ప్రేరణ",
        options: ["Intrinsic Motivation", "Extrinsic Motivation", "Self Motivation", "Achievement Motivation"],
        correct: 1,
        explanation: "బహుమతులు, ప్రశంసలు లేదా ఇతర బాహ్య ప్రోత్సాహకాల వల్ల కలిగే ప్రేరణను Extrinsic Motivation అంటారు."
    },
    {
        question: "IQ పరీక్షల అభివృద్ధికి ప్రసిద్ధి చెందిన వ్యక్తి",
        options: ["Piaget", "Kohlberg", "Binet", "Bruner"],
        correct: 2,
        explanation: "Alfred Binet మొదటి ఆధునిక మేధస్సు పరీక్షను అభివృద్ధి చేశారు. అందువల్ల IQ పరీక్షల అభివృద్ధిలో ఆయనకు విశేష గుర్తింపు ఉంది."
    },
    {
        question: "Intelligence Quotient (IQ) కు సంక్షిప్త రూపం",
        options: ["Intelligence Quality", "Intelligent Question", "Intelligence Quotient", "Intelligent Quotient"],
        correct: 2,
        explanation: "IQ యొక్క పూర్తి రూపం Intelligence Quotient. ఇది వ్యక్తి మేధస్సు స్థాయిని అంచనా వేయడానికి ఉపయోగించే ప్రమాణం."
    },
    {
        question: "విద్యార్థి తన ఆసక్తితో నేర్చుకోవడం",
        options: ["Extrinsic Motivation", "Intrinsic Motivation", "Reinforcement", "Punishment"],
        correct: 1,
        explanation: "బాహ్య ప్రోత్సాహం లేకుండా స్వయంగా ఆసక్తితో నేర్చుకోవడాన్ని Intrinsic Motivation అంటారు. ఇది స్థిరమైన అభ్యాసానికి దోహదం చేస్తుంది."
    },
    {
        question: "Multiple Intelligence Theory ను ప్రతిపాదించినవారు",
        options: ["Gardner", "Binet", "Skinner", "Thorndike"],
        correct: 0,
        explanation: "Howard Gardner Multiple Intelligence Theory ను ప్రతిపాదించారు. ఆయన ప్రకారం మేధస్సుకు అనేక రూపాలు ఉంటాయి."
    },
    {
        question: "సాధారణంగా Gifted Children IQ",
        options: ["90 పైగా", "100 పైగా", "130 పైగా", "70 పైగా"],
        correct: 2,
        explanation: "సాధారణంగా IQ 130 లేదా అంతకంటే ఎక్కువ ఉన్న పిల్లలను Gifted Children గా పరిగణిస్తారు. వీరికి ప్రత్యేక విద్యా అవసరాలు ఉంటాయి."
    },
    {
        question: "తరగతిలో ప్రశంసలు ఇవ్వడం ప్రధానంగా",
        options: ["Punishment", "Motivation", "Evaluation", "Observation"],
        correct: 1,
        explanation: "ప్రశంసలు విద్యార్థులను మరింత మెరుగ్గా పనిచేయడానికి ప్రేరేపిస్తాయి. కాబట్టి ఇది Motivation కు ఉదాహరణ."
    },
    {
        question: "\"Intelligence is the ability to act purposefully and think rationally\" అని నిర్వచించినవారు",
        options: ["Terman", "Wechsler", "Piaget", "Guilford"],
        correct: 1,
        explanation: "David Wechsler మేధస్సును ఉద్దేశపూర్వకంగా వ్యవహరించే, తార్కికంగా ఆలోచించే మరియు పరిసరాలకు అనుగుణంగా ప్రవర్తించే సామర్థ్యంగా నిర్వచించారు."
    },
    {
        question: "He arrived ___ Hyderabad yesterday.",
        options: ["at", "in", "on", "by"],
        correct: 1,
        explanation: "పట్టణాలు, నగరాలు, దేశాల పేర్ల ముందు సాధారణంగా 'in' preposition ఉపయోగిస్తారు. కాబట్టి 'He arrived in Hyderabad yesterday' అనేది సరైన వాక్యం."
    },
    {
        question: "The meeting starts ___ 10 a.m.",
        options: ["in", "on", "at", "from"],
        correct: 2,
        explanation: "ఖచ్చితమైన సమయాన్ని సూచించేటప్పుడు 'at' preposition ఉపయోగిస్తారు. ఉదాహరణకు at 10 a.m., at noon, at midnight."
    },
    {
        question: "She is interested ___ music.",
        options: ["on", "in", "for", "by"],
        correct: 1,
        explanation: "Interested అనే adjective తర్వాత సాధారణంగా 'in' preposition వస్తుంది. 'Interested in music' అంటే సంగీతంపై ఆసక్తి కలిగి ఉండటం."
    },
    {
        question: "The book is ___ the table.",
        options: ["in", "at", "on", "from"],
        correct: 2,
        explanation: "'On' అనేది ఒక వస్తువు మరొక వస్తువు పైభాగంలో ఉన్నప్పుడు ఉపయోగిస్తారు. పుస్తకం టేబుల్ మీద ఉన్నందున 'on' సరైన జవాబు."
    },
    {
        question: "We have been waiting ___ two hours.",
        options: ["since", "for", "from", "by"],
        correct: 1,
        explanation: "సమయ వ్యవధిని సూచించేటప్పుడు 'for' ఉపయోగిస్తారు. 'For two hours' అంటే రెండు గంటలుగా ఎదురుచూస్తున్నామని అర్థం."
    },
    {
        question: "He was born ___ 2010.",
        options: ["in", "on", "at", "from"],
        correct: 0,
        explanation: "సంవత్సరాల ముందు 'in' preposition ఉపయోగిస్తారు. ఉదాహరణకు in 2010, in 2025, in 1990 మొదలైనవి."
    },
    {
        question: "The cat jumped ___ the wall.",
        options: ["into", "onto", "at", "from"],
        correct: 1,
        explanation: "'Onto' అంటే ఒక ఉపరితలం మీదకు కదలిక జరగడం. పిల్లి గోడపైకి దూకినందున 'onto' సరైన సమాధానం."
    },
    {
        question: "She divided the sweets ___ the children.",
        options: ["among", "between", "in", "at"],
        correct: 0,
        explanation: "రెండుకంటే ఎక్కువ మందిలో పంచినప్పుడు 'among' ఉపయోగిస్తారు. పిల్లలందరికీ మిఠాయిలు పంచిన సందర్భంలో ఇది సరైనది."
    },
    {
        question: "The train passed ___ the tunnel.",
        options: ["through", "across", "over", "beside"],
        correct: 0,
        explanation: "'Through' అంటే ఒక వస్తువు లోపల నుంచి వెళ్లడం. రైలు సొరంగం లోపలుగా వెళ్లినందున through సరైన జవాబు."
    },
    {
        question: "My house is ___ the bank and the post office.",
        options: ["among", "between", "through", "beside"],
        correct: 1,
        explanation: "రెండు వస్తువుల మధ్య ఉన్న స్థానాన్ని సూచించడానికి 'between' ఉపయోగిస్తారు. ఇక్కడ ఇల్లు రెండు ప్రదేశాల మధ్య ఉంది."
    },
    {
        question: "\"మహా + ఇంద్రుడు\" లో ఏర్పడిన సంధి",
        options: ["గుణసంధి", "వృద్ధి సంధి", "యణాదేశ సంధి", "అత్వసంధి"],
        correct: 1,
        explanation: "మహా + ఇంద్రుడు కలిసినప్పుడు 'మహేంద్రుడు' రూపం వస్తుంది. ఇది వృద్ధి సంధికి ప్రసిద్ధ ఉదాహరణగా వ్యాకరణంలో చెప్పబడుతుంది."
    },
    {
        question: "\"దేవ + ఆలయం\" లో ఏర్పడిన సంధి",
        options: ["గుణసంధి", "వృద్ధి సంధి", "యణాదేశ సంధి", "ఉత్వసంధి"],
        correct: 0,
        explanation: "దేవ + ఆలయం → దేవాలయం. అ + ఆ కలయిక ద్వారా ఏర్పడే సంధిని గుణసంధి అంటారు."
    },
    {
        question: "\"గురు + ఆశీర్వాదం\" లో సంధి",
        options: ["గుణసంధి", "వృద్ధి సంధి", "యణాదేశ సంధి", "అత్వసంధి"],
        correct: 1,
        explanation: "గురు + ఆశీర్వాదం కలయికలో వృద్ధి సంధి లక్షణాలు కనిపిస్తాయి. APTETలో తరచుగా అడిగే ముఖ్యమైన ఉదాహరణ ఇది."
    },
    {
        question: "అత్వ సంధికి ఉదాహరణ",
        options: ["రాముడు + అతడు", "దేవ + ఆలయం", "మహా + ఇంద్రుడు", "ముని + ఈశ్వరుడు"],
        correct: 0,
        explanation: "రాముడు + అతడు వంటి పదాల కలయికలో అత్వ సంధి ఏర్పడుతుంది. తెలుగు సంధులలో ఇది ముఖ్యమైన ఉదాహరణగా పరిగణిస్తారు."
    },
    {
        question: "\"ముని + ఈశ్వరుడు\" లో సంధి",
        options: ["గుణసంధి", "వృద్ధి సంధి", "యణాదేశ సంధి", "అత్వసంధి"],
        correct: 2,
        explanation: "ముని + ఈశ్వరుడు → మునీశ్వరుడు. ఇది యణాదేశ సంధికి ఉదాహరణ. APTET తెలుగు వ్యాకరణంలో తరచుగా అడుగుతారు."
    },
    {
        question: "\"లోక + ఏక\" లో ఏర్పడే సంధి",
        options: ["వృద్ధి సంధి", "గుణసంధి", "యణాదేశ సంధి", "ఉత్వసంధి"],
        correct: 0,
        explanation: "లోక + ఏక పదాల కలయికలో వృద్ధి సంధి ఏర్పడుతుంది. అ మరియు ఏ అచ్చుల కలయిక ద్వారా ఐ ధ్వని ఉత్పత్తి కావడం వృద్ధి సంధి లక్షణం."
    },
    {
        question: "క్రింది వాటిలో యణాదేశ సంధి ఉదాహరణ ఏది?",
        options: ["మునీశ్వరుడు", "దేవాలయం", "మహేంద్రుడు", "రాముడతడు"],
        correct: 0,
        explanation: "ముని + ఈశ్వరుడు → మునీశ్వరుడు రూపం యణాదేశ సంధికి ఉదాహరణ. APTETలో యణాదేశ సంధిపై ప్రశ్నలు తరచుగా వస్తాయి."
    },
    {
        question: "గుణసంధిలో సాధారణంగా కలిసే అచ్చులు",
        options: ["అ + అ", "అ + ఇ", "ఇ + ఈ", "ఉ + ఉ"],
        correct: 1,
        explanation: "సంస్కృత గుణసంధిలో సాధారణంగా అ + ఇ లేదా అ + ఈ కలిసినప్పుడు గుణరూపం ఏర్పడుతుంది. ఇది వ్యాకరణంలో ముఖ్యమైన సంధి."
    },
    {
        question: "వృద్ధి సంధిలో సాధారణంగా ఏర్పడేది",
        options: ["ఏ", "ఓ", "ఐ", "ఉ"],
        correct: 2,
        explanation: "వృద్ధి సంధిలో సాధారణంగా ఐ లేదా ఔ వంటి వృద్ధి స్వరాలు ఏర్పడతాయి. APTET పరీక్షలో ఇది తరచుగా అడిగే అంశం."
    },
    {
        question: "క్రింది వాటిలో గుణసంధి ఉదాహరణ ఏది?",
        options: ["దేవాలయం", "మహేంద్రుడు", "మునీశ్వరుడు", "రాముడతడు"],
        correct: 0,
        explanation: "దేవ + ఆలయం → దేవాలయం గుణసంధికి ప్రామాణిక ఉదాహరణ. APTETలో ఇలాంటి ప్రత్యక్ష ప్రశ్నలు వస్తాయి."
    }
];