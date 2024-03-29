import { Request, Response } from 'express'
import knex from '../database/connection'

class ItemsController {
    async index(resquest: Request, response: Response) {
        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://10.0.0.101:3333/uploads/${item.image}` //exp://10.0.0.101:19000
            }
        })
    
        return response.json(serializedItems)
      }
}

export default ItemsController