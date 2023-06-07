use('colch_star');
//! Insert one de diseño
// db.diseno.insertOne({
//     id_diseno: 2003,
//     nombre: "Tomas",
//     imagen: "https://loremflickr.com/640/480?lock=2072082686935040",
//     publicado: "En progreso",
//     tamano:"grande",
//     estado: "Cancelada",
//     fk_prenda : 1456
// })

//! Insert one de prendas

//  db.prendas.insertOne({
//     id_prenda: 2003,
//     nombre: "Camisa",
//     cantidad: 2634,
//     precio: 23456,
//     estado: "En proceso",
//     imagen: "https://loremflickr.com/640/480?lock=2072082686935040",
//     tipo_tela: "Algodon",
//     genero: "M",
//     publicado:"Finalizada",
//     fk_color: 23456,
//     fk_talla:23457,
//     fk_diseno: 23458

// })

//! Consulta de find a talla
//db.prenda_talla.find({talla: 'S'})

//! Consulta de findOne
//db.prenda_talla.findOne({ "id_prenda_talla": 20 });


//! Consulta de updateOne para el cliente
// db.prenda_talla.updateOne(
//     {
//         id_prenda_talla: 20,
//     },
//     {
//         $set: { talla: 'S' }
//     });
// * Comprobar consulta anterior
// db.prenda_talla.findOne({ "id_prenda_talla": 20 });

//! Consulta de updateMany en la tabla diseno
// db.diseno.updateMany({
//     $and: [
//         {"fk_prenda": {$gte:20}},
//         {"fk_prenda": {$lte:500}}
//     ]
// },{
//     $set:{ id_diseno: 34}
// });


//! Consultas relacionales $lookup y Primer PIPELINE
//* Buscando los 15 prendas y sus talla
// db.prenda_talla.aggregate([
//     {
//         $lookup: {
//             from: 'prenda_talla',
//             localField: 'id_prenda_talla',
//             foreignField: 'fk_prenda',
//             as: 'TallaM',
//         },
//     },
//     {
//         $project: {
//             id_prenda_talla: true,
//             talla: true,
//             TotalDeTallas: { $size: '$TallaM' },
//         },
//     },
//     {
//         $sort: { TotalDeTallas: -1 },
//     },
//     {
//         $limit: 15,
//     },
// ]);


// ! Consultas relacionales $lookup y Segundo PIPELINE
// * Mostrar todos las prendas que tiene el color blanco  

// db.prendas.aggregate([
//     {
//         $lookup: {
//             from: 'prenda_color',
//             localField: 'id_prenda',
//             foreignField: 'fk_prenda',
//             as: 'ColorBlanco',
//         },
//     },
//     {
//         $match: {
//             'ColorBlanco.color': "Blanco",
//         },
//     },
//     {
//         $project: {
//             id_prenda: true,
//             nombre: true,
//             fk_color:true
//             ColorBlanco: '$ColorBlanco',
//         },
//     },
// ]);

//! Ejemplo de $limit
// db.prendas.aggregate([
//     {$limit: 10}
// ]);

//! Ejemplo de $sort
// db.prendas.aggregate([
//     {$sort: {"cantidad": -1}}
// ]);

//* $unwind, descomponemos el campo "prenda_color" en documentos individuales
// db.prendas.aggregate([
//     {
//         $lookup: {
//             from: 'prenda_color',
//             localField: 'id_prenda',
//             foreignField: 'fk_prenda',
//             as: 'Color',
//         },
//     },
//     {
//         $sort: { Color: -1 },
//     },
//     {
//         $limit: 1,
//     },
//     {
//         $project: {
//             _id: 1,
//             id_prenda: 1,
//             nombre:1,    
//             cantida: 1,
//             precio: 1,
//             estado: 1,
//             imagen:1,
//             tipo_tela:1,
//             genero:1,
//             publicado:1,
//             fk_color:1,
//             fk_talla:1,
//             fk_diseno:1,
//             color: '$color',
//         },
//     },
//     {
//         $unwind: '$color'
//     },
// ]);


//* eliminando el primer registro
// db.prenda_color.deleteOne({"id_prenda_color":1});

//* Eliminando 101 registros
// db.prenda_talla.deleteMany({
//     $and: [
//         { id_prenda_talla: { $gte: 9000 } },
//         { id_prenda_talla: { $lte: 9100 } },
//     ],
// });

//! Eliminando una colección
// db.prendas.drop();

//! Eliminando la base de datos
// db.dropDatabase();
