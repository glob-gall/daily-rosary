import { sequenceToString } from "../stored-sequence-to-string"

describe('sequenceToString', () => {

  it('should be able to add 0 before numbers minors than 10', () => {

    const response = sequenceToString({
      day: 1,
      month: 1,
      year: 2025,
      type: 'full',
    })
    
    expect(response).toEqual('2025-01-01')
  })
  it('should not add 0 before numbers greater than 9', () => {

    const response = sequenceToString({
      day: 10,
      month: 10,
      year: 2025,
      type: 'full',
    })
    
    expect(response).toEqual('2025-10-10')
  })

})