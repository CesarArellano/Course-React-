
describe('Tests in the file demo.test.js', () => {
  
  test('The strings must be the same', () => {
    // 1.- Inicialization (Arrange).
    const message = 'Hello World';
  
    // 2.- Stimulus (Act).
    const message2 = 'Hello World';
  
    // 3.- Observe behavior (Assert).
    expect(message).toBe(message2); // ===
  })
  
});