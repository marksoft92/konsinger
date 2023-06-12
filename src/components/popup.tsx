import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Article } from '../features/news/newsSlice';


interface PopupProps {
    article: Article;
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ article, onClose }) => {
    const { title, description, url, urlToImage } = article;
    const isUrl = urlToImage

    return (
        <div className="popup">
            <div className="popup-content">
                <button className="popup-close" onClick={onClose}>
                    X
                </button>
                <h2>{title}</h2>
                {isUrl && <img src={urlToImage} alt={title} />}
                <p>{description}</p>
                <p>
                    <FormattedMessage id="popup.author" /> {article.author},<FormattedMessage id="popup.source" />{' '}
                    <a href={url} target="_blank" rel="noreferrer">
                        {article.source.name}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Popup;
