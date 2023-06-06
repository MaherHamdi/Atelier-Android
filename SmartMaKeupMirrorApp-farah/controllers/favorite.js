import Favorite from '../models/favorite.js';

export function getAll(req, res) {

    Favorite
        .find({})
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

export function addOnce(req, res) {
    // Invoquer la méthode create directement sur le modèle
    Favorite
        .create(req.body)
        .then(newFavorite => {
            res.status(200).json(newFavorite);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

export function getOnce(req, res) {
    Favorite
        .findOne({ "id": req.params.id })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}



/**
 * Mettre à jour un seul document
 */
export function patchOnce(req, res) {
    Favorite
        .findOneAndUpdate({ "_id": req.params.id }, req.body)
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

/**
 * Supprimer un seul document
 */
export function deleteOnce(req, res) {
    Favorite
        .findOneAndRemove({ "_id": req.params.id })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}