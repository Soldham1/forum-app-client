import React, { useState } from "react";
import axios from "axios";
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const DiscList = () => {
  const [data, setData] = useState({
    discs: [],
  });

  const token = sessionStorage.getItem("token");

  const tokenSecret = process.env.REACT_APP_JWT_SECRET;

  const discs = data;

  const getDiscs = async () => {
    try {
      let token = sessionStorage.getItem("token");

      const config = {
        headers: {
          "x-auth-token": token,
        },
      };

      const res = await axios.get("/discs", config);

      setData({ discs: res.data });
    } catch (err) {
      alert(err.message);
    }
  };

  const onDelete = async (id) => {
    let token = sessionStorage.getItem("token");

    try {
      const location = "/discs?id=" + id;

      const config = {
        headers: {
          "x-auth-token": token,
        },
      };

      await axios.delete(location, config);

      window.location.reload();
    } catch (err) {
      alert(err.response.data);
    }
  };

  window.onload = getDiscs;

  return (
    <div>
      {discs.discs.map((disc) => (
        <div key={disc._id} className="container bg-light discBox">
          <div className="d-flex justify-content-between">
            <div>
              <p className="discUsername">{disc.username}</p>
            </div>
            <div>
              <button type="button" className="btn btn-primary">
                Comments
              </button>
              <button
                disabled={
                  disc.userId === jwt.verify(token, tokenSecret).user.id
                    ? false
                    : true
                }
                type="button"
                className="btn btn-danger marginLeftS"
                onClick={(e) => onDelete(disc._id)}
              >
                Delete
              </button>
            </div>
          </div>
          <h3>{disc.title}</h3>
          <p>{disc.content}</p>
        </div>
      ))}
    </div>
  );
};

export default DiscList;
