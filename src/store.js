import {reactive} from 'vue';

export const store= reactive ({
    searchKey: '',
    SearchedFilm: [],
    apiUrl: 'https://api.themoviedb.org/3/search/movie',
    apiKey: '7de02f08dfce896da1642ad84ebce808',

})