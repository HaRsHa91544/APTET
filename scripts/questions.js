const SUBJECTS = [
    "English Grammer"
];

const QUESTIONS = [
    {
        question: "Choose the correct article.\n\nRavi wants to become ____ engineer.",
        options: ["a", "an", "the", "No article"],
        correct: 1,
        explanation: "The noun 'engineer' begins with a vowel sound (/e/). We use 'an' before words that start with vowel sounds, not simply vowel letters. Therefore, 'an engineer' is grammatically correct."
    },
    {
        question: "Choose the correct article.\n\nThe Sun rises in ____ east.",
        options: ["a", "an", "the", "No article"],
        correct: 2,
        explanation: "Names of directions used as specific geographical references take the definite article 'the'. Hence, the correct expression is 'the east', just like 'the west' or 'the north'."
    },
    {
        question: "Choose the correct question tag.\n\nShe is a teacher, ______?",
        options: ["isn't she", "doesn't she", "wasn't she", "is she"],
        correct: 0,
        explanation: "The statement is positive and uses the auxiliary verb 'is'. Therefore, the question tag must be negative and use the same auxiliary: 'isn't she?' This follows standard question tag rules."
    },
    {
        question: "Choose the correct question tag.\n\nThey don't play cricket, ______?",
        options: ["don't they", "do they", "didn't they", "aren't they"],
        correct: 1,
        explanation: "A negative statement requires a positive question tag. Since the auxiliary is 'do', the correct positive tag is 'do they?' maintaining the same tense and subject."
    },
    {
        question: "Choose the correct passive voice.\n\nThey built the bridge in 2020.",
        options: [
            "The bridge built in 2020.",
            "The bridge was built in 2020.",
            "The bridge is built in 2020.",
            "The bridge has built in 2020."
        ],
        correct: 1,
        explanation: "The active sentence is in the simple past tense. In passive voice, simple past changes to 'was/were + past participle'. Therefore, 'The bridge was built in 2020' is correct."
    },
    {
        question: "Choose the correct active voice.\n\nThe letter was written by Rani.",
        options: [
            "Rani wrote the letter.",
            "Rani writes the letter.",
            "Rani has written the letter.",
            "Rani is writing the letter."
        ],
        correct: 0,
        explanation: "The passive sentence uses 'was written', which is simple past passive. Its active form is simple past: 'Rani wrote the letter.' The tense must remain unchanged during transformation."
    },
    {
        question: "Choose the correct verb.\n\nEach of the students ____ a notebook.",
        options: ["have", "are having", "has", "were having"],
        correct: 2,
        explanation: "The subject 'Each' is singular even though it refers to many students. Singular subjects always take singular verbs. Hence, 'Each of the students has a notebook' is correct."
    },
    {
        question: "Choose the correct verb.\n\nNeither the teacher nor the students ____ ready.",
        options: ["is", "was", "are", "has"],
        correct: 2,
        explanation: "With 'neither...nor', the verb agrees with the noun nearest to it. Here, 'students' is plural and closest to the verb, so the plural verb 'are' is the correct choice."
    },
    {
        question: "Choose the correct passive voice.\n\nThe manager will announce the results tomorrow.",
        options: [
            "The results will announce tomorrow.",
            "The results will be announced tomorrow.",
            "The results are announced tomorrow.",
            "The results have been announced tomorrow."
        ],
        correct: 1,
        explanation: "Future tense passive voice is formed with 'will be + past participle'. Therefore, 'The results will be announced tomorrow' correctly changes the active sentence into passive voice."
    },
    {
        question: "Choose the correct article.\n\nHonesty is ____ best policy.",
        options: ["a", "an", "the", "No article"],
        correct: 2,
        explanation: "Superlative adjectives such as 'best', 'highest', and 'greatest' are normally preceded by the definite article 'the'. Hence, the correct phrase is 'the best policy'."
    },
    {
        question: "Choose the correct question tag.\n\nLet's go for a walk, ______?",
        options: ["shall we", "will we", "do we", "don't we"],
        correct: 0,
        explanation: "Sentences beginning with 'Let's' express a suggestion. The standard question tag used after such sentences is 'shall we?' making it the correct grammatical choice."
    },
    {
        question: "Choose the correct active voice.\n\nThe work has been completed by the workers.",
        options: [
            "The workers completed the work.",
            "The workers have completed the work.",
            "The workers complete the work.",
            "The workers had completed the work."
        ],
        correct: 1,
        explanation: "The passive sentence is in the present perfect tense ('has been completed'). Its active form is 'have completed' because the subject 'workers' is plural. The tense remains unchanged."
    },
    {
        question: "Choose the correct verb.\n\nOne of my friends ____ coming today.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "The subject is 'One', which is singular. Although 'friends' is plural, the verb agrees with 'One'. Therefore, the correct sentence is 'One of my friends is coming today.'"
    },
    {
        question: "Choose the correct passive voice.\n\nPeople speak English all over the world.",
        options: [
            "English is spoken all over the world.",
            "English was spoken all over the world.",
            "English has spoken all over the world.",
            "English speaks all over the world."
        ],
        correct: 0,
        explanation: "The active sentence is in the simple present tense. Its passive form uses 'is/am/are + past participle'. Therefore, 'English is spoken all over the world' is correct."
    },
    {
        question: "Choose the correct article.\n\nHe bought ____ umbrella yesterday.",
        options: ["a", "an", "the", "No article"],
        correct: 1,
        explanation: "The word 'umbrella' begins with a vowel sound. We use the indefinite article 'an' before words that start with vowel sounds. Hence, 'an umbrella' is the correct expression."
    },
    {
        question: "Choose the correct article.\n\nShe adopted ____ honest approach to solve the problem.",
        options: ["a", "an", "the", "No article"],
        correct: 1,
        explanation: "The word 'honest' begins with a silent 'h', so it starts with a vowel sound. We use 'an' before words that begin with vowel sounds. Therefore, 'an honest approach' is correct."
    },
    {
        question: "Choose the correct article.\n\nMount Everest is ____ highest peak in the world.",
        options: ["a", "an", "the", "No article"],
        correct: 2,
        explanation: "Superlative adjectives like 'highest', 'best', and 'largest' are always preceded by the definite article 'the'. Hence, 'the highest peak' is the correct expression."
    },
    {
        question: "Choose the correct question tag.\n\nYou can swim, ______?",
        options: ["can't you", "can you", "don't you", "won't you"],
        correct: 0,
        explanation: "The statement is positive and uses the modal auxiliary 'can'. Therefore, the question tag must be negative with the same auxiliary: 'can't you?'"
    },
    {
        question: "Choose the correct question tag.\n\nHe hasn't finished his homework, ______?",
        options: ["hasn't he", "has he", "did he", "does he"],
        correct: 1,
        explanation: "A negative statement takes a positive question tag. Since the auxiliary verb is 'has', the correct tag is 'has he?'"
    },
    {
        question: "Choose the correct passive voice.\n\nThe students are cleaning the classroom.",
        options: [
            "The classroom is cleaned by the students.",
            "The classroom is being cleaned by the students.",
            "The classroom was cleaned by the students.",
            "The classroom has been cleaned by the students."
        ],
        correct: 1,
        explanation: "The sentence is in the present continuous tense. Its passive form is 'is/am/are being + past participle'. Therefore, 'is being cleaned' is correct."
    },
    {
        question: "Choose the correct active voice.\n\nThe match was won by our team.",
        options: [
            "Our team won the match.",
            "Our team wins the match.",
            "Our team has won the match.",
            "Our team is winning the match."
        ],
        correct: 0,
        explanation: "The passive sentence is in the simple past tense. While changing it into active voice, the tense remains unchanged. Hence, 'Our team won the match.'"
    },
    {
        question: "Choose the correct verb.\n\nThe quality of these books ____ excellent.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "The subject is 'quality', which is singular. The phrase 'of these books' only modifies the subject and does not affect verb agreement. Therefore, 'is' is correct."
    },
    {
        question: "Choose the correct verb.\n\nEither the boys or the principal ____ attending the meeting.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "With 'either...or', the verb agrees with the subject nearest to it. Here, 'principal' is singular, so the correct verb is 'is'."
    },
    {
        question: "Choose the correct passive voice.\n\nThe police have arrested the thief.",
        options: [
            "The thief has arrested.",
            "The thief has been arrested.",
            "The thief was arrested.",
            "The thief is arrested."
        ],
        correct: 1,
        explanation: "The active sentence is in the present perfect tense. The passive form uses 'has/have been + past participle'. Hence, 'has been arrested' is correct."
    },
    {
        question: "Choose the correct article.\n\nMy father is ____ MLA.",
        options: ["a", "an", "the", "No article"],
        correct: 1,
        explanation: "The abbreviation 'MLA' begins with the vowel sound 'em'. Therefore, the correct article before it is 'an', not 'a'."
    },
    {
        question: "Choose the correct question tag.\n\nOpen the window, ______?",
        options: ["will you", "shall we", "don't you", "do you"],
        correct: 0,
        explanation: "Imperative sentences requesting someone to do something usually take the question tag 'will you?' It is the standard tag used with commands and requests."
    },
    {
        question: "Choose the correct active voice.\n\nThe homework will be checked by the teacher.",
        options: [
            "The teacher checks the homework.",
            "The teacher will check the homework.",
            "The teacher has checked the homework.",
            "The teacher checked the homework."
        ],
        correct: 1,
        explanation: "The passive sentence is in the future tense ('will be checked'). Its active form is 'will check'. The tense must remain unchanged during transformation."
    },
    {
        question: "Choose the correct verb.\n\nMathematics ____ my favourite subject.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "Although 'Mathematics' ends with 's', it is the name of a subject and is treated as singular. Therefore, it takes the singular verb 'is'."
    },
    {
        question: "Choose the correct passive voice.\n\nSomeone has stolen my bicycle.",
        options: [
            "My bicycle has stolen.",
            "My bicycle has been stolen.",
            "My bicycle was stolen.",
            "My bicycle is stolen."
        ],
        correct: 1,
        explanation: "The sentence is in the present perfect tense. The passive voice is formed using 'has/have been + past participle'. Therefore, 'has been stolen' is correct."
    },
    {
        question: "Choose the correct article.\n\nShe is ____ university student.",
        options: ["a", "an", "the", "No article"],
        correct: 0,
        explanation: "The word 'university' begins with the consonant sound '/yuː/'. Since the sound is not a vowel sound, the correct article is 'a', making 'a university student' correct."
    },
    {
        question: "Choose the correct article.\n\nHe is ____ European citizen.",
        options: ["a", "an", "the", "No article"],
        correct: 0,
        explanation: "The word 'European' begins with the consonant sound /yuː/, not a vowel sound. Therefore, the correct article is 'a'. We use articles based on pronunciation, not spelling."
    },
    {
        question: "Choose the correct article.\n\nShe gave me ____ useful suggestion.",
        options: ["a", "an", "the", "No article"],
        correct: 0,
        explanation: "The word 'useful' begins with the consonant sound /yuː/. Since it does not begin with a vowel sound, the correct article is 'a'."
    },
    {
        question: "Choose the correct question tag.\n\nYour brother is coming today, ______?",
        options: ["isn't he", "doesn't he", "won't he", "is he"],
        correct: 0,
        explanation: "The statement is positive and uses the auxiliary verb 'is'. Therefore, the question tag should be negative using the same auxiliary: 'isn't he?'"
    },
    {
        question: "Choose the correct question tag.\n\nNobody called you, ______?",
        options: ["didn't they", "did they", "didn't he", "wasn't it"],
        correct: 1,
        explanation: "Words like 'nobody' make the statement negative in meaning. Therefore, the question tag must be positive: 'did they?' Singular indefinite pronouns usually take 'they' in question tags."
    },
    {
        question: "Choose the correct passive voice.\n\nThey are repairing the road.",
        options: [
            "The road is repaired.",
            "The road is being repaired.",
            "The road was repaired.",
            "The road has been repaired."
        ],
        correct: 1,
        explanation: "The sentence is in the present continuous tense. The passive voice is formed using 'is/am/are being + past participle'. Hence, 'is being repaired' is correct."
    },
    {
        question: "Choose the correct active voice.\n\nThe prize was given to Meena by the principal.",
        options: [
            "The principal gave the prize to Meena.",
            "The principal gives the prize to Meena.",
            "The principal has given the prize to Meena.",
            "The principal was giving the prize to Meena."
        ],
        correct: 0,
        explanation: "The passive sentence is in the simple past tense. Therefore, its active voice should also be in the simple past: 'The principal gave the prize to Meena.'"
    },
    {
        question: "Choose the correct verb.\n\nThe list of names ____ on the table.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "The subject is 'list', which is singular. The phrase 'of names' only describes the subject. Therefore, the singular verb 'is' is correct."
    },
    {
        question: "Choose the correct verb.\n\nBread and butter ____ my favourite breakfast.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "When two nouns joined by 'and' refer to one idea or one item, they take a singular verb. 'Bread and butter' is considered one meal."
    },
    {
        question: "Choose the correct passive voice.\n\nThe doctor is examining the patient.",
        options: [
            "The patient is examined.",
            "The patient is being examined.",
            "The patient was examined.",
            "The patient has been examined."
        ],
        correct: 1,
        explanation: "The active sentence is in the present continuous tense. The passive form is 'is/am/are being + past participle'. Hence, 'is being examined' is correct."
    },
    {
        question: "Choose the correct article.\n\nShe waited for ____ hour.",
        options: ["a", "an", "the", "No article"],
        correct: 1,
        explanation: "The word 'hour' begins with a silent 'h', so the pronunciation starts with a vowel sound. Therefore, the correct article is 'an'."
    },
    {
        question: "Choose the correct question tag.\n\nI am late, ______?",
        options: ["aren't I", "amn't I", "am I", "isn't I"],
        correct: 0,
        explanation: "The standard English question tag for 'I am' is 'aren't I?' even though it seems irregular. It is the accepted grammatical form."
    },
    {
        question: "Choose the correct active voice.\n\nThe classroom is being decorated by the students.",
        options: [
            "The students decorate the classroom.",
            "The students are decorating the classroom.",
            "The students decorated the classroom.",
            "The students have decorated the classroom."
        ],
        correct: 1,
        explanation: "The passive sentence is in the present continuous tense. Therefore, its active form is also present continuous: 'are decorating'."
    },
    {
        question: "Choose the correct verb.\n\nNeither of the answers ____ correct.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "The subject 'Neither' is singular. Therefore, it takes the singular verb 'is', regardless of the plural noun that follows."
    },
    {
        question: "Choose the correct passive voice.\n\nSomeone will invite you tomorrow.",
        options: [
            "You will invite tomorrow.",
            "You will be invited tomorrow.",
            "You are invited tomorrow.",
            "You have been invited tomorrow."
        ],
        correct: 1,
        explanation: "The future passive is formed using 'will be + past participle'. Therefore, 'You will be invited tomorrow' is the correct passive form."
    },
    {
        question: "Choose the correct article.\n\nHe wants to become ____ IPS officer.",
        options: ["a", "an", "the", "No article"],
        correct: 1,
        explanation: "The abbreviation 'IPS' begins with the vowel sound 'I'. Therefore, we use 'an' before it. The correct expression is 'an IPS officer'."
    },
    {
        question: "Choose the correct question tag.\n\nEveryone enjoyed the movie, ______?",
        options: ["didn't they", "did they", "didn't he", "wasn't it"],
        correct: 0,
        explanation: "The statement is positive, so it takes a negative tag. Indefinite pronouns like 'everyone' commonly take the pronoun 'they' in question tags."
    },
    {
        question: "Choose the correct verb.\n\nTen kilometres ____ a long distance to walk.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "When a distance, amount, or period of time is treated as a single unit, it takes a singular verb. Therefore, 'Ten kilometres is' is correct."
    },
    {
        question: "Choose the correct active voice.\n\nThe meeting has been postponed by the committee.",
        options: [
            "The committee postponed the meeting.",
            "The committee postpones the meeting.",
            "The committee has postponed the meeting.",
            "The committee had postponed the meeting."
        ],
        correct: 2,
        explanation: "The passive sentence is in the present perfect tense. Therefore, the active voice should also be in the present perfect tense: 'has postponed'."
    },
    {
        question: "Choose the correct passive voice.\n\nThe chef cooks delicious food.",
        options: [
            "Delicious food is cooked by the chef.",
            "Delicious food was cooked by the chef.",
            "Delicious food has been cooked by the chef.",
            "Delicious food is being cooked by the chef."
        ],
        correct: 0,
        explanation: "The active sentence is in the simple present tense. The passive voice uses 'is/am/are + past participle'. Hence, 'is cooked' is correct."
    },
    {
        question: "Choose the correct article.\n\nThis is ____ unique opportunity.",
        options: ["a", "an", "the", "No article"],
        correct: 0,
        explanation: "The word 'unique' begins with the consonant sound /yuː/. Since the pronunciation starts with a consonant sound, the correct article is 'a'."
    }
];