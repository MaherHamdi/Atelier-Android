import mongoose from 'mongoose'; // Importer Mongoose
import crypto from 'crypto';
const { Schema, model } = mongoose; // Utiliser Schema et model du module mongoose

// Créez votre schéma qui décrit à quoi ressemblera chaque document
const userSchema = new Schema({



    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: true
    },

    code: {
        type: String,


    },
    verified: {
        type: Boolean,
        default: false

    },


    resetPasswordToken: {
        type: String,
        required: false

    },
    resetPasswordExpires: {
        type: Date,
        required: false
    },



}, {
    timestamps: true // Ajouter automatiquement createdAt et updatedAt
});

userSchema.methods.generatePasswordRest = function() {
    this.resetPasswordToken = crypto.randomBytes(20).toString('hex');
    this.resetPasswordExpires = Date.now() + 3600000; // expires in an hour
};

/**
 * Créer notre modèle à partir du schéma pour effectuer
 * des actions CRUD sur nos documents et l'exporter
 */
export default model("User", userSchema);