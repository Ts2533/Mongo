// const {MongoClient}=require("mongodb")
// const metodos = require('./insertarDatos.js');
// const { faker } = require('@faker-js/faker');
// const{json}=require("express");

//Insertar los 2000 datos a la tabla prendas
//  const prendas = [];
//  for (let i = 0; i < 2001; i++) {
//     const prenda = {
//      id_prenda: i,
//      nombre: faker.commerce.productName(),
//      cantidad: Math.floor(Math.random() * 50) + 1,
//      precio: Math.floor(Math.random() * 100) + 1,
//      estado: faker.helpers.arrayElement(['En proceso', 'Finalizada', 'Cancelada'],1,1),
//      imagen: faker.image.url(),
//      tipo_tela:faker.helpers.arrayElement(['Algon', 'Fria','L','piel durazno'],1,1),
//      genero:faker.helpers.arrayElement( ['M', 'F'],1,1),
//      publicado: faker.helpers.arrayElement( ['Finalizada', 'Cancelada'],1,1),
//      fk_color: Math.floor(Math.random() * 2000) + 1,
//      fk_talla:Math.floor(Math.random() * 2000) + 1,
//      fk_diseno:Math.floor(Math.random() * 2000) + 1
//    };
//     prendas.push(prenda);
// };
// metodos.insertarDatos(prendas, 'colch_star', 'prendas');


//Insertar los 2000 datos a la tabla prenda_color


// const color = [];
// for (let i = 0; i < 2001; i++) {
//     const colores = {
//         id_prenda_color: i,
//         color: faker.helpers.arrayElement(['Amarillo', 'Rojo','Azul','Blanco','Negro','Morado'],1,1),
//         codigo: faker.helpers.arrayElement(['#F1DD15', '#F12915','#1551F1','#FCFCFC','#000000','#41007E'],1,1),
//         fk_prenda: Math.floor(Math.random() * 2000) + 1
//     };
//     color.push(colores);
// }

// metodos.insertarDatos(color,'colch_star','prenda_color')

//Insertar los 2000 datos a la tabla prendas_talla

// const talla = [];    
//    for (let i = 0; i < 2001; i++) {
//         const tallas = {
//             id_prenda_talla: i,
//             talla: faker.helpers.arrayElement(['S', 'M','L','XL','XXL'],1,1),
//             fk_prenda: Math.floor(Math.random() * 2000) + 1
//         };
//         talla.push(tallas);
//     }
//     metodos.insertarDatos(talla,'colch_star','prenda_talla')


//Insertar los 2000 datos a la tabla disenos

// const diseno = [];    

//         for (let i = 0; i < 2001; i++) {

//             const disenos = {
//                 id_diseno: i,
//                 nombre: faker.commerce.productName(),
//                 imagen: faker.image.url(),
//                 publicado: faker.helpers.arrayElement( ['Finalizada', 'Cancelada'],1,1),
//                 tamano: faker.helpers.arrayElement( ['Grande', 'Mediano','pequeño'],1,1),
//                 estado: faker.helpers.arrayElement(['En proceso', 'Finalizada', 'Cancelada'],1,1),
//                 fk_prenda: Math.floor(Math.random() * 2000) + 1,
//             };
//             diseno.push(disenos)
//             };         
 
//         metodos.insertarDatos(diseno,'colch_star','diseno')