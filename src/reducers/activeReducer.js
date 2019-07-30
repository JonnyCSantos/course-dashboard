import { dataReducer } from './dataReducer'
  
export const activeReducer = (state = dataReducer, action) => {
  switch (action.type) {
    case 'CLICK_UPDATE_VALUE':
      return {
        ...state,
        moduleActive: action.moduleActive,
        leassonActive: action.leassonActive
      };
    default:
      return state;
  }
};