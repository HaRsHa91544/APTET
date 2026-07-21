const SUBJECTS = [
    "English Grammer"
];

const QUESTIONS = [
    {
        question: "Each of the students _____ given a participation certificate.",
        options: ["were", "are", "was", "have been"],
        correct: 2,
        explanation: "The expression 'Each of' is always treated as singular. Therefore, it requires a singular verb. Hence, 'was' is correct, while 'were', 'are', and 'have been' are incorrect."
    },
    {
        question: "Neither Ravi nor his friends _____ present in the classroom.",
        options: ["was", "were", "is", "has"],
        correct: 1,
        explanation: "In 'Neither...nor' constructions, the verb agrees with the subject nearest to it. Since 'friends' is plural and closest to the verb, the correct answer is 'were'."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "Either the teachers or the Headmaster are attending the meeting.",
            "Either the teachers or the Headmaster is attending the meeting.",
            "Either the teachers or the Headmaster were attending the meeting.",
            "Either the teachers or the Headmaster have attending the meeting."
        ],
        correct: 1,
        explanation: "With 'Either...or', the verb agrees with the nearest subject. Since 'Headmaster' is singular and nearest to the verb, the correct verb is 'is'."
    },
    {
        question: "Hardly had the train left the station _____ it started raining.",
        options: ["than", "when", "then", "and"],
        correct: 1,
        explanation: "The fixed grammatical pair is 'Hardly...when'. It expresses that one event happened immediately after another. Using 'than', 'then', or 'and' is grammatically incorrect."
    },
    {
        question: "No sooner had she entered the room _____ everyone stood up.",
        options: ["then", "when", "than", "and"],
        correct: 2,
        explanation: "The correct correlative conjunction is 'No sooner...than'. This structure indicates that one action occurred immediately after another. Therefore, 'than' is the only correct choice."
    },
    {
        question: 'The passive form of "They are repairing the road." is:',
        options: [
            "The road repaired by them.",
            "The road is being repaired by them.",
            "The road has been repaired by them.",
            "The road was repaired by them."
        ],
        correct: 1,
        explanation: "The sentence is in the Present Continuous Tense. Its passive form follows the pattern 'is/am/are + being + past participle', giving 'The road is being repaired by them.'"
    },
    {
        question: 'Choose the correct reported speech.\n\nRavi said, "I can solve this problem."',
        options: [
            "Ravi said that I can solve that problem.",
            "Ravi said that he could solve that problem.",
            "Ravi said he can solved that problem.",
            "Ravi said that he solves that problem."
        ],
        correct: 1,
        explanation: "In reported speech, 'can' changes to 'could' when the reporting verb is in the past. Pronouns and demonstratives also change appropriately, making option B correct."
    },
    {
        question: "If she _____ harder, she would have passed the examination.",
        options: ["studies", "studied", "had studied", "has studied"],
        correct: 2,
        explanation: "This is a Third Conditional sentence expressing an unreal past situation. The correct structure is 'If + had + past participle, would have + past participle'."
    },
    {
        question: "Each of the books _____ properly arranged.",
        options: ["are", "have", "is", "were"],
        correct: 2,
        explanation: "The phrase 'Each of' always takes a singular verb because it refers to every individual item separately. Therefore, 'is' is the correct verb."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "Neither of the boys have finished the work.",
            "Neither of the boys has finished the work.",
            "Neither of the boys were finishing the work.",
            "Neither of the boys are finishing the work."
        ],
        correct: 1,
        explanation: "The expression 'Neither of' is grammatically singular. Therefore, it must be followed by the singular verb 'has', not 'have', 'were', or 'are'."
    },
    {
        question: "If I _____ you, I would accept the offer immediately.",
        options: ["am", "was", "were", "had been"],
        correct: 2,
        explanation: "This sentence expresses a hypothetical present situation. Standard English uses 'were' with all subjects in the Second Conditional, including 'I', making 'were' correct."
    },
    {
        question: 'Choose the correct passive form.\n\nPeople believe that she is honest.',
        options: [
            "She believes to be honest.",
            "She is believed to be honest.",
            "She believed honest.",
            "She has believed to be honest."
        ],
        correct: 1,
        explanation: "Reporting verbs like 'believe' form the passive structure 'Subject + is believed + to + verb'. Therefore, 'She is believed to be honest' is grammatically correct."
    },
    {
        question: "Either my brother or my sisters _____ responsible for this mistake.",
        options: ["is", "was", "are", "has"],
        correct: 2,
        explanation: "In 'Either...or' constructions, the verb agrees with the nearest subject. Since 'sisters' is plural and closest to the verb, 'are' is correct."
    },
    {
        question: 'Choose the correct reported speech.\n\nThe teacher said, "Do not waste your time."',
        options: [
            "The teacher told not waste your time.",
            "The teacher advised not to waste our time.",
            "The teacher advised us not to waste our time.",
            "The teacher said us not waste our time."
        ],
        correct: 2,
        explanation: "Negative commands in reported speech use the pattern 'advised/told + object + not to + base verb'. Therefore, 'The teacher advised us not to waste our time' is correct."
    },
    {
        question: "Identify the grammatically correct sentence.",
        options: [
            "Hardly had I reached the bus stop than the bus arrived.",
            "No sooner did I reached home than it began to rain.",
            "Hardly had I reached the bus stop when the bus arrived.",
            "No sooner had I reached the bus stop when the bus arrived."
        ],
        correct: 2,
        explanation: "The correct pair is 'Hardly...when'. 'No sooner' is followed by 'than', not 'when'. Hence, only option C follows the correct grammatical structure."
    },
    {
        question: "Neither the Principal nor the teachers _____ willing to postpone the examination.",
        options: ["is", "are", "was", "has"],
        correct: 1,
        explanation: "In 'Neither...nor' constructions, the verb agrees with the subject nearest to it. Since 'teachers' is plural and closest to the verb, the correct verb is 'are'."
    },
    {
        question: "Each of the players _____ expected to attend the practice session.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "The expression 'Each of' is always singular because it refers to every individual separately. Therefore, it requires the singular verb 'is' instead of plural forms."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "No sooner had the bell rung when the students entered.",
            "No sooner did the bell ring than the students entered.",
            "No sooner had the bell rung than the students entered.",
            "No sooner the bell had rung than the students entered."
        ],
        correct: 2,
        explanation: "The standard grammatical structure is 'No sooner had + subject + past participle + than'. Option C correctly follows this pattern with proper auxiliary inversion and conjunction."
    },
    {
        question: 'The passive form of "The committee will announce the results tomorrow." is:',
        options: [
            "The results will announce tomorrow.",
            "The results will be announced tomorrow.",
            "The results are announced tomorrow.",
            "The results have been announced tomorrow."
        ],
        correct: 1,
        explanation: "Future Simple Passive follows the structure 'will be + past participle'. Hence, 'The results will be announced tomorrow' is the correct passive transformation of the sentence."
    },
    {
        question: "Either Ramesh or his brother _____ responsible for the loss.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "With 'Either...or', the verb agrees with the subject nearest to it. Since 'brother' is singular, the correct verb is 'is'."
    },
    {
        question: "If they _____ earlier, they would not have missed the train.",
        options: ["leave", "left", "had left", "have left"],
        correct: 2,
        explanation: "This is a Third Conditional sentence expressing an unreal past event. The correct pattern is 'If + had + past participle, would have + past participle'."
    },
    {
        question: 'Choose the correct reported speech.\n\nShe said, "I have finished my homework."',
        options: [
            "She said that she had finished her homework.",
            "She said that she has finished her homework.",
            "She said she finished my homework.",
            "She told that she had finished her homework."
        ],
        correct: 0,
        explanation: "In reported speech, Present Perfect usually changes to Past Perfect when the reporting verb is in the past. Pronouns also change appropriately, making option A correct."
    },
    {
        question: 'Choose the correct passive form.\n\n"Someone has stolen my bicycle."',
        options: [
            "My bicycle has stolen.",
            "My bicycle has been stolen.",
            "My bicycle was stolen.",
            "My bicycle had been stolen."
        ],
        correct: 1,
        explanation: "The sentence is in the Present Perfect Tense. Its passive form follows 'has/have been + past participle', giving 'My bicycle has been stolen'."
    },
    {
        question: "Hardly _____ the announcement made when the students started cheering.",
        options: ["was", "had", "did", "has"],
        correct: 1,
        explanation: "The fixed expression is 'Hardly had...when'. It requires the auxiliary 'had' before the subject to form the correct inverted grammatical structure."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "Neither the students nor the teacher have completed the work.",
            "Neither the students nor the teacher has completed the work.",
            "Neither the students nor the teacher were completed the work.",
            "Neither the students nor the teacher are completed the work."
        ],
        correct: 1,
        explanation: "The verb agrees with the nearest subject in 'Neither...nor' constructions. Since 'teacher' is singular, the correct verb is 'has', making option B correct."
    },
    {
        question: "Each of the questions _____ worth one mark.",
        options: ["are", "were", "is", "have"],
        correct: 2,
        explanation: "The phrase 'Each of' is always followed by a singular verb because it emphasizes every individual item separately. Therefore, 'is' is the correct answer."
    },
    {
        question: 'Choose the correct reported speech.\n\nThe doctor said, "Take this medicine twice a day."',
        options: [
            "The doctor advised me to take that medicine twice a day.",
            "The doctor said me to take this medicine.",
            "The doctor advised that take medicine twice a day.",
            "The doctor told take the medicine twice a day."
        ],
        correct: 0,
        explanation: "Imperative sentences are reported using 'advised/told + object + to + base verb'. Demonstratives also change appropriately, making option A grammatically correct."
    },
    {
        question: "If I _____ enough money, I would buy a laptop.",
        options: ["have", "had", "had had", "will have"],
        correct: 1,
        explanation: "This is a Second Conditional sentence expressing an unreal present situation. The correct structure is 'If + Past Simple, would + base verb', so 'had' is correct."
    },
    {
        question: "Either the Headmaster or the teachers _____ attending the seminar.",
        options: ["is", "was", "are", "has"],
        correct: 2,
        explanation: "In 'Either...or' constructions, the verb agrees with the nearest subject. Since 'teachers' is plural, the correct verb is 'are'."
    },
    {
        question: "Identify the grammatically correct sentence.",
        options: [
            "Hardly had we reached home than it began to rain.",
            "No sooner had we reached home than it began to rain.",
            "No sooner did we reached home than it began to rain.",
            "Hardly we had reached home when it began to rain."
        ],
        correct: 1,
        explanation: "The correct correlative pair is 'No sooner...than' with auxiliary inversion. Option B follows the standard grammatical pattern, while the other options contain structural errors."
    },
    {
        question: "Neither the teacher nor the students _____ absent yesterday.",
        options: ["was", "is", "were", "has"],
        correct: 2,
        explanation: "In 'Neither...nor' constructions, the verb agrees with the subject nearest to it. Since 'students' is plural and closest to the verb, the correct answer is 'were'."
    },
    {
        question: "Each of the candidates _____ an identity card.",
        options: ["have", "has", "are having", "were having"],
        correct: 1,
        explanation: "The phrase 'Each of' is grammatically singular because it refers to every individual separately. Therefore, it always takes the singular verb 'has' in the present tense."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "Hardly had I entered the room than the lights went off.",
            "Hardly did I enter the room when the lights went off.",
            "Hardly had I entered the room when the lights went off.",
            "Hardly I had entered the room when the lights went off."
        ],
        correct: 2,
        explanation: "The correct grammatical structure is 'Hardly had + subject + past participle + when'. Option C correctly uses auxiliary inversion and the proper conjunction 'when'."
    },
    {
        question: 'Choose the passive form.\n\n"People speak English all over the world."',
        options: [
            "English is spoken all over the world.",
            "English speaks all over the world.",
            "English has spoken all over the world.",
            "English was speaking all over the world."
        ],
        correct: 0,
        explanation: "The sentence is in the Present Simple Tense. Its passive voice follows the structure 'is/am/are + past participle', making 'English is spoken all over the world' correct."
    },
    {
        question: 'Choose the correct reported speech.\n\nHe said, "I am reading a novel."',
        options: [
            "He said that he was reading a novel.",
            "He said that he is reading a novel.",
            "He told that he was reading a novel.",
            "He said he reading a novel."
        ],
        correct: 0,
        explanation: "When the reporting verb is in the past, Present Continuous changes to Past Continuous. Pronouns also change appropriately, making option A the correct reported speech."
    },
    {
        question: "Either my father or my brothers _____ going to Hyderabad.",
        options: ["is", "was", "are", "has"],
        correct: 2,
        explanation: "With 'Either...or', the verb agrees with the subject nearest to it. Since 'brothers' is plural and nearest the verb, the correct answer is 'are'."
    },
    {
        question: "If you _____ me earlier, I would have helped you.",
        options: ["inform", "informed", "had informed", "have informed"],
        correct: 2,
        explanation: "This is a Third Conditional sentence describing an unreal past situation. The correct structure is 'If + had + past participle, would have + past participle'."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "No sooner had they arrived when the meeting started.",
            "No sooner did they arrive than the meeting started.",
            "No sooner had they arrived than the meeting started.",
            "No sooner they had arrived than the meeting started."
        ],
        correct: 2,
        explanation: "The fixed grammatical pair is 'No sooner...than'. It also requires auxiliary inversion with 'had'. Option C correctly follows both grammar rules."
    },
    {
        question: 'The passive form of "Who wrote this letter?" is:',
        options: [
            "By whom was this letter written?",
            "By whom this letter was written?",
            "Who was this letter written?",
            "By whom this letter written?"
        ],
        correct: 0,
        explanation: "In interrogative passive voice, the object becomes the subject. The correct pattern is 'By whom was + subject + past participle?', making option A correct."
    },
    {
        question: "Each of the teachers _____ appreciated by the Principal.",
        options: ["were", "was", "are", "have"],
        correct: 1,
        explanation: "The expression 'Each of' always requires a singular verb because it refers to every individual separately. Therefore, 'was appreciated' is grammatically correct."
    },
    {
        question: 'Choose the correct reported speech.\n\nThe boy said, "We will win the match."',
        options: [
            "The boy said that they would win the match.",
            "The boy said they will win the match.",
            "The boy told that they would win.",
            "The boy said that we would win."
        ],
        correct: 0,
        explanation: "In reported speech, 'will' changes to 'would' when the reporting verb is in the past. The pronoun 'we' changes appropriately according to the context."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "Neither the Principal nor the teachers has attended the meeting.",
            "Neither the Principal nor the teachers have attended the meeting.",
            "Neither the Principal nor the teachers is attended the meeting.",
            "Neither the Principal nor the teachers attends the meeting yesterday."
        ],
        correct: 1,
        explanation: "In 'Neither...nor' constructions, the verb agrees with the nearest subject. Since 'teachers' is plural, the correct helping verb is 'have', making option B correct."
    },
    {
        question: "If it _____ tomorrow, we shall cancel the trip.",
        options: ["rains", "rained", "had rained", "rain"],
        correct: 0,
        explanation: "The First Conditional uses the Present Simple in the if-clause and 'shall/will' in the main clause. Therefore, 'If it rains' is the correct structure."
    },
    {
        question: 'Choose the passive form.\n\n"The students have completed the project."',
        options: [
            "The project has completed.",
            "The project has been completed.",
            "The project had been completed.",
            "The project was completed."
        ],
        correct: 1,
        explanation: "The sentence is in the Present Perfect Tense. Its passive form follows 'has/have been + past participle', resulting in 'The project has been completed'."
    },
    {
        question: 'Choose the correct reported speech.\n\nMother said to me, "Don\'t waste water."',
        options: [
            "Mother advised me not to waste water.",
            "Mother said me not waste water.",
            "Mother told not to waste water.",
            "Mother advised that I not waste water."
        ],
        correct: 0,
        explanation: "Negative imperative sentences are reported using 'advised/told + object + not to + base verb'. Option A correctly follows this reporting pattern with the required object."
    },
    {
        question: "Either the captain or the players _____ responsible for the defeat.",
        options: ["is", "are", "was", "has"],
        correct: 1,
        explanation: "With 'Either...or', the verb agrees with the subject nearest to it. Since 'players' is plural, the correct verb is 'are'."
    },
    {
        question: "Choose the correct sentence.",
        options: [
            "Hardly had the train arrived when the passengers rushed in.",
            "Hardly the train had arrived when the passengers rushed in.",
            "Hardly did the train arrived when the passengers rushed in.",
            "Hardly had the train arrived than the passengers rushed in."
        ],
        correct: 0,
        explanation: "The correct expression is 'Hardly...when' with auxiliary inversion. Option A follows both grammatical rules correctly, while the remaining options contain structural mistakes."
    },
    {
        question: "If I _____ harder, I would be successful now.",
        options: ["studied", "had studied", "study", "have studied"],
        correct: 1,
        explanation: "This is a Mixed Conditional expressing an unreal past condition with a present result. The correct structure is 'If + had + past participle, would + base verb'."
    },
    {
        question: 'Choose the passive form.\n\n"Open the window."',
        options: [
            "Let the window be opened.",
            "The window is opened.",
            "The window should opened.",
            "Opened the window."
        ],
        correct: 0,
        explanation: "The passive form of an imperative sentence follows the pattern 'Let + object + be + past participle'. Therefore, 'Let the window be opened' is correct."
    },
    {
        question: "Choose the grammatically correct sentence.",
        options: [
            "No sooner had she completed the work than she submitted it.",
            "No sooner had she completed the work when she submitted it.",
            "Hardly had she completed the work than she submitted it.",
            "Hardly she had completed the work when she submitted it."
        ],
        correct: 0,
        explanation: "The correct correlative conjunction is 'No sooner...than'. It also requires auxiliary inversion. Option A correctly follows both grammar rules and is therefore the right answer."
    }
];