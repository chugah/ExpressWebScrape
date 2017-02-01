var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape', function(req, res) {

	url = 'http://www.imdb.com/title/tt1229340';
	request(url, function(err, res, html){
		if(!err){
			var $ = cheerio.load(html);
			var title, release, rating;
			var json = { title : "", release : "", rating : "" };

			$('.title_wrapper').filter(function(){
				var data = $(this);
				title = data.children().first().text();
				json.title = title;
				json.release = release;
			});

			$('#titleYear').filter(function(){
				var data = $(this);
				release = data.children().first().text();
				json.release = release;
			});

			$('.ratingValue').filter(function(){
				var data = $(this);
				rating = data.text();
				json.rating = rating;
			});
		}

		fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
			console.log('Success! File written. Check project directory for output.');
		});		
	});
	res.send('Check console!');
});

app.listen('8080');
console.log('Server 8080 up and running');
exports = module.exports = app;
