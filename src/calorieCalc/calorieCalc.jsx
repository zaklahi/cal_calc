import React, { useState } from "react";

const CalorieCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [calories, setCalories] = useState(0);

  const handleWeightChange = (e) => {
    // const weightInLbs = e.target.value;
    // const weightInKgs = weightInLbs / 2.20462; // convert lbs to kgs
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    // const heightInCm = e.target.value;
    // const heightInM = heightInCm / 100; // convert cm to m
    setHeight(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleActivityLevelChange = (e) => {
    setActivityLevel(e.target.value);
  };

  const calculateCalories = () => {
    let bmr;

    if (gender === "male") {
      bmr = 4.536 * weight + 15.88 * height - 5 * age + 5;
    } else {
      bmr = 4.536 * weight + 15.88 * height - 5 * age - 161;
    }
    

    let activityFactor;
    switch (activityLevel) {
      case "sedentary":
        activityFactor = 1.2;
        break;
      case "lightlyActive":
        activityFactor = 1.375;
        break;
      case "moderatelyActive":
        activityFactor = 1.55;
        break;
      case "veryActive":
        activityFactor = 1.725;
        break;
      case "extraActive":
        activityFactor = 1.9;
        break;
      default:
        activityFactor = 1.2;
    }

    const dailyCalories = Math.round(bmr * activityFactor);
    setCalories(dailyCalories);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateCalories();
  };

  return (
    <div>
      <h2>Calorie Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="weight">Weight (lbs): </label>
          <input
            id="weight"
            type="number"
            value={weight} // convert kgs to lbs for display
            onChange={handleWeightChange}
          />
        </div>
        <div>
          <label htmlFor="height">Height (cm): </label>
          <input id="height" type="number" value={height} onChange={handleHeightChange} />
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input id="age" type="number" value={age} onChange={handleAgeChange} />
        </div>
        <div>
          <label htmlFor="gender">Gender: </label>
          <select id="gender" value={gender} onChange={handleGenderChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="activityLevel">Activity Level: </label>
          <select
            id="activityLevel"
            value={activityLevel}
            onChange={handleActivityLevelChange}
          >
            <option value="sedentary">
              Sedentary (little or no exercise)
            </option>
            <option value="lightlyActive">
              Lightly Active (light exercise or sports 1-3 days a week)
            </option>
            <option value="moderatelyActive">
              Moderately Active (moderate exercise or sports 3-5 days a week)
            </option>
            <option value="veryActive">
              Very Active (hard exercise or sports 6-7 days a week)
            </option>
            <option value="extraActive">
              Extra Active (very hard exercise or sports, physical job or training
              2 times a day)
            </option>
          </select>
        </div>
        <div>
        {calories > 0 && (
            <p>
              Your daily calorie needs are <strong>{calories}</strong> calories.
            </p>
          )}
        </div>
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
};
export default CalorieCalculator;

            
