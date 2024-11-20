import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { MentorProfilePage } from './pages/MentorProfilePage'
import { BookingPage } from './pages/BookingPage'
import { ConfirmationPage } from './pages/ConfirmationPage'
import { Header } from './components/Header'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mentor/:id" element={<MentorProfilePage />} />
            <Route path="/booking/:id" element={<BookingPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}