import { useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell } from 'recharts'
import {
  Users, TrendingUp, AlertTriangle, CalendarCheck, Trophy, HandHelping, FileCheck2, Clock, CheckCircle2, AlertCircle, MessageSquare
} from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import Modal from '../components/Modal'
import ProgressBar from '../components/ProgressBar'
import {
  classOverview, classPerformance, classStudentList,
} from '../data/mockData'
import { teacherDataBySubject } from '../data/subjectContent'
import { useToast } from '../components/Toast'
import { useAuth } from '../context/AuthContext'

export default function TeacherDashboard() {
  const [selectedStudentHelp, setSelectedStudentHelp] = useState(null)
  const { showToast } = useToast()
  const { user } = useAuth()

  const subject = user.subject || 'Mathematics'
  const teacherData = teacherDataBySubject[subject] || teacherDataBySubject.Mathematics
  const { weakTopics, commonErrorPatterns, studentsNeedingHelp, recentSubmissions } = teacherData

  const teacherLabel = `${subject} Teacher`
  const gradeLabel = user.grade || 'Grade 10'

  const leaderboard = [...classStudentList].sort((a, b) => b.avgScore - a.avgScore).slice(0, 5)

  const overviewCards = [
    { label: 'Total Students', value: classOverview.totalStudents, icon: Users, color: '#4f5dff' },
    { label: 'Average Score', value: `${classOverview.averageScore}%`, icon: TrendingUp, color: '#22c55e' },
    { label: 'Completion Rate', value: `${classOverview.completionRate}%`, icon: CheckCircle2, color: '#8b5cf6' },
    { label: 'Avg Time Spent', value: `${classOverview.avgTimeSpentMinutes}m/day`, icon: Clock, color: '#f5a524' },
  ]

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold">Teacher Command Center</h1>
          <p className="text-[var(--color-muted)] text-sm mt-0.5">
            {gradeLabel}-B · {teacherLabel} · 42 Enrolled Students · NCERT Aligned
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
            ● Live Sync Active
          </span>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {overviewCards.map((c, i) => (
          <Card key={c.label} className="p-5" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider">{c.label}</span>
              <c.icon size={18} style={{ color: c.color }} />
            </div>
            <p className="font-display font-bold text-3xl font-mono-num">{c.value}</p>
          </Card>
        ))}
      </div>

      {/* Row 2: Student Level Distribution & Performance Trend */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Student Level Distribution (Foundational, Grade-Level, Advanced) */}
        <Card className="p-5 flex flex-col justify-between">
          <div>
            <h2 className="font-display font-semibold text-lg mb-1">Student Level Breakdown</h2>
            <p className="text-xs text-[var(--color-muted)] mb-4">Class placement via 5-Q Diagnostic</p>

            <div className="flex items-center justify-center h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={classOverview.levelDistribution}
                    dataKey="count"
                    nameKey="level"
                    cx="50%"
                    cy="50%"
                    outerRadius={65}
                    innerRadius={40}
                  >
                    {classOverview.levelDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-[var(--color-line)]">
            {classOverview.levelDistribution.map((l) => (
              <div key={l.level} className="flex items-center justify-between text-xs font-semibold">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: l.color }} />
                  {l.level}
                </span>
                <span className="font-mono-num">{l.count} Students ({l.percentage}%)</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Performance Trend Chart */}
        <Card className="lg:col-span-2 p-5">
          <h2 className="font-display font-semibold text-lg mb-1">Class Weekly Performance Trend</h2>
          <p className="text-xs text-[var(--color-muted)] mb-4">Average test & micro-lesson score trajectory · {subject}</p>

          <ResponsiveContainer width="100%" height={230}>
            <BarChart data={classPerformance}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e6e8f5" />
              <XAxis dataKey="week" tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} width={30} />
              <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e6e8f5', fontSize: 13 }} />
              <Bar dataKey="avg" fill="#4f5dff" radius={[6, 6, 0, 0]} name="Avg Score %" />
            </BarChart>
          </ResponsiveContainer>

          <div className="flex flex-wrap gap-2 mt-3">
            <span className="text-xs font-semibold text-slate-600">Weak Topics in {subject}:</span>
            {weakTopics.map((t) => (
              <span key={t} className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100">
                ⚠ {t}
              </span>
            ))}
          </div>
        </Card>
      </div>

      {/* Row 3: Common Error Patterns & Students Needing Help */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Common Error Patterns */}
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle size={18} className="text-amber-600" />
            <h2 className="font-display font-semibold text-lg">Common Error Patterns · {subject}</h2>
          </div>
          <div className="flex flex-col gap-3">
            {commonErrorPatterns.map((err) => (
              <div key={err.id} className="p-3.5 rounded-2xl bg-amber-50/50 border border-amber-100 flex flex-col gap-1">
                <div className="flex items-center justify-between text-xs font-bold text-amber-900">
                  <span>{err.error}</span>
                  <span className="px-2 py-0.5 rounded-md bg-amber-200 text-amber-900 font-mono-num shrink-0 ml-2">
                    {err.affectedStudents} Students
                  </span>
                </div>
                <p className="text-xs text-amber-800 leading-snug">{err.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Students Needing Help */}
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <HandHelping size={18} className="text-rose-600" />
            <h2 className="font-display font-semibold text-lg">Students Needing Help</h2>
          </div>
          <div className="flex flex-col gap-3">
            {studentsNeedingHelp.map((s) => (
              <div key={s.id} className="flex items-center justify-between gap-3 p-3 rounded-2xl border border-[var(--color-line)] bg-white shadow-xs">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-rose-100 text-rose-700 font-bold text-xs flex items-center justify-center shrink-0">
                    {s.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold truncate">{s.name}</p>
                    <p className="text-xs text-[var(--color-muted)] truncate">Struggling with {s.topic}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-bold text-rose-600 font-mono-num">{s.score}%</span>
                  <Button size="sm" variant="secondary" onClick={() => setSelectedStudentHelp(s)}>
                    Intervene
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Row 4: Class Leaderboard, Recent Activity & All Students List */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Class Leaderboard */}
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <Trophy size={18} className="text-amber-500" />
            <h2 className="font-display font-semibold text-lg">Class Leaderboard</h2>
          </div>
          <div className="flex flex-col gap-3">
            {leaderboard.map((s, i) => (
              <div key={s.id} className="flex items-center gap-3 p-2.5 rounded-xl bg-[var(--color-bg)]">
                <span className="font-mono-num text-xs font-bold text-slate-500 w-4">{i + 1}</span>
                <div className="w-8 h-8 rounded-full gradient-primary text-white flex items-center justify-center text-xs font-bold shrink-0">
                  {s.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold truncate">{s.name}</p>
                  <p className="text-[11px] text-[var(--color-muted)]">{s.level}</p>
                </div>
                <span className="text-sm font-bold text-emerald-600 font-mono-num">{s.avgScore}%</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Activity / Submissions Feed */}
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <FileCheck2 size={18} className="text-indigo-500" />
            <h2 className="font-display font-semibold text-lg">Recent Activity</h2>
          </div>
          <div className="flex flex-col gap-3">
            {recentSubmissions.map((sub) => {
              const statusStyle = sub.status === 'Graded'
                ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                : sub.status === 'Needs review'
                  ? 'bg-rose-50 text-rose-700 border-rose-100'
                  : 'bg-amber-50 text-amber-700 border-amber-100'
              return (
                <div key={sub.id} className="flex items-center justify-between gap-3 p-3 rounded-2xl border border-[var(--color-line)] bg-white">
                  <div className="min-w-0">
                    <p className="text-sm font-bold truncate">{sub.student}</p>
                    <p className="text-xs text-[var(--color-muted)] truncate">{sub.assignment}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusStyle}`}>
                      {sub.status}
                    </span>
                    <span className="text-xs font-mono-num font-semibold text-slate-600">{sub.score}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </Card>

        {/* Full Class Roster */}
        <Card className="p-5">
          <h2 className="font-display font-semibold text-lg mb-3">All Enrolled Students ({classStudentList.length})</h2>
          <div className="overflow-x-auto max-h-[19rem] overflow-y-auto">
            <table className="w-full text-xs sm:text-sm">
              <thead className="sticky top-0 bg-white">
                <tr className="text-left text-xs text-[var(--color-muted)] border-b border-[var(--color-line)]">
                  <th className="py-2 pr-3 font-semibold">Student</th>
                  <th className="py-2 pr-3 font-semibold">Level</th>
                  <th className="py-2 pr-3 font-semibold">Score</th>
                </tr>
              </thead>
              <tbody>
                {classStudentList.map((s) => (
                  <tr key={s.id} className="border-b border-[var(--color-line)] last:border-0 hover:bg-[var(--color-bg)]">
                    <td className="py-2.5 pr-3 font-semibold text-slate-900">{s.name}</td>
                    <td className="py-2.5 pr-3">
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                        s.level === 'Advanced' ? 'bg-emerald-50 text-emerald-700' : s.level === 'Grade-Level' ? 'bg-indigo-50 text-indigo-700' : 'bg-amber-50 text-amber-700'
                      }`}>
                        {s.level}
                      </span>
                    </td>
                    <td className="py-2.5 pr-3">
                      <div className="flex items-center gap-2">
                        <ProgressBar value={s.avgScore} className="w-14" />
                        <span className="font-mono-num font-semibold text-xs">{s.avgScore}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Intervention Modal */}
      {selectedStudentHelp && (
        <Modal open={Boolean(selectedStudentHelp)} onClose={() => setSelectedStudentHelp(null)} title={`Intervene for ${selectedStudentHelp.name}`}>
          <div className="flex flex-col gap-4 py-1 text-xs sm:text-sm">
            <p className="text-[var(--color-ink-soft)]">
              Assign target 10-minute micro-lesson or send customized hint via LearnFlow AI Tutor.
            </p>

            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200">
              <span className="font-bold text-rose-900 block mb-1">Struggling Topic: {selectedStudentHelp.topic}</span>
              <span className="text-xs text-rose-800">Current Score: {selectedStudentHelp.score}% · Level: {selectedStudentHelp.level} · Subject: {subject}</span>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <Button size="lg" className="w-full" onClick={() => { setSelectedStudentHelp(null); showToast(`Assigned Foundational Micro-Lesson to ${selectedStudentHelp.name}`, 'success') }}>
                <CheckCircle2 size={16} /> Assign Foundational Booster Lesson
              </Button>
              <Button variant="secondary" size="lg" className="w-full" onClick={() => { setSelectedStudentHelp(null); showToast(`Socratic AI Hint sent to ${selectedStudentHelp.name}`, 'info') }}>
                <MessageSquare size={16} /> Send Socratic AI Guided Hint
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
