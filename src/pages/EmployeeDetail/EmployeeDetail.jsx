import React from "react";
import { useParams } from "react-router-dom";
import styles from "./EmployeeDetail.module.scss";
import Employee from "../../assets/man.avif";
import { useGetviewEmployeeDetailQuery } from "../../services/viewEmployee";
const EmployeeDetail = () => {
  const { id } = useParams();
  const { data, error, isLoading, isSuccess, isError } =
    useGetviewEmployeeDetailQuery(id);

  return (
    <>
      <div className="employee">
        {isLoading && "Loading...."}
        {isError && error.message}
        {isSuccess && data && (
          <>
            <div className={styles.employeeWrapper}>
              <div className={styles.employeeDetail}>
                <div className={styles.employeeBody}>
                  <img src={Employee} alt="employee" />
                  <h2>
                    <span>Name:</span>
                    {data.name}
                  </h2>
                  <p>
                    <span>Email:</span>
                    {data.email}
                  </p>
                </div>
              </div>
              <div className={styles.address}>
                <h2>Address</h2>
                <p>
                  <span>Street:</span>
                  {data.address.street}
                </p>
                <p>
                  <span>City:</span>
                  {data.address.city}
                </p>
                <p>
                  <span>Zipcode:</span>
                  {data.address.zipcode}
                </p>
              </div>
              <div className={styles.contact}>
                <h2>Contact</h2>
                <p>
                  <span>Username:</span>
                  {data.username}
                </p>
                <p>
                  <span>Phone:</span>
                  {data.phone}
                </p>
                <p>
                  <span>Website:</span>
                  {data.website}
                </p>
              </div>
              <div className={styles.company}>
                <h2>Company</h2>
                <p>
                  <span>Name:</span>
                  {data.company.name}
                </p>
                <p>
                  <span>Catchphrase:</span>
                  {data.company.catchPhrase}
                </p>
                <p>
                  <span>Bs:</span>
                  {data.company.bs}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default EmployeeDetail;
