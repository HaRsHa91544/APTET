const SUBJECTS = [
    "Visual Impairment"
];

const QUESTIONS = [
    {
        question: "క్రింది వాటిలో కాంతిని విద్యుత్ సంకేతాలుగా మార్చే photoreceptor cells ప్రధానంగా ఎక్కడ ఉంటాయి?",
        options: ["కార్నియా (Cornea)", "రెటినా (Retina)", "ఐరిస్ (Iris)", "ఆప్టిక్ నర్వ్ (Optic nerve)"],
        correct: 1,
        explanation: "రెటినాలో rods మరియు cones అనే photoreceptor cells ఉంటాయి. ఇవి కాంతి ఉద్దీపనలను neural signalsగా మార్చి, తదుపరి దృశ్య సమాచారాన్ని మెదడుకు పంపే ప్రక్రియకు సహాయపడతాయి."
    },
    {
        question: "కంటి యొక్క ఐరిస్ (Iris) ప్రధానంగా ఏ పనిని నిర్వహిస్తుంది?",
        options: ["కాంతి యొక్క పరిమాణాన్ని నియంత్రించడం", "దృశ్య సంకేతాలను మెదడుకు పంపడం", "కాంతిని రెటినాపై కేంద్రీకరించడం", "కంటి ఆకారాన్ని నిర్వహించడం"],
        correct: 0,
        explanation: "ఐరిస్‌లోని కండరాలు pupil పరిమాణాన్ని మార్చడం ద్వారా కంటిలోకి ప్రవేశించే కాంతి పరిమాణాన్ని నియంత్రిస్తాయి. ఇది వివిధ వెలుతురు పరిస్థితుల్లో దృష్టికి సహాయపడుతుంది."
    },
    {
        question: "Cataract సాధారణంగా కంటి యొక్క ఏ భాగంలో ఏర్పడే మబ్బుదనం (clouding)తో సంబంధం కలిగి ఉంటుంది?",
        options: ["రెటినా", "లెన్స్", "ఆప్టిక్ నర్వ్", "ఐరిస్"],
        correct: 1,
        explanation: "Cataract అనేది కంటి సహజ lens మబ్బుగా మారే పరిస్థితి. Lens పారదర్శకత తగ్గడం వల్ల కాంతి సరిగా ప్రవేశించక, దృష్టి మసకబారుతుంది."
    },
    {
        question: "క్రింది వాటిలో Glaucomaకు అత్యంత సంబంధిత లక్షణం ఏది?",
        options: ["రెటినాలో cone cells సంఖ్య పెరగడం", "ఆప్టిక్ నర్వ్‌కు progressive damage", "లెన్స్ పూర్తిగా పారదర్శకంగా మారడం", "కార్నియా పరిమాణం మాత్రమే తగ్గడం"],
        correct: 1,
        explanation: "Glaucomaలో optic nerve progressive damage ప్రధాన సమస్య. కంటి అంతర్గత ఒత్తిడి పెరగడం ఒక ముఖ్యమైన ప్రమాద కారకం, అయితే అన్ని glaucoma సందర్భాల్లో pressure తప్పనిసరిగా అధికంగా ఉండదు."
    },
    {
        question: "ఒక విద్యార్థి ముద్రిత పుస్తకాన్ని చదవగలుగుతున్నప్పటికీ, సాధారణ print sizeలో చదవడానికి ఎక్కువ సమయం పడుతోంది. అతనికి magnification మరియు తగిన lighting ఉపయోగించినప్పుడు చదవడం మెరుగుపడుతోంది. ఇది ప్రధానంగా ఏ వర్గానికి సంబంధించినది?",
        options: ["పూర్తిస్థాయి blindness", "Low vision", "Auditory impairment", "Intellectual disability"],
        correct: 1,
        explanation: "Low visionలో మిగిలిన దృష్టిని ఉపయోగించి పనులు చేయగలుగుతారు, కానీ magnification, lighting లేదా contrast వంటి సహాయాలు అవసరమవుతాయి. ఈ ఉదాహరణ low vision లక్షణాలకు సరిపోతుంది."
    },
    {
        question: "Low vision ఉన్న విద్యార్థికి printed worksheet చదవడం కష్టంగా ఉంటే, క్రింది వాటిలో తక్షణ classroom adaptationగా అత్యంత సముచితమైనది ఏది?",
        options: ["worksheetను పూర్తిగా తొలగించడం", "పెద్ద అక్షరాలు మరియు తగిన contrast ఉపయోగించడం", "worksheetకు బదులుగా oral examination మాత్రమే నిర్వహించడం", "విద్యార్థిని తరగతి నుండి ప్రత్యేక గదికి పంపించడం"],
        correct: 1,
        explanation: "పెద్ద font మరియు తగిన contrast printed materialను visually accessibleగా చేస్తాయి. అవసరాన్ని బట్టి spacing, lighting, magnification వంటి ఇతర adaptations కూడా ఉపయోగించవచ్చు."
    },
    {
        question: "Functional Vision Assessment (FVA) యొక్క ప్రధాన ఉద్దేశ్యం ఏమిటి?",
        options: ["విద్యార్థి IQను కొలవడం", "విద్యార్థి మిగిలిన దృష్టిని రోజువారీ మరియు విద్యా కార్యకలాపాల్లో ఎలా ఉపయోగిస్తున్నాడో తెలుసుకోవడం", "విద్యార్థి hearing thresholdను నిర్ణయించడం", "Braille reading speedను మాత్రమే కొలవడం"],
        correct: 1,
        explanation: "FVA విద్యార్థి మిగిలిన దృష్టిని నిజ జీవిత మరియు విద్యా పరిస్థితుల్లో ఎలా ఉపయోగిస్తున్నాడో అంచనా వేస్తుంది. దీని ఆధారంగా appropriate visual adaptations మరియు strategies రూపొందించవచ్చు."
    },
    {
        question: "Visually impaired విద్యార్థికి Learning Media Assessment (LMA) నిర్వహించడంలో ప్రధానంగా ఏది నిర్ణయించబడుతుంది?",
        options: ["విద్యార్థి యొక్క preferred learning medium", "విద్యార్థి యొక్క blood pressure", "విద్యార్థి యొక్క auditory threshold", "విద్యార్థి యొక్క motor coordination మాత్రమే"],
        correct: 0,
        explanation: "Learning Media Assessment విద్యార్థి సమాచారాన్ని print, Braille, auditory లేదా ఇతర sensory media ద్వారా అత్యంత సమర్థంగా ఎలా నేర్చుకుంటాడో నిర్ణయించడంలో సహాయపడుతుంది."
    },
    {
        question: "ఒక దృష్టి లోపం ఉన్న విద్యార్థి గణితంలో స్థాన విలువలు, ఆకారాలు మరియు గ్రాఫ్‌లను నేర్చుకోవాలి. క్రింది వాటిలో ఏది అత్యంత అనుకూలమైన instructional material?",
        options: ["Tactile diagrams మరియు embossed representations", "సాధారణ low-resolution photographs", "రంగులేని చిన్న print worksheets", "కేవలం lecture notes"],
        correct: 0,
        explanation: "Tactile diagrams మరియు embossed representations visually inaccessible shapes, graphs, spatial relationshipsను స్పర్శ ద్వారా అర్థం చేసుకోవడానికి సహాయపడతాయి, ముఖ్యంగా blind learners కోసం."
    },
    {
        question: "Brailleలో ఒక సాధారణ Braille cellలో ఎన్ని dots ఉంటాయి?",
        options: ["4", "6", "8", "10"],
        correct: 1,
        explanation: "సాంప్రదాయ Braille cellలో ఆరు dots ఉంటాయి. ఇవి రెండు columnsలో మూడు చొప్పున అమర్చబడి, వివిధ dot combinations ద్వారా అక్షరాలు, సంఖ్యలు మరియు ఇతర చిహ్నాలను సూచిస్తాయి."
    },
    {
        question: "గణిత చిహ్నాలు మరియు mathematical notationను Brailleలో సూచించడానికి ప్రత్యేకంగా ఉపయోగించే code ఏది?",
        options: ["Grade 2 Braille మాత్రమే", "Nemeth Code", "Morse Code", "American Sign Language Code"],
        correct: 1,
        explanation: "Nemeth Code అనేది mathematics మరియు science notationను Brailleలో సూచించడానికి అభివృద్ధి చేసిన ప్రత్యేక code. ఇది సంక్లిష్టమైన గణిత చిహ్నాలు మరియు expressionsను tactile రూపంలో అందిస్తుంది."
    },
    {
        question: "ఒక visually impaired విద్యార్థి పుస్తకంలోని printed textను computer ద్వారా చదివే digital textగా మార్చుకోవాల్సి ఉంది. క్రింది సాంకేతికతల్లో ఏది ఈ పనికి అత్యంత అనుకూలం?",
        options: ["OCR", "FM amplification", "Cochlear implant", "Speech audiometry"],
        correct: 0,
        explanation: "OCR అంటే Optical Character Recognition. ఇది scanned లేదా photographed printed textను గుర్తించి editable లేదా accessible digital textగా మార్చుతుంది, తద్వారా screen readers వంటి technologies దాన్ని చదవగలవు."
    },
    {
        question: "క్రింది వాటిలో screen reader యొక్క ప్రధాన ఉపయోగం ఏది?",
        options: ["Monitor brightnessను స్వయంచాలకంగా పెంచడం", "Screenపై ఉన్న digital informationను speech లేదా Braille outputగా అందించడం", "Printed pageను మాత్రమే magnify చేయడం", "కంటి pressureను కొలవడం"],
        correct: 1,
        explanation: "Screen reader కంప్యూటర్ లేదా mobile screenలోని accessible digital informationను speech synthesis లేదా Braille display ద్వారా అందిస్తుంది. ఇది visually impaired usersకు digital interfacesను navigate చేయడంలో సహాయపడుతుంది."
    },
    {
        question: "Refreshable Braille display ప్రధానంగా ఏ విధమైన accessను అందిస్తుంది?",
        options: ["Printed photographsను colourలో చూపించడం", "Digital textను tactile Braille రూపంలో చదవడానికి వీలు కల్పించడం", "దూరంలోని వస్తువులను optical zoom లేకుండా చూడటం", "విద్యార్థి handwritingను సరిచేయడం"],
        correct: 1,
        explanation: "Refreshable Braille display digital textను మార్చగల tactile Braille dotsగా ప్రదర్శిస్తుంది. ఇది screen readersతో కలిసి visually impaired usersకు digital contentను స్పర్శ ద్వారా చదివే access అందిస్తుంది."
    },
    {
        question: "ఒక visually impaired విద్యార్థి పాఠశాలలో classroom నుండి laboratoryకి స్వతంత్రంగా వెళ్లడం నేర్చుకుంటున్నాడు. ఈ లక్ష్యం ప్రధానంగా ఏ విభాగానికి చెందుతుంది?",
        options: ["Functional academics", "Orientation and Mobility", "Speech therapy", "Behaviour modification"],
        correct: 1,
        explanation: "Orientation and Mobility training visually impaired individualsకు పరిసరాలను అర్థం చేసుకోవడం, మార్గాలను గుర్తించడం మరియు సురక్షితంగా స్వతంత్రంగా ఒక ప్రదేశం నుండి మరొకదానికి ప్రయాణించడం నేర్పుతుంది."
    },
    {
        question: "Orientation and Mobility trainingలో white cane యొక్క ప్రధాన educational purpose ఏది?",
        options: ["విద్యార్థి reading speedను పెంచడం", "పరిసరాల్లో సురక్షితంగా మరియు స్వతంత్రంగా కదలడానికి సహాయపడడం", "విద్యార్థి visual acuityను మెరుగుపరచడం", "Braille writingను వేగవంతం చేయడం"],
        correct: 1,
        explanation: "White cane ప్రయాణ సమయంలో obstacles, surface changes మరియు మార్గంలోని సమాచారాన్ని గుర్తించడంలో సహాయపడుతుంది. ఇది visually impaired వ్యక్తి safe మరియు independent mobilityని అభివృద్ధి చేసుకోవడానికి ఉపయోగపడుతుంది."
    },
    {
        question: "ఒక visually impaired విద్యార్థి కొత్త classroomలో furniture యొక్క స్థానాలను తెలుసుకోవాల్సి ఉంది. Orientation trainingలో మొదటగా ఏ అంశం ముఖ్యమైనది?",
        options: ["పరిసరాల spatial layoutను అర్థం చేసుకోవడం", "విద్యార్థికి ఎక్కువ homework ఇవ్వడం", "కేవలం auditory dictation ఇవ్వడం", "అన్ని tactile materials తొలగించడం"],
        correct: 0,
        explanation: "Spatial layoutను అర్థం చేసుకోవడం వల్ల విద్యార్థి classroomలో furniture, entrances, pathways మరియు ముఖ్యమైన locationsను mental mapగా నిర్మించుకోగలడు. ఇది independent navigationకు పునాది."
    },
    {
        question: "Independent Living Skills బోధనలో క్రింది వాటిలో ఏది సహజమైన విద్యా లక్ష్యం?",
        options: ["దుస్తులు ధరించడం మరియు వ్యక్తిగత పరిశుభ్రతను స్వతంత్రంగా నిర్వహించడం", "కేవలం textbook definitions గుర్తుపెట్టుకోవడం", "కేవలం oral examinationలో పాల్గొనడం", "ప్రతి కార్యకలాపానికి ఉపాధ్యాయుని సహాయం పొందడం"],
        correct: 0,
        explanation: "Independent Living Skillsలో self-care, dressing, grooming, cooking, money management మరియు household tasks వంటి రోజువారీ కార్యకలాపాలను సాధ్యమైనంత స్వతంత్రంగా నిర్వహించడం ప్రధాన లక్ష్యం."
    },
    {
        question: "ఒక విద్యార్థి వంటగదిలో వస్తువులను గుర్తించడానికి tactile labels మరియు consistent arrangementను ఉపయోగిస్తున్నాడు. ఇది ప్రధానంగా ఏ నైపుణ్యాన్ని అభివృద్ధి చేస్తుంది?",
        options: ["Independent living", "Auditory discrimination", "Speech production", "Fine-art appreciation"],
        correct: 0,
        explanation: "Tactile labels మరియు consistent arrangement వస్తువులను గుర్తించడం, కనుగొనడం మరియు ఉపయోగించడం సులభం చేస్తాయి. ఇవి visually impaired విద్యార్థి kitchenలో స్వతంత్రంగా పనిచేసే నైపుణ్యాన్ని పెంచుతాయి."
    },
    {
        question: "క్రింది వాటిలో visually impaired విద్యార్థికి accessible printను మెరుగుపరచడానికి అత్యంత సముచితమైన combination ఏది?",
        options: ["చిన్న font + తక్కువ contrast", "పెద్ద font + తగిన contrast + తగిన spacing", "decorative font + crowded layout", "faint print + glossy background"],
        correct: 1,
        explanation: "పెద్ద font, స్పష్టమైన contrast మరియు తగిన spacing print readabilityని మెరుగుపరుస్తాయి. ఈ adaptations ముఖ్యంగా residual visionను ఉపయోగించే low vision విద్యార్థులకు reading accessను సులభతరం చేస్తాయి."
    },
    {
        question: "ఒక Low Vision విద్యార్థి science diagramను సాధారణ printలో చూడలేకపోతున్నాడు. ఉపాధ్యాయుడు diagramను tactile రూపంలో అందించడంతో పాటు verbal description కూడా ఇస్తున్నాడు. ఈ విధానం ప్రధానంగా ఏ సూత్రాన్ని ప్రతిబింబిస్తుంది?",
        options: ["Multisensory access", "Competitive learning", "Behaviour extinction", "Rote memorisation"],
        correct: 0,
        explanation: "Tactile representation మరియు verbal descriptionను కలిపి ఉపయోగించడం ద్వారా ఒకే సమాచారాన్ని బహుళ sensory channels ద్వారా అందిస్తున్నారు. ఇది multisensory access సూత్రానికి ఉదాహరణ."
    },
    {
        question: "క్రింది వాటిలో DAISY format యొక్క ప్రధాన educational relevance ఏది?",
        options: ["Hearing assessment నిర్వహించడం", "Accessible digital talking booksను అందించడం", "Eye pressureను కొలవడం", "Braille dotsను manually emboss చేయడం"],
        correct: 1,
        explanation: "DAISY అంటే Digital Accessible Information System. ఇది structured accessible digital talking booksను అందించడానికి ఉపయోగపడుతుంది, తద్వారా visually impaired learners educational contentను సులభంగా access చేయగలరు."
    },
    {
        question: "ఒక visually impaired విద్యార్థి textbookలోని long passagesను చదవడానికి screen reader ఉపయోగిస్తున్నాడు. కానీ page layout, headings మరియు tables అర్థం చేసుకోవడం కష్టంగా ఉంది. ఈ పరిస్థితిలో ఉపాధ్యాయుడు ముందుగా ఏ adaptationపై దృష్టి పెట్టాలి?",
        options: ["Accessible structured digital material అందించడం", "అన్ని headings తొలగించడం", "కేవలం handwritten notes ఇవ్వడం", "విద్యార్థికి text accessను నిరాకరించడం"],
        correct: 0,
        explanation: "Screen readers structured digital documentsలో headings, tables మరియు navigation elementsను సరిగ్గా access చేయగలిగితే information structure స్పష్టమవుతుంది. అందువల్ల accessible structured material అవసరం."
    },
    {
        question: "క్రింది వాటిలో functional academicsకు అత్యంత సరైన ఉదాహరణ ఏది?",
        options: ["డబ్బు విలువలను గుర్తించి దుకాణంలో సరైన మొత్తాన్ని చెల్లించడం", "కేవలం నిర్వచనాలను కంఠస్థం చేయడం", "కేవలం poetry recitation చేయడం", "కేవలం handwriting speedను కొలవడం"],
        correct: 0,
        explanation: "Functional academicsలో చదువు, గణితం మరియు ఇతర academic skillsను రోజువారీ జీవితంలో ఉపయోగించడం ముఖ్యమైనది. డబ్బు విలువలను గుర్తించి సరైన మొత్తాన్ని చెల్లించడం దానికి ప్రత్యక్ష ఉదాహరణ."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి: i) Low vision ఉన్న విద్యార్థులకు visual efficiencyని పెంచడానికి optical/non-optical aids ఉపయోగించవచ్చు. ii) Low vision ఉన్న ప్రతి విద్యార్థి Braille మాత్రమే ఉపయోగించాలి. iii) Lighting మరియు contrastలో మార్పులు కొంతమంది low vision విద్యార్థులకు ఉపయోగకరంగా ఉండవచ్చు. సరైన సమాధానాన్ని ఎంచుకోండి.",
        options: ["i మాత్రమే", "ii మాత్రమే", "i మరియు iii మాత్రమే", "i, ii మరియు iii"],
        correct: 2,
        explanation: "Optical మరియు non-optical aids, అలాగే lighting మరియు contrast adaptations, కొంతమంది low vision విద్యార్థులకు ఉపయోగపడతాయి. అయితే ప్రతి low vision విద్యార్థికి Braille మాత్రమే తప్పనిసరి కాదు."
    },
    {
        question: "క్రింది వాటిని సరైన విధంగా జతపరచండి. i) Functional Vision Assessment ii) Learning Media Assessment iii) Screen Reader iv) Refreshable Braille Display. a) Digital informationను speech/Braille outputగా access చేయడం b) Learning కోసం ఉపయోగించాల్సిన sensory mediumను నిర్ణయించడం c) Functional situationsలో మిగిలిన దృష్టి వినియోగాన్ని అంచనా వేయడం d) Digital textను tactile Brailleగా అందించడం",
        options: ["i-c, ii-b, iii-a, iv-d", "i-b, ii-c, iii-d, iv-a", "i-c, ii-a, iii-b, iv-d", "i-d, ii-b, iii-a, iv-c"],
        correct: 0,
        explanation: "FVA functional visionను అంచనా వేస్తుంది; LMA learning mediumను నిర్ణయిస్తుంది. Screen reader digital informationను speech లేదా Brailleగా అందిస్తుంది; refreshable display tactile Brailleను చూపిస్తుంది."
    },
    {
        question: "క్రింది వాటిని eye structure — function ప్రకారం సరైన విధంగా జతపరచండి. i) Cornea ii) Iris iii) Retina iv) Optic nerve. a) Visual impulsesను brain వైపు తీసుకెళ్తుంది b) కాంతి ప్రవేశాన్ని నియంత్రిస్తుంది c) కాంతిని bend చేసి eyeలోకి ప్రవేశించడంలో సహాయపడుతుంది d) Light stimuliని neural signalsగా మార్చే photoreceptors కలిగి ఉంటుంది",
        options: ["i-c, ii-b, iii-d, iv-a", "i-b, ii-c, iii-a, iv-d", "i-d, ii-b, iii-c, iv-a", "i-c, ii-d, iii-b, iv-a"],
        correct: 0,
        explanation: "Cornea కాంతిని refract చేస్తుంది; iris pupil ద్వారా కాంతి ప్రవేశాన్ని నియంత్రిస్తుంది; retina photoreceptorsను కలిగి ఉంటుంది; optic nerve visual impulsesను brain వైపు తీసుకెళ్తుంది."
    },
    {
        question: "ఒక visually impaired విద్యార్థికి independent travel నేర్పుతున్నప్పుడు క్రింది చర్యలు పరిగణించబడ్డాయి: i) పరిసరాల గురించి spatial information ఇవ్వడం ii) సురక్షితమైన cane technique అభ్యసించడం iii) వివిధ మార్గాల్లో ప్రయాణాన్ని practice చేయించడం iv) ప్రతి ప్రయాణంలో ఉపాధ్యాయుడు విద్యార్థిని physicalగా guide చేయడం. సముచితమైన చర్యలను ఎంచుకోండి.",
        options: ["i, ii మాత్రమే", "ii, iii మాత్రమే", "i, ii, iii మాత్రమే", "i, iii, iv మాత్రమే"],
        correct: 2,
        explanation: "Independent mobility కోసం spatial information, safe cane techniques మరియు varied route practice అవసరం. ప్రతి ప్రయాణంలో physical guidance ఇవ్వడం independence అభివృద్ధికి అనుకూలమైన ప్రధాన విధానం కాదు."
    },
    {
        question: "క్రింది ప్రకటనలను పరిశీలించండి: a) Braille ఒక tactile reading and writing system. b) Visually impaired విద్యార్థులందరికీ ఒకే learning medium తప్పనిసరిగా ఉండాలి. c) Learning Media Assessment విద్యార్థికి print, Braille లేదా ఇతర sensory accessలో ఏది సముచితమో నిర్ణయించడంలో సహాయపడుతుంది. d) Accessible digital materials visually impaired విద్యార్థులకు curriculum accessను మెరుగుపరచగలవు. సరైన సమాధానం:",
        options: ["a, c మాత్రమే", "b, d మాత్రమే", "a, c, d మాత్రమే", "a, b, c, d"],
        correct: 2,
        explanation: "Braille tactile reading-writing system. LMA వ్యక్తిగత learning mediumను నిర్ణయించడంలో సహాయపడుతుంది. Accessible digital materials curriculum accessను పెంచుతాయి; ఒకే medium అందరికీ తప్పనిసరి కాదు."
    },
    {
        question: "ఒక visually impaired విద్యార్థి Social Scienceలో maps, Mathematicsలో geometrical figures మరియు Scienceలో diagrams నేర్చుకోవాలి. క్రింది వాటిలో సమగ్రంగా అత్యంత సముచితమైన instructional approach ఏది?",
        options: ["ప్రతి విషయానికి oral explanation మాత్రమే ఇవ్వడం", "Tactile graphics, verbal description మరియు accessible digital resourcesను అవసరానికి అనుగుణంగా ఉపయోగించడం", "Visual diagrams ఉన్న అన్ని topicsను curriculum నుండి తొలగించడం", "విద్యార్థికి written examination నుండి మినహాయింపు ఇవ్వడం"],
        correct: 1,
        explanation: "వివిధ విషయాల్లో spatial మరియు visual informationను accessible చేయడానికి tactile graphics, verbal descriptions మరియు digital resourcesను అవసరానికి అనుగుణంగా కలిపి ఉపయోగించడం సమగ్ర instructional approach."
    }
];