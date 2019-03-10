import {
  storyList,
  storyDelete,
  storyEdit,
  storyAdd
} from '@/services/api'
import { message } from 'antd'

export default {
  namespace: 'story',

  state: {
    listData: []
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/story/storyManage') {
          dispatch({ type: 'list' })
        }
      })
    },
  },

  effects: {
    *list({ payload }, { call, put }) {
      const res = yield call(storyList, payload)
      yield put({
        type: 'update',
        payload: {
          listData: res.data
        },
      })
    },
    *edit({ payload }, { call, put }) {
      const loading = message.loading('保存中...', 0)
      const res = yield call(storyEdit, payload)
      if (res.code == 200) {
        message.success('更新故事信息成功！', 2.5)
      } else {
        message.error(res.message)
      }
      loading()
      yield put({
        type: 'list'
      })
    },
    *delete({ payload }, { call, put }) {
      const loading = message.loading('保存中...', 0)
      const res = yield call(storyDelete, payload)
      if (res.code == 200) {
        message.success('删除故事成功！', 2.5)
      } else {
        message.error(res.message)
      }
      loading()
      yield put({
        type: 'list'
      })
    },
    *add({ payload }, { call, put }) {
      const loading = message.loading('保存中...', 0)
      const res = yield call(storyAdd, payload)
      if (res.code == 200) {
        message.success('添加故事成功！', 2.5)
      } else {
        message.error(res.message)
      }
      loading()
      yield put({
        type: 'list'
      })
    },
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
