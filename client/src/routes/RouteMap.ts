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
  conduct: {
    path: '/conduct/:pollId',
    createPath: (pollId: string) => `/conduct/${pollId}`,
  },
  results: {
    path: '/results/:pollId',
    createPath: (pollId: string) => `/results/${pollId}`,
  },
};
