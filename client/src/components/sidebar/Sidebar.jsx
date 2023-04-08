import './sidebar.scss';

import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarContainer">
        <Link to="/sales" className="link">
          <div className="menu">VENTE</div>
        </Link>
        <Link to="/edit" className="link">
          <div className="menu">EDITION</div>
        </Link>
        <Link to="/client" className="link">
          <div className="menu">CLIENT</div>
        </Link>
        <Link to="/" className="link">
          <div className="menu">JOURNAL</div>
        </Link>
      </div>
    </div>
  );
}
