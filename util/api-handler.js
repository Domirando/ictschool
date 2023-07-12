/**
 * Send the final JSON data to the user
 * with aged cache that will avoid client
 * spam within 86400 milliseconds
 * @param req Request from (req, res)
 * @param res Response from (req, res)
 * @param data JSON dump data
 * @return {Promise<void>}
 */

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
