import React, { useReducer, useEffect } from 'react';
import styled from 'styled-components'
import Main from './scenes/main'
import AuthContext from './components/AuthContext'
import { ThemeProvider } from 'styled-components'
import { theme } from './utils/theme'
import { refresh } from './utils/auth'

const Wrapper = styled.div`
  font-family: 'Nunito Sans', sans-serif;  
  width: 100%;
  display: flex;
`
  // 1height: 100vh;

const defaultAuthState = {
  authenticated: false,
  loading: false,
  user: null,
  error: null
}

const authReducer = (state, action) => {
  if (action.type === 'request') {
    return {
      authenticated: false,
      loading: true,
      error: null
    }
  }
  if (action.type === 'success') {    
    return {
      authenticated: true,
      loading: false,
      error: null
    }
  }
  if (action.type === 'failure') {
    window.localStorage.clear()
    return {
      authenticated: false,
      loading: false,
      error: action.payload
    }
  }

  return defaultAuthState
}

function App() {

  const [state, dispatch] = useReducer(authReducer, defaultAuthState)
  
  useEffect(() => {
    const refreshToken = window.localStorage.getItem('refresh_token', null)
    if (refreshToken && refreshToken !== 'undefined') { 
      refresh(refreshToken, dispatch)
    }
  }, [])
  
  return (
    <Wrapper>
      <AuthContext.Provider value={{state, dispatch}}>
        <ThemeProvider theme={theme}>
          <Main
            auth={state}
          />
        </ThemeProvider>
      </AuthContext.Provider>
    </Wrapper>
  );
}

export default App;
