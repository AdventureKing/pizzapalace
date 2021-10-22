
import useToken from "../context/useToken";

export const placeOrder = async (order, token) => {
  
    let json = JSON.stringify({
        "Crust": order.Crust,
        "Flavor": order.Flavor,
        "Size": order.Size,
        "Table_No": +order.Table_No
    });
    return fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
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
    return fetch(path, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
       }
    }).then(data => data.json());
   }
