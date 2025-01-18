import React from "react";

const PopupModal = ({ showPopup, onAssignMedicine, onViewPatient }) => {
  if (!showPopup) return null; // Render nothing if modal is not visible

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <p className="text-center text-lg font-semibold mb-4">
          Do you want to assign medicine right now?
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onAssignMedicine}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Assign Medicine
          </button>
          <button
            onClick={onViewPatient}
            className="border border-blue-500 text-blue-500 font-semibold py-2 px-4 rounded-lg hover:bg-blue-100"
          >
            View Patient
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
