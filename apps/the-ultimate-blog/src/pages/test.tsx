import React, { useState } from 'react';
import Select from 'react-select';

// Assume you have a techOptions array with available tech options
const techOptions = [
  { value: 'tech1', label: 'Tech 1' },
  { value: 'tech2', label: 'Tech 2' },
  { value: 'tech3', label: 'Tech 3' },
  // Add more tech options as needed
];

function Test() {
  const [selectedTechs, setSelectedTechs] = useState([]);

  const handleTechSelect = (selectedOptions) => {
    setSelectedTechs(selectedOptions);
  };

  return (
    <div>
      <Select
        isMulti
        options={techOptions}
        value={selectedTechs}
        onChange={handleTechSelect}
      />
    </div>
  );
}

export default Test;
