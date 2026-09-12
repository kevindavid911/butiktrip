import React from 'react';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  currentStep: number;
  steps: string[];
}

export function ProgressBar({ currentStep, steps }: ProgressBarProps) {
  const progressWidth = `${((Math.max(1, currentStep) - 1) / (steps.length - 1)) * 100}%`;

  return (
    <div className={styles.container}>
      <div className={styles.line}>
        <div className={styles.progress} style={{ width: progressWidth }} />
      </div>
      {steps.map((step, index) => {
        const stepNum = index + 1;
        let status = styles.upcoming;
        
        if (stepNum < currentStep) {
          status = styles.completed;
        } else if (stepNum === currentStep) {
          status = styles.active;
        }

        return (
          <div key={step} className={`${styles.step} ${status}`}>
            <div className={styles.circle}>
              {stepNum < currentStep ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                stepNum
              )}
            </div>
            <span className={styles.label}>{step}</span>
          </div>
        );
      })}
    </div>
  );
}
