import { Table } from 'antd';
import columns from './columns';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useParams } from 'react-router';

interface NewsProps {
    articles: any; 
    onPush: (path: string) => void;
}

const News: React.FC<NewsProps> = ({ articles, onPush }) => {
    const { countryCode } = useParams();


    return (
        <>
            <Breadcrumbs url={countryCode ? `/country/${countryCode}` : ''} />
            <Table
                dataSource={articles}
                columns={columns}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: (event) => {
                            onPush('/nowa-sciezka');
                        },

                    };
                }}
            />
        </>
    );
};

export default News;
