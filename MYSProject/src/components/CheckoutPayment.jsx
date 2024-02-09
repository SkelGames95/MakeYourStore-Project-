import './CheckoutPayment.scss';

export const CheckoutPayment = () => {
  return (
    <div className='checkout-pay'>
        <h3><i className="bi bi-credit-card"></i>Pagamento</h3>
        <form className='pay-data'>
          <label htmlFor="name-owner"> Nome titolare carta
            <input type="text" name="name-owner" id="name-owner" />
          </label>
          <label htmlFor="number-card"> Numero carta
            <input type="number" name="number-card" id="number-card" />
          </label>
          <label htmlFor="exp"> data di scadenza
            <input type="number" name="exp" id="exp" />
          </label>
          <label htmlFor="cvv"> CVV
            <input type="number" name="cvv" id="cvv" />
          </label>
        </form>
    </div>
  );
}
