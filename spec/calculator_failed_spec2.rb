require 'rspec'
require_relative '../calculator' # или calculator.rb, без разницы

describe Calculator do # здесь вместо класса Calculator можно быть бы написать строку, но здесь это не имеет смысла
  before { @calculator = Calculator.new('RSpec calculator')}



  it "should add 2 numbers correctly" do
  	expect(@calculator.add(2, 2)).to eq 44 
  end
  
  it "should add 2 numbers correctly" do
  	expect(@calculator.add(2, 2)).to eq 4 
  end
   
  it "should subtract 2 numbers correctly" do
   expect(@calculator.subtract(4, 2)).to eq 62 
  end  
    
  it "should subtract 2 numbers correctly" do
   expect(@calculator.subtract(4, 2)).to eq 62 
  end   
 
  it "should sum two odd numbers and become even" do
   expect(@calculator.add(3, 3)).to be_even 
   expect(@calculator.add(3, 3)).not_to be_odd 
  end

end