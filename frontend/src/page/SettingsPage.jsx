import { useEffect, useState } from 'react';
import { scannerApi } from '../api/ScannerApi';
import { serverApi } from '../api/ServerApi';

export const SettingsPage = () => {
    const [scanners, setScanners] = useState([]);
    const [serverAddress, setServerAddress] = useState('');

    useEffect(() => {
        fetchScanners();
        fetchServerAddress();
        fetchServerAddress();
    }, []);

    const fetchScanners = async () => {
        const data = await scannerApi.getAllScanners();
        setScanners(data);
    };

    const fetchServerAddress = async () => {
        const serverData = await serverApi.getServer();
        setServerAddress(serverData.host + ":" + serverData.port);
    };

    const handleDelete = async (scannerId) => {
        await scannerApi.deleteScanner(scannerId);
        fetchScanners();
    };

    const handleSaveServer = async () => {
        const part = serverAddress.split(":");
        await serverApi.createServer({ host: part[0], port: part[1] });
    };

    return (
        <div style={{textAlign: "left"}} className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Settings</h1>
            <label>
                Server Address:
            </label>
            <br/>
            <input
                type="text"
                className="border p-2 mt-2 w-full"
                placeholder="localhost:5050"
                value={serverAddress}
                onChange={(e) => setServerAddress(e.target.value)}
            />
            <button onClick={handleSaveServer}>save</button>

            <ul style={{textAlign: "left"}} className="mt-4 list-none">
                {scanners.map((scanner) => (
                    <li key={scanner.id} style={{paddingTop: 15}}>
                        {scanner.name}
                        <button
                            onClick={() => handleDelete(scanner.id)}
                            style={{width: "100%"}}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
