/******************************************************************************
OPPGAVE 1

Din første oppgave er å koble denne JavaScript-filen til index.html-filen
ved å bruke en av metodene vi viste i første forelesning.

<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
javascript.js
******************************************************************************/

// Løs denne oppgaven i index.html

/* Svar: Jeg har satt de 2 forskjellige måtene man kan gjøre det på.
    Du kan også scripte Javascript inni <script></script> men det er ikke som er normalen lenger*/


/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/

// Skriv koden for oppgave 2 her

// Tekst, eller en string er det man bruker for å skrive noe ut med hjelp av ""

    console.log("Dette er ein tekst i ein string");

/* Number, Det kan være hva slags tall så lenge det det ikke er desimal tall, da må man bruke float. 
    For å gi et eksempel med tallene, så skal jeg gjøre et  par enkele mattestykker */

    console.log(4 + 4)
    console.log(10 / 2)
    console.log(20 - 15)
    console.log(5 * 3)

/* Boolean er brukt for sann eller usann. Det vil si for eksempel hvis du skal in til en pub og du er i en alder under 18
    Så vil det stå usann og at du ikke kommer inn. Hvis du er over 18 så kommer inn. */

    const myName = "Andreas";
    const myAge = 25; // Skriver du 17 eller 18 så vil det si at du ikke kommer inn.

    if (myAge > 18) {
        console.log("You may enter")
    } else {
        console.log("You may not enter (underage)")
    }

/* Array er ein liste over ting som kan bli systematisk satt i rekkefølge.
    Du kan også velge spesifikt ting inni et array for å bare vise det istedet for alt.
    For eksempel i denne så skal vi ta forskjellige byer i et array */

    const norwegianCities = ["Skien", "Porsgrunn", "Bamle", "Drangedal", "Bergen", "Stavanger", "Trøndelag"];
    console.log(norwegianCities)

/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

// Skriv koden for oppgave 3 her

/******************************************************************************
OPPGAVE 4

Skriv en IF/ELSE-betingelse som sjekker følgende:
1. At userName ikke er tom ("").
2. At userAge er 18 eller eldre.
3. At userIsBlocked er false.

(TIPS: Bruk && (logisk OG) for å sjekke alle tre betingelsene i én IF-setning.)

- Hvis alle disse betingelsene er oppfylt, skal du sette variabelen
userIsLoggedIn til true og goToPage til "/home". Deretter skriver du ut en 
velkomstmelding med console.log.

- Hvis noen av betingelsene IKKE er oppfylt, skal du skrive ut en feilmelding
med console.log.

Prøv å endre verdiene på variablene for å sikre at IF/ELSE-setningen din 
håndterer alle tilfeller korrekt.
******************************************************************************/

let userName = "";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

// Skriv koden for oppgave 4 her

/******************************************************************************
OPPGAVE 5

Lag en variabel kalt userTitle og sett innholdet til å være:
- "Mr." hvis userMale er true, eller
- "Mrs." hvis userMale er false.

Bruk en ternary conditional for dette:

const variabel = betingelse ? "hvis sann" : "hvis usann";

Prøv å endre userMale til både true og false og bruk console.log for å sjekke
at betingelsen din fungerer som den skal.
******************************************************************************/

const userMale = false;

// Skriv koden for oppgave 5 her