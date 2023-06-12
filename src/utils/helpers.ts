import { useNavigate } from 'react-router-dom';

const useCustomNavigate = () => {
    const navigate = useNavigate();

    const onPush = (path: string) => {
        navigate(path);
    };

    return onPush;
};

export default useCustomNavigate;
