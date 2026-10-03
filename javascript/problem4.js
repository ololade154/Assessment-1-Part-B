const createCounter = () => {
  //This function creates a counter object with increment, decrement methods and a value property.
  let count = 0;
  return {
    //increment method increases the count by 1
    increment() {
      count += 1;
    },
    //decrement method decreases the count by 1
    decrement() {
      count -= 1;
    },
    //value property returns the current count value
    get value() {
      return count;
    },
  };
};
const counter = creteCounter();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.value);
console.log(counter.count);
