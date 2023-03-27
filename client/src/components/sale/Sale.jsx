import './sale.scss';

export default function Sale() {
  return (
    <div className="sale">
      <div className="saleContainer">
        <form>
          <label htmlFor="">Code client</label>
          <input type="text" />
        </form>
        <div className="showCustomer">
          <div className="customer">25/03/23</div>
          <div className="customer">Tafita</div>
          <div className="customer">M1</div>
          <div className="customer">E</div>
        </div>
      </div>
    </div>
  );
}
