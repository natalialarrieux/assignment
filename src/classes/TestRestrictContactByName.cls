@isTest public class TestRestrictContactByName {
    @isTest static void restrictCbyNameCorrect() {
        Contact c = new Contact(LastName='BDDDD');
        Test.startTest();
        Database.SaveResult result = Database.insert(c, false);
        Test.stopTest();
        System.assert(!result.isSuccess());
    }
    
    @isTest static void restrictCbyNameIncorrect() {
        Contact cont = new Contact(LastName='INVALIDNAME');
        Test.startTest();
        Database.SaveResult result = Database.insert(cont, false);
        Test.stopTest();
        System.assert(!result.isSuccess());
    }
}