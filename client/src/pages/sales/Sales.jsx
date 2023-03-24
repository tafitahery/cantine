import Sale from '../../components/sale/Sale';
import './sales.scss';

import Sidebar from '../../components/sidebar/Sidebar';

export default function Sales() {
  return (
    <div className="sales">
      <div className="salesContainer">
        <Sidebar />
        <Sale />
      </div>
    </div>
  );
}
