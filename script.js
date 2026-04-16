// Mobile menu accessibility
const navCheckbox = document.getElementById('nav-checkbox');
const navToggle = document.querySelector('label[for="nav-checkbox"]');

if (navCheckbox && navToggle) {
  navToggle.setAttribute('aria-expanded', 'false');
  
  navCheckbox.addEventListener('change', () => {
    navToggle.setAttribute('aria-expanded', navCheckbox.checked ? 'true' : 'false');
  });
}

const weightSlider = document.getElementById("weight");
const opszSlider = document.getElementById("opsz");

const sampleLetter = document.getElementById("sample-text");
const sampleInput = document.getElementById("sample-input");

function updateSampleStyles() {
  const weight = weightSlider.value;

  const opszRaw = opszSlider.value;
  const opsz = 111 - opszRaw; // reversed

  const variationValue = `"wght" ${weight}, "opsz" ${opsz}`;

  sampleLetter.style.fontVariationSettings = variationValue;
  sampleInput.style.fontVariationSettings = variationValue;
}

weightSlider.addEventListener("input", updateSampleStyles);
opszSlider.addEventListener("input", updateSampleStyles);

updateSampleStyles();
document.querySelectorAll('.character-string').forEach(group => {
  const chars = group.textContent.split('');
  group.innerHTML = '';

  chars.forEach(char => {
    const span = document.createElement('span');

    // preserve spaces
    if (char === ' ') {
      span.classList.add('space');
      span.innerHTML = '&nbsp;';
    } else {
      span.textContent = char;
    }

    group.appendChild(span);
  });
});

// Back to top button functionality
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
