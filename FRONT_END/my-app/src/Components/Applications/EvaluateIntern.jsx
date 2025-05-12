import React, { useState } from "react";
import styles from "../../Styles/evalIntern.module.css";
import { useParams } from "react-router-dom";
import SideBar from "../Dashboard/SideBarCompany";

const EvaluateIntern = () => {
  const { name } = useParams();
  const [evalStatus, setEvalStatus] = useState(false);
  return (
    <div className="cntnr">
      <SideBar active='Evaluations'/>
      <div className="main-display">
        <h1>Evaluate: {name}</h1>
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
      </div>
    </div>
  );
};

export default EvaluateIntern;
