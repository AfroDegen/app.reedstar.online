module.exports = async (req, res) => {
  res.status(200).json({
    answer: "Beacon API is alive."
  });
};
