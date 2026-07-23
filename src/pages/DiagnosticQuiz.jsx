import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, ArrowLeft, ArrowRight, CheckCircle2, BookOpen, AlertCircle, HelpCircle, TrendingUp, TrendingDown, Target } from 'lucide-react'
import Button from '../components/Button'
import ProgressBar from '../components/ProgressBar'
import Card from '../components/Card'
import { getDiagnosticQuizForSubject, getDiagnosticRationale, getGradeDifficultyLabel } from '../data/mockData'
import { useAuth } from '../context/AuthContext'

export default function DiagnosticQuiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()
  const { user, updateUser } = useAuth()

  const diagnosticQuiz = getDiagnosticQuizForSubject(user.subject)
  const difficultyLabel = getGradeDifficultyLabel(user.grade)

  const question = diagnosticQuiz[step]
  const isLast = step === diagnosticQuiz.length - 1
  const progressPct = ((step + (submitted ? 1 : 0)) / diagnosticQuiz.length) * 100

  const select = (idx) => setAnswers((a) => ({ ...a, [question.id]: idx }))

  const score = diagnosticQuiz.reduce((acc, q) => acc + (answers[q.id] === q.answer ? 1 : 0), 0)
  const rationale = getDiagnosticRationale(score, diagnosticQuiz, answers)

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-[var(--color-bg)]">
        <motion.div
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-xl w-full rounded-3xl bg-white border border-[var(--color-line)] shadow-xl p-6 sm:p-8"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
              className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 text-white shadow-lg"
            >
              <CheckCircle2 size={32} />
            </motion.div>
            <p className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-1">
              5-Question Diagnostic Assessment Complete
            </p>
            <h1 className="font-display text-2xl font-bold mb-1">
              Score: {score} out of 5 ({Math.round((score / 5) * 100)}%)
            </h1>
            <div className="inline-block gradient-text font-display font-bold text-3xl my-2">
              Level Assigned: {rationale.level}
            </div>
          </div>

          {/* Explanation Box: WHY the student received this level */}
          <div className="mt-4 p-5 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-start gap-3">
            <AlertCircle size={22} className="text-[var(--color-primary)] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display font-bold text-sm text-[var(--color-primary)] mb-1">
                Diagnostic Analysis & Rationale
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-ink-soft)] leading-relaxed">
                {rationale.reason}
              </p>
            </div>
          </div>

          {/* Strengths & Weak Areas */}
          <div className="grid sm:grid-cols-2 gap-3 mt-4">
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
              <div className="flex items-center gap-1.5 text-emerald-700 font-display font-bold text-xs uppercase tracking-wider mb-2">
                <TrendingUp size={14} /> Strengths
              </div>
              {rationale.strengths.length > 0 ? (
                <div className="flex flex-wrap gap-1.5">
                  {rationale.strengths.map((s) => (
                    <span key={s} className="text-[11px] font-semibold px-2 py-1 rounded-lg bg-emerald-100 text-emerald-800">{s}</span>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-emerald-800">No concepts fully cleared yet — that's what your path is for!</p>
              )}
            </div>
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100">
              <div className="flex items-center gap-1.5 text-rose-700 font-display font-bold text-xs uppercase tracking-wider mb-2">
                <TrendingDown size={14} /> Weak Areas
              </div>
              {rationale.weakAreas.length > 0 ? (
                <div className="flex flex-wrap gap-1.5">
                  {rationale.weakAreas.map((s) => (
                    <span key={s} className="text-[11px] font-semibold px-2 py-1 rounded-lg bg-rose-100 text-rose-800">{s}</span>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-rose-800">No gaps identified — outstanding work!</p>
              )}
            </div>
          </div>

          {/* Recommended Learning Path */}
          <div className="mt-3 p-4 rounded-2xl bg-violet-50 border border-violet-100 flex items-start gap-3">
            <Target size={20} className="text-violet-700 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display font-bold text-xs text-violet-800 uppercase tracking-wider mb-1">Recommended Learning Path</h3>
              <p className="text-xs sm:text-sm text-violet-900 leading-relaxed">{rationale.recommendedPath}</p>
            </div>
          </div>

          {/* Detailed Question Breakdown */}
          <div className="mt-6">
            <h3 className="font-display font-semibold text-sm mb-3">Diagnostic Performance Breakdown</h3>
            <div className="flex flex-col gap-2">
              {diagnosticQuiz.map((q, idx) => {
                const isCorrect = answers[q.id] === q.answer
                return (
                  <div
                    key={q.id}
                    className={`p-3 rounded-xl border flex items-center justify-between text-xs font-medium ${
                      isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-rose-50 border-rose-200 text-rose-800'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate pr-2">
                      <span className="font-bold">Q{idx + 1}:</span>
                      <span className="truncate">{q.concept}</span>
                    </div>
                    <span className="font-bold shrink-0">
                      {isCorrect ? '✓ Correct (+1)' : '✗ Missed (Gap identified)'}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[var(--color-line)]">
            <Button
              size="lg"
              className="w-full"
              onClick={() => {
                updateUser({ level: rationale.level })
                navigate('/path')
              }}
            >
              Launch My {rationale.level} Learning Path <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-10 bg-[var(--color-bg)]">
      <div className="w-full max-w-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <Sparkles size={16} className="text-white" />
            </div>
            <span className="font-display font-bold text-sm">LearnFlow AI Diagnostic</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-[var(--color-primary)]">
              {user.grade} · {user.subject}
            </span>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
              difficultyLabel === 'Easy' ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
              : difficultyLabel === 'Medium' ? 'bg-amber-50 text-amber-700 border-amber-100'
              : 'bg-rose-50 text-rose-700 border-rose-100'
            }`}>
              {difficultyLabel} Difficulty
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-xs font-medium text-[var(--color-muted)] mb-2">
            <span>Question {step + 1} of {diagnosticQuiz.length} (Strict 5-Q Diagnostic)</span>
            <span>{Math.round(progressPct)}%</span>
          </div>
          <ProgressBar value={progressPct} />
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-white border border-[var(--color-line)] shadow-sm p-6 sm:p-7"
          >
            {/* NCERT Tag */}
            <div className="flex items-center gap-2 text-[11px] font-semibold text-[var(--color-primary)] mb-3">
              <BookOpen size={13} /> NCERT Reference: {question.ncert.grade} · {question.ncert.chapter}
            </div>

            <h2 className="font-display font-semibold text-lg sm:text-xl mb-5 leading-snug">{question.question}</h2>

            {/* Options */}
            <div className="flex flex-col gap-3">
              {question.options.map((opt, idx) => {
                const isSelected = answers[question.id] === idx
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => select(idx)}
                    className={`text-left px-4 py-3.5 rounded-xl border-2 text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[var(--color-primary)] bg-indigo-50 text-[var(--color-primary)] shadow-sm'
                        : 'border-[var(--color-line)] hover:border-indigo-200 text-[var(--color-ink-soft)]'
                    }`}
                  >
                    <span className="inline-flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold shrink-0 ${
                        isSelected ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white' : 'border-[var(--color-line)] text-[var(--color-muted)]'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      {opt}
                    </span>
                  </button>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-between mt-6">
          <Button
            variant="secondary"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className={step === 0 ? 'opacity-40 pointer-events-none' : ''}
          >
            <ArrowLeft size={16} /> Previous
          </Button>

          {isLast ? (
            <Button
              onClick={() => setSubmitted(true)}
              disabled={answers[question.id] === undefined}
              className={answers[question.id] === undefined ? 'opacity-40 pointer-events-none' : ''}
            >
              Submit Diagnostic <CheckCircle2 size={16} />
            </Button>
          ) : (
            <Button
              onClick={() => setStep((s) => s + 1)}
              disabled={answers[question.id] === undefined}
              className={answers[question.id] === undefined ? 'opacity-40 pointer-events-none' : ''}
            >
              Next <ArrowRight size={16} />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
