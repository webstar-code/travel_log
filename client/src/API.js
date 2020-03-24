const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:1337' : 'https://travel-log-api-five.now.sh';

export async function listlogEntries() {
    const response = await fetch(`${API_URL}/api/logs`);
    return response.json()
}

export async function AddEntry(data) {
    const response = await fetch(`${API_URL}/api/logs`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return  response.json();
}