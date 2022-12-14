/* eslint-disable prettier/prettier */
import { Content } from "./content"

describe('Notification content', () => {

  it('should be able to create a notification content', () => {
    const content = new Content('You have received a Fried Request');
  
    expect(content).toBeTruthy();
  })
  
  it('should NOT be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('You')).toThrow();
  })
  
  it('should NOT be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  })

})

