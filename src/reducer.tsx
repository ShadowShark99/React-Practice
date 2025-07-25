export const reducer = (state, action) => {
  switch (action.type) {
      case "incremented_count": {
        return { count: state.count + 1 };
      }
      case "decremented_count": {
        return { count: state.count - 1 };
      }
      case "set_count": {
        return { count: action.value };
      }
      default: {
        throw new Error("unknown action: " + action.type);
      }
    }
};