import axios from 'axios'
import * as types from '../constants/Types'
import moment from 'moment'

// export function fetchFlightsToStore(data) {
//   return {
//     type: types.FETCH_FLIGHTS_TO_STORE,
//     payload: data
//   }
// }

// export function setLoadingFlightsInprogress() {
//   return {
//     type: types.LOADING_FLIGHTS
//   }
// }

// export function setLoadingFlightsFinished() {
//   return {
//     type: types.FINISHED_LOADING_FLIGHTS
//   }
// }

// export function fetchFlightsWhenInit(params) {
//   return dispatch => {
//     dispatch(setLoadingFlightsInprogress())
//     return axios
//       .get(`${url}/${params}`)
//       .then(response => {
//         if (response.status === 200) {
//           dispatch(fetchFlightsToStore(response.data))
//           dispatch(setLoadingFlightsFinished())
//         }
//       })
//   }
// }

export function demoActionForConfig(data) {
  return {
    type: types.DEMO,
    payload: data
  }
}

export function demoActionForApp(data) {
  return {
    type: types.APP_DEMO,
    payload: data
  }
}
