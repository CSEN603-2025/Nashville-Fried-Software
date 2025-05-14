import React, {useState} from 'react';
import styles from './SoftwareEngineeringAssessment.module.css';
import SideBar from '../Dashboard/SideBar';
import { useNavigate } from 'react-router-dom';

type Question = {
  id: string;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
};

// Define the component's props
type AssessmentProps = {};

const Assessments: React.FC<AssessmentProps> = () => {
// Define the questions for the assessment
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("Upload Score")
  const questions: Question[] = [
    {
      id: 'q1',
      questionText: 'What does OOP stand for?',
      options: ['Object Oriented Programming', 'Object Operational Protocol', 'Operational Object Process', 'None of the above'],
      correctAnswerIndex: 0, // Correct answer is the first option
    },
    {
      id: 'q2',
      questionText: 'Which of the following is a type of software testing?',
      options: ['Unit Testing', 'Stress Testing', 'Acceptance Testing', 'All of the above'],
      correctAnswerIndex: 3, // Correct answer is "All of the above"
    },
    {
      id: 'q3',
      questionText: 'What is the primary purpose of version control systems like Git?',
      options: ['Track code changes', 'Optimize code', 'Improve performance', 'Debug code'],
      correctAnswerIndex: 0, // Correct answer is "Track code changes"
    },
    {
      id: 'q4',
      questionText: 'Which of the following is a common software development methodology?',
      options: ['Agile', 'Waterfall', 'Scrum', 'All of the above'],
      correctAnswerIndex: 3, // Correct answer is "All of the above"
    },
  ];

  // Track the selected answers
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: number }>({});
  const [score, setScore] = useState<number | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  // Handle the change in selected answers
  const handleAnswerChange = (questionId: string, answerIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }));
  };

  // Handle form submission and calculate score
  const handleSubmit = () => {
    let totalScore = 0;

    questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswerIndex) {
        totalScore += 1;
      }
    });

    setScore(totalScore);
    

   
  };

  // Handle "Upload Score" button press
  const handleUploadScore = () => {
    setNotification('Your score has been uploaded to your profile!');
     setButtonText("Uploading...")
     setTimeout(() => navigate('/dashboardPRO'), 2200 );
  };

  return (
    <div className={styles["cntnr"]}>
      <div className={styles["main-display"]}>
        <SideBar pro={true} active="" />

    <div className={styles["assessment-container"]}>
      <h1 className={styles["assessment-title"]}>Software Engineering Assessment</h1>

      <form onSubmit={(e) => e.preventDefault()} className={styles["assessment-form"]}>
        {questions.map((question) => (
          <div key={question.id} className={styles["question-block"]}>
            <p className={styles["question-text"]}>{question.questionText}</p>
            {question.options.map((option, index) => (
              <label key={index} className={styles["option-label"]}>
                <input
                  type="radio"
                  name={question.id}
                  value={index}
                  checked={selectedAnswers[question.id] === index}
                  onChange={() => handleAnswerChange(question.id, index)}
                />
                {option}
              </label>
            ))}
          </div>
        ))}

        <button type="button" className={styles["submit-button"]} onClick={handleSubmit}>
          Submit
        </button>
      </form>

      {score !== null && (
        <div className={styles["score-display"]}>
          <h3>Your Score: {score} / {questions.length}</h3>
        </div>
      )}

      {notification && <p className={styles["notification"]}>{notification}</p>}

      <button className={styles["upload-button"]} onClick={handleUploadScore}>
        {buttonText}
      </button>
    </div>
    </div>
    </div>
  );
};

export default Assessments;