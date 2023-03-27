import './sidebar.scss';

import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <div className="menu">
          <Link to="/sales" className="link">
            VENTE
          </Link>
        </div>
        <div className="menu">
          <Link to="/edit" className="link">
            EDITION
          </Link>
        </div>
        <div className="menu">
          <Link to="/client" className="link">
            CLIENT
          </Link>
        </div>
        <div className="menu">
          <Link to="/" className="link">
            JOURNAL
          </Link>
        </div>
      </div>
    </div>
  );
}
