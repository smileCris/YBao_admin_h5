import {
  queryAllTraffic,
  queryCircleTraffic,
  queryQuestionTraffic,
  queryStoryTraffic
} from '@/services/api'

export default {
  namespace: 'chart',

  state: {
    allVisit: 0,
    allChart: [],
    circleVisit: 0,
    circleChart: [],
    questionVisit: 0,
    questionChart: [],
    storyVisit: 0,
    storyChart: []
  },

  effects: {
    // 总访问量
    *getAllTraffic(_, { call, put }) {
      const res = yield call(queryAllTraffic)
      if (res.code == 200) {
        let a = []
        res.data.map(v => {
          a.push(v.num)
        })
        yield put({
          type: 'save',
          payload: {
            allVisit: a.reduce((total, num) => total + num),
            allChart: res.data
          },
        })
      }
    },
    // 妈妈圈访问量
    *getCircleTraffic(_, { call, put }) {
      const res = yield call(queryCircleTraffic)
      if (res.code == 200) {
        let a = []
        res.data.map(v => {
          a.push(v.num)
        })
        yield put({
          type: 'save',
          payload: {
            circleVisit: a.reduce((total, num) => total + num),
            circleChart: res.data
          },
        })
      }
    },
    // 育儿问答访问量
    *getQuestionTraffic(_, { call, put }) {
      const res = yield call(queryQuestionTraffic)
      if (res.code == 200) {
        let a = []
        res.data.map(v => {
          a.push(v.num)
        })
        yield put({
          type: 'save',
          payload: {
            questionVisit: a.reduce((total, num) => total + num),
            questionChart: res.data
          },
        })
      }
    },
    // 睡前故事访问量
    *getStoryTraffic(_, { call, put }) {
      const res = yield call(queryStoryTraffic)
      if (res.code == 200) {
        let a = []
        res.data.map(v => {
          a.push(v.num)
        })
        yield put({
          type: 'save',
          payload: {
            storyVisit: a.reduce((total, num) => total + num),
            storyChart: res.data
          },
        })
      }
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
        allVisit: 0,
        allChart: [],
        circleVisit: 0,
        circleChart: [],
        questionVisit: 0,
        questionChart: [],
        storyVisit: 0,
        storyChart: []
      }
    },
  },
}
