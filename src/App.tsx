import * as React from 'react';
import { supabaseClient } from './supabaseClient';
import { Products, Recipes } from './interfaces/api';

function App() {
  const [count, setCount] = React.useState(0);
  const [data, setData] = React.useState<Products[]>([]);

  const loadData = async () => {
    const { data, error } = await supabaseClient.from('products').select();
    // .eq('id', 5); //

    if (!error) {
      setData(data);
    }
  };

  React.useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <h1>Foodie Collection Inc</h1>
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
