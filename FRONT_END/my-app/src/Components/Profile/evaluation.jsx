import React from "react";
import "../../styles/eval.css";
import "../../styles/global.css";

const Evaluation = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Evaluate a Company</h1>
      <div className="formBox">
        <form>
          {/* <!-- Company Evaluation Textbox --> */}
          <label for="company_evaluation">
            Your Evaluation of the Company:
          </label>
          <br />
          <textarea
            id="company_evaluation"
            name="company_evaluation"
            rows="30"
            cols="200"
            placeholder="Write your evaluation..."
          ></textarea>
          <br />
          <br />

          {/* <!-- Recommendation Radio Buttons --> */}
          <p>Would you recommend this company to other students?</p>
          <label>
            <input type="radio" name="recommendation" value="yes" required />
            Yes
          </label>
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
