import { Routes, Route } from "react-router-dom";
//import Signup from "./components/Signup";
//import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Invigilator from "./components/Invigilatorlogin";

import Successpage from "./components/success";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Student from "./components/Studentlogin";
import Dashboard from "./components/Dashboard";
import Studentt from "./components/Studentreg";
import Invreg from "./components/Invreg";
import Dashboard1 from "./components/Dashboard1";
import Forgot from "./components/Forgot";
import Examcreation from "./components/Exam/Examcreation";
import Automatically1 from "./components/Automatically1";
import Automatically2 from "./components/Automatically2";
import Automatically3 from "./components/Automatically3";
import Autosection from "./components/Autosection";
import Autosection2 from "./components/Autosection2";
import Resend from "./components/Resend";
import Reset from "./components/Reset";
import Manually from "./components/Exam/Manually";
import Manually2 from "./components/Exam/Manually2";
import Manually3 from "./components/Exam/Manually3";
import Manuallysec from "./components/Exam/Manuallysec";

function RouterWrapper() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>

      <Route
        path="/Invigilatorlogin"
        element={<Invigilator></Invigilator>}
      ></Route>
      <Route path={`/:examName`}>
        <Route
          path={`Automatically1`}
          element={<Automatically1></Automatically1>}
        />
        <Route
          path={`Automatically2`}
          element={<Automatically2></Automatically2>}
        />
        <Route
          path="Automatically3"
          element={<Automatically3></Automatically3>}
        ></Route>
        <Route path="Manually" element={<Manually></Manually>}></Route>
        <Route path="Manually2" element={<Manually2></Manually2>}></Route>
        <Route path="Manually3" element={<Manually3></Manually3>}></Route>
        <Route path="Manuallysec" element={<Manuallysec></Manuallysec>}></Route>
      </Route>

      <Route path="/studentlogin" element={<Student></Student>}></Route>
      <Route path="/Studentreg" element={<Studentt></Studentt>}></Route>
      <Route path="/AboutUs" element={<AboutUs></AboutUs>}></Route>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/ContactUs" element={<ContactUs></ContactUs>}></Route>
      <Route path="/success" element={<Successpage></Successpage>}></Route>
      <Route path="/Invreg" element={<Invreg></Invreg>}></Route>
      <Route path="/dashboard1" element={<Dashboard1></Dashboard1>}></Route>
      <Route path="/Forgot" element={<Forgot></Forgot>}></Route>
      <Route path="/Reset" element={<Reset></Reset>}></Route>
      <Route
        path="/Examcreation"
        element={<Examcreation></Examcreation>}
      ></Route>
      {/* <Route
        path="/Automatically1"
        element={<Automatically1></Automatically1>}
      ></Route> */}
      {/* <Route
        path="/Automatically2"
        element={<Automatically2></Automatically2>}
      ></Route> */}
      {/* <Route
        path="/Automatically3"
        element={<Automatically3></Automatically3>}
      ></Route> */}

      <Route path="/Autosection" element={<Autosection></Autosection>}></Route>
      <Route
        path="/Autosection2"
        element={<Autosection2></Autosection2>}
      ></Route>
      <Route path="/resend" element={<Resend></Resend>}></Route>
      {/* <Route path="/Manually" element={<Manually></Manually>}></Route>
      <Route path="/Manually2" element={<Manually2></Manually2>}></Route>
      <Route path="/Manually3" element={<Manually3></Manually3>}></Route> */}
      {/* <Route path="/Manuallysec" element={<Manuallysec></Manuallysec>}></Route> */}
    </Routes>
  );
}
export default RouterWrapper;
