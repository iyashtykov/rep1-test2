7# FERPA complient submission UID: 1881659

#Add your implementation to this file

#You may add other utility functions to this file,
#but you may NOT change the signature of the existing ones.

#Change the name of the file to your ID number (extension .py).


############
# QUESTION 1
############
class Binary():
    def __init__(self, s):
        """ represent a binary number as a string """
        assert type(s)==str
        assert s.count("0") + s.count("1") == len(s)
        self.s = s

    def __repr__(self):
        return "0b" + self.s

    def length(self):
        return len(self.s)

    def __eq__(self, other):
        return self.s == other.s

    def __lt__(self, other):
        if (self.length() < other.length()):
            return True
        if (self.length() > other.length()):
            return False
        for i in range(self.length()):
            if (int(self.s[i]) < int(self.s[i])):
                return True
            if (int(self.s[i]) > int(self.s[i])):
                return False
        return False

    def __add__(self, other):
        """ operator + """
        n = max(self.length(),other.length())
        x = self.s.zfill(n)[::-1]
        y = other.s.zfill(n)[::-1]
        carry = 0 
        result = ""
        for i in range(n):
            current = carry + int(x[i])+int(y[i])
            carry = current//2
            result = result + str(current%2)
        result = result +str(carry)
        result = str(int(result[::-1])) #flips it back and deletes leading zeros
        return Binary(result)

    def is_power_of_two(self):
        """ True if self is a power of 2, else - False """
        return self.s.count("1") == 1

    def largest_power_of_two(self):
        """ return the largest power of 2 which is <= self """
        return 2**(self.length() - 1)

    def div3(self):
        """ Returns remainder of self divided by 3 """
        cnt = Binary("0")
        while cnt < self:
            cnt = cnt + Binary("11")
        div = 0
        if (self + Binary("10") == cnt): 
            div = 1
        if (self + Binary("1") == cnt):
            div = 2
        return div

    def div3_new(self):
        """ Returns remainder of self divided by 3 """
        r = 0 #remainder
        for d in self.s:
            r = (int(d)-r)%3 #according to some math I've done
        return r
    



############
# QUESTION 2
############

### Tree node class - code from lecture ###

class Tree_node():
    def __init__(self,key,val):
        self.key=key
        self.val=val
        self.left=None
        self.right=None
      
    def __repr__(self):
        return "[" + str(self.left) + \
               " (" + str(self.key) + "," + str(self.val) + ") " \
               + str(self.right) + "]"



### Binary search tree  ###
class BSearch_tree():
    def __init__(self):
        self.root = None

	
    def insert(self, key, val):

        def insert_node(node,key,val):
            if (node == None):
                return Tree_node(key,val)
            if (key == node.key):
                node.val = val
                return node
            if (key < node.key):
                node.left = insert_node(node.left,key,val)
            else:
                node.right = insert_node(node.right,key,val)
            return node
        self.root = insert_node(self.root,key,val)


    def lookup(self,key):
        def lookup_node(node,key):
            if (node == None):
                return None
            if (node.key == key):
                return node.val
            if (key < node.key):
                return lookup_node(node.left,key)
            return lookup_node(node.right,key)
        return lookup_node(self.root,key)
        
    def sum(self):
        def sum_node(node):
            if (node == None):
                return 0
            return node.key + sum_node(node.left)+sum_node(node.right)
        return sum_node(self.root)

    def find_closest_key(self, search_key):
        def find_closest_key_inner(node,search_key,bestsofar):
            if (node == None):
                return bestsofar
            if (abs(node.key - search_key) < abs(bestsofar - search_key)):
                bestsofar = node.key
            bestsofar = find_closest_key_inner(node.left,search_key,bestsofar)
            bestsofar = find_closest_key_inner(node.right,search_key,bestsofar)
            return bestsofar
        assert self.root != None 
        return find_closest_key_inner(self.root,search_key,self.root.key)

        
    def is_balanced(self):
        def is_balanced_inner(node):
            if (node == None):
                return (True,0)
            bal_l,dep_l = is_balanced_inner(node.left)
            bal_r,dep_r = is_balanced_inner(node.right)
            if (bal_l and bal_r and (abs(dep_l-dep_r) <= 1)):
                return (True, max(dep_l,dep_r)+1)
            return False,0
        return is_balanced_inner(self.root)[0]

    




############
# QUESTION 3
############

class Polynomial():
    def __init__(self, coeffs_lst):
        self.coeffs = coeffs_lst
        
    def __repr__(self):
        terms = [" + ("+str(self.coeffs[k])+"*x^" + \
                 str(k)+")" \
                 for k in range(len(self.coeffs)) \
                 if self.coeffs[k]!=0]
        terms = "".join(terms)
        if terms == "":
            return "0"
        else:
            return terms[3:] #discard leftmost '+'

    def degree(self):
        if (len(self.coeffs) == 0):
            return 0
        return len(self.coeffs) - 1

    def evaluate(self, x):
        result = 0
        y = 1
        for a in self.coeffs:
            result = result + a*y
            y = y*x
        return result

    def derivative(self):
        if self.degree() == 0:
            return Polynomial([])
        return Polynomial([k*self.coeffs[k] for k in range(1,len(self.coeffs))])
        

    def __eq__(self, other):
        assert isinstance(other, Polynomial)
        n = len(self.coeffs)
        if (n != len(other.coeffs)):
            return False
        for i in range(n):
            if self.coeffs[i]!=other.coeffs[i]:
                return False
        return True

    def __add__(self, other):
        assert isinstance(other, Polynomial)
        n = len(self.coeffs)
        m = len(other.coeffs)
        new = []
        if (n >= m):
            larger = self.coeffs
            smaller = other.coeffs
        else:
            smaller = self.coeffs
            larger = other.coeffs
            n,m = m,n
        for i in range(0,m):
            new.append(smaller[i]+larger[i])
        new.extend(larger[m:])
        return Polynomial(new)


    def __neg__(self):
        return Polynomial([(-1)*e for e in self.coeffs])

    def __sub__(self, other):
        assert isinstance(other, Polynomial)  
        return self + -other

    def __mul__(self, other):
        assert isinstance(other, Polynomial)  
        n = len(self.coeffs)
        m = len(other.coeffs)
        if (n*m == 0):
            return Polynomial([])
        new = [0]*(n*m)
        for i in range(n):
            for j in range(m):
                new[i+j] += self.coeffs[i]*other.coeffs[j]
        return Polynomial(new)

    def find_root(self):
        return NR(self.evaluate ,self.derivative().evaluate)


## code for Newton Raphson, needed in find_root ##
from random import *

def diff_param(f,h=0.001):
    return (lambda x: (f(x+h)-f(x))/h)


def NR(func, deriv, epsilon=10**(-8), n=100, x0=None):
    if x0 is None:
        x0 = uniform(-100.,100.)
    x=x0; y=func(x)
    for i in range(n):
        if abs(y)<epsilon:
            #print (x,y,"convergence in",i, "iterations")
            return x
        elif abs(deriv(x))<epsilon:
            #print ("zero derivative, x0=",x0," i=",i, " xi=", x)
            return None
        else:
            #print(x,y)
            x = x- func(x)/deriv(x)
            y = func(x)
    #print("no convergence, x0=",x0," i=",i, " xi=", x)
    return None




############
# QUESTION 4
############

# a

def suffix_prefix_overlap(lst, k):
    result = []
    for i in range(len(lst)):
        for j in range(len(lst)):
            if i!=j:
                if (lst[i][-k::] == lst[j][:k:]):
                    result.append((i,j))
    return result
                    

# c
#########################################
### Dict class ###
#########################################

class Dict:
    def __init__(self, m, hash_func=hash):
        """ initial hash table, m empty entries """
        self.table = [ [] for i in range(m)]
        self.hash_mod = lambda x: hash_func(x) % m

    def __repr__(self):
        L = [self.table[i] for i in range(len(self.table))]
        return "".join([str(i) + " " + str(L[i]) + "\n" for i in range(len(self.table))])
              
    def insert(self, key, value):
        """ insert key,value into table
            Allow repetitions of keys """
        i = self.hash_mod(key) #hash on key only
        item = [key, value]    #pack into one item
        self.table[i].append(item) 

    def find(self, key):
        """ returns ALL values of key as a list, empty list if none """
        return self.table[self.hash_mod(key)]

#########################################
### End Dict class ###
#########################################    

# d
def suffix_prefix_overlap_hash1(lst, k):
    n = len(lst)
    d = Dict(n*2)
    result = []
    for i in range(n):
        d.insert(lst[i][:k:],i)
    for j in range(n):
        found = d.find(lst[j][-k::])
        for e in found:
            if e[1]!=j and lst[j][-k::]==lst[e[1]][:k:]:
                result.append((j,e[1]))
    return result
# f
def suffix_prefix_overlap_hash2(lst, k):
    d = {}
    result = []
    for i in range(len(lst)):
        pref = lst[i][:k:]
        if pref in d:
            d[pref].append(i)
        else:
            d[pref] = [i]
    for j in range(len(lst)):
        suff = lst[j][-k::]
        found = []
        if suff in d:
            found = d[suff]
        for i in found:
            pref = lst[i][:k:]
            if i!=j and pref == suff:
                result.append((j,i))
    return result
























############
# QUESTION 6
############

# a
def next_row(lst):
    return [1]+[lst[i]+lst[i+1] for i in range(len(lst)-1)]+[1]

# b   
def generate_pascal():
    row = [1]
    while True:
        yield row
        row = next_row(row)


# c
def generate_bernoulli():
    Pas = generate_pascal()
    row = next(Pas)
    Ber = row
    while True:
        yield Ber
        row = next(Pas)
        Ber = [1]
        for i in range(1,len(row)):
            Ber.append(Ber[i-1]+row[i])




########
# Tester
########

def test():

    #Question 1
    
    a = Binary("101")
    b = Binary("10001")
    if (a < b) != True:
        print("error in Binary() class __lt__ function")
    if (a + b) != Binary("10110"):
        print("error in  Binary() class __add__ function") 
    c = Binary("10000")
    if a.is_power_of_two() != False or c.is_power_of_two() != True:
        print("error in Binary() class is_power_of_two function")
    if a.largest_power_of_two() != 4 or c.largest_power_of_two() != 16:
        print("error in Binary() class largest_power_of_two function")
    if a.div3() != 2 or b.div3() != 2:
        print("error in Binary() class div3 function")
    if a.div3_new() != 2 or b.div3_new() != 2:
        print("error in Binary() class div3_new function")

    #Question 2
    
    bin_tree = BSearch_tree() 
    bin_tree.insert(2,"hi")
    bin_tree.insert(4,"bye")
    bin_tree.insert(1,"hello")
    bin_tree.insert(3,"lovely")

    if (bin_tree.sum() != 10):
        print("error in BSearch_Tree")
    if (bin_tree.lookup(3) != "lovely"):
        print("error in BSearch_Tree")
    if (bin_tree.lookup(100) != None):
        print("error in BSearch_Tree")
    if (bin_tree.find_closest_key(5) != 4):
        print("error in BSearch_Tree")
    if (bin_tree.is_balanced() != True):
        print("error in BSearch_Tree")
    bin_tree.insert(5,"dear")
    if (bin_tree.is_balanced() != True):
        print("error in BSearch_Tree")
    bin_tree.insert(6,"tea")
    if (bin_tree.is_balanced() != False):
        print("error in BSearch_Tree")


    #Question 3
        
    q = Polynomial([0, 0, 0, 6])
    if str(q) != "(6*x^3)":
        print("error in Polynomial.__init__ or Polynomial.in __repr__")
    if q.degree() != 3:
        print("error in Polynomial.degree")
    p = Polynomial([3, -4, 1])
    if p.evaluate(10) != 63:
        print("error in Polynomial.evaluate")
    dp = p.derivative()
    ddp = p.derivative().derivative()
    if ddp.evaluate(100) != 2:
        print("error in Polynomial.derivative")
    if not p == Polynomial([3, -4, 1]) or p==q:
        print("error in Polynomial.__eq__")
    r = p+q
    if r.evaluate(1) != 6:
        print("error in Polynomial.__add__")
    if not (q == Polynomial([0, 0, 0, 5]) + Polynomial([0, 0, 0, 1])):
        print("error in Polynomial.__add__ or Polynomial.__eq__")
    if (-p).evaluate(-10) != -143:
        print("error in Polynomial.__neg__")
    if (p-q).evaluate(-1) != 14:
        print("error in Polynomial.__sub__")
    if (p*q).evaluate(2) != -48:
        print("error in Polynomial.__mult__")
    if (Polynomial([0])*p).evaluate(200) != 0:
        print("error in Polynomial class")
    root = p.find_root()
    if root-3 > 10**-7 and root-1 > 10**-7:
        print("error in Polynomial.find_root")

    #Question 4

    s0 = "a"*100
    s1 = "a"*60+"b"*40
    s2 = "a"*10+"b"*40+"c"*50
    lst = [s0,s1,s2]
    k=50
    if suffix_prefix_overlap(lst, k) != [(0, 1), (1, 2)]:
        print("error in suffix_prefix_overlap")
    if suffix_prefix_overlap_hash1(lst, k) != [(0, 1), (1, 2)]:
        print("error in suffix_prefix_overlap_hash1")
    if suffix_prefix_overlap_hash2(lst, k) != [(0, 1), (1, 2)]:
        print("error in suffix_prefix_overlap_hash2")

    #Question 6

    gp = generate_pascal()
    if gp == None:
        print("error in generate_pascal()")
    elif next(gp)!=[1] or next(gp)!=[1,1] or next(gp)!=[1,2,1]:
        print("error in generate_pascal()")
