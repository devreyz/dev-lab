/* =====================================================
           REFERÊNCIAS AOS PONTEIROS
        ====================================================== */
const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

/* =====================================================
           FUNÇÃO PRINCIPAL QUE ATUALIZA A HORA
        ====================================================== */
function updateClock() {
    const now = new Date();

    /* Captura horas, minutos e segundos */
    const hours = now.getHours() % 12; /* Converte para 12h */
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    /* -------------------------------------------
               Cálculos das rotações:
               - Segundos → 6° por segundo
               - Minutos → 6° + 0.1° por segundo (movimento suave)
               - Horas → 30° por hora + 0.5° por minuto
            -------------------------------------------- */
    const sDeg = seconds * 6;
    const mDeg = minutes * 6 + seconds * 0.1;
    const hDeg = hours * 30 + minutes * 0.5;

    /* Aplica as rotações nos ponteiros */
    secondHand.style.transform = `rotateZ(${sDeg}deg) translate(50%, 0)`;
    minuteHand.style.transform = `rotateZ(${mDeg}deg)`;
    hourHand.style.transform = `rotateZ(${hDeg}deg)`;
}

/* Atualiza o relógio automaticamente a cada segundo */
setInterval(updateClock, 1000);

/* Atualização imediata ao carregar a página */
updateClock();
