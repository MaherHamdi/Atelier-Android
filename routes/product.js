import express from 'express';

import {
    getAll,
    addOnce,
    getOnce,
    patchOnce,
    getNewProduct,
    getProductInPromotion,
    getProductByCategory,
    getProductBySubCategory,
    getFavedProduct,
    deleteOnce
} from '../controllers/product.js';

const router = express.Router();
/**
 * @swagger
 *  tags:
 *    name: Product
 *    description: Product Management
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The Auto-generated id of a User
 *         name:
 *           type: string
 *           description:  name of a user
 *         description:
 *           type: string
 *           descripton: name of a product
 *         image:
 *            type: string
 *            descripton: image of a product
 *         price:
 *            type: number
 *         quantity:
 *            type: string
 *         new:
 *            type: boolean
 *         promotion:
 *            type: boolean
 *         subCategory:
 *            type: string
 *         category:
 *            type: string
 *         isFaved:
 *            type: boolean
 *         rating:
 *            type: number
 *          
 *       example:
 *         name: TOM FORD
 *         description: Lip Color Matte Lipstick
 *         price: 122
 *         quantity: 100
 *         new : ture
 *         promotion : false
 *         subCategory : 63987270866ddd317183312b
 *         category : 637d4817ed9c903c7634a545
 *         isFaved : false
 *         rating : 0
 * 
 *
 */

/**
 * @swagger
 * /product/New:
 *   post:
 *     summary: get new product
 *     tags: [Product]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Some server error
 */

router
    .post('/isFaved', getFavedProduct)
router
    .post('/New', getNewProduct)
router.post('/ProductByCategory', getProductByCategory)
router.post('/ProductBySuCategory', getProductBySubCategory)
    //router
    .get('/InPromotion', getProductInPromotion)
    /**
     * @swagger
     * /product/:
     *   get:
     *     summary: Returns all products
     *     tags: [Product]
     *     responses:
     *       200:
     *         description: the list of the products
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Product'
     */
router
    .route('/')
    .get(getAll)
    /**
     * @swagger
     * /product/:
     *   post:
     *     summary: Create a new Product
     *     tags: [Product]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Product'
     *     responses:
     *       200:
     *         description: The post was successfully created
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Product'
     *       500:
     *         description: Some server error
     */
router
    .route('/')
    .post(addOnce);

router
    .route('/:id')
    .get(getOnce)

/**
 * @swagger
 * /product/{id}:
 *   put:
 *     summary: updates product by id
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Product id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         decsription: The Product was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product was not found.
 *       500:
 *         description: Some errors happend.
 *
 */
router
    .route('/:id')
    .put(patchOnce)
    /**
     * @swagger
     *  /product/{id}:
     *    delete:
     *      summary: removes a product
     *      tags: [Product]
     *      parameters:
     *        - in: path
     *          name: id
     *          description:  id
     *          required: true
     *          schema:
     *            type: string
     *      responses:
     *        200:
     *          description: The product was deleted
     *        404:
     *          description: The product was not found
     *
     */
router
    .route('/:id')
    .delete(deleteOnce);

export default router;