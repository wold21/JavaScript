const settings = {
  color: {
    chosen_color: "dark",
  },
};

let chosenColor = "blue";

console.log(chosenColor);

// 이렇게 하면 let 변수를 편하게 업데이트 할 수 있다.
({
  color: { chosen_color: chosenColor = "light" },
} = settings);

console.log(chosenColor);
