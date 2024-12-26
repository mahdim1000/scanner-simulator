import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {scannerApi} from "../api/ScannerApi.js";

export const MainPage = () => {
    const navigate = useNavigate();
    const [scanners, setScanners] = useState([]);

    useEffect(() => {
        fetchScanners();
    }, []);

    const fetchScanners = async () => {
        try {
            const data = await scannerApi.getAllScanners();
            setScanners(data);
        } catch (error) {
            console.error('Error fetching scanners:', error);
        }
    };

    const handleScanClick = (scanner) => {
        // Pass scanner data through navigation state
        navigate('/qr-scanner', { state: { scanner } });
    };

    return (
        <div className="container mx-auto p-4">
            <h3 style={{textAlign: "left"}}>Scanners:</h3>
            <ul style={{textAlign: "left"}} className="mt-4 list-none">
                {scanners.map((scanner) => (
                    <li key={scanner.id} style={{paddingTop: 15}}>
                        {scanner.name}
                        <button
                            onClick={() => handleScanClick(scanner)}
                            style={{width: "100%"}}
                        >
                            Scan
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
