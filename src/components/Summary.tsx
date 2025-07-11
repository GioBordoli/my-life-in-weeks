
import React from 'react';

interface SummaryProps {
  birthDate: Date;
  timeUnit: string;
  lifespan: number;
}

const Summary: React.FC<SummaryProps> = ({ birthDate, timeUnit, lifespan }) => {
  const getUnitMultiplier = () => {
    switch (timeUnit) {
      case 'days':
        return 365;
      case 'months':
        return 12;
      case 'years':
        return 1;
      default:
        return 52;
    }
  };

  const now = new Date();
  const diffTime = now.getTime() - birthDate.getTime();

  let unitsLived: number;
  if (timeUnit === 'days') {
    unitsLived = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  } else if (timeUnit === 'weeks') {
    unitsLived = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
  } else if (timeUnit === 'months') {
    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    unitsLived = (currentYear - birthYear) * 12 + (currentMonth - birthMonth);
  } else if (timeUnit === 'years') {
    unitsLived = now.getFullYear() - birthDate.getFullYear();
    if (now.getMonth() < birthDate.getMonth() || (now.getMonth() === birthDate.getMonth() && now.getDate() < birthDate.getDate())) {
      unitsLived--;
    }
  } else {
    unitsLived = 0;
  }

  const totalUnits = lifespan * getUnitMultiplier();
  const unitsRemaining = totalUnits - unitsLived;
  const age = now.getFullYear() - birthDate.getFullYear();

  return (
    <div className="summary">
      <p>Age: {age} years</p>
      <p>
        {timeUnit.charAt(0).toUpperCase() + timeUnit.slice(1)} Lived: {unitsLived}
      </p>
      <p>
        {timeUnit.charAt(0).toUpperCase() + timeUnit.slice(1)} Remaining: {unitsRemaining}
      </p>
    </div>
  );
};

export default Summary;
