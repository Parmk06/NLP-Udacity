import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {handleSubmit} from '../js/handleSubmit';


const mockAxios = new MockAdapter(axios);

// Mocking the successful response
mockAxios.onPost('http://localhost:8080').reply(200, {
  sample: {
    score_tag: 'Positive',
    agreement: 'AGREEMENT',
    subjectivity: 'OBJECTIVE',
    confidence: 0.85,
    irony: 'NONIRONIC'
  }
});
/**
 * @jest-environment jsdom
 */
describe('handleSubmit', () => {
  it('should handle form submission and update elements', async () => {
    document.body.innerHTML = `
      <form>
        <input name="yourFieldName" value="yourTestValue">
      </form>
      <div id="text"></div>
      <div id="agreement"></div>
      <div id="subjectivity"></div>
      <div id="confidence"></div>
      <div id="irony"></div>
    `;

    const event = new Event('submit');
    const form = document.querySelector('form');

    await handleSubmit(event);

    expect(form).toBeTruthy(); // Add more assertions as needed
    expect(document.getElementById('text').innerHTML).toBe('Positive');
    expect(document.getElementById('agreement').innerHTML).toBe('AGREEMENT');
    expect(document.getElementById('subjectivity').innerHTML).toBe('OBJECTIVE');
    expect(document.getElementById('confidence').innerHTML).toBe('0.85');
    expect(document.getElementById('irony').innerHTML).toBe('NONIRONIC');
  });
});

// Clean up the mock after all tests
afterAll(() => {
  mockAxios.restore();
});
