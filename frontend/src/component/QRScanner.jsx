import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import {scannerApi as QRApi} from "../api/QRApi.js";

export const QRScanner = () => {
    const lastScanTime = useRef(0);
    const location = useLocation();
    const scanner = location.state?.scanner;

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 250,
                height: 250,
            },
            fps: 1,
            facingMode: { exact: "environment" },
        });

        scanner.render(success, error);

        function success(result) {
            const currentTime = Date.now();
            if (currentTime - lastScanTime.current >= 1000) {
                lastScanTime.current = currentTime;
                QRApi.send(scanner.macAddress, result).then(response => {
                    if (response.ok) {
                        toast.success('Scan complete!', {
                            position: "top-center",
                            autoClose: 2000,
                            hideProgressBar: true,
                        });                    } else {
                        console.error('Failed to scan QR code');
                    }
                });
                console.log('Scanner Info:', scanner);
                console.log('Scan Result:', result);
            }
        }

        function error(err) {
            console.warn(err);
        }

        return () => {
            scanner.clear().catch(error => console.error(error));
        };
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h3>Scan QR Code - {scanner?.name}</h3>
            <div id="reader"></div>
        </div>
    );
};
