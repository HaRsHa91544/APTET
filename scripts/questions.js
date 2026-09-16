const SUBJECTS = [
    "Special Education"
];

const QUESTIONS = [
    {
        question: "ASD నిర్ధారణలో ప్రధానంగా పరిగణించబడే రెండు ప్రాథమిక లక్షణాల విభాగాలు ఏవి?",
        options: [
            "మేధస్సు లోపం మరియు అనుకూల ప్రవర్తన లోపం",
            "సామాజిక కమ్యూనికేషన్ లోపాలు మరియు పరిమిత/పునరావృత ప్రవర్తనా విధానాలు",
            "శ్రవణ లోపం మరియు దృష్టి లోపం",
            "జ్ఞాపకశక్తి లోపం మరియు భాషా ఉచ్చారణ లోపం"
        ],
        correct: 1,
        explanation: "ASDలో ప్రధాన లక్షణాలు రెండు విభాగాల్లో కనిపిస్తాయి: సామాజిక కమ్యూనికేషన్ మరియు సామాజిక పరస్పర చర్యలో లోపాలు, అలాగే పరిమితమైన లేదా పునరావృత ప్రవర్తనా విధానాలు."
    },
    {
        question: "ASDలో ఇతరులు చూపిస్తున్న వస్తువు వైపు చూడటం, వస్తువును చూపిస్తూ ఇతరుల దృష్టిని ఆకర్షించడం వంటి సామర్థ్యాన్ని ప్రధానంగా ఏ పదంతో సూచిస్తారు?",
        options: [
            "Joint Attention",
            "Motor Planning",
            "Self-Monitoring",
            "Response Generalization"
        ],
        correct: 0,
        explanation: "Joint attention అనేది ఒక వస్తువు లేదా సంఘటనపై మరొక వ్యక్తితో దృష్టిని పంచుకోవడం. చూపించడం, చూడటం, దృష్టిని ఇతరులవైపు మళ్లించడం దీనిలో ముఖ్యమైన ప్రవర్తనలు."
    },
    {
        question: "ఒక చిన్నారి ఇతరులు చెప్పిన పదాలు లేదా వాక్యాలను అర్థవంతమైన స్వతంత్ర సమాధానం ఇవ్వకుండా పదేపదే పునరావృతం చేస్తుంటే దీనిని ఏమంటారు?",
        options: [
            "Aphasia",
            "Dysphasia",
            "Echolalia",
            "Apraxia"
        ],
        correct: 2,
        explanation: "Echolalia అంటే ఇతరులు పలికిన పదాలు లేదా వాక్యాలను పునరావృతం చేయడం. ASDలో ఇది తక్షణంగా లేదా కొంత ఆలస్యంగా వినిపించే పునరావృత భాషగా కనిపించవచ్చు."
    },
    {
        question: "ASDలో శబ్దం, వెలుతురు లేదా స్పర్శ వంటి ఉద్దీపనలకు సాధారణం కంటే అధికంగా స్పందించడం ఏ అంశానికి సంబంధించినది?",
        options: [
            "Sensory hyperreactivity",
            "Semantic processing",
            "Adaptive functioning",
            "Expressive language delay"
        ],
        correct: 0,
        explanation: "Sensory hyperreactivityలో శబ్దం, వెలుతురు, వాసన లేదా స్పర్శ వంటి sensory inputsకు వ్యక్తి సాధారణం కంటే అధికంగా స్పందించవచ్చు. ఇది ASDలో కనిపించే sensory లక్షణం."
    },
    {
        question: "M-CHAT-R/F ప్రధానంగా ఏ ప్రయోజనం కోసం ఉపయోగించబడుతుంది?",
        options: [
            "ASDకు సంబంధించిన ప్రారంభ స్క్రీనింగ్ కోసం",
            "మేధస్సు స్థాయిని కొలవడానికి",
            "శ్రవణ లోపం తీవ్రతను నిర్ధారించడానికి",
            "అనుకూల ప్రవర్తనను కొలవడానికి"
        ],
        correct: 0,
        explanation: "M-CHAT-R/F చిన్న పిల్లల్లో autism spectrum disorder ప్రమాదాన్ని గుర్తించడానికి ఉపయోగించే ప్రారంభ screening సాధనం. ఇది నిర్ధారణ చేయదు; అవసరమైతే తదుపరి evaluationకు సహాయపడుతుంది."
    },
    {
        question: "ADOS-2 యొక్క ప్రధాన లక్షణం ఏది?",
        options: [
            "తల్లిదండ్రులతో నిర్మిత ఇంటర్వ్యూ నిర్వహించడం",
            "పిల్లవాడి ప్రత్యక్ష ప్రవర్తనా పరిశీలన ద్వారా ASD సంబంధిత లక్షణాలను అంచనా వేయడం",
            "శ్రవణ పరిమితిని audiogram ద్వారా కొలవడం",
            "విద్యా సాధనాన్ని ప్రామాణిక పరీక్ష ద్వారా కొలవడం"
        ],
        correct: 1,
        explanation: "ADOS-2 అనేది Autism Diagnostic Observation Schedule, Second Edition. శిక్షణ పొందిన పరిశీలకుడు నిర్మిత కార్యకలాపాల సమయంలో వ్యక్తి సామాజిక మరియు కమ్యూనికేషన్ ప్రవర్తనలను ప్రత్యక్షంగా అంచనా వేస్తాడు."
    },
    {
        question: "Autism Diagnostic Interview-Revised (ADI-R) ప్రధానంగా ఏ విధమైన అంచనా పద్ధతికి ఉదాహరణ?",
        options: [
            "ప్రత్యక్ష క్లినికల్ పరిశీలన",
            "తల్లిదండ్రులు/సంరక్షకులతో నిర్మిత ఇంటర్వ్యూ",
            "పనితీరు ఆధారిత విద్యా పరీక్ష",
            "మోటార్ నైపుణ్యాల ప్రత్యక్ష కొలత"
        ],
        correct: 1,
        explanation: "ADI-R అనేది autism లక్షణాల గురించి తల్లిదండ్రులు లేదా సంరక్షకుల నుంచి అభివృద్ధి చరిత్రను సేకరించే structured interview. ఇది diagnostic assessmentలో ముఖ్యమైన caregiver-based సమాచారం అందిస్తుంది."
    },
    {
        question: "CARS-2 వంటి సాధనం ASD అంచనాలో ప్రధానంగా ఏ అంశాన్ని పరిశీలించడానికి ఉపయోగపడుతుంది?",
        options: [
            "ASD సంబంధిత ప్రవర్తనా లక్షణాలు మరియు వాటి తీవ్రత",
            "కేవలం శ్రవణ threshold",
            "కేవలం చదవడం మరియు రాయడం సామర్థ్యం",
            "కేవలం వృత్తి నైపుణ్యాలు"
        ],
        correct: 0,
        explanation: "CARS-2 అనేది Autism సంబంధిత లక్షణాలను మరియు వాటి తీవ్రతను అంచనా వేయడానికి ఉపయోగించే rating scale. సామాజిక, కమ్యూనికేషన్ మరియు ప్రవర్తనా లక్షణాలు ఇందులో పరిగణించబడతాయి."
    },
    {
        question: "ఒక ASD విద్యార్థి ఉపాధ్యాయుడు చెప్పిన ప్రశ్నకు సమాధానం ఇవ్వకుండా అదే ప్రశ్నను తిరిగి పలుకుతున్నాడు. ఈ సందర్భంలో ఉపాధ్యాయుడు ముందుగా ఏ అంశాన్ని పరిశీలించడం అత్యంత సముచితం?",
        options: [
            "అతను ఉద్దేశపూర్వకంగా అవిధేయత చూపుతున్నాడని నిర్ణయించడం",
            "పునరావృత మాటల వెనుక ఉన్న కమ్యూనికేషన్ ఉద్దేశాన్ని గుర్తించడం",
            "మాట్లాడకుండా పూర్తిగా నిరోధించడం",
            "ప్రతి సందర్భంలో శిక్షను ఉపయోగించడం"
        ],
        correct: 1,
        explanation: "Echolalia కొన్నిసార్లు కమ్యూనికేషన్ ఉద్దేశాన్ని కలిగి ఉండవచ్చు. అందువల్ల ఉపాధ్యాయుడు ప్రవర్తనను అవిధేయతగా భావించకుండా, విద్యార్థి ఏమి వ్యక్తపరచాలనుకుంటున్నాడో ముందుగా పరిశీలించాలి."
    },
    {
        question: "Applied Behaviour Analysis (ABA)లో ఒక ప్రవర్తనకు ముందు జరిగే పరిస్థితిని సాధారణంగా ఏ పదంతో సూచిస్తారు?",
        options: [
            "Consequence",
            "Antecedent",
            "Reinforcer",
            "Prompt"
        ],
        correct: 1,
        explanation: "ABAలో Antecedent అనేది ప్రవర్తనకు ముందు జరిగే సంఘటన, పరిస్థితి లేదా ఉద్దీపన. Behavior తరువాత జరిగేది consequenceగా పిలుస్తారు. ఈ ABC నమూనా ప్రవర్తన విశ్లేషణలో ఉపయోగపడుతుంది."
    },
    {
        question: "ఒక ASD విద్యార్థి సరైన అభ్యర్థన చేసిన వెంటనే ఉపాధ్యాయుడు అతనికి ఇష్టమైన కార్యకలాపాన్ని అందిస్తున్నాడు. ఫలితంగా ఆ అభ్యర్థనా ప్రవర్తన పెరిగింది. ఇది ఏ సూత్రానికి ఉదాహరణ?",
        options: [
            "Positive reinforcement",
            "Response cost",
            "Extinction",
            "Negative punishment"
        ],
        correct: 0,
        explanation: "Positive reinforcementలో ప్రవర్తన తరువాత ఇష్టమైన ఉద్దీపనను అందించడం ద్వారా ఆ ప్రవర్తన భవిష్యత్తులో పెరుగుతుంది. ఇక్కడ ఇష్టమైన కార్యకలాపం అభ్యర్థనను బలపరుస్తుంది."
    },
    {
        question: "Discrete Trial Training (DTT)లో సాధారణంగా కనిపించే ముఖ్యమైన క్రమం ఏది?",
        options: [
            "Instruction/antecedent → response → consequence",
            "Consequence → response → instruction",
            "Response → extinction → antecedent",
            "Reinforcer → punishment → response"
        ],
        correct: 0,
        explanation: "DTTలో సాధారణంగా antecedent లేదా instruction ఇవ్వబడుతుంది, విద్యార్థి response ఇస్తాడు, తరువాత consequence అందుతుంది. ఈ స్పష్టమైన నిర్మాణం నైపుణ్యాలను చిన్న trialsగా బోధించడానికి ఉపయోగపడుతుంది."
    },
    {
        question: "ఒక విద్యార్థి తరగతిలో అరుస్తున్నాడు. ఉపాధ్యాయుడు కేవలం \"అరచడం ఆపు\" అని చెప్పడం బదులు, ఆ ప్రవర్తన ఎప్పుడు జరుగుతోంది మరియు దాని తరువాత ఏమి జరుగుతుందో పరిశీలిస్తున్నాడు. ఈ ప్రక్రియకు అత్యంత సముచితమైనది ఏది?",
        options: [
            "Functional Behaviour Assessment",
            "Intelligence Testing",
            "Audiological Assessment",
            "Curriculum-Based Measurement"
        ],
        correct: 0,
        explanation: "Functional Behaviour Assessment ప్రవర్తనకు ముందు జరిగే పరిస్థితులు, ప్రవర్తన మరియు తరువాతి పరిణామాలను పరిశీలిస్తుంది. దీని ద్వారా ప్రవర్తన యొక్క సాధ్యమైన functionను గుర్తించి సముచిత intervention రూపొందించవచ్చు."
    },
    {
        question: "ASD విద్యార్థికి \"బ్యాగ్ తీసుకో → పుస్తకం పెట్టు → జిప్ మూసివేయి → బ్యాగ్ తీసుకెళ్లు\" వంటి చిన్న దశలుగా ఒక నైపుణ్యాన్ని విభజించి బోధించడం ఏ పద్ధతికి దగ్గరగా ఉంటుంది?",
        options: [
            "Task analysis",
            "Free association",
            "Discovery learning",
            "Overcorrection"
        ],
        correct: 0,
        explanation: "Task analysisలో సంక్లిష్టమైన నైపుణ్యాన్ని వరుసగా ఉండే చిన్న, నిర్వహించగల దశలుగా విభజిస్తారు. తరువాత విద్యార్థికి ఆ దశలను క్రమంగా నేర్పి స్వతంత్ర పనితీరును అభివృద్ధి చేస్తారు."
    },
    {
        question: "క్రింది వాటిలో ASD విద్యార్థికి రోజువారీ కార్యకలాపాల క్రమాన్ని ముందుగానే అర్థం చేసుకోవడానికి ఎక్కువగా సహాయపడేది ఏది?",
        options: [
            "Visual schedule",
            "Intelligence quotient chart",
            "Audiogram",
            "Norm-referenced achievement test"
        ],
        correct: 0,
        explanation: "Visual schedule చిత్రాలు, చిహ్నాలు లేదా పదాల ద్వారా కార్యకలాపాల క్రమాన్ని చూపిస్తుంది. ఇది ASD విద్యార్థులకు అంచనా, మార్పుల అవగాహన మరియు రోజువారీ routineను అనుసరించడంలో సహాయపడుతుంది."
    },
    {
        question: "TEACCH విధానంలో ASD విద్యార్థులకు బోధనలో ముఖ్యంగా ఏ అంశానికి ప్రాధాన్యత ఉంటుంది?",
        options: [
            "Structured teaching మరియు visual organisation",
            "కేవలం మౌఖిక ఉపన్యాసం",
            "శిక్ష ఆధారిత ప్రవర్తనా నియంత్రణ",
            "కేవలం స్వేచ్ఛా ఆట"
        ],
        correct: 0,
        explanation: "TEACCHలో structured teaching, physical organisation, visual supports మరియు predictable routinesకు ప్రాధాన్యత ఉంటుంది. ఇవి ASD విద్యార్థులు పనులు, అంచనాలు మరియు పరిసరాలను సులభంగా అర్థం చేసుకోవడానికి సహాయపడతాయి."
    },
    {
        question: "DIR/Floortime విధానం ప్రధానంగా ఏ దృక్పథానికి దగ్గరగా ఉంటుంది?",
        options: [
            "Developmental approach",
            "Purely medical approach",
            "Psychometric approach",
            "Audiological approach"
        ],
        correct: 0,
        explanation: "DIR/Floortime developmental మరియు relationship-based approach. ఇది పిల్లవాడి అభివృద్ధి స్థాయి, వ్యక్తిగత తేడాలు మరియు సంబంధాల ఆధారంగా సామాజిక-భావోద్వేగ అభివృద్ధిని ప్రోత్సహించడానికి ఉపయోగపడుతుంది."
    },
    {
        question: "ASD విద్యార్థి సామాజిక సంభాషణలో ఇబ్బంది పడుతున్నప్పుడు సహచరులను శిక్షణ ఇచ్చి, సహజ తరగతి పరిస్థితుల్లో సంభాషణకు అవకాశాలు కల్పించడం ఏ వ్యూహానికి ఉదాహరణ?",
        options: [
            "Peer-mediated intervention",
            "Response cost",
            "Sensory deprivation",
            "Rote memorization"
        ],
        correct: 0,
        explanation: "Peer-mediated interventionలో సహచరులకు తగిన సామాజిక పరస్పర చర్యలను ప్రోత్సహించే విధంగా శిక్షణ ఇస్తారు. సహజ తరగతి సందర్భాల్లో సంభాషణ మరియు సామాజిక నైపుణ్యాల సాధనకు అవకాశాలు లభిస్తాయి."
    },
    {
        question: "ASD ఉన్న విద్యార్థికి మాట్లాడటం ద్వారా అవసరాన్ని వ్యక్తపరచడం కష్టంగా ఉన్నప్పుడు, చిత్రాలు/చిహ్నాలు ఉపయోగించి అభ్యర్థనలు చేయించేందుకు రూపొందించిన వ్యవస్థ ఏది?",
        options: [
            "PECS",
            "CARS-2",
            "ADI-R",
            "Vineland-3"
        ],
        correct: 0,
        explanation: "PECS అంటే Picture Exchange Communication System. ఇది చిత్రాలను ఉపయోగించి వ్యక్తి అవసరాలు, అభ్యర్థనలు లేదా సందేశాలను కమ్యూనికేట్ చేయడానికి సహాయపడే augmentative and alternative communication విధానం."
    },
    {
        question: "Speech-generating device (SGD) ప్రధానంగా ఏ ప్రయోజనాన్ని అందిస్తుంది?",
        options: [
            "ప్రత్యామ్నాయ లేదా సహాయక కమ్యూనికేషన్‌కు output అందించడం",
            "శ్రవణ threshold కొలవడం",
            "మేధస్సు గుణకం లెక్కించడం",
            "ప్రవర్తనా తీవ్రతను స్కోర్ చేయడం"
        ],
        correct: 0,
        explanation: "Speech-generating device వినియోగదారు ఎంచుకున్న సందేశాన్ని synthesized లేదా recorded speechగా output చేస్తుంది. మాట్లాడటంలో ఇబ్బంది ఉన్న వ్యక్తులకు ఇది augmentative and alternative communicationలో సహాయపడుతుంది."
    },
    {
        question: "ఒక ASD విద్యార్థికి మాట్లాడటం ద్వారా సమాధానం ఇవ్వడం కష్టంగా ఉన్నప్పటికీ, టైప్ చేయడం ద్వారా తన సమాధానాలను వ్యక్తపరచగలడు. అతని అభ్యాసంలో ఏ AT వినియోగం అత్యంత సముచితం?",
        options: [
            "Alternative input/output method",
            "Audiometric masking",
            "Visual acuity testing",
            "Physical restraint"
        ],
        correct: 0,
        explanation: "టైపింగ్ వంటి alternative input/output method విద్యార్థికి మాట్లాడటానికి బదులుగా తన ఆలోచనలను వ్యక్తపరచే మార్గాన్ని అందిస్తుంది. ఇది అతని వ్యక్తిగత కమ్యూనికేషన్ అవసరానికి సరిపోతుంది."
    },
    {
        question: "Assistive Technology కోసం need assessment చేసేటప్పుడు కింది వాటిలో ఏ అంశాలను పరిగణనలోకి తీసుకోవడం అత్యంత సముచితం?",
        options: [
            "విద్యార్థి మాత్రమే",
            "పరికరం ధర మాత్రమే",
            "విద్యార్థి, పరిసరాలు, పనులు మరియు అవసరమైన సాధనం",
            "ఉపాధ్యాయుని వ్యక్తిగత అభిరుచి మాత్రమే"
        ],
        correct: 2,
        explanation: "AT need assessmentలో వ్యక్తి సామర్థ్యాలు, అవసరాలు, పనులు, పరిసరాలు మరియు అందుబాటులో ఉన్న సాధనాల అనుకూలతను పరిగణించాలి. కేవలం పరికరం లేదా ధర ఆధారంగా నిర్ణయం తీసుకోకూడదు."
    },
    {
        question: "ASD విద్యార్థి గణిత సమస్యను పరిష్కరించగలిగినా, సమూహ కార్యకలాపంలో తన వంతు కోసం వేచి ఉండలేకపోతున్నాడు. దీనికి సంబంధించి పాఠ్య ప్రణాళికలో ఏ curricular focus మరింత అవసరం?",
        options: [
            "Social skills",
            "మాత్రమే rote memorisation",
            "మాత్రమే handwriting speed",
            "మాత్రమే auditory discrimination"
        ],
        correct: 0,
        explanation: "గణిత సామర్థ్యం ఉన్నప్పటికీ turn-takingలో ఇబ్బంది ఉంటే social skills instruction అవసరం. సమూహ కార్యకలాపాల్లో వేచి ఉండటం, పంచుకోవడం మరియు పరస్పర చర్య వంటి నైపుణ్యాలను బోధించాలి."
    },
    {
        question: "క్రింది వాటిలో ASD మరియు Social (Pragmatic) Communication Disorder మధ్య differential assessmentలో ముఖ్యమైన భేదం ఏది?",
        options: [
            "ASDలో restricted/repetitive behaviours కూడా ఉండవచ్చు; SCDలో అవి ప్రధాన diagnostic feature కావు",
            "ASDలో communication difficulties ఎప్పుడూ ఉండవు",
            "SCDలో తప్పనిసరిగా intellectual disability ఉంటుంది",
            "ASD మరియు SCD మధ్య ఎటువంటి diagnostic distinction లేదు"
        ],
        correct: 0,
        explanation: "ASDలో సామాజిక కమ్యూనికేషన్ లోపాలతో పాటు restricted లేదా repetitive behaviours ఉంటాయి. Social Communication Disorderలో సామాజిక కమ్యూనికేషన్ లోపాలు ఉంటాయి కానీ ASDకు అవసరమైన repetitive features ఉండవు."
    },
    {
        question: "ఒక విద్యార్థి తనకు తెలిసిన వ్యక్తితో మాట్లాడేటప్పుడు సులభంగా సంభాషిస్తాడు. కానీ కొత్త వ్యక్తిని కలిసినప్పుడు సంభాషణ ప్రారంభించడం, విషయం మార్చడం మరియు ఎదుటివారి ప్రతిస్పందనను అర్థం చేసుకోవడంలో ఇబ్బంది పడుతున్నాడు. ఇది ASDలో ప్రధానంగా ఏ ప్రాంతంతో సంబంధం కలిగి ఉంటుంది?",
        options: [
            "Social communication",
            "Gross motor development",
            "Visual acuity",
            "Phonological awareness"
        ],
        correct: 0,
        explanation: "సంభాషణ ప్రారంభించడం, విషయం మార్చడం మరియు ఇతరుల ప్రతిస్పందనలను అర్థం చేసుకోవడం social communicationకు సంబంధించినవి. ASDలో సామాజిక సందర్భానికి అనుగుణంగా కమ్యూనికేషన్ ఉపయోగించడం కష్టంగా ఉండవచ్చు."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి:\n\ni) ASDలో restricted and repetitive behavioursలో repetitive movements ఉండవచ్చు.\nii) ASDలో sensory inputకు unusual responses కనిపించవచ్చు.\niii) ASDలో ప్రతి వ్యక్తికి తప్పనిసరిగా intellectual disability ఉంటుంది.\n\nసరైన సమాధానాన్ని గుర్తించండి.",
        options: [
            "i మాత్రమే",
            "i మరియు ii మాత్రమే",
            "ii మరియు iii మాత్రమే",
            "i, ii మరియు iii"
        ],
        correct: 1,
        explanation: "ASDలో repetitive movements మరియు sensory inputsకు unusual responses కనిపించవచ్చు. అయితే ప్రతి ASD వ్యక్తికి intellectual disability తప్పనిసరి కాదు; మేధస్సు సామర్థ్యాలు వ్యక్తుల మధ్య విభిన్నంగా ఉంటాయి."
    },
    {
        question: "క్రింది ప్రకటనలలో ASD విద్యార్థుల inclusive educationకు సంబంధించి సరైనవి ఏవి?\n\ni) Visual supports instructionను స్పష్టంగా చేయడంలో సహాయపడవచ్చు.\nii) ప్రతి ASD విద్యార్థికి ఒకే instructional strategy తప్పనిసరిగా ఉపయోగించాలి.\niii) Individual needs ఆధారంగా curricular adaptations చేయవచ్చు.",
        options: [
            "i మాత్రమే",
            "ii మాత్రమే",
            "i మరియు iii మాత్రమే",
            "i, ii మరియు iii"
        ],
        correct: 2,
        explanation: "Visual supports instructionను స్పష్టంగా చేయవచ్చు. ASD విద్యార్థుల అవసరాలు వ్యక్తిగతంగా మారుతాయి కాబట్టి ఒకే strategy అందరికీ వర్తించదు; అవసరానికి అనుగుణంగా curricular adaptations చేయవచ్చు."
    },
    {
        question: "కింది వాటిని సరైన జతలతో సరిపోల్చండి.\n\nColumn-I\n\ni) ADOS-2\nii) ADI-R\niii) CARS-2\niv) M-CHAT-R/F\n\nColumn-II\n\na) Caregiver-based structured interview\nb) Early screening for autism risk\nc) Behavioural rating of autism characteristics\nd) Direct observational assessment",
        options: [
            "i-d, ii-a, iii-c, iv-b",
            "i-a, ii-d, iii-b, iv-c",
            "i-c, ii-b, iii-d, iv-a",
            "i-b, ii-c, iii-a, iv-d"
        ],
        correct: 0,
        explanation: "ADOS-2 ప్రత్యక్ష observational assessment, ADI-R caregiver interview, CARS-2 autism characteristics rating, M-CHAT-R/F early screening కోసం ఉపయోగించబడతాయి. అందువల్ల సరైన matching i-d, ii-a, iii-c, iv-b."
    },
    {
        question: "ASD విద్యార్థికి ఒక కొత్త self-care నైపుణ్యాన్ని బోధించేటప్పుడు క్రింది దశలను సరైన క్రమంలో అమర్చండి.\n\ni) నైపుణ్యాన్ని చిన్న చిన్న దశలుగా విభజించడం\nii) ప్రతి దశను విద్యార్థికి బోధించడం\niii) అవసరమైనప్పుడు prompting అందించడం\niv) నైపుణ్యం స్వతంత్రంగా చేయగలిగే స్థాయిని అంచనా వేయడం",
        options: [
            "i → ii → iii → iv",
            "ii → i → iv → iii",
            "iii → i → ii → iv",
            "iv → iii → ii → i"
        ],
        correct: 0,
        explanation: "మొదట నైపుణ్యాన్ని చిన్న దశలుగా విభజిస్తారు. తరువాత దశలను బోధించి, అవసరమైన prompts అందిస్తారు. చివరగా విద్యార్థి స్వతంత్రంగా చేయగలిగే స్థాయిని అంచనా వేస్తారు."
    },
    {
        question: "ఒక ASD విద్యార్థి lunch break సమయంలో ఇతరులతో మాట్లాడకుండా ఒంటరిగా ఉంటున్నాడు. ఉపాధ్యాయుడు అతనికి బలవంతంగా మాట్లాడమని చెప్పకుండా, ఆసక్తి ఉన్న peerతో structured activity ఏర్పాటు చేసి, turn-taking మరియు simple conversationను practice చేయిస్తున్నాడు. ఈ జోక్యం ప్రధానంగా ఏ విధానాల కలయికను ప్రతిబింబిస్తుంది?",
        options: [
            "Social approach మరియు naturalistic teaching",
            "Punishment approach మరియు sensory isolation",
            "Psychometric approach మరియు direct assessment",
            "Medical approach మరియు academic remediation"
        ],
        correct: 0,
        explanation: "ఆసక్తి ఉన్న peerతో సహజ lunch సందర్భంలో structured interaction కల్పించడం social approach మరియు naturalistic teachingను ప్రతిబింబిస్తుంది. ఇది turn-taking, communication వంటి సామాజిక నైపుణ్యాలను సహజంగా అభ్యసింపజేస్తుంది."
    }
];