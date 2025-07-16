// ========== script.js ==========
const cursos = [
  // Primer ciclo
  { nombre: "Introducción a la matemática para ingeniería", ciclo: 1, prerequisitos: [] },
  { nombre: "Individuo y medio ambiente", ciclo: 1, prerequisitos: [] },
  { nombre: "Principios de algoritmos", ciclo: 1, prerequisitos: [] },
  { nombre: "Ingles I", ciclo: 1, prerequisitos: [] },
  { nombre: "Introduccion a la vida universitaria", ciclo: 1, prerequisitos: [] },
  { nombre: "Comprension y redacción de textos I", ciclo: 1, prerequisitos: [] },

  // Segundo ciclo
  { nombre: "Laboratorio de cálculo aplicado a la física I", ciclo: 2, prerequisitos: ["Introducción a la matemática para ingeniería"] },
  { nombre: "Cálculo aplicado a la física I", ciclo: 2, prerequisitos: ["Introducción a la matemática para ingeniería"] },
  { nombre: "Matemática discreta", ciclo: 2, prerequisitos: ["Introducción a la matemática para ingeniería"] },
  { nombre: "Ingles II", ciclo: 2, prerequisitos: ["Ingles I"] },
  { nombre: "Comprensión y redacción de textos II", ciclo: 2, prerequisitos: ["Comprension y redacción de textos I"] },
  { nombre: "Introducción a las Tic", ciclo: 2, prerequisitos: ["Introduccion a la vida universitaria"] },
  { nombre: "Calculo I", ciclo: 2, prerequisitos: ["Introducción a la matemática para ingeniería"] },

  // Tercer ciclo
  { nombre: "Laboratorio de cálculo aplicado a la física II", ciclo: 3, prerequisitos: ["Calculo I", "Cálculo aplicado a la física I", "Laboratorio de cálculo aplicado a la física I"] },
  { nombre: "Cálculo aplicado a la física II", ciclo: 3, prerequisitos: ["Calculo I", "Cálculo aplicado a la física I", "Laboratorio de cálculo aplicado a la física I"] },
  { nombre: "Ingles III", ciclo: 3, prerequisitos: ["Ingles II"] },
  { nombre: "Ciudadanía y reflexión ética", ciclo: 3, prerequisitos: ["Individuo y medio ambiente", "Comprension y redacción de textos I"] },
  { nombre: "Taller de programación", ciclo: 3, prerequisitos: ["Principios de algoritmos", "Introducción a las Tic"] },
  { nombre: "Estadística descriptiva y probabilidades", ciclo: 3, prerequisitos: ["Calculo I"] },
  { nombre: "Calculo II", ciclo: 3, prerequisitos: ["Calculo I"] },

  // Cuarto ciclo
  { nombre: "Análisis y diseño de algoritmos", ciclo: 4, prerequisitos: ["Taller de programación", "Matemática discreta"] },
  { nombre: "Investigación académica", ciclo: 4, prerequisitos: ["Individuo y medio ambiente", "Comprension y redacción de textos I"] },
  { nombre: "Inglés IV", ciclo: 4, prerequisitos: ["Ingles III"] },
  { nombre: "Problemas y desafíos en el Perú actual", ciclo: 4, prerequisitos: ["Individuo y medio ambiente", "Comprension y redacción de textos I"] },
  { nombre: "Estadística inferencial", ciclo: 4, prerequisitos: ["Estadística descriptiva y probabilidades"] },
  { nombre: "Programación orientada a objetos", ciclo: 4, prerequisitos: ["Taller de programación"] },
  { nombre: "Base de datos", ciclo: 4, prerequisitos: ["Taller de programación"] },

  // Quinto ciclo
  { nombre: "Herramientas informáticas para la toma de decisiones", ciclo: 5, prerequisitos: [] },
  { nombre: "Diseño de patrones", ciclo: 5, prerequisitos: ["Base de datos", "Programación orientada a objetos"] },
  { nombre: "Base de datos II", ciclo: 5, prerequisitos: ["Base de datos"] },
  { nombre: "Redes y comunicación de datos I", ciclo: 5, prerequisitos: ["Programación orientada a objetos"] },
  { nombre: "Taller de programación web", ciclo: 5, prerequisitos: ["Base de datos"] },
  { nombre: "Sistemas operativos", ciclo: 5, prerequisitos: ["Base de datos"] },
  { nombre: "Algoritmos y estructuras de datos", ciclo: 5, prerequisitos: ["Programación orientada a objetos", "Análisis y diseño de algoritmos"] },

  // Sexto ciclo
  { nombre: "Gestión de proyectos", ciclo: 6, prerequisitos: ["Herramientas informáticas para la toma de decisiones"] },
  { nombre: "Hojas de estilo en cascada avanzado", ciclo: 6, prerequisitos: ["Taller de programación web"] },
  { nombre: "Administración y organización de empresas", ciclo: 6, prerequisitos: [] },
  { nombre: "Marcos de desarrollo web", ciclo: 6, prerequisitos: ["Taller de programación web"] },
  { nombre: "JavaScript avanzado", ciclo: 6, prerequisitos: ["Taller de programación web"] },
  { nombre: "Curso integrador I: sistemas – software", ciclo: 6, prerequisitos: ["Algoritmos y estructuras de datos"] },
  { nombre: "Análisis y diseño de sistemas de información", ciclo: 6, prerequisitos: ["Algoritmos y estructuras de datos"] },

  // Séptimo ciclo
  { nombre: "Herramientas de desarrollo", ciclo: 7, prerequisitos: ["JavaScript avanzado", "Marcos de desarrollo web", "Hojas de estilo en cascada avanzado"] },
  { nombre: "Diseño de productos y servicios", ciclo: 7, prerequisitos: ["Administración y organización de empresas"] },
  { nombre: "Seguridad informática", ciclo: 7, prerequisitos: ["Redes y comunicación de datos I"] },
  { nombre: "Desarrollo de software", ciclo: 7, prerequisitos: ["Análisis y diseño de sistemas de información"] },
  { nombre: "Desarrollo web integrado", ciclo: 7, prerequisitos: ["JavaScript avanzado", "Marcos de desarrollo web", "Hojas de estilo en cascada avanzado"] },
  { nombre: "Lenguajes de programación", ciclo: 7, prerequisitos: ["Algoritmos y estructuras de datos"] },
  { nombre: "Teoría en computación", ciclo: 7, prerequisitos: ["Algoritmos y estructuras de datos"] },

  // Octavo ciclo
  { nombre: "Negociación y narrativa", ciclo: 8, prerequisitos: ["Administración y organización de empresas"] },
  { nombre: "Inteligencia de negocios", ciclo: 8, prerequisitos: ["Base de datos II", "Herramientas de desarrollo"] },
  { nombre: "Herramientas para la comunicación efectiva", ciclo: 8, prerequisitos: ["Curso integrador I: sistemas – software"] },
  { nombre: "Calidad de software", ciclo: 8, prerequisitos: ["Desarrollo de software"] },
  { nombre: "Desarrollo full stack", ciclo: 8, prerequisitos: ["Desarrollo de software", "Desarrollo web integrado"] },
  { nombre: "Innovación y transformación digital", ciclo: 8, prerequisitos: ["Análisis y diseño de sistemas de información"] },
  { nombre: "Desarrollo de aplicaciones móviles", ciclo: 8, prerequisitos: ["Análisis y diseño de sistemas de información"] },

  // Noveno ciclo
  { nombre: "Sistemas de información empresarial", ciclo: 9, prerequisitos: ["Análisis y diseño de sistemas de información", "Administración y organización de empresas"] },
  { nombre: "Formación para la investigación - sistemas", ciclo: 9, prerequisitos: ["Curso integrador I: sistemas – software", "Comprensión y redacción de textos II", "Investigación académica"] },
  { nombre: "Curso integrador II: software", ciclo: 9, prerequisitos: ["Curso integrador I: sistemas – software", "Desarrollo full stack"] },
  { nombre: "Inteligencia artificial", ciclo: 9, prerequisitos: ["Innovación y transformación digital"] },
  { nombre: "Interacción hombre máquina", ciclo: 9, prerequisitos: ["Análisis y diseño de sistemas de información", "Diseño de productos y servicios"] },
  { nombre: "Pruebas de software", ciclo: 9, prerequisitos: ["Calidad de software"] },

  // Décimo ciclo
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
const aprobados = new Set();
const cursoElements = {};

const maxCiclo = Math.max(...cursos.map(c => c.ciclo));

for (let ciclo = 1; ciclo <= maxCiclo; ciclo++) {
  const divCiclo = document.createElement("div");
  divCiclo.className = "ciclo";

  const titulo = document.createElement("h2");
  titulo.textContent = `Ciclo ${ciclo}`;
  divCiclo.appendChild(titulo);

  const contenedorCursos = document.createElement("div");
  contenedorCursos.className = "contenedor-cursos";
  contenedorCursos.style.display = "flex";
  contenedorCursos.style.flexWrap = "wrap";
  contenedorCursos.style.gap = "10px";
  contenedorCursos.style.backgroundColor = "#111";
  contenedorCursos.style.padding = "10px";
  contenedorCursos.style.borderRadius = "10px";
  contenedorCursos.style.marginBottom = "20px";

  cursos.filter(c => c.ciclo === ciclo).forEach(curso => {
    const div = document.createElement("div");
    div.className = "curso";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.padding = "10px";
    div.style.backgroundColor = "#1f1f1f";
    div.style.border = "1px solid #0f0";
    div.style.borderRadius = "8px";
    div.style.width = "200px";
    div.style.cursor = "pointer";

    const tituloCurso = document.createElement("h3");
    tituloCurso.textContent = curso.nombre;
    tituloCurso.style.fontSize = "14px";
    tituloCurso.style.textAlign = "center";
    tituloCurso.style.color = "#bdfcc9";
    div.appendChild(tituloCurso);

    div.onclick = () => {
      if (!div.classList.contains("bloqueado")) {
        if (aprobados.has(curso.nombre)) {
          aprobados.delete(curso.nombre);
          div.classList.remove("aprobado");
        } else {
          aprobados.add(curso.nombre);
          div.classList.add("aprobado");
        }
        revisarDesbloqueos();
      }
    };

    contenedorCursos.appendChild(div);
    cursoElements[curso.nombre] = { div, curso };
  });

  divCiclo.appendChild(contenedorCursos);
  container.appendChild(divCiclo);
}

function revisarDesbloqueos() {
  Object.values(cursoElements).forEach(({ curso, div }) => {
    const desbloqueado = curso.prerequisitos.every(p => aprobados.has(p));

    if (aprobados.has(curso.nombre)) {
      div.classList.add("aprobado");
      div.classList.remove("bloqueado");
    } else if (desbloqueado) {
      div.classList.remove("bloqueado");
      div.classList.add("desbloqueado");
    } else {
      div.classList.add("bloqueado");
      div.classList.remove("desbloqueado");
      div.classList.remove("aprobado");
    }
  });
}

// Desbloquea los que no tienen prerrequisitos desde el inicio
revisarDesbloqueos();
