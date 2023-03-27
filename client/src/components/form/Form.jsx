import './form.scss';

export default function Form() {
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
            <option value="m1"> --- </option>
            <option value="D">Tafita</option>
            <option value="m3">Rajo</option>
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
