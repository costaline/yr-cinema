export const getFilms = (state) => {
  return state.films.films;
};

export const getLoading = (state) => {
  return state.films.loading;
};

export const getError = (state) => {
  return state.films.error;
};
