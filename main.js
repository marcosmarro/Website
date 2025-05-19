window.addEventListener('DOMContentLoaded', () => {
    fetch('navigation.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navigation').innerHTML = data;
        highlightActiveTab();
      });
  });
  
  function navigate(url, button) {
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  
    if (!url.startsWith('http') && !url.endsWith('Resume.pdf')) {
        button.classList.add('active');
      }
    
      // Open in new tab for resume or LinkedIn
      if (url.endsWith('Resume.pdf') || url.includes('linkedin')) {
        window.open(url, '_blank');
      } else {
        window.location.href = url;
      }
    }
    
  
  function highlightActiveTab() {
    const path = window.location.pathname.split('/').pop();
    document.querySelectorAll('.tab-button').forEach(btn => {
      const btnUrl = btn.getAttribute('onclick')?.match(/'(.*?)'/)?.[1];
      if (btnUrl === path) {
        btn.classList.add('active');
      }
    });
  }
  