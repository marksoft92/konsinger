import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Popover, Radio, Select } from 'antd';
import { changeView } from '../features/globalSlice/headerSlice';
import { RadioChangeEvent } from 'antd/lib/radio';
import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons';
import { setCurrentLanguage } from '../features/languages/languagesSlice';
import { FormattedMessage } from 'react-intl';

const Header: React.FC = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [selectedView, setSelectedView] = useState<string>('list');
    const dispatch = useDispatch();

    const content = (
        <div>
            <FormattedMessage id="header.infoTooltip" />
        </div>
    );

    const handleVisibleChange = (visible: boolean) => {
        setVisible(visible);
    };

    const handleChangeView = (e: RadioChangeEvent) => {
        const view = e.target.value;
        setSelectedView(view);
        dispatch(changeView(view));
    };
    const handleLanguageChange = (coutryCode: string) => {
        dispatch(setCurrentLanguage(coutryCode));
    };
    return (
        <header>
            <Link to="/"><FormattedMessage id="title" /></Link>
            <div>  <Select
                defaultValue="en"
                style={{ width: 120 }}
                onChange={v => handleLanguageChange(v)}
                options={[
                    { value: 'pl', label: <FormattedMessage id="app.languagePl" /> },
                    { value: 'en', label: <FormattedMessage id="app.languageEn" /> },
                ]}
            />
                <Radio.Group value={selectedView} onChange={handleChangeView}>
                    <Radio.Button value="list"><UnorderedListOutlined />&nbsp; <FormattedMessage id="header.list" /></Radio.Button>
                    <Radio.Button value="tiles"><AppstoreOutlined />&nbsp; <FormattedMessage id="header.tiles" /></Radio.Button>
                </Radio.Group>
                <Popover
                    content={content}
                    title={<FormattedMessage id="header.infoTitle" />}
                    trigger="click"
                    open={visible}
                    onOpenChange={handleVisibleChange}
                >
                    <Button type="primary" size="small">
                        <FormattedMessage id="header.info" />
                    </Button>
                </Popover>
            </div>
        </header>
    );
};

export default Header;