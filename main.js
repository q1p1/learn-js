function gnrat(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
    if (i === 14) {
      return `error `;
    }
  }
}
gnrat(10, 20);
