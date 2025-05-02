import React from "react";

const editProfile = () => {
  return (
    <>
      <h1>Update My Profile</h1>
      <form action="/submit-profile" method="POST">
        {/* <!-- Job Interests --> */}
        <fieldset>
          <legend>Job Interests</legend>
          <textarea
            name="job_interests"
            rows="4"
            cols="50"
            placeholder="Describe your job interests..."
          ></textarea>
        </fieldset>

        {/* <!-- Previous Internships and Part-time Jobs --> */}
        <fieldset>
          <legend>Previous Internships and Part-time Jobs</legend>

          <div class="job-entry">
            <label>
              Company Name: <input type="text" name="job_company[]" />
            </label>
            <br />
            <label>
              Duration:{" "}
              <input
                type="text"
                name="job_duration[]"
                placeholder="e.g. June 2023 - Aug 2023"
              />
            </label>
            <br />
            <label>
              Responsibilities:
              <br />
              <textarea
                name="job_responsibilities[]"
                rows="3"
                cols="50"
                placeholder="List responsibilities..."
              ></textarea>
            </label>
          </div>

          {/* <!-- You can duplicate .job-entry for more jobs using JS or backend logic --> */}
        </fieldset>

        {/* <!-- College Activities --> */}
        <fieldset>
          <legend>College Activities</legend>
          <textarea
            name="college_activities"
            rows="4"
            cols="50"
            placeholder="List the college activities you took part in..."
          ></textarea>
        </fieldset>

        <br />
        <input type="submit" value="Save Profile" />
      </form>
    </>
  );
};

export default editProfile;
