const {Router} = require('express');
const router = Router();
const bodyParser = require("body-parser");
const session = require('express-session');
const indexController = require('../controllers/indexController');
const userController = require('../controllers/userController');
const catalogController = require('../controllers/catalogController');
const companyController = require('../controllers/companyController');
const newsController = require('../controllers/newsController');
const specialController = require('../controllers/specialController');
const deliveryController = require('../controllers/deliveryController');
const contactsController = require('../controllers/contactsController');
const baskerController = require('../controllers/basketController');
const orderController = require('../controllers/orderController');

//Here we are configuring express to use body-parser as middle-ware.
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.use(
  session({
    secret: 'you secret key',
    saveUninitialized: true,
  })
)


router.get('/', indexController.index);

router.post('/registration', userController.addUser);

router.post('/login', userController.login);

router.get('/logout', userController.logout);

router.get('/catalog', catalogController.index);

router.get('/company', companyController.index);

router.get('/news', newsController.index);

router.get('/special', specialController.index);

router.get('/delivery', deliveryController.index);

router.get('/contacts', contactsController.index);

router.get('/basket', baskerController.index);

router.post('/order', orderController.addOrder);

module.exports = router
