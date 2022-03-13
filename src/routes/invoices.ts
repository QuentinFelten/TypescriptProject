import { FastifyInstance } from 'fastify'
import { Invoice } from '../schemas/types/invoice'
import * as invoiceSchema from '../schemas/json/invoice.json'
import showInvoiceHTML from '../templates/invoiceHTML'
import {renderToString} from 'react-dom/server'

enum MIME_TYPES {
  HTML = 'text/html',
  JSON = 'application/json',
  PDF = 'application/pdf'
}

export async function invoicesRoutes (fastify: FastifyInstance) {
  fastify.route<{ Body: Invoice }>({
    method: 'POST',
    url: '/',
    schema: {
      body: invoiceSchema,
      response: { 200: invoiceSchema }
    },
    handler: async function render(request,reply): Promise<Invoice> {
      switch (request.headers.accept) {
        case MIME_TYPES.JSON:
          return request.body;
    
        case MIME_TYPES.PDF:
          throw new Error('PDF are not yet implemented');
        
        default:
          const jsxElement = showInvoiceHTML(request.body)
          return reply.type(MIME_TYPES.HTML).send(renderToString(jsxElement))
      }
      
    }
  })

  
}