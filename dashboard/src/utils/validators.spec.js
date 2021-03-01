import {
  validateEmptyAndEmail,
  validateEmptyAndLength3
} from '@/utils/validators'

describe('Validators utils',() => {
  it('should give an error with empty payload', () => {
    expect(validateEmptyAndLength3()).toBe('Este campo é obrigatório')
  })

  it('should give an error if less than 3 character payload', () => {
    expect(validateEmptyAndLength3('12')).toBe('Este campo precisa de no mínimo 3 caracteres')
  })

  it('should return true when input has correct param', () => {
    expect(validateEmptyAndLength3('1234')).toBe(true)
  })

  it('should give an error with empty payload', () => {
    expect(validateEmptyAndEmail()).toBe('Este campo é obrigatório')
  })

  it('should give an error with invalid payload', () => {
    expect(validateEmptyAndEmail('123')).toBe('Este campo precisa ser um e-mail')
  })

  it('should return true with valid payload', () => {
    expect(validateEmptyAndEmail('lele@lele.com')).toBe(true)
  })
})
