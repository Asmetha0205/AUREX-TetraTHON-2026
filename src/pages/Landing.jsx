import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  Brain, Route, MessageCircleQuestion, LineChart, Sparkles, ArrowRight, Star, AlertTriangle, CheckCircle2
} from 'lucide-react'
import PublicNavbar from '../components/PublicNavbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import Card from '../components/Card'
import { landingStats, testimonials } from '../data/mockData'

const features = [
  {
    icon: Brain,
    title: '5-Question Diagnostic',
    text: 'Classifies every student into Foundational, Grade-Level, or Advanced with instant explanatory rationale.'
  },
  {
    icon: Route,
    title: 'Adaptive NCERT Pathways',
    text: '10-minute micro-lessons sequenced to each student’s level, fully aligned to NCERT Class 6–12 curriculum.'
  },
  {
    icon: MessageCircleQuestion,
    title: 'Multimodal AI Tutor',
    text: 'Resolves doubts via text, handwritten math images, or camera UI using Socratic and Direct modes.'
  },
  {
    icon: LineChart,
    title: 'Live Teacher Pulse',
    text: 'Automated weak topic alerts, error pattern tracking, and quick help intervention drawers.'
  }
]

const steps = [
  { n: '01', title: 'Take 5-Q Diagnostic', text: 'Classifies into Foundational, Grade-Level, or Advanced.' },
  { n: '02', title: 'Unlock 10-Min Path', text: 'Lessons with objectives, summary, and practice.' },
  { n: '03', title: 'Ask Multimodal Tutor', text: 'Text, handwritten photos, camera UI with Socratic mode.' },
  { n: '04', title: 'Track Concept Graph', text: 'Mastery nodes, badges, XP, and NCERT progress.' }
]

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <PublicNavbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12">
        <div className="absolute -top-32 -right-20 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-indigo-300/30 to-violet-300/30 blur-3xl" />
        <div className="absolute top-20 -left-32 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-blue-200/30 to-indigo-200/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-[var(--color-primary)] mb-4">
              <Sparkles size={14} /> TetraTHON 2026 · EdTech Track Solution
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              One Classroom.
              <br />
              <span className="gradient-text">Personalized AI Micro-Learning.</span>
            </h1>
            <p className="text-base sm:text-lg text-[var(--color-ink-soft)] mb-6 max-w-lg">
              Diagnose root concept gaps, unlock adaptive 10-minute NCERT pathways, and resolve doubts with multimodal Socratic AI.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" onClick={() => navigate('/login')}>
                Start Diagnostic Quiz <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="secondary" onClick={() => navigate('/login')}>
                Teacher Portal
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-8">
              {landingStats.slice(0, 2).map((s) => (
                <div key={s.label}>
                  <p className="font-display font-bold text-xl sm:text-2xl font-mono-num">{s.value}</p>
                  <p className="text-xs text-[var(--color-muted)]">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Path Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-3xl gradient-primary p-6 sm:p-8 shadow-xl shadow-indigo-500/20 text-white">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">Adaptive Path Map</span>
                <span className="text-xs font-medium">NCERT Class 10</span>
              </div>
              <svg viewBox="0 0 340 220" className="w-full h-auto">
                <path
                  d="M40 40 C 180 40, 40 110, 180 120 C 300 130, 80 180, 280 180"
                  fill="none"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                />
                {[
                  { x: 40, y: 40, label: 'Foundational' },
                  { x: 180, y: 120, label: 'Grade-Level' },
                  { x: 280, y: 180, label: 'Advanced' },
                ].map((node, i) => (
                  <g key={i}>
                    <circle cx={node.x} cy={node.y} r="18" fill="white" />
                    <text x={node.x} y={node.y + 5} textAnchor="middle" fontSize="14" fontWeight="700" fill="#4F5DFF">
                      {i + 1}
                    </text>
                  </g>
                ))}
              </svg>
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold">
                <span>Foundational</span>
                <span>Grade-Level</span>
                <span>Advanced</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="bg-white border-y border-[var(--color-line)] py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
              The EdTech Problem
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mt-3 mb-2">Why Mixed-Ability Classrooms Struggle</h2>
            <p className="text-sm text-[var(--color-ink-soft)]">
              Traditional one-size-fits-all instruction leaves 40% of students behind while underchallenging advanced learners.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-5 border-amber-200 bg-amber-50/40">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                <AlertTriangle size={20} />
              </div>
              <h3 className="font-display font-semibold text-base mb-1">Hidden Root Gaps</h3>
              <p className="text-xs text-[var(--color-ink-soft)] leading-relaxed">
                Students fail quadratic equations not because quadratics are hard, but because they have unaddressed gaps in 7th-grade linear variables.
              </p>
            </Card>

            <Card className="p-5 border-indigo-200 bg-indigo-50/40">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3">
                <Brain size={20} />
              </div>
              <h3 className="font-display font-semibold text-base mb-1">Lack of Socratic Guidance</h3>
              <p className="text-xs text-[var(--color-ink-soft)] leading-relaxed">
                Standard answer keys give direct solutions without teaching students how to think through conceptual steps.
              </p>
            </Card>

            <Card className="p-5 border-emerald-200 bg-emerald-50/40">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="font-display font-semibold text-base mb-1">The LearnFlow Solution</h3>
              <p className="text-xs text-[var(--color-ink-soft)] leading-relaxed">
                Diagnose level in 5 questions, deliver 10-minute micro-lessons, and resolve doubts with root-concept AI.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-10 scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">Core Platform Pillars</h2>
          <p className="text-sm text-[var(--color-ink-soft)]">Everything required for student mastery and teacher oversight.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <Card key={f.title} hover className="p-5">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center mb-3">
                <f.icon size={18} className="text-white" />
              </div>
              <h3 className="font-display font-semibold text-base mb-1">{f.title}</h3>
              <p className="text-xs text-[var(--color-ink-soft)] leading-relaxed">{f.text}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how" className="bg-white border-y border-[var(--color-line)] py-10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">How It Works</h2>
            <p className="text-sm text-[var(--color-ink-soft)]">Four seamless steps from diagnostic to concept mastery.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="p-4 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-line)]">
                <span className="font-mono-num text-3xl font-bold text-indigo-300 block mb-1">{s.n}</span>
                <h3 className="font-display font-semibold text-base mb-1">{s.title}</h3>
                <p className="text-xs text-[var(--color-ink-soft)]">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="stories" className="max-w-7xl mx-auto px-6 py-10 scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">Approved by Teachers & Students</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="p-5">
              <div className="flex gap-1 mb-2 text-[var(--color-amber)]">
                {Array.from({ length: 5 }).map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}
              </div>
              <p className="text-xs sm:text-sm text-[var(--color-ink-soft)] mb-4 italic">"{t.quote}"</p>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-[var(--color-muted)]">{t.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 pb-12">
        <div className="rounded-3xl gradient-primary p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3 relative z-10">Transform EdTech Learning Today</h2>
          <p className="text-white/80 text-sm max-w-xl mx-auto mb-6 relative z-10">
            Start your 5-question diagnostic quiz or launch the Teacher Pulse Dashboard now.
          </p>
          <div className="flex justify-center gap-3 relative z-10">
            <Button size="lg" variant="secondary" onClick={() => navigate('/login')}>
              Get Started Free
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
