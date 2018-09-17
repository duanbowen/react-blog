import State from '../store/example';

const updateTitleReducer = (state = State, { type, payload }) => {
  switch (type) {
    case "updateTitle":
      return {...state, ...payload }; // @babel/plugin-proposal-object-rest-spread {}
    default:
      break;
  }
}

export default updateTitleReducer