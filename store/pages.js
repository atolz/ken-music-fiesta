// Initial state
const initialState = {
  activePage: "Dashboard",
};

// Reducer
export const PageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "page/setActivePage":
      return { ...state, activePage: action.page };
    default:
      return { ...state };
  }
};

// Selectors
export const getPage = (state) => {
  return state.page.activePage;
};

// Actions
export const setActivePage = (page) => {
  console.log("Setting active page", page);
  return { type: "page/setActivePage", page };
};
