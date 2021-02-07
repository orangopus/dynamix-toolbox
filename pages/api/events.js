import config from "../../config.json";

export default (req, res) => {
  res.statusCode = 200;

  res.end(JSON.stringify(config.events));
};
