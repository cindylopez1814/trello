const assert = require('chai').assert;
global.window = global;
require('../public/JS/model/validate');

describe('mostrar formulario', () => {
  describe('showForm debe mostrar formulario', () => {
    it('deberia ser una función', () => {
      assert.equal(typeof showAdd, 'function');
    });
  });
}); 

describe('validar input vacio', () => {
  describe('el input no debe estar vacio', () => {
    it('input no debe estar vacio', () => {
      assert.equal(validateInput(inputTxt.value === 'null'), false);
      assert.equal(validateInput(inputTxt.value === ''), false);
      assert.equal(validateCard(inputTxt.value === 'a12s'), true);
    })
    it('desabiliatr boton campo vacio', () => {
      assert.equal(btnAddList(inputTxt.value === ''), btnAdd.disabled = true)
    })
  })
})