import express from 'express';

import {
    getAll,
    addOnce,
    getOnce,
    patchOnce,
    getSubCategoryByCategory,
    deleteOnce
} from '../controllers/subCategory.js';

const router = express.Router();
/**
 * @swagger
 *  tags:
 *    name: SubCategory
 *    description: SubCategory Management
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     SubCategory:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The Auto-generated id of a User
 *         name:
 *           type: string
 *           description:  name of a subCategory
 *         description:
 *           type: string
 *           descripton: name of a subCategory
 *         image:
 *            type: string
 *            descripton: image of a subCategory
 *         category: 
 *            type: string
 *       example:
 *         name: Vegan
 *         description: Vegan
 *         image : image.png
 *         category: string
 * 
 *
 */
/**
 * @swagger
 * /subCategory/:
 *   get:
 *     summary: Returns all categorys
 *     tags: [SubCategory]
 *     responses:
 *       200:
 *         description: the list of the subCategorys
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SubCategory'
 */
router
    .route('/')
    .get(getAll);

/**
 * @swagger
 * /subCategory/:
 *   post:
 *     summary: Create a new SubCategory
 *     tags: [SubCategory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SubCategory'
 *     responses:
 *       200:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SubCategory'
 *       500:
 *         description: Some server error
 */
router
    .route('/')
    .post(addOnce);

router.post('/byCategory', getSubCategoryByCategory)
router
    .route('/:id')
    .get(getOnce);
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
 * /subCategory/{id}:
 *   put:
 *     summary: updates subCategory by id
 *     tags: [SubCategory]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: SubCategory id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SubCategory'
 *     responses:
 *       200:
 *         decsription: The SubCategory was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SubCategory'
 *       404:
 *         description: SubCategory was not found.
 *       500:
 *         description: Some errors happend.
 *
 */
router
    .route('/:id')
    .put(patchOnce);
/**
 * @swagger
 *  /subCategory/{id}:
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