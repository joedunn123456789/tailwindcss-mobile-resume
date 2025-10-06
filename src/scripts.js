// Toggle dark mode on <html> element
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}

// Toggle visibility of CRM case study section
function toggleCRM() {
  const crmSection = document.getElementById('crm-details');
  if (crmSection) {
    crmSection.classList.toggle('hidden');
  }
}
