import express from 'express';
import { check } from 'express-validator';
import { validationResult } from 'express-validator';
import validatee from '../middlewares/validate.js';
import bodyParser from 'body-parser';



import {
    getAll,
    addOnce,
    getOnce,
    patchOnce,
    deleteOnce,
    login,
    forgotPassword,
    testcode,
    changepass,
    verify,
    ChangePWD
} from '../controllers/user.js';

const router = express.Router();

/**
 * @swagger
 *  tags:
 *    name: User
 *    description: User Management
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The Auto-generated id of a User
 *         name:
 *           type: string
 *           description: first name of a user
 *         email:
 *           type: string
 *           descripton: email of a user
 *         password:
 *            type: string
 *            descripton: password of a user
 *         birthday:
 *            type: date
 *         image:
 *            type: string
 *            descripton: image of a user
 *         address:
 *            type: string
 *            descripton: password of a user
 *         phone:
 *            type: number
 *          
 *       example:
 *         name: Farah Mannoubi
 *         email: farah.mannoubi@esprit.tn
 *         password: aaa
 *         birthday: 2022-11-12
 *         phone : 2881455
 * 
 *
 */


/**
 * @swagger
 * /user/:
 *   get:
 *     summary: Returns all users
 *     tags: [User]
 *     responses:
 *       200:
 *         description: the list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */
router.get('/', getAll)
    /**
     * @swagger
     *  /user/{id}:
     *    get:
     *      summary: Get a user
     *      tags: [User]
     *      parameters:
     *        - in: path
     *          name: id
     *          description:  id
     *          required: true
     *          schema:
     *            type: string
     *      responses:
     *        200:
     *          description: User by its id
     *          content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     *        404:
     *          description: The User was not found
     *
     */
router
    .route('/:id')
    .get(getOnce)

/**
 * @swagger
 * /user/add:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */
router
    .post('/add', addOnce)


/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: updates user by id
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Case id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         decsription: The Case was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User was not found.
 *       500:
 *         description: Some errors happend.
 *
 */
router

    .put('/update/:email',patchOnce)
router

    .put('/change/:email',ChangePWD)


router

    .get('/verify/:id', verify)
router

    .post('/login', login)
router
    .post('/recover', forgotPassword)
    .post("/changepwcode", testcode)
    .post("/resetpwd", changepass);


/**
 * @swagger
 *  /user/{id}:
 *    delete:
 *      summary: removes a user
 *      tags: [User]
 *      parameters:
 *        - in: path
 *          name: id
 *          description:  id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: The user was deleted
 *        404:
 *          description: The user was not found
 *
 */
router
    .route('/:id')
    .delete(deleteOnce);



export default router;