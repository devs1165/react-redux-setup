export function test(){
    return function(dispatch){
        dispatch({
            type : "TEST"
        })
    }
}