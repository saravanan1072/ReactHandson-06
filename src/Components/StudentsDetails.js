import { Link } from "react-router-dom";
import { useContext } from "react";
import { data } from "./Student";

export default function Students() {
  const [rows] = useContext(data);

  const Id = new Date().getTime().toString();

  return (
    <div className="">
      <div className="main">
      <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Student-Details">Students</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
        <h1 className="title">Student Details</h1>
        <button >
          <Link to={`/Student-Details/add/${Id}`} className="new">
            Add new student
          </Link>
        </button>
      

                
      <div className="table">
            <table>
              <tr>
                <th className="name">Name</th>
                <th >Age</th>
                <th >Course</th>
                <th >Batch</th>
                <th >Change</th>
              </tr>
            <tbody>
            
              {rows.map((row) => (
                <>
                  <tr key={row.Id}>
                  <td className="name">{row.Name}</td> 
                  <td>{row.Age}</td>
                  <td>{row.Course}</td>
                  <td>{row.Batch}</td>
                  <td className="edit">
                    <Link to={`/Student-Details/edit/${row.Id}`}>Edit</Link>
                  </td>
                </tr>
                  {/* <hr/> */}
                </>
              ))}
           </tbody>
          </table>
        
      </div>
    </div>
    </div>
  );
}