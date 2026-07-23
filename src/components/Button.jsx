import { motion } from 'framer-motion'

const variants = {
  primary: 'gradient-primary text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30',
  secondary: 'bg-white text-[var(--color-ink)] border border-[var(--color-line)] hover:border-[var(--color-primary)]',
  ghost: 'bg-transparent text-[var(--color-ink)] hover:bg-black/5',
  outlineWhite: 'bg-white/10 text-white border border-white/40 hover:bg-white/20',
}

const sizes = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as: Component = 'button',
  ...props
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Component
        className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  )
}
