// Calcula el precio final después de aplicar un descuento porcentual.
function calculateDiscount(price, percentage) { // Declara la función y recibe el precio y el porcentaje de descuento.
  const discount = price * (percentage / 100); // Convierte el porcentaje a decimal y calcula el descuento.
  return price - discount; // Resta el descuento al precio original y devuelve el resultado.
} // Termina la función de cálculo del descuento.

// Convierte una temperatura de grados Celsius a grados Fahrenheit.
function celsiusToFahrenheit(celsius) { // Declara la función y recibe la temperatura en Celsius.
  return (celsius * 9) / 5 + 32; // Aplica la fórmula de conversión y devuelve los grados Fahrenheit.
} // Termina la función de conversión de temperatura.

// Indica si un número es par.
function isEven(number) { // Declara la función y recibe el número que se va a comprobar.
  return number % 2 === 0; // Comprueba si el residuo al dividir entre dos es cero.
} // Termina la función que comprueba números pares.

// Calcula el factorial de un número entero no negativo.
function factorial(number) { // Declara la función y recibe el número cuyo factorial se calculará.
  let result = 1; // Inicializa el resultado en uno, el elemento neutro de la multiplicación.
  for (let current = 2; current <= number; current += 1) { // Recorre desde dos hasta el número recibido.
    result *= current; // Multiplica el resultado acumulado por el valor actual.
  } // Termina el ciclo que calcula el factorial.
  return result; // Devuelve el factorial calculado.
} // Termina la función de factorial.

// Invierte el orden de los caracteres de un texto.
function reverseText(text) { // Declara la función y recibe el texto que se invertirá.
  return text.split("").reverse().join(""); // Separa caracteres, invierte el arreglo y vuelve a unirlo.
} // Termina la función que invierte textos.

// Comprueba si un texto es palíndromo ignorando espacios, signos y mayúsculas.
function isPalindrome(text) { // Declara la función y recibe el texto que se comprobará.
  const normalized = text.toLowerCase().replace(/[^a-z0-9áéíóúüñ]/gi, ""); // Normaliza el texto y elimina caracteres que no sean letras o números.
  return normalized === normalized.split("").reverse().join(""); // Compara el texto normalizado con su versión invertida.
} // Termina la función que comprueba palíndromos.

// Cuenta las vocales de un texto en español.
function countVowels(text) { // Declara la función y recibe el texto que se analizará.
  const matches = text.match(/[aeiouáéíóúü]/gi); // Busca todas las vocales, sin distinguir entre mayúsculas y minúsculas.
  return matches ? matches.length : 0; // Devuelve cuántas coincidencias hubo o cero si no se encontró ninguna.
} // Termina la función que cuenta vocales.

// Encuentra el número más grande de un arreglo no vacío.
function findLargest(numbers) { // Declara la función y recibe un arreglo de números.
  return Math.max(...numbers); // Expande los valores del arreglo y devuelve el mayor.
} // Termina la función que busca el número mayor.

// Suma todos los números de un arreglo.
function sumNumbers(numbers) { // Declara la función y recibe el arreglo que se sumará.
  return numbers.reduce((total, number) => total + number, 0); // Acumula cada número comenzando desde cero.
} // Termina la función que suma números.

// Elimina valores repetidos conservando el orden original.
function removeDuplicates(values) { // Declara la función y recibe un arreglo que puede contener repeticiones.
  return [...new Set(values)]; // Crea un conjunto de valores únicos y lo convierte nuevamente en arreglo.
} // Termina la función que elimina duplicados.

// Cuenta las palabras de un texto separado por espacios.
function countWords(text) { // Declara la función y recibe el texto que se contará.
  const words = text.trim().split(/\s+/); // Quita espacios exteriores y separa por uno o más espacios.
  return text.trim() ? words.length : 0; // Devuelve el total o cero cuando el texto está vacío.
} // Termina la función que cuenta palabras.

// Convierte la primera letra de cada palabra a mayúscula.
function capitalizeWords(text) { // Declara la función y recibe el texto que se transformará.
  return text.toLowerCase().replace(/(^|[^\p{L}\p{N}])(\p{L})/gu, (_, separator, letter) => separator + letter.toUpperCase()); // Normaliza el texto y pone en mayúscula la primera letra de cada palabra, incluidas las letras acentuadas.
} // Termina la función que capitaliza palabras.

// Genera la tabla de multiplicar de un número hasta un límite indicado.
function multiplicationTable(number, limit) { // Declara la función y recibe el número y el límite de la tabla.
  return Array.from({ length: limit }, (_, index) => `${number} x ${index + 1} = ${number * (index + 1)}`); // Crea cada renglón de la tabla desde uno hasta el límite.
} // Termina la función que genera tablas de multiplicar.

// Calcula el total de una cuenta incluyendo la propina.
function calculateTip(bill, percentage) { // Declara la función y recibe el importe de la cuenta y el porcentaje de propina.
  const tip = bill * (percentage / 100); // Calcula la propina usando el porcentaje recibido.
  return { tip, total: bill + tip }; // Devuelve tanto la propina como el total de la cuenta.
} // Termina la función que calcula la propina.

// Comprueba de forma básica que un correo tenga un formato reconocible.
function isValidEmail(email) { // Declara la función y recibe el correo que se validará.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Comprueba que haya texto antes y después de arroba y un punto en el dominio.
} // Termina la función que valida correos.

// Guarda el nombre de cada ejercicio y la función que se mostrará.
const practicalCases = [ // Inicia la lista de las quince funciones.
  { title: "Precio con descuento", description: "Toma un precio y un porcentaje de descuento. Calcula cuánto dinero se descuenta y lo resta del precio inicial.", example: "Ejemplo: un producto cuesta $1,200 y tiene 15% de descuento.", fn: calculateDiscount, args: [1200, 15] }, // Función 1: calcula el precio con descuento.
  { title: "Conversión de temperatura", description: "Convierte una temperatura en grados Celsius a su equivalente en grados Fahrenheit.", example: "Ejemplo: convierte 25 °C.", fn: celsiusToFahrenheit, args: [25] }, // Función 2: convierte Celsius a Fahrenheit.
  { title: "Número par", description: "Revisa si un número se puede dividir entre 2 sin dejar residuo. El resultado true significa que es par; false, que es impar.", example: "Ejemplo: comprueba el número 42.", fn: isEven, args: [42] }, // Función 3: comprueba si un número es par.
  { title: "Factorial", description: "Multiplica entre sí todos los enteros desde 1 hasta el número indicado. Por ejemplo, 5 factorial es 1 × 2 × 3 × 4 × 5.", example: "Ejemplo: calcula el factorial de 5.", fn: factorial, args: [5] }, // Función 4: calcula un factorial.
  { title: "Invertir texto", description: "Devuelve el mismo texto con sus caracteres en orden inverso, empezando por el último.", example: 'Ejemplo: invierte el texto "JavaScript".', fn: reverseText, args: ["JavaScript"] }, // Función 5: invierte un texto.
  { title: "Palíndromo", description: "Comprueba si una frase se lee igual de izquierda a derecha que de derecha a izquierda. Ignora espacios, signos y mayúsculas.", example: 'Ejemplo: revisa la frase "Anita lava la tina".', fn: isPalindrome, args: ["Anita lava la tina"] }, // Función 6: comprueba un palíndromo.
  { title: "Contar vocales", description: "Cuenta cuántas vocales aparecen en una palabra o frase. Incluye vocales con acento.", example: 'Ejemplo: cuenta las vocales de "Educación".', fn: countVowels, args: ["Educación"] }, // Función 7: cuenta vocales.
  { title: "Número más grande", description: "Compara los números de una lista y devuelve el valor más alto.", example: "Ejemplo: busca el mayor entre 12, 45, 7, 89 y 23.", fn: findLargest, args: [[12, 45, 7, 89, 23]] }, // Función 8: encuentra el número mayor.
  { title: "Suma de números", description: "Suma todos los valores de una lista y devuelve el total.", example: "Ejemplo: suma 10 + 20 + 30 + 40.", fn: sumNumbers, args: [[10, 20, 30, 40]] }, // Función 9: suma los números de un arreglo.
  { title: "Quitar duplicados", description: "Crea una lista nueva quitando los valores repetidos. Conserva el orden en que aparecieron por primera vez.", example: 'Ejemplo: de "rojo, azul, rojo, verde" conserva una sola vez cada color.', fn: removeDuplicates, args: [["rojo", "azul", "rojo", "verde"]] }, // Función 10: elimina duplicados.
  { title: "Contar palabras", description: "Cuenta las palabras de una frase separadas por espacios. Los espacios adicionales no aumentan el conteo.", example: 'Ejemplo: cuenta las palabras de "Aprender JavaScript es divertido".', fn: countWords, args: ["Aprender JavaScript es divertido"] }, // Función 11: cuenta palabras.
  { title: "Mayúscula por palabra", description: "Pasa el texto a minúsculas y luego pone en mayúscula la primera letra de cada palabra.", example: 'Ejemplo: transforma "buenos días, javascript".', fn: capitalizeWords, args: ["buenos días, javascript"] }, // Función 12: capitaliza cada palabra.
  { title: "Tabla de multiplicar", description: "Genera las operaciones de multiplicación desde 1 hasta el límite elegido y las presenta en una lista.", example: "Ejemplo: genera la tabla del 7 desde 7 × 1 hasta 7 × 5.", fn: multiplicationTable, args: [7, 5] }, // Función 13: genera una tabla.
  { title: "Cuenta con propina", description: "Calcula el importe de la propina según un porcentaje y devuelve tanto la propina como el total a pagar.", example: "Ejemplo: añade 10% de propina a una cuenta de $500.", fn: calculateTip, args: [500, 10] }, // Función 14: calcula la propina.
  { title: "Validar correo", description: "Hace una comprobación básica del formato: debe haber texto antes y después de @, y un punto en el dominio. No verifica que el correo exista.", example: 'Ejemplo: revisa el formato de "alumno@ejemplo.com".', fn: isValidEmail, args: ["alumno@ejemplo.com"] }, // Función 15: valida un correo.
]; // Termina la lista de funciones.

// Obtiene la sección donde se mostrarán los ejercicios.
const caseList = document.querySelector("#case-list"); // Busca el contenedor principal de la página.

// Muestra únicamente el resultado de cada función.
practicalCases.forEach((practicalCase, index) => { // Recorre cada uno de los quince ejemplos.
  const card = document.createElement("article"); // Crea una tarjeta para el ejemplo.
  card.className = "case-card"; // Asigna la clase visual de tarjeta.
  const heading = document.createElement("h2"); // Crea el título del ejemplo.
  heading.textContent = `${index + 1}. ${practicalCase.title}`; // Añade número y nombre del caso.
  const description = document.createElement("p"); // Crea una explicación sencilla de la función.
  description.textContent = practicalCase.description; // Muestra qué hace la función.
  const example = document.createElement("p"); // Crea una descripción de los datos del ejemplo.
  example.className = "function-example"; // Asigna una clase visual al ejemplo.
  example.textContent = practicalCase.example; // Explica con qué datos se obtiene el resultado.
  const result = document.createElement("p"); // Crea el espacio para mostrar el resultado.
  result.className = "function-result"; // Asigna una clase para dar estilo al resultado.
  result.textContent = JSON.stringify(practicalCase.fn(...practicalCase.args), null, 2); // Ejecuta la función y muestra su resultado.
  card.append(heading, description, example, result); // Añade título, explicación, ejemplo y resultado a la tarjeta.
  caseList.append(card); // Inserta la tarjeta en la página.
}); // Termina la creación de los ejemplos.
