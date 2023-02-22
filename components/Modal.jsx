import "./Modal.css"

function Modal({header}) {


  function cancel() {
    console.log('locancelate')
  }

  function confirm() {
    console.log('loconfirmate')
  }
    return (
        <>
        <div className="modal">
          <p className="modal__title">ta seguro?</p>
          <div className="modal__buttons">
            <button className="btn btn__cancel" onClick={cancel}>Cancel</button>
            <button className="btn" onClick={confirm}>Confirm</button>
          </div>
        </div>
        <div className="backdrop" />
      </> 
    )
}

export default Modal;