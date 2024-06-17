import React, { useState } from 'react';

const initialData = [
  { name: 'apple', color: 'red', score: 5 },
  { name: 'banana', color: 'yellow', score: 8 },
  { name: 'orange', color: 'orange', score: 4 },
  { name: 'grapes', color: 'purple', score: 7 },
  { name: 'mango', color:'green', score: 10},
];

function Table() {
  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });

  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className='ml-[300px]'>
      <table className="w-[400px] text-center  border-collapse border border-gray-400">
        <thead>
          <tr>
            <th
              className="border p-2 cursor-pointer"
              onClick={() => requestSort('name')}
            >
              Name {sortConfig.key === 'name' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
            </th>
            <th className="border p-2">
              Color
            </th>
            <th
              className="border p-2 cursor-pointer"
              onClick={() => requestSort('score')}
            >
              Score {sortConfig.key === 'score' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={index} className="border">
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">
                <span className={`inline-block w-4 h-4 `} style={{ backgroundColor: item.color }}></span>
              </td>
              <td className="border p-2">{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
