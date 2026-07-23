import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sparkles, Mail, Lock, GraduationCap, User, UserPlus, ArrowRight } from 'lucide-react'
import Button from '../components/Button'
import Modal from '../components/Modal'
import GradeSubjectModal from '../components/GradeSubjectModal'
import { useToast } from '../components/Toast'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [mode, setMode] = useState('login') // 'login' | 'signup'
  const [role, setRole] = useState('student') // 'student' | 'teacher'
  const [forgotOpen, setForgotOpen] = useState(false)
  const [gradeModalOpen, setGradeModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate()
  const { showToast } = useToast()
  const { login, updateUser } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    const loggedInUser = login({ name: formData.name, role })
    if (role === 'student') {
      // Open grade & subject selection onboarding before starting learning
      setGradeModalOpen(true)
    } else {
      showToast(`Logged in as ${loggedInUser.name}!`, 'success')
      navigate('/teacher')
    }
  }

  const handleGradeSubjectSave = ({ grade, subject }) => {
    updateUser({ grade, subject })
    showToast(`Welcome! Configured for ${grade} · ${subject}`, 'success')
    navigate('/quiz')
  }

  const handleGoogle = () => {
    const loggedInUser = login({ name: formData.name, role })
    showToast(`Signed in with Google as ${loggedInUser.name} (demo)`, 'info')
    if (role === 'student') {
      setGradeModalOpen(true)
    } else {
      navigate('/teacher')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 relative overflow-hidden bg-[var(--color-bg)]">
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-indigo-200/50 to-violet-200/50 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-blue-200/50 to-indigo-200/50 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-md rounded-3xl bg-white border border-[var(--color-line)] shadow-xl p-7 sm:p-8"
      >
        {/* Header */}
        <div className="flex flex-col items-center mb-5 text-center">
          <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center mb-3 shadow-md">
            <Sparkles size={22} className="text-white" />
          </div>
          <h1 className="font-display font-bold text-2xl">
            {mode === 'login' ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-xs text-[var(--color-muted)] mt-1">
            {mode === 'login' ? 'Log in to continue your personalized learning path' : 'Join LearnFlow AI for adaptive NCERT micro-learning'}
          </p>
        </div>

        {/* Mode Switcher: Login vs Sign Up */}
        <div className="flex border-b border-[var(--color-line)] mb-5">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`flex-1 py-2 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
              mode === 'login' ? 'border-[var(--color-primary)] text-[var(--color-primary)]' : 'border-transparent text-[var(--color-muted)] hover:text-slate-700'
            }`}
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => setMode('signup')}
            className={`flex-1 py-2 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
              mode === 'signup' ? 'border-[var(--color-primary)] text-[var(--color-primary)]' : 'border-transparent text-[var(--color-muted)] hover:text-slate-700'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Role Switcher: Student vs Teacher */}
        <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-[var(--color-bg)] mb-5">
          <button
            type="button"
            onClick={() => setRole('student')}
            className={`flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              role === 'student' ? 'bg-white shadow-sm text-[var(--color-primary)]' : 'text-[var(--color-muted)]'
            }`}
          >
            <User size={15} /> Student {mode === 'login' ? 'Login' : 'Sign Up'}
          </button>
          <button
            type="button"
            onClick={() => setRole('teacher')}
            className={`flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
              role === 'teacher' ? 'bg-white shadow-sm text-[var(--color-primary)]' : 'text-[var(--color-muted)]'
            }`}
          >
            <GraduationCap size={15} /> Teacher {mode === 'login' ? 'Login' : 'Sign Up'}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          <label className="block">
            <span className="text-xs font-semibold text-[var(--color-ink-soft)] mb-1 block">Full Name</span>
            <div className="flex items-center gap-2 rounded-xl border border-[var(--color-line)] px-3.5 py-2.5 focus-within:border-[var(--color-primary)] transition-colors">
              <User size={16} className="text-[var(--color-muted)]" />
              <input
                type="text"
                required
                placeholder={role === 'student' ? 'e.g. Aarav Mehta' : 'e.g. Mrs. Kavita Rao'}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="flex-1 outline-none text-xs sm:text-sm bg-transparent"
              />
            </div>
          </label>

          <label className="block">
            <span className="text-xs font-semibold text-[var(--color-ink-soft)] mb-1 block">School Email</span>
            <div className="flex items-center gap-2 rounded-xl border border-[var(--color-line)] px-3.5 py-2.5 focus-within:border-[var(--color-primary)] transition-colors">
              <Mail size={16} className="text-[var(--color-muted)]" />
              <input
                type="email"
                required
                defaultValue={
                  formData.email || (role === 'student' ? 'aarav.mehta@school.edu' : 'kavita.rao@school.edu')
                }
                className="flex-1 outline-none text-xs sm:text-sm bg-transparent"
              />
            </div>
          </label>

          <label className="block">
            <span className="text-xs font-semibold text-[var(--color-ink-soft)] mb-1 block">Password</span>
            <div className="flex items-center gap-2 rounded-xl border border-[var(--color-line)] px-3.5 py-2.5 focus-within:border-[var(--color-primary)] transition-colors">
              <Lock size={16} className="text-[var(--color-muted)]" />
              <input type="password" required defaultValue="demo1234" className="flex-1 outline-none text-xs sm:text-sm bg-transparent" />
            </div>
          </label>

          {mode === 'login' && (
            <div className="flex justify-end -mt-1">
              <button type="button" onClick={() => setForgotOpen(true)} className="text-xs font-medium text-[var(--color-primary)] cursor-pointer hover:underline">
                Forgot password?
              </button>
            </div>
          )}

          <Button type="submit" size="lg" className="w-full mt-1">
            {mode === 'login' ? `Log in as ${role === 'student' ? 'Student' : 'Teacher'}` : `Sign up as ${role === 'student' ? 'Student' : 'Teacher'}`}
            <ArrowRight size={16} />
          </Button>
        </form>

        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-[var(--color-line)]" />
          <span className="text-xs text-[var(--color-muted)]">or</span>
          <div className="flex-1 h-px bg-[var(--color-line)]" />
        </div>

        {/* Dummy Google Sign In */}
        <Button variant="secondary" size="lg" className="w-full" onClick={handleGoogle}>
          <svg width="18" height="18" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l6-6C34.9 5.1 29.8 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.2-.1-2.4-.4-3.5z"/>
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.8 1.1 8 3l6-6C34.9 5.1 29.8 3 24 3 16.1 3 9.3 7.4 6.3 14.7z"/>
            <path fill="#4CAF50" d="M24 45c5.7 0 10.7-1.9 14.5-5.2l-6.7-5.7C29.6 35.9 27 37 24 37c-5.2 0-9.7-3.3-11.3-8H6.1v6.1C9 39.6 15.9 45 24 45z"/>
            <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.5l6.7 5.7C41.9 35.9 45 30.5 45 24c0-1.2-.1-2.4-.4-3.5z"/>
          </svg>
          Continue with Google
        </Button>

        <p className="text-center text-xs text-[var(--color-muted)] mt-5">
          Prototype Mode — any credentials proceed to setup.
        </p>
      </motion.div>

      {/* Forgot Password Modal */}
      <Modal open={forgotOpen} onClose={() => setForgotOpen(false)} title="Reset Password">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setForgotOpen(false)
            showToast('Password reset link sent to your email!', 'success')
          }}
          className="flex flex-col gap-4 py-1"
        >
          <p className="text-xs text-[var(--color-ink-soft)]">
            Enter your registered school email address to receive a secure password reset link.
          </p>
          <div className="flex items-center gap-2 rounded-xl border border-[var(--color-line)] px-3.5 py-2.5">
            <Mail size={16} className="text-[var(--color-muted)]" />
            <input type="email" required placeholder="you@school.edu" className="flex-1 outline-none text-xs sm:text-sm bg-transparent" />
          </div>
          <Button type="submit" className="w-full">Send Reset Link</Button>
        </form>
      </Modal>

      {/* Onboarding Grade & Subject Selection Modal */}
      <GradeSubjectModal
        open={gradeModalOpen}
        onClose={() => setGradeModalOpen(false)}
        onSave={handleGradeSubjectSave}
      />
    </div>
  )
}
