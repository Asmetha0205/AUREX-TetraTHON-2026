import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Send, Sparkles, Plus, MessageSquare, Image, Camera, History, HelpCircle,
  BookOpen, CheckCircle2, ArrowRight, ToggleLeft, ToggleRight, X, RefreshCw
} from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import Modal from '../components/Modal'
import { sampleHandwrittenImages } from '../data/mockData'
import { doubtHistoryBySubject, aiSuggestionChipsBySubject } from '../data/subjectContent'
import { useToast } from '../components/Toast'
import { useAuth } from '../context/AuthContext'

export default function AiTutor() {
  const { user } = useAuth()
  const subject = user.subject || 'Mathematics'
  const doubtHistoryData = doubtHistoryBySubject[subject] || doubtHistoryBySubject.Mathematics
  const aiSuggestionChips = aiSuggestionChipsBySubject[subject] || aiSuggestionChipsBySubject.Mathematics

  const [history, setHistory] = useState(doubtHistoryData)
  const [activeDoubtId, setActiveDoubtId] = useState(doubtHistoryData[0].id)
  const [explanationMode, setExplanationMode] = useState('Socratic') // 'Socratic' | 'Direct'
  const [inputText, setInputText] = useState('')
  const [typing, setTyping] = useState(false)
  const [handwrittenModalOpen, setHandwrittenModalOpen] = useState(false)
  const [cameraModalOpen, setCameraModalOpen] = useState(false)
  const [capturedImage, setCapturedImage] = useState(null)

  const scrollRef = useRef(null)
  const { showToast } = useToast()

  const currentDoubt = history.find((d) => d.id === activeDoubtId) || history[0]

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [currentDoubt, explanationMode, typing])

  const handleSendQuery = (text, imagePayload = null) => {
    const content = text || inputText
    if (!content.trim() && !imagePayload) return

    // Subject-aware root concept labels
    const subjectRootConcepts = {
      Mathematics: 'Quadratic Equations & Roots',
      Science: 'Photosynthesis & Cell Biology',
      Physics: "Newton's Laws & Motion",
      Chemistry: 'Acids, Bases & Chemical Reactions',
      Biology: 'Cell Division & Genetics',
      English: 'Grammar & Writing Skills',
    }
    const subjectRelatedConcepts = {
      Mathematics: ['Discriminant Formula', 'Factoring Method', 'Completing the Square'],
      Science: ['Chlorophyll Absorption', 'Cell Membrane', 'Osmosis'],
      Physics: ['Force & Acceleration', 'Inertia', 'Momentum'],
      Chemistry: ['pH Scale', 'Electron Transfer', 'Redox Reactions'],
      Biology: ['DNA Replication', 'Chromosome Segregation', 'Gamete Formation'],
      English: ['Subject-Verb Agreement', 'Active Voice', 'Essay Structure'],
    }
    const rootConcept = subjectRootConcepts[subject] || 'Core Concept'
    const relatedConcepts = subjectRelatedConcepts[subject] || ['Related Topic 1', 'Related Topic 2']

    const newId = `dh_${Date.now()}`
    const newDoubt = {
      id: newId,
      title: imagePayload ? `[Image Doubt] ${content || 'Handwritten Problem'}` : content,
      timestamp: 'Just now',
      rootConcept,
      relatedConcepts,
      mode: explanationMode,
      ncert: { grade: 'Class 10', chapter: 'NCERT Aligned', topic: subject },
      solutionDirect: `Direct Solution for "${content || 'Uploaded Problem'}": Based on ${subject} curriculum — let's break this down step by step using NCERT-aligned methodology.`,
      solutionSocratic: `Socratic Guidance for "${content || 'Uploaded Problem'}": What foundational ${subject} concept does this question test? Can you identify the key principle before we proceed to the solution?`
    }

    setHistory((prev) => [newDoubt, ...prev])
    setActiveDoubtId(newId)
    setInputText('')
    setCapturedImage(null)
    setTyping(true)
    showToast('AI analyzing Root Concept Gap...', 'info')

    setTimeout(() => {
      setTyping(false)
      showToast('Doubt resolved with NCERT curriculum alignment!', 'success')
    }, 1200)
  }

  const handleSelectHandwritten = (img) => {
    setCapturedImage(img.url)
    setHandwrittenModalOpen(false)
    handleSendQuery(`Parsed handwritten math problem: "${img.parsedText}"`, img.url)
  }

  const handleSimulateCameraCapture = () => {
    const cameraSample = sampleHandwrittenImages[1]
    setCapturedImage(cameraSample.url)
    setCameraModalOpen(false)
    handleSendQuery(`Camera Snapshot: "${cameraSample.parsedText}"`, cameraSample.url)
  }

  return (
    <div className="flex h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)] -m-4 md:-m-8 rounded-none overflow-hidden bg-[var(--color-bg)]">
      {/* QUESTION HISTORY SIDEBAR */}
      <aside className="hidden lg:flex flex-col w-80 border-r border-[var(--color-line)] bg-white p-4 shrink-0">
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="flex items-center gap-2 font-display font-bold text-sm">
            <History size={16} className="text-[var(--color-primary)]" /> Question History
          </span>
          <span className="text-[11px] font-semibold text-[var(--color-muted)] font-mono-num">{history.length} saved</span>
        </div>

        <button
          onClick={() => {
            setInputText('')
            setActiveDoubtId(history[0].id)
          }}
          className="flex items-center gap-2 justify-center rounded-xl gradient-primary text-white text-xs font-semibold py-2.5 mb-4 cursor-pointer shadow-sm hover:opacity-95"
        >
          <Plus size={16} /> New Doubt Query
        </button>

        <div className="flex flex-col gap-2 overflow-y-auto flex-1 pr-1">
          {history.map((item) => {
            const isActive = item.id === activeDoubtId
            return (
              <button
                key={item.id}
                onClick={() => setActiveDoubtId(item.id)}
                className={`text-left p-3 rounded-2xl flex flex-col gap-1 transition-all cursor-pointer border ${
                  isActive
                    ? 'border-[var(--color-primary)] bg-indigo-50/70 text-[var(--color-primary)] shadow-xs'
                    : 'border-[var(--color-line)] hover:bg-[var(--color-bg)] text-[var(--color-ink-soft)]'
                }`}
              >
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-[var(--color-primary)] truncate max-w-[170px]">{item.rootConcept}</span>
                  <span className="text-[var(--color-muted)] text-[10px]">{item.timestamp}</span>
                </div>
                <p className="text-xs font-medium truncate">{item.title}</p>
                <span className="text-[10px] font-semibold text-[var(--color-muted)]">NCERT {item.ncert.chapter}</span>
              </button>
            )
          })}
        </div>
      </aside>

      {/* CHAT & RESOLUTION AREA */}
      <div className="flex-1 flex flex-col min-w-0 bg-[var(--color-bg)]">
        {/* Top Control Bar */}
        <div className="glass px-5 py-3 flex items-center justify-between border-b border-[var(--color-line)] z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center text-white shadow-sm">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="font-display font-bold text-sm leading-tight">LearnFlow Multimodal AI Tutor</p>
              <p className="text-[11px] text-emerald-600 font-semibold leading-tight">● Active · NCERT Aligned</p>
            </div>
          </div>

          {/* Explanation Mode Toggle: Socratic vs Direct */}
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-2xl border border-[var(--color-line)] shadow-xs">
            <span className="text-xs font-semibold text-[var(--color-muted)]">Mode:</span>
            <button
              onClick={() => {
                const next = explanationMode === 'Socratic' ? 'Direct' : 'Socratic'
                setExplanationMode(next)
                showToast(`Switched to ${next} Explanation Mode`, 'info')
              }}
              className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] cursor-pointer"
            >
              {explanationMode === 'Socratic' ? (
                <>
                  <span className="px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-700">🧠 Socratic</span>
                  <span className="text-slate-400 font-normal">Direct</span>
                </>
              ) : (
                <>
                  <span className="text-slate-400 font-normal">Socratic</span>
                  <span className="px-2 py-0.5 rounded-md bg-violet-100 text-violet-700">⚡ Direct</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Scrollable Conversation viewport */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 md:px-8 py-6 flex flex-col gap-6">
          {/* ROOT CONCEPT GAP IDENTIFIER CARD (CRITICAL REQUIREMENT) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-indigo-500/10 to-violet-500/10 border-2 border-indigo-200 shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-900 uppercase tracking-wider mb-2">
              <HelpCircle size={16} className="text-[var(--color-primary)]" />
              Root Conceptual Weakness Identified Before Answering
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-white border border-indigo-100 shadow-xs">
                <span className="text-[11px] font-bold text-[var(--color-muted)] uppercase block mb-0.5">Root Concept Gap</span>
                <span className="font-display font-bold text-base text-[var(--color-primary)] block">
                  {currentDoubt.rootConcept}
                </span>
                <span className="text-[11px] text-[var(--color-muted)] font-medium">NCERT {currentDoubt.ncert.chapter} ({currentDoubt.ncert.topic})</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-indigo-100 shadow-xs">
                <span className="text-[11px] font-bold text-[var(--color-muted)] uppercase block mb-1">Related Concepts</span>
                <div className="flex flex-wrap gap-1.5">
                  {currentDoubt.relatedConcepts.map((c, i) => (
                    <span key={i} className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-indigo-50 text-[var(--color-primary)]">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* User Doubt Message */}
          <div className="self-end max-w-[85%] md:max-w-[70%] p-4 rounded-2xl gradient-primary text-white shadow-md text-xs sm:text-sm leading-relaxed">
            {capturedImage && (
              <img src={capturedImage} alt="Uploaded math" className="w-full max-h-48 object-cover rounded-xl mb-2 border border-white/30" />
            )}
            <p className="font-semibold">{currentDoubt.title}</p>
          </div>

          {/* AI Response Box formatted with current mode (Socratic vs Direct) */}
          <div className="self-start max-w-[90%] md:max-w-[80%] p-5 rounded-2xl bg-white border border-[var(--color-line)] shadow-sm text-xs sm:text-sm leading-relaxed">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-[var(--color-line)]">
              <span className="flex items-center gap-1.5 font-bold text-[var(--color-primary)]">
                <Sparkles size={16} /> Mode Active: {explanationMode} Mode
              </span>
              <span className="text-[11px] font-semibold text-[var(--color-muted)]">
                {currentDoubt.ncert.grade} · {currentDoubt.ncert.chapter}
              </span>
            </div>

            <p className="text-slate-800 text-sm whitespace-pre-line leading-relaxed">
              {explanationMode === 'Socratic' ? currentDoubt.solutionSocratic : currentDoubt.solutionDirect}
            </p>

            <div className="mt-4 pt-3 border-t border-[var(--color-line)] flex items-center justify-between text-xs text-[var(--color-muted)]">
              <span>Was this explanation clear?</span>
              <div className="flex gap-2">
                <button onClick={() => showToast('Feedback recorded! Thank you.', 'success')} className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-bold hover:bg-emerald-100 cursor-pointer">
                  Yes, got it! 👍
                </button>
                <button onClick={() => setExplanationMode(explanationMode === 'Socratic' ? 'Direct' : 'Socratic')} className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 font-bold hover:bg-indigo-100 cursor-pointer">
                  Switch to {explanationMode === 'Socratic' ? 'Direct' : 'Socratic'} Mode 🔄
                </button>
              </div>
            </div>
          </div>

          {typing && (
            <div className="self-start bg-white border border-[var(--color-line)] rounded-2xl px-4 py-3 flex items-center gap-2 text-xs font-semibold text-[var(--color-primary)]">
              <RefreshCw size={14} className="animate-spin" /> Identifying root concept gap & formatting explanation...
            </div>
          )}
        </div>

        {/* Suggestion Chips */}
        <div className="px-4 md:px-8 pb-2 flex gap-2 flex-wrap">
          {aiSuggestionChips.map((chip) => (
            <button
              key={chip}
              onClick={() => handleSendQuery(chip)}
              className="text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-[var(--color-line)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors cursor-pointer"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Multimodal Input Controls (Text, Handwritten Upload, Camera UI) */}
        <div className="p-4 md:px-8 md:pb-6">
          <div className="flex items-center gap-2 bg-white rounded-2xl border border-[var(--color-line)] px-4 py-2.5 shadow-sm">
            {/* Handwritten Upload Button */}
            <button
              type="button"
              onClick={() => setHandwrittenModalOpen(true)}
              className="p-2 rounded-xl text-[var(--color-primary)] hover:bg-indigo-50 cursor-pointer transition-colors"
              title="Upload Handwritten Problem"
            >
              <Image size={18} />
            </button>

            {/* Camera Upload UI Button */}
            <button
              type="button"
              onClick={() => setCameraModalOpen(true)}
              className="p-2 rounded-xl text-violet-600 hover:bg-violet-50 cursor-pointer transition-colors"
              title="Camera Snap Photo UI"
            >
              <Camera size={18} />
            </button>

            <input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendQuery()}
              placeholder="Ask a doubt or select handwritten image / camera photo..."
              className="flex-1 outline-none text-xs sm:text-sm bg-transparent"
            />

            <button
              onClick={() => handleSendQuery()}
              className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center text-white shrink-0 cursor-pointer shadow-sm hover:opacity-95"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Handwritten Image Modal */}
      <Modal open={handwrittenModalOpen} onClose={() => setHandwrittenModalOpen(false)} title="Upload Handwritten Math Problem">
        <div className="flex flex-col gap-4 py-1">
          <p className="text-xs text-[var(--color-ink-soft)]">
            Select a sample handwritten math problem or drop your own image to parse equations into AI solver.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sampleHandwrittenImages.map((sample) => (
              <div
                key={sample.id}
                onClick={() => handleSelectHandwritten(sample)}
                className="p-3 rounded-2xl border border-[var(--color-line)] hover:border-[var(--color-primary)] bg-white cursor-pointer transition-all shadow-xs"
              >
                <img src={sample.url} alt={sample.label} className="w-full h-28 object-cover rounded-xl mb-2" />
                <p className="font-bold text-xs text-slate-800">{sample.label}</p>
                <p className="text-[11px] text-[var(--color-muted)] truncate">{sample.parsedText}</p>
              </div>
            ))}
          </div>
        </div>
      </Modal>

      {/* Camera Upload UI Modal */}
      <Modal open={cameraModalOpen} onClose={() => setCameraModalOpen(false)} title="Camera Live Capture UI">
        <div className="flex flex-col gap-4 py-1 items-center text-center">
          <div className="w-full aspect-video rounded-2xl bg-slate-950 border-2 border-slate-800 flex flex-col items-center justify-center text-white relative overflow-hidden">
            <div className="w-48 h-32 border-2 border-dashed border-indigo-400 rounded-xl flex items-center justify-center bg-indigo-500/10">
              <span className="text-xs font-semibold text-indigo-200">Align Math Problem Here</span>
            </div>
            <span className="text-[11px] text-slate-400 mt-2">Live Camera Viewport Active</span>
          </div>

          <Button size="lg" className="w-full" onClick={handleSimulateCameraCapture}>
            <Camera size={18} /> Snap Photo & Analyze Doubt
          </Button>
        </div>
      </Modal>
    </div>
  )
}
