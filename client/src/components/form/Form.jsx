import './form.scss';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Form() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fethClients = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/clients');
        setClients(data);
      } catch (error) {
        console.log(error);
      }
    };
    fethClients();
  }, []);

  return (
    <div className="form">
      <form>
        <div className="inputForm">
          <label htmlFor="">Date:</label>
          <input type="date" />
        </div>
        <div className="inputForm">
          <label htmlFor="">Nom:</label>
          <select>
            <option value=""> --- </option>
            {clients.map((client) => (
              <option key={client.code} value={client.code}>
                {client.name}
              </option>
            ))}
          </select>
        </div>
        <div className="inputForm">
          <label htmlFor="">Code Client:</label>
          <input type="text" disabled />
        </div>
        <div className="inputForm">
          <label htmlFor="">Menu:</label>
          <select>
            <option value="m1">M1</option>
            <option value="D">M2</option>
            <option value="m3">M3</option>
          </select>
        </div>
        <div className="inputForm">
          <label htmlFor="">Accompagnement:</label>
          <select>
            <option value="m1">E</option>
            <option value="m2">D</option>
          </select>
        </div>
        <button>Valider</button>
      </form>
    </div>
  );
}
