import {
  userList,
  userStop,
} from '@/services/api'
import { message } from 'antd'

export default {
  namespace: 'sysuser',

  state: {
    listData: []
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/userManage') {
          dispatch({ type: 'list' })
        }
      })
    },
  },

  effects: {
    *list({ payload }, { call, put }) {
      const res = yield call(userList, payload)
      yield put({
        type: 'update',
        payload: {
          listData: res.data
        },
      })
    },
    *stop({ payload }, { call, put }) {
      const loading = message.loading('保存中...', 0)
      const res = yield call(userStop, payload)
      if (res.code == 200) {
        message.success('修改用户状态成功！', 2.5)
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