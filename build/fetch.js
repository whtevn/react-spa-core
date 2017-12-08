import fetch from 'isomorphic-fetch';
export default function doFetch(state, apiEndpoint, request){
  const token = state.getIn([ "vendor", "data", "token" ]);
  const headers = {
    'Content-Type': 'application/json',
    "Authorization": `Bearer ${token}`,
  }
  return fetch(`${process.env.API_BASE}${apiEndpoint}`, Object.assign({}, request, { headers } ))
          .then(handleErrors)
          .then(response => response.json())
}

function handleErrors(response) {
  if (!response.ok) throw Error(response);
  return response;
}

