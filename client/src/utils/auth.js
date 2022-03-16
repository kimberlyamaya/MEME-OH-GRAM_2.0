import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  // check if logged in
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // check if token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  // Retrieves the user token from localStorage
  getToken() {
    return localStorage.getItem('id_token');
  }

  // Saves user token to localStorage
  login(tokenId) {
    localStorage.setItem('id_token', tokenId);
    window.location.assign('/profile');
  }

  // clear user token from localStorage and logout
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();
