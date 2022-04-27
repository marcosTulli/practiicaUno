import React from 'react';
import './Form.css';
import Counter from '../Counter/Counter';
import Heading from '../Heading/Heading';
import { months } from '../../months';

// 2. Crear un formulario, básico sin funcionalidad.
const days = Array.from(Array(31)).map((_, i) => i + 1);
const years = Array.from(Array(100)).map((_, i) => i - 2022);

const Form = () => {
  return (
    <div>
      <Heading />
      <div className="formWrapper">
        <form>
          <div className="form">
            <input className="input" type="text" placeholder="Nombre" />
            <input className="input" type="text" placeholder="Apellido" />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Correo Electronico"
            />
            <label className="label">Fecha de nacimiento</label>
            <div>
              <select id="day" title="Day">
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>

              <select id="month" title="Month">
                {months.map(({ value, label }) => {
                  return (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  );
                })}
              </select>

              <select className="input" name="year" id="year" title="Year">
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="submit">
              <input
                type="submit"
                value="Submit"
                onClick={(e) => e.preventDefault()}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="counterWrapper">
        <Counter />
      </div>
    </div>
  );
};

export default Form;
