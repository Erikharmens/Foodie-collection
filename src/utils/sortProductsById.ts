interface SortableItem {
  id: number;
}

const sortProductsById = (input: Array<SortableItem>) => {
  // make a copy of the array
  const arrCopy = [...input];
  // sort the array
  arrCopy.sort((a, b) => a.id - b.id);
  // return sorted copy of array
  return arrCopy;
};

export default sortProductsById;
