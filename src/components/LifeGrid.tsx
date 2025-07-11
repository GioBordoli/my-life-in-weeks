
import React from 'react';

interface LifeGridProps {
  birthDate: Date;
  timeUnit: string;
  lifespan: number;
}

const LifeGrid: React.FC<LifeGridProps> = ({ birthDate, timeUnit, lifespan }) => {
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

  const totalUnits = lifespan * getUnitMultiplier();

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

  const units = Array.from({ length: totalUnits }, (_, i) => {
    const isLived = i < unitsLived;
    const isCurrent = i === unitsLived;
    const unitClass = isLived ? 'lived' : isCurrent ? 'current' : 'future';
    return <div key={i} className={`unit ${unitClass} ${timeUnit}`} />;
  });

  return <div className={`life-grid ${timeUnit}`}>{units}</div>;
};

export default LifeGrid;
