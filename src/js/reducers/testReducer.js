export default function reducer(state = {
    testData : ""
}, action){
    switch(action.type){
        case "TEST" : {
            return { ...state, testData : "Added from redux action" }
        }

        default : {}
    }

    return state;
}