const SUBJECTS = [
    "Special Education",
    "English"
];

const QUESTIONS = [
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) గల పిల్లలలో తరచుగా కనిపించే భాషా లక్షణం ఏది?",
        options: ["డైసార్త్రియా (Dysarthria)", "ఎకోలాలియా (Echolalia)", "అఫేసియా (Aphasia)", "డైస్ఫోనియా (Dysphonia)"],
        correct: 1,
        explanation: "ఎకోలాలియా అనేది ASD గల పిల్లలలో సాధారణంగా కనిపించే భాషా లక్షణం. ఇందులో ఇతరులు చెప్పిన పదాలు లేదా వాక్యాలను వెంటనే లేదా కొంత సమయం తరువాత తిరిగి పలుకుతారు. ఇది కమ్యూనికేషన్ అభివృద్ధిలో ముఖ్య సూచిక."
    },
    {
        question: "అభ్యసన వైకల్యం (Learning Disability) నిర్ధారణలో విద్యార్థి చదవడం, రాయడం, గణిత నైపుణ్యాలను సమగ్రంగా అంచనా వేయడం ఏ ప్రక్రియలో భాగం?",
        options: ["పాఠ్యాంశ అనుకూలీకరణ", "విద్యా మూల్యాంకనం", "ప్రవర్తనా సవరణ", "వృత్తి శిక్షణ"],
        correct: 1,
        explanation: "విద్యా మూల్యాంకనం ద్వారా విద్యార్థి చదవడం, రాయడం, గణితం వంటి ప్రాథమిక విద్యా నైపుణ్యాలను పరిశీలిస్తారు. దీనివల్ల అభ్యసన వైకల్యం స్వభావం మరియు అవసరమైన విద్యా మద్దతు నిర్ణయించబడుతుంది."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి.\n\na. వ్యక్తిగత విద్యా ప్రణాళిక (IEP) ప్రతి విద్యార్థికి ఒకే విధంగా ఉంటుంది.\n\nb. IEP రూపొందించేటప్పుడు విద్యార్థి ప్రస్తుత పనితీరు స్థాయిని పరిగణనలోకి తీసుకుంటారు.\n\nసరైనది ఏది?",
        options: ["a మాత్రమే", "b మాత్రమే", "a మరియు b", "రెండూ కావు"],
        correct: 1,
        explanation: "IEP ప్రతి విద్యార్థి వ్యక్తిగత అవసరాలు, సామర్థ్యాలు మరియు ప్రస్తుత పనితీరు ఆధారంగా రూపొందించబడుతుంది. అందువల్ల అన్ని విద్యార్థులకు ఒకే IEP ఉండదు. రెండవ ప్రకటన మాత్రమే సరైనది."
    },
    {
        question: "స్నెలెన్ చార్ట్ (Snellen Chart) ప్రధానంగా దేనిని కొలవడానికి ఉపయోగిస్తారు?",
        options: ["వినికిడి సామర్థ్యం", "దృష్టి తీక్షణత", "మేధస్సు", "భాషా సామర్థ్యం"],
        correct: 1,
        explanation: "స్నెలెన్ చార్ట్ ద్వారా వ్యక్తి దూరంలోని అక్షరాలను ఎంత స్పష్టంగా చూడగలడో పరీక్షిస్తారు. ఇది Visual Acuity లేదా దృష్టి తీక్షణతను కొలిచే ప్రామాణిక పరికరం."
    },
    {
        question: "26–40 dB వినికిడి నష్టం ఉన్న వ్యక్తి ఏ వర్గానికి చెందుతాడు?",
        options: ["తీవ్రమైన వినికిడి లోపం", "మధ్యస్థ వినికిడి లోపం", "స్వల్ప వినికిడి లోపం", "అత్యంత తీవ్రమైన వినికిడి లోపం"],
        correct: 2,
        explanation: "26–40 dB వినికిడి నష్టం Mild Hearing Loss గా వర్గీకరించబడుతుంది. ఇలాంటి వ్యక్తులు తక్కువ శబ్దాలను వినడంలో ఇబ్బంది పడవచ్చు కానీ వినికిడి సహాయక పరికరాలతో మెరుగైన ఫలితాలు పొందగలరు."
    },
    {
        question: "డైస్కాల్కులియా (Dyscalculia) ప్రధానంగా ఏ నైపుణ్యానికి సంబంధించిన అభ్యసన వైకల్యం?",
        options: ["చదవడం", "రాయడం", "గణితం", "మాట్లాడడం"],
        correct: 2,
        explanation: "డైస్కాల్కులియా అనేది సంఖ్యలు, గణనలు, గణిత భావనలు అర్థం చేసుకోవడంలో ఇబ్బందిని కలిగించే అభ్యసన వైకల్యం. ఇది గణిత నైపుణ్యాలపై ప్రధాన ప్రభావం చూపుతుంది."
    },
    {
        question: "బుద్ధిమాంద్యం (Intellectual Disability) గల విద్యార్థికి బోధనలో అత్యంత అనుకూలమైన వ్యూహం ఏది?",
        options: ["ఉపన్యాస పద్ధతి మాత్రమే", "అమూర్త భావనలతో ప్రారంభించడం", "మూర్త వస్తువుల నుండి అమూర్త భావనలకు తీసుకువెళ్లడం", "వేగవంతమైన బోధన"],
        correct: 2,
        explanation: "బుద్ధిమాంద్యం గల విద్యార్థులు ప్రత్యక్ష అనుభవాలతో మెరుగ్గా నేర్చుకుంటారు. అందువల్ల మూర్త వస్తువుల నుండి అమూర్త భావనలకు క్రమంగా బోధించడం అత్యంత ప్రభావవంతమైన వ్యూహం."
    },
    {
        question: "JAWS సాఫ్ట్‌వేర్ ప్రధానంగా ఎవరికి ఉపయోగపడుతుంది?",
        options: ["ఆటిజం గల విద్యార్థులకు", "దృష్టి లోపం గల విద్యార్థులకు", "వినికిడి లోపం గల విద్యార్థులకు", "అభ్యసన వైకల్యం గల విద్యార్థులకు"],
        correct: 1,
        explanation: "JAWS ఒక Screen Reader సాఫ్ట్‌వేర్. ఇది కంప్యూటర్ స్క్రీన్‌లోని సమాచారాన్ని శబ్ద రూపంలో చదివి దృష్టి లోపం గల వినియోగదారులకు కంప్యూటర్ ఉపయోగించడంలో సహాయపడుతుంది."
    },
    {
        question: "వినికిడి యంత్రం (Hearing Aid) ఉపయోగించే విద్యార్థిని సాధారణ తరగతిలో ఎక్కడ కూర్చోబెట్టడం ఉత్తమం?",
        options: ["చివరి వరుసలో", "తలుపు దగ్గర", "మొదటి వరుసలో ఉపాధ్యాయునికి సమీపంగా", "కిటికీ పక్కన"],
        correct: 2,
        explanation: "వినికిడి యంత్రం ఉపయోగించే విద్యార్థిని ఉపాధ్యాయునికి దగ్గరగా కూర్చోబెడితే స్వరం స్పష్టంగా వినిపిస్తుంది. నేపథ్య శబ్దం తగ్గి బోధనను సులభంగా అర్థం చేసుకోవచ్చు."
    },
    {
        question: "క్రింది వాటిలో సహాయక సాంకేతిక పరికరం (Assistive Technology) ఏది?",
        options: ["స్మార్ట్ బోర్డు", "బ్రెయిల్ డిస్‌ప్లే", "బ్లాక్ బోర్డు", "చార్ట్"],
        correct: 1,
        explanation: "బ్రెయిల్ డిస్‌ప్లే దృష్టి లోపం గల వ్యక్తులు డిజిటల్ సమాచారాన్ని బ్రెయిల్ రూపంలో చదవడానికి ఉపయోగించే సహాయక సాంకేతిక పరికరం. ఇది స్వతంత్ర అభ్యాసాన్ని ప్రోత్సహిస్తుంది."
    },
    {
        question: "బహుళ వైకల్యం (Multiple Disabilities) కు సరైన ఉదాహరణ ఏది?",
        options: ["డైస్లెక్సియా + డైస్గ్రాఫియా", "వినికిడి లోపం + బుద్ధిమాంద్యం", "డైస్కాల్కులియా మాత్రమే", "అంధత్వం మాత్రమే"],
        correct: 1,
        explanation: "బహుళ వైకల్యం అంటే రెండు లేదా అంతకంటే ఎక్కువ ప్రధాన వైకల్యాలు ఒకే వ్యక్తిలో ఉండటం. వినికిడి లోపం మరియు బుద్ధిమాంద్యం కలయిక దీనికి సరైన ఉదాహరణ."
    },
    {
        question: "వ్యక్తిగత విద్యా ప్రణాళిక (IEP) యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        options: ["ఒకే పాఠ్యాంశాన్ని అందరికీ బోధించడం", "పరీక్షల సంఖ్యను తగ్గించడం", "విద్యార్థి అవసరాలకు అనుగుణంగా లక్ష్యాలను రూపొందించడం", "హాజరు నమోదు చేయడం"],
        correct: 2,
        explanation: "IEP ద్వారా ప్రతి విద్యార్థి ప్రత్యేక అవసరాలు, బలాలు, అభ్యాస లక్ష్యాలు గుర్తించి వాటికి అనుగుణంగా వ్యక్తిగత విద్యా ప్రణాళిక రూపొందించబడుతుంది. ఇది సమర్థవంతమైన అభ్యాసాన్ని ప్రోత్సహిస్తుంది."
    },
    {
        question: "అభ్యసన వైకల్యం గల విద్యార్థికి పరీక్షలో అదనపు సమయం ఇవ్వడం ఏ రకమైన చర్య?",
        options: ["పాఠ్యాంశ మార్పు", "అనుకూలీకరణ (Accommodation)", "ప్రత్యామ్నాయ మూల్యాంకనం", "పునరావాసం"],
        correct: 1,
        explanation: "అదనపు సమయం ఇవ్వడం పరీక్షా Accommodation. ఇందులో విద్యార్థి సామర్థ్యాన్ని సమాన అవకాశంతో ప్రదర్శించేందుకు పరీక్షా విధానంలో మాత్రమే మార్పు చేస్తారు; పాఠ్యాంశంలో కాదు."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి.\n\na. Assistive Technology విద్యార్థి స్వతంత్రతను పెంచుతుంది.\n\nb. Assistive Devices కేవలం దృష్టి లోపం గల విద్యార్థులకే ఉపయోగపడతాయి.\n\nసరైనది ఏది?",
        options: ["a మాత్రమే", "b మాత్రమే", "a మరియు b", "రెండూ కావు"],
        correct: 0,
        explanation: "Assistive Technology వివిధ రకాల వైకల్యాలు గల విద్యార్థులకు ఉపయోగపడుతుంది. ఇది స్వతంత్రత, కమ్యూనికేషన్, అభ్యాస సామర్థ్యాన్ని పెంచుతుంది. కేవలం దృష్టి లోపం గల వారికి మాత్రమే పరిమితం కాదు."
    },
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) గల విద్యార్థికి దృశ్య ఆధారిత బోధన (Visual Supports) ఉపయోగించడం యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        options: ["పరీక్షల సంఖ్యను పెంచడం", "ప్రవర్తనను శిక్షించడం", "సూచనలు మరియు దినచర్యను స్పష్టంగా అర్థం చేసుకునేలా చేయడం", "శారీరక వ్యాయామాన్ని పెంచడం"],
        correct: 2,
        explanation: "Visual Supports ద్వారా సూచనలు, దినచర్యలు, క్రమపద్ధతులు చిత్రాలు లేదా చిహ్నాల రూపంలో అందించబడతాయి. దీంతో ASD గల విద్యార్థులు సమాచారాన్ని సులభంగా అర్థం చేసుకుని స్వతంత్రంగా అనుసరించగలరు."
    },
    {
        question: "డైస్లెక్సియా (Dyslexia) ప్రధానంగా ఏ నైపుణ్యాన్ని ప్రభావితం చేస్తుంది?",
        options: ["గణన నైపుణ్యం", "చదవడం", "చిత్రలేఖనం", "వినికిడి"],
        correct: 1,
        explanation: "డైస్లెక్సియా ప్రధానంగా చదవడం, పదాలను గుర్తించడం, అక్షరాలను కలిపి చదవడం వంటి నైపుణ్యాలను ప్రభావితం చేస్తుంది. ఇది మేధస్సుకు సంబంధించింది కాదు; సరైన బోధనతో గణనీయమైన పురోగతి సాధ్యమవుతుంది."
    },
    {
        question: "క్రింది వాటిలో మేధోమాంద్యం (Intellectual Disability) తీవ్ర స్థాయికి సరైన IQ పరిధి ఏది?",
        options: ["50–69", "35–49", "20–34", "70–84"],
        correct: 2,
        explanation: "IQ 20–34 ఉన్నవారిని తీవ్రమైన (Severe) మేధోమాంద్యంగా వర్గీకరిస్తారు. వీరికి నిరంతర మద్దతు, జీవన నైపుణ్యాల శిక్షణ మరియు వ్యక్తిగత అవసరాలకు అనుగుణమైన బోధన అవసరం."
    },
    {
        question: "శ్రవణ లోపం ఉన్న విద్యార్థి మాటలను అర్థం చేసుకోవడానికి ఉపాధ్యాయుని పెదవుల కదలికలను గమనించే పద్ధతిని ఏమంటారు?",
        options: ["ఆడిటరీ ట్రైనింగ్", "స్పీచ్ రీడింగ్", "బ్రెయిల్ రీడింగ్", "టోటల్ కమ్యూనికేషన్"],
        correct: 1,
        explanation: "Speech Readingలో పెదవుల కదలికలు, ముఖ కవళికలు మరియు సందర్భాన్ని గమనించి మాట్లాడిన విషయాన్ని అర్థం చేసుకుంటారు. ఇది శ్రవణ లోపం గల విద్యార్థులకు ముఖ్యమైన కమ్యూనికేషన్ పద్ధతి."
    },
    {
        question: "క్రింది వాటిలో ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) గల విద్యార్థుల బోధనకు అత్యంత అనుకూలమైన వ్యూహం ఏది?",
        options: ["ప్రతిరోజూ బోధనా విధానాన్ని మార్చడం", "నిర్మాణాత్మక దినచర్య (Structured Routine) పాటించడం", "ఒకేసారి అనేక సూచనలు ఇవ్వడం", "కేవలం మౌఖిక బోధన చేయడం"],
        correct: 1,
        explanation: "ASD గల విద్యార్థులు స్థిరమైన దినచర్యలో మెరుగ్గా నేర్చుకుంటారు. నిర్మాణాత్మక షెడ్యూల్ ఆందోళనను తగ్గించి, సూచనలను అర్థం చేసుకోవడం మరియు స్వతంత్రంగా పనులు చేయడాన్ని సులభతరం చేస్తుంది."
    },
    {
        question: "బ్రెయిల్ (Braille) లిపిని ఉపయోగించే విద్యార్థులు సాధారణంగా ఏ వర్గానికి చెందుతారు?",
        options: ["వినికిడి లోపం", "దృష్టి లోపం", "అభ్యసన వైకల్యం", "బహుళ వైకల్యం"],
        correct: 1,
        explanation: "బ్రెయిల్ అనేది దృష్టి లోపం గల వ్యక్తుల కోసం రూపొందించిన స్పర్శ ఆధారిత లిపి. దీని ద్వారా వారు చదవడం, రాయడం మరియు స్వతంత్రంగా విద్యను అభ్యసించగలుగుతారు."
    },
    {
        question: "క్రింది జతలలో సరైనది ఏది?",
        options: ["డైస్గ్రాఫియా – చదవడంలో ఇబ్బంది", "డైస్కాల్కులియా – గణిత నైపుణ్య లోపం", "డైస్లెక్సియా – వినికిడి లోపం", "డైస్ప్రాక్సియా – దృష్టి లోపం"],
        correct: 1,
        explanation: "డైస్కాల్కులియా అనేది సంఖ్యలు, గణనలు మరియు గణిత భావనలను అర్థం చేసుకోవడంలో ఇబ్బంది కలిగించే అభ్యసన వైకల్యం. ఇది గణిత నైపుణ్యాలకు ప్రత్యేకంగా సంబంధించినది."
    },
    {
        question: "వ్యక్తిగత విద్యా ప్రణాళిక (IEP)లో తప్పనిసరిగా ఉండవలసిన అంశం ఏది?",
        options: ["పాఠశాల చరిత్ర", "విద్యార్థి విద్యా లక్ష్యాలు", "వార్షిక సెలవుల పట్టిక", "ఉపాధ్యాయుల సేవా వివరాలు"],
        correct: 1,
        explanation: "IEPలో విద్యార్థి ప్రస్తుత పనితీరు, వ్యక్తిగత విద్యా లక్ష్యాలు, అవసరమైన సేవలు మరియు మూల్యాంకన విధానం తప్పనిసరిగా ఉండాలి. ఇవి విద్యార్థి పురోగతిని ప్రణాళికాబద్ధంగా అభివృద్ధి చేస్తాయి."
    },
    {
        question: "దృష్టి లోపం గల విద్యార్థికి గ్రాఫ్‌లు, చిత్రాలు అర్థమయ్యేలా చేయడానికి అత్యంత అనుకూలమైన సహాయక సాంకేతికత ఏది?",
        options: ["హియరింగ్ ఎయిడ్", "టాక్టైల్ గ్రాఫిక్స్", "స్పీచ్ రీడింగ్", "FM సిస్టమ్"],
        correct: 1,
        explanation: "టాక్టైల్ గ్రాఫిక్స్ ద్వారా చిత్రాలు, పటాలు, గ్రాఫ్‌లను స్పర్శ ద్వారా అనుభవించవచ్చు. ఇవి దృష్టి లోపం గల విద్యార్థులకు దృశ్య సమాచారాన్ని అర్థం చేసుకోవడంలో సహాయపడతాయి."
    },
    {
        question: "క్రింది వాటిలో ఏది Multiple Disabilitiesకు సరైన ఉదాహరణ?",
        options: ["అంధత్వం మాత్రమే", "ఆటిజం మాత్రమే", "వినికిడి లోపం + దృష్టి లోపం", "డైస్లెక్సియా మాత్రమే"],
        correct: 2,
        explanation: "Multiple Disabilities అంటే రెండు లేదా అంతకంటే ఎక్కువ ప్రధాన వైకల్యాలు ఒకే వ్యక్తిలో ఉండటం. వినికిడి లోపం మరియు దృష్టి లోపం కలయిక దీనికి సరైన ఉదాహరణ."
    },
    {
        question: "వినికిడి లోపం గల విద్యార్థుల ప్రారంభ గుర్తింపుకు (Early Identification) అత్యంత ముఖ్యమైనది ఏది?",
        options: ["పాఠశాలలో చేరిన తర్వాత మాత్రమే పరీక్ష", "చిన్న వయస్సులో శ్రవణ పరీక్ష", "పదో తరగతిలో పరీక్ష", "IQ పరీక్ష మాత్రమే"],
        correct: 1,
        explanation: "చిన్న వయస్సులో శ్రవణ పరీక్ష నిర్వహించడం ద్వారా వినికిడి లోపాన్ని త్వరగా గుర్తించవచ్చు. దీంతో తొందరగా జోక్యం చేసుకుని భాషా మరియు విద్యా అభివృద్ధిని మెరుగుపరచవచ్చు."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి.\n\na. Assistive Technology బోధనలో పాల్గొనే అవకాశాలను పెంచుతుంది.\n\nb. Assistive Technology కేవలం కంప్యూటర్ సాఫ్ట్‌వేర్ మాత్రమే.\n\nసరైనది ఏది?",
        options: ["a మాత్రమే", "b మాత్రమే", "a మరియు b", "రెండూ కావు"],
        correct: 0,
        explanation: "Assistive Technologyలో పరికరాలు, సాఫ్ట్‌వేర్, సేవలు మరియు ఇతర సహాయక పరిష్కారాలు ఉంటాయి. ఇవి విద్యార్థుల భాగస్వామ్యాన్ని, స్వతంత్రతను మరియు అభ్యాస అవకాశాలను పెంచుతాయి."
    },
    {
        question: "మేధోమాంద్యం (Intellectual Disability) గల విద్యార్థికి బోధనలో మొదట ప్రాధాన్యత ఇవ్వవలసినది ఏది?",
        options: ["ఉన్నత స్థాయి సిద్ధాంతాలు", "దైనందిన జీవన నైపుణ్యాలు", "పోటీ పరీక్షల శిక్షణ", "సంక్లిష్ట గణితం"],
        correct: 1,
        explanation: "మేధోమాంద్యం గల విద్యార్థులకు మొదట దైనందిన జీవన నైపుణ్యాలు, స్వీయ సంరక్షణ మరియు కార్యనిర్వహణ నైపుణ్యాలను అభివృద్ధి చేయడం అత్యంత ముఖ్యమైన విద్యా లక్ష్యంగా ఉంటుంది."
    },
    {
        question: "క్రింది వాటిలో Hearing Impairment గల విద్యార్థుల కోసం ఉపయోగించే Assistive Technology ఏది?",
        options: ["Perkins Brailler", "Screen Reader", "FM System", "Abacus"],
        correct: 2,
        explanation: "FM System ద్వారా ఉపాధ్యాయుని స్వరం నేరుగా విద్యార్థి వినికిడి పరికరానికి చేరుతుంది. దీంతో నేపథ్య శబ్దం తగ్గి పాఠం స్పష్టంగా వినిపిస్తుంది."
    },
    {
        question: "డైస్గ్రాఫియా (Dysgraphia) ప్రధానంగా ఏ నైపుణ్యాన్ని ప్రభావితం చేస్తుంది?",
        options: ["రాయడం", "వినికిడి", "నడక", "దృష్టి"],
        correct: 0,
        explanation: "డైస్గ్రాఫియా అనేది రాత నైపుణ్యానికి సంబంధించిన అభ్యసన వైకల్యం. అక్షరాల ఆకారం, రాత వేగం, పదాల అమరిక మరియు లిఖిత వ్యక్తీకరణలో ఇబ్బందులు కనిపిస్తాయి."
    },
    {
        question: "ఆటిజం స్పెక్ట్రమ్ డిజార్డర్ (ASD) గల విద్యార్థికి సామాజిక పరస్పర చర్యలను అభివృద్ధి చేయడానికి అత్యంత అనుకూలమైన బోధనా వ్యూహం ఏది?",
        options: ["ఒంటరిగా అన్ని కార్యకలాపాలు చేయించడం", "నిర్మాణాత్మక సహవిద్యార్థి పరస్పర చర్యలు (Structured Peer Interaction)", "కేవలం వర్క్‌షీట్‌లు ఇవ్వడం", "మౌన అధ్యయనం మాత్రమే చేయించడం"],
        correct: 1,
        explanation: "Structured Peer Interaction ద్వారా ASD గల విద్యార్థులు సహవిద్యార్థులతో సురక్షితంగా సంభాషించడం, సహకరించడం మరియు సామాజిక నైపుణ్యాలను అభ్యసించడం సులభమవుతుంది. ఇది సమగ్ర విద్యకు కూడా తోడ్పడుతుంది."
    },
    {
        question: "Choose the synonym of 'Abundant.'",
        options: ["Scarce", "Plenty", "Empty", "Weak"],
        correct: 1,
        explanation: "Abundant means existing in large quantities or more than enough. 'Plenty' has the closest meaning because it refers to a large amount or sufficient supply of something."
    },
    {
        question: "Choose the antonym of 'Ancient.'",
        options: ["Historic", "Old", "Modern", "Primitive"],
        correct: 2,
        explanation: "Ancient refers to something very old or belonging to the distant past. 'Modern' is its opposite because it refers to something current, recent, or belonging to the present time."
    },
    {
        question: "Choose the correct meaning of the idiom:\n\n'A blessing in disguise'",
        options: [
            "A visible reward",
            "Something good that seemed bad at first",
            "A dangerous situation",
            "A forgotten opportunity"
        ],
        correct: 1,
        explanation: "A blessing in disguise describes a situation that appears unfortunate initially but later proves to be beneficial. The hidden advantage becomes clear only after some time has passed."
    },
    {
        question: "Choose the correct meaning of the phrasal verb:\n\n'Look after'",
        options: ["Search for", "Take care of", "Ignore", "Look behind"],
        correct: 1,
        explanation: "The phrasal verb 'look after' means to take care of or be responsible for someone or something. It is commonly used for caring for children, elderly people, or property."
    },
    {
        question: "Choose the word closest in meaning to 'Meticulous.'",
        options: ["Careless", "Thorough", "Lazy", "Ordinary"],
        correct: 1,
        explanation: "Meticulous means showing great attention to detail and being extremely careful. 'Thorough' is the closest synonym because it also means complete, careful, and accurate in every aspect."
    },
    {
        question: "Choose the correct meaning of the idiom:\n\n'Once in a blue moon'",
        options: ["Every month", "Very frequently", "Very rarely", "At midnight"],
        correct: 2,
        explanation: "The idiom 'once in a blue moon' means something happens very rarely or almost never. It is used to describe events that occur only on exceptional occasions."
    },
    {
        question: "Choose the correct phrasal verb to complete the sentence.\n\nThe meeting was ______ because of heavy rain.",
        options: ["carried on", "called off", "looked into", "turned up"],
        correct: 1,
        explanation: "The phrasal verb 'call off' means to cancel an event or activity. Since the meeting did not take place because of heavy rain, 'called off' is the correct choice."
    },
    {
        question: "Choose the synonym of 'Rapid.'",
        options: ["Slow", "Fast", "Weak", "Quiet"],
        correct: 1,
        explanation: "Rapid means happening quickly or at high speed. 'Fast' is the nearest synonym because both words describe quick movement, action, or progress."
    },
    {
        question: "Choose the correct meaning of the idiom:\n\n'At sixes and sevens'",
        options: ["Perfectly arranged", "In confusion", "Very expensive", "Very beautiful"],
        correct: 1,
        explanation: "The idiom 'at sixes and sevens' means being in a state of confusion, disorder, or disorganization. It describes situations where things are not properly arranged."
    },
    {
        question: "Choose the correct meaning of the phrasal verb:\n\n'Bring up'",
        options: ["Raise a child", "Pull down", "Break apart", "Give away"],
        correct: 0,
        explanation: "The phrasal verb 'bring up' commonly means to raise a child. It can also mean introducing a topic during a discussion, depending on the context."
    },
    {
        question: "Choose the antonym of 'Generous.'",
        options: ["Kind", "Liberal", "Selfish", "Helpful"],
        correct: 2,
        explanation: "Generous means willing to give, share, or help others. 'Selfish' is the opposite because it describes someone who thinks mainly about their own interests."
    },
    {
        question: "Choose the word closest in meaning to 'Reluctant.'",
        options: ["Eager", "Unwilling", "Happy", "Brave"],
        correct: 1,
        explanation: "Reluctant means unwilling, hesitant, or not ready to do something. 'Unwilling' is the closest synonym because both express a lack of readiness or desire."
    },
    {
        question: "Choose the correct meaning of the phrasal verb:\n\n'Carry on'",
        options: ["Continue", "Stop", "Forget", "Return"],
        correct: 0,
        explanation: "The phrasal verb 'carry on' means to continue doing something without stopping. It is commonly used to encourage someone to keep working or speaking."
    },
    {
        question: "Choose the correct meaning of the idiom:\n\n'Hit the nail on the head'",
        options: [
            "Strike with a hammer",
            "Do a difficult job",
            "Say exactly the right thing",
            "Work very hard"
        ],
        correct: 2,
        explanation: "The idiom 'hit the nail on the head' means to say or identify something exactly right. It is used when someone gives a perfectly accurate explanation or answer."
    },
    {
        question: "Choose the synonym of 'Benevolent.'",
        options: ["Cruel", "Kind", "Angry", "Jealous"],
        correct: 1,
        explanation: "Benevolent means kind, generous, and well-meaning toward others. 'Kind' is the closest synonym because it describes a caring and compassionate nature."
    },
    {
        question: "Choose the correct meaning of the idiom:\n\n'Burn the midnight oil'",
        options: [
            "Waste electricity",
            "Work or study late into the night",
            "Light a lamp",
            "Sleep very late"
        ],
        correct: 1,
        explanation: "The idiom 'burn the midnight oil' means to work or study until very late at night. It is commonly used when someone spends extra time preparing for exams or completing important work."
    },
    {
        question: "Choose the correct phrasal verb to complete the sentence.\n\nThe police are ______ the matter carefully.",
        options: [
            "looking after",
            "looking into",
            "looking for",
            "looking up"
        ],
        correct: 1,
        explanation: "The phrasal verb 'look into' means to investigate or examine something carefully. Police officers look into cases to collect evidence and determine the facts before reaching a conclusion."
    },
    {
        question: "Choose the synonym of 'Diligent.'",
        options: [
            "Lazy",
            "Careless",
            "Hard-working",
            "Weak"
        ],
        correct: 2,
        explanation: "Diligent means hardworking, careful, and showing persistent effort in completing tasks. A diligent student studies regularly, pays attention to details, and works sincerely to achieve success."
    },
    {
        question: "Choose the correct meaning of the idiom:\n\n'Spill the beans'",
        options: [
            "Waste food",
            "Reveal a secret",
            "Make a mistake while cooking",
            "Become angry"
        ],
        correct: 1,
        explanation: "The idiom 'spill the beans' means to reveal secret or confidential information that was meant to be kept hidden. It is often used when someone accidentally discloses an important secret."
    },
    {
        question: "Choose the correct phrasal verb to complete the sentence.\n\nDespite many difficulties, she ______ her studies and secured first rank.",
        options: [
            "gave up",
            "carried on",
            "turned down",
            "called off"
        ],
        correct: 1,
        explanation: "The phrasal verb 'carry on' means to continue doing something despite challenges or interruptions. In this sentence, she continued her studies and eventually secured the first rank."
    }
];