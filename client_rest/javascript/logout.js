const logoutLink = document.querySelector('a[href="logout.html"]');

logoutLink.addEventListener('click', () => {
  localStorage.removeItem('accessToken');
  window.location = "/logout.html"
});