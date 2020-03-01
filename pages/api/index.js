import config from "../../config.json";

export default (req, res) => {
  res.statusCode = 200;

  res.end(
    JSON.stringify({ message: "Welcome to the API " + config.user.username })
  );
};
