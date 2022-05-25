import React from "react";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
// import Employee from "../../assets/man.avif";
// import EmployeeData from "../../constants/Data/EmployeeData";
import styles from "../EmployeeLIst/EmployeeList.module.scss";
import { useGetviewTaskQuery } from "../../services/viewTask";
const TaskList = () => {
  const { data, error, isLoading, isSuccess, isError } = useGetviewTaskQuery();

  return (
    <>
      <h1 className={styles.title}>Task Created</h1>
      <div className={styles.wrapper}>
        {isLoading && "Loading...."}
        {isError && error.message}
        {isSuccess &&
          data &&
          data.map((data) => (
            <EmployeeCard name={data.title} desc={data.description} />
          ))}
      </div>
    </>
  );
};

export default TaskList;
