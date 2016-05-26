public class NewCaseListController {
    public List<Case> getNewCases (){
        List<Case> ret = [
            SELECT Id, CaseNumber 
            FROM Case 
            WHERE (Status = 'New')
        ];
        return ret;
    }
}