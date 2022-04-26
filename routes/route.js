const {Router} = require('express')
const navbar = require('../models/navbar')
const router = Router()
const pool = require('../db/db');
const bodyParser = require("body-parser");
const session = require('express-session');
const nodemailer = require("nodemailer");

//Here we are configuring express to use body-parser as middle-ware.
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.use(
  session({
    secret: 'you secret key',
    saveUninitialized: true,
  })
)


router.get('/', async (req, res) => {
  const menu = await pool.query('SELECT * FROM navbar ORDER BY position ASC')
  const popularGoods = await pool.query('SELECT * FROM products WHERE "isPopular" = true ORDER BY id ASC')

  console.log(req.session.user)

  res.render('index', {
    title: 'Technomart. Homepage',
    menu: menu.rows,
    popularGoods: popularGoods.rows,
    user: req.session.user
  })

})

router.post('/registration', async(req, res)=>{
  // technomart.ov@gmail.com
  // @123zxcvb
  try {
    await pool.query('INSERT INTO users (name, email, password) VALUES($1::varchar, $2::varchar, $3::varchar )', [req.body.name, req.body.email, req.body.password]);

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'technomart.ov@gmail.com',
        pass: '@123zxcvb'
      }
    });

    var mailOptions = {
      from: 'technomart.ov@gmail.com',
      to: req.body.email,
      subject: 'Registration is successfully!',
      html: '<h1>Welcome to The Technomart, ' + req.body.name + '!</h1>'
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
  catch (e) {}

  res.redirect('/');
})

router.post('/login', async(req, res)=>{
  let user = await pool.query('SELECT * FROM users WHERE email = $1::varchar and password = $2::varchar', [req.body.email, req.body.password])

  if (user.rows.length) {
    req.session.user = user.rows[0];
  }
  res.redirect('/');

})

router.get('/logout', async(req, res)=>{
  req.session.user = null;

  res.redirect('/');

})

router.get('/catalog', async (req, res) => {

    const menu = await pool.query('SELECT * FROM navbar ORDER BY position ASC')

  // Пагинация
  const perPage = 6;
    let page = 1;

    if(req.query.page) {
      page = req.query.page;
    }

    // Сортировка

    let sortColumn = 'id';
    let sortType = 'ASC';

    if(req.query.sort){
      sortColumn = req.query.sort;
    }

    if (req.query.sort_type) {
      sortType = req.query.sort_type;
    }

    let sort = sortColumn + ' ' + sortType;

    // Фильтр

    //Цена

    let minPrice = 0;
    let maxPrice = 999999999;

    if(req.query.min_price) {
      minPrice = req.query.min_price;
    }

    if(req.query.max_price) {
      maxPrice = req.query.max_price;
    }

    // Производитель

    let brands = [];

  for (const [key, value] of Object.entries(req.query)) {
    if (value === 'on') {
      brands.push(key);
    }
  }

    const catalogGoods = await pool.query(
      'SELECT * FROM products WHERE old_price >= $3::integer  AND old_price <= $4::integer ORDER BY '
      + sort +
      ' LIMIT $1::integer OFFSET $2::integer',
      [
        perPage,
        perPage * (page - 1),
        minPrice,
        maxPrice
      ]
    )

  ///////////////////////////////////

      //Количесво страниц

  const allProducts = await pool.query('SELECT COUNT(*) as num FROM products');
    const pageCount = Math.ceil(allProducts.rows[0].num/perPage)
    let pageCountArr = [];
    for (let i = 1; i <= pageCount; i++) {
      pageCountArr.push(i);
    }

  ///////////////////////////////////

    res.render('catalog', {
      title: 'Technomart. Catalog',
      menu: menu.rows,
      catalogGoods: catalogGoods.rows,
      pageCountArr,
    })
  }
)

router.get('/company', async (req, res) => {

    const menu = await pool.query('SELECT * FROM navbar ORDER BY position ASC')

    res.render('company', {
      title: 'Technomart. Company',
      menu: menu.rows
    })
  }
)

router.get('/news', async (req, res) => {

    const menu = await pool.query('SELECT * FROM navbar ORDER BY position ASC')

    res.render('news', {
      title: 'Technomart. News',
      menu: menu.rows
    })
  }
)

router.get('/special', async (req, res) => {

    const menu = await pool.query('SELECT * FROM navbar ORDER BY position ASC')

    res.render('special', {
      title: 'Technomart. Special',
      menu: menu.rows
    })
  }
)

router.get('/delivery', async (req, res) => {

    const menu = await pool.query('SELECT * FROM navbar ORDER BY position ASC')

    res.render('delivery', {
      title: 'Technomart. Delivery',
      menu: menu.rows
    })
  }
)

router.get('/contacts', async (req, res) => {

    const menu = await pool.query('SELECT * FROM navbar ORDER BY position ASC')

    res.render('contacts', {
      title: 'Technomart. Contacts',
      menu: menu.rows
    })
  }
)

router.get('/basket', async (req, res) => {

  const menu = await pool.query('SELECT * FROM navbar ORDER BY position ASC')

    res.render('basket', {
      title: 'Technomart. Basket',
      menu: menu.rows
    })
  }
)

module.exports = router
