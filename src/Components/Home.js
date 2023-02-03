import { Link  } from "react-router-dom"
import './style.css'

const Home = () =>{
    return(
        <div className="main-container">
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Student-Details">Students</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>


            <h1>Home</h1>
        </div>
    )
}

export default Home