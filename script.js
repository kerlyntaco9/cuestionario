let indice = 0;
let correctas = 0;
let respuestasUsuario = new Array(preguntas.length).fill(null);
function generarMenuNavegacion() {
  const nav = document.getElementById("navegacion");
  nav.innerHTML = "";

  preguntasSeleccionadas = preguntas; // usar todas
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


function mostrarPregunta() {
  const contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = "";

  const p = preguntas[indice];
  const div = document.createElement("div");
  div.className = "pregunta";
  div.innerHTML = `<h3>${indice + 1}. ${p.pregunta}</h3>`;

  p.opciones.forEach((op, i) => {
    const btn = document.createElement("button");
    btn.textContent = op;

    // Si ya respondió, mostrar colores
    if (respuestasUsuario[indice] !== null) {
      btn.disabled = true;
      if (i === preguntas[indice].respuesta) {
        btn.classList.add("correcta");
      }
      if (i === respuestasUsuario[indice] && i !== preguntas[indice].respuesta) {
        btn.classList.add("incorrecta");
      }
    }

    btn.onclick = () => {
      respuestasUsuario[indice] = i;
      if (i === preguntas[indice].respuesta) {
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

  if (indice < preguntas.length - 1) {
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
    terminar.id = "siguiente";
    terminar.onclick = mostrarResultadoFinal;
    navDiv.appendChild(terminar);
  }

  div.appendChild(navDiv);
}

function mostrarResultadoFinal() {
  const contenedor = document.getElementById("contenedor");
  const resultado = document.getElementById("resultado");
  contenedor.innerHTML = "";
  resultado.innerHTML = `<h2>Tu resultado: ${respuestasUsuario.filter((r, i) => r === preguntas[i].respuesta).length} de ${preguntas.length} respuestas correctas.</h2>`;
}

generarMenuNavegacion();
mostrarPregunta();

