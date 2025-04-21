import React from "react";

const EditComponent = (props) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Edit {props.survey.id}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                const modalElement = document.getElementById('exampleModal');
                if (modalElement) {
                  const modal = new window.bootstrap.Modal(modalElement);
                  modal.hide();
                }
              }}
            ></button>
          </div>
          <div className="modal-body">
            <form
              id="edit-form"
              onSubmit={(e) => {
                e.preventDefault();
                props.updateHandler(props.survey.id);
              }}
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="name"
                  value={props.survey.name}
                  onChange={props.changeHandler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  className="form-control"
                  type="text"
                  id="email"
                  name="email"
                  value={props.survey.email}
                  onChange={props.changeHandler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input
                  className="form-control"
                  type="text"
                  id="age"
                  name="age"
                  value={props.survey.age}
                  onChange={props.changeHandler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="currentRole" className="form-label">Current Role</label>
                <select
                  className="form-control"
                  id="currentRole"
                  name="currentRole"
                  value={props.survey.currentRole}
                  onChange={props.changeHandler}
                >
                  <option disabled value="">Select</option>
                  <option value="student">Student</option>
                  <option value="fullTimeJob">Full Time Job</option>
                  <option value="fullTimeLearner">Full Time Learner</option>
                  <option value="preferNoToSay">Prefer not to say</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">Date</label>
                <input
                  className="form-control"
                  type="date"
                  id="date"
                  name="date"
                  value={props.survey.date}
                  onChange={props.changeHandler}
                />
              </div>
              <div className="mb-3">
                <label>Would you recommend the survey to a friend?</label>
                <div className="form-check">
                  <input
                    type="radio"
                    id="recommandDefinitely"
                    value="Definitely"
                    name="recommand"
                    className="form-check-input"
                    onChange={props.changeHandler}
                    checked={props.survey.recommand === "Definitely"}
                  />
                  <label className="form-check-label" htmlFor="recommandDefinitely">
                    Definitely
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    id="recommandMaybe"
                    value="Maybe"
                    name="recommand"
                    className="form-check-input"
                    onChange={props.changeHandler}
                    checked={props.survey.recommand === "Maybe"}
                  />
                  <label className="form-check-label" htmlFor="recommandMaybe">
                    Maybe
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    id="recommandNo"
                    value="No"
                    name="recommand"
                    className="form-check-input"
                    onChange={props.changeHandler}
                    checked={props.survey.recommand === "No"}
                  />
                  <label className="form-check-label" htmlFor="recommandNo">
                    No
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="whoom" className="form-label">Who can we contact?</label>
                <input
                  className="form-control"
                  type="text"
                  id="whoom"
                  name="whoom"
                  value={props.survey.whoom.join(", ")}
                  onChange={(e) => props.changeHandler({ target: { name: "whoom", value: e.target.value.split(", ").map(v => v.trim()) } })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="comment" className="form-label">Comment</label>
                <textarea
                  className="form-control"
                  id="comment"
                  name="comment"
                  value={props.survey.comment}
                  onChange={props.changeHandler}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditComponent;
