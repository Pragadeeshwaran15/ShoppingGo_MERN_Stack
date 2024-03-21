import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from "axios";
function SellerRequest() {
  let [data, setData] = useState();
  const handleDelete = async (id) => {
    let res = await axios.delete(`/api/v1/seller/delete/${id}`);
    getSellerRequest();
  };
  const getSellerRequest = async () => {
    try {
      let res = await axios.get("https://main-back-end.onrender.com/api/v1/seller/all");

      if (res.status === 200) {
        setData(res.data.sellers);
      }
    } catch (error) {}
  };
  const toggle = async (e) => {
    try {
      const updatedSeller = { ...e, status: !e.status };
      let res = await axios.put(
        `/api/v1/seller/verified/${e._id}`,
        updatedSeller
      );

      if (res.status === 200) {
        getSellerRequest();
      }
    } catch (error) {
      console.error("Error toggling seller status:", error);
    }
  };
  useEffect(() => {
    getSellerRequest();
  }, []);

  return (
    <div className="row">
      <div className="col-12 col-md-2">
        <Sidebar />
      </div>
      <div className="col-12 col-md-10">
        <h1>Request From User</h1>
        <div className="table">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Shop Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Verified</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((e, i) => {
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{e.shopname}</td>
                      <td>{e.email}</td>
                      <td>{e.phone}</td>
                      <td>
                        <label className="switch">
                          <input
                            type="checkbox"
                            defaultChecked={e.status}
                            onChange={() => toggle(e)}
                          />
                          <span className="slider round"></span>
                        </label>
                      </td>
                      <td>
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(e._id)}
                        >
                          Reject
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default SellerRequest;