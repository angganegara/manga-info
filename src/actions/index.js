import axios from 'axios';

export const enterSearch = search => ({ type: 'ENTER_SEARCH', search })
export const searchManga = search => (dispatch, getState) => {
  dispatch({ type: 'TOGGLE_SEARCH_LOADING' });
  dispatch({ type: 'RESET_SEARCH_RESULT' });
  axios.get('/database.json')
    .then(res => dispatch({ type: 'SEARCH_MANGA_SUCCESS', manga: res.data.manga }))
    .then(() => dispatch({ type: 'TOGGLE_SEARCH_LOADING' }));
}
//export const searchMangaSuccess = manga => ({ type: 'SEARCH_MANGA_SUCCESS', manga });
export const toggleSearchLoading = () => ({ type: 'TOGGLE_SEARCH_LOADING' });
export const toggleView = view => ({ type: 'TOGGLE_VIEW', view });

export const addManga = manga => ({ type: 'ADD_MANGA', manga });
export const removeManga = id => ({ type: 'REMOVE_MANGA', id });