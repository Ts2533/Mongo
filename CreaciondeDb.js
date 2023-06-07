//! Creación de la DB
use('colch_star');

//! Creación de la colección de prendas
// db.createCollection('prendas', {
//     validator: {
//         $jsonSchema: {
//             bsonType: 'object',
//             title: 'Objeto validación de prenda',
//             required: [
//                 'id_prenda',
//                 'nombre',
//                 'cantidad',
//                 'precio',
//                 'estado',
//                 'imagen',
//                 'tipo_tela',
//                 'genero',
//                 'publicado',
//                 'fk_color',
//                 'fk_talla',
//                 'fk_diseno',
//             ],
//             properties: {
//                 id_prenda: {
//                     bsonType: 'int',
//                     description:
//                         'Identificador único para la prenda y es requerido',
//                 },
//                 nombre: {
//                     bsonType: 'string',
//                     description: 'El nombre de la prenda es un string y es requerido',
//                 },
//                 cantidad:{
//                     bsonType: 'int',
//                     description: 'La cantidad es un entero y es requerido',
//                 },
//                 precio: {
//                     bsonType: 'int',
//                     description: 'El precio es un tipo decimal y es requerido',
//                 },
//                 estado: {
//                     bsonType:'string',
//                     description: 'el estado es un booleano y es requerido',
//                 },
//                 imagen:{
//                     bsonType:'string',
//                     description:'La imagen sera tipo string donde se maneja con url y es requerido',
                    
//                 },
//                 tipo_tela:{
//                     bsonType:'string',
//                     description: "El tipo de tela sera string y es requerido",
//                 },
//                 genero:{
//                     bsonType: 'string',
//                     description: 'El genero sera tipo string y es requerido',
//                 },
//                 publicado:{
//                     bsonType:'string',
//                     description:'El publicado sera tipo bool y es requerido',

//                 },
//                 fk_color:{
//                     bsonType:'int',
//                     description:'El color sera un tipo string y es requerido',

//                 },
//                 fk_talla:{
//                     bsonType:'int',
//                     description:'la talla es un string y es requerido',
//                 },
//                 fk_diseno:{
//                     bsonType:'int',
//                     description:'El diseño es un tipo string',
//                 },
//             },
//         },
//     },
// });


//Creacion de coleccion de prenda_color

// db.createCollection('prenda_color',{
//     validator:{
//         $jsonSchema:{
//             bsonType:'object',
//             title:'Validacion de prenda_color',
//             required:[
//                'id_prenda_color',
//                'color',
//                'codigo',
//                'fk_prenda',
//             ],
//         properties:{
//             id_prenda_color:{
//                 bsonType:'int',
//                 description: 'Es el identificador del color y es requerido',
//             },
//             color:{
//                 bsonType:'string',
//                 description:'El color es un tipo string y es requerido ',

//             },
//             codigo:{
//                 bsonType:'string',
//                 description:'El codigo es tipo string y es requerido',
//             },
//             fk_prenda:{
//                 bsonType: 'int',
//                 description:'La prenda es entera',
//             }
//         }
//     }
// }
// })



// // Creacion de la tabla Prenda_talla


// db.createCollection('prenda_talla',{
//     validator:{
//         $jsonSchema:{
//             bsonType:'object',
//             title:'Validacion de prenda_talla',
//             required:[
//                 'id_prenda_talla',
//                 'talla',
//                 'fk_prenda',
//             ],
//             properties:{
//             id_prenda_talla:{
//                 bsonType:'int',
//                 description:'identificador de la talla y es requerido',
//             },
//             talla:{
//                 bsonType:'string',
//                 description:'La talla es tipo string y es requerido',
//             },
//             fk_prenda:{
//                 bsonType:'int',
//                 description:'el tipo de prenda es entero y es requerido',
//             }
//         }
//     }
// }})



// //Creacion de la tabla diseño

// db.createCollection('diseno',{
//     validator:{
//         $jsonSchema:{
//             bsonType:'object',
//             title:'Validacion de diseño',
//             required:[
//                 'id_diseno',
//                 'nombre',
//                 'imagen',
//                 'publicado',
//                 'tamano',
//                 'estado',
//             ],

//             properties:{

//             id_diseno:{
//                 bsonType:'int',
//                 description:'Identifiacador del diseño y es requerido',
//             },
//             nombre:{
//                 bsonType:'string',
//                 description:'El nombre es string y es requerido',
//             },
//             imagen:{
//                 bsonType:'string',
//                 description:'La imagen es tipo string donde contiene un url y es requerido',

//             },
//             publicado:{
//                 bsonType:'string',
//                 description:'La publicacion es tipo bool y es requerida',
//             },
//             tamano:{
//                 bsonType:'int',
//                 description:'El tamaño es tipo double y es requerido',
//             },
//             estado:{
//                 bsonType:'string',
//                 description:'El estado es tipo bool y es requerido',
//             },
//         }
//     }
// }})

