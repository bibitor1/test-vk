import { fromFormToServer } from "../src/transformer";

describe('fromFormToServer function', () => {
  // Domestic juridical person
  test('Domestic juridical person with both fields filled', () => {
    const personInForm = {
      isForeign: false,
      isJuridical: true,
      title: 'OOO Romashka',
      tin: '1234567890'
    };
    const expected = {
      type: 'juridical',
      tin: '1234567890',
      name: null,
      foreign_tin: null,
      company_title: 'OOO Romashka'
    };
    expect(fromFormToServer(personInForm)).toEqual(expected);
  });

  test('Domestic juridical person with empty fields', () => {
    const personInForm = {
      isForeign: false,
      isJuridical: true,
      title: '',
      tin: ''
    };
    const expected = {
      type: 'juridical',
      tin: '',
      name: null,
      foreign_tin: null,
      company_title: ''
    };
    expect(fromFormToServer(personInForm)).toEqual(expected);
  });

  test('Domestic juridical person with only title filled', () => {
    const personInForm = {
      isForeign: false,
      isJuridical: true,
      title: 'OOO Romashka',
      tin: ''
    };
    const expected = {
      type: 'juridical',
      tin: '',
      name: null,
      foreign_tin: null,
      company_title: 'OOO Romashka'
    };
    expect(fromFormToServer(personInForm)).toEqual(expected);
  });

  test('Domestic juridical person with only tin filled', () => {
    const personInForm = {
      isForeign: false,
      isJuridical: true,
      title: '',
      tin: '1234567890'
    };
    const expected = {
      type: 'juridical',
      tin: '1234567890',
      name: null,
      foreign_tin: null,
      company_title: ''
    };
    expect(fromFormToServer(personInForm)).toEqual(expected);
  });

  // Domestic physical person
  test('Domestic physical person with both fields filled', () => {
    const personInForm = {
      isForeign: false,
      isJuridical: false,
      title: 'Ivan Ivanov',
      tin: '9876543210'
    };
    const expected = {
      type: 'physical',
      tin: '9876543210',
      name: 'Ivan Ivanov',
      foreign_tin: null,
      company_title: null
    };
    expect(fromFormToServer(personInForm)).toEqual(expected);
  });

  test('Domestic physical person with empty fields', () => {
    const personInForm = {
      isForeign: false,
      isJuridical: false,
      title: '',
      tin: ''
    };
    const expected = {
      type: 'physical',
      tin: '',
      name: '',
      foreign_tin: null,
      company_title: null
    };
    expect(fromFormToServer(personInForm)).toEqual(expected);
  });

  test('Domestic physical person with only title filled', () => {
    const personInForm = {
      isForeign: false,
      isJuridical: false,
      title: 'Ivan Ivanov',
      tin: ''
    };
    const expected = {
      type: 'physical',
      tin: '',
      name: 'Ivan Ivanov',
      foreign_tin: null,
      company_title: null
    };
    expect(fromFormToServer(personInForm)).toEqual(expected);
  });

  test('Domestic physical person with only tin filled', () => {
    const personInForm = {
      isForeign: false,
      isJuridical: false,
      title: '',
      tin: '9876543210'
    };
    const expected = {
      type: 'physical',
      tin: '9876543210',
      name: '',
      foreign_tin: null,
      company_title: null
    };
    expect(fromFormToServer(personInForm)).toEqual(expected);
  });

  // Foreign juridical person
  test('Foreign juridical person with both fields filled', () => {
    const personInForm = {
      isForeign: true,
      isJuridical: true,
      title: 'Foreign Company',
      tin: 'FC1234567890'
    };
    const expected = {
      type: 'foreign_juridical',
      tin: null,
      name: null,
      foreign_tin: 'FC1234567890',
      company_title: 'Foreign Company'
    };
    expect(fromFormToServer(personInForm)).toEqual(expected);
  });

  test('Foreign juridical person with empty fields', () => {
    const personInForm = {
      isForeign: true,
      isJuridical: true,
      title: '',
      tin: ''
    };
    const expected = {
      type: 'foreign_juridical',
      tin: null,
      name: null,
      foreign_tin: '',
      company_title: ''
    };
    expect(fromFormToServer(personInForm)).toEqual(expected);
  });

  test('Foreign juridical person with only title filled', () => {
    const personInForm = {
      isForeign: true,
      isJuridical: true,
      title: 'Foreign Company',
      tin: ''
    };
    const expected = {
      type: 'foreign_juridical',
      tin: null,
      name: null,
      foreign_tin: '',
      company_title: 'Foreign Company'
    };
    expect(fromFormToServer(personInForm)).toEqual(expected);
  });

  test('Foreign juridical person with only tin filled', () => {
    const personInForm = {
      isForeign: true,
      isJuridical: true,
      title: '',
      tin: 'FC1234567890'
    };
    const expected = {
      type: 'foreign_juridical',
      tin: null,
      name: null,
      foreign_tin: 'FC1234567890',
      company_title: ''
    };
    expect(fromFormToServer(personInForm)).toEqual(expected);
  });

  // Foreign physical person
  test('Foreign physical person with both fields filled', () => {
    const personInForm = {
      isForeign: true,
      isJuridical: false,
      title: 'Bruce Wayne',
      tin: 'FD9876543210'
    };
    const expected = {
      type: 'foreign_physical',
      tin: null,
      name: 'Bruce Wayne',
      foreign_tin: 'FD9876543210',
      company_title: null
    };
    expect(fromFormToServer(personInForm)).toEqual(expected);
  });

  test('Foreign physical person with empty fields', () => {
    const personInForm = {
      isForeign: true,
      isJuridical: false,
      title: '',
      tin: ''
    };
    const expected = {
      type: 'foreign_physical',
      tin: null,
      name: '',
      foreign_tin: '',
      company_title: null
    };
    expect(fromFormToServer(personInForm)).toEqual(expected);
  });

  test('Foreign physical person with only title filled', () => {
    const personInForm = {
      isForeign: true,
      isJuridical: false,
      title: 'Bruce Wayne',
      tin: ''
    };
    const expected = {
      type: 'foreign_physical',
      tin: null,
      name: 'Bruce Wayne',
      foreign_tin: '',
      company_title: null
    };
    expect(fromFormToServer(personInForm)).toEqual(expected);
  });

  test('Foreign physical person with only tin filled', () => {
    const personInForm = {
      isForeign: true,
      isJuridical: false,
      title: '',
      tin: 'FD9876543210'
    };
    const expected = {
      type: 'foreign_physical',
      tin: null,
      name: '',
      foreign_tin: 'FD9876543210',
      company_title: null
    };
    expect(fromFormToServer(personInForm)).toEqual(expected);
  });
});
