const SUBJECTS = [
    "Child Development",
    "English",
    "Special Education"
];

const QUESTIONS = [
    {
        question: "కొలత (Measurement) యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        options: [
            "విద్యార్థి ప్రవర్తనను వివరించడం",
            "విద్యార్థి లక్షణాలకు సంఖ్యాత్మక విలువ కేటాయించడం",
            "విద్యార్థికి గ్రేడ్ ఇవ్వడం",
            "విద్యార్థి పురోగతిపై నిర్ణయం తీసుకోవడం"
        ],
        correct: 1,
        explanation:
            "కొలత అనేది విద్యార్థి లక్షణాలు, సామర్థ్యాలు లేదా ప్రదర్శనను సంఖ్యాత్మక విలువలుగా వ్యక్తీకరించే ప్రక్రియ. ఇది కేవలం డేటాను అందిస్తుంది. నిర్ణయాలు లేదా విలువ నిర్ధారణ తర్వాత జరిగే మదింపు మరియు మూల్యాంకనంలో భాగంగా ఉంటాయి."
    },
    {
        question: 'క్రింది వాటిలో "మదింపు (Assessment)"కు సరైన వివరణ ఏది?',
        options: [
            "పరీక్షలో వచ్చిన మార్కులను మాత్రమే నమోదు చేయడం",
            "అభ్యాసానికి సంబంధించిన సమాచారాన్ని సేకరించి విశ్లేషించడం",
            "విద్యార్థికి గ్రేడ్ ఇవ్వడం",
            "ఉత్తీర్ణత నిర్ణయించడం"
        ],
        correct: 1,
        explanation:
            "మదింపు అనేది విద్యార్థి అభ్యాసానికి సంబంధించిన సమాచారాన్ని సేకరించి, విశ్లేషించి, అభ్యాస పురోగతిని అర్థం చేసుకునే ప్రక్రియ. దీని ద్వారా బలాలు, బలహీనతలు గుర్తించి బోధనను మెరుగుపరచడానికి అవసరమైన సమాచారం లభిస్తుంది."
    },
    {
        question: "మూల్యాంకనం (Evaluation) ప్రధానంగా దేనికి సంబంధించినది?",
        options: [
            "సంఖ్యాత్మక కొలత",
            "విలువ నిర్ణయం",
            "ప్రశ్నపత్రం తయారీ",
            "హాజరు నమోదు"
        ],
        correct: 1,
        explanation:
            "మూల్యాంకనం అనేది కొలత మరియు మదింపు ద్వారా సేకరించిన సమాచారాన్ని ఆధారంగా చేసుకొని విద్యార్థి అభ్యాసంపై విలువ నిర్ణయం తీసుకునే ప్రక్రియ. ఇది విద్యా లక్ష్యాల సాధన స్థాయిని నిర్ధారిస్తుంది."
    },
    {
        question: "క్రింది వాటిలో సరైన క్రమాన్ని గుర్తించండి.",
        options: [
            "మూల్యాంకనం → కొలత → మదింపు",
            "మదింపు → మూల్యాంకనం → కొలత",
            "కొలత → మదింపు → మూల్యాంకనం",
            "మదింపు → కొలత → మూల్యాంకనం"
        ],
        correct: 2,
        explanation:
            "ముందుగా కొలత ద్వారా సంఖ్యాత్మక సమాచారం సేకరిస్తారు. ఆ తర్వాత మదింపు ద్వారా దానిని విశ్లేషిస్తారు. చివరగా మూల్యాంకనం ద్వారా విలువ నిర్ణయం తీసుకుంటారు. ఈ క్రమమే విద్యా మూల్యాంకన ప్రక్రియలో సరైనది."
    },
    {
        question:
            "విద్యార్థి నేర్చుకునే సమయంలో అతని బలాలు, బలహీనతలను గుర్తించడానికి ఉపయోగించే మదింపు ఏది?",
        options: [
            "సమ్మేటివ్ మదింపు",
            "ఫార్మేటివ్ మదింపు",
            "వార్షిక పరీక్ష",
            "బోర్డు పరీక్ష"
        ],
        correct: 1,
        explanation:
            "ఫార్మేటివ్ మదింపు బోధన జరుగుతున్న సమయంలో నిర్వహించబడుతుంది. ఇది విద్యార్థుల బలాలు, బలహీనతలు గుర్తించి వెంటనే బోధనలో మార్పులు చేయడానికి ఉపాధ్యాయులకు ఉపయోగపడుతుంది."
    },
    {
        question: "సమ్మేటివ్ మదింపు (Summative Assessment) సాధారణంగా ఎప్పుడు నిర్వహించబడుతుంది?",
        options: [
            "ప్రతి పాఠం అనంతరం",
            "ప్రతి కార్యకలాపం తర్వాత",
            "బోధన పూర్తయిన తర్వాత",
            "పాఠం ప్రారంభానికి ముందు"
        ],
        correct: 2,
        explanation:
            "సమ్మేటివ్ మదింపు యూనిట్, టర్మ్ లేదా కోర్సు పూర్తయిన తర్వాత నిర్వహించబడుతుంది. దీని ఉద్దేశ్యం విద్యార్థి మొత్తం అభ్యాస ఫలితాన్ని అంచనా వేసి గ్రేడ్ లేదా ఫలితాన్ని నిర్ణయించడం."
    },
    {
        question: "క్రింది వాటిలో ఫార్మేటివ్ మదింపుకు ఉదాహరణ ఏది?",
        options: [
            "వార్షిక పరీక్ష",
            "యూనిట్ టెస్ట్",
            "తరగతి గది పరిశీలన",
            "బోర్డు పరీక్ష"
        ],
        correct: 2,
        explanation:
            "తరగతి గది పరిశీలన ద్వారా ఉపాధ్యాయుడు విద్యార్థి అభ్యాసాన్ని నిరంతరం గమనిస్తాడు. ఈ సమాచారం ఆధారంగా బోధనలో అవసరమైన మార్పులు చేస్తాడు. అందువల్ల ఇది ఫార్మేటివ్ మదింపుకు ఉదాహరణ."
    },
    {
        question: "నిరంతర సమగ్ర మూల్యాంకనం (CCE) యొక్క ప్రధాన లక్ష్యం ఏమిటి?",
        options: [
            "పరీక్షల సంఖ్య పెంచడం",
            "కేవలం మార్కులు ఇవ్వడం",
            "విద్యార్థి సమగ్ర అభివృద్ధిని అంచనా వేయడం",
            "ఉత్తీర్ణత శాతం పెంచడం"
        ],
        correct: 2,
        explanation:
            "CCE యొక్క ముఖ్య ఉద్దేశ్యం విద్యార్థి విద్యా, సామాజిక, భావోద్వేగ, సహపాఠ్య అభివృద్ధిని సమగ్రంగా అంచనా వేయడం. ఇది కేవలం మార్కులపై కాకుండా సంపూర్ణ వ్యక్తిత్వ వికాసంపై దృష్టి పెడుతుంది."
    },
    {
        question:
            "క్రింది ప్రకటనలను పరిశీలించండి.\n\na. కొలత సంఖ్యాత్మక ఫలితాలను ఇస్తుంది.\n\nb. మూల్యాంకనం విలువ నిర్ణయంతో సంబంధం కలిగి ఉంటుంది.\n\nసరైన సమాధానం ఏది?",
        options: [
            "a మాత్రమే",
            "b మాత్రమే",
            "a మరియు b రెండూ సరైనవి",
            "రెండూ తప్పు"
        ],
        correct: 2,
        explanation:
            "కొలత సంఖ్యాత్మక డేటాను అందిస్తుంది. మూల్యాంకనం ఆ సమాచారాన్ని ప్రమాణాలతో పోల్చి విలువ నిర్ణయం తీసుకుంటుంది. కాబట్టి ఇచ్చిన రెండు ప్రకటనలూ సరైనవే."
    },
    {
        question:
            "విద్యార్థి పురోగతిని నిరంతరం గమనిస్తూ అభ్యాసాన్ని మెరుగుపరచడానికి ఉపయోగపడేది",
        options: [
            "సమ్మేటివ్ మదింపు",
            "ఫార్మేటివ్ మదింపు",
            "ఎంపిక పరీక్ష",
            "ప్రవేశ పరీక్ష"
        ],
        correct: 1,
        explanation:
            "ఫార్మేటివ్ మదింపు నిరంతర ప్రక్రియ. ఇది విద్యార్థి అభ్యాస పురోగతిని గమనించి అవసరమైన సూచనలు, అభిప్రాయాలు అందిస్తుంది. తద్వారా అభ్యాస నాణ్యతను మెరుగుపరచడం సాధ్యమవుతుంది."
    },
    {
        question: 'CCEలో "Comprehensive" అనే పదం సూచించేది',
        options: [
            "కేవలం విద్యా ఫలితాలు",
            "కేవలం పరీక్షా మార్కులు",
            "విద్యార్థి సమగ్ర అభివృద్ధి",
            "కేవలం హాజరు"
        ],
        correct: 2,
        explanation:
            "CCEలో Comprehensive అంటే విద్యార్థి జ్ఞానాత్మక, భావాత్మక, మానసిక-చలనాత్మక, సహపాఠ్య మరియు వ్యక్తిత్వ అభివృద్ధి వంటి అన్ని అంశాలను సమగ్రంగా పరిగణించడం అని అర్థం."
    },
    {
        question:
            "ఉపాధ్యాయుడు ప్రతి వారమూ చిన్న చిన్న కార్యకలాపాల ద్వారా విద్యార్థి అభ్యాసాన్ని పరిశీలిస్తున్నాడు. ఇది",
        options: [
            "సమ్మేటివ్ మదింపు",
            "ఫార్మేటివ్ మదింపు",
            "ప్రజ్ఞా పరీక్ష",
            "వార్షిక మూల్యాంకనం"
        ],
        correct: 1,
        explanation:
            "చిన్న చిన్న కార్యకలాపాలు, పరిశీలనలు, తరగతి చర్చలు వంటి నిరంతర ప్రక్రియల ద్వారా అభ్యాసాన్ని అంచనా వేయడం ఫార్మేటివ్ మదింపు. ఇది బోధనను నిరంతరం మెరుగుపరచడానికి ఉపయోగపడుతుంది."
    },
    {
        question: "క్రింది వాటిలో మూల్యాంకనం (Evaluation) లక్షణం ఏది?",
        options: [
            "సంఖ్యాత్మక విలువ మాత్రమే",
            "సమాచార సేకరణ మాత్రమే",
            "నిర్ణయం తీసుకోవడం",
            "పరీక్ష నిర్వహించడం"
        ],
        correct: 2,
        explanation:
            "మూల్యాంకనం ద్వారా సేకరించిన సమాచారాన్ని విశ్లేషించి విద్యార్థి పనితీరుపై విలువ నిర్ణయం తీసుకుంటారు. ఇది కేవలం పరీక్ష నిర్వహించడం లేదా సంఖ్యలు ఇవ్వడం మాత్రమే కాదు."
    },
    {
        question:
            "విద్యార్థి ప్రదర్శనను ప్రమాణాలతో పోల్చి నిర్ణయం తీసుకోవడం ఏ ప్రక్రియలో భాగం?",
        options: [
            "కొలత",
            "మదింపు",
            "మూల్యాంకనం",
            "పరీక్ష"
        ],
        correct: 2,
        explanation:
            "మూల్యాంకనం సమయంలో విద్యార్థి ప్రదర్శనను నిర్ణయించిన ప్రమాణాలతో పోల్చి విలువ నిర్ణయం తీసుకుంటారు. అందువల్ల ఇది Evaluation యొక్క ప్రధాన లక్షణంగా పరిగణించబడుతుంది."
    },
    {
        question: "క్రింది వాటిలో కొలత (Measurement) యొక్క ఫలితం ఏది?",
        options: [
            "గ్రేడ్",
            "నిర్ణయం",
            "సంఖ్యాత్మక స్కోరు",
            "వ్యాఖ్య"
        ],
        correct: 2,
        explanation:
            "కొలత ఫలితంగా సంఖ్యాత్మక స్కోరు లేదా మార్కు లభిస్తుంది. ఈ సంఖ్యలను తర్వాత మదింపు, మూల్యాంకన ప్రక్రియల్లో ఉపయోగించి విద్యార్థి అభ్యాస స్థాయిని నిర్ణయిస్తారు."
    },
    {
        question:
            "ఒక ఉపాధ్యాయుడు విద్యార్థుల అభ్యాసంలో లోపాలను గుర్తించి వెంటనే బోధనలో మార్పులు చేశాడు. ఇది",
        options: [
            "సమ్మేటివ్ మదింపు ఉద్దేశ్యం",
            "ఫార్మేటివ్ మదింపు ఉద్దేశ్యం",
            "ప్రవేశ పరీక్ష ఉద్దేశ్యం",
            "వార్షిక పరీక్ష ఉద్దేశ్యం"
        ],
        correct: 1,
        explanation:
            "ఫార్మేటివ్ మదింపు ద్వారా విద్యార్థుల లోపాలను వెంటనే గుర్తించి బోధనా పద్ధతులను సవరించవచ్చు. ఈ ప్రక్రియ అభ్యాస నాణ్యతను మెరుగుపరచడంలో అత్యంత ప్రభావవంతంగా ఉంటుంది."
    },
    {
        question:
            "క్రింది వాటిలో Continuous and Comprehensive Evaluation (CCE) యొక్క ముఖ్య లక్షణం ఏది?",
        options: [
            "సంవత్సరాంత పరీక్ష మాత్రమే",
            "ఒకే పరీక్ష ఆధారంగా నిర్ణయం",
            "నిరంతర మరియు సమగ్ర మదింపు",
            "కేవలం రాత పరీక్షలు"
        ],
        correct: 2,
        explanation:
            "CCEలో విద్యార్థిని ఒకే పరీక్షతో కాకుండా నిరంతర పరిశీలన, వివిధ అభ్యాస కార్యకలాపాలు మరియు సమగ్ర మూల్యాంకనం ద్వారా అన్ని అభివృద్ధి అంశాలలో అంచనా వేస్తారు."
    },
    {
        question: "క్రింది వాటిలో సమ్మేటివ్ మదింపు (Summative Assessment) యొక్క ప్రధాన ఉద్దేశ్యం ఏది?",
        options: [
            "బోధనలో వెంటనే మార్పులు చేయడం",
            "అభ్యాస ప్రక్రియను నిరంతరం పరిశీలించడం",
            "అభ్యాసం ముగిసిన తర్వాత సాధించిన ఫలితాన్ని నిర్ణయించడం",
            "విద్యార్థి ఆసక్తులను గుర్తించడం"
        ],
        correct: 2,
        explanation: "సమ్మేటివ్ మదింపు బోధన లేదా కోర్సు పూర్తయిన తర్వాత నిర్వహించబడుతుంది. దీని ప్రధాన ఉద్దేశ్యం విద్యార్థి సాధించిన మొత్తం అభ్యాస ఫలితాన్ని అంచనా వేసి గ్రేడ్, మార్కులు లేదా తుది నిర్ణయం ఇవ్వడం."
    },
    {
        question: "క్రింది వాటిలో కొలత (Measurement), మదింపు (Assessment), మూల్యాంకనం (Evaluation) మధ్య సరైన సంబంధం ఏది?",
        options: [
            "కొలత → మూల్యాంకనం → మదింపు",
            "మదింపు → కొలత → మూల్యాంకనం",
            "కొలత → మదింపు → మూల్యాంకనం",
            "మూల్యాంకనం → కొలత → మదింపు"
        ],
        correct: 2,
        explanation: "ముందుగా కొలత ద్వారా సంఖ్యాత్మక సమాచారం సేకరిస్తారు. తరువాత మదింపు ద్వారా ఆ సమాచారాన్ని విశ్లేషిస్తారు. చివరగా మూల్యాంకనం ద్వారా విలువ నిర్ణయం తీసుకుని విద్యార్థి అభ్యాస స్థాయిని నిర్ధారిస్తారు."
    },
    {
        question: "ఒక ఉపాధ్యాయుడు విద్యార్థుల ప్రాజెక్టులు, తరగతి కార్యకలాపాలు, మౌఖిక సమాధానాలు మరియు పరీక్ష ఫలితాలను కలిపి అభ్యాసాన్ని అంచనా వేస్తున్నాడు. ఇది CCEలో ఏ లక్షణాన్ని సూచిస్తుంది?",
        options: [
            "నిరంతరత",
            "సమగ్రత",
            "ప్రమాణీకరణ",
            "వర్గీకరణ"
        ],
        correct: 1,
        explanation: "CCEలో సమగ్రత అంటే విద్యార్థి అభివృద్ధిని కేవలం పరీక్షలతో కాకుండా ప్రాజెక్టులు, మౌఖిక సమాధానాలు, తరగతి కార్యకలాపాలు మరియు ఇతర అంశాలను కలిపి సమగ్రంగా అంచనా వేయడం."
    },
    {
        question: "Choose the correct passive voice.\n\nThe teacher explained the lesson.",
        options: [
            "The lesson explains by the teacher.",
            "The lesson was explained by the teacher.",
            "The lesson is explained by the teacher.",
            "The lesson had explained by the teacher."
        ],
        correct: 1,
        explanation: "The active sentence is in the simple past tense. Its passive form uses 'was/were + past participle'. Therefore, 'The lesson was explained by the teacher' is the grammatically correct transformation."
    },
    {
        question: "Choose the correct active voice.\n\nThe prize was won by Raju.",
        options: [
            "Raju wins the prize.",
            "Raju won the prize.",
            "Raju has won the prize.",
            "Raju was winning the prize."
        ],
        correct: 1,
        explanation: "The passive sentence uses 'was won', which is the simple past tense. Therefore, the correct active voice is 'Raju won the prize', preserving both meaning and tense."
    },
    {
        question: "Change into indirect speech.\n\nRavi said, \"I am busy.\"",
        options: [
            "Ravi said that I am busy.",
            "Ravi said that he was busy.",
            "Ravi said he is busy.",
            "Ravi told that he was busy."
        ],
        correct: 1,
        explanation: "In indirect speech, the pronoun 'I' changes to 'he' and the present tense 'am' changes to the past tense 'was'. Hence, 'Ravi said that he was busy' is correct."
    },
    {
        question: "Choose the correct indirect speech.\n\nThe teacher said to the students, \"Work hard.\"",
        options: [
            "The teacher said that the students worked hard.",
            "The teacher advised the students to work hard.",
            "The teacher told the students work hard.",
            "The teacher asked the students worked hard."
        ],
        correct: 1,
        explanation: "Imperative sentences in indirect speech are reported using verbs such as advised, ordered, or requested followed by 'to + verb'. Therefore, 'advised the students to work hard' is correct."
    },
    {
        question: "Choose the correct passive form.\n\nThey are cleaning the classroom.",
        options: [
            "The classroom is cleaned.",
            "The classroom is being cleaned.",
            "The classroom was being cleaned.",
            "The classroom has been cleaned."
        ],
        correct: 1,
        explanation: "The sentence is in the present continuous tense. The passive voice follows the pattern 'is/are being + past participle'. Therefore, 'The classroom is being cleaned' is the correct answer."
    },
    {
        question: "Choose the correct active voice.\n\nThe letter was written by Sita.",
        options: [
            "Sita writes the letter.",
            "Sita wrote the letter.",
            "Sita has written the letter.",
            "Sita is writing the letter."
        ],
        correct: 1,
        explanation: "The passive sentence uses 'was written', indicating the simple past tense. Therefore, the correct active voice is 'Sita wrote the letter', maintaining the original tense and meaning."
    },
    {
        question: "Choose the correct indirect speech.\n\nShe said, \"I have finished my work.\"",
        options: [
            "She said that she had finished her work.",
            "She said she has finished her work.",
            "She said that I had finished my work.",
            "She told that she had finished her work."
        ],
        correct: 0,
        explanation: "In reported speech, the present perfect tense changes to the past perfect tense. The pronoun 'I' changes to 'she'. Therefore, 'She said that she had finished her work' is correct."
    },
    {
        question: "Choose the correct passive voice.\n\nThe students will complete the project.",
        options: [
            "The project will complete.",
            "The project will be completed by the students.",
            "The project is completed.",
            "The project has been completed."
        ],
        correct: 1,
        explanation: "The future tense passive voice follows the structure 'will be + past participle'. Hence, 'The project will be completed by the students' is the correct passive transformation."
    },
    {
        question: "Choose the correct indirect speech.\n\nFather said, \"Do not waste time.\"",
        options: [
            "Father advised me not to waste time.",
            "Father said not waste time.",
            "Father told that do not waste time.",
            "Father ordered me don't waste time."
        ],
        correct: 0,
        explanation: "Negative imperative sentences are reported using 'advised/ordered + object + not to + verb'. Therefore, 'Father advised me not to waste time' correctly changes the sentence into indirect speech."
    },
    {
        question: "Choose the correct active voice.\n\nThe match was watched by thousands of people.",
        options: [
            "Thousands of people watch the match.",
            "Thousands of people watched the match.",
            "Thousands of people have watched the match.",
            "Thousands of people were watching the match."
        ],
        correct: 1,
        explanation: "The passive sentence is in the simple past tense using 'was watched'. Therefore, the active form should also be in the simple past: 'Thousands of people watched the match.'"
    },
    {
        question: "Choose the correct passive voice.\n\nSomeone has stolen my bicycle.",
        options: [
            "My bicycle has been stolen.",
            "My bicycle was stolen.",
            "My bicycle had stolen.",
            "My bicycle is stolen."
        ],
        correct: 0,
        explanation: "The active sentence is in the present perfect tense. The passive form uses 'has/have been + past participle'. Therefore, 'My bicycle has been stolen' is the correct answer."
    },
    {
        question: "Choose the correct indirect speech.\n\nThe boy said, \"We are playing cricket.\"",
        options: [
            "The boy said that they were playing cricket.",
            "The boy said that we were playing cricket.",
            "The boy said that they are playing cricket.",
            "The boy told they were playing cricket."
        ],
        correct: 0,
        explanation: "In indirect speech, the present continuous tense changes to the past continuous tense. The pronoun 'we' changes according to context. Thus, 'they were playing cricket' is the correct form."
    },
    {
        question: "Choose the correct passive voice.\n\nPeople speak English all over the world.",
        options: [
            "English spoke all over the world.",
            "English is spoken all over the world.",
            "English was spoken all over the world.",
            "English has spoken all over the world."
        ],
        correct: 1,
        explanation: "The sentence is in the simple present tense. The passive voice uses 'is/am/are + past participle'. Hence, 'English is spoken all over the world' is the correct passive sentence."
    },
    {
        question: "Choose the correct indirect speech.\n\nThe teacher said, \"The Earth revolves around the Sun.\"",
        options: [
            "The teacher said that the Earth revolved around the Sun.",
            "The teacher said that the Earth revolves around the Sun.",
            "The teacher said that Earth had revolved around the Sun.",
            "The teacher told that the Earth revolves around the Sun."
        ],
        correct: 1,
        explanation: "Universal truths do not undergo tense changes in indirect speech. Since the Earth always revolves around the Sun, the present tense remains unchanged in the reported statement."
    },
    {
        question: "అధిక మేధస్సు (Gifted) గల విద్యార్థుల ప్రధాన లక్షణం ఏది?",
        options: [
            "నేర్చుకోవడానికి ఎక్కువ సమయం తీసుకోవడం",
            "సగటు స్థాయి కంటే వేగంగా నేర్చుకోవడం",
            "తరచుగా పాఠశాలకు గైర్హాజరు కావడం",
            "అన్ని విషయాల్లో తక్కువ ప్రతిభ చూపడం"
        ],
        correct: 1,
        explanation: "ప్రతిభావంతులైన విద్యార్థులు సాధారణంగా సగటు విద్యార్థుల కంటే వేగంగా నేర్చుకుంటారు. వారు ఉన్నత స్థాయి ఆలోచన, సమస్య పరిష్కార నైపుణ్యం, సృజనాత్మకత మరియు స్వతంత్ర అభ్యాస సామర్థ్యాన్ని ప్రదర్శిస్తారు."
    },
    {
        question: "క్రింది వాటిలో ప్రతిభావంతులైన విద్యార్థులకు అనుకూలమైన బోధనా విధానం ఏది?",
        options: [
            "ఒకే పాఠాన్ని పదే పదే బోధించడం",
            "పాఠ్యాంశాన్ని సరళీకరించడం",
            "విస్తరణ (Enrichment) కార్యక్రమాలు నిర్వహించడం",
            "తరచుగా శిక్షించడం"
        ],
        correct: 2,
        explanation: "Enrichment కార్యక్రమాలు ప్రతిభావంతులైన విద్యార్థులకు సవాలుతో కూడిన అదనపు అభ్యాస అవకాశాలను కల్పిస్తాయి. ఇవి వారి సృజనాత్మకత, పరిశోధన ఆసక్తి మరియు ఉన్నత స్థాయి ఆలోచనా నైపుణ్యాలను అభివృద్ధి చేస్తాయి."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి.\n\na. ప్రతిభావంతులైన విద్యార్థులు సృజనాత్మకతను ప్రదర్శిస్తారు.\n\nb. వారు క్లిష్ట సమస్యలను త్వరగా పరిష్కరించగలరు.\n\nసరైన సమాధానం ఏది?",
        options: [
            "a మాత్రమే",
            "b మాత్రమే",
            "a మరియు b రెండూ సరైనవి",
            "రెండూ తప్పు"
        ],
        correct: 2,
        explanation: "ప్రతిభావంతులైన విద్యార్థుల ముఖ్య లక్షణాలలో సృజనాత్మకత, విమర్శనాత్మక ఆలోచన మరియు క్లిష్ట సమస్యలను త్వరగా పరిష్కరించే సామర్థ్యం ఉన్నాయి. కాబట్టి ఇచ్చిన రెండు ప్రకటనలూ సరైనవే."
    },
    {
        question: "నెమ్మదిగా నేర్చుకునే (Slow Learner) విద్యార్థి గురించి సరైన ప్రకటన ఏది?",
        options: [
            "అతనికి మేధో వైకల్యం తప్పనిసరిగా ఉంటుంది.",
            "అతను సాధారణ విద్యా వాతావరణంలో నేర్చుకోలేడు.",
            "అతనికి ఎక్కువ సమయం మరియు తగిన బోధనా సహాయం అవసరం.",
            "అతనికి ప్రత్యేక పాఠశాల మాత్రమే అవసరం."
        ],
        correct: 2,
        explanation: "Slow Learner తప్పనిసరిగా మేధో వైకల్యం కలిగి ఉండాల్సిన అవసరం లేదు. తగిన సమయం, పునరావృత బోధన, వ్యక్తిగత మార్గదర్శకత్వం మరియు సహాయక వ్యూహాలతో విజయవంతంగా అభ్యసించగలడు."
    },
    {
        question: "నెమ్మదిగా నేర్చుకునే విద్యార్థికి ఉపాధ్యాయుడు ముందుగా చేయవలసినది ఏది?",
        options: [
            "కఠినమైన హోంవర్క్ ఇవ్వడం",
            "తరగతి నుండి వేరు చేయడం",
            "అభ్యాస అవసరాలను గుర్తించడం",
            "వార్షిక పరీక్ష నిర్వహించడం"
        ],
        correct: 2,
        explanation: "సమర్థవంతమైన బోధన ప్రారంభానికి ముందు విద్యార్థి అభ్యాస అవసరాలు, బలాలు మరియు బలహీనతలను గుర్తించడం అవసరం. దాని ఆధారంగా తగిన బోధనా వ్యూహాలను రూపొందించవచ్చు."
    },
    {
        question: "క్రింది వాటిలో Slow Learner కోసం సరైన తరగతి గది వ్యూహం ఏది?",
        options: [
            "వేగంగా పాఠాలు ముగించడం",
            "చిన్న చిన్న దశలుగా బోధించడం",
            "తరచుగా శిక్షించడం",
            "కేవలం స్వీయ అభ్యాసం ఇవ్వడం"
        ],
        correct: 1,
        explanation: "చిన్న చిన్న దశలుగా బోధించడం, తరచూ పునరావృతం చేయడం మరియు స్పష్టమైన ఉదాహరణలు ఇవ్వడం ద్వారా Slow Learners సులభంగా అర్థం చేసుకొని అభ్యాసంలో పురోగతి సాధిస్తారు."
    },
    {
        question: "సమగ్ర విద్య (Inclusive Education)లో Classroom Adaptation యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        options: [
            "పాఠ్యాంశాన్ని పూర్తిగా తొలగించడం",
            "విద్యార్థి అవసరాలకు అనుగుణంగా బోధనను సవరించడం",
            "విద్యార్థులను వేరు చేయడం",
            "పరీక్షలను రద్దు చేయడం"
        ],
        correct: 1,
        explanation: "Classroom Adaptation ద్వారా విద్యార్థుల వ్యక్తిగత అవసరాలు, సామర్థ్యాలు మరియు అభ్యాస శైలులకు అనుగుణంగా బోధనా పద్ధతులు, వాతావరణం మరియు బోధనా సామగ్రిని సవరిస్తారు."
    },
    {
        question: "క్రింది వాటిలో Classroom Adaptation కు ఉదాహరణ ఏది?",
        options: [
            "అందరికీ ఒకే విధమైన పరీక్ష",
            "విద్యార్థిని వెనుక బెంచ్‌లో కూర్చోబెట్టడం",
            "పెద్ద అక్షరాలతో ముద్రించిన పాఠ్య సామగ్రి అందించడం",
            "అదనపు పనులు మాత్రమే ఇవ్వడం"
        ],
        correct: 2,
        explanation: "విద్యార్థి అవసరాలను దృష్టిలో ఉంచుకొని పెద్ద అక్షరాలతో పాఠ్య సామగ్రి అందించడం ఒక Classroom Adaptation. ఇది అభ్యాసాన్ని సులభతరం చేసి అందరికీ సమాన అవకాశాలు కల్పిస్తుంది."
    },
    {
        question: "ఒక విద్యార్థికి రాయడంలో ఇబ్బంది ఉంది. ఉపాధ్యాయుడు మౌఖిక సమాధానానికి అవకాశం ఇవ్వడం ఏది?",
        options: [
            "Acceleration",
            "Classroom Adaptation",
            "Segregation",
            "Labelling"
        ],
        correct: 1,
        explanation: "రాయడంలో ఇబ్బంది ఉన్న విద్యార్థికి మౌఖిక సమాధానాల అవకాశం ఇవ్వడం Classroom Adaptation. ఇది విద్యార్థి నిజమైన జ్ఞానాన్ని వ్యక్తపరచడానికి ప్రత్యామ్నాయ మార్గాన్ని అందిస్తుంది."
    },
    {
        question: "క్రింది వాటిలో ప్రతిభావంతులైన విద్యార్థుల కోసం ఉపయోగించే కార్యక్రమం ఏది?",
        options: [
            "Remedial Teaching",
            "Enrichment Programme",
            "Drill Method మాత్రమే",
            "Behaviour Contract"
        ],
        correct: 1,
        explanation: "Enrichment Programme ప్రతిభావంతులైన విద్యార్థులకు అదనపు సవాళ్లు, సృజనాత్మక కార్యక్రమాలు మరియు ఉన్నత స్థాయి అభ్యాస అవకాశాలను అందించి వారి సామర్థ్యాలను మరింత అభివృద్ధి చేస్తుంది."
    },
    {
        question: "తరగతి గదిలో నెమ్మదిగా నేర్చుకునే విద్యార్థికి ఉపాధ్యాయుడు ఏది చేయాలి?",
        options: [
            "ఇతర విద్యార్థులతో పోల్చడం",
            "సానుకూల ప్రోత్సాహం ఇవ్వడం",
            "తప్పులను ఎత్తిచూపడం",
            "తరగతి నుండి బయటకు పంపడం"
        ],
        correct: 1,
        explanation: "సానుకూల ప్రోత్సాహం విద్యార్థిలో ఆత్మవిశ్వాసాన్ని పెంచుతుంది. ఇది అభ్యాసంపై ఆసక్తిని పెంచి, నిరంతర ప్రయత్నానికి ప్రేరణనిస్తుంది మరియు విద్యా పురోగతికి సహాయపడుతుంది."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి.\n\na. Classroom Adaptation బోధనను సులభతరం చేస్తుంది.\n\nb. ఇది విద్యార్థుల వ్యక్తిగత అవసరాలను పరిగణనలోకి తీసుకుంటుంది.\n\nసరైన సమాధానం ఏది?",
        options: [
            "a మాత్రమే",
            "b మాత్రమే",
            "a మరియు b రెండూ సరైనవి",
            "రెండూ తప్పు"
        ],
        correct: 2,
        explanation: "Classroom Adaptation విద్యార్థుల వ్యక్తిగత అవసరాలు, అభ్యాస శైలులు మరియు సామర్థ్యాలను పరిగణనలోకి తీసుకొని బోధనను సులభతరం చేస్తుంది. అందువల్ల రెండు ప్రకటనలూ సరైనవే."
    },
    {
        question: "ప్రతిభావంతులైన విద్యార్థుల బోధనలో Acceleration అంటే ఏమిటి?",
        options: [
            "పాఠ్యాంశాన్ని సరళీకరించడం",
            "సాధారణ వేగం కంటే వేగంగా విద్యా పురోగతి కల్పించడం",
            "తరగతిని పునరావృతం చేయించడం",
            "అదనపు పరీక్షలు నిర్వహించడం"
        ],
        correct: 1,
        explanation: "Acceleration అనేది ప్రతిభావంతులైన విద్యార్థులకు వారి సామర్థ్యానికి అనుగుణంగా వేగవంతమైన విద్యా పురోగతి కల్పించే విధానం. ఇది వారి అభ్యాస సామర్థ్యాన్ని పూర్తిగా ఉపయోగించుకునే అవకాశం ఇస్తుంది."
    },
    {
        question: "Slow Learner కోసం అత్యంత అనుకూలమైన బోధనా విధానం ఏది?",
        options: [
            "Lecture Method మాత్రమే",
            "Activity-based Teaching",
            "Memorization మాత్రమే",
            "Surprise Tests మాత్రమే"
        ],
        correct: 1,
        explanation: "Activity-based Teaching ద్వారా విద్యార్థులు ప్రత్యక్ష అనుభవాల ద్వారా నేర్చుకుంటారు. ఇది Slow Learners కు భావాలను సులభంగా అర్థం చేసుకోవడంలో మరియు దీర్ఘకాలిక అభ్యాసాన్ని పెంపొందించడంలో సహాయపడుతుంది."
    },
    {
        question: "సమగ్ర తరగతి గదిలో ఉపాధ్యాయుడు బోధనా సామగ్రిని విద్యార్థుల అవసరాలకు అనుగుణంగా మార్చడం ఏ సూత్రాన్ని ప్రతిబింబిస్తుంది?",
        options: [
            "Classroom Adaptation",
            "Standardisation",
            "Segregation",
            "Streaming"
        ],
        correct: 0,
        explanation: "బోధనా సామగ్రి, బోధనా పద్ధతులు లేదా అభ్యాస వనరులను విద్యార్థుల అవసరాలకు అనుగుణంగా మార్చడం Classroom Adaptation యొక్క ముఖ్యమైన సూత్రాన్ని ప్రతిబింబిస్తుంది."
    },
    {
        question: "ఒక ప్రతిభావంతుడైన విద్యార్థి సాధారణ పాఠ్యాంశాన్ని చాలా త్వరగా పూర్తి చేస్తున్నాడు. ఉపాధ్యాయుడు అనుసరించవలసిన ఉత్తమ వ్యూహం ఏది?",
        options: [
            "అదే పనిని మళ్లీ చేయించడం",
            "అదనపు సవాలుతో కూడిన అభ్యాస కార్యక్రమాలు ఇవ్వడం",
            "తరగతి నుండి బయటకు పంపించడం",
            "పాఠ్యాంశాన్ని తగ్గించడం"
        ],
        correct: 1,
        explanation: "ప్రతిభావంతులైన విద్యార్థులు త్వరగా అభ్యాసాన్ని పూర్తి చేసినప్పుడు వారికి Enrichment కార్యక్రమాలు, పరిశోధన పనులు లేదా సవాలుతో కూడిన కార్యకలాపాలు ఇవ్వడం వారి సామర్థ్యాన్ని మరింత అభివృద్ధి చేస్తుంది."
    }
];