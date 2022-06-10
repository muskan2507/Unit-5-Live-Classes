import './App.css';
import Login from './Components/Login';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Feed from './Components/Feed';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Routes>
       <Route path="/login" element={ <Login/>}/>
       <Route path="/feed" element={ <Feed/>}/>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
