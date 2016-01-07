import _ from 'lodash'

export function combineSelectors (...selectors) {
  return (state) => {
    return _.reduce(selectors, (result, selector) => {
      return _.extend(result, selector(state))
    }, {})
  }
}

export function allSelector (state) {
  return state
}

export function authSelector (state) {
  return state.auth
}

export function routerSelector (state) {
  return state.router
}

export function currentUserSelector (state) {
  if (state.auth && state.auth.uid &&
      state.users && state.users[state.auth.uid]) {
    return {user: state.users[state.auth.uid]}
  } else {
    return {user: {}}
  }
}
