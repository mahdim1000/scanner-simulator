const BASE_URL = `${import.meta.env.VITE_API_URL}/api/v1`;

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
