/* ═══════════════════════════════════════════════════════════════════
   LA LETRA CHICA · Banco de contenidos
   NutriLab · Universidad Autónoma de Chile + Liceo 7 de Providencia

   Para agregar una frase de envase, copia un bloque y cámbialo.
   ═══════════════════════════════════════════════════════════════════ */

const TERMINOS = [
{
  frase: "Light",
  promete: "Que es la opción sana del producto.",
  significa: "Solo que tiene 25% menos de algún nutriente que la versión original. Puede ser light en grasa y seguir siendo alto en azúcar."
},
{
  frase: "Sin azúcar",
  promete: "Que no se le agregó azúcar.",
  significa: "Igual tiene una gran cantidad de azúcar dependiendo del ingrediente principal."
},
{
  frase: "Bajo en sodio",
  promete: "Que es más sano y se puede comer sin preocuparse de la sal.",
  significa: "El alimento cumple con los límites estrictos de contenido de sal."
},
{
  frase: "Sin lactosa",
  promete: "Facilitar la digestión y evitar malestares estomacales en personas con intolerancia a la lactosa.",
  significa: "Son productos con enzimas añadidas para neutralizar la lactosa."
},
{
  frase: "100% natural",
  promete: "Que sus componentes provienen de fuentes de origen vegetal, animal o mineral.",
  significa: "Que todos sus componentes provienen directamente de la naturaleza y que no contienen sustancias creadas en un laboratorio."
},
{
  frase: "Sin cafeína",
  promete: "No contener cafeína.",
  significa: "Es aquel al que se le ha extraído la mayor parte de la cafeína (generalmente un 97% o más) mediante procesos químicos o naturales antes de su comercialización."
},
{
  frase: "Producto vegano",
  promete: "Basado en plantas (plant based), saludable.",
  significa: "Ausencia total de ingredientes de origen animal. No siempre son sanos y no significa que no fueron procesados."
},
{
  frase: "Sin gluten",
  promete: "Ausencia de gluten.",
  significa: "Contiene una cantidad menor de 20 miligramos por kilogramo de producto."
},
{
  frase: "Sin conservantes",
  promete: "Ausencia de químicos artificiales para prolongar la vida útil de un producto.",
  significa: "En su elaboración no se le añadieron sustancias químicas para prolongar su duración, pero se pudieron haber usado otros tipos de conservantes (sal)."
},
{
  frase: "Integral",
  promete: "Que es rico en fibra y mejora la digestión.",
  significa: "Conserva todas sus partes sin eliminar la capa externa en el refinamiento. Es importante leer la cantidad de harina integral que contiene."
},
{
  frase: "Orgánico",
  promete: "Ser más natural, saludable y mejor para el medio ambiente.",
  significa: "No significa sin azúcar, ni que no fue procesado; puede tener mucha grasa."
},
{
  frase: "Alto en proteína",
  promete: "Ser un alimento más nutritivo y ayudar en la generación y regeneración de músculo.",
  significa: "Contiene una cantidad elevada de proteínas, pero también puede tener mucha grasa, azúcar o sodio."
}
];

/* ─── Los cuatro sellos de la ley chilena ─── */
const SELLOS = [
{
  nombre: "Alto en azúcares",
  texto: "Lo lleva el producto que supera el límite de azúcar que fija la ley chilena para 100 g o 100 ml. No dice cuánto lo supera."
},
{
  nombre: "Alto en sodio",
  texto: "Avisa que el producto es alto en sal, aunque no sepa salado. Muchos cereales y panes lo llevan."
},
{
  nombre: "Alto en grasas saturadas",
  texto: "Se refiere al tipo de grasa, no a la cantidad total. Un producto sin este sello igual puede ser alto en calorías."
},
{
  nombre: "Alto en calorías",
  texto: "Mide la energía en 100 g o 100 ml, igual que los otros sellos, no por porción. Ojo con la porción: a veces el envase trae tres y uno se lo come entero."
}
];
