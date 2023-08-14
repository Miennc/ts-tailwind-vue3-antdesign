export const makeAddress = (item: any[]) => {
  let addr : string = '';
  let roadAddr: string = '';
  let roadAddrEng: string = '';
  
  items.forEach((item, index) => {
    //   address = makeAddress(item) || '';
    // addrType = 
    // console.log(`${index} 번이에용: `, item);
    const {area1, area2, area3, area4} = item.region;
    const baseLocation = `${area1.name} ${area2.name} ${area3.name} ${area4.name}`;
    let rest: string = '';
    
    // 일반 지번주소 핸들링
    if (item.name === 'addr') {
      
    }
    
    // 도로명 주소 핸들링
    if (item.name === 'roadaddr') {
      
    }

    if (!!item.land) {
      const {type, name, number1, number2} = item.land;
      type === '2' && (rest += '산');
      rest += number1;
      !!number2 && (rest += `-${number2}`);

      if (item.name === 'roadaddr') {
        area3.endsWith('면') ? 
      }
    }
    
    
    });

    return {addr, roadAddr, roadAddrEng};
}