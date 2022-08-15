import * as React from 'react';

interface Product {
  name: string;
  qty: number;
  unit: string;
  id: number;
}

function ProductList() {
  const [products, setProducts] = React.useState<Product[]>([
    { id: 0, name: 'Butter', qty: 20, unit: 'g' },
    { id: 1, name: 'Bread', qty: 2, unit: 'slices' },
    { id: 2, name: 'Tomato', qty: 3, unit: 'pieces' },
  ]);

  const handleNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const productsCopy = [...products];
    productsCopy[index].name = event.target.value;

    setProducts(productsCopy);
  };

  const addProduct = () => {
    setProducts([...products, { name: '', qty: 0, unit: '' }]);
  };

  const handleDelete = (index: number) => {
    const productsCopy = [...products];
    productsCopy.splice(index, 1);

    setProducts(productsCopy);
  };

  return (
    <div className="grid-cols-4">
      <ul>
        {products.map((product, index) => (
          <li>
            {product.id}
            <input
              className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg p-2"
              type="text"
              value={product.name}
              onChange={(event) => handleNameChange(event, index)}
            />
            <input
              className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg p-2"
              type="number"
              value={product.qty}
              onChange={(event) => handleNameChange(event, index)}
            />
            <input
              className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg p-2 w-24"
              type="text"
              value={product.unit}
              onChange={(event) => handleNameChange(event, index)}
            />
            <button
              className="bg-red-900 px-8 text-gray-200 p-1 rounded ml-2"
              type="button"
              onClick={handleDelete}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        className="bg-blue-900 px-8 text-gray-100 mt-8 rounded p-2"
        type="button"
        onClick={addProduct}
      >
        Add new ingredient
      </button>
      <br />
      {JSON.stringify(products)}
    </div>
  );
}

export default ProductList;
