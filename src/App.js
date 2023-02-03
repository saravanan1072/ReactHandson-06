import './App.css';
import Routers from './Routes/Routers';
import Student from './Components/Student';
// import Students from './Components/StudentsDetails';

function App() {
  return (
    <Student>
      <div className="App">
        <Routers></Routers>
      </div>
    </Student>
  );
}

export default App;