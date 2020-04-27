function sleep(millis) {

  return new Promise(resolve => setTimeout(resolve, millis));

}

module.exports = async (req, res) => {

  await sleep(1000);

  res.send('Waited 1 second');

}
