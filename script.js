let indice = 0;
let correctas = 0;
let preguntasSeleccionadas = preguntas; // empieza con todas
let respuestasUsuario = new Array(preguntasSeleccionadas.length).fill(null);

function generarMenuNavegacion() {
  const nav = document.getElementById("navegacion");
  nav.innerHTML = "";

  respuestasUsuario = new Array(preguntasSeleccionadas.length).fill(null);

  preguntasSeleccionadas.forEach((_, i) => {
    const btn = document.createElement("button");
    btn.textContent = i + 1;
    btn.onclick = () => {
      indice = i;
      mostrarPregunta();
    };
    btn.id = `btn-preg-${i}`;
    nav.appendChild(btn);
  });
}

document.getElementById("filtroMateria").addEventListener("change", function () {
  const materiaSeleccionada = this.value;

  if (materiaSeleccionada === "todas") {
    preguntasSeleccionadas = preguntas;
  } else {
    preguntasSeleccionadas = preguntas.filter(p => p.materia === materiaSeleccionada);
  }

  // reiniciar estado
  indice = 0;
  correctas = 0;
  respuestasUsuario = new Array(preguntasSeleccionadas.length).fill(null);

  generarMenuNavegacion();
  mostrarPregunta();
});

function mostrarPregunta() {
  const contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = "";

  const p = preguntasSeleccionadas[indice];

  const div = document.createElement("div");
  div.className = "pregunta";
  div.innerHTML = `<h3>${indice + 1}. ${p.pregunta}</h3>`;

  p.opciones.forEach((op, i) => {
    const btn = document.createElement("button");
    btn.textContent = op;

    // Si ya respondió, mostrar colores
    if (respuestasUsuario[indice] !== null) {
      btn.disabled = true;
      if (i === p.respuesta) {
        btn.classList.add("correcta");
      }
      if (i === respuestasUsuario[indice] && i !== p.respuesta) {
        btn.classList.add("incorrecta");
      }
    }

    btn.onclick = () => {
      respuestasUsuario[indice] = i;
      if (i === p.respuesta) {
        correctas++;
      }
      mostrarPregunta(); // recargar para reflejar colores
    };

    div.appendChild(btn);
  });

  contenedor.appendChild(div);
  mostrarBotonesNavegacion(contenedor);
}

function mostrarBotonesNavegacion(div) {
  const navDiv = document.createElement("div");

  if (indice > 0) {
    const anterior = document.createElement("button");
    anterior.textContent = "Anterior";
    anterior.id = "anterior";
    anterior.onclick = () => {
      indice--;
      mostrarPregunta();
    };
    navDiv.appendChild(anterior);
  }

  if (indice < preguntasSeleccionadas.length - 1) {
    const siguiente = document.createElement("button");
    siguiente.textContent = "Siguiente";
    siguiente.id = "siguiente";
    siguiente.onclick = () => {
      indice++;
      mostrarPregunta();
    };
    navDiv.appendChild(siguiente);
  } else {
    const terminar = document.createElement("button");
    terminar.textContent = "Terminar";
    terminar.id = "terminar";
    terminar.onclick = mostrarResultadoFinal;
    navDiv.appendChild(terminar);
  }

  div.appendChild(navDiv);
}

function mostrarResultadoFinal() {
  const contenedor = document.getElementById("contenedor");
  const resultado = document.getElementById("resultado");
  contenedor.innerHTML = "";

  const correctasTotales = respuestasUsuario.filter(
    (r, i) => r === preguntasSeleccionadas[i].respuesta
  ).length;

  resultado.innerHTML = `<h2>Tu resultado: ${correctasTotales} de ${preguntasSeleccionadas.length} respuestas correctas.</h2>`;
}

// Inicializa
generarMenuNavegacion();
mostrarPregunta();
