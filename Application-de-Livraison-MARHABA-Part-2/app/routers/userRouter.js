const router = require('express').Router()
const userController = require('../controllers/userController')
const permission = require('../middlewares/permission')
const tryCatch = require('../middlewares/tryCatch')
const errorHandler = require('../middlewares/errorHandler')

router.get('/manager/me',permission.userPermission, tryCatch(userController.manager))
router.get('/client/me',permission.userPermission, tryCatch(userController.client))
router.get('/livreur/me',permission.userPermission, tryCatch(userController.livreur))

router.use(errorHandler)


module.exports = router;