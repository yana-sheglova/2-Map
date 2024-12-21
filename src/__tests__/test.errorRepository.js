import ErrorRepository from '../js/errorRepository';

describe('ErrorRepository', () => {
  let errors;
  beforeEach(() => {
    errors = new ErrorRepository();
  });

  test('Translate known errors', () => {
    expect(errors.translate(300)).toBe('Множественный выбор');
    expect(errors.translate(400)).toBe('Неверный запрос');
    expect(errors.translate(500)).toBe('Внутренняя ошибка сервера');
  });

  test('Translate unknown error', () => {
    expect(errors.translate(600)).toBe('Unknown error');
    expect(errors.translate(0)).toBe('Unknown error');
    expect(errors.translate(10)).toBe('Unknown error');
  });
});
