// Tạo hàm bọc fetch
export const fetchWithAuth = (url, options = {}) => {
    const token = localStorage.getItem('access-token');
    const headers = {
        ...options.headers,
        'Content-Type': 'application/json',
    };

    if (token) {
        headers['access-token'] = token;
    }

    return fetch(url, {
        ...options,
        headers: headers
    });
};