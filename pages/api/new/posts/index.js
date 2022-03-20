import apiHandler from "../../../../util/api-handler";

const newPosts = async (req, res) => {
  await apiHandler(req, res, {
    bg_image: "world",
  });
};

export default newPosts;
