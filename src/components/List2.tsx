import * as React from 'react';
import { supabaseClient } from '../supabaseClient';
import { Product, Recipe } from '../interfaces/api';

const List = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [inputValue, setInputValue] = React.useState<HTMLInputElement>();

  const loadData = async () => {
    const { data, error } = await supabaseClient.from('products').select();

    if (!error) {
      setProducts(data);
    }
  };

  React.useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <h1>In storage: {products.length}</h1>
      <div>
        <ul>
          {products.map((product) => (
            <label htmlFor={product.title}>
              <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
        </div>
              <li key={product.id}>{product.title}</li>
            </label>
          ))}
        </ul>
      </div>
      <div className="card mt-8">{JSON.stringify(products)}</div>
    </>
  );
};

export default List;
