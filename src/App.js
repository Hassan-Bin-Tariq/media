import './App.css';
import TeacherHomepage from "./components/homepage/Teacherhomepage"
import PhotographyHomepage from "./components/homepage/Photographyhomepage"
import GeneralHomepage from "./components/homepage/Generalhomepage"
import MentorHomepage from "./components/homepage/Mentorhomepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import StudentHomepage from "./components/homepage/Studenthomepage"
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Try from './components/homepage/Try';
//comment from tehreem
//comment from ibnet
function App() {
//Bu fixed
  const [ user, setLoginUser] = useState({})

  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
         {/* <Route exact path="/" element={<Home />} />  */}
          {/* <Route exact path="/login">
            {
              user && user._id ? <TeacherHomepage setLoginUser={user} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route> */}
          
          <Route exact path="/teacherPortal">
            {
              user && user._id ? <TeacherHomepage setLoginUser={user} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>

          <Route exact path="/photographyPortal">
            {
              user && user._id ? <PhotographyHomepage setLoginUser={user} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>

          <Route exact path="/GeneralPortal">
            {
              user && user._id ? <GeneralHomepage setLoginUser={user} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>

          <Route exact path="/mentorPortal">  
            {
              user && user._id ? <MentorHomepage setLoginUser={user} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>

          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>s
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/studentPortal">
          {
              user && user._id ? <StudentHomepage setLoginUser={user} /> : <Login setLoginUser={setLoginUser}/>
          }
          </Route>
          <Route path="/">
          {
            <Try />
          }
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
