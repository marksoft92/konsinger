const columns = [
    {
        title: 'author',
        dataIndex: 'author',
        key: 'name',
    },
    {
        title: 'title',
        dataIndex: 'title',
        key: 'age',
    },
    {
        title: 'publishedAt',
        dataIndex: 'publishedAt',
        key: 'address',
    },
    {
        title: 'description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'url',
        dataIndex: 'url',
        key: 'content',
        render: (v: string) => { return <a target="_blank" rel="noopener noreferrer" href={v}>Sprawdz</a> }
    },
];

export default columns