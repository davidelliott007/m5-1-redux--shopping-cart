const initialState = {};

export default function cartreducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: 1,
        },
      };
    }

    case "REMOVE_ITEM": {
      const stateCopy = { ...state }; // New object we CAN mutate

      delete stateCopy[action.item.id];
      console.log(stateCopy);
      return stateCopy;
    }

    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
