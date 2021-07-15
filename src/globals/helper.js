export const trimObjectValues = obj => {
  Object.keys(obj).map(
    k => (obj[k] = typeof obj[k] == "string" ? obj[k].trim() : obj[k])
  );
};
