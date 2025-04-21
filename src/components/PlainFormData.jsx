import React, { useEffect, useState } from "react";
import EditComponent from "./EditComponent";

const PlainFormData = () => {
  const [edit, setEdit] = useState([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const changeHandler = (e) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setEdit((prevInput) => {
        const currentArray = prevInput[name] || [];
        const updatedArray = e.target.checked
          ? [...currentArray, e.target.value]
          : currentArray.filter((item) => item !== e.target.value);

        return {
          ...prevInput,
          [name]: updatedArray,
        };
      });
    } else {
      setEdit({ ...edit, [name]: value });
    }
  };

  const getData = async () => {
    try {
      let res = await fetch("http://localhost:3001/survey");
      if (!res.ok) {
        throw new Error("Failed to Fetch Data");
      }
      setData(await res.json());
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteHandler = async (id) => {
    try {
      const res = await fetch(`http://localhost:3001/survey/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Data Not Deleted");
      }
      setData(data.filter((item) => item.id !== id));
      setSuccess("Data Deleted Successfully");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      setError("Data Not Deleted");
      setTimeout(() => setError(""), 3000);
    }
  };

  const editHandler = (item) => {
    console.log('Selected Item:', item);
    setSelectedItem(item);
    const modalElement = document.getElementById('exampleModal');
    console.log('Modal Element:', modalElement);
    if (modalElement) {
      const modal = new window.bootstrap.Modal(modalElement);
      modal.show();
    } else {
      console.log('Modal element not found');
    }
  };
  

  const updateHandler = async (id) => {
    try {
      const res = await fetch(`http://localhost:3001/survey/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(edit),
      });
      if (!res.ok) {
        throw new Error("Data Not Updated");
      }
      setData(
        data.map((item) => (item.id === id ? { ...item, ...edit } : item))
      );
      setSuccess("Data Updated Successfully");
      setTimeout(() => setSuccess(""), 3000);
      const modalElement = document.getElementById('exampleModal');
      if (modalElement) {
        const modal = new window.bootstrap.Modal(modalElement);
        modal.hide();
      }
    } catch (err) {
      setError("Data Not Updated");
      setTimeout(() => setError(""), 3000);
    }
  };

  return (
    <>
      <h5>Survey Data</h5>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
              <td>{item.currentRole}</td>
              <td>{item.date}</td>
              <td>{item.recommand}</td>
              <td>
                {item.whoom.map((i, index) => (
                  <span key={index}>
                    {i}
                    {index < item.whoom.length - 1 ? ", " : ""}
                  </span>
                ))}
              </td>
              <td>{item.comment}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => editHandler(item)}
                >
                  Edit
                </button>
              </td>
              <td onClick={() => deleteHandler(item.id)}>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      {selectedItem && (
        <EditComponent
          survey={selectedItem}
          changeHandler={changeHandler}
          updateHandler={updateHandler}
        />
      )}
    </>
  );
};

export default PlainFormData;
