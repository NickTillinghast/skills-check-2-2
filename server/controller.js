module.exports = {
  getProperty: (req, res, next) => {
    const db = req.app.get("db");
    db.getProperty()
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({ errorMessage: "it didn't work" });
      });
  },
  addProperty: (req, res, next) => {
    const { property_name, address, city, state, zip } = req.body;
    const db = req.app.get("db");
    db.addProperty([property_name, address, city, state, zip])
      .then(property => {
        res.status(200).send(property);
      })
      .catch(err => console.log(err));
  }
  // deleteProperty: (req, res, next) => {
  //   const db = req.app.delete;
  // }
};
