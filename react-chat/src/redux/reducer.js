const reducer = (state, action) => {
    switch (action.type) {
    case 'ADD': {
    return {...state,
        messages: [...state.messages, action.payload]}
          }
    default: {
    return state;
    }
     }
     };
     export default reducer;
    