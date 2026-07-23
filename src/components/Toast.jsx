import { createContext, useCallback, useContext, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Info, X } from 'lucide-react'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const showToast = useCallback((message, type = 'success') => {
    const id = Math.random().toString(36).slice(2)
    setToasts((t) => [...t, { id, message, type }])
    setTimeout(() => {
      setToasts((t) => t.filter((toast) => toast.id !== id))
    }, 3200)
  }, [])

  const dismiss = (id) => setToasts((t) => t.filter((toast) => toast.id !== id))

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-5 right-5 z-[100] flex flex-col gap-2 items-end">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40 }}
              className="flex items-center gap-2 rounded-xl bg-white border border-[var(--color-line)] shadow-lg px-4 py-3 min-w-[240px]"
            >
              {toast.type === 'success' ? (
                <CheckCircle2 size={18} className="text-[var(--color-success)] shrink-0" />
              ) : (
                <Info size={18} className="text-[var(--color-primary)] shrink-0" />
              )}
              <span className="text-sm font-medium text-[var(--color-ink)] flex-1">{toast.message}</span>
              <button onClick={() => dismiss(toast.id)} className="text-[var(--color-muted)] cursor-pointer">
                <X size={14} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    return { showToast: (msg) => console.log('Toast:', msg) }
  }
  return context
}

export default ToastProvider
