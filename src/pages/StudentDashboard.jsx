import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Flame, Target, Clock, Sparkles, ArrowRight, BookOpen, MessageSquareQuote, PenSquare } from 'lucide-react'
import Card from '../components/Card'
import Button from '../components/Button'
import ProgressBar from '../components/ProgressBar'
import {
  currentStudent, weeklyActivity,
} from '../data/mockData'
import {
  recommendedLessonsBySubject,
  recentActivityBySubject,
  upcomingQuizBySubject,
  motivationalQuotesBySubject,
} from '../data/subjectContent'
import { useAuth } from '../context/AuthContext'

export default function StudentDashboard() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const subject = user.subject || 'Mathematics'

  const recommendedLessons = recommendedLessonsBySubject[subject] || recommendedLessonsBySubject.Mathematics
  const recentActivity = recentActivityBySubject[subject] || recentActivityBySubject.Mathematics
  const upcomingQuiz = upcomingQuizBySubject[subject] || upcomingQuizBySubject.Mathematics
  const quotes = motivationalQuotesBySubject[subject] || motivationalQuotesBySubject.Mathematics
  const quote = quotes[new Date().getDate() % quotes.length]

  const dailyPct = Math.round((currentStudent.dailyGoalDoneMinutes / currentStudent.dailyGoalMinutes) * 100)
  const xpPct = Math.round((currentStudent.xp / currentStudent.xpToNextLevel) * 100)

  return (
    <div className="flex flex-col gap-6">
      {/* Greeting */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold">Hey {user.name.split(' ')[0]}, ready to learn? 👋</h1>
          <p className="text-[var(--color-muted)] text-sm mt-1">{user.grade} · {subject} · Level: {user.level || currentStudent.level}</p>
        </div>
        <Button onClick={() => navigate('/path')}>
          Continue learning <ArrowRight size={16} />
        </Button>
      </div>

      {/* Stat cards */}
      <div className="grid sm:grid-cols-3 gap-4">
        <Card className="p-5" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-[var(--color-muted)]">Learning streak</span>
            <Flame size={18} className="text-[var(--color-amber)]" />
          </div>
          <p className="font-display font-bold text-3xl font-mono-num">{currentStudent.streak} days</p>
          <p className="text-xs text-[var(--color-success)] mt-1">Keep it up — don't break the chain!</p>
        </Card>
        <Card className="p-5" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-[var(--color-muted)]">XP Points</span>
            <Sparkles size={18} className="text-[var(--color-primary)]" />
          </div>
          <p className="font-display font-bold text-3xl font-mono-num">{currentStudent.xp.toLocaleString()}</p>
          <ProgressBar value={xpPct} className="mt-2" />
          <p className="text-xs text-[var(--color-muted)] mt-1">{currentStudent.xpToNextLevel - currentStudent.xp} XP to next level</p>
        </Card>
        <Card className="p-5" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-[var(--color-muted)]">Daily goal</span>
            <Target size={18} className="text-[var(--color-violet)]" />
          </div>
          <p className="font-display font-bold text-3xl font-mono-num">
            {currentStudent.dailyGoalDoneMinutes}<span className="text-base text-[var(--color-muted)]">/{currentStudent.dailyGoalMinutes} min</span>
          </p>
          <ProgressBar value={dailyPct} className="mt-2" color="bg-[var(--color-violet)]" />
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recommended lessons */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-semibold text-lg">Recommended for you</h2>
            <button onClick={() => navigate('/path')} className="text-sm font-medium text-[var(--color-primary)] cursor-pointer">See all</button>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {recommendedLessons.map((lesson, i) => (
              <Card
                key={lesson.id}
                hover
                className="p-4 cursor-pointer"
                onClick={() => navigate(`/lesson/${lesson.id}`)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <div
                  className="h-24 rounded-xl mb-3 flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${lesson.thumbnailFrom}, ${lesson.thumbnailTo})` }}
                >
                  <BookOpen size={28} className="text-white/90" />
                </div>
                <p className="text-xs text-[var(--color-muted)] mb-1">{lesson.subject} · {lesson.duration}</p>
                <h3 className="font-semibold text-sm mb-2">{lesson.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-bg)] text-[var(--color-ink-soft)] font-medium">{lesson.difficulty}</span>
                  <span className="text-xs font-semibold text-[var(--color-primary)]">{lesson.progress}%</span>
                </div>
                <ProgressBar value={lesson.progress} className="mt-2" />
              </Card>
            ))}
          </div>

          {/* Progress chart */}
          <Card className="p-5 mt-2">
            <h2 className="font-display font-semibold text-lg mb-4">This week's activity</h2>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={weeklyActivity}>
                <defs>
                  <linearGradient id="colorMin" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4f5dff" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="#4f5dff" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#6b7280' }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e6e8f5', fontSize: 13 }} />
                <Area type="monotone" dataKey="minutes" stroke="#4f5dff" strokeWidth={2.5} fill="url(#colorMin)" name="Minutes" />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Side column */}
        <div className="flex flex-col gap-6">
          <Card className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <PenSquare size={18} className="text-[var(--color-primary)]" />
              <h2 className="font-display font-semibold">Upcoming quiz</h2>
            </div>
            <p className="font-semibold text-sm mb-1">{upcomingQuiz.title}</p>
            <p className="text-xs text-[var(--color-muted)] mb-4">{upcomingQuiz.date} · {upcomingQuiz.questions} questions · {upcomingQuiz.duration}</p>
            <Button size="sm" variant="secondary" className="w-full">View details</Button>
          </Card>

          <Card className="p-5">
            <h2 className="font-display font-semibold mb-4">Recent activity</h2>
            <div className="flex flex-col gap-4">
              {recentActivity.map((a) => (
                <div key={a.id} className="flex gap-3">
                  <span className="w-2 h-2 rounded-full gradient-primary mt-1.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium leading-snug">{a.text}</p>
                    <p className="text-xs text-[var(--color-muted)]">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5 gradient-primary text-white">
            <MessageSquareQuote size={20} className="mb-3 opacity-90" />
            <p className="text-sm font-medium leading-relaxed">"{quote}"</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
