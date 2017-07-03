/**
 * Created by serj on 6/21/17.
 */

let testReducer = function(test={}, action) {
    console.log(action);
    switch (action.type) {
        case 'TEST':
            return {};
            break;
        default:
            return test;
    }
}

export default testReducer
