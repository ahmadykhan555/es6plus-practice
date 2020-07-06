const fetch = require("node-fetch");
const greet = () => {
  console.log("Hello world!");
};

const demoStringInterpolation = (name, expertise) => {
  console.log(`${name} ::: ${expertise}`);
};

const demoObjectDestructuring = () => {
  const demoObj = { name: "AYK", expertise: "software engineer" };
  const { name, expertise } = demoObj;
  console.log(name, " ", expertise);
};

const demoArrayDestructuring = () => {
  const demoArray = ["AYK", "25", "software engineer"];
  const [name, age, expertise] = demoArray;
  console.log(`${name} ${age} ${expertise}`);
};

const demoObjectLiterals = (city, country) => {
  // if keys are same as variable name, simply do this
  console.log({ city, country });
};

const demoForOfLoop = () => {
  // used for iterables
  // Look up what qualifies as an iterable
  const demoArray = [100, 200, 300];
  let sum = 0;
  for (let num of demoArray) {
    sum += num;
  }
  console.log(`Sum is ${sum}`);
};

const demoSpreadOperator = () => {
  /**
   * Uses ... syntax
   * helps unwrap object/array in to a new copy
   * copy is by value NOT by reference
   */

  //  demo with arrays
  const demoArray = [1, 2, 3];
  const copyDemoArray = [...demoArray];
  copyDemoArray.push("tail");
  console.log(
    `Original Array: ${demoArray}, Copied by spreading: ${copyDemoArray}`
  );

  //  demo with objects
  const demoObj = { name: "AYK", expertise: "Software Engineer" };
  const copyDemoObj = { ...demoObj };
  copyDemoObj.age = 25;
  console.log(
    "Original Object: ",
    demoObj,
    "Copied by spreading: ",
    copyDemoObj
  );
};

const demoDynamicSumWithRest = (...args) => {
  /**
   * Used for destructuring arguments
   * makes arguments available in an array
   * this example demos how sum can be calculated for any number of args
   */

  let sum = 0;
  for (let num of args) sum += num;
  console.log(`Sum: ${sum}`);
};

const demoDefaultParams = (numArray = []) => {
  console.log(`Array of length ${numArray.length} was passed`);
};

const demoArrayIncludes = (demoArray = [], toCheck = "") => {
  /**
   * Checks if a value is contained in an array
   * better when we only want to check if a value exists as opposed to its index
   * returns a boolean
   */
  console.log(demoArray.includes(toCheck));
};

const demoPadStartEnd = (desiredLength = 0) => {
  /**
   * cases where we need a string to be of some desired length
   * we can use fillers for that
   * to add to the start use padStart()
   * to add to the end use padEnd()
   */
  const name = "Ahmad";
  console.log(name.padEnd(desiredLength, "."));
  console.log(name.padStart(desiredLength, "."));
};

const demoAsyncAwait = async () => {
  /**
   * Built on top of promises
   * use async keyword before a function to get access to the await keyword
   * await waits for the promise to resolve before moving to the next line of code
   * any line after await halts until promise is resolved
   */
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json = await response.json();
  console.log(json[0]);
};
// execute
(() => {
  // demoStringInterpolation('AYK', 'software engineer');
  // demoObjectDestructuring();
  // demoArrayDestructuring()
  // demoObjectLiterals('Islamabad', 'Pakistan');
  // demoForOfLoop()
  // demoSpreadOperator()
  // demoDynamicSumWithRest(1,2,3,4,5,6,1,12,2,4)
  // demoDynamicSumWithRest(1,2)
  // demoDynamicSumWithRest(1,2,3,4)
  // demoDefaultParams()
  // demoDefaultParams([1,2,3])
  // demoArrayIncludes([1,2,3], 3)
  // demoPadStartEnd(10)
  //   demoAsyncAwait();
})();
