import { Router } from 'express';
import { insertPessoa, selectPessoas, selectPessoa, updatePessoa, deletePessoa } from './controller/Pessoa';

let router = Router();

router.get('/', (req, res) => {
    res.json({
        "statusCode": 200,
        "msg": "API rodando :)"
    });
});

router.get('/pessoas', selectPessoas);
router.get('/pessoa', selectPessoa);
router.post('/pessoa', insertPessoa);
router.put('/pessoa', updatePessoa);
router.delete('/pessoa', deletePessoa);

export default router;