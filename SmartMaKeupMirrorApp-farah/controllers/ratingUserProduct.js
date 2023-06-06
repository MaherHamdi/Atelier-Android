import RatingUserProduct from '../models/ratingUserProduct.js';

export async function addOnce(req, res) {
    const retingProductUser = await RatingUserProduct.findOne({ "user": req.body.user, "product": req.body.product })
    console.log(retingProductUser)
    if (!retingProductUser) {
        RatingUserProduct
            .create(req.body)
            .then(newRatingUserProduct => {
                res.status(200).json(newRatingUserProduct);
            })
            .catch(err => {
                res.status(500).json({ error: err });
            });
    } else {
        RatingUserProduct

            .findOneAndUpdate({ "_id": retingProductUser._id }, req.body)
            .then(doc => {
                res.status(200).json(doc);
            })
            .catch(err => {
                res.status(500).json({ error: err });
            });
    }

    // Invoquer la méthode create directement sur le modèle

}
export function getAll(req, res) {

    RatingUserProduct
        .find({})
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}
export function getOnce(req, res) {
    RatingUserProduct
        .findOne({ "user": req.params.user })
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
    RatingUserProduct

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
    RatingUserProduct
        .findOneAndRemove({ "_id": req.params.id })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}