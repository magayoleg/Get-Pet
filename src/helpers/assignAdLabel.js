export const assignAdLabel = (species) => {
  switch (species) {
    case 'Собаки':
      return 'islands#brownDotIcon';
    case 'Кошки':
      return 'islands#redDotIcon';
    case 'Грызуны':
      return 'islands#darkOrangeDotIcon';
    case 'Кролики':
      return 'islands#oliveDotIcon';
    case 'Ящерицы':
      return 'islands#darkGreenDotIcon';
    case 'Рыбы':
      return 'islands#lightBlueDotIcon';
    case 'Птицы':
      return 'islands#yellowDotIcon';
    case 'Насекомые':
      return 'islands#violetDotIcon';
    case 'Скотный двор':
      return 'islands#blackDotIcon';
    default:
      return 'islands#grayDotIcon';
  }
};
