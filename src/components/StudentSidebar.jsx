import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, Route, MessageCircleQuestion, User, Sparkles, LogOut, Flame, Network, BookOpen, Settings } from 'lucide-react'
import { currentStudent } from '../data/mockData'
import GradeSubjectModal from './GradeSubjectModal'
import { useToast } from './Toast'
import { useAuth } from '../context/AuthContext'

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/path', label: 'Learning Path', icon: Route },
  { to: '/concept-graph', label: 'Concept Graph', icon: Network },
  { to: '/tutor', label: 'AI Tutor', icon: MessageCircleQuestion },
  { to: '/profile', label: 'Profile', icon: User },
]

export default function StudentSidebar() {
  const navigate = useNavigate()
  const [gradeModalOpen, setGradeModalOpen] = useState(false)
  const { showToast } = useToast()
  const { user, updateUser, logout } = useAuth()

  return (
    <aside className="hidden lg:flex flex-col w-64 shrink-0 h-screen sticky top-0 border-r border-[var(--color-line)] bg-white px-5 py-6">
      <div className="flex items-center gap-2 mb-6 px-1">
        <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shadow-md">
          <Sparkles size={18} className="text-white" />
        </div>
        <span className="font-display font-bold text-lg">LearnFlow AI</span>
      </div>

      {/* Student Profile Card */}
      <div className="flex items-center gap-3 mb-4 px-2 p-2 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-line)]">
        <div className="w-10 h-10 rounded-full gradient-primary text-white flex items-center justify-center font-semibold text-sm shrink-0">
          {user.avatar}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold truncate">{user.name}</p>
          <p className="text-[11px] text-[var(--color-muted)] truncate">{user.grade} · {user.subject}</p>
        </div>
      </div>

      {/* Grade & Subject Switcher Button */}
      <button
        onClick={() => setGradeModalOpen(true)}
        className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-indigo-50 border border-indigo-100 text-xs font-semibold text-[var(--color-primary)] mb-4 hover:bg-indigo-100 cursor-pointer transition-colors"
      >
        <span className="flex items-center gap-1.5 truncate">
          <BookOpen size={14} /> Change Grade / Subject
        </span>
        <Settings size={13} />
      </button>

      {/* Streak Badge */}
      <div className="flex items-center gap-2 mb-6 rounded-xl bg-amber-50 border border-amber-100 px-3 py-2">
        <Flame size={16} className="text-[var(--color-amber)]" />
        <span className="text-xs font-semibold font-mono-num text-amber-800">{currentStudent.streak} Day Streak 🔥</span>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-1 flex-1">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                isActive
                  ? 'gradient-primary text-white shadow-md shadow-indigo-500/20'
                  : 'text-[var(--color-ink-soft)] hover:bg-[var(--color-bg)]'
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>

      <button
        onClick={() => {
          logout()
          navigate('/login')
        }}
        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-[var(--color-muted)] hover:bg-[var(--color-bg)] cursor-pointer"
      >
        <LogOut size={18} />
        Log out
      </button>

      <GradeSubjectModal
        open={gradeModalOpen}
        onClose={() => setGradeModalOpen(false)}
        currentGrade={user.grade}
        currentSubject={user.subject}
        onSave={({ grade, subject }) => {
          updateUser({ grade, subject })
          showToast(`Updated to ${grade} · ${subject}`, 'success')
        }}
      />
    </aside>
  )
}
