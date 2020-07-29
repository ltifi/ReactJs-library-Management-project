import React from "react";

import { Link } from "react-router-dom";
import AdminHeader from "../Headeradmin/AdminHeader";

const ListAdherents = () => {
  const ListAdh = JSON.parse(localStorage.getItem("ListAdherents"))
    ? JSON.parse(localStorage.getItem("ListAdherents"))
    : [];
  return (
    <div>
      {" "}
      <AdminHeader />
      <div className="container">
        <div className="py-4">
          <h1>Liste des adhérents</h1>
          <table className="table border shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {ListAdh.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                      className="btn btn-primary mr-2"
                      to={`/adherentdetails/${user.id_user}`}
                    >
                      View details
                    </Link>
                    <Link to="/listadherents">
                      {" "}
                      <button className="btn btn-danger mr-2"> Bannir</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ListAdherents;
