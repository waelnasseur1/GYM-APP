import React, { useState } from 'react';
import './info.css';

function Info(props) {
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'age':
        setAge(value);
        break;
      case 'height':
        setHeight(value);
        break;
      case 'weight':
        setWeight(value);
        break;
      case 'gender':
        setGender(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    if (age && height && weight && gender) {
      props.handleView('data');
      console.log('Form Data:', { age, height, weight, gender });
    } else {
      setError('Please fill in all fields.');
    }
  };

  return (
    <div className="App">
      <form>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={age}
          onChange={handleChange}
        />

        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          name="height"
          value={height}
          onChange={handleChange}
        />

        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={weight}
          onChange={handleChange}
        />

        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <button type="button" onClick={() => handleSubmit()}>
          Submit
        </button>

        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}

export default Info;
