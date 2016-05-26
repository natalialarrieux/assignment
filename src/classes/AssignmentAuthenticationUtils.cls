public with sharing class AssignmentAuthenticationUtils {

	// EL TOKEN GENERADO TIENE QUE IR AL FRONTEND Y ALLÍ GUARDARSE EN LA SESSION (VER FINAL DE LA PART 9)

	public AssignmentAuthenticationUtils() {}

	public static String authenticateUser(String username, String password){

		String token = null;
		Contact[] contacts = new List<Contact>();

		//String hashPassword = ; // Tengo que hashear los dos, porque el que viene de la query no está hasheado)
		
		Blob blobPassword = Blob.valueOf(password);
		Blob blobHash = Crypto.generateDigest('MD5', blobPassword);
		String hashPassword = EncodingUtil.base64Encode(blobHash);// Esto es porque blobHash.toString() tira el error de que 'Blob is not a valid UTF-8 string'

		try {
		    contacts = Database.query('SELECT Username__c, Password__c, Auth_Token__c from Contact WHERE username__c = :username AND password__c = :hashPassword');
		    // DUDA Si el password estuviera hasheado, cambiar por comparar con el hash (arriba)
		    if (contacts.size() == 1){ // O si no, > 0 en otros casos
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

	public static Boolean validateToken(String username, String token){
		Boolean ret = false;
		Contact cont = null;

		try {
			cont = Database.query('Select Id, Name from Contacts Where username__c = :username And Auth_Token__c = :token');
		} catch (Exception e){
			System.debug(e.getTypeName() + ' - ' + e.getCause() + ': ' + e.getMessage());
		}

		if (cont != null){
			ret = true;
		}

		return ret;
	}
}