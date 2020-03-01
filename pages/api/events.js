import config from "../../config.js";

export default (req, res) => {
  res.statusCode = 200;

  res.end(JSON.stringify(config.events));
};
