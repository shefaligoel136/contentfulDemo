module.exports = function (migration) {
    const dog = migration.createContentType('dog');
    const name = dog.createField('name');
    name.type('Symbol').required(true);
  };