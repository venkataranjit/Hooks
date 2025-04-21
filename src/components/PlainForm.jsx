import React, { useState, useEffect } from "react";
import "./PlainForm.css";

const PlainForm = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    age: "",
    currentRole: "",
    date: "",
    recommand: "",
    whoom: [],
    comment: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    age: "",
    currentRole: "",
    date: "",
    recommand: "",
    whoom: "",
    comment: "",
    submissionError: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const postData = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3001/survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Date.now().toString(),
          name: input.name,
          email: input.email,
          age: input.age,
          currentRole: input.currentRole,
          date: input.date,
          recommand: input.recommand,
          whoom: input.whoom,
          comment: input.comment,
        }),
      });
      if (!res.ok) {
        throw new Error("Data Not Posted");
      }
      return true;
    } catch (err) {
      setError({ ...error, submissionError: err });
      return false;
    } finally {
      setLoading(false);
    }
  };

  const changeEvent = (e) => {
    if (e.target.type === "checkbox") {
      setInput((prevInput) => {
        // Get the current array of selected values
        const currentArray = prevInput[e.target.name] || [];

        // If the checkbox is checked, add its value
        // If unchecked, remove its value
        const updatedArray = e.target.checked
          ? [...currentArray, e.target.value]
          : currentArray.filter((item) => item !== e.target.value);

        return {
          ...prevInput,
          [e.target.name]: updatedArray,
        };
      });
      setError({ ...error, [e.target.name]: "" });
    } else {
      setInput({ ...input, [e.target.name]: e.target.value });
      setError({ ...error, [e.target.name]: "" });
    }
  };

  useEffect(() => {
    console.log(input);
  }, [input]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newErrors = {
      name:
        input.name.trim() === ""
          ? "Please Input Name"
          : input.name.trim().length < 5
          ? "Name Must be above 5 characters"
          : "",
      email:
        input.email === ""
          ? "Enter Email ID"
          : !input.email.match(
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            )
          ? "Enter a valid Email ID"
          : "",
      age: input.age.trim() === "" ? "Please Input Age" : "",
      currentRole: input.currentRole === "" ? "Select Any One" : "",
      date: input.date === "" ? "Select Date" : "",
      recommand: input.recommand === "" ? "Select Any One" : "",
      whoom: input.whoom.length === 0 ? "Select Atleast Obe" : "",
      comment:
        input.comment.trim() === ""
          ? "Enter Any Comment"
          : input.comment.trim().length < 10
          ? "Enter Atleast 10 Characters"
          : "",
    };
    setError(newErrors);
    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    const isPosted = await postData();

    if (isPosted && !error.submissionError) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);

      setInput({
        name: "",
        email: "",
        age: "",
        currentRole: "",
        date: "",
        recommand: "",
        whoom: [],
        comment: "",
      });
      setError({
        name: "",
        email: "",
        age: "",
        currentRole: "",
        date: "",
        recommand: "",
        whoom: "",
        comment: "",
        submissionError: "",
      });
    }
  };

  return (
    <>
      <div className="container">
        <h5 id="title" className="text-center">
          Survey Form
        </h5>

        <div className="form-wrap">
          <form onSubmit={submitHandler}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    className="form-control"
                    onChange={changeEvent}
                    value={input.name}
                  />
                  {error.name && <span className="danger">{error.name}</span>}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="form-control"
                    onChange={changeEvent}
                    value={input.email}
                  />
                  {error.email && <span className="danger">{error.email}</span>}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input
                    type="number"
                    name="age"
                    id="age"
                    className="form-control"
                    placeholder="Age"
                    onChange={changeEvent}
                    value={input.age}
                  />
                  {error.age && <span className="danger">{error.age}</span>}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="currentRole">current role</label>
                  <select
                    id="currentRole"
                    name="currentRole"
                    className="form-control"
                    onChange={changeEvent}
                    value={input.currentRole}
                  >
                    <option disabled value="">
                      Select
                    </option>
                    <option value="student">Student</option>
                    <option value="fullTimeJob">Full Time Job</option>
                    <option value="fullTimeLearner">Full Time Learner</option>
                    <option value="preferNoToSay">Prefer not to say</option>
                    <option value="other">Other</option>
                  </select>
                  {error.currentRole && (
                    <span className="danger">{error.currentRole}</span>
                  )}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label id="number-label" htmlFor="date">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    placeholder="Age"
                    onChange={changeEvent}
                    value={input.date}
                  />
                  {error.date && <span className="danger">{error.date}</span>}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Would you recommend survey to a friend?</label>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="recommandDefinitely"
                      value="Definitely"
                      name="recommand"
                      className="custom-control-input"
                      onChange={changeEvent}
                      checked={input.recommand === "Definitely"}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="recommandDefinitely"
                    >
                      Definitely
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="recommandMayBe"
                      value="Maybe"
                      name="recommand"
                      className="custom-control-input"
                      onChange={changeEvent}
                      checked={input.recommand === "Maybe"}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="recommandMayBe"
                    >
                      Maybe
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="recommandNotSure"
                      value="Not Sure"
                      name="recommand"
                      className="custom-control-input"
                      onChange={changeEvent}
                      checked={input.recommand === "Not Sure"}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="recommandNotSure"
                    >
                      Not sure
                    </label>
                  </div>
                  {error.recommand && (
                    <span className="danger">{error.recommand}</span>
                  )}
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>Whom you will recommand this survey?</label>
                  <div className="custom-control custom-checkbox custom-control-inline">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="whoom"
                      value="Friends"
                      id="friends"
                      onChange={changeEvent}
                      checked={input.whoom.includes("Friends")}
                    />
                    <label className="custom-control-label" htmlFor="friends">
                      Friends
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox custom-control-inline">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="whoom"
                      value="Family"
                      id="family"
                      onChange={changeEvent}
                      checked={input.whoom.includes("Family")}
                    />
                    <label className="custom-control-label" htmlFor="family">
                      Family
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox custom-control-inline">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="whoom"
                      value="Others"
                      id="others"
                      onChange={changeEvent}
                      checked={input.whoom.includes("Others")}
                    />
                    <label className="custom-control-label" htmlFor="others">
                      Others
                    </label>
                  </div>
                  {error.whoom && <span className="danger">{error.whoom}</span>}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="comment">Leave Message</label>
                  <textarea
                    id="comment"
                    className="form-control"
                    name="comment"
                    placeholder="Enter your comment here..."
                    onChange={changeEvent}
                    value={input.comment}
                  ></textarea>
                  {error.comment && (
                    <span className="danger">{error.comment}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mb-3">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={loading}
                >
                  {loading ? "Submitting" : "Submit Survey"}
                </button>
              </div>
            </div>
            {error.submissionError && (
              <div className="alert alert-danger" role="alert">
                {error.submissionError.message}
              </div>
            )}
            {success && (
              <div className="alert alert-success" role="alert">
                Form Submitted Succesfully
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default PlainForm;
