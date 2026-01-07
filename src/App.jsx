import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import WhyChooseUs from './components/sections/WhyChooseUs';
import DiscoverSection from './components/sections/DiscoverSection';
import ServicesSection from './components/sections/ServicesSection';
import CaringSection from './components/sections/CaringSection';
import SelfCareQuote from './components/sections/SelfCareQuote';
import TestimonialsSection from './components/sections/TestimonialsSection';
import PricingSection from './components/sections/PricingSection';
import FAQSection from './components/sections/FAQSection';
import NewsletterSection from './components/sections/NewsletterSection';
import ContactSection from './components/sections/ContactSection';
import LoginPage from './components/dashboard/LoginPage'
import SignupPage from './components/dashboard/SignupPage'
import Dashboard from './components/dashboard/Dashboard'
import PendingApproval from './components/dashboard/PendingApproval'
import { clearAuth, getStoredAuth } from './services/api'


export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

function AppContent() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  const handleLogin = (userData, token) => {
    setUser(userData)
    setToken(token)
    if (userData.role === 'therapist' && userData.status === 'pending') navigate('/pending')
    else navigate('/dashboard')
  }

  const handleSignup = (userData, token) => {
    setUser(userData)
    setToken(token)
    if (userData.role === 'therapist') navigate('/pending')
    else navigate('/dashboard')
  }

  const handleLogout = () => {
    clearAuth()
    setUser(null)
    setToken(null)
    navigate('/login')
  }

  // Rehydrate auth from storage on mount so a logged-in user stays logged in across reloads
  useEffect(() => {
    const { token: storedToken, user: storedUser } = getStoredAuth()
    if (storedUser) {
      setUser(storedUser)
      setToken(storedToken)
      if (storedUser.role === 'therapist' && storedUser.status === 'pending') navigate('/pending')
      else navigate('/dashboard')
    }
  }, [navigate])

  return (
    <>
      <Routes>
        <Route path="/" element={(
          <div className="min-h-screen bg-white">
            <Header onSwitchToLogin={() => navigate('/login')} />
            <HeroSection onSwitchToLogin={() => navigate('/login')} />
            <WhyChooseUs />
            <DiscoverSection />
            <ServicesSection />
            <CaringSection />
            <SelfCareQuote />
            <TestimonialsSection />
            <PricingSection />
            <FAQSection />
            <NewsletterSection />
            <ContactSection />
            <Footer />
          </div>
        )} />

        <Route path="/login" element={<LoginPage onLogin={handleLogin} onSwitchToSignup={() => navigate('/signup')} />} />
        <Route path="/signup" element={<SignupPage onSignup={handleSignup} onSwitchToLogin={() => navigate('/login')} />} />
        <Route path="/pending" element={<PendingApproval onBackToLogin={() => navigate('/login')} />} />
        <Route path="/dashboard" element={user ? <Dashboard user={user} token={token} onLogout={handleLogout} /> : <Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Analytics />
    </>
  )
}

