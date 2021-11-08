import uuid from 'uuid';

export default function manageBand(state = {
  bands: [],
}, action) {
  // console.log(action);
  switch(action.type) {
    case "ADD_BAND":
      const band = {
        id: uuid(),
        text: action.name,
      };
      return {...state, bands: state.bands.concat(band)}
    default:
      return state
  
  }
};
