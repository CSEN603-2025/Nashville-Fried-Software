import React from "react";
import styles from "../../Styles/eval.module.css";

const Evaluation = () => {
  return (
    <>
      <h1>Evaluate a Company</h1>
      <div className={styles["formBox"]}>
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
