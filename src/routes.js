import { Home, Article, Categories, CountryHome, CategoryHome, } from './scenes';


export default [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/:country',
        exact: true,
        component: CountryHome,
    },
    {
        exact: true,
        path: '/:country/categories',
        component: Categories
    },
    {
        path: '/:country/:category',
        exact: true,
        component: CategoryHome,
    },
    {
        path: '/:country/:category/:article',
        component: Article
    }
]
