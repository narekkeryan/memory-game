import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class MyModal extends Component {
    render() {
        return (
            <div>{
                this.props.winner ? (
                    this.props.winner === this.props.memberId ? (
                        <Modal isOpen={this.props.isOpen} centered>
                            <ModalHeader>You Won!</ModalHeader>
                            <ModalBody>You won this round. You will be redirected soon.</ModalBody>
                        </Modal>
                    ) : (
                        <Modal isOpen={this.props.isOpen} centered>
                            <ModalHeader>You Lose!</ModalHeader>
                            <ModalBody>You lost this round. You will be redirected soon.</ModalBody>
                        </Modal>
                    )
                ) : (
                    <Modal isOpen={this.props.isOpen} centered>
                        <ModalHeader>Draw!</ModalHeader>
                        <ModalBody>No one wins or loses this round. You will be redirected soon.</ModalBody>
                    </Modal>
                )
            }</div>
        );
    }
}

export default MyModal;