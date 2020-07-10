const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

export const getRandomColor = () => {
  const nums = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += nums[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getColorCodesByLetter = () => {
  const colorCodeLetters = {};
  letters.forEach((letter) => {
    colorCodeLetters[letter] = getRandomColor();
  });
  return colorCodeLetters;
};

export const colorCodeLetters = getColorCodesByLetter();
