const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

admin.initializeApp({
    credential: admin.credential.cert({
        "type": "service_account",
        "project_id": "msolution-90e6e",
        "private_key_id": "8b3533e06a8da95dabbeb17ad68c8f981ea11832",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC2KTvcpUJx+ADm\nJ7CytWFmODnG0GDKo3l0UZakkrR3gkZYmwQOq4NT6c1V4spmBXvCa9fyvxbUpezW\nH8uGff374gMTSFstFNL5bE6rzkKfjFbfbr1uTRfSR9wOMj0ZgqTUBhPkgyM2LbC7\nuTtRnnzaR4OAoI5yipOtJvZSORhgILUXdkqsguGPcRPMW1ri+pMMe1dXOi5CE/9v\n/i/NT3gF7fvOhPZPWmY1Whw1XJB+SYbVGlWDSR/DbqNF+fSaHxK2/v9FyA8F2rRe\nj/hofpCoPq5PyArwz24VPUj/A4XE+f3xbxnGyw5YtWQ9yHKgu2MVcwauTnIdZPfU\nXJlNRcibAgMBAAECggEAD4jirwV07i09PmOCIStwu/vtiXP53S4lzHKsyyors8lr\nYGEP7oRX9c8JkNp/ckXjcQgraWs8cjQYR4Z8n+Kcx19V7c4M4IJXH6hJ6UL00ZBx\nVCqogwCWGHvCW3+TUFqg3egKyEEavqMU4F2CnopKkX7pyw1mOIRy5aBd/1MZLhFW\n6045fEgRWVmaaRC5P9bQn3SwM2suq8S6Fk31QBBVJagVRf1r+vRnTdNuLinCE9hc\njYnj5ZM52/910zv9vy2Ms9lyNbIaMROXheMPPaXFFo/VzD2TjQeMJ6KLtfMkobuN\ncA80JnBf0nWclE7YBqCyAUhT3aEeA/m+RiNyDXFy0QKBgQDyk2OiHw3sKbLvGI4f\nAbC0zzN0+agNiRYTY/y7vVwOy+FPp30YNuzZsGI5YnNvcIEHRbKmFQJSQ+0RQiFB\nPZts1av48Hh8eRl+liZv+1y5lwclP3wbZjv7o8P0UmH7K1lVA5DiclAgiCWz1WJL\nC/EIu6WK+TjMzvu9Ox+lcU4+yQKBgQDAPfCiqpvdAquahq2pDTY+JB640O8m9EpI\nzJCQ9rtWQ6hpAAT7tqn/qSp0IjNd5mrPcoctvNNDtWcx+jxq2HJuWN3a0A1MgcWI\ntmJtakq1qSc2bedEev99qC2N/6KReffowJWD4qHxNjoUQ8g0zAsLnUHRus+U27pt\nrP4ZstuKQwKBgQCCErKMTmaiykFeoCYlTjy415paET0h9O5Xe3gcG4/vhzfMBJ25\njEo4+LHS343SpdsqUR9Ym09hWXcXmARI/YYIOBM9K4UQCce37z+xMHIqOmfke0RL\nVOi5KLl8m2hazIXcZkscgfuhViARbEyGvWKEMkq0WKsyd5LZh4iSqE0ysQKBgQC1\nGSSZeLM/7oYOGhV6jbGttIUkgd7pCXT5Q4xko6ozR6Vc1OHc5mUbLReLM7TEHo48\nQp3Jnno+7KL8V8mWtbSG8zx8J0Z/7jhR486xWFJs8563Da2xu1T34PiZLlrNROMf\n5lxzU4pPG1B3SqtN4XH+TPR2SM/IYX4sV61ANFfQ1QKBgHLtPlV8kme4ZnsBA+4h\nMdwLAsaC6hIBSbmPlTNwwr5gUQsMh31wVMohjjY0h5jC5PMNHp8zudLVdzuXKmL/\n9PBwXL8dKi6E1zJQsZnerIYNCuhMAGlNXGZvKX9cHP/Dot5m9YbP4MnyyTTtioHW\nnAmN+MP3CPkFFTyFwR0LFc82\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-hq6sm@msolution-90e6e.iam.gserviceaccount.com",
        "client_id": "103716252482343426064",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://accounts.google.com/o/oauth2/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-hq6sm%40msolution-90e6e.iam.gserviceaccount.com"
      }),
    databaseURL: "https://msolution-90e6e.firebaseio.com"
  });

const db = admin.firestore();

const app = express();
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('views', './views');
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// ------------------ routes ---------------------

// login
app.get('/', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.render('index.hbs', { layout: false });
});

// ------------------ welcome --------------------
// index
app.get('/admin', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.render('admin/index');
});

// ------------------ previlegios -------------------
// index
app.get('/previlegios', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    var previlegios = [];
    db.collection('previlegios').get().then(snapshot => {
        snapshot.forEach(doc => {
            previlegios.push({
                id: doc.id,
                nome: doc.data().nome,
                previlegios: doc.data().previlegios,
                obs: doc.data().obs,
                timestamp: doc.data().timestamp
            });
        });
        res.render('previlegios/index', { previlegios });
    });
});

// add
app.get('/previlegios/adicionar', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.render('previlegios/create');
});

// store
app.post('/previlegios', (req, res) => {
    db.collection('previlegios').add({
        nome: req.body.nome,
        previlegios: req.body.previlegios,
        obs: req.body.obs,
        timestamp: admin.firestore.FieldValue.serverTimestamp()
    });
    res.end('successfully');
});

// edit
app.get('/previlegios/:id', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    db.collection('previlegios').doc(req.params.id).get().then(doc => {
        res.render('previlegios/edit', { id: doc.id, previlegio: doc.data() });
    });
});

// update
app.post('/previlegios/:id', (req, res) => {
    db.collection('previlegios').doc(req.params.id).update({
        nome: req.body.nome,
        previlegios: req.body.previlegios,
        obs: req.body.obs,
        timestamp: admin.firestore.FieldValue.serverTimestamp()
    });
    res.end('successfully');
});

// delete
app.get('/previlegios/delete/:id', (req, res) => {
    db.collection('previlegios').doc(req.params.id).delete();
    res.redirect('/previlegios');
});

// ---------------------- utilizador ------------------------
// index
app.get('/utilizador', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    var users = [];
    admin.auth().listUsers().then(function(listUsersResult) {
        listUsersResult.users.forEach(function(userRecord) {
            users.push(userRecord);
        });
        res.render('utilizador/index', { users });
    });
});

// add
app.get('/utilizador/adicionar', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    var previlegios = [];
    db.collection('previlegios').get().then(snapshot => {
        snapshot.forEach(doc => {
            previlegios.push({
                id: doc.id,
                nome: doc.data().nome
            });
            res.render('utilizador/create', { previlegios });
        });
    });
});

// store
app.post('/utilizador', (req, res) => {
    
    admin.auth().createUser({
        email: req.body.email,
        emailVerified: false,
        password: req.body.password,
        displayName: req.body.utilizador,
        photoURL: req.body.photo,
        disabled: false
    })
    .then(function(userRecord) {
        const data = {
            idPrevilegio: req.body.idPrev,
            nomePrevilegio: req.body.nomePrev,
            timestamp: admin.firestore.FieldValue.serverTimestamp()
        }
        db.collection('users').doc(userRecord.uid).set(data);
    })
    .catch(function(error) {
        res.send(error);
        console.log("Error creating new user:", error);
    });

    res.end('successfully');
});

// -------------------- Departamento -----------------------
// index
app.get('/departamento', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    var depts = [];
    db.collection('departamentos').get().then(snapshot => {
        snapshot.forEach(doc => {
            depts.push({
                id: doc.id,
                sigla: doc.data().sigla,
                des: doc.data().des,
                obs: doc.data().obs,
                timestamp: doc.data().timestamp
            });
        });
        res.render('departamento/index', { depts });
    });
});

// add
app.get('/departamento/adicionar', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.render('departamento/create');
});

// store
app.post('/departamento', (req, res) => {
    db.collection('departamentos').add({
        sigla: req.body.sigla,
        des: req.body.des,
        obs: req.body.obs,
        timestamp: admin.firestore.FieldValue.serverTimestamp()
    });

    res.end('Successfully');
});

// edit
app.get('/departamento/:id', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    db.collection('departamentos').doc(req.params.id).get().then(doc => {
        res.render('departamento/edit', { id: doc.id, dept: doc.data() });
    });
});

// update
app.post('/departamento/:id', (req, res) => {
    db.collection('departamentos').doc(req.params.id).update({
        des: req.body.des,
        sigla: req.body.sigla,
        obs: req.body.obs,
        timestamp: admin.firestore.FieldValue.serverTimestamp()
    });
    res.end('Successfully');
});

// delete
app.get('/departamento/delete/:id', (req, res) => {
    db.collection('departamentos').doc(req.params.id).delete();
    res.redirect('/departamento');
});

// ------------------- cargo ----------------------
// index
app.get('/cargo', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    var cargos = [];
    db.collection('cargos').get().then(snapshot => {
        snapshot.forEach(doc => {
            cargos.push({
                id: doc.id,
                nome: doc.data().nome,
                obs: doc.data().obs,
                timestamp: doc.data().timestamp
            });
        });
        res.render('cargo/index', { cargos });
    });
});

// add
app.get('/cargo/adicionar', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.render('cargo/create');
});

// store
app.post('/cargo', (req, res) => {
    db.collection('cargos').add({
        nome: req.body.nome,
        obs: req.body.obs,
        timestamp: admin.firestore.FieldValue.serverTimestamp()
    });
    res.end('Successfully');
});

// edit
app.get('/cargo/:id', (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    db.collection('cargos').doc(req.params.id).get().then(doc => {
        res.render('cargo/edit', { id: doc.id, cargo: doc.data() });
    });
});

// update
app.post('/cargo/:id', (req, res) => {
    db.collection('cargos').doc(req.params.id).update({
        nome: req.body.nome,
        obs: req.body.obs,
        timestamp: admin.firestore.FieldValue.serverTimestamp()
    });
    res.end('Successfully');
});

// delete
app.get('/cargo/delete/:id', (req, res) => {
    db.collection('cargos').doc(req.params.id).delete();
    res.redirect('/cargo');
});


// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);
