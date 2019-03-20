var Ardublockly = Ardublockly || {};
Ardublockly.LOCALISED_TEXT = {
  translationLanguage: "Polski",
  title: "Ardublockly",
  blocks: "Bloki",
  /* Menu */
  open: "Otwórz",
  save: "Zapisz",
  deleteAll: "Usuń wszystkie",
  settings: "Ustawienia",
  documentation: "Dokumentacja",
  reportBug: "Raportuje Błędy",
  examples: "Przykłady",
  /* Settings */
  compilerLocation: "Lokalizacja kompilatora",
  compilerLocationDefault: "Domyślna lokalizacja kompilatora",
  sketchFolder: "Folder szkicownika",
  sketchFolderDefault: "Domyślny Folder Szkicownika",
  arduinoBoard: "Płytka Arduino",
  arduinoBoardDefault: "Domyślna płytka Arduino",
  comPort: "COM Port",
  comPortDefault: "COM Port domyślny",
  defaultIdeButton: "Domyślny przycisk IDE",
  defaultIdeButtonDefault: "IDE domyślne opcje",
  language: "Język",
  languageDefault: "Język domyślny",
  sketchName: "Nazwa szkicu",
  /* Arduino console output */
  arduinoOpMainTitle: "Arduino IDE wyjście",
  arduinoOpWaiting: "Oczekiwanie na wyjście IDE ...",
  arduinoOpUploadedTitle: "Ładownie Szkicu zakończone sukcesem",
  arduinoOpVerifiedTitle: "Weryfikowanie Szkicu zakończono sukcesem",
  arduinoOpOpenedTitle: "Szkic otwarty w IDE",
  arduinoOpOpenedBody: "Szkic powinien być załadowany w Arduino IDE.",
  arduinoOpErrorTitle: "Pojawił się błąd",
  arduinoOpErrorIdContext_0: "Brak błędu.",
  arduinoOpErrorIdContext_1: "Budowanie lub ładowanie zakończone błędem",
  arduinoOpErrorIdContext_2: "Nie znaleziono szkicu.",
  arduinoOpErrorIdContext_3: "Błędny argument linii poleceń.",
  arduinoOpErrorIdContext_4: "Preference passed to 'get-pref' flag does not exist.",
  arduinoOpErrorIdContext_5: "Not Clear, but Arduino IDE sometimes errors with this.",
  arduinoOpErrorIdContext_50: "Unexpected error code from Arduino IDE",
  arduinoOpErrorIdContext_51: "Could not create sketch file",
  arduinoOpErrorIdContext_52: "Invalid path to internally created sketch file",
  arduinoOpErrorIdContext_53: "Unable to find Arduino IDE<br>" +
                              "The compiler directory has not been set correctly.<br>" +
                              "Please ensure the path is correct in the Settings.",
  arduinoOpErrorIdContext_54: "What should we do with the Sketch?<br>" +
                              "The launch IDE option has not been set.<br>" +
                              "Please select an IDE option in the Settings.",
  arduinoOpErrorIdContext_55: "Serial Port unavailable<br>" +
                              "The Serial Port is not accessible.<br>" +
                              "Please check if the Arduino is correctly connected to the PC and select the Serial Port in the Settings.",
  arduinoOpErrorIdContext_56: "Unknown Arduino Board<br>" +
                              "The Arduino Board has not been set.<br>" +
                              "Please select the appropriate Arduino Board from the settings.",
  arduinoOpErrorIdContext_52: "Unexpected server error.",
  arduinoOpErrorIdContext_64: "Unable to parse sent JSON.",
  arduinoOpErrorUnknown: "Unexpected error",
  /* Modals */
  noServerTitle: "Ardublockly app not running",
  noServerTitleBody: "<p>For all the Ardublockly features to be enabled, the Ardublockly desktop application must be running locally on your computer.</p>" +
                     "<p>If you are using an online version you will not be able to configure the settings nor load the blocks code into an Arduino.</p>" +
                     "<p>Installation instruction can be found in the <a href=\"https://github.com/carlosperate/ardublockly\">Ardublockly repository</a>.</p>" +
                     "<p>If you have Ardublockly already installed, make sure the application is running correctly.</p>",
  noServerNoLangBody: "If the Ardublockly application is not running the language cannot be fully changed.",
  addBlocksTitle: "Additional Blocks",
  /* Alerts */
  loadNewBlocksTitle: "Load new blocks?",
  loadNewBlocksBody: "Loading a new XML file will replace the current blocks from the workspace.<br>" +
                     "Are you sure you want to proceed?",
  discardBlocksTitle: "Delete blocks?",
  discardBlocksBody: "There are %1 blocks on the workspace.<br>" +
                     "Are you sure you want to delete them?",
  invalidXmlTitle: "Invalid XML",
  invalidXmlBody: "The XML file was not successfully parsed into blocks. Please review the XML code and try again.",
  /* Tooltips */
  uploadingSketch: "Ładownie szkicu do Arduino...",
  uploadSketch: "Ładuję szkic do Arduino",
  verifyingSketch: "Weryfikuje szkic...",
  verifySketch: "Weryfikuj szkic",
  openingSketch: "Otwierzm szkic w Arduino IDE...",
  openSketch: "Otwórz szkic w IDE",
  notImplemented: "Funkcja niezaimplementowana",
  /* Prompts */
  ok: "OK",
  okay: "W porządku",
  cancel: "Anuluj",
  return: "Zwróć",
  /* Cards */
  arduinoSourceCode: "Arduino – kod źródłowy",
  blocksXml: "Bloki XML",
  /* Toolbox Categories*/
  catLogic: "Logika",
  catLoops: "Pętle",
  catMath: "Matematyka",
  catText: "Tekst",
  catVariables: "Zmienne",
  catFunctions: "Funkcje",
  catInputOutput: "Wejście/Wyjście",
  catTime: "Czas",
  catAudio: "Dźwięki",
  catMotors: "Silniki",
  catComms: "Komunikacja",
  catSensors: "Sensory",
};
