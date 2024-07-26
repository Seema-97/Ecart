import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal.css'

function MyVerticallyCenteredModal(props) {
 const {modalcontent} = props
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className='madal-heading-container'>
        <Modal.Title id="contained-modal-title-vcenter" >
         <h2>{modalcontent?.title}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <div className="modal-center-box" >
         <div> <img  src={modalcontent.image} alt='image not found' className='modal-image'/></div>
         <h4> Price: {modalcontent.price}</h4>
        <p>
         {modalcontent.description}
        </p>
       
        <h6> Rate: {modalcontent?.rating?.rate}  Count:  {modalcontent?.rating?.count}</h6>
       </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal
