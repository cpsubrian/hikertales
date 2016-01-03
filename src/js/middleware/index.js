import logger from './logger'
import thunk from './thunk'

export const before = [
  thunk,
  logger
]

export const after = [
  logger
]
