import React from 'react';
import Dropdown from './Dropdown';
import type { StoredProduct } from '../interfaces/api';

type Props = {
  product: StoredProduct;
  index: number;
  handleDelete: (index: number) => void;
  handlePropChange: (
    event: { target: { value: string } },
    index: number,
    key: keyof StoredProduct
  ) => void;
};

const ListItem = ({
  product,
  handlePropChange,
  handleDelete,
  index,
}: Props) => {
  const changeUnit = (newValue: string, index: number) =>
    handlePropChange({ target: { value: newValue } }, index, 'unit');

  return (
    <li>
      <label
        htmlFor={`ingredient-${product.id}`}
        className="mrd-2 text-sm text-blue-900"
      >
        Ingredient:
      </label>
      <input
        id={`ingredient-${product.id}`}
        className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg p-2 m-2 ml-2 "
        type="text"
        value={product.name}
        onChange={(event) => handlePropChange(event, index, 'name')}
      />

      <label
        htmlFor={`quantity-${product.id}`}
        className="mx-2 text-sm text-blue-900"
      >
        Quantity:
      </label>
      <input
        id={`quantity-${product.id}`}
        className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg p-2 ml-2"
        type="number"
        value={product.qty}
        onChange={(event) => handlePropChange(event, index, 'qty')}
      />

      <label
        htmlFor={`unit-${product.id}`}
        className="mx-2 text-sm text-blue-900"
      >
        Unit:
      </label>
      <div className="inline-flex w-20">
        <Dropdown
          items={['g', 'pcs', 'ml', 'km/h']}
          id={`unit-${product.id}`}
          value={product.unit}
          setValue={(newVal) => changeUnit(newVal, index)}
        />
      </div>
      <button
        className=" bg-red-900 px-8 text-gray-200 p-1 rounded ml-2"
        type="button"
        onClick={() => handleDelete(index)}
      >
        Remove
      </button>
    </li>
  );
};

export default ListItem;
