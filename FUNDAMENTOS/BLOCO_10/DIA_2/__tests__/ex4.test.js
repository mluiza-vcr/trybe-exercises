const { TestScheduler } = require("jest");
const getRepos = require('../src/ex4');

test('testa se repositórios estão na lista do resultado', async () => {
  const response = await getRepos('https://api.github.com/orgs/tryber/repos');
  expect.assertions(2);
  expect(response.includes('sd-01-week4-5-project-todo-list')).toBeTruthy();
  expect(response.includes('sd-01-week4-5-project-meme-generator')).toBeTruthy();
})