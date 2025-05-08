import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import '../ComponentStyles/SCADStats.css';

const COLORS = ['#4CAF50', '#F44336', '#FFEB3B']; // green, red, yellow

const SCADStats: React.FC = () => {
    const reportStats = {
        accepted: 42,
        rejected: 17,
        flagged: 6,
        averageReviewTime: '2.3 days'
      };
    
      const topCourses = ['CS101', 'INT204', 'UX300', 'ML450', 'DS410'];
      const topRatedCompanies = ['OpenAI', 'Google', 'Spotify', 'Netflix', 'Salesforce'];
      const topInternshipCompanies = ['Amazon', 'Tesla', 'IBM', 'Meta', 'SAP'];
    
      const pieData = [
        { name: 'Accepted', value: reportStats.accepted },
        { name: 'Rejected', value: reportStats.rejected },
        { name: 'Flagged', value: reportStats.flagged }
      ];

  const renderList = (title: string, items: string[]) => (
    <div className="list-card">
      <h3>{title}</h3>
      <ul>
        {items.slice(0, 5).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="dashboard-container">
      {/* Chart and Review Time */}
      <div className="chart-section">
        <div className="chart-container">
        <div className='pie-chart'>
          <ResponsiveContainer width="100%" height={300}>
          <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            outerRadius={150}
            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                const RADIAN = Math.PI / 180;
                const radius = innerRadius + (outerRadius - innerRadius) / 2;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                <text
                    x={x+10}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className = 'pie-label'
                >
                    {`${pieData[index].name}: ${pieData[index].value}`}
                </text>
                );
            }}
            >
            {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
            </Pie>
            </PieChart>
          </ResponsiveContainer>
          <p>Report Stats</p>
          </div>
        </div>
        <div className="review-time">
          <p><strong>Avg. Review Time:</strong></p>
          <p className="review-value">{reportStats.averageReviewTime}</p>
        </div>
      </div>

      {/* Top lists */}
      <div className="top-lists">
        {renderList("Most Used Courses", topCourses)}
        {renderList("Top Rated Companies", topRatedCompanies)}
        {renderList("Top Internship Companies", topInternshipCompanies)}
      </div>
    </div>
  );
};

export default SCADStats;
