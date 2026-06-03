function atualizar() {
  const w = window.innerWidth;

  document.getElementById('vpSize').textContent = w;

  let label = '', desc = '';

  if (w < 480) {
    label = 'XS';
    desc = 'Mobile pequeno (< 480px)';
  } else if (w < 768) {
    label = 'SM';
    desc = 'Mobile (480px - 767px)';
  } else if (w < 1024) {
    label = 'MD';
    desc = 'Tablet (768px - 1023px)';
  } else if (w < 1280) {
    label = 'LG';
    desc = 'Desktop (1024px - 1279px)';
  } else {
    label = 'XL';
    desc = 'Desktop grande (1280px+)';
  }

  document.getElementById('bpLabel').textContent = label;
  document.getElementById('bpDesc').textContent = desc;
}



function adjustText(element) {
  element.style.fontSize = '100%'; // reseta antes de calcular
  let size = 100;
  while (element.scrollWidth > element.offsetWidth && size > 1) {
    size--;
    element.style.fontSize = size + '%';
  }
}

function adjustAllItems() {
  document.querySelectorAll('.flex-item').forEach(adjustText);
  }

adjustAllItems();
window.addEventListener('resize', adjustAllItems);
