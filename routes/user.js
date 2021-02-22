const { Router } =  require('express');
const { usuariosGet,usuariosPut, usuariosPost, usuariosDel, usuariosPatch} = require('../controllers/user');
const router = Router();



    router.get('/',usuariosGet);

    router.put('/:id', usuariosPut);

    router.post('/',usuariosPost);

    router.patch('/',usuariosPatch);

    router.delete('/', usuariosDel);



module.exports = router;