const initialState = {
  list: [],
};

// eslint-disable-next-line default-param-last
export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LIST': {
      return {
        ...state,
        list: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
