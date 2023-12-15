import { useState } from "react";
import {  Modal} from "flowbite-react";
import { PenSquare } from "lucide-react";

export default function AddPost() {
  const [openModal, setOpenModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
  }

  return (
    <>
      <button
        data-modal-target="post-modal"
        data-modal-toggle="post-modal"
        className="flex items-center gap-1 text-white bg-secondary-navy hover:bg-dark-navy focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center"
        type="button"
        onClick={() => setOpenModal(true)}
      >
        <PenSquare size={20} />
        New Post
      </button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div>a</div>
        </Modal.Body>
      </Modal>
    </>
  );
}

{
  /* <Button onClick={() => setOpenModal(true)} size="xs" className="bg-red-500 hover:bg-transparent">
  <PenSquare />
  New Post
</Button>; */
}
