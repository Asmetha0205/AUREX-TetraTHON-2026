import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, Sparkles, LogOut, GraduationCap } from 'lucide-react'
import { currentTeacher } from '../data/mockData'
import { useAuth } from '../context/AuthContext'

const links = [{ to: '/teacher', label: 'Class Overview', icon: LayoutDashboard }]

export default function TeacherSidebar() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  return (
    <aside className="hidden lg:flex flex-col w-64 shrink-0 h-screen sticky top-0 border-r border-[var(--color-line)] bg-white px-5 py-6">
      <div className="flex items-center gap-2 mb-8 px-1">
        <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
          <Sparkles size={18} className="text-white" />
        </div>
        <span className="font-display font-bold text-lg">LearnFlow AI</span>
      </div>

      <div className="flex items-center gap-3 mb-6 px-2">
        <div className="w-10 h-10 rounded-full bg-[var(--color-violet)] text-white flex items-center justify-center font-semibold text-sm">
          {user.avatar}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold truncate">{user.name}</p>
          <p className="text-xs text-[var(--color-muted)] truncate">Faculty · {user.subject || 'Mathematics'}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-6 rounded-xl bg-indigo-50 border border-indigo-100 px-3 py-2">
        <GraduationCap size={16} className="text-[var(--color-primary)]" />
        <span className="text-sm font-semibold">{currentTeacher.classes.join(' · ')}</span>
      </div>

      <nav className="flex flex-col gap-1 flex-1">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
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
        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[var(--color-muted)] hover:bg-[var(--color-bg)] cursor-pointer"
      >
        <LogOut size={18} />
        Log out
      </button>
    </aside>
  )
}
