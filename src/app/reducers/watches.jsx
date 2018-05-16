export const initialState = {
  watches: [],
}

export default function watchesReducer(state = initialState, action) {

  if (action.type === "GET_ALL_WATCHES") {
    console.log('REDUCER', action.data);

    return{
      ...state,
      watches: action.data
    }

    console.log(state);
  }

  return state;
}