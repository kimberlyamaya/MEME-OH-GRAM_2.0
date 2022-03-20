import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  // check if logged in
  // loggedIn(tokenId) {
  //   const token = this.getToken();

  //   var decoded = decode(tokenId)
  //   var username = decoded.data.username

  //   return !!token && username && !this.isTokenExpired(token);
  // }
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // handwaiving here
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
  login(idToken) {

    // *** -ka passing username into profile route ***
    var decoded = decode(idToken)
    var username = decoded.data.username

    window.location.assign(`/profile/${username}`);
    // *** -ka passing username into profile route ***

    localStorage.setItem('id_token', idToken);
  }

  // clear user token from localStorage and logout
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();
