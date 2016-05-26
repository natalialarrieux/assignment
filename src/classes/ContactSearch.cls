public class ContactSearch {
    public static List<Contact> searchForContacts (string lName, string mailing){
        List<Contact> ret = [select id, name from Contact
                         where 
                             (LastName=:lName AND MailingPostalCode=:mailing)];
        return ret;
    }
}