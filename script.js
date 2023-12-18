/* ------------------------------ TASK 5 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

function showObjectKeys(obj, keysToDisplay) {
  const keys = Object.keys(obj);
  console.log('Object keys:');
  
  const filteredKeys = keys.filter(key => keysToDisplay.includes(key));

  filteredKeys.forEach(key => {
    console.log(key);
  });
}

showObjectKeys(audi, ['make', 'model', 'year', 'color']);

function showObjectKeys(obj, valuesToDisplay) {
  console.log('Object keys and values:');
  
  Object.entries(obj).forEach(([key, value]) => {
    if (valuesToDisplay.includes(value)) {
      console.log(`${key}: ${value}`);
    }
  });
}

showObjectKeys(audi, ['audi', 'A6', 2005, 'white']);