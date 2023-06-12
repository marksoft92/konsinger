import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbsProps {
    url: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ url }) => {
    const location = useLocation();
    const parts = url.split('/').filter(part => part !== '');

    return (
        <div>
            {parts.map((part, index) => {
                const path = `/${parts.slice(0, index + 1).join('/')}`;
                const isActive = location.pathname === path;

                return (
                    <React.Fragment key={index}>
                        {index > 0 && <span> / </span>}
                        {isActive ? (
                            <span>{part}</span>
                        ) : (
                            <Link to={path}>{part}</Link>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default Breadcrumbs;
