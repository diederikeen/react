import App from '../components/App';
import Index from '../components/Index';

export default [
  {
    component: App,
    childRoutes: [
      {
        exact: true,
        path: '/',
        component: Index
      }
    ]
  },
];