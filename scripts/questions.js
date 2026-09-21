const SUBJECTS = [
    "Multiple Disabilities"
];

const QUESTIONS = [
    {
        question: "రెండు లేదా అంతకంటే ఎక్కువ వైకల్యాలు కలిగిన వ్యక్తిలో, ఒకే వైకల్యాన్ని మాత్రమే ఆధారంగా చేసుకుని కాకుండా మొత్తం వ్యక్తి అవసరాలను గుర్తించడానికి ఉపయోగపడే అంచనా విధానం ఏది?",
        options: ["Functional assessment", "Single-domain assessment", "Norm-referenced screening మాత్రమే", "Intelligence testing మాత్రమే"],
        correct: 0,
        explanation: "Functional assessment examines how a person performs meaningful daily activities and identifies support needs across environments, rather than relying only on diagnosis, intelligence scores, or isolated academic measures alone effectively."
    },
    {
        question: "Deafblindness ఉన్న విద్యార్థితో ప్రత్యక్ష సంభాషణలో Tactile Sign Language ప్రధానంగా ఏ ఆధారాన్ని ఉపయోగిస్తుంది?",
        options: ["దృశ్య సంకేతాల పరిశీలన", "స్పర్శ ద్వారా సంకేతాల గ్రహణం", "కేవలం శ్రవణ సంకేతాల గ్రహణం", "కేవలం లిఖిత భాష"],
        correct: 1,
        explanation: "Tactile sign language conveys signs through touch, allowing a deafblind person to receive manual communication information without depending primarily on visual access to conventional signed language or demonstrations effectively in practice."
    },
    {
        question: "Multiple Disabilities ఉన్న విద్యార్థి యొక్క functional assessment లో క్రింది వాటిలో ఏది అత్యంత సముచితంగా పరిశీలించబడుతుంది?",
        options: ["కేవలం IQ స్కోరు", "కేవలం వైద్య నిర్ధారణ", "రోజువారీ కార్యకలాపాల్లో వ్యక్తి పనితీరు", "కేవలం తరగతి పరీక్ష మార్కులు"],
        correct: 2,
        explanation: "Functional assessment focuses on practical performance in everyday activities, such as mobility, communication, self-care, and participation, because these directly inform educational supports and individualized adaptations appropriately across different educational settings."
    },
    {
        question: "Deafblind విద్యార్థి మిగిలి ఉన్న కొద్దిపాటి దృష్టి మరియు శ్రవణ సామర్థ్యాన్ని ఉపయోగించుకునేలా బోధన రూపొందించడం ఏ సూత్రానికి దగ్గరగా ఉంటుంది?",
        options: ["Residual sensory utilization", "Sensory deprivation", "Rote memorization", "Isolated instruction"],
        correct: 0,
        explanation: "Residual sensory utilization means deliberately using remaining vision or hearing to support access, communication, orientation, and learning instead of ignoring available sensory capabilities during instruction and participation through accessible instruction."
    },
    {
        question: "Universal Design for Learning (UDL) యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        options: ["ప్రతి విద్యార్థికి ఒకే బోధనా పద్ధతిని అమలు చేయడం", "విద్యార్థుల వైవిధ్యాన్ని దృష్టిలో ఉంచుకుని నేర్చుకునే అవకాశాలను ముందుగానే అందుబాటులో ఉంచడం", "ప్రత్యేక అవసరాలున్న విద్యార్థులను ప్రత్యేక తరగతుల్లో మాత్రమే బోధించడం", "మూల్యాంకనాన్ని పూర్తిగా తొలగించడం"],
        correct: 1,
        explanation: "UDL anticipates learner variability and provides flexible ways to access information, engage with learning, and demonstrate understanding, reducing barriers before individual difficulties arise during educational activities for all learners generally."
    },
    {
        question: "ఒక Multiple Disabilities విద్యార్థి పాఠ్యపుస్తకంలోని ముద్రిత సమాచారాన్ని చదవలేకపోతున్నాడు. అదే సమాచారాన్ని tactile symbols మరియు audio output ద్వారా అందించడం ప్రధానంగా ఏ UDL సూత్రానికి సంబంధించినది?",
        options: ["Multiple means of representation", "Multiple means of punishment", "Multiple means of grading", "Multiple means of attendance"],
        correct: 0,
        explanation: "Providing printed information through tactile symbols and audio output offers multiple ways to represent content, allowing learners with different sensory access needs to receive the information effectively across classroom activities."
    },
    {
        question: "Deafblind విద్యార్థికి ఒక కార్యకలాపం ప్రారంభమయ్యే ముందు చేతికి సంబంధించిన ఒక నిర్దిష్ట tactile cue ఇవ్వడం ప్రధానంగా ఏ ప్రయోజనాన్ని కలిగి ఉంటుంది?",
        options: ["Predictability మరియు anticipation పెంచడం", "Visual acuity పెంచడం", "Hearing threshold తగ్గించడం", "Intelligence quotient పెంచడం"],
        correct: 0,
        explanation: "Tactile cues given consistently before activities help students recognize what is coming next, improving predictability, anticipation, orientation, and participation within familiar classroom routines and transitions throughout familiar classroom routines consistently."
    },
    {
        question: "క్రింది వాటిలో communication కోసం Assistive Technologyకి అత్యంత సరైన ఉదాహరణ ఏది?",
        options: ["Speech-generating device", "Wheelchair ramp", "Braille slate మాత్రమే", "Classroom blackboard"],
        correct: 0,
        explanation: "A speech-generating device produces or supports communication output for individuals who cannot reliably use natural speech, making it an assistive technology option for communication and participation within educational settings effectively."
    },
    {
        question: "Deafblind విద్యార్థి వస్తువులను స్పర్శ ద్వారా గుర్తించడంలో సహాయం చేయడానికి, వస్తువు యొక్క నిజమైన వస్తువును సంకేతంగా ఉపయోగించడం ఏ విధానానికి ఉదాహరణ?",
        options: ["Object-symbol communication", "Auditory discrimination training", "Visual tracking", "Lip reading"],
        correct: 0,
        explanation: "Using a real object as a communication symbol gives the learner a concrete tactile reference for meaning, supporting object-symbol communication when conventional visual symbols are inaccessible or difficult when needed."
    },
    {
        question: "Multiple Disabilities ఉన్న విద్యార్థికి curriculum adaptation చేయడంలో మొదటి ప్రాధాన్యత ఏదిగా ఉండాలి?",
        options: ["ప్రతి విద్యార్థికి ఒకే academic target ఉంచడం", "విద్యార్థి functional needs మరియు participation requirements గుర్తించడం", "అన్ని academic activities తొలగించడం", "కేవలం textbook completion పై దృష్టి పెట్టడం"],
        correct: 1,
        explanation: "Curriculum adaptation should begin by identifying functional needs and participation requirements, ensuring learning goals and supports are meaningful, accessible, and connected to the student's everyday educational context and activities meaningfully."
    },
    {
        question: "ఒక Deafblind విద్యార్థి classroomలో ఇతరుల సంభాషణను గమనించడం ద్వారా నేర్చుకోలేడు. అందువల్ల ఉపాధ్యాయుడు కావాల్సిన సమాచారాన్ని tactile లేదా accessible communication ద్వారా ఉద్దేశపూర్వకంగా అందిస్తున్నాడు. ఇది ప్రధానంగా ఏ అవసరాన్ని పరిష్కరిస్తుంది?",
        options: ["Incidental learning limitation", "Physical growth limitation", "Intelligence limitation", "Motor maturation limitation"],
        correct: 0,
        explanation: "Deafblind students may miss incidental learning because they cannot easily observe surrounding interactions. Deliberate accessible communication provides information that sighted or hearing peers often acquire incidentally in classrooms daily classroom."
    },
    {
        question: "Multiple Disabilities ఉన్న విద్యార్థి యొక్క physical assessmentలో క్రింది వాటిలో ఏది ముఖ్యమైనది?",
        options: ["కేవలం చదవడం వేగం", "కదలిక, posture మరియు motor functioning", "కేవలం vocabulary size", "కేవలం spelling ability"],
        correct: 1,
        explanation: "Physical assessment examines movement, posture, mobility, coordination, and motor functioning because these factors can directly affect participation, access, positioning, and independence in educational activities and routines and daily participation needs."
    },
    {
        question: "ఒక విద్యార్థి hearing మరియు visual impairments రెండింటినీ కలిగి ఉన్నాడు. అతనికి communication system ఎంపిక చేసేటప్పుడు అత్యంత ముఖ్యమైన నిర్ణయాధారం ఏది?",
        options: ["ఒకే universal communication method", "అతని sensory access, communication ability మరియు preferences", "వయస్సు మాత్రమే", "textbook language మాత్రమే"],
        correct: 1,
        explanation: "Communication systems should be selected according to the student's sensory access, current communication abilities, preferences, and environmental requirements rather than applying one method universally to every learner for meaningful participation."
    },
    {
        question: "Deafblind విద్యార్థికి classroomలో ఉపాధ్యాయుడు నేరుగా చేతిని పట్టుకుని ప్రతి చర్య చేయించడం కంటే, విద్యార్థి చేతుల కదలికను అనుసరించేందుకు అవకాశం కల్పించే hand-under-hand విధానం ప్రధానంగా ఏ ఉద్దేశ్యాన్ని అందిస్తుంది?",
        options: ["విద్యార్థి స్వీయ నియంత్రణ మరియు చురుకైన భాగస్వామ్యాన్ని పెంచడం", "విద్యార్థి అన్ని పనులను ఉపాధ్యాయుడే చేయడం", "tactile input పూర్తిగా తొలగించడం", "communicationను teacher-dependent చేయడం"],
        correct: 0,
        explanation: "Hand-under-hand allows the learner to explore and participate while following another person's movement, supporting control, choice, shared attention, and active involvement rather than passive teacher direction during activities with independence."
    },
    {
        question: "Multiple Disabilities ఉన్న విద్యార్థి కోసం functional curriculumలో క్రింది వాటిలో ఏది అత్యంత సముచితమైన అంశం?",
        options: ["Independent living skills", "కేవలం abstract theoretical content", "కేవలం memorization activities", "కేవలం competitive examinations"],
        correct: 0,
        explanation: "Functional curricula emphasize practical skills such as independent living, communication, mobility, and participation, helping learners apply abilities meaningfully in everyday environments, school routines, and community settings and community participation contexts."
    },
    {
        question: "ఒక Deafblind విద్యార్థికి కొత్త classroom routine నేర్పేటప్పుడు, ప్రతి కార్యకలాపానికి ముందు అదే tactile signalను ఉపయోగించడం ద్వారా విద్యార్థి ఏమి అభివృద్ధి చేసుకోవచ్చు?",
        options: ["Anticipation of routine", "Auditory localization", "Visual scanning", "Speech articulation మాత్రమే"],
        correct: 0,
        explanation: "Consistent tactile signals before routines help the student anticipate what will happen next, making activities more predictable and supporting understanding of classroom sequences and transitions within familiar classroom routines consistently."
    },
    {
        question: "Assistive Technology ఎంపికలో SETT frameworkలోని “T” సాధారణంగా దేనిని సూచిస్తుంది?",
        options: ["Technology", "Teaching", "Therapy", "Training"],
        correct: 0,
        explanation: "In the SETT framework, the letter T represents Technology, following Student, Environment, Tasks, and Technology as the four components considered when selecting assistive technology for learners for technology decisions."
    },
    {
        question: "Multiple Disabilities ఉన్న విద్యార్థికి computer access కల్పించడానికి switch access ఉపయోగించడం ప్రధానంగా ఏ అవసరాన్ని పరిష్కరిస్తుంది?",
        options: ["Motor access to technology", "Vocabulary assessment", "Hearing screening", "Behaviour diagnosis"],
        correct: 0,
        explanation: "Switch access enables a learner with limited motor abilities to interact with computers or electronic devices, providing an alternative physical access method without changing communication assessment procedures for educational participation."
    },
    {
        question: "Deafblindness ఉన్న విద్యార్థి tactile communication ఉపయోగిస్తున్నప్పుడు, communication partner ఒకే సమయంలో చాలా వేగంగా సంకేతాలను మార్చడం వల్ల విద్యార్థి ఇబ్బంది పడుతున్నాడు. అత్యంత సముచితమైన classroom adaptation ఏది?",
        options: ["సంకేతాల వేగాన్ని తగ్గించి consistent tactile cues ఉపయోగించడం", "tactile communication పూర్తిగా నిలిపివేయడం", "కేవలం written instructions ఇవ్వడం", "విద్యార్థిని activity నుండి తొలగించడం"],
        correct: 0,
        explanation: "Reducing tactile signing speed and maintaining consistent cues can improve processing time and comprehension, making communication more predictable and accessible for a deafblind learner during classroom interactions within classroom interactions."
    },
    {
        question: "Multiple Disabilities ఉన్న విద్యార్థికి curriculumలో ఒకే లక్ష్యాన్ని వివిధ sensory modes ద్వారా చేరుకునే అవకాశాలను కల్పించడం ఏ భావనకు దగ్గరగా ఉంటుంది?",
        options: ["Universal Design for Learning", "Exclusionary curriculum", "Fixed curriculum", "Single-mode instruction"],
        correct: 0,
        explanation: "UDL supports flexible access to learning by allowing learners to reach goals through varied methods, representations, actions, expressions, and engagement opportunities across instructional environments and activities and accessible learning opportunities."
    },
    {
        question: "క్రింది జతలలో సరైనది ఏది?",
        options: ["Braille — tactile reading system", "Speech-generating device — hearing screening tool", "Tactile sign language — visual-only communication", "Switch access — auditory assessment"],
        correct: 0,
        explanation: "Braille is a tactile reading and writing system. The other options incorrectly pair assistive technologies or communication methods with hearing or auditory assessment functions inappropriately for appropriate educational access needs."
    },
    {
        question: "ఒక విద్యార్థి multiple disabilities కారణంగా pencilను ఉపయోగించలేడు. అయితే అతను switch ద్వారా computerలో సమాధానాన్ని ఎంచుకోగలడు. ఇది UDLలోని ఏ అంశానికి అత్యంత దగ్గరగా ఉంటుంది?",
        options: ["Multiple means of action and expression", "Multiple means of punishment", "Multiple means of diagnosis", "Multiple means of classification"],
        correct: 0,
        explanation: "Switch access changes how a learner physically responds to technology, allowing alternative actions and expressions when conventional pencil use or standard input methods create barriers and accessible technology participation opportunities."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి:\n\na) Multiple Disabilities ఉన్న విద్యార్థి assessmentలో వివిధ developmental మరియు functional domainsను పరిగణించాలి.\n\nb) ఒకే standardized test score ఆధారంగా విద్యార్థి మొత్తం educational needsను నిర్ణయించవచ్చు.\n\nసరైన సమాధానాన్ని ఎంచుకోండి.",
        options: ["a మాత్రమే సరైనది", "b మాత్రమే సరైనది", "a మరియు b రెండూ సరైనవి", "a మరియు b రెండూ తప్పు"],
        correct: 0,
        explanation: "Multiple Disabilities assessment should consider developmental and functional domains. A single standardized score cannot adequately describe the student's complete educational strengths, needs, and support requirements across settings and support planning."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి:\n\na) UDLలో learner variabilityను ముందుగానే పరిగణించడం ముఖ్యమైనది.\n\nb) UDL అనేది కేవలం ప్రత్యేక అవసరాలున్న విద్యార్థుల కోసం మాత్రమే రూపొందించబడిన పద్ధతి.\n\nA. a మాత్రమే సరైనది\nB. b మాత్రమే సరైనది\nC. a మరియు b రెండూ సరైనవి\nD. a మరియు b రెండూ తప్పు",
        options: ["a మాత్రమే సరైనది", "b మాత్రమే సరైనది", "a మరియు b రెండూ సరైనవి", "a మరియు b రెండూ తప్పు"],
        correct: 0,
        explanation: "UDL is based on anticipating learner variability. It is designed to benefit all learners, not exclusively students with disabilities, by reducing barriers through flexible instructional design through flexible instructional design."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి:\n\na) Family members విద్యార్థి యొక్క strengths మరియు functional needs గురించి ముఖ్యమైన సమాచారాన్ని అందించగలరు.\n\nb) Educational planningలో కుటుంబ భాగస్వామ్యం అవసరం లేదు, ఎందుకంటే assessment పూర్తిగా schoolలోనే జరుగుతుంది.\n\nA. a మాత్రమే సరైనది\nB. b మాత్రమే సరైనది\nC. a మరియు b రెండూ సరైనవి\nD. a మరియు b రెండూ తప్పు",
        options: ["a మాత్రమే సరైనది", "b మాత్రమే సరైనది", "a మరియు b రెండూ సరైనవి", "a మరియు b రెండూ తప్పు"],
        correct: 0,
        explanation: "Families can provide valuable information about strengths, routines, preferences, communication, and functional needs. Their participation strengthens educational planning and coordination of appropriate supports across relevant educational settings consistently."
    },
    {
        question: "క్రింది వాటిలో Deafblindness ఉన్న విద్యార్థికి communication access కల్పించడంలో అత్యంత సముచితమైనవి ఏవి?\n\ni) Tactile sign language\nii) Object symbols\niii) Consistent tactile cues\niv) కేవలం visual demonstration\n\nA. i, ii, iii\nB. i, iii, iv\nC. ii, iii, iv\nD. i, ii, iii, iv",
        options: ["i, ii, iii", "i, iii, iv", "ii, iii, iv", "i, ii, iii, iv"],
        correct: 0,
        explanation: "Tactile sign language, object symbols, and consistent tactile cues can provide accessible communication. A purely visual demonstration may not be accessible to a deafblind learner without additional support when visual access is unavailable."
    },
    {
        question: "క్రింది వాటిని సరైన జతలతో సరిపోల్చండి.\n\nColumn-I\n\ni) Speech-generating device\nii) Switch access\niii) Braille\niv) Tactile sign language\n\nColumn-II\n\na) Tactile reading/writing system\nb) Alternative communication output\nc) Motor access to electronic equipment\nd) Communication through tactile signs\n\nA. i-b, ii-c, iii-a, iv-d\nB. i-c, ii-b, iii-d, iv-a\nC. i-a, ii-d, iii-b, iv-c\nD. i-d, ii-a, iii-c, iv-b",
        options: ["i-b, ii-c, iii-a, iv-d", "i-c, ii-b, iii-d, iv-a", "i-a, ii-d, iii-b, iv-c", "i-d, ii-a, iii-c, iv-b"],
        correct: 0,
        explanation: "Speech-generating devices provide communication output; switches provide motor access; Braille provides tactile reading and writing; tactile sign language communicates through signs received through touch by the learner."
    },
    {
        question: "Multiple Disabilities ఉన్న విద్యార్థి కోసం classroom adaptationలను అమలు చేసే సరైన క్రమానికి అత్యంత దగ్గరగా ఉన్నది ఏది?\n\ni) విద్యార్థి అవసరాలను గుర్తించడం\nii) తగిన adaptationను ఎంపిక చేయడం\niii) adaptationను అమలు చేయడం\niv) విద్యార్థి పనితీరును మూల్యాంకనం చేయడం",
        options: ["i → ii → iii → iv", "ii → i → iv → iii", "iii → ii → i → iv", "iv → iii → ii → i"],
        correct: 0,
        explanation: "A logical adaptation process begins by identifying needs, selecting an appropriate adaptation, implementing it, and then evaluating student performance to determine whether further changes are necessary for participation after implementation."
    },
    {
        question: "ఒక Deafblind విద్యార్థి పాఠశాలలో ఒక activity నుండి మరొక activityకి మారే సమయంలో తరచుగా ఆందోళన చెందుతున్నాడు. ఉపాధ్యాయుడు ప్రతి transitionకు ముందు ఒకే tactile cue మరియు consistent routineను ఉపయోగిస్తున్నాడు. ఈ intervention ప్రధానంగా దేనిని పెంచుతుంది?",
        options: ["Predictability and environmental understanding", "Visual discrimination", "Auditory memory", "Speech fluency"],
        correct: 0,
        explanation: "Consistent tactile cues and routines before transitions make environmental changes more predictable, helping the student understand upcoming activities and reducing uncertainty during movement between classroom tasks during daily classroom transitions."
    },
    {
        question: "క్రింది వాటిలో Multiple Disabilities ఉన్న విద్యార్థి కోసం family-community resource mobilisationకు అత్యంత సముచితమైన ఉదాహరణ ఏది?",
        options: ["కుటుంబాన్ని educational planning నుండి దూరంగా ఉంచడం", "పాఠశాల, కుటుంబం, therapists మరియు community resources మధ్య సమన్వయం చేయడం", "అన్ని servicesను classroom teacher ఒక్కరే అందించడం", "community participationను academic learningకు సంబంధం లేనిదిగా పరిగణించడం"],
        correct: 1,
        explanation: "Family-community resource mobilisation involves coordinated collaboration among school staff, family members, therapists, and community services so supports are connected and educational participation is strengthened across settings effectively."
    }
];