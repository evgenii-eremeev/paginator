/* paginator */

export default function paginator(newsOnPage, totalNewsCount, currPage) {

  /* HELPERS */
  // возвращает массив вида [start, start + 1, ..., stop]
  function range(start, stop) {
    let result = [];
    for (let i = start; i < stop; i++) {
      result.push(i);
    }
    return result;
  }
  // возвращает среднюю часть паджинатора
  function makeSlider(currPage, totalPages) {
    let sliderStart = Math.max(1, currPage - 2);
    let sliderEnd = Math.min(sliderStart + 4, totalPages);
    sliderStart = Math.min(sliderStart, Math.max(1, sliderEnd - 4));
    return range(sliderStart, sliderEnd + 1);
  }
  /* END HELPERS */

  const totalPages = Math.ceil(totalNewsCount / newsOnPage);
  let slider = makeSlider(currPage, totalPages);
  // массивы страниц до и после слайдера
  const beforeSlider = range(1, slider[0]);
  const afterSlider = range(
    slider[slider.length - 1] + 1, // элемент после слайдера
    totalPages + 1
  );

  // мало страниц. зашита максимальная длинна паджинатора
  if(totalPages <= 9) {
    return [...beforeSlider, ...slider, ...afterSlider];
  }

  // много страниц.
  slider = currPage > 5 ?
    [1, '...', ...slider] :
    [...beforeSlider, ...slider];

  slider = currPage < totalPages - 4 ?
    [...slider, '...', totalPages] :
    [...slider, ...afterSlider];

  return slider;
}
