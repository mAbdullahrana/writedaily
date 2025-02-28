import { Sparkles } from "lucide-react";
import Modal from "./Modal";
import Chat from "./Chat";

function Prompt() {
  return (
    <Modal>
      <Modal.Open opens="prompt-form">
        <button className="hover:text-white">
          <Sparkles size={23} strokeWidth={1.5} />
        </button>
      </Modal.Open>
      <Modal.Window name="prompt-form">
        <Chat />
      </Modal.Window>
    </Modal>
  );
}

export default Prompt;
