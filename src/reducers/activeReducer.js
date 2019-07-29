const initialState = {
    newModule: '',
    newLeasson: ''
  };
  
  export const activeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CLICK_UPDATE_VALUE':
        return {
          ...state,
          newModule: action.newModule,
          newLeasson: action.newLeasson
        };
      default:
        return state;
    }
  };