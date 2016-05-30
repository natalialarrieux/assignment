public with sharing class AssignmentContactCRUDController { // Utility class, could be abstract
	
	public AssignmentContactCRUDController () {}

	public static Id createContact(String firstName, String lastName, String phone, String username, String password){ //Le cambié esto luego de hablar con Camilo
	// por el tema de que no hay forma de guardar el password hasheado si yo creo el usuario desde el org
		
		Blob blobPassword = Blob.valueOf(password);
		Blob blobHash = Crypto.generateDigest('MD5', blobPassword);
        String hashPassword = EncodingUtil.base64Encode(blobHash);// Esto es porque blobHash.toString() tira el error de que 'Blob is not a valid UTF-8 string'

		Contact cont = new Contact(FirstName=firstName, LastName=lastName, Phone=phone, Username__c=username, Password__c=hashPassword); 
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

	public static Boolean editContact(Id contactId, String firstName, String lastName, String phone, String username, String password){

		Blob blobPassword = Blob.valueOf(password);
		Blob blobHash = Crypto.generateDigest('MD5', blobPassword);
        String hashPassword = EncodingUtil.base64Encode(blobHash);

		Contact cont = new Contact(Id=contactId, FirstName=firstName, LastName=lastName, Phone=phone, Username__c=username, Password__c=hashPassword);
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

	public static List<Contact> listUsers(String username, String token){

		List<Contact> ret = null;

		if (AssignmentAuthenticationUtils.validateToken(username, token)){
			List<Contact> result = null;
			try {
			    result = Database.query('Select Id, Name from Contacts');
			    if (result.size() > 0){
		            ret = result;
			    }

			} catch (Exception e) {
			    System.debug(e.getTypeName() + ' - ' + e.getCause() + ': ' + e.getMessage());
			}
		}

		return ret;
	}

	public static String unTexto(){ // PENDIENTE BORRAR
		return 'Un texto';
	}
}

