import { stringify } from 'qs';
import request from '@/utils/request';

// 数据分析-总浏览量
export async function queryAllTraffic() {
  return request('/api/traffic/all');
}

// 数据分析-妈妈圈浏览量
export async function queryCircleTraffic() {
  return request('/api/traffic/circle');
}

// 数据分析-育儿问答浏览量
export async function queryQuestionTraffic() {
  return request('/api/traffic/question');
}

// 数据分析-睡前故事浏览量
export async function queryStoryTraffic() {
  return request('/api/traffic/story');
}

// 睡前故事-列表
export async function storyList() {
  return request('/api/story/list');
}

// 睡前故事-编辑
export async function storyEdit(params) {
  return request('/api/story/edit', {
    method: 'POST',
    body: {
      ...params
    }
  });
}

// 睡前故事-删除
export async function storyDelete(params) {
  return request('/api/story/delete', {
    method: 'POST',
    body: {
      ...params
    }
  });
}

// 睡前故事-添加
export async function storyAdd(params) {
  return request('/api/story/add', {
    method: 'POST',
    body: {
      ...params
    }
  });
}

// 妈妈圈-主题列表
export async function themeList() {
  return request('/api/circle/listTheme');
}

// 妈妈圈-主题编辑
export async function themeEdit(params) {
  return request('/api/circle/editTheme', {
    method: 'POST',
    body: {
      ...params
    }
  });
}

// 妈妈圈-主题删除
export async function themeDelete(params) {
  return request('/api/circle/deleteTheme', {
    method: 'POST',
    body: {
      ...params
    }
  });
}

// 妈妈圈-主题添加
export async function themeAdd(params) {
  return request('/api/circle/addTheme', {
    method: 'POST',
    body: {
      ...params
    }
  });
}

// 妈妈圈-动态列表
export async function dynamicList() {
  return request('/api/circle/listDynamic');
}

// 妈妈圈-动态删除
export async function dynamicDelete(params) {
  return request('/api/circle/deleteDynamic', {
    method: 'POST',
    body: {
      ...params
    }
  });
}

// 育儿问答-问答列表
export async function questionList() {
  return request('/api/question/list');
}

// 育儿问答-问答删除
export async function questionDelete(params) {
  return request('/api/question/delete', {
    method: 'POST',
    body: {
      ...params
    }
  });
}

// 用户管理-用户列表
export async function userList() {
  return request('/api/user/list');
}

// 用户管理-用户编辑
export async function userStop(params) {
  return request('/api/user/stop', {
    method: 'POST',
    body: {
      ...params
    }
  });
}

// 通知管理-通知列表
export async function noticeList() {
  return request('/api/notice/list');
}

// 通知管理-通知编辑
export async function noticeEdit(params) {
  return request('/api/notice/edit', {
    method: 'POST',
    body: {
      ...params
    }
  });
}

// 通知管理-通知删除
export async function noticeDelete(params) {
  return request('/api/notice/delete', {
    method: 'POST',
    body: {
      ...params
    }
  });
}

// 通知管理-通知添加
export async function noticeAdd(params) {
  return request('/api/notice/add', {
    method: 'POST',
    body: {
      ...params
    }
  });
}

// 账号管理-账号列表
export async function accountList() {
  return request('/api/admin/list');
}

// 账号管理-账号停用
export async function accountStop(params) {
  return request('/api/admin/stop', {
    method: 'POST',
    body: {
      ...params
    }
  });
}

// 账号管理-账号删除
export async function accountDelete(params) {
  return request('/api/admin/delete', {
    method: 'POST',
    body: {
      ...params
    }
  });
}

// 账号管理-账号添加
export async function accountAdd(params) {
  return request('/api/admin/add', {
    method: 'POST',
    body: {
      ...params
    }
  });
}

export async function person(params) {
  return request('/api/admin/person', {
    method: 'POST',
    body: {
      ...params,
    },
  });
}

export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'update',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}

export async function queryTags() {
  return request('/api/tags');
}

export async function queryBasicProfile() {
  return request('/api/profile/basic');
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function removeFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'delete',
    },
  });
}

export async function addFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'post',
    },
  });
}

export async function updateFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'update',
    },
  });
}

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices() {
  return request('/api/notices');
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/captcha?mobile=${mobile}`);
}
