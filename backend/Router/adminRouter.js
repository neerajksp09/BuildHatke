const express = require('express');
const adminRouter = express.Router();
const adminModal= require('../Modal/adminModal')
adminRouter.post('/', async (req, res) => {
    try {
        const adduser = await adminModal.create(req.body);
        return res.json({ 'msg': "success" });
    } catch (err) {
        return res.status(500).json({ "msg": "error" })
    }
});
