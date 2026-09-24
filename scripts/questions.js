const SUBJECTS = [
    "Acts and Policies"
];

const QUESTIONS = [
    {
        question: "Rehabilitation Council of India Act ఏ సంవత్సరంలో ఆమోదించబడింది?",
        options: ["1986", "1992", "1995", "1999"],
        correct: 1,
        explanation: "Rehabilitation Council of India Act 1992లో ఆమోదించబడింది. ఈ చట్టం rehabilitation professionals/personnel trainingను నియంత్రించడం, ప్రమాణాలను నిర్ణయించడం మరియు వృత్తిపరమైన నమోదు నిర్వహించడం కోసం రూపొందించబడింది."
    },
    {
        question: "RCI Act, 1992లో Section 3 ప్రధానంగా దేనికి సంబంధించినది?",
        options: ["Central Rehabilitation Register", "Minimum standards of education", "Rehabilitation Council of India యొక్క Constitution and incorporation", "Professional conduct"],
        correct: 2,
        explanation: "RCI Actలో Section 3 Rehabilitation Council of India యొక్క constitution and incorporationకు సంబంధించినది. Council ఏర్పాటుకు చట్టపరమైన నిర్మాణాన్ని ఈ Section వివరిస్తుంది."
    },
    {
        question: "RCI Act, 1992లో Section 11 ఏ అంశానికి సంబంధించినది?",
        options: ["విదేశీ సంస్థల అర్హతల గుర్తింపు", "భారతదేశంలోని విశ్వవిద్యాలయాలు/సంస్థలు ఇచ్చే qualifications యొక్క recognition", "Professional conduct", "Council సభ్యుల తొలగింపు"],
        correct: 1,
        explanation: "RCI Act Section 11 భారతదేశంలోని విశ్వవిద్యాలయాలు లేదా సంస్థలు అందించే rehabilitation-related qualificationsను గుర్తించే ప్రక్రియకు సంబంధించినది."
    },
    {
        question: "RCI Act, 1992లో “Minimum standards of education” ఏ Sectionలో ఉంది?",
        options: ["Section 15", "Section 18", "Section 21", "Section 23"],
        correct: 1,
        explanation: "RCI Act, 1992లో Section 18 minimum standards of educationకు సంబంధించినది. Rehabilitation coursesలో విద్యా ప్రమాణాలు, శిక్షణ నాణ్యతను నిర్ధారించడంలో ఇది ముఖ్యమైనది."
    },
    {
        question: "RCI Act, 1992లో rehabilitation professionals యొక్క Registration in Register ఏ Sectionకు సంబంధించినది?",
        options: ["Section 17", "Section 18", "Section 19", "Section 20"],
        correct: 2,
        explanation: "RCI Actలో Section 19 rehabilitation professionals యొక్క registration in the registerకు సంబంధించినది. అర్హత కలిగిన professionalsను అధికారికంగా నమోదు చేయడానికి ఇది ఉపయోగపడుతుంది."
    },
    {
        question: "RCI Act, 1992 యొక్క ప్రధాన ఉద్దేశ్యాలలో క్రింది వాటిలో ఏది ఉంది?",
        options: ["School recognition మాత్రమే", "Rehabilitation professionals/personnel trainingను regulate మరియు monitor చేయడం", "Higher educationలో reservation కల్పించడం", "Elementary educationను compulsory చేయడం"],
        correct: 1,
        explanation: "RCI Act యొక్క ప్రధాన లక్ష్యం rehabilitation professionals మరియు personnel trainingను regulate, monitor చేయడం. ఇది శిక్షణ నాణ్యత, అర్హతలు మరియు వృత్తిపరమైన ప్రమాణాలను నియంత్రిస్తుంది."
    },
    {
        question: "RCI Act, 1992లో “Central Rehabilitation Register” నిర్వహణకు సంబంధించిన అంశం ఏది?",
        options: ["Act యొక్క ప్రధాన ఉద్దేశ్యాలలో ఒకటి", "RTE Act యొక్క ప్రధాన ఉద్దేశ్యం", "National Trust Act యొక్క ప్రధాన ఉద్దేశ్యం", "NEP 2020 యొక్క ప్రధాన లక్ష్యం"],
        correct: 0,
        explanation: "Central Rehabilitation Register నిర్వహణ RCI Actకు సంబంధించిన ముఖ్యమైన అంశం. ఇందులో గుర్తింపు పొందిన rehabilitation professionals వివరాలు నమోదు చేయబడతాయి."
    },
    {
        question: "PWD Act, 1995లో Section 26 ప్రధానంగా దేనికి సంబంధించినది?",
        options: ["Employment reservation", "Education", "Social security", "Accessibility in transport"],
        correct: 1,
        explanation: "PWD Act, 1995లో Section 26 educationకు సంబంధించినది. Persons with disabilitiesకు educational opportunities మరియు సంబంధిత విద్యా హక్కులను కల్పించడంలో ఈ Section ప్రాధాన్యత కలిగి ఉంది."
    },
    {
        question: "PWD Act, 1995లో Section 31 ఏ అంశానికి సంబంధించినది?",
        options: ["Educational institutionsలో amanuensis అందించడం", "Government employment reservation", "Identification of posts", "Built environment accessibility"],
        correct: 0,
        explanation: "PWD Act Section 31 educational institutionsలో amanuensis అందించడానికి సంబంధించినది. పరీక్షలు లేదా విద్యా కార్యకలాపాల్లో సహాయం అవసరమైన విద్యార్థులకు ఇది సహాయక సదుపాయం."
    },
    {
        question: "PWD Act, 1995లో Section 32 ఏ అంశాన్ని సూచిస్తుంది?",
        options: ["Educational reservation", "Identification of posts which can be reserved for persons with disabilities", "Free education", "Transport accessibility"],
        correct: 1,
        explanation: "PWD Act Section 32 persons with disabilities కోసం reservation చేయగల postsను గుర్తించడానికి సంబంధించినది. Government establishmentsలో employment reservation అమలుకు ఇది ఆధారం."
    },
    {
        question: "PWD Act, 1995లో Section 33 ప్రకారం Government establishmentsలో persons with disabilities కోసం కనీస reservation ఎంత?",
        options: ["2%", "3%", "4%", "5%"],
        correct: 1,
        explanation: "PWD Act, 1995 Section 33 ప్రకారం Government establishmentsలో persons with disabilitiesకు కనీసం 3 శాతం reservation కల్పించబడింది."
    },
    {
        question: "PWD Act, 1995లో Section 39 ఏ అంశానికి సంబంధించినది?",
        options: ["Government employmentలో reservation", "Educational institutionsలో seats reservation", "Road accessibility", "Professional registration"],
        correct: 1,
        explanation: "PWD Act Section 39 educational institutionsలో seats reservationకు సంబంధించినది. Government మరియు Government-aided educational institutionsలో persons with disabilitiesకు కనీస reservationను ఇది నిర్దేశిస్తుంది."
    },
    {
        question: "PWD Act, 1995లో Section 39 ప్రకారం Government educational institutions మరియు Government aid పొందుతున్న educational institutionsలో కనీసం ఎంత శాతం seatsను persons with disabilities కోసం reserve చేయాలి?",
        options: ["2%", "3%", "4%", "5%"],
        correct: 1,
        explanation: "PWD Act Section 39 ప్రకారం Government మరియు Government-aided educational institutionsలో కనీసం 3 శాతం seats persons with disabilities కోసం reserve చేయాలి."
    },
    {
        question: "PWD Act, 1995లో Section 44 దేనికి సంబంధించినది?",
        options: ["Transportలో non-discrimination", "Roadsలో non-discrimination", "Built environmentలో non-discrimination", "Employmentలో non-discrimination"],
        correct: 0,
        explanation: "PWD Act Section 44 transportలో non-discriminationకు సంబంధించినది. Persons with disabilitiesకు transport facilities ఉపయోగించడంలో వివక్ష లేకుండా చూడటం ఈ provision యొక్క ఉద్దేశ్యం."
    },
    {
        question: "PWD Act, 1995లో Section 45 ఏ అంశానికి సంబంధించినది?",
        options: ["Transport", "Roads", "Educational institutions", "Employment"],
        correct: 1,
        explanation: "PWD Act Section 45 roadsలో non-discriminationకు సంబంధించినది. Persons with disabilities కోసం roads మరియు సంబంధిత public infrastructureలో accessibilityను ప్రోత్సహించడం దీని ఉద్దేశ్యం."
    },
    {
        question: "PWD Act, 1995లో Section 46 ప్రధానంగా దేనికి సంబంధించినది?",
        options: ["Non-discrimination in built environment", "Employment reservation", "Free education", "Registration of rehabilitation professionals"],
        correct: 0,
        explanation: "PWD Act Section 46 built environmentలో non-discriminationకు సంబంధించినది. Buildings మరియు ఇతర physical environments persons with disabilitiesకు accessibleగా ఉండేలా చూడటం దీని లక్ష్యం."
    },
    {
        question: "National Trust Act, 1999 ప్రధానంగా క్రింది ఏ నాలుగు disability groups సంక్షేమానికి సంబంధించినది?",
        options: ["Autism, Cerebral Palsy, Mental Retardation, Multiple Disabilities", "Blindness, Hearing Impairment, Locomotor Disability, SLD", "Autism, Deafness, Dyslexia, Cerebral Palsy", "Intellectual Disability, Visual Impairment, Hearing Impairment, Mental Illness"],
        correct: 0,
        explanation: "National Trust Act, 1999 Autism, Cerebral Palsy, Mental Retardation మరియు Multiple Disabilities కలిగిన persons సంక్షేమం, guardianship మరియు independent livingను ప్రోత్సహించడానికి రూపొందించబడింది."
    },
    {
        question: "National Trust Act, 1999లో Section 10 దేనికి సంబంధించినది?",
        options: ["Registration procedure", "Objects of the Trust", "Local Level Committee", "Appointment of guardianship"],
        correct: 1,
        explanation: "National Trust Act Section 10 Objects of the Trustకు సంబంధించినది. National Trust సాధించాల్సిన లక్ష్యాలు, కార్యకలాపాల ప్రధాన ఉద్దేశ్యాలను ఈ Section వివరిస్తుంది."
    },
    {
        question: "National Trust Act, 1999లో Local Level Committee (LLC) ఏర్పాటు ఏ Sectionకు సంబంధించినది?",
        options: ["Section 10", "Section 11", "Section 13", "Section 17"],
        correct: 2,
        explanation: "National Trust Actలో Local Level Committee ఏర్పాటు Section 13కు సంబంధించినది. Guardianship మరియు disability-related local support కోసం LLC ముఖ్యమైన statutory mechanism."
    },
    {
        question: "National Trust Act, 1999లో guardianship appointmentకు సంబంధించిన ప్రధాన Section ఏది?",
        options: ["Section 11", "Section 13", "Section 14", "Section 18"],
        correct: 2,
        explanation: "National Trust Actలో guardianshipకు సంబంధించిన ప్రధాన provision Section 14. Local Level Committee ద్వారా guardianshipకు సంబంధించిన ప్రక్రియ నిర్వహించబడుతుంది."
    },
    {
        question: "National Trust Act ప్రకారం Local Level Committeeలో క్రింది వారిలో ఎవరు statutory member కాదు?",
        options: ["District Magistrate/appropriate civil service officer", "Registered organisation representative", "Person with disability", "District Judge"],
        correct: 3,
        explanation: "Local Level Committeeలో District Magistrate లేదా nominated officer, registered organisation representative మరియు person with disability సభ్యులుగా ఉంటారు. District Judge statutory member కాదు."
    },
    {
        question: "National Trust Actలో Local Level Committee సాధారణంగా కనీసం ఎంత వ్యవధిలో ఒకసారి meeting నిర్వహించాలి?",
        options: ["ప్రతి నెల", "ప్రతి మూడు నెలలకు", "ప్రతి ఆరు నెలలకు", "సంవత్సరానికి ఒకసారి"],
        correct: 1,
        explanation: "Local Level Committee సాధారణంగా కనీసం ప్రతి మూడు నెలలకు ఒకసారి meeting నిర్వహించాలి. Guardianship మరియు ఇతర సంబంధిత విషయాలను సమీక్షించడానికి ఈ సమావేశాలు ఉపయోగపడతాయి."
    },
    {
        question: "RTE Act, 2009 ప్రధానంగా ఏ వయస్సు పిల్లలకు free and compulsory educationను కల్పిస్తుంది?",
        options: ["3–6 సంవత్సరాలు", "6–14 సంవత్సరాలు", "6–18 సంవత్సరాలు", "14–18 సంవత్సరాలు"],
        correct: 1,
        explanation: "RTE Act, 2009 ప్రకారం 6 నుంచి 14 సంవత్సరాల వయస్సు పిల్లలకు free and compulsory elementary education హక్కు కల్పించబడింది."
    },
    {
        question: "RTE Act, 2009లో Section 12(1)(c) ప్రధానంగా దేనికి సంబంధించినది?",
        options: ["School Management Committee", "Private unaided schoolsలో specified category/disadvantaged group children admission", "Teacher qualifications", "School recognition"],
        correct: 1,
        explanation: "RTE Act Section 12(1)(c) private unaided schoolsలో specified category మరియు disadvantaged group childrenకు admission provisionను కల్పిస్తుంది."
    },
    {
        question: "RTE Act, 2009లో Section 17 దేనిని నిషేధిస్తుంది?",
        options: ["Private tuition", "Physical punishment and mental harassment", "Screening procedure", "Capitation fee"],
        correct: 1,
        explanation: "RTE Act Section 17 పిల్లలకు physical punishment మరియు mental harassmentను నిషేధిస్తుంది. పాఠశాలల్లో పిల్లల గౌరవం, భద్రతను రక్షించడం దీని ఉద్దేశ్యం."
    },
    {
        question: "RTE Act, 2009లో School Management Committee (SMC)కి సంబంధించిన Section ఏది?",
        options: ["Section 18", "Section 19", "Section 21", "Section 23"],
        correct: 2,
        explanation: "RTE Act Section 21 School Management Committeeకు సంబంధించినది. School development మరియు పాఠశాల నిర్వహణలో సమాజం, తల్లిదండ్రుల భాగస్వామ్యాన్ని ఇది నిర్దేశిస్తుంది."
    },
    {
        question: "RTE Act, 2009లో Pupil-Teacher Ratio (PTR)కి సంబంధించిన Section ఏది?",
        options: ["Section 23", "Section 24", "Section 25", "Section 29"],
        correct: 2,
        explanation: "RTE Act Section 25 Pupil-Teacher Ratioకు సంబంధించినది. ప్రతి schoolలో నిర్దేశిత teacher availability మరియు student-teacher balance ఉండేలా ఈ provision సహాయపడుతుంది."
    },
    {
        question: "RTE Act, 2009లో Curriculum and evaluation procedure ఏ Sectionలో ఉంది?",
        options: ["Section 25", "Section 27", "Section 29", "Section 31"],
        correct: 2,
        explanation: "RTE Act Section 29 curriculum and evaluation procedureకు సంబంధించినది. Child-friendly learning, comprehensive development మరియు రాజ్యాంగ విలువలకు అనుగుణమైన విద్యను ఇది సూచిస్తుంది."
    },
    {
        question: "RTE Amendment Act, 2012 ద్వారా “child with disability” అనే ప్రత్యేక definitionను చేర్చిన Section ఏది?",
        options: ["Section 2", "Section 4", "Section 12", "Section 17"],
        correct: 0,
        explanation: "RTE Amendment Act, 2012 ద్వారా Section 2లో child with disabilityకు సంబంధించిన ప్రత్యేక definition చేర్చబడింది. ఇది disability ఉన్న పిల్లలను RTE పరిధిలో స్పష్టంగా గుర్తిస్తుంది."
    },
    {
        question: "RTE Amendment Act, 2012లో children with multiple disabilities మరియు severe disabilitiesకు సంబంధించిన ముఖ్యమైన provision ఏది?",
        options: ["వారు మాత్రమే residential schoolsలో చదవాలి", "వారు home-based educationను opt చేసుకునే అవకాశం కలిగి ఉండవచ్చు", "వారు RTE పరిధిలోకి రారు", "వారికి elementary education హక్కు ఉండదు"],
        correct: 1,
        explanation: "RTE Amendment Act, 2012 ప్రకారం multiple disabilities మరియు severe disabilities కలిగిన పిల్లలకు home-based educationను opt చేసుకునే అవకాశం కల్పించబడింది."
    },
    {
        question: "RPwD Act, 2016లో Section 16 దేనికి సంబంధించినది?",
        options: ["Inclusive educationకు సంబంధించిన specific measures", "Duty of educational institutions", "Higher education reservation", "Employment reservation"],
        correct: 1,
        explanation: "RPwD Act Section 16 educational institutions యొక్క dutiesకు సంబంధించినది. Inclusive educationను నిర్ధారించేందుకు institutions తీసుకోవాల్సిన చర్యలను ఈ Section వివరిస్తుంది."
    },
    {
        question: "RPwD Act, 2016లో Section 17 ప్రధానంగా దేనిని సూచిస్తుంది?",
        options: ["Specific measures to promote and facilitate inclusive education", "Adult education", "Vocational training", "Social security"],
        correct: 0,
        explanation: "RPwD Act Section 17 inclusive educationను promote మరియు facilitate చేయడానికి specific measuresను సూచిస్తుంది. విద్యా వ్యవస్థను మరింత సమగ్రంగా చేయడం దీని ప్రధాన ఉద్దేశ్యం."
    },
    {
        question: "RPwD Act, 2016లో benchmark disabilities కలిగిన 6–18 సంవత్సరాల పిల్లలకు free education హక్కు ఏ Sectionలో ఉంది?",
        options: ["Section 16", "Section 17", "Section 31", "Section 34"],
        correct: 2,
        explanation: "RPwD Act Section 31 benchmark disabilities కలిగిన 6–18 సంవత్సరాల పిల్లలకు free education హక్కును కల్పిస్తుంది. ఈ provision విద్యకు సమాన అవకాశాన్ని బలపరుస్తుంది."
    },
    {
        question: "RPwD Act, 2016లో Government మరియు Government-aided higher educational institutionsలో persons with benchmark disabilitiesకు కనీస reservation ఎంత?",
        options: ["3%", "4%", "5%", "6%"],
        correct: 2,
        explanation: "RPwD Act ప్రకారం Government మరియు Government-aided higher educational institutionsలో persons with benchmark disabilitiesకు కనీసం 5 శాతం reservation కల్పించాలి."
    },
    {
        question: "RPwD Act, 2016లో higher educational institutionsలో reservationకు సంబంధించిన Section ఏది?",
        options: ["Section 31", "Section 32", "Section 33", "Section 34"],
        correct: 1,
        explanation: "RPwD Act Section 32 higher educational institutionsలో persons with benchmark disabilitiesకు reservationకు సంబంధించినది. ఇది higher educationలో సమాన అవకాశాలను ప్రోత్సహిస్తుంది."
    },
    {
        question: "RPwD Act, 2016లో Government establishmentsలో benchmark disabilities ఉన్న personsకు employment reservationకు సంబంధించిన Section ఏది?",
        options: ["Section 31", "Section 32", "Section 34", "Section 36"],
        correct: 2,
        explanation: "RPwD Act Section 34 Government establishmentsలో persons with benchmark disabilitiesకు employment reservationకు సంబంధించినది. ఇది ఉద్యోగ అవకాశాల్లో representationను పెంచడానికి ఉద్దేశించబడింది."
    },
    {
        question: "RPwD Act, 2016లో Section 34 ప్రకారం reservationలో క్రింది వాటిలో ఏ category ప్రత్యేకంగా ఉంది?",
        options: ["Autism, Intellectual Disability, Specific Learning Disability and Mental Illness", "Only blindness and low vision", "Only hearing impairment", "Only locomotor disability"],
        correct: 0,
        explanation: "RPwD Act Section 34 reservation categoriesలో autism, intellectual disability, specific learning disability మరియు mental illnessలను ప్రత్యేకంగా పేర్కొంటుంది."
    },
    {
        question: "NPE యొక్క 1986 version తరువాత ముఖ్యమైన revision ఏ సంవత్సరంలో జరిగింది?",
        options: ["1988", "1990", "1992", "1995"],
        correct: 2,
        explanation: "National Policy on Education 1986 తరువాత 1992లో ముఖ్యమైన revision జరిగింది. 1992లో policy modifications మరియు Programme of Actionకు సంబంధించిన మార్పులు వచ్చాయి."
    },
    {
        question: "1986 National Policy on Educationకు సంబంధించిన Programme of Action (POA) ఏ సంవత్సరంలో రూపొందించబడింది?",
        options: ["1986", "1988", "1992", "1995"],
        correct: 2,
        explanation: "1986 National Policy on Educationకు సంబంధించిన Programme of Action 1992లో రూపొందించబడింది. ఇది విద్యా విధానంలోని లక్ష్యాలను అమలు చేయడానికి కార్యాచరణ మార్గదర్శకాలను అందించింది."
    },
    {
        question: "National Curriculum Framework (NCF) 2005లో ప్రధానంగా ప్రోత్సహించబడిన దృక్పథం ఏది?",
        options: ["Rote memorisationను ప్రధానంగా చేయడం", "Child-centred learning మరియు knowledgeను జీవితంతో అనుసంధానం చేయడం", "Examination-only curriculum", "Teacher lecture మాత్రమే ఆధారంగా ఉండే విద్య"],
        correct: 1,
        explanation: "NCF 2005 child-centred learningను ప్రోత్సహిస్తుంది. Knowledgeను పిల్లల జీవిత అనుభవాలతో అనుసంధానం చేయడం, rote learning తగ్గించడం మరియు meaningful learningకు ప్రాధాన్యత ఇస్తుంది."
    },
    {
        question: "NEP 2020లో school education structure ఏది?",
        options: ["10+2+3", "5+3+3+4", "8+4", "4+4+4+4"],
        correct: 1,
        explanation: "NEP 2020 school education కోసం 5+3+3+4 curricular structureను ప్రతిపాదించింది. ఇది Foundational, Preparatory, Middle మరియు Secondary stagesగా విద్యను విభజిస్తుంది."
    },
    {
        question: "NEP 2020లో Foundational Stage సాధారణంగా ఏ వయస్సు పరిధిని కలిగి ఉంటుంది?",
        options: ["3–8 సంవత్సరాలు", "6–10 సంవత్సరాలు", "8–11 సంవత్సరాలు", "11–14 సంవత్సరాలు"],
        correct: 0,
        explanation: "NEP 2020లో Foundational Stage సాధారణంగా 3–8 సంవత్సరాల వయస్సును కలిగి ఉంటుంది. ఇందులో మూడు సంవత్సరాల Anganwadi/pre-school మరియు రెండు సంవత్సరాల primary schooling ఉంటుంది."
    },
    {
        question: "NEP 2020 ప్రకారం vocational exposureను ఏ తరగతి నుంచి ప్రారంభించడానికి ప్రాధాన్యత ఇచ్చారు?",
        options: ["Class 3", "Class 5", "Class 6", "Class 9"],
        correct: 2,
        explanation: "NEP 2020 ప్రకారం vocational education exposureను Class 6 నుంచి ప్రారంభించడానికి ప్రాధాన్యత ఇచ్చారు. ఇందులో internships మరియు practical vocational experiencesకు అవకాశం ఉంటుంది."
    },
    {
        question: "NEP 2020 ప్రకారం 2035 నాటికి Higher Educationలో Gross Enrolment Ratioను సుమారుగా ఎంతకు పెంచాలని లక్ష్యంగా పెట్టుకుంది?",
        options: ["35%", "40%", "50%", "75%"],
        correct: 2,
        explanation: "NEP 2020 ప్రకారం 2035 నాటికి Higher Education Gross Enrolment Ratioను 50 శాతానికి పెంచడం లక్ష్యంగా పెట్టుకుంది."
    },
    {
        question: "Salamanca Statement and Framework for Action on Special Needs Education ఏ సంవత్సరంలో ఆమోదించబడింది?",
        options: ["1990", "1994", "1996", "2000"],
        correct: 1,
        explanation: "Salamanca Statement and Framework for Action on Special Needs Education 1994లో ఆమోదించబడింది. ఇది inclusive education మరియు special educational needs ఉన్న పిల్లల హక్కులకు ముఖ్యమైన అంతర్జాతీయ మార్గదర్శకం."
    },
    {
        question: "Salamanca Framework యొక్క ప్రధాన educational principle ఏది?",
        options: ["Children with special educational needsను సాధ్యమైనంతవరకు inclusive schoolsలో చేర్చడం", "అన్ని CwSNలను తప్పనిసరిగా residential special schoolsలో ఉంచడం", "Disability ఆధారంగా separate curriculum మాత్రమే అందించడం", "Special educationను school education నుంచి వేరు చేయడం"],
        correct: 0,
        explanation: "Salamanca Framework ప్రధానంగా special educational needs ఉన్న పిల్లలను సాధ్యమైనంతవరకు inclusive schoolsలో చేర్చడాన్ని ప్రోత్సహిస్తుంది. Inclusive educationను ప్రధాన educational approachగా ఇది బలపరుస్తుంది."
    },
    {
        question: "UN Convention on the Rights of Persons with Disabilities (UNCRPD) ఏ సంవత్సరంలో adopted చేయబడింది?",
        options: ["2001", "2004", "2006", "2008"],
        correct: 2,
        explanation: "UN Convention on the Rights of Persons with Disabilities, UNCRPD, 2006లో United Nations General Assembly ద్వారా adopted చేయబడింది."
    },
    {
        question: "UNCRPDను United Nations General Assembly ఏ తేదీన adopt చేసింది?",
        options: ["3 May 2006", "13 December 2006", "30 March 2007", "3 May 2008"],
        correct: 1,
        explanation: "United Nations General Assembly UNCRPDను 13 December 2006న adopt చేసింది. Convention persons with disabilities హక్కులు, సమానత్వం మరియు గౌరవాన్ని అంతర్జాతీయంగా బలపరుస్తుంది."
    },
    {
        question: "ఒక Special Education teacher ఒక assessmentలో 5 మంది విద్యార్థుల marksను 10, 10, 10, 20, 40గా నమోదు చేశాడు. ఈ dataలో అత్యధికంగా పునరావృతమయ్యే score ఏది?",
        options: ["10", "20", "30", "40"],
        correct: 0,
        explanation: "Mode అంటే dataలో అత్యధికంగా పునరావృతమయ్యే విలువ. ఇక్కడ 10 మూడు సార్లు వస్తుంది, మిగిలిన scores ఒక్కసారి మాత్రమే వస్తాయి. కాబట్టి mode 10."
    },
    {
        question: "ఒక విద్యార్థి assessment scores: 12, 14, 16, 18, 20. ఈ data యొక్క arithmetic mean ఎంత?",
        options: ["14", "15", "16", "18"],
        correct: 2,
        explanation: "Arithmetic mean కోసం అన్ని scoresను కలిపి మొత్తం observations సంఖ్యతో భాగించాలి. 12+14+16+18+20 = 80; 80÷5 = 16. కాబట్టి mean 16."
    }
];