import Category from '../models/category.js';

export function getAll(req, res) {

    Category
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
    Category
        .create(req.body)
        .then(newCategory => {
            res.status(200).json(newCategory);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

export function getOnce(req, res) {
    Category
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
    Category
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
    Category
        .findOneAndRemove({ "_id": req.params.id })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}