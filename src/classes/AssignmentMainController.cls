public with sharing class AssignmentMainController {
	
	public AssignmentMainController() {}

	@RemoteAction
	public static String userLogin(String username, String password){ //El string que retorna es el Token
		return AssignmentAuthenticationUtils.authenticateUser(username, password);
	}

}