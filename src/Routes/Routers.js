import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Student from "../Components/Student"
import Contact from "../Components/Contact"
import Home from "../Components/Home"
import AddStudent from "../Components/AddStudent"
import Students from "../Components/StudentsDetails"
import Update from "../Components/UpdateDetails"
const Routers = () =>{
    return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element = {< Home/>}/>
                    <Route path="/Student-Details" element = {<Students/>}/>
                    <Route path="/Student-Details/Add/:id" element = {<AddStudent/>}/>
                    <Route path="/Student-Details/edit/:id" element = {<Update/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
       
    )
}

export default Routers