import mongoose from 'mongoose'; // Importer Mongoose
const { Schema, model } = mongoose; // Utiliser Schema et model du module mongoose

// Créez votre schéma qui décrit à quoi ressemblera chaque document
const productSchema = new Schema({
    name: {
        type: String,
        required: true // Cet attribut est obligatoire
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    new: {
        type: Boolean,
        required: true

    },
    promotion: {
        type: Boolean,
        required: true

    },
    subCategory: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    isFaved: {
        type: Boolean,
        required: true

    },
    rating: {
        type: Number,
        required: true
    }

}, {
    timestamps: true // Ajouter automatiquement createdAt et updatedAt
});

/**
 * Créer notre modèle à partir du schéma pour effectuer
 * des actions CRUD sur nos documents et l'exporter
 */
export default model("Product", productSchema);