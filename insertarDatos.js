const { MongoClient } = require('mongodb');
const url ='mongodb+srv://tomas2533:253314719@cluster0.l0ikvwp.mongodb.net/?retryWrites=true&w=majority'
const { faker } = require('@faker-js/faker');

const client = new MongoClient(url);
async function insertarDatos(DatoNuevos, nombreDB, nombreCollection) {
    try {
        await client.connect();
        const result = await client
            .db(nombreDB)
            .collection(nombreCollection)
            .insertMany(DatoNuevos);
        console.log(
            `Se insertaron ${result.insertedCount} registros correctamente.`
        );
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
}

module.exports = {
    insertarDatos,
};