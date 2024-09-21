import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent'
import ListUsersComponent from './components/ListUsersComponent'
import AddUserComponent from './components/AddUserComponent';

function App() {

  return (
    <>
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route path='/' Component={ListUsersComponent}></Route>
            <Route path='/add-user' Component={AddUserComponent}></Route>
            <Route path='/edit-user/:id' Component={AddUserComponent}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
