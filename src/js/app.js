import { projects } from '../../data/projects.js';

const root = document.getElementById('root');

projects.map((project, index) => {
  const wrap = document.createElement('div');
  wrap.classList = 'projects';

  wrap.innerHTML = `
  <img src="/${project.name}/design/desktop-design.png" alt="${project.name}" class="projects__img" />
  <p class="projects__title">${project.name}</p>
  <div class="container__link">
    <a href="/${project.name}/index.html" target="_blank" rel="noopener noreferrer" class="projects__link" >
      <img src="./src/icons/preview-svgrepo-com.svg" alt="web logo" class="projects__link--logo" />
    </a>
    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="projects__link" >
      <img src="./src/icons/github-svgrepo-com.svg" alt="Github logo" class="projects__link--logo" />
    </a>
  </div>
  `;
  root.appendChild(wrap);
});
