import {
  noticeList,
  noticeEdit,
  noticeDelete,
  noticeAdd
} from '@/services/api'
import { message } from 'antd'

export default {
  namespace: 'notice',

  state: {
    listData: []
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/notice') {
          dispatch({ type: 'list' })
        }
      })
    },
  },

  effects: {
    *list({ payload }, { call, put }) {
      const res = yield call(noticeList, payload)
      yield put({
        type: 'update',
        payload: {
          listData: res.data
        },
      })
    },
    *edit({ payload }, { call, put }) {
      const loading = message.loading('保存中...', 0)
      const res = yield call(noticeEdit, payload)
      if (res.code == 200) {
        message.success('更新通知信息成功！', 2.5)
        yield put({
          type: 'list'
        })
      } else {
        message.error(res.message)
      }
      loading()
    },
    *delete({ payload }, { call, put }) {
      const loading = message.loading('保存中...', 0)
      const res = yield call(noticeDelete, payload)
      if (res.code == 200) {
        message.success('删除通知成功！', 2.5)
        yield put({
          type: 'list'
        })
      } else {
        message.error(res.message)
      }
      loading()
    },
    *add({ payload }, { call, put }) {
      const loading = message.loading('保存中...', 0)
      const res = yield call(noticeAdd, payload)
      if (res.code == 200) {
        message.success('添加通知成功！', 2.5)
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