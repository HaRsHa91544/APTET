const QUESTIONS = [
    {
        question: "శ్రద్ధ (Attention) అనేది ప్రధానంగా ఏ ప్రక్రియకు సంబంధించినది?",
        options: [
            "అన్ని ఉద్దీపనలకు సమాన ప్రతిస్పందన ఇవ్వడం",
            "ఒక నిర్దిష్ట ఉద్దీపనపై మానసిక కేంద్రీకరణ",
            "జ్ఞాపకశక్తిని నిల్వ చేయడం",
            "ప్రవర్తనను మార్చడం"
        ],
        correct: 1,
        explanation: "శ్రద్ధ అనేది అనేక ఉద్దీపనలలో ఒక నిర్దిష్ట ఉద్దీపనపై మనస్సును కేంద్రీకరించే ప్రక్రియ. ఇది అభ్యాసం మరియు గ్రహణానికి పునాది."
    },
    {
        question: "విద్యార్థి తరగతి గదిలో ఉపాధ్యాయుని మాటలను మాత్రమే గమనించి, బయట శబ్దాలను పట్టించుకోకపోవడం ఏ రకమైన శ్రద్ధకు ఉదాహరణ?",
        options: [
            "విభజిత శ్రద్ధ",
            "ఎంపికాత్మక శ్రద్ధ",
            "అసంకల్పిత శ్రద్ధ",
            "తాత్కాలిక శ్రద్ధ"
        ],
        correct: 1,
        explanation: "ఎంపికాత్మక శ్రద్ధలో వ్యక్తి అనేక ఉద్దీపనలలో అవసరమైనదానిపై మాత్రమే దృష్టి కేంద్రీకరిస్తాడు. మిగిలిన వాటిని విస్మరిస్తాడు."
    },
    {
        question: "ఉద్దీపనలకు అర్థం ఇవ్వడం అనే ప్రక్రియను ఏమంటారు?",
        options: [
            "అనుభూతి",
            "గ్రహణం",
            "ప్రేరణ",
            "బుద్ధి"
        ],
        correct: 1,
        explanation: "గ్రహణం అనేది ఇంద్రియాల ద్వారా వచ్చిన సమాచారాన్ని అర్థవంతంగా వ్యాఖ్యానించే మానసిక ప్రక్రియ. ఇది అనుభూతి తర్వాత జరుగుతుంది."
    },
    {
        question: "ఒకే చిత్రాన్ని ఇద్దరు విద్యార్థులు భిన్నంగా అర్థం చేసుకోవడానికి ప్రధాన కారణం",
        options: [
            "గ్రహణంలో వ్యక్తిగత భేదాలు",
            "వయస్సు",
            "లింగం",
            "ఎత్తు"
        ],
        correct: 0,
        explanation: "ప్రతి వ్యక్తి అనుభవాలు, ఆసక్తులు, అవసరాలు వేరుగా ఉంటాయి. అందువల్ల ఒకే ఉద్దీపనను వేర్వేరుగా గ్రహిస్తారు."
    },
    {
        question: "మాస్లో సిద్ధాంతంలో అత్యున్నత అవసరం ఏది?",
        options: [
            "భద్రత",
            "ప్రేమ మరియు అనుబంధం",
            "ఆత్మసాక్షాత్కారం",
            "గౌరవం"
        ],
        correct: 2,
        explanation: "మాస్లో అవసరాల సోపానక్రమంలో ఆత్మసాక్షాత్కారం అత్యున్నత స్థాయి. వ్యక్తి తన సంపూర్ణ సామర్థ్యాన్ని సాధించడానికి ప్రయత్నిస్తాడు."
    },
    {
        question: "విద్యార్థిని ప్రశంసించడం ద్వారా చదువుపై ఆసక్తి పెంచడం ఏ విధానానికి ఉదాహరణ?",
        options: [
            "శిక్ష",
            "పునర్బలనం",
            "అనుకరణ",
            "అంతర్దృష్టి"
        ],
        correct: 1,
        explanation: "ప్రశంస వంటి సానుకూల పునర్బలనం విద్యార్థిలో కావలసిన ప్రవర్తనను పెంచుతుంది. ఇది అభ్యాసాన్ని బలోపేతం చేస్తుంది."
    },
    {
        question: "బుద్ధి అనేది కొత్త పరిస్థితులకు అనుగుణంగా ప్రవర్తించే సామర్థ్యం అని నిర్వచించినవారు",
        options: [
            "బినే",
            "టర్మన్",
            "స్టెర్న్",
            "వుడ్‌వర్త్"
        ],
        correct: 0,
        explanation: "అల్ఫ్రెడ్ బినే బుద్ధిని కొత్త పరిస్థితులకు అనుగుణంగా వ్యవహరించే సామర్థ్యంగా నిర్వచించాడు. ఇది APTETలో తరచుగా అడిగే ప్రశ్న."
    },
    {
        question: "IQ = Mental Age / Chronological Age × 100 అనే సూత్రాన్ని ప్రతిపాదించినవారు",
        options: [
            "బినే",
            "స్టెర్న్",
            "థార్న్‌డైక్",
            "కోహ్ల్‌బర్గ్"
        ],
        correct: 1,
        explanation: "విలియం స్టెర్న్ IQ భావనను ప్రతిపాదించి మానసిక వయస్సు మరియు వాస్తవ వయస్సు ఆధారంగా గణించే సూత్రాన్ని సూచించాడు."
    },
    {
        question: "ఒక విద్యార్థి గణితంలో అద్భుతంగా ఉన్నా భాషలో బలహీనంగా ఉండటం సూచించేది",
        options: [
            "సమాన బుద్ధి",
            "వ్యక్తిగత భేదాలు",
            "శారీరక వికాసం",
            "పరిపక్వత"
        ],
        correct: 1,
        explanation: "విద్యార్థుల సామర్థ్యాలు అన్ని రంగాలలో సమానంగా ఉండవు. ఇది వ్యక్తిగత భేదాల ముఖ్య లక్షణంగా పరిగణించబడుతుంది."
    },
    {
        question: "శ్రద్ధను ప్రభావితం చేసే బాహ్య కారకం",
        options: [
            "ఆసక్తి",
            "అవసరం",
            "ఉద్దీపన తీవ్రత",
            "ఆరోగ్యం"
        ],
        correct: 2,
        explanation: "శబ్దం, కాంతి, రంగు, పరిమాణం వంటి ఉద్దీపన తీవ్రతలు బాహ్య కారకాలు. ఇవి శ్రద్ధను ఆకర్షించడంలో కీలక పాత్ర పోషిస్తాయి."
    },
    {
        question: "గ్రహణం ప్రారంభమయ్యే మొదటి దశ",
        options: [
            "అర్థవివరణ",
            "అనుభూతి",
            "నిర్ణయం",
            "ప్రతిస్పందన"
        ],
        correct: 1,
        explanation: "గ్రహణ ప్రక్రియలో మొదట ఇంద్రియాల ద్వారా ఉద్దీపనలను స్వీకరించడం జరుగుతుంది. దీనినే అనుభూతి (Sensation) అంటారు. ఆ తరువాత అర్థవివరణ జరుగుతుంది."
    },
    {
        question: "అంతర్గత ప్రేరణకు ఉదాహరణ",
        options: [
            "బహుమతి కోసం చదవడం",
            "మార్కుల కోసం చదవడం",
            "జ్ఞానం కోసం చదవడం",
            "శిక్ష భయంతో చదవడం"
        ],
        correct: 2,
        explanation: "అంతర్గత ప్రేరణలో వ్యక్తి బాహ్య బహుమతుల కోసం కాకుండా తన ఆసక్తి, జ్ఞానపిపాస లేదా సంతృప్తి కోసం పనిచేస్తాడు."
    },
    {
        question: "బినే రూపొందించిన పరీక్ష ప్రధానంగా దేనిని కొలవడానికి ఉపయోగించబడింది?",
        options: [
            "వ్యక్తిత్వం",
            "సృజనాత్మకత",
            "బుద్ధి",
            "ఆసక్తి"
        ],
        correct: 2,
        explanation: "అల్ఫ్రెడ్ బినే రూపొందించిన బినే-సైమన్ పరీక్ష మానసిక సామర్థ్యాన్ని లేదా బుద్ధిని కొలవడానికి ఉపయోగించబడింది."
    },
    {
        question: "ఒక విద్యార్థి నిరంతరం 20 నిమిషాల పాటు ఒక పనిపై దృష్టి నిలుపుకోవడం ఏ శ్రద్ధకు ఉదాహరణ?",
        options: [
            "స్థిర శ్రద్ధ",
            "విభజిత శ్రద్ధ",
            "అసంకల్పిత శ్రద్ధ",
            "తాత్కాలిక శ్రద్ధ"
        ],
        correct: 0,
        explanation: "ఒకే పనిపై ఎక్కువ సమయం పాటు దృష్టిని నిలుపుకోవడం స్థిర శ్రద్ధ (Sustained Attention) లక్షణం."
    },
    {
        question: "క్రింది వాటిలో ప్రేరణకు సంబంధించినది ఏది?",
        options: [
            "నేర్చుకునే సిద్ధత",
            "నేర్చుకునే శక్తి",
            "ప్రవర్తనకు దిశనిచ్చే శక్తి",
            "వారసత్వం"
        ],
        correct: 2,
        explanation: "ప్రేరణ వ్యక్తి ప్రవర్తనను ప్రారంభించి, కొనసాగించి, ఒక లక్ష్యం వైపు దిశానిర్దేశం చేసే శక్తిగా పరిగణించబడుతుంది."
    },
    {
        question: "కమ్యూనికేషన్ యొక్క ప్రాథమిక అంశం కానిది",
        options: [
            "పంపేవాడు",
            "సందేశం",
            "గ్రహీత",
            "సిలబస్"
        ],
        correct: 3,
        explanation: "కమ్యూనికేషన్‌లో పంపేవాడు, సందేశం, మాధ్యమం, గ్రహీత, ప్రతిస్పందన వంటి అంశాలు ఉంటాయి. సిలబస్ కమ్యూనికేషన్ అంశం కాదు."
    },
    {
        question: "కమ్యూనికేషన్ ప్రక్రియలో సందేశాన్ని అర్థవంతమైన రూపంలో మార్చడాన్ని ఏమంటారు?",
        options: [
            "Encoding",
            "Decoding",
            "Feedback",
            "Noise"
        ],
        correct: 0,
        explanation: "సందేశాన్ని పదాలు, సంకేతాలు లేదా చిహ్నాల రూపంలో రూపొందించే ప్రక్రియను Encoding అంటారు."
    },
    {
        question: "ఉపాధ్యాయుడు బోధించిన తర్వాత విద్యార్థి సమాధానం ఇవ్వడం",
        options: [
            "సందేశం",
            "ప్రతిస్పందన",
            "ఛానల్",
            "శబ్దం"
        ],
        correct: 1,
        explanation: "సందేశాన్ని స్వీకరించిన తరువాత గ్రహీత ఇచ్చే స్పందనను Feedback లేదా ప్రతిస్పందన అంటారు."
    },
    {
        question: "కమ్యూనికేషన్‌కు ప్రధాన ఆటంకం",
        options: [
            "Feedback",
            "Noise",
            "Sender",
            "Receiver"
        ],
        correct: 1,
        explanation: "సందేశ ప్రసారాన్ని అడ్డుకునే ఏ అంశమైనా Noise లేదా కమ్యూనికేషన్ అవరోధంగా పరిగణించబడుతుంది."
    },
    {
        question: "క్రింది వాటిలో భౌతిక అవరోధానికి ఉదాహరణ",
        options: [
            "పక్షపాతం",
            "భాషా సమస్య",
            "మైక్ పనిచేయకపోవడం",
            "ఆసక్తి లేకపోవడం"
        ],
        correct: 2,
        explanation: "పరికరాల లోపాలు, శబ్దం, విద్యుత్ సమస్యలు వంటి అంశాలు భౌతిక అవరోధాలుగా పరిగణించబడతాయి."
    },
    {
        question: "తరగతి గదిలో ఉపాధ్యాయుడు-విద్యార్థి పరస్పర చర్యలను అధ్యయనం చేయడానికి ఉపయోగించే వ్యవస్థ",
        options: [
            "Bloom Taxonomy",
            "Flanders Interaction Analysis",
            "Bruner Model",
            "Dalton Plan"
        ],
        correct: 1,
        explanation: "Flanders Interaction Analysis System (FIAS) తరగతి గదిలో ఉపాధ్యాయుడు మరియు విద్యార్థుల మధ్య జరిగే మౌఖిక పరస్పర చర్యలను విశ్లేషించడానికి ఉపయోగిస్తారు."
    },
    {
        question: "ద్విముఖ కమ్యూనికేషన్‌లో తప్పనిసరిగా ఉండేది",
        options: [
            "Feedback",
            "Silence",
            "Barrier",
            "Equipment"
        ],
        correct: 0,
        explanation: "ద్విముఖ కమ్యూనికేషన్‌లో సందేశం పంపిన తరువాత గ్రహీత స్పందించడం అవసరం. ఈ స్పందననే Feedback అంటారు."
    },
    {
        question: "కమ్యూనికేషన్‌లో Receiver చేసే ప్రక్రియ",
        options: [
            "Encoding",
            "Decoding",
            "Filtering",
            "Broadcasting"
        ],
        correct: 1,
        explanation: "Receiver సందేశాన్ని స్వీకరించి దాని అర్థాన్ని గ్రహించే ప్రక్రియను Decoding అంటారు."
    },
    {
        question: "అర్థాన్ని పంచుకునే ప్రక్రియ అని దేనిని అంటారు?",
        options: [
            "Motivation",
            "Communication",
            "Evaluation",
            "Reinforcement"
        ],
        correct: 1,
        explanation: "వ్యక్తుల మధ్య భావాలు, ఆలోచనలు మరియు సమాచారాన్ని పంచుకునే ప్రక్రియను Communication అంటారు."
    },
    {
        question: "భాష అర్థం కాకపోవడం ఏ అవరోధం?",
        options: [
            "Psychological",
            "Semantic",
            "Physical",
            "Mechanical"
        ],
        correct: 1,
        explanation: "పదాలు లేదా భాష యొక్క అర్థం సరిగా అర్థం కాకపోవడం Semantic Barrier గా పరిగణించబడుతుంది."
    },
    {
        question: "26-40 dB వినికిడి లోపం గలవారిని ఏమంటారు?",
        options: [
            "Mild",
            "Moderate",
            "Severe",
            "Profound"
        ],
        correct: 0,
        explanation: "26-40 dB మధ్య వినికిడి లోపం ఉన్నవారిని Mild Hearing Loss కలవారిగా వర్గీకరిస్తారు. ఇది APTETలో తరచుగా అడిగే ప్రశ్న."
    },
    {
        question: "41-55 dB వినికిడి లోపం గలవారు",
        options: [
            "Mild",
            "Moderate",
            "Severe",
            "Profound"
        ],
        correct: 1,
        explanation: "41-55 dB మధ్య వినికిడి లోపం ఉన్నవారిని Moderate Hearing Loss వర్గంలో చేర్చుతారు."
    },
    {
        question: "91 dB కంటే ఎక్కువ వినికిడి లోపం",
        options: [
            "Mild",
            "Moderate",
            "Severe",
            "Profound"
        ],
        correct: 3,
        explanation: "91 dB కంటే ఎక్కువ వినికిడి లోపం ఉన్నవారిని Profound Hearing Loss వర్గంలో చేర్చుతారు."
    },
    {
        question: "వినికిడి లోపాన్ని ముందుగానే గుర్తించడం ఎందుకు ముఖ్యము?",
        options: [
            "పాఠశాల ప్రవేశం కోసం",
            "భాషా వికాసానికి",
            "క్రీడల కోసం",
            "హాజరు కోసం"
        ],
        correct: 1,
        explanation: "వినికిడి లోపాన్ని ప్రారంభ దశలో గుర్తిస్తే భాష, సంభాషణ మరియు విద్యా అభివృద్ధికి సరైన జోక్యాలు అందించవచ్చు."
    },
    {
        question: "Hearing Aid ఉపయోగించే విద్యార్థిని తరగతి గదిలో ఎక్కడ కూర్చోబెట్టాలి?",
        options: [
            "చివరి వరుస",
            "తలుపు దగ్గర",
            "మొదటి వరుస",
            "కిటికీ దగ్గర"
        ],
        correct: 2,
        explanation: "వినికిడి లోపం ఉన్న విద్యార్థిని ఉపాధ్యాయునికి దగ్గరగా, సాధారణంగా మొదటి వరుసలో కూర్చోబెట్టడం ఉత్తమం."
    },
    {
        question: "వినికిడి సామర్థ్యాన్ని కొలవడానికి ఉపయోగించే పరీక్ష",
        options: [
            "Snellen Test",
            "Audiological Assessment",
            "IQ Test",
            "Braille Test"
        ],
        correct: 1,
        explanation: "వినికిడి స్థాయిని, వినికిడి లోపం రకాన్ని మరియు తీవ్రతను అంచనా వేయడానికి Audiological Assessment ఉపయోగిస్తారు."
    },
    {
        question: "శబ్ద తీవ్రత కొలిచే ప్రమాణం",
        options: [
            "Hertz",
            "Decibel",
            "Meter",
            "Lumen"
        ],
        correct: 1,
        explanation: "శబ్దం యొక్క తీవ్రతను Decibel (dB)లో కొలుస్తారు. Hearing Impairment వర్గీకరణలో dB ప్రమాణం ఉపయోగించబడుతుంది."
    },
    {
        question: "జననం తర్వాత తరచూ చెవి ఇన్ఫెక్షన్లు ఉండడం దేనికి దారితీయవచ్చు?",
        options: [
            "Visual Impairment",
            "Hearing Loss",
            "Dyslexia",
            "Autism"
        ],
        correct: 1,
        explanation: "తరచూ చెవి ఇన్ఫెక్షన్లు వినికిడి వ్యవస్థను ప్రభావితం చేసి Hearing Loss కు దారితీయవచ్చు."
    },
    {
        question: "వినికిడి లోపం ఉన్న విద్యార్థికి ఉపాధ్యాయుడు మాట్లాడేటప్పుడు",
        options: [
            "వెనక్కి తిరిగి మాట్లాడాలి",
            "స్పష్టంగా ముఖం కనిపించేలా మాట్లాడాలి",
            "వేగంగా మాట్లాడాలి",
            "గట్టిగా మాత్రమే మాట్లాడాలి"
        ],
        correct: 1,
        explanation: "విద్యార్థి పెదవుల కదలికలు మరియు ముఖ కవళికలను గమనించేందుకు ఉపాధ్యాయుడు ముఖం స్పష్టంగా కనిపించేలా మాట్లాడాలి."
    },
    {
        question: "Speech Reading ను మరొక పేరుతో ఏమంటారు?",
        options: [
            "Lip Reading",
            "Braille Reading",
            "Silent Reading",
            "Skimming"
        ],
        correct: 0,
        explanation: "మాట్లాడే వ్యక్తి పెదవుల కదలికలను గమనించి అర్థం చేసుకునే ప్రక్రియను Lip Reading లేదా Speech Reading అంటారు."
    },
    {
        question: "వినికిడి లోపం ఉన్న చిన్నారుల ప్రారంభ జోక్యంలో ప్రధాన లక్ష్యం",
        options: [
            "పరీక్షలు",
            "భాషా వికాసం",
            "ఉద్యోగం",
            "క్రీడలు"
        ],
        correct: 1,
        explanation: "ప్రారంభ జోక్యం ద్వారా భాషా మరియు సంభాషణ నైపుణ్యాలను అభివృద్ధి చేయడం ముఖ్య లక్ష్యం."
    },
    {
        question: "క్రింది వాటిలో వినికిడి లోపం గుర్తించే సూచన ఏది?",
        options: [
            "పేరు పిలిచినా స్పందించకపోవడం",
            "ఎక్కువగా చదవడం",
            "వేగంగా రాయడం",
            "గణితం ఇష్టపడడం"
        ],
        correct: 0,
        explanation: "పేరు పిలిచినా లేదా శబ్దాలకు స్పందించకపోవడం వినికిడి లోపం యొక్క ముఖ్య ప్రారంభ సూచన."
    },
    {
        question: "AVT అంటే",
        options: [
            "Auditory Verbal Therapy",
            "Audio Visual Training",
            "Auditory Visual Test",
            "Audio Verbal Teaching"
        ],
        correct: 0,
        explanation: "AVT అంటే Auditory Verbal Therapy. ఇది వినికిడి అవశేషాలను ఉపయోగించి భాషా అభివృద్ధిని ప్రోత్సహించే విధానం."
    },
    {
        question: "RPWD Act ప్రకారం Hearing Impairment లో",
        options: [
            "Deaf మాత్రమే",
            "Hard of Hearing మాత్రమే",
            "Deaf మరియు Hard of Hearing",
            "పైవేవీ కాదు"
        ],
        correct: 2,
        explanation: "RPWD Act-2016 ప్రకారం Hearing Impairment లో Deaf మరియు Hard of Hearing అనే రెండు వర్గాలు ఉంటాయి."
    },
    {
        question: "వినికిడి లోపం ఉన్న విద్యార్థి బోధనలో అత్యంత ముఖ్యమైనది",
        options: [
            "కూర్చునే స్థానం",
            "పుస్తకాల సంఖ్య",
            "హోంవర్క్",
            "పరీక్షల సంఖ్య"
        ],
        correct: 0,
        explanation: "ఉపాధ్యాయునికి దగ్గరగా మరియు స్పష్టంగా వినిపించే ప్రదేశంలో కూర్చోబెట్టడం సమర్థవంతమైన బోధనకు సహాయపడుతుంది."
    },
    {
        question: "She is good ___ Mathematics.",
        options: [
            "at",
            "in",
            "on",
            "for"
        ],
        correct: 0,
        explanation: "The adjective 'good' is commonly followed by the preposition 'at' when referring to skill or ability in a subject or activity."
    },
    {
        question: "The train arrived ___ time.",
        options: [
            "at",
            "in",
            "on",
            "by"
        ],
        correct: 2,
        explanation: "The expression 'on time' means arriving at the scheduled or expected time without delay."
    },
    {
        question: "We have lived here ___ 2018.",
        options: [
            "for",
            "since",
            "from",
            "during"
        ],
        correct: 1,
        explanation: "'Since' is used with a specific point of time in the past. Here, 2018 is the starting point."
    },
    {
        question: "Neither of the boys ___ present today.",
        options: [
            "are",
            "were",
            "is",
            "have"
        ],
        correct: 2,
        explanation: "'Neither' is treated as singular. Therefore, it takes a singular verb, which is 'is'."
    },
    {
        question: "Each of the students ___ a notebook.",
        options: [
            "have",
            "has",
            "are having",
            "were having"
        ],
        correct: 1,
        explanation: "'Each' is a singular subject and always takes a singular verb. Hence 'has' is correct."
    },
    {
        question: "The quality of the books ___ excellent.",
        options: [
            "are",
            "were",
            "is",
            "have"
        ],
        correct: 2,
        explanation: "The subject is 'quality', which is singular. Therefore the singular verb 'is' must be used."
    },
    {
        question: "One of the teachers ___ absent.",
        options: [
            "are",
            "were",
            "is",
            "have"
        ],
        correct: 2,
        explanation: "The phrase 'one of' takes a singular verb because the subject is 'one', not 'teachers'."
    },
    {
        question: "The players, along with the captain, ___ ready.",
        options: [
            "is",
            "are",
            "was",
            "be"
        ],
        correct: 1,
        explanation: "The main subject is 'players', which is plural. Phrases like 'along with' do not affect subject-verb agreement."
    },
    {
        question: "He insisted ___ paying the bill.",
        options: [
            "in",
            "at",
            "on",
            "for"
        ],
        correct: 2,
        explanation: "The verb 'insist' is followed by the preposition 'on' when referring to strongly demanding something."
    },
    {
        question: "Either Ram or his friends ___ responsible.",
        options: [
            "is",
            "was",
            "are",
            "has"
        ],
        correct: 2,
        explanation: "With 'either...or', the verb agrees with the subject nearest to it. Here 'friends' is plural, so 'are' is correct."
    }
];