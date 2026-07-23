import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Sparkles, LogOut } from 'lucide-react'

export default function MobileTopbar({ links, name, subtitle }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <div className="lg:hidden sticky top-0 z-40 glass px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
          <Sparkles size={16} className="text-white" />
        </div>
        <span className="font-display font-bold">LearnFlow AI</span>
      </div>
      <button onClick={() => setOpen(true)} className="p-2 rounded-lg hover:bg-black/5 cursor-pointer" aria-label="Open menu">
        <Menu size={22} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-[var(--color-ink)]/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-72 bg-white p-6 flex flex-col"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ type: 'spring', damping: 24 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="font-semibold text-sm">{name}</p>
                  <p className="text-xs text-[var(--color-muted)]">{subtitle}</p>
                </div>
                <button onClick={() => setOpen(false)} className="p-1.5 cursor-pointer"><X size={20} /></button>
              </div>
              <nav className="flex flex-col gap-1 flex-1">
                {links.map(({ to, label, icon: Icon }) => (
                  <NavLink
                    key={to}
                    to={to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium ${
                        isActive ? 'gradient-primary text-white' : 'text-[var(--color-ink-soft)] hover:bg-[var(--color-bg)]'
                      }`
                    }
                  >
                    <Icon size={18} />
                    {label}
                  </NavLink>
                ))}
              </nav>
              <button
                onClick={() => navigate('/login')}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[var(--color-muted)] hover:bg-[var(--color-bg)] cursor-pointer"
              >
                <LogOut size={18} />
                Log out
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
