//  Wait 5 seconds, then fade out and redirect to index.html
setTimeout(() => {
  document.querySelector('.loader-container').style.transition = 'opacity 1.5s ease';
  document.querySelector('.loader-container').style.opacity = '0';

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
}, 5000);
