import * as React from 'react';
import { supabaseClient } from './supabaseClient';
import { Product, Recipe } from './interfaces/api';
import './index.css';
import Button from './components/Button';

function App() {
  const [count, setCount] = React.useState(0);
  const [egg, setEgg] = React.useState(0);
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
      </div>
      <div className="container mx-auto my-8 py-8 px-8 rounded-md bg-blue-100">
        <h2>Clicked {count} times</h2>
        <Button
          onClick={() => setCount((count) => count + 1)}
          variant="default"
          size="lg"
        >
          Default
        </Button>
        <Button
          onClick={() => console.log('Button 2 is clicked!')}
          variant="primary"
          size="lg"
        >
          Primary
        </Button>
        <Button
          onClick={() => console.log('Button 3 is clicked!')}
          variant="info"
          size="lg"
        >
          Info
        </Button>
        <Button
          onClick={() => console.log('Button 4 is clicked!')}
          variant="warning"
          size="lg"
        >
          Warning
        </Button>
        <Button
          onClick={() => console.log('Button 5 is clicked!')}
          variant="success"
          size="lg"
        >
          Success
        </Button>
        <Button
          onClick={() => console.log('Button 6 is clicked!')}
          variant="danger"
          size="lg"
        >
          Danger
        </Button>
        <Button
          onClick={() => console.log('Button 7 is clicked!')}
          variant="dark"
          size="lg"
        >
          Dark
        </Button>
        <Button
          onClick={() => console.log('Button 7 is clicked!')}
          variant="default"
          size="lg"
          disabled={true}
        >
          Disabled
        </Button>
      </div>

      <div className="container mx-auto py-8 px-8 rounded-md bg-blue-100">
        <h1 class="font-medium leading-tight text-3xl ml-2 mt-0 mb-2 text-blue-900">
          Eggs: {egg}
        </h1>
        <Button
          onClick={() => setEgg((egg) => egg + 1)}
          variant="primary"
          size="lg"
        >
          +
        </Button>
        <Button
          onClick={() => setEgg((egg) => egg - 1)}
          variant="primary"
          size="lg"
        >
          -
        </Button>
      </div>

      <h1 className="">Foodie Collection Inc</h1>
      <div className="card">{JSON.stringify(data)}</div>
    </>
  );
}

export default App;
