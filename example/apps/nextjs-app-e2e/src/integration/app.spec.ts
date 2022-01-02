describe('check ActiveLink HOC', () => {
  it('highlight activated link when it received string type static route', () => {
    // todo migration to nx to use ts based cypress
    const MAIN_NAVI = [
      { route: '/', name: 'home' },
      { route: '/about', name: 'about' },
      { route: '/users', name: 'users' },
    ];

    MAIN_NAVI.forEach(({ route, name }) => {
      cy.checkActivation(route, name);
    });
  });
  it('highlight activated link when it received UrlObject type static route', () => {});
});
