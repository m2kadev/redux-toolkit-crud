import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { addUser, deleteUser, updateUser } from './features/Users'
import { useState } from 'react'

function App() {

  const dispatch = useDispatch()
  const userList = useSelector((state) => state.users.value)

  const [name, setName] = useState('')
  const [username, setUsername] = useState("")
  const [newUsername, setNewUsername] = useState("")

  return (
    <div className="App">
      <div className="addUser">
        <input type="text" placeholder='Name...' onChange={e => setName(e.target.value)} />
        <input type="text" placeholder='Username...' onChange={e => setUsername(e.target.value)} />
        <button onClick={() => dispatch(addUser({ id: userList[userList.length - 1].id + 1, name, username }))}>Add User</button>
      </div>

      <div className="displayUsers">
        {userList.map(user => {
          return (
            <div>
              <h1>{user.name}</h1>
              <h2>{user.username}</h2>
              <input type='text' placeholder="New Username" onChange={e => setNewUsername(e.target.value)} />
              <button onClick={() => dispatch(updateUser({id: user.id, newUsername: newUsername}))}> Update Username</button>
              <button onClick={() => dispatch(deleteUser({id: user.id}))}> Delete User</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App;
