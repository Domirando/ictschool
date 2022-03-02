import apiHandler from "../../../../util/api-handler";

const newPosts = async (req, res) => {
  await apiHandler(req, res, {
    hello: "world",
  });
};

export default newPosts;