import {
  accountList,
  accountStop,
  accountDelete,
  accountAdd
} from '@/services/api'
import { message } from 'antd'

export default {
  namespace: 'account',

  state: {
    listData: []
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/system/account') {
          dispatch({ type: 'list' })
        }
      })
    },
  },

  effects: {
    *list({ payload }, { call, put }) {
      const res = yield call(accountList, payload)
      yield put({
        type: 'update',
        payload: {
          listData: res.data
        },
      })
    },
    *stop({ payload }, { call, put }) {
      const loading = message.loading('保存中...', 0)
      const res = yield call(accountStop, payload)
      if (res.code == 200) {
        message.success('修改账号状态成功！', 2.5)
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
      const res = yield call(accountDelete, payload)
      if (res.code == 200) {
        message.success('删除账号成功！', 2.5)
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
      const res = yield call(accountAdd, payload)
      if (res.code == 200) {
        message.success('添加账号成功！', 2.5)
      } else {
        message.error(res.message)
      }
      loading()
      yield put({
        type: 'list'
      })
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