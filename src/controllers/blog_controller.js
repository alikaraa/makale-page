const axios = require("axios");

const tumMakaleleriGetir = async (req, res) => {
  try {
    const blogAPI = await axios.get(
      "https://emrealtunbilek.com/wp-json/wp/v2/posts"
    );
    res.render('./makaleler/index',{makaleler: blogAPI.data})
    console.log(blogAPI.data);
  } catch (hata) {
    console.log(hata.response.data);
    console.log(hata.response.status);
    console.log(hata.response.header);
    res.json({
      mesaj: "Hata Cikti:" + hata.response.data,
    });
  }
  res.render("./makaleler/index");
};

const tekMakaleGetir = async (req, res) => {
  let makaleID = req.params.makaleID;

  try {
    const tekMakale = await axios.get(
      "https://emrealtunbilek.com/wp-json/wp/v2/posts/" + makaleID
    );

    res.render("./makaleler/makale",{makale:tekMakale.data});
  } catch (hata) {
    console.log(hata.response.data);
    console.log(hata.response.status);
    console.log(hata.response.header);
    res.json({
      mesaj: "Hata Cikti:" + hata.response.data,
    });
  }
};

module.exports = {
  tumMakaleleriGetir,
  tekMakaleGetir,
};
