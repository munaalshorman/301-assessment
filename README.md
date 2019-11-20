# 301-assessment
<b> q1: what library do we use in Node on the server side to allow us to create and run an HTTP server that obeys the HTTP protocol? </b>
require();





-------------------------------------------------------------------------------
<b>q2:explain this snippet of code from a server side app?</b>

response.status(200).send('HELLO WORLD');

that is mean the server is live and will show hello world on the page.


-------------------------------------------------------------------------------

<b>q3: write a function that takes an array of numbers as an argument and outputs the square of each number in that array?</b>

<p>numbers=[1,2,3,5,6];</p>
<p>function squareNumber(array){</p>
   <p> let squareArray=[];</p>
   <p> for (let i= 0; i<array.length;i++){</p>
       <p> let square=array[i]*array[i];</p>
       <p> squareArray.push(square);</p>
    
    }
    console.log(squareArray);
    return squareArray;
    
}
squareNumber(numbers);

