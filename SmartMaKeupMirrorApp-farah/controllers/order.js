import Order from '../models/order.js';
import ProductQuantityOrder from '../models/productQuantityOrder.js';


export function getAll(req, res) {

    Order
        .find({})
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}

export async function addOnce(req, res) {
    const order = await Order.findOne({ "_id": req.body._id })
    if (!order) {
        Order
            .create(req.body)
            .then(newOrder => {
                res.status(200).json(newOrder);
            })
            .catch(err => {
                res.status(500).json({ error: err });
            });
    } else {

        ProductQuantityOrder
            .create(req.body)
            .then(newOrder => {
                res.status(200).json(newOrder);
            })
            .catch(err => {
                res.status(500).json({ error: err });
            });

    }
    // Invoquer la méthode create directement sur le modèle

}

export function getOnce(req, res) {
    Order
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
    Order
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
    Order
        .findOneAndRemove({ "_id": req.params.id })
        .then(doc => {
            res.status(200).json(doc);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
}