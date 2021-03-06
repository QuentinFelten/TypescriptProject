import * as React from 'react'
import {Invoice} from '../../src/schemas/types/invoice'



export default function showInvoiceHTML (invoice: Invoice) {

  let total: number = 0;
  invoice.itemInvoices.map((item, index) => (
    total += invoice.itemInvoices[index].unitPriceWithoutTax *(1 + invoice.itemInvoices[index].taxPercent * 0.01)
  ))

    return <>
    
    {/* Invoice styling */}
    <style
      dangerouslySetInnerHTML={{
        __html:
        "body {font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;text-align: center;color: #777;}.invoice-box {max-width: 800px;margin: auto;padding: 30px;border: 1px solid #eee;box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);font-size: 16px;line-height: 24px;font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;color: #555;}.invoice-box table {width: 100%;line-height: inherit;text-align: left;border-collapse: collapse;}.invoice-box table td {padding: 5px;vertical-align: top;}.invoice-box table tr td:nth-child(2) {text-align: right;}.invoice-box table tr.top table td {padding-bottom: 20px;}.invoice-box table tr.top table td.title {font-size: 45px;line-height: 45px;color: #333;}.invoice-box table tr.information table td {padding-bottom: 40px;}.invoice-box table tr.heading td {background: #eee;border-bottom: 1px solid #ddd;font-weight: bold;}.invoice-box table tr.details td {padding-bottom: 20px;}.invoice-box table tr.item td {border-bottom: 1px solid #eee;}.invoice-box table tr.item.last td {border-bottom: none;}.invoice-box table tr.total td:nth-child(2) {border-top: 2px solid #eee;font-weight: bold;}@media only screen and (max-width: 600px) {.invoice-box table tr.top table td {width: 100%;display: block;text-align: center;}.invoice-box table tr.information table td {width: 100%;display: block;text-align: center;}}"
      }}
    />
    
    .<br />
    <br />
    <br />
    <div className="invoice-box">
      <table>
        <tbody>
          <tr className="top">
            <td colSpan={2}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      Invoice #: {invoice.reference}
                      <br />
                      Date: {invoice.date}
                      <br />
                      Due in: {invoice.paymentDelayInDays} days
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr className="information">
            <td colSpan={5}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      MyShop
                      <br />
                      {invoice.biller.address.street}
                      <br />
                      {invoice.biller.address.city}, {invoice.biller.address.zipcode} {invoice.biller.address.state} {invoice.biller.address.country}
                      <br />
                      {invoice.biller.address.additional}
                      <br />
                      {invoice.biller.email}
                      <br />
                      {invoice.biller.phoneNumber}
                      <br />
                      {invoice.biller.invoiceLegalFooter}
                      
                    </td>
                    <td />
                    <td />
                    <td />
                    <td>
                      {invoice.customer.name}
                      <br />
                      {invoice.customer.address.street}
                      <br />
                      {invoice.customer.address.city}, {invoice.customer.address.zipcode} {invoice.customer.address.state} {invoice.customer.address.country}
                      <br />
                      {invoice.customer.address.additional}
                      
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          
          
          <tr className="heading">
            <td>Item</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Tax</td>
            <td>Total</td>
          </tr>

          {invoice.itemInvoices.map((item, index) => (
            <tr className="item">
              <td>{invoice.itemInvoices[index].description}</td>
              <td>{invoice.itemInvoices[index].quantity}</td>
              <td>${invoice.itemInvoices[index].unitPriceWithoutTax}</td>
              <td>{invoice.itemInvoices[index].taxPercent}%</td>
              <td>${invoice.itemInvoices[index].unitPriceWithoutTax *(1 + invoice.itemInvoices[index].taxPercent * 0.01)}</td>
            </tr>
          ))}


          <tr className="total">
            <td>Total : </td>
            <td></td>
            <td></td>
            <td></td>
            <td>${total}</td>
          </tr>

          
        </tbody>
      </table>
    </div>
  </>
}
