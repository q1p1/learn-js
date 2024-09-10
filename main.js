function date(start, end, exclude) {
  for (i = start; i < end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}
date(2002, 2022, 2013);
