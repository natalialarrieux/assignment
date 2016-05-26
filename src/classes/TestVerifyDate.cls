@isTest
public class TestVerifyDate {
    @isTest static void CheckDatesCorrect() {
        Date date1 = Date.newinstance(2016, 2, 01);
        Date date2 = Date.newinstance(2016, 2, 28);
        Date fecha = VerifyDate.CheckDates(date1, date2);
        System.assertEquals(date2, fecha);
    }
    
    @isTest static void CheckDatesIncorrect() {
        Date date1 = Date.newinstance(2016, 3, 01);
        Date date2 = Date.newinstance(2016, 4, 28);
        Date fecha = VerifyDate.CheckDates(date1, date2);
        System.assertEquals(SetEndOfMonthDate(date1), fecha);
    }
    
    private static Date SetEndOfMonthDate(Date date1) {
		Integer totalDays = Date.daysInMonth(date1.year(), date1.month());
		Date lastDay = Date.newInstance(date1.year(), date1.month(), totalDays);
		return lastDay;
	}

}