document.addEventListener('DOMContentLoaded', function () {
  const currentExtensions = [
    {
      title: 'Desenvolvimento Web Avançado',
      professor: 'Prof. João Silva',
      topic: 'Django com REST e React',
    },
    {
      title: 'Inteligência Artificial',
      professor: 'Prof. Maria Oliveira',
      topic: 'Conceitos e Aplicações de Machine Learning',
    },
  ];

  const futureExtensions = [
    {
      title: 'Desenvolvimento Mobile',
      professor: 'Prof. Carlos Pereira',
      topic: 'Aplicações com Flutter e Dart',
    },
    {
      title: 'Big Data e Analytics',
      professor: 'Prof. Ana Costa',
      topic: 'Análise de dados com Python',
    },
  ];

  function displayExtensions(list, containerId) {
    const container = document.getElementById(containerId);
    list.forEach((extension) => {
      const item = document.createElement('div');
      item.classList.add('extension-item');

      const title = document.createElement('h3');
      title.textContent = extension.title;
      item.appendChild(title);

      const professor = document.createElement('p');
      professor.classList.add('professor');
      professor.textContent = `Professor: ${extension.professor}`;
      item.appendChild(professor);

      const topic = document.createElement('p');
      topic.classList.add('topic');
      topic.textContent = `Assunto: ${extension.topic}`;
      item.appendChild(topic);

      container.appendChild(item);
    });
  }

  displayExtensions(currentExtensions, 'currentExtensions');
  displayExtensions(futureExtensions, 'futureExtensions');
});
