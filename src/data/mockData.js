// ---------------------------------------------------------------------------
// LearnFlow AI — TetraTHON 2026 EdTech Master Mock Data Layer
// ---------------------------------------------------------------------------

export const currentStudent = {
  id: 'stu_01',
  name: 'Aarav Mehta',
  grade: 'Grade 10',
  section: 'Section B',
  subject: 'Mathematics',
  avatar: 'AM',
  level: 'Grade-Level', // 'Foundational' | 'Grade-Level' | 'Advanced'
  xp: 2450,
  xpToNextLevel: 3000,
  levelNumber: 5,
  streak: 1,
  dailyGoalMinutes: 30,
  dailyGoalDoneMinutes: 18,
  joined: 'Feb 2026',
}

export const gradesList = [
  'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'
]

export const subjectsList = [
  'Mathematics', 'Science', 'Physics', 'Chemistry', 'Biology', 'English'
]

export function getGradeDifficultyLabel(grade) {
  const num = parseInt(String(grade).replace(/\D/g, ''), 10) || 9
  if (num <= 7) return 'Easy'
  if (num <= 9) return 'Medium'
  return 'Advanced'
}

export const currentTeacher = {
  id: 'tch_01',
  name: 'Mrs. Kavita Rao',
  subject: 'Mathematics',
  grade: 'Grade 10',
  avatar: 'KR',
  classes: ['10-A', '10-B', '10-C'],
}

export const recommendedLessons = [
  {
    id: 'g1',
    title: 'Factoring Quadratic Equations',
    subject: 'Mathematics',
    duration: '10 min',
    difficulty: 'Grade-Level',
    progress: 40,
    thumbnailFrom: '#4f5dff',
    thumbnailTo: '#8b5cf6',
  },
  {
    id: 'f1',
    title: 'Fundamentals of Variables & Expressions',
    subject: 'Mathematics',
    duration: '10 min',
    difficulty: 'Foundational',
    progress: 100,
    thumbnailFrom: '#f59e0b',
    thumbnailTo: '#4f5dff',
  },
  {
    id: 'a1',
    title: 'Polynomial Systems & Vieta’s Formulas',
    subject: 'Mathematics',
    duration: '10 min',
    difficulty: 'Advanced',
    progress: 0,
    thumbnailFrom: '#10b981',
    thumbnailTo: '#ef4444',
  },
]

export const recentActivity = [
  { id: 1, text: 'Completed "Fundamentals of Variables"', time: '2h ago', kind: 'lesson' },
  { id: 2, text: 'Scored 5/5 in 5-Q Diagnostic Quiz', time: 'Yesterday', kind: 'quiz' },
  { id: 3, text: 'Asked AI Tutor about discriminant D < 0', time: 'Yesterday', kind: 'ai' },
  { id: 4, text: 'Earned "Concept Master" badge', time: '2 days ago', kind: 'badge' },
]

export const upcomingQuiz = {
  title: 'NCERT Class 10: Quadratic Equations Test',
  date: 'Tomorrow, 10:30 AM',
  questions: 15,
  duration: '20 min',
}

export const motivationalQuotes = [
  'Small steps every day add up to big leaps in conceptual understanding.',
  'Confusion is just the feeling right before you understand something.',
  "Progress, not perfection — you're mastering root concepts step by step.",
  'Every expert mathematician was once a beginner who kept asking doubts.',
]

export const aiSuggestionChips = [
  'Explain in Socratic Mode',
  'Show direct step-by-step math solution',
  'Give me a real-world NCERT example',
  'What is the root conceptual weakness?',
]

// ---------------------------------------------------------------------------
// SUBJECT-WISE DIAGNOSTIC QUIZZES - EXACTLY 5 QUESTIONS EACH
// Every subject has its own realistic question bank (question, 4 options,
// correct answer, NCERT reference, and explanation).
// ---------------------------------------------------------------------------
export const diagnosticQuizzes = {
  Mathematics: [
    {
      id: 'mq1',
      question: '1. What is the value of x in the linear equation: 3x - 5 = 10?',
      options: ['x = 3', 'x = 5', 'x = 15', 'x = 2.5'],
      answer: 1,
      concept: 'Linear Equations',
      difficulty: 'Foundational',
      ncert: { grade: 'Class 10', chapter: 'Chapter 3: Pair of Linear Equations', topic: 'Solving Linear Equations' },
      explanation: 'Add 5 to both sides (3x = 15), then divide by 3 (x = 5).'
    },
    {
      id: 'mq2',
      question: '2. Which formula correctly represents the roots of ax² + bx + c = 0?',
      options: [
        'x = (-b ± √(b² - 4ac)) / 2a',
        'x = (b ± √(b² - 4ac)) / 2a',
        'x = -b ± √(b - ac)',
        'x = (-b ± √(b² + 4ac)) / a'
      ],
      answer: 0,
      concept: 'Quadratic Equations',
      difficulty: 'Grade-Level',
      ncert: { grade: 'Class 10', chapter: 'Chapter 4: Quadratic Equations', topic: 'Quadratic Formula' },
      explanation: 'The standard quadratic formula is x = (-b ± √(b² - 4ac)) / 2a.'
    },
    {
      id: 'mq3',
      question: '3. What is the discriminant of 2x² - 4x + 3 = 0, and what does its value mean?',
      options: [
        'D = -8 (No real roots)',
        'D = 8 (Two distinct real roots)',
        'D = 0 (Two equal real roots)',
        'D = -20 (No real roots)'
      ],
      answer: 0,
      concept: 'Discriminant & Nature of Roots',
      difficulty: 'Grade-Level',
      ncert: { grade: 'Class 10', chapter: 'Chapter 4: Quadratic Equations', topic: 'Nature of Roots' },
      explanation: 'Discriminant D = b² - 4ac = (-4)² - 4(2)(3) = 16 - 24 = -8. Since D < 0, there are no real roots.'
    },
    {
      id: 'mq4',
      question: '4. Simplify the algebraic expression: (2x³y²) × (4x²y³)',
      options: ['6x⁵y⁵', '8x⁵y⁵', '8x⁶y⁶', '6x⁶y⁵'],
      answer: 1,
      concept: 'Polynomial Exponents',
      difficulty: 'Foundational',
      ncert: { grade: 'Class 9', chapter: 'Chapter 2: Polynomials', topic: 'Algebraic Identities' },
      explanation: 'Multiply coefficients: 2 × 4 = 8. Add exponents for same bases: x³⁺² = x⁵, y²⁺³ = y⁵. Result = 8x⁵y⁵.'
    },
    {
      id: 'mq5',
      question: '5. If one root of x² - (k+6)x + 2(2k-1) = 0 is double the other, what is the value of k?',
      options: ['k = 2 or k = -2/9', 'k = 3 or k = 1', 'k = 0', 'k = -6'],
      answer: 0,
      concept: 'Advanced Quadratic Systems',
      difficulty: 'Advanced',
      ncert: { grade: 'Class 10', chapter: 'Chapter 4: Quadratic Equations', topic: 'Relation between Roots' },
      explanation: 'Let roots be α and 2α. Sum α+2α = 3α = k+6 => α = (k+6)/3. Product α(2α) = 2α² = 2(2k-1). Solving for k gives k = 2 or k = -2/9.'
    }
  ],

  Science: [
    {
      id: 'scq1',
      question: '1. Which of the following is NOT a state of matter?',
      options: ['Solid', 'Liquid', 'Energy', 'Gas'],
      answer: 2,
      concept: 'States of Matter',
      difficulty: 'Foundational',
      ncert: { grade: 'Class 9', chapter: 'Chapter 1: Matter in Our Surroundings', topic: 'States of Matter' },
      explanation: 'Energy is a physical quantity, not a physical state — matter exists as solid, liquid, gas, or plasma.'
    },
    {
      id: 'scq2',
      question: '2. What is the basic functional and structural unit of life?',
      options: ['Tissue', 'Cell', 'Organ', 'Organelle'],
      answer: 1,
      concept: 'Cell Biology',
      difficulty: 'Foundational',
      ncert: { grade: 'Class 9', chapter: 'Chapter 5: The Fundamental Unit of Life', topic: 'Cell Structure' },
      explanation: 'The cell is the smallest unit that can perform all life processes, making it the fundamental unit of life.'
    },
    {
      id: 'scq3',
      question: '3. Which gas is released during photosynthesis?',
      options: ['Carbon dioxide', 'Nitrogen', 'Oxygen', 'Hydrogen'],
      answer: 2,
      concept: 'Photosynthesis',
      difficulty: 'Grade-Level',
      ncert: { grade: 'Class 10', chapter: 'Chapter 6: Life Processes', topic: 'Photosynthesis' },
      explanation: 'Photosynthesis converts CO₂ and water into glucose, releasing oxygen as a by-product.'
    },
    {
      id: 'scq4',
      question: '4. In the periodic table, elements in the same group have the same number of:',
      options: ['Neutrons', 'Protons', 'Valence electrons', 'Isotopes'],
      answer: 2,
      concept: 'Periodic Classification',
      difficulty: 'Grade-Level',
      ncert: { grade: 'Class 10', chapter: 'Chapter 5: Periodic Classification of Elements', topic: 'Groups & Valence Electrons' },
      explanation: 'Elements in the same group share the same number of valence electrons, giving them similar chemical properties.'
    },
    {
      id: 'scq5',
      question: '5. Which law states that the rate of a reaction is directly proportional to the concentration of reactants?',
      options: ['Law of Conservation of Mass', 'Law of Mass Action', 'Avogadro\'s Law', 'Boyle\'s Law'],
      answer: 1,
      concept: 'Chemical Kinetics',
      difficulty: 'Advanced',
      ncert: { grade: 'Class 11', chapter: 'Chapter 7: Equilibrium', topic: 'Law of Mass Action' },
      explanation: 'The Law of Mass Action relates reaction rate directly to the product of reactant concentrations.'
    }
  ],

  Physics: [
    {
      id: 'phq1',
      question: '1. What is the SI unit of force?',
      options: ['Joule', 'Newton', 'Watt', 'Pascal'],
      answer: 1,
      concept: 'Units & Measurement',
      difficulty: 'Foundational',
      ncert: { grade: 'Class 9', chapter: 'Chapter 8: Force and Laws of Motion', topic: 'Units of Force' },
      explanation: 'Force is measured in Newtons (N), defined as the force needed to accelerate 1 kg at 1 m/s².'
    },
    {
      id: 'phq2',
      question: '2. Which law states that every action has an equal and opposite reaction?',
      options: [
        "Newton's First Law", "Newton's Second Law", "Newton's Third Law", 'Law of Conservation of Energy'
      ],
      answer: 2,
      concept: "Newton's Laws of Motion",
      difficulty: 'Foundational',
      ncert: { grade: 'Class 9', chapter: 'Chapter 8: Force and Laws of Motion', topic: "Newton's Third Law" },
      explanation: "Newton's Third Law states that for every action, there is an equal and opposite reaction."
    },
    {
      id: 'phq3',
      question: '3. What is the formula for kinetic energy?',
      options: ['mgh', '½mv²', 'mv', 'Fd'],
      answer: 1,
      concept: 'Work & Energy',
      difficulty: 'Grade-Level',
      ncert: { grade: 'Class 9', chapter: 'Chapter 11: Work and Energy', topic: 'Kinetic Energy' },
      explanation: 'Kinetic energy = ½ × mass × velocity², representing energy due to motion.'
    },
    {
      id: 'phq4',
      question: '4. According to Ohm\'s Law, current is:',
      options: [
        'Directly proportional to resistance', 'Inversely proportional to voltage',
        'Directly proportional to voltage (at constant resistance)', 'Independent of voltage'
      ],
      answer: 2,
      concept: "Ohm's Law",
      difficulty: 'Grade-Level',
      ncert: { grade: 'Class 10', chapter: 'Chapter 12: Electricity', topic: "Ohm's Law" },
      explanation: "Ohm's Law: V = IR, so current I is directly proportional to voltage V at constant resistance."
    },
    {
      id: 'phq5',
      question: '5. A ball is thrown upward with velocity u. What is the maximum height reached (ignoring air resistance)?',
      options: ['u/g', 'u²/2g', '2u/g', 'u²/g'],
      answer: 1,
      concept: 'Kinematics',
      difficulty: 'Advanced',
      ncert: { grade: 'Class 11', chapter: 'Chapter 3: Motion in a Straight Line', topic: 'Equations of Motion' },
      explanation: 'Using v² = u² - 2gh with v = 0 at maximum height: h = u²/2g.'
    }
  ],

  Chemistry: [
    {
      id: 'chq1',
      question: '1. What is the chemical symbol for Sodium?',
      options: ['So', 'Sd', 'Na', 'S'],
      answer: 2,
      concept: 'Chemical Symbols',
      difficulty: 'Foundational',
      ncert: { grade: 'Class 9', chapter: 'Chapter 3: Atoms and Molecules', topic: 'Chemical Symbols' },
      explanation: 'Sodium\'s symbol "Na" comes from its Latin name "Natrium".'
    },
    {
      id: 'chq2',
      question: '2. Which of these is an example of a physical change?',
      options: ['Rusting of iron', 'Burning of paper', 'Melting of ice', 'Digestion of food'],
      answer: 2,
      concept: 'Physical vs Chemical Change',
      difficulty: 'Foundational',
      ncert: { grade: 'Class 9', chapter: 'Chapter 1: Matter in Our Surroundings', topic: 'Physical Changes' },
      explanation: 'Melting ice only changes state (solid to liquid) without forming a new substance, making it physical.'
    },
    {
      id: 'chq3',
      question: '3. What is the pH of a neutral solution?',
      options: ['0', '7', '14', '1'],
      answer: 1,
      concept: 'Acids, Bases & Salts',
      difficulty: 'Grade-Level',
      ncert: { grade: 'Class 10', chapter: 'Chapter 2: Acids, Bases and Salts', topic: 'pH Scale' },
      explanation: 'A pH of 7 is neutral; below 7 is acidic and above 7 is basic.'
    },
    {
      id: 'chq4',
      question: '4. In the reaction Zn + H₂SO₄ → ZnSO₄ + H₂, zinc acts as a:',
      options: ['Catalyst', 'Reducing agent', 'Oxidizing agent', 'Indicator'],
      answer: 1,
      concept: 'Redox Reactions',
      difficulty: 'Grade-Level',
      ncert: { grade: 'Class 10', chapter: 'Chapter 1: Chemical Reactions and Equations', topic: 'Oxidation & Reduction' },
      explanation: 'Zinc loses electrons (is oxidized) and reduces hydrogen ions, acting as the reducing agent.'
    },
    {
      id: 'chq5',
      question: '5. What is the hybridization of carbon in methane (CH₄)?',
      options: ['sp', 'sp²', 'sp³', 'sp³d'],
      answer: 2,
      concept: 'Chemical Bonding',
      difficulty: 'Advanced',
      ncert: { grade: 'Class 11', chapter: 'Chapter 4: Chemical Bonding', topic: 'Hybridization' },
      explanation: 'Carbon forms four equivalent sigma bonds in methane using sp³ hybrid orbitals arranged tetrahedrally.'
    }
  ],

  Biology: [
    {
      id: 'biq1',
      question: '1. Which organelle is known as the "powerhouse of the cell"?',
      options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi Body'],
      answer: 2,
      concept: 'Cell Organelles',
      difficulty: 'Foundational',
      ncert: { grade: 'Class 9', chapter: 'Chapter 5: The Fundamental Unit of Life', topic: 'Mitochondria' },
      explanation: 'Mitochondria generate ATP through cellular respiration, earning the nickname "powerhouse of the cell".'
    },
    {
      id: 'biq2',
      question: '2. Which blood vessels carry blood away from the heart?',
      options: ['Veins', 'Arteries', 'Capillaries', 'Venules'],
      answer: 1,
      concept: 'Circulatory System',
      difficulty: 'Foundational',
      ncert: { grade: 'Class 10', chapter: 'Chapter 6: Life Processes', topic: 'Circulatory System' },
      explanation: 'Arteries carry oxygenated blood away from the heart to the rest of the body (except the pulmonary artery).'
    },
    {
      id: 'biq3',
      question: '3. What is the process by which plants lose water vapor through leaves called?',
      options: ['Respiration', 'Transpiration', 'Photosynthesis', 'Excretion'],
      answer: 1,
      concept: 'Plant Physiology',
      difficulty: 'Grade-Level',
      ncert: { grade: 'Class 10', chapter: 'Chapter 6: Life Processes', topic: 'Transpiration' },
      explanation: 'Transpiration is the loss of water vapor from plant surfaces, mainly through stomata in leaves.'
    },
    {
      id: 'biq4',
      question: '4. According to Mendel\'s Law of Dominance, in a monohybrid cross of Tt × Tt, what ratio of phenotypes is expected?',
      options: ['1:1', '3:1', '1:2:1', '9:3:3:1'],
      answer: 1,
      concept: 'Genetics & Heredity',
      difficulty: 'Grade-Level',
      ncert: { grade: 'Class 10', chapter: 'Chapter 9: Heredity and Evolution', topic: "Mendel's Laws" },
      explanation: 'Tt × Tt yields a 3:1 phenotypic ratio (TT, Tt, Tt, tt) since T is dominant over t.'
    },
    {
      id: 'biq5',
      question: '5. Which hormone regulates blood glucose levels by promoting glucose uptake into cells?',
      options: ['Glucagon', 'Insulin', 'Adrenaline', 'Thyroxine'],
      answer: 1,
      concept: 'Endocrine System',
      difficulty: 'Advanced',
      ncert: { grade: 'Class 11', chapter: 'Chapter 22: Chemical Coordination and Integration', topic: 'Insulin & Blood Sugar' },
      explanation: 'Insulin, secreted by pancreatic beta cells, lowers blood glucose by promoting cellular glucose uptake.'
    }
  ],

  English: [
    {
      id: 'enq1',
      question: '1. Choose the correctly punctuated sentence.',
      options: [
        'She said, "I am ready."', 'She said "I am ready."', 'She said, I am ready.', 'She said: "I am ready"'
      ],
      answer: 0,
      concept: 'Punctuation',
      difficulty: 'Foundational',
      ncert: { grade: 'Class 9', chapter: 'Writing Skills', topic: 'Punctuation & Quotation Marks' },
      explanation: 'Direct speech requires a comma before the quotation and the full stop inside the closing quotation mark.'
    },
    {
      id: 'enq2',
      question: '2. Identify the correctly formed passive voice: "The chef cooks the meal."',
      options: [
        'The meal cooks the chef.', 'The meal is cooked by the chef.', 'The meal was cook by the chef.', 'Cooking the meal by chef.'
      ],
      answer: 1,
      concept: 'Active & Passive Voice',
      difficulty: 'Foundational',
      ncert: { grade: 'Class 9', chapter: 'Grammar', topic: 'Voice Transformation' },
      explanation: 'Passive voice moves the object to the subject position: "The meal is cooked by the chef."'
    },
    {
      id: 'enq3',
      question: '3. What is a "metaphor" in literary terms?',
      options: [
        'A direct comparison using "like" or "as"', 'An implied comparison without using "like" or "as"',
        'A repetition of consonant sounds', 'An exaggeration for effect'
      ],
      answer: 1,
      concept: 'Literary Devices',
      difficulty: 'Grade-Level',
      ncert: { grade: 'Class 10', chapter: 'Literature Reader', topic: 'Figures of Speech' },
      explanation: 'A metaphor directly states one thing IS another to imply a comparison, unlike a simile which uses "like/as".'
    },
    {
      id: 'enq4',
      question: '4. Choose the sentence with correct subject-verb agreement.',
      options: [
        'Each of the students have submitted their essay.', 'Each of the students has submitted their essay.',
        'Each of the student have submit essay.', 'Each of students has submitting essay.'
      ],
      answer: 1,
      concept: 'Subject-Verb Agreement',
      difficulty: 'Grade-Level',
      ncert: { grade: 'Class 10', chapter: 'Grammar', topic: 'Subject-Verb Agreement' },
      explanation: '"Each" is singular, so it takes the singular verb "has", even though "students" is plural.'
    },
    {
      id: 'enq5',
      question: '5. In critical reading, what does "tone" refer to?',
      options: [
        "The author's attitude toward the subject or audience", 'The literal dictionary meaning of words',
        'The number of paragraphs in a passage', 'The font style used in printing'
      ],
      answer: 0,
      concept: 'Reading Comprehension',
      difficulty: 'Advanced',
      ncert: { grade: 'Class 11', chapter: 'Hornbill', topic: 'Tone & Author\'s Perspective' },
      explanation: 'Tone reflects the writer\'s attitude — e.g. formal, ironic, sympathetic — conveyed through word choice and style.'
    }
  ]
}

// Backward-compatible default export (Mathematics bank)
export const diagnosticQuiz = diagnosticQuizzes.Mathematics

export function getDiagnosticQuizForSubject(subject) {
  return diagnosticQuizzes[subject] || diagnosticQuizzes.Mathematics
}

export function getDiagnosticRationale(score, quiz = diagnosticQuiz, answers = {}) {
  const strengths = quiz.filter((q) => answers[q.id] === q.answer).map((q) => q.concept)
  const weakAreas = quiz.filter((q) => answers[q.id] !== q.answer).map((q) => q.concept)

  if (score === 5) {
    return {
      level: 'Advanced',
      title: 'Advanced Master Path Assigned',
      reason: `You answered ${score}/5 questions correctly — a perfect score! You demonstrated strong mastery across every concept tested. You are ready for high-order problem solving and challenge sets.`,
      strengths,
      weakAreas,
      recommendedPath: 'Advanced Path: challenge lessons that extend beyond grade-level curriculum with higher-order problems.'
    }
  } else if (score >= 3) {
    return {
      level: 'Grade-Level',
      title: 'Grade-Level Standard Path Assigned',
      reason: `You answered ${score}/5 questions correctly. You possess solid foundational skills in ${strengths.slice(0, 2).join(' and ') || 'the basics'}, but need targeted practice on ${weakAreas.join(', ') || 'a few advanced topics'}.`,
      strengths,
      weakAreas,
      recommendedPath: 'Grade-Level Path: standard curriculum lessons paired with light reinforcement on the concepts you missed.'
    }
  } else {
    return {
      level: 'Foundational',
      title: 'Foundational Booster Path Assigned',
      reason: `You answered ${score}/5 questions correctly. Your diagnostic highlights key gaps in ${weakAreas.join(', ') || 'fundamental concepts'}. Starting with our Foundational path will build rock-solid core concepts before moving up.`,
      strengths,
      weakAreas,
      recommendedPath: 'Foundational Path: rebuild core fundamentals with extra scaffolding before tackling grade-level material.'
    }
  }
}

// ---------------------------------------------------------------------------
// 3 ADAPTIVE LEARNING PATHS (10-min lessons with 3 practice problems & NCERT)
// ---------------------------------------------------------------------------
export const learningPathsData = {
  Foundational: [
    {
      id: 'f1',
      title: '1. Fundamentals of Variables & Expressions',
      duration: '10 min',
      difficulty: 'Foundational',
      progress: 100,
      ncert: { grade: 'Class 9', chapter: 'Chapter 2', topic: 'Introduction to Variables' },
      objectives: [
        'Understand what variables represent in real-world scenarios',
        'Learn to combine like terms correctly',
        'Master basic linear expressions'
      ],
      summary: 'Variables represent unknown quantities. Mastering operations on like terms forms the building block for all higher mathematics.',
      notes: [
        'A variable (like x or y) represents a placeholder for an unknown number.',
        'Like terms have the exact same variable parts with matching powers (e.g., 3x and 5x).',
        'Always combine numerical coefficients while keeping variable parts intact.'
      ],
      flashcards: [
        { front: 'What are like terms?', back: 'Terms that have the same variables raised to the same exponents.' },
        { front: 'Simplify 4x + 7x', back: '11x' },
        { front: 'What is a constant?', back: 'A fixed value that does not change (e.g. 5, -12).' }
      ],
      practice: [
        {
          id: 'fp1',
          question: 'Simplify the expression: 5x + 3y - 2x + 4y',
          options: ['3x + 7y', '7x + 7y', '3x - y', '10xy'],
          answer: 0,
          explanation: 'Combine x terms: (5x - 2x) = 3x. Combine y terms: (3y + 4y) = 7y. Result: 3x + 7y.',
          ncert: { grade: 'Class 9', chapter: 'Chapter 2: Polynomials', topic: 'Algebraic Addition' }
        },
        {
          id: 'fp2',
          question: 'Evaluate 3a - 2b when a = 4 and b = 3.',
          options: ['6', '18', '2', '14'],
          answer: 0,
          explanation: 'Substitute values: 3(4) - 2(3) = 12 - 6 = 6.',
          ncert: { grade: 'Class 9', chapter: 'Chapter 2: Polynomials', topic: 'Value of Polynomial' }
        },
        {
          id: 'fp3',
          question: 'Which of the following terms is a LIKE TERM with -7x²?',
          options: ['3x²', '4x', '-7x³', '7y²'],
          answer: 0,
          explanation: 'Like terms must have x with exponent 2. Thus 3x² is a like term with -7x².',
          ncert: { grade: 'Class 9', chapter: 'Chapter 2: Polynomials', topic: 'Identifying Terms' }
        }
      ]
    },
    {
      id: 'f2',
      title: '2. One-Step & Two-Step Linear Equations',
      duration: '10 min',
      difficulty: 'Foundational',
      progress: 60,
      ncert: { grade: 'Class 10', chapter: 'Chapter 3', topic: 'Linear Equations in One Variable' },
      objectives: [
        'Isolate variables using inverse arithmetic operations',
        'Solve two-step linear equations accurately',
        'Verify solutions by substitution'
      ],
      summary: 'Solving linear equations requires balancing both sides of the equals sign using addition, subtraction, multiplication, and division.',
      notes: [
        'Whatever operation you perform on one side of an equation, you MUST perform on the other side.',
        'To isolate x in ax + b = c, first subtract b, then divide by a.'
      ],
      flashcards: [
        { front: 'Inverse of addition', back: 'Subtraction' },
        { front: 'Goal of solving an equation', back: 'Isolate the variable on one side with coefficient 1' }
      ],
      practice: [
        {
          id: 'fp4',
          question: 'Solve for x: 4x - 7 = 13',
          options: ['x = 5', 'x = 3', 'x = 20', 'x = 4.5'],
          answer: 0,
          explanation: 'Add 7 to both sides: 4x = 20. Divide by 4: x = 5.',
          ncert: { grade: 'Class 10', chapter: 'Chapter 3', topic: 'Solving Linear Equations' }
        },
        {
          id: 'fp5',
          question: 'If (x / 3) + 2 = 7, what is x?',
          options: ['x = 15', 'x = 27', 'x = 5', 'x = 9'],
          answer: 0,
          explanation: 'Subtract 2: x / 3 = 5. Multiply by 3: x = 15.',
          ncert: { grade: 'Class 10', chapter: 'Chapter 3', topic: 'Fractional Equations' }
        },
        {
          id: 'fp6',
          question: 'Solve: -2x + 9 = 1',
          options: ['x = 4', 'x = -4', 'x = 5', 'x = -5'],
          answer: 0,
          explanation: 'Subtract 9: -2x = -8. Divide by -2: x = 4.',
          ncert: { grade: 'Class 10', chapter: 'Chapter 3', topic: 'Negative Coefficients' }
        }
      ]
    },
    {
      id: 'f3',
      title: '3. Introduction to Exponent Rules',
      duration: '10 min',
      difficulty: 'Foundational',
      progress: 0,
      ncert: { grade: 'Class 9', chapter: 'Chapter 1', topic: 'Laws of Exponents' },
      objectives: [
        'Apply product rule xᵃ · xᵇ = xᵃ⁺ᵇ',
        'Apply quotient rule xᵃ / xᵇ = xᵃ⁻ᵇ',
        'Understand zero and negative exponent properties'
      ],
      summary: 'Exponents represent repeated multiplication. The exponent rules simplify complex algebraic calculations.',
      notes: [
        'Product rule: xᵃ · xᵇ = xᵃ⁺ᵇ',
        'Quotient rule: xᵃ / xᵇ = xᵃ⁻ᵇ',
        'Zero exponent rule: x⁰ = 1 (for x ≠ 0)'
      ],
      flashcards: [
        { front: 'xᵃ · xᵇ', back: 'xᵃ⁺ᵇ' },
        { front: 'x⁰', back: '1' }
      ],
      practice: [
        {
          id: 'fp7',
          question: 'Simplify: (x⁴)(x³)',
          options: ['x⁷', 'x¹²', 'x', '2x⁷'],
          answer: 0,
          explanation: 'Add exponents: 4 + 3 = 7. Result = x⁷.',
          ncert: { grade: 'Class 9', chapter: 'Chapter 1', topic: 'Exponent Rules' }
        },
        {
          id: 'fp8',
          question: 'Simplify: y⁸ / y³',
          options: ['y⁵', 'y¹¹', 'y²ˑ⁶', 'y²'],
          answer: 0,
          explanation: 'Subtract exponents: 8 - 3 = 5. Result = y⁵.',
          ncert: { grade: 'Class 9', chapter: 'Chapter 1', topic: 'Exponent Rules' }
        },
        {
          id: 'fp9',
          question: 'What is the value of (999)⁰?',
          options: ['1', '999', '0', 'Undefined'],
          answer: 0,
          explanation: 'Any non-zero base raised to the power 0 equals 1.',
          ncert: { grade: 'Class 9', chapter: 'Chapter 1', topic: 'Zero Exponent' }
        }
      ]
    }
  ],

  'Grade-Level': [
    {
      id: 'g1',
      title: '1. Factoring & Solving Quadratic Equations',
      duration: '10 min',
      difficulty: 'Grade-Level',
      progress: 40,
      ncert: { grade: 'Class 10', chapter: 'Chapter 4', topic: 'Quadratic Equations by Factoring' },
      objectives: [
        'Understand standard quadratic form ax² + bx + c = 0',
        'Master split-middle-term factoring method',
        'Find roots of quadratic equations efficiently'
      ],
      summary: 'Quadratic equations model parabolic curves. Factoring splits a quadratic into linear factors whose roots satisfy the equation.',
      notes: [
        'Standard form: ax² + bx + c = 0 (a ≠ 0).',
        'To factor x² + bx + c, find two numbers that multiply to c and add up to b.',
        'Set each factor equal to 0 to solve for x.'
      ],
      flashcards: [
        { front: 'Standard quadratic form', back: 'ax² + bx + c = 0' },
        { front: 'Zero Product Property', back: 'If A × B = 0, then A = 0 or B = 0' }
      ],
      practice: [
        {
          id: 'gp1',
          question: 'What are the roots of x² - 5x + 6 = 0?',
          options: ['x = 2 and x = 3', 'x = -2 and x = -3', 'x = 1 and x = 6', 'x = -1 and x = 6'],
          answer: 0,
          explanation: 'Factor as (x - 2)(x - 3) = 0. Roots are x = 2 and x = 3.',
          ncert: { grade: 'Class 10', chapter: 'Chapter 4', topic: 'Solving by Factoring' }
        },
        {
          id: 'gp2',
          question: 'Find the roots of x² - 9 = 0.',
          options: ['x = ±3', 'x = 9', 'x = 3 only', 'x = 81'],
          answer: 0,
          explanation: 'Difference of squares: (x - 3)(x + 3) = 0 => x = ±3.',
          ncert: { grade: 'Class 10', chapter: 'Chapter 4', topic: 'Difference of Squares' }
        },
        {
          id: 'gp3',
          question: 'For 2x² + 7x + 3 = 0, which numbers split the middle term 7x?',
          options: ['6 and 1', '5 and 2', '4 and 3', '7 and 0'],
          answer: 0,
          explanation: 'a × c = 2 × 3 = 6. We need numbers that multiply to 6 and add to 7: 6 and 1. (2x² + 6x + x + 3 = 0).',
          ncert: { grade: 'Class 10', chapter: 'Chapter 4', topic: 'Splitting Middle Term' }
        }
      ]
    },
    {
      id: 'g2',
      title: '2. Quadratic Formula & The Discriminant',
      duration: '10 min',
      difficulty: 'Grade-Level',
      progress: 0,
      ncert: { grade: 'Class 10', chapter: 'Chapter 4', topic: 'Nature of Roots' },
      objectives: [
        'Master formula x = (-b ± √(b² - 4ac)) / 2a',
        'Calculate Discriminant D = b² - 4ac',
        'Classify real, equal, or imaginary roots'
      ],
      summary: 'The discriminant reveals the structure of quadratic roots without fully solving the equation.',
      notes: [
        'D > 0: Two distinct real roots',
        'D = 0: Two equal real roots',
        'D < 0: No real roots (complex conjugate roots)'
      ],
      flashcards: [
        { front: 'Discriminant formula', back: 'D = b² - 4ac' },
        { front: 'What if D = 0?', back: 'Roots are real and equal (-b / 2a)' }
      ],
      practice: [
        {
          id: 'gp4',
          question: 'Calculate the discriminant of x² + 4x + 4 = 0.',
          options: ['D = 0', 'D = 16', 'D = -16', 'D = 8'],
          answer: 0,
          explanation: 'D = 4² - 4(1)(4) = 16 - 16 = 0. (Real & equal roots).',
          ncert: { grade: 'Class 10', chapter: 'Chapter 4', topic: 'Discriminant Analysis' }
        },
        {
          id: 'gp5',
          question: 'If a quadratic equation has D = 25, what is the nature of its roots?',
          options: ['Two distinct real roots', 'Two equal real roots', 'No real roots', 'Infinitely many roots'],
          answer: 0,
          explanation: 'Since D = 25 > 0, the equation has two distinct real roots.',
          ncert: { grade: 'Class 10', chapter: 'Chapter 4', topic: 'Nature of Roots' }
        },
        {
          id: 'gp6',
          question: 'Using the quadratic formula, solve x² - 2x - 3 = 0.',
          options: ['x = 3 and x = -1', 'x = -3 and x = 1', 'x = 2 and x = -2', 'x = 0 and x = 3'],
          answer: 0,
          explanation: 'a=1, b=-2, c=-3. x = (2 ± √(4 - 4(1)(-3)))/2 = (2 ± √16)/2 = (2 ± 4)/2 => x = 3 or x = -1.',
          ncert: { grade: 'Class 10', chapter: 'Chapter 4', topic: 'Quadratic Formula Application' }
        }
      ]
    },
    {
      id: 'g3',
      title: '3. Systems of Two Linear Equations in 2 Variables',
      duration: '10 min',
      difficulty: 'Grade-Level',
      progress: 0,
      ncert: { grade: 'Class 10', chapter: 'Chapter 3', topic: 'Elimination & Substitution Method' },
      objectives: [
        'Solve linear pairs using Substitution Method',
        'Solve linear pairs using Elimination Method',
        'Analyze intersection of lines graphically'
      ],
      summary: 'Systems of equations find the unique point (x, y) where two straight lines intersect on a Cartesian plane.',
      notes: [
        'Substitution: Express one variable in terms of another and substitute into the second equation.',
        'Elimination: Multiply equations to make coefficients equal and add/subtract to eliminate one variable.'
      ],
      flashcards: [
        { front: 'Intersecting lines', back: 'Unique solution (a₁/a₂ ≠ b₁/b₂)' },
        { front: 'Parallel lines', back: 'No solution (a₁/a₂ = b₁/b₂ ≠ c₁/c₂)' }
      ],
      practice: [
        {
          id: 'gp7',
          question: 'Solve the system: x + y = 10 and x - y = 4.',
          options: ['x = 7, y = 3', 'x = 6, y = 4', 'x = 8, y = 2', 'x = 5, y = 5'],
          answer: 0,
          explanation: 'Add both equations: 2x = 14 => x = 7. Then y = 10 - 7 = 3.',
          ncert: { grade: 'Class 10', chapter: 'Chapter 3', topic: 'Elimination Method' }
        },
        {
          id: 'gp8',
          question: 'How many solutions exist for parallel lines 2x + 3y = 6 and 2x + 3y = 12?',
          options: ['No solution', 'Unique solution', 'Infinitely many solutions', 'Two solutions'],
          answer: 0,
          explanation: 'Coefficients ratio: 2/2 = 3/3 ≠ 6/12. Lines are parallel, so no solution exists.',
          ncert: { grade: 'Class 10', chapter: 'Chapter 3', topic: 'Graphical Consistency' }
        },
        {
          id: 'gp9',
          question: 'If 3x + 2y = 12 and y = 3, what is x?',
          options: ['x = 2', 'x = 3', 'x = 4', 'x = 6'],
          answer: 0,
          explanation: 'Substitute y = 3: 3x + 2(3) = 12 => 3x + 6 = 12 => 3x = 6 => x = 2.',
          ncert: { grade: 'Class 10', chapter: 'Chapter 3', topic: 'Substitution Method' }
        }
      ]
    }
  ],

  Advanced: [
    {
      id: 'a1',
      title: '1. Advanced Polynomial Systems & Vieta’s Formulas',
      duration: '10 min',
      difficulty: 'Advanced',
      progress: 0,
      ncert: { grade: 'Class 11', chapter: 'Chapter 2', topic: 'Polynomials & Root Relations' },
      objectives: [
        'Master Vieta’s formulas for quadratic and cubic equations',
        'Relate coefficients to sums and products of roots',
        'Solve symmetric expressions in roots (α² + β²)'
      ],
      summary: 'Vieta’s formulas connect polynomial coefficients directly to symmetrical root sums and products.',
      notes: [
        'For ax² + bx + c = 0: α + β = -b/a, αβ = c/a.',
        'α² + β² = (α + β)² - 2αβ.',
        '1/α + 1/β = (α + β) / (αβ).'
      ],
      flashcards: [
        { front: 'Sum of roots (α + β)', back: '-b / a' },
        { front: 'Product of roots (αβ)', back: 'c / a' }
      ],
      practice: [
        {
          id: 'ap1',
          question: 'For 3x² - 6x + 2 = 0, what is the value of (1/α + 1/β)?',
          options: ['3', '2', '1.5', '-3'],
          answer: 0,
          explanation: 'α + β = -(-6)/3 = 2. αβ = 2/3. (1/α + 1/β) = (α+β)/αβ = 2 / (2/3) = 3.',
          ncert: { grade: 'Class 11', chapter: 'Chapter 2', topic: 'Vieta Formulas' }
        },
        {
          id: 'ap2',
          question: 'If α and β are roots of x² - 5x + 4 = 0, find α² + β².',
          options: ['17', '25', '21', '9'],
          answer: 0,
          explanation: 'α + β = 5, αβ = 4. α² + β² = (5)² - 2(4) = 25 - 8 = 17.',
          ncert: { grade: 'Class 11', chapter: 'Chapter 2', topic: 'Symmetric Functions of Roots' }
        },
        {
          id: 'ap3',
          question: 'Construct a quadratic equation whose roots are 4 and -2.',
          options: ['x² - 2x - 8 = 0', 'x² + 2x - 8 = 0', 'x² - 6x + 8 = 0', 'x² + 6x + 8 = 0'],
          answer: 0,
          explanation: 'Sum = 4 + (-2) = 2. Product = 4(-2) = -8. Equation: x² - (Sum)x + Product = x² - 2x - 8 = 0.',
          ncert: { grade: 'Class 11', chapter: 'Chapter 2', topic: 'Forming Quadratic Equations' }
        }
      ]
    },
    {
      id: 'a2',
      title: '2. Trigonometric Identities & Equations',
      duration: '10 min',
      difficulty: 'Advanced',
      progress: 0,
      ncert: { grade: 'Class 10', chapter: 'Chapter 8', topic: 'Trigonometric Identities' },
      objectives: [
        'Apply Pythagorean identity sin²θ + cos²θ = 1',
        'Simplify complex trigonometric ratios',
        'Solve trigonometric equations in specified domains'
      ],
      summary: 'Trigonometric identities transform expressions involving sine, cosine, and tangent into simpler algebraic structures.',
      notes: [
        'sin²θ + cos²θ = 1',
        '1 + tan²θ = sec²θ',
        '1 + cot²θ = cosec²θ'
      ],
      flashcards: [
        { front: 'sin²θ + cos²θ', back: '1' },
        { front: 'tan θ', back: 'sin θ / cos θ' }
      ],
      practice: [
        {
          id: 'ap4',
          question: 'Simplify (1 - cos²θ) / sin θ',
          options: ['sin θ', 'cos θ', 'tan θ', '1'],
          answer: 0,
          explanation: 'Since 1 - cos²θ = sin²θ, the expression is sin²θ / sin θ = sin θ.',
          ncert: { grade: 'Class 10', chapter: 'Chapter 8', topic: 'Trigonometric Identities' }
        },
        {
          id: 'ap5',
          question: 'If tan θ = 4/3, what is cos θ in a right-angled triangle?',
          options: ['3/5', '4/5', '5/3', '3/4'],
          answer: 0,
          explanation: 'Opposite = 4, Adjacent = 3. Hypotenuse = √(4² + 3²) = 5. cos θ = Adjacent/Hypotenuse = 3/5.',
          ncert: { grade: 'Class 10', chapter: 'Chapter 8', topic: 'Trigonometric Ratios' }
        },
        {
          id: 'ap6',
          question: 'Evaluate sin 30° + cos 60°',
          options: ['1', '1/2', '√3', '0'],
          answer: 0,
          explanation: 'sin 30° = 1/2. cos 60° = 1/2. 1/2 + 1/2 = 1.',
          ncert: { grade: 'Class 10', chapter: 'Chapter 8', topic: 'Standard Angle Values' }
        }
      ]
    },
    {
      id: 'a3',
      title: '3. Introduction to Calculus Limits & Derivatives',
      duration: '10 min',
      difficulty: 'Advanced',
      progress: 0,
      ncert: { grade: 'Class 11', chapter: 'Chapter 13', topic: 'Limits & Derivatives' },
      objectives: [
        'Understand intuitive definition of a limit lim_{x→a} f(x)',
        'Compute limits using algebraic factorization',
        'Calculate basic power rule derivative d/dx (xⁿ) = n xⁿ⁻¹'
      ],
      summary: 'Calculus studies continuous change. Limits measure behavior near a point, while derivatives compute instantaneous rates of change.',
      notes: [
        'Limit definition: value f(x) approaches as x gets arbitrarily close to a.',
        'Power rule: d/dx (xⁿ) = n xⁿ⁻¹'
      ],
      flashcards: [
        { front: 'Power rule derivative d/dx (xⁿ)', back: 'n xⁿ⁻¹' },
        { front: 'Derivative of a constant c', back: '0' }
      ],
      practice: [
        {
          id: 'ap7',
          question: 'What is lim_{x → 3} (x² - 9) / (x - 3)?',
          options: ['6', '0', '3', 'Undefined'],
          answer: 0,
          explanation: 'Factor numerator: (x-3)(x+3)/(x-3) = x+3. As x → 3, limit = 3 + 3 = 6.',
          ncert: { grade: 'Class 11', chapter: 'Chapter 13', topic: 'Evaluating Limits' }
        },
        {
          id: 'ap8',
          question: 'What is the derivative of f(x) = 5x⁴?',
          options: ['20x³', '5x³', '20x⁴', '4x⁵'],
          answer: 0,
          explanation: 'd/dx (5x⁴) = 5 × (4x³) = 20x³.',
          ncert: { grade: 'Class 11', chapter: 'Chapter 13', topic: 'Power Rule Differentiation' }
        },
        {
          id: 'ap9',
          question: 'Find the derivative of constant function f(x) = 42.',
          options: ['0', '42', '1', 'Undefined'],
          answer: 0,
          explanation: 'The derivative of any constant number is always 0 because it does not change.',
          ncert: { grade: 'Class 11', chapter: 'Chapter 13', topic: 'Derivative of Constants' }
        }
      ]
    }
  ]
}

// Legacy fallback export
export const learningPath = learningPathsData

// ---------------------------------------------------------------------------
// CONCEPT GRAPH NODES (Interactive connected node map)
// ---------------------------------------------------------------------------
export const conceptGraphNodes = [
  {
    id: 'c_alg',
    name: 'Algebraic Foundations',
    status: 'green', // 'green' | 'orange' | 'red'
    masteryPct: 92,
    attempts: 28,
    avgScore: 94,
    lastPracticed: 'Yesterday',
    parents: [],
    ncert: { grade: 'Class 9', chapter: 'Chapter 2: Polynomials', topic: 'Variables & Constants' },
    summary: 'Core understanding of variables, expressions, coefficients, and exponents.',
    recommendedLesson: { id: 'f1', title: 'Fundamentals of Variables & Expressions' }
  },
  {
    id: 'c_var',
    name: 'Variables & Like Terms',
    status: 'green',
    masteryPct: 88,
    attempts: 22,
    avgScore: 90,
    lastPracticed: '2 days ago',
    parents: ['c_alg'],
    ncert: { grade: 'Class 9', chapter: 'Chapter 2: Polynomials', topic: 'Combining Like Terms' },
    summary: 'Isolating operations and combining algebraic variables.',
    recommendedLesson: { id: 'f3', title: 'Introduction to Exponent Rules' }
  },
  {
    id: 'c_lin',
    name: 'Linear Equations',
    status: 'green',
    masteryPct: 85,
    attempts: 34,
    avgScore: 86,
    lastPracticed: '3 days ago',
    parents: ['c_var'],
    ncert: { grade: 'Class 10', chapter: 'Chapter 3: Pair of Linear Equations', topic: 'Linear Equations in 1 & 2 Variables' },
    summary: 'Solving first-degree equations using balances and inverse operations.',
    recommendedLesson: { id: 'f2', title: 'One-Step & Two-Step Linear Equations' }
  },
  {
    id: 'c_quad',
    name: 'Quadratic Equations',
    status: 'orange',
    masteryPct: 64,
    attempts: 19,
    avgScore: 68,
    lastPracticed: 'Today',
    parents: ['c_lin'],
    ncert: { grade: 'Class 10', chapter: 'Chapter 4: Quadratic Equations', topic: 'Factoring & Quadratic Formula' },
    summary: 'Second-degree equations, factoring, quadratic formula, and discriminant.',
    recommendedLesson: { id: 'g1', title: 'Factoring & Solving Quadratic Equations' }
  },
  {
    id: 'c_disc',
    name: 'Discriminant & Roots',
    status: 'red',
    masteryPct: 38,
    attempts: 12,
    avgScore: 42,
    lastPracticed: '4 days ago',
    parents: ['c_quad'],
    ncert: { grade: 'Class 10', chapter: 'Chapter 4: Quadratic Equations', topic: 'Nature of Roots' },
    summary: 'b² - 4ac evaluation and predicting real vs complex root behavior.',
    recommendedLesson: { id: 'g2', title: 'Quadratic Formula & The Discriminant' }
  },
  {
    id: 'c_vieta',
    name: 'Polynomial Systems & Vieta',
    status: 'red',
    masteryPct: 25,
    attempts: 8,
    avgScore: 30,
    lastPracticed: '1 week ago',
    parents: ['c_disc'],
    ncert: { grade: 'Class 11', chapter: 'Chapter 2: Polynomials', topic: 'Vieta’s Formulas & Higher Degree' },
    summary: 'Advanced root-coefficient relationships and cubic systems.',
    recommendedLesson: { id: 'a1', title: 'Advanced Polynomial Systems & Vieta’s Formulas' }
  }
]

// ---------------------------------------------------------------------------
// MASTERY TRACKER
// ---------------------------------------------------------------------------
export const masteryTrackerData = [
  {
    concept: 'Variables & Expressions',
    masteryPct: 92,
    attempts: 28,
    avgScore: '94%',
    lastPracticed: 'Yesterday',
    status: 'Mastered',
    ncert: 'Class 9 · Ch 2'
  },
  {
    concept: 'Linear Equations',
    masteryPct: 85,
    attempts: 34,
    avgScore: '86%',
    lastPracticed: '3 days ago',
    status: 'Mastered',
    ncert: 'Class 10 · Ch 3'
  },
  {
    concept: 'Quadratic Equations',
    masteryPct: 64,
    attempts: 19,
    avgScore: '68%',
    lastPracticed: 'Today',
    status: 'In Progress',
    ncert: 'Class 10 · Ch 4'
  },
  {
    concept: 'Discriminant & Nature of Roots',
    masteryPct: 38,
    attempts: 12,
    avgScore: '42%',
    lastPracticed: '4 days ago',
    status: 'Needs Work',
    ncert: 'Class 10 · Ch 4'
  },
  {
    concept: 'Polynomial Exponents',
    masteryPct: 78,
    attempts: 16,
    avgScore: '80%',
    lastPracticed: '5 days ago',
    status: 'Mastered',
    ncert: 'Class 9 · Ch 1'
  },
  {
    concept: 'Vieta’s Formulas',
    masteryPct: 25,
    attempts: 8,
    avgScore: '30%',
    lastPracticed: '1 week ago',
    status: 'Needs Work',
    ncert: 'Class 11 · Ch 2'
  }
]

// ---------------------------------------------------------------------------
// SESSION HISTORY
// ---------------------------------------------------------------------------
export const sessionHistoryData = [
  { id: 'sh1', type: 'Lesson', title: 'Factoring Quadratic Equations', date: 'Today, 11:20 AM', duration: '10 min', progress: '100%', score: '3/3 Practice' },
  { id: 'sh2', type: 'Doubt', title: 'Why discriminant D < 0 has no real roots?', date: 'Yesterday, 8:45 PM', duration: '5 min', progress: 'Resolved', mode: 'Socratic' },
  { id: 'sh3', type: 'Practice', title: 'Linear Equations Challenge Set', date: '22 Jul 2026', duration: '15 min', progress: '100%', score: '9/10 (90%)' },
  { id: 'sh4', type: 'Diagnostic', title: 'Initial Math Placement Quiz', date: '20 Jul 2026', duration: '12 min', progress: 'Completed', levelAssigned: 'Grade-Level' },
  { id: 'sh5', type: 'Lesson', title: 'Fundamentals of Variables', date: '19 Jul 2026', duration: '10 min', progress: '100%', score: '3/3 Practice' }
]

// Legacy export fallback
export const learningHistory = sessionHistoryData

// ---------------------------------------------------------------------------
// AI TUTOR DOUBT RESOLUTION & QUESTION HISTORY
// ---------------------------------------------------------------------------
export const doubtHistoryData = [
  {
    id: 'dh1',
    title: 'Why does the quadratic formula have ±?',
    timestamp: '10 min ago',
    rootConcept: 'Quadratic Equations',
    relatedConcepts: ['Parabola Symmetry', 'Square Root Definition', 'Two Real Roots'],
    mode: 'Socratic',
    ncert: { grade: 'Class 10', chapter: 'Chapter 4', topic: 'Quadratic Formula' },
    solutionDirect: 'The ± symbol arises because any positive number has two square roots: one positive and one negative. Geometrically, a parabola can cross the x-axis at two points.',
    solutionSocratic: 'Think about x² = 9. What two numbers, when squared, equal 9? (+3 and -3). Since both positive and negative values square to 9, how does that apply to the square root inside the formula?'
  },
  {
    id: 'dh2',
    title: 'How do I know when a discriminant is negative?',
    timestamp: 'Yesterday',
    rootConcept: 'Linear Equations & Exponents',
    relatedConcepts: ['Negative Square Roots', 'Discriminant D = b² - 4ac', 'Imaginary Numbers'],
    mode: 'Direct',
    ncert: { grade: 'Class 10', chapter: 'Chapter 4', topic: 'Nature of Roots' },
    solutionDirect: 'Calculate D = b² - 4ac. If 4ac is greater than b², then b² - 4ac becomes negative. Since the square root of a negative number is not a real number, there are no real roots.',
    solutionSocratic: 'What happens when you try to calculate the square root of -16 on a basic real-number calculator? Why can’t any real number multiplied by itself be negative?'
  },
  {
    id: 'dh3',
    title: 'What is the difference between terms and factors?',
    timestamp: '3 days ago',
    rootConcept: 'Variables & Like Terms',
    relatedConcepts: ['Addition vs Multiplication', 'Algebraic Expressions'],
    mode: 'Direct',
    ncert: { grade: 'Class 9', chapter: 'Chapter 2', topic: 'Polynomial Components' },
    solutionDirect: 'Terms are added or subtracted together (e.g. in 3x + 5, 3x and 5 are terms). Factors are multiplied together (e.g. in 3x, 3 and x are factors).',
    solutionSocratic: 'In the expression 4x + 7, what operation separates 4x and 7? In 4x, what operation connects 4 and x?'
  }
]

// Legacy export fallbacks
export const aiConversations = doubtHistoryData.map(d => ({ id: d.id, title: d.title, time: d.timestamp, active: true }))
export const aiMockReplies = doubtHistoryData.map(d => d.solutionDirect)

// Sample handwritten math images for demonstration
export const sampleHandwrittenImages = [
  {
    id: 'hw1',
    label: 'Handwritten Quadratic Problem',
    url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=80',
    parsedText: 'Solve: 2x² - 5x + 3 = 0 using factoring'
  },
  {
    id: 'hw2',
    label: 'Handwritten Linear Equation',
    url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80',
    parsedText: 'Find x: (3x + 2) / 4 = 5'
  }
]

// ---------------------------------------------------------------------------
// OFFLINE MODE & BANDWIDTH SIMULATION
// ---------------------------------------------------------------------------
export const offlineCacheData = {
  isOffline: false,
  isLowBandwidth: false,
  cachedLessonsCount: 4,
  pendingSyncItems: [
    { type: 'Practice Quiz', title: 'Factoring Quadratic Equations', time: '10 min ago' },
    { type: 'Doubt Resolved', title: 'Discriminant calculation query', time: '25 min ago' },
    { type: 'Progress Sync', title: 'Completed Lesson 1: Variables', time: '1h ago' }
  ]
}

// ---------------------------------------------------------------------------
// TEACHER DASHBOARD EXPANDED DATA
// ---------------------------------------------------------------------------
export const classOverview = {
  totalStudents: 42,
  averageScore: 78,
  attendance: 93,
  weakTopics: ['Discriminant & Nature of Roots', 'Polynomial Systems', 'Trigonometric Ratios'],
  levelDistribution: [
    { level: 'Foundational', count: 9, percentage: 21, color: '#f5a524' },
    { level: 'Grade-Level', count: 24, percentage: 57, color: '#4f5dff' },
    { level: 'Advanced', count: 9, percentage: 22, color: '#22c55e' }
  ],
  completionRate: 84,
  avgTimeSpentMinutes: 38
}

export const commonErrorPatterns = [
  {
    id: 'err1',
    error: 'Sign Inversion in Quadratic Formula (-b)',
    affectedStudents: 14,
    description: 'Students forget to flip the sign of b when b is already negative (e.g. b = -5 becoming -5 instead of +5).'
  },
  {
    id: 'err2',
    error: 'Misapplying Exponent Rules (Adding instead of multiplying)',
    affectedStudents: 11,
    description: 'Confusing (x³)⁴ = x¹² with x³ · x⁴ = x⁷.'
  },
  {
    id: 'err3',
    error: 'Forgetting Double Roots (±) in Square Root Method',
    affectedStudents: 9,
    description: 'Writing x² = 49 as x = 7 only, omitting x = -7.'
  }
]

export const classPerformance = [
  { week: 'W1', avg: 68 },
  { week: 'W2', avg: 71 },
  { week: 'W3', avg: 70 },
  { week: 'W4', avg: 74 },
  { week: 'W5', avg: 75 },
  { week: 'W6', avg: 78 }
]

export const topPerformers = [
  { id: 's1', name: 'Ishaan Patel', score: 96, level: 'Advanced', avatar: 'IP' },
  { id: 's2', name: 'Priya Sharma', score: 94, level: 'Advanced', avatar: 'PS' },
  { id: 's3', name: 'Aarav Mehta', score: 91, level: 'Grade-Level', avatar: 'AM' }
]

export const studentsNeedingHelp = [
  { id: 'h1', name: 'Rohan Gupta', topic: 'Discriminant & Roots', score: 42, level: 'Foundational', avatar: 'RG', lastActive: '2h ago' },
  { id: 'h2', name: 'Sneha Iyer', topic: 'Trigonometric Identities', score: 38, level: 'Foundational', avatar: 'SI', lastActive: 'Yesterday' },
  { id: 'h3', name: 'Karan Malhotra', topic: 'Linear Equations', score: 45, level: 'Grade-Level', avatar: 'KM', lastActive: '3h ago' }
]

export const recentSubmissions = [
  { id: 'sub1', student: 'Priya Sharma', assignment: 'Quadratic Formula Worksheet', status: 'Graded', score: '19/20' },
  { id: 'sub2', student: 'Rohan Gupta', assignment: 'Diagnostic Practice Set', status: 'Needs review', score: '8/20' },
  { id: 'sub3', student: 'Ishaan Patel', assignment: 'Advanced Polynomials Challenge', status: 'Graded', score: '10/10' },
  { id: 'sub4', student: 'Sneha Iyer', assignment: 'Variables & Like Terms', status: 'Pending', score: '—' }
]

export const classStudentList = [
  { id: 'g1', name: 'Aarav Mehta', level: 'Grade-Level', avgScore: 91, streak: 12, timeSpent: '4.2 hrs' },
  { id: 'g2', name: 'Priya Sharma', level: 'Advanced', avgScore: 94, streak: 20, timeSpent: '6.1 hrs' },
  { id: 'g3', name: 'Ishaan Patel', level: 'Advanced', avgScore: 96, streak: 15, timeSpent: '5.8 hrs' },
  { id: 'g4', name: 'Rohan Gupta', level: 'Foundational', avgScore: 42, streak: 2, timeSpent: '1.5 hrs' },
  { id: 'g5', name: 'Sneha Iyer', level: 'Foundational', avgScore: 38, streak: 1, timeSpent: '1.2 hrs' },
  { id: 'g6', name: 'Karan Malhotra', level: 'Grade-Level', avgScore: 45, streak: 4, timeSpent: '2.4 hrs' },
  { id: 'g7', name: 'Divya Nair', level: 'Grade-Level', avgScore: 79, streak: 9, timeSpent: '3.8 hrs' },
  { id: 'g8', name: 'Aditya Verma', level: 'Advanced', avgScore: 88, streak: 11, timeSpent: '4.9 hrs' }
]

// ---------------------------------------------------------------------------
// STUDENT PROFILE (Achievements, Badges, Heatmap, Certificates)
// ---------------------------------------------------------------------------
export const achievements = [
  { id: 'ach1', title: 'Day 1 Streak', icon: 'Flame', earned: true, description: 'Started your daily learning habit!' },
  { id: 'ach2', title: 'Quiz Whiz', icon: 'Sparkles', earned: true, description: 'Scored 100% on 3 practice modules in a row.' },
  { id: 'ach3', title: 'Fast Learner', icon: 'Zap', earned: true, description: 'Completed a 10-min micro-lesson in under 8 minutes.' },
  { id: 'ach4', title: 'Concept Master', icon: 'Trophy', earned: true, description: 'Mastered 3 root concept nodes in the Concept Graph.' },
  { id: 'ach5', title: 'Doubt Resolver', icon: 'Heart', earned: true, description: 'Asked 5 doubts and reviewed AI Socratic breakdowns.' },
  { id: 'ach6', title: '30-Day Master', icon: 'Flame', earned: false, description: 'Complete 30 consecutive days of practice.' }
]

export const certificates = [
  { id: 'cert1', title: 'Foundations of Algebra & Linear Equations', date: 'May 2026', ncert: 'NCERT Class 9 & 10 Certified' },
  { id: 'cert2', title: 'Quadratic Equations Mastery', date: 'Jul 2026', ncert: 'NCERT Class 10 Chapter 4 Certified' }
]

export const weeklyActivity = [
  { day: 'Mon', minutes: 25, xp: 75 },
  { day: 'Tue', minutes: 35, xp: 110 },
  { day: 'Wed', minutes: 18, xp: 50 },
  { day: 'Thu', minutes: 40, xp: 120 },
  { day: 'Fri', minutes: 30, xp: 90 },
  { day: 'Sat', minutes: 15, xp: 40 },
  { day: 'Sun', minutes: 32, xp: 95 }
]

// Generate 30-day activity heatmap grid data
export const heatmapData = Array.from({ length: 28 }).map((_, idx) => {
  const intensity = [0, 1, 2, 3, 4][(idx * 7 + 3) % 5]
  return {
    day: idx + 1,
    intensity, // 0 = none, 1 = low, 2 = medium, 3 = high, 4 = max
    minutes: intensity * 12
  }
})

export const testimonials = [
  {
    quote: 'My daughter used to dread math homework. Now she asks to do her micro-lessons before dinner.',
    name: 'Meera Joshi',
    role: 'Parent, Grade 10 student'
  },
  {
    quote: 'I finally have a real-time view of which of my 42 students are stuck, instead of finding out at test time.',
    name: 'Mrs. Kavita Rao',
    role: 'Mathematics Teacher'
  },
  {
    quote: 'The AI tutor explains things in Socratic mode so I actually understand the root concept!',
    name: 'Aarav Mehta',
    role: 'Grade 10 student'
  }
]

export const landingStats = [
  { label: 'Students learning daily', value: '48,000+' },
  { label: 'Micro-lessons completed', value: '2.1M' },
  { label: 'Avg. score improvement', value: '+23%' },
  { label: 'NCERT Partner Schools', value: '310' }
]
