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

export async function editTheme(params) {
  return request('/api/circle/editTheme', {
    method: 'POST',
    body: {
      ...params,
    },
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
