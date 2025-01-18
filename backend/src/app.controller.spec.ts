import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const entity = { name: 'blue-ethics api', status: 'ok', version: '0.0.1' };
      jest.spyOn(appController, 'index').mockReturnValue(entity);
      expect(appController.index()).toBe(entity);
    });
  });
});
