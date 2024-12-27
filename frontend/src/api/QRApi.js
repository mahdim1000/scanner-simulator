const BASE_URL = `${import.meta.env.VITE_API_URL}/api/v1/qr`;

export const scannerApi = {
    send: async (macAddress, qrCode) => {
        const response = await fetch(`${BASE_URL}?macAddress=${macAddress}&qrCode=${qrCode}`, {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json'
            }
        });
        return response;
    },

};
