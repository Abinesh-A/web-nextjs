const initState={
    isAuthenticate:false,
    data:{
        name:"",
        email:""
    }
}
export default function reducer(state=initState,action){
    switch (action.type) {
        case "SIGNIN":
            return{
                ...state,
                isAuthenticate:true,
                data:{
                    name:action.payload.name,
                    email:action.payload.email
                }
            }
        case "SIGNOUT":
            return{
                ...state,
                isAuthenticate:false,
                data:{
                    name:"",
                    email:""
                }
            }
        default:
            return {
                state
            }
    }
}