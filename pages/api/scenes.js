export default (req, res) => {
  res.statusCode = 200;

  res.end(
    JSON.stringify([
      {
        name: "Starting Soon",
        desc: "get ready for some cheesy goudaness!",
        prenup: "Coming up...",
        id: "start",
        enabled: false
      },
      {
        name: "Brie Right Back",
        desc: "take 5. grab a snack. stretch your back!",
        prenup: "Coming up...",
        id: "brb",
        enabled: false
      },
      {
        name: "Goudabye",
        desc: "the cheese factory exploded! debrie went everywhere!",
        prenup: "Show's over!",
        id: "end",
        enabled: false
      },
      {
        id: "game",
        enabled: true
      }
    ])
  );
};
