function getWeekDayName(day) {
  let weekDayName;

  switch (day) {
    case 0:
      return weekDayName = 'Domingo';
    case 1:
      return weekDayName = 'Segunda-feira';
    case 2:
      return weekDayName = 'Terça-feira';
    case 3:
      return weekDayName = 'Quarta-feira';
    case 4:
      return weekDayName = 'Quinta-feira';
    case 5:
      return weekDayName = 'Sexta-feira';
    case 6:
      return weekDayName = 'Sábado';
    default:
      return weekDayName = '';
  }

}

function getMonthName(day) {
  let monthName;

  switch (day) {
    case 0:
      return monthName = 'Janeiro';
    case 1:
      return monthName = 'Fevereiro';
    case 2:
      return monthName = 'Março';
    case 3:
      return monthName = 'Abril';
    case 4:
      return monthName = 'Maio';
    case 5:
      return monthName = 'Junho';
    case 6:
      return monthName = 'Julho';
    case 7:
      return monthName = 'Agosto';
    case 8:
      return monthName = 'Setembro';
    case 9:
      return monthName = 'Outubro';
    case 10:
      return monthName = 'Novembro';
    case 11:
      return monthName = 'Dezembro';
    default:
      return monthName = '';
  }

}

function zeroCorrection (num) {
  return num >= 10 ? num : `0${num}`;
}

function createDate(date) {
  const weekDay = date.getDay();
  const month = date.getMonth();

  const nameWeekDay = getWeekDayName(date.getDay(weekDay));
  const nameMonth = getMonthName(date.getMonth(month));

  return (
    `${nameWeekDay}, ${date.getDate()} de ${nameMonth} ` +
    `de ${date.getFullYear()} ` +
    `${zeroCorrection(date.getHours())}:${zeroCorrection(date.getMinutes())}`
  );
}

const h1 = document.querySelector('#date');
const date = new Date();
h1.innerHTML = createDate(date);