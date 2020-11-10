// rest의 훌륭한 점은 특정 속성 값을 제외시킬 수 있는 것이다.
// 오브젝트 정리하기.
const user = {
  name: "tazo",
  age: 26,
  password: 12345,
};

const killPassword = ({ password, ...rest }) => rest;

const cleanUser = killPassword(user);

console.log(cleanUser);

//---------------------------------------------------

const tazo = {
  name: "tazo",
  age: 26,
  password: 12345,
};

const setCountry = ({ country = "KR", ...rest }) => ({ country, ...rest });

console.log(setCountry(tazo));

//---------------------------------------------------

const hyuk = {
  NAME: "tazo",
  age: 26,
  password: 12345,
};

const rename = ({ NAME: name, ...rest }) => ({ name, ...rest });
console.log(hyuk);
console.log(rename(hyuk));
