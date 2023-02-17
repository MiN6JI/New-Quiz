
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
<<<<<<< HEAD
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

=======
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  
>>>>>>> a2f5c126f51b667d6a19374d50a109cf35852c8a
  {
    path: '/NewQuiz',
    component: () => import('pages/New_Quiz.vue')
  },
<<<<<<< HEAD

  {
    path: '/quiz-old',
=======
      
  {
    path: '/quiz',
>>>>>>> a2f5c126f51b667d6a19374d50a109cf35852c8a
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
