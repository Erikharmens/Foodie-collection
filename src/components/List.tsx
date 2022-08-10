import * as React from 'react';
import { supabaseClient } from '../supabaseClient';
import { Product, Recipe } from '../interfaces/api';

const List = () => {
  const [data, setData] = React.useState<Product[]>([]);
  const [inputValue, setInputValue] = React.useState<HTMLInputElement>();

  const loadData = async () => {
    const { data, error } = await supabaseClient.from('products').select();

    if (!error) {
      setData(data);
    }
  };

  React.useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <h1>In storage:</h1>
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
          Profile
        </li>
        <input type="number" placeholder="Quantity" />
        <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
          Settings
        </li>
        <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
          Messages
        </li>
        <li className="py-2 px-4 w-full rounded-b-lg">Download</li>
      </ul>

      <div className="card">{JSON.stringify(data)}</div>
    </>
  );
};

export default List;
