const initialState = {
  isAuthenticate: false,
  data: {
    name: "",
    email: "",
    imageUrl: "",
  },
  xox:{
    show:false,
    roomcode:"",
  }
};

export default function reducer(state = initialState, action) {
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
    case "XOX":
      return{
        ...state,
        xox:{
          show:action.payload.show,
          roomcode:action.payload.roomcode,
        },
      }  
    case "XOXCLEAR":
      return{
        ...state,
        xox:{
          show:action.payload.show,
          roomcode:action.payload.roomcode,
        },
      }  
    default:
      return { ...state };
  }
}
