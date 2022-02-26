import apiHandler from "../../../../util/api-handler";

const oldPostsById = async (req, res) => {
  const { id } = req.query;
  const data = await fetch(`https://ictschool.uz/wp-json/wp/v2/posts/${id}`);
  await apiHandler(req, res, await data.json());
};

export default oldPostsById;
