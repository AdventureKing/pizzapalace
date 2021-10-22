


export const placeOrder = async (order) => {
    const token = sessionStorage.token;
    console.log(order);
    let json =JSON.stringify({
        "Crust": order.Crust,
        "Flavor": order.Flavor,
        "Size": order.Size,
        "Table_No": Number(order.Table_No)
    });
    console.log(json)
    return fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token?.access_token}`
       },
      body: json
    })
      .then(data => data.json())
   }



   export const getOrders = async () => {
    return fetch('/api/orders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
       }
    })
      .then(data => data.json());
   }

   export const deleteSpecificOrder = async (id) => {
     const path = '/api/orders/:id'.replace(':id', id);
     console.log('deleteing order', path);
    return fetch(path, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
       }
    }).then(data => data.json());
   }
