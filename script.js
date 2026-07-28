const body = document.body
const translations = {
    pl: {
        panelTitle: "Panel Sterowania",
        systemStatusTitle: "Status systemu",
        systemReady: "SYSTEM GOTOWY",
        noErrors: "Brak błędów",
        workModeTitle: "Tryb pracy",
        manualMode: "Tryb Manualny",
        batteryTitle: "Stan baterii",
        batteryState: "NAŁADOWANA",
        batteryInfo: "Bateria gotowa do pracy",
        startProgramTitle: "Start Programu",
        btnProgram1: "Program 1",
        btnProgram2: "Program 2",
        btnProgram3: "Program 3",
        operationControlTitle: "Kontrola operacji",
        stopBtn: "STOP",
        pauseBtn: "PAUZA",
        resetBtn: "RESET",
        waterBtn: "SPUST WODY",
        settingsTitle: "Ustawienia parametrów",
        settingsProgram1: "Prog 1",
        settingsProgram2: "Prog 2",
        settingsProgram3: "Prog 3",
        advancedBtn: "Zaawansowane",
        workTime: "Czas pracy robota: 2H : 1M",
        unitMm: "mm",
        robotAlt: "Robot przemysłowy"
    },
    en: {
        panelTitle: "Control Panel",
        systemStatusTitle: "System Status",
        systemReady: "SYSTEM READY",
        noErrors: "No errors",
        workModeTitle: "Operating Mode",
        manualMode: "Manual Mode",
        batteryTitle: "Battery Status",
        batteryState: "CHARGED",
        batteryInfo: "Battery ready for operation",
        startProgramTitle: "Program Start",
        btnProgram1: "Program 1",
        btnProgram2: "Program 2",
        btnProgram3: "Program 3",
        operationControlTitle: "Operation Control",
        stopBtn: "STOP",
        pauseBtn: "PAUSE",
        resetBtn: "RESET",
        waterBtn: "WATER DRAIN",
        settingsTitle: "Parameter Settings",
        settingsProgram1: "Prog 1",
        settingsProgram2: "Prog 2",
        settingsProgram3: "Prog 3",
        advancedBtn: "Advanced",
        workTime: "Robot work time: 2H : 1M",
        unitMm: "mm",
        robotAlt: "Industrial robot"
    },
    de: {
        panelTitle: "Steuerpanel",
        systemStatusTitle: "Systemstatus",
        systemReady: "SYSTEM BEREIT",
        noErrors: "Keine Fehler",
        workModeTitle: "Betriebsmodus",
        manualMode: "Manueller Modus",
        batteryTitle: "Batteriestatus",
        batteryState: "GELADEN",
        batteryInfo: "Batterie betriebsbereit",
        startProgramTitle: "Programmstart",
        btnProgram1: "Programm 1",
        btnProgram2: "Programm 2",
        btnProgram3: "Programm 3",
        operationControlTitle: "Betriebssteuerung",
        stopBtn: "STOP",
        pauseBtn: "PAUSE",
        resetBtn: "RESET",
        waterBtn: "WASSER ABLASS",
        settingsTitle: "Parametereinstellungen",
        settingsProgram1: "Prg 1",
        settingsProgram2: "Prg 2",
        settingsProgram3: "Prg 3",
        advancedBtn: "Erweitert",
        workTime: "Roboterlaufzeit: 2H : 1M",
        unitMm: "mm",
        robotAlt: "Industrieroboter"
    },
    fr: {
        panelTitle: "Panneau de contrôle",
        systemStatusTitle: "État du système",
        systemReady: "SYSTÈME PRÊT",
        noErrors: "Aucune erreur",
        workModeTitle: "Mode de travail",
        manualMode: "Mode manuel",
        batteryTitle: "État de la batterie",
        batteryState: "CHARGÉE",
        batteryInfo: "Batterie prête au travail",
        startProgramTitle: "Démarrage du programme",
        btnProgram1: "Programme 1",
        btnProgram2: "Programme 2",
        btnProgram3: "Programme 3",
        operationControlTitle: "Contrôle des opérations",
        stopBtn: "STOP",
        pauseBtn: "PAUSE",
        resetBtn: "RESET",
        waterBtn: "VIDANGE D'EAU",
        settingsTitle: "Réglages des paramètres",
        settingsProgram1: "Prog 1",
        settingsProgram2: "Prog 2",
        settingsProgram3: "Prog 3",
        advancedBtn: "Avancé",
        workTime: "Temps de travail du robot : 2H : 1M",
        unitMm: "mm",
        robotAlt: "Robot industriel"
    },
    es: {
        panelTitle: "Panel de control",
        systemStatusTitle: "Estado del sistema",
        systemReady: "SISTEMA LISTO",
        noErrors: "Sin errores",
        workModeTitle: "Modo de trabajo",
        manualMode: "Modo manual",
        batteryTitle: "Estado de la batería",
        batteryState: "CARGADA",
        batteryInfo: "Batería lista para trabajar",
        startProgramTitle: "Inicio del programa",
        btnProgram1: "Programa 1",
        btnProgram2: "Programa 2",
        btnProgram3: "Programa 3",
        operationControlTitle: "Control de operaciones",
        stopBtn: "STOP",
        pauseBtn: "PAUSA",
        resetBtn: "RESET",
        waterBtn: "DRENAJE DE AGUA",
        settingsTitle: "Configuración de parámetros",
        settingsProgram1: "Prog 1",
        settingsProgram2: "Prog 2",
        settingsProgram3: "Prog 3",
        advancedBtn: "Avanzado",
        workTime: "Tiempo de trabajo del robot: 2H : 1M",
        unitMm: "mm",
        robotAlt: "Robot industrial"
    },
    ro: {
        panelTitle: "Panou de control",
        systemStatusTitle: "Starea sistemului",
        systemReady: "SISTEM GATA",
        noErrors: "Fără erori",
        workModeTitle: "Mod de operare",
        manualMode: "Mod manual",
        batteryTitle: "Starea bateriei",
        batteryState: "ÎNCĂRCATĂ",
        batteryInfo: "Bateria este gata de lucru",
        startProgramTitle: "Pornire program",
        btnProgram1: "Program 1",
        btnProgram2: "Program 2",
        btnProgram3: "Program 3",
        operationControlTitle: "Control operațiuni",
        stopBtn: "STOP",
        pauseBtn: "PAUZĂ",
        resetBtn: "RESET",
        waterBtn: "EVACUARE APĂ",
        settingsTitle: "Setări parametri",
        settingsProgram1: "Prog 1",
        settingsProgram2: "Prog 2",
        settingsProgram3: "Prog 3",
        advancedBtn: "Avansat",
        workTime: "Timp de lucru robot: 2H : 1M",
        unitMm: "mm",
        robotAlt: "Robot industrial"
    },
    bg: {
        panelTitle: "Контролен панел",
        systemStatusTitle: "Състояние на системата",
        systemReady: "СИСТЕМАТА Е ГОТОВА",
        noErrors: "Няма грешки",
        workModeTitle: "Режим на работа",
        manualMode: "Ръчен режим",
        batteryTitle: "Състояние на батерията",
        batteryState: "ЗАРЕДЕНА",
        batteryInfo: "Батерията е готова за работа",
        startProgramTitle: "Стартиране на програма",
        btnProgram1: "Програма 1",
        btnProgram2: "Програма 2",
        btnProgram3: "Програма 3",
        operationControlTitle: "Контрол на операциите",
        stopBtn: "СТОП",
        pauseBtn: "ПАУЗА",
        resetBtn: "НУЛИРАНЕ",
        waterBtn: "ИЗТОЧВАНЕ НА ВОДА",
        settingsTitle: "Настройки на параметри",
        settingsProgram1: "Прог 1",
        settingsProgram2: "Прог 2",
        settingsProgram3: "Прог 3",
        advancedBtn: "Разширени",
        workTime: "Работно време на робота: 2H : 1M",
        unitMm: "мм",
        robotAlt: "Индустриален робот"
    },
    hu: {
        panelTitle: "Vezérlőpult",
        systemStatusTitle: "Rendszerállapot",
        systemReady: "RENDSZER KÉSZ",
        noErrors: "Nincsenek hibák",
        workModeTitle: "Üzemmód",
        manualMode: "Kézi mód",
        batteryTitle: "Akkumulátor állapota",
        batteryState: "FELTÖLTVE",
        batteryInfo: "Az akkumulátor munkára kész",
        startProgramTitle: "Program indítása",
        btnProgram1: "Program 1",
        btnProgram2: "Program 2",
        btnProgram3: "Program 3",
        operationControlTitle: "Műveletvezérlés",
        stopBtn: "STOP",
        pauseBtn: "SZÜNET",
        resetBtn: "RESET",
        waterBtn: "VÍZLEERESZTÉS",
        settingsTitle: "Paraméterbeállítások",
        settingsProgram1: "Prog 1",
        settingsProgram2: "Prog 2",
        settingsProgram3: "Prog 3",
        advancedBtn: "Haladó",
        workTime: "Robot munkaidő: 2H : 1M",
        unitMm: "mm",
        robotAlt: "Ipari robot"
    }
};
const redDot = document.querySelector('#redDot')
const yellowDot = document.querySelector('#yellowDot')
const greenDot = document.querySelector('#greenDot')
const errorDescription = document.querySelector('#error-description')
const noErrors = document.querySelector('#noErrors')
const autoBtns = document.querySelector('#auto-btns')
const autoBtn1 = document.querySelector('#auto-btn-1')
const autoBtn2 = document.querySelector('#auto-btn-2')
const autoBtn3 = document.querySelector('#auto-btn-3')
const configButtons = document.querySelectorAll(".config-btn");
const settingsPrograms = document.querySelectorAll(".settings-programs");
const closeButtons = document.querySelectorAll(".btn-popup");

// connection with PLC //
// $(document).ready(function(){
//     $.ajaxSetup({ cache: false });

//     setInterval(updateData, 500)

//     $('#stopBtn').click(function() {
//         stopRobot()
//     })
//     $('#pauseBtn').click(function() {
//         updateData().then(vars=> {
//             pauseRobot(vars)
//         })
//     })
//     $('#resetBtn').click(function() {
//         resetRobot()
//     })
//     $('#drainBtn').on('mousedown', function() {
//         drainWater();
//     });
//     $('#drainBtn').on('touchstart', function() {
//         drainWater();
//     });
//     $('#drainBtn').on('mouseup', function() {
//         stopDrainWater();
//     });
//     $('#drainBtn').on('touchend', function() {
//         stopDrainWater();
//     });
//     $('#auto-btns').click(function(e) {
//         autoPrograms(e)
//     })
//     $("#settings-program-form1").submit(function(event) {
//         event.preventDefault()
//         submitForm(1)
//     });
//     $("#settings-program-form2").submit(function(event) {
//         event.preventDefault()
//         submitForm(2)
//     });
//     $("#settings-program-form3").submit(function(event) {
//         event.preventDefault()
//         submitForm(3)
//     });
//     $("#settings-robot-form").submit(function(event) {
//         event.preventDefault()
//         submitRobotForm()
//     });
// })

function updateData() {
    return $.get("IOVariablesUpdate.htm").then(result => {
        const variables = parsePLCVariables(result)
        error(variables)
        lights(variables)
        positionRobot(variables)
        stateBtns(variables)
        return variables;
    })
}
// function for change lights on the panel based on PLC variables
function lights(variables) {    
    if(variables[0] == 1) {
        redDot.classList.add('active')
    } else {
        redDot.classList.remove('active')
    }
    if(variables[1] == 1) {
        yellowDot.classList.add('active')
    } else {
        yellowDot.classList.remove('active')
    }
    if(variables[2] == 1) {
        greenDot.classList.add('active')
    } else {
        greenDot.classList.remove('active')
    }
}
// parth of code for change language on the panel
function setText(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    }
}
function changeLanguage(lang) {
    const dictionary = translations[lang] || translations.pl;

    Object.entries(dictionary).forEach(([key, value]) => {
        if (key === "unitMm") {
            document.querySelectorAll(".unitMm").forEach((element) => {
                element.textContent = value;
            });
            return;
        }
        if (key === "robotAlt") {
            const robotImage = document.getElementById("robotImage");
            if (robotImage) {
                robotImage.alt = value;
            }
            return;
        }
        setText(key, value);
    });
    document.documentElement.lang = lang;
}

function initLanguageSwitcher() {
    const languageSelect = document.getElementById("languageSelect");
    const languageSwitcher = document.querySelector(".language-switcher");
    const languageButton = document.getElementById("languageButton");
    const selectedLanguageLabel = document.getElementById("selectedLanguageLabel");
    const selectedLanguageShort = document.getElementById("selectedLanguageShort");
    const languageOptions = document.querySelectorAll(".language-option");

    if (!languageSelect || !languageSwitcher || !languageButton) {
        return;
    }

    const closeMenu = () => {
        languageSwitcher.classList.remove("is-open");
        languageButton.setAttribute("aria-expanded", "false");
    };

    const openMenu = () => {
        languageSwitcher.classList.add("is-open");
        languageButton.setAttribute("aria-expanded", "true");
    };

    const toggleMenu = () => {
        if (languageSwitcher.classList.contains("is-open")) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    languageButton.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleMenu();
    });

    languageOptions.forEach((option) => {
        option.addEventListener("click", (event) => {
            event.stopPropagation();

            const lang = option.dataset.lang;

            languageSelect.value = lang;
            changeLanguage(lang);

            if (selectedLanguageLabel) {
                selectedLanguageLabel.textContent = option.textContent;
            }

            if (selectedLanguageShort) {
                selectedLanguageShort.textContent = option.dataset.short;
            }

            languageOptions.forEach((languageOption) => {
                languageOption.classList.remove("active");
            });

            option.classList.add("active");
            closeMenu();
        });
    });

    document.addEventListener("click", (event) => {
        if (!languageSwitcher.contains(event.target)) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
}
function initProgramButtons() {
    const programButtons = document.querySelectorAll(".btn-prog");

    programButtons.forEach((button) => {
        button.addEventListener("click", () => {
            programButtons.forEach((programButton) => {
                programButton.classList.remove("active");
            });

            button.classList.add("active");
        });
    });
}
document.addEventListener("DOMContentLoaded", () => {
    initLanguageSwitcher();
    initProgramButtons();
});
// function for change error description on the panel based on PLC variables
const errorDescriptionArray_pl = ['Awaryjne zatrzymanie',
                                'Niskie napięcie akumulatora',
                                'Przedni prawy czujnik poza zakresem',
                                'Zbyt mały dystans przed robotem',
                                'Zbyt mały dystans po prawej stronie robota',
                                'Błąd silnika prawego koła',
                                'Błąd silnika lewego koła',
                                'Błąd silnika ramienia'
]

const errorDescriptionArray_en = ['Emergency stop',
                                'Low battery voltage',
                                'Front right sensor out of range',
                                'Too small distance in front of the robot',
                                'Too small distance on the right side of the robot',
                                'Right wheel motor error',
                                'Left wheel motor error',
                                'Arm motor error'
]

const errorDescriptionArray_de = ['Not-Aus',
                                'Niedrige Batteriespannung',
                                'Front rechter Sensor ausserhalb des Bereichs',
                                'Zu geringer Abstand vor dem Roboter',
                                'Zu geringer Abstand auf der rechten Seite des Roboters',
                                'Fehler des rechten Radmotors',
                                'Fehler des linken Radmotors',
                                'Fehler des Arm-Motors'
]

const errorDescriptionArray_fr = ['Arrêt d\'urgence',
                                'Basse tension de batterie',
                                'Capteur avant droit hors de portée',
                                'Distance trop courte devant le robot',
                                'Distance trop courte à droite du robot',
                                'Défaillance du moteur de la roue droite',
                                'Défaillance du moteur de la roue gauche',
                                'Défaillance du moteur du bras'
]

const errorDescriptionArray_es = ['Parada de emergencia',
                                'Bajo voltaje de la batería',
                                'Sensor delantero derecho fuera de rango',
                                'Distancia demasiado corta delante del robot',
                                'Distancia demasiado corta a la derecha del robot',
                                'Error del motor de la rueda derecha',
                                'Error del motor de la rueda izquierda',
                                'Error del motor del brazo'
]

const errorDescriptionArray_ro = ['Oprire de urgență',
                                'Tensiune scăzută a bateriei',
                                'Senzor frontal drept în afara domeniului',
                                'Distanță prea mică în fața robotului',
                                'Distanță prea mică în partea dreaptă a robotului',
                                'Eroare a motorului roții drepte',
                                'Eroare a motorului roții stângi',
                                'Eroare a motorului brațului'
]

const errorDescriptionArray_bg = ['Аварийно спиране',
                                'Ниско напрежение на батерията',
                                'Преден десен сензор извън обхвата',
                                'Твърде малко разстояние пред робота',
                                'Твърде малко разстояние вдясно от робота',
                                'Грешка на двигателя на дясното колело',
                                'Грешка на двигателя на лявото колело',
                                'Грешка на двигателя на ръката'
]

const errorDescriptionArray_hu = ['Vészleállítás',
                                'Alacsony akkumulátorfeszültség',
                                'A jobb elülső érzékelő a tartományon kívül van',
                                'Túl kicsi távolság a robot előtt',
                                'Túl kicsi távolság a robot jobb oldalán',
                                'A jobb kerékmotor hiba',
                                'A bal kerékmotor hiba',
                                'A kar motorjának hibája'
]

function error(variables) {
    if (variables[7] == 100) {
        errorDescription.textContent = 'SYSTEM GOTOWY'
        noErrors.textContent = 'Brak błędów'
    } else {
        errorDescription.classList.add('Błąd')
        let item = parseInt(variables[8])
        let array =  errorDescriptionArray_pl
        if (document.documentElement.lang === 'en') {
            array = errorDescriptionArray_en
        } else if (document.documentElement.lang === 'de') {
            array = errorDescriptionArray_de
        } else if (document.documentElement.lang === 'fr') {
            array = errorDescriptionArray_fr
        } else if (document.documentElement.lang === 'es') {
            array = errorDescriptionArray_es
        } else if (document.documentElement.lang === 'ro') {
            array = errorDescriptionArray_ro
        } else if (document.documentElement.lang === 'bg') {
            array = errorDescriptionArray_bg
        } else if (document.documentElement.lang === 'hu') {
            array = errorDescriptionArray_hu
        }
        errorDescription.textContent = array[item]
    
    }
}
// function for send PLC variable to start auto program based on button click
function autoPrograms(e) {
    if (e.target == autoBtn1) {
        const url = 'IOVariables.htm';
        const sdata = '"virtualPilot".swProgram1' + '=' + 1;
        $.post(url,sdata);
        autoBtns.style.pointerEvents = 'none'
    }
    if (e.target == autoBtn2) {
        const url = 'IOVariables.htm';
        const sdata = '"virtualPilot".swProgram2' + '=' + 1;
        $.post(url,sdata);
        autoBtns.style.pointerEvents = 'none'
    }
    if (e.target == autoBtn3) {
        const url = 'IOVariables.htm';
        const sdata = '"virtualPilot".swProgram3' + '=' + 1;
        $.post(url,sdata);
        autoBtns.style.pointerEvents = 'none'
    }
} 
// functions STOP, PAUSE, RESET, DRAIN WATER for send PLC variable based on button click
function stopRobot() {
    const url = 'IOVariables.htm'; 
    let postData = [];
    postData.push(escape('"virtualPilot".swEStop') + '=' + 1)
    // postData.push(escape('"DB_MAIN".START') + '=' + 0)
    const sdata = postData.join('&');
    $.post(url,sdata);
    autoBtns.style.pointerEvents = 'auto'
    let postDataAuto = [];
    postDataAuto.push(escape('"virtualPilot".swProgram1') + '=' + 0)
    postDataAuto.push(escape('"virtualPilot".swProgram2') + '=' + 0)
    postDataAuto.push(escape('"virtualPilot".swProgram3') + '=' + 0)
    const sdataAuto = postDataAuto.join('&');
    $.post(url,sdataAuto);
}
function pauseRobot(vars) {
    const url = 'IOVariables.htm'; 
    let postData = [];
    if (vars[9] == 1) {
        // update style for pauze 
        pauseBtn.classList.add('pause')
        pauseBtn.classList.remove('wait') 
        pauseBtn.classList.remove('continue') 
        pauseBtn.textContent = 'Pauza'
        postData.push(escape('"virtualPilot".swStop') + '=' + 0)
        clickedPauseBtn = 0
    } else {
        // update style for wait 
        pauseBtn.classList.add('wait') 
        pauseBtn.classList.remove('continue') 
        pauseBtn.classList.remove('pause')
        pauseBtn.textContent = 'Czekaj'
        clickedPauseBtn = 1
        postData.push(escape('"virtualPilot".swStop') + '=' + 1)
    }
    const sdata = postData.join('&');
    $.post(url,sdata);
}
function resetRobot() {
    const url = 'IOVariables.htm'; 
    let postData = [];
    postData.push(escape('"virtualPilot".swInit') + '=' + 1)
    // TODO: set to 0 after response
    const sdata = postData.join('&');
    $.post(url,sdata);
}
function drainWater() {
    const url = 'IOVariables.htm'; 
    let postData = [];
    postData.push(escape('"virtualPilot".swDrainWater') + '=' + 1)
    const sdata = postData.join('&');
    $.post(url,sdata);
}
function stopDrainWater() {
    const url = 'IOVariables.htm'; 
    let postData = [];
    postData.push(escape('"virtualPilot".swDrainWater') + '=' + 0)
    const sdata = postData.join('&');
    $.post(url,sdata);
}

// functions for open and close settings windows based on button click
function closeAllWindows() {
    settingsPrograms.forEach(window => {
        window.classList.remove("active-program");
    });
    configButtons.forEach(btn => {
        btn.classList.remove("active");
    });
}

configButtons.forEach((button,index)=>{
    button.addEventListener("click",()=>{
        const popup = settingsPrograms[index];
        if(popup.classList.contains("active-program")){
            closeAllWindows();
        }else{
            closeAllWindows();
            popup.classList.add("active-program");
            button.classList.add("active");
        }
    });
});

closeButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        closeAllWindows();
    });
});
settingsPrograms.forEach(windowBox=>{
    const header = windowBox.querySelector(".title-popup");
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let left = 0;
    let top = 0;
    header.style.cursor = "grab";
    header.addEventListener("mousedown",(e)=>{
        isDragging = true;
        header.style.cursor = "grabbing";
        left = windowBox.offsetLeft;
        top = windowBox.offsetTop;
        startX = e.clientX;
        startY = e.clientY;
    });
    document.addEventListener("mouseup",()=>{
        isDragging = false;
        header.style.cursor = "grab";
    });
    document.addEventListener("mousemove",(e)=>{
        if(!isDragging) return;
        e.preventDefault();
        windowBox.style.left = left + (e.clientX-startX) + "px";
        windowBox.style.top = top + (e.clientY-startY) + "px";
    });
});