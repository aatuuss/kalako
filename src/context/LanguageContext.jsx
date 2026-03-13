import React, { createContext, useContext, useMemo, useState } from 'react'

const LanguageContext = createContext(null)

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('id')

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'id' ? 'en' : 'id'))
  }

  const t = (idText, enText) => (language === 'id' ? idText : enText)

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage, t }),
    [language]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}
