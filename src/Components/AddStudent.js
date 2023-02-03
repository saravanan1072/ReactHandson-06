import { data } from "./Student";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const AddStudent = () =>{
    const [detail, setDetail] = useContext(data);
    const { id } = useParams();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");
    const [batch, setBatch] = useState("");

    const submit = () => {
        setDetail([
          ...detail,
          {
            Id: id,
            Name: name,
            Age: age,
            Batch: batch,
            Course: course,
          },
        ]);
      };
    return(
        <div className="fields"> 
                <h1>Add Student Details</h1>
            <div>
                <label>Name: </label>
                <input type='text' value={name} onChange = {(e) => setName(e.target.value)}/>
                
                <label>Age: </label>
                <input type='text' value={age} onChange = {(e) => setAge(e.target.value)}/>
                <br/><br/>
                <label>Course: </label>
                <input type='text' value={course} onChange = {(e) => setCourse(e.target.value)}/>
                
                <label>Batch: </label>
                <input type='text' value={batch} onChange = {(e) => setBatch(e.target.value)}/> <br/>

            </div>
                <button><Link to="/Student-Details">Cancel</Link></button> 
                <button onClick={submit}><Link to="/Student-Details" >Update</Link></button>
        </div>
    )
}

export default AddStudent