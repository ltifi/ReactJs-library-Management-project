import React, { Fragment } from "react";
import AdminHeader from "../Headeradmin/AdminHeader";

const AdminLayout = () => {
  return (
    <Fragment>
      <AdminHeader />

      <div className="jumbotron">
        <h1>Bienvenue chez BiblioIsamm</h1>
        Voir Plus
      </div>
    </Fragment>
  );
};
export default AdminLayout;
