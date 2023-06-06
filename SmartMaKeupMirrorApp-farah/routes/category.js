import express from 'express';

import {
    getAll,
    addOnce,
    getOnce,
    patchOnce,
    deleteOnce
} from '../controllers/category.js';

const router = express.Router();
/**
 * @swagger
 *  tags:
 *    name: Category
 *    description: Category Management
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The Auto-generated id of a User
 *         name:
 *           type: string
 *           description:  name of a category
 *         description:
 *           type: string
 *           descripton: name of a category
 *         image:
 *            type: string
 *            descripton: image of a category
 *        
 *       example:
 *         name: Vegan
 *         description: Vegan
 *         image : image.png
 * 
 *
 */

/**
 * @swagger
 * /category/:
 *   get:
 *     summary: Returns all categorys
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: the list of the categorys
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */
router
    .route('/')
    .get(getAll);

/**
 * @swagger
 * /category/:
 *   post:
 *     summary: Create a new Category
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       500:
 *         description: Some server error
 */
router
    .route('/')
    .post(addOnce);

router
    .route('/:id')
    .get(getOnce);
/**
 * @swagger
 * /category/{id}:
 *   put:
 *     summary: updates category by id
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: category id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         decsription: The Category was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: Category was not found.
 *       500:
 *         description: Some errors happend.
 *
 */
router
    .route('/:id')
    .put(patchOnce);
/**
 * @swagger
 *  /category/{id}:
 *    delete:
 *      summary: removes a category
 *      tags: [Category]
 *      parameters:
 *        - in: path
 *          name: id
 *          description:  id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: The Category was deleted
 *        404:
 *          description: The Category was not found
 *
 */
router
    .route('/:id')
    .delete(deleteOnce);

export default router;