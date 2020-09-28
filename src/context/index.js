import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

const initialState = {
  theme: 'light',
}

const ContextProvider = ({ children }) => {
  const [context, setContext] = useState(initialState)

  const updateContext = (state) => {
    setContext({ ...context, ...state })
  }

  return (
    <AppContext.Provider value={{ context, updateContext }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => useContext(AppContext)

export { ContextProvider, useAppContext }
