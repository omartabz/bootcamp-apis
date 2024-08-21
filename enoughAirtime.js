function enoughAirtime(pro_use,avai_item){
    console.log(pro_use)
    const use_items = pro_use.split(' ');
    var callCount = 1.88;
    var dataCount = 12;
    var smsCount = 0.75;
    var total = 0;
    
    
    for(let i = 0; i < use_items.length; i++) {
          const cu_pro_use = use_items[i].trim();
          if(cu_pro_use === 'data') {
              total += dataCount;
          } else if(cu_pro_use === 'call') {
              total += callCount;
          } else if(cu_pro_use === 'sms') {
              total += smsCount;
          }
      
      const rem_airtime = avai_item - total;
      const result = rem_airtime >= 0 ? 'R' + rem_airtime.toFixed(2):'R0.00';
      
      return result;
      
  }}

  export{enoughAirtime}

  