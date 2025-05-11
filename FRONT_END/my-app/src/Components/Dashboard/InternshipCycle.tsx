import editIcon from '../../assets/edit.svg';
import React, { useState } from 'react';
import styles from '../ComponentStyles/InternshipCycle.module.css';

const InternshipCycle = ({ startDate, endDate , scad}: { startDate: string; endDate: string;scad:boolean }) => {
  const [start, setStart] = useState(new Date(startDate));
  const [end, setEnd] = useState(new Date(endDate));
  const [editingStart, setEditingStart] = useState(false);
  const [editingEnd, setEditingEnd] = useState(false);

  const now = new Date();
  const totalDuration = end.getTime() - start.getTime();
  const elapsed = now.getTime() - start.getTime();
  const progress = Math.min(Math.max((elapsed / totalDuration) * 100, 0), 100);

  const handleDateChange = (type: 'start' | 'end', value: string) => {
    const newDate = new Date(value);
    if (type === 'start') {
      setStart(newDate);
      setEditingStart(false);
    } else {
      setEnd(newDate);
      setEditingEnd(false);
    }
  };

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className={styles["internship-cycle"]}>
      <h2>Current Internship Cycle</h2>

      <div className={styles["cycle-dates"]}>
        <div className={styles["date-label"]}>
          {editingStart ? (
            <input
              type="date"
              value={start.toISOString().split('T')[0]}
              onChange={(e) => {
                const newValue = e.target.value;
            
                // Check if the new value is empty (clear button)
                if (!newValue) {
                  handleDateChange('start', start.toISOString().split('T')[0]); // Or reset to a default valid date or empty string
                } else {
                  handleDateChange('start', newValue);
                }
              }}
              onKeyDown={(e) => e.preventDefault()} // Prevent typing
              onMouseDown={(e) => e.preventDefault()}       // Prevent text selection
              onFocus={(e) => e.target.blur()}      
              
            />
          ) : (
            <>
              <span>{formatDate(start)}</span>
              {scad && (<button onClick={() => setEditingStart(true)}>
                <img src={editIcon} className={styles["edit-icon"]} />
              </button>)}
            </>
          )}
        </div>

        <div className={styles["date-label"]}>
          {editingEnd ? (
            <input
              type="date"
              value={end.toISOString().split('T')[0]}
              onChange={(e) => handleDateChange('end', e.target.value)}
              onMouseDown={(e) => e.preventDefault()}       // Prevent text selection
              onFocus={(e) => e.target.blur()}      
              onKeyDown={(e) => e.preventDefault()} // Prevent typing
            />
          ) : (
            <>
              <span>{formatDate(end)}</span>
              {scad && (<button onClick={() => setEditingEnd(true)}>
                <img src={editIcon} className={styles["edit-icon"]} />
              </button>)}
            </>
          )}
        </div>
      </div>

      <div className={styles["progress-bar-wrapper"]}>
        <div className={styles["progress-bar"]}>
          <div
            className={styles["progress-fill"]}
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className={styles["progress-text"]}>
          {Math.round(progress)}% complete
        </span>
      </div>
    </div>
  );
};

export default InternshipCycle;
