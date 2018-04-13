import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomeView from '@/components/home/HomeView'
import FavView from '@/components/fav/FavView'
import HistoryView from '@/components/history/HistoryView'
import ConfigView from '@/components/config/ConfigView'
import ListView from '@/components/list/ListView'
import ArticleView from '@/components/article/ArticleView'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/home',
      component: HomeView
    },
    {
      path: '/fav',
      component: FavView
    },
    {
      path: '/history',
      component: HistoryView
    },
    {
      path: '/config',
      component: ConfigView
    },
    {
      path: '/list/:id',
      component: ListView
    },
    {
      path: '/article',
      component: ArticleView
    }
  ]
})
