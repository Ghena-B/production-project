export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
  cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
  cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
  cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: 'dsfafds' },
    body: {
      id: '4',
      first: 'test',
      lastname: 'user',
      age: 212,
      currency: 'EUR',
      country: 'GERMANY',
      city: 'Iasi',
      username: 'admin',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIY3mOQ9RyRtyy1IF5OA5OKVxxo9_cCAyTlAHpbAhtVenVNPmXJXQnWa_us9mOXqf9ivA&usqp=CAU',
    },
  });
};
declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
