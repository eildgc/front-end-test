/* Instruments */
import { i18nApiSlice } from './features/i18n-api-slice'
import { i18nSlice } from './features/i18n-slice'

export const reducer = {
  i18n: i18nSlice.reducer,
  [i18nApiSlice.reducerPath]: i18nApiSlice.reducer,
}
