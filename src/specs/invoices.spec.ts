import {fastify} from '../lib/fastify'
import {expect} from 'chai'
import * as jsonPayload from './payload.json'

describe('/invoices', function() {
	describe('POST render', function() {
		it('should return JSON', async function () {
			const response = await fastify.inject({method: 'POST', url: '/invoices', headers: {Accept: 'application/json'}, payload: jsonPayload })
			expect (response.statusCode).to.eq(200)
			expect (response.headers['content-type']).to.eq('application/json; charset=utf-8')
		})

		it('should return HTML', async function () {
			const reponse = await fastify.inject({method: 'POST', url: '/invoices', headers: {Accept: 'text/html'}, payload: jsonPayload })
			expect (reponse.statusCode).to.eq(200)
			expect (reponse.headers['content-type']).to.eq('text/html')
		})


    })
})
