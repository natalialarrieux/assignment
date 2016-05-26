
// PUEDE SER QUE SEA GLOBAL
public with sharing class AssignmentContactCRUDControllerExtension {

    private AssignmentMainController ctrl;

    public AssignmentContactCRUDControllerExtension(AssignmentMainController parentCtrl) {
        this.ctrl = parentCtrl;
    }

    @RemoteAction
	public static Id createContact(String username, String password){

		Id ret = null;

		ret = AssignmentContactCRUDController.createContact(username, password);

		return ret;
	}

	@RemoteAction
	public static Boolean editContact(Id contactId, String firstName, String lastName, String username, String token){

		Boolean ret = null;

		if (AssignmentAuthenticationUtils.validateToken(username, token)) {
			ret = AssignmentContactCRUDController.editContact(contactId, firstName, lastName);
		}

		return ret;
	}

	@RemoteAction
	public static Boolean deleteContact(Id contactId, String username, String token){

		Boolean ret = null;

		if (AssignmentAuthenticationUtils.validateToken(username, token)) {
			ret = AssignmentContactCRUDController.deleteContact(contactId);
		}

		return ret;
	}

	@RemoteAction
	public static List<Contact> listUsers(String username, String token){

		List<Contact> ret = null;

		if (AssignmentAuthenticationUtils.validateToken(username, token)) {
			ret = AssignmentContactCRUDController.listUsers(username, token);
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

