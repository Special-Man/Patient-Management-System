import React, { useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";

const NewTable = ({ columns, data }) => {
  const [checkedState, setCheckedState] = useState(
    data.map(() => ({ "9 AM": false, "12 PM": false, "9 PM": false }))
  );

  const handleCheckboxChange = (rowIndex, time) => {
    setCheckedState((prevState) => {
      const newState = [...prevState];
      newState[rowIndex][time] = !newState[rowIndex][time];
      return newState;
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-gray-700 font-semibold">
              S.N
            </th>
            {columns.map((column) => (
              <th
                key={column.key}
                className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-gray-700 font-semibold"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200">{index + 1}</td>
              {columns.map((column) => (
                <td key={column.key} className="py-2 px-4 border-b border-gray-200">
                  {column.key === "time" ? (
                    <div className="flex gap-4">
                      {["9 AM", "12 PM", "9 PM"].map((timeSlot) => (
                        <div key={timeSlot} className="flex items-center gap-2">
                          <Checkbox.Root
                            checked={checkedState[index][timeSlot]}
                            onCheckedChange={() => handleCheckboxChange(index, timeSlot)}
                            className="w-4 h-4 border border-gray-300 rounded bg-white hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                          >
                            <Checkbox.Indicator className="flex items-center justify-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            </Checkbox.Indicator>
                          </Checkbox.Root>
                          <label
                            htmlFor={`checkbox-${index}-${timeSlot}`}
                            className="text-sm text-gray-700"
                          >
                            {timeSlot}
                          </label>
                        </div>
                      ))}
                    </div>
                  ) : (
                    row[column.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewTable;
