import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {  fetchNews, selectArticles, selectLoading } from './newsSlice';
import { useParams } from 'react-router-dom';
import { Table } from 'antd';
import Spiner from '../../components/spiner';
import columns from './columns';
import Breadcrumbs from '../../components/Breadcrumbs';

const NewsList: React.FC = () => {
    const { countryCode } = useParams()
    const dispatch = useAppDispatch();
    const articles = useAppSelector(selectArticles);
    const loading = useAppSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchNews(countryCode));
    }, [dispatch, countryCode]);

    if (loading) {
        return <Spiner />;
    }



    return (
        <>
            <Breadcrumbs url={countryCode ? `/country/${countryCode}` : ''} />
            <Table
                dataSource={articles}
                columns={columns}
            />
        </>
    );
};

export default NewsList