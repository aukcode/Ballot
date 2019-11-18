export const RouteMap = {
  home: {
    path: '/',
  },
  user: {
    login: '/login',
    register: '/register',
  },
  manage: {
    path: '/manage',
    edit: {
      path: '/edit/:pollId',
      createPath: (pollId: string) => `/edit/${pollId}`,
    },
  },
};
