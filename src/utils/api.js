export const API_URL = "https://jsonplaceholder.typicode.com";

class Api {
  constructor(options) {
    this._options = options;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error ${res.status}`);
  }

  async getUsers() {
    const res = await fetch(`${this._options.url}/users`, {
      method: "GET",
    });
    return this._checkResponse(res);
  }
}

export default new Api({ url: API_URL });
