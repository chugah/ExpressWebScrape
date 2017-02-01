This app is a simple web scraper that gets some general movie information from IMDB. The tools used to accomplish this functionality include:

1. NodeJS
2. ExpressJS: Node framework 
3. Request: Assits with HTTP calls
4. Cheerio: Traverses the DOM and extracts data

With this setup, a single request to IMDB is made to extract the following information:

1. Movie title
2. Year released
3. IMDB  rating

Once information is extracted, it is locally saved to a JSON file. 