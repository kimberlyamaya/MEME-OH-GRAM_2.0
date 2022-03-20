import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  // check if logged in
  loggedIn(tokenId) {
    const token = this.getToken();

    var decoded = decode(tokenId)
    var username = decoded.data.username

    return !!token && username && !this.isTokenExpired(token);
  }

  // check if token is expired
  isTokenExpired(token) {
    try {
      var decoded = decode(token);
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

    // *** -ka passing username into profile route ***
    var decoded = decode(tokenId)
    var username = decoded.data.username

    window.location.assign(`/profile/${username}`);
    // *** -ka passing username into profile route ***

    localStorage.setItem('id_token', tokenId);
  }

  // -ka added to pass as login to signup js
  signupSameAsLogin(tokenId) {
    localStorage.setItem('id_token', tokenId)
  }

  // clear user token from localStorage and logout
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();
