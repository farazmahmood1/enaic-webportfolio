import React from "react";
import { Modal } from "pretty-modal";
import image1 from "../../portfolio/portfolio-image-1.jpg";

const Projectmodal = ({ showModal, closeModal, selectedItem }) => {
    return (
        <div>
            <Modal
                onClose={() => {
                    closeModal(false);
                }}
                open={showModal}
            >
                <div className="row flex-wrap-reverse">
                    <div className="col-lg-4">
                        <img src={image1} className="img-fluid shadow bg-body rounded border border-2" alt="" />
                        <div>
                            <a className="btn btn-primary float-right btn-sm btn-circled p-3 mt-3">
                                View
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="d-flex">
                            <h2>About</h2>
                            <a className="btn btn-danger btn-sm ms-auto m-1" onClick={() => {
                                closeModal(false);
                            }}>X</a>
                        </div>
                        <div className="line w-50 mb-3" />
                        <h4 className="mb-0 mt-0">{selectedItem.name}</h4>
                        <p className="mt-0 mb-2"><b>{selectedItem.type}</b></p>
                        <p>{selectedItem.description}</p>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Projectmodal;
