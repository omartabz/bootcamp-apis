export function totalPhoneBill(usuage){
const items = usuage.split(' '); 
let callCount = 0; 
let smsCount = 0; 


for (let i = 0; i < items.length; i++) { 
  if (items[i] === 'call') { 
    callCount++; 
  } else if (items[i] === 'sms') { 
    smsCount++; 
  } 
} 
const totalCost = (callCount * 2.75) + (smsCount * 0.65); 
return 'R' + totalCost.toFixed(2); 
} 