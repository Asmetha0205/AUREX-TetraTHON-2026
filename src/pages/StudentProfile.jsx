import { Flame, Sparkles, Zap, Trophy, Heart, Award, Download, Calendar, Clock, BookOpen, CheckCircle2, History, Network } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import ProgressBar from '../components/ProgressBar'
import {
  currentStudent, achievements, weeklyActivity, heatmapData,
} from '../data/mockData'
import {
  masteryTrackerBySubject,
  sessionHistoryBySubject,
  certificatesBySubject,
} from '../data/subjectContent'
import { useToast } from '../components/Toast'
import { useAuth } from '../context/AuthContext'

const iconMap = { Flame, Sparkles, Zap, Trophy, Heart }

export default function StudentProfile() {
  const { showToast } = useToast()
  const { user } = useAuth()
  const subject = user.subject || 'Mathematics'

  const masteryTrackerData = masteryTrackerBySubject[subject] || masteryTrackerBySubject.Mathematics
  const sessionHistoryData = sessionHistoryBySubject[subject] || sessionHistoryBySubject.Mathematics
  const certificates = certificatesBySubject[subject] || certificatesBySubject.Mathematics

  const xpPct = Math.round((currentStudent.xp / currentStudent.xpToNextLevel) * 100)

  return (
    <div className="flex flex-col gap-8">
      {/* Profile Header */}
      <Card className="p-6 md:p-8 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-[0.06]" />
        <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
          <div className="w-24 h-24 rounded-full gradient-primary text-white flex items-center justify-center text-3xl font-display font-bold shrink-0 shadow-lg">
            {user.avatar}
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
              <h1 className="font-display text-2xl font-bold">{user.name}</h1>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-[var(--color-primary)]">
                Level {currentStudent.levelNumber} Scholar
              </span>
            </div>
            <p className="text-[var(--color-muted)] text-xs sm:text-sm mb-3">
              {user.grade} · {user.subject} · Joined {currentStudent.joined}
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-indigo-50 text-[var(--color-primary)] border border-indigo-100">
                Assigned Level: {user.level || currentStudent.level}
              </span>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 border border-amber-100 flex items-center gap-1">
                <Flame size={14} /> {currentStudent.streak} Day Streak
              </span>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-violet-50 text-violet-700 border border-violet-100 font-mono-num">
                {currentStudent.xp.toLocaleString()} XP
              </span>
            </div>
          </div>
        </div>

        {/* Level XP Progress Bar */}
        <div className="relative mt-6 max-w-md">
          <div className="flex justify-between text-xs font-medium text-[var(--color-muted)] mb-1">
            <span>XP Progress to Level {currentStudent.levelNumber + 1}</span>
            <span className="font-mono-num font-bold text-slate-700">{currentStudent.xp} / {currentStudent.xpToNextLevel} XP ({xpPct}%)</span>
          </div>
          <ProgressBar value={xpPct} />
        </div>
      </Card>

      {/* LEARNING HEATMAP GRID (30-DAY / 52-WEEK ACTIVITY TILE MATRIX) */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">Consistency Tracker</span>
            <h2 className="font-display font-bold text-xl">Learning Activity Heatmap</h2>
          </div>
          <span className="text-xs text-[var(--color-muted)] font-medium">Last 28 Days</span>
        </div>

        <p className="text-xs text-[var(--color-muted)] mb-4">
          Daily completed micro-lessons, practice sets, and AI doubt resolutions.
        </p>

        {/* Heatmap Grid */}
        <div className="grid grid-cols-7 sm:grid-cols-14 gap-2">
          {heatmapData.map((d) => {
            let color = 'bg-slate-100 border-slate-200 text-slate-400'
            if (d.intensity === 1) color = 'bg-indigo-200 border-indigo-300 text-indigo-900'
            if (d.intensity === 2) color = 'bg-indigo-400 border-indigo-500 text-white'
            if (d.intensity === 3) color = 'bg-indigo-600 border-indigo-700 text-white'
            if (d.intensity === 4) color = 'bg-indigo-800 border-indigo-900 text-white'

            return (
              <div
                key={d.day}
                title={`Day ${d.day}: ${d.minutes} mins learned`}
                className={`h-8 rounded-lg border flex flex-col items-center justify-center text-[10px] font-bold transition-transform hover:scale-110 cursor-pointer ${color}`}
              >
                {d.minutes > 0 ? `${d.minutes}m` : ''}
              </div>
            )
          })}
        </div>

        <div className="flex items-center justify-end gap-2 text-[11px] text-[var(--color-muted)] mt-4">
          <span>Less</span>
          <span className="w-3 h-3 rounded bg-slate-100 border border-slate-200" />
          <span className="w-3 h-3 rounded bg-indigo-200" />
          <span className="w-3 h-3 rounded bg-indigo-400" />
          <span className="w-3 h-3 rounded bg-indigo-600" />
          <span className="w-3 h-3 rounded bg-indigo-800" />
          <span>More</span>
        </div>
      </Card>

      {/* MASTERY TRACKER CARDS */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">NCERT Concept Breakdown</span>
            <h2 className="font-display font-bold text-xl">Mastery Tracker</h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {masteryTrackerData.map((item, idx) => (
            <Card key={idx} className="p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-[var(--color-muted)] font-semibold">{item.ncert}</span>
                  <span className={`font-bold px-2 py-0.5 rounded-full text-[10px] ${
                    item.status === 'Mastered' ? 'bg-emerald-50 text-emerald-700' : item.status === 'In Progress' ? 'bg-amber-50 text-amber-700' : 'bg-rose-50 text-rose-700'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base mb-2">{item.concept}</h3>
                <ProgressBar value={item.masteryPct} className="mb-3" />
              </div>

              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[var(--color-line)] text-center text-xs">
                <div>
                  <span className="text-[var(--color-muted)] block text-[10px]">Mastery</span>
                  <span className="font-bold font-mono-num text-[var(--color-primary)]">{item.masteryPct}%</span>
                </div>
                <div>
                  <span className="text-[var(--color-muted)] block text-[10px]">Attempts</span>
                  <span className="font-bold font-mono-num">{item.attempts}</span>
                </div>
                <div>
                  <span className="text-[var(--color-muted)] block text-[10px]">Avg Score</span>
                  <span className="font-bold font-mono-num">{item.avgScore}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* SESSION HISTORY TABLE */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <History size={20} className="text-[var(--color-primary)]" />
          <h2 className="font-display font-bold text-xl">Session History</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="text-left text-xs text-[var(--color-muted)] border-b border-[var(--color-line)]">
                <th className="py-2.5 pr-3 font-semibold">Session Type</th>
                <th className="py-2.5 pr-3 font-semibold">Title / Activity</th>
                <th className="py-2.5 pr-3 font-semibold">Date & Time</th>
                <th className="py-2.5 pr-3 font-semibold">Duration</th>
                <th className="py-2.5 pr-3 font-semibold">Result / Progress</th>
              </tr>
            </thead>
            <tbody>
              {sessionHistoryData.map((s) => (
                <tr key={s.id} className="border-b border-[var(--color-line)] last:border-0 hover:bg-[var(--color-bg)]">
                  <td className="py-3 pr-3 font-bold text-slate-900">
                    <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-[var(--color-primary)] text-xs">
                      {s.type}
                    </span>
                  </td>
                  <td className="py-3 pr-3 font-semibold text-slate-800">{s.title}</td>
                  <td className="py-3 pr-3 text-[var(--color-muted)] font-medium text-xs">{s.date}</td>
                  <td className="py-3 pr-3 font-mono-num text-xs">{s.duration}</td>
                  <td className="py-3 pr-3 font-bold text-emerald-600 font-mono-num text-xs">
                    {s.score || s.levelAssigned || s.progress}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Achievements & Certificates Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Achievements */}
        <Card className="lg:col-span-2 p-6">
          <h2 className="font-display font-bold text-xl mb-4">Achievements & Badges</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {achievements.map((a) => {
              const Icon = iconMap[a.icon] ?? Award
              return (
                <div
                  key={a.id}
                  className={`flex flex-col items-center gap-2 rounded-2xl border p-4 text-center ${
                    a.earned ? 'border-indigo-200 bg-indigo-50/60 shadow-xs' : 'border-[var(--color-line)] opacity-50'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${a.earned ? 'gradient-primary text-white shadow-md' : 'bg-[var(--color-line)] text-[var(--color-muted)]'}`}>
                    <Icon size={22} />
                  </div>
                  <p className="text-xs font-bold leading-tight mt-1">{a.title}</p>
                  <p className="text-[10px] text-[var(--color-muted)] leading-snug">{a.description}</p>
                </div>
              )
            })}
          </div>
        </Card>

        {/* Certificates */}
        <Card className="p-6">
          <h2 className="font-display font-bold text-xl mb-4">NCERT Certificates</h2>
          <div className="flex flex-col gap-3">
            {certificates.map((c) => (
              <div key={c.id} className="flex items-center gap-3 rounded-2xl border border-[var(--color-line)] p-3.5 bg-white shadow-xs">
                <div className="w-10 h-10 rounded-xl gradient-primary text-white flex items-center justify-center shrink-0">
                  <Award size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold truncate text-slate-900">{c.title}</p>
                  <p className="text-[11px] text-[var(--color-muted)]">{c.date} · {c.ncert}</p>
                </div>
                <button
                  onClick={() => showToast(`Downloading ${c.title} certificate PDF (demo)`, 'success')}
                  className="p-2 rounded-lg text-[var(--color-primary)] hover:bg-indigo-50 cursor-pointer"
                  title="Download Certificate"
                >
                  <Download size={16} />
                </button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
