import {
  questionList,
  questionDelete
} from '@/services/api'
import { message } from 'antd'

export default {
  namespace: 'question',

  state: {
    listData: []
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/question') {
          dispatch({ type: 'list' })
        }
      })
    },
  },

  effects: {
    *list({ payload }, { call, put }) {
      const res = yield call(questionList, payload)
      yield put({
        type: 'update',
        payload: {
          listData: res.data
        },
      })
    },
    *delete({ payload }, { call, put }) {
      const loading = message.loading('保存中...', 0)
      const res = yield call(questionDelete, payload)
      if (res.code == 200) {
        message.success('删除问答成功！', 2.5)
        yield put({
          type: 'list'
        })
      } else {
        message.error(res.message)
      }
      loading()
    }
  },

  reducers: {
    update(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    }
  }
}