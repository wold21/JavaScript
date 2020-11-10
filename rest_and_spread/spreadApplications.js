// Array
const friends = ["tazo", "hyuk"];

const newFriends = [...friends, "ap"];

console.log(newFriends);

const first = ["mon", "tue", "wed"];

const weeked = ["sat", "sun"];

const fullWeek = [...first, "thu", "fri", ...weeked];

console.log(fullWeek);

//--------------------------------------

// Object
const tazo = {
  username: "wold2180",
};

console.log({ ...tazo, password: 123 });

//--------------------------------------

// conditional

const lastName = prompt("Last name");
const user = {
  username: "tazo",
  //lastName: lastName !== "" ? lastName : undefined,
  ...(lastName !== "" && { lastName }),
  age: 26,
};

console.log(user);
