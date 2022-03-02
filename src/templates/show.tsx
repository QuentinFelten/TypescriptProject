import * as React from 'react'
import {Invoice} from '../../src/schemas/types/invoice'

export default function showInvoice (invoice: Invoice) {
    return <div>
        <p>{invoice.customer.name}</p>
    </div>
}