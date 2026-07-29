const SUBJECTS = [
    "English"
];

const QUESTIONS = [
    {
        question: "Choose the correct verb.\n\nEach of the students ______ a notebook.",
        options: ["have", "are having", "has", "were having"],
        correct: 2,
        explanation: "The subject 'Each' is singular, so it always takes a singular verb. Therefore, 'has' is the correct choice, even though 'students' is plural in the prepositional phrase."
    },
    {
        question: "Choose the correct article.\n\nRavi is ______ honest man.",
        options: ["a", "an", "the", "no article"],
        correct: 1,
        explanation: "The word 'honest' begins with a silent 'h' and is pronounced with a vowel sound. Therefore, the correct article before it is 'an'."
    },
    {
        question: "Choose the correct preposition.\n\nThe train arrived ______ the station on time.",
        options: ["in", "at", "into", "over"],
        correct: 1,
        explanation: "The preposition 'at' is used to indicate a specific place or location such as a station, bus stop, or airport."
    },
    {
        question: "Choose the correctly punctuated sentence.",
        options: [
            "Yes I will help you.",
            "Yes, I will help you.",
            "Yes I, will help you.",
            "Yes; I will help you."
        ],
        correct: 1,
        explanation: "Introductory words like 'Yes' are followed by a comma. This punctuation makes the sentence grammatically correct and easier to read."
    },
    {
        question: "Choose the correctly spelt word.",
        options: [
            "Accomodation",
            "Accommadation",
            "Accommodation",
            "Acommodation"
        ],
        correct: 2,
        explanation: "The correct spelling is 'Accommodation'. It contains double 'c' and double 'm', which are commonly confused in English spelling."
    },
    {
        question: "Change the sentence into Passive Voice.\n\nThe teacher praised the boy.",
        options: [
            "The boy praised the teacher.",
            "The boy was praised by the teacher.",
            "The teacher was praised by the boy.",
            "The boy is praised by the teacher."
        ],
        correct: 1,
        explanation: "In the passive voice of a simple past sentence, we use 'was' or 'were' followed by the past participle. Hence, 'The boy was praised by the teacher' is correct."
    },
    {
        question: "Choose the correct indirect speech.\n\nRani said, \"I am reading a novel.\"",
        options: [
            "Rani said that she was reading a novel.",
            "Rani said that I was reading a novel.",
            "Rani said that she is reading a novel.",
            "Rani says that she was reading a novel."
        ],
        correct: 0,
        explanation: "When reporting a past statement, the present continuous tense changes to past continuous. The pronoun 'I' also changes to 'she' in reported speech."
    },
    {
        question: "Choose the correct verb.\n\nNeither the teacher nor the students ______ present.",
        options: ["was", "is", "were", "has"],
        correct: 2,
        explanation: "With 'neither...nor', the verb agrees with the subject nearest to it. Since 'students' is plural, the correct verb is 'were'."
    },
    {
        question: "Which reading strategy helps locate a specific date quickly?",
        options: [
            "Skimming",
            "Scanning",
            "Predicting",
            "Summarising"
        ],
        correct: 1,
        explanation: "Scanning is used to locate specific information such as names, dates, numbers, or facts without reading the entire passage carefully."
    },
    {
        question: "Identify the sentence with correct Subject–Verb Agreement.",
        options: [
            "The quality of the apples are excellent.",
            "The quality of the apples have improved.",
            "The quality of the apples is excellent.",
            "The quality of the apples were excellent."
        ],
        correct: 2,
        explanation: "The subject is 'quality', which is singular. Therefore, it must take the singular verb 'is', regardless of the plural noun 'apples'."
    },
    {
        question: "Choose the correct preposition.\n\nShe is good ______ Mathematics.",
        options: ["with", "at", "in", "on"],
        correct: 1,
        explanation: "The standard English expression is 'good at' when referring to someone's skill or ability in a subject or activity."
    },
    {
        question: "Choose the correct article.\n\nHe was appointed ______ MLA last year.",
        options: ["a", "an", "the", "no article"],
        correct: 3,
        explanation: "No article is used before titles or positions when they immediately follow verbs such as appointed, elected, selected, or made."
    },
    {
        question: "Identify the sentence with correct punctuation.",
        options: [
            "If you work hard, you will succeed.",
            "If you work hard you, will succeed.",
            "If, you work hard you will succeed.",
            "If you, work hard, you will succeed."
        ],
        correct: 0,
        explanation: "When a sentence begins with a conditional clause introduced by 'if', a comma separates it from the main clause for correct punctuation."
    },
    {
        question: "Choose the correctly spelt word.",
        options: [
            "Privilege",
            "Privilage",
            "Priviledge",
            "Previlege"
        ],
        correct: 0,
        explanation: "The correct spelling is 'Privilege'. The incorrect options contain misplaced vowels or unnecessary letters that make them incorrect spellings."
    },
    {
        question: "Read the sentence and answer the question.\n\n\"The principal advised the students to read the instructions carefully before answering the questions.\"\n\nWhat is the principal purpose of the advice?",
        options: [
            "To increase the length of the examination",
            "To help students avoid unnecessary mistakes",
            "To postpone the examination",
            "To reduce the number of questions"
        ],
        correct: 1,
        explanation: "Reading instructions carefully helps students understand the requirements properly and prevents avoidable mistakes during the examination, improving their overall performance."
    },
    {
        question: "Choose the correct verb.\n\nThe news ______ surprising.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "The noun 'news' is grammatically singular, even though it ends with 's'. Therefore, it always takes a singular verb like 'is' in standard English usage."
    },
    {
        question: "Choose the correct article.\n\nShe bought ______ umbrella yesterday.",
        options: ["a", "an", "the", "no article"],
        correct: 1,
        explanation: "The word 'umbrella' begins with a vowel sound, so the indefinite article 'an' is used before it to ensure correct pronunciation."
    },
    {
        question: "Choose the correct preposition.\n\nThe children are interested ______ drawing.",
        options: ["on", "at", "in", "with"],
        correct: 2,
        explanation: "The adjective 'interested' is always followed by the preposition 'in' when referring to an activity, subject, or object of interest."
    },
    {
        question: "Choose the Passive Voice.\n\nPeople speak Telugu in Andhra Pradesh.",
        options: [
            "Telugu speaks in Andhra Pradesh.",
            "Telugu is spoken in Andhra Pradesh.",
            "Telugu was spoken in Andhra Pradesh.",
            "Andhra Pradesh speaks Telugu."
        ],
        correct: 1,
        explanation: "The passive voice of the simple present tense uses 'is/am/are' followed by the past participle. Hence, 'Telugu is spoken in Andhra Pradesh' is correct."
    },
    {
        question: "Choose the correct indirect speech.\n\nThe teacher said, \"Do your homework.\"",
        options: [
            "The teacher said that do your homework.",
            "The teacher ordered to do homework.",
            "The teacher advised the students to do their homework.",
            "The teacher said that they did homework."
        ],
        correct: 2,
        explanation: "Imperative sentences are usually reported with reporting verbs like 'advised', 'ordered', or 'requested' followed by 'to' and the base form of the verb."
    },
    {
        question: "Choose the correctly punctuated sentence.",
        options: [
            "My brother, who lives in Hyderabad, is a doctor.",
            "My brother who lives in Hyderabad is, a doctor.",
            "My brother who, lives in Hyderabad is a doctor.",
            "My brother who lives in Hyderabad, is a doctor."
        ],
        correct: 0,
        explanation: "A non-essential relative clause provides extra information and should be enclosed within commas. This makes the sentence grammatically correct and easier to understand."
    },
    {
        question: "Choose the correctly spelt word.",
        options: [
            "Embarrass",
            "Embarass",
            "Embarress",
            "Embarrass"
        ],
        correct: 0,
        explanation: "The correct spelling is 'Embarrass'. It contains double 'r' and double 's', which are often confused in incorrect spellings."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "One of the boys have completed the work.",
            "One of the boys has completed the work.",
            "One of the boys were completed the work.",
            "One of the boys are completing the work."
        ],
        correct: 1,
        explanation: "The subject is 'One', which is singular. Therefore, the singular verb 'has' must be used, not the plural verbs 'have', 'are', or 'were'."
    },
    {
        question: "Which reading strategy is most useful to get the general idea of a passage quickly?",
        options: [
            "Scanning",
            "Guessing",
            "Skimming",
            "Memorising"
        ],
        correct: 2,
        explanation: "Skimming means reading rapidly to understand the overall meaning or main idea of a passage without focusing on every detail."
    },
    {
        question: "Choose the correct article.\n\nHe is ______ European citizen.",
        options: ["a", "an", "the", "no article"],
        correct: 0,
        explanation: "Although 'European' begins with the letter 'E', it starts with the consonant sound /yuː/. Therefore, the correct article is 'a'."
    },
    {
        question: "Choose the correct preposition.\n\nThe meeting starts ______ 10 a.m.",
        options: ["on", "in", "at", "by"],
        correct: 2,
        explanation: "The preposition 'at' is used before specific clock times such as '10 a.m.', '6:30 p.m.', or 'midnight'."
    },
    {
        question: "Identify the sentence with the correct punctuation.",
        options: [
            "\"Where are you going\"? asked Ravi.",
            "\"Where are you going?\" asked Ravi.",
            "\"Where are you going?\" Asked Ravi.",
            "\"Where are you going\". asked Ravi."
        ],
        correct: 1,
        explanation: "In direct speech, the question mark is placed inside the quotation marks. The reporting clause begins with a lowercase letter unless it starts a new sentence."
    },
    {
        question: "Choose the correctly spelt word.",
        options: [
            "Separate",
            "Seperate",
            "Seperete",
            "Seperrate"
        ],
        correct: 0,
        explanation: "The correct spelling is 'Separate'. The incorrect options contain common spelling mistakes involving misplaced vowels and unnecessary letters."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "Neither of the answers are correct.",
            "Neither of the answers have been correct.",
            "Neither of the answers is correct.",
            "Neither of the answers were correct."
        ],
        correct: 2,
        explanation: "The pronoun 'Neither' is singular and therefore takes the singular verb 'is', even when followed by a plural noun like 'answers'."
    },
    {
        question: "Read the sentence.\n\n\"Before attempting the questions, Meena read the instructions carefully and underlined the important words.\"\n\nWhich reading strategy did Meena mainly use?",
        options: [
            "Predicting",
            "Careful reading for instructions",
            "Scanning for dates",
            "Guessing meanings"
        ],
        correct: 1,
        explanation: "Meena carefully read the instructions and identified important words before answering. This reflects careful reading to understand directions and avoid unnecessary mistakes."
    },
    {
        question: "Choose the correct verb.\n\nEveryone in the class ______ ready.",
        options: ["are", "have", "is", "were"],
        correct: 2,
        explanation: "The indefinite pronoun 'Everyone' is always singular. Therefore, it takes the singular verb 'is' regardless of how many people are included in the group."
    },
    {
        question: "Choose the correct article.\n\nShe is ______ M.A. student.",
        options: ["a", "an", "the", "no article"],
        correct: 1,
        explanation: "The letter 'M' is pronounced '/em/', which begins with a vowel sound. Therefore, the correct article before 'M.A.' is 'an'."
    },
    {
        question: "Choose the correct preposition.\n\nHe has been working here ______ 2018.",
        options: ["for", "since", "from", "by"],
        correct: 1,
        explanation: "The preposition 'since' is used with a specific point of time, such as a year or date. 'For' is used with a period of time."
    },
    {
        question: "Choose the Passive Voice.\n\nThe police arrested the thief.",
        options: [
            "The thief arrested the police.",
            "The thief was arrested by the police.",
            "The thief is arrested by the police.",
            "The police were arrested by the thief."
        ],
        correct: 1,
        explanation: "The passive voice of a simple past sentence is formed using 'was/were' followed by the past participle. Hence, 'The thief was arrested by the police' is correct."
    },
    {
        question: "Choose the correct reported speech.\n\nThe teacher said, \"The Earth revolves around the Sun.\"",
        options: [
            "The teacher said that the Earth revolved around the Sun.",
            "The teacher said that the Earth revolves around the Sun.",
            "The teacher said that the Earth had revolved around the Sun.",
            "The teacher said that the Earth was revolving around the Sun."
        ],
        correct: 1,
        explanation: "Universal truths and scientific facts do not change their tense in reported speech. Therefore, 'The Earth revolves around the Sun' remains unchanged."
    },
    {
        question: "Choose the correctly punctuated sentence.",
        options: [
            "Alas! We lost the match.",
            "Alas, We lost the match!",
            "Alas We, lost the match.",
            "Alas. we lost the match."
        ],
        correct: 0,
        explanation: "Interjections such as 'Alas!' express strong emotion and are followed by an exclamation mark. The following sentence begins with a capital letter."
    },
    {
        question: "Choose the correctly spelt word.",
        options: [
            "Maintenance",
            "Maintanance",
            "Maintenence",
            "Maintinance"
        ],
        correct: 0,
        explanation: "The correct spelling is 'Maintenance'. The incorrect options contain common spelling errors involving misplaced vowels and missing letters."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "A number of students is absent.",
            "A number of students are absent.",
            "A number of students was absent.",
            "A number of students has absent."
        ],
        correct: 1,
        explanation: "The expression 'A number of' refers to several people or things and always takes a plural verb. Therefore, 'are absent' is correct."
    },
    {
        question: "Choose the correct article.\n\n_____ Ganga is considered sacred.",
        options: ["A", "An", "The", "No article"],
        correct: 2,
        explanation: "Names of rivers are preceded by the definite article 'the'. Therefore, we say 'The Ganga' just as we say 'The Nile' or 'The Godavari'."
    },
    {
        question: "Choose the correct preposition.\n\nThe cat jumped ______ the wall.",
        options: ["between", "over", "among", "inside"],
        correct: 1,
        explanation: "The preposition 'over' shows movement across or above something. It correctly describes the cat moving across the top of the wall."
    },
    {
        question: "Choose the correctly punctuated sentence.",
        options: [
            "\"Please sit down,\" said the teacher.",
            "\"Please sit down\". said the teacher.",
            "\"Please sit down\", said the teacher.",
            "\"Please sit down.\" said the teacher."
        ],
        correct: 0,
        explanation: "In direct speech, a comma is placed inside the closing quotation marks before the reporting clause when the quoted sentence is not a question or exclamation."
    },
    {
        question: "Choose the correct spelling.",
        options: [
            "Government",
            "Goverment",
            "Governement",
            "Government"
        ],
        correct: 0,
        explanation: "The correct spelling is 'Government'. Many learners incorrectly omit or add extra letters, making it a commonly tested spelling word."
    },
    {
        question: "Which reading strategy is most suitable before reading a passage in detail?",
        options: [
            "Memorising every word",
            "Predicting from the title",
            "Copying difficult words",
            "Translating every sentence"
        ],
        correct: 1,
        explanation: "Predicting from the title activates prior knowledge and prepares the reader to understand the passage more effectively before detailed reading begins."
    },
    {
        question: "Choose the correct verb.\n\nThe furniture ______ expensive.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "The noun 'Furniture' is an uncountable singular noun. Therefore, it always takes a singular verb such as 'is' in standard English."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "Neither Ram nor his friends was present.",
            "Neither Ram nor his friends were present.",
            "Neither Ram nor his friends is present.",
            "Neither Ram nor his friends has present."
        ],
        correct: 1,
        explanation: "With 'neither...nor', the verb agrees with the subject nearest to it. Since 'friends' is plural, the correct verb is 'were'."
    },
    {
        question: "Choose the correct preposition.\n\nThe principal divided the sweets ______ the children.",
        options: ["among", "between", "inside", "beside"],
        correct: 0,
        explanation: "The preposition 'among' is used when something is shared by more than two people or things. 'Between' is generally used for two."
    },
    {
        question: "Choose the correct article.\n\nHe waited for ______ hour before the bus arrived.",
        options: ["a", "an", "the", "no article"],
        correct: 1,
        explanation: "The word 'hour' begins with a silent 'h' and is pronounced with a vowel sound. Therefore, the correct article is 'an'."
    },
    {
        question: "Read the passage.\n\n\"Rita looked at the headings before reading the lesson. She guessed what the lesson might discuss and then started reading carefully.\"\n\nWhich reading strategy did Rita use first?",
        options: [
            "Scanning",
            "Predicting",
            "Summarising",
            "Skipping"
        ],
        correct: 1,
        explanation: "Rita first examined the headings and guessed the possible content. This strategy is called predicting and helps readers understand a text more effectively."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "The scissors is on the table.",
            "The scissors are on the table.",
            "The scissors has on the table.",
            "The scissors was on the table."
        ],
        correct: 1,
        explanation: "The noun 'Scissors' is treated as a plural noun in English. Therefore, it takes the plural verb 'are' instead of 'is' or 'was'."
    },
    {
        question: "Choose the correctly punctuated sentence.",
        options: [
            "After finishing the exam, the students left quietly.",
            "After finishing the exam the students, left quietly.",
            "After finishing, the exam the students left quietly.",
            "After, finishing the exam the students left quietly."
        ],
        correct: 0,
        explanation: "An introductory phrase should be followed by a comma before the main clause. This punctuation improves clarity and follows standard English writing conventions."
    }
];