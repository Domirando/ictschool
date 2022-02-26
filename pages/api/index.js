const posts = async (req, res) => {
  res.setHeader(`Cache-Control`, [
    `maxage=86400`,
    `s-maxage=86400`,
    `state-if-error=1`,
  ]);
  res.status(200);
  res.json({
    "/posts": {
      about: "Manage posts on database",
      endpoints: {
        all: "/api/posts",
        id: "/api/posts/<id>",
      },
    },
  });
};

export default posts;
