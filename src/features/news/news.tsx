import { Table } from 'antd';
import columns from './columns';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useParams } from 'react-router';
import { convertToHyphenCase } from '../../utils/helpers';

interface NewsProps {
    articles: any;
    onPush: (path: string) => void;
}

const News: React.FC<NewsProps> = ({ articles, onPush }) => {
    const { countryCode } = useParams();


    return (
        <>
            <Breadcrumbs />
            <Table
                dataSource={articles}
                columns={columns}
                onRow={(record) => {
                    return {
                        onClick: () => {
                            onPush(`/country/${countryCode}/${convertToHyphenCase(record.title)}`);
                        },

                    };
                }}
            />
        </>
    );
};

export default News;
