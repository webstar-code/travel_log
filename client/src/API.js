const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:1337' : 'https://travel-log-api-five.now.sh';

export async function listlogEntries() {
    const token = localStorage.getItem('auth-token');
    const response = await fetch(`${API_URL}/logs`,{
        headers: {
            'auth-token': token
        }
    });
    return response.json()
}

export async function AddEntry(data) {
    const response = await fetch(`${API_URL}/logs`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return  response.json();
}

export async function Userinfo() {
    const token = await localStorage.getItem('auth-token');
    const user = await fetch(`${API_URL}/posts`,{
        headers: {
            'auth-token': token
        }
    });

    return await user.json();
}