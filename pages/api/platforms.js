export default (req, res) => {
  res.statusCode = 200;

  res.end(
    JSON.stringify(["mixer", "twitch", "dlive", "smashcast", "fbgg", "youtube"])
  );
};
