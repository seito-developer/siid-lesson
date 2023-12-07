// C017:ハイアンドロー・カードゲーム
reader.on('close', () => {
  const parentCards = lines[0].split(' ');
  const parentCard1 = Number(parentCards[0]);
  const parentCard2 = Number(parentCards[1]);
  
  const games = lines[1];
  let children = [];
  
  const createChildrenCards = () => {
      for (var i = 0; i < games; i++) {
          children.push(lines[i+2]);
      }
  }
  createChildrenCards();
  
  for (var i = 0; i < children.length; i++) {
      const childCards = children[i].split(' ');
      const childCards1 = Number(childCards[0]);
      const childCards2 = Number(childCards[1]);
      
      if(parentCard1 === childCards1){
          if(parentCard2 > childCards2){
              console.log('Low');
          } else {
              console.log('High');
          }
      } else {
          if(parentCard1 > childCards1){
              console.log('High');
          } else {
              console.log('Low');
          }
      }
  }
});