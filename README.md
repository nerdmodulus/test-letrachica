# La letra chica · NutriLab

Traductor de frases de envase. Estático: solo HTML, CSS y JavaScript.

```
index.html
css/estilos.css
js/terminos.js    ← las frases y los sellos (esto es lo que se edita)
js/app.js         ← la lógica
assets/logo-ua.svg
```

## Publicar

Sube todo al repositorio respetando las carpetas y activa
**Settings → Pages → Branch: main / root**.

## Las tres pestañas

**Góndola.** El juego. Aparece una tarjeta como si fuera el envase, con la frase
grande y lo que uno entiende al leerla rápido. El botón "Pásale la lupa" voltea la
tarjeta en 3D y muestra lo que significa en realidad. Después pregunta si lo sabías,
y al final cuenta cuántas te habrían pillado en el supermercado. Las frases salen
en orden distinto cada vez.

**Diccionario.** Las doce frases con buscador, para consultar cualquiera.

**Sellos.** Los cuatro octógonos ALTO EN; se tocan para ver qué mide cada uno.

## Editar los contenidos

Todo está en `js/terminos.js`. Para agregar una frase de envase:

```js
{
  frase: "Fuente de fibra",
  promete: "...",
  significa: "..."
}
```

Y para los sellos, al final del mismo archivo:

```js
{ nombre: "Alto en azúcares", texto: "..." }
```

El contador de la góndola y el diccionario se actualizan solos. No hay que tocar
nada más.

## Un detalle de redacción

"Promete" funciona mejor cuando está escrito como lo entendería alguien que pasa
rápido por el pasillo, no como una definición. Comparar "Que es la opción sana del
producto" con "Ausencia de gluten" muestra la diferencia: la primera suena a lo que
uno piensa frente a la góndola, la segunda a glosario. Vale la pena pasarle esa
observación al grupo si alcanzan a pulir los textos.
