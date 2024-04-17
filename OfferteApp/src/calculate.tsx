
import Navbar from './navbar';
import { useLocation } from 'react-router-dom';

const CalculateKeukenbladPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const material = searchParams.get('material');
    const price = searchParams.get('price');
    const content = searchParams.get('content');

    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <>
            <Navbar/>
            <h1>Bereken Keukenblad</h1>
            <h2>{material}</h2>
            <p>Price: €{price} per m²</p>
            <p>{content}</p>
            <button className="btn btn-primary" onClick={handleGoBack} style={{fontSize: '16px'}}>
                Go Back
            </button>
        </>
    );
}

export default CalculateKeukenbladPage;
