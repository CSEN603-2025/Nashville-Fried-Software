import React from "react";
import styles from "../../Styles/eval.module.css";
import SideBar from "../Dashboard/SideBar";

const Evaluation = () => {
  return (
    <div className="cntnr">
      <SideBar active="Evaluations"/>
      <div className="main-display">
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
          <div className={styles['radio-container']}>
            <label className={styles['radio-label']}>
              <input type="radio" name="recommendation" value="yes" required />
              Yes
            </label>{" "}
            <label className={styles['radio-label']}>
              <input type="radio" name="recommendation" value="no" />
              No
            </label>
          </div>
            <input type="submit" value="Submit Evaluation" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Evaluation;
