/*************************************************
 * #1 Фильтрация строки
 */

// Вариант 1
function getVowels(string) {
  const VOWELS = 'аеёиоуыэюя';
  result = [];
  for (let i = 0; i < string.length; i++) {
    if (VOWELS.includes(string[i])) {
      result.push(string[i]);
    }
  }

  return result.join('');
}

// Вариант 2
function getVowels(string) {
  const VOWELS = 'аеёиоуыэюя';
  array_of_symbols = string.split('');
  for (let i = string.length; i >= 0; i--) {
    if (!VOWELS.includes(string[i])) {
      array_of_symbols.splice(i, 1);
    }
  }

  return array_of_symbols.join('');
}

// Вариант 3
function getVowels(string) {
  const VOWELS = 'аеёиоуыэюя';
  const listOfVowels = string
    .split('')
    .filter((symbol) => VOWELS.includes(symbol));

  return listOfVowels.join('');
}

const string = 'Привет! Как дела?';
console.log(getVowels(string));


/*************************************************
 * #2 Выборка объекта
 */

// Вариант 1
function getWorthyWorkers(workers) {
  let result = [];
  for (let i = 0; i < workers.length; i++) {
    if (workers[i]['salary'] > 1000) {
      result.push(workers[i]);
    }
  }

  return result;
}

// Вариант 2
function getWorthyWorkers(workers) {
  let result = [];
  for (let worker of workers) {
    if (worker['salary'] > 1000) {
      result.push(worker);
    }
  }

  return result;
}

// Вариант 3
function getWorthyWorkers(workers) {
  return workers.filter((worker) => worker.salary > 1000);
}

const workers = [
  { name: 'John', salary: 500 },
  { name: 'Mike', salary: 1300 },
  { name: 'Linda', salary: 1500 },
];
console.log(getWorthyWorkers(workers));


/*************************************************
 * #3 Анализ строки
 */

// Вариант 2
function isHtml(path) {
  const lastElement = path.split('/').pop();
  if (lastElement.split('.').pop() === 'html') {
    return true;
  } else {
    return false;
  }
}

// Вариант 3
function isHtml(path) {
  return path.endsWith('.html');
}

const path = '/users/download/index.html';
console.log(isHtml(path));


/*************************************************
 * Доп.: Фильтрация массива
 */

const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];
const isEven = (num) => {
  return num % 2 === 0;
};

function filterArray(array, fn) {
  result = [];
  for (num of array) {
    if (fn(num)) {
      result.push(num);
    }
  }

  return result;
}

console.log(filterArray(mixedArray, isEven));
