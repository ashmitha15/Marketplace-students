import { combineReducers } from 'redux';
const LOG_IN = 'LOG_IN';
const TYPE = 'TYPE';
const USER_ID = 'USER_ID'

export function logIn(data) {
  return {
    type: LOG_IN,
    data,
  }
}

export function type1(data) {
  return {
    type: TYPE,
    data
  }
}

export function userId(data) {
    return {
      type: USER_ID,
      data
    }
  }

const defaultState = [
  {
    userId: 0,
    logIn: false,
    type: ''
  }
];

function logData(state=defaultState, action) {
  switch (action.type) {
    case LOG_IN:
      return [
        ...state,
        {
            userId: action.data.userId,
            logIn: action.data.logIn,
            type: action.data.type,
        }
      ];
    // case INCREMENT_BIRD:
    //   const bird = state.find(b => action.bird === b.name);
    //   const birds = state.filter(b => action.bird !== b.name);
    //   return [
    //     ...birds,
    //     {
    //       ...bird,
    //       views: bird.views + 1
    //     }
    //   ];
    default:
      return state;
  }
}

const LogApp = combineReducers({
  logData
});

export default LogApp;