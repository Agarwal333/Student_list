
import './App.css';
import NavBar from './components/Navbar';
import AddStudents from './components/AddStudents';
import EditStudent from './components/EditStudent';
import AllStudents from './components/AllStudents';
import StudentList from './components/StudentList';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<StudentList/>}/>
        <Route exact path="/all" element={<AllStudents/>}/>
        <Route exact path="/add" element={<AddStudents/>}/>  
        <Route exact path="/edit/:id" element={<EditStudent/>}/>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
