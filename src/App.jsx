import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { fetchUsersAction } from './state/actions';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state);
  console.log("Users:::::", users);
  const fetchUsers = () => {
    dispatch(fetchUsersAction());
  }

  console.log("Users:::::", users);
  return (
    <div className="app">
      <div>
        <button onClick={fetchUsers}>Fetch Users</button>
        {
          users.loadiing ? <div>Loading...</div> :
          <div>
            <h1>Users</h1>
            {
              users.data.map(user => (
                <div key={user.id}>{user.name}</div>
              ))
            }
          </div>
        }
      </div>
    </div>
  )
}

export default App
