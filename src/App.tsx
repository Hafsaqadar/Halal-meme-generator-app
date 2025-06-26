import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MemeViewer from './pages/MemeViewer';
import './App.css'

function App() {

  return ( 
   
   <Router>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/memes/:category" element={<MemeViewer />}/>

    </Routes>
   </Router>
 
    )
}

export default App
