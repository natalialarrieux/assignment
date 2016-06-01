public with sharing class AssignmentAuthenticationUtils {

	public AssignmentAuthenticationUtils() {}

	public static String authenticateUser(String myUsername, String myPassword){

		String token = null;
		Contact[] contacts = new List<Contact>();
		
		Blob blobPassword = Blob.valueOf(myPassword);
		Blob blobHash = Crypto.generateDigest('MD5', blobPassword);
		String hashPassword = EncodingUtil.base64Encode(blobHash);// Esto es porque blobHash.toString() tira el error de que 'Blob is not a valid UTF-8 string'

		try {
		    contacts = Database.query('SELECT Username__c, Password__c, Auth_Token__c from Contact WHERE username__c = :myUsername AND password__c = :hashPassword');
		    if (contacts.size() == 1){ 
		    	Contact myContact = contacts[0];
		    	Integer rand = Math.round(Math.random()*1000);
		    	String stringRand = rand.format();
		    	String stringForToken = myContact.Username__c + myContact.Password__c + stringRand;
		    	Blob blobString = Blob.valueOf(stringForToken);
		    	Blob blobToken = Crypto.generateDigest('MD5', blobString);
	            token = EncodingUtil.base64Encode(blobToken);
	            myContact.Auth_Token__c = token;
	            Database.SaveResult result = Database.update(contacts[0]);
		    }

		} catch (Exception e) {
		    System.debug(e.getTypeName() + ' - ' + e.getCause() + ': ' + e.getMessage());
		}

		return token;
	}

	public static Boolean validateToken(String myUsername, String myToken){
		Boolean ret = false;
		Contact cont = null;

		try {
			cont = Database.query('Select Id, Name from Contact Where username__c = :myUsername And Auth_Token__c = :myToken');
		} catch (Exception e){
			System.debug(e.getTypeName() + ' - ' + e.getCause() + ': ' + e.getMessage());
		}

		if (cont != null){
			ret = true;
		}

		return ret;
	}
}