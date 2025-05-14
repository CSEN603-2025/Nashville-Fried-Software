// ReportCard.jsx
import "./ReportCard.css";

const ReportCard = ({ report }) => {
  const { role, company, title, intro, body, status, comments, appealed } = report;

  return (
    <div className={`report-card ${status}`}>
      <h2 className="report-title">{title}</h2>
      <p className="report-meta">{role} @ {company}</p>
      <p className="report-intro">{intro}</p>
      <p className="report-body">{body}</p>
      <p className={`report-status status-${status}`}>Status: {status}</p>
      {comments.length > 0 && (
        <div className="report-comments">
          <h4>Comments:</h4>
          <ul>
            {comments.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      )}
      <p className="report-appealed">Appealed: {appealed ? "Yes" : "No"}</p>
    </div>
  );
};

export default ReportCard;
