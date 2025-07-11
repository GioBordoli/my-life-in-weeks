
import React, { useState, useEffect } from 'react';
import LifeGrid from './components/LifeGrid';
import Controls from './components/Controls';
import Summary from './components/Summary';

const App: React.FC = () => {
  const [birthDate, setBirthDate] = useState<Date | null>(() => {
    const savedDate = localStorage.getItem('birthDate');
    return savedDate ? new Date(savedDate) : null;
  });

  const [timeUnit, setTimeUnit] = useState<string>(() => {
    return localStorage.getItem('timeUnit') || 'weeks';
  });

  const [lifespan, setLifespan] = useState<number>(() => {
    const savedLifespan = localStorage.getItem('lifespan');
    return savedLifespan ? Number(savedLifespan) : 90;
  });

  useEffect(() => {
    if (birthDate) {
      localStorage.setItem('birthDate', birthDate.toISOString());
    }
  }, [birthDate]);

  useEffect(() => {
    localStorage.setItem('timeUnit', timeUnit);
  }, [timeUnit]);

  useEffect(() => {
    localStorage.setItem('lifespan', String(lifespan));
  }, [lifespan]);

  const handleBirthDateChange = (date: Date) => {
    setBirthDate(date);
  };

  const handleTimeUnitChange = (unit: string) => {
    setTimeUnit(unit);
  };

  const handleLifespanChange = (span: number) => {
    setLifespan(span);
  };

  return (
    <div className="App">
      <h1>Life in {timeUnit.charAt(0).toUpperCase() + timeUnit.slice(1)}</h1>
      <Controls
        onBirthDateChange={handleBirthDateChange}
        birthDate={birthDate}
        onTimeUnitChange={handleTimeUnitChange}
        timeUnit={timeUnit}
        onLifespanChange={handleLifespanChange}
        lifespan={lifespan}
      />
      {birthDate && (
        <Summary birthDate={birthDate} timeUnit={timeUnit} lifespan={lifespan} />
      )}
      {birthDate && (
        <div className="grid-container">
          <LifeGrid birthDate={birthDate} timeUnit={timeUnit} lifespan={lifespan} />
        </div>
      )}
    </div>
  );
};

export default App;
