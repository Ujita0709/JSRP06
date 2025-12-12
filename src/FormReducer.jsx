export default function formReducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };
    case "setAge":
      return { ...state, age: action.payload };
    case "setHobby":
      return { ...state, hobby: action.payload };
    default:
      return state;
  }
}
