const SUBJECTS = [
    "CDP",
    "Telugu",
    "English",
    "Special Education"
];

const QUESTIONS = [
    {
        "question": "కింది వారిలో నిర్మాణవాద (Constructivism) సిద్ధాంతాన్ని ప్రధానంగా ప్రతిపాదించినవారు ఎవరు?",
        "options": ["స్కిన్నర్", "వైగోట్స్కీ", "థార్న్‌డైక్", "పావ్‌లోవ్"],
        "correct": 1,
        "explanation": "వైగోట్స్కీ సామాజిక పరస్పర చర్యల ద్వారా అభ్యాసం జరుగుతుందని నిర్మాణవాద సిద్ధాంతాన్ని అభివృద్ధి చేశాడు. ఇతరులు వేర్వేరు అభ్యాస సిద్ధాంతాలను ప్రతిపాదించారు."
    },
    {
        "question": "పియాజే ప్రకారం 'సంరక్షణ (Conservation)' భావన మొదట అభివృద్ధి చెందే దశ ఏది?",
        "options": ["సెన్సరీ-మోటార్ దశ", "పూర్వ కార్యాచరణ దశ", "కాంక్రీట్ కార్యాచరణ దశ", "ఫార్మల్ కార్యాచరణ దశ"],
        "correct": 2,
        "explanation": "కాంక్రీట్ కార్యాచరణ దశలో పిల్లలు పరిమాణం, బరువు వంటి సంరక్షణ భావనలను అర్థం చేసుకుంటారు. అంతకుముందు దశల్లో ఈ సామర్థ్యం పూర్తిగా ఉండదు."
    },
    {
        "question": "ప్రేరణ అవసరాల సోపానక్రమ సిద్ధాంతాన్ని ప్రతిపాదించిన మనోవిజ్ఞాన శాస్త్రవేత్త ఎవరు?",
        "options": ["కోహ్లర్", "మాస్లో", "బండూరా", "బ్రూనర్"],
        "correct": 1,
        "explanation": "మాస్లో అవసరాలను సోపానక్రమంగా వివరించి ప్రేరణ సిద్ధాంతాన్ని ప్రతిపాదించాడు. ఇతరులు వేర్వేరు రంగాలకు చెందిన సిద్ధాంతాలను ప్రతిపాదించారు."
    },
    {
        "question": "బండూరా సిద్ధాంతంలో అభ్యాసానికి ప్రధాన ఆధారం ఏమిటి?",
        "options": ["శిక్ష", "పరిశీలన ద్వారా అభ్యాసం", "పునరావృత సాధన", "పరిణతి"],
        "correct": 1,
        "explanation": "బండూరా ప్రకారం ఇతరులను గమనించి అనుకరించడం ద్వారా అభ్యాసం జరుగుతుంది. దీనినే పరిశీలన ద్వారా అభ్యాసం అంటారు."
    },
    {
        "question": "ప్రయత్నం-పొరపాటు (Trial and Error) అభ్యాస సిద్ధాంతాన్ని ప్రతిపాదించినవారు ఎవరు?",
        "options": ["థార్న్‌డైక్", "పియాజే", "వైగోట్స్కీ", "స్కిన్నర్"],
        "correct": 0,
        "explanation": "థార్న్‌డైక్ ప్రయత్నం-పొరపాటు ద్వారా అభ్యాసం జరుగుతుందని ప్రతిపాదించాడు. ఇది AP TETలో తరచుగా అడిగే అంశం."
    },
    {
        "question": "వ్యక్తిగత విద్యా ప్రణాళిక (IEP) యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        "options": ["అందరికీ ఒకే బోధనా ప్రణాళిక", "ప్రతి విద్యార్థికి వ్యక్తిగత అవసరాలకు అనుగుణమైన ప్రణాళిక", "పరీక్షల షెడ్యూల్ తయారు చేయడం", "పాఠ్యపుస్తకాలు ఎంపిక చేయడం"],
        "correct": 1,
        "explanation": "IEP ప్రతి ప్రత్యేక అవసరాలున్న విద్యార్థి బలాలు, అవసరాలు, లక్ష్యాలను ఆధారంగా రూపొందించే వ్యక్తిగత బోధనా ప్రణాళిక."
    },
    {
        "question": "క్రింది వారిలో అంతర్దృష్టి (Insight) ద్వారా అభ్యాసాన్ని వివరించినవారు ఎవరు?",
        "options": ["కోహ్లర్", "థార్న్‌డైక్", "స్కిన్నర్", "పావ్‌లోవ్"],
        "correct": 0,
        "explanation": "కోహ్లర్ చింపాంజీలపై చేసిన ప్రయోగాల ద్వారా అంతర్దృష్టి అభ్యాసాన్ని వివరించాడు. ఇది గెస్టాల్ట్ మనోవిజ్ఞానానికి చెందినది."
    },
    {
        "question": "పిల్లల అభివృద్ధిలో 'తల నుండి కాళ్ల దిశగా' జరిగే అభివృద్ధిని ఏమంటారు?",
        "options": ["ప్రోక్సిమో-డిస్టల్ అభివృద్ధి", "సెఫాలో-కౌడల్ అభివృద్ధి", "సామాజిక అభివృద్ధి", "భాషా అభివృద్ధి"],
        "correct": 1,
        "explanation": "తల నుండి కాళ్ల వరకు జరిగే అభివృద్ధిని సెఫాలో-కౌడల్ అభివృద్ధి అంటారు. ఇది అభివృద్ధి సూత్రాలలో ఒకటి."
    },
    {
        "question": "సమగ్ర విద్య (Inclusive Education) యొక్క ప్రధాన లక్ష్యం ఏమిటి?",
        "options": ["ప్రత్యేక పాఠశాలల సంఖ్య పెంచడం", "అందరు విద్యార్థులు కలిసి నేర్చుకునే వాతావరణం కల్పించడం", "ప్రత్యేక అవసరాలున్న విద్యార్థులను వేరు చేయడం", "ప్రత్యేక పరీక్షలు నిర్వహించడం"],
        "correct": 1,
        "explanation": "సమగ్ర విద్యలో అన్ని విద్యార్థులు ఒకే విద్యా వాతావరణంలో సమాన అవకాశాలతో నేర్చుకోవడం ప్రధాన లక్ష్యం."
    },
    {
        "question": "హోవర్డ్ గార్డ్నర్ ప్రతిపాదించిన సిద్ధాంతం ఏది?",
        "options": ["ప్రేరణ సిద్ధాంతం", "బహుళ మేధస్సుల సిద్ధాంతం", "సాంప్రదాయ ప్రతిస్పందన సిద్ధాంతం", "పరిణతి సిద్ధాంతం"],
        "correct": 1,
        "explanation": "గార్డ్నర్ బహుళ మేధస్సుల సిద్ధాంతాన్ని ప్రతిపాదించాడు. ప్రతి వ్యక్తిలో వివిధ రకాల మేధస్సులు ఉంటాయని వివరించాడు."
    },
    {
        "question": "కంప్యూటర్‌లో అన్ని కార్యక్రమాలను నియంత్రించి నిర్వహించే ప్రధాన సాఫ్ట్‌వేర్ ఏది?",
        "options": ["ఆపరేటింగ్ సిస్టమ్", "వర్డ్ ప్రాసెసర్", "స్ప్రెడ్‌షీట్", "ప్రెజెంటేషన్ సాఫ్ట్‌వేర్"],
        "correct": 0,
        "explanation": "ఆపరేటింగ్ సిస్టమ్ కంప్యూటర్ హార్డ్‌వేర్, సాఫ్ట్‌వేర్ వనరులను నిర్వహించి అన్ని కార్యక్రమాలను నియంత్రిస్తుంది."
    },
    {
        "question": "క్రింది వాటిలో ఇన్‌పుట్ పరికరం ఏది?",
        "options": ["మానిటర్", "ప్రింటర్", "కీబోర్డ్", "స్పీకర్"],
        "correct": 2,
        "explanation": "కీబోర్డ్ ద్వారా వినియోగదారు కంప్యూటర్‌కు సమాచారాన్ని అందిస్తాడు. మిగిలినవి అవుట్‌పుట్ పరికరాలు."
    },
    {
        "question": "దృష్టి లోపం ఉన్నవారు కంప్యూటర్‌ను ఉపయోగించేందుకు ఎక్కువగా ఉపయోగించే సాఫ్ట్‌వేర్ ఏది?",
        "options": ["ఎంఎస్ వర్డ్", "జాస్ (JAWS)", "పవర్‌పాయింట్", "పెయింట్"],
        "correct": 1,
        "explanation": "జాస్ (JAWS) ఒక స్క్రీన్ రీడర్. ఇది దృష్టి లోపం ఉన్నవారు కంప్యూటర్‌ను వినియోగించేందుకు సహాయపడుతుంది."
    },
    {
        "question": "క్రింది వాటిలో క్లౌడ్ నిల్వ (Cloud Storage) సేవ ఏది?",
        "options": ["గూగుల్ డ్రైవ్", "మానిటర్", "స్కానర్", "యూపీఎస్"],
        "correct": 0,
        "explanation": "గూగుల్ డ్రైవ్ ఇంటర్నెట్ ఆధారిత క్లౌడ్ నిల్వ సేవ. దీనిలో ఫైళ్లను భద్రపరచి పంచుకోవచ్చు."
    },
    {
        "question": "ఇంటర్నెట్‌లో వెబ్ పేజీలను వీక్షించడానికి ఉపయోగించే సాఫ్ట్‌వేర్‌ను ఏమంటారు?",
        "options": ["వెబ్ బ్రౌజర్", "కంపైలర్", "డేటాబేస్", "యాంటీవైరస్"],
        "correct": 0,
        "explanation": "వెబ్ బ్రౌజర్ ద్వారా వెబ్‌సైట్లు మరియు వెబ్ పేజీలను యాక్సెస్ చేసి చూడవచ్చు. ఉదాహరణకు క్రోమ్, ఫైర్‌ఫాక్స్."
    },
    {
        "question": "ఎరిక్సన్ మానసిక-సామాజిక అభివృద్ధి సిద్ధాంతం ప్రకారం యుక్తవయస్సులో ప్రధాన సంఘర్షణ ఏది?",
        "options": [
            "విశ్వాసం వర్సెస్ అవిశ్వాసం",
            "స్వతంత్రత వర్సెస్ సిగ్గు",
            "గుర్తింపు వర్సెస్ పాత్ర గందరగోళం",
            "సృజనాత్మకత వర్సెస్ అపరాధ భావన"
        ],
        "correct": 2,
        "explanation": "ఎరిక్సన్ ప్రకారం యుక్తవయస్సులో వ్యక్తి తన గుర్తింపును ఏర్పరచుకునే దశ. ఈ దశలో గుర్తింపు వర్సెస్ పాత్ర గందరగోళం ప్రధాన సంఘర్షణ."
    },
    {
        "question": "సమీప వికాస మండలం (Zone of Proximal Development - ZPD) అనే భావనను ప్రతిపాదించిన మనోవిజ్ఞాన శాస్త్రవేత్త ఎవరు?",
        "options": [
            "పియాజే",
            "వైగోట్స్కీ",
            "బ్రూనర్",
            "స్కిన్నర్"
        ],
        "correct": 1,
        "explanation": "సమీప వికాస మండలం భావనను వైగోట్స్కీ ప్రతిపాదించాడు. పెద్దల లేదా సహచరుల సహాయంతో సాధ్యమయ్యే అభ్యాసాన్ని ఇది వివరిస్తుంది."
    },
    {
        "question": "సానుకూల పునర్బలనం (Positive Reinforcement) అనే భావన ప్రధానంగా ఏ సిద్ధాంతానికి చెందినది?",
        "options": [
            "ఆపరెంట్ కండిషనింగ్",
            "సాంప్రదాయ ప్రతిస్పందన",
            "అంతర్దృష్టి అభ్యాసం",
            "నిర్మాణవాదం"
        ],
        "correct": 0,
        "explanation": "స్కిన్నర్ ప్రతిపాదించిన ఆపరెంట్ కండిషనింగ్‌లో సానుకూల పునర్బలనం ద్వారా కావలసిన ప్రవర్తన పెరుగుతుంది."
    },
    {
        "question": "స్టెర్న్‌బర్గ్ త్రికోణ మేధస్సు సిద్ధాంతంలో లేని మేధస్సు ఏది?",
        "options": [
            "విశ్లేషణాత్మక మేధస్సు",
            "సృజనాత్మక మేధస్సు",
            "ప్రాయోగిక మేధస్సు",
            "భాషా మేధస్సు"
        ],
        "correct": 3,
        "explanation": "స్టెర్న్‌బర్గ్ సిద్ధాంతంలో విశ్లేషణాత్మక, సృజనాత్మక, ప్రాయోగిక మేధస్సులు ఉంటాయి. భాషా మేధస్సు గార్డ్నర్ సిద్ధాంతానికి చెందినది."
    },
    {
        "question": "తరగతి గదిలో విద్యార్థుల వ్యక్తిగత భేదాలను గౌరవించే ఉపాధ్యాయుడు ప్రధానంగా ఏ సూత్రాన్ని అనుసరిస్తున్నాడు?",
        "options": [
            "శిక్షా సూత్రం",
            "వ్యక్తిగత భేదాల సూత్రం",
            "పరీక్షా సూత్రం",
            "పునరావృత సూత్రం"
        ],
        "correct": 1,
        "explanation": "ప్రతి విద్యార్థి సామర్థ్యాలు, ఆసక్తులు, అభ్యాస వేగం భిన్నంగా ఉంటాయని గుర్తించి బోధించడం వ్యక్తిగత భేదాల సూత్రం."
    },
    {
        "question": "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న పిల్లలలో సాధారణంగా కనిపించే లక్షణం ఏది?",
        "options": [
            "ఎత్తు వేగంగా పెరగడం",
            "సామాజిక పరస్పర చర్యలో ఇబ్బందులు",
            "చూపు పూర్తిగా కోల్పోవడం",
            "వినికిడి పూర్తిగా కోల్పోవడం"
        ],
        "correct": 1,
        "explanation": "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ ఉన్న పిల్లలలో సామాజిక పరస్పర చర్య, సంభాషణ మరియు పునరావృత ప్రవర్తనలు సాధారణంగా కనిపిస్తాయి."
    },
    {
        "question": "మూల్యాంకనం యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        "options": [
            "విద్యార్థులను శిక్షించడం",
            "కేవలం మార్కులు ఇవ్వడం",
            "అభ్యాస పురోగతిని తెలుసుకొని బోధనను మెరుగుపరచడం",
            "హాజరు నమోదు చేయడం"
        ],
        "correct": 2,
        "explanation": "మూల్యాంకనం ద్వారా విద్యార్థుల అభ్యాస స్థాయిని తెలుసుకొని బోధనా విధానాన్ని అవసరానికి అనుగుణంగా మార్చుకోవచ్చు."
    },
    {
        "question": "క్రింది వాటిలో నిల్వ (Storage) పరికరం ఏది?",
        "options": [
            "మౌస్",
            "హార్డ్ డిస్క్",
            "మానిటర్",
            "స్పీకర్"
        ],
        "correct": 1,
        "explanation": "హార్డ్ డిస్క్ శాశ్వతంగా సమాచారాన్ని నిల్వ చేసే నిల్వ పరికరం. మిగిలినవి ఇన్‌పుట్ లేదా అవుట్‌పుట్ పరికరాలు."
    },
    {
        "question": "CPU యొక్క పూర్తి రూపం ఏమిటి?",
        "options": [
            "Central Processing Unit",
            "Central Program Unit",
            "Computer Processing Unit",
            "Central Peripheral Unit"
        ],
        "correct": 0,
        "explanation": "CPU అంటే Central Processing Unit. ఇది కంప్యూటర్‌లోని అన్ని సూచనలను అమలు చేసే ప్రధాన భాగం."
    },
    {
        "question": "క్రింది వాటిలో అవుట్‌పుట్ పరికరం ఏది?",
        "options": [
            "స్కానర్",
            "మౌస్",
            "ప్రింటర్",
            "కీబోర్డ్"
        ],
        "correct": 2,
        "explanation": "ప్రింటర్ కంప్యూటర్‌లోని సమాచారాన్ని కాగితంపై ముద్రించే అవుట్‌పుట్ పరికరం."
    },
    {
        "question": "విద్యార్థుల అభ్యాసాన్ని మెరుగుపరచడానికి డిజిటల్ పాఠ్యవనరులను ఉపయోగించే విధానాన్ని ఏమంటారు?",
        "options": [
            "ఈ-లెర్నింగ్",
            "ఈ-కామర్స్",
            "ఈ-బ్యాంకింగ్",
            "ఈ-మెయిల్"
        ],
        "correct": 0,
        "explanation": "ఈ-లెర్నింగ్‌లో డిజిటల్ వనరులు, ఆన్‌లైన్ వేదికలు మరియు సాంకేతికతను ఉపయోగించి బోధన-అభ్యాసం నిర్వహిస్తారు."
    },
    {
        "question": "కంప్యూటర్‌లో తాత్కాలికంగా సమాచారాన్ని నిల్వ చేసే మెమరీ ఏది?",
        "options": [
            "ROM",
            "RAM",
            "హార్డ్ డిస్క్",
            "పెన్ డ్రైవ్"
        ],
        "correct": 1,
        "explanation": "RAM తాత్కాలిక మెమరీ. కంప్యూటర్ పనిచేస్తున్న సమయంలో మాత్రమే డేటాను నిల్వ ఉంచుతుంది."
    },
    {
        "question": "ఇ-మెయిల్ చిరునామాలో '@' గుర్తు ఏమిని సూచిస్తుంది?",
        "options": [
            "వద్ద (at)",
            "శాతం",
            "మరియు",
            "విభజన"
        ],
        "correct": 0,
        "explanation": "'@' గుర్తు 'at' ను సూచిస్తుంది. ఇది వినియోగదారు పేరు మరియు డొమైన్ పేరును వేరు చేస్తుంది."
    },
    {
        "question": "క్రింది వాటిలో శోధన యంత్రం (Search Engine) ఏది?",
        "options": [
            "గూగుల్",
            "ఎంఎస్ వర్డ్",
            "విండోస్",
            "ఎక్సెల్"
        ],
        "correct": 0,
        "explanation": "గూగుల్ ఒక శోధన యంత్రం. ఇది ఇంటర్నెట్‌లో సమాచారాన్ని వెతకడానికి ఉపయోగించబడుతుంది."
    },
    {
        "question": "క్రింది వాటిలో కంప్యూటర్ వైరస్‌ల నుండి రక్షణ కల్పించే సాఫ్ట్‌వేర్ ఏది?",
        "options": [
            "యాంటీవైరస్",
            "వెబ్ బ్రౌజర్",
            "ప్రెజెంటేషన్ సాఫ్ట్‌వేర్",
            "స్ప్రెడ్‌షీట్"
        ],
        "correct": 0,
        "explanation": "యాంటీవైరస్ సాఫ్ట్‌వేర్ కంప్యూటర్‌ను వైరస్‌లు మరియు ఇతర హానికరమైన ప్రోగ్రామ్‌ల నుండి రక్షిస్తుంది."
    },
    {
        "question": "క్రింది వాటిలో 'సంధి'కి సరైన నిర్వచనం ఏది?",
        "options": [
            "రెండు పదాలు కలసి కొత్త పదం ఏర్పడటం",
            "రెండు అక్షరాలు కలిసినప్పుడు ధ్వనిలో మార్పు కలగడం",
            "ఒక పదానికి విభక్తి చేరడం",
            "ఒక పదానికి ప్రత్యయం చేరడం"
        ],
        "correct": 1,
        "explanation": "రెండు అక్షరాలు కలిసినప్పుడు ధ్వనిలో వచ్చే మార్పును సంధి అంటారు. పదాల కలయికను సమాసంతో గందరగోళం చేయకూడదు."
    },
    {
        "question": "క్రింది వాటిలో 'తత్సమ' పదం ఏది?",
        "options": [
            "పువ్వు",
            "విద్య",
            "ఇల్లు",
            "చెట్టు"
        ],
        "correct": 1,
        "explanation": "సంస్కృత భాష నుండి రూపం మారకుండా వచ్చిన పదాన్ని తత్సమ పదం అంటారు. 'విద్య' తత్సమ పదం."
    },
    {
        "question": "క్రింది వాటిలో సరైన పర్యాయపద జంట ఏది?",
        "options": [
            "అగ్ని – వహ్ని",
            "చంద్రుడు – సూర్యుడు",
            "భూమి – ఆకాశం",
            "నీరు – నిప్పు"
        ],
        "correct": 0,
        "explanation": "'అగ్ని' మరియు 'వహ్ని' ఒకే అర్థాన్ని సూచించే పర్యాయపదాలు. మిగిలిన జంటలు భిన్నార్థకాలు."
    },
    {
        "question": "క్రింది వాటిలో విరుద్ధార్థక పదాల జంట ఏది?",
        "options": [
            "లాభం – నష్టం",
            "వనం – అడవి",
            "మిత్రుడు – స్నేహితుడు",
            "గృహం – ఇల్లు"
        ],
        "correct": 0,
        "explanation": "'లాభం'కు విరుద్ధార్థం 'నష్టం'. మిగిలినవి సమానార్థక పదాలు."
    },
    {
        "question": "క్రింది వాటిలో ద్వంద్వ సమాసానికి ఉదాహరణ ఏది?",
        "options": [
            "తల్లిదండ్రులు",
            "రాజభవనం",
            "నీలాకాశం",
            "దుర్మార్గుడు"
        ],
        "correct": 0,
        "explanation": "'తల్లిదండ్రులు'లో రెండు పదాలకు సమాన ప్రాధాన్యం ఉంటుంది. అందువల్ల ఇది ద్వంద్వ సమాసం."
    },
    {
        "question": "క్రింది వాటిలో సరైన జాతీయము ఏది?",
        "options": [
            "కన్నులో పెట్టుకొని చూడటం",
            "ఆకాశం తినడం",
            "నీటిని కాల్చడం",
            "గాలిని పట్టుకోవడం"
        ],
        "correct": 0,
        "explanation": "'కన్నులో పెట్టుకొని చూడటం' అనే జాతీయం అత్యంత ప్రేమగా చూసుకోవడం అనే అర్థాన్ని ఇస్తుంది."
    },
    {
        "question": "తెలుగు వర్ణమాలలో అచ్చుల సంఖ్య ఎంత?",
        "options": [
            "14",
            "16",
            "18",
            "20"
        ],
        "correct": 1,
        "explanation": "తెలుగు వర్ణమాలలో మొత్తం 16 అచ్చులు ఉన్నాయి. ఇది ప్రామాణిక తెలుగు వ్యాకరణ నియమం."
    },
    {
        "question": "క్రింది వాటిలో భావవాచక నామవాచకం ఏది?",
        "options": [
            "ధైర్యం",
            "పుస్తకం",
            "ఉపాధ్యాయుడు",
            "చెట్టు"
        ],
        "correct": 0,
        "explanation": "'ధైర్యం' ఒక భావాన్ని సూచిస్తుంది. అందువల్ల అది భావవాచక నామవాచకం."
    },
    {
        "question": "క్రింది వాటిలో సర్వనామం ఏది?",
        "options": [
            "అతడు",
            "బాలుడు",
            "పాఠశాల",
            "పుస్తకం"
        ],
        "correct": 0,
        "explanation": "'అతడు' నామవాచకానికి బదులుగా ఉపయోగించే పదం కాబట్టి అది సర్వనామం."
    },
    {
        "question": "క్రింది వాటిలో క్రియాపదం ఏది?",
        "options": [
            "చదువుతున్నాడు",
            "విద్యార్థి",
            "తెలివి",
            "పాఠశాల"
        ],
        "correct": 0,
        "explanation": "'చదువుతున్నాడు' ఒక చర్యను సూచించే క్రియాపదం. మిగిలినవి నామవాచకాలు."
    },
    {
        "question": "క్రింది వాటిలో సరైన లోకోక్తి ఏది?",
        "options": [
            "చెట్టు ఉన్నచోట నీడ ఉంటుంది",
            "నీరు మండుతుంది",
            "రాయి పూస్తుంది",
            "గాలి నడుస్తుంది"
        ],
        "correct": 0,
        "explanation": "'చెట్టు ఉన్నచోట నీడ ఉంటుంది' అనేది సాధారణ జీవిత సత్యాన్ని తెలియజేసే లోకోక్తి."
    },
    {
        "question": "క్రింది వాటిలో విశేషణం ఏది?",
        "options": [
            "అందమైన",
            "పుస్తకం",
            "పరుగెత్తాడు",
            "అతడు"
        ],
        "correct": 0,
        "explanation": "'అందమైన' అనే పదం నామవాచకాన్ని విశేషించే విశేషణం."
    },
    {
        "question": "క్రింది వాటిలో 'దేశభాషలందు తెలుగు లెస్స' అని చెప్పిన కవి ఎవరు?",
        "options": [
            "శ్రీకృష్ణదేవరాయలు",
            "నన్నయ",
            "తిక్కన",
            "వేమన"
        ],
        "correct": 0,
        "explanation": "'దేశభాషలందు తెలుగు లెస్స' అనే ప్రసిద్ధ వాక్యాన్ని శ్రీకృష్ణదేవరాయలు 'ఆముక్తమాల్యద'లో పేర్కొన్నారు."
    },
    {
        "question": "క్రింది వాటిలో 'ఆంధ్ర మహాభారతం'కు ఆదికవి ఎవరు?",
        "options": [
            "నన్నయ",
            "తిక్కన",
            "ఎర్రన",
            "పోతన"
        ],
        "correct": 0,
        "explanation": "నన్నయను తెలుగు ఆదికవిగా, ఆంధ్ర మహాభారత రచనను ప్రారంభించిన కవిగా గుర్తిస్తారు."
    },
    {
        "question": "బోధనలో పఠన నైపుణ్యాన్ని అభివృద్ధి చేయడానికి అత్యంత అనుకూలమైన పద్ధతి ఏది?",
        "options": [
            "అర్థగ్రహణ ప్రశ్నలు అడగడం",
            "కేవలం పదాలను కంఠస్థం చేయించడం",
            "కేవలం వ్యాకరణ నియమాలు చెప్పడం",
            "పదాలను మాత్రమే వ్రాయించడం"
        ],
        "correct": 0,
        "explanation": "పఠనానంతరం అర్థగ్రహణ ప్రశ్నలు అడగడం ద్వారా విద్యార్థి చదివిన విషయాన్ని అర్థం చేసుకున్నాడో లేదో తెలుసుకోవచ్చు."
    },
    {
        "question": "క్రింది వాటిలో కర్మధారయ సమాసానికి ఉదాహరణ ఏది?",
        "options": [
            "నీలాకాశం",
            "తల్లిదండ్రులు",
            "రాజపుత్రుడు",
            "దశాననుడు"
        ],
        "correct": 0,
        "explanation": "విశేషణం మరియు విశేష్యం కలిసిన సమాసాన్ని కర్మధారయ సమాసం అంటారు. 'నీలాకాశం'లో 'నీలం' విశేషణం, 'ఆకాశం' విశేష్యం."
    },
    {
        "question": "క్రింది వాటిలో 'యణాదేశ సంధి'కి ఉదాహరణ ఏది?",
        "options": [
            "గుర్వాజ్ఞ",
            "లోకైక",
            "రామాలయం",
            "దేవేంద్రుడు"
        ],
        "correct": 0,
        "explanation": "'గురు + ఆజ్ఞ → గుర్వాజ్ఞ' యణాదేశ సంధికి ఉదాహరణ. ఇందులో 'ఉ' స్థానంలో 'వ్' ఆదేశం వస్తుంది."
    },
    {
        "question": "క్రింది వాటిలో సరైన అపదాన కారకానికి ఉదాహరణ ఏది?",
        "options": [
            "చెట్టు నుండి పండు పడింది",
            "రాము పుస్తకం చదివాడు",
            "ఆమె పాట పాడింది",
            "విద్యార్థి పాఠశాలకు వెళ్లాడు"
        ],
        "correct": 0,
        "explanation": "'నుండి' అనే విభక్తి వేరుపడడాన్ని సూచిస్తుంది. అందువల్ల ఇది అపదాన కారకానికి ఉదాహరణ."
    },
    {
        "question": "క్రింది వాటిలో 'అవ్యయం' ఏది?",
        "options": [
            "ఎల్లప్పుడూ",
            "పుస్తకం",
            "అందమైన",
            "విద్యార్థి"
        ],
        "correct": 0,
        "explanation": "రూపం మారకుండా ఉండే పదాలను అవ్యయాలు అంటారు. 'ఎల్లప్పుడూ' ఒక అవ్యయం."
    },
    {
        "question": "క్రింది వాటిలో శుద్ధ పదం ఏది?",
        "options": [
            "ఔషధం",
            "ఔశధం",
            "అవుషధం",
            "ఔసధం"
        ],
        "correct": 0,
        "explanation": "'ఔషధం' సరైన రూపం. మిగిలినవి అక్షరదోషాలతో కూడిన పదాలు."
    },
    {
        "question": "క్రింది వాటిలో 'పలుకుబడి' అనే పదానికి సరైన అర్థం ఏది?",
        "options": [
            "ప్రభావం",
            "మాట్లాడటం",
            "వివాదం",
            "శబ్దం"
        ],
        "correct": 0,
        "explanation": "'పలుకుబడి' అంటే ఇతరులపై ప్రభావం లేదా గౌరవం కలిగి ఉండడం."
    },
    {
        "question": "క్రింది వాటిలో సరైన సామెత ఏది?",
        "options": [
            "అరచేతిలో వైకుంఠం",
            "ఆకాశంలో చేపలు",
            "నీటిలో నిప్పు",
            "గాలిలో ఇల్లు"
        ],
        "correct": 0,
        "explanation": "'అరచేతిలో వైకుంఠం' అనే సామెత సులభంగా సాధ్యమయ్యే విషయాన్ని సూచించదు; అసాధ్యాన్ని ఆశించడం అనే భావాన్ని వ్యక్తపరుస్తుంది."
    },
    {
        "question": "క్రింది వాటిలో క్రియావిశేషణం ఏది?",
        "options": [
            "వేగంగా",
            "వేగం",
            "వేగవంతమైన",
            "విద్యార్థి"
        ],
        "correct": 0,
        "explanation": "'వేగంగా' అనే పదం క్రియను విశేషిస్తుంది. కాబట్టి ఇది క్రియావిశేషణం."
    },
    {
        "question": "తెలుగు భాషలో 'గిడుగు వెంకట రామమూర్తి' ప్రధానంగా దేనికి కృషి చేశారు?",
        "options": [
            "వ్యావహారిక భాషా ఉద్యమం",
            "వ్యాకరణ రచన",
            "పురాణ రచన",
            "నాటక రచన"
        ],
        "correct": 0,
        "explanation": "గిడుగు వెంకట రామమూర్తి వ్యావహారిక తెలుగు భాషా ఉద్యమానికి విశేష కృషి చేశారు."
    },
    {
        "question": "క్రింది వాటిలో 'భాగవతం'ను తెలుగులో రచించిన కవి ఎవరు?",
        "options": [
            "పోతన",
            "నన్నయ",
            "తిక్కన",
            "శ్రీనాథుడు"
        ],
        "correct": 0,
        "explanation": "బమ్మెర పోతన శ్రీమద్భాగవతాన్ని తెలుగులో అనువదించి తెలుగు సాహిత్యంలో చిరస్థాయిగా నిలిచారు."
    },
    {
        "question": "భాషా బోధనలో వినికిడి నైపుణ్యాన్ని అభివృద్ధి చేయడానికి అత్యంత అనుకూలమైన కార్యకలాపం ఏది?",
        "options": [
            "కథ విని ప్రశ్నలకు సమాధానాలు చెప్పడం",
            "వ్యాసం వ్రాయడం",
            "పదాలను కంఠస్థం చేయడం",
            "వ్యాకరణ నియమాలు వ్రాయడం"
        ],
        "correct": 0,
        "explanation": "వినికిడి అనంతరం ప్రశ్నలకు సమాధానాలు చెప్పించడం ద్వారా వినికిడి నైపుణ్యాన్ని సమర్థంగా అంచనా వేయవచ్చు."
    },
    {
        "question": "క్రింది వాటిలో పఠనానంతర కార్యకలాపం ఏది?",
        "options": [
            "పాఠ్యాంశంపై ప్రశ్నలకు సమాధానాలు చెప్పడం",
            "శీర్షికను చూడడం",
            "కొత్త పదాలను పరిచయం చేయడం",
            "చిత్రాన్ని పరిశీలించడం"
        ],
        "correct": 0,
        "explanation": "పాఠం చదివిన తర్వాత అర్థగ్రహణాన్ని పరిశీలించేందుకు ప్రశ్నలకు సమాధానాలు చెప్పించడం పఠనానంతర కార్యకలాపం."
    },
    {
        "question": "క్రింది వాటిలో భాషా బోధనలో నిర్మాణాత్మక మూల్యాంకనం (Formative Assessment) యొక్క ముఖ్య ఉద్దేశ్యం ఏది?",
        "options": [
            "అభ్యాస పురోగతిని నిరంతరం పరిశీలించడం",
            "సంవత్సరాంత మార్కులు నిర్ణయించడం",
            "ర్యాంకులు ఇవ్వడం",
            "ప్రమోషన్ నిర్ణయించడం"
        ],
        "correct": 0,
        "explanation": "నిర్మాణాత్మక మూల్యాంకనం బోధన జరుగుతున్న సమయంలో అభ్యాస పురోగతిని గుర్తించి అవసరమైన మెరుగుదలలు చేయడానికి ఉపయోగపడుతుంది."
    },
    {
        "question": "క్రింది వాటిలో తెలుగు భాషలో ప్రథమ విభక్తి ఏది?",
        "options": [
            "డు/ము/వు",
            "ను",
            "తో",
            "కు"
        ],
        "correct": 0,
        "explanation": "ప్రథమ విభక్తి కర్తను సూచిస్తుంది. తెలుగు వ్యాకరణంలో 'డు, ము, వు' వంటి రూపాలు ప్రథమ విభక్తికి చెందినవి."
    },
    {
        "question": "భాషా బోధనలో విద్యార్థుల మాట్లాడే నైపుణ్యాన్ని పెంపొందించడానికి అత్యంత అనుకూలమైన పద్ధతి ఏది?",
        "options": [
            "సమూహ చర్చ",
            "నిశ్శబ్ద పఠనం",
            "నకలు వ్రాయించడం",
            "వ్యాకరణ నియమాలు కంఠస్థం చేయించడం"
        ],
        "correct": 0,
        "explanation": "సమూహ చర్చ ద్వారా విద్యార్థులు భావాలను స్వేచ్ఛగా వ్యక్తీకరించే అవకాశం లభిస్తుంది. దీనివల్ల మాట్లాడే నైపుణ్యం మెరుగుపడుతుంది."
    },
    {
        "question": "Choose the correct article.\nShe is ____ honest teacher.",
        "options": ["a", "an", "the", "no article"],
        "correct": 1,
        "explanation": "The word 'honest' begins with a silent 'h', so it takes the article 'an'. The other articles are grammatically incorrect."
    },
    {
        "question": "Choose the correct question tag.\nYou completed the assignment, ____?",
        "options": ["didn't you", "don't you", "haven't you", "aren't you"],
        "correct": 0,
        "explanation": "The sentence is in the simple past tense with 'completed', so the correct question tag is 'didn't you'."
    },
    {
        "question": "Choose the correct passive voice.\nThe students are writing the examination.",
        "options": [
            "The examination is written by the students.",
            "The examination is being written by the students.",
            "The examination was written by the students.",
            "The examination has been written by the students."
        ],
        "correct": 1,
        "explanation": "A present continuous active sentence changes to 'is/am/are being + past participle' in the passive voice."
    },
    {
        "question": "Choose the correct phrasal verb.\nThe meeting was ____ because of heavy rain.",
        "options": ["put off", "put on", "put away", "put up"],
        "correct": 0,
        "explanation": "'Put off' means postponed. The other phrasal verbs have different meanings."
    },
    {
        "question": "Choose the correct form of the verb.\nNeither Ravi nor his friends ____ present.",
        "options": ["is", "was", "are", "has"],
        "correct": 2,
        "explanation": "With 'Neither...nor', the verb agrees with the subject nearest to it. 'Friends' is plural, so 'are' is correct."
    },
    {
        "question": "Choose the correct preposition.\nThe teacher divided the sweets ____ the children.",
        "options": ["between", "among", "with", "into"],
        "correct": 1,
        "explanation": "'Among' is used when something is distributed to more than two people. 'Between' is generally used for two."
    },
    {
        "question": "Choose the correctly punctuated sentence.",
        "options": [
            "What a beautiful flower!",
            "What a beautiful flower.",
            "What a beautiful flower?",
            "What, a beautiful flower!"
        ],
        "correct": 0,
        "explanation": "An exclamatory sentence expressing strong feeling ends with an exclamation mark."
    },
    {
        "question": "Choose the correctly spelt word.",
        "options": [
            "Accomodation",
            "Accommodation",
            "Acommodation",
            "Accommadation"
        ],
        "correct": 1,
        "explanation": "'Accommodation' is the correct spelling. The other options contain spelling errors."
    },
    {
        "question": "Choose the correct indirect speech.\nRavi said, \"I am tired.\"",
        "options": [
            "Ravi said that I am tired.",
            "Ravi said that he was tired.",
            "Ravi said that he is tired.",
            "Ravi said that I was tired."
        ],
        "correct": 1,
        "explanation": "In indirect speech, the pronoun changes according to the speaker and the present tense changes to the past tense."
    },
    {
        "question": "Choose the correct synonym of the word 'Ancient'.",
        "options": ["Modern", "Old", "Young", "Fresh"],
        "correct": 1,
        "explanation": "'Old' is the correct synonym of 'Ancient'. The remaining options have different meanings."
    },
    {
        "question": "Read the passage and answer the question.\n\nTrees give us oxygen, fruits and shade. They also help to keep the environment clean.\n\nWhy are trees important?",
        "options": [
            "They make the weather hot.",
            "They keep the environment clean.",
            "They increase pollution.",
            "They stop rainfall."
        ],
        "correct": 1,
        "explanation": "The passage clearly states that trees help keep the environment clean, making option B correct."
    },
    {
        "question": "Choose the correct meaning of the idiom.\n'A blessing in disguise' means:",
        "options": [
            "A hidden danger",
            "Something good that first seemed bad",
            "A lucky accident only",
            "A dishonest act"
        ],
        "correct": 1,
        "explanation": "The idiom means something that appears unfortunate at first but later proves beneficial."
    },
    {
        "question": "Choose the correct article.\n____ Ganga is considered sacred.",
        "options": ["A", "An", "The", "No article"],
        "correct": 2,
        "explanation": "Names of rivers take the definite article 'The'. Therefore, 'The Ganga' is correct."
    },
    {
        "question": "Choose the correct sentence.",
        "options": [
            "He don't like coffee.",
            "He doesn't likes coffee.",
            "He doesn't like coffee.",
            "He not like coffee."
        ],
        "correct": 2,
        "explanation": "With 'doesn't', the main verb remains in its base form. Hence, 'He doesn't like coffee' is correct."
    },
    {
        "question": "Choose the correct passive voice.\nPeople speak English all over the world.",
        "options": [
            "English was spoken all over the world.",
            "English is spoken all over the world.",
            "English has spoken all over the world.",
            "English speaks all over the world."
        ],
        "correct": 1,
        "explanation": "A simple present passive sentence uses 'is/am/are + past participle'. Therefore, 'English is spoken...' is correct."
    },
    {
        "question": "Choose the correct preposition.\nThe principal congratulated the students ____ their success.",
        "options": ["for", "on", "at", "with"],
        "correct": 1,
        "explanation": "The verb 'congratulate' is followed by the preposition 'on' when referring to an achievement or success."
    },
    {
        "question": "Choose the correct question tag.\nLet's start the class, ____?",
        "options": ["shall we", "will we", "don't we", "aren't we"],
        "correct": 0,
        "explanation": "Suggestions beginning with 'Let's' take the question tag 'shall we?'. The other tags are grammatically incorrect."
    },
    {
        "question": "Choose the correct indirect speech.\nThe teacher said, \"Work hard.\"",
        "options": [
            "The teacher advised us to work hard.",
            "The teacher said that work hard.",
            "The teacher told that work hard.",
            "The teacher says to work hard."
        ],
        "correct": 0,
        "explanation": "Imperative sentences in indirect speech are commonly changed using 'advised', 'ordered' or 'requested' with the infinitive."
    },
    {
        "question": "Choose the correct passive voice.\nThey have completed the project.",
        "options": [
            "The project has completed.",
            "The project has been completed.",
            "The project had been completed.",
            "The project is completed."
        ],
        "correct": 1,
        "explanation": "The passive form of the present perfect tense is 'has/have been + past participle'."
    },
    {
        "question": "Choose the correctly spelt word.",
        "options": [
            "Pronounciation",
            "Pronunciation",
            "Pronounciaton",
            "Pronunciaton"
        ],
        "correct": 1,
        "explanation": "'Pronunciation' is the correct spelling. The other options contain spelling mistakes."
    },
    {
        "question": "Choose the correct form of the verb.\nEach of the boys ____ a prize.",
        "options": ["have", "are", "has", "were"],
        "correct": 2,
        "explanation": "'Each' is treated as a singular subject. Therefore, it takes the singular verb 'has'."
    },
    {
        "question": "Choose the correct antonym of the word 'Generous'.",
        "options": ["Kind", "Selfish", "Helpful", "Honest"],
        "correct": 1,
        "explanation": "'Selfish' is the opposite of 'Generous'. The remaining words are not antonyms."
    },
    {
        "question": "Choose the correct phrasal verb.\nPlease ____ the lights before leaving the room.",
        "options": ["turn off", "turn into", "turn over", "turn up"],
        "correct": 0,
        "explanation": "'Turn off' means to switch off an electrical device. The other phrasal verbs have different meanings."
    },
    {
        "question": "Read the passage and answer the question.\n\nRita waters the plants every morning. She believes that plants need regular care to grow well.\n\nWhy does Rita water the plants every morning?",
        "options": [
            "To decorate her house",
            "Because plants need regular care",
            "To save water",
            "To clean the garden"
        ],
        "correct": 1,
        "explanation": "The passage clearly states that Rita waters the plants because she believes they need regular care to grow well."
    },
    {
        "question": "Choose the correct sentence.",
        "options": [
            "She is senior than me.",
            "She is senior to me.",
            "She is senior from me.",
            "She is senior over me."
        ],
        "correct": 1,
        "explanation": "The adjective 'senior' is correctly followed by the preposition 'to', not 'than'."
    },
    {
        "question": "Choose the correct punctuation.\n____ are you late?",
        "options": [
            "Why!",
            "Why.",
            "Why?",
            "Why,"
        ],
        "correct": 2,
        "explanation": "A direct question ends with a question mark. Therefore, 'Why?' is correctly punctuated."
    },
    {
        "question": "Choose the correct article.\nHe bought ____ umbrella yesterday.",
        "options": ["a", "an", "the", "no article"],
        "correct": 1,
        "explanation": "'Umbrella' begins with a vowel sound, so the correct indefinite article is 'an'."
    },
    {
        "question": "Choose the correct sentence.",
        "options": [
            "One of my friends are a doctor.",
            "One of my friends is a doctor.",
            "One of my friends were a doctor.",
            "One of my friends have a doctor."
        ],
        "correct": 1,
        "explanation": "'One' is the subject and is singular. Therefore, the singular verb 'is' must be used."
    },
    {
        "question": "Choose the correct reported speech.\nSita said, \"I have finished my homework.\"",
        "options": [
            "Sita said that she has finished her homework.",
            "Sita said that she had finished her homework.",
            "Sita said that I had finished my homework.",
            "Sita said that she finished her homework."
        ],
        "correct": 1,
        "explanation": "In reported speech, the present perfect tense changes to the past perfect when the reporting verb is in the past."
    },
    {
        "question": "Choose the correct reading strategy for finding a specific date in a timetable.",
        "options": [
            "Skimming",
            "Scanning",
            "Predicting",
            "Inferring"
        ],
        "correct": 1,
        "explanation": "Scanning is the reading strategy used to locate specific information such as names, dates, numbers, or facts quickly."
    },
    {
        "question": "భారతదేశంలో వికలాంగుల హక్కుల పరిరక్షణకు ప్రస్తుతం అమలులో ఉన్న చట్టం ఏది?",
        "options": [
            "పిల్లలకు ఉచిత మరియు నిర్బంధ విద్యా హక్కు చట్టం, 2009",
            "వికలాంగుల హక్కుల చట్టం (RPWD Act), 2016",
            "జాతీయ ట్రస్ట్ చట్టం, 1999",
            "పునరావాస మండలి చట్టం (RCI Act), 1992"
        ],
        "correct": 1,
        "explanation": "వికలాంగుల హక్కుల చట్టం (RPWD Act), 2016 భారతదేశంలో ప్రస్తుతం అమలులో ఉన్న ప్రధాన చట్టం. ఇది 21 రకాల వైకల్యాలను గుర్తిస్తుంది."
    },
    {
        "question": "జాతీయ ట్రస్ట్ చట్టం (National Trust Act) ఏ సంవత్సరంలో అమలులోకి వచ్చింది?",
        "options": [
            "1992",
            "1995",
            "1999",
            "2009"
        ],
        "correct": 2,
        "explanation": "జాతీయ ట్రస్ట్ చట్టం, 1999 ఆటిజం, సెరెబ్రల్ పాల్సీ, మేధో వైకల్యం మరియు బహుళ వైకల్యాలున్న వ్యక్తుల సంక్షేమం కోసం రూపొందించబడింది."
    },
    {
        "question": "వ్యక్తిగత విద్యా ప్రణాళిక (IEP) ప్రధానంగా ఎవరి కోసం రూపొందించబడుతుంది?",
        "options": [
            "మొత్తం తరగతి కోసం",
            "పాఠశాల ఉపాధ్యాయుల కోసం",
            "ప్రత్యేక అవసరాలున్న ఒక్కో విద్యార్థి కోసం",
            "తల్లిదండ్రుల కోసం మాత్రమే"
        ],
        "correct": 2,
        "explanation": "వ్యక్తిగత విద్యా ప్రణాళిక (IEP) ప్రతి ప్రత్యేక అవసరాలున్న విద్యార్థి సామర్థ్యాలు, అవసరాలు మరియు లక్ష్యాలను దృష్టిలో ఉంచుకొని రూపొందించబడుతుంది."
    },
    {
        "question": "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) యొక్క ప్రధాన లక్షణం ఏది?",
        "options": [
            "శారీరక ఎదుగుదల మందగించడం",
            "సామాజిక పరస్పర చర్య మరియు సంభాషణలో ఇబ్బందులు",
            "వినికిడి పూర్తిగా కోల్పోవడం",
            "దృష్టి పూర్తిగా కోల్పోవడం"
        ],
        "correct": 1,
        "explanation": "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న పిల్లల్లో సామాజిక పరస్పర చర్య, సంభాషణ మరియు పునరావృత ప్రవర్తనలు ప్రధాన లక్షణాలు."
    },
    {
        "question": "దృష్టి లోపం ఉన్న విద్యార్థులు కంప్యూటర్‌ను ఉపయోగించేందుకు సాధారణంగా ఉపయోగించే స్క్రీన్ రీడర్ ఏది?",
        "options": [
            "MS Word",
            "JAWS",
            "PowerPoint",
            "Excel"
        ],
        "correct": 1,
        "explanation": "JAWS ఒక స్క్రీన్ రీడర్ సాఫ్ట్‌వేర్. ఇది దృష్టి లోపం ఉన్న వ్యక్తులు కంప్యూటర్‌ను ఉపయోగించడానికి సహాయపడుతుంది."
    },
    {
        "question": "సమగ్ర విద్య (Inclusive Education) యొక్క ముఖ్య ఉద్దేశ్యం ఏమిటి?",
        "options": [
            "ప్రత్యేక పాఠశాలలను మాత్రమే ప్రోత్సహించడం",
            "అందరు విద్యార్థులు కలిసి నేర్చుకునే అవకాశాన్ని కల్పించడం",
            "ప్రత్యేక అవసరాలున్న విద్యార్థులను వేరు చేయడం",
            "ప్రత్యేక పరీక్షలు నిర్వహించడం"
        ],
        "correct": 1,
        "explanation": "సమగ్ర విద్య (Inclusive Education)లో అన్ని విద్యార్థులు ఒకే తరగతి గదిలో సమాన అవకాశాలతో కలిసి నేర్చుకునే విధానాన్ని ప్రోత్సహిస్తారు."
    },
    {
        "question": "మేధో వైకల్యం (Intellectual Disability) యొక్క ప్రధాన లక్షణం ఏది?",
        "options": [
            "కేవలం శారీరక వైకల్యం",
            "మేధో సామర్థ్యం మరియు అనుకూల ప్రవర్తనలో పరిమితులు",
            "కేవలం దృష్టి లోపం",
            "కేవలం వినికిడి లోపం"
        ],
        "correct": 1,
        "explanation": "మేధో వైకల్యంలో మేధో సామర్థ్యంతో పాటు అనుకూల ప్రవర్తనలో కూడా గణనీయమైన పరిమితులు ఉంటాయి."
    },
    {
        "question": "క్రింది వాటిలో అభ్యాస వైకల్యం (Learning Disability)కు ఉదాహరణ ఏది?",
        "options": [
            "డిస్లెక్సియా",
            "మోనోప్లేజియా",
            "క్యాటరాక్ట్",
            "పారాప్లేజియా"
        ],
        "correct": 0,
        "explanation": "డిస్లెక్సియా ఒక నిర్దిష్ట అభ్యాస వైకల్యం. ఇది ముఖ్యంగా చదవడంలో ఇబ్బందులను కలిగిస్తుంది."
    },
    {
        "question": "శ్రవణ లోపం ఉన్న విద్యార్థిని తరగతి గదిలో ఎక్కడ కూర్చోబెట్టడం ఉత్తమం?",
        "options": [
            "చివరి బెంచ్‌లో",
            "ఉపాధ్యాయునికి దగ్గరగా",
            "తలుపు దగ్గర",
            "కిటికీ దగ్గర"
        ],
        "correct": 1,
        "explanation": "ఉపాధ్యాయునికి దగ్గరగా కూర్చోబెడితే విద్యార్థి ముఖ కవళికలు, పెదవుల కదలికలు మరియు శబ్దాన్ని సులభంగా గమనించగలడు."
    },
    {
        "question": "క్రింది వాటిలో బహుళ వైకల్యం (Multiple Disabilities)కు సరైన ఉదాహరణ ఏది?",
        "options": [
            "కేవలం దృష్టి లోపం",
            "కేవలం వినికిడి లోపం",
            "ఒకే వ్యక్తిలో రెండు లేదా అంతకంటే ఎక్కువ వైకల్యాలు",
            "కేవలం మేధో వైకల్యం"
        ],
        "correct": 2,
        "explanation": "ఒకే వ్యక్తిలో రెండు లేదా అంతకంటే ఎక్కువ వైకల్యాలు కలిసి ఉన్నప్పుడు దానిని బహుళ వైకల్యం అంటారు."
    },
    {
        "question": "అటెన్షన్ డెఫిసిట్ హైపర్ యాక్టివిటీ డిజార్డర్ (ADHD) ఉన్న పిల్లలలో సాధారణంగా కనిపించే లక్షణం ఏది?",
        "options": [
            "అధిక ఏకాగ్రత",
            "ధ్యాస లోపం మరియు అతిచురుకుదనం",
            "దృష్టి కోల్పోవడం",
            "వినికిడి కోల్పోవడం"
        ],
        "correct": 1,
        "explanation": "ADHD ఉన్న పిల్లల్లో ధ్యాస లోపం, హఠాత్ ప్రవర్తన మరియు అతిచురుకుదనం ప్రధాన లక్షణాలుగా కనిపిస్తాయి."
    },
    {
        "question": "పునరావాస మండలి చట్టం (RCI Act) ఏ సంవత్సరంలో అమలులోకి వచ్చింది?",
        "options": [
            "1992",
            "1995",
            "1999",
            "2016"
        ],
        "correct": 0,
        "explanation": "పునరావాస మండలి చట్టం (RCI Act), 1992 ప్రత్యేక విద్య మరియు పునరావాస వృత్తి నిపుణుల ప్రమాణాలను నియంత్రిస్తుంది."
    },
    {
        "question": "డౌన్ సిండ్రోమ్ ప్రధానంగా దేనితో సంబంధం కలిగి ఉంటుంది?",
        "options": [
            "జన్యుపరమైన క్రోమోజోమ్ అసాధారణత",
            "వైరస్ సంక్రమణ",
            "పోషకాహార లోపం",
            "శ్రవణ లోపం"
        ],
        "correct": 0,
        "explanation": "డౌన్ సిండ్రోమ్ 21వ క్రోమోజోమ్ అదనంగా ఉండడం వల్ల ఏర్పడే జన్యుపరమైన పరిస్థితి."
    },
    {
        "question": "సమగ్ర విద్య (Inclusive Education)లో ఉపాధ్యాయుని ప్రధాన బాధ్యత ఏది?",
        "options": [
            "ప్రత్యేక అవసరాలున్న విద్యార్థులను వేరు చేయడం",
            "అందరి అవసరాలకు అనుగుణంగా బోధనను అనుసరించడం",
            "ప్రత్యేక విద్యార్థులకు పరీక్షలు నిర్వహించకపోవడం",
            "కేవలం ప్రతిభావంతులపై దృష్టి పెట్టడం"
        ],
        "correct": 1,
        "explanation": "సమగ్ర విద్యలో ఉపాధ్యాయుడు విద్యార్థుల వ్యక్తిగత అవసరాలకు అనుగుణంగా బోధనా విధానాలను మార్చాలి."
    },
    {
        "question": "ఎకోలాలియా (Echolalia) సాధారణంగా ఏ వైకల్యంలో ఎక్కువగా కనిపిస్తుంది?",
        "options": [
            "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD)",
            "దృష్టి లోపం",
            "లోకోమోటర్ వైకల్యం",
            "శ్రవణ లోపం"
        ],
        "correct": 0,
        "explanation": "ఎకోలాలియా అంటే ఇతరులు చెప్పిన పదాలు లేదా వాక్యాలను పునరావృతం చేయడం. ఇది ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న పిల్లల్లో సాధారణంగా కనిపిస్తుంది."
    },
    {
        "question": "ప్రత్యేక అవసరాలున్న విద్యార్థి కోసం రూపొందించే వ్యక్తిగత విద్యా ప్రణాళిక (IEP)లో మొదటి దశ ఏది?",
        "options": [
            "వార్షిక పరీక్ష నిర్వహించడం",
            "విద్యార్థి ప్రస్తుత పనితీరు స్థాయిని అంచనా వేయడం",
            "పాఠ్యపుస్తకాలను మార్చడం",
            "పాఠశాల మార్పు చేయడం"
        ],
        "correct": 1,
        "explanation": "IEP రూపొందించడంలో మొదటి దశ విద్యార్థి ప్రస్తుత విద్యా, ప్రవర్తనా మరియు క్రియాత్మక పనితీరు స్థాయిని అంచనా వేయడం."
    },
    {
        "question": "వికలాంగుల హక్కుల చట్టం (RPWD Act), 2016 ప్రకారం గుర్తించబడిన వైకల్యాల సంఖ్య ఎంత?",
        "options": [
            "7",
            "14",
            "21",
            "25"
        ],
        "correct": 2,
        "explanation": "వికలాంగుల హక్కుల చట్టం (RPWD Act), 2016 ప్రకారం మొత్తం 21 రకాల వైకల్యాలు గుర్తించబడ్డాయి."
    },
    {
        "question": "డిస్గ్రాఫియా (Dysgraphia) ప్రధానంగా ఏ నైపుణ్యానికి సంబంధించిన అభ్యాస వైకల్యం?",
        "options": [
            "చదవడం",
            "వ్రాయడం",
            "గణితం",
            "వినికిడి"
        ],
        "correct": 1,
        "explanation": "డిస్గ్రాఫియా అనేది వ్రాత నైపుణ్యాన్ని ప్రభావితం చేసే నిర్దిష్ట అభ్యాస వైకల్యం."
    },
    {
        "question": "క్రింది వారిలో 'అభ్యాస వైకల్యం (Learning Disability)' అనే పదాన్ని పరిచయం చేసినవారు ఎవరు?",
        "options": [
            "జీన్ పియాజే",
            "శామ్యూల్ కిర్క్",
            "లెవ్ వైగోట్స్కీ",
            "బి.ఎఫ్. స్కిన్నర్"
        ],
        "correct": 1,
        "explanation": "1963లో శామ్యూల్ కిర్క్ 'Learning Disability' అనే పదాన్ని విద్యారంగంలో ప్రవేశపెట్టారు."
    },
    {
        "question": "సెరెబ్రల్ పాల్సీ (Cerebral Palsy) ప్రధానంగా దేనిని ప్రభావితం చేస్తుంది?",
        "options": [
            "రక్త ప్రసరణ వ్యవస్థ",
            "కదలికలు మరియు శరీర భంగిమ నియంత్రణ",
            "జీర్ణ వ్యవస్థ",
            "మూత్రపిండాల పనితీరు"
        ],
        "correct": 1,
        "explanation": "సెరెబ్రల్ పాల్సీ మెదడు అభివృద్ధిలో లోపం వల్ల కదలికలు, సమతుల్యత మరియు శరీర భంగిమను ప్రభావితం చేస్తుంది."
    },
    {
        "question": "క్రింది వాటిలో సమగ్ర విద్య (Inclusive Education) యొక్క ప్రధాన సూత్రం ఏది?",
        "options": [
            "వేరు పాఠశాలలు",
            "అందరికీ సమాన అవకాశాలు",
            "ప్రత్యేక పాఠ్యాంశం మాత్రమే",
            "ప్రత్యేక పరీక్షలు మాత్రమే"
        ],
        "correct": 1,
        "explanation": "సమగ్ర విద్యలో ప్రతి విద్యార్థికి సమాన అవకాశాలు కల్పిస్తూ ఒకే విద్యా వాతావరణంలో నేర్చుకునే అవకాశం ఇవ్వడం ప్రధాన సూత్రం."
    },
    {
        "question": "క్రింది వాటిలో దృష్టి లోపం ఉన్న విద్యార్థుల కోసం ఉపయోగించే సహాయక పరికరం ఏది?",
        "options": [
            "బ్రెయిల్ స్లేట్",
            "హియరింగ్ ఎయిడ్",
            "వీల్‌చైర్",
            "క్రచ్"
        ],
        "correct": 0,
        "explanation": "బ్రెయిల్ స్లేట్ ద్వారా దృష్టి లోపం ఉన్న వ్యక్తులు బ్రెయిల్ లిపిలో వ్రాయగలరు."
    },
    {
        "question": "శ్రవణ లోపం ఉన్న విద్యార్థుల కోసం శబ్దాన్ని పెంచి వినిపించే పరికరం ఏది?",
        "options": [
            "బ్రెయిల్ కిట్",
            "హియరింగ్ ఎయిడ్",
            "వాకర్",
            "అబాకస్"
        ],
        "correct": 1,
        "explanation": "హియరింగ్ ఎయిడ్ శబ్దాన్ని పెంచి వినిపించడం ద్వారా శ్రవణ లోపం ఉన్నవారికి సహాయపడుతుంది."
    },
    {
        "question": "డిస్క్యాల్కులియా (Dyscalculia) ప్రధానంగా ఏ అంశంలో ఇబ్బందిని కలిగిస్తుంది?",
        "options": [
            "చదవడం",
            "వ్రాయడం",
            "గణిత అభ్యాసం",
            "మాట్లాడటం"
        ],
        "correct": 2,
        "explanation": "డిస్క్యాల్కులియా అనేది సంఖ్యలు మరియు గణిత భావనలను అర్థం చేసుకోవడంలో ఇబ్బందిని కలిగించే అభ్యాస వైకల్యం."
    },
    {
        "question": "క్రింది వాటిలో సమగ్ర విద్య (Inclusive Education)లో తల్లిదండ్రుల పాత్ర ఏది?",
        "options": [
            "పాఠశాలకు రాకపోవడం",
            "IEP అమలులో ఉపాధ్యాయులతో సహకరించడం",
            "పరీక్షలు మాత్రమే చూడడం",
            "విద్యార్థిని వేరు పాఠశాలకు పంపించడం"
        ],
        "correct": 1,
        "explanation": "సమగ్ర విద్యలో తల్లిదండ్రులు IEP రూపకల్పన మరియు అమలులో ఉపాధ్యాయులతో కలిసి పనిచేయాలి."
    },
    {
        "question": "క్రింది వాటిలో మేధో వైకల్యం (Intellectual Disability) నిర్ధారణలో పరిగణించే ముఖ్య అంశం ఏది?",
        "options": [
            "కేవలం ఎత్తు",
            "కేవలం బరువు",
            "మేధో సామర్థ్యం మరియు అనుకూల ప్రవర్తన",
            "కేవలం వయస్సు"
        ],
        "correct": 2,
        "explanation": "మేధో వైకల్యం నిర్ధారణలో మేధో సామర్థ్యంతో పాటు అనుకూల ప్రవర్తనలోని పరిమితులను కూడా పరిగణిస్తారు."
    },
    {
        "question": "క్రింది వాటిలో లోకోమోటర్ వైకల్యానికి ఉదాహరణ ఏది?",
        "options": [
            "పారాప్లేజియా",
            "డిస్లెక్సియా",
            "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD)",
            "ADHD"
        ],
        "correct": 0,
        "explanation": "పారాప్లేజియా కాళ్ల కదలికలను ప్రభావితం చేసే లోకోమోటర్ వైకల్యానికి ఉదాహరణ."
    },
    {
        "question": "వికలాంగుల హక్కుల చట్టం (RPWD Act), 2016 యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        "options": [
            "ప్రత్యేక పాఠశాలలు మాత్రమే ఏర్పాటు చేయడం",
            "వికలాంగుల హక్కులను రక్షించి సమాన అవకాశాలు కల్పించడం",
            "పరీక్షలు మాత్రమే నిర్వహించడం",
            "వైద్య సేవలు మాత్రమే అందించడం"
        ],
        "correct": 1,
        "explanation": "RPWD Act, 2016 వికలాంగుల హక్కులను పరిరక్షించి విద్య, ఉపాధి మరియు సామాజిక జీవితంలో సమాన అవకాశాలు కల్పించడం లక్ష్యంగా రూపొందించబడింది."
    },
    {
        "question": "సమగ్ర విద్య (Inclusive Education)లో 'Reasonable Accommodation' అంటే ఏమిటి?",
        "options": [
            "విద్యార్థిని వేరే పాఠశాలకు పంపడం",
            "విద్యార్థి అవసరాలకు అనుగుణంగా తగిన మార్పులు చేయడం",
            "పరీక్షలు రద్దు చేయడం",
            "పాఠ్యపుస్తకాలు తొలగించడం"
        ],
        "correct": 1,
        "explanation": "Reasonable Accommodation అంటే ప్రత్యేక అవసరాలున్న విద్యార్థి సమానంగా పాల్గొనేలా తగిన మార్పులు, సౌకర్యాలు కల్పించడం."
    },
    {
        "question": "క్రింది వాటిలో ప్రత్యేక అవసరాలున్న విద్యార్థుల బోధనలో అత్యంత ప్రభావవంతమైన విధానం ఏది?",
        "options": [
            "అందరికీ ఒకే విధమైన బోధన",
            "వ్యక్తిగత అవసరాలకు అనుగుణంగా బోధనలో మార్పులు చేయడం",
            "కేవలం ఉపన్యాస పద్ధతి",
            "కేవలం గృహపాఠం ఇవ్వడం"
        ],
        "correct": 1,
        "explanation": "ప్రత్యేక అవసరాలున్న విద్యార్థుల సామర్థ్యాలు భిన్నంగా ఉంటాయి. అందువల్ల వారి అవసరాలకు అనుగుణంగా బోధనను సవరించడం సమర్థవంతమైన విధానం."
    },
    {
        "question": "క్రింది వాటిలో 'సమగ్ర శిక్ష (Samagra Shiksha)' యొక్క ప్రధాన లక్ష్యం ఏది?",
        "options": [
            "ఉన్నత విద్యను మాత్రమే ప్రోత్సహించడం",
            "పాఠశాల విద్యను సమగ్రంగా బలోపేతం చేసి సమాన విద్యా అవకాశాలు కల్పించడం",
            "విశ్వవిద్యాలయాల అభివృద్ధి",
            "కేవలం వృత్తి విద్యను ప్రోత్సహించడం"
        ],
        "correct": 1,
        "explanation": "సమగ్ర శిక్ష పథకం ప్రీ-ప్రైమరీ నుండి సెకండరీ స్థాయి వరకు నాణ్యమైన, సమాన మరియు సమగ్ర విద్యను అందించడం లక్ష్యంగా పనిచేస్తుంది."
    },
    {
        "question": "క్రింది వారిలో అంధ, బధిరుల విద్యా అభివృద్ధికి విశేష సేవలు అందించిన ప్రముఖురాలు ఎవరు?",
        "options": [
            "మరియా మాంటిస్సోరి",
            "హెలెన్ కెల్లర్",
            "అన్నీ బెసెంట్",
            "సరోజిని నాయుడు"
        ],
        "correct": 1,
        "explanation": "హెలెన్ కెల్లర్ దృష్టి మరియు శ్రవణ లోపం ఉన్నప్పటికీ విద్యను అభ్యసించి వికలాంగుల హక్కుల కోసం ప్రపంచవ్యాప్తంగా కృషి చేశారు."
    },
    {
        "question": "సలమాంకా ప్రకటన (Salamanca Statement) ఏ సంవత్సరంలో ఆమోదించబడింది?",
        "options": [
            "1992",
            "1994",
            "1999",
            "2006"
        ],
        "correct": 1,
        "explanation": "1994లో స్పెయిన్‌లోని సలమాంకాలో జరిగిన UNESCO సమావేశంలో సమగ్ర విద్యకు మద్దతుగా సలమాంకా ప్రకటన ఆమోదించబడింది."
    },
    {
        "question": "ప్రత్యేక అవసరాలున్న విద్యార్థుల విద్యలో 'LRE' యొక్క పూర్తి రూపం ఏమిటి?",
        "options": [
            "Least Restrictive Environment",
            "Learning Resource Evaluation",
            "Learning Rights for Education",
            "Limited Resource Environment"
        ],
        "correct": 0,
        "explanation": "Least Restrictive Environment (LRE) అంటే విద్యార్థి తన అవసరాలకు అనుగుణంగా సాధ్యమైనంత వరకు సాధారణ తరగతి గదిలోనే విద్యను అభ్యసించే వాతావరణం."
    },
    {
        "question": "క్రింది వాటిలో 'బ్రెయిల్' లిపిని ప్రధానంగా ఎవరు ఉపయోగిస్తారు?",
        "options": [
            "శ్రవణ లోపం ఉన్నవారు",
            "దృష్టి లోపం ఉన్నవారు",
            "లోకోమోటర్ వైకల్యం ఉన్నవారు",
            "అభ్యాస వైకల్యం ఉన్నవారు"
        ],
        "correct": 1,
        "explanation": "బ్రెయిల్ లిపి దృష్టి లోపం ఉన్న వ్యక్తులు చదవడానికి మరియు వ్రాయడానికి ఉపయోగించే స్పర్శ ఆధారిత లిపి."
    },
    {
        "question": "క్రింది వాటిలో నిర్దిష్ట అభ్యాస వైకల్యం (Specific Learning Disability) కానిది ఏది?",
        "options": [
            "డిస్లెక్సియా",
            "డిస్క్యాల్కులియా",
            "డిస్గ్రాఫియా",
            "సెరెబ్రల్ పాల్సీ"
        ],
        "correct": 3,
        "explanation": "సెరెబ్రల్ పాల్సీ ఒక నాడీ-కండర సంబంధిత వైకల్యం. ఇది నిర్దిష్ట అభ్యాస వైకల్యం కాదు."
    },
    {
        "question": "శ్రవణ లోపం ఉన్న విద్యార్థితో మాట్లాడేటప్పుడు ఉపాధ్యాయుడు పాటించవలసిన ఉత్తమ పద్ధతి ఏది?",
        "options": [
            "వెనుక నుండి మాట్లాడడం",
            "ముఖాముఖిగా స్పష్టంగా మాట్లాడడం",
            "చాలా వేగంగా మాట్లాడడం",
            "ముఖాన్ని కప్పుకొని మాట్లాడడం"
        ],
        "correct": 1,
        "explanation": "శ్రవణ లోపం ఉన్న విద్యార్థి పెదవుల కదలికలను గమనించేందుకు ఉపాధ్యాయుడు ముఖాముఖిగా, స్పష్టంగా మాట్లాడాలి."
    },
    {
        "question": "వ్యక్తిగత విద్యా ప్రణాళిక (IEP)ను క్రమం తప్పకుండా సమీక్షించడానికి ప్రధాన కారణం ఏమిటి?",
        "options": [
            "ఉపాధ్యాయుని బదిలీ కోసం",
            "విద్యార్థి పురోగతిని బట్టి లక్ష్యాలను సవరించడం",
            "పరీక్ష తేదీలు నిర్ణయించడం",
            "హాజరు నమోదు చేయడం"
        ],
        "correct": 1,
        "explanation": "విద్యార్థి పురోగతి, అవసరాలు మరియు లక్ష్యాలలో మార్పులను దృష్టిలో ఉంచుకొని IEPను కాలానుగుణంగా సమీక్షిస్తారు."
    },
    {
        "question": "క్రింది వాటిలో 'CWSN' యొక్క పూర్తి రూపం ఏమిటి?",
        "options": [
            "Children With Special Needs",
            "Children With Social Needs",
            "Children With School Needs",
            "Children With Speech Needs"
        ],
        "correct": 0,
        "explanation": "CWSN అంటే Children With Special Needs. ఈ పదాన్ని సమగ్ర విద్యా కార్యక్రమాల్లో విస్తృతంగా ఉపయోగిస్తారు."
    },
    {
        "question": "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) ఉన్న విద్యార్థికి బోధనలో అత్యంత ప్రభావవంతమైన విధానం ఏది?",
        "options": [
            "స్థిరమైన దినచర్య మరియు దృశ్య సూచనలు ఉపయోగించడం",
            "ప్రతి రోజు బోధనా విధానాన్ని పూర్తిగా మార్చడం",
            "మౌఖిక సూచనలు మాత్రమే ఇవ్వడం",
            "కేవలం గృహపాఠాలపై ఆధారపడడం"
        ],
        "correct": 0,
        "explanation": "ASD ఉన్న విద్యార్థులకు స్థిరమైన దినచర్య, దృశ్య సూచనలు మరియు నిర్మాణాత్మక బోధన ఎక్కువ ప్రయోజనం కలిగిస్తాయి."
    },
    {
        "question": "క్రింది వాటిలో లో విజన్ (Low Vision) అంటే ఏమిటి?",
        "options": [
            "పూర్తిగా దృష్టి లేకపోవడం",
            "సహాయక పరికరాలతో కొంతవరకు ఉపయోగకరమైన దృష్టి ఉండడం",
            "కేవలం రంగులు గుర్తించలేకపోవడం",
            "రాత్రిపూట మాత్రమే కనిపించకపోవడం"
        ],
        "correct": 1,
        "explanation": "లో విజన్ ఉన్న వ్యక్తికి దృష్టి పూర్తిగా కోల్పోలేదు. తగిన సహాయక పరికరాలతో దృష్టిని ఉపయోగించుకోవచ్చు."
    },
    {
        "question": "క్రింది వాటిలో బహుళ ఇంద్రియ బోధన (Multisensory Teaching) ప్రధానంగా ఏ విద్యార్థులకు ఉపయోగకరంగా ఉంటుంది?",
        "options": [
            "డిస్లెక్సియా ఉన్న విద్యార్థులకు",
            "కేవలం ప్రతిభావంతులైన విద్యార్థులకు",
            "కేవలం ఉన్నత తరగతుల విద్యార్థులకు",
            "కేవలం కళాశాల విద్యార్థులకు"
        ],
        "correct": 0,
        "explanation": "బహుళ ఇంద్రియ బోధనలో చూడటం, వినడం, తాకడం వంటి అనేక ఇంద్రియాలను ఉపయోగించడం వల్ల డిస్లెక్సియా ఉన్న విద్యార్థులకు మంచి ఫలితాలు లభిస్తాయి."
    },
    {
        "question": "క్రింది వాటిలో సమగ్ర విద్య (Inclusive Education)లో సహ విద్యార్థుల పాత్ర ఏది?",
        "options": [
            "ప్రత్యేక అవసరాలున్న విద్యార్థిని వేరుచేయడం",
            "సహకారం, అంగీకారం మరియు పరస్పర అభ్యాసాన్ని ప్రోత్సహించడం",
            "పరీక్షల సమయంలో మాత్రమే సహాయం చేయడం",
            "ఉపాధ్యాయుని స్థానంలో బోధించడం"
        ],
        "correct": 1,
        "explanation": "సమగ్ర విద్యలో సహ విద్యార్థుల సహకారం సామాజిక నైపుణ్యాలు, ఆత్మవిశ్వాసం మరియు పరస్పర గౌరవాన్ని పెంపొందిస్తుంది."
    },
    {
        "question": "క్రింది వాటిలో ప్రత్యామ్నాయ మరియు వృద్ధి సంభాషణ (AAC)ను ఎక్కువగా ఉపయోగించేది ఎవరు?",
        "options": [
            "సంభాషణలో తీవ్రమైన ఇబ్బందులు ఉన్న విద్యార్థులు",
            "కేవలం దృష్టి లోపం ఉన్న విద్యార్థులు",
            "కేవలం గణితంలో వెనుకబడిన విద్యార్థులు",
            "కేవలం ప్రతిభావంతులైన విద్యార్థులు"
        ],
        "correct": 0,
        "explanation": "AAC (Augmentative and Alternative Communication) మాట్లాడడంలో తీవ్రమైన ఇబ్బందులు ఉన్న వ్యక్తులకు ప్రత్యామ్నాయ సంభాషణ సాధనాలను అందిస్తుంది."
    },
    {
        "question": "సమగ్ర విద్య (Inclusive Education) విజయవంతం కావడానికి అత్యంత ముఖ్యమైన అంశం ఏది?",
        "options": [
            "విద్యార్థులను వారి వైకల్యం ఆధారంగా వేరు చేయడం",
            "ఉపాధ్యాయులు, తల్లిదండ్రులు మరియు పాఠశాల మధ్య సమన్వయం",
            "ప్రత్యేక పరీక్షలు మాత్రమే నిర్వహించడం",
            "కేవలం ప్రత్యేక పాఠ్యపుస్తకాలు ఉపయోగించడం"
        ],
        "correct": 1,
        "explanation": "సమగ్ర విద్య విజయవంతం కావడానికి ఉపాధ్యాయులు, తల్లిదండ్రులు మరియు పాఠశాల పరిపాలన మధ్య సమర్థవంతమైన సమన్వయం అత్యంత అవసరం."
    },
    {
        "question": "క్రింది వాటిలో భవిత కేంద్రాలు (Bhavitha Centres) ప్రధానంగా ఏ విద్యార్థుల కోసం ఏర్పాటు చేయబడ్డాయి?",
        "options": [
            "క్రీడాకారుల కోసం",
            "ప్రత్యేక అవసరాలున్న పిల్లల కోసం",
            "ఉన్నత విద్యార్థుల కోసం",
            "ఉపాధ్యాయుల శిక్షణ కోసం"
        ],
        "correct": 1,
        "explanation": "భవిత కేంద్రాలు ప్రత్యేక అవసరాలున్న పిల్లలకు గుర్తింపు, విద్యా సహాయం, చికిత్సా సేవలు మరియు పునరావాస మద్దతు అందించేందుకు ఏర్పాటు చేయబడ్డాయి."
    },
    {
        "question": "క్రింది వాటిలో అఫాసియా (Aphasia) ప్రధానంగా దేనిని ప్రభావితం చేస్తుంది?",
        "options": [
            "భాష మరియు సంభాషణ సామర్థ్యం",
            "కండరాల బలం",
            "దృష్టి శక్తి",
            "శ్రవణ సామర్థ్యం"
        ],
        "correct": 0,
        "explanation": "అఫాసియా అనేది మెదడు దెబ్బతినడం వల్ల భాషను అర్థం చేసుకోవడం లేదా మాట్లాడే సామర్థ్యాన్ని ప్రభావితం చేసే పరిస్థితి."
    },
    {
        "question": "స్నెల్లెన్ చార్ట్ (Snellen Chart) ప్రధానంగా దేనిని పరీక్షించడానికి ఉపయోగిస్తారు?",
        "options": [
            "వినికిడి",
            "మేధస్సు",
            "దృష్టి తీక్షణత",
            "జ్ఞాపకశక్తి"
        ],
        "correct": 2,
        "explanation": "స్నెల్లెన్ చార్ట్ దూర దృష్టి తీక్షణతను (Visual Acuity) పరీక్షించడానికి ఉపయోగించే ప్రామాణిక పరికరం."
    },
    {
        "question": "మోనోప్లేజియా (Monoplegia) అంటే ఏమిటి?",
        "options": [
            "రెండు కాళ్ల పక్షవాతం",
            "శరీరం ఒక వైపు పక్షవాతం",
            "ఒక అవయవానికి మాత్రమే పక్షవాతం",
            "నాలుగు అవయవాల పక్షవాతం"
        ],
        "correct": 2,
        "explanation": "మోనోప్లేజియా అంటే ఒక చేయి లేదా ఒక కాలు వంటి ఒకే అవయవాన్ని ప్రభావితం చేసే పక్షవాతం."
    },
    {
        "question": "మస్క్యులర్ డిస్ట్రోఫీ (Muscular Dystrophy) ప్రధానంగా దేనిని ప్రభావితం చేస్తుంది?",
        "options": [
            "కండరాలు",
            "కాలేయం",
            "కిడ్నీలు",
            "ఊపిరితిత్తులు"
        ],
        "correct": 0,
        "explanation": "మస్క్యులర్ డిస్ట్రోఫీ అనేది కండరాలు క్రమంగా బలహీనపడే జన్యుపరమైన వ్యాధుల సమూహం."
    },
    {
        "question": "క్రింది వాటిలో డౌన్ సిండ్రోమ్ ఉన్న పిల్లల బోధనలో అత్యంత అనుకూలమైన పద్ధతి ఏది?",
        "options": [
            "వేగవంతమైన ఉపన్యాసం",
            "దశలవారీగా, దృశ్య సహాయాలతో బోధించడం",
            "గృహపాఠాలు మాత్రమే ఇవ్వడం",
            "మౌఖిక పరీక్షలు మాత్రమే నిర్వహించడం"
        ],
        "correct": 1,
        "explanation": "డౌన్ సిండ్రోమ్ ఉన్న పిల్లలకు చిన్న చిన్న దశలుగా, దృశ్య మరియు కార్యాచరణ ఆధారిత బోధన సమర్థవంతంగా ఉంటుంది."
    },
    {
        "question": "క్రింది వాటిలో 'రీన్ఫోర్స్‌మెంట్ (Reinforcement)' యొక్క ముఖ్య ఉద్దేశ్యం ఏమిటి?",
        "options": [
            "ప్రవర్తనను తగ్గించడం",
            "కావలసిన ప్రవర్తనను పెంపొందించడం",
            "విద్యార్థిని శిక్షించడం",
            "పరీక్షలు నిర్వహించడం"
        ],
        "correct": 1,
        "explanation": "రీన్ఫోర్స్‌మెంట్ ద్వారా కోరుకున్న ప్రవర్తన పునరావృతమయ్యే అవకాశం పెరుగుతుంది."
    },
    {
        "question": "ప్రత్యేక అవసరాలున్న విద్యార్థికి IEP రూపొందించడంలో తప్పనిసరిగా పాల్గొనవలసిన వ్యక్తి ఎవరు?",
        "options": [
            "పాఠశాల వాచ్‌మన్",
            "తల్లిదండ్రులు",
            "గ్రంథాలయ అధికారి",
            "క్రీడా ఉపాధ్యాయుడు మాత్రమే"
        ],
        "correct": 1,
        "explanation": "IEP రూపకల్పనలో తల్లిదండ్రులు, ఉపాధ్యాయులు మరియు సంబంధిత నిపుణుల భాగస్వామ్యం అత్యంత అవసరం."
    },
    {
        "question": "క్రింది వాటిలో దృష్టి లోపం ఉన్న విద్యార్థికి గణితం బోధించడానికి అత్యంత అనుకూలమైన సాధనం ఏది?",
        "options": [
            "బ్రెయిల్ అబాకస్",
            "హియరింగ్ ఎయిడ్",
            "FM వ్యవస్థ",
            "సైన్ లాంగ్వేజ్ చార్ట్"
        ],
        "correct": 0,
        "explanation": "బ్రెయిల్ అబాకస్ ద్వారా దృష్టి లోపం ఉన్న విద్యార్థులు సంఖ్యా భావనలు మరియు గణిత గణనలను సులభంగా అభ్యసించగలరు."
    },
    {
        "question": "క్రింది వాటిలో ఎకోలాలియా (Echolalia) యొక్క సరైన వివరణ ఏది?",
        "options": [
            "అక్షరాలను తారుమారు చేసి చదవడం",
            "ఇతరులు చెప్పిన పదాలు లేదా వాక్యాలను పునరావృతం చేయడం",
            "చేతులతో మాత్రమే సంభాషించడం",
            "మాట్లాడలేకపోవడం"
        ],
        "correct": 1,
        "explanation": "ఎకోలాలియా అనేది ఇతరులు చెప్పిన పదాలు లేదా వాక్యాలను వెంటనే లేదా కొంత సమయం తర్వాత పునరావృతం చేసే ప్రవర్తన."
    },
    {
        "question": "క్రింది వాటిలో ప్రతిభావంతులైన (Gifted) విద్యార్థుల బోధనకు అనుకూలమైన విధానం ఏది?",
        "options": [
            "ఒకే స్థాయి పనిని పునరావృతం చేయించడం",
            "సుసంపన్నీకరణ కార్యక్రమాలు (Enrichment Programmes)",
            "పాఠ్యాంశాన్ని తగ్గించడం",
            "వేరే తరగతిలో కూర్చోబెట్టడం మాత్రమే"
        ],
        "correct": 1,
        "explanation": "ప్రతిభావంతులైన విద్యార్థులకు సవాలు కలిగించే సుసంపన్నీకరణ కార్యక్రమాలు వారి సామర్థ్యాన్ని అభివృద్ధి చేస్తాయి."
    },
    {
        "question": "ప్రత్యేక అవసరాలున్న విద్యార్థుల మూల్యాంకనంలో అత్యంత ముఖ్యమైన సూత్రం ఏది?",
        "options": [
            "అందరికీ ఒకే పరీక్ష",
            "వ్యక్తిగత అవసరాలకు అనుగుణమైన మూల్యాంకనం",
            "వార్షిక పరీక్ష మాత్రమే",
            "రాత పరీక్ష మాత్రమే"
        ],
        "correct": 1,
        "explanation": "ప్రత్యేక అవసరాలున్న విద్యార్థుల సామర్థ్యాలు భిన్నంగా ఉంటాయి. కాబట్టి వారి అవసరాలకు అనుగుణంగా మూల్యాంకనం చేయాలి."
    },
    {
        "question": "క్రింది వాటిలో సహాయక సాంకేతికత (Assistive Technology)కు ఉదాహరణ ఏది?",
        "options": [
            "స్క్రీన్ రీడర్",
            "క్రికెట్ బ్యాట్",
            "బ్లాక్‌బోర్డ్",
            "పాఠ్యపుస్తకం"
        ],
        "correct": 0,
        "explanation": "స్క్రీన్ రీడర్ వంటి పరికరాలు ప్రత్యేక అవసరాలున్న విద్యార్థుల స్వతంత్ర అభ్యాసాన్ని ప్రోత్సహించే సహాయక సాంకేతికతలు."
    },
    {
        "question": "క్రింది వాటిలో ఉపాధ్యాయుని అత్యంత సముచిత స్పందన ఏది? ఒక ప్రత్యేక అవసరాలున్న విద్యార్థి పనిని పూర్తి చేయడానికి ఎక్కువ సమయం తీసుకుంటున్నాడు.",
        "options": [
            "పని నిలిపివేయడం",
            "అదనపు సమయం మరియు అవసరమైన సహాయం అందించడం",
            "తక్కువ మార్కులు వేయడం",
            "తరగతి నుండి బయటకు పంపించడం"
        ],
        "correct": 1,
        "explanation": "సమాన అవకాశాల కోసం అవసరమైన సౌకర్యాలు కల్పించడం సమగ్ర విద్య యొక్క ముఖ్య సూత్రం."
    },
    {
        "question": "సమగ్ర విద్య (Inclusive Education) విజయాన్ని అంచనా వేయడానికి అత్యంత ముఖ్యమైన సూచిక ఏది?",
        "options": [
            "భవనం పరిమాణం",
            "విద్యార్థుల అర్థవంతమైన భాగస్వామ్యం మరియు అభ్యాస పురోగతి",
            "పాఠశాల వయస్సు",
            "ఉపాధ్యాయుల సంఖ్య మాత్రమే"
        ],
        "correct": 1,
        "explanation": "సమగ్ర విద్య విజయాన్ని విద్యార్థుల చురుకైన భాగస్వామ్యం, అభ్యాస పురోగతి మరియు సామాజిక సమ్మిళితత ఆధారంగా అంచనా వేస్తారు."
    }
];