import "./CheckoutForm.css";

export default function CheckoutForm({ closeModal }) {
  const handleBackgroundClick = (e) => {
    e.stopPropagation();
    closeModal();
  }

  return (
    <div className="modal">
      <div className="modal-background" onClick={handleBackgroundClick}>

      </div>

      <div className="modal-content">
        <h2>Checkout Form</h2>

      </div>
    </div>
  )
}
