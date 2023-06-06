import Product from '../models/product.js';
import SubCategory from '../models/subCategory.js';

export function getAll(req, res) {

    Product
        .find({})
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}
export function getNewProduct(req, res) {

    Product
        .find({ new: req.body.new })
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

export function getProductInPromotion(req, res) {

    Product
        .find({ promotion: true })
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}


export function getProductByCategory(req, res) {



    SubCategory
        .find({ category: req.body.category }).forEach(
            function(sub) {
                Product.find({
                    subCategory: sub._id
                })

            },
            function() {
                res.render(json(Product));
            }






        );



}


export function addOnce(req, res) {
    // Invoquer la méthode create directement sur le modèle
    Product
        .create(req.body)
        .then(newProduct => {
            res.status(200).json(newProduct);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

export function getOnce(req, res) {
    Product
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
    Product

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
    Product
        .findOneAndRemove({ "_id": req.params.id })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}