public with sharing class AssignmentMainController {
	
	public AssignmentMainController() {}

	@RemoteAction
	public static String userLogin(String myUsername, String myPassword){ //El string que retorna es el Token
		return AssignmentAuthenticationUtils.authenticateUser(myUsername, myPassword);
	}

}