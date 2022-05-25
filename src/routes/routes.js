import Home from "../pages/Home/Home.jsx";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import EmployeeList from "../pages/EmployeeLIst/EmployeeList.jsx";
import EmployeeDetail from "../pages/EmployeeDetail/EmployeeDetail.jsx";
import TaskList from "../pages/TaskList/TaskList.jsx";
const routes = [
  {
    path: "/",
    element: Home,
    nestedPath: null, //// if true and array of object will be here.
  },
  {
    path: "login",
    element: LoginPage,
    nestedPath: null, //// if true and array of object will be here.
  },
  {
    path: "employee",
    element: EmployeeList,
    nestedPath: null, //// if true and array of object will be here.
  },
  {
    path: "employeedetail/:id",
    element: EmployeeDetail,
    nestedPath: null, //// if true and array of object will be here.
  },
  {
    path: "tasks",
    element: TaskList,
    nestedPath: null, //// if true and array of object will be here.
  },
];

export default routes;
