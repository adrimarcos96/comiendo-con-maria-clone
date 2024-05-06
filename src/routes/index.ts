const TeamDietPlanView = () => import('@/views/TeamDietPlanView.vue')

export const routes = [
  { path: '/', component: TeamDietPlanView },
  {
    path: '/:pathMatch(.*)*',
    redirect: () => ({ path: '/' })
  }
]
