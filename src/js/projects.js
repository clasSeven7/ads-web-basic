document
  .getElementById('filter-year')
  .addEventListener('change', filterProjects);
document
  .getElementById('filter-type')
  .addEventListener('change', filterProjects);
document
  .getElementById('filter-tech')
  .addEventListener('input', filterProjects);

function filterProjects() {
  const year = document.getElementById('filter-year').value;
  const type = document.getElementById('filter-type').value;
  const tech = document.getElementById('filter-tech').value.toLowerCase();

  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card) => {
    const cardYear = card.getAttribute('data-year');
    const cardType = card.getAttribute('data-type');
    const cardTech = card.getAttribute('data-tech').toLowerCase();

    const matchYear = year === '' || cardYear === year;
    const matchType = type === '' || cardType === type;
    const matchTech = tech === '' || cardTech.includes(tech);

    card.style.display = matchYear && matchType && matchTech ? 'block' : 'none';
  });
}

function openProjectDetails(projectId) {
  alert('Exibindo detalhes do projeto: ' + projectId);
  // Implementar a lógica para abrir detalhes do projeto, como um modal ou redirecionamento.
}
