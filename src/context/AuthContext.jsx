import { createContext, useContext, useState, useCallback } from 'react'
import { currentStudent, currentTeacher } from '../data/mockData'

const STORAGE_KEY = 'learnflow_user'

function initials(name = '') {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return 'U'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

// Base profile shape merges the mock "demo" account with whatever the
// logged-in user actually entered at Sign Up / Login. Everything the
// student hasn't personalised yet (XP, streak, achievements, etc.) still
// comes from the realistic mock dataset — only identity fields are
// overridden, which keeps the rest of the prototype's mock data intact.
function loadStoredUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

function buildDefaultUser(role) {
  if (role === 'teacher') {
    return {
      role: 'teacher',
      name: currentTeacher.name,
      avatar: currentTeacher.avatar,
      subject: currentTeacher.subject,
      grade: currentTeacher.grade,
    }
  }
  return {
    role: 'student',
    name: currentStudent.name,
    avatar: currentStudent.avatar,
    grade: currentStudent.grade,
    subject: currentStudent.subject,
    level: currentStudent.level,
  }
}

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => loadStoredUser() || buildDefaultUser('student'))

  const persist = useCallback((next) => {
    setUser(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      // localStorage unavailable — continue with in-memory state only
    }
  }, [])

  // Called from Sign Up / Login with { name, role }
  const login = useCallback((data) => {
    const base = buildDefaultUser(data.role || 'student')
    const name = data.name?.trim() ? data.name.trim() : base.name
    const next = {
      ...base,
      name,
      avatar: initials(name),
    }
    persist(next)
    return next
  }, [persist])

  // Merge partial updates (grade/subject onboarding, quiz level, etc.)
  const updateUser = useCallback((patch) => {
    setUser((prev) => {
      const next = { ...prev, ...patch }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch {
        // ignore
      }
      return next
    })
  }, [])

  const logout = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // ignore
    }
    setUser(buildDefaultUser('student'))
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, updateUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}
