import React, { useState } from "react";
import axios from "axios";

const DiscForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const { title, content } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    let token = sessionStorage.getItem("token");

    const newDisc = {
      token,
      title,
      content,
    };

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };

      const body = JSON.stringify(newDisc);

      await axios.post("/discs", body, config);

      window.location.reload();
    } catch (err) {
      alert(err.response.data);
    }
  };

  return (
    <form className="form bg-light discBox" onSubmit={(e) => onSubmit(e)}>
      <div className="form-group">
        <label className="formTitle">Title</label>
        <input
          type="text"
          name="title"
          className="input-group"
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <div className="form-group">
        <label className="formTitle">Content</label>
        <textarea
          type="text"
          name="content"
          className="input-group"
          onChange={(e) => onChange(e)}
          required
          rows="8"
        />
      </div>
      <input
        type="submit"
        value="Submit"
        className="btn btn-primary marginTopS"
      />
    </form>
  );
};

export default DiscForm;
