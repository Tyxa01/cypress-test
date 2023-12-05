/// <reference types = "cypress" />
export class DatePickerPage {
get formPicker (){
return cy.get('input[placeholder="Form Picker"]');
}
get todayDayButton() {
return cy.get("nb-calendar-day-cell.day-cell.today");
}
DatePickerPageOpen () {
cy.visit ('pages/forms/datepicker')}
}
