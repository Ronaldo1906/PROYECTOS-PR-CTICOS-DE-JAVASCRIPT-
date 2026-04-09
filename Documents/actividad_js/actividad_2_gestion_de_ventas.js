// 1. Datos iniciales: Inventario de la tienda
const inventario = [
    { id: 101, nombre: "Laptop Gamer", precio: 2500, stock: 5, vendidos: 12 },
    { id: 102, nombre: "Monitor 4K", precio: 400, stock: 0, vendidos: 8 },
    { id: 103, nombre: "Teclado Mecánico", precio: 120, stock: 15, vendidos: 25 },
    { id: 104, nombre: "Mouse Inalámbrico", precio: 50, stock: 2, vendidos: 40 },
    { id: 105, nombre: "Audífonos Pro", precio: 180, stock: 10, vendidos: 15 }
];

// 2. Filtrar productos agotados o con stock bajo (< 3)
const alertaStock = inventario.filter(p => p.stock < 3);

// 3. Calcular el valor total del inventario (Precio * Stock)
const valorTotalInventario = inventario.reduce((acc, p) => acc + (p.precio * p.stock), 0);

// 4. Calcular el total de ingresos por ventas (Precio * Vendidos)
const ingresosTotales = inventario.reduce((acc, p) => acc + (p.precio * p.vendidos), 0);

// 5. Encontrar el producto más vendido (Uso de sort para ranking)
const productoMasVendido = [...inventario].sort((a, b) => b.vendidos - a.vendidos)[0];

// 6. Reporte de productos ordenados por precio (Mayor a Menor)
const productosPorPrecio = [...inventario].sort((a, b) => b.precio - a.precio);

// --- SALIDA DE DATOS ---

console.log("=== SISTEMA DE GESTIÓN DE VENTAS ===");

console.log("\n--- INVENTARIO POR PRECIO ---");
productosPorPrecio.forEach(p => {
    console.log(`Producto: ${p.nombre.padEnd(20)} | Precio: $${p.precio} | Stock: ${p.stock}`);
});

console.log("\n--- ALERTAS DE ABASTECIMIENTO ---");
alertaStock.forEach(p => {
    const estado = p.stock === 0 ? "AGOTADO" : `BAJO STOCK (${p.stock} unidades)`;
    console.warn(`¡ATENCIÓN! -> ${p.nombre}: ${estado}`);
});

console.log("\n--- RESUMEN FINANCIERO ---");
console.log(`Valor del inventario actual:  $${valorTotalInventario}`);
console.log(`Ingresos totales por ventas: $${ingresosTotales}`);
console.log(`Producto estrella:           ${productoMasVendido.nombre} (${productoMasVendido.vendidos} unidades vendidas)`);

// 7. Reto Extra: Aplicar un descuento del 10% a productos caros (> $500)
const ofertas = inventario
    .filter(p => p.precio > 500)
    .map(p => ({
        ...p,
        precioOferta: p.precio * 0.9
    }));

if (ofertas.length > 0) {
    console.log("\n--- PRODUCTOS EN OFERTA (10% DESC) ---");
    ofertas.forEach(o => console.log(`${o.nombre}: Antes $${o.precio} -> Ahora $${o.precioOferta}`));
}