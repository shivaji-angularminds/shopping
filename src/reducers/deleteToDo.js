const deleteToDo = (state=[], action) => {
  switch (action.type) {
    case "deleteToDo": {
      return [...state];
    }
    default: {
      return state;
    }
  }
};

export default deleteToDo;
