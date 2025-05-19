import { gF as arrayMap, gG as getAllKeysIn, gH as baseIteratee, gI as basePickBy } from "./index-2X4RXSdq.js";
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}
export {
  pickBy as p
};
