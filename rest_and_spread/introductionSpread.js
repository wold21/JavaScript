// spread
// Variable spread
const friends = [1, 2, 3, 4];
console.log(friends);
console.log(...friends);

const family = ["a", "b", "c"];
console.log([...friends, ...family]);

//object spread
const sexy = {
  name: "tazo",
  age: 26,
};

const hello = {
  sexy: true,
  hello: "hello",
};

console.log({ ...sexy, ...hello });
