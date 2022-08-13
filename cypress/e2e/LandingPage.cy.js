/// <reference types='Cypress'/>
const selectors = require('../Selector/LandingPage_Selectors.json')
var expected

describe('Landing Page Suite', () => {

  before(() => {
    cy.visit('/')
    cy.fixture('LandingPage.json').then(($testData) => {
      expected = $testData
    })
  })

  after(()=>{
    cy.wait(1000)
    cy.screenshot({capture:'runner'})
  })

  it('Verify all elements for Landing page', () => {
    cy.get(selectors.LandingPage).each(($actual, index) => {
      var actual = $actual.text().trim()
      expect(expected.LandingPage[index]).to.equal(actual)
    })
  })
})

