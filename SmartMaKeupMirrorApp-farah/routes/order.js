import express from 'express';

import {
    getAll,
    addOnce,
    getOnce,
    patchOnce,
    deleteOnce
} from '../controllers/order.js';

const router = express.Router();
/**
 * @swagger
 *  tags:
 *    name: Order
 *    description: Order Management
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The Auto-generated id of a User
 *         order:
 *           type: string
 *           description:  name of a subCategory
 *         product:
 *           type: string
 *           descripton: name of a subCategory
 *         user:
 *            type: string
 *            descripton: image of a subCategory
 *         price: 
 *            type: number
 *       example:
 *         order: Vegan
 *         product: Vegan
 *         user : farah
 *         price: 100
 * 
 *
 */
/**
 * @swagger
 * /order/:
 *   get:
 *     summary: Returns all orders
 *     tags: [Order]
 *     responses:
 *       200:
 *         description: the list of the Orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router
    .route('/')
    .get(getAll);
/**
 * @swagger
 * /order/:
 *   post:
 *     summary: Create a new Order
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
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
 * /order/{id}:
 *   put:
 *     summary: updates order by id
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Order id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         decsription: The Order was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Order was not found.
 *       500:
 *         description: Some errors happend.
 *
 */
router
    .route('/:id')
    .put(patchOnce);
/**
 * @swagger
 *  /order/{id}:
 *    delete:
 *      summary: removes a order
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
 *          description: The order was deleted
 *        404:
 *          description: The order was not found
 *
 */
router
    .route('/:id')
    .delete(deleteOnce);

export default router;