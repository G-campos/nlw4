import { Router } from 'express';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';

const router = Router();

/*
 * GET => Buscar
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteracao especifica
*/

//raiz api
// http://localhost:3333/users
router.get("/", (request, response) => {
  return response.json({message: "API Working"});
})

const userController = new UserController();
const surveysController = new SurveysController();

router.post("/users", userController.create);
router.get("/users", userController.show);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);



export { router };