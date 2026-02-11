const express = require ('express');
const app = express();
const morgan = require ('morgan');
const cors = require ('cors');





app.set('port',process.env.PORT || 3000);
app.set('json spaces',2);

app.use(morgan('dev'));

app.use(express.urlencoded({extended:false}));

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.json(
        {
            "Title":"hola mundo"
        }
    )
});

app.post('/sumar',(req,res)=>{
    const{num1,num2}=req.body;

    if(!num1 || !num2){
       return res.status(400).send({error: 'Faltan numeros para sumar'});
    
}

const resultado=num1+num2;

res.send({resultado});
});

app.listen(app.get('port'),()=>{
   console.log('SERVIDOR EN EL PUERTO 3000')});

