import * as React from 'react';

function ProductList() {
  const [products, setProducts] = useState([
    { id: 0, name: 'Butter', qty: 20, unit: 'g' },
    { id: 1, name: 'Bread', qty: 2, unit: 'slices' },
  ]);

  const handleNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const ProductsCopy = [...products];
    ProductsCopy[index].name = event.target.value;

    setProducts(ProductsCopy);
  };

  const addProduct = () => {
    setProducts([...products, { name: '', qty: 0, unit: '' }]);
  };
  return (
    <ul>
      <li>
        <input
          type="text"
          value={product.name}
          onChange={(event) => handleNameChange(event, index)}
        />
      </li>
    </ul>
  );
}

export default ProductList;
