const active = (state = 0, action) => {
  switch (action.type) {
    case "active": {
      let active = action.value.filter((prev) => {
        if (!prev.flag) {
          return prev;
        }
      });

      state = active;
      return [...state];
    }
    case "completed":{
        let active = action.value.filter((prev) => {
            if (prev.flag) {
              return prev;
            }
          });
          state = active;
          return [...state];
    }


    default:
      return state;
  }
};

export default active
