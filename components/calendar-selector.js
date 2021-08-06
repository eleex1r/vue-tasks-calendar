const calendarSelector = {
	template: calendarSelectorTpl.innerHTML,
	props: ['date'],
	methods: {
		getMonthTitle() {
			return getMonthName(this.date.getMonth());
		},
		nextMonth() {
			state.updateCalendarDateMonth(1);
			// const date = new Date(this.date);
			// date.setMonth(date.getMonth() + 1);
			// this.date = date;
		},
		prevMonth() {
			state.updateCalendarDateMonth(-1);
			// const date = new Date(this.date);
			// date.setMonth(date.getMonth() - 1);
			// this.date = date;
		},
		getYear() {
			return this.date.getFullYear();
		},
		prevYear() {
			state.updateCalendarDateYear(-1);
			// const date = new Date(this.date);
			// date.setFullYear(date.getFullYear() - 1);
			// this.date = date;
		},
		nextYear() {
			state.updateCalendarDateYear(1);
			// const date = new Date(this.date);
			// date.setFullYear(date.getFullYear() + 1);
			// this.date = date;
		},
	}
}