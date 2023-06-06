import express from 'express';

import {
    getAll,
    addOnce,
    getOnce,
    patchOnce,
    deleteOnce
} from '../controllers/productReference.js';

const router = express.Router();

router
    .route('/')
    .get(getAll)
    .post(addOnce);

router
    .route('/:id')
    .get(getOnce)
    .put(patchOnce)
    .delete(deleteOnce);

export default router;