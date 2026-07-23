import React from 'react';
import { DashboardTableProps } from './DashboardTable.types';

export function DashboardTable<T extends { id?: string | number }>(
  props: DashboardTableProps<T>
) {
  const { data, columns, caption, isLoading } = props;

  return (
    <div className="w-full overflow-x-auto rounded-md border border-gray-200">
      <table className="w-full text-left text-sm text-gray-500">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-gray-50 text-xs uppercase text-gray-700">
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col" className="px-6 py-3 font-medium">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-4 text-center">
                Loading data...
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-6 py-4 text-center">
                No data available.
              </td>
            </tr>
          ) : (
            data.map((item, index) => {
              const rowKey = item.id ? String(item.id) : String(index);
              return (
                <tr key={rowKey} className="border-b bg-white hover:bg-gray-50 last:border-0">
                  {columns.map((column) => (
                    <td key={column.key} className="px-6 py-4">
                      {column.render
                        ? column.render(item[column.key], item)
                        : (item[column.key] as React.ReactNode)}
                    </td>
                  ))}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
