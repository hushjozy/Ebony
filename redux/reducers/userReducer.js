const INITIAL_STATES = {
  isLoggedin: false,
  loading: false,
  token: "",
  error: "",
  isVerified: false,
  productsList: [],
};
export const userReducers = (state = INITIAL_STATES, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        token: payload,
        isLoggedin: true,
      };
    }
    case "PRODUCTS_LIST":
      return {
        ...state,
        productsList: payload,
        loading: false,
      };
    case "LOGOUT": {
      return {
        ...INITIAL_STATES,
        isLoggedin: FALSE,
        token: {},
      };
    }
    default:
      return state;
  }
};
