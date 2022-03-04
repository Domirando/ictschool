import DOC from "../../api-documentation.json";
import apiHandler from "../../util/api-handler";

const posts = async (req, res) => {
  await apiHandler(req, res, DOC);
};

export default posts;
