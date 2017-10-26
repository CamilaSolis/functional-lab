const serializeUser = user => {
  const backup= Object.assign({},user);
backup.name = (backup.name.length > 10) ? `${backup.name.slice(0, 7)}...` : backup.name;
backup.date = backup.date.toJSON();
return JSON.stringify(backup);
};

module.exports = serializeUser;