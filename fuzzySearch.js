export default async (array, inputValue) => {
  return array.filter(object => filterObject(object, inputValue));
};

const filterObject = (object, inputValue) => {
  let newObj;
  Object.values(object).filter(item => {
    if (normalizeValue(item).search(normalizeValue(inputValue)) !== -1) {
      newObj = object;
    }
    return null;
  });
  return newObj;
}
// strip non-alphanumeric characters and make all lowercase strings
const normalizeValue = value => value.toString().toLowerCase().replace(/\W/g, '');
