import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 col-12 offset-md-3 ">
            <div className="row gy-3">
              <div className="col-md-6 col-12">
                <button className="btn firstbtn1 w-100 py-5">Sales</button>
              </div>
              <div className="col-md-6 col-12">
                <button className="btn firstbtn2 w-100 py-5">Order</button>
              </div>
              <div className="col-md-6 col-12">
                <button className="btn firstbtn1 w-100 py-5">Admin</button>
              </div>
              <div className="col-md-6 col-12">
                <button className="btn firstbtn2 w-100 py-5">Staff</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
