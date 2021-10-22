export const loginUser = async credentials => {
    return fetch('/api/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
    })
        .then(async (data) => {
            const response = await data.json();
            return response.access_token;
        });

}

