const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
//const boots = require('bootstrap');
//const jq = require('jquery');


const app = express();

//importation route
const medecinRoutes = require('./routes/medecin');

const patientRoutes = require('./routes/patient');

const traitementRoutes = require('./routes/traitement');

const autreRoutes = require('./routes/autre');

// parametres
//app.set('port', process.env.PORT || 3030);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//app.set('css',path.join(__dirname,'assetes/css'));
//app.use('/assetes', express.static('assetes'));


//niddlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'',
    port: 3306,
    database:'prestationpm'
},'single'));

app.use(express.urlencoded({extended: false}));





//routes
app.use('/', medecinRoutes);
app.use('/patient', patientRoutes);
app.use('/traitement', traitementRoutes);
app.use('/autre', autreRoutes);


//fichier static
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static('src/assetes'));
app.use('/css',express.static(__dirname + 'src/assetes'));

app.use('/js',express.static(__dirname + 'src/assetes'));

app.get('/',(req,res)=>{
    res.render('medecin');
});
app.get('/patient',(req,res)=>{
   res.render('patient');
});
app.get('/traitement',(req,res)=>{
    res.render('traitement');
 });
 app.get('/autre',(req,res)=>{
    res.render('autreA');
 });
//demarrage de serer

app.listen(3032, () =>{
    console.log('Server on port 3032');
});