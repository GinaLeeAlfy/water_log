import { useState } from "react";
import Modal from "./Modal";

const DeleteContentButton = () => {
  const [showModal, setShowModal] = useState(false);
  const deleteProfile = () => {};

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Delete Profile</button>
      {showModal ? (
        <Modal>
          <div>
            <h1>Are you sure you would like to delete your profile?</h1>
            <p>
              This will delete <strong>ALL</strong> of your data.
            </p>
            <button onClick={() => deleteProfile()}>Delete</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default DeleteContentButton;
