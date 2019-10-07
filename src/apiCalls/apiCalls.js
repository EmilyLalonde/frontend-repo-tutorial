export const getDataFromBackend = () => {
  return fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/seasons').then(response => {
    if(!response.ok) {
      throw Error("Error fetching data")
    }
    return response.json();
  }).catch(error => {
    throw(Error(error.message))
  })
};