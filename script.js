require("dayjs.min.js");

let dPast = "August 1, 2022";
let d1 = dayjs();
let d2 = dayjs(dPast);

let m = Math.round(d1.diff(d2, "month", true));

let y = Math.floor(m / 12);
if (y == 0) {
  alert(`\n${m} months since ${dPast}`);
} else {
  m = m % 12;
  if (m == 0) {
    alert(`${y} years since ${dPast}`);
  } else {
    alert(`${y} years, ${m} months since ${dPast}`);
  }
}
