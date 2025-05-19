import { fW as dateFormat } from "./index-2X4RXSdq.js";
const convertToDisplayDateComponents = (fullDate) => {
  const mask = `d mmm${new Date(fullDate).getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? "" : ", yyyy"}#HH:MM:ss`;
  const formattedDate = dateFormat(fullDate, mask);
  const [date, time] = formattedDate.split("#");
  return { date, time };
};
function convertToDisplayDate(fullDate) {
  const mask = `mmm d${new Date(fullDate).getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? "" : ", yyyy"}#HH:MM:ss`;
  const formattedDate = dateFormat(fullDate, mask);
  const [date, time] = formattedDate.split("#");
  return { date, time };
}
const toDayMonth = (fullDate) => dateFormat(fullDate, "d mmm");
const toTime = (fullDate, includeMillis = false) => dateFormat(fullDate, includeMillis ? "HH:MM:ss.l" : "HH:MM:ss");
export {
  toDayMonth as a,
  convertToDisplayDateComponents as b,
  convertToDisplayDate as c,
  toTime as t
};
