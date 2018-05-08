import { SurveysModule } from './surveys.module';

describe('SurveysModule', () => {
    let surveysModule: SurveysModule;

    beforeEach(() => {
        surveysModule = new SurveysModule();
    });

    it('should create an instance', () => {
        expect(surveysModule).toBeTruthy();
    });
});
