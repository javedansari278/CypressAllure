/// <reference types='Cypress'/>
const selectors = require('../Selector/Elements_Selectors.json')
var expected

describe('Elements Page Suite', () => {

  before(() => {
    cy.visit('/')
    cy.fixture('Elements.json').then(($testData) => {
      expected = $testData
    })
  })

  it('Click Elements card on Landing page', () => {
    cy.screenshot({capture:'runner'})
    cy.get(selectors.Elements).click()
  })

  it('Click Textbox menu from left pane', () => {
    cy.get(selectors.TextBox).click()
  })

  it('Enter details',()=>{
    cy.get(selectors.FullName).type(expected.FullName)
    cy.get(selectors.Email).type(expected.Email)
    cy.get(selectors.CurrentAddress).type(expected.CurrentAddress)
    cy.get(selectors.PermanentAddress).type(expected.PermanentAddress)
    cy.screenshot({capture:'runner'})
  })

})

