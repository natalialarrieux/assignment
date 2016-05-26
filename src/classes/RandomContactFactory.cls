public class RandomContactFactory {
    public static List<Contact> generateRandomContacts (integer nroCon, string lastN){
        List<Contact> ret = new List<Contact>();
        for (integer i=0; i<nroCon; i++){
            Contact con = new Contact();
            con.FirstName = 'FirstName'+i;
            con.LastName = lastN;
            ret.add(con);
        }
        return ret;
    }
}