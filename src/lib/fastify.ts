import fastifyFactory from 'fastify'
import { invoicesRoutes } from '../routes/invoices'
import * as addressSchema from '../schemas/json/address.json'
import * as billerSchema from '../schemas/json/biller.json'
import * as customerSchema from '../schemas/json/customer.json'
import * as itemInvoiceSchema from '../schemas/json/item-invoice.json'

export const fastify = fastifyFactory({ logger: process.env.NODE_ENV !== 'test' ? false : true })
  .addSchema(addressSchema)
  .addSchema(billerSchema)
  .addSchema(customerSchema)
  .addSchema(itemInvoiceSchema)
  // .setErrorHandler, prendre le defaultErrorHandler de fastify et faire en sorte que le message d'erreur ne soit pas envoyé en cas de code >=500
  .register(invoicesRoutes, { prefix: '/invoices' })
