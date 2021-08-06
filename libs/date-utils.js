function assertEquals(actual, expected) {
	console.assert(actual === expected, 'Ошибка проверки: значения не равны, ' + actual + ' != ' + expected);
}

function getDaysOfMonth(month, year) {
	return new Date(year, month + 1, 0).getDate();
}

assertEquals(getDaysOfMonth(0, 2021), 31);
assertEquals(getDaysOfMonth(1, 2021), 28);
assertEquals(getDaysOfMonth(3, 2021), 30);
assertEquals(getDaysOfMonth(2, 2021), 31);
assertEquals(getDaysOfMonth(1, 2020), 29);

function n(str, char) {
	return [...str].filter(ch => char === ch).length;
}

assertEquals(n('hello', 'l'), 2);
assertEquals(n('foo', 'n'), 0);
assertEquals(n('world', 'r'), 1);
assertEquals(n('voodoo', 'o'), 4);
assertEquals(n('ratamahatta', 't'), 3);

function getFirstWeekday(month, year) {
	return new Date(year, month, 1).getUTCDay();
}

assertEquals(getFirstWeekday(4, 2021), 5);
assertEquals(getFirstWeekday(5, 2021), 1);
assertEquals(getFirstWeekday(7, 2021), 6);

function getWeekdayName(index) {
	const d = new Date('2021-04-05');
	d.setDate(d.getDate() + index);
	return d.toLocaleDateString('ru-RU', { weekday: 'long' });
}

assertEquals(getWeekdayName(0), 'понедельник');

function getMonthName(index) {
	const d = new Date(2020, index, 1);
	return d.toLocaleDateString('ru-Ru', { month: 'long' });
}

assertEquals(getMonthName(0), 'январь');

function getISODate(date) {
	const d = new Date(date);
	d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
	return d.toISOString().split('T')[0];
}

assertEquals(getISODate(new Date(2020, 1, 29)), '2020-02-29');
assertEquals(getISODate(new Date(2021, 4, 1)), '2021-05-01');

function what(date) {
	return date.toLocaleTimeString('ru-RU');
}

assertEquals(what(new Date(2020, 0, 1)), '00:00:00');
assertEquals(what(new Date(2020, 0, 1, 1)), '01:00:00');
assertEquals(what(new Date(2020, 0, 1, 1, 33)), '01:33:00');
assertEquals(what(new Date(2020, 0, 1, 22, 33, 44)), '22:33:44');