import axios from 'axios'
import qs from 'qs'

const headerData = btoa(`${process.env.REACT_APP_SPOTIFY_CLIENT}:${process.env.REACT_APP_SPOTIFY_SECRET}`)

const authenticate = async(code, dispatch, history = null) => {
  const data = {
    "grant_type": 'authorization_code',
    "code": code,
    "redirect_uri": 'http://localhost:3000/login',
    "scope": "user-read-private user-read-email"
  }
  
  dispatch({type: 'request'})

  try {
    const res = await axios.post('https://accounts.spotify.com/api/token', qs.stringify(data),{
      headers: {
        "Authorization": `Basic ${headerData}`,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })

    if (res.status === 200) {
      console.log('here')
      window.localStorage.clear()
      window.localStorage.setItem('access_token', res.data.access_token)
      window.localStorage.setItem('refresh_token', res.data.refresh_token)      

      dispatch({type: 'success', payload: res.data})

      setTimeout(() => {
        refresh(res.data.refresh_token, dispatch)
      }, (res.data.expires_in - 100) * 1000 )

      if (history) {
        history.push('/')
      }
    }
  } catch (err) {
    console.log(err)
    dispatch({type: 'error', payload: { error: 'Unexpected error' }})
  }
}


const refresh = async(token, dispatch) => {

  const data  = {
    grant_type: 'refresh_token',
    refresh_token: token
  }

  dispatch({type: 'request'})
  try {
    const res = await axios.post('https://accounts.spotify.com/api/token', qs.stringify(data), {
      headers: {
        "Authorization": `Basic ${headerData}`,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    
    if (res.status === 200) {
      window.localStorage.removeItem('access_token')
      window.localStorage.setItem('access_token', res.data.access_token)

      setTimeout(() => {
        refresh(res.data.refresh_token, dispatch)
      }, (res.data.expires_in - 100) * 1000 )
      console.info('refreshing in -> ' + ((res.data.expires_in - 100) * 1000))
      dispatch({type: 'success', payload: res.data})
    }
  } catch (err) {    
    console.log(err)
    dispatch({type: 'error', payload: { error: 'Unexpected error' }})
    window.location = `${window.location.origin}/login`
  }
}


export {
  authenticate,
  refresh
}