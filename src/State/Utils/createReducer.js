/* eslint-disable no-prototype-builtins */
export const createReducer = (initialState, handlers) => {
  return (state, action) => {
    if (state === undefined) state = initialState;

    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
};
