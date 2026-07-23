import { motion } from 'framer-motion'

export default function ProgressBar({ value = 0, className = '', color = 'gradient-primary', trackClassName = '' }) {
  return (
    <div className={`h-2 rounded-full bg-[var(--color-line)] overflow-hidden ${className.includes('w-') ? '' : 'w-full'} ${className} ${trackClassName}`}>
      <motion.div
        className={`h-full rounded-full ${color}`}
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(value, 100)}%` }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
    </div>
  )
}
