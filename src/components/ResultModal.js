import React from "react";
import Modal from "react-modal";

Modal.setAppElement('#root');

function ResultModal(props) {
    const { time, modalIsOpen, setModalOpen} = props;
    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <Modal className={'Modal'} isOpen={modalIsOpen}
               onRequestClose={closeModal}>
            <p> 축하합니다. {time}초 걸렸습니다. </p>
            <button onClick={() => window.location.reload()}>재시작</button>
        </Modal>
    );
}

export default ResultModal;