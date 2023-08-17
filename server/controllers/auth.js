const express = require('express');
const basicAuth = require('basic-auth');

const app = express();

    const authMiddeleware = (req, res, next) => {
        const user = basicAuth(req);
    
        if (!user || user.name !== 'juanm' || user.pass !== 'juanmora') {
        res.set('WWW-Authenticate', 'Basic realm="example"');
        return res.status(401).send('Autenticación requerida.');
        }
    
        next();
    };    

module.exports = authMiddeleware
