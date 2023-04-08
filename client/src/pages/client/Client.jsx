import './client.scss';

import { useState } from 'react';
import axios from 'axios';

import Sidebar from '../../components/sidebar/Sidebar';

export default function Sales() {
  const [client, setClient] = useState({
    name: '',
    code: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setClient((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/clients', client);
      setClient({ name: '', code: '' });
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className="client">
      <div className="clientContainer">
        <Sidebar />
        <form className="newClient" onSubmit={handleSubmit}>
          <div className="clientInput">
            <label htmlFor="">Nom</label>
            <input
              type="text"
              name="name"
              required
              autoFocus
              value={client.name}
              onChange={handleChange}
            />
          </div>
          <div className="clientInput">
            <label htmlFor="">Code bare</label>
            <input
              type="text"
              name="code"
              required
              value={client.code}
              onChange={handleChange}
            />
          </div>
          <div className="validation">
            <button>Valider</button>
            {error !== null &&
              (error ? (
                <span className="message error">Echec de l'enrgistement</span>
              ) : (
                <span className="message success">
                  Succès de l'enrgistement
                </span>
              ))}
          </div>
        </form>
      </div>
    </div>
  );
}
