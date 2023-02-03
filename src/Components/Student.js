// import { Link } from "react-router-dom"
import { createContext, useState } from "react"
// import StudentsDetails from "./StudentsDetaisl"
import './style.css'

export const data = createContext()
const Student = (props) =>{

    const [details, setDetails] = useState([
        {
            Name: "John",
            Age: "24",
            Course: "MERN",
            Batch: "November",
            Id: "1",
          },
      
          {
            Name: "Deo",
            Age: "25",
            Course: "MERN",
            Batch: "september",
            Id: "2",
          },
          {
            Name: "Biden",
            Age: "26",
            Course: "MERN",
            Batch: "October",
            Id: "3",
          },
      
          {
            Name: "Barar",
            Age: "23",
            Course: "MERN",
            Batch: "September",
            Id: "4",
          },
          {
            Name: "Christ",
            Age: "24",
            Course: "MERN",
            Batch: "October",
            Id: "5",
          },
    ])

    return (
        <data.Provider value={[details, setDetails]}>
            {/* <h1>Students Details</h1> */}
            {props.children}
        </data.Provider>
    );
    
}

export default Student