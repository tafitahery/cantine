import './home.scss';

import Form from '../../components/form/Form';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <Sidebar />
        <Form />
      </div>
    </div>
  );
}
