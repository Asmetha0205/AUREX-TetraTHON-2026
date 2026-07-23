# AUREX – TetraTHON 2026

## 📚 EdTech Track

### Problem Statement

**ET: Adaptive Microlearning Engine & AI Doubt-Resolution Tutor for Mixed-Ability Classrooms**

## Team

**AUREX**

## Overview

This project is being developed as part of TetraTHON 2026. Our solution aims to provide an AI-powered adaptive microlearning platform that personalizes learning for students of different ability levels while offering an intelligent AI tutor for instant doubt resolution.

## Tech Stack

- React + Vite
- Tailwind CSS
- Flask
- Firebase
- # Gemini API

# LearnFlow AI — Team AUREX

Adaptive Microlearning Engine & AI Doubt-Resolution Tutor for Mixed-Ability Classrooms.
Built for **TetraTHON 2026 — EdTech Track**.

This is a **frontend-only prototype**: everything runs on realistic mock data in
`src/data/mockData.js`. There is no backend and no Firebase — nothing to configure.

## Tech stack

- React 19 + Vite
- Tailwind CSS v4
- React Router v6
- Framer Motion (page transitions, hover/tap micro-interactions, typing indicator)
- Recharts (progress & performance charts)
- lucide-react (icons)

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build a production bundle:

```bash
npm run build
npm run preview
```

## Walkthrough / navigation flow

```
Landing (/) -> Login (/login) -> Diagnostic Quiz (/quiz) -> Student Dashboard (/dashboard)
   -> Learning Path (/path) -> Lesson (/lesson/:id) -> AI Tutor (/tutor) -> Profile (/profile)

Teacher Dashboard (/teacher) - reachable from Login by choosing the "Teacher" tab
```

On the login screen, any email/password combination works, and the tab you pick
(Student vs Teacher) decides where you land - student flows go into the diagnostic
quiz first, teacher flows go straight to the class overview.

## Project structure

```
src/
  components/   Reusable UI: Button, Card, Modal, Toast, ProgressBar, Timeline,
                 Skeleton, sidebars, mobile nav, page transition wrapper
  layouts/       StudentLayout and TeacherLayout (sidebar + routed content)
  pages/         One file per screen (Landing, Login, DiagnosticQuiz,
                 StudentDashboard, LearningPath, Lesson, AiTutor,
                 TeacherDashboard, StudentProfile)
  data/          mockData.js - every student, lesson, quiz, chart series and
                 teacher-side stat used across the app
  index.css      Design tokens (color/type scale) via Tailwind v4 @theme
```

## Notes for judges

- All data is deterministic mock data - refreshing the app resets any in-session
  state (quiz answers, chat messages, flashcard flips, submitted forms).
- The AI Tutor's replies are randomly selected from a small pool of canned
  responses to simulate a live conversation; there is no real model call.
- Diagnostic quiz scoring maps % correct to Beginner / Intermediate / Advanced,
  and that level is also reflected as the default in the Learning Path and
  Student Dashboard.
