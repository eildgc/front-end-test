import { useState } from "react";
import Button from "../../button/button";

interface PopupProps {
  titleMessage: string;
  message: string;
  extraMessage: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function Popup(props: PopupProps) {
  const { titleMessage, message, isOpen, extraMessage, onClose, onConfirm } = props;

  return (
    <div className="flex justify-center items-center px-2 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-full mx-auto max-w-3xl">
        <div
          className={`flex-col bg-slate-300 text-stone-700 rounded-md items-center justify-center h-fit py-6 mx-auto ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <div className="text-xl uppercase text-center text-black">
            {titleMessage}
          </div>
          <div className="text-xl text-center py-4">{message}</div>
          <div className="text-xl text-center py-4">{extraMessage}</div>
          <div className="flex lg:flex-row-reverse flex-col gap-2">
            <Button text={"Continuar"} onClick={onConfirm} />
            <Button text={"Cerrar"} onClick={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
}
