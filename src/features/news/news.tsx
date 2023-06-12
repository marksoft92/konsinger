import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Popup from '../../components/popup';
import { getSelectView } from '../globalSlice/headerSlice';
import { Article, clearSelectedArticle, fetchNews, selectArticle, selectArticles, selectLoading, selectSelectedArticle } from './newsSlice';
import { useParams } from 'react-router-dom';
import { Empty } from 'antd';
import Spiner from '../../components/spiner';

const NewsList: React.FC = () => {
    const { id } = useParams()
    const countryCode = id
    const dispatch = useAppDispatch();
    const articles = useAppSelector(selectArticles);
    const loading = useAppSelector(selectLoading);
    const viewClass = useAppSelector(getSelectView);
    const selectedArticle = useAppSelector(selectSelectedArticle);
    const isArticles = articles.length


    useEffect(() => {
        dispatch(fetchNews(countryCode));
    }, [dispatch, countryCode]);

    if (loading) {
        return <Spiner />;
    }

    const handleArticleClick = (article: Article) => {
        dispatch(selectArticle(article));
    };

    return (
        <>
            {isArticles && <ul className={viewClass.view}>
                {articles.map((article) => (
                    <li key={article.url}>
                        <a onClick={() => handleArticleClick(article)}>
                            <h3>{article.title}</h3>
                            {article.urlToImage ? <img src={article.urlToImage || ''} alt={article.title} /> : <></>}
                            <p>{article.description}</p>
                            <div><p className="">{article.publishedAt}</p></div>
                        </a>
                    </li>
                ))}
            </ul> || <Empty />}
            {selectedArticle && (
                <Popup article={selectedArticle} onClose={() => dispatch(clearSelectedArticle())} />
            )}
        </>
    );
};

export default NewsList