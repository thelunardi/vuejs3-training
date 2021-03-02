import mockAxios from 'axios'
import FeedbackService from './feedbacks'

jest.mock('axios')

describe('FeedbackService', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return feedbacks when getAll', async () => {
    const results = [{
      text: 'Muito bom!',
      fingerprint: '490135491',
      id: 'eab759f8-f238-4ff9-ae91-ee1558982329',
      apiKey: 'fcd5015c-10d3-4e9c-b395-ec7ed8850165',
      type: 'OTHER',
      device: 'Chrome 85.0, macOS 10.14',
      page: 'https://feedbacker.com/pricing',
      createdAt: new Date('2020-11-13').getTime()
    }]
    mockAxios.get.mockImplementationOnce(() => {
      return Promise.resolve({ data: { results }})
    })

    const response = await FeedbackService(mockAxios).getAll({ type: '', limit: '1', offset: '0' })
    expect(response.data.results[0]).toHaveProperty('text')
    expect(response.data.results[0]).toHaveProperty('fingerprint')
    expect(response.data.results[0]).toHaveProperty('id')
    expect(response.data.results[0]).toHaveProperty('apiKey')
    expect(response.data.results[0]).toHaveProperty('type')
    expect(response.data.results[0]).toHaveProperty('device')
    expect(response.data.results[0]).toHaveProperty('page')
    expect(response.data.results[0]).toHaveProperty('createdAt')

  })

  it('should return a summary list when get summary', async () => {
    mockAxios.get.mockImplementationOnce(() => {
      return Promise.resolve({ data: { all: 7, issue: 3, idea: 3, other: 1 }})
    })

    const response = await FeedbackService(mockAxios).getSummary()

    expect(response.data).toHaveProperty('all')
    expect(response.data).toHaveProperty('issue')
    expect(response.data).toHaveProperty('idea')
    expect(response.data).toHaveProperty('other')
  })
})
