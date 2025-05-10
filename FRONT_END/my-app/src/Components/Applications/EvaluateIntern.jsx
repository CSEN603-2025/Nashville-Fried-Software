import React, { useState } from "react";
import "../../Styles/evalIntern.css";
import "../../Styles/global.css";

const EvaluateIntern = () => {
  const [evalStatus, setEvalStatus] = useState(false);
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>
        Evaluate Student
      </h1>
      <div className="formBox">
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
