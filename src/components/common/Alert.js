import React, { useEffect } from "react";
import { IoAlertCircleOutline } from "react-icons/io5";

const Alert = ({ message, onShow, onClose }) => {
  useEffect(() => {
    if (onShow) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [onShow, onClose]);

  return (
    onShow && (
      <div className="absolute left-1/2 top-16 flex -translate-x-1/2 items-center gap-2 text-nowrap rounded-md border-t-4 border-t-green-600 bg-green-100 p-4 font-medium shadow-md">
        <IoAlertCircleOutline size={30} className="text-green-600" /> {message}
      </div>
    )
  );
};

export default Alert;
