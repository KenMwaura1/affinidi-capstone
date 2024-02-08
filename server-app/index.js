const express = require('express');
require('dotenv').config();
const { affinidiProvider } = require('@affinidi/passport-affinidi');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const initializeServer = async () => {
    await app.prepare();

    const server = express();

    server.use(express.json());
    server.use(express.urlencoded({ extended: false }));

    server.get('/', (req, res) => {
        return app.render(req, res, '/', req.query);
    });

    await affinidiProvider(server, {
        id: 'affinidi',
        issuer: process.env.AFFINIDI_ISSUER,
        client_id: process.env.AFFINIDI_CLIENT_ID,
        client_secret: process.env.AFFINIDI_CLIENT_SECRET,
        redirect_uris: ['http://localhost:3000/auth/callback'],
        handleCredential: (credential) => {
            console.log('Received credential:', credential);
        },
    });

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(process.env.PORT || 3001, (err) => {
        if (err) throw err;
        console.log(`Server listening on ${process.env.PORT || 3001}`);
    });
};

initializeServer();