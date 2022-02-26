import apiHandler from "../../../../util/api-handler";

const oldCategories = async (req, res) => {
  const data = await fetch("https://ictschool.uz/wp-json/wp/v2/categories");
  await apiHandler(req, res, await data.json());
};

export default oldCategories;
