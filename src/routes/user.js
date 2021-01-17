const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')

const authController = require('../controllers/authControllers')
const { requireAuth, redirectIfLoggedIn } = require('../middleware/userAuth')
router.get('/verify/:id', authController.emailVerify_get)
router.get('/signup',redirectIfLoggedIn, authController.signup_get)
router.post('/signup', authController.signup_post)
router.get('/login', redirectIfLoggedIn, authController.login_get)
router.post('/login', authController.login_post)
router.get('/logout', requireAuth, authController.logout_get)
router.get('/profile', requireAuth, authController.profile_get)
router.get('/covid', requireAuth, authController.covid_get)
router.get('/vaccine', requireAuth, authController.vaccine_get)


module.exports = router