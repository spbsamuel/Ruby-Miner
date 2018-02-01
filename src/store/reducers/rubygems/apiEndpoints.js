import 'whatwg-fetch'
import API_TOKEN from 'secret'

const host = '/';

function parseJSON(response) {
  return response.json()
}

const headers = {
  Authorization: API_TOKEN
};

const apiEndpoints = {
  search: (query, page) =>
    fetch(`${host}api/v1/search.json${query}`, {
      method: 'Get',
      headers,
    }).then(parseJSON),
  find: gemName =>
    fetch(`${host}api/v1/gems/${gemName}.json`, {
      method: "GET",
      headers
    }).then(parseJSON),
};

export default apiEndpoints