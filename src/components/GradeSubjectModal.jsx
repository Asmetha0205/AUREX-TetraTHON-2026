import { useState } from 'react'
import { BookOpen, GraduationCap, CheckCircle2 } from 'lucide-react'
import Modal from './Modal'
import Button from './Button'
import { gradesList, subjectsList } from '../data/mockData'

export default function GradeSubjectModal({ open, onClose, onSave, currentGrade = 'Grade 10', currentSubject = 'Mathematics' }) {
  const [selectedGrade, setSelectedGrade] = useState(currentGrade)
  const [selectedSubject, setSelectedSubject] = useState(currentSubject)

  const handleSave = () => {
    if (onSave) {
      onSave({ grade: selectedGrade, subject: selectedSubject })
    }
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose} title="Select Your Grade & Subject">
      <div className="flex flex-col gap-6 py-2">
        <p className="text-sm text-[var(--color-ink-soft)]">
          LearnFlow AI tailors diagnostic assessments, lessons, and NCERT alignments specifically to your grade level and target subject.
        </p>

        {/* Grade Selection */}
        <div>
          <label className="flex items-center gap-2 text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-2">
            <GraduationCap size={16} className="text-[var(--color-primary)]" /> Choose Grade
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {gradesList.map((g) => {
              const isSelected = selectedGrade === g
              return (
                <button
                  key={g}
                  type="button"
                  onClick={() => setSelectedGrade(g)}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    isSelected
                      ? 'border-[var(--color-primary)] bg-indigo-50 text-[var(--color-primary)] shadow-sm'
                      : 'border-[var(--color-line)] hover:border-indigo-200 text-[var(--color-ink-soft)]'
                  }`}
                >
                  {isSelected && <CheckCircle2 size={13} className="text-[var(--color-primary)]" />}
                  {g}
                </button>
              )
            })}
          </div>
        </div>

        {/* Subject Selection */}
        <div>
          <label className="flex items-center gap-2 text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-2">
            <BookOpen size={16} className="text-[var(--color-primary)]" /> Choose Subject
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {subjectsList.map((s) => {
              const isSelected = selectedSubject === s
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSelectedSubject(s)}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    isSelected
                      ? 'border-[var(--color-primary)] bg-indigo-50 text-[var(--color-primary)] shadow-sm'
                      : 'border-[var(--color-line)] hover:border-indigo-200 text-[var(--color-ink-soft)]'
                  }`}
                >
                  {isSelected && <CheckCircle2 size={13} className="text-[var(--color-primary)]" />}
                  {s}
                </button>
              )
            })}
          </div>
        </div>

        <div className="pt-2">
          <Button size="lg" className="w-full" onClick={handleSave}>
            Confirm Selection & Continue
          </Button>
        </div>
      </div>
    </Modal>
  )
}
