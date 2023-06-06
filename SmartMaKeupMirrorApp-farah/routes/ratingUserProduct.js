import express from 'express';

import {
    addOnce,
    getAll,
    getOnce,
    patchOnce,
    deleteOnce
} from '../controllers/ratingUserProduct.js';

const router = express.Router();



router
    .route('/')
    .post(addOnce)
    .get(getAll)

router
    .route('/id')
    .get(getOnce)
    .put(patchOnce)
    .delete(deleteOnce);

export default router;