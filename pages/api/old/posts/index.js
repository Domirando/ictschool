import apiHandler from "../../../../util/api-handler";

const oldPosts = async (req, res) => {
  const data = await fetch("https://ictschool.uz/wp-json/wp/v2/posts");
  await apiHandler(req, res, await data.json());
};

export default oldPosts;
