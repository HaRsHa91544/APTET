const SUBJECTS = [
    "Child Development",
    "English",
    "ICT"
];

const QUESTIONS = [
    {
        question: "కింది వారిలో సృజనాత్మకత (Creativity)ను కొలవడానికి ప్రసిద్ధ పరీక్షను రూపొందించినవారు ఎవరు?",
        options: ["బినే", "టోరెన్స్", "థర్‌స్టోన్", "స్పీర్మన్"],
        correct: 1,
        explanation: "టోరెన్స్ రూపొందించిన Torrance Tests of Creative Thinking (TTCT) ప్రపంచవ్యాప్తంగా సృజనాత్మకతను అంచనా వేయడానికి ఉపయోగించే ప్రముఖ పరీక్ష. ఇది ప్రవాహం, వైవిధ్యం, వినూత్నత, విస్తరణ వంటి సృజనాత్మక ఆలోచనా లక్షణాలను కొలుస్తుంది."
    },
    {
        question: "సృజనాత్మక విద్యార్థుల ప్రధాన లక్షణం ఏది?",
        options: [
            "సూచనలను యథాతథంగా అనుసరించడం",
            "కొత్త ఆలోచనలను స్వతంత్రంగా ప్రతిపాదించడం",
            "పాఠాలను కంఠస్థం చేయడం",
            "ఎక్కువ సమయం మౌనంగా ఉండటం"
        ],
        correct: 1,
        explanation: "సృజనాత్మక విద్యార్థులు కొత్త ఆలోచనలు ప్రతిపాదించడం, సమస్యలకు వినూత్న పరిష్కారాలు సూచించడం, స్వతంత్రంగా ఆలోచించడం వంటి లక్షణాలను ప్రదర్శిస్తారు. వారు సాధారణ సమాధానాలకు మాత్రమే పరిమితం కాకుండా ప్రత్యామ్నాయ మార్గాలను కూడా అన్వేషిస్తారు."
    },
    {
        question: "కింది వాటిలో సృజనాత్మక ఆలోచన (Creative Thinking)కు సంబంధించిన అంశం ఏది?",
        options: [
            "అభిసరణ ఆలోచన (Convergent Thinking)",
            "అపసరణ ఆలోచన (Divergent Thinking)",
            "యాంత్రిక అభ్యాసం",
            "అనుకరణ"
        ],
        correct: 1,
        explanation: "అపసరణ ఆలోచన ఒక సమస్యకు అనేక విభిన్న పరిష్కారాలను కనుగొనే సామర్థ్యాన్ని సూచిస్తుంది. ఇది సృజనాత్మకతకు ప్రధాన ఆధారం కాగా, కొత్త అవకాశాలను అన్వేషించే ఆలోచనా విధానాన్ని అభివృద్ధి చేస్తుంది."
    },
    {
        question: "ఒక ఉపాధ్యాయుడు విద్యార్థులకు ఒక సమస్యకు అనేక పరిష్కారాలను సూచించమని అడిగాడు. ఇది ప్రధానంగా ఏ నైపుణ్యాన్ని అభివృద్ధి చేస్తుంది?",
        options: ["జ్ఞాపకశక్తి", "సృజనాత్మకత", "అనుకరణ", "కంఠస్థం"],
        correct: 1,
        explanation: "ఒక సమస్యకు అనేక పరిష్కారాలను ఆలోచించడం విద్యార్థుల అపసరణ ఆలోచనను పెంపొందిస్తుంది. ఇది సృజనాత్మకత, విమర్శనాత్మక ఆలోచన మరియు స్వతంత్ర సమస్య పరిష్కార సామర్థ్యాలను అభివృద్ధి చేయడంలో సహాయపడుతుంది."
    },
    {
        question: "టర్మన్ (Terman) ప్రకారం ప్రతిభావంతులైన (Gifted) పిల్లల IQ సాధారణంగా ఎంత లేదా అంతకంటే ఎక్కువగా ఉంటుంది?",
        options: ["100", "110", "120", "140"],
        correct: 3,
        explanation: "టర్మన్ వర్గీకరణ ప్రకారం IQ 140 లేదా అంతకంటే ఎక్కువ ఉన్న పిల్లలను అత్యంత ప్రతిభావంతులుగా పరిగణిస్తారు. వీరు వేగంగా నేర్చుకోవడం, ఉన్నత స్థాయి తార్కిక ఆలోచన మరియు ప్రత్యేక ప్రతిభను ప్రదర్శిస్తారు."
    },
    {
        question: "ప్రతిభావంతులైన పిల్లల కోసం అత్యంత అనుకూలమైన బోధనా విధానం ఏది?",
        options: [
            "అందరికీ ఒకే వేగంతో బోధించడం",
            "వారి సామర్థ్యానికి అనుగుణంగా సుసంపన్న (Enrichment) కార్యక్రమాలు అందించడం",
            "పునరావృత అభ్యాసం మాత్రమే చేయించడం",
            "తరచూ శిక్షించడం"
        ],
        correct: 1,
        explanation: "ప్రతిభావంతులైన విద్యార్థులకు వారి సామర్థ్యానికి అనుగుణంగా సవాలుతో కూడిన Enrichment కార్యక్రమాలు అవసరం. ఇవి వారి ప్రతిభను మరింత అభివృద్ధి చేసి ఉన్నత స్థాయి అభ్యాస అవకాశాలను అందిస్తాయి."
    },
    {
        question: "కింది వాటిలో ప్రతిభావంతులైన పిల్లల లక్షణం ఏది?",
        options: [
            "కొత్త విషయాలు నేర్చుకోవడంలో నెమ్మదిగా ఉండటం",
            "బలమైన ఉత్సుకత మరియు వేగవంతమైన అభ్యాసం",
            "సూచనలు మాత్రమే అనుసరించడం",
            "ప్రతి పనిలో సహాయం అవసరం కావడం"
        ],
        correct: 1,
        explanation: "ప్రతిభావంతులైన పిల్లలు అధిక జిజ్ఞాస, వేగవంతమైన అభ్యాసం, లోతైన అవగాహన మరియు క్లిష్టమైన సమస్యలను పరిష్కరించే సామర్థ్యాన్ని ప్రదర్శిస్తారు. వారు సాధారణంగా స్వయంగా నేర్చుకోవడంపై ఆసక్తి చూపుతారు."
    },
    {
        question: "విద్యా పరంగా వెనుకబడిన (Backward) పిల్లల గురించి సరైన ప్రకటన ఏది?",
        options: [
            "వారందరికీ బుద్ధిమాంద్యం ఉంటుంది.",
            "వారు తరగతి స్థాయికి తగిన విద్యా ఫలితాలను సాధించలేరు.",
            "వారు ఎల్లప్పుడూ ప్రతిభావంతులే.",
            "వారు ప్రత్యేక విద్యకు అర్హులు కారు."
        ],
        correct: 1,
        explanation: "విద్యా పరంగా వెనుకబడిన పిల్లలు తమ వయస్సు లేదా తరగతి స్థాయికి అనుగుణమైన విద్యా ప్రగతిని సాధించలేరు. దీనికి బోధన, కుటుంబం, ఆరోగ్యం లేదా ఇతర కారణాలు ఉండవచ్చు."
    },
    {
        question: "విద్యా పరంగా వెనుకబడిన విద్యార్థిని గుర్తించిన ఉపాధ్యాయుడు మొదట చేయవలసిన చర్య ఏది?",
        options: [
            "శిక్షించడం",
            "కారణాలను గుర్తించి తగిన బోధనా సహాయం అందించడం",
            "తరగతి మార్చడం",
            "పరీక్షల నుండి తొలగించడం"
        ],
        correct: 1,
        explanation: "ఉపాధ్యాయుడు ముందుగా వెనుకబడటానికి గల కారణాలను గుర్తించి, వ్యక్తిగత అవసరాలకు అనుగుణమైన బోధన మరియు విద్యా సహాయాన్ని అందించాలి. శిక్ష లేదా తొలగింపు సరైన పరిష్కారం కాదు."
    },
    {
        question: "ప్రతిభావంతులైన విద్యార్థిని సాధారణ తరగతిలో బోధిస్తున్న ఉపాధ్యాయుడు అనుసరించాల్సిన ఉత్తమ విధానం ఏది?",
        options: [
            "ఒకే విధమైన పనిని అందరికీ ఇవ్వడం",
            "అదనపు సవాళ్లు మరియు విస్తృత అభ్యాస అవకాశాలు కల్పించడం",
            "అతనిని బోధనలో పాల్గొననివ్వకపోవడం",
            "కేవలం పాఠ్యపుస్తకానికే పరిమితం చేయడం"
        ],
        correct: 1,
        explanation: "ప్రతిభావంతులైన విద్యార్థులకు అదనపు సవాళ్లు, ఉన్నత స్థాయి కార్యకలాపాలు మరియు విస్తృత అభ్యాస అవకాశాలు కల్పించడం ద్వారా వారి ప్రతిభను సమర్థవంతంగా అభివృద్ధి చేయవచ్చు. ఇదే సమగ్ర బోధనలో ఉత్తమ పద్ధతి."
    },
    {
        question: "విద్యాపరంగా వెనుకబడిన (Backward) విద్యార్థిని గుర్తించడంలో అత్యంత ముఖ్యమైన ప్రమాణం ఏది?",
        options: [
            "వయస్సు",
            "శారీరక ఎదుగుదల",
            "తరగతి స్థాయికి తగిన విద్యా ప్రదర్శన లేకపోవడం",
            "ఎత్తు మరియు బరువు"
        ],
        correct: 2,
        explanation: "విద్యాపరంగా వెనుకబడిన విద్యార్థులను వారి వయస్సు లేదా శారీరక ఎదుగుదల ఆధారంగా కాదు. తరగతి స్థాయికి అనుగుణంగా ఆశించిన విద్యా ప్రదర్శన చేయలేకపోవడం ప్రధాన గుర్తింపు ప్రమాణంగా పరిగణించబడుతుంది."
    },
    {
        question: "కింది వాటిలో విద్యాపరంగా వెనుకబడటానికి ప్రధాన కారణం కానిది ఏది?",
        options: [
            "అనారోగ్యం",
            "అనుకూలం కాని కుటుంబ వాతావరణం",
            "సరైన బోధనా పద్ధతుల లోపం",
            "ఎక్కువ సృజనాత్మకత"
        ],
        correct: 3,
        explanation: "అనారోగ్యం, కుటుంబ సమస్యలు, సరైన బోధన లేకపోవడం విద్యాపరమైన వెనుకబాటుకు కారణాలు కావచ్చు. అయితే అధిక సృజనాత్మకత వెనుకబడటానికి కారణం కాదు, అది ప్రత్యేక సామర్థ్యాన్ని సూచిస్తుంది."
    },
    {
        question: "విద్యాపరంగా వెనుకబడిన విద్యార్థులకు అత్యంత అనుకూలమైన బోధనా విధానం ఏది?",
        options: [
            "ఒకే విధమైన బోధన",
            "వ్యక్తిగత అవసరాలకు అనుగుణమైన సహాయక బోధన",
            "ఎక్కువ గృహపాఠాలు ఇవ్వడం",
            "తరచూ పరీక్షలు నిర్వహించడం"
        ],
        correct: 1,
        explanation: "విద్యార్థుల అభ్యాస అవసరాలు, సామర్థ్యాలు మరియు వేగాన్ని పరిగణనలోకి తీసుకొని వ్యక్తిగత సహాయక బోధన అందించడం ఉత్తమ విధానం. దీనివల్ల వారు క్రమంగా విద్యా ప్రగతిని సాధించగలరు."
    },
    {
        question: "సమగ్ర తరగతి గదిలో (Inclusive Classroom) ఉపాధ్యాయుని ప్రధాన పాత్ర ఏమిటి?",
        options: [
            "ప్రతిభావంతులపై మాత్రమే దృష్టి పెట్టడం",
            "అందరికీ సమాన అవకాశాలు కల్పించడం",
            "ప్రత్యేక అవసరాలున్న విద్యార్థులను వేరు చేయడం",
            "పరీక్షలపై మాత్రమే దృష్టి పెట్టడం"
        ],
        correct: 1,
        explanation: "సమగ్ర తరగతి గదిలో ప్రతి విద్యార్థి సమానంగా పాల్గొనేలా అవకాశాలు కల్పించడం ఉపాధ్యాయుని ప్రధాన బాధ్యత. వివిధ అవసరాలను గౌరవిస్తూ అందరికీ సమాన అభ్యాస అవకాశాలు కల్పించాలి."
    },
    {
        question: "సమగ్ర తరగతి గది నిర్వహణలో కింది వాటిలో ఉత్తమ పద్ధతి ఏది?",
        options: [
            "ఒకే బోధనా పద్ధతి ఉపయోగించడం",
            "విద్యార్థుల అవసరాలకు అనుగుణంగా బోధనలో మార్పులు చేయడం",
            "బలహీన విద్యార్థులను చివరి బెంచ్‌లో కూర్చోబెట్టడం",
            "పరీక్షల సంఖ్య పెంచడం"
        ],
        correct: 1,
        explanation: "సమగ్ర తరగతి గదిలో విద్యార్థుల వ్యక్తిగత అవసరాలు భిన్నంగా ఉంటాయి. అందువల్ల బోధన, అభ్యాస కార్యకలాపాలు మరియు మూల్యాంకనంలో అవసరమైన మార్పులు చేయడం అత్యంత ప్రభావవంతమైన పద్ధతి."
    },
    {
        question: "సమగ్ర తరగతి గదిలో సహ విద్యార్థుల సహకారాన్ని పెంపొందించే ఉత్తమ వ్యూహం ఏది?",
        options: [
            "వ్యక్తిగత పోటీలు మాత్రమే నిర్వహించడం",
            "సహకార అభ్యాసం (Co-operative Learning)",
            "శిక్ష ఆధారిత క్రమశిక్షణ",
            "నిశ్శబ్ద అభ్యాసం మాత్రమే"
        ],
        correct: 1,
        explanation: "సహకార అభ్యాసం ద్వారా విద్యార్థులు ఒకరికి ఒకరు సహాయం చేసుకుంటారు. ఇది పరస్పర గౌరవం, అంగీకారం, జట్టు భావన మరియు సమగ్ర అభ్యాస వాతావరణాన్ని అభివృద్ధి చేయడంలో ముఖ్య పాత్ర పోషిస్తుంది."
    },
    {
        question: "ఒక విద్యార్థి తరచుగా పాఠాన్ని అర్థం చేసుకోవడంలో ఇబ్బంది పడుతున్నాడు. సమగ్ర తరగతి గదిలో ఉపాధ్యాయుడు మొదట చేయవలసిన పని ఏమిటి?",
        options: [
            "తరగతి నుండి బయటకు పంపడం",
            "విద్యార్థి అవసరాలను అంచనా వేయడం",
            "మార్కులు తగ్గించడం",
            "తల్లిదండ్రులకు ఫిర్యాదు చేయడం"
        ],
        correct: 1,
        explanation: "విద్యార్థి ఎదుర్కొంటున్న అభ్యాస సమస్యలకు గల కారణాలను ముందుగా అంచనా వేయాలి. సరైన మూల్యాంకనం చేసిన తర్వాత మాత్రమే తగిన బోధనా సహాయం మరియు మద్దతు అందించవచ్చు."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education) యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        options: [
            "ప్రత్యేక పాఠశాలల సంఖ్య పెంచడం",
            "ప్రత్యేక అవసరాలున్న విద్యార్థులను సాధారణ విద్యా వ్యవస్థలో భాగం చేయడం",
            "పరీక్షల సంఖ్య పెంచడం",
            "ప్రత్యేక పాఠ్యపుస్తకాలు మాత్రమే ఉపయోగించడం"
        ],
        correct: 1,
        explanation: "సమగ్ర విద్య ప్రతి విద్యార్థికి, ప్రత్యేక అవసరాలున్న పిల్లలతో సహా, సాధారణ పాఠశాలలో నాణ్యమైన విద్యను అందించడమే లక్ష్యం. సమాన అవకాశాలు, భాగస్వామ్యం మరియు సమగ్ర అభివృద్ధిని ప్రోత్సహిస్తుంది."
    },
    {
        question: "సమగ్ర తరగతి గదిలో కింది వాటిలో ఏది ఉపాధ్యాయుని ప్రభావవంతమైన తరగతి నిర్వహణను సూచిస్తుంది?",
        options: [
            "ఒకే రకమైన మూల్యాంకనం",
            "అనువైన బోధన మరియు తరగతి నిర్వహణ",
            "శిక్షలను పెంచడం",
            "పాఠ్యాంశాన్ని వేగంగా పూర్తి చేయడం"
        ],
        correct: 1,
        explanation: "ప్రభావవంతమైన సమగ్ర తరగతి నిర్వహణలో అనువైన బోధన, భిన్నమైన మూల్యాంకనం, విద్యార్థుల భాగస్వామ్యం మరియు సహాయక అభ్యాస వాతావరణం కీలక అంశాలుగా ఉంటాయి. ఇవి అందరికీ సమాన అవకాశాలు కల్పిస్తాయి."
    },
    {
        question: "సమగ్ర తరగతి గదిలో విద్యార్థుల మధ్య పరస్పర గౌరవాన్ని పెంపొందించడానికి అత్యంత ప్రభావవంతమైన చర్య ఏది?",
        options: [
            "విద్యార్థులను సామర్థ్యాల ఆధారంగా వేరు చేయడం",
            "సమూహ కార్యకలాపాలు మరియు సహకార అభ్యాసాన్ని ప్రోత్సహించడం",
            "పరీక్షల ఆధారంగా మాత్రమే గుర్తింపు ఇవ్వడం",
            "తరచూ హెచ్చరికలు ఇవ్వడం"
        ],
        correct: 1,
        explanation: "సమూహ కార్యకలాపాలు మరియు సహకార అభ్యాసం ద్వారా విద్యార్థులు పరస్పరం సహకరించడం, గౌరవించడం మరియు వైవిధ్యాన్ని అంగీకరించడం నేర్చుకుంటారు. ఇది సమగ్ర తరగతి వాతావరణాన్ని బలపరుస్తుంది."
    },
    {
        question: 'Choose the word nearest in meaning to "Abundant."',
        options: ["Scarce", "Plenty", "Rare", "Limited"],
        correct: 1,
        explanation: 'The word "abundant" means available in large quantities or more than enough. "Plenty" is its closest synonym because both describe something existing in great amount or sufficient supply.'
    },
    {
        question: "Choose the correct One Word Substitution.\n\nOne who cannot read or write is called ________.",
        options: ["Literate", "Scholar", "Illiterate", "Graduate"],
        correct: 2,
        explanation: 'An illiterate person is someone who cannot read or write. This term is commonly used in education to describe individuals lacking basic literacy skills required for everyday communication.'
    },
    {
        question: 'Choose the correct meaning of the idiom:\n\n"Once in a blue moon"',
        options: ["Every day", "Very rarely", "At night", "Very quickly"],
        correct: 1,
        explanation: 'The idiom "once in a blue moon" describes an event that happens very rarely. It is used when something occurs only on exceptional or uncommon occasions, not regularly.'
    },
    {
        question: "Choose the correct phrasal verb.\n\nThe meeting was ______ due to heavy rain.",
        options: ["Called off", "Called on", "Called for", "Called at"],
        correct: 0,
        explanation: 'The phrasal verb "call off" means to cancel an event, meeting, or activity. Since heavy rain prevented the meeting from taking place, "called off" is the correct answer.'
    },
    {
        question: 'Choose the word opposite in meaning to "Ancient."',
        options: ["Old", "Historic", "Modern", "Primitive"],
        correct: 2,
        explanation: 'The word "modern" is the opposite of "ancient." Ancient refers to something belonging to the distant past, whereas modern refers to something belonging to the present or recent times.'
    },
    {
        question: "Choose the correct One Word Substitution.\n\nA person who loves mankind is called a ________.",
        options: ["Philanthropist", "Pessimist", "Optimist", "Critic"],
        correct: 0,
        explanation: 'A philanthropist is a person who loves humanity and works for the welfare of others, often through charity or public service. The word comes from Greek meaning "love of mankind."'
    },
    {
        question: 'Choose the correct meaning of the idiom.\n\n"At sixes and sevens"',
        options: ["Very happy", "In confusion", "Well organised", "Fully prepared"],
        correct: 1,
        explanation: 'The idiom "at sixes and sevens" means being in a state of confusion, disorder, or lack of organization. It describes situations where things are not properly arranged or managed.'
    },
    {
        question: "Choose the correct phrasal verb.\n\nTeachers should ______ every child in the classroom.",
        options: ["Look after", "Look over", "Look into", "Look across"],
        correct: 0,
        explanation: 'The phrasal verb "look after" means to take care of someone responsibly. Teachers are expected to care for every child and ensure their safety, learning, and overall well-being.'
    },
    {
        question: 'Choose the synonym of "Rapid."',
        options: ["Slow", "Fast", "Weak", "Quiet"],
        correct: 1,
        explanation: 'The word "rapid" means happening quickly or moving at great speed. "Fast" has the same meaning and is therefore the correct synonym among the given options.'
    },
    {
        question: "Choose the correct One Word Substitution.\n\nA person who speaks many languages is called a ________.",
        options: ["Bilingual", "Polyglot", "Monolingual", "Translator"],
        correct: 1,
        explanation: 'A polyglot is a person who can speak, read, or understand many languages. Unlike a bilingual person, who knows two languages, a polyglot has proficiency in several languages.'
    },
    {
        question: 'Choose the correct meaning of the idiom.\n\n"A blessing in disguise"',
        options: [
            "A hidden danger",
            "Something good that first appears bad",
            "A public honour",
            "A false promise"
        ],
        correct: 1,
        explanation: 'The idiom "a blessing in disguise" refers to something that initially seems unfortunate but later proves to be beneficial. It highlights unexpected positive outcomes from difficult situations.'
    },
    {
        question: "Choose the correct phrasal verb.\n\nThe principal asked the students to ______ their homework.",
        options: ["Hand in", "Hand over", "Hand out", "Hand down"],
        correct: 0,
        explanation: 'The phrasal verb "hand in" means to submit work, assignments, or documents to an authority such as a teacher or principal. Therefore, it correctly completes the sentence.'
    },
    {
        question: 'Choose the antonym of "Generous."',
        options: ["Kind", "Selfish", "Helpful", "Noble"],
        correct: 1,
        explanation: 'The word "selfish" is the opposite of "generous." A generous person willingly shares with others, whereas a selfish person mainly thinks about personal benefit and interests.'
    },
    {
        question: "Choose the correct One Word Substitution.\n\nOne who studies birds is called a ________.",
        options: ["Botanist", "Zoologist", "Ornithologist", "Geologist"],
        correct: 2,
        explanation: 'An ornithologist is a scientist who specializes in the study of birds, including their behavior, habitats, classification, and conservation. This branch of science is called ornithology.'
    },
    {
        question: "Choose the correct phrasal verb.\n\nNever ______ your parents.",
        options: ["Look down upon", "Look after", "Look into", "Look for"],
        correct: 0,
        explanation: 'The phrasal verb "look down upon" means to disrespect or consider someone inferior. Children should always respect their parents, so this expression appropriately completes the sentence.'
    },
    {
        question: "ఉపాధ్యాయుడు విద్యార్థుల కోసం పోస్టర్లు, ప్రజెంటేషన్లు మరియు ఇన్ఫోగ్రాఫిక్స్‌ను సులభంగా రూపొందించడానికి ఉపయోగించే వెబ్ ఆధారిత సాధనం ఏది?",
        options: ["Moodle", "Canva", "Google Forms", "DIKSHA"],
        correct: 1,
        explanation: "Canva అనేది పోస్టర్లు, ప్రజెంటేషన్లు, ఇన్ఫోగ్రాఫిక్స్, వర్క్‌షీట్లు మరియు ఇతర విద్యా దృశ్య వనరులను సులభంగా రూపొందించడానికి ఉపయోగించే ప్రముఖ వెబ్ ఆధారిత డిజైన్ సాధనం. ఉపాధ్యాయులకు ఇది ఎంతో ఉపయోగకరంగా ఉంటుంది."
    },
    {
        question: "Canvaలో ఒకే ప్రాజెక్టును అనేక మంది కలిసి ఒకేసారి సవరించడానికి ఉపయోగపడే లక్షణం ఏది?",
        options: ["Spell Check", "Real-time Collaboration", "Mail Merge", "File Compression"],
        correct: 1,
        explanation: "Real-time Collaboration ద్వారా ఒకే Canva డిజైన్‌ను అనేక మంది ఒకేసారి సవరించవచ్చు. ఇది జట్టు పనిని సులభతరం చేసి ఉపాధ్యాయులు మరియు విద్యార్థుల మధ్య సమర్థవంతమైన సహకారాన్ని ప్రోత్సహిస్తుంది."
    },
    {
        question: "Google Forms యొక్క ప్రధాన ఉపయోగం ఏమిటి?",
        options: [
            "వీడియో ఎడిటింగ్",
            "ఆన్‌లైన్ సర్వేలు, క్విజ్‌లు మరియు డేటా సేకరణ",
            "చిత్రాల రూపకల్పన",
            "ప్రోగ్రామింగ్"
        ],
        correct: 1,
        explanation: "Google Forms ద్వారా ఆన్‌లైన్ సర్వేలు, పరీక్షలు, క్విజ్‌లు మరియు అభిప్రాయాలను సులభంగా సేకరించవచ్చు. సేకరించిన సమాచారం స్వయంచాలకంగా భద్రపరచబడి విశ్లేషణకు కూడా ఉపయోగపడుతుంది."
    },
    {
        question: "Google Formsలో Quiz Mode ను ప్రారంభించడం ద్వారా ప్రధాన ప్రయోజనం ఏమిటి?",
        options: [
            "ఫైల్ పరిమాణం తగ్గుతుంది.",
            "స్వయంచాలక మూల్యాంకనం మరియు మార్కుల కేటాయింపు సాధ్యమవుతుంది.",
            "ఇంటర్నెట్ అవసరం ఉండదు.",
            "వీడియోలు మాత్రమే జోడించవచ్చు."
        ],
        correct: 1,
        explanation: "Quiz Mode ద్వారా సరైన సమాధానాలను ముందుగానే నిర్ణయించి విద్యార్థుల సమాధానాలను స్వయంచాలకంగా మూల్యాంకనం చేయవచ్చు. దీనివల్ల సమయం ఆదా కావడంతో పాటు మార్కుల కేటాయింపులో ఖచ్చితత్వం పెరుగుతుంది."
    },
    {
        question: "OER (Open Educational Resources) యొక్క ముఖ్య లక్షణం ఏది?",
        options: [
            "చెల్లింపు చేసిన వారికి మాత్రమే అందుబాటులో ఉండటం",
            "ఉచితంగా ఉపయోగించడం, మార్చడం మరియు పంచుకోవడం సాధ్యమవడం",
            "ప్రభుత్వ ఉద్యోగులకు మాత్రమే అందుబాటులో ఉండటం",
            "ముద్రిత పుస్తకాలకే పరిమితం కావడం"
        ],
        correct: 1,
        explanation: "Open Educational Resources (OER) తెరవెనుక లైసెన్స్‌లతో ఉచితంగా అందుబాటులో ఉంటాయి. వీటిని ఉపయోగించడం, సవరించడం, పంచుకోవడం మరియు విద్యా అవసరాలకు అనుగుణంగా తిరిగి వినియోగించడం సాధ్యమవుతుంది."
    },
    {
        question: "కింది వాటిలో Open Educational Resource (OER) వేదిక ఏది?",
        options: ["DIKSHA", "Adobe Photoshop", "MS Paint", "Notepad"],
        correct: 0,
        explanation: "DIKSHA భారత ప్రభుత్వ డిజిటల్ విద్యా వేదిక. ఇది ఉపాధ్యాయులు మరియు విద్యార్థులకు నాణ్యమైన విద్యా వనరులు, పాఠాలు, వీడియోలు మరియు ఇతర OER ఆధారిత అభ్యాస సామగ్రిని అందిస్తుంది."
    },
    {
        question: "Learning Management System (LMS) యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        options: [
            "కంప్యూటర్ వైరస్‌లను తొలగించడం",
            "బోధన, అభ్యాసం, అసైన్‌మెంట్‌లు మరియు మూల్యాంకనాన్ని నిర్వహించడం",
            "ఫోటో ఎడిటింగ్ చేయడం",
            "వీడియో గేమ్స్ రూపొందించడం"
        ],
        correct: 1,
        explanation: "Learning Management System (LMS) ద్వారా కోర్సులు, పాఠాలు, అసైన్‌మెంట్‌లు, పరీక్షలు, మార్కులు మరియు విద్యార్థుల అభ్యాస పురోగతిని సమగ్రంగా నిర్వహించడం మరియు పర్యవేక్షించడం సాధ్యమవుతుంది."
    },
    {
        question: "కింది వాటిలో Learning Management System (LMS) కు ఉదాహరణ ఏది?",
        options: ["Moodle", "Canva", "Google Maps", "VLC Media Player"],
        correct: 0,
        explanation: "Moodle ప్రపంచవ్యాప్తంగా విస్తృతంగా ఉపయోగించే ఓపెన్ సోర్స్ Learning Management System. ఇది బోధన, అభ్యాసం, పరీక్షలు మరియు విద్యార్థుల పురోగతి నిర్వహణకు అనుకూలంగా ఉంటుంది."
    },
    {
        question: "డిజిటల్ మూల్యాంకనం (Digital Assessment) యొక్క ప్రధాన ప్రయోజనం ఏమిటి?",
        options: [
            "పేపర్ వినియోగం పెరగడం",
            "ఫలితాలు త్వరగా మరియు ఖచ్చితంగా పొందడం",
            "పరీక్షలను ముద్రించడం",
            "విద్యార్థుల సంఖ్య తగ్గించడం"
        ],
        correct: 1,
        explanation: "డిజిటల్ మూల్యాంకనం ద్వారా పరీక్ష ఫలితాలు వేగంగా మరియు ఖచ్చితంగా పొందవచ్చు. ఇది ఉపాధ్యాయుల సమయాన్ని ఆదా చేయడంతో పాటు మూల్యాంకన ప్రక్రియను మరింత సమర్థవంతంగా చేస్తుంది."
    },
    {
        question: "కింది వాటిలో Formative Assessment కోసం ఎక్కువగా ఉపయోగించే డిజిటల్ సాధనం ఏది?",
        options: ["Google Forms", "Calculator", "Paint", "WordPad"],
        correct: 0,
        explanation: "Google Forms ద్వారా చిన్న క్విజ్‌లు నిర్వహించి విద్యార్థుల అభ్యాసాన్ని నిరంతరం అంచనా వేయవచ్చు. తక్షణ ఫీడ్‌బ్యాక్ అందించడం వల్ల ఇది Formative Assessmentకు అత్యంత అనుకూలమైన సాధనం."
    },
    {
        question: "ఉపాధ్యాయుడు విద్యార్థుల అభ్యాస పురోగతిని నిరంతరం పర్యవేక్షించడానికి అత్యంత అనుకూలమైన డిజిటల్ వేదిక ఏది?",
        options: ["LMS", "Scanner", "Printer", "Pen Drive"],
        correct: 0,
        explanation: "LMS ద్వారా విద్యార్థుల హాజరు, అసైన్‌మెంట్‌లు, పరీక్షలు, మార్కులు మరియు అభ్యాస పురోగతిని ఒకే వేదికపై నిరంతరం పర్యవేక్షించడం మరియు నిర్వహించడం సులభమవుతుంది."
    },
    {
        question: "Open Educational Resources (OER) వినియోగం వల్ల కలిగే ముఖ్య ప్రయోజనం ఏది?",
        options: [
            "విద్యా వనరులకు సమాన ప్రాప్యత",
            "ఇంటర్నెట్ వినియోగాన్ని నిలిపివేయడం",
            "పాఠ్యపుస్తకాల అవసరాన్ని పూర్తిగా తొలగించడం",
            "పరీక్షలను రద్దు చేయడం"
        ],
        correct: 0,
        explanation: "OER ద్వారా ప్రతి విద్యార్థి మరియు ఉపాధ్యాయుడు నాణ్యమైన విద్యా వనరులను ఉచితంగా పొందగలరు. ఇది విద్యలో సమాన అవకాశాలను పెంపొందించి అభ్యాసాన్ని అందరికీ అందుబాటులోకి తీసుకువస్తుంది."
    },
    {
        question: "Google Formsలో విద్యార్థి స్పందనలు స్వయంచాలకంగా ఏ సేవలో నిల్వ చేయబడతాయి?",
        options: ["Google Sheets", "MS Excel మాత్రమే", "Paint", "Chrome"],
        correct: 0,
        explanation: "Google Formsలో సేకరించిన స్పందనలను Google Sheetsతో అనుసంధానించి స్వయంచాలకంగా భద్రపరచవచ్చు. దీనివల్ల డేటా విశ్లేషణ, గ్రాఫ్‌లు మరియు నివేదికలు రూపొందించడం సులభమవుతుంది."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education)లో Canva వంటి సాధనాల ఉపయోగం ప్రధానంగా దేనిని ప్రోత్సహిస్తుంది?",
        options: [
            "బహుఇంద్రియ (Multisensory) అభ్యాసం",
            "పరీక్షల సంఖ్య పెంచడం",
            "హోంవర్క్ తగ్గించడం",
            "పాఠ్యాంశాన్ని తగ్గించడం"
        ],
        correct: 0,
        explanation: "Canvaలో చిత్రాలు, వీడియోలు, గ్రాఫిక్స్ మరియు దృశ్య వనరులను ఉపయోగించడం ద్వారా బహుఇంద్రియ అభ్యాసం ప్రోత్సహించబడుతుంది. ఇది వివిధ అవసరాలున్న విద్యార్థుల అభ్యాసాన్ని మరింత ప్రభావవంతంగా చేస్తుంది."
    },
    {
        question: "డిజిటల్ మూల్యాంకనంలో తక్షణ ఫీడ్‌బ్యాక్ (Immediate Feedback) ఇవ్వగల సాధనం ఏది?",
        options: ["Google Forms Quiz", "MS Paint", "Notepad", "Calculator"],
        correct: 0,
        explanation: "Google Forms Quiz ద్వారా విద్యార్థులు సమాధానాలు సమర్పించిన వెంటనే సరైన సమాధానాలు, మార్కులు మరియు ఫీడ్‌బ్యాక్ పొందగలరు. ఇది వేగవంతమైన మరియు సమర్థవంతమైన డిజిటల్ మూల్యాంకనాన్ని అందిస్తుంది."
    }
];