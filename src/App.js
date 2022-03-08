import Home  from "./components/pages/Home";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import View from "./components/student/View";
import Edit from "./components/student/Edit";

function App() {
  return (
    <>
  <Router>
   
      <Routes>
        <Route exact path="/" element={<Home/>}/>
         <Route exact path="/view/:id" element={<View/>}/>
        <Route exact path="/edit/:id" element={<Edit/>}/> 
        
      </Routes>
   
    
    </Router>

    </>
  );
}

export default App;

