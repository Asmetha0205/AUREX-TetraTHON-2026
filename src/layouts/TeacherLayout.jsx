import { Outlet } from 'react-router-dom'
import TeacherSidebar from '../components/TeacherSidebar'
import MobileTopbar from '../components/MobileTopbar'
import { LayoutDashboard } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { useAuth } from '../context/AuthContext'

const links = [{ to: '/teacher', label: 'Class Overview', icon: LayoutDashboard }]

export default function TeacherLayout() {
  const { user } = useAuth()
  return (
    <div className="flex min-h-screen bg-[var(--color-bg)]">
      <TeacherSidebar />
      <div className="flex-1 min-w-0">
        <MobileTopbar links={links} name={user.name} subtitle={user.subject} />
        <main className="p-4 md:p-8 max-w-7xl mx-auto">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
      </div>
    </div>
  )
}
