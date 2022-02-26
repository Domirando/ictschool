const apiHandler = async (req, res, data) => {
  await res.setHeader(`Cache-Control`, [
    `maxage=86400`,
    `s-maxage=86400`,
    `state-if-error=1`,
  ]);
  await res.status(200);
  await res.json(data);
};

export default apiHandler;
