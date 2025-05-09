import React from "react";
import "../../Styles/eval.css";
import "../../Styles/global.css";

const Evaluation = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>
        Evaluate a Company
      </h1>
      <div className="formBox">
        <form>
          {/* Company Evaluation Textbox */}
          <label htmlFor="company_evaluation">
            Your Evaluation of the Company:
          </label>
          <textarea
            id="company_evaluation"
            name="company_evaluation"
            placeholder="Write your evaluation..."
          ></textarea>
          {/* Recommendation Radio Buttons */}
          <p>Would you recommend this company to other students?</p>
          <label>
            <input type="radio" name="recommendation" value="yes" required />
            Yes
          </label>{" "}
          <label>
            <input type="radio" name="recommendation" value="no" />
            No
          </label>
          <br />
          <br />
          <input type="submit" value="Submit Evaluation" />
        </form>
      </div>
    </>
  );
};

export default Evaluation;
