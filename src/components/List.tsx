import * as React from 'react';
import Button from './Button';

interface Props {
  withButtons: boolean;
  children?: React.ReactNode;
  title: string;
}

const List: React.FC<Props> = ({ children, title, withButtons = false }) => (
  <form>
    <div className="bg-gray-200  p-8 grid gap-6 mb-6 md:grid-cols-4">
      <div>
        <label
          for="first_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Ingredient
        </label>
        <input
          type="text"
          id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Butter..."
          required
        />
      </div>
      <div>
        <label
          for="last_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Quantity
        </label>
        <input
          type="number"
          id="last_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="40"
          required
        />
      </div>
      <div>
        <label
          for="last_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Unit
        </label>
        <select
          class="form-select appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
        >
          <option selected disabled>
            Select an unit
          </option>
          <option value="1">Gram</option>
          <option value="2">Kg</option>
          <option value="3">Deciliter</option>
          <option value="4">Liter</option>
        </select>
      </div>
      {withButtons && (
        <div className="justify-self-start self-end">
          <Button variant="primary" type="button" size="lg">
            Add
          </Button>
        </div>
      )}
    </div>
  </form>
);

export default List;
