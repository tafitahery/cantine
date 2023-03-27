import './client.scss';

import Sidebar from '../../components/sidebar/Sidebar';

export default function Sales() {
  return (
    <div className="client">
      <div className="clientContainer">
        <Sidebar />
        <form className="newClient">
          <div className="clientInput">
            <label htmlFor="">Nom</label>
            <input type="text" />
          </div>
          <div className="clientInput">
            <label htmlFor="">Code bare</label>
            <input type="text" />
          </div>
          <button>Valider</button>
        </form>
      </div>
    </div>
  );
}
