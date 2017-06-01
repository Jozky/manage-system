exports.test = function (req, res) {

    console.log(req)

  res.json([{
      name: '2017-02-02',
      host: '小天才',
      upstream_url: '东莞市长安镇步步高大道18号'
  }, {
      name: '2017-02-04',
      host: '小天才',
      upstream_url: '东莞市长安镇步步高大道17号'
  }, {
      name: '2017-02-01',
      host: '小天才',
      upstream_url: '东莞市长安镇步步高大道19号'
  }]);
};
