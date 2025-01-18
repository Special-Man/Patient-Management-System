import React from 'react';

const Table = ({ columns, data, onEdit, onDelete, onNameClick }) => {
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
              <td className="py-2 px-4 border-b border-gray-200">{index + 1}</td> {/* Serial Number */}
              {columns
                .filter((col) => col.key !== 'actions')
                .map((column) => (
                  <td
                    key={column.key}
                    className={`py-2 px-4 border-b border-gray-200 ${
                      column.key === 'name' ? 'text-blue-500 cursor-pointer hover:underline' : ''
                    }`}
                    onClick={
                      column.key === 'name' ? () => onNameClick(row[column.key]) : undefined
                    } // Handle name click
                  >
                    {row[column.key]}
                  </td>
                ))}
              <td className="py-2 px-4 border-b border-gray-200">
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(row.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(row.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
