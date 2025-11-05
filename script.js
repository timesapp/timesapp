// Accordion Toggle Logic
const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
  const header = item.querySelector('.accordion-header');
  header.addEventListener('click', () => {
    // Toggle current item
    item.classList.toggle('active');
    // Close others
    items.forEach(other => {
      if (other !== item) other.classList.remove('active');
    });
  });
});
