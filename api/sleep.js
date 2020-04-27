function sleep(millis) {

  return new Promise(resolve => setTimeout(resolve, millis));

}

module.exports = async (req, res) => {

  await sleep(500);

  res.json({body: 'Waited 0.5 second'});

}
