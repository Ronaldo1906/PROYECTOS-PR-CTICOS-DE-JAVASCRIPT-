// 1. Datos iniciales: Arreglo de objetos (Aprendices)
const aprendices = [
    { nombre: "Ronaldo Meza", nota: 4.5 },
    { nombre: "Ana García", nota: 2.8 },
    { nombre: "Daniel Bustos", nota: 3.2 },
    { nombre: "Julian Murillo", nota: 5.0 },
    { nombre: "Carlos      Ruiz", nota: 2.5 }
];

// 2. Transformar nombres a MAYÚSCULAS (Uso de map)
const nombresMayusculas = aprendices.map(a => ({
    ...a,
    nombre: a.nombre.toUpperCase()
}));

// 3. Filtrar Aprobados (nota >= 3.0) y Reprobados (Uso de filter)
const aprobados = nombresMayusculas.filter(a => a.nota >= 3.0);
const reprobados = nombresMayusculas.filter(a => a.nota < 3.0);

// 4. Calcular el Promedio General (Uso de reduce)
const sumaNotas = nombresMayusculas.reduce((acc, a) => acc + a.nota, 0);
const promedioGeneral = sumaNotas / nombresMayusculas.length;

// 5. Clasificación con Switch (Dentro de una función)
function clasificarNota(nota) {
    switch (true) {
        case (nota === 5):
            return "Superior";
        case (nota >= 4):
            return "Alto";
        case (nota >= 3):
            return "Básico";
        default:
            return "Bajo";
    }
}

// 6. Ordenar por nota de mayor a menor (Uso de sort)
const ordenados = [...nombresMayusculas].sort((a, b) => b.nota - a.nota);

// --- MOSTRAR RESULTADOS EN CONSOLA ---

console.log("=== REPORTE DE APRENDICES ===");
ordenados.forEach(a => {
    console.log(`${a.nombre} - Nota: ${a.nota} - Clasificación: ${clasificarNota(a.nota)}`);
});

console.log("\n--- ESTADÍSTICAS ---");
console.log(`Promedio General del Grupo: ${promedioGeneral.toFixed(2)}`);
console.log(`Total Aprobados: ${aprobados.length}`);
console.log(`Total Reprobados: ${reprobados.length}`);

// 7. Reto Extra: Buscar un aprendiz específico (Uso de find)
const busqueda = "RONALDO MEZA";
const encontrado = nombresMayusculas.find(a => a.nombre === busqueda);
if (encontrado) {
    console.log(`\nBúsqueda: Se encontró a ${encontrado.nombre} con nota ${encontrado.nota}`);
}