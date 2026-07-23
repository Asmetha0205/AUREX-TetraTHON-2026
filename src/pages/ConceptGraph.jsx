import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Network, CheckCircle2, AlertCircle, Clock, BookOpen, ArrowRight, Play, Sparkles } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import Modal from '../components/Modal'
import ProgressBar from '../components/ProgressBar'
import { conceptGraphNodes } from '../data/mockData'
import { conceptGraphBySubject } from '../data/subjectContent'
import { useAuth } from '../context/AuthContext'

const colorMap = {
  green: {
    bg: 'bg-emerald-50 border-emerald-300 text-emerald-700',
    badge: 'bg-emerald-500 text-white',
    dot: '#10b981',
    label: 'Mastered'
  },
  orange: {
    bg: 'bg-amber-50 border-amber-300 text-amber-700',
    badge: 'bg-amber-500 text-white',
    dot: '#f59e0b',
    label: 'In Progress'
  },
  red: {
    bg: 'bg-rose-50 border-rose-300 text-rose-700',
    badge: 'bg-rose-500 text-white',
    dot: '#ef4444',
    label: 'Needs Work'
  }
}

export default function ConceptGraph() {
  const [selectedNode, setSelectedNode] = useState(null)
  const navigate = useNavigate()
  const { user } = useAuth()
  const subject = user.subject || 'Mathematics'
  const nodes = conceptGraphBySubject[subject] || conceptGraphNodes

  return (
    <div className="flex flex-col gap-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-primary)] mb-1">
            <Network size={16} /> Concept Knowledge Graph · {user.grade} {user.subject}
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-bold">Interactive Concept Map</h1>
          <p className="text-[var(--color-muted)] text-sm mt-1">
            Visualize how foundational concepts connect to advanced topics. Click any node to inspect mastery, NCERT chapters, and practice modules.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl border border-[var(--color-line)] shadow-sm shrink-0">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
            <span className="w-3 h-3 rounded-full bg-emerald-500" /> Mastered (≥80%)
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-700">
            <span className="w-3 h-3 rounded-full bg-amber-500" /> In Progress (50-79%)
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-700">
            <span className="w-3 h-3 rounded-full bg-rose-500" /> Needs Work (&lt;50%)
          </div>
        </div>
      </div>

      {/* Main Interactive Concept Tree Visualization */}
      <Card className="p-6 md:p-10 relative overflow-hidden bg-slate-950 text-white shadow-2xl border-slate-800">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-10">
          {nodes.map((node, index) => {
            const colors = colorMap[node.status]
            const isLast = index === nodes.length - 1

            return (
              <div key={node.id} className="flex flex-col items-center w-full relative">
                {/* Node Box */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => setSelectedNode(node)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full max-w-md p-5 rounded-2xl border-2 cursor-pointer transition-all shadow-lg backdrop-blur-md flex items-center justify-between gap-4 ${
                    node.status === 'green'
                      ? 'bg-slate-900/90 border-emerald-500/60 hover:border-emerald-400'
                      : node.status === 'orange'
                      ? 'bg-slate-900/90 border-amber-500/60 hover:border-amber-400'
                      : 'bg-slate-900/90 border-rose-500/60 hover:border-rose-400'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-display font-bold text-lg shrink-0 ${colors.badge}`}>
                      {node.masteryPct}%
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-slate-400">{node.ncert.grade} · {node.ncert.chapter}</span>
                      </div>
                      <h3 className="font-display font-bold text-base text-white truncate">{node.name}</h3>
                      <p className="text-xs text-slate-400 truncate">{node.summary}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${colors.badge}`}>
                      {colors.label}
                    </span>
                  </div>
                </motion.div>

                {/* Connecting Arrow */}
                {!isLast && (
                  <div className="flex flex-col items-center my-2">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-indigo-500 to-violet-500" />
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-violet-500 -mt-1" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Card>

      {/* Grid of Concept Summary Cards */}
      <div>
        <h2 className="font-display font-semibold text-xl mb-4">All Concept Nodes Breakdown</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {nodes.map((node) => {
            const colors = colorMap[node.status]
            return (
              <Card key={node.id} hover onClick={() => setSelectedNode(node)} className="p-5 flex flex-col justify-between cursor-pointer">
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${colors.badge}`}>
                      {colors.label}
                    </span>
                    <span className="text-xs font-bold font-mono-num text-[var(--color-primary)]">{node.masteryPct}% Mastery</span>
                  </div>
                  <h3 className="font-display font-bold text-base mb-1">{node.name}</h3>
                  <p className="text-xs text-[var(--color-muted)] mb-3">{node.ncert.chapter} · {node.ncert.topic}</p>
                  <ProgressBar value={node.masteryPct} className="mb-3" />
                </div>
                <div className="flex items-center justify-between text-xs text-[var(--color-muted)] pt-3 border-t border-[var(--color-line)]">
                  <span>Attempts: {node.attempts}</span>
                  <span className="flex items-center gap-1 text-[var(--color-primary)] font-medium">
                    Details <ArrowRight size={13} />
                  </span>
                </div>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Node Detail Modal / Drawer */}
      {selectedNode && (
        <Modal open={Boolean(selectedNode)} onClose={() => setSelectedNode(null)} title={selectedNode.name}>
          <div className="flex flex-col gap-5 py-1">
            {/* NCERT Tag */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-50 border border-indigo-100 text-xs font-semibold text-[var(--color-primary)]">
              <BookOpen size={14} /> NCERT Reference: {selectedNode.ncert.grade} · {selectedNode.ncert.chapter} ({selectedNode.ncert.topic})
            </div>

            <p className="text-sm text-[var(--color-ink-soft)]">{selectedNode.summary}</p>

            {/* Mastery Stats */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[var(--color-bg)] text-center">
              <div>
                <p className="text-xs text-[var(--color-muted)]">Mastery</p>
                <p className="font-display font-bold text-xl font-mono-num text-[var(--color-primary)]">{selectedNode.masteryPct}%</p>
              </div>
              <div>
                <p className="text-xs text-[var(--color-muted)]">Attempts</p>
                <p className="font-display font-bold text-xl font-mono-num">{selectedNode.attempts}</p>
              </div>
              <div>
                <p className="text-xs text-[var(--color-muted)]">Avg. Score</p>
                <p className="font-display font-bold text-xl font-mono-num">{selectedNode.avgScore}%</p>
              </div>
            </div>

            {/* Status explanation */}
            <div className={`p-4 rounded-2xl border flex items-start gap-3 ${colorMap[selectedNode.status].bg}`}>
              {selectedNode.status === 'green' ? <CheckCircle2 size={20} className="shrink-0 mt-0.5" /> : <AlertCircle size={20} className="shrink-0 mt-0.5" />}
              <div className="text-xs">
                <p className="font-bold">Status: {colorMap[selectedNode.status].label}</p>
                <p className="mt-0.5">
                  {selectedNode.status === 'green'
                    ? 'You have strong conceptual mastery. Practice periodically to maintain your streak.'
                    : selectedNode.status === 'orange'
                    ? 'You understand the basics, but practice is needed on complex multi-step variations.'
                    : 'Targeted practice recommended! Work through our 10-minute micro-lessons and AI doubt solver.'}
                </p>
              </div>
            </div>

            {/* Recommended Lesson */}
            {selectedNode.recommendedLesson && (
              <div className="p-4 rounded-2xl border border-indigo-100 bg-indigo-50/60 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-[var(--color-primary)] uppercase tracking-wider mb-0.5">Recommended Lesson</p>
                  <p className="text-sm font-semibold text-slate-800 truncate">{selectedNode.recommendedLesson.title}</p>
                </div>
                <Button
                  size="sm"
                  className="shrink-0"
                  onClick={() => { setSelectedNode(null); navigate(`/lesson/${selectedNode.recommendedLesson.id}`) }}
                >
                  <Play size={14} /> Start
                </Button>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button size="lg" className="flex-1" onClick={() => { setSelectedNode(null); navigate('/path') }}>
                <Play size={16} /> Practice Concept
              </Button>
              <Button variant="secondary" size="lg" className="flex-1" onClick={() => { setSelectedNode(null); navigate('/tutor') }}>
                <Sparkles size={16} /> Ask AI Tutor
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
