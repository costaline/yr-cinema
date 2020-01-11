export const getFilms = (state) => {
  return state.films.films.data;
};

export const getTotal = (state) => {
  return state.films.films.total;
};

export const getLoading = (state) => {
  return state.films.loading;
};

export const getError = (state) => {
  return state.films.error;
};
