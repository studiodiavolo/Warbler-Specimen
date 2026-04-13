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