import { useGlobalState } from "../libs/global_state";
const Modal = () => {
  const { setIsModalOpen, modalErrorMessage } = useGlobalState();
  return (
    <div className=" w-screen h-screen absolute flex items-center justify-center shadow-md">
      <div className=" h-28 w-52 bg-green-500 flex flex-col items-center justify-center border-2 border-black p-2 text-center">
        <p>{modalErrorMessage}</p>
        <button
          onClick={() => setIsModalOpen(false)}
          className=" bg-white border-2 border-black px-4 py-1 mt-3"
        >
          ok
        </button>
      </div>
    </div>
  );
};

export default Modal;
