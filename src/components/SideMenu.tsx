import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchCountries, selectCountries, selectLoading } from '../features/countries/countriesSLice';
import { FormattedMessage } from 'react-intl';
import { selectLanguage } from '../features/languages/languagesSlice';

const SideMenu: React.FC = () => {
    const countries = useAppSelector(selectCountries);
    const loading = useAppSelector(selectLoading);
    const dispatch = useAppDispatch();
    const locale: string = useAppSelector(selectLanguage);
    const localeShort = locale === 'en' ? 'bre' : 'pol'


    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]);

    return (
        <Menu mode="inline">

            {loading ? (
                <Menu.Item key="loading" icon={<Spin indicator={<LoadingOutlined />} />}>
                    <FormattedMessage id="spiner.loading" />
                </Menu.Item>
            ) : (
                countries.map((country) => (

                    <Menu.Item key={country.name.common} icon={<img src={country.flags.png} alt={country.name.common} />}>
                        <Link to={`/country/${country.cca2.toLowerCase()}`}>{country.translations[localeShort as keyof typeof country.translations]?.common}</Link>
                    </Menu.Item>
                ))
            )}

        </Menu>
    );
};

export default SideMenu;


