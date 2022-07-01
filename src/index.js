const express = require("express");

const app = express();

app.use(express.json());

//routes
const ClienteRoutes = require('./routes/ClienteRoutes');
const EstacionamentoRoutes = require('./routes/EstacionamentoRoutes');
app.use('/clientes', ClienteRoutes);
app.use('/estacionamento', EstacionamentoRoutes);

app.listen(3000, ()=>{

    console.log('Servidor no ar');
});
