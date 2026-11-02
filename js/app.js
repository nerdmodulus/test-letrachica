/* ═══ LA LETRA CHICA · lógica ═══ */

const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g,
  c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c]));

let orden = [], paso = 0, pillado = 0, vuelta = false;

/* ─── Pestañas ─── */
[].forEach.call(document.querySelectorAll(".p"), b => {
  b.onclick = () => {
    [].forEach.call(document.querySelectorAll(".p"), x => x.classList.remove("on"));
    [].forEach.call(document.querySelectorAll(".hoja"), x => x.classList.remove("activa"));
    b.classList.add("on");
    document.getElementById(b.dataset.hoja).classList.add("activa");
  };
});

/* ═══════════ GÓNDOLA ═══════════ */

function partirGondola() {
  orden = TERMINOS.map((t, i) => i).sort(() => Math.random() - .5);
  paso = 0; pillado = 0;
  tarjeta();
}

function tarjeta() {
  const t = TERMINOS[orden[paso]];
  vuelta = false;

  document.getElementById("avance").innerHTML =
    `<span>Envase <b>${paso + 1}</b> de ${TERMINOS.length}</span>
     <span>Te habrían pillado: <b>${pillado}</b></span>`;
  document.getElementById("riel").style.width = (paso / TERMINOS.length * 100) + "%";

  document.getElementById("escena").innerHTML = `
    <div class="carta" id="carta">
      <div class="cara frente">
        <div class="envase">Dice en el envase</div>
        <div class="frase">“${esc(t.frase)}”</div>
        <div class="promesa">
          <span>Lo que uno entiende</span>
          <p>${esc(t.promete)}</p>
        </div>
      </div>
      <div class="cara reverso">
        <div class="rotulo">🔍 La letra chica</div>
        <h3>Lo que significa en realidad</h3>
        <p>${esc(t.significa)}</p>
      </div>
    </div>`;

  document.getElementById("acciones").innerHTML =
    `<button class="lupa" id="lupa">🔍 Pásale la lupa</button>`;
  document.getElementById("lupa").onclick = voltear;
}

function voltear() {
  if (vuelta) return;
  vuelta = true;
  document.getElementById("carta").classList.add("vuelta");

  setTimeout(() => {
    document.getElementById("acciones").innerHTML = `
      <div class="conocias">
        <p>¿Sabías lo que significaba de verdad?</p>
        <div class="par">
          <button class="si" id="si">Sí, la tenía clara</button>
          <button class="no" id="no">No, me habría creído</button>
        </div>
      </div>`;
    document.getElementById("si").onclick = () => avanzar(false);
    document.getElementById("no").onclick = () => avanzar(true);
  }, 420);
}

function avanzar(mePillo) {
  if (mePillo) pillado++;
  paso++;
  paso < TERMINOS.length ? tarjeta() : cerrarGondola();
}

function cerrarGondola() {
  const total = TERMINOS.length;
  const prop = pillado / total;
  const titulo = prop === 0 ? "Imposible engañarte."
               : prop <= .25 ? "Sabes leer un envase."
               : prop <= .6  ? "Varias te pasaban piola."
               : "Casi todas te habrían pillado.";
  const frase = prop === 0
      ? "Reconociste todas. Ahora te toca explicárselo a alguien más."
      : `De ${total} frases, ${pillado} te habrían convencido en el pasillo del supermercado. Eso es exactamente lo que buscan los envases: que no te detengas a mirar.`;

  document.getElementById("riel").style.width = "100%";
  document.getElementById("avance").innerHTML = `<span>Recorriste los ${total} envases</span>`;
  document.getElementById("escena").innerHTML = `
    <div class="cierre">
      <div class="grande">${pillado}/${total}</div>
      <h3>${titulo}</h3>
      <p>${frase}</p>
      <button id="devuelta">Recorrer de nuevo</button>
    </div>`;
  document.getElementById("acciones").innerHTML = "";
  document.getElementById("devuelta").onclick = partirGondola;
}

/* ═══════════ DICCIONARIO ═══════════ */

function diccionario(txt) {
  const t = (txt || "").toLowerCase();
  const v = TERMINOS.filter(x =>
    (x.frase + " " + x.promete + " " + x.significa).toLowerCase().indexOf(t) > -1);
  document.getElementById("lista").innerHTML = v.length
    ? v.map(x => `
      <div class="tm">
        <div class="titulo">“${esc(x.frase)}”</div>
        <div class="fila pro"><span class="icono">!</span>
          <span><b>Promete</b>${esc(x.promete)}</span></div>
        <div class="fila sig"><span class="icono">✓</span>
          <span><b>Significa en realidad</b>${esc(x.significa)}</span></div>
      </div>`).join("")
    : `<p class="nada">No encontramos esa frase en el diccionario.</p>`;
}

document.getElementById("q").oninput = e => diccionario(e.target.value);

/* ═══════════ SELLOS ═══════════ */

document.getElementById("sellos").innerHTML = SELLOS.map(s => `
  <div class="sl">
    <div class="oc">${esc(s.nombre)}</div>
    <b>${esc(s.nombre)}</b>
    <p>${esc(s.texto)}</p>
  </div>`).join("");

[].forEach.call(document.querySelectorAll(".sl"), d => {
  d.onclick = () => d.classList.toggle("ab");
});

/* ─── Arranque ─── */
partirGondola();
diccionario("");
