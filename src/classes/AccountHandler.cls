public class AccountHandler {    
    public static Account insertNewAccount(string nombre){
        Account retorno;
        try {
            retorno = new Account(Name=nombre);
            insert retorno;
        } catch (DmlException ex){
            retorno = null;
        } finally {}
        return retorno;
    }
}