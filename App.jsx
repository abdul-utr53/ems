import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Authentication/Login";
import EmployeeDashboard from "./components/Dashboards/EmployeeDashboard";
import AdminDashboard from "./components/Dashboards/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import { setLocalStorage } from "./utils/LocalStorage";

const App = () => {
  const [user, setUser] = useState("");
  const authData = useContext(AuthContext);
  const [loggegInData, setLoggegInData] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedIn");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggegInData(userData.data);
    }
  }, []);

  function handleLogin(email, password) {
    if (email == "admin@gmail.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedIn", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email == e.email && password == e.password,
      );
      if (employee) {
        setUser("employee");
        setLoggegInData(employee);
        localStorage.setItem(
          "loggedIn",
          JSON.stringify({ role: "employee", data: employee }),
        );
      }
    } else {
      alert("invalid information!");
    }
  }

  return (
    <div className="bg-[#0B090D] text-white w-full h-screen">
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard setUser={setUser}/>
      ) : user == "employee" ? (
        <EmployeeDashboard setUser={setUser} data={loggegInData} />
      ) : null}
    </div>
  );
};

export default App;
