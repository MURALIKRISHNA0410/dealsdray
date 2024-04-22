import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import DashBord from "./components/DashBord";
import CreateEmployee from "./components/CreateEmployee";
import EmployeeList from "./components/EmployeeList";
import EditEmployee from "./components/EditEmployee";
import Logout from "./components/Logout";


function App() {
  return (<div className="bg-neutral-300 h-auto w-screen">
   <p className="text-blue-500 font-bold text-2xl p-7">LOGO HERE</p>
    <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path='/'></Route>
        <Route element={<Registration/>} path='/register'/>
        <Route element={<DashBord/>} path='/dashbord/:ID'/>
        <Route element={<DashBord/>} path='/dashbord'/>
        <Route element={<CreateEmployee/>} path='create-employee'/>
        <Route element={<EmployeeList/>} path="/employee-list"/>
        <Route element={<EditEmployee/>} path="/edit-employee/:ID"/>
        <Route element={<Logout/>} path="/Logout"/>
      </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
