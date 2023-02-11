import router from ".";

router.addRoute({
  path: '/hello', name: 'hello', component: () => import('../views/HelloView.vue')
})


export default router