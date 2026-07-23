// ---------------------------------------------------------------------------
// LearnFlow AI — Subject-Adaptive Content Layer
// Provides per-subject mock data for all 6 supported subjects.
// Used across: Dashboard, LearningPath, Lesson, ConceptGraph,
//              AiTutor, StudentProfile, TeacherDashboard
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// RECOMMENDED LESSONS (per subject — shown on Student Dashboard)
// ---------------------------------------------------------------------------
export const recommendedLessonsBySubject = {
  Mathematics: [
    { id: 'g1', title: 'Factoring Quadratic Equations', subject: 'Mathematics', duration: '10 min', difficulty: 'Grade-Level', progress: 40, thumbnailFrom: '#4f5dff', thumbnailTo: '#8b5cf6' },
    { id: 'f1', title: 'Fundamentals of Variables & Expressions', subject: 'Mathematics', duration: '10 min', difficulty: 'Foundational', progress: 100, thumbnailFrom: '#f59e0b', thumbnailTo: '#4f5dff' },
    { id: 'a1', title: "Polynomial Systems & Vieta's Formulas", subject: 'Mathematics', duration: '10 min', difficulty: 'Advanced', progress: 0, thumbnailFrom: '#10b981', thumbnailTo: '#ef4444' },
  ],
  Science: [
    { id: 'sc-g1', title: 'Photosynthesis & Life Processes', subject: 'Science', duration: '10 min', difficulty: 'Grade-Level', progress: 55, thumbnailFrom: '#10b981', thumbnailTo: '#22c55e' },
    { id: 'sc-f1', title: 'States of Matter & Properties', subject: 'Science', duration: '10 min', difficulty: 'Foundational', progress: 100, thumbnailFrom: '#f59e0b', thumbnailTo: '#10b981' },
    { id: 'sc-a1', title: 'Chemical Kinetics & Equilibrium', subject: 'Science', duration: '10 min', difficulty: 'Advanced', progress: 0, thumbnailFrom: '#6366f1', thumbnailTo: '#8b5cf6' },
  ],
  Physics: [
    { id: 'ph-g1', title: "Newton's Laws of Motion", subject: 'Physics', duration: '10 min', difficulty: 'Grade-Level', progress: 35, thumbnailFrom: '#4f5dff', thumbnailTo: '#0ea5e9' },
    { id: 'ph-f1', title: 'Speed, Distance & Time Basics', subject: 'Physics', duration: '10 min', difficulty: 'Foundational', progress: 100, thumbnailFrom: '#f59e0b', thumbnailTo: '#ef4444' },
    { id: 'ph-a1', title: 'Kinematics & Equations of Motion', subject: 'Physics', duration: '10 min', difficulty: 'Advanced', progress: 0, thumbnailFrom: '#10b981', thumbnailTo: '#4f5dff' },
  ],
  Chemistry: [
    { id: 'ch-g1', title: 'Acids, Bases & pH Scale', subject: 'Chemistry', duration: '10 min', difficulty: 'Grade-Level', progress: 60, thumbnailFrom: '#ef4444', thumbnailTo: '#f59e0b' },
    { id: 'ch-f1', title: 'Atoms, Molecules & Chemical Symbols', subject: 'Chemistry', duration: '10 min', difficulty: 'Foundational', progress: 100, thumbnailFrom: '#22c55e', thumbnailTo: '#10b981' },
    { id: 'ch-a1', title: 'Organic Chemistry & Hydrocarbons', subject: 'Chemistry', duration: '10 min', difficulty: 'Advanced', progress: 0, thumbnailFrom: '#8b5cf6', thumbnailTo: '#4f5dff' },
  ],
  Biology: [
    { id: 'bi-g1', title: 'Cell Structure & Organelles', subject: 'Biology', duration: '10 min', difficulty: 'Grade-Level', progress: 70, thumbnailFrom: '#10b981', thumbnailTo: '#22c55e' },
    { id: 'bi-f1', title: 'Parts of a Plant & Basic Classification', subject: 'Biology', duration: '10 min', difficulty: 'Foundational', progress: 100, thumbnailFrom: '#f59e0b', thumbnailTo: '#22c55e' },
    { id: 'bi-a1', title: "Genetics & Mendel's Laws", subject: 'Biology', duration: '10 min', difficulty: 'Advanced', progress: 10, thumbnailFrom: '#6366f1', thumbnailTo: '#8b5cf6' },
  ],
  English: [
    { id: 'en-g1', title: 'Active & Passive Voice', subject: 'English', duration: '10 min', difficulty: 'Grade-Level', progress: 45, thumbnailFrom: '#6366f1', thumbnailTo: '#4f5dff' },
    { id: 'en-f1', title: 'Grammar Basics: Nouns, Verbs & Adjectives', subject: 'English', duration: '10 min', difficulty: 'Foundational', progress: 100, thumbnailFrom: '#f59e0b', thumbnailTo: '#6366f1' },
    { id: 'en-a1', title: 'Critical Reading & Comprehension', subject: 'English', duration: '10 min', difficulty: 'Advanced', progress: 0, thumbnailFrom: '#8b5cf6', thumbnailTo: '#4f5dff' },
  ],
}

// ---------------------------------------------------------------------------
// RECENT ACTIVITY (per subject)
// ---------------------------------------------------------------------------
export const recentActivityBySubject = {
  Mathematics: [
    { id: 1, text: 'Completed "Fundamentals of Variables"', time: '2h ago', kind: 'lesson' },
    { id: 2, text: 'Scored 5/5 in 5-Q Diagnostic Quiz', time: 'Yesterday', kind: 'quiz' },
    { id: 3, text: 'Asked AI Tutor about discriminant D < 0', time: 'Yesterday', kind: 'ai' },
    { id: 4, text: 'Earned "Concept Master" badge', time: '2 days ago', kind: 'badge' },
  ],
  Science: [
    { id: 1, text: 'Completed "States of Matter" micro-lesson', time: '1h ago', kind: 'lesson' },
    { id: 2, text: 'Scored 4/5 in Science Diagnostic Quiz', time: 'Yesterday', kind: 'quiz' },
    { id: 3, text: 'Asked AI Tutor: Why does photosynthesis release O₂?', time: 'Yesterday', kind: 'ai' },
    { id: 4, text: 'Earned "Science Explorer" badge', time: '3 days ago', kind: 'badge' },
  ],
  Physics: [
    { id: 1, text: 'Completed "Speed & Distance Basics" lesson', time: '3h ago', kind: 'lesson' },
    { id: 2, text: 'Scored 3/5 in Physics Diagnostic Quiz', time: 'Yesterday', kind: 'quiz' },
    { id: 3, text: "Asked AI Tutor: Difference between velocity and speed", time: 'Yesterday', kind: 'ai' },
    { id: 4, text: 'Earned "Force Master" badge', time: '2 days ago', kind: 'badge' },
  ],
  Chemistry: [
    { id: 1, text: 'Completed "Atoms & Molecules" micro-lesson', time: '2h ago', kind: 'lesson' },
    { id: 2, text: 'Scored 4/5 in Chemistry Diagnostic Quiz', time: 'Yesterday', kind: 'quiz' },
    { id: 3, text: 'Asked AI Tutor: What makes an acid acidic?', time: 'Yesterday', kind: 'ai' },
    { id: 4, text: 'Earned "Periodic Table Pro" badge', time: '4 days ago', kind: 'badge' },
  ],
  Biology: [
    { id: 1, text: 'Completed "Plant Classification" micro-lesson', time: '1h ago', kind: 'lesson' },
    { id: 2, text: 'Scored 5/5 in Biology Diagnostic Quiz', time: 'Yesterday', kind: 'quiz' },
    { id: 3, text: 'Asked AI Tutor: How does mitosis differ from meiosis?', time: 'Yesterday', kind: 'ai' },
    { id: 4, text: 'Earned "Cell Biologist" badge', time: '2 days ago', kind: 'badge' },
  ],
  English: [
    { id: 1, text: 'Completed "Grammar Basics" micro-lesson', time: '2h ago', kind: 'lesson' },
    { id: 2, text: 'Scored 4/5 in English Diagnostic Quiz', time: 'Yesterday', kind: 'quiz' },
    { id: 3, text: 'Asked AI Tutor: How to write a topic sentence?', time: 'Yesterday', kind: 'ai' },
    { id: 4, text: 'Earned "Essay Writer" badge', time: '3 days ago', kind: 'badge' },
  ],
}

// ---------------------------------------------------------------------------
// UPCOMING QUIZ (per subject)
// ---------------------------------------------------------------------------
export const upcomingQuizBySubject = {
  Mathematics: { title: 'NCERT Class 10: Quadratic Equations Test', date: 'Tomorrow, 10:30 AM', questions: 15, duration: '20 min' },
  Science: { title: 'NCERT Class 10: Life Processes Assessment', date: 'Tomorrow, 11:00 AM', questions: 15, duration: '20 min' },
  Physics: { title: "NCERT Class 9: Newton's Laws & Motion Test", date: 'Tomorrow, 9:30 AM', questions: 15, duration: '20 min' },
  Chemistry: { title: 'NCERT Class 10: Acids, Bases & Salts Quiz', date: 'Friday, 10:00 AM', questions: 15, duration: '20 min' },
  Biology: { title: 'NCERT Class 10: Genetics & Heredity Test', date: 'Tomorrow, 10:00 AM', questions: 15, duration: '20 min' },
  English: { title: 'NCERT Class 10: Grammar & Writing Skills Test', date: 'Thursday, 2:00 PM', questions: 15, duration: '20 min' },
}

// ---------------------------------------------------------------------------
// MOTIVATIONAL QUOTES (per subject)
// ---------------------------------------------------------------------------
export const motivationalQuotesBySubject = {
  Mathematics: [
    'Small steps every day add up to big leaps in conceptual understanding.',
    'Confusion is just the feeling right before you understand something.',
    "Progress, not perfection — you're mastering root concepts step by step.",
    'Every expert mathematician was once a beginner who kept asking doubts.',
  ],
  Science: [
    'Science is not about memorizing facts — it is about asking the right questions.',
    'Every experiment is a conversation with the universe.',
    'Curiosity is the engine of scientific discovery.',
    'The more you observe, the more science reveals itself to you.',
  ],
  Physics: [
    'Physics is the poetry of the universe expressed in equations.',
    'Every force has a story — Newton taught us to listen.',
    'Understanding motion unlocks the language of nature itself.',
    'Physics is not magic; it is the precise logic behind every phenomenon.',
  ],
  Chemistry: [
    'Chemistry is everything around you — once you see it, you cannot unsee it.',
    'Every element on the periodic table has a unique story to tell.',
    'Reactions are relationships — chemistry is the science of connections.',
    'Understanding bonds helps you understand how the world holds together.',
  ],
  Biology: [
    'Life is the most complex system we know — studying it is a privilege.',
    'Every cell in your body is a marvel of biological engineering.',
    'Biology teaches you that every organism has something to teach us.',
    'Genetics connects you to every living thing that has ever existed.',
  ],
  English: [
    'Words are the tools of thought — master them, master your mind.',
    'Reading is the quiet revolution that never stops.',
    'Good writing is clear thinking made visible.',
    'Every story you read expands the map of who you can become.',
  ],
}

// ---------------------------------------------------------------------------
// LEARNING PATHS (3 levels × 3 lessons × per subject)
// Each lesson has: id, title, duration, difficulty, progress, ncert,
//                  objectives, summary, notes, flashcards, practice(3 items)
// ---------------------------------------------------------------------------
export const subjectLearningPaths = {

  // ── SCIENCE ──────────────────────────────────────────────────────────────
  Science: {
    Foundational: [
      {
        id: 'sc-f1', title: '1. States of Matter & Their Properties', duration: '10 min', difficulty: 'Foundational', progress: 100,
        ncert: { grade: 'Class 9', chapter: 'Chapter 1', topic: 'Matter in Our Surroundings' },
        objectives: ['Identify the 3 main states of matter', 'Describe particle arrangement in each state', 'Explain interconversion of states'],
        summary: 'All matter exists as solid, liquid, or gas, differentiated by the kinetic energy and spacing of their constituent particles.',
        notes: ['Solids have fixed shape and volume due to tightly packed particles.', 'Liquids have fixed volume but take the shape of their container.', 'Gases have neither fixed shape nor volume — particles move freely.'],
        flashcards: [{ front: 'Define evaporation', back: 'Conversion of liquid to gas below boiling point, from the surface.' }, { front: 'What is sublimation?', back: 'Direct conversion of solid to gas without passing through liquid state (e.g. camphor, dry ice).' }],
        practice: [
          { id: 'sc-fp1', question: 'Which state of matter has a definite volume but no definite shape?', options: ['Solid', 'Liquid', 'Gas', 'Plasma'], answer: 1, explanation: 'Liquids take the shape of their container but maintain a fixed volume.', ncert: { grade: 'Class 9', chapter: 'Chapter 1', topic: 'States of Matter' } },
          { id: 'sc-fp2', question: 'The process of conversion of gas to liquid is called:', options: ['Evaporation', 'Sublimation', 'Condensation', 'Fusion'], answer: 2, explanation: 'Condensation is the phase change from gas to liquid.', ncert: { grade: 'Class 9', chapter: 'Chapter 1', topic: 'Phase Changes' } },
          { id: 'sc-fp3', question: 'Which property allows gases to be compressed easily?', options: ['High density', 'Fixed volume', 'Large intermolecular spaces', 'Strong intermolecular forces'], answer: 2, explanation: 'Gases have large spaces between particles, making them highly compressible.', ncert: { grade: 'Class 9', chapter: 'Chapter 1', topic: 'Gas Properties' } },
        ]
      },
      {
        id: 'sc-f2', title: '2. The Fundamental Unit of Life — The Cell', duration: '10 min', difficulty: 'Foundational', progress: 60,
        ncert: { grade: 'Class 9', chapter: 'Chapter 5', topic: 'The Fundamental Unit of Life' },
        objectives: ['Understand the cell as the basic unit of life', 'Differentiate prokaryotic and eukaryotic cells', 'Identify key cell organelles and their functions'],
        summary: 'The cell is the smallest structural and functional unit of life. All living organisms are composed of one or more cells.',
        notes: ['Prokaryotic cells lack a membrane-bound nucleus (e.g. bacteria).', 'Eukaryotic cells have a true nucleus (e.g. plant and animal cells).', 'Mitochondria generate ATP; chloroplasts perform photosynthesis.'],
        flashcards: [{ front: 'Function of the nucleus', back: 'Controls all cellular activities; contains genetic information (DNA).' }, { front: "What is the cell's powerhouse?", back: 'Mitochondria — generates ATP through cellular respiration.' }],
        practice: [
          { id: 'sc-fp4', question: 'Which organelle is responsible for protein synthesis?', options: ['Mitochondria', 'Ribosome', 'Golgi Body', 'Vacuole'], answer: 1, explanation: 'Ribosomes are the sites of protein synthesis in the cell.', ncert: { grade: 'Class 9', chapter: 'Chapter 5', topic: 'Organelles' } },
          { id: 'sc-fp5', question: 'A cell without a membrane-bound nucleus is called:', options: ['Eukaryotic', 'Multicellular', 'Prokaryotic', 'Somatic'], answer: 2, explanation: 'Prokaryotic cells (like bacteria) lack a membrane-enclosed nucleus.', ncert: { grade: 'Class 9', chapter: 'Chapter 5', topic: 'Cell Types' } },
          { id: 'sc-fp6', question: 'Which structure controls what enters and exits the cell?', options: ['Cell wall', 'Cell membrane', 'Nucleus', 'Cytoplasm'], answer: 1, explanation: 'The cell membrane is selectively permeable — it controls the movement of substances in and out.', ncert: { grade: 'Class 9', chapter: 'Chapter 5', topic: 'Cell Membrane' } },
        ]
      },
      {
        id: 'sc-f3', title: '3. Basic Nutrition & Food Components', duration: '10 min', difficulty: 'Foundational', progress: 0,
        ncert: { grade: 'Class 7', chapter: 'Chapter 2', topic: 'Nutrition in Plants and Animals' },
        objectives: ['Identify the 6 major nutrient groups', 'Distinguish autotrophic and heterotrophic nutrition', 'Understand the role of vitamins and minerals'],
        summary: 'All living organisms require nutrients for energy, growth, and repair. Nutrition may be autotrophic (self-feeding) or heterotrophic.',
        notes: ['Carbohydrates, fats, and proteins provide energy.', 'Vitamins and minerals regulate body processes.', 'Water is essential for all metabolic reactions.'],
        flashcards: [{ front: 'Autotrophic nutrition', back: 'Organism manufactures its own food using sunlight (photosynthesis) or chemicals.' }, { front: 'Deficiency disease for Vitamin C', back: 'Scurvy — causes bleeding gums and weak connective tissue.' }],
        practice: [
          { id: 'sc-fp7', question: 'Which nutrient provides the most energy per gram?', options: ['Carbohydrates', 'Proteins', 'Fats', 'Vitamins'], answer: 2, explanation: 'Fats yield approximately 9 kcal/g, compared to 4 kcal/g for carbohydrates and proteins.', ncert: { grade: 'Class 7', chapter: 'Chapter 2', topic: 'Nutrients & Energy' } },
          { id: 'sc-fp8', question: 'Plants prepare their own food using:', options: ['Respiration', 'Photosynthesis', 'Digestion', 'Fermentation'], answer: 1, explanation: 'Plants use sunlight, CO₂, and water to prepare glucose through photosynthesis.', ncert: { grade: 'Class 7', chapter: 'Chapter 1', topic: 'Photosynthesis' } },
          { id: 'sc-fp9', question: 'Which vitamin is produced when skin is exposed to sunlight?', options: ['Vitamin A', 'Vitamin B12', 'Vitamin C', 'Vitamin D'], answer: 3, explanation: 'Vitamin D is synthesized in the skin when exposed to UV radiation from sunlight.', ncert: { grade: 'Class 7', chapter: 'Chapter 2', topic: 'Vitamins' } },
        ]
      },
    ],
    'Grade-Level': [
      {
        id: 'sc-g1', title: '1. Photosynthesis & Life Processes in Plants', duration: '10 min', difficulty: 'Grade-Level', progress: 55,
        ncert: { grade: 'Class 10', chapter: 'Chapter 6', topic: 'Life Processes: Nutrition' },
        objectives: ['Write the balanced photosynthesis equation', 'Describe the role of chlorophyll and stomata', 'Explain factors affecting rate of photosynthesis'],
        summary: 'Photosynthesis converts light energy, CO₂, and water into glucose and oxygen using chlorophyll as the pigment.',
        notes: ['Equation: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂', 'Chlorophyll absorbs red and blue light, reflecting green.', 'Rate is affected by light intensity, CO₂ concentration, and temperature.'],
        flashcards: [{ front: 'Raw materials for photosynthesis', back: 'CO₂ (from stomata) and H₂O (from roots via xylem).' }, { front: 'Where does photosynthesis occur?', back: 'In chloroplasts, mainly in the mesophyll cells of leaves.' }],
        practice: [
          { id: 'sc-gp1', question: 'What gas is produced as a by-product of photosynthesis?', options: ['Carbon dioxide', 'Nitrogen', 'Oxygen', 'Hydrogen'], answer: 2, explanation: 'Water molecules are split during the light reactions, releasing O₂ as a by-product.', ncert: { grade: 'Class 10', chapter: 'Chapter 6', topic: 'Photosynthesis' } },
          { id: 'sc-gp2', question: 'Chlorophyll is primarily located in which organelle?', options: ['Mitochondria', 'Ribosome', 'Chloroplast', 'Nucleus'], answer: 2, explanation: 'Chloroplasts contain chlorophyll, the green pigment that captures light energy.', ncert: { grade: 'Class 10', chapter: 'Chapter 6', topic: 'Chloroplast' } },
          { id: 'sc-gp3', question: 'Which factor most directly limits photosynthesis at low light levels?', options: ['Temperature', 'Light intensity', 'Water availability', 'Soil minerals'], answer: 1, explanation: 'At low light intensity, the light-dependent reactions cannot proceed at full rate.', ncert: { grade: 'Class 10', chapter: 'Chapter 6', topic: 'Limiting Factors' } },
        ]
      },
      {
        id: 'sc-g2', title: '2. Human Digestive System', duration: '10 min', difficulty: 'Grade-Level', progress: 0,
        ncert: { grade: 'Class 10', chapter: 'Chapter 6', topic: 'Life Processes: Digestion' },
        objectives: ['Trace the path of food through the alimentary canal', 'Identify secretions at each digestive stage', 'Explain absorption in the small intestine'],
        summary: 'Digestion breaks food into absorbable molecules through mechanical and chemical processes along the alimentary canal.',
        notes: ['Saliva (amylase) breaks starch → maltose.', 'Stomach HCl activates pepsin; churning provides mechanical digestion.', 'Small intestine: villi absorb nutrients directly into blood.'],
        flashcards: [{ front: 'Enzyme in saliva', back: 'Salivary amylase — begins starch digestion in the mouth.' }, { front: 'Function of bile', back: 'Emulsifies fats into small droplets for easier lipase digestion (produced in liver, stored in gallbladder).' }],
        practice: [
          { id: 'sc-gp4', question: 'Where does chemical digestion of starch begin?', options: ['Stomach', 'Small intestine', 'Mouth', 'Large intestine'], answer: 2, explanation: 'Salivary amylase in the mouth begins breaking down starch into maltose.', ncert: { grade: 'Class 10', chapter: 'Chapter 6', topic: 'Digestion' } },
          { id: 'sc-gp5', question: 'Which organ produces bile for fat digestion?', options: ['Pancreas', 'Stomach', 'Gallbladder', 'Liver'], answer: 3, explanation: 'Bile is produced by the liver and stored in the gallbladder before release into the small intestine.', ncert: { grade: 'Class 10', chapter: 'Chapter 6', topic: 'Bile & Fat Digestion' } },
          { id: 'sc-gp6', question: 'Absorption of nutrients mainly occurs in the:', options: ['Stomach', 'Large intestine', 'Small intestine', 'Esophagus'], answer: 2, explanation: 'The small intestine has villi and microvilli that vastly increase surface area for nutrient absorption.', ncert: { grade: 'Class 10', chapter: 'Chapter 6', topic: 'Absorption' } },
        ]
      },
      {
        id: 'sc-g3', title: '3. Periodic Classification of Elements', duration: '10 min', difficulty: 'Grade-Level', progress: 0,
        ncert: { grade: 'Class 10', chapter: 'Chapter 5', topic: 'Periodic Classification of Elements' },
        objectives: ['Understand the basis of the Modern Periodic Table', 'Predict properties based on group and period trends', 'Identify valence electrons for elements in groups 1–18'],
        summary: "Mendeleev's early table arranged elements by atomic mass; the Modern Periodic Table arranges them by atomic number.",
        notes: ['Groups (vertical columns): same valence electrons → similar properties.', 'Periods (horizontal rows): same number of electron shells.', 'Metallic character decreases left-to-right and increases top-to-bottom.'],
        flashcards: [{ front: 'Atomic number definition', back: 'Number of protons in the nucleus; uniquely identifies each element.' }, { front: 'Valence electrons for Group 1', back: '1 valence electron → highly reactive metals (e.g. Na, K).' }],
        practice: [
          { id: 'sc-gp7', question: 'What property forms the basis of the Modern Periodic Table?', options: ['Atomic mass', 'Atomic number', 'Valency', 'Reactivity'], answer: 1, explanation: 'Elements are arranged in increasing order of atomic number (number of protons).', ncert: { grade: 'Class 10', chapter: 'Chapter 5', topic: 'Modern Periodic Table' } },
          { id: 'sc-gp8', question: 'Elements in the same group of the periodic table have the same:', options: ['Atomic mass', 'Number of protons', 'Number of valence electrons', 'Atomic radius'], answer: 2, explanation: 'All elements in a group share the same number of valence electrons, giving similar chemical behavior.', ncert: { grade: 'Class 10', chapter: 'Chapter 5', topic: 'Group Properties' } },
          { id: 'sc-gp9', question: 'Which of the following is a property of metals?', options: ['Poor conductor of heat', 'Non-lustrous', 'Malleable and ductile', 'Brittle'], answer: 2, explanation: 'Metals are generally malleable (can be hammered into sheets) and ductile (drawn into wires).', ncert: { grade: 'Class 10', chapter: 'Chapter 3', topic: 'Metals and Non-metals' } },
        ]
      },
    ],
    Advanced: [
      {
        id: 'sc-a1', title: '1. Chemical Kinetics & Rate of Reaction', duration: '10 min', difficulty: 'Advanced', progress: 0,
        ncert: { grade: 'Class 11', chapter: 'Chapter 7', topic: 'Equilibrium & Reaction Rates' },
        objectives: ['Define rate of reaction and factors that affect it', 'Apply the Law of Mass Action', 'Explain activation energy and catalysts'],
        summary: 'Reaction rate measures how fast reactants convert to products. Catalysts lower activation energy without being consumed.',
        notes: ['Rate = Δ[product]/Δt = –Δ[reactant]/Δt', 'Higher temperature → greater kinetic energy → faster rate.', 'Catalyst provides an alternative reaction pathway with lower Ea.'],
        flashcards: [{ front: 'Activation energy (Ea)', back: 'Minimum energy required for reactants to form products.' }, { front: 'Effect of catalyst on equilibrium', back: 'Catalyst speeds up both forward and reverse reactions equally; does not shift equilibrium.' }],
        practice: [
          { id: 'sc-ap1', question: 'Which factor does NOT affect the rate of a chemical reaction?', options: ['Temperature', 'Concentration of reactants', 'Symbol of the element', 'Presence of a catalyst'], answer: 2, explanation: 'The symbol of an element is a notation convention, not a physical factor affecting reaction rate.', ncert: { grade: 'Class 11', chapter: 'Chapter 7', topic: 'Factors Affecting Rate' } },
          { id: 'sc-ap2', question: 'A catalyst increases reaction rate by:', options: ['Increasing reactant concentration', 'Lowering activation energy', 'Increasing temperature', 'Reducing product formation'], answer: 1, explanation: 'Catalysts provide an alternate pathway with lower activation energy, speeding up the reaction.', ncert: { grade: 'Class 11', chapter: 'Chapter 7', topic: 'Catalysis' } },
          { id: 'sc-ap3', question: 'For the reaction A + B → C, doubling [A] doubles the rate. This is:', options: ['Zero order in A', 'First order in A', 'Second order in A', 'Third order overall'], answer: 1, explanation: 'If rate doubles when [A] doubles, rate ∝ [A]¹ — first-order dependence on A.', ncert: { grade: 'Class 11', chapter: 'Chapter 7', topic: 'Reaction Orders' } },
        ]
      },
      {
        id: 'sc-a2', title: '2. Heredity & Evolution: Darwin to Mendel', duration: '10 min', difficulty: 'Advanced', progress: 0,
        ncert: { grade: 'Class 10', chapter: 'Chapter 9', topic: 'Heredity and Evolution' },
        objectives: ["Apply Mendel's Laws of Segregation and Independent Assortment", 'Distinguish inherited and acquired traits', 'Understand natural selection and evidence for evolution'],
        summary: "Mendel's pea plant experiments established the laws of inheritance. Darwin's natural selection explains how species evolve over generations.",
        notes: ["Law of Segregation: Each parent passes only one allele for each trait to offspring.", "Law of Independent Assortment: Genes for different traits assort independently during gamete formation.", "Evolution is driven by natural selection acting on genetic variation."],
        flashcards: [{ front: 'Dominant vs Recessive allele', back: 'Dominant allele (T) masks recessive (t) in Tt genotype; recessive only expressed when homozygous (tt).' }, { front: "Mendel's Law of Segregation", back: 'Each organism carries two alleles per trait; they segregate equally into gametes.' }],
        practice: [
          { id: 'sc-ap4', question: 'In a Tt × Tt cross, what is the probability of genotype TT?', options: ['25%', '50%', '75%', '0%'], answer: 0, explanation: 'Punnett square: TT, Tt, Tt, tt → 1 TT out of 4 = 25% probability.', ncert: { grade: 'Class 10', chapter: 'Chapter 9', topic: "Mendel's Laws" } },
          { id: 'sc-ap5', question: 'Which of the following is an example of an inherited trait?', options: ['Learning to ride a bicycle', 'Scar from an injury', 'Blood type', 'Language spoken'], answer: 2, explanation: 'Blood type is genetically determined and inherited from parents; the others are acquired during life.', ncert: { grade: 'Class 10', chapter: 'Chapter 9', topic: 'Inherited Traits' } },
          { id: 'sc-ap6', question: 'Natural selection acts on variation by favouring individuals that:', options: ['Have the most mutations', 'Are best adapted to their environment', 'Reproduce sexually', 'Have the largest body size'], answer: 1, explanation: 'Natural selection preserves traits that improve survival and reproduction in a specific environment.', ncert: { grade: 'Class 10', chapter: 'Chapter 9', topic: 'Natural Selection' } },
        ]
      },
      {
        id: 'sc-a3', title: '3. Human Nervous System & Reflex Actions', duration: '10 min', difficulty: 'Advanced', progress: 0,
        ncert: { grade: 'Class 10', chapter: 'Chapter 7', topic: 'Control and Coordination' },
        objectives: ['Describe the structure of a neuron and synapse', 'Trace a reflex arc from stimulus to response', 'Distinguish between CNS and PNS'],
        summary: 'The nervous system coordinates body activities through electrical impulses transmitted along neurons. Reflex actions bypass the brain for fast responses.',
        notes: ['Neuron structure: dendrites → cell body → axon → synaptic terminal.', 'Reflex arc: receptor → sensory neuron → spinal cord → motor neuron → effector.', 'CNS (brain + spinal cord) processes information; PNS carries signals to and from CNS.'],
        flashcards: [{ front: 'What is a synapse?', back: 'The junction between two neurons where neurotransmitters carry signals across the synaptic cleft.' }, { front: 'Reflex action definition', back: 'Automatic, involuntary response to a stimulus that does not involve conscious brain processing.' }],
        practice: [
          { id: 'sc-ap7', question: 'Which part of the neuron receives incoming signals?', options: ['Axon', 'Myelin sheath', 'Dendrites', 'Synaptic knob'], answer: 2, explanation: 'Dendrites receive signals from other neurons or sensory receptors.', ncert: { grade: 'Class 10', chapter: 'Chapter 7', topic: 'Neuron Structure' } },
          { id: 'sc-ap8', question: 'In a reflex arc, the processing centre is the:', options: ['Brain', 'Receptor organ', 'Spinal cord', 'Effector muscle'], answer: 2, explanation: 'Reflex arcs are coordinated at the spinal cord level, bypassing the brain for speed.', ncert: { grade: 'Class 10', chapter: 'Chapter 7', topic: 'Reflex Arc' } },
          { id: 'sc-ap9', question: 'The brain and spinal cord together form the:', options: ['Peripheral Nervous System', 'Autonomic Nervous System', 'Central Nervous System', 'Somatic Nervous System'], answer: 2, explanation: 'CNS = brain + spinal cord; it processes and coordinates all neural information.', ncert: { grade: 'Class 10', chapter: 'Chapter 7', topic: 'CNS vs PNS' } },
        ]
      },
    ],
  },

  // ── PHYSICS ──────────────────────────────────────────────────────────────
  Physics: {
    Foundational: [
      {
        id: 'ph-f1', title: '1. Speed, Distance & Time', duration: '10 min', difficulty: 'Foundational', progress: 100,
        ncert: { grade: 'Class 9', chapter: 'Chapter 8', topic: 'Motion' },
        objectives: ['Define speed, velocity, and acceleration', 'Use the formula Speed = Distance / Time', 'Distinguish scalar and vector quantities'],
        summary: 'Speed measures how fast an object moves. Velocity adds direction. These are the building blocks of all motion analysis.',
        notes: ['Speed = Distance / Time (scalar — no direction).', 'Velocity = Displacement / Time (vector — includes direction).', 'Acceleration = Change in Velocity / Time.'],
        flashcards: [{ front: 'Formula for speed', back: 'Speed = Distance / Time (unit: m/s or km/h)' }, { front: 'Difference: speed vs velocity', back: 'Speed is scalar (magnitude only); velocity is vector (magnitude + direction).' }],
        practice: [
          { id: 'ph-fp1', question: 'A car travels 120 km in 2 hours. What is its average speed?', options: ['60 km/h', '240 km/h', '30 km/h', '120 km/h'], answer: 0, explanation: 'Speed = Distance / Time = 120 / 2 = 60 km/h.', ncert: { grade: 'Class 9', chapter: 'Chapter 8', topic: 'Speed Calculation' } },
          { id: 'ph-fp2', question: 'Which of the following is a vector quantity?', options: ['Speed', 'Distance', 'Velocity', 'Mass'], answer: 2, explanation: 'Velocity has both magnitude and direction, making it a vector quantity.', ncert: { grade: 'Class 9', chapter: 'Chapter 8', topic: 'Scalar vs Vector' } },
          { id: 'ph-fp3', question: 'If an object moves with constant velocity, its acceleration is:', options: ['Maximum', 'Zero', 'Negative', 'Variable'], answer: 1, explanation: 'Constant velocity means no change in speed or direction, so acceleration = 0.', ncert: { grade: 'Class 9', chapter: 'Chapter 8', topic: 'Uniform Motion' } },
        ]
      },
      {
        id: 'ph-f2', title: '2. Introduction to Force & Laws of Motion', duration: '10 min', difficulty: 'Foundational', progress: 40,
        ncert: { grade: 'Class 9', chapter: 'Chapter 9', topic: "Force and Laws of Motion" },
        objectives: ["State Newton's three laws of motion", 'Understand inertia and its relationship to mass', 'Apply F = ma in simple scenarios'],
        summary: "Newton's three laws form the foundation of classical mechanics — describing inertia, force-acceleration relationships, and action-reaction pairs.",
        notes: ["First Law: An object remains at rest or in uniform motion unless acted upon by an unbalanced force.", "Second Law: F = ma (Force = mass × acceleration).", "Third Law: For every action, there is an equal and opposite reaction."],
        flashcards: [{ front: "Newton's Second Law formula", back: "F = ma (Force = mass × acceleration, SI unit: Newton N)" }, { front: 'What is inertia?', back: 'The tendency of an object to resist changes to its state of rest or motion; proportional to mass.' }],
        practice: [
          { id: 'ph-fp4', question: "Newton's First Law is also called the law of:", options: ['Acceleration', 'Gravitation', 'Inertia', 'Action-Reaction'], answer: 2, explanation: "Newton's First Law describes inertia — the resistance to change in motion.", ncert: { grade: 'Class 9', chapter: 'Chapter 9', topic: "Newton's First Law" } },
          { id: 'ph-fp5', question: 'A 5 kg object is pushed with a net force of 20 N. Its acceleration is:', options: ['4 m/s²', '100 m/s²', '0.25 m/s²', '2.5 m/s²'], answer: 0, explanation: 'a = F/m = 20/5 = 4 m/s².', ncert: { grade: 'Class 9', chapter: 'Chapter 9', topic: "Newton's Second Law" } },
          { id: 'ph-fp6', question: 'When a swimmer pushes water backward, the water pushes the swimmer forward. This illustrates:', options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", 'Law of Gravity'], answer: 2, explanation: "Newton's Third Law: action (pushing water back) produces equal and opposite reaction (water pushes swimmer forward).", ncert: { grade: 'Class 9', chapter: 'Chapter 9', topic: "Newton's Third Law" } },
        ]
      },
      {
        id: 'ph-f3', title: '3. Work, Energy & Power Basics', duration: '10 min', difficulty: 'Foundational', progress: 0,
        ncert: { grade: 'Class 9', chapter: 'Chapter 11', topic: 'Work and Energy' },
        objectives: ['Define work done as W = Fd cosθ', 'Distinguish kinetic and potential energy', 'Apply the law of conservation of energy'],
        summary: 'Work is done when a force causes displacement. Energy exists in forms including kinetic (motion) and potential (stored).',
        notes: ['W = F × d × cosθ; work is zero if force is perpendicular to displacement.', 'KE = ½mv²; PE = mgh.', 'Law of Conservation of Energy: total energy in a closed system remains constant.'],
        flashcards: [{ front: 'Formula for kinetic energy', back: 'KE = ½mv² (m = mass, v = velocity)' }, { front: 'Formula for gravitational PE', back: 'PE = mgh (m = mass, g = 9.8 m/s², h = height)' }],
        practice: [
          { id: 'ph-fp7', question: 'A 2 kg ball moving at 3 m/s has kinetic energy:', options: ['9 J', '6 J', '12 J', '3 J'], answer: 0, explanation: 'KE = ½mv² = ½ × 2 × 9 = 9 J.', ncert: { grade: 'Class 9', chapter: 'Chapter 11', topic: 'Kinetic Energy' } },
          { id: 'ph-fp8', question: 'Work done is zero when force and displacement are:', options: ['Parallel', 'Anti-parallel', 'Perpendicular', 'Equal in magnitude'], answer: 2, explanation: 'W = Fd cosθ; when θ = 90°, cos90° = 0, so W = 0.', ncert: { grade: 'Class 9', chapter: 'Chapter 11', topic: 'Work Done' } },
          { id: 'ph-fp9', question: 'A 1 kg object at 10 m height (g = 10 m/s²) has potential energy:', options: ['100 J', '10 J', '1 J', '50 J'], answer: 0, explanation: 'PE = mgh = 1 × 10 × 10 = 100 J.', ncert: { grade: 'Class 9', chapter: 'Chapter 11', topic: 'Potential Energy' } },
        ]
      },
    ],
    'Grade-Level': [
      {
        id: 'ph-g1', title: "1. Newton's Laws of Motion — Applications", duration: '10 min', difficulty: 'Grade-Level', progress: 35,
        ncert: { grade: 'Class 9', chapter: 'Chapter 9', topic: 'Applications of Laws of Motion' },
        objectives: ['Solve multi-step problems using F = ma', 'Calculate momentum using p = mv', 'Apply conservation of momentum to collisions'],
        summary: 'Momentum quantifies the motion of an object. The law of conservation of momentum governs all collisions and interactions.',
        notes: ['Momentum p = mv (kg·m/s).', 'Impulse = Force × time = change in momentum.', 'Conservation of momentum: total momentum before collision = total momentum after (no external force).'],
        flashcards: [{ front: 'Momentum formula', back: 'p = mv (mass × velocity, SI unit: kg·m/s)' }, { front: 'Law of Conservation of Momentum', back: 'Total momentum of a system is constant if no net external force acts on it.' }],
        practice: [
          { id: 'ph-gp1', question: 'A 3 kg object moving at 4 m/s has momentum:', options: ['12 kg·m/s', '7 kg·m/s', '0.75 kg·m/s', '1.3 kg·m/s'], answer: 0, explanation: 'p = mv = 3 × 4 = 12 kg·m/s.', ncert: { grade: 'Class 9', chapter: 'Chapter 9', topic: 'Momentum' } },
          { id: 'ph-gp2', question: 'Two objects of equal mass collide and stick together. If one was at rest, the combined velocity is:', options: ['Same as initial', 'Half the initial', 'Double the initial', 'Zero'], answer: 1, explanation: 'Conservation of momentum: m×v = 2m×v₂ → v₂ = v/2.', ncert: { grade: 'Class 9', chapter: 'Chapter 9', topic: 'Conservation of Momentum' } },
          { id: 'ph-gp3', question: "Which of Newton's laws explains why rockets can travel in space?", options: ['First law', 'Second law', 'Third law', 'Law of gravitation'], answer: 2, explanation: "Newton's Third Law — rocket expels gas backward (action), gas pushes rocket forward (reaction).", ncert: { grade: 'Class 9', chapter: 'Chapter 9', topic: "Newton's Third Law" } },
        ]
      },
      {
        id: 'ph-g2', title: "2. Ohm's Law & Electric Circuits", duration: '10 min', difficulty: 'Grade-Level', progress: 0,
        ncert: { grade: 'Class 10', chapter: 'Chapter 12', topic: 'Electricity' },
        objectives: ["Apply Ohm's Law: V = IR", 'Calculate total resistance in series and parallel circuits', 'Understand power dissipation in resistors'],
        summary: "Ohm's Law relates voltage, current, and resistance. Circuit analysis requires distinguishing series (same current) and parallel (same voltage) configurations.",
        notes: ["Ohm's Law: V = IR (Voltage = Current × Resistance).", 'Series: R_total = R₁ + R₂ + …', 'Parallel: 1/R_total = 1/R₁ + 1/R₂ + …; same voltage across each branch.'],
        flashcards: [{ front: "Ohm's Law", back: 'V = IR (V = voltage in volts, I = current in amps, R = resistance in ohms Ω)' }, { front: 'Series vs Parallel current', back: 'Series: same current through all; Parallel: same voltage, current splits.' }],
        practice: [
          { id: 'ph-gp4', question: 'A 10 Ω resistor has 2 A flowing through it. The voltage across it is:', options: ['20 V', '5 V', '0.2 V', '12 V'], answer: 0, explanation: 'V = IR = 2 × 10 = 20 V.', ncert: { grade: 'Class 10', chapter: 'Chapter 12', topic: "Ohm's Law" } },
          { id: 'ph-gp5', question: 'Two 6 Ω resistors are connected in series. Total resistance is:', options: ['3 Ω', '12 Ω', '6 Ω', '36 Ω'], answer: 1, explanation: 'Series: R_total = 6 + 6 = 12 Ω.', ncert: { grade: 'Class 10', chapter: 'Chapter 12', topic: 'Series Circuits' } },
          { id: 'ph-gp6', question: 'Two 6 Ω resistors in parallel have total resistance:', options: ['12 Ω', '6 Ω', '3 Ω', '1 Ω'], answer: 2, explanation: '1/R = 1/6 + 1/6 = 2/6 → R = 3 Ω.', ncert: { grade: 'Class 10', chapter: 'Chapter 12', topic: 'Parallel Circuits' } },
        ]
      },
      {
        id: 'ph-g3', title: '3. Light — Reflection & Refraction', duration: '10 min', difficulty: 'Grade-Level', progress: 0,
        ncert: { grade: 'Class 10', chapter: 'Chapter 10', topic: 'Light: Reflection and Refraction' },
        objectives: ['State the laws of reflection and refraction', "Apply Snell's Law to calculate refraction angles", 'Explain formation of images in mirrors and lenses'],
        summary: 'Light travels in straight lines. Reflection follows the law of equal angles; refraction bends light at medium boundaries following Snell\'s Law.',
        notes: ['Laws of reflection: angle of incidence = angle of reflection; incident ray, reflected ray, and normal are coplanar.', "Snell's Law: n₁sin(θ₁) = n₂sin(θ₂).", 'Convex mirror: always virtual, erect, diminished image.'],
        flashcards: [{ front: "Snell's Law", back: 'n₁sin(θ₁) = n₂sin(θ₂) — relates angles of incidence and refraction with refractive indices.' }, { front: 'Real vs Virtual image', back: 'Real: light rays actually converge (can project). Virtual: rays appear to diverge from a point (e.g. mirror image).' }],
        practice: [
          { id: 'ph-gp7', question: 'The angle of reflection equals the angle of incidence. This is the law of:', options: ['Refraction', 'Diffraction', 'Reflection', 'Transmission'], answer: 2, explanation: 'The first law of reflection states the angle of incidence equals the angle of reflection.', ncert: { grade: 'Class 10', chapter: 'Chapter 10', topic: 'Laws of Reflection' } },
          { id: 'ph-gp8', question: 'When light passes from water (n=1.33) to air (n=1), it bends:', options: ['Toward the normal', 'Away from the normal', 'Along the normal', 'It does not bend'], answer: 1, explanation: 'Going to a less dense medium (lower n), light bends away from the normal.', ncert: { grade: 'Class 10', chapter: 'Chapter 10', topic: 'Refraction' } },
          { id: 'ph-gp9', question: 'A convex mirror always produces an image that is:', options: ['Real and inverted', 'Real and erect', 'Virtual, erect, and diminished', 'Virtual, inverted, and magnified'], answer: 2, explanation: 'Convex mirrors always produce virtual, erect, and smaller images regardless of object position.', ncert: { grade: 'Class 10', chapter: 'Chapter 10', topic: 'Convex Mirror Images' } },
        ]
      },
    ],
    Advanced: [
      {
        id: 'ph-a1', title: '1. Kinematics: Equations of Motion in a Plane', duration: '10 min', difficulty: 'Advanced', progress: 0,
        ncert: { grade: 'Class 11', chapter: 'Chapter 3', topic: 'Motion in a Straight Line' },
        objectives: ['Apply the three equations of motion to solve problems', 'Analyze projectile motion components', 'Interpret position-time and velocity-time graphs'],
        summary: 'The three kinematic equations describe uniformly accelerated motion. Projectile motion combines horizontal uniform motion and vertical free fall.',
        notes: ['v = u + at', 's = ut + ½at²', 'v² = u² + 2as', 'Projectile: horizontal (constant v) and vertical (uniform acceleration g).'],
        flashcards: [{ front: 'Three equations of motion', back: 'v=u+at; s=ut+½at²; v²=u²+2as' }, { front: 'Range of projectile', back: 'R = u²sin(2θ) / g; maximum range at θ = 45°.' }],
        practice: [
          { id: 'ph-ap1', question: 'An object starts from rest and accelerates at 5 m/s² for 4 s. Final velocity:', options: ['20 m/s', '9 m/s', '40 m/s', '2.5 m/s'], answer: 0, explanation: 'v = u + at = 0 + 5×4 = 20 m/s.', ncert: { grade: 'Class 11', chapter: 'Chapter 3', topic: 'Equations of Motion' } },
          { id: 'ph-ap2', question: 'A ball is thrown at 45° for maximum range. Range = u²/g. If u = 20 m/s (g=10), range is:', options: ['40 m', '20 m', '10 m', '80 m'], answer: 0, explanation: 'R = u²/g = 400/10 = 40 m at θ = 45°.', ncert: { grade: 'Class 11', chapter: 'Chapter 4', topic: 'Projectile Motion' } },
          { id: 'ph-ap3', question: 'On a velocity-time graph, the slope represents:', options: ['Displacement', 'Distance', 'Acceleration', 'Speed'], answer: 2, explanation: 'Slope of v-t graph = Δv/Δt = acceleration.', ncert: { grade: 'Class 11', chapter: 'Chapter 3', topic: 'Velocity-Time Graphs' } },
        ]
      },
      {
        id: 'ph-a2', title: '2. Gravitational Force & Kepler\'s Laws', duration: '10 min', difficulty: 'Advanced', progress: 0,
        ncert: { grade: 'Class 11', chapter: 'Chapter 8', topic: 'Gravitation' },
        objectives: ["Apply Newton's Universal Law of Gravitation", "State and verify Kepler's three laws of planetary motion", 'Calculate escape velocity'],
        summary: "Newton's gravitational law governs all masses. Kepler's laws describe orbital motion that Newton's equations theoretically confirm.",
        notes: ["F = Gm₁m₂/r² (G = 6.67×10⁻¹¹ N·m²/kg²).", "Kepler 1: Planets move in ellipses with the Sun at one focus.", "Escape velocity: v_e = √(2gR) ≈ 11.2 km/s for Earth."],
        flashcards: [{ front: "Newton's Universal Gravitation", back: 'F = Gm₁m₂/r² — gravitational force is directly proportional to product of masses, inversely to r².' }, { front: "Kepler's Third Law", back: 'T² ∝ r³ — square of orbital period proportional to cube of semi-major axis.' }],
        practice: [
          { id: 'ph-ap4', question: 'If the distance between two masses doubles, gravitational force becomes:', options: ['4 times', '2 times', '¼ times', 'Unchanged'], answer: 2, explanation: 'F ∝ 1/r²; doubling r → F becomes 1/(2²) = ¼ of original.', ncert: { grade: 'Class 11', chapter: 'Chapter 8', topic: 'Gravitational Force' } },
          { id: 'ph-ap5', question: "Kepler's Second Law (equal areas in equal time) implies planets:", options: ['Travel faster near the Sun', 'Travel at constant speed', 'Move in circular orbits', 'Have equal mass'], answer: 0, explanation: 'Equal-area sweep means planets move faster at perihelion (closest to Sun) and slower at aphelion.', ncert: { grade: 'Class 11', chapter: 'Chapter 8', topic: "Kepler's Second Law" } },
          { id: 'ph-ap6', question: 'Escape velocity from Earth is approximately:', options: ['11.2 km/s', '9.8 m/s', '7.9 km/s', '3×10⁸ m/s'], answer: 0, explanation: 'Escape velocity = √(2gR) ≈ √(2×9.8×6.4×10⁶) ≈ 11.2 km/s.', ncert: { grade: 'Class 11', chapter: 'Chapter 8', topic: 'Escape Velocity' } },
        ]
      },
      {
        id: 'ph-a3', title: '3. Wave Optics & Electromagnetic Spectrum', duration: '10 min', difficulty: 'Advanced', progress: 0,
        ncert: { grade: 'Class 12', chapter: 'Chapter 10', topic: 'Wave Optics' },
        objectives: ['Explain interference and diffraction of light', 'Describe the electromagnetic spectrum in order of frequency', 'Apply Huygens principle to wavefronts'],
        summary: "Wave optics explains phenomena like interference and diffraction that particle theory cannot. Maxwell's equations unified light as electromagnetic waves.",
        notes: ['Constructive interference: path difference = nλ.', 'Destructive interference: path difference = (n+½)λ.', 'EM spectrum (low to high frequency): radio, microwave, infrared, visible, UV, X-ray, gamma.'],
        flashcards: [{ front: 'Condition for constructive interference', back: 'Path difference = nλ (where n = 0, 1, 2…). Waves add up to produce brighter fringes.' }, { front: 'Speed of light', back: 'c = 3 × 10⁸ m/s in vacuum; c = fλ (frequency × wavelength).' }],
        practice: [
          { id: 'ph-ap7', question: 'Which part of the EM spectrum has the highest frequency?', options: ['Radio waves', 'Visible light', 'X-rays', 'Gamma rays'], answer: 3, explanation: 'Gamma rays have the highest frequency (and energy) in the electromagnetic spectrum.', ncert: { grade: 'Class 12', chapter: 'Chapter 8', topic: 'Electromagnetic Spectrum' } },
          { id: 'ph-ap8', question: "Young's double slit experiment demonstrates:", options: ['Photoelectric effect', 'Interference of light', 'Refraction of light', 'Polarization'], answer: 1, explanation: "Young's experiment produces bright and dark fringes, demonstrating constructive and destructive interference.", ncert: { grade: 'Class 12', chapter: 'Chapter 10', topic: "Young's Double Slit" } },
          { id: 'ph-ap9', question: 'Light of wavelength 600 nm and frequency f satisfies f = c/λ. With c=3×10⁸ m/s, f =', options: ['5×10¹⁴ Hz', '5×10⁸ Hz', '6×10¹⁴ Hz', '2×10¹⁴ Hz'], answer: 0, explanation: 'f = c/λ = (3×10⁸) / (600×10⁻⁹) = 5×10¹⁴ Hz.', ncert: { grade: 'Class 12', chapter: 'Chapter 8', topic: 'Wave Properties of Light' } },
        ]
      },
    ],
  },

  // ── CHEMISTRY ────────────────────────────────────────────────────────────
  Chemistry: {
    Foundational: [
      {
        id: 'ch-f1', title: '1. Atoms, Molecules & Chemical Symbols', duration: '10 min', difficulty: 'Foundational', progress: 100,
        ncert: { grade: 'Class 9', chapter: 'Chapter 3', topic: 'Atoms and Molecules' },
        objectives: ['Define atom, molecule, and element', 'Read and write chemical formulae', 'Use atomic mass and Avogadro constant'],
        summary: 'Atoms are the building blocks of matter. Molecules are groups of atoms bonded together. Chemical symbols are shorthand for elements.',
        notes: ["Atom: smallest unit of an element that retains its properties.", "Molecule: two or more atoms bonded together (e.g. H₂O, O₂).", "Avogadro's number: 6.022 × 10²³ particles per mole."],
        flashcards: [{ front: "Avogadro's Number", back: '6.022 × 10²³ — number of atoms, ions, or molecules in one mole of a substance.' }, { front: 'Chemical formula of water', back: 'H₂O — two hydrogen atoms bonded to one oxygen atom.' }],
        practice: [
          { id: 'ch-fp1', question: 'The chemical symbol for gold is:', options: ['Go', 'Gd', 'Au', 'Ag'], answer: 2, explanation: '"Au" comes from the Latin "Aurum" — the traditional name for gold.', ncert: { grade: 'Class 9', chapter: 'Chapter 3', topic: 'Chemical Symbols' } },
          { id: 'ch-fp2', question: 'One mole of carbon-12 contains approximately:', options: ['12 atoms', '6.022×10²³ atoms', '12 g/mol atoms', '1 atom'], answer: 1, explanation: "One mole of any substance contains 6.022×10²³ particles (Avogadro's number).", ncert: { grade: 'Class 9', chapter: 'Chapter 3', topic: 'Mole Concept' } },
          { id: 'ch-fp3', question: 'How many atoms are in one molecule of glucose (C₆H₁₂O₆)?', options: ['6', '12', '24', '18'], answer: 2, explanation: 'C: 6 + H: 12 + O: 6 = 24 atoms total in one glucose molecule.', ncert: { grade: 'Class 9', chapter: 'Chapter 3', topic: 'Molecular Formula' } },
        ]
      },
      {
        id: 'ch-f2', title: '2. Physical & Chemical Changes', duration: '10 min', difficulty: 'Foundational', progress: 60,
        ncert: { grade: 'Class 9', chapter: 'Chapter 1', topic: 'Matter in Our Surroundings' },
        objectives: ['Distinguish physical from chemical changes', 'Identify signs of chemical reactions', 'Give examples of reversible and irreversible changes'],
        summary: 'Physical changes alter form but not composition; chemical changes form new substances with different properties.',
        notes: ['Physical change: reversible, no new substance (e.g. melting, dissolving).', 'Chemical change: new substance, often irreversible (e.g. burning, rusting).', 'Signs of chemical change: color change, gas evolution, precipitate, energy change.'],
        flashcards: [{ front: 'Is rusting a physical or chemical change?', back: 'Chemical change — iron reacts with oxygen and water to form iron oxide (a new substance).' }, { front: 'Example of a reversible physical change', back: 'Melting ice to water, then freezing it back to ice.' }],
        practice: [
          { id: 'ch-fp4', question: 'Which of the following is a chemical change?', options: ['Cutting paper', 'Dissolving sugar in water', 'Burning coal', 'Melting wax'], answer: 2, explanation: 'Burning coal produces CO₂ and ash — new substances — making it a chemical change.', ncert: { grade: 'Class 9', chapter: 'Chapter 1', topic: 'Physical vs Chemical Change' } },
          { id: 'ch-fp5', question: 'A precipitate forming when two solutions are mixed indicates:', options: ['A physical change', 'A chemical change', 'Evaporation', 'Condensation'], answer: 1, explanation: 'Formation of a precipitate (insoluble solid) is evidence of a chemical reaction.', ncert: { grade: 'Class 9', chapter: 'Chapter 1', topic: 'Signs of Chemical Change' } },
          { id: 'ch-fp6', question: 'Boiling water is an example of a:', options: ['Chemical change', 'Physical change', 'Nuclear change', 'Combustion'], answer: 1, explanation: "Boiling only converts liquid water to steam — no new substance is formed, so it's physical.", ncert: { grade: 'Class 9', chapter: 'Chapter 1', topic: 'Physical Changes' } },
        ]
      },
      {
        id: 'ch-f3', title: '3. Mixtures, Solutions & Separation Techniques', duration: '10 min', difficulty: 'Foundational', progress: 0,
        ncert: { grade: 'Class 9', chapter: 'Chapter 2', topic: 'Is Matter Around Us Pure?' },
        objectives: ['Distinguish pure substances from mixtures', 'Describe properties of solutions, suspensions, and colloids', 'Match separation techniques to appropriate mixtures'],
        summary: 'Matter can be pure substances (elements or compounds) or mixtures. Separation techniques exploit differences in physical properties.',
        notes: ['Solution: homogeneous mixture; uniform composition throughout.', 'Suspension: heterogeneous; particles settle over time.', 'Colloid: particles (1-100 nm) scatter light (Tyndall effect).'],
        flashcards: [{ front: 'Tyndall Effect', back: 'Scattering of light by colloidal particles — distinguishes colloid from true solution.' }, { front: 'Which technique separates miscible liquids?', back: 'Fractional distillation — separates liquids with different boiling points.' }],
        practice: [
          { id: 'ch-fp7', question: 'A mixture of sand and water can be separated by:', options: ['Distillation', 'Filtration', 'Evaporation', 'Chromatography'], answer: 1, explanation: 'Sand is an insoluble solid; filtration separates it from water.', ncert: { grade: 'Class 9', chapter: 'Chapter 2', topic: 'Separation Techniques' } },
          { id: 'ch-fp8', question: 'A colloid differs from a true solution in that:', options: ['Colloid has larger particle size (1-100 nm)', 'Colloid is always a liquid', 'Colloid cannot be filtered', 'Colloid is always transparent'], answer: 0, explanation: 'Colloid particles (1-100 nm) are larger than solute particles in a true solution, allowing light scattering.', ncert: { grade: 'Class 9', chapter: 'Chapter 2', topic: 'Colloids vs Solutions' } },
          { id: 'ch-fp9', question: 'Which technique is best for separating two miscible liquids like ethanol and water?', options: ['Filtration', 'Simple distillation', 'Fractional distillation', 'Crystallization'], answer: 2, explanation: 'Fractional distillation separates miscible liquids by their different boiling points using a fractionating column.', ncert: { grade: 'Class 9', chapter: 'Chapter 2', topic: 'Fractional Distillation' } },
        ]
      },
    ],
    'Grade-Level': [
      {
        id: 'ch-g1', title: '1. Acids, Bases, Salts & the pH Scale', duration: '10 min', difficulty: 'Grade-Level', progress: 60,
        ncert: { grade: 'Class 10', chapter: 'Chapter 2', topic: 'Acids, Bases and Salts' },
        objectives: ['Define acids and bases using Arrhenius theory', 'Use pH scale to classify solutions', 'Predict salt type from acid-base neutralization'],
        summary: 'Acids donate H⁺ ions; bases accept H⁺. The pH scale (0-14) measures acidity. Neutralization produces salt and water.',
        notes: ['pH < 7 = acidic; pH = 7 = neutral; pH > 7 = basic.', 'Strong acids: HCl, H₂SO₄, HNO₃. Strong bases: NaOH, KOH.', 'Neutralization: Acid + Base → Salt + Water.'],
        flashcards: [{ front: 'pH of a neutral solution', back: '7 — neither acidic nor basic; [H⁺] = [OH⁻].' }, { front: 'Result of neutralization', back: 'Acid + Base → Salt + Water (e.g. HCl + NaOH → NaCl + H₂O).' }],
        practice: [
          { id: 'ch-gp1', question: 'Which of the following has the lowest pH?', options: ['Pure water (pH 7)', 'Lemon juice (pH 2)', 'Baking soda (pH 9)', 'Blood (pH 7.4)'], answer: 1, explanation: 'Lower pH = more acidic. Lemon juice (pH 2) is the most acidic option listed.', ncert: { grade: 'Class 10', chapter: 'Chapter 2', topic: 'pH Scale' } },
          { id: 'ch-gp2', question: 'NaOH + HCl → NaCl + H₂O is an example of:', options: ['Decomposition', 'Displacement', 'Neutralization', 'Combination'], answer: 2, explanation: 'A base (NaOH) reacting with an acid (HCl) to produce salt and water is neutralization.', ncert: { grade: 'Class 10', chapter: 'Chapter 2', topic: 'Neutralization' } },
          { id: 'ch-gp3', question: 'A solution turns red litmus blue. It is:', options: ['Acidic', 'Neutral', 'Basic (alkaline)', 'Cannot be determined'], answer: 2, explanation: 'Basic solutions turn red litmus blue; acidic solutions turn blue litmus red.', ncert: { grade: 'Class 10', chapter: 'Chapter 2', topic: 'Indicators' } },
        ]
      },
      {
        id: 'ch-g2', title: '2. Chemical Reactions & Equations', duration: '10 min', difficulty: 'Grade-Level', progress: 0,
        ncert: { grade: 'Class 10', chapter: 'Chapter 1', topic: 'Chemical Reactions and Equations' },
        objectives: ['Balance chemical equations using atomic conservation', 'Classify reactions as combination, decomposition, displacement, redox', 'Identify oxidation and reduction in redox reactions'],
        summary: 'Chemical equations describe reactions. Balancing them ensures mass conservation. Redox reactions involve electron transfer (oxidation = loss, reduction = gain).',
        notes: ['Balance equations by adjusting coefficients, not subscripts.', 'Combination: A + B → AB.', 'Decomposition: AB → A + B.', 'Redox: OIL RIG — Oxidation Is Loss, Reduction Is Gain (of electrons).'],
        flashcards: [{ front: 'OILRIG mnemonic', back: 'Oxidation Is Loss (of electrons); Reduction Is Gain (of electrons).' }, { front: 'Balanced equation for hydrogen combustion', back: '2H₂ + O₂ → 2H₂O' }],
        practice: [
          { id: 'ch-gp4', question: 'Balance: H₂ + O₂ → H₂O. Correct balanced equation is:', options: ['H₂ + O₂ → H₂O', '2H₂ + O₂ → 2H₂O', 'H₂ + 2O₂ → 2H₂O', '2H₂ + 2O₂ → 2H₂O'], answer: 1, explanation: '2H₂ + O₂ → 2H₂O: 4H and 2O on each side.', ncert: { grade: 'Class 10', chapter: 'Chapter 1', topic: 'Balancing Equations' } },
          { id: 'ch-gp5', question: 'In the reaction Zn + 2HCl → ZnCl₂ + H₂, which element is oxidized?', options: ['Hydrogen', 'Chlorine', 'Zinc', 'None'], answer: 2, explanation: 'Zinc loses electrons (Zn → Zn²⁺), so it is oxidized.', ncert: { grade: 'Class 10', chapter: 'Chapter 1', topic: 'Redox Reactions' } },
          { id: 'ch-gp6', question: 'CaCO₃ → CaO + CO₂ is an example of what type of reaction?', options: ['Combination', 'Decomposition', 'Displacement', 'Double displacement'], answer: 1, explanation: 'One compound breaks into two simpler substances — this is a decomposition reaction.', ncert: { grade: 'Class 10', chapter: 'Chapter 1', topic: 'Decomposition Reactions' } },
        ]
      },
      {
        id: 'ch-g3', title: '3. Metals, Non-metals & Reactivity Series', duration: '10 min', difficulty: 'Grade-Level', progress: 0,
        ncert: { grade: 'Class 10', chapter: 'Chapter 3', topic: 'Metals and Non-metals' },
        objectives: ['Compare physical and chemical properties of metals and non-metals', 'Use the reactivity series to predict displacement reactions', 'Explain ionic bond formation between metals and non-metals'],
        summary: 'Metals typically lose electrons to form cations; non-metals gain electrons to form anions. The reactivity series ranks metals by reducing power.',
        notes: ['Reactivity series (high to low): K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Au', 'More reactive metal displaces less reactive metal from its salt solution.', 'Ionic bond: electrostatic attraction between oppositely charged ions.'],
        flashcards: [{ front: 'Reactivity series mnemonic (top 5)', back: 'King Nasty Carries Megs Away — K, Na, Ca, Mg, Al (most to least reactive).' }, { front: 'Can copper displace zinc from ZnSO₄?', back: 'No — copper is less reactive than zinc in the reactivity series.' }],
        practice: [
          { id: 'ch-gp7', question: 'Which metal will displace iron from iron sulphate (FeSO₄) solution?', options: ['Copper', 'Silver', 'Zinc', 'Gold'], answer: 2, explanation: 'Zinc is more reactive than iron in the reactivity series, so it displaces iron.', ncert: { grade: 'Class 10', chapter: 'Chapter 3', topic: 'Reactivity Series' } },
          { id: 'ch-gp8', question: 'Which property is characteristic of metals?', options: ['Low electrical conductivity', 'Malleable and ductile', 'Brittle solid', 'Poor thermal conductor'], answer: 1, explanation: 'Metals are malleable (hammered into sheets) and ductile (drawn into wires) due to metallic bonding.', ncert: { grade: 'Class 10', chapter: 'Chapter 3', topic: 'Properties of Metals' } },
          { id: 'ch-gp9', question: 'In NaCl, the bond type is:', options: ['Covalent', 'Metallic', 'Ionic', 'Hydrogen'], answer: 2, explanation: 'NaCl forms when Na⁺ and Cl⁻ ions are held by electrostatic attraction — an ionic bond.', ncert: { grade: 'Class 10', chapter: 'Chapter 3', topic: 'Ionic Bonding' } },
        ]
      },
    ],
    Advanced: [
      {
        id: 'ch-a1', title: '1. Organic Chemistry: Hydrocarbons', duration: '10 min', difficulty: 'Advanced', progress: 0,
        ncert: { grade: 'Class 10', chapter: 'Chapter 4', topic: 'Carbon and Its Compounds' },
        objectives: ['Distinguish alkanes, alkenes, and alkynes by bonding', 'Name organic compounds using IUPAC nomenclature', 'Describe addition and substitution reactions'],
        summary: 'Carbon forms covalent bonds in chains and rings. Alkanes (single), alkenes (double), and alkynes (triple) have characteristic reaction types.',
        notes: ['Alkane: all single bonds (CₙH₂ₙ₊₂) — undergoes substitution.', 'Alkene: one double bond (CₙH₂ₙ) — undergoes addition.', 'Alkyne: one triple bond (CₙH₂ₙ₋₂) — undergoes addition.'],
        flashcards: [{ front: 'General formula for alkanes', back: 'CₙH₂ₙ₊₂ (e.g. methane CH₄, ethane C₂H₆).' }, { front: 'Difference between addition and substitution', back: 'Addition: new atoms join a double/triple bond. Substitution: one atom/group replaces another (in alkanes).' }],
        practice: [
          { id: 'ch-ap1', question: 'The general formula CₙH₂ₙ represents:', options: ['Alkanes', 'Alkenes', 'Alkynes', 'Aromatic hydrocarbons'], answer: 1, explanation: 'CₙH₂ₙ is the general formula for alkenes (one C=C double bond).', ncert: { grade: 'Class 10', chapter: 'Chapter 4', topic: 'Hydrocarbons' } },
          { id: 'ch-ap2', question: 'Ethene (C₂H₄) reacts with H₂ to produce ethane. This is:', options: ['Substitution reaction', 'Elimination reaction', 'Addition reaction', 'Decomposition'], answer: 2, explanation: 'H₂ adds across the C=C double bond — a classic addition reaction.', ncert: { grade: 'Class 10', chapter: 'Chapter 4', topic: 'Addition Reactions' } },
          { id: 'ch-ap3', question: 'What is the IUPAC name of CH₃-CH₂-OH?', options: ['Methanol', 'Ethanol', 'Propanol', 'Ethene'], answer: 1, explanation: 'Two carbons with an -OH group: ethanol (eth = 2 carbons, -ol = hydroxyl group).', ncert: { grade: 'Class 10', chapter: 'Chapter 4', topic: 'IUPAC Nomenclature' } },
        ]
      },
      {
        id: 'ch-a2', title: '2. Electrochemistry & Electrolysis', duration: '10 min', difficulty: 'Advanced', progress: 0,
        ncert: { grade: 'Class 12', chapter: 'Chapter 3', topic: 'Electrochemistry' },
        objectives: ['Distinguish electrolytic and galvanic cells', "Apply Faraday's Laws of Electrolysis", 'Predict electrode reactions using standard reduction potentials'],
        summary: "Galvanic cells convert chemical energy to electrical energy. Electrolytic cells use electricity to drive non-spontaneous reactions. Faraday's laws quantify mass deposited.",
        notes: ["Galvanic cell: anode (–) oxidation; cathode (+) reduction; spontaneous.", "Electrolytic cell: anode (+); cathode (–); requires external power.", "Faraday's First Law: mass deposited ∝ quantity of electricity (charge)."],
        flashcards: [{ front: 'Galvanic vs Electrolytic cell', back: 'Galvanic: converts chemical energy to electrical (e.g. battery). Electrolytic: uses electricity to drive chemical reactions (e.g. electroplating).' }, { front: "Faraday's constant", back: 'F = 96,485 C/mol — charge of one mole of electrons.' }],
        practice: [
          { id: 'ch-ap4', question: 'In a galvanic cell, oxidation occurs at the:', options: ['Cathode', 'Anode', 'Salt bridge', 'Electrolyte'], answer: 1, explanation: 'In galvanic cells, the anode is where oxidation (loss of electrons) occurs.', ncert: { grade: 'Class 12', chapter: 'Chapter 3', topic: 'Galvanic Cell' } },
          { id: 'ch-ap5', question: "Electroplating uses which type of cell?", options: ['Galvanic cell', 'Fuel cell', 'Electrolytic cell', 'Solar cell'], answer: 2, explanation: 'Electroplating uses electrolytic cells — external current deposits metal ions onto a surface.', ncert: { grade: 'Class 12', chapter: 'Chapter 3', topic: 'Electrolytic Cell Applications' } },
          { id: 'ch-ap6', question: 'The standard reduction potential of Cu²⁺/Cu (+0.34 V) is greater than Zn²⁺/Zn (–0.76 V). This means:', options: ['Zinc is a better reducing agent', 'Copper is a better reducing agent', 'Both are equal oxidizing agents', 'Copper cannot be oxidized'], answer: 0, explanation: 'Lower reduction potential means more tendency to be oxidized → Zinc is a stronger reducing agent.', ncert: { grade: 'Class 12', chapter: 'Chapter 3', topic: 'Standard Electrode Potential' } },
        ]
      },
      {
        id: 'ch-a3', title: '3. Thermochemistry & Hess\'s Law', duration: '10 min', difficulty: 'Advanced', progress: 0,
        ncert: { grade: 'Class 11', chapter: 'Chapter 6', topic: 'Thermodynamics' },
        objectives: ['Distinguish exothermic and endothermic reactions using ΔH', "Apply Hess's Law for enthalpy calculations", 'Interpret bond enthalpy data for energy changes'],
        summary: 'Thermochemistry studies energy changes in reactions. ΔH < 0 = exothermic (releases heat); ΔH > 0 = endothermic (absorbs heat). Hess\'s Law enables indirect enthalpy calculations.',
        notes: ['Exothermic: ΔH < 0 (energy released, products more stable).', 'Endothermic: ΔH > 0 (energy absorbed from surroundings).', "Hess's Law: total enthalpy change is path-independent."],
        flashcards: [{ front: 'Sign of ΔH for combustion', back: 'ΔH < 0 (negative) — combustion is exothermic; energy is released as heat and light.' }, { front: "Hess's Law statement", back: 'The total enthalpy change of a reaction is the same regardless of the route taken.' }],
        practice: [
          { id: 'ch-ap7', question: 'A reaction releases 500 kJ of heat. Its ΔH is:', options: ['+500 kJ/mol', '–500 kJ/mol', '0 kJ/mol', '500 J/mol'], answer: 1, explanation: 'Exothermic reactions release heat; ΔH is negative (–500 kJ/mol).', ncert: { grade: 'Class 11', chapter: 'Chapter 6', topic: 'Exothermic Reactions' } },
          { id: 'ch-ap8', question: "Hess's Law is based on which conservation principle?", options: ['Conservation of mass', 'Conservation of momentum', 'Conservation of energy', 'Conservation of charge'], answer: 2, explanation: "Hess's Law is an application of the First Law of Thermodynamics (conservation of energy).", ncert: { grade: 'Class 11', chapter: 'Chapter 6', topic: "Hess's Law" } },
          { id: 'ch-ap9', question: 'Bond breaking is ___ and bond forming is ___.', options: ['Exothermic; endothermic', 'Endothermic; exothermic', 'Exothermic; exothermic', 'Neither'], answer: 1, explanation: 'Breaking bonds requires energy (endothermic); forming bonds releases energy (exothermic).', ncert: { grade: 'Class 11', chapter: 'Chapter 6', topic: 'Bond Enthalpies' } },
        ]
      },
    ],
  },

  // ── BIOLOGY ──────────────────────────────────────────────────────────────
  Biology: {
    Foundational: [
      {
        id: 'bi-f1', title: '1. Plant Kingdom: Classification & Parts', duration: '10 min', difficulty: 'Foundational', progress: 100,
        ncert: { grade: 'Class 9', chapter: 'Chapter 7', topic: 'Diversity in Living Organisms' },
        objectives: ['Classify plants into major groups', 'Identify and describe functions of plant parts', 'Understand the importance of classification'],
        summary: 'Plants are classified into non-flowering (algae, bryophytes, pteridophytes, gymnosperms) and flowering (angiosperms) groups.',
        notes: ['Thallophyta (algae): no differentiated parts.', 'Bryophyta (mosses): first land plants, no vascular tissue.', 'Angiosperms: flowering plants; most diverse; seeds enclosed in fruit.'],
        flashcards: [{ front: 'Angiosperms vs Gymnosperms', back: 'Angiosperms: seeds enclosed in fruit. Gymnosperms: naked seeds (e.g. pine, cycad).' }, { front: 'Function of xylem', back: 'Transports water and minerals from roots to leaves.' }],
        practice: [
          { id: 'bi-fp1', question: 'Which group of plants produces seeds enclosed in fruit?', options: ['Pteridophytes', 'Gymnosperms', 'Angiosperms', 'Bryophytes'], answer: 2, explanation: 'Angiosperms are flowering plants whose seeds are enclosed within a fruit.', ncert: { grade: 'Class 9', chapter: 'Chapter 7', topic: 'Plant Kingdom' } },
          { id: 'bi-fp2', question: 'Xylem tissue primarily functions to:', options: ['Transport food', 'Transport water and minerals', 'Store glucose', 'Perform photosynthesis'], answer: 1, explanation: 'Xylem conducts water and dissolved minerals upward from roots to stems and leaves.', ncert: { grade: 'Class 9', chapter: 'Chapter 6', topic: 'Plant Tissues' } },
          { id: 'bi-fp3', question: 'Mosses and liverworts belong to which plant group?', options: ['Thallophyta', 'Bryophyta', 'Pteridophyta', 'Gymnospermae'], answer: 1, explanation: 'Bryophytes (mosses and liverworts) are amphibians of the plant kingdom — simple land plants without vascular tissue.', ncert: { grade: 'Class 9', chapter: 'Chapter 7', topic: 'Bryophyta' } },
        ]
      },
      {
        id: 'bi-f2', title: '2. Animal Kingdom & Basic Classification', duration: '10 min', difficulty: 'Foundational', progress: 40,
        ncert: { grade: 'Class 9', chapter: 'Chapter 7', topic: 'Diversity in Living Organisms' },
        objectives: ['Classify animals from invertebrates to vertebrates', 'Identify characteristics of major animal phyla', 'Distinguish warm-blooded and cold-blooded animals'],
        summary: 'The animal kingdom is divided into invertebrates and vertebrates. Vertebrates include fish, amphibians, reptiles, birds, and mammals.',
        notes: ['Porifera (sponges): simplest multicellular animals.', 'Chordata: animals with a notochord; includes all vertebrates.', 'Mammals: warm-blooded, have hair, feed young with milk.'],
        flashcards: [{ front: 'Difference between warm and cold-blooded', back: 'Warm-blooded (birds/mammals): maintain constant body temp. Cold-blooded (fish/reptiles): body temp varies with environment.' }, { front: 'Defining characteristic of vertebrates', back: 'Presence of a vertebral column (backbone).' }],
        practice: [
          { id: 'bi-fp4', question: 'Which group of animals is warm-blooded and has feathers?', options: ['Reptiles', 'Amphibians', 'Birds', 'Fish'], answer: 2, explanation: 'Birds (Class Aves) are warm-blooded vertebrates covered with feathers.', ncert: { grade: 'Class 9', chapter: 'Chapter 7', topic: 'Vertebrata' } },
          { id: 'bi-fp5', question: 'Sponges belong to phylum:', options: ['Annelida', 'Porifera', 'Mollusca', 'Echinodermata'], answer: 1, explanation: 'Sponges are the simplest multicellular animals, classified under Phylum Porifera.', ncert: { grade: 'Class 9', chapter: 'Chapter 7', topic: 'Invertebrates' } },
          { id: 'bi-fp6', question: 'Frogs are amphibians because they:', options: ['Live only in water', 'Live only on land', 'Lay eggs in water and breathe air as adults', 'Are warm-blooded'], answer: 2, explanation: 'Amphibians have a dual life — larval stage in water, adult stage on land. They also breathe through skin.', ncert: { grade: 'Class 9', chapter: 'Chapter 7', topic: 'Amphibia' } },
        ]
      },
      {
        id: 'bi-f3', title: '3. Nutrition in Plants & Photosynthesis', duration: '10 min', difficulty: 'Foundational', progress: 0,
        ncert: { grade: 'Class 7', chapter: 'Chapter 1', topic: 'Nutrition in Plants' },
        objectives: ['Explain autotrophic and heterotrophic nutrition', 'Describe the process of photosynthesis', 'Identify the role of chlorophyll, sunlight, CO₂, and water'],
        summary: 'Plants are autotrophs — they make their own food through photosynthesis using chlorophyll, sunlight, CO₂, and water to produce glucose and oxygen.',
        notes: ['Photosynthesis: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂', 'Chlorophyll is the green pigment that absorbs sunlight.', 'Stomata are tiny pores in leaves for gas exchange.'],
        flashcards: [{ front: 'Products of photosynthesis', back: 'Glucose (food for the plant) and Oxygen (released as by-product).' }, { front: 'Role of stomata in photosynthesis', back: 'Stomata allow CO₂ to enter and O₂ to exit the leaf during photosynthesis.' }],
        practice: [
          { id: 'bi-fp7', question: 'What colour does iodine turn when starch is present?', options: ['Red', 'Blue-black', 'Yellow', 'Green'], answer: 1, explanation: 'Iodine solution turns blue-black in the presence of starch — used to test for photosynthesis.', ncert: { grade: 'Class 7', chapter: 'Chapter 1', topic: 'Testing for Starch' } },
          { id: 'bi-fp8', question: 'The opening and closing of stomata is controlled by:', options: ['Root hair cells', 'Guard cells', 'Xylem cells', 'Epidermal cells'], answer: 1, explanation: 'Guard cells surround each stomatal pore and control its opening (light/water availability).', ncert: { grade: 'Class 7', chapter: 'Chapter 1', topic: 'Stomata' } },
          { id: 'bi-fp9', question: 'Which gas do plants take in during photosynthesis?', options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'], answer: 2, explanation: 'Plants absorb CO₂ from air through stomata for use in photosynthesis.', ncert: { grade: 'Class 7', chapter: 'Chapter 1', topic: 'Photosynthesis Inputs' } },
        ]
      },
    ],
    'Grade-Level': [
      {
        id: 'bi-g1', title: '1. Cell Structure & Organelles', duration: '10 min', difficulty: 'Grade-Level', progress: 70,
        ncert: { grade: 'Class 9', chapter: 'Chapter 5', topic: 'The Fundamental Unit of Life' },
        objectives: ['Describe the structure of plant and animal cells', 'Compare and contrast cell organelle functions', 'Explain the significance of the nucleus in cell activity'],
        summary: 'Cells are the basic unit of life containing organelles that perform specific functions. Plant cells differ from animal cells in having a cell wall, large vacuole, and chloroplasts.',
        notes: ['Mitochondria: ATP generation (cellular respiration).', 'Chloroplast: photosynthesis (in plant cells only).', 'Cell wall: cellulose — provides rigidity in plant cells.'],
        flashcards: [{ front: 'Organelle for photosynthesis', back: 'Chloroplast — contains chlorophyll; converts light to chemical energy.' }, { front: 'Key difference: plant vs animal cell', back: 'Plant cell has: cell wall, chloroplasts, large central vacuole. Animal cell has: centrioles, smaller vacuoles.' }],
        practice: [
          { id: 'bi-gp1', question: 'Which organelle controls all activities of the cell?', options: ['Mitochondria', 'Ribosome', 'Nucleus', 'Vacuole'], answer: 2, explanation: "The nucleus houses the cell's DNA and directs all metabolic activities.", ncert: { grade: 'Class 9', chapter: 'Chapter 5', topic: 'Nucleus' } },
          { id: 'bi-gp2', question: 'The "powerhouse of the cell" refers to:', options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi body'], answer: 2, explanation: 'Mitochondria produce ATP through cellular respiration, earning the "powerhouse" nickname.', ncert: { grade: 'Class 9', chapter: 'Chapter 5', topic: 'Mitochondria' } },
          { id: 'bi-gp3', question: 'Which organelle is ABSENT in animal cells?', options: ['Ribosome', 'Mitochondria', 'Cell wall', 'Nucleus'], answer: 2, explanation: 'Animal cells lack a cell wall; only plant cells (and bacteria) have cell walls.', ncert: { grade: 'Class 9', chapter: 'Chapter 5', topic: 'Plant vs Animal Cell' } },
        ]
      },
      {
        id: 'bi-g2', title: '2. Human Circulatory System', duration: '10 min', difficulty: 'Grade-Level', progress: 0,
        ncert: { grade: 'Class 10', chapter: 'Chapter 6', topic: 'Life Processes: Transportation' },
        objectives: ['Describe the double circulation in humans', 'Identify components of blood and their functions', 'Explain the cardiac cycle (systole/diastole)'],
        summary: 'The human heart has a double circulatory system: pulmonary (heart-lungs) and systemic (heart-body). Blood transports oxygen, nutrients, and waste.',
        notes: ['Double circulation: pulmonary (deoxygenated blood to lungs) + systemic (oxygenated blood to body).', 'Blood components: RBCs (O₂), WBCs (immunity), platelets (clotting), plasma (transport).', 'Normal blood pressure: 120/80 mmHg (systolic/diastolic).'],
        flashcards: [{ front: 'What do arteries vs veins carry?', back: 'Arteries carry blood AWAY from heart (usually oxygenated). Veins carry blood TO heart (usually deoxygenated). Exception: pulmonary vessels.' }, { front: 'Function of platelets', back: 'Blood clotting — form a plug at wound sites to prevent excessive bleeding.' }],
        practice: [
          { id: 'bi-gp4', question: 'Oxygenated blood from the lungs enters the heart through the:', options: ['Pulmonary artery', 'Aorta', 'Pulmonary vein', 'Vena cava'], answer: 2, explanation: 'Pulmonary veins carry oxygenated blood from the lungs to the left atrium of the heart.', ncert: { grade: 'Class 10', chapter: 'Chapter 6', topic: 'Heart & Blood Vessels' } },
          { id: 'bi-gp5', question: 'Which blood cells are responsible for fighting infections?', options: ['Red blood cells', 'Platelets', 'White blood cells', 'Plasma proteins'], answer: 2, explanation: 'White blood cells (leukocytes) form the immune defense — they engulf pathogens and produce antibodies.', ncert: { grade: 'Class 10', chapter: 'Chapter 6', topic: 'Blood Components' } },
          { id: 'bi-gp6', question: 'The left ventricle pumps blood into the:', options: ['Lungs via pulmonary artery', 'Body via aorta', 'Right atrium', 'Pulmonary vein'], answer: 1, explanation: 'The left ventricle, with its thick muscular wall, pumps oxygenated blood into the aorta for systemic circulation.', ncert: { grade: 'Class 10', chapter: 'Chapter 6', topic: 'Heart Chambers' } },
        ]
      },
      {
        id: 'bi-g3', title: "3. Mendel's Laws of Inheritance", duration: '10 min', difficulty: 'Grade-Level', progress: 0,
        ncert: { grade: 'Class 10', chapter: 'Chapter 9', topic: 'Heredity and Evolution' },
        objectives: ["Apply Mendel's Law of Dominance to predict offspring phenotypes", 'Construct and interpret Punnett squares', "Distinguish between Mendel's two laws"],
        summary: "Gregor Mendel's pea plant experiments established laws of inheritance: dominance, segregation, and independent assortment.",
        notes: ['Dominant allele (T) masks recessive (t) in Tt heterozygotes.', 'Law of Segregation: alleles separate during gamete formation.', 'Phenotype ratio Tt×Tt: 3 dominant : 1 recessive.'],
        flashcards: [{ front: 'Phenotypic ratio in F2 monohybrid cross', back: '3:1 (3 dominant : 1 recessive).' }, { front: "Mendel's Law of Dominance", back: 'When two parents are crossed, one allele dominates and masks the expression of the other in heterozygous offspring.' }],
        practice: [
          { id: 'bi-gp7', question: 'In a Tt × Tt cross, what fraction of offspring will be homozygous recessive (tt)?', options: ['¼ (25%)', '½ (50%)', '¾ (75%)', '0%'], answer: 0, explanation: 'Punnett square: TT, Tt, Tt, tt → 1 out of 4 = 25% homozygous recessive.', ncert: { grade: 'Class 10', chapter: 'Chapter 9', topic: "Mendel's Laws" } },
          { id: 'bi-gp8', question: "Mendel's Law of Segregation states:", options: ['Genes on different chromosomes assort independently', 'Each parent contributes one allele per trait to offspring', 'Dominant alleles always appear in phenotype', 'Mutations are inherited unchanged'], answer: 1, explanation: 'Each parent has two alleles per trait; they segregate equally into gametes.', ncert: { grade: 'Class 10', chapter: 'Chapter 9', topic: 'Law of Segregation' } },
          { id: 'bi-gp9', question: 'If T (tall) is dominant over t (short), what is the phenotype of a Tt plant?', options: ['Short', 'Intermediate height', 'Tall', 'Cannot be determined'], answer: 2, explanation: 'Because T is dominant, a Tt plant expresses the tall phenotype.', ncert: { grade: 'Class 10', chapter: 'Chapter 9', topic: 'Dominance' } },
        ]
      },
    ],
    Advanced: [
      {
        id: 'bi-a1', title: "1. Genetics: DNA Structure & Protein Synthesis", duration: '10 min', difficulty: 'Advanced', progress: 10,
        ncert: { grade: 'Class 12', chapter: 'Chapter 6', topic: 'Molecular Basis of Inheritance' },
        objectives: ['Describe the double-helix structure of DNA', 'Explain transcription (DNA → mRNA) and translation (mRNA → protein)', 'Define mutation and its consequences'],
        summary: "DNA's double helix encodes genetic information in base sequences. Transcription copies DNA to mRNA; translation converts mRNA to proteins at ribosomes.",
        notes: ['DNA: deoxyribose, phosphate backbone, bases A-T (2H bonds) and G-C (3H bonds).', 'Transcription: DNA → pre-mRNA (nucleus).', 'Translation: mRNA + tRNA + ribosome → polypeptide chain.'],
        flashcards: [{ front: 'Complementary base pairs in DNA', back: 'A-T (adenine-thymine, 2 H-bonds); G-C (guanine-cytosine, 3 H-bonds).' }, { front: 'Role of tRNA in translation', back: 'Transfer RNA carries specific amino acids to the ribosome, matching anticodon to mRNA codon.' }],
        practice: [
          { id: 'bi-ap1', question: 'In DNA, adenine always pairs with:', options: ['Guanine', 'Cytosine', 'Thymine', 'Uracil'], answer: 2, explanation: 'A-T pairing (2 hydrogen bonds) is a fundamental rule of Watson-Crick base pairing.', ncert: { grade: 'Class 12', chapter: 'Chapter 6', topic: 'DNA Structure' } },
          { id: 'bi-ap2', question: 'Transcription is the process of:', options: ['DNA replication', 'Protein synthesis at ribosomes', 'DNA → RNA synthesis', 'tRNA carrying amino acids'], answer: 2, explanation: 'Transcription is the synthesis of mRNA from a DNA template using RNA polymerase.', ncert: { grade: 'Class 12', chapter: 'Chapter 6', topic: 'Transcription' } },
          { id: 'bi-ap3', question: 'A gene mutation that does not change the amino acid is called:', options: ['Missense mutation', 'Nonsense mutation', 'Silent mutation', 'Frameshift mutation'], answer: 2, explanation: 'Silent mutations change the codon but due to redundancy in the genetic code, the same amino acid is still incorporated.', ncert: { grade: 'Class 12', chapter: 'Chapter 6', topic: 'Mutations' } },
        ]
      },
      {
        id: 'bi-a2', title: '2. Ecosystem Ecology & Energy Flow', duration: '10 min', difficulty: 'Advanced', progress: 0,
        ncert: { grade: 'Class 12', chapter: 'Chapter 14', topic: 'Ecosystem' },
        objectives: ['Describe biotic and abiotic components of an ecosystem', 'Trace energy flow through trophic levels', 'Apply the 10% energy transfer rule'],
        summary: 'Ecosystems consist of producers, consumers, and decomposers linked by energy flow and nutrient cycling. Only ~10% of energy transfers to each higher trophic level.',
        notes: ['Producers (autotrophs) → Primary consumers → Secondary → Tertiary.', '10% law: only 10% of energy at one level reaches the next.', 'Food web: interconnected food chains in an ecosystem.'],
        flashcards: [{ front: '10% Energy Transfer Rule', back: 'Only ~10% of energy at one trophic level is transferred to the next; 90% is lost as heat.' }, { front: 'Difference: food chain vs food web', back: 'Food chain: linear energy sequence. Food web: multiple interconnected chains in an ecosystem.' }],
        practice: [
          { id: 'bi-ap4', question: 'If producers fix 10,000 kJ, how much energy reaches secondary consumers?', options: ['1,000 kJ', '100 kJ', '10 kJ', '1 kJ'], answer: 1, explanation: '10% at each level: 10,000 → 1,000 (primary) → 100 (secondary consumers).', ncert: { grade: 'Class 12', chapter: 'Chapter 14', topic: '10% Energy Law' } },
          { id: 'bi-ap5', question: 'Decomposers in an ecosystem primarily function to:', options: ['Fix nitrogen from air', 'Break down dead organic matter into inorganic nutrients', 'Produce oxygen through photosynthesis', 'Consume primary producers'], answer: 1, explanation: 'Decomposers (bacteria and fungi) break down dead organisms, recycling nutrients back to the soil.', ncert: { grade: 'Class 12', chapter: 'Chapter 14', topic: 'Decomposers' } },
          { id: 'bi-ap6', question: 'Which term describes the total amount of living organic matter in an ecosystem?', options: ['Biomass', 'Carrying capacity', 'Productivity', 'Biodiversity'], answer: 0, explanation: 'Biomass is the total mass of living organisms in a given area at a given time.', ncert: { grade: 'Class 12', chapter: 'Chapter 14', topic: 'Biomass & Productivity' } },
        ]
      },
      {
        id: 'bi-a3', title: '3. Human Endocrine System & Hormonal Regulation', duration: '10 min', difficulty: 'Advanced', progress: 0,
        ncert: { grade: 'Class 11', chapter: 'Chapter 22', topic: 'Chemical Coordination and Integration' },
        objectives: ['Identify major endocrine glands and their hormones', 'Explain feedback regulation of hormone levels', 'Describe hormonal disorders (diabetes, hyperthyroidism)'],
        summary: 'The endocrine system uses hormones as chemical messengers to regulate metabolism, growth, and homeostasis via feedback loops.',
        notes: ['Insulin (pancreas β-cells): lowers blood glucose by promoting uptake into cells.', 'Glucagon (pancreas α-cells): raises blood glucose by stimulating glycogenolysis.', 'Negative feedback: hormone rise inhibits further secretion.'],
        flashcards: [{ front: 'Insulin vs Glucagon', back: 'Insulin: lowers blood sugar (promotes glucose uptake). Glucagon: raises blood sugar (stimulates glycogen breakdown).' }, { front: 'Pituitary gland role', back: '"Master gland" — controls other endocrine glands via tropic hormones (TSH, FSH, LH, ACTH).' }],
        practice: [
          { id: 'bi-ap7', question: 'Type 1 diabetes results from:', options: ['Excess insulin production', 'Destruction of pancreatic β-cells → no insulin', 'Insulin resistance in cells', 'High glucagon levels'], answer: 1, explanation: 'Type 1 is an autoimmune condition destroying insulin-producing β-cells, requiring external insulin.', ncert: { grade: 'Class 11', chapter: 'Chapter 22', topic: 'Pancreatic Hormones' } },
          { id: 'bi-ap8', question: 'Which gland is called the "master gland"?', options: ['Thyroid', 'Adrenal', 'Pituitary', 'Pancreas'], answer: 2, explanation: 'The pituitary gland regulates other endocrine glands via tropic hormones, earning it the "master gland" title.', ncert: { grade: 'Class 11', chapter: 'Chapter 22', topic: 'Pituitary Gland' } },
          { id: 'bi-ap9', question: 'Negative feedback in hormone regulation means:', options: ['Rising hormone levels stimulate more secretion', 'Rising hormone levels inhibit further secretion', 'Hormone levels remain constant', 'External signals always increase hormones'], answer: 1, explanation: 'Negative feedback ensures homeostasis — when hormone levels rise, they signal the gland to decrease production.', ncert: { grade: 'Class 11', chapter: 'Chapter 22', topic: 'Feedback Regulation' } },
        ]
      },
    ],
  },

  // ── ENGLISH ──────────────────────────────────────────────────────────────
  English: {
    Foundational: [
      {
        id: 'en-f1', title: '1. Grammar Basics: Nouns, Verbs & Adjectives', duration: '10 min', difficulty: 'Foundational', progress: 100,
        ncert: { grade: 'Class 8', chapter: 'Grammar Unit 1', topic: 'Parts of Speech' },
        objectives: ['Identify and classify nouns, verbs, and adjectives', 'Understand subject-verb agreement in simple sentences', 'Use adjectives to modify nouns correctly'],
        summary: 'Parts of speech are the building blocks of English grammar. Nouns name things, verbs show action, and adjectives describe nouns.',
        notes: ['Noun: person, place, thing, idea (e.g. teacher, school, happiness).', 'Verb: action or state (e.g. run, is, achieve).', 'Adjective: modifies a noun (e.g. brilliant student, heavy rain).'],
        flashcards: [{ front: 'Types of nouns', back: 'Proper (India), Common (city), Collective (team), Abstract (love), Material (gold).' }, { front: 'Subject-verb agreement rule', back: 'Singular subject takes singular verb; plural subject takes plural verb (He runs / They run).' }],
        practice: [
          { id: 'en-fp1', question: 'Identify the noun in: "The brave soldier fought valiantly."', options: ['Brave', 'Fought', 'Soldier', 'Valiantly'], answer: 2, explanation: '"Soldier" is a common noun — it names a person.', ncert: { grade: 'Class 8', chapter: 'Grammar Unit 1', topic: 'Nouns' } },
          { id: 'en-fp2', question: 'Which sentence has correct subject-verb agreement?', options: ['The team are playing well.', 'The team is playing well.', 'The teams is playing well.', 'The team were plays well.'], answer: 1, explanation: '"Team" is a collective noun treated as singular in standard usage → "is playing".', ncert: { grade: 'Class 8', chapter: 'Grammar Unit 1', topic: 'Subject-Verb Agreement' } },
          { id: 'en-fp3', question: '"She has a beautiful voice." The adjective is:', options: ['She', 'Has', 'Beautiful', 'Voice'], answer: 2, explanation: '"Beautiful" modifies the noun "voice" — making it an adjective.', ncert: { grade: 'Class 8', chapter: 'Grammar Unit 1', topic: 'Adjectives' } },
        ]
      },
      {
        id: 'en-f2', title: '2. Tenses: Simple Past, Present & Future', duration: '10 min', difficulty: 'Foundational', progress: 60,
        ncert: { grade: 'Class 9', chapter: 'Grammar Unit 2', topic: 'Tenses' },
        objectives: ['Form and use simple present, past, and future tenses', 'Identify regular and irregular verb forms', 'Convert sentences across tenses accurately'],
        summary: 'Tense indicates when an action occurs. The three basic tenses (present, past, future) are foundational to all English communication.',
        notes: ['Simple present: I eat, She eats (add -s/-es for third person).', 'Simple past: I ate, She ate (regular: add -ed; irregular: buy→bought).', 'Simple future: I will eat, She will eat.'],
        flashcards: [{ front: 'Past tense of "go"', back: '"Went" — irregular verb. Do not write "goed".' }, { front: 'Rule for third-person singular present', back: 'Add -s or -es to the base verb: She runs, He catches, It goes.' }],
        practice: [
          { id: 'en-fp4', question: 'Choose the correct past tense: "She ___ to school yesterday."', options: ['go', 'goes', 'went', 'has gone'], answer: 2, explanation: '"Went" is the simple past tense of "go" (an irregular verb).', ncert: { grade: 'Class 9', chapter: 'Grammar Unit 2', topic: 'Simple Past Tense' } },
          { id: 'en-fp5', question: 'Which sentence is in simple present tense?', options: ['I was reading a book.', 'She reads novels every evening.', 'They will finish soon.', 'He had finished the task.'], answer: 1, explanation: '"She reads" uses the simple present tense (base form + -s for third person singular).', ncert: { grade: 'Class 9', chapter: 'Grammar Unit 2', topic: 'Simple Present Tense' } },
          { id: 'en-fp6', question: '"They will travel to France next month." This is in:', options: ['Simple past', 'Simple present', 'Simple future', 'Past perfect'], answer: 2, explanation: '"Will travel" is the simple future tense, indicating a future action.', ncert: { grade: 'Class 9', chapter: 'Grammar Unit 2', topic: 'Simple Future Tense' } },
        ]
      },
      {
        id: 'en-f3', title: '3. Sentence Structure & Punctuation', duration: '10 min', difficulty: 'Foundational', progress: 0,
        ncert: { grade: 'Class 8', chapter: 'Writing Skills', topic: 'Punctuation and Sentence Formation' },
        objectives: ['Identify simple, compound, and complex sentences', 'Use commas, full stops, and apostrophes correctly', 'Recognise and correct sentence fragments'],
        summary: 'Well-formed sentences communicate clearly. Proper punctuation guides the reader through meaning, tone, and structure.',
        notes: ['Simple sentence: one independent clause (She runs.).', 'Compound sentence: two independent clauses joined by a conjunction (She runs and he walks.).', 'Complex sentence: independent + dependent clause (She runs because she is training.).'],
        flashcards: [{ front: 'When to use a comma', back: 'Before coordinating conjunctions (FANBOYS: for, and, nor, but, or, yet, so) in compound sentences.' }, { front: "Apostrophe uses", back: "Possession (India's flag) and contractions (it's = it is). Note: 'its' (possessive pronoun) has NO apostrophe." }],
        practice: [
          { id: 'en-fp7', question: 'Identify the compound sentence:', options: ["Although she was tired, she finished her homework.", "She was tired.", "She was tired, but she finished her homework.", "She finished her homework because she was disciplined."], answer: 2, explanation: 'A compound sentence joins two independent clauses with a conjunction (but). The first option is complex.', ncert: { grade: 'Class 8', chapter: 'Writing Skills', topic: 'Sentence Types' } },
          { id: 'en-fp8', question: 'Which is punctuated correctly?', options: ["Its raining today.", "It's raining today.", "Its' raining today.", "It,s raining today."], answer: 1, explanation: '"It\'s" = it is. The apostrophe marks the contraction.', ncert: { grade: 'Class 8', chapter: 'Writing Skills', topic: 'Apostrophes' } },
          { id: 'en-fp9', question: '"Running every morning." is a sentence fragment because:', options: ['It has no adjective', 'It lacks a subject and main verb', 'It is too short', 'It uses a gerund'], answer: 1, explanation: 'A fragment lacks either a subject or a finite verb. "Running" here is a gerund, not a finite verb, and there is no subject.', ncert: { grade: 'Class 8', chapter: 'Writing Skills', topic: 'Sentence Fragments' } },
        ]
      },
    ],
    'Grade-Level': [
      {
        id: 'en-g1', title: '1. Active & Passive Voice', duration: '10 min', difficulty: 'Grade-Level', progress: 45,
        ncert: { grade: 'Class 9', chapter: 'Grammar', topic: 'Voice Transformation' },
        objectives: ['Distinguish active and passive voice constructions', 'Transform sentences from active to passive and vice versa', 'Understand when passive voice is preferred in formal writing'],
        summary: 'In active voice, the subject performs the action. In passive voice, the subject receives the action. Passive voice is common in scientific and formal writing.',
        notes: ['Active: Subject + verb + object (Riya wrote the essay).', 'Passive: Object + to be + past participle + by + subject (The essay was written by Riya).', 'When agent is unknown or unimportant, passive is preferred.'],
        flashcards: [{ front: 'How to form passive voice', back: 'Subject (= old object) + auxiliary (is/was/will be) + past participle (+ by agent if needed).' }, { front: 'When is passive preferred?', back: 'When the agent is unknown, unimportant, or when the action/object is the focus (used in science, news).' }],
        practice: [
          { id: 'en-gp1', question: 'Convert to passive: "The teacher corrected the papers."', options: ['The papers were corrected by the teacher.', 'The papers are corrected by the teacher.', 'The teacher was corrected the papers.', 'Corrected the papers by teacher.'], answer: 0, explanation: 'Passive: papers (object→subject) + were corrected (past passive) + by the teacher (agent).', ncert: { grade: 'Class 9', chapter: 'Grammar', topic: 'Passive Voice' } },
          { id: 'en-gp2', question: '"A new library has been built in our town." The agent here is:', options: ['A new library', 'Our town', 'Not mentioned', 'Has been built'], answer: 2, explanation: 'The passive construction omits the agent (who built it) — the agent is not mentioned.', ncert: { grade: 'Class 9', chapter: 'Grammar', topic: 'Agentless Passive' } },
          { id: 'en-gp3', question: 'Which sentence is in active voice?', options: ['The match was won by India.', 'India won the match.', 'The match had been won.', 'Won by India, the match...'], answer: 1, explanation: '"India" (subject) + "won" (verb) + "the match" (object) — classic active voice structure.', ncert: { grade: 'Class 9', chapter: 'Grammar', topic: 'Active Voice' } },
        ]
      },
      {
        id: 'en-g2', title: '2. Reading Comprehension Strategies', duration: '10 min', difficulty: 'Grade-Level', progress: 0,
        ncert: { grade: 'Class 10', chapter: 'Reading Skills', topic: 'Comprehension Techniques' },
        objectives: ['Apply skimming, scanning, and close reading techniques', 'Identify the main idea and supporting details', 'Draw inferences from unseen passages'],
        summary: 'Effective comprehension requires purposeful reading strategies. Skimming grasps the overview; scanning finds specific details; close reading enables inference.',
        notes: ['Skimming: reading quickly for the gist (headings, first/last sentences).', 'Scanning: looking for a specific word, number, or fact.', 'Inference: drawing conclusions from evidence in the text, not stated explicitly.'],
        flashcards: [{ front: 'Skimming vs Scanning', back: 'Skimming: quick read for main idea. Scanning: targeted search for specific information.' }, { front: 'How to identify the main idea', back: 'It is usually in the topic sentence (often first or last sentence of a paragraph) and supported by other details.' }],
        practice: [
          { id: 'en-gp4', question: 'Scanning a passage is best for:', options: ['Understanding the overall tone', 'Finding a specific date or name', 'Analysing literary devices', 'Identifying the thesis statement'], answer: 1, explanation: 'Scanning involves moving eyes quickly to locate specific information like names, dates, or statistics.', ncert: { grade: 'Class 10', chapter: 'Reading Skills', topic: 'Scanning' } },
          { id: 'en-gp5', question: '"Reading between the lines" to draw unstated conclusions is called:', options: ['Skimming', 'Paraphrasing', 'Making inferences', 'Summarizing'], answer: 2, explanation: 'Inference involves understanding what the author implies but does not explicitly state.', ncert: { grade: 'Class 10', chapter: 'Reading Skills', topic: 'Inference' } },
          { id: 'en-gp6', question: 'The main idea of a paragraph is generally found in the:', options: ['Last word', 'Topic sentence', 'Middle sentence', 'Title only'], answer: 1, explanation: 'The topic sentence (usually the first sentence) states the main idea; supporting sentences develop it.', ncert: { grade: 'Class 10', chapter: 'Reading Skills', topic: 'Main Idea' } },
        ]
      },
      {
        id: 'en-g3', title: '3. Essay Writing & Paragraph Structure', duration: '10 min', difficulty: 'Grade-Level', progress: 0,
        ncert: { grade: 'Class 10', chapter: 'Writing Skills', topic: 'Essay and Paragraph Writing' },
        objectives: ['Structure an essay with introduction, body, and conclusion', 'Write clear topic sentences with supporting details', 'Use transitional words and phrases for coherence'],
        summary: 'A well-organized essay presents ideas logically. Each paragraph has one main idea. Transitions connect ideas smoothly for the reader.',
        notes: ['Introduction: hook + background + thesis statement.', 'Body paragraph: topic sentence + evidence + analysis + transition.', 'Conclusion: restate thesis + summary + closing thought.'],
        flashcards: [{ front: 'Purpose of a thesis statement', back: 'States the main argument or central claim of the essay; guides the reader and author throughout.' }, { front: 'Examples of transition words', back: 'However, Furthermore, In addition, On the other hand, As a result, In conclusion.' }],
        practice: [
          { id: 'en-gp7', question: 'A thesis statement is best placed in the:', options: ['Conclusion', 'Body paragraph', 'Introduction', 'After the evidence'], answer: 2, explanation: 'The thesis statement appears at the end of the introduction, previewing the essay\'s main argument.', ncert: { grade: 'Class 10', chapter: 'Writing Skills', topic: 'Essay Structure' } },
          { id: 'en-gp8', question: 'Which transition signals a contrast or opposing idea?', options: ['Furthermore', 'However', 'In addition', 'As a result'], answer: 1, explanation: '"However" introduces a contrasting or opposing point, signaling a shift in argument.', ncert: { grade: 'Class 10', chapter: 'Writing Skills', topic: 'Transitions' } },
          { id: 'en-gp9', question: 'Each body paragraph of an essay should focus on:', options: ['Multiple unrelated ideas', 'One main idea supported by evidence', 'Only examples with no analysis', 'The overall conclusion'], answer: 1, explanation: 'Unity: each paragraph develops a single main idea stated in its topic sentence.', ncert: { grade: 'Class 10', chapter: 'Writing Skills', topic: 'Paragraph Unity' } },
        ]
      },
    ],
    Advanced: [
      {
        id: 'en-a1', title: '1. Critical Reading & Literary Analysis', duration: '10 min', difficulty: 'Advanced', progress: 0,
        ncert: { grade: 'Class 11', chapter: 'Hornbill', topic: "Author's Purpose & Literary Devices" },
        objectives: ['Analyse tone, mood, and authorial intent', 'Identify and interpret major literary devices', 'Write analytical responses to unseen literary texts'],
        summary: "Critical reading moves beyond comprehension to evaluation — examining how and why authors construct meaning through language, structure, and literary devices.",
        notes: ['Tone: author\'s attitude (ironic, sombre, celebratory).', 'Mood: reader\'s emotional response.', 'Key devices: metaphor, simile, personification, alliteration, irony, symbolism.'],
        flashcards: [{ front: 'Metaphor vs Simile', back: 'Simile: comparison using "like/as" (quiet as a mouse). Metaphor: direct identification (He is a lion in battle).' }, { front: 'Dramatic irony', back: 'When the audience knows something a character does not — creates tension or humour.' }],
        practice: [
          { id: 'en-ap1', question: '"Life is a journey" is an example of:', options: ['Simile', 'Metaphor', 'Personification', 'Hyperbole'], answer: 1, explanation: 'A metaphor directly states one thing is another — no "like" or "as" is used.', ncert: { grade: 'Class 11', chapter: 'Hornbill', topic: 'Literary Devices' } },
          { id: 'en-ap2', question: '"The trees whispered secrets to the wind." This uses:', options: ['Irony', 'Simile', 'Personification', 'Allusion'], answer: 2, explanation: 'Personification gives human qualities (whispering) to non-human things (trees).', ncert: { grade: 'Class 11', chapter: 'Hornbill', topic: 'Personification' } },
          { id: 'en-ap3', question: "An author's choice of words to convey attitude is called:", options: ['Plot', 'Setting', 'Tone', 'Theme'], answer: 2, explanation: "Tone reflects the author's attitude toward the subject or audience, conveyed through diction and style.", ncert: { grade: 'Class 11', chapter: 'Hornbill', topic: 'Tone' } },
        ]
      },
      {
        id: 'en-a2', title: '2. Advanced Vocabulary & Word Formation', duration: '10 min', difficulty: 'Advanced', progress: 0,
        ncert: { grade: 'Class 11', chapter: 'Vocabulary', topic: 'Word Formation & Contextual Usage' },
        objectives: ['Decode unfamiliar words using prefixes, suffixes, and roots', 'Use context clues to determine meaning of advanced vocabulary', 'Distinguish connotation from denotation'],
        summary: 'Advanced vocabulary is built through word families and morphology. Understanding roots, prefixes, and suffixes unlocks thousands of new words.',
        notes: ['Prefix "un-": not (unhappy, uncertain).', 'Suffix "-ology": study of (biology, psychology).', 'Connotation: emotional implication (slim vs skinny). Denotation: literal dictionary meaning.'],
        flashcards: [{ front: 'Denotation vs Connotation', back: 'Denotation: exact dictionary meaning. Connotation: emotional/cultural associations (e.g. "cheap" vs "economical").' }, { front: 'Latin root "bene"', back: '"bene" = good/well: benefit, benevolent, beneficial.' }],
        practice: [
          { id: 'en-ap4', question: 'The prefix "mis-" in "misconduct" means:', options: ['Good', 'Again', 'Wrongly/badly', 'Under'], answer: 2, explanation: '"Mis-" indicates wrong or bad: misconduct (wrong behaviour), misinterpret, mislead.', ncert: { grade: 'Class 11', chapter: 'Vocabulary', topic: 'Prefixes' } },
          { id: 'en-ap5', question: '"Juvenile" and "childish" have the same denotation but "childish" has a more ___ connotation.', options: ['Positive', 'Neutral', 'Negative', 'Technical'], answer: 2, explanation: '"Childish" implies immature or silly (negative), while "juvenile" is more neutral/technical.', ncert: { grade: 'Class 11', chapter: 'Vocabulary', topic: 'Connotation' } },
          { id: 'en-ap6', question: 'Which word contains the Latin root "dict" (to say/speak)?', options: ['Dictation', 'Direction', 'Detection', 'Distraction'], answer: 0, explanation: '"Dict" (to say) appears in dictation, diction, contradiction, predict, verdict.', ncert: { grade: 'Class 11', chapter: 'Vocabulary', topic: 'Latin Roots' } },
        ]
      },
      {
        id: 'en-a3', title: '3. Argumentative Writing & Persuasion Techniques', duration: '10 min', difficulty: 'Advanced', progress: 0,
        ncert: { grade: 'Class 12', chapter: 'Writing Skills', topic: 'Argumentative & Persuasive Writing' },
        objectives: ['Construct a logical argument using claim, evidence, and warrant', 'Identify and use rhetorical appeals (logos, ethos, pathos)', 'Acknowledge and rebut counter-arguments'],
        summary: 'Argumentative writing requires logical structure, credible evidence, and strategic rhetorical appeals to persuade a discerning audience.',
        notes: ['Claim: the position or thesis.', 'Evidence: facts, statistics, expert opinions.', 'Warrant: reasoning linking evidence to claim.', 'Logos: logical appeal; Ethos: credibility; Pathos: emotional appeal.'],
        flashcards: [{ front: 'Ethos, Logos, Pathos', back: 'Ethos: appeal to credibility/authority. Logos: appeal to logic/evidence. Pathos: appeal to emotion.' }, { front: 'Counterargument + Rebuttal', back: 'Acknowledging the opposing view (concession) then showing why your argument is still stronger (rebuttal).' }],
        practice: [
          { id: 'en-ap7', question: 'A doctor saying "As a medical professional, I recommend…" is using:', options: ['Logos', 'Pathos', 'Ethos', 'Hyperbole'], answer: 2, explanation: 'Ethos is an appeal to authority and credibility — citing professional expertise to build trust.', ncert: { grade: 'Class 12', chapter: 'Writing Skills', topic: 'Rhetorical Appeals' } },
          { id: 'en-ap8', question: 'Using statistics and research to support an argument is an example of:', options: ['Pathos', 'Ethos', 'Logos', 'Anaphora'], answer: 2, explanation: 'Logos relies on logic, reasoning, and factual evidence (statistics, data, research).', ncert: { grade: 'Class 12', chapter: 'Writing Skills', topic: 'Logos' } },
          { id: 'en-ap9', question: 'Acknowledging an opposing view before refuting it is called:', options: ['Fallacy', 'Anecdote', 'Concession', 'Thesis'], answer: 2, explanation: 'Concession acknowledges merit in the opposing argument before explaining why your position is still stronger.', ncert: { grade: 'Class 12', chapter: 'Writing Skills', topic: 'Counter-argument' } },
        ]
      },
    ],
  },
}

// ---------------------------------------------------------------------------
// CONCEPT GRAPH NODES (per subject)
// ---------------------------------------------------------------------------
export const conceptGraphBySubject = {
  Mathematics: [
    { id: 'c_alg', name: 'Algebraic Foundations', status: 'green', masteryPct: 92, attempts: 28, avgScore: 94, lastPracticed: 'Yesterday', parents: [], ncert: { grade: 'Class 9', chapter: 'Chapter 2: Polynomials', topic: 'Variables & Constants' }, summary: 'Core understanding of variables, expressions, coefficients, and exponents.', recommendedLesson: { id: 'f1', title: 'Fundamentals of Variables & Expressions' } },
    { id: 'c_var', name: 'Variables & Like Terms', status: 'green', masteryPct: 88, attempts: 22, avgScore: 90, lastPracticed: '2 days ago', parents: ['c_alg'], ncert: { grade: 'Class 9', chapter: 'Chapter 2: Polynomials', topic: 'Combining Like Terms' }, summary: 'Isolating operations and combining algebraic variables.', recommendedLesson: { id: 'f3', title: 'Introduction to Exponent Rules' } },
    { id: 'c_lin', name: 'Linear Equations', status: 'green', masteryPct: 85, attempts: 34, avgScore: 86, lastPracticed: '3 days ago', parents: ['c_var'], ncert: { grade: 'Class 10', chapter: 'Chapter 3: Pair of Linear Equations', topic: 'Linear Equations in 1 & 2 Variables' }, summary: 'Solving first-degree equations using balances and inverse operations.', recommendedLesson: { id: 'f2', title: 'One-Step & Two-Step Linear Equations' } },
    { id: 'c_quad', name: 'Quadratic Equations', status: 'orange', masteryPct: 64, attempts: 19, avgScore: 68, lastPracticed: 'Today', parents: ['c_lin'], ncert: { grade: 'Class 10', chapter: 'Chapter 4: Quadratic Equations', topic: 'Factoring & Quadratic Formula' }, summary: 'Second-degree equations, factoring, quadratic formula, and discriminant.', recommendedLesson: { id: 'g1', title: 'Factoring & Solving Quadratic Equations' } },
    { id: 'c_disc', name: 'Discriminant & Roots', status: 'red', masteryPct: 38, attempts: 12, avgScore: 42, lastPracticed: '4 days ago', parents: ['c_quad'], ncert: { grade: 'Class 10', chapter: 'Chapter 4: Quadratic Equations', topic: 'Nature of Roots' }, summary: 'b² - 4ac evaluation and predicting real vs complex root behavior.', recommendedLesson: { id: 'g2', title: 'Quadratic Formula & The Discriminant' } },
    { id: 'c_vieta', name: "Polynomial Systems & Vieta's", status: 'red', masteryPct: 25, attempts: 8, avgScore: 30, lastPracticed: '1 week ago', parents: ['c_disc'], ncert: { grade: 'Class 11', chapter: 'Chapter 2: Polynomials', topic: "Vieta's Formulas" }, summary: 'Advanced root-coefficient relationships and cubic systems.', recommendedLesson: { id: 'a1', title: "Advanced Polynomial Systems & Vieta's Formulas" } },
  ],
  Science: [
    { id: 'sc_mat', name: 'States of Matter', status: 'green', masteryPct: 90, attempts: 25, avgScore: 92, lastPracticed: 'Yesterday', parents: [], ncert: { grade: 'Class 9', chapter: 'Chapter 1', topic: 'Matter in Our Surroundings' }, summary: 'Solid, liquid, gas states and phase transitions.', recommendedLesson: { id: 'sc-f1', title: 'States of Matter & Their Properties' } },
    { id: 'sc_cell', name: 'Cell Biology', status: 'green', masteryPct: 82, attempts: 20, avgScore: 85, lastPracticed: '2 days ago', parents: ['sc_mat'], ncert: { grade: 'Class 9', chapter: 'Chapter 5', topic: 'The Fundamental Unit of Life' }, summary: 'Cell structure, organelles, and functions in living organisms.', recommendedLesson: { id: 'sc-f2', title: 'The Fundamental Unit of Life — The Cell' } },
    { id: 'sc_photo', name: 'Photosynthesis', status: 'orange', masteryPct: 65, attempts: 18, avgScore: 68, lastPracticed: 'Today', parents: ['sc_cell'], ncert: { grade: 'Class 10', chapter: 'Chapter 6', topic: 'Life Processes' }, summary: 'How plants convert light, CO₂, and water into glucose.', recommendedLesson: { id: 'sc-g1', title: 'Photosynthesis & Life Processes in Plants' } },
    { id: 'sc_period', name: 'Periodic Classification', status: 'orange', masteryPct: 58, attempts: 15, avgScore: 60, lastPracticed: '3 days ago', parents: ['sc_cell'], ncert: { grade: 'Class 10', chapter: 'Chapter 5', topic: 'Periodic Classification' }, summary: 'Arrangement of elements by atomic number, groups and periods.', recommendedLesson: { id: 'sc-g3', title: 'Periodic Classification of Elements' } },
    { id: 'sc_genes', name: 'Heredity & Genetics', status: 'red', masteryPct: 40, attempts: 12, avgScore: 45, lastPracticed: '5 days ago', parents: ['sc_photo'], ncert: { grade: 'Class 10', chapter: 'Chapter 9', topic: 'Heredity and Evolution' }, summary: "Mendel's laws and DNA-based inheritance of traits.", recommendedLesson: { id: 'sc-a2', title: 'Heredity & Evolution: Darwin to Mendel' } },
    { id: 'sc_kinetics', name: 'Chemical Kinetics', status: 'red', masteryPct: 28, attempts: 8, avgScore: 32, lastPracticed: '1 week ago', parents: ['sc_period'], ncert: { grade: 'Class 11', chapter: 'Chapter 7', topic: 'Equilibrium' }, summary: 'Reaction rates, activation energy, and catalysis.', recommendedLesson: { id: 'sc-a1', title: 'Chemical Kinetics & Rate of Reaction' } },
  ],
  Physics: [
    { id: 'ph_motion', name: 'Speed, Distance & Time', status: 'green', masteryPct: 95, attempts: 30, avgScore: 96, lastPracticed: 'Yesterday', parents: [], ncert: { grade: 'Class 9', chapter: 'Chapter 8', topic: 'Motion' }, summary: 'Foundational concepts of motion: speed, velocity, and acceleration.', recommendedLesson: { id: 'ph-f1', title: 'Speed, Distance & Time' } },
    { id: 'ph_newton', name: "Newton's Laws", status: 'green', masteryPct: 80, attempts: 22, avgScore: 83, lastPracticed: '2 days ago', parents: ['ph_motion'], ncert: { grade: 'Class 9', chapter: 'Chapter 9', topic: 'Force and Laws of Motion' }, summary: "Three laws governing force, mass, acceleration, and reaction pairs.", recommendedLesson: { id: 'ph-g1', title: "Newton's Laws of Motion — Applications" } },
    { id: 'ph_energy', name: 'Work & Energy', status: 'green', masteryPct: 78, attempts: 20, avgScore: 80, lastPracticed: '3 days ago', parents: ['ph_newton'], ncert: { grade: 'Class 9', chapter: 'Chapter 11', topic: 'Work and Energy' }, summary: 'Work done, kinetic and potential energy, conservation of energy.', recommendedLesson: { id: 'ph-f3', title: 'Work, Energy & Power Basics' } },
    { id: 'ph_elec', name: "Electricity & Ohm's Law", status: 'orange', masteryPct: 62, attempts: 16, avgScore: 65, lastPracticed: 'Today', parents: ['ph_energy'], ncert: { grade: 'Class 10', chapter: 'Chapter 12', topic: 'Electricity' }, summary: "Ohm's law, series and parallel circuits, power dissipation.", recommendedLesson: { id: 'ph-g2', title: "Ohm's Law & Electric Circuits" } },
    { id: 'ph_light', name: 'Light: Reflection & Refraction', status: 'orange', masteryPct: 55, attempts: 14, avgScore: 58, lastPracticed: '4 days ago', parents: ['ph_elec'], ncert: { grade: 'Class 10', chapter: 'Chapter 10', topic: 'Light' }, summary: "Laws of reflection, Snell's law, mirror and lens image formation.", recommendedLesson: { id: 'ph-g3', title: 'Light — Reflection & Refraction' } },
    { id: 'ph_kinematics', name: 'Kinematics & Projectiles', status: 'red', masteryPct: 35, attempts: 10, avgScore: 38, lastPracticed: '6 days ago', parents: ['ph_light'], ncert: { grade: 'Class 11', chapter: 'Chapter 3', topic: 'Motion in a Straight Line' }, summary: 'Three equations of motion and projectile analysis.', recommendedLesson: { id: 'ph-a1', title: 'Kinematics: Equations of Motion in a Plane' } },
  ],
  Chemistry: [
    { id: 'ch_atoms', name: 'Atoms & Molecules', status: 'green', masteryPct: 91, attempts: 26, avgScore: 93, lastPracticed: 'Yesterday', parents: [], ncert: { grade: 'Class 9', chapter: 'Chapter 3', topic: 'Atoms and Molecules' }, summary: 'Atomic structure, chemical symbols, and the mole concept.', recommendedLesson: { id: 'ch-f1', title: 'Atoms, Molecules & Chemical Symbols' } },
    { id: 'ch_changes', name: 'Physical & Chemical Changes', status: 'green', masteryPct: 85, attempts: 20, avgScore: 87, lastPracticed: '2 days ago', parents: ['ch_atoms'], ncert: { grade: 'Class 9', chapter: 'Chapter 1', topic: 'Matter' }, summary: 'Distinguishing changes of form from changes of composition.', recommendedLesson: { id: 'ch-f2', title: 'Physical & Chemical Changes' } },
    { id: 'ch_acid', name: 'Acids, Bases & pH', status: 'orange', masteryPct: 68, attempts: 18, avgScore: 70, lastPracticed: 'Today', parents: ['ch_changes'], ncert: { grade: 'Class 10', chapter: 'Chapter 2', topic: 'Acids, Bases and Salts' }, summary: 'pH scale, neutralization, and salt formation.', recommendedLesson: { id: 'ch-g1', title: 'Acids, Bases, Salts & the pH Scale' } },
    { id: 'ch_react', name: 'Chemical Reactions & Balancing', status: 'orange', masteryPct: 60, attempts: 16, avgScore: 62, lastPracticed: '3 days ago', parents: ['ch_acid'], ncert: { grade: 'Class 10', chapter: 'Chapter 1', topic: 'Chemical Reactions' }, summary: 'Balancing equations and classifying reaction types including redox.', recommendedLesson: { id: 'ch-g2', title: 'Chemical Reactions & Equations' } },
    { id: 'ch_organic', name: 'Organic Chemistry', status: 'red', masteryPct: 42, attempts: 12, avgScore: 45, lastPracticed: '5 days ago', parents: ['ch_react'], ncert: { grade: 'Class 10', chapter: 'Chapter 4', topic: 'Carbon and Its Compounds' }, summary: 'Hydrocarbons, functional groups, and IUPAC nomenclature.', recommendedLesson: { id: 'ch-a1', title: 'Organic Chemistry: Hydrocarbons' } },
    { id: 'ch_electro', name: 'Electrochemistry', status: 'red', masteryPct: 30, attempts: 9, avgScore: 33, lastPracticed: '1 week ago', parents: ['ch_organic'], ncert: { grade: 'Class 12', chapter: 'Chapter 3', topic: 'Electrochemistry' }, summary: 'Galvanic and electrolytic cells, Faraday\'s laws.', recommendedLesson: { id: 'ch-a2', title: 'Electrochemistry & Electrolysis' } },
  ],
  Biology: [
    { id: 'bi_plants', name: 'Plant Classification', status: 'green', masteryPct: 90, attempts: 24, avgScore: 92, lastPracticed: 'Yesterday', parents: [], ncert: { grade: 'Class 9', chapter: 'Chapter 7', topic: 'Diversity in Living Organisms' }, summary: 'Major plant groups from algae to angiosperms.', recommendedLesson: { id: 'bi-f1', title: 'Plant Kingdom: Classification & Parts' } },
    { id: 'bi_cell', name: 'Cell Structure & Organelles', status: 'green', masteryPct: 84, attempts: 22, avgScore: 87, lastPracticed: '2 days ago', parents: ['bi_plants'], ncert: { grade: 'Class 9', chapter: 'Chapter 5', topic: 'The Fundamental Unit of Life' }, summary: 'Structure and functions of cell organelles; plant vs animal cells.', recommendedLesson: { id: 'bi-g1', title: 'Cell Structure & Organelles' } },
    { id: 'bi_photo', name: 'Photosynthesis & Nutrition', status: 'green', masteryPct: 76, attempts: 18, avgScore: 78, lastPracticed: '3 days ago', parents: ['bi_cell'], ncert: { grade: 'Class 7', chapter: 'Chapter 1', topic: 'Nutrition in Plants' }, summary: 'Autotrophic nutrition via photosynthesis; chlorophyll and stomata.', recommendedLesson: { id: 'bi-f3', title: 'Nutrition in Plants & Photosynthesis' } },
    { id: 'bi_circ', name: 'Human Circulatory System', status: 'orange', masteryPct: 62, attempts: 16, avgScore: 65, lastPracticed: 'Today', parents: ['bi_photo'], ncert: { grade: 'Class 10', chapter: 'Chapter 6', topic: 'Life Processes' }, summary: 'Double circulation, blood components, cardiac cycle.', recommendedLesson: { id: 'bi-g2', title: 'Human Circulatory System' } },
    { id: 'bi_genetics', name: "Genetics & Mendel's Laws", status: 'orange', masteryPct: 55, attempts: 14, avgScore: 58, lastPracticed: '4 days ago', parents: ['bi_circ'], ncert: { grade: 'Class 10', chapter: 'Chapter 9', topic: 'Heredity and Evolution' }, summary: "Punnett squares, dominance, segregation, and inheritance patterns.", recommendedLesson: { id: 'bi-g3', title: "Mendel's Laws of Inheritance" } },
    { id: 'bi_dna', name: 'DNA & Protein Synthesis', status: 'red', masteryPct: 35, attempts: 10, avgScore: 38, lastPracticed: '6 days ago', parents: ['bi_genetics'], ncert: { grade: 'Class 12', chapter: 'Chapter 6', topic: 'Molecular Basis of Inheritance' }, summary: 'Double helix, transcription (DNA → mRNA), and translation.', recommendedLesson: { id: 'bi-a1', title: 'Genetics: DNA Structure & Protein Synthesis' } },
  ],
  English: [
    { id: 'en_gram', name: 'Grammar Fundamentals', status: 'green', masteryPct: 92, attempts: 28, avgScore: 94, lastPracticed: 'Yesterday', parents: [], ncert: { grade: 'Class 8', chapter: 'Grammar Unit 1', topic: 'Parts of Speech' }, summary: 'Nouns, verbs, adjectives, and basic sentence construction.', recommendedLesson: { id: 'en-f1', title: 'Grammar Basics: Nouns, Verbs & Adjectives' } },
    { id: 'en_tenses', name: 'Tenses & Verb Forms', status: 'green', masteryPct: 85, attempts: 22, avgScore: 87, lastPracticed: '2 days ago', parents: ['en_gram'], ncert: { grade: 'Class 9', chapter: 'Grammar Unit 2', topic: 'Tenses' }, summary: 'Simple, continuous, perfect tenses and irregular verbs.', recommendedLesson: { id: 'en-f2', title: 'Tenses: Simple Past, Present & Future' } },
    { id: 'en_voice', name: 'Active & Passive Voice', status: 'orange', masteryPct: 68, attempts: 19, avgScore: 71, lastPracticed: 'Today', parents: ['en_tenses'], ncert: { grade: 'Class 9', chapter: 'Grammar', topic: 'Voice Transformation' }, summary: 'Transforming between active and passive voice constructions.', recommendedLesson: { id: 'en-g1', title: 'Active & Passive Voice' } },
    { id: 'en_reading', name: 'Reading Comprehension', status: 'orange', masteryPct: 60, attempts: 16, avgScore: 63, lastPracticed: '3 days ago', parents: ['en_voice'], ncert: { grade: 'Class 10', chapter: 'Reading Skills', topic: 'Comprehension Techniques' }, summary: 'Skimming, scanning, inference-drawing, and main-idea identification.', recommendedLesson: { id: 'en-g2', title: 'Reading Comprehension Strategies' } },
    { id: 'en_essay', name: 'Essay & Paragraph Writing', status: 'red', masteryPct: 45, attempts: 13, avgScore: 48, lastPracticed: '4 days ago', parents: ['en_reading'], ncert: { grade: 'Class 10', chapter: 'Writing Skills', topic: 'Essay Writing' }, summary: 'Essay structure, topic sentences, transitions, thesis statements.', recommendedLesson: { id: 'en-g3', title: 'Essay Writing & Paragraph Structure' } },
    { id: 'en_critical', name: 'Critical Reading & Analysis', status: 'red', masteryPct: 30, attempts: 9, avgScore: 33, lastPracticed: '1 week ago', parents: ['en_essay'], ncert: { grade: 'Class 11', chapter: 'Hornbill', topic: "Author's Purpose" }, summary: 'Tone, mood, literary devices, and analytical writing.', recommendedLesson: { id: 'en-a1', title: 'Critical Reading & Literary Analysis' } },
  ],
}

// ---------------------------------------------------------------------------
// MASTERY TRACKER (per subject)
// ---------------------------------------------------------------------------
export const masteryTrackerBySubject = {
  Mathematics: [
    { concept: 'Variables & Expressions', masteryPct: 92, attempts: 28, avgScore: '94%', lastPracticed: 'Yesterday', status: 'Mastered', ncert: 'Class 9 · Ch 2' },
    { concept: 'Linear Equations', masteryPct: 85, attempts: 34, avgScore: '86%', lastPracticed: '3 days ago', status: 'Mastered', ncert: 'Class 10 · Ch 3' },
    { concept: 'Quadratic Equations', masteryPct: 64, attempts: 19, avgScore: '68%', lastPracticed: 'Today', status: 'In Progress', ncert: 'Class 10 · Ch 4' },
    { concept: 'Discriminant & Nature of Roots', masteryPct: 38, attempts: 12, avgScore: '42%', lastPracticed: '4 days ago', status: 'Needs Work', ncert: 'Class 10 · Ch 4' },
    { concept: 'Polynomial Exponents', masteryPct: 78, attempts: 16, avgScore: '80%', lastPracticed: '5 days ago', status: 'Mastered', ncert: 'Class 9 · Ch 1' },
    { concept: "Vieta's Formulas", masteryPct: 25, attempts: 8, avgScore: '30%', lastPracticed: '1 week ago', status: 'Needs Work', ncert: 'Class 11 · Ch 2' },
  ],
  Science: [
    { concept: 'States of Matter', masteryPct: 90, attempts: 25, avgScore: '92%', lastPracticed: 'Yesterday', status: 'Mastered', ncert: 'Class 9 · Ch 1' },
    { concept: 'Cell Structure & Organelles', masteryPct: 82, attempts: 20, avgScore: '85%', lastPracticed: '2 days ago', status: 'Mastered', ncert: 'Class 9 · Ch 5' },
    { concept: 'Photosynthesis', masteryPct: 65, attempts: 18, avgScore: '68%', lastPracticed: 'Today', status: 'In Progress', ncert: 'Class 10 · Ch 6' },
    { concept: 'Periodic Classification', masteryPct: 58, attempts: 15, avgScore: '60%', lastPracticed: '3 days ago', status: 'In Progress', ncert: 'Class 10 · Ch 5' },
    { concept: 'Heredity & Genetics', masteryPct: 40, attempts: 12, avgScore: '45%', lastPracticed: '5 days ago', status: 'Needs Work', ncert: 'Class 10 · Ch 9' },
    { concept: 'Chemical Kinetics', masteryPct: 28, attempts: 8, avgScore: '32%', lastPracticed: '1 week ago', status: 'Needs Work', ncert: 'Class 11 · Ch 7' },
  ],
  Physics: [
    { concept: 'Speed, Distance & Time', masteryPct: 95, attempts: 30, avgScore: '96%', lastPracticed: 'Yesterday', status: 'Mastered', ncert: 'Class 9 · Ch 8' },
    { concept: "Newton's Laws of Motion", masteryPct: 80, attempts: 22, avgScore: '83%', lastPracticed: '2 days ago', status: 'Mastered', ncert: 'Class 9 · Ch 9' },
    { concept: 'Work & Energy', masteryPct: 78, attempts: 20, avgScore: '80%', lastPracticed: '3 days ago', status: 'Mastered', ncert: 'Class 9 · Ch 11' },
    { concept: "Electricity & Ohm's Law", masteryPct: 62, attempts: 16, avgScore: '65%', lastPracticed: 'Today', status: 'In Progress', ncert: 'Class 10 · Ch 12' },
    { concept: 'Light & Optics', masteryPct: 55, attempts: 14, avgScore: '58%', lastPracticed: '4 days ago', status: 'In Progress', ncert: 'Class 10 · Ch 10' },
    { concept: 'Kinematics & Projectiles', masteryPct: 35, attempts: 10, avgScore: '38%', lastPracticed: '6 days ago', status: 'Needs Work', ncert: 'Class 11 · Ch 3' },
  ],
  Chemistry: [
    { concept: 'Atoms & Molecules', masteryPct: 91, attempts: 26, avgScore: '93%', lastPracticed: 'Yesterday', status: 'Mastered', ncert: 'Class 9 · Ch 3' },
    { concept: 'Physical & Chemical Changes', masteryPct: 85, attempts: 20, avgScore: '87%', lastPracticed: '2 days ago', status: 'Mastered', ncert: 'Class 9 · Ch 1' },
    { concept: 'Acids, Bases & pH', masteryPct: 68, attempts: 18, avgScore: '70%', lastPracticed: 'Today', status: 'In Progress', ncert: 'Class 10 · Ch 2' },
    { concept: 'Chemical Reactions & Balancing', masteryPct: 60, attempts: 16, avgScore: '62%', lastPracticed: '3 days ago', status: 'In Progress', ncert: 'Class 10 · Ch 1' },
    { concept: 'Organic Chemistry', masteryPct: 42, attempts: 12, avgScore: '45%', lastPracticed: '5 days ago', status: 'Needs Work', ncert: 'Class 10 · Ch 4' },
    { concept: 'Electrochemistry', masteryPct: 30, attempts: 9, avgScore: '33%', lastPracticed: '1 week ago', status: 'Needs Work', ncert: 'Class 12 · Ch 3' },
  ],
  Biology: [
    { concept: 'Plant Classification & Structures', masteryPct: 90, attempts: 24, avgScore: '92%', lastPracticed: 'Yesterday', status: 'Mastered', ncert: 'Class 9 · Ch 7' },
    { concept: 'Cell Organelles & Functions', masteryPct: 84, attempts: 22, avgScore: '87%', lastPracticed: '2 days ago', status: 'Mastered', ncert: 'Class 9 · Ch 5' },
    { concept: 'Photosynthesis & Plant Nutrition', masteryPct: 76, attempts: 18, avgScore: '78%', lastPracticed: '3 days ago', status: 'Mastered', ncert: 'Class 7 · Ch 1' },
    { concept: 'Human Circulatory System', masteryPct: 62, attempts: 16, avgScore: '65%', lastPracticed: 'Today', status: 'In Progress', ncert: 'Class 10 · Ch 6' },
    { concept: "Genetics & Mendel's Laws", masteryPct: 55, attempts: 14, avgScore: '58%', lastPracticed: '4 days ago', status: 'In Progress', ncert: 'Class 10 · Ch 9' },
    { concept: 'DNA & Protein Synthesis', masteryPct: 35, attempts: 10, avgScore: '38%', lastPracticed: '6 days ago', status: 'Needs Work', ncert: 'Class 12 · Ch 6' },
  ],
  English: [
    { concept: 'Grammar: Parts of Speech', masteryPct: 92, attempts: 28, avgScore: '94%', lastPracticed: 'Yesterday', status: 'Mastered', ncert: 'Class 8 · Grammar' },
    { concept: 'Tenses & Verb Forms', masteryPct: 85, attempts: 22, avgScore: '87%', lastPracticed: '2 days ago', status: 'Mastered', ncert: 'Class 9 · Grammar' },
    { concept: 'Active & Passive Voice', masteryPct: 68, attempts: 19, avgScore: '71%', lastPracticed: 'Today', status: 'In Progress', ncert: 'Class 9 · Grammar' },
    { concept: 'Reading Comprehension', masteryPct: 60, attempts: 16, avgScore: '63%', lastPracticed: '3 days ago', status: 'In Progress', ncert: 'Class 10 · Reading' },
    { concept: 'Essay & Paragraph Writing', masteryPct: 45, attempts: 13, avgScore: '48%', lastPracticed: '4 days ago', status: 'Needs Work', ncert: 'Class 10 · Writing' },
    { concept: 'Critical Reading & Analysis', masteryPct: 30, attempts: 9, avgScore: '33%', lastPracticed: '1 week ago', status: 'Needs Work', ncert: 'Class 11 · Hornbill' },
  ],
}

// ---------------------------------------------------------------------------
// SESSION HISTORY (per subject)
// ---------------------------------------------------------------------------
export const sessionHistoryBySubject = {
  Mathematics: [
    { id: 'sh1', type: 'Lesson', title: 'Factoring Quadratic Equations', date: 'Today, 11:20 AM', duration: '10 min', progress: '100%', score: '3/3 Practice' },
    { id: 'sh2', type: 'Doubt', title: 'Why discriminant D < 0 has no real roots?', date: 'Yesterday, 8:45 PM', duration: '5 min', progress: 'Resolved', mode: 'Socratic' },
    { id: 'sh3', type: 'Practice', title: 'Linear Equations Challenge Set', date: '22 Jul 2026', duration: '15 min', progress: '100%', score: '9/10 (90%)' },
    { id: 'sh4', type: 'Diagnostic', title: 'Initial Math Placement Quiz', date: '20 Jul 2026', duration: '12 min', progress: 'Completed', levelAssigned: 'Grade-Level' },
    { id: 'sh5', type: 'Lesson', title: 'Fundamentals of Variables', date: '19 Jul 2026', duration: '10 min', progress: '100%', score: '3/3 Practice' },
  ],
  Science: [
    { id: 'sh1', type: 'Lesson', title: 'States of Matter & Their Properties', date: 'Today, 10:15 AM', duration: '10 min', progress: '100%', score: '3/3 Practice' },
    { id: 'sh2', type: 'Doubt', title: 'Why does photosynthesis release O₂?', date: 'Yesterday, 7:30 PM', duration: '5 min', progress: 'Resolved', mode: 'Socratic' },
    { id: 'sh3', type: 'Practice', title: 'Cell Biology Concept Check', date: '22 Jul 2026', duration: '12 min', progress: '100%', score: '8/10 (80%)' },
    { id: 'sh4', type: 'Diagnostic', title: 'Science Placement Diagnostic Quiz', date: '20 Jul 2026', duration: '12 min', progress: 'Completed', levelAssigned: 'Grade-Level' },
    { id: 'sh5', type: 'Lesson', title: 'The Fundamental Unit of Life — The Cell', date: '19 Jul 2026', duration: '10 min', progress: '100%', score: '3/3 Practice' },
  ],
  Physics: [
    { id: 'sh1', type: 'Lesson', title: "Newton's Laws — Applications", date: 'Today, 9:45 AM', duration: '10 min', progress: '100%', score: '3/3 Practice' },
    { id: 'sh2', type: 'Doubt', title: 'What is the difference between velocity and speed?', date: 'Yesterday, 6:20 PM', duration: '5 min', progress: 'Resolved', mode: 'Direct' },
    { id: 'sh3', type: 'Practice', title: 'Work & Energy Problem Set', date: '22 Jul 2026', duration: '15 min', progress: '100%', score: '9/10 (90%)' },
    { id: 'sh4', type: 'Diagnostic', title: 'Physics Initial Diagnostic Quiz', date: '20 Jul 2026', duration: '12 min', progress: 'Completed', levelAssigned: 'Grade-Level' },
    { id: 'sh5', type: 'Lesson', title: 'Speed, Distance & Time Basics', date: '19 Jul 2026', duration: '10 min', progress: '100%', score: '3/3 Practice' },
  ],
  Chemistry: [
    { id: 'sh1', type: 'Lesson', title: 'Acids, Bases & the pH Scale', date: 'Today, 11:00 AM', duration: '10 min', progress: '100%', score: '3/3 Practice' },
    { id: 'sh2', type: 'Doubt', title: 'What makes a strong acid vs a weak acid?', date: 'Yesterday, 9:00 PM', duration: '5 min', progress: 'Resolved', mode: 'Socratic' },
    { id: 'sh3', type: 'Practice', title: 'Balancing Chemical Equations Set', date: '22 Jul 2026', duration: '15 min', progress: '100%', score: '8/10 (80%)' },
    { id: 'sh4', type: 'Diagnostic', title: 'Chemistry Initial Diagnostic Quiz', date: '20 Jul 2026', duration: '12 min', progress: 'Completed', levelAssigned: 'Grade-Level' },
    { id: 'sh5', type: 'Lesson', title: 'Atoms, Molecules & Chemical Symbols', date: '19 Jul 2026', duration: '10 min', progress: '100%', score: '3/3 Practice' },
  ],
  Biology: [
    { id: 'sh1', type: 'Lesson', title: 'Cell Structure & Organelles', date: 'Today, 10:30 AM', duration: '10 min', progress: '100%', score: '3/3 Practice' },
    { id: 'sh2', type: 'Doubt', title: 'How does mitosis differ from meiosis?', date: 'Yesterday, 7:15 PM', duration: '5 min', progress: 'Resolved', mode: 'Socratic' },
    { id: 'sh3', type: 'Practice', title: "Mendel's Laws Practice Set", date: '22 Jul 2026', duration: '12 min', progress: '100%', score: '9/10 (90%)' },
    { id: 'sh4', type: 'Diagnostic', title: 'Biology Initial Diagnostic Quiz', date: '20 Jul 2026', duration: '12 min', progress: 'Completed', levelAssigned: 'Advanced' },
    { id: 'sh5', type: 'Lesson', title: 'Plant Kingdom: Classification & Parts', date: '19 Jul 2026', duration: '10 min', progress: '100%', score: '3/3 Practice' },
  ],
  English: [
    { id: 'sh1', type: 'Lesson', title: 'Active & Passive Voice', date: 'Today, 2:00 PM', duration: '10 min', progress: '100%', score: '3/3 Practice' },
    { id: 'sh2', type: 'Doubt', title: 'When do we use the passive voice?', date: 'Yesterday, 4:30 PM', duration: '5 min', progress: 'Resolved', mode: 'Direct' },
    { id: 'sh3', type: 'Practice', title: 'Grammar & Tenses Challenge Set', date: '22 Jul 2026', duration: '15 min', progress: '100%', score: '8/10 (80%)' },
    { id: 'sh4', type: 'Diagnostic', title: 'English Initial Diagnostic Quiz', date: '20 Jul 2026', duration: '12 min', progress: 'Completed', levelAssigned: 'Grade-Level' },
    { id: 'sh5', type: 'Lesson', title: 'Grammar Basics: Nouns, Verbs & Adjectives', date: '19 Jul 2026', duration: '10 min', progress: '100%', score: '3/3 Practice' },
  ],
}

// ---------------------------------------------------------------------------
// CERTIFICATES (per subject)
// ---------------------------------------------------------------------------
export const certificatesBySubject = {
  Mathematics: [
    { id: 'cert1', title: 'Foundations of Algebra & Linear Equations', date: 'May 2026', ncert: 'NCERT Class 9 & 10 Certified' },
    { id: 'cert2', title: 'Quadratic Equations Mastery', date: 'Jul 2026', ncert: 'NCERT Class 10 Chapter 4 Certified' },
  ],
  Science: [
    { id: 'cert1', title: 'Life Processes & Cell Biology', date: 'Jun 2026', ncert: 'NCERT Class 9 & 10 Certified' },
    { id: 'cert2', title: 'Matter in Our Surroundings', date: 'Jul 2026', ncert: 'NCERT Class 9 Chapter 1 Certified' },
  ],
  Physics: [
    { id: 'cert1', title: 'Motion, Force & Laws of Physics', date: 'Jun 2026', ncert: 'NCERT Class 9 Certified' },
    { id: 'cert2', title: 'Work, Energy & Power Mastery', date: 'Jul 2026', ncert: 'NCERT Class 9 Chapter 11 Certified' },
  ],
  Chemistry: [
    { id: 'cert1', title: 'Atoms, Molecules & Chemical Bonding', date: 'May 2026', ncert: 'NCERT Class 9 Certified' },
    { id: 'cert2', title: 'Acids, Bases & Chemical Reactions', date: 'Jul 2026', ncert: 'NCERT Class 10 Chapters 1–2 Certified' },
  ],
  Biology: [
    { id: 'cert1', title: 'Cell Biology & Plant Kingdom', date: 'Jun 2026', ncert: 'NCERT Class 9 Certified' },
    { id: 'cert2', title: 'Life Processes Mastery', date: 'Jul 2026', ncert: 'NCERT Class 10 Chapter 6 Certified' },
  ],
  English: [
    { id: 'cert1', title: 'Grammar & Tenses Foundations', date: 'May 2026', ncert: 'NCERT Class 8 & 9 Certified' },
    { id: 'cert2', title: 'Reading & Writing Skills', date: 'Jul 2026', ncert: 'NCERT Class 10 Certified' },
  ],
}

// ---------------------------------------------------------------------------
// AI TUTOR DOUBT HISTORY (per subject)
// ---------------------------------------------------------------------------
export const doubtHistoryBySubject = {
  Mathematics: [
    {
      id: 'dh1', title: 'Why does the quadratic formula have ±?', timestamp: '10 min ago',
      rootConcept: 'Quadratic Equations', relatedConcepts: ['Parabola Symmetry', 'Square Root Definition', 'Two Real Roots'], mode: 'Socratic',
      ncert: { grade: 'Class 10', chapter: 'Chapter 4', topic: 'Quadratic Formula' },
      solutionDirect: 'The ± arises because any positive number has two square roots — one positive, one negative. Geometrically, a parabola can cross the x-axis at two symmetrical points.',
      solutionSocratic: 'Think about x² = 9. What two numbers, when squared, equal 9? (+3 and -3). Since both square to 9, how does that apply to the square root inside the formula?'
    },
    {
      id: 'dh2', title: 'How do I know when a discriminant is negative?', timestamp: 'Yesterday',
      rootConcept: 'Discriminant Analysis', relatedConcepts: ['Negative Square Roots', 'D = b² - 4ac', 'Imaginary Roots'], mode: 'Direct',
      ncert: { grade: 'Class 10', chapter: 'Chapter 4', topic: 'Nature of Roots' },
      solutionDirect: 'Calculate D = b² - 4ac. If 4ac > b², then D is negative. Since √(negative) is not real, there are no real roots.',
      solutionSocratic: 'What happens when you calculate √(-16) on a real-number calculator? Why can no real number multiplied by itself be negative?'
    },
    {
      id: 'dh3', title: 'Difference between terms and factors?', timestamp: '3 days ago',
      rootConcept: 'Variables & Like Terms', relatedConcepts: ['Addition vs Multiplication', 'Algebraic Expressions'], mode: 'Direct',
      ncert: { grade: 'Class 9', chapter: 'Chapter 2', topic: 'Polynomial Components' },
      solutionDirect: 'Terms are added/subtracted (3x and 5 in 3x+5). Factors are multiplied (3 and x in 3x).',
      solutionSocratic: 'In 4x + 7, what operation separates 4x and 7? In 4x, what operation connects 4 and x?'
    },
  ],
  Science: [
    {
      id: 'dh1', title: 'Why does photosynthesis release oxygen?', timestamp: '15 min ago',
      rootConcept: 'Photosynthesis', relatedConcepts: ['Water Splitting', 'Light Reactions', 'Chlorophyll Absorption'], mode: 'Socratic',
      ncert: { grade: 'Class 10', chapter: 'Chapter 6', topic: 'Photosynthesis' },
      solutionDirect: 'During the light-dependent reactions, water molecules are split (photolysis) to release electrons, protons, and oxygen. The oxygen is a by-product of this splitting.',
      solutionSocratic: 'Where does the oxygen in photosynthesis come from — the CO₂ or the water? What happens to the water molecule when it absorbs light energy in the chloroplast?'
    },
    {
      id: 'dh2', title: 'What is the difference between osmosis and diffusion?', timestamp: 'Yesterday',
      rootConcept: 'Cell Biology', relatedConcepts: ['Cell Membrane', 'Selective Permeability', 'Concentration Gradient'], mode: 'Direct',
      ncert: { grade: 'Class 9', chapter: 'Chapter 5', topic: 'Cell Membrane Transport' },
      solutionDirect: 'Diffusion: movement of any substance from high to low concentration. Osmosis: diffusion of WATER specifically through a semi-permeable membrane from high water potential to low water potential.',
      solutionSocratic: 'Both involve particles moving down a concentration gradient. What is special about osmosis that makes it different from general diffusion?'
    },
    {
      id: 'dh3', title: 'Why are elements in the same group chemically similar?', timestamp: '3 days ago',
      rootConcept: 'Periodic Classification', relatedConcepts: ['Valence Electrons', 'Electron Configuration', 'Chemical Properties'], mode: 'Direct',
      ncert: { grade: 'Class 10', chapter: 'Chapter 5', topic: 'Periodic Classification' },
      solutionDirect: 'Elements in the same group have the same number of valence (outermost) electrons. Since chemical reactivity depends on valence electrons, they show similar bonding behavior.',
      solutionSocratic: 'Think about what determines how an atom reacts — its nucleus or its outermost electrons? Why would having the same number of outer electrons make elements behave similarly?'
    },
  ],
  Physics: [
    {
      id: 'dh1', title: 'What is the difference between speed and velocity?', timestamp: '20 min ago',
      rootConcept: 'Speed & Motion', relatedConcepts: ['Scalar vs Vector', 'Displacement vs Distance', 'Uniform Motion'], mode: 'Direct',
      ncert: { grade: 'Class 9', chapter: 'Chapter 8', topic: 'Motion' },
      solutionDirect: 'Speed = distance/time (scalar, no direction). Velocity = displacement/time (vector, includes direction). A car going in circles can have constant speed but changing velocity.',
      solutionSocratic: 'If you walk 4 km north then 4 km south, what is your total distance? What is your displacement? Which relates to speed, which to velocity?'
    },
    {
      id: 'dh2', title: "Why does F = ma, not F = mv?", timestamp: 'Yesterday',
      rootConcept: "Newton's Second Law", relatedConcepts: ['Acceleration', 'Rate of Change of Momentum', 'Inertia'], mode: 'Socratic',
      ncert: { grade: 'Class 9', chapter: 'Chapter 9', topic: "Newton's Second Law" },
      solutionDirect: "Force causes a change in velocity (acceleration), not velocity itself. A constant velocity requires NO net force. Only when velocity changes does a net force exist.",
      solutionSocratic: "If you push a book at constant velocity across a table, are you doing the work against the book's motion or against friction? Does the book accelerate?"
    },
    {
      id: 'dh3', title: 'Why does a parallel circuit have lower resistance than a single resistor?', timestamp: '4 days ago',
      rootConcept: "Ohm's Law & Circuits", relatedConcepts: ['Current Splitting', 'Reciprocal Resistance', 'Voltage'], mode: 'Direct',
      ncert: { grade: 'Class 10', chapter: 'Chapter 12', topic: 'Parallel Circuits' },
      solutionDirect: 'In parallel, current has multiple paths to flow through. More paths = less total opposition. Mathematically: 1/R_total = 1/R₁ + 1/R₂, giving R_total < any individual resistor.',
      solutionSocratic: 'Imagine water flowing through two pipes instead of one. Does adding a second pipe make it easier or harder for water to flow? Why?'
    },
  ],
  Chemistry: [
    {
      id: 'dh1', title: 'What makes an acid acidic?', timestamp: '10 min ago',
      rootConcept: 'Acids & Bases', relatedConcepts: ['H⁺ Ions', 'pH Scale', 'Arrhenius Definition'], mode: 'Socratic',
      ncert: { grade: 'Class 10', chapter: 'Chapter 2', topic: 'Acids, Bases and Salts' },
      solutionDirect: 'An acid releases H⁺ (hydrogen) ions in water, lowering the pH below 7. More H⁺ ions = lower pH = stronger acid.',
      solutionSocratic: 'What ion do all acids have in common? How does dissolving HCl in water produce that ion? Why do more H⁺ ions make the solution more acidic?'
    },
    {
      id: 'dh2', title: 'What is the difference between oxidation and reduction?', timestamp: 'Yesterday',
      rootConcept: 'Redox Reactions', relatedConcepts: ['Electron Transfer', 'OIL RIG', 'Oxidation State'], mode: 'Direct',
      ncert: { grade: 'Class 10', chapter: 'Chapter 1', topic: 'Redox Reactions' },
      solutionDirect: 'OIL RIG: Oxidation Is Loss (of electrons); Reduction Is Gain (of electrons). In Zn + 2HCl → ZnCl₂ + H₂: Zinc loses electrons (oxidized); Hydrogen gains electrons (reduced).',
      solutionSocratic: 'In Zn → Zn²⁺, does zinc gain or lose electrons? The zinc is said to be "oxidized" — does it fit the "loss of electrons" definition?'
    },
    {
      id: 'dh3', title: 'Why does the reactivity series matter for displacement?', timestamp: '4 days ago',
      rootConcept: 'Reactivity Series', relatedConcepts: ['Displacement Reactions', 'Metal Activity', 'Reducing Power'], mode: 'Direct',
      ncert: { grade: 'Class 10', chapter: 'Chapter 3', topic: 'Metals and Non-metals' },
      solutionDirect: 'A more reactive metal displaces a less reactive one from its salt solution. Example: Zn + CuSO₄ → ZnSO₄ + Cu (Zinc is above Copper in the reactivity series).',
      solutionSocratic: 'If Metal A displaces Metal B from a solution, what does that tell you about their relative positions in the reactivity series? Can Metal B displace Metal A?'
    },
  ],
  Biology: [
    {
      id: 'dh1', title: 'How does mitosis differ from meiosis?', timestamp: '10 min ago',
      rootConcept: 'Cell Division', relatedConcepts: ['Chromosome Number', 'DNA Replication', 'Gamete Formation'], mode: 'Socratic',
      ncert: { grade: 'Class 11', chapter: 'Chapter 10', topic: 'Cell Cycle and Division' },
      solutionDirect: 'Mitosis: 1 division → 2 identical diploid cells (growth/repair). Meiosis: 2 divisions → 4 haploid cells (gametes with half the chromosomes).',
      solutionSocratic: 'If sperm and egg are formed by mitosis, what would happen to chromosome number in each generation of offspring? Why must gametes have half the chromosomes?'
    },
    {
      id: 'dh2', title: "What is Mendel's Law of Independent Assortment?", timestamp: 'Yesterday',
      rootConcept: 'Genetics & Heredity', relatedConcepts: ['Dihybrid Cross', 'Gamete Formation', 'Chromosome Segregation'], mode: 'Direct',
      ncert: { grade: 'Class 10', chapter: 'Chapter 9', topic: "Mendel's Laws" },
      solutionDirect: "Genes on different chromosomes assort independently during gamete formation. A dihybrid cross (AaBb × AaBb) gives a 9:3:3:1 phenotypic ratio.",
      solutionSocratic: "In a plant that is YyRr, can the Y allele go with either R or r into a gamete? What are the 4 possible gamete combinations?"
    },
    {
      id: 'dh3', title: 'How do chloroplasts and mitochondria differ in function?', timestamp: '3 days ago',
      rootConcept: 'Cell Organelles', relatedConcepts: ['ATP', 'Photosynthesis', 'Cellular Respiration'], mode: 'Direct',
      ncert: { grade: 'Class 9', chapter: 'Chapter 5', topic: 'Cell Organelles' },
      solutionDirect: 'Chloroplasts: use light energy to convert CO₂ + H₂O → glucose + O₂ (photosynthesis). Mitochondria: break down glucose to release ATP energy (cellular respiration). Chloroplasts store energy; mitochondria release it.',
      solutionSocratic: 'Which organelle takes in energy from the environment and stores it in food? Which takes food and converts it into a form (ATP) the cell can directly use?'
    },
  ],
  English: [
    {
      id: 'dh1', title: 'When should I use passive voice in writing?', timestamp: '10 min ago',
      rootConcept: 'Active & Passive Voice', relatedConcepts: ['Formal Writing', 'Agent Omission', 'Scientific Writing'], mode: 'Direct',
      ncert: { grade: 'Class 9', chapter: 'Grammar', topic: 'Voice Transformation' },
      solutionDirect: 'Use passive voice when: (1) the agent (doer) is unknown, unimportant, or obvious; (2) you want to emphasize the action or object; (3) in formal, scientific, or academic writing (e.g. "The experiment was conducted at 25°C").',
      solutionSocratic: 'In "The window was broken", do we know who broke it? Does it matter? What is the focus — the breaker or the broken window? When would this focus be useful?'
    },
    {
      id: 'dh2', title: "What's the difference between a metaphor and a simile?", timestamp: 'Yesterday',
      rootConcept: 'Literary Devices', relatedConcepts: ['Figurative Language', 'Tone', 'Imagery'], mode: 'Direct',
      ncert: { grade: 'Class 10', chapter: 'Literature Reader', topic: 'Figures of Speech' },
      solutionDirect: 'Simile: uses "like" or "as" (She runs like the wind). Metaphor: directly states one thing IS another (She is the wind). Both compare, but metaphor is more direct and emphatic.',
      solutionSocratic: '"He is a lion in battle" vs "He fights like a lion." Which says the man IS the lion? Which says he is merely like one? Which feels stronger?'
    },
    {
      id: 'dh3', title: 'How do I write a strong thesis statement?', timestamp: '4 days ago',
      rootConcept: 'Essay Writing', relatedConcepts: ['Argument Structure', 'Topic Sentence', 'Claim & Evidence'], mode: 'Socratic',
      ncert: { grade: 'Class 10', chapter: 'Writing Skills', topic: 'Essay Structure' },
      solutionDirect: 'A strong thesis: (1) is specific, not vague; (2) makes a debatable claim (not just a fact); (3) previews the main supporting points. Example: "Social media harms teenagers\' mental health by promoting unrealistic comparisons, reducing face-to-face connection, and creating addictive usage patterns."',
      solutionSocratic: '"Social media exists." Is this a thesis? It is true but not debatable. How could you transform it into a claim someone could argue against?'
    },
  ],
}

// ---------------------------------------------------------------------------
// AI SUGGESTION CHIPS (per subject)
// ---------------------------------------------------------------------------
export const aiSuggestionChipsBySubject = {
  Mathematics: ['Explain in Socratic Mode', 'Show direct step-by-step solution', 'Give a real-world NCERT example', 'What is the root conceptual weakness?'],
  Science: ['Explain with a diagram description', 'Show real-world application', 'Give an NCERT-aligned example', 'What is the root conceptual gap?'],
  Physics: ['Explain with a worked example', 'Show formula derivation step-by-step', 'Give me a real-world Physics application', 'Identify my root concept gap'],
  Chemistry: ['Explain with a chemical equation', 'Show balancing step-by-step', 'Give me an NCERT-aligned example', 'What misconception do I have?'],
  Biology: ['Explain with a diagram description', 'Show the biological process step-by-step', 'Give an NCERT-aligned example', 'What is the root concept I am missing?'],
  English: ['Explain with a written example', 'Show the grammar rule in practice', 'Give me an NCERT passage example', 'What writing weakness do I need to fix?'],
}

// ---------------------------------------------------------------------------
// TEACHER DASHBOARD DATA (per subject)
// Provides subject-aware: weakTopics, commonErrorPatterns, studentsNeedingHelp,
// recentSubmissions, classStudentList overrides
// ---------------------------------------------------------------------------
export const teacherDataBySubject = {
  Mathematics: {
    subject: 'Mathematics',
    weakTopics: ['Discriminant & Nature of Roots', 'Polynomial Systems', 'Trigonometric Ratios'],
    commonErrorPatterns: [
      { id: 'err1', error: 'Sign Inversion in Quadratic Formula (−b)', affectedStudents: 14, description: 'Students forget to flip the sign of b when b is already negative (e.g. b = −5 written as −5 instead of +5).' },
      { id: 'err2', error: 'Misapplying Exponent Rules (Adding instead of Multiplying)', affectedStudents: 11, description: 'Confusing (x³)⁴ = x¹² with x³ · x⁴ = x⁷.' },
      { id: 'err3', error: 'Forgetting Double Roots (±) in Square Root Method', affectedStudents: 9, description: 'Writing x² = 49 as x = 7 only, omitting x = −7.' },
    ],
    studentsNeedingHelp: [
      { id: 'h1', name: 'Rohan Gupta', topic: 'Discriminant & Roots', score: 42, level: 'Foundational', avatar: 'RG', lastActive: '2h ago' },
      { id: 'h2', name: 'Sneha Iyer', topic: 'Trigonometric Identities', score: 38, level: 'Foundational', avatar: 'SI', lastActive: 'Yesterday' },
      { id: 'h3', name: 'Karan Malhotra', topic: 'Linear Equations', score: 45, level: 'Grade-Level', avatar: 'KM', lastActive: '3h ago' },
    ],
    recentSubmissions: [
      { id: 'sub1', student: 'Priya Sharma', assignment: 'Quadratic Formula Worksheet', status: 'Graded', score: '19/20' },
      { id: 'sub2', student: 'Rohan Gupta', assignment: 'Diagnostic Practice Set', status: 'Needs review', score: '8/20' },
      { id: 'sub3', student: 'Ishaan Patel', assignment: 'Advanced Polynomials Challenge', status: 'Graded', score: '10/10' },
      { id: 'sub4', student: 'Sneha Iyer', assignment: 'Variables & Like Terms Quiz', status: 'Pending', score: '—' },
    ],
  },

  Science: {
    subject: 'Science',
    weakTopics: ['Heredity & Genetics', 'Chemical Kinetics', 'Nervous System'],
    commonErrorPatterns: [
      { id: 'err1', error: 'Confusing Photosynthesis & Respiration Equations', affectedStudents: 13, description: 'Students write CO₂ as a product of photosynthesis instead of O₂, mixing up reactants and products.' },
      { id: 'err2', error: 'Prokaryote vs Eukaryote Mix-Up', affectedStudents: 10, description: 'Attributing nucleus to bacteria or omitting membrane-bound organelles from animal cell diagrams.' },
      { id: 'err3', error: 'Mendelian Ratio Errors in Dihybrid Cross', affectedStudents: 8, description: 'Applying 3:1 ratio to dihybrid (AaBb) crosses instead of the correct 9:3:3:1 phenotypic ratio.' },
    ],
    studentsNeedingHelp: [
      { id: 'h1', name: 'Rohan Gupta', topic: 'Heredity & Genetics', score: 38, level: 'Foundational', avatar: 'RG', lastActive: '2h ago' },
      { id: 'h2', name: 'Sneha Iyer', topic: 'Chemical Kinetics', score: 41, level: 'Foundational', avatar: 'SI', lastActive: 'Yesterday' },
      { id: 'h3', name: 'Karan Malhotra', topic: 'Photosynthesis', score: 48, level: 'Grade-Level', avatar: 'KM', lastActive: '3h ago' },
    ],
    recentSubmissions: [
      { id: 'sub1', student: 'Priya Sharma', assignment: 'Life Processes Worksheet', status: 'Graded', score: '18/20' },
      { id: 'sub2', student: 'Rohan Gupta', assignment: 'Cell Biology Diagnostic', status: 'Needs review', score: '7/20' },
      { id: 'sub3', student: 'Ishaan Patel', assignment: 'Advanced Genetics Challenge', status: 'Graded', score: '10/10' },
      { id: 'sub4', student: 'Sneha Iyer', assignment: 'States of Matter Quiz', status: 'Pending', score: '—' },
    ],
  },

  Physics: {
    subject: 'Physics',
    weakTopics: ['Kinematics & Equations of Motion', 'Wave Optics', "Gravitational Force"],
    commonErrorPatterns: [
      { id: 'err1', error: 'Confusing Distance and Displacement', affectedStudents: 15, description: 'Students use total path length (distance) where displacement is required, especially in circular path problems.' },
      { id: 'err2', error: "Sign Error in Newton's 2nd Law (F = ma)", affectedStudents: 11, description: 'Forgetting to account for direction when multiple forces act; treating deceleration as positive acceleration.' },
      { id: 'err3', error: "Misapplying Ohm's Law in Parallel Circuits", affectedStudents: 9, description: 'Adding resistances directly in parallel rather than using the reciprocal formula 1/R = 1/R₁ + 1/R₂.' },
    ],
    studentsNeedingHelp: [
      { id: 'h1', name: 'Rohan Gupta', topic: 'Kinematics', score: 40, level: 'Foundational', avatar: 'RG', lastActive: '2h ago' },
      { id: 'h2', name: 'Sneha Iyer', topic: 'Wave Optics', score: 35, level: 'Foundational', avatar: 'SI', lastActive: 'Yesterday' },
      { id: 'h3', name: 'Karan Malhotra', topic: 'Electric Circuits', score: 44, level: 'Grade-Level', avatar: 'KM', lastActive: '3h ago' },
    ],
    recentSubmissions: [
      { id: 'sub1', student: 'Priya Sharma', assignment: "Newton's Laws Problem Set", status: 'Graded', score: '19/20' },
      { id: 'sub2', student: 'Rohan Gupta', assignment: 'Motion Diagnostic Quiz', status: 'Needs review', score: '9/20' },
      { id: 'sub3', student: 'Ishaan Patel', assignment: 'Advanced Kinematics Challenge', status: 'Graded', score: '10/10' },
      { id: 'sub4', student: 'Sneha Iyer', assignment: 'Work & Energy Worksheet', status: 'Pending', score: '—' },
    ],
  },

  Chemistry: {
    subject: 'Chemistry',
    weakTopics: ['Organic Chemistry & IUPAC', 'Electrochemistry', 'Thermochemistry'],
    commonErrorPatterns: [
      { id: 'err1', error: 'Confusing Oxidation and Reduction Definitions', affectedStudents: 14, description: 'Students reverse the OIL RIG rule — writing oxidation as gain of electrons instead of loss.' },
      { id: 'err2', error: 'Unbalanced Chemical Equations', affectedStudents: 12, description: 'Changing subscripts instead of coefficients when balancing, violating molecular formulas.' },
      { id: 'err3', error: 'pH Scale Inversion (Lower pH = More Basic)', affectedStudents: 10, description: 'Associating lower pH numbers with higher basicity instead of higher acidity.' },
    ],
    studentsNeedingHelp: [
      { id: 'h1', name: 'Rohan Gupta', topic: 'Organic Chemistry', score: 39, level: 'Foundational', avatar: 'RG', lastActive: '2h ago' },
      { id: 'h2', name: 'Sneha Iyer', topic: 'Electrochemistry', score: 36, level: 'Foundational', avatar: 'SI', lastActive: 'Yesterday' },
      { id: 'h3', name: 'Karan Malhotra', topic: 'Redox Reactions', score: 43, level: 'Grade-Level', avatar: 'KM', lastActive: '3h ago' },
    ],
    recentSubmissions: [
      { id: 'sub1', student: 'Priya Sharma', assignment: 'Acids & Bases Worksheet', status: 'Graded', score: '18/20' },
      { id: 'sub2', student: 'Rohan Gupta', assignment: 'Chemical Equations Diagnostic', status: 'Needs review', score: '8/20' },
      { id: 'sub3', student: 'Ishaan Patel', assignment: 'Organic Chemistry Challenge', status: 'Graded', score: '10/10' },
      { id: 'sub4', student: 'Sneha Iyer', assignment: 'Periodic Table Quiz', status: 'Pending', score: '—' },
    ],
  },

  Biology: {
    subject: 'Biology',
    weakTopics: ['DNA & Protein Synthesis', 'Ecosystem Energy Flow', 'Endocrine System'],
    commonErrorPatterns: [
      { id: 'err1', error: 'Confusing Mitosis and Meiosis Outcomes', affectedStudents: 13, description: 'Stating that meiosis produces 2 diploid cells (same as mitosis) instead of 4 haploid cells for reproduction.' },
      { id: 'err2', error: 'Misapplying Mendel\'s Ratios (3:1 vs 9:3:3:1)', affectedStudents: 11, description: 'Using 3:1 phenotypic ratio for dihybrid crosses where 9:3:3:1 applies.' },
      { id: 'err3', error: 'Incorrect Photosynthesis Equation (Products Swapped)', affectedStudents: 8, description: 'Writing glucose and water as reactants or omitting oxygen as a product of the light reaction.' },
    ],
    studentsNeedingHelp: [
      { id: 'h1', name: 'Rohan Gupta', topic: 'DNA & Protein Synthesis', score: 37, level: 'Foundational', avatar: 'RG', lastActive: '2h ago' },
      { id: 'h2', name: 'Sneha Iyer', topic: 'Ecosystem Energy Flow', score: 40, level: 'Foundational', avatar: 'SI', lastActive: 'Yesterday' },
      { id: 'h3', name: 'Karan Malhotra', topic: "Mendel's Laws", score: 46, level: 'Grade-Level', avatar: 'KM', lastActive: '3h ago' },
    ],
    recentSubmissions: [
      { id: 'sub1', student: 'Priya Sharma', assignment: 'Cell Structure Worksheet', status: 'Graded', score: '19/20' },
      { id: 'sub2', student: 'Rohan Gupta', assignment: 'Genetics Diagnostic Quiz', status: 'Needs review', score: '8/20' },
      { id: 'sub3', student: 'Ishaan Patel', assignment: 'Advanced Ecology Challenge', status: 'Graded', score: '10/10' },
      { id: 'sub4', student: 'Sneha Iyer', assignment: 'Plant Kingdom Quiz', status: 'Pending', score: '—' },
    ],
  },

  English: {
    subject: 'English',
    weakTopics: ['Argumentative Essay Writing', 'Critical Reading & Tone Analysis', 'Advanced Vocabulary'],
    commonErrorPatterns: [
      { id: 'err1', error: 'Passive Voice Overuse in Formal Writing', affectedStudents: 14, description: 'Students construct agentless passive sentences even when an active voice would be clearer and more direct.' },
      { id: 'err2', error: 'Tense Inconsistency Within Paragraphs', affectedStudents: 12, description: 'Switching between past and present tense mid-paragraph without logical reason, disrupting narrative flow.' },
      { id: 'err3', error: 'Thesis Statement Too Vague or Descriptive', affectedStudents: 10, description: 'Writing thesis statements that state facts (e.g. "Social media exists") rather than debatable claims.' },
    ],
    studentsNeedingHelp: [
      { id: 'h1', name: 'Rohan Gupta', topic: 'Essay Writing', score: 41, level: 'Foundational', avatar: 'RG', lastActive: '2h ago' },
      { id: 'h2', name: 'Sneha Iyer', topic: 'Critical Reading', score: 38, level: 'Foundational', avatar: 'SI', lastActive: 'Yesterday' },
      { id: 'h3', name: 'Karan Malhotra', topic: 'Grammar & Tenses', score: 44, level: 'Grade-Level', avatar: 'KM', lastActive: '3h ago' },
    ],
    recentSubmissions: [
      { id: 'sub1', student: 'Priya Sharma', assignment: 'Essay Writing Assignment', status: 'Graded', score: '18/20' },
      { id: 'sub2', student: 'Rohan Gupta', assignment: 'Grammar Diagnostic Quiz', status: 'Needs review', score: '9/20' },
      { id: 'sub3', student: 'Ishaan Patel', assignment: 'Critical Reading Analysis', status: 'Graded', score: '10/10' },
      { id: 'sub4', student: 'Sneha Iyer', assignment: 'Vocabulary & Comprehension', status: 'Pending', score: '—' },
    ],
  },
}
