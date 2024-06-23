import React from "react";
import { PiWarningOctagonLight } from "react-icons/pi";

const ModalConfirm = ({ message, isOpen, onClose, onConfirm }) =>
  isOpen && (
    <div className="fixed inset-0 z-50 bg-black/50">
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="rounded-md bg-white p-4 text-sm lg:text-base">
          <PiWarningOctagonLight size={60} className="mx-auto" />
          <h2 className="text-lg">{message}</h2>
          <div className="mt-4 flex justify-end gap-2">
            <button
              className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
              onClick={onConfirm}
            >
              Hapus
            </button>
            <button
              className="rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
              onClick={onClose}
            >
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  );

export default ModalConfirm;
