import fastifyFactory from 'fastify'
import { invoicesRoutes } from '../routes/invoices'
import {authRoutes} from '../routes/auth'
import {shopRoutes} from '../routes/shop'
import * as billerSchema from '../schemas/json/biller.json'
import * as customerSchema from '../schemas/json/customer.json'
import * as addressSchema from '../schemas/json/address.json'
import * as itemInvoiceSchema from '../schemas/json/item-invoice.json'
import * as messageSchema from '../schemas/json/message.json'

export const fastify = fastifyFactory({ logger: process.env.NODE_ENV !== 'test' ? false : true })
  .addSchema(billerSchema)
  .addSchema(customerSchema)
  .addSchema(addressSchema)
  .addSchema(itemInvoiceSchema)
  .addSchema(messageSchema)
  .register(authRoutes, {prefix: '/auth'})
  .register(shopRoutes, {prefix: '/shop'})
  .register(invoicesRoutes, { prefix: '/invoices' })
  .setErrorHandler(function defaultErrorHandler(error, request, reply){
    if(reply.statusCode < 500){
        reply.log.info(
            {res: reply, err:error},
            error && error.message
        )
        void reply.send(error)
    }else{
        reply.log.error(
            {req: request, res: reply, err: error},
            error && error.message
        )
        void reply.send({statusCode:500, error:"Internal Server Error", message:'[TRUNCATED]'})
    }
})
