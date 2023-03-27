import DataTable from '../../components/dataTable/DataTable';
import Sidebar from '../../components/sidebar/Sidebar';
import './edit.scss';

export default function Edit() {
  return (
    <div className="edit">
      <div className="editContainer">
        <Sidebar />
        <DataTable />
      </div>
    </div>
  );
}
