import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateNutritionService } from '../services/CreateNutritionService'

export interface DataProps { 
    name: string, 
    weight: string, 
    height: string, 
    age: string, 
    gender: string, 
    objective: string, 
    level}

class CreateNutritionController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        console.log("Rota de criação de nutrição chama")

        const { name, weight, height, age, gender, objective, level} = request.body as DataProps

        const createNutrition = new CreateNutritionService();

        const nutrition = await createNutrition.execute({ 
            name, 
            weight, 
            height, 
            age, 
            gender, 
            objective, 
            level
        });

        reply.send(nutrition)
    }
}

export { CreateNutritionController }