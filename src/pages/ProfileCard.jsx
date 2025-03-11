import { useState } from "react";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
const ProfileCard = () => {
  const [profile, setProfile] = useState(null);

  const handleProfileSubmit = (data) => {
    setProfile(data);
    const profileModal = new bootstrap.Modal(
      document.getElementById("profileModal")
    );
    profileModal.show();
  };
  return (
    <div className="container mt-4">
      <h2>Profile Card Application</h2>
      <ProfileForm onSubmit={handleProfileSubmit} />
      {profile && <DisplayProfileCard profile={profile} />}
    </div>
  );
};

const ProfileForm = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();
  const [modalErrors, setModalErrors] = useState([]);

  const onFormSubmit = (data) => {
    onSubmit(data);
  };

  const onError = (errors) => {
    setModalErrors(Object.values(errors).map((err) => err.message));
    const errorModal = new bootstrap.Modal(
      document.getElementById("errorModal")
    );
    errorModal.show();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit, onError)} className="card p-3">
        <label className="form-label mt-2" htmlFor="name">
          Name
        </label>
        <input
          {...register("name", { required: "Name is required" })}
          className="form-control mt-2"
          id="name"
        />

        <label className="form-label mt-2" htmlFor="designation">
          Designation
        </label>
        <input
          {...register("designation", { required: "Designation is required" })}
          className="form-control"
          id="designation"
        />

        <label className="form-label mt-2" htmlFor="office">
          Office Address
        </label>
        <input
          {...register("office", { required: "Office Address is required" })}
          className="form-control"
          id="office"
        />

        <label className="form-label mt-2" htmlFor="phone">
          Phone Number
        </label>
        <input
          {...register("phone", {
            required: "Phone Number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Invalid phone number, must be 10 digits",
            },
          })}
          className="form-control"
          id="phone"
        />

        <label className="form-label mt-2" htmlFor="email">
          Email
        </label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
          className="form-control"
          id="email"
        />

        <label className="form-label mt-2" htmlFor="BriefIntroduction">
          Brief Introduction
        </label>
        <textarea
          {...register("briefIntroduction", {
            required: "Brief Introduction is required",
          })}
          className="form-control"
          id="BriefIntroduction"
        />

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
        <button
          type="reset"
          className="btn btn-secondary mt-3 ms-2"
          onClick={() => reset()}
        >
          Reset
        </button>
      </form>

      {/* Bootstrap Modal for Errors */}
      <div
        className="modal fade"
        id="errorModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-danger">Validation Errors</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ul className="list-group">
                {modalErrors.map((error, index) => (
                  <li key={index} className="list-group-item text-danger">
                    {error}
                  </li>
                ))}
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DisplayProfileCard = ({ profile }) => {
  return (
    <div
      className="modal fade"
      id="profileModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Profile Card</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{profile.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {profile.designation}
                </h6>
                <p className="card-text">{profile.briefIntroduction}</p>
                <p className="card-text">
                  <small className="text-muted">{profile.office}</small>
                </p>
                <p className="card-text">
                  <small className="text-muted">{profile.phone}</small>
                </p>
                <p className="card-text">
                  <small className="text-muted">{profile.email}</small>
                </p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
