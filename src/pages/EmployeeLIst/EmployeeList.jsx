import React from "react";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import Employee from "../../assets/man.avif";
import { useNavigate } from "react-router-dom";
// import EmployeeData from "../../constants/Data/EmployeeData";
import styles from "./EmployeeList.module.scss";
import { useGetviewEmployeeQuery } from "../../services/viewEmployee";
const EmployeeList = () => {
  const { data, error, isLoading, isSuccess, isError } =
    useGetviewEmployeeQuery();
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/employeedetail/${id}`);
  };
  return (
    <>
      <h1 className={styles.title}>Employee List</h1>
      <div className={styles.wrapper}>
        {isLoading && "Loading...."}
        {isError && error.message}
        {isSuccess &&
          data &&
          data.map((data) => (
            <EmployeeCard
              img={Employee}
              name={data.name}
              desc={data.email}
              onClick={() => handleClick(data.id)}
            />
          ))}
      </div>
    </>
  );
};

export default EmployeeList;
