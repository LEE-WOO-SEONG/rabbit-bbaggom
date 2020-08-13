const LOCALSTORAGE_KEY = 'token';

class TokenService {
  static saveToken(token) {
    localStorage.set(LOCALSTORAGE_KEY, token);
  }

  static getToken() {
    return localStorage.get(LOCALSTORAGE_KEY);
  }

  static removeToken() {
    localStorage.removeItem(LOCALSTORAGE_KEY);
  }
}

export default TokenService;
