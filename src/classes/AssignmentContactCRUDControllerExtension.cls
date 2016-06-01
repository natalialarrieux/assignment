
// PUEDE SER QUE SEA GLOBAL
public with sharing class AssignmentContactCRUDControllerExtension {

    private AssignmentMainController ctrl;

    public AssignmentContactCRUDControllerExtension(AssignmentMainController parentCtrl) {
        this.ctrl = parentCtrl;
    }
    								
    @RemoteAction
	public static Id createContact(String firstName, String lastName, 
		String username, String password, String title, String phone, String email){

		Id ret = null;

		ret = AssignmentContactCRUDController.createContact(firstName, lastName, username, password, title, phone, email);

		return ret;
	}

	@RemoteAction
	public static Boolean editContact(Id contactId, String myUsername, String myToken, 
		String title, String phone, String email){

		Boolean ret = null;

		if (AssignmentAuthenticationUtils.validateToken(myUsername, myToken)) {
			ret = AssignmentContactCRUDController.editContact(contactId, title, phone, email);
		}

		return ret;
	}

	@RemoteAction
	public static Boolean deleteContact(Id contactId, String myUsername, String myToken){

		Boolean ret = null;

		if (AssignmentAuthenticationUtils.validateToken(myUsername, myToken)) {
			ret = AssignmentContactCRUDController.deleteContact(contactId);
		}

		return ret;
	}

	@RemoteAction
	public static String listUsers(String myUsername, String myToken){

		String ret = null;

		if (AssignmentAuthenticationUtils.validateToken(myUsername, myToken)) {
			List<Contact> contacts = AssignmentContactCRUDController.listUsers(myUsername, myToken);
			ret = JSON.serializePretty(contacts);
		}

		return ret;
	}

	@RemoteAction
	public static Contact readContact(Id contactId, String myUsername, String myToken){
		Contact ret = null;

		if (AssignmentAuthenticationUtils.validateToken(myUsername, myToken)) {
			ret = AssignmentContactCRUDController.readContact(contactId);
		}

		return ret;
	}
	
    @RemoteAction
    public static String elTexto(String username, String token){ // PENDIENTE BORRAR

    	String ret = 'No hay texto';

		if (AssignmentAuthenticationUtils.validateToken(username, token)) {
			ret = AssignmentContactCRUDController.unTexto();
		}

		return ret;
    }
}

