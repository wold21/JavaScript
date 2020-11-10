// rest parameters
// 모든 값을 하나의 변수로 축소 시켜줌.
// ...ho에 해당.
// 인자로 들어가게 되면 rest이다.
// array 형태로 반환한다.
const infiniteArgs = (...ho) => console.log(ho);

infiniteArgs("1", 2, 3, true, "lalalala", [1, 2, 3, 4]);

const bestFriendsMaker = (firstOne, ...rest) => {
  console.log(`My best friends is ${firstOne}`);
  console.log(rest);
};

bestFriendsMaker("z", "d", "e", "t", "a");
