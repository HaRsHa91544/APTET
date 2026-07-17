const SUBJECTS = [
    "Engilsh Grammer"
];

const QUESTIONS = [
    {
        question: "Identify the part containing the error.\n\nEach of the students (A) / have submitted (B) / their assignment (C) / on time. (D)",
        options: [
            "Each of the students",
            "have submitted",
            "their assignment",
            "on time"
        ],
        correct: 1,
        explanation: "The subject 'Each' is singular, even though it refers to many students. Therefore, the singular verb 'has submitted' must be used instead of 'have submitted' to maintain subject-verb agreement."
    },
    {
        question: "Choose the correct replacement.\n\nShe is good ___ Mathematics.",
        options: [
            "in",
            "on",
            "at",
            "with"
        ],
        correct: 2,
        explanation: "The adjective 'good' is commonly followed by the preposition 'at' when referring to someone's skill or ability in a subject, activity, or task. Therefore, 'good at Mathematics' is correct."
    },
    {
        question: "Choose the correct passive form.\n\nThey will complete the project next week.",
        options: [
            "The project is completed next week.",
            "The project will complete next week.",
            "The project will be completed next week.",
            "The project has been completed next week."
        ],
        correct: 2,
        explanation: "A future tense active sentence changes into passive using 'will be + past participle'. Hence, 'The project will be completed next week' is the correct passive construction."
    },
    {
        question: "Choose the correct indirect speech.\n\nThe teacher said, \"Work hard.\"",
        options: [
            "The teacher said that work hard.",
            "The teacher advised to work hard.",
            "The teacher advised the students to work hard.",
            "The teacher said work hard."
        ],
        correct: 2,
        explanation: "Imperative sentences expressing advice are reported using 'advised + object + to + base verb'. Including the listener makes the reported speech grammatically complete and meaningful."
    },
    {
        question: "Identify the incorrect part.\n\nNeither of the boys (A) / were willing (B) / to accept (C) / the responsibility. (D)",
        options: [
            "Neither of the boys",
            "were willing",
            "to accept",
            "the responsibility"
        ],
        correct: 1,
        explanation: "The pronoun 'Neither' is singular and requires a singular verb. Therefore, 'was willing' is grammatically correct instead of 'were willing' in this sentence."
    },
    {
        question: "Read the passage and answer.\n\nRavi was known for his punctuality. Every day, he reached school fifteen minutes before the first bell. One rainy morning, however, he arrived late because a large tree had fallen across the road. Instead of returning home, he helped local people remove the branches before continuing to school. Though he reached after the assembly, his teacher appreciated his sense of responsibility.\n\nWhy was Ravi late to school?",
        options: [
            "He missed the bus.",
            "He overslept.",
            "A tree blocked the road.",
            "His bicycle broke down."
        ],
        correct: 2,
        explanation: "The passage clearly mentions that Ravi was delayed because a large tree had fallen across the road, preventing normal movement until the branches were removed."
    },
    {
        question: "Read the passage and answer.\n\nWhich quality best describes Ravi?",
        options: [
            "Careless",
            "Responsible",
            "Impatient",
            "Lazy"
        ],
        correct: 1,
        explanation: "Ravi chose to help local people clear the road before going to school. His willingness to help others reflects responsibility rather than carelessness or laziness."
    },
    {
        question: "Read the passage and answer.\n\nThe teacher appreciated Ravi mainly because he",
        options: [
            "reached school early.",
            "obeyed traffic rules.",
            "showed social responsibility.",
            "completed his homework."
        ],
        correct: 2,
        explanation: "Although Ravi arrived late, he first helped people remove the fallen tree branches. His teacher appreciated this responsible social behavior rather than his punctuality or academic work."
    },
    {
        question: "Read the passage and answer.\n\nThe word 'punctuality' means",
        options: [
            "honesty",
            "kindness",
            "being on time",
            "bravery"
        ],
        correct: 2,
        explanation: "Punctuality refers to the habit of arriving, starting, or completing something at the expected or scheduled time. It reflects discipline and respect for time."
    },
    {
        question: "Read the passage and answer.\n\nWhich statement is TRUE?",
        options: [
            "Ravi returned home.",
            "Ravi ignored the fallen tree.",
            "Ravi helped clear the road.",
            "Ravi reached before assembly."
        ],
        correct: 2,
        explanation: "The passage explicitly states that Ravi helped local people remove the branches blocking the road before continuing to school, making this the only correct statement."
    },
    {
        question: "Choose the correct word.\n\nEducation is one of the most powerful tools _____ changing society.",
        options: [
            "on",
            "for",
            "by",
            "with"
        ],
        correct: 1,
        explanation: "The noun 'tool' is naturally followed by the preposition 'for' when expressing purpose. Thus, 'tools for changing society' is the correct and standard expression."
    },
    {
        question: "Choose the correct word.\n\nTeachers should encourage students _____ ask questions.",
        options: [
            "for",
            "to",
            "at",
            "of"
        ],
        correct: 1,
        explanation: "The verb 'encourage' is followed by an object and an infinitive. Therefore, the correct structure is 'encourage students to ask questions', not any other preposition."
    },
    {
        question: "Choose the correct replacement.\n\nNo sooner did he arrive _____ it started raining.",
        options: [
            "and",
            "than",
            "when",
            "then"
        ],
        correct: 1,
        explanation: "The fixed English expression is 'No sooner...than...'. It is used to show that one action happened immediately after another in formal English usage."
    },
    {
        question: "Choose the incorrect part.\n\nOne of my friends (A) / have been selected (B) / for the national competition (C) / this year. (D)",
        options: [
            "One of my friends",
            "have been selected",
            "for the national competition",
            "this year"
        ],
        correct: 1,
        explanation: "The subject is 'One', which is singular. Therefore, the correct verb phrase is 'has been selected'. Using 'have been selected' violates subject-verb agreement."
    },
    {
        question: "Choose the correct indirect speech.\n\nShe said, \"I have finished my work.\"",
        options: [
            "She said that she finished her work.",
            "She said that she has finished her work.",
            "She said that she had finished her work.",
            "She said that she will finish her work."
        ],
        correct: 2,
        explanation: "When the reporting verb is in the past, the present perfect tense generally changes to the past perfect in reported speech. Therefore, 'had finished' is correct."
    },
    {
        question: "Identify the part containing the error.\n\nShe (A) / does not (B) / knows (C) / the answer. (D)",
        options: [
            "She",
            "does not",
            "knows",
            "the answer"
        ],
        correct: 2,
        explanation: "After the auxiliary verb 'does not', the main verb must be in its base form. Therefore, 'knows' is incorrect and should be replaced with 'know'."
    },
    {
        question: "Choose the correct option.\n\nHardly had the train left the station _____ it started raining.",
        options: [
            "than",
            "when",
            "then",
            "and"
        ],
        correct: 1,
        explanation: "The correct correlative conjunction is 'Hardly... when...'. 'Than' is used with 'No sooner', making 'when' the only grammatically correct choice."
    },
    {
        question: "Choose the correct passive form.\n\nPeople speak English all over the world.",
        options: [
            "English spoke all over the world.",
            "English is spoken all over the world.",
            "English has spoken all over the world.",
            "English was spoken all over the world."
        ],
        correct: 1,
        explanation: "The sentence is in the simple present tense. Its passive form uses 'is spoken', following the structure 'is/am/are + past participle'."
    },
    {
        question: "Choose the correct indirect speech.\n\nThe officer said, \"Do not enter this room.\"",
        options: [
            "The officer warned us not to enter that room.",
            "The officer said not enter this room.",
            "The officer requested that do not enter.",
            "The officer ordered us don't enter that room."
        ],
        correct: 0,
        explanation: "Negative commands are reported using 'warned' or 'ordered' followed by an object and 'not to' plus the base verb. Option A follows the correct reporting structure."
    },
    {
        question: "Identify the incorrect part.\n\nThe quality of the books (A) / were appreciated (B) / by the committee (C) / yesterday. (D)",
        options: [
            "The quality of the books",
            "were appreciated",
            "by the committee",
            "yesterday"
        ],
        correct: 1,
        explanation: "The subject is 'quality', which is singular. Therefore, the verb should also be singular. 'Were appreciated' should be corrected to 'was appreciated'."
    },
    {
        question: "Why did Anita keep a notebook?",
        options: [
            "To write homework",
            "To record new words",
            "To prepare timetables",
            "To write stories"
        ],
        correct: 1,
        explanation: "The passage clearly states that Anita maintained a notebook to write down newly learned words and improve her vocabulary systematically."
    },
    {
        question: "Which activity contributed MOST to Anita's vocabulary development?",
        options: [
            "Watching movies",
            "Reading newspapers",
            "Playing games",
            "Visiting libraries"
        ],
        correct: 1,
        explanation: "Reading newspapers exposed Anita to new vocabulary daily, and she reinforced learning by recording unfamiliar words in her notebook."
    },
    {
        question: "The word 'significantly' is closest in meaning to",
        options: [
            "slightly",
            "greatly",
            "rarely",
            "suddenly"
        ],
        correct: 1,
        explanation: "The word 'significantly' means considerably or to a great extent. It describes a noticeable improvement in Anita's confidence over time."
    },
    {
        question: "Which statement is NOT mentioned in the passage?",
        options: [
            "Anita listened to English news.",
            "Anita practised using new words.",
            "Anita joined a spoken English course.",
            "Anita read newspapers regularly."
        ],
        correct: 2,
        explanation: "The passage mentions reading newspapers, listening to English news, and practising vocabulary, but it never states that Anita joined any spoken English course."
    },
    {
        question: "The central idea of the passage is",
        options: [
            "Grammar alone is enough.",
            "Vocabulary develops through regular language exposure and practice.",
            "English newspapers are expensive.",
            "Confidence cannot be improved."
        ],
        correct: 1,
        explanation: "The passage emphasizes that regular exposure to English and continuous practice help improve vocabulary, communication skills, and overall confidence."
    },
    {
        question: "Choose the correct word.\n\nHonesty is admired _____ everyone.",
        options: [
            "with",
            "by",
            "from",
            "into"
        ],
        correct: 1,
        explanation: "The verb 'admired' is followed by the preposition 'by' to indicate the people who admire someone or something."
    },
    {
        question: "Teachers expect students _____ punctual.",
        options: [
            "are",
            "being",
            "to be",
            "be"
        ],
        correct: 2,
        explanation: "After the verb 'expect', English uses the infinitive structure 'expect someone to be'. Therefore, 'to be' is the correct completion."
    },
    {
        question: "If I _____ enough money, I would buy a new laptop.",
        options: [
            "have",
            "had",
            "will have",
            "has"
        ],
        correct: 1,
        explanation: "This sentence expresses an unreal present situation, so it follows the second conditional pattern: 'If + past simple, would + base verb'."
    },
    {
        question: "Identify the incorrect part.\n\nNeither the teacher nor the students (A) / was interested (B) / in cancelling (C) / the excursion. (D)",
        options: [
            "Neither the teacher nor the students",
            "was interested",
            "in cancelling",
            "the excursion"
        ],
        correct: 1,
        explanation: "With 'neither...nor', the verb agrees with the nearer subject. Since 'students' is plural, the correct verb is 'were interested'."
    },
    {
        question: "Choose the correct indirect speech.\n\nHe said, \"Where are you going?\"",
        options: [
            "He asked where was I going.",
            "He asked where I was going.",
            "He asked where am I going.",
            "He asked where I had gone."
        ],
        correct: 1,
        explanation: "Reported questions follow statement word order and appropriate tense backshifting. Therefore, 'He asked where I was going' is the correct indirect speech."
    },
    {
        question: "Identify the incorrect part.\n\nThe children (A) / was playing (B) / in the playground (C) / happily. (D)",
        options: [
            "The children",
            "was playing",
            "in the playground",
            "happily"
        ],
        correct: 1,
        explanation: "The noun 'children' is plural, so it requires the plural auxiliary verb 'were'. Therefore, 'was playing' should be changed to 'were playing'."
    },
    {
        question: "Choose the correct option.\n\nHe is senior _____ me.",
        options: [
            "than",
            "from",
            "to",
            "with"
        ],
        correct: 2,
        explanation: "The adjective 'senior' is always followed by the preposition 'to', not 'than'. Therefore, 'He is senior to me' is the correct expression."
    },
    {
        question: "Choose the correct passive form.\n\nSomeone has stolen my bicycle.",
        options: [
            "My bicycle has stolen.",
            "My bicycle has been stolen.",
            "My bicycle was stolen.",
            "My bicycle had stolen."
        ],
        correct: 1,
        explanation: "The sentence is in the present perfect tense. Its passive form is 'has/have been + past participle', making 'has been stolen' the correct answer."
    },
    {
        question: "Choose the correct indirect speech.\n\nHe said, \"I can solve this problem.\"",
        options: [
            "He said that he can solve that problem.",
            "He said that he could solve that problem.",
            "He said that he solved that problem.",
            "He said that he has solved that problem."
        ],
        correct: 1,
        explanation: "In reported speech, 'can' changes to 'could' and 'this' changes to 'that'. Therefore, option B correctly follows the reporting rules."
    },
    {
        question: "Identify the incorrect part.\n\nScarcely (A) / had I reached (B) / than the meeting began. (C) / No error (D)",
        options: [
            "Scarcely",
            "had I reached",
            "than the meeting began",
            "No error"
        ],
        correct: 2,
        explanation: "The correct correlative expression is 'Scarcely...when...'. Using 'than' is incorrect and should be replaced with 'when'."
    },
    {
        question: "What was the purpose of the programme?",
        options: [
            "Sports practice",
            "Environmental awareness",
            "Science exhibition",
            "Cultural programme"
        ],
        correct: 1,
        explanation: "The passage clearly states that the tree plantation programme was organized to create environmental awareness among students."
    },
    {
        question: "Which benefit of planting trees is mentioned?",
        options: [
            "Reduces rainfall",
            "Prevents soil erosion",
            "Increases pollution",
            "Reduces biodiversity"
        ],
        correct: 1,
        explanation: "According to the passage, planting trees helps prevent soil erosion, improve air quality, and support wildlife."
    },
    {
        question: "The word 'saplings' refers to",
        options: [
            "dried leaves",
            "young trees",
            "seeds",
            "flowers"
        ],
        correct: 1,
        explanation: "A sapling is a young tree that has recently started growing and is planted to develop into a mature tree."
    },
    {
        question: "Which statement is TRUE?",
        options: [
            "Only teachers planted trees.",
            "Students promised to care for the plants.",
            "Trees were planted only near classrooms.",
            "Each student planted one tree."
        ],
        correct: 1,
        explanation: "The passage mentions that students promised to take care of the saplings throughout the year after the plantation programme."
    },
    {
        question: "The central idea of the passage is",
        options: [
            "Gardening is expensive.",
            "Environmental conservation requires participation.",
            "Wildlife lives only in forests.",
            "Trees grow quickly."
        ],
        correct: 1,
        explanation: "The passage emphasizes collective participation in planting and caring for trees to promote environmental conservation and awareness."
    },
    {
        question: "Choose the correct word.\n\nShe insisted _____ paying the bill herself.",
        options: [
            "on",
            "in",
            "for",
            "at"
        ],
        correct: 0,
        explanation: "The verb 'insist' is followed by the preposition 'on'. Therefore, the correct phrase is 'insisted on paying'."
    },
    {
        question: "Choose the correct option.\n\nThe principal congratulated the students _____ their excellent performance.",
        options: [
            "on",
            "with",
            "for",
            "about"
        ],
        correct: 0,
        explanation: "The standard expression is 'congratulate someone on something'. Hence, 'on their excellent performance' is grammatically correct."
    },
    {
        question: "If he _____ harder, he would have passed the examination.",
        options: [
            "studies",
            "had studied",
            "studied",
            "has studied"
        ],
        correct: 1,
        explanation: "This sentence expresses an unreal past condition, so it follows the third conditional pattern: 'If + had + past participle, would have + past participle'."
    },
    {
        question: "Identify the incorrect part.\n\nThe number of applicants (A) / are increasing (B) / every year. (C) / No error. (D)",
        options: [
            "The number of applicants",
            "are increasing",
            "every year",
            "No error"
        ],
        correct: 1,
        explanation: "The subject 'The number' is singular. Therefore, the correct verb is 'is increasing', not 'are increasing'."
    },
    {
        question: "Choose the correct indirect speech.\n\nThe teacher said, \"Why are you absent today?\"",
        options: [
            "The teacher asked why I was absent that day.",
            "The teacher asked why was I absent that day.",
            "The teacher asked why I am absent today.",
            "The teacher asked why had I been absent."
        ],
        correct: 0,
        explanation: "Reported questions use statement word order without inversion, and 'today' changes to 'that day' with the appropriate tense shift."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "She enjoys to sing.",
            "She enjoys singing.",
            "She enjoy singing.",
            "She enjoyed to singing."
        ],
        correct: 1,
        explanation: "The verb 'enjoy' is always followed by a gerund (-ing form). Therefore, 'She enjoys singing' is grammatically correct."
    },
    {
        question: "Choose the correct passive form.\n\nWho wrote this novel?",
        options: [
            "By whom was this novel written?",
            "Who was written this novel?",
            "By whom this novel wrote?",
            "This novel wrote by whom?"
        ],
        correct: 0,
        explanation: "The passive form of a WH-question begins with 'By whom' followed by the auxiliary verb and past participle: 'By whom was this novel written?'"
    },
    {
        question: "Identify the incorrect part.\n\nNot only the students (A) / but also the teacher (B) / were present (C) / at the meeting. (D)",
        options: [
            "Not only the students",
            "but also the teacher",
            "were present",
            "at the meeting"
        ],
        correct: 2,
        explanation: "With 'not only...but also', the verb agrees with the nearer subject. Since 'teacher' is singular, the verb should be 'was present'."
    },
    {
        question: "Choose the correct option.\n\nThe meeting has been postponed _____ next Monday.",
        options: [
            "for",
            "to",
            "until",
            "by"
        ],
        correct: 1,
        explanation: "The standard expression is 'postponed to' a particular date or time. Therefore, 'to next Monday' is the correct usage."
    },
    {
        question: "Choose the most appropriate word.\n\nSuccess depends not only on intelligence _____ on perseverance.",
        options: [
            "and",
            "but",
            "also",
            "rather"
        ],
        correct: 1,
        explanation: "The correct correlative conjunction is 'not only...but also...'. Therefore, 'but' completes the expression correctly before the implied 'also'."
    }
];