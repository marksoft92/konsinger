import { RouteProps } from 'react-router-dom';
import Layout from './components/Layout';
import NewsList from './features/news/news';

const routes: RouteProps[] = [
  {
    path: '/',
    element: <Layout><NewsList /></Layout>,
  },
  {
    path: '/country',
    element: <Layout><NewsList /></Layout>,
  },
  {
    path: '/country/:countryCode',
    element: <Layout><NewsList /></Layout>,
  },
];

export default routes;