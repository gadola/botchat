const key_crap = ['đm', 'đụ', 'địt', 'đjt', 'dit', 'djt', 'loz', 'lồn','lòn', 'buồi', 'cặc', 'cẹc', 'cc', 'cl', 'fuck', 'f.u.c.k', 'dcm', 'bướm', 'dm', 'vl', 'đéo', 'cu', 'chim' ];
const regexp = new RegExp(" " + key_crap.join(' | ') + " ", 'g');
module.exports = (input) => {
   if (typeof input == "string")  return regexp.test(` ${input.toLowerCase()} `)
   return false;
}
