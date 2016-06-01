public with sharing class AssignmentContactCRUDController { // Utility class, could be abstract
	
	public AssignmentContactCRUDController () {}

	public static Id createContact(String firstName, String lastName, 
		String username, String password, String title, String phone, String email){
		
		Blob blobPassword = Blob.valueOf(password);
		Blob blobHash = Crypto.generateDigest('MD5', blobPassword);
        String hashPassword = EncodingUtil.base64Encode(blobHash);// Esto es porque blobHash.toString() tira el error de que 'Blob is not a valid UTF-8 string'

		Contact cont = new Contact(
			FirstName=firstName, 
			LastName=lastName, 
			Username__c=username, 
			Password__c=hashPassword, 
			Title= title, 
			Phone=phone, 
			Email=email
		); 

		Id ret = null;

		try {
		    Database.SaveResult result = Database.insert(cont);
		    if (result != null && result.isSuccess()) {
	            ret = result.getId();
		    }
		} catch (Exception e) {
		    System.debug(e.getTypeName() + ' - ' + e.getCause() + ': ' + e.getMessage());
		}

		return ret;
	}

	public static Boolean editContact(Id contactId, String title, String phone, String email){


/*		Contact cont = new Contact(Id=contactId, Title=title, Phone=phone, Email=email);
		Boolean success = true;

		try

			update cont<
		catch
			success false

*/

		Contact cont = new Contact(Id=contactId, Title=title, Phone=phone, Email=email);
		Boolean ret = false;

		try {
		    Database.SaveResult result = Database.update(cont);
		    if (result != null && result.isSuccess()){
	            ret = true;
		    }

		} catch (Exception e) {
		    System.debug(e.getTypeName() + ' - ' + e.getCause() + ': ' + e.getMessage());
		}

		return ret;
	}

	public static Boolean deleteContact(Id contactId){

		Boolean ret = false;

		try {
		    Database.DeleteResult result = Database.delete(contactId);
		    if (result != null && result.isSuccess()){
	            ret = true;
		    }

		} catch (Exception e) {
		    System.debug(e.getTypeName() + ' - ' + e.getCause() + ': ' + e.getMessage());
		}

		return ret;
	}

	public static List<Contact> listUsers(String myUsername, String myToken){

		List<Contact> ret = null;

		if (AssignmentAuthenticationUtils.validateToken(myUsername, myToken)){
			List<Contact> result = null;
			try {
			    result = [Select Id, FirstName, LastName, Title from Contact];
			    if (result.size() > 0){
		            ret = result;
			    }

			} catch (Exception e) {
			    System.debug(e.getTypeName() + ' - ' + e.getCause() + ': ' + e.getMessage());
			}
		}

		return ret;
	}

	public static Contact readContact(Id contactId){

		Contact ret = null;

		try {
		    List<Contact> result = Database.query('Select Id, FirstName, LastName, Title, Username__c, Phone, Email from Contact WHERE Id = :contactId');
		    if (result.size() == 1){
	            ret = result[0]; // Esto lo hice así porque leí que era lo mejor para cuando uno hace una query y no sabe si le va a retornar algo o no
		    }

		} catch (Exception e) {
		    System.debug(e.getTypeName() + ' - ' + e.getCause() + ': ' + e.getMessage());
		}

		return ret;
	}

	public static String unTexto(){ // PENDIENTE BORRAR
		return 'Un texto';
	}
}

