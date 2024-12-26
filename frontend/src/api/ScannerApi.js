const BASE_URL = 'http://localhost:5073/api/v1';

export const scannerApi = {
    getAllScanners: async () => {
        const response = await fetch(`${BASE_URL}/scanner`, {
            method: 'GET',
            headers: {
                'accept': '*/*'
            }
        });
        return response.json();
    },

    createScanner: async (scannerData) => {
        const response = await fetch(`${BASE_URL}/scanner`, {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(scannerData)
        });
        return response;
    },

    deleteScanner: async (scannerId) => {
        const response = await fetch(`${BASE_URL}/scanner/${scannerId}`, {
            method: 'DELETE',
            headers: {
                'accept': '*/*'
            }
        });
        return response;
    }
};
