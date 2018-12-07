import { fakeChartData } from '@/services/api'
import { queryAllTraffic } from '@/services/api'
import { editTheme } from '@/services/api'
import { person } from '@/services/api'

export default {
  namespace: 'chart',

  state: {
    visitData: [],
    visitData2: [],
    salesData: [],
    searchData: [],
    offlineData: [],
    offlineChartData: [],
    salesTypeData: [],
    salesTypeDataOnline: [],
    salesTypeDataOffline: [],
    radarData: [],
    loading: false,
    allTraffic: [],
    editData: []
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/dashboard') {
          // dispatch({ type: 'getAllTraffic' })
          // dispatch({
          //   type: 'themeEdit',
          //   payload: {
          //     id: 1,
          //     theme: '妈妈食谱'
          //   }
          // })
          // dispatch({
          //   type: 'getPerInfo',
          //   payload: {
          //     username: 'admin',
          //     password: 'admin'
          //   }
          // })
        }
      })
    },
  },

  effects: {
    // *themeEdit({ payload }, { call, put }) {
    //   const res = yield call(editTheme, payload)
    //   console.log(res)
    //   yield put({
    //     type: 'save',
    //     payload: {
    //       editData: res
    //     },
    //   })
    // },
    // *getPerInfo({ payload }, { call, put }) {
    //   const res = yield call(person, payload)
    //   console.log(res)
    //   yield put({
    //     type: 'save',
    //     payload: {
    //       res
    //     },
    //   })
    // },
    // *getAllTraffic(_, { call, put }) {
    //   const res = yield call(queryAllTraffic)
    //   console.log(res)
    //   yield put({
    //     type: 'save',
    //     payload: {
    //       allTraffic: res.data
    //     },
    //   })
    // },
    *fetch(_, { call, put }) {
      const response = yield call(fakeChartData)
      yield put({
        type: 'save',
        payload: response,
      })
    },
    *fetchSalesData(_, { call, put }) {
      const response = yield call(fakeChartData)
      yield put({
        type: 'save',
        payload: {
          salesData: response.salesData,
        },
      })
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
    clear() {
      return {
        visitData: [],
        visitData2: [],
        salesData: [],
        searchData: [],
        offlineData: [],
        offlineChartData: [],
        salesTypeData: [],
        salesTypeDataOnline: [],
        salesTypeDataOffline: [],
        radarData: [],
      }
    },
  },
}
