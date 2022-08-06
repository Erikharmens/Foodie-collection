import React from 'react';

const FoodTable = () => {
  return (
    <div>
      <div class="overflow-x-auto relative">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Food Recipe
              </th>
              <th scope="col" class="py-3 px-6">
                Meal per person
              </th>
              <th scope="col" class="py-3 px-6">
                Required items
              </th>
              <th scope="col" class="py-3 px-6">
                Estimated time
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Bowl of Cereal
              </th>
              <td class="py-4 px-6">1</td>
              <td class="py-4 px-6">2</td>
              <td class="py-4 px-6">2 min</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Butter Toast
              </th>
              <td class="py-4 px-6">1</td>
              <td class="py-4 px-6">2</td>
              <td class="py-4 px-6">7 min</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Tomato Soup
              </th>
              <td class="py-4 px-6">2</td>
              <td class="py-4 px-6">3</td>
              <td class="py-4 px-6">14 min</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodTable;
