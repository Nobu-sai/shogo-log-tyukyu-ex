const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs')

console.log(process.env.PORT)

app.get('/ishikadan/', function(request, response) {
// app.get('/', function(request, response) {
// app.get('*', function(request, response) {
  console.log('Home page visited!!');
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // Open Graph meta Tags 
	// read in the index.html file
	fs.readFile(filePath, 'utf8', function (err,data) {
		if (err) {
			return console.log(err);
		}
		
		// replace the special strings with server generated strings
			// General (Facebook, LinkedIn...)
				data = data.replace(/\$OG_TYPE/g, 'Home Page');
				data = data.replace(/\$OG_URL/g, 'https://portfolio-static.conohawing.com/ishikadan/');
				data = data.replace(/\$OG_TITLE/g, '石井花壇 | 温海温泉旅館【公式サイト】');
				data = data.replace(/\$OG_DESCRIPTION/g, "日本古来の素材と現代的表現を併せ持つ温泉旅館、石井花壇。 伝統的「和」の息づく空間で、至極のひとときをお過ごしください。");
				data = data.replace(/\$OG_IMAGE/g, './og-image-1200x630.jpg');
		// Twitter
				data = data.replace(/\$OG_TWITTER_CARD/g, 'summary_large_image');
				data = data.replace(/\$OG_TWITTER_URL/g, 'https://portfolio-static.conohawing.com/ishikadan/');
				data = data.replace(/\$OG_TWITTER_TITLE/g, '石井花壇 | 温海温泉旅館【公式サイト】');
				data = data.replace(/\$OG_TWITTER_DESCRIPTION/g, "日本古来の素材と現代的表現を併せ持つ温泉旅館、石井花壇。 伝統的「和」の息づく空間で、至極のひとときをお過ごしください。");
				result = data.replace(/\$OG_TWITTER_IMAGE/g, './og-image-1200x630.jpg');
				
		response.send(result);
	});
});

// app.get('/oheya', function(request, response) {
//   console.log('Oheya page visited!');
//   const filePath = path.resolve(__dirname, './build', 'index.html')

//   // Open Graph meta Tags 
// 	fs.readFile(filePath, 'utf8', function (err,data) {
// 	if (err) {
// 	return console.log(err);
// 	}
// 	// replace the special strings with server generated strings
// 			// General (Facebook, LinkedIn...)
// 			data = data.replace(/\$OG_TYPE/g, 'Subpage Page');
// 			data = data.replace(/\$OG_URL/g, 'https://portfolio-static.conohawing.com/ishikadan/oheya');
// 			data = data.replace(/\$OG_TITLE/g, 'お部屋 - 石井花壇 | 温海温泉旅館【公式サイト】');
// 			data = data.replace(/\$OG_DESCRIPTION/g, "日本古来の素材と現代的表現を併せ持つ温泉旅館、石井花壇。 伝統的「和」の息づく空間で、至極のひとときをお過ごしください。");
// 			data = data.replace(/\$OG_IMAGE/g, './og-image-1200x630.jpg');
// 	// Twitter
// 			data = data.replace(/\$OG_TWITTER_CARD/g, 'summary_large_image');
// 			data = data.replace(/\$OG_TWITTER_URL/g, 'https://portfolio-static.conohawing.com/ishikadan/oheya');
// 			data = data.replace(/\$OG_TWITTER_TITLE/g, 'お部屋 - 石井花壇 | 温海温泉旅館【公式サイト】');
// 			data = data.replace(/\$OG_TWITTER_DESCRIPTION/g, "日本古来の素材と現代的表現を併せ持つ温泉旅館、石井花壇。 伝統的「和」の息づく空間で、至極のひとときをお過ごしください。");
// 			result = data.replace(/\$OG_TWITTER_IMAGE/g, './og-image-1200x630.jpg');
// 	response.send(result);
// 	});
// });


// Set Static Site (after OG meta Tags are replaced)
app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));