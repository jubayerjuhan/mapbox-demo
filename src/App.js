import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  const username = useSelector(state => state.username)
  // 
  const dispatcher = () => {
    dispatch({ type: 'CHANGE_USERNAME', payload: 'Juhanners' })
  }
  return (
    <div>
      <h1>{username}</h1>
      <button onClick={dispatcher}>Click Me To Lunch The Payload</button>
      {/* <input type="text" value={username} onChange={e => dispatch({type: 'CHANGE_USERNAME', })} /> */}
    </div>
  )
}

export default App
