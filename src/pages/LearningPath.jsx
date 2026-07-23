import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Clock, BarChart3, CheckCircle2, PlayCircle, Lock, BookOpen, Sparkles, Filter } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import ProgressBar from '../components/ProgressBar'
import { learningPathsData } from '../data/mockData'
import { subjectLearningPaths } from '../data/subjectContent'
import { useAuth } from '../context/AuthContext'

// Subject-specific path descriptions for the selector tabs
const pathDescsBySubject = {
  Mathematics: {
    Foundational: 'Core variables, expressions & basic equation solving',
    'Grade-Level': 'Quadratic equations, discriminant & linear pairs',
    Advanced: 'Vieta formulas, trigonometry & calculus limits',
  },
  Science: {
    Foundational: 'States of matter, cells & basic nutrition',
    'Grade-Level': 'Photosynthesis, digestion & periodic classification',
    Advanced: 'Chemical kinetics, heredity & nervous system',
  },
  Physics: {
    Foundational: 'Speed, distance, time & Newton\'s laws basics',
    'Grade-Level': "Newton's applications, Ohm's law & light optics",
    Advanced: 'Kinematics, gravitation & wave optics',
  },
  Chemistry: {
    Foundational: 'Atoms, physical/chemical changes & mixtures',
    'Grade-Level': 'Acids/bases, chemical reactions & reactivity series',
    Advanced: 'Organic chemistry, electrochemistry & thermochemistry',
  },
  Biology: {
    Foundational: 'Plant kingdom, animal classification & photosynthesis',
    'Grade-Level': 'Cell structure, circulatory system & Mendel\'s laws',
    Advanced: 'DNA/protein synthesis, ecology & endocrine system',
  },
  English: {
    Foundational: 'Grammar basics, tenses & sentence structure',
    'Grade-Level': 'Active/passive voice, comprehension & essay writing',
    Advanced: 'Critical reading, vocabulary & argumentative writing',
  },
}

const pathLevels = [
  { key: 'Foundational', label: 'Foundational Path', color: '#f59e0b' },
  { key: 'Grade-Level', label: 'Grade-Level Path', color: '#4f5dff' },
  { key: 'Advanced', label: 'Advanced Path', color: '#10b981' },
]

function LessonCard({ lesson, activePath, navigate, index }) {
  const done = lesson.progress === 100
  return (
    <Card
      hover
      className="p-5 flex flex-col justify-between"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <div>
        {/* NCERT Tag */}
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[var(--color-primary)] mb-2">
          <BookOpen size={13} /> {lesson.ncert.grade} · {lesson.ncert.chapter}
        </div>

        <div className="flex items-start justify-between mb-2">
          <h3 className="font-display font-bold text-base leading-snug pr-2">{lesson.title}</h3>
          {done && <CheckCircle2 size={20} className="text-emerald-500 shrink-0" />}
        </div>

        <div className="flex items-center gap-4 text-xs text-[var(--color-muted)] mb-3">
          <span className="flex items-center gap-1 font-mono-num font-semibold text-slate-700">
            <Clock size={14} className="text-[var(--color-primary)]" /> {lesson.duration} (10-Min Lesson)
          </span>
          <span className="flex items-center gap-1 font-semibold text-indigo-600">
            <BarChart3 size={14} /> {lesson.difficulty}
          </span>
        </div>

        {/* Objectives preview */}
        <div className="mb-4 bg-[var(--color-bg)] p-3 rounded-xl border border-[var(--color-line)] text-xs text-[var(--color-ink-soft)]">
          <p className="font-semibold text-slate-700 mb-1">Key Learning Objectives:</p>
          <ul className="list-disc list-inside space-y-0.5 text-[11px] text-[var(--color-muted)]">
            {lesson.objectives.slice(0, 2).map((obj, idx) => (
              <li key={idx} className="truncate">{obj}</li>
            ))}
          </ul>
        </div>

        <ProgressBar value={lesson.progress} className="mb-1" />
        <div className="flex justify-between text-[11px] text-[var(--color-muted)] mb-4">
          <span>Completion: {lesson.progress}%</span>
          <span>3 Practice Problems</span>
        </div>
      </div>

      <Button
        size="sm"
        variant={done ? 'secondary' : 'primary'}
        className="w-full"
        onClick={() => navigate(`/lesson/${lesson.id}`)}
      >
        <PlayCircle size={16} /> {done ? 'Review Lesson' : lesson.progress > 0 ? 'Continue Lesson' : 'Start 10-Min Lesson'}
      </Button>
    </Card>
  )
}

export default function LearningPath() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const subject = user.subject || 'Mathematics'
  const [selectedPathKey, setSelectedPathKey] = useState(user.level || 'Grade-Level')

  // Use subject-specific paths, fall back to Mathematics
  const subjectPaths = subjectLearningPaths[subject] || learningPathsData
  const currentPathLessons = subjectPaths[selectedPathKey] || subjectPaths['Grade-Level'] || []
  const pathDescs = pathDescsBySubject[subject] || pathDescsBySubject.Mathematics

  return (
    <div className="flex flex-col gap-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-primary)] mb-1">
            <Sparkles size={15} /> Diagnostic Path Assigned: <span className="font-bold">{user.level || 'Grade-Level'}</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-bold">Personalized NCERT Pathways</h1>
          <p className="text-[var(--color-muted)] text-sm mt-1">
            {subject} · 10-minute micro-lessons with objectives, summaries, and 3 embedded practice questions.
          </p>
        </div>

        {/* Diagnostic re-test trigger */}
        <Button variant="secondary" onClick={() => navigate('/quiz')}>
          Retake 5-Q Diagnostic
        </Button>
      </div>

      {/* Path Selector Tabs */}
      <Card className="p-4 sm:p-5">
        <p className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-3">
          Select Pathway Variation
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {pathLevels.map((lvl) => {
            const isSelected = selectedPathKey === lvl.key
            return (
              <button
                key={lvl.key}
                type="button"
                onClick={() => setSelectedPathKey(lvl.key)}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-[var(--color-primary)] bg-indigo-50/70 shadow-sm'
                    : 'border-[var(--color-line)] hover:border-indigo-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-display font-bold text-sm" style={{ color: lvl.color }}>
                    {lvl.label}
                  </span>
                  {isSelected && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--color-primary)] text-white">ACTIVE</span>}
                </div>
                <p className="text-xs text-[var(--color-muted)] leading-snug">{pathDescs[lvl.key]}</p>
              </button>
            )
          })}
        </div>
      </Card>

      {/* Lessons List */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-3 h-3 rounded-full" style={{ background: pathLevels.find(p => p.key === selectedPathKey)?.color }} />
          <h2 className="font-display font-bold text-xl">{selectedPathKey} Micro-Lessons</h2>
          <span className="text-xs font-semibold text-[var(--color-muted)]">({currentPathLessons.length} modules)</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentPathLessons.map((lesson, i) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              activePath={selectedPathKey}
              navigate={navigate}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
