const initialState = {
  mapCenter: { lat: 35.6895, lng: 139.6917 },
  selectedDrone: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MAP_CENTER':
      return Object.assign({}, state, { mapCenter: action.center });
    default:
      return state;
  }
};

export default reducer;
