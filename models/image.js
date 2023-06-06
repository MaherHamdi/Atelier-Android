import mongoose from 'mongoose'; // Importer Mongoose
const { Schema, model } = mongoose; // Utiliser Schema et model du module mongoose

// Créez votre schéma qui décrit à quoi ressemblera chaque document
const imageSchema = new Schema({

    name: {
        type: String,
        required: true // Cet attribut est obligatoire
    },
    product: {
        type: String,
        required: true // Cet attribut est obligatoire
    },
    rank: {
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
export default model("Image", imageSchema);