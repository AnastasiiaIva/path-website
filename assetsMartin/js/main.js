let currentStep = 1;
const totalSteps = 6;

function updateStepBar() {
  for (let i = 1; i <= totalSteps; i++) {
    const stepElement = document.getElementById(`step${i}`);
    if (i <= currentStep) {
      stepElement.classList.add('active');
    } else {
      stepElement.classList.remove('active');
    }
  }
}

function nextStep() {
  if (currentStep < totalSteps) {
    currentStep++;
    updateStepBar();
  }
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    updateStepBar();
  }
}

// Inicializar la barra en el primer paso
updateStepBar();



