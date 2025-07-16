const cursos = [
  { nombre: "Introducción a la matemática para ingeniería", ciclo: 1, prerequisitos: [] },
  { nombre: "Individuo y medio ambiente", ciclo: 1, prerequisitos: [] },
  { nombre: "Principios de algoritmos", ciclo: 1, prerequisitos: [] },
  { nombre: "Inglés I", ciclo: 1, prerequisitos: [] },
  { nombre: "Introducción a la vida universitaria", ciclo: 1, prerequisitos: [] },
  { nombre: "Comprensión y redacción de textos I", ciclo: 1, prerequisitos: [] },

  { nombre: "Laboratorio de cálculo aplicado a la física I", ciclo: 2, prerequisitos: ["Introducción a la matemática para ingeniería"] },
  { nombre: "Cálculo aplicado a la física I", ciclo: 2, prerequisitos: ["Introducción a la matemática para ingeniería"] },
  { nombre: "Matemática discreta", ciclo: 2, prerequisitos: ["Introducción a la matemática para ingeniería"] },
  { nombre: "Inglés II", ciclo: 2, prerequisitos: ["Inglés I"] },
  { nombre: "Comprensión y redacción de textos II", ciclo: 2, prerequisitos: ["Comprensión y redacción de textos I"] },
  { nombre: "Introducción a las TIC", ciclo: 2, prerequisitos: ["Introducción a la vida universitaria"] },
  { nombre: "Cálculo I", ciclo: 2, prerequisitos: ["Introducción a la matemática para ingeniería"] },

  { nombre: "Laboratorio de cálculo aplicado a la física II", ciclo: 3, prerequisitos: ["Cálculo I", "Cálculo aplicado a la física I", "Laboratorio de cálculo aplicado a la física I"] },
  { nombre: "Cálculo aplicado a la física II", ciclo: 3, prerequisitos: ["Cálculo I", "Cálculo aplicado a la física I", "Laboratorio de cálculo aplicado a la física I"] },
  { nombre: "Inglés III", ciclo: 3, prerequisitos: ["Inglés II"] },
  { nombre: "Ciudadanía y reflexión ética", ciclo: 3, prerequisitos: ["Individuo y medio ambiente", "Comprensión y redacción de textos I"] },
  { nombre: "Taller de programación", ciclo: 3, prerequisitos: ["Principios de algoritmos", "Introducción a las TIC"] },
  { nombre: "Estadística descriptiva y probabilidades", ciclo: 3, prerequisitos: ["Cálculo I"] },
  { nombre: "Cálculo II", ciclo: 3, prerequisitos: ["Cálculo I"] },

  { nombre: "Análisis y diseño de algoritmos", ciclo: 4, prerequisitos: ["Taller de programación", "Matemática discreta"] },
  { nombre: "Investigación académica", ciclo: 4, prerequisitos: ["Individuo y medio ambiente", "Comprensión y redacción de textos I"] },
  { nombre: "Inglés IV", ciclo: 4, prerequisitos: ["Inglés III"] },
  { nombre: "Problemas y desafíos en el Perú actual", ciclo: 4, prerequisitos: ["Individuo y medio ambiente", "Comprensión y redacción de textos I"] },
  { nombre: "Estadística inferencial", ciclo: 4, prerequisitos: ["Estadística descriptiva y probabilidades"] },
  { nombre: "Programación orientada a objetos", ciclo: 4, prerequisitos: ["Taller de programación"] },
  { nombre: "Base de datos", ciclo: 4, prerequisitos: ["Taller de programación"] },

  { nombre: "Herramientas informáticas para la toma de decisiones", ciclo: 5, prerequisitos: [] },
  { nombre: "Diseño de patrones", ciclo: 5, prerequisitos: ["Base de datos", "Programación orientada a objetos"] },
  { nombre: "Base de datos II", ciclo: 5, prerequisitos: ["Base de datos"] },
  { nombre: "Redes y comunicación de datos I", ciclo: 5, prerequisitos: ["Programación orientada a objetos"] },
  { nombre: "Taller de programación web", ciclo: 5, prerequisitos: ["Base de datos"] },
  { nombre: "Sistemas operativos", ciclo: 5, prerequisitos: ["Base de datos"] },
  { nombre: "Algoritmos y estructuras de datos", ciclo: 5, prerequisitos: ["Programación orientada a objetos", "Análisis y diseño de algoritmos"] },

  { nombre: "Gestión de proyectos", ciclo: 6, prerequisitos: ["Herramientas informáticas para la toma de decisiones"] },
  { nombre: "Hojas de estilo en cascada avanzado", ciclo: 6, prerequisitos: ["Taller de programación web"] },
  { nombre: "Administración y organización de empresas", ciclo: 6, prerequisitos: [] },
  { nombre: "Marcos de desarrollo web", ciclo: 6, prerequisitos: ["Taller de programación web"] },
  { nombre: "JavaScript avanzado", ciclo: 6, prerequisitos: ["Taller de programación web"] },
  { nombre: "Curso integrador I: sistemas – software", ciclo: 6, prerequisitos: ["Algoritmos y estructuras de datos"] },
  { nombre: "Análisis y diseño de sistemas de información", ciclo: 6, prerequisitos: ["Algoritmos y estructuras de datos"] },

  { nombre: "Herramientas de desarrollo", ciclo: 7, prerequisitos: ["JavaScript avanzado", "Marcos de desarrollo web", "Hojas de estilo en cascada avanzado"] },
  { nombre: "Diseño de productos y servicios", ciclo: 7, prerequisitos: ["Administración y organización de empresas"] },
  { nombre: "Seguridad informática", ciclo: 7, prerequisitos: ["Redes y comunicación de datos I"] },
  { nombre: "Desarrollo de software", ciclo: 7, prerequisitos: ["Análisis y diseño de sistemas de información"] },
  { nombre: "Desarrollo web integrado", ciclo: 7, prerequisitos: ["JavaScript avanzado", "Marcos de desarrollo web", "Hojas de estilo en cascada avanzado"] },
  { nombre: "Lenguajes de programación", ciclo: 7, prerequisitos: ["Algoritmos y estructuras de datos"] },
  { nombre: "Teoría en computación", ciclo: 7, prerequisitos: ["Algoritmos y estructuras de datos"] },

  { nombre: "Negociación y narrativa", ciclo: 8, prerequisitos: ["Administración y organización de empresas"] },
  { nombre: "Inteligencia de negocios", ciclo: 8, prerequisitos: ["Base de datos II", "Herramientas de desarrollo"] },
  { nombre: "Herramientas para la comunicación efectiva", ciclo: 8, prerequisitos: ["Curso integrador I: sistemas – software"] },
  { nombre: "Calidad de software", ciclo: 8, prerequisitos: ["Desarrollo de software"] },
  { nombre: "Desarrollo full stack", ciclo: 8, prerequisitos: ["Desarrollo de software", "Desarrollo web integrado"] },
  { nombre: "Innovación y transformación digital", ciclo: 8, prerequisitos: ["Análisis y diseño de sistemas de información"] },
  { nombre: "Desarrollo de aplicaciones móviles", ciclo: 8, prerequisitos: ["Análisis y diseño de sistemas de información"] },

  { nombre: "Sistemas de información empresarial", ciclo: 9, prerequisitos: ["Análisis y diseño de sistemas de información", "Administración y organización de empresas"] },
  { nombre: "Formación para la investigación - sistemas", ciclo: 9, prerequisitos: ["Curso integrador I: sistemas – software", "Comprensión y redacción de textos II", "Investigación académica"] },
  { nombre: "Curso integrador II: software", ciclo: 9, prerequisitos: ["Curso integrador I: sistemas – software", "Desarrollo full stack"] },
  { nombre: "Inteligencia artificial", ciclo: 9, prerequisitos: ["Innovación y transformación digital"] },
  { nombre: "Interacción hombre máquina", ciclo: 9, prerequisitos: ["Análisis y diseño de sistemas de información", "Diseño de productos y servicios"] },
  { nombre: "Pruebas de software", ciclo: 9, prerequisitos: ["Calidad de software"] },

  { nombre: "Taller de investigación - software", ciclo: 10, prerequisitos: ["Formación para la investigación - sistemas"] },
  { nombre: "Nuevas tecnologías y tendencias", ciclo: 10, prerequisitos: ["Innovación y transformación digital"] },
  { nombre: "Formación para la empleabilidad", ciclo: 10, prerequisitos: ["Herramientas para la comunicación efectiva"] },
  { nombre: "Servicios cloud", ciclo: 10, prerequisitos: ["Redes y comunicación de datos I"] },
  { nombre: "Ética profesional", ciclo: 10, prerequisitos: ["Formación para la investigación - sistemas"] },
  { nombre: "Ingeniería económica", ciclo: 10, prerequisitos: ["Sistemas de información empresarial"] },
  { nombre: "Liderazgo y gestión de equipos", ciclo: 10, prerequisitos: ["Administración y organización de empresas"] },
  { nombre: "Elementary business english", ciclo: 10, prerequisitos: ["Inglés IV"] },
  { nombre: "Gestión del servicio TI", ciclo: 10, prerequisitos: ["Análisis y diseño de sistemas de información"] }
];

const container = document.getElementById("malla");
const maxCiclo = Math.max(...cursos.map(c => c.ciclo));

for (let ciclo = 1; ciclo <= maxCiclo; ciclo++) {
  const divCiclo = document.createElement("div");
  divCiclo.className = "ciclo";
  divCiclo.innerHTML = `<h2>Ciclo ${ciclo}</h2>`;

  const bloque = document.createElement("div");
  bloque.className = "contenedor-cursos";

  cursos.filter(c => c.ciclo === ciclo).forEach(curso => {
    const div = document.createElement("div");
    div.className = "curso";
    div.innerHTML = `
      <h3>${curso.nombre}</h3>
      <div class="prereq">
        ${curso.prerequisitos.length > 0 ? `Prerrequisitos: ${curso.prerequisitos.join(", ")}` : "Sin prerrequisitos"}
      </div>
      <button onclick="this.parentElement.classList.toggle('aprobado')">Aprobar</button>
    `;
    bloque.appendChild(div);
  });

  divCiclo.appendChild(bloque);
  container.appendChild(divCiclo);
}
