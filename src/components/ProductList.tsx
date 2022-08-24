import * as React from 'react';
import type { StoredProduct } from '../interfaces/api';
import ListItem from './ListItem';

function ProductList() {
  const [products, setProducts] = React.useState<StoredProduct[]>([
    { id: 0, name: 'Butter', qty: 20, unit: 'g' },
    { id: 2, name: 'Tomato', qty: 3, unit: 'pieces' },
    { id: 1, name: 'Bread', qty: 2, unit: 'slices' },
  ]);

  const handlePropChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    key: keyof StoredProduct
  ) => {
    const productsCopy = [...products];

    if (key === 'qty' || key === 'id') {
      productsCopy[index][key] = event.target.valueAsNumber || 0;
    } else {
      productsCopy[index][key] = event.target.value;
    }

    setProducts(productsCopy);
  };

  const addProduct = () => {
    // takes list of products, sorts it by their IDs, grabs the highest ID
    const productsCopy = [...products];
    productsCopy.sort((a, b) => b.id - a.id);
    const highestId = productsCopy[0].id;

    setProducts([
      ...products,
      { id: highestId + 1, name: '', qty: 0, unit: '' },
    ]);
  };

  const handleDelete = (index: number) => {
    const productsCopy = [...products];
    productsCopy.splice(index, 1);

    setProducts(productsCopy);
  };

  return (
    <div className="">
      <form>
        <ul>
          {products.map((product, index) => (
            <ListItem
              product={product}
              handlePropChange={handlePropChange}
              handleDelete={handleDelete}
              index={index}
            />
          ))}
        </ul>
      </form>
      <button
        className="bg-blue-700 px-8 text-gray-100 mt-8 rounded p-2 block"
        type="button"
        onClick={addProduct}
      >
        Add new ingredient
      </button>
      <button
        className="bg-green-800 px-8 text-gray-100 mt-8 rounded p-2 block"
        type="submit"
        disabled
      >
        Save ingredient list
      </button>
    </div>
  );
}

export default ProductList;
