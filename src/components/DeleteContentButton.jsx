import { useState } from "react";
import Modal from "./Modal";

const DeleteContentButton = () => {
  const [showModal, setShowModal] = useState(false);
  const deleteProfile = () => {};

  return (
    <div>
      <button
        className="rounded border-2 border-red-600 bg-white px-2 py-2 sm:px-4"
        onClick={() => setShowModal(true)}
      >
        Delete Profile
      </button>
      {showModal ? (
        <Modal>
          <div className=" prose fixed z-10 flex flex-col gap-4  border-2 border-red-600 bg-white p-10 text-center">
            <h3>Are you sure you would like to delete your profile?</h3>
            <p>
              This will delete <strong className="text-red-600">ALL</strong> of
              your data.
            </p>
            <div className="flex gap-2">
              <button
                className="flex-grow border-2 border-current px-4 py-2 font-bold text-red-600"
                onClick={() => deleteProfile()}
              >
                Delete
              </button>
              <button
                className="flex-grow border-2 border-current px-4 py-2 font-bold text-gray-400"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default DeleteContentButton;
