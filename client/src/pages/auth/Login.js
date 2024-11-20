import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);

  if (error) {
    alert(error);
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div
            className="form-container"
            style={{
              position: "relative", 
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url("./assets/images/banner1.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(5px)", 
                zIndex: -1,
              }}
            ></div>

              <Form
                formTitle={"Login Page"}
                submitBtn={"Login"}
                formType={"login"}
              />
           
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
