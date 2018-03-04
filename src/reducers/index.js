const deepFreeze = require('deep-freeze');
const ls = window.localStorage;
const localData = ls.getItem('localData');

const initialState = localData ? JSON.parse(localData) : {
  books: [],
  search: '',
  searchResult: [],
  searchLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ENTER_SEARCH':
      return {
        ...state,
        search: action.search
      }
    case 'TOGGLE_SEARCH_LOADING':
      return {
        ...state,
        searchLoading: !state.searchLoading
      }
    case 'RESET_SEARCH_RESULT':
      return {...state, searchResult: []}
    case 'SEARCH_MANGA_SUCCESS':
      return {
        ...state,
        searchResult: action.manga.filter(book => {
          return book.t.toLowerCase().includes(state.search.toLowerCase());
        })
      }

    case 'ADD_MANGA':
      return {
        ...state,
        books: [...state.books, action.manga]
      };
    case 'REMOVE_MANGA':
      return {
        ...state,
        books: state.books.filter(book => book.i !== action.id )
      }
    default:
      return state;
  }
}

export default reducer;