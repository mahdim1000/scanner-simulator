const BASE_URL = 'http://localhost:5073/api/v1';

export const serverApi = {
    getServer: async () => {
        const response = await fetch(`${BASE_URL}/server`, {
            method: 'GET',
            headers: {
                'accept': '*/*'
            }
        });
        return response.json();
    },

    createServer: async (serverData) => {
        const response = await fetch(`${BASE_URL}/server`, {
            method: 'POST',
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serverData)
        });
        return response;
    }
};
