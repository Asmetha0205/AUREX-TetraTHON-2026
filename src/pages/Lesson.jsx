import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PlayCircle, RotateCcw, Sparkles, CheckCircle2, XCircle, MessageCircleQuestion, ArrowRight, BookOpen, Clock, Target, HelpCircle } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import ProgressBar from '../components/ProgressBar'
import { learningPathsData } from '../data/mockData'
import { subjectLearningPaths } from '../data/subjectContent'
import { useToast } from '../components/Toast'
import { useAuth } from '../context/AuthContext'

function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <div className="[perspective:1000px] h-36 cursor-pointer" onClick={() => setFlipped((f) => !f)}>
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 rounded-2xl gradient-primary text-white flex items-center justify-center p-5 text-center [backface-visibility:hidden]">
          <p className="font-semibold text-sm">{card.front}</p>
        </div>
        <div className="absolute inset-0 rounded-2xl bg-white border-2 border-[var(--color-primary)] flex items-center justify-center p-5 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="font-semibold text-sm text-[var(--color-primary)]">{card.back}</p>
        </div>
      </motion.div>
    </div>
  )
}

export default function Lesson() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { showToast } = useToast()
  const { user } = useAuth()

  const subject = user.subject || 'Mathematics'

  // Collect all lessons: Math from learningPathsData, others from subjectLearningPaths
  const mathLessons = [
    ...learningPathsData.Foundational,
    ...learningPathsData['Grade-Level'],
    ...learningPathsData.Advanced,
  ]
  const subjectPathData = subjectLearningPaths[subject]
  const subjectLessons = subjectPathData
    ? [
        ...(subjectPathData.Foundational || []),
        ...(subjectPathData['Grade-Level'] || []),
        ...(subjectPathData.Advanced || []),
      ]
    : []
  const allLessons = [...subjectLessons, ...mathLessons]
  const lesson = allLessons.find((l) => l.id === id) || (subjectPathData?.['Grade-Level']?.[0]) || learningPathsData['Grade-Level'][0]

  const [practiceAnswers, setPracticeAnswers] = useState({})
  const [showExplanation, setShowExplanation] = useState({})

  const handleSelectPractice = (qIdx, oIdx) => {
    setPracticeAnswers((prev) => ({ ...prev, [qIdx]: oIdx }))
    setShowExplanation((prev) => ({ ...prev, [qIdx]: true }))
  }

  const scoreCount = lesson.practice.reduce((acc, q, i) => acc + (practiceAnswers[i] === q.answer ? 1 : 0), 0)
  const answeredCount = Object.keys(practiceAnswers).length
  const progressPct = Math.round((answeredCount / lesson.practice.length) * 100)

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto">
      {/* NCERT Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-primary)] mb-1">
          <BookOpen size={14} /> NCERT Reference: {lesson.ncert.grade} · {lesson.ncert.chapter} ({lesson.ncert.topic})
        </div>
        <h1 className="font-display text-2xl md:text-3xl font-bold">{lesson.title}</h1>
        <div className="flex items-center gap-4 text-xs font-medium text-[var(--color-muted)] mt-2">
          <span className="flex items-center gap-1 text-slate-700 font-bold font-mono-num">
            <Clock size={14} className="text-[var(--color-primary)]" /> 10-Minute Lesson
          </span>
          <span className="flex items-center gap-1 font-semibold text-indigo-600">
            Difficulty: {lesson.difficulty}
          </span>
          <span className="flex items-center gap-1 font-semibold text-emerald-600">
            3 Practice Problems
          </span>
        </div>
      </div>

      {/* Video Placeholder */}
      <Card className="overflow-hidden shadow-lg border-indigo-100">
        <div className="aspect-video bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 flex items-center justify-center relative text-white">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer border border-white/40 shadow-2xl"
          >
            <PlayCircle size={44} className="text-white" />
          </motion.button>
          <div className="absolute bottom-4 right-4 text-xs font-bold text-white bg-black/40 px-3 py-1.5 rounded-lg backdrop-blur-sm flex items-center gap-1">
            <Clock size={12} /> 10:00 Micro-Video
          </div>
        </div>
      </Card>

      {/* Learning Objectives Section */}
      <Card className="p-6 border-indigo-100 bg-indigo-50/40">
        <div className="flex items-center gap-2 mb-3">
          <Target size={20} className="text-[var(--color-primary)]" />
          <h2 className="font-display font-bold text-lg">Learning Objectives</h2>
        </div>
        <ul className="grid sm:grid-cols-3 gap-3">
          {lesson.objectives.map((obj, i) => (
            <li key={i} className="p-3 rounded-xl bg-white border border-indigo-100 text-xs font-medium text-[var(--color-ink-soft)] flex items-start gap-2 shadow-xs">
              <span className="w-5 h-5 rounded-full bg-indigo-100 text-[var(--color-primary)] font-bold text-[11px] flex items-center justify-center shrink-0">
                {i + 1}
              </span>
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Notes */}
      <Card className="p-6">
        <h2 className="font-display font-bold text-lg mb-4">Core Lesson Notes</h2>
        <ul className="flex flex-col gap-3">
          {lesson.notes.map((n, i) => (
            <li key={i} className="flex gap-3 text-xs sm:text-sm text-[var(--color-ink-soft)]">
              <span className="w-5 h-5 shrink-0 rounded-full bg-indigo-50 text-[var(--color-primary)] text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              {n}
            </li>
          ))}
        </ul>
      </Card>

      {/* Summary */}
      <Card className="p-6 bg-slate-900 text-slate-100 border-slate-800">
        <h2 className="font-display font-bold text-lg mb-2 text-white">Lesson Summary</h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{lesson.summary}</p>
      </Card>

      {/* Flashcards */}
      <div>
        <h2 className="font-display font-bold text-lg mb-3">Concept Flashcards <span className="text-xs font-normal text-[var(--color-muted)]">(Tap card to flip)</span></h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {lesson.flashcards.map((c, i) => <Flashcard key={i} card={c} />)}
        </div>
      </div>

      {/* EMBEDDED PRACTICE PROBLEMS (EXACTLY 3 WITH INSTANT FEEDBACK & EXPLANATION) */}
      <Card className="p-6 border-2 border-indigo-200">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-[var(--color-line)]">
          <div>
            <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">Embedded Lesson Practice</span>
            <h2 className="font-display font-bold text-xl">Exactly 3 Practice Problems</h2>
          </div>
          <div className="text-right font-mono-num text-xs font-bold">
            <span className="text-[var(--color-primary)]">{answeredCount}/3 Answered</span>
          </div>
        </div>

        <ProgressBar value={progressPct} className="mb-6" />

        <div className="flex flex-col gap-8">
          {lesson.practice.map((q, qIdx) => {
            const selectedOpt = practiceAnswers[qIdx]
            const hasAnswered = selectedOpt !== undefined
            const isCorrect = hasAnswered && selectedOpt === q.answer

            return (
              <div key={q.id} className="p-5 rounded-2xl bg-white border border-[var(--color-line)] shadow-xs">
                {/* Question NCERT Tag */}
                <div className="flex items-center justify-between text-[11px] text-[var(--color-muted)] mb-2">
                  <span className="font-bold text-[var(--color-primary)]">Problem {qIdx + 1} of 3</span>
                  <span>{q.ncert.chapter}</span>
                </div>

                <p className="font-semibold text-sm sm:text-base mb-4 text-slate-900">{q.question}</p>

                {/* Option Buttons */}
                <div className="grid sm:grid-cols-2 gap-2.5 mb-4">
                  {q.options.map((opt, oIdx) => {
                    const isThisSelected = selectedOpt === oIdx
                    const isThisCorrect = oIdx === q.answer
                    
                    let style = 'border-[var(--color-line)] hover:border-indigo-300 bg-white'
                    if (hasAnswered) {
                      if (isThisCorrect) {
                        style = 'border-emerald-500 bg-emerald-50 text-emerald-800 font-bold'
                      } else if (isThisSelected && !isThisCorrect) {
                        style = 'border-rose-500 bg-rose-50 text-rose-800 font-bold'
                      } else {
                        style = 'border-slate-200 opacity-60 bg-slate-50'
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        type="button"
                        onClick={() => handleSelectPractice(qIdx, oIdx)}
                        disabled={hasAnswered}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl border-2 text-xs sm:text-sm transition-all cursor-pointer text-left ${style}`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="font-bold">{String.fromCharCode(65 + oIdx)}.</span> {opt}
                        </span>
                        {hasAnswered && isThisCorrect && <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />}
                        {hasAnswered && isThisSelected && !isThisCorrect && <XCircle size={16} className="text-rose-600 shrink-0" />}
                      </button>
                    )
                  })}
                </div>

                {/* Instant Feedback & Step-by-Step Explanation */}
                {hasAnswered && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-xs sm:text-sm border ${
                      isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-amber-50 border-amber-200 text-amber-900'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-bold mb-1">
                      {isCorrect ? <CheckCircle2 size={16} className="text-emerald-600" /> : <HelpCircle size={16} className="text-amber-600" />}
                      <span>{isCorrect ? 'Correct Answer! (+25 XP)' : 'Needs Review · Instant Explanation:'}</span>
                    </div>
                    <p className="leading-relaxed mt-1">{q.explanation}</p>
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>

        <div className="flex items-center justify-between mt-6 pt-4 border-t border-[var(--color-line)]">
          {answeredCount === 3 ? (
            <p className="text-sm font-bold text-emerald-700">
              Practice Completed! Score: {scoreCount}/3 🎉
            </p>
          ) : (
            <p className="text-xs text-[var(--color-muted)]">Select options above for immediate explanations.</p>
          )}

          {answeredCount === 3 && (
            <Button variant="secondary" onClick={() => { setPracticeAnswers({}); setShowExplanation({}) }}>
              <RotateCcw size={15} /> Retry Practice
            </Button>
          )}
        </div>
      </Card>

      {/* Navigation Actions */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button
          variant="secondary"
          size="lg"
          className="flex-1"
          onClick={() => { showToast('Redirecting to Multimodal AI Tutor...', 'info'); navigate('/tutor') }}
        >
          <Sparkles size={18} /> Ask AI Tutor a Doubt
        </Button>
        <Button size="lg" className="flex-1" onClick={() => navigate('/path')}>
          Next NCERT Lesson <ArrowRight size={18} />
        </Button>
      </div>
    </div>
  )
}
