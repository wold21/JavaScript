// Variable Swapping
let mon = "Sat";
let sat = "Mon";

[sat, mon] = [mon, sat];
console.log(mon, sat);

//Skipping
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const [, , , thu, fri] = days;
console.log(thu, fri);
