/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: I18nSliceState = {
  language: 'es',
}

export const i18nSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<'es' | 'en'>) => {
      state.language = action.payload
    },
  },
});

/* Types */
export interface I18nSliceState {
  language: 'es' | 'en';
}

export const { setLanguage } = i18nSlice.actions;