const express = require("express");
const app = express();
const port = process.env.PORT || 30000;
const path = require("path");
const fs = require("fs");

console.log(process.env.PORT);


app.get("/", function (request, response) {
  
  console.log("Home page visited!!");
  const filePath = path.resolve(__dirname, "./build", "index.html");

  // Open Graph meta Tags
  // read in the index.html file
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }

    // replace the special strings with server generated strings
    // General (Facebook, LinkedIn...)
    data = data.replace(/\$OG_TYPE/g, "Home Page");
    data = data.replace(
      /\$OG_URL/g,
      "https://portfolio-static.conohawing.com/ishikadan/"
    );
    data = data.replace(/\$OG_TITLE/g, "石井花壇 | 温海温泉旅館【公式サイト】");
    data = data.replace(
      /\$OG_DESCRIPTION/g,
      "日本古来の素材と現代的表現を併せ持つ温泉旅館、石井花壇。 伝統的「和」の息づく空間で、至極のひとときをお過ごしください。"
    );
    data = data.replace(/\$OG_IMAGE/g, "./og-image-1200x630.jpg");
    // Twitter
    data = data.replace(/\$OG_TWITTER_CARD/g, "summary_large_image");
    data = data.replace(
      /\$OG_TWITTER_URL/g,
      "https://portfolio-static.conohawing.com/ishikadan/"
    );
    data = data.replace(
      /\$OG_TWITTER_TITLE/g,
      "石井花壇 | 温海温泉旅館【公式サイト】"
    );
    data = data.replace(
      /\$OG_TWITTER_DESCRIPTION/g,
      "日本古来の素材と現代的表現を併せ持つ温泉旅館、石井花壇。 伝統的「和」の息づく空間で、至極のひとときをお過ごしください。"
    );
    result = data.replace(/\$OG_TWITTER_IMAGE/g, "./og-image-1200x630.jpg");

    response.send(result);
  });
});

app.get(["/oheya", "/oryori", "/onsen"], function (request, response) {
	// console.log(request.path);
	const URLpath = request.path;
	let pageNameInJA;
	let pageDescription;

	if(URLpath === "/oheya") {
		pageNameInJA =  "お部屋";
		pageDescription = "創業より受け継がれてきた石井花壇の和の造り温海の雄大な絶景を堪能していただけるように設計された客室ゆるやかに流れ行く時間に身を委ねて"
	} else if (URLpath === "/oryori") {
		pageNameInJA = "お料理";
		pageDescription = "地元熱海の市場で仕入れた食材のみを使った食材をふんだんに使い、大将の技が光る「熱海料理」四季ごと、日ごとに変化する味わいを、どうぞご堪能ください。"
	} else if (URLpath === "/onsen") {
		pageNameInJA = "心も身体も癒やす汐の温泉。湯あたりしにくく、赤ちゃんから年配の方までどなたでもゆっくりと安心して入っていただけます。柔らかく優しい湯にじっくりと漬かれば、心身共にリラックスできます。";
	}

  console.log(`${URLpath} visited!`);

  const filePath = path.resolve(__dirname, "./build", "index.html");

  // Open Graph meta Tags
  fs.readFile(filePath, "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    // replace the special strings with server generated strings
    // General (Facebook, LinkedIn...)
    data = data.replace(/\$OG_TYPE/g, "Subpage Page");
    data = data.replace(
      /\$OG_URL/g,
      `https://portfolio-static.conohawing.com/ishikadan${URLpath}`
    );
    data = data.replace(
      /\$OG_TITLE/g,
      `${pageNameInJA} - 石井花壇 | 温海温泉旅館【公式サイト】`
    );
    data = data.replace(
      /\$OG_DESCRIPTION/g,
      "日本古来の素材と現代的表現を併せ持つ温泉旅館、石井花壇。 伝統的「和」の息づく空間で、至極のひとときをお過ごしください。"
    );
    data = data.replace(/\$OG_IMAGE/g, "./og-image-1200x630.jpg");
    // Twitter
    data = data.replace(/\$OG_TWITTER_CARD/g, "summary_large_image");
    data = data.replace(
      /\$OG_TWITTER_URL/g,
      "https://portfolio-static.conohawing.com/ishikadan/oheya"
    );
    data = data.replace(
      /\$OG_TWITTER_TITLE/g,
      `${pageNameInJA} - 石井花壇 | 温海温泉旅館【公式サイト】`
    );
    data = data.replace(
      /\$OG_TWITTER_DESCRIPTION/g,
      "日本古来の素材と現代的表現を併せ持つ温泉旅館、石井花壇。 伝統的「和」の息づく空間で、至極のひとときをお過ごしください。"
    );
    result = data.replace(/\$OG_TWITTER_IMAGE/g, "./og-image-1200x630.jpg");
    response.send(result);
  });
});

// Set Static Site (after OG meta Tags are replaced)
app.use(express.static(path.resolve(__dirname, "build")));

app.get("*", function (request, response) {
  const filePath = path.resolve(__dirname, "build", "index.html");
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));