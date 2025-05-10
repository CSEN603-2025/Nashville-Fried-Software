import React, { useState } from "react";
import styles from "../../Styles/evalIntern.module.css";

const EvaluateIntern = () => {
  const [evalStatus, setEvalStatus] = useState(false);
  return (
    <>
      <h1>Evaluate Student</h1>
      <div className={styles["formBox"]}>
        <form>
          {/* Student  Evaluation Textbox */}
          <label htmlFor="company_evaluation">
            Your Evaluation of the Intern:
          </label>
          <textarea
            id="company_evaluation"
            name="company_evaluation"
            placeholder="Write your evaluation..."
          ></textarea>
          <br />
          <input
            type="submit"
            value="Submit Evaluation"
            onClick={() => setEvalStatus(true)}
          />
        </form>
        {evalStatus && (
          <>
            <p>Evaluation Complete</p>
          </>
        )}
      </div>
    </>
  );
};

export default EvaluateIntern;
