import { Link } from "react-router-dom"
import './style.css'


const Contact = () =>{
    return(
        <div className="main-container">
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Student-Details">Students</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>

            <h1>Contact-Us</h1>
        </div>
    )
}

export default Contact