const updateNestedObject = obj => {
  return JSON.parse(JSON.stringify(obj));
};

const stateHelper = {
  updateNestedObject,
};

export { stateHelper };
