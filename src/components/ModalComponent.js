import React ,{useState,useEffect} from 'react';
import {Modal,Button} from 'react-bootstrap';

function ModalComponent({showModal,hideModal,children}) {

  return (
    <div>
        <Modal show={showModal} onHide={()=>hideModal(false)} centered>
            <Modal.Body>
                {children}
                <hr/>
              <Button style={{float:'right'}} variant="primary" onClick={()=>hideModal(false)}>
                Close
              </Button>
            </Modal.Body>
        </Modal>
    </div>
  )
}

export default ModalComponent