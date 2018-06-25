import types from "../actionTypes";
const initialState = { data: [] };

const slidesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SLIDES: {
      return Object.assign({}, state, { data: action.payload });
    }
    default:
      return state;
  }
};

export default slidesReducer;
