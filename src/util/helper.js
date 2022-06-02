const day = new Date();

const printDate = () => {
  console.log(`The current date is ${day.getDate()}`);
  return day.getDate();
}

const printMonth = () => {
  console.log(`The current month is ${day.getMonth()}`);
  return day.getMonth();
}

const getBatchInfo = () => {
  console.log(`Radon, W3D3, the topic for today is Nodejs module system`);
  return `Radon, W3D3, the topic for today is Nodejs module system`;
}

module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
module.exports.getBatchInfo = getBatchInfo;