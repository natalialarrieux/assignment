public class StringArrayTest {
    public static List<string> generateStringArray (integer n){
        List<string> ret = new List<string>();
        Integer i;
        for (i=0; i<n; i++){
            ret.add('Test ' + i);
        }
        return ret;
    }
}