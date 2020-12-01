import React from 'react'
// npm install react-router-dom
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Messages from './components/messages/Messages'
//import './App.css'

import Home from './components/static/Home'
import About from './components/static/About'
import Contact from './components/static/Contact'
import Service from './components/static/Service'
import UsersList from './components/users/List'
import UserShow from './components/users/Show'
import Employees from './Employees'
import Tasks from './components/tasks/Tasks'
import Register from './components/auth/Register'
import TopNav from './components/nav/Top'
import DataTable from './DataTable'
import ReactDatatable from './ReactDatatable'

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <h1>React App</h1>
          </div>

          <div className='col-md-8'>
            <TopNav />
          </div>
        </div>

        {/* <Messages/> */}

        {/* <Link to="/">Home</Link> -
                <Link to="/About">About</Link> -
                <Link to="/Service">Service</Link> -
                <Link to="/users">Users</Link> - 
                <Link to="/Contact">Contact</Link>
                <Link to="/Employees">Employees</Link>
                <Link to="/Tasks">Tasks</Link>
                <Link to="/Register">Register</Link> */}

        <Route path='/' component={Home} exact={true} />
        <Route path='/about' component={About} exact={true} />
        <Route path='/service' component={Service} exact={true} />
        <Route path='/users' component={UsersList} exact={true} />
        <Route path='/users/:id' component={UserShow} exact={true} />
        <Route path='/contact' component={Contact} exact={true} />
        <Route path='/Employees' component={Employees} exact={true} />
        <Route path='/Tasks' component={Tasks} exact={true} />
        <Route path='/Register' component={Register} exact={true} />

        <Route path='/dataTable' component={DataTable} />
        <Route path='/reactdatatable' component={ReactDatatable} />
      </div>
    </BrowserRouter>
  )
}

export default App

// import React from 'react'
// import Employees from './Employees'
// import Tasks from './components/tasks/Tasks'
// import Register from './components/auth/Register'
// import UsersList from './components/users/List'

// function App(props) {
//     return(
//         <div>
//             <h1>React App</h1>
//             <Employees/>
//             <Tasks/>
//             <Register/>
//             <UsersList/>
//         </div>
//     )
// }

// export default App
