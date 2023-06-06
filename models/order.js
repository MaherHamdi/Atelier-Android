import mongoose from 'mongoose'; // Importer Mongoose
const { Schema, model } = mongoose; // Utiliser Schema et model du module mongoose
import Product from '../models/product.js';

// Créez votre schéma qui décrit à quoi ressemblera chaque document
//const ProductModel = mongoose.model('Product', Product)
const orderSchema = new Schema({

    order: {
        type: String,
        required: true // Cet attribut est obligatoire
    },
    product: {
        type: String,
        required: true // Cet attribut est obligatoire
    },
    user: {
        type: String,
        required: true // Cet attribut est obligatoire
    },
    price: {
        type: Number,
        required: true // Cet attribut est obligatoire
    }


}, {
    timestamps: true // Ajouter automatiquement createdAt et updatedAt
});

/**
 * Créer notre modèle à partir du schéma pour effectuer
 * des actions CRUD sur nos documents et l'exporter
 */
export default model("Order", orderSchema);