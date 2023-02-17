
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: '/quiz',
        component: () => import('pages/QuizPage.vue')
      },
    ]
  },

  {
    path: '/NewQuiz',
    component: () => import('pages/New_Quiz.vue')
  },

  {
    path: '/quiz-old',
    component: () => import('pages/The_Quiz_app.vue')
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
