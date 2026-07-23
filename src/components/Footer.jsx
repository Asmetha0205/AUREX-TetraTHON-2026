import { Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <Sparkles size={16} className="text-white" />
            </div>
            <span className="font-display font-bold">LearnFlow AI</span>
          </div>
          <p className="text-sm text-[var(--color-muted)]">Adaptive microlearning and an AI tutor for every student in the room.</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-[var(--color-muted)]">
            <li>Diagnostic quiz</li>
            <li>Learning paths</li>
            <li>AI doubt resolution</li>
            <li>Teacher insights</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Team AUREX</h4>
          <ul className="space-y-2 text-sm text-[var(--color-muted)]">
            <li>TetraTHON 2026</li>
            <li>EdTech Track</li>
            <li>Built with React & Tailwind</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-[var(--color-muted)]">
            <li>hello@learnflow.ai</li>
            <li>Prototype build — no live backend</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--color-line)] py-5 text-center text-xs text-[var(--color-muted)]">
        © 2026 LearnFlow AI · Built by Team AUREX for TetraTHON
      </div>
    </footer>
  )
}
