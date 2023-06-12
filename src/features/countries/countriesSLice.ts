import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios from 'axios';

interface CountryTranslations {
    [key: string]: string | undefined;
    common?: string;
}

interface Country {
    cca2: string;
    name: { common: string };
    alpha2Code: string;
    flags: { png: string };
    translations: {
        [key: string]: CountryTranslations;
    };
}

interface CountriesState {
    list: Country[];
    loading: boolean;
    error: string | null;
}

const initialState: CountriesState = {
    list: [],
    loading: false,
    error: null,
};

export const fetchCountries = createAsyncThunk('countries/fetch', async () => {
    const response = await axios.get<Country[]>('https://restcountries.com/v3.1/region/europe?fields=name,flags,cca2,translations');
    return response.data;
});

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Wystąpił błąd podczas ładowania państw.';
            });
    },
});

export const selectCountries = (state: RootState) => state.countries.list;
export const selectLoading = (state: RootState) => state.countries.loading;

export default countriesSlice.reducer;
