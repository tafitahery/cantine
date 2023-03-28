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
      await axios.post('http://localhost:3003/clients', client);
      setClient({ name: '', code: '' });
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <div className="client">
      <div className="clientContainer">
        <Sidebar />
        <form onSubmit={handleSubmit} className="newClient">
          <div className="clientInput">
            <label htmlFor="">Nom</label>
            <input
              name="name"
              type="text"
              value={client.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="clientInput">
            <label htmlFor="">Code bare</label>
            <input
              name="code"
              type="text"
              value={client.code}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button>Valider</button>
          {error !== null ? (
            error ? (
              <span>Erreur d'enregistrement</span>
            ) : (
              <span>Enregistré avec succès</span>
            )
          ) : null}
        </form>
      </div>
    </div>
  );
}
