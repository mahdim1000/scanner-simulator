import { useState } from 'react';
import { scannerApi } from '../api/ScannerApi';
import { useNavigate } from 'react-router-dom';

export const CreateScannerPage = () => {
    const [name, setName] = useState('');
    const [macAddress, setMacAddress] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const scannerData = {
            name: name,
            macAddress: macAddress
        };

        await scannerApi.createScanner(scannerData);
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-semibold text-gray-800 mb-8 border-b pb-4">
                    Create New Scanner
                </h1>

                <form style={{textAlign: "left"}} onSubmit={handleSubmit}>
                    <div className="p-t-5 space-y-2">
                        <label>
                            Scanner Name
                        </label>
                        <input
                            type="text"
                            style={{width: "100%"}}
                            placeholder="Enter scanner name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="p-t-5 space-y-2">
                        <label>
                            Scanner MAC Address
                        </label>
                        <input
                            type="text"
                            style={{width: "100%"}}
                            placeholder="Enter MAC address"
                            value={macAddress}
                            onChange={(e) => setMacAddress(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{ marginTop: '1.5rem'}}
                    >
                        Create Scanner
                    </button>
                </form>
            </div>
        </div>
    );
};
