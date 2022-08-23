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
    <label htmlFor="ingredient" className="mx-2 text-sm text-blue-900">
      Ingredient:
    </label>
    <input
      id="ingredient"
      className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg p-2 mb-2"
      type="text"
      value={product.name}
      onChange={(event) => handlePropChange(event, index, 'name')}
    />

    <label htmlFor="quantity" className="mx-2 text-sm text-blue-900">
      Quantity:
    </label>
    <input
      id="quantity"
      className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg p-2 mb-2"
      type="number"
      value={product.qty}
      onChange={(event) => handlePropChange(event, index, 'qty')}
    />
    <label htmlFor="unit" className="mx-2 text-sm text-blue-900">
      Unit:
    </label>
    <input
      id="unit"
      className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg p-2 w-24 mb-2"
      type="text"
      value={product.unit}
      onChange={(event) => handlePropChange(event, index, 'unit')}
    />
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
