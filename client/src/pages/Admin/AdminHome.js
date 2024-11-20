import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";
import Analytics from "../Dashboard/Analytics";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <hr />
          <div>
            <Analytics isAdminPage={false}/>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
