const Content = require("../models/contents.model");

const getAllContent = async (req, res) => {
  console.log("Loading", req.params.id_video);
  const data = await Content.aggregate([
    {
      $addFields: {
        idVideo: { $toObjectId: "$id_video" },
      },
    },
    {
      $lookup: {
        from: "videos",
        localField: "idVideo",
        foreignField: "_id",
        as: "videos_content",
      },
    },
  ]);
  try {
    res.json({ data: data, message: "Data telah dapatkan" });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  getAllContent,
};
