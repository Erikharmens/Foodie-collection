import React from 'react';

const List = () => {
  return (
    <div>
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
          Profile
        </li>
        <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
          Settings
        </li>
        <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
          Messages
        </li>
        <li className="py-2 px-4 w-full rounded-b-lg">Download</li>
      </ul>
    </div>
  );
};

export default List;
