const router = require('express').Router()
const authController = require('../controllers/authController')
const tryCatch = require('../middlewares/tryCatch')
const errorHandler = require('../middlewares/errorHandler')
const permission = require('../middlewares/permission')


router.post('/login',permission.authPermission, tryCatch(authController.login))
router.post('/register',permission.authPermission, tryCatch(authController.register))
router.get('/verify-email/:token',  tryCatch(authController.verifyEmail))
router.post('/reset-password',permission.userPermission, tryCatch(authController.resetPassword))
router.post('/forget-password',permission.authPermission, tryCatch(authController.forgetPassword))
router.get('/verify-forget-password/:token',permission.authPermission, tryCatch(authController.verifyForgetPassword))
router.post('/form-forget-password',permission.authPermission, tryCatch(authController.formForgetPassword))
router.get('/logout', permission.userPermission, tryCatch(authController.logOut))

router.use(errorHandler)

module.exports = router;