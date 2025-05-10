import React, { useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import styles from '../ComponentStyles/SCADStats.module.css';
import InternshipCycle from './InternshipCycle.tsx'

const COLORS = ['#4CAF50', '#F44336', '#FFEB3B']; // green, red, yellow

const SCADStats: React.FC = () => {
    const [generateText,setGenerateText] = useState('Generate report')
    const reportStats = {
        accepted: 42,
        rejected: 17,
        flagged: 6,
        averageReviewTime: '2.3 days'
      };
    
      const topCourses = [
        { name: 'CS101', score: 87 },
        { name: 'INT204', score: 73 },
        { name: 'UX300', score: 92 },
        { name: 'ML450', score: 65 },
        { name: 'DS410', score: 78 },
      ];
      
      const topRatedCompanies = [
        { name: 'OpenAI', score: 4.8 },
        { name: 'Google', score: 4.5 },
        { name: 'Spotify', score: 3.9 },
        { name: 'Netflix', score: 4.2 },
        { name: 'Salesforce', score: 4.0 },
      ];
      
      const topInternshipCompanies = [
        { name: 'Amazon', score: 162 },
        { name: 'Tesla', score: 134 },
        { name: 'IBM', score: 89 },
        { name: 'Meta', score: 177 },
        { name: 'SAP', score: 105 },
      ];
    
      const pieData = [
        { name: 'Accepted', value: reportStats.accepted },
        { name: 'Rejected', value: reportStats.rejected },
        { name: 'Flagged', value: reportStats.flagged }
      ];

      const renderList = (
        title: string,
        score: string,
        items: { name: string; score: number }[]
      ) => (
        <div className={styles["list-card"]}>
          <h3>{title}</h3>
          
          <div className={styles["list-header"]}>
            <span>Name</span>
            <span className={styles["score"]}>{score}</span>
          </div>
      
          <ul className={styles["list"]}>
            {items.slice(0, 5).map((item, idx) => (
              <li key={idx} className={styles["list-item"]}>
                <span>{item.name}</span>
                <span className={styles["score"]}>{item.score}</span>
              </li>
            ))}
          </ul>
        </div>
      );

  return (
    <div className={styles["dashboard-container"]}>
      {/* Chart and Review Time */}
      <div className={styles["chart-section"]}>
        <div className={styles["chart-container"]}>
        <div className={styles['pie-chart']}>
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
                    className = {styles['pie-label']}
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
          <div className={styles['report-header']}>
            <span className={styles['report-title']}>Report Stats</span>
            <button onClick={() => {setGenerateText('Report generated')}} className={styles['report-btn']}>{generateText}</button>
          </div>
          </div>
        </div>
        <div className={styles["review-time"]}>
          <InternshipCycle startDate="2025-04-01" endDate="2025-07-31" />
          <strong>Average Review Time:  {reportStats.averageReviewTime}</strong>
        </div>
      </div>

      {/* Top lists */}
      <div className={styles["top-lists"]}>
        {renderList("Most Used Courses", '% Usage', topCourses)}
        {renderList("Top Rated Companies", 'Rating', topRatedCompanies)}
        {renderList("Top Internship Companies", 'Intenrship Count', topInternshipCompanies)}
      </div>
    </div>
  );
};

export default SCADStats;
