import org.junit.Test;

import static org.junit.Assert.assertEquals;
 
public class TestCalcManyCasesFailed {
    
    @Test
    public void getSumTest1() {
        Calc c = new Calc();    
        assertEquals(c.getSum(-20, 30), 10);
    }
    
     @Test
    public void getSumTest2() {
        Calc c = new Calc();    
        assertEquals(c.getSum(0, 20), 10);
    }
    
     @Test
    public void getSumTest3() {
        Calc c = new Calc();    
        assertEquals(c.getSum(10, 24), 34);
    }
    
     @Test
    public void getSumTest4() {
        Calc c = new Calc();    
        assertEquals(c.getSum(20, 20), 640);
    }
    
     @Test
    public void getSumTest5() {
        Calc c = new Calc();    
        assertEquals(c.getSum(20, 430), 50);
    }
    
     @Test
    public void getSumTest6() {
        Calc c = new Calc();    
        assertEquals(c.getSum(20, 40), 60);
    }
        
    
      @Test
    public void getSumTest7() {
        Calc c = new Calc();    
        assertEquals(c.getSum(20, 340), 60);
    }
    
      @Test
    public void getSumTest8() {
        Calc c = new Calc();    
        assertEquals(c.getSum(20, 40), 60);
    }
    
      @Test
    public void getSumTest9() {
        Calc c = new Calc();    
        assertEquals(c.getSum(20, 140), 60);
    }
    
      @Test
    public void getSumTest10() {
        Calc c = new Calc();    
        assertEquals(c.getSum(520, 40), 60);
    }
   
    
    
}