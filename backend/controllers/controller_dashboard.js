const express = require('express');

exports.dashboard = (req, res) => {
    try {
        res.status(200).render('dashboard');
        res.redirect('/')
    } catch (error) {
        console.error(error);
    }
}