import * as React from 'react';
import { supabaseClient } from './supabaseClient';
import { Product, Recipe } from './interfaces/api';
import Button from './components/Button';

function App() {
  const [count, setCount] = React.useState(0);
  const [data, setData] = React.useState<Product[]>([]);

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
      <div className="container mx-auto py-8 px-8 rounded-md bg-blue-100">
        <h1 className="font-bold leading-tight pb-4 text-4xl text-gray-800">
          Foodie Collection
        </h1>
        <h2 className="font-medium leading-tight text-2xl pb-4 text-blue-500">
          Don&apos;t know what to eat? We have{' '}
          <span className="font-bold text-blue-600">{data.length}</span> recipes
          for your next meal!
        </h2>
        <h2 className="font-light text-2xl text-black-400 pb-8">
          Grab your food items and find a recipe that fits your inventory
        </h2>
        <Button
          border="none"
          color="#e9e9e9"
          backgroundColor="#213f76"
          height="40px"
          onClick={() => console.log('You clicked me')}
          radius="4px"
          width="120px"
          children="Click me"
        />
      </div>

      <h1 className="">Foodie Collection Inc</h1>
      <div className="card">
        {JSON.stringify(data)}
        <button
          type="button"
          className="bg-blue-400"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count} {import.meta.env.VITE_SUPABASE_URL}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
