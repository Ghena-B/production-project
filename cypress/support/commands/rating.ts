import { selectByTestId } from '../../helpers/selectByTestId';

export const setRate = (starsCount = 5, feedback = 'feedback') => {
  cy.getByTestId(`StarRating.${starsCount}`).click();
  cy.getByTestId('RatingCard.Input').type(feedback);
  cy.getByTestId('RatingCard.Send').click();
  cy.getByTestId('AddCommentForm.Button').click();
};
export const getByTestId = (testId: string) => cy.get(selectByTestId(testId));
declare global {
    namespace Cypress {
        interface Chainable {
            setRate(starsCount: number, feedback: string): Chainable<void>;
        }
    }
}
