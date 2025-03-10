import { useState } from "react";

const BmiCalculator = () => {
  const [bmi, setBmi] = useState(null);

  const calculateBmi = (weight, height, inputAlert) => {
    if (weight > 0 && height > 0) {
      const bmiValue = ((weight / (height * height)) * 10000).toFixed(2);
      setBmi(bmiValue);
    } else {
      if (inputAlert) alert("Please enter valid weight and height");
      setBmi(null);
    }
  };

  return (
    <div className="container">
      <h4>BMI Calculator</h4>
      <p>Please enter your current height and weight for accurate BMI.</p>
      <BmiInputs handleCalculate={calculateBmi} />
      <BmiResult bmi={bmi} />
    </div>
  );
};

const BmiInputs = ({ handleCalculate }) => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const resetInputs = () => {
      setWeight(0);
      setHeight(0);
      handleCalculate(0, 0, false);
  };

  return (
    <div>
      <section className="bmi-inputs">
        <div className="form-group mt-3">
          <label className="form-label">Weight (kg)</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter you weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label className="form-label">Height (cm)</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter you height in cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-secondary btn-lg mt-3"
          onClick={() => handleCalculate(weight, height, true)}
        >
          Calculate BMI
        </button>
        <button
          type="reset"
          className="btn btn-danger btn-lg mt-3 ms-3"
          onClick={resetInputs}
        >
          Reset Inputs
        </button>
      </section>
    </div>
  );
};

const BmiResult = ({ bmi }) => {
  return (
    <div className="alert alert-info mt-4">
      <h4>Your BMI is: {bmi}</h4>
    </div>
  );
};

export default BmiCalculator;
