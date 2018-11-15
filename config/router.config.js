export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      // dashboard
      { path: '/', redirect: '/dashboard' },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        component: './Dashboard'
      },
      // story
      {
        path: '/story',
        name: 'story',
        icon: 'book',
        routes: [
          {
            path: '/story/storyManage',
            name: 'storylist',
            component: './storyManage',
          },
        ],
      },
      // circle
      {
        path: '/circle',
        name: 'circle',
        icon: 'share-alt',
        routes: [
          {
            path: '/circle/theme',
            name: 'theme',
            component: './circleManage/theme',
          },
          {
            path: '/circle/dynamic',
            name: 'dynamic',
            component: './circleManage/dynamic',
          },
        ],
      },
      // question
      {
        path: '/question',
        name: 'question',
        icon: 'question-circle',
        routes: [
          {
            path: '/question',
            name: 'questionlist',
            component: './questionManage',
          },
        ],
      },
      // user
      {
        path: '/userManage',
        name: 'userManage',
        icon: 'user',
        routes: [
          {
            path: '/userManage',
            name: 'userlist',
            component: './userManage',
          },
        ],
      },
      // notice
      {
        path: '/notice',
        name: 'notice',
        icon: 'bell',
        routes: [
          {
            path: '/notice',
            name: 'noticelist',
            component: './noticeManage',
          },
        ],
      },
      // system
      {
        path: '/system',
        name: 'system',
        icon: 'setting',
        routes: [
          {
            path: '/system/personal',
            name: 'personal',
            component: './systemManage/personal',
          },
          {
            path: '/system/account',
            name: 'account',
            component: './systemManage/account',
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
