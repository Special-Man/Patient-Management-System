import React, { useState } from "react";

const PatientRecords = () => {
  const [records, setRecords] = useState([
    {
      date: "Fri, 21 Jul 2024",
      typeOfIllness: "Acrophobia",
      remarks:
        "The extreme case of Acrophobia, well he did take the medicine 'Mountain Dew' as after that he jumped from building and landed on 'Thumbs Up' truck, stole the meds and said 'Aaj kuch toofani karte hai'. So the medicine worked a little bit too good.",
    },
    {
      date: "Fri, 2 Jul 2024",
      typeOfIllness: "Acrophobia",
      remarks:
        "So the extreme case of Acrophobia, he did face the fear but he didn’t take the medication of fear, which is 'Mountain Dew', that is why he broke his leg so far he didn’t die.",
    },
    {
      date: "Wed, 29 May 2024",
      typeOfIllness: "Acrophobia",
      remarks:
        "Extreme case of Acrophobia, gets scared even as little height as standing up in a chair. This is a very serious case in which the patient won’t even climb the ladder upstairs because he’s scared of even stunted heights like a jackass. So the cure is, face the fear.",
    },
  ]);

  const handleAddClick = () => {
    // Add logic for opening a modal or form to add new records
    alert("Add Patient Record functionality to be implemented.");
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Patient Records</h3>
        <button
          onClick={handleAddClick}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        >
          Add +
        </button>
      </div>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-600">SN</th>
            <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-600">Date</th>
            <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-600">Type of Illness</th>
            <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-600">Remarks</th>
            <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-600">Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b border-gray-300">{index + 1}</td>
              <td className="px-4 py-2 border-b border-gray-300">{record.date}</td>
              <td className="px-4 py-2 border-b border-gray-300">{record.typeOfIllness}</td>
              <td className="px-4 py-2 border-b border-gray-300">{record.remarks}</td>
              <td className="px-4 py-2 border-b border-gray-300">
                <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientRecords;
