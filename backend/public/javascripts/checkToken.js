function checkTokenValidity() {

    var token = getCookie('token');
    
    if (!token) {
      window.location.href = '/connexion';
      return;
    }
    
    var decodedToken;
    try {
      decodedToken = JSON.parse(atob(token.split('.')[1]));
      var expirationTime = decodedToken.exp * 1000;
      var currentTime = new Date().getTime();
      
      if (currentTime > expirationTime) {
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location.href = '/connexion';
      }
    } catch (error) {
      console.error('Erreur lors de la vérification du token :', error);
      window.location.href = '/connexion';
    }
  }

  function getCookie(name) {
    var cookieName = name + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    
    for(var i = 0; i < cookieArray.length; i++) {
      var cookie = cookieArray[i].trim();
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    
    return null;
  }
  
  checkTokenValidity();
  