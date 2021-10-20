


export const loginUser = async credentials => {
    return fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
       },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

