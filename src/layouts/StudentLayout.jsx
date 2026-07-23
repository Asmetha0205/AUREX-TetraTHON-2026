import { Outlet } from 'react-router-dom'
import StudentSidebar from '../components/StudentSidebar'
import MobileTopbar from '../components/MobileTopbar'
import OfflineBanner from '../components/OfflineBanner'
import { LayoutDashboard, Route, Network, MessageCircleQuestion, User } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { useAuth } from '../context/AuthContext'

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/path', label: 'Learning Path', icon: Route },
  { to: '/concept-graph', label: 'Concept Graph', icon: Network },
  { to: '/tutor', label: 'AI Tutor', icon: MessageCircleQuestion },
  { to: '/profile', label: 'Profile', icon: User },
]

export default function StudentLayout() {
  const { user } = useAuth()
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg)]">
      {/* Global Offline Mode & Bandwidth Banner */}
      <OfflineBanner />

      <div className="flex flex-1 min-w-0">
        <StudentSidebar />
        <div className="flex-1 min-w-0">
          <MobileTopbar links={links} name={user.name} subtitle={`${user.grade} · ${user.subject}`} />
          <main className="p-4 md:p-8 max-w-6xl mx-auto">
            <PageTransition>
              <Outlet />
            </PageTransition>
          </main>
        </div>
      </div>
    </div>
  )
}
