import React from "react";
import "./PlainForm.css";

const PlainForm = () => {
  return (
    <>
      <div className="container">
          <h5 id="title" className="text-center">
            Simple Form
          </h5>

        <div className="form-wrap">
          <form id="survey-form">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label id="name-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label id="email-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label id="number-label" htmlFor="number">
                    Age <small>(optional)</small>
                  </label>
                  <input
                    type="number"
                    name="age"
                    id="number"
                    min="10"
                    max="99"
                    className="form-control"
                    placeholder="Age"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>current role</label>
                  <select
                    id="dropdown"
                    name="role"
                    className="form-control"
                    required
                  >
                    <option disabled selected value>
                      Select
                    </option>
                    <option value="student">Student</option>
                    <option value="job">Full Time Job</option>
                    <option value="learner">Full Time Learner</option>
                    <option value="preferNo">Prefer not to say</option>
                    <option value="other">Other</option>
                  </select>
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
                      id="customRadioInline1"
                      value="Definitely"
                      name="customRadioInline1"
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadioInline1"
                    >
                      Definitely
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="customRadioInline2"
                      value="Maybe"
                      name="customRadioInline1"
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadioInline2"
                    >
                      Maybe
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      id="customRadioInline3"
                      value="Not sure"
                      name="customRadioInline1"
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadioInline3"
                    >
                      Not sure
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label>This survey useful yes or no?</label>
                  <div className="custom-control custom-checkbox custom-control-inline">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="yes"
                      value="yes"
                      id="yes"
                    />
                    <label className="custom-control-label" htmlFor="yes">
                      Yes
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox custom-control-inline">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      name="no"
                      value="no"
                      id="no"
                    />
                    <label className="custom-control-label" htmlFor="no">
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div class="mb-3">
                <label htmlhtmlFor="formFileLg" class="form-label">
                  Large file input example
                </label>
                <input
                  className="form-control form-control-lg"
                  id="formFileLg"
                  type="file"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Leave Message</label>
                  <textarea
                    id="comments"
                    className="form-control"
                    name="comment"
                    placeholder="Enter your comment here..."
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <button
                  type="submit"
                  id="submit"
                  className="btn btn-primary btn-block"
                >
                  Submit Survey
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PlainForm;
