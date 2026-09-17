const SUBJECTS = [
    "Special Education"
];

const QUESTIONS = [
    {
        question: "శ్రవణ లోపాన్ని ప్రారంభ దశలో గుర్తించడం (Early Identification) యొక్క ముఖ్య ఉద్దేశ్యం ఏది?",
        options: [
            "శ్రవణ లోపం ఉన్న ప్రతి విద్యార్థికి ఒకే బోధనా విధానాన్ని నిర్ణయించడం",
            "అవసరమైన మూల్యాంకనం మరియు ప్రారంభ జోక్యాన్ని సకాలంలో ప్రారంభించడం",
            "విద్యార్థి విద్యా సామర్థ్యాన్ని మాత్రమే నిర్ణయించడం",
            "కేవలం వృత్తి శిక్షణ అవసరాలను గుర్తించడం"
        ],
        correct: 1,
        explanation: "Early identification వల్ల hearing lossను త్వరగా నిర్ధారించి, అవసరమైన audiological assessment, language assessment మరియు early interventionను సరైన సమయంలో ప్రారంభించవచ్చు. ఇది భాషా, కమ్యూనికేషన్ మరియు విద్యా అభివృద్ధికి సహాయపడుతుంది."
    },
    {
        question: "Pure Tone Audiometry ద్వారా ప్రధానంగా ఏ అంశాన్ని అంచనా వేస్తారు?",
        options: [
            "వివిధ frequencyల వద్ద వినికిడి threshold",
            "భాష యొక్క వ్యాకరణ నిర్మాణం",
            "మాట్లాడే పదాల అర్థాన్ని గ్రహించే సామర్థ్యం",
            "speech productionలో articulation errors"
        ],
        correct: 0,
        explanation: "Pure Tone Audiometry వివిధ frequencies వద్ద వ్యక్తి వినగలిగే కనిష్ఠ శబ్ద తీవ్రతను, అంటే hearing thresholdను కొలుస్తుంది. దీనివల్ల hearing sensitivity మరియు degree of hearing loss అంచనా వేయబడతాయి."
    },
    {
        question: "Audiogramలో సాధారణంగా ఏ రెండు ప్రధాన పరిమాణాలు చూపబడతాయి?",
        options: [
            "Frequency మరియు intensity",
            "Age మరియు IQ",
            "Speech rate మరియు vocabulary",
            "Duration మరియు language level"
        ],
        correct: 0,
        explanation: "Audiogramలో horizontal axis సాధారణంగా frequencyని Hertzలో, vertical axis sound intensity లేదా hearing levelను decibelsలో చూపిస్తుంది. ఈ రెండు పరిమాణాలు hearing thresholdsను దృశ్యరూపంలో తెలియజేస్తాయి."
    },
    {
        question: "శ్రవణ లోపం యొక్క degreeను నిర్ణయించడంలో సాధారణంగా ఏ అంశం ముఖ్యమైనది?",
        options: [
            "Hearing threshold",
            "Reading speed",
            "Speech intelligibility మాత్రమే",
            "Expressive vocabulary మాత్రమే"
        ],
        correct: 0,
        explanation: "Degree of hearing lossను నిర్ణయించడానికి ప్రధానంగా hearing thresholdsను ఉపయోగిస్తారు. వ్యక్తి వివిధ frequencies వద్ద ఎంత తీవ్రతతో శబ్దాన్ని వినగలుగుతున్నాడో thresholds సూచిస్తాయి మరియు loss severityను వర్గీకరించడంలో సహాయపడతాయి."
    },
    {
        question: "Tympanometry ప్రధానంగా ఏ అంశాన్ని పరిశీలించడానికి ఉపయోగపడుతుంది?",
        options: [
            "Middle-ear function",
            "Auditory memory",
            "Speech articulation",
            "Receptive vocabulary"
        ],
        correct: 0,
        explanation: "Tympanometry middle-ear system యొక్క mechanical functioningను పరిశీలిస్తుంది. ముఖ్యంగా eardrum mobility, middle-ear pressure మరియు related conditionsను అంచనా వేయడానికి ఇది ఉపయోగించే objective audiological test."
    },
    {
        question: "ఒక శిశువులో hearing lossను ప్రారంభ దశలో గుర్తించడానికి objective physiological screeningలో ఏది ఉపయోగించబడుతుంది?",
        options: [
            "Otoacoustic Emissions (OAE)",
            "Peabody Picture Vocabulary Test",
            "Goldman-Fristoe Test of Articulation",
            "Vineland Adaptive Behavior Scales"
        ],
        correct: 0,
        explanation: "OAE అనేది objective physiological screening method. ఇది cochlea, ముఖ్యంగా outer hair cells, sound stimulusకు ఉత్పత్తి చేసే emissionsను గుర్తిస్తుంది మరియు infantsలో early hearing screeningకు విస్తృతంగా ఉపయోగించబడుతుంది."
    },
    {
        question: "Auditory Brainstem Response (ABR) పరీక్ష ప్రధానంగా ఏ అంశాన్ని అంచనా వేయడానికి ఉపయోగపడుతుంది?",
        options: [
            "Auditory pathwayలోని electrical responses",
            "విద్యార్థి reading comprehension",
            "Speech-language expressive ability",
            "Classroom social interaction"
        ],
        correct: 0,
        explanation: "ABR sound stimulusకు auditory nerve మరియు brainstem pathwaysలో ఏర్పడే electrical responsesను record చేస్తుంది. Behavioral response ఇవ్వలేని infantsలో hearing assessmentకు ఇది ముఖ్యమైన objective physiological measure."
    },
    {
        question: "ఒక శిశువు sound stimulusకు behavioral response ఇవ్వలేని వయస్సులో ఉన్నప్పుడు hearing assessmentలో objective method ఉపయోగించడం యొక్క ప్రధాన ప్రయోజనం ఏది?",
        options: [
            "వ్యక్తి యొక్క subjective responseపై తక్కువ ఆధారపడటం",
            "భాషా అభివృద్ధిని నేరుగా బోధించడం",
            "articulation errorsను సరిచేయడం",
            "విద్యా achievementను కొలవడం"
        ],
        correct: 0,
        explanation: "Objective methods శిశువు చెప్పే లేదా చూపించే behavioral responseపై ఎక్కువగా ఆధారపడవు. అందువల్ల చిన్న వయస్సులో reliable physiological information పొందడానికి OAE మరియు ABR వంటి పరీక్షలు ఉపయోగపడతాయి."
    },
    {
        question: "Speech audiometryలో Speech Reception Threshold (SRT) ప్రధానంగా ఏదిని సూచిస్తుంది?",
        options: [
            "మాటలను గుర్తించగలిగే కనిష్ఠ స్థాయి",
            "గరిష్ఠంగా వినగలిగే frequency",
            "articulation errors సంఖ్య",
            "vocabulary size"
        ],
        correct: 0,
        explanation: "Speech Reception Threshold అనేది వ్యక్తి speech materialను సాధారణంగా సగం సందర్భాల్లో గుర్తించగలిగే కనిష్ఠ presentation levelను సూచిస్తుంది. ఇది speech sensitivityను అంచనా వేయడానికి ఉపయోగపడుతుంది."
    },
    {
        question: "శ్రవణ లోపం ఉన్న చిన్నారి మాటలను వింటున్నప్పుడు ఉపాధ్యాయుడు ముఖం స్పష్టంగా కనిపించేలా మాట్లాడటం ఎందుకు సహాయపడుతుంది?",
        options: [
            "Speech readingకు అవకాశం కల్పిస్తుంది",
            "Hearing thresholdను తగ్గిస్తుంది",
            "Middle-ear pressureను మారుస్తుంది",
            "Auditory nerveను బలపరుస్తుంది"
        ],
        correct: 0,
        explanation: "ఉపాధ్యాయుడి ముఖం స్పష్టంగా కనిపిస్తే విద్యార్థి lip movements, facial expressions మరియు ఇతర visual cuesను ఉపయోగించగలడు. ఇవి auditory informationను complement చేసి speech understandingను మెరుగుపరుస్తాయి."
    },
    {
        question: "Speech reading ప్రధానంగా ఏ సమాచారాన్ని ఉపయోగించడంపై ఆధారపడి ఉంటుంది?",
        options: [
            "మాట్లాడేవారి ముఖం, పెదవులు మరియు సంబంధిత దృశ్య సంకేతాలు",
            "కేవలం auditory threshold",
            "కేవలం written language",
            "కేవలం tactile stimulation"
        ],
        correct: 0,
        explanation: "Speech readingలో మాట్లాడేవారి పెదవుల కదలికలు, ముఖ కదలికలు, expressions మరియు contextual visual cuesను ఉపయోగించి spoken messageను అర్థం చేసుకోవడానికి ప్రయత్నిస్తారు."
    },
    {
        question: "Auditory Verbal Therapy (AVT) యొక్క ప్రధాన లక్ష్యం ఏది?",
        options: [
            "అందుబాటులో ఉన్న hearing ద్వారా spoken language అభివృద్ధిని ప్రోత్సహించడం",
            "hearingను పూర్తిగా visual communicationతో భర్తీ చేయడం",
            "విద్యార్థికి కేవలం sign vocabulary నేర్పడం",
            "కేవలం articulation drills నిర్వహించడం"
        ],
        correct: 0,
        explanation: "AVTలో అందుబాటులో ఉన్న hearingను hearing technologyతో maximize చేసి listening మరియు spoken language developmentను ప్రోత్సహిస్తారు. ప్రధానంగా auditory pathway ద్వారా spoken communication అభివృద్ధికి ప్రాధాన్యం ఇస్తుంది."
    },
    {
        question: 'Auditory trainingలో "detection" దశ ప్రధానంగా దేనికి సంబంధించినది?',
        options: [
            "శబ్దం ఉందా లేదా గుర్తించడం",
            "రెండు పదాల అర్థాన్ని పోల్చడం",
            "వాక్యాన్ని చదవడం",
            "వ్యాకరణ తప్పులను గుర్తించడం"
        ],
        correct: 0,
        explanation: "Detection అనేది auditory trainingలో ప్రాథమిక listening skill. ఈ దశలో వ్యక్తి శబ్దం లేదా auditory stimulus ఉన్నదా లేదా లేదో గుర్తించడంపై ప్రధానంగా దృష్టి పెడతాడు."
    },
    {
        question: "Auditory trainingలో discrimination దశలో విద్యార్థి ఏ సామర్థ్యాన్ని అభివృద్ధి చేస్తాడు?",
        options: [
            "రెండు auditory stimuli ఒకేలా ఉన్నాయా లేదా భిన్నంగా ఉన్నాయా గుర్తించడం",
            "శబ్దం ఉందో లేదో మాత్రమే గుర్తించడం",
            "మాట్లాడే వ్యక్తి ముఖాన్ని గుర్తించడం",
            "రాతపూర్వక పదాలను వర్గీకరించడం"
        ],
        correct: 0,
        explanation: "Auditory discriminationలో రెండు లేదా అంతకంటే ఎక్కువ sounds మధ్య similarities మరియు differencesను గుర్తించడం నేర్చుకుంటారు. ఇది detection కంటే ఉన్నతమైన listening skillగా పరిగణించబడుతుంది."
    },
    {
        question: "Auditory trainingలో ఒక విద్యార్థి ఒక పదాన్ని విని దానిని చిత్రంతో సరిపోల్చగలుగుతున్నాడు. ఇది detection కంటే ఏ ఉన్నత స్థాయి auditory skillకు దగ్గరగా ఉంటుంది?",
        options: [
            "Identification",
            "Awareness",
            "Localization",
            "Conditioning"
        ],
        correct: 0,
        explanation: "Identificationలో విన్న auditory stimulusను తెలిసిన object, picture, word లేదా categoryతో అనుసంధానించి గుర్తిస్తారు. కాబట్టి pictureతో వినబడిన పదాన్ని సరిపోల్చడం identificationకు ఉదాహరణ."
    },
    {
        question: "ఒక విద్యార్థి hearing aid ఉపయోగిస్తున్నప్పటికీ ఉపాధ్యాయుడి మాటలను classroomలో స్పష్టంగా వినలేకపోతున్నాడు. మొదట పరిశీలించాల్సిన classroom factor ఏది?",
        options: [
            "Background noise మరియు classroom acoustics",
            "విద్యార్థి handwriting speed",
            "విద్యార్థి mathematics achievement",
            "textbook font size మాత్రమే"
        ],
        correct: 0,
        explanation: "Hearing aid ఉపయోగిస్తున్నప్పటికీ classroom listening difficulty ఉంటే background noise, reverberation మరియు speaker distance వంటి acoustic factorsను మొదట పరిశీలించాలి. ఇవి speech clarityను గణనీయంగా ప్రభావితం చేస్తాయి."
    },
    {
        question: "Classroom amplification system ఉపయోగించడం యొక్క ప్రధాన ఉద్దేశ్యం ఏది?",
        options: [
            "ఉపాధ్యాయుడి speech signalను విద్యార్థికి మరింత స్పష్టంగా అందించడం",
            "విద్యార్థి hearing lossను వైద్యపరంగా తొలగించడం",
            "విద్యార్థి language comprehensionను స్వయంచాలకంగా పెంచడం",
            "speech articulationను స్వయంగా సరిచేయడం"
        ],
        correct: 0,
        explanation: "Classroom amplification systems speaker's speech signalను విద్యార్థికి మరింత స్పష్టంగా మరియు consistentగా అందించడంలో సహాయపడతాయి. ఇవి distance మరియు environmental noise ప్రభావాన్ని తగ్గించి listening accessను మెరుగుపరుస్తాయి."
    },
    {
        question: "FM/DM classroom system వంటి technology ప్రధానంగా ఏ సమస్యను తగ్గించడానికి సహాయపడుతుంది?",
        options: [
            "Speaker మరియు listener మధ్య దూరం, background noise వల్ల speech signal తగ్గిపోవడం",
            "విద్యార్థి యొక్క visual acuity తగ్గిపోవడం",
            "విద్యార్థి యొక్క fine-motor difficulty",
            "written languageలో vocabulary deficit"
        ],
        correct: 0,
        explanation: "FM/DM systems teacher's voiceను microphone ద్వారా నేరుగా receiverకు పంపుతాయి. దీనివల్ల speaker-listener distance, background noise మరియు room acoustics వల్ల speech signal degradation తగ్గుతుంది."
    },
    {
        question: "Hearing aid యొక్క ప్రధాన విధి ఏది?",
        options: [
            "అందుబాటులో ఉన్న శబ్దాన్ని amplify చేసి వినికిడికి సహాయపడటం",
            "auditory nerveను పునర్నిర్మించడం",
            "speechను textగా స్వయంచాలకంగా మార్చడం",
            "hearing lossకు శాశ్వత వైద్య చికిత్స అందించడం"
        ],
        correct: 0,
        explanation: "Hearing aid incoming soundsను process చేసి amplify చేస్తుంది, తద్వారా మిగిలిన hearingను ఉపయోగించుకోవడానికి సహాయపడుతుంది. ఇది hearing lossను cure చేయదు లేదా auditory nerveను పునర్నిర్మించదు."
    },
    {
        question: "Cochlear implant మరియు hearing aid మధ్య ప్రధాన తేడాను సరైన విధంగా తెలిపే వాక్యం ఏది?",
        options: [
            "Cochlear implant auditory systemను electrical stimulation ద్వారా stimulate చేస్తుంది; hearing aid శబ్దాన్ని amplify చేస్తుంది",
            "రెండూ పూర్తిగా ఒకే విధంగా పనిచేస్తాయి",
            "Hearing aid auditory nerveను నేరుగా stimulate చేస్తుంది; cochlear implant కేవలం amplification చేస్తుంది",
            "Cochlear implant కేవలం classroom amplification deviceగా పనిచేస్తుంది"
        ],
        correct: 0,
        explanation: "Hearing aid acoustic soundను amplify చేస్తుంది. Cochlear implant sound informationను electrical signalsగా encode చేసి cochlear structuresను bypassing ద్వారా auditory nerveకి electrical stimulation అందిస్తుంది."
    },
    {
        question: "ఒక hearing-impaired విద్యార్థి మాట్లాడే పదాలను వింటున్నప్పుడు తరచుగా కొన్ని speech soundsను తప్పుగా ఉచ్చరిస్తున్నాడు. సమగ్ర assessmentలో ఏ అంశాన్ని ప్రత్యేకంగా అంచనా వేయాలి?",
        options: [
            "Speech production మరియు articulation",
            "కేవలం visual acuity",
            "కేవలం gross motor ability",
            "కేవలం mathematical reasoning"
        ],
        correct: 0,
        explanation: "Speech soundsను తప్పుగా ఉచ్చరించడం articulation లేదా speech production difficultyని సూచించవచ్చు. అందువల్ల comprehensive assessmentలో speech sound production, intelligibility మరియు related speech characteristicsను పరిశీలించాలి."
    },
    {
        question: "Hearing impairment ఉన్న విద్యార్థి language assessmentలో receptive language మరియు expressive language రెండింటినీ పరిశీలించడం ఎందుకు అవసరం?",
        options: [
            "అర్థం చేసుకునే మరియు వ్యక్తీకరించే భాషా సామర్థ్యాలను వేర్వేరుగా గుర్తించడానికి",
            "hearing thresholdను రెండుసార్లు కొలవడానికి",
            "classroom acousticsను నిర్ణయించడానికి",
            "hearing aid యొక్క battery lifeను అంచనా వేయడానికి"
        ],
        correct: 0,
        explanation: "Receptive language ఇతరులు చెప్పిన లేదా చూపిన భాషను అర్థం చేసుకునే సామర్థ్యాన్ని సూచిస్తుంది. Expressive language వ్యక్తి తన ఆలోచనలను భాష ద్వారా వ్యక్తీకరించే సామర్థ్యాన్ని సూచిస్తుంది."
    },
    {
        question: "ఒక విద్యార్థి ఉపాధ్యాయుడు చెప్పిన వాక్యాన్ని అర్థం చేసుకున్నప్పటికీ, తాను చెప్పదలచుకున్న విషయాన్ని సరైన grammatical structureతో వ్యక్తపరచలేకపోతున్నాడు. ఇది ప్రధానంగా ఏ assessment areaతో సంబంధం కలిగి ఉంటుంది?",
        options: [
            "Expressive language",
            "Pure-tone threshold",
            "Middle-ear function",
            "Sound localization"
        ],
        correct: 0,
        explanation: "తన ఆలోచనలను సరైన grammatical structureతో వ్యక్తపరచలేకపోవడం expressive language difficultyకి సంబంధించినది. ఇందులో vocabulary, grammar, sentence formulation మరియు verbal expression వంటి అంశాలు assessmentలో పరిశీలించబడతాయి."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి:\n\n1. Hearing assessmentలో audiological findings ముఖ్యమైనవి.\n2. Hearing impairment ఉన్న విద్యార్థికి language assessment కూడా అవసరం కావచ్చు.\n3. Audiogram ఒక్కటే విద్యార్థి యొక్క అన్ని educational needsను నిర్ణయిస్తుంది.\n\nసరైన సమాధానాన్ని గుర్తించండి.",
        options: [
            "1 మాత్రమే",
            "2 మాత్రమే",
            "1 మరియు 2 మాత్రమే",
            "1, 2 మరియు 3"
        ],
        correct: 2,
        explanation: "Audiological findings hearing characteristicsను అర్థం చేసుకోవడానికి ముఖ్యమైనవి. Language assessment educational planningకు సహాయపడుతుంది. అయితే audiogram ఒక్కటే విద్యార్థి యొక్క పూర్తి educational needsను నిర్ణయించదు."
    },
    {
        question: "క్రింది వాటిలో hearing impairment ఉన్న విద్యార్థి కోసం classroom communicationను మెరుగుపరచే సరైన చర్యల సముదాయం ఏది?",
        options: [
            "ఉపాధ్యాయుడు విద్యార్థికి వెనుకవైపు తిరిగి మాట్లాడటం, background noise పెంచడం",
            "ముఖం స్పష్టంగా కనిపించేలా మాట్లాడటం, తగిన seating ఇవ్వడం, visual support ఉపయోగించడం",
            "విద్యార్థిని అన్ని group activities నుండి తొలగించడం",
            "కేవలం రాత పరీక్షలకే పరిమితం చేయడం"
        ],
        correct: 1,
        explanation: "Face visibility, appropriate seating మరియు visual supports classroom communicationను మెరుగుపరుస్తాయి. ఇవి speech readingకు సహాయపడటంతో పాటు auditory informationను visual cuesతో complement చేసి learning accessను పెంచుతాయి."
    },
    {
        question: "క్రింది జతలలో సరైనది ఏది?",
        options: [
            "Tympanometry — Middle-ear function",
            "OAE — Reading comprehension",
            "ABR — Expressive vocabulary",
            "Pure Tone Audiometry — Speech articulation"
        ],
        correct: 0,
        explanation: "Tympanometry middle-ear functionను అంచనా వేస్తుంది. OAE cochlear emissionsను, ABR auditory pathway electrical responsesను పరిశీలిస్తాయి. Pure Tone Audiometry hearing thresholdsను కొలుస్తుంది, articulationను కాదు."
    },
    {
        question: "కింది వాటిని సరైన సంబంధంతో సరిపోల్చండి.\n\nColumn-I\nA. Hearing Aid\nB. Cochlear Implant\nC. FM/DM System\nD. Speech Reading\n\nColumn-II\n1. Visual speech cues ఉపయోగించడం\n2. Amplified acoustic signal అందించడం\n3. Electrical stimulation ద్వారా auditory pathwayను stimulate చేయడం\n4. Speaker's signalను listenerకు మెరుగ్గా అందించడం",
        options: [
            "A-2, B-3, C-4, D-1",
            "A-3, B-2, C-1, D-4",
            "A-4, B-1, C-3, D-2",
            "A-1, B-4, C-2, D-3"
        ],
        correct: 0,
        explanation: "Hearing aid acoustic signalను amplify చేస్తుంది; cochlear implant electrical stimulationను ఉపయోగిస్తుంది; FM/DM speaker signalను మెరుగ్గా అందిస్తుంది; speech reading visual speech cuesను ఉపయోగిస్తుంది."
    },
    {
        question: "Auditory trainingలో క్రింది నైపుణ్యాల అభివృద్ధికి సాధారణంగా సరైన క్రమం ఏది?\n\ni) Detection\nii) Discrimination\niii) Identification\niv) Comprehension",
        options: [
            "i → ii → iii → iv",
            "ii → i → iii → iv",
            "iii → ii → i → iv",
            "iv → iii → ii → i"
        ],
        correct: 0,
        explanation: "Auditory trainingలో సాధారణ progression detectionతో ప్రారంభమై discrimination, identification మరియు comprehension వైపు కొనసాగుతుంది. ఇది simple sound awareness నుంచి meaningful auditory understanding వరకు skill developmentను సూచిస్తుంది."
    },
    {
        question: "ఒక hearing-impaired విద్యార్థి classroomలో ఉపాధ్యాయుడి మాటలను కొంతవరకు వినగలుగుతున్నాడు. అయితే projector noise మరియు విద్యార్థుల సంభాషణ వల్ల speech understanding తగ్గుతోంది. కింది interventionలో ఏది విద్యార్థి అవసరానికి అత్యంత నేరుగా సంబంధించినది?",
        options: [
            "Classroom acoustics మెరుగుపరచడంతో పాటు appropriate amplification ఉపయోగించడం",
            "విద్యార్థి hearing aidను ఉపయోగించకుండా చేయడం",
            "విద్యార్థిని classroom నుండి శాశ్వతంగా తొలగించడం",
            "కేవలం handwriting practice పెంచడం"
        ],
        correct: 0,
        explanation: "Background noise speech understandingను తగ్గించినప్పుడు classroom acousticsను మెరుగుపరచడం మరియు appropriate amplification ఉపయోగించడం నేరుగా సమస్యను address చేస్తాయి. ఇవి teacher speech signalకు better access కల్పిస్తాయి."
    },
    {
        question: "ఒక hearing-impaired విద్యార్థి కోసం rehabilitation programme రూపొందించేటప్పుడు audiological interventionతో పాటు language, speech మరియు educational needsను కూడా పరిగణనలోకి తీసుకుంటున్నారు. ఈ విధానం ఏ భావనను ఉత్తమంగా ప్రతిబింబిస్తుంది?",
        options: [
            "సమగ్ర మరియు multidisciplinary rehabilitation",
            "కేవలం audiological treatment",
            "కేవలం speech correction",
            "కేవలం academic remediation"
        ],
        correct: 0,
        explanation: "Hearing impairment rehabilitationలో audiological servicesతో పాటు language, speech, educational మరియు communication needsను పరిగణించడం holistic approachను సూచిస్తుంది. వివిధ professionals కలిసి పనిచేసినప్పుడు multidisciplinary rehabilitation సాధ్యమవుతుంది."
    }
];