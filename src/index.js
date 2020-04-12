import React from "react";
import { render } from "react-dom";

const Estimator = () => {
  return (
    <div>
      <h1>Covid-19 Estimator</h1>
      <form className="form">
        <div className="form-item">
          <label htmlFor="region">Region</label>
          <input type="text" id="region" className="form-input" />
        </div>
        <div className="form-item">
          <label htmlFor="population">Population</label>
          <input
            type="text"
            id="population"
            data-population
            className="form-input"
          />
        </div>
        <div className="form-item">
          <label htmlFor="average-age">Average Age</label>
          <input type="text" id="average-age" className="form-input" />
        </div>
        <div className="form-item">
          <label htmlFor="average-age-daily-income-usd">
            Average Age Daily Income in USD
          </label>
          <input
            type="text"
            id="average-age-daily-income-usd"
            className="form-input"
          />
        </div>
        <div className="form-item">
          <label htmlFor="average-age-daily-income-population">
            Average Age Daily Income of Population
          </label>
          <input
            type="text"
            id="average-age-daily-income-population"
            className="form-input"
          />
        </div>
        <div className="form-item">
          <label htmlFor="reported-cases">Reported Cases</label>
          <input
            type="text"
            id="reported-cases"
            data-reported-cases
            className="form-input"
          />
        </div>
        <div className="form-item">
          <label htmlFor="period-type">Period Type</label>
          <select id="period-type" className="form-input" data-period-type>
            <option>Days</option>
            <option>Weeks</option>
            <option>Months</option>
          </select>
        </div>
        <div className="form-item">
          <label htmlFor="time-to-elapse">Time To Elapse</label>
          <input
            type="text"
            id="time-to-elapse"
            className="form-input"
            data-time-to-elapse
          />
        </div>
        <div className="form-item">
          <label htmlFor="total-hospital-beds">Total Hospital Beds</label>
          <input
            type="text"
            id="total-hospital-beds"
            className="form-input"
            data-total-hospital-beds
          />
        </div>
        <div className="form-item">
          <button
            type="submit"
            id="estimate"
            className="button"
            data-go-estimate
          >
            Estimate
          </button>
        </div>
      </form>
    </div>
  );
};

render(<Estimator />, document.getElementById("root"));
