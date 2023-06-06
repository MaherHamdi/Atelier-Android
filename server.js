import express from 'express';
import mongoose from 'mongoose'; // Importer Mongoose
import path, { dirname } from 'path';
import productRoutes from './routes/product.js';
import userRoutes from './routes/user.js';
import imageRoutes from './routes/image.js';
import categoryRoutes from './routes/category.js';
import ratingUserProductRoutes from './routes/ratingUserProduct.js';
import favoriteRoutes from './routes/favorite.js';
import productReferenceRoutes from './routes/productReference.js';
import subCategoryRoutes from './routes/subCategory.js';
import orderRoutes from './routes/order.js';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import Stripe from 'stripe'





const app = express();
const port = process.env.PORT || 9090;
const databaseName = 'smartMakeUpMirrorAppDB';


// Cela afichera les requêtes MongoDB dans le terminal
mongoose.set('debug', true);
// Utilisation des promesses ES6 pour Mongoose, donc aucune callback n'est nécessaire
mongoose.Promise = global.Promise;

// Se connecter à MongoDB
mongoose
    .connect(`mongodb://localhost:27017/${databaseName}`)
    .then(() => {
        // Une fois connecté, afficher un message de réussite sur la console
        console.log(`Connected to ${databaseName}`);
    })
    .catch(err => {
        // Si quelque chose ne va pas, afficher l'erreur sur la console
        console.log(err);
    });
// view engine setup

app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.json());


app.use('/product', productRoutes);
app.use('/user', userRoutes);
app.use('/image', imageRoutes);
app.use('/category', categoryRoutes);
app.use('/favorite', favoriteRoutes);
app.use('/productReference', productReferenceRoutes);
app.use('/subCategory', subCategoryRoutes);
app.use('/ratingUserProduct', ratingUserProductRoutes)
app.use('/order', orderRoutes)
app.use(express.urlencoded({ extended: true }));
app.use('/img', express.static('public/images'));
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Library API",
            version: "1.0.0",
            description: "A simple Express Library API",
            termsOfService: "http://example.com/terms/",
            contact: {
                name: "API Support",
                url: "http://www.exmaple.com/support",
                email: "support@example.com",
            },
        },

        servers: [{
            url: "http://localhost:9090",
            description: "My API Documentation",
        }, ],
    },
    apis: ["./Routes/*.js"],
};
const stripe = new Stripe('sk_test_51MzNm3B3oHWLu8HO5v0dkMWERuoFOzwXxAhk3dnscKBrufIdHg4ScAGpHZzTDXix3ONdFaOuUHAc89FtBcQM34P600dZhYlGDa');
//Stripe.secret('sk_test_51MzNm3B3oHWLu8HO5v0dkMWERuoFOzwXxAhk3dnscKBrufIdHg4ScAGpHZzTDXix3ONdFaOuUHAc89FtBcQM34P600dZhYlGDa');

// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.



app.post('/payment-sheet/:amount', async (req, res) => {
    // Use an existing Customer ID if this is a returning customer.
    const customer = await stripe.customers.create();
    var amount = 1
    amount = req.params.amount;
    const ephemeralKey = await stripe.ephemeralKeys.create(
      {customer: customer.id},
      {apiVersion: '2022-11-15'}
    );
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount ,
      currency: 'eur',
      customer: customer.id,
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
    res.json({
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
      publishableKey: 'pk_test_51MzNm3B3oHWLu8HO0INtFiZPtU0C01Dwa4uOoZGTmTXe1ZaaDgrJCbqOkOYoWn2v1G9E0EwFDfiY6ZNXIblQxkmu00ZstPE6u5'
    });
  });
const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.listen(port, () => {
    console.log(`Server running at http://192.168.1.11:${port}`);

});