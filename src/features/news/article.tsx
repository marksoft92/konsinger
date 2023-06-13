import Breadcrumbs from '../../components/Breadcrumbs';
import { useLocation } from 'react-router-dom';

interface NewsProps {

}

const Article: React.FC<NewsProps> = () => {
    return (
        <>
            <Breadcrumbs />
        </>
    );
};

export default Article;
