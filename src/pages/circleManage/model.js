import {
  themeList,
  themeEdit,
  themeDelete,
  themeAdd,
  dynamicList,
  dynamicDelete
} from '@/services/api'
import { message } from 'antd'

export default {
  namespace: 'circle',

  state: {
    themeData: [],
    dynamicData: []
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (pathname === '/circle/theme') {
          dispatch({ type: 'listTheme' })
        }
        if (pathname === '/circle/dynamic') {
          dispatch({ type: 'listDynamic' })
        }
      })
    },
  },

  effects: {
    *listTheme({ payload }, { call, put }) {
      const res = yield call(themeList, payload)
      yield put({
        type: 'update',
        payload: {
          themeData: res.data
        },
      })
    },
    *editTheme({ payload }, { call, put }) {
      const loading = message.loading('保存中...', 0)
      const res = yield call(themeEdit, payload)
      if (res.code == 200) {
        message.success('更新话题信息成功！', 2.5)
      } else {
        message.error(res.message)
      }
      loading()
      yield put({
        type: 'listTheme'
      })
    },
    *deleteTheme({ payload }, { call, put }) {
      const loading = message.loading('保存中...', 0)
      const res = yield call(themeDelete, payload)
      if (res.code == 200) {
        message.success('删除话题成功！', 2.5)
      } else {
        message.error(res.message)
      }
      loading()
      yield put({
        type: 'listTheme'
      })
    },
    *addTheme({ payload }, { call, put }) {
      const loading = message.loading('保存中...', 0)
      const res = yield call(themeAdd, payload)
      if (res.code == 200) {
        message.success('添加话题成功！', 2.5)
      } else {
        message.error(res.message)
      }
      loading()
      yield put({
        type: 'listTheme'
      })
    },
    *listDynamic({ payload }, { call, put }) {
      const res = yield call(dynamicList, payload)
      yield put({
        type: 'update',
        payload: {
          dynamicData: res.data
        },
      })
    },
    *deleteDynamic({ payload }, { call, put }) {
      const loading = message.loading('保存中...', 0)
      const res = yield call(dynamicDelete, payload)
      if (res.code == 200) {
        message.success('删除动态成功！', 2.5)
      } else {
        message.error(res.message)
      }
      loading()
      yield put({
        type: 'listDynamic'
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
