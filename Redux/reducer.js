const initState = {
  isAuthenticate: false,
  data: {
    name: "",
    email: "",
    imageUrl: "",
  },
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        isAuthenticate: true,
        data: {
          name: action.payload.name,
          email: action.payload.email,
          imageUrl: action.payload.imageUrl,
        },
      };
    case "SIGNOUT":
      return {
        ...state,
        isAuthenticate: false,
        data: {
          name: "",
          email: "",
          imageUrl: "",
        },
      };
    default:
      return {
        state,
      };
  }
}
