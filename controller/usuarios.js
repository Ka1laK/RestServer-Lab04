const {response}= require('express');
const Usuario = require('../models/usuario');


const usuariosGet = (req = request, res = response) => {
    const {q,nombre = 'no envia',apikey} = req.query;
    res.json({
        msg: 'get API - controller',
        q,
        nombre,
        apikey
    });
}



const usuariosPut =(req, res= response) => {
    const {id } = req.params; // params puede traer muchos datos.
    res.json({
        msg: 'put API - controller',
        id
    });
}


const usuariosPost = async(req, res = response) => {
    const body = req.body;
    const usuario = new Usuario(body);
    await usuario.save(); // esto es para grabar en BD
    res.json({
        msg: 'post API - controller',
        usuario
    });
}





const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });
}
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
}

//se exporta un objeto pues van haber muchos
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}
