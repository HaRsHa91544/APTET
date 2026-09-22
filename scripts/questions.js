const SUBJECTS = [
    "Special Education"
];

const QUESTIONS = [
    {
        question: "Vineland Adaptive Behavior Scales ప్రధానంగా ఏ అంశాన్ని అంచనా వేయడానికి ఉపయోగిస్తారు?",
        options: [
            "మేధస్సు స్థాయి",
            "అనుకూల ప్రవర్తన (Adaptive Behaviour)",
            "శ్రవణ సామర్థ్యం",
            "దృశ్య-చలన సమన్వయం"
        ],
        correct: 1,
        explanation: "Vineland Adaptive Behavior Scales వ్యక్తి యొక్క adaptive behaviourను అంచనా వేస్తుంది. ఇందులో communication, daily living skills, socialization మరియు motor skills వంటి functional domains ప్రధానంగా పరిశీలించబడతాయి."
    },
    {
        question: "ప్రత్యేక అవసరాలు గల విద్యార్థుల Screening యొక్క ప్రధాన ఉద్దేశ్యం ఏది?",
        options: [
            "తుది నిర్ధారణ చేయడం",
            "IEPను తుది రూపంలో రూపొందించడం",
            "మరింత సమగ్ర assessment అవసరమున్న విద్యార్థులను గుర్తించడం",
            "విద్యార్థి సాధించిన మార్కులను grade చేయడం"
        ],
        correct: 2,
        explanation: "Screening అనేది risk లేదా suspected difficulty ఉన్న విద్యార్థులను ప్రారంభంగా గుర్తించే ప్రక్రియ. ఇది తుది diagnosis కాదు; అవసరమైతే comprehensive assessmentకు referral చేయడానికి సహాయపడుతుంది."
    },
    {
        question: "Curriculum-Based Assessment (CBA) యొక్క ముఖ్య లక్షణం ఏది?",
        options: [
            "విద్యార్థి బోధించబడుతున్న curriculumలోని అంశాలపై పనితీరును అంచనా వేయడం",
            "విద్యార్థిని జాతీయ ప్రమాణాలతో మాత్రమే పోల్చడం",
            "కేవలం మేధస్సును కొలవడం",
            "వైద్యపరమైన diagnosis చేయడం"
        ],
        correct: 0,
        explanation: "Curriculum-Based Assessment విద్యార్థి ప్రస్తుతం బోధించబడుతున్న curriculumలోని skills మరియు contentపై ఎలా పనిచేస్తున్నాడో కొలుస్తుంది. Instructional planning మరియు progress monitoringకు ఇది ఉపయోగపడుతుంది."
    },
    {
        question: "Criterion-Referenced Assessmentలో విద్యార్థి పనితీరు ప్రధానంగా దేనితో పోల్చబడుతుంది?",
        options: [
            "అదే వయస్సు గల విద్యార్థుల సగటుతో",
            "తరగతిలో అత్యధిక మార్కులు సాధించిన విద్యార్థితో",
            "జాతీయ నమూనా సమూహంతో",
            "ముందుగా నిర్ణయించిన ప్రమాణాలు లేదా learning criteriaతో"
        ],
        correct: 3,
        explanation: "Criterion-Referenced Assessmentలో విద్యార్థి పనితీరును ముందుగా నిర్ణయించిన learning criteria లేదా standardsతో పోలుస్తారు. ఇతర విద్యార్థుల performance ఆధారంగా relative ranking చేయడం దీని ప్రధాన ఉద్దేశ్యం కాదు."
    },
    {
        question: "ఒక విద్యార్థికి intervention ప్రారంభించే ముందు అతని ప్రస్తుత పనితీరును నమోదు చేస్తారు. ఈ ప్రారంభ పనితీరు కొలతను ఏమంటారు?",
        options: [
            "Summative evaluation",
            "Baseline",
            "Norm score",
            "Final evaluation"
        ],
        correct: 1,
        explanation: "Baseline అనేది intervention ప్రారంభానికి ముందు విద్యార్థి ప్రస్తుత పనితీరును నమోదు చేసిన ప్రారంభ కొలత. తరువాత intervention ప్రభావాన్ని మరియు విద్యార్థి progressను baselineతో పోల్చవచ్చు."
    },
    {
        question: "బోధన జరుగుతున్న సమయంలో విద్యార్థి పురోగతిని తెలుసుకొని, అవసరమైతే బోధనా వ్యూహాన్ని మార్చడానికి నిర్వహించే evaluation ఏది?",
        options: [
            "Summative evaluation",
            "Diagnostic evaluation",
            "Formative evaluation",
            "Placement evaluation"
        ],
        correct: 2,
        explanation: "Formative evaluation బోధన జరుగుతున్న సమయంలో విద్యార్థి progressను నిరంతరం పరిశీలిస్తుంది. వచ్చిన సమాచారాన్ని ఆధారంగా teacher instructional strategies, supports లేదా teaching methodsను మార్చవచ్చు."
    },
    {
        question: "విద్యార్థి వివిధ కాలాల్లో రూపొందించిన పనులు, ప్రాజెక్టులు మరియు రచనలను క్రమబద్ధంగా సేకరించి అతని అభివృద్ధిని అంచనా వేయడం ఏ assessment విధానం?",
        options: [
            "Portfolio assessment",
            "Norm-referenced assessment",
            "Screening",
            "Sociometric assessment"
        ],
        correct: 0,
        explanation: "Portfolio assessmentలో విద్యార్థి వివిధ సమయాల్లో రూపొందించిన పనులు, projects, రచనలు వంటి evidenceను క్రమబద్ధంగా సేకరిస్తారు. దీనివల్ల learning progress, development మరియు achievementsను సమగ్రంగా అంచనా వేయవచ్చు."
    },
    {
        question: "విద్యార్థి తరగతిలో పదేపదే disruptive behaviour ప్రదర్శిస్తున్నాడు. ఆ ప్రవర్తనకు ముందు ఏమి జరుగుతుంది, ప్రవర్తన ఏమిటి, తర్వాత ఏమి జరుగుతుందో పరిశీలించడానికి ఉపయోగించే విధానం ఏది?",
        options: [
            "IQ assessment",
            "Portfolio assessment",
            "Curriculum-based measurement",
            "ABC analysis"
        ],
        correct: 3,
        explanation: "ABC Analysisలో Antecedent, Behaviour మరియు Consequenceలను పరిశీలిస్తారు. ప్రవర్తనకు ముందు పరిస్థితి, ప్రవర్తన స్వరూపం, తరువాత జరిగే పరిణామాలను గుర్తించడం ద్వారా behavioural functionను అర్థం చేసుకోవచ్చు."
    },
    {
        question: "విద్యార్థి సామర్థ్యాలను మాత్రమే కాకుండా, ఇంటి, పాఠశాల మరియు సమాజంలోని వాతావరణ పరిస్థితులు అతని పనితీరును ఎలా ప్రభావితం చేస్తున్నాయో పరిశీలించే assessment ఏది?",
        options: [
            "Norm-referenced assessment",
            "Ecological assessment",
            "Intelligence testing",
            "Screening assessment"
        ],
        correct: 1,
        explanation: "Ecological assessment విద్యార్థి functioningపై home, school మరియు community environments ప్రభావాన్ని పరిశీలిస్తుంది. వ్యక్తి సామర్థ్యాలతో పాటు environmental demands, supports మరియు barriersను కూడా పరిగణనలోకి తీసుకుంటుంది."
    },
    {
        question: "Dynamic Assessment సాధారణంగా ఏ విధానాన్ని ఎక్కువగా కలిగి ఉంటుంది?",
        options: [
            "Test మాత్రమే నిర్వహించి score ఇవ్వడం",
            "కేవలం గత academic recordsను పరిశీలించడం",
            "Pre-test, mediated learning/intervention మరియు post-test ద్వారా learning potentialను పరిశీలించడం",
            "విద్యార్థిని ఇతర విద్యార్థులతో మాత్రమే పోల్చడం"
        ],
        correct: 2,
        explanation: "Dynamic Assessmentలో pre-test, mediated learning లేదా intervention, తరువాత post-test నిర్వహిస్తారు. విద్యార్థి ప్రస్తుతం తెలిసినదానితో పాటు instruction ద్వారా ఎంత learning potential చూపగలడో అంచనా వేయడం లక్ష్యం."
    },
    {
        question: "IEPలో educational goalsను రూపొందించేటప్పుడు అత్యంత సముచితమైన లక్షణం ఏది?",
        options: [
            "కొలవగలిగే (measurable) లక్ష్యాలుగా ఉండాలి",
            "చాలా సాధారణంగా ఉండాలి",
            "ఉపాధ్యాయుని వ్యక్తిగత అభిప్రాయంపై ఆధారపడాలి",
            "అన్ని విద్యార్థులకు ఒకే విధంగా ఉండాలి"
        ],
        correct: 0,
        explanation: "IEP goals స్పష్టమైన, measurable మరియు విద్యార్థి అవసరాలకు అనుగుణంగా ఉండాలి. కొలవగలిగే లక్ష్యాలు progress monitoringను సులభతరం చేసి intervention ప్రభావాన్ని అంచనా వేయడానికి సహాయపడతాయి."
    },
    {
        question: "IEPలో Present Level of Academic Achievement and Functional Performance ప్రధానంగా దేనిని వివరిస్తుంది?",
        options: [
            "విద్యార్థి భవిష్యత్ ఉద్యోగాన్ని",
            "పాఠశాల మొత్తం academic performanceను",
            "తల్లిదండ్రుల విద్యా స్థాయిని",
            "విద్యార్థి ప్రస్తుత academic మరియు functional పనితీరును"
        ],
        correct: 3,
        explanation: "Present Level of Academic Achievement and Functional Performance విద్యార్థి ప్రస్తుత academic skills మరియు functional abilitiesను వివరిస్తుంది. ఇది measurable IEP goals మరియు appropriate services రూపొందించడానికి ఆధారంగా పనిచేస్తుంది."
    },
    {
        question: "IEPలో నిర్దేశించిన intervention ద్వారా విద్యార్థి పురోగతి ఆశించిన స్థాయిలో లేకపోతే మొదట చేయవలసిన సముచిత చర్య ఏది?",
        options: [
            "IEPను పూర్తిగా రద్దు చేయడం",
            "assessment dataను పరిశీలించి instructional planను సమీక్షించడం",
            "విద్యార్థిని తరగతి నుండి తొలగించడం",
            "అదే teaching methodను ఎటువంటి మార్పు లేకుండా కొనసాగించడం"
        ],
        correct: 1,
        explanation: "Expected progress లేకపోతే ముందుగా assessment మరియు progress-monitoring dataను పరిశీలించాలి. ఆ evidence ఆధారంగా instructional strategies, supports లేదా intervention planను అవసరానికి అనుగుణంగా సవరించాలి."
    },
    {
        question: "ప్రత్యేక అవసరాలు గల విద్యార్థి assessmentలో multidisciplinary approach అంటే:",
        options: [
            "ఒకే ఉపాధ్యాయుడు అన్ని అంశాలను అంచనా వేయడం",
            "తల్లిదండ్రులు మాత్రమే assessment చేయడం",
            "వివిధ నిపుణులు తమ తమ పరిజ్ఞానాన్ని సమన్వయం చేసి assessment చేయడం",
            "కేవలం standardized test score ఆధారంగా నిర్ణయం తీసుకోవడం"
        ],
        correct: 2,
        explanation: "Multidisciplinary approachలో teachers, psychologists, therapists మరియు ఇతర relevant professionals తమ ప్రత్యేక పరిజ్ఞానాన్ని ఉపయోగించి assessment informationను సమన్వయం చేస్తారు. దీనివల్ల విద్యార్థి needsపై సమగ్ర అవగాహన ఏర్పడుతుంది."
    },
    {
        question: "IEP అభివృద్ధిలో తల్లిదండ్రుల భాగస్వామ్యం ఎందుకు ముఖ్యమైనది?",
        options: [
            "విద్యార్థి ఇంటి మరియు functional needs గురించి ముఖ్యమైన సమాచారం అందించగలరు",
            "వారు మాత్రమే విద్యార్థి grade నిర్ణయిస్తారు",
            "వారు assessment toolsను రూపొందిస్తారు",
            "వారు curriculum standardsను నిర్ణయిస్తారు"
        ],
        correct: 0,
        explanation: "తల్లిదండ్రులు విద్యార్థి ఇంటి ప్రవర్తన, routines, strengths, difficulties మరియు functional needs గురించి ముఖ్యమైన సమాచారాన్ని అందించగలరు. ఈ సమాచారం individualized educational planningలో ఉపయోగపడుతుంది."
    },
    {
        question: "ఒక learning disability ఉన్న విద్యార్థికి ఇతర విద్యార్థుల మాదిరిగానే learning objective ఉంచి, పరీక్షలో అదనపు సమయం ఇవ్వడం ఏదికి ఉదాహరణ?",
        options: [
            "Curriculum modification",
            "Curriculum enrichment",
            "Curriculum replacement",
            "Accommodation"
        ],
        correct: 3,
        explanation: "Accommodationలో learning expectations మార్చకుండా విద్యార్థి నేర్చుకునే లేదా తన knowledgeను ప్రదర్శించే విధానంలో support ఇస్తారు. అదనపు పరీక్ష సమయం accommodationకు సాధారణ ఉదాహరణ."
    },
    {
        question: "విద్యార్థి కోసం learning expectations లేదా curriculum contentలోనే గణనీయమైన మార్పు చేయడం ఏదిగా పరిగణించబడుతుంది?",
        options: [
            "Accommodation",
            "Modification",
            "Reinforcement",
            "Prompting"
        ],
        correct: 1,
        explanation: "Modificationలో విద్యార్థి కోసం curriculum content, learning expectations లేదా performance standardsలో గణనీయమైన మార్పు చేయవచ్చు. Accommodationతో పోలిస్తే ఇది ఏమి నేర్చుకోవాలి అనే అంశాన్ని కూడా ప్రభావితం చేస్తుంది."
    },
    {
        question: "ఒకే తరగతిలో విద్యార్థుల readiness, learning needs మరియు abilitiesను పరిగణనలోకి తీసుకుని content, process లేదా productలో మార్పులు చేయడం:",
        options: [
            "Direct instruction మాత్రమే",
            "Norm-referenced teaching",
            "Differentiated instruction",
            "Remedial assessment మాత్రమే"
        ],
        correct: 2,
        explanation: "Differentiated instructionలో learners యొక్క readiness, interests మరియు learning needsను పరిగణనలోకి తీసుకొని content, process లేదా productను సవరించి instructionను అందిస్తారు."
    },
    {
        question: "Universal Design for Learning (UDL) యొక్క ప్రధాన సూత్రాలకు సరైన సమూహం ఏది?",
        options: [
            "Multiple means of engagement, representation, action and expression",
            "ఒకే teaching method, ఒకే assessment, ఒకే response mode",
            "కేవలం visual instruction",
            "కేవలం individualized testing"
        ],
        correct: 0,
        explanation: "UDL మూడు ప్రధాన principlesను కలిగి ఉంటుంది: multiple means of engagement, representation, మరియు action and expression. ఇవి వివిధ learnersకు flexible access, participation మరియు demonstration అవకాశాలను కల్పిస్తాయి."
    },
    {
        question: "దృష్టి సంబంధిత ఇబ్బంది ఉన్న విద్యార్థికి అదే learning contentను textతో పాటు audio మరియు tactile representation ద్వారా అందించడం UDLలో ఏ అంశానికి అత్యంత దగ్గరగా ఉంటుంది?",
        options: [
            "Multiple means of engagement",
            "Multiple means of representation",
            "Multiple means of punishment",
            "Multiple means of grading"
        ],
        correct: 1,
        explanation: "Multiple means of representation అంటే informationను వివిధ మార్గాల్లో అందించడం. Textతో పాటు audio మరియు tactile formats ఉపయోగించడం visual difficulty ఉన్న learnerకు content accessను మెరుగుపరుస్తుంది."
    },
    {
        question: "ఒక complex skillను చిన్న, క్రమబద్ధమైన మరియు బోధించగలిగే దశలుగా విభజించే ప్రక్రియను ఏమంటారు?",
        options: [
            "Task analysis",
            "Shaping",
            "Generalization",
            "Fading"
        ],
        correct: 0,
        explanation: "Task analysisలో complex skillను చిన్న, sequential మరియు teachable stepsగా విభజిస్తారు. ప్రతి దశను స్పష్టంగా బోధించడం ద్వారా విద్యార్థి మొత్తం functional skillను క్రమంగా నేర్చుకుంటాడు."
    },
    {
        question: "Forward chainingలో విద్యార్థికి సాధారణంగా ఏ విధంగా బోధిస్తారు?",
        options: [
            "మొదట చివరి దశను మాత్రమే బోధిస్తారు",
            "అన్ని దశలను పూర్తిగా ఉపాధ్యాయుడే చేస్తాడు",
            "మొదటి దశతో ప్రారంభించి క్రమంగా తరువాతి దశలను నేర్పుతారు",
            "యాదృచ్ఛిక దశలను ఎంపిక చేస్తారు"
        ],
        correct: 2,
        explanation: "Forward chainingలో taskలోని మొదటి stepను ముందుగా విద్యార్థికి నేర్పుతారు. తరువాత mastery సాధించిన కొద్దీ వరుసగా తదుపరి stepsను నేర్పుతూ మొత్తం skillను నిర్మిస్తారు."
    },
    {
        question: "Backward chainingలో:",
        options: [
            "మొదటి దశను మాత్రమే విద్యార్థి చేస్తాడు",
            "చివరి దశను విద్యార్థి నేర్చుకునేలా ప్రారంభించి, క్రమంగా ముందరి దశలను జోడిస్తారు",
            "అన్ని దశలను ఒకేసారి బోధిస్తారు",
            "కేవలం verbal prompts మాత్రమే ఇస్తారు"
        ],
        correct: 1,
        explanation: "Backward chainingలో సాధారణంగా task యొక్క చివరి stepను learner ముందుగా పూర్తి చేసేలా బోధిస్తారు. తరువాత mastery ఆధారంగా దానికి ముందు stepsను క్రమంగా జోడిస్తారు."
    },
    {
        question: "ఒక self-care skillలో ఉన్న అన్ని stepsను విద్యార్థి ప్రతి training sessionలో అభ్యసిస్తాడు; అవసరమైన చోట ఉపాధ్యాయుడు సహాయం చేస్తాడు. ఇది ఏ chaining విధానానికి ఉదాహరణ?",
        options: [
            "Backward chaining",
            "Forward chaining",
            "Partial-task chaining",
            "Total-task presentation"
        ],
        correct: 3,
        explanation: "Total-task presentationలో learner ప్రతి training sessionలో task యొక్క అన్ని stepsను అభ్యసిస్తాడు. అవసరమైన stepsలో teacher prompts లేదా assistance అందిస్తాడు."
    },
    {
        question: "Least-to-Most Promptingలో ఉపాధ్యాయుడు సాధారణంగా:",
        options: [
            "మొదట అత్యధిక సహాయం ఇచ్చి, తర్వాత తగ్గిస్తాడు",
            "మొదట తక్కువ సహాయం ఇచ్చి, అవసరమైతే ఎక్కువ సహాయానికి వెళ్తాడు",
            "ఎటువంటి prompt ఇవ్వడు",
            "ప్రతి responseకు physical prompt మాత్రమే ఇస్తాడు"
        ],
        correct: 1,
        explanation: "Least-to-Most promptingలో ముందుగా learnerకు అత్యల్ప intrusive prompt ఇస్తారు. response రాకపోతే అవసరమైనంత వరకు prompt levelను క్రమంగా పెంచుతారు."
    },
    {
        question: "Most-to-Least Prompting యొక్క ప్రధాన ఉద్దేశ్యం:",
        options: [
            "ప్రారంభంలో ఎక్కువ సహాయం ఇచ్చి, క్రమంగా prompt dependency తగ్గించడం",
            "విద్యార్థికి ఎల్లప్పుడూ పూర్తి సహాయం ఇవ్వడం",
            "reinforcementను పూర్తిగా తొలగించడం",
            "assessmentను instructionకు ప్రత్యామ్నాయంగా ఉపయోగించడం"
        ],
        correct: 0,
        explanation: "Most-to-Least promptingలో ప్రారంభంలో ఎక్కువ assistance అందించి correct performanceను స్థాపిస్తారు. తరువాత promptsను క్రమంగా తగ్గించడం ద్వారా independence పెంచి prompt dependencyని తగ్గిస్తారు."
    },
    {
        question: "విద్యార్థి ఒక skillను స్వతంత్రంగా చేయడం ప్రారంభించినప్పుడు promptsను క్రమంగా తగ్గించే ప్రక్రియ:",
        options: [
            "Prompt fading",
            "Shaping",
            "Chaining",
            "Extinction"
        ],
        correct: 0,
        explanation: "Prompt fading అంటే learner skillను స్వతంత్రంగా చేయగలిగే కొద్దీ prompts యొక్క frequency లేదా intensityను క్రమంగా తగ్గించడం. దీని లక్ష్యం independent performanceను అభివృద్ధి చేయడం."
    },
    {
        question: "విద్యార్థి పూర్తి target behaviourను వెంటనే చేయలేనప్పుడు, target behaviourకు దగ్గరగా ఉండే successive approximationsను reinforce చేయడం:",
        options: [
            "Chaining",
            "Prompting",
            "Shaping",
            "Task analysis"
        ],
        correct: 2,
        explanation: "Shapingలో target behaviourకు దగ్గరగా ఉండే successive approximationsను reinforce చేస్తారు. Learner progress సాధించిన కొద్దీ మరింత దగ్గరైన responses మాత్రమే reinforcement పొందేలా criteriaను క్రమంగా పెంచుతారు."
    },
    {
        question: "విద్యార్థి homework పూర్తి చేసిన తర్వాత ఉపాధ్యాయుడు అతనికి ఇష్టమైన activityలో పాల్గొనే అవకాశం ఇచ్చాడు. Homework behaviour భవిష్యత్తులో పెరిగితే దీనిని ఏమంటారు?",
        options: [
            "Positive reinforcement",
            "Punishment",
            "Extinction",
            "Negative reinforcement"
        ],
        correct: 0,
        explanation: "Positive reinforcementలో behaviour తర్వాత desirable stimulusను అందించడం వల్ల ఆ behaviour futureలో పెరుగుతుంది. ఇక్కడ preferred activity అందించడం homework completionను బలపరుస్తుంది."
    },
    {
        question: "విద్యార్థి seatలో సరిగ్గా కూర్చున్నప్పుడు teacher ఇచ్చే repeated verbal remindersను ఆపివేస్తారు. ఆ కారణంగా appropriate sitting behaviour పెరుగుతుంది. ఇది:",
        options: [
            "Positive punishment",
            "Negative punishment",
            "Positive reinforcement",
            "Negative reinforcement"
        ],
        correct: 3,
        explanation: "Negative reinforcementలో ఒక aversive stimulus లేదా unpleasant conditionను తొలగించడం ద్వారా target behaviour పెరుగుతుంది. ఇక్కడ verbal reminders తొలగించడంతో appropriate sitting behaviour పెరుగుతోంది."
    },
    {
        question: "విద్యార్థి ప్రతి target behaviour తర్వాత token సంపాదించి, tokensను తర్వాత preferred activity కోసం మార్చుకుంటాడు. ఇది ఏ విధానానికి ఉదాహరణ?",
        options: [
            "Token economy",
            "Response cost",
            "Time-out",
            "Stimulus fading"
        ],
        correct: 0,
        explanation: "Token economyలో target behaviourకు tokens వంటి conditioned reinforcers ఇస్తారు. తరువాత వాటిని preferred activities లేదా rewards కోసం exchange చేసుకునే విధంగా reinforcement system ఏర్పాటు చేస్తారు."
    },
    {
        question: "ఒక ఉపాధ్యాయుడు disruptive behaviourను తగ్గించడానికి దాని బదులుగా విద్యార్థి appropriate communication behaviour చూపినప్పుడే reinforcement ఇస్తున్నాడు. ఇది:",
        options: [
            "Differential Reinforcement of Alternative Behaviour (DRA)",
            "Response cost",
            "Extinction",
            "Overcorrection"
        ],
        correct: 0,
        explanation: "DRAలో problematic behaviourకు బదులుగా socially appropriate alternative behaviourను reinforce చేస్తారు. ఇక్కడ disruptive behaviour స్థానంలో appropriate communication చూపినప్పుడు reinforcement అందించడం DRAకు ఉదాహరణ."
    },
    {
        question: "ఒక విద్యార్థి “నీరు కావాలి” అని స్వయంగా అడిగినప్పుడు మాత్రమే teacher అతనికి నీరు అందిస్తున్నాడు. ఈ strategyలో reinforcement ప్రధానంగా ఏ ప్రవర్తనను బలపరుస్తుంది?",
        options: [
            "Unrelated motor behaviour",
            "Functional communication behaviour",
            "Escape behaviour",
            "Stereotypic behaviour"
        ],
        correct: 1,
        explanation: "విద్యార్థి అవసరాన్ని appropriate communication ద్వారా వ్యక్తపరిచినప్పుడు reinforcement అందుతోంది. అందువల్ల ఈ strategy functional communication behaviourను బలపరుస్తూ independent requestingను ప్రోత్సహిస్తుంది."
    },
    {
        question: "Learning disability ఉన్న విద్యార్థి subtractionలో పదేపదే ఒకే రకమైన error చేస్తున్నాడు. ఉపాధ్యాయుడు అతని తప్పుల patternను విశ్లేషించి instructional interventionను రూపొందించాడు. దీనికి అత్యంత సరైన పదం:",
        options: [
            "Norming",
            "Random sampling",
            "Error analysis",
            "Summative grading"
        ],
        correct: 2,
        explanation: "Error analysisలో విద్యార్థి చేసే mistakes యొక్క patterns, types మరియు possible causesను పరిశీలిస్తారు. ఈ information ఆధారంగా specific instructional intervention లేదా corrective teaching strategy రూపొందించవచ్చు."
    },
    {
        question: "క్రింది statementsను పరిశీలించండి:\n1. Screening సాధారణంగా risk లేదా suspected difficulty ఉన్న విద్యార్థులను గుర్తించడానికి ఉపయోగపడుతుంది.\n2. Screening ఫలితం మాత్రమే ఆధారంగా తుది disability diagnosis చేయాలి.\n3. Comprehensive assessmentలో వివిధ రకాల సమాచారాన్ని సమీకరించవచ్చు.\nసరైన సమాధానం:",
        options: [
            "1 మరియు 3 మాత్రమే",
            "1 మాత్రమే",
            "2 మరియు 3 మాత్రమే",
            "1, 2 మరియు 3"
        ],
        correct: 0,
        explanation: "Statement 1 సరైనది, ఎందుకంటే screening risk గుర్తిస్తుంది. Statement 2 తప్పు, ఎందుకంటే screening alone diagnosis చేయదు. Statement 3 సరైనది, comprehensive assessmentలో multiple information sources ఉపయోగిస్తారు."
    },
    {
        question: "Match the following:\nColumn-I\ni) Vineland Adaptive Behavior Scales\nii) Curriculum-Based Assessment\niii) ABC Analysis\niv) Portfolio Assessment\n\nColumn-II\na) వివిధ కాలాల్లో విద్యార్థి పనుల సేకరణ ఆధారంగా అంచనా\nb) Adaptive behaviour assessment\nc) Antecedent–Behaviour–Consequence విశ్లేషణ\nd) Curriculumలోని content ఆధారంగా పనితీరు అంచనా",
        options: [
            "i-b, ii-d, iii-c, iv-a",
            "i-d, ii-b, iii-a, iv-c",
            "i-c, ii-a, iii-d, iv-b",
            "i-a, ii-c, iii-b, iv-d"
        ],
        correct: 0,
        explanation: "Vineland adaptive behaviourను అంచనా వేస్తుంది; CBA curriculum contentపై performanceను కొలుస్తుంది; ABC antecedent-behaviour-consequenceను విశ్లేషిస్తుంది; portfolio collected workను అంచనా వేస్తుంది."
    },
    {
        question: "Match the following:\nColumn-I\ni) Shaping\nii) Forward chaining\niii) Backward chaining\niv) Prompt fading\n\nColumn-II\na) చివరి దశను ముందుగా నేర్పడం\nb) promptsను క్రమంగా తగ్గించడం\nc) successive approximationsను reinforce చేయడం\nd) మొదటి దశ నుంచి క్రమంగా skillను నిర్మించడం",
        options: [
            "i-c, ii-d, iii-a, iv-b",
            "i-d, ii-a, iii-b, iv-c",
            "i-a, ii-c, iii-d, iv-b",
            "i-b, ii-d, iii-c, iv-a"
        ],
        correct: 0,
        explanation: "Shaping successive approximationsను reinforce చేస్తుంది; forward chaining మొదటి stepనుంచి ప్రారంభమవుతుంది; backward chaining చివరి stepనుంచి; prompt fading promptsను క్రమంగా తగ్గిస్తుంది."
    },
    {
        question: "క్రింది వాటిలో Task Analysis → Chaining → Prompt Fading → Independent Performance అనే బోధనా ప్రక్రియలో సరైన క్రమం ఏది?",
        options: [
            "Prompt fading → Task analysis → Independent performance → Chaining",
            "Chaining → Task analysis → Prompt fading → Independent performance",
            "Task analysis → Chaining → Prompt fading → Independent performance",
            "Independent performance → Task analysis → Chaining → Prompt fading"
        ],
        correct: 2,
        explanation: "ముందుగా complex skillను task analysis ద్వారా stepsగా విభజిస్తారు. తరువాత chainingతో skillను బోధిస్తారు, promptsను fade చేసి చివరకు independent performanceను సాధిస్తారు."
    },
    {
        question: "క్రింది statementsను పరిశీలించండి:\n1. Accommodation సాధారణంగా విద్యార్థి నేర్చుకునే లేదా ప్రదర్శించే విధానంలో మార్పును సూచిస్తుంది.\n2. Modificationలో learning expectations లేదా curriculum contentలో మార్పు ఉండవచ్చు.\n3. Accommodation మరియు modification రెండూ ప్రతి సందర్భంలో ఒకే అర్థాన్ని కలిగి ఉంటాయి.\nసరైన సమాధానం:",
        options: [
            "1 మరియు 2 మాత్రమే",
            "1 మాత్రమే",
            "2 మరియు 3 మాత్రమే",
            "1, 2 మరియు 3"
        ],
        correct: 0,
        explanation: "Statement 1 సరైనది, accommodation access లేదా response methodను మారుస్తుంది. Statement 2 కూడా సరైనది, modification expectations లేదా contentను మార్చవచ్చు. Statement 3 తప్పు, ఇవి వేర్వేరు concepts."
    },
    {
        question: "ఒక Learning Disability ఉన్న విద్యార్థి science conceptను మౌఖికంగా బాగా వివరిస్తాడు కానీ పొడవైన written response రాయడంలో తీవ్ర ఇబ్బంది పడుతున్నాడు. అదే learning objectiveను కొనసాగిస్తూ, అతనికి oral response లేదా speech-to-text ద్వారా సమాధానం ఇవ్వడానికి అవకాశం కల్పించారు. ఇది ప్రధానంగా:",
        options: [
            "Curriculum modification",
            "Curriculum replacement",
            "Grade-level reduction",
            "Accommodation"
        ],
        correct: 3,
        explanation: "ఇక్కడ learning objective లేదా expectation మార్చబడలేదు; response ఇవ్వడానికి alternative method అందించారు. కాబట్టి oral response లేదా speech-to-text ఉపయోగించడం accommodationకు ఉదాహరణ."
    }
];