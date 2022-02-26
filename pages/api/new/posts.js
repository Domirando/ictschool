const newPosts = async (req, res) => {
  res.setHeader(`Cache-Control`, [
    `maxage=86400`,
    `s-maxage=86400`,
    `state-if-error=1`,
  ]);
  res.status(200);
  res.json({
    hello: "world",
  });
};

export default newPosts;
