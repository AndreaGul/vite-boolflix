import { reactive } from 'vue';

export const store = reactive({
  searchKey: '',
  searchedFilm: [],
  searchedSeries: [],
  apiImgUrl: 'https://image.tmdb.org/t/p/w342',
  apiUrlFilm: 'https://api.themoviedb.org/3/search/movie',
  apiUrlSeries: 'https://api.themoviedb.org/3/search/tv',
  apiKey: '7de02f08dfce896da1642ad84ebce808',
});
