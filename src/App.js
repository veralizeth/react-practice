import { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import LoginForm from './components/Form';

function App() {
  const dropDownOptions = ['Option1', 'Option2', 'Option3'];
  const [selectedOption, setSelectedOption] = useState('Select an option');

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h1>Simple UI Component Example</h1>
      <Dropdown
        options={dropDownOptions}
        placeHolder={selectedOption}
        onSelect={handleSelect}
      />
      <p>Selected Option: {selectedOption}</p>
      <LoginForm />
    </div>
  );
}

export default App;
