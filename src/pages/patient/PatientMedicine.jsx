import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import NewTable from "../../components/NewTable";
import { fetchMedicationsByPatientId } from "../../service/medicationApi";

const PatientMedicine = () => {
  const patientId = Cookies.get("id"); // Get patient ID from cookies
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedMedicines = await fetchMedicationsByPatientId(patientId);
        setMedicines(
          fetchedMedicines.map((medicine) => ({
            id: medicine.id,
            name: medicine.medicine_name || "N/A", // Default value if undefined
            manufacturer: medicine.manufacturer || "N/A", // Default value if undefined
            price: medicine.price ? `RS. ${medicine.price}` : "N/A", // Default value if undefined
            time1: medicine.time1, // Time slot 1
            time2: medicine.time2, // Time slot 2
            time3: medicine.time3, // Time slot 3
          }))
        );
      } catch (error) {
        console.error("Error fetching medications:", error);
      }
    };

    fetchData();
  }, [patientId]);

  const columns = [
    { key: "name", label: "MEDICINE NAME" },
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
