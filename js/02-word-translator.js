document.write('<h3>The Word Translator</h3>')

let languageCode = prompt('Enter your language code ("es", "de", "en", "fr")')

if (languageCode == "es") {
    console.log('Hello World translated in Spanish is: Hola Mundo')
} else 
    if (languageCode == "de") {
        console.log('Hello World translated in German is: Hallo Welt') 
    } else 
        if (languageCode == "en") {
            console.log('Hello World translated in English is: Hello World')
        } else 
            if (languageCode == "fr") {
                console.log('Hello World translated in French is: Bonjour le monde')
            } else 
                console.log('Hello World translated in English is: Hello World')