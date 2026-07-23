import { Routes, Route } from 'react-router-dom'
import { ToastProvider } from './components/Toast'
import Landing from './pages/Landing'
import Login from './pages/Login'
import DiagnosticQuiz from './pages/DiagnosticQuiz'
import StudentDashboard from './pages/StudentDashboard'
import LearningPath from './pages/LearningPath'
import ConceptGraph from './pages/ConceptGraph'
import Lesson from './pages/Lesson'
import AiTutor from './pages/AiTutor'
import StudentProfile from './pages/StudentProfile'
import TeacherDashboard from './pages/TeacherDashboard'
import StudentLayout from './layouts/StudentLayout'
import TeacherLayout from './layouts/TeacherLayout'

export default function App() {
  return (
    <ToastProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<DiagnosticQuiz />} />

        <Route element={<StudentLayout />}>
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/path" element={<LearningPath />} />
          <Route path="/concept-graph" element={<ConceptGraph />} />
          <Route path="/lesson/:id" element={<Lesson />} />
          <Route path="/tutor" element={<AiTutor />} />
          <Route path="/profile" element={<StudentProfile />} />
        </Route>

        <Route element={<TeacherLayout />}>
          <Route path="/teacher" element={<TeacherDashboard />} />
        </Route>
      </Routes>
    </ToastProvider>
  )
}
