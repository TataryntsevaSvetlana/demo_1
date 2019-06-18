const activeDay = new Date();
const today = new Date();

init();

function init() {
    const yyyy = today.toLocaleString('ru', {year: 'numeric'});
    const mm = today.toLocaleString('ru', {month: 'long'});
    const dd = today.toLocaleString('ru', {day: 'numeric'});
    const calendar = document.getElementById('calendar');

    renderClock();
    renderCalendar(today);
    renderCurrentDate(dd, mm, yyyy);

    calendar.addEventListener('click', onCalendarClick);
}

function onCalendarClick(event) {
    if (event.target.classList.contains('calendar-switch-section-btn-box__btn_left')) {
        activeDay.setDate(activeDay.getDate() - 1);
        renderCalendar(activeDay);
    }
    if (event.target.classList.contains('calendar-switch-section-btn-box__btn_right')) {
        activeDay.setDate(activeDay.getDate() + 1);
        renderCalendar(activeDay);
    }
    if (event.target.classList.contains('calendar-switch-section-btn-box__btn_up')) {
        activeDay.setMonth(activeDay.getMonth() - 1);
        activeDay.setDate(1);
        renderCalendar(activeDay);
    }
    if (event.target.classList.contains('calendar-switch-section-btn-box__btn_down')) {
        activeDay.setMonth(activeDay.getMonth() + 1);
        activeDay.setDate(1);
        renderCalendar(activeDay);
    }
}


function renderClock() {
    const clockEl = document.getElementById('clock');

    let timer = setTimeout(function tick() {
        clockEl.innerHTML = new Date()
            .toLocaleString('ru', {hour: 'numeric', minute: 'numeric', second: 'numeric'});
        timer = setTimeout(tick, 500);
    }, 500);
}

function renderCurrentDate(dd, mm, yyyy) {
    document.getElementById('currentDate').innerHTML = `${dd} ${mm} ${yyyy} г.`;
}

function renderCalendar(month) {
    const firstDayCurrentMonth = new Date(month.getFullYear(), month.getMonth(), 1);
    const QUANTITY_OF_CELLS_WITH_DATES_IN_CALENDAR = 42;
    const yyyy = firstDayCurrentMonth.toLocaleString('ru', {year: 'numeric'});
    const mm = firstDayCurrentMonth.toLocaleString('ru', {month: 'long'});
    const currentCalendar = document.querySelector('.calendar-box-section');
    let dayInWeekNumber = firstDayCurrentMonth.getDay();

    if (dayInWeekNumber === 0) {
        dayInWeekNumber = 6;
    } else {
        dayInWeekNumber -= 1;
    }

    const calendarBox = document.createElement('div');
    calendarBox.classList.add('calendar-box-section');

    for (let i = 0; i < QUANTITY_OF_CELLS_WITH_DATES_IN_CALENDAR; i++) {
        const currentCellDate = new Date(firstDayCurrentMonth);
        const currentCell = document.createElement('div');
        currentCellDate.setDate(firstDayCurrentMonth.getDate() - dayInWeekNumber + i);

        const sameDay = today.getDate() === currentCellDate.getDate();
        const sameMonth = today.getMonth() === currentCellDate.getMonth();
        const sameYear = today.getFullYear() === currentCellDate.getFullYear();

        currentCell.innerText = currentCellDate.getDate();

        currentCell.classList.add('calendar-box-section__day');

        if (currentCellDate.getMonth() === firstDayCurrentMonth.getMonth()) {
            currentCell.classList.add('calendar_activeMonth');

            if (currentCellDate.getDate() === activeDay.getDate()) {
                currentCell.classList.add('calendar_activeDay');
            }
        }

        if (sameDay && sameMonth && sameYear) {
            currentCell.classList.add('calendar_currentDay');
        }

        calendarBox.appendChild(currentCell);
    }

    if (currentCalendar) {
        currentCalendar.parentNode.removeChild(currentCalendar);
    }

    document.querySelector('.calendar').appendChild(calendarBox);

    renderCurrentMonth(mm, yyyy);
}

function renderCurrentMonth(mm, yyyy) {
    document.getElementById('currentMonth').innerHTML = `${mm} ${yyyy}`;
}
