
import React from 'react';

interface ControlsProps {
  onBirthDateChange: (date: Date) => void;
  birthDate: Date | null;
  onTimeUnitChange: (unit: string) => void;
  timeUnit: string;
  onLifespanChange: (span: number) => void;
  lifespan: number;
}

const Controls: React.FC<ControlsProps> = ({
  onBirthDateChange,
  birthDate,
  onTimeUnitChange,
  timeUnit,
  onLifespanChange,
  lifespan,
}) => {
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(event.target.value);
    onBirthDateChange(date);
  };

  const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onTimeUnitChange(event.target.value);
  };

  const handleLifespanChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onLifespanChange(Number(event.target.value));
  };

  const dateValue = birthDate ? birthDate.toISOString().split('T')[0] : '';

  return (
    <div className="controls">
      <div>
        <label htmlFor="birthdate">Birth Date:</label>
        <input type="date" id="birthdate" onChange={handleDateChange} value={dateValue} />
      </div>
      <div>
        <label htmlFor="timeunit">Time Unit:</label>
        <select id="timeunit" value={timeUnit} onChange={handleUnitChange}>
          <option value="days">Days</option>
          <option value="weeks">Weeks</option>
          <option value="months">Months</option>
          <option value="years">Years</option>
        </select>
      </div>
      <div>
        <label htmlFor="lifespan">Lifespan (years):</label>
        <input
          type="number"
          id="lifespan"
          value={lifespan}
          onChange={handleLifespanChange}
        />
      </div>
    </div>
  );
};

export default Controls;
