//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                                 //
//                                             W H A T S A P P _ U S E R _ BOT                                     //
//                                                                                                                 //                                               //
//                                                                                                                 //
//            ███╗░░░███╗░░█████╗░░███████╗░████████░░███████╗░████████╗░░░░░░░░░░░░███╗░░░███╗░░██████╗░░░░░      //   
//            ████╗░████║░██╔══██╗░██╔════╝░╚══██║══╝░██║════╝░██╔═══██╗░░░░░░░░░░░░████╗ ████║░░██╔══██╗░░░░      //
//            ██╔████╔██║░███████║░███████╗░░░░██║░░░░███████║░███████╔╝░░███████░░░██╔████╔██║░░██║░░██║░░░░      // 
//            ██║░██║╚██║░██╔══██║░╚════██║░░░░██║░░░░██║════╝░██╔═══██╗░░╚══════╝░░██║░██░░██║░░██║░░██║░░░░      //
//            ██║░╚═╝░██║░██║░░██║░███████║░░░░██║░░░░███████║░██║░░░░██░░░░░░░░░░░░██║░╚═╝░██║░░██████╔╝░░░░      //
//            ╚═╝░░░░░╚═╝░╚═╝░░╚═╝░╚══════╝░░░░╚═╝░░░░░╚══════╝░╚═╝░░░░╚═╝░░░░░░░░░░░╚═╝░░░░░╚═╝░░╚═════╝░░░░      //
//                                                                                                                 //
//                                 C R E A T E D _ B Y _ M R _ S A H A N _ O F C _ S L _ R G                       //  
//                                                                                                                 //
//                                                                                                                 //
//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU5xN2VxVGo2SjRMS3QrVW83RmMrdU9hbGp6ZzFQT21uUlZUZ293VTBFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHFIK0V1N3paUjUrM05naVdOTTZSZklVcHhCUWZTN1VsbldCc3pYeUFsND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2R0RvRG9pSk1MQzlmT3FHZS9mc1c5Z1d4Q1ZRY3lPOE9rYVlhaFhxS1dBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpS1ZIM3V6YU1iNS9SKzI2OUpWaGNOdnJSVnRuWWJ3bWRERDlBTHpWQ1dvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlPdkpiVjVieHA1dlV5b2RSa1hUZ3hKbGN5dU5rc1V0YlBFWFlOYm1yMHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5KU2RXUlduOXdDZDVzb05OWWEvcTZPY1BRWlVRaUozdk9Uc1QrMW1Ja0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS09QcHh2MFYwY0g3SlRram4xeWpEYnBFaVQ0Mjd1ME1rWS9MZVZObDFXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSG9xdFhJMHRRK3NFQ2g2TCtZYlh3dTQ2VXR5R3RyemhURnNTdkJkdWtUaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVZTDhZUHlwRkpqYUhHemVEQmFVcjRocHFveHVBS0NsNXh4RTB6bW1qU2VnNnlmT0JjVEUxYlMzTTJqSmNQcTJzQUh1dFRyUUhqYUlvb003MHdjQkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM5LCJhZHZTZWNyZXRLZXkiOiJveXBsbFU5Zzl0eVRwNkhtK3BBTklXakZseGhLVnB1Qm5qcXM5SDBtOUtnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJYNUhOeXJsVlJQaUFwQzJFaFZSVk53IiwicGhvbmVJZCI6IjA2MzM1YzM4LTRkNjgtNDJhMi05ZGQzLTQzODAyMTIzMWUwNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TlZuMy9TM0w0QVpBZ1AwUTFLeEEvWDExQUU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia092bFByall3TTdXa0d2ZHN4UGtVV2hxamxJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlkxN1g2TDk3IiwibWUiOnsiaWQiOiIyNTQ3ODczODYxNjU6MTdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQXZpbnMgbWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ00yUHc2QUNFUHVnbkxNR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjZ4ZWI0ckNqM3p5SjZjdzFzRVRrUE9QVlR4U090aFJSOXhRKzlWbEhFSDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im1aZC9Yc3ppNXJpVitSTkZGRTVZUnU1Z1FETzk2NEY0Vno0WnRSZVlmVk12MWluR2R3Q3UxN1BsSkdqaWtOOEdJaCtBVUkxSTBCMzNVZVRKQVp2TkRnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJETnVES0ZwbENXZkEyaytIbWxYNTdzQ3JzODZzMWJFZHE1TzZXcHNlODEwakJ4cWxrTVphMytINUFPT0tjN2t5L1ZRdnMvSDJoS3BTVnAvR1ljQ2RBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc4NzM4NjE2NToxN0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlc1htK0t3bzk4OGllbk1OYkJFNUR6ajFVOFVqcllVVWZjVVB2VlpSeEI5In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE4MDMwNDcyfQ==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Avins md",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "254787386165",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "oui",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'MASTER-MD',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || 'sk-proj-YfcNzdUKxlPr4yOkKYRQT3BlbkFJB0dbLsM9gWNTh52M3hAw',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/74b612f51b7a5750191af.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || 'recording',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
