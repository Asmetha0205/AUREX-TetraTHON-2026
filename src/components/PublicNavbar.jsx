import { Link, useNavigate } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import Button from './Button'

export default function PublicNavbar() {
  const navigate = useNavigate()
  return (
    <header className="sticky top-0 z-40 glass">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
            <Sparkles size={18} className="text-white" />
          </div>
          <span className="font-display font-bold text-lg">LearnFlow AI</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-ink-soft)]">
          <a href="#features" className="hover:text-[var(--color-primary)] transition-colors">Features</a>
          <a href="#how" className="hover:text-[var(--color-primary)] transition-colors">How it works</a>
          <a href="#testimonials" className="hover:text-[var(--color-primary)] transition-colors">Stories</a>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>Log in</Button>
          <Button variant="primary" size="sm" onClick={() => navigate('/login')}>Get started</Button>
        </div>
      </nav>
    </header>
  )
}
