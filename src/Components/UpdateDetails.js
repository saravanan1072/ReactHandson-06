import "./style.css";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { data } from "./Student";

function Update() {
  const [detail, setDetail] = useContext(data);
  const { id } = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [batch, setBatch] = useState("");

  useEffect(() => {
    detail.forEach((element) => {
      if (element.Id === id) {
        setName(element.Name);
        setAge(element.Age);
        setCourse(element.Course);
        setBatch(element.Batch);
      }
    });
  }, [id, detail]);

  const submit = () => {
    setDetail((previousV) =>
      previousV.map((item) =>
        item.Id === id
          ? {
              Id: id,
              Name: name,
              Age: age,
              Batch: batch,
              Course: course,
            }
          : item
      )
    );
  };

  return (

    <div className="fields">
        <h1>Update Details</h1>
        <div>
        <label>Name: </label>
        <input type='text' value={name} onChange = {(e) => setName(e.target.value)}/>
        
        <label>Age: </label>
        <input type='text' value={age} onChange = {(e) => setAge(e.target.value)}/>
        <br /><br/>
        <label>Course: </label>
        <input type='text' value={course} onChange = {(e) => setCourse(e.target.value)}/>
        
        <label>Batch: </label>
        <input type='text' value={batch} onChange = {(e) => setBatch(e.target.value)}/>
        </div>

        <button><Link to="/Student-Details">Cancel</Link></button>
        <button onClick={submit}><Link to="/Student-Details" >Update</Link></button>
    </div>

  );
}

export default Update;