import org.junit.Test;

import static org.junit.Assert.assertEquals;
 
public class TestCalcOneCaseOk {
    
    @Test
    public void getSumTest() {
		System.out.println("I am here");
		System.err.println("Err here");
        Calc c = new Calc();    
        assertEquals(c.getSum(20, 30), 50);
    }
        
}