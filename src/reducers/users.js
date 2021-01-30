const INITIAL_STATE={
    students:[
    {
        name: 'ABC',
        email: 'abc@gmail.com'
    },
    {
        name: 'XYZ',
        email: 'xyz@gmail.com'
    }
]
}

export default function users(state = 
    INITIAL_STATE,action){
        switch (action.type) {
        case "USERS":
            return {
                ...state,
                ...action.users
            };
        default:
            return state;
    }
}