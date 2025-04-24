const { db } = require("../models/database");
const { comparison } = require("../utils/utils");

const fetchSchools = (request, response) => {
  let user_latitude = request.body.latitude;
  let user_longitude = request.body.longitude;

  let query = `select * from school_management_system`;
  try {
    db.query(query, (err, result) => {
      if (err) {
        return response
          .status(400)
          .send(`error in fetching school to database ${err}`);
      }
      for (let i = 0; i < result.length; i++) {}
      for (const element of result) {
        element.distance = Math.sqrt(
          Math.pow(user_latitude - element.latitude, 2) +
            Math.pow(user_longitude - element.longitude, 2)
        );
      }
      result.sort(comparison);

      return response.status(200).send(result);
    });
  } catch (err) {
    return response
      .status(400)
      .send(`error in adding school to database ${err}`);
  }
};
const addSchool = (request, response) => {
  let query = `insert into school_management_system value (${request.body.id},"${request.body.name}","${request.body.address}",${request.body.latitude},${request.body.longitude})`;
  try {
    db.query(query, (err) => {
      if (err) {
        return response
          .status(400)
          .send(`error in adding school to database ${err}`);
      }
      return response.status(201).send("school added successfully");
    });
  } catch (err) {
    return response
      .status(400)
      .send(`error in adding school to database ${err}`);
  }
};

module.exports = { fetchSchools, addSchool };
