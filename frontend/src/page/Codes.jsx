import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import QRCode from 'react-qr-code';

const Codes = () => {
    const [prefix, setPrefix] = useState('');
    const [id, setId] = useState('');
    const [showQR, setShowQR] = useState(false);

    const handleGenerate = () => {
        setId(uuidv4());
    };

    const handleSubmit = () => {
        if (prefix && id) {
            setShowQR(true);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col gap-4 max-w-md">
                <div>
                    <input
                        type="text"
                        placeholder="Enter prefix"
                        value={prefix}
                        onChange={(e) => setPrefix(e.target.value)}
                        style={{width: '100%'}}
                    />
                </div>

                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        style={{width: '70%'}}
                    />
                    <button
                        onClick={handleGenerate}
                        style={{width: '15%', padding: '5px', fontSize: '15px'}}
                    >
                        GEN
                    </button>
                </div>

                <button
                    onClick={handleSubmit}
                    style={{width: '100%'}}
                >
                    Submit
                </button>

                {showQR && (
                    <div className="mt-4 flex justify-center">
                        <QRCode value={prefix + id} size={256} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Codes;
