import React from "react";
import NewTable from "../../components/NewTable";

const PatientMedicine = () => {
  const medicines = [
    {
      id: 1,
      name: "GOBULIN GREEN",
      manufacturer: "OSCORP ORG.",
      price: "RS. 30,000",
    },
    {
      id: 2,
      name: "LEXILON",
      manufacturer: "LUTHOR CORP",
      price: "RS. 25,999",
    },
    {
      id: 3,
      name: "BLISS",
      manufacturer: "ARKHAM CO.",
      price: "RS. 25,999",
    },
  ];

  const columns = [
    { key: "name", label: "PATIENTS NAME" },
    { key: "manufacturer", label: "MANUFACTURER" },
    { key: "price", label: "PRICE" },
    { key: "time", label: "TIME" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">YOUR MEDICINES</h1>
      <NewTable columns={columns} data={medicines} />

      <h1 className="text-xl font-bold mt-10 mb-4">YOUR RECENT MEDICAL RECORD</h1>
      <NewTable
        columns={[
          { key: "date", label: "DATE" },
          { key: "illness", label: "TYPE OF ILLNESS" },
          { key: "remarks", label: "REMARKS" },
          { key: "action", label: "ACTION" },
        ]}
        data={[
          {
            date: "FRI, 21 JUL 2024",
            illness: "ACROPHOBIA",
            remarks:
              "The extreme case of Acrophobia, well he did take the medicine 'Mountain Dew'...",
            action: (
              <button className="bg-blue-500 text-white px-3 py-1 rounded">
                VIEW RECORDS
              </button>
            ),
          },
        ]}
      />
    </div>
  );
};

export default PatientMedicine;
