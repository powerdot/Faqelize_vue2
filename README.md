<img src="assets/banner.jpg" alt="drawing" width="800"/>

🤔 Sometimes it happens that you need to make a FAQ for closed purposes, but you don’t want to install docker or set up a server with a database.  
🖤 Try it out: <a href="https://ilyich.ru/Faqelize/" target="_blank">Faqelize Demo</a> with password: <code>1234</code>

## How to run
* Download this project
* Run <code>npm install</code>
* Create file `./public/database.json` with your Q/A database
* Run `npm run serve`
* Go to <a href="http://localhost:8080/" target="_blank">http://localhost:8080/</a> and check the FAQ (`serve` runs without password)

## How to build
* Check `encryptDatabase` (in `faqelize.config.js`) parameter to define password encryption before building
* Run `npm run build`
* (optional) if `encryptDatabase` is `true` you need enter password to encrypt database
* Your FAQ is ready to use in `./docs` folder 🎉

## Database format

### Simple JSON database with questions and answers.

```json
[
    {
        "id": 1,
        "q": "What is your name?",
        "a": "My name is Ilya."
    }
]
```

### Database with pages

```json
[
    {
        "id": 2,
        "q": "What is JSON dictionary?",
        "a": {
            "type": "page",
            "page": "JSON_dict",
            "subText": "All about Dictionaries for Faqelize."
        }
    }
]
```
* `page` option is a name of component at `./src/pages/`

### Database with simple answers as html

```json
[
    {
        "id": 3,
        "q": "What is HTML?",
        "a": {
            "type": "html",
            "html": "<h1>HTML</h1><p>HTML is a markup language used to create web pages.</p>"
        }
    }
]
```

## Files to setup
- ./**faqelize.config.js**
- ./src/i18n/**{language_code}.js**
- ./public/**database.json**

