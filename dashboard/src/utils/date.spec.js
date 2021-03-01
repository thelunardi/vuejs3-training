import {
  getDiffTimeBetweenCurrentDate
} from '@/utils/date'

describe('Date utils',() => {
  it('should give an empty value with empty payload', () => {
    expect(getDiffTimeBetweenCurrentDate()).toBe('')
  })

  it('should give number of days ago with valid payload', () => {
    expect(getDiffTimeBetweenCurrentDate('22222')).toContain('dias atrás')
  })
})
