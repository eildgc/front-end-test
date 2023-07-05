/* Core */
import { AnyAction, Dispatch, Middleware } from '@reduxjs/toolkit'
import { i18nApiSlice } from './features/i18n-api-slice'
// import { createLogger } from 'redux-logger'

const middleware: Middleware<{}, any, Dispatch<AnyAction>>[] = [
  // createLogger({
  //   duration: true,
  //   timestamp: false,
  //   collapsed: true,
  //   colors: {
  //     title: () => '#139BFE',
  //     prevState: () => '#1C5FAF',
  //     action: () => '#149945',
  //     nextState: () => '#A47104',
  //     error: () => '#ff0005',
  //   },
  //   predicate: () => typeof window !== 'undefined',
  // }),
  i18nApiSlice.middleware,
]

export { middleware }
