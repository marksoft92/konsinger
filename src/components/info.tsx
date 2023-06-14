import React from 'react';
import { FormattedMessage } from 'react-intl';

const InfoPage: React.FC = () => {
    return (
        <div className='container-info'>
            <h1>
                <FormattedMessage id="title.homePage" />
            </h1>
            <h2>
                <FormattedMessage id="home.howToUse.title" />
            </h2>
            <ol>
                <li>
                    <FormattedMessage id="home.howToUse.step1" />
                </li>
                <li>
                    <FormattedMessage id="home.howToUse.step2" />
                </li>
                <li>
                    <FormattedMessage id="home.howToUse.step3" />
                </li>
                <li>
                    <FormattedMessage id="home.howToUse.step4" />
                </li>
            </ol>
            <h2>
                <FormattedMessage id="home.technologiesUsed.title" />
            </h2>
            <ol>
                <li>
                    <FormattedMessage id="home.technologiesUsed.react" />
                </li>
                <li>
                    <FormattedMessage id="home.technologiesUsed.typescript" />
                </li>
                <li>
                    <FormattedMessage id="home.technologiesUsed.reactRouter" />
                </li>
                <li>
                    <FormattedMessage id="home.technologiesUsed.otherLibraries" />
                </li>
            </ol>
            <ol>
                <li>
                    <FormattedMessage id="home.apiInfo" />
                </li>
            </ol>
        </div>
    );
};

export default InfoPage;
