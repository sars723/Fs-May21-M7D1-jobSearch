

import './App.css';
import { Home } from './components/Home';

import { MyNavbar } from './components/MyNavbar';
import {useState} from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { JobDetail } from './components/JobDetail';
function App() {
  const [searchQuery,setSearchQuery]=useState("")
  return (
    <div className="App">
     
     <Router>
     <MyNavbar setSearchQuery={setSearchQuery}/>
     <Route path="/" exact render={(routerProps)=><Home {...routerProps} searchQuery={searchQuery.toLocaleLowerCase()}/>}/>
   <Route path="/jobDetails" component={JobDetail}/>
     </Router>
    </div>
  );
}

export default App;
