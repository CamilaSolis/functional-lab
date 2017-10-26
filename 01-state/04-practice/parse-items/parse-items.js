const parseItems = (items) => {
  const backup = items.map((i)=>{
      return parseInt(i)
  })
return backup.sort();
};

module.exports = parseItems;