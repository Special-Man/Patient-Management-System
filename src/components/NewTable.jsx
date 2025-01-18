import React from "react";

const NewTable = ({ columns, data }) => {
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
                      <label>
                        <input
                          type="checkbox"
                          readOnly
                        />{" "}
                        {row.time1}
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          readOnly
                        />{" "}
                        {row.time2}
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          readOnly
                        />{" "}
                        {row.time3}
                      </label>
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
