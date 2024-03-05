let currentArticleId = '';
describe('User visits article page', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      currentArticleId = article.id;
      cy.visit(`articles/${article.id}`);
    });
  });
  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });
  it('and see the article content', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
  });
  it('and see the article recommendation list', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });
  it('and comment the article', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('testing comment');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  });
  it('and rate the article', () => {
    cy.intercept('GET', '**/articles/*', {
      fixture: 'article-details.json',
    });
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(4, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 4);
  });
});
