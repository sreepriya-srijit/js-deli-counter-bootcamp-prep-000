var katzDeliLine = [];

function takeANumber(katzDeliLine, personName){
  
  katzDeliLine.push(`${personName}`);
   var str = `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`;
  return str;
}


function nowServing(katzDeliLine) {
  let i = 0;
  while (i < katzDeliLine.length) {
    i++;
  }
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeliLine.shift()}.`);
}

function currentLine(katzDeliLine)
{
   if (katzDeliLine.length === 0)
   {
      return "The line is currently empty."
   }
   else
   {
     var str = "The line is currently:";
     
   for(let i=0; i<katzDeliLine.length; i++)
	 {
       str = str +" "+ 1+i +". " + katzDeliLine[i];
       if(i < katzDeliLine.length2 )
			str += "'";
       
     }
     return str;
   }
}





