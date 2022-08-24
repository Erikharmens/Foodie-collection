import React from 'react';
import type { StoredProduct } from '../interfaces/api';

type Props = {
  product: StoredProduct;
  index: number;
  handleDelete: (index: number) => void;
  handlePropChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    key: keyof StoredProduct
  ) => void;
};

const ListItem = ({
  product,
  handlePropChange,
  handleDelete,
  index,
}: Props) => (
  <li>
    <label
      aria-label="ingredient"
      htmlFor="ingredient"
      className="mr-2 text-sm text-blue-900"
    >
      Ingredient:
      <input
        id="ingredient"
        className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg p-2 m-2 ml-2 "
        type="text"
        value={product.name}
        onChange={(event) => handlePropChange(event, index, 'name')}
      />
    </label>

    <label
      aria-label="quantity"
      htmlFor="quantity"
      className="mx-2 text-sm text-blue-900"
    >
      Quantity:
      <input
        id="quantity"
        className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg p-2 ml-2"
        type="number"
        value={product.qty}
        onChange={(event) => handlePropChange(event, index, 'qty')}
      />
    </label>
    <label
      aria-label="unit"
      htmlFor="unit"
      className="mx-2 text-sm text-blue-900"
    >
      Unit:
      <input
        id="unit"
        className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg p-2 w-24 ml-2"
        type="text"
        value={product.unit}
        onChange={(event) => handlePropChange(event, index, 'unit')}
      />
    </label>

    <button
      className=" bg-red-900 px-8 text-gray-200 p-1 rounded ml-2"
      type="button"
      onClick={() => handleDelete(index)}
    >
      Remove
    </button>
  </li>
);

export default ListItem;
