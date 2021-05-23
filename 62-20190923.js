const user_s = 'aacdddddddddfffffffffgghhh';

console.log(
  `${user_s.match(/a/g).length}${Number(user_s.match(/b/g))}${
    user_s.match(/c/g).length
  }${user_s.match(/d/g).length}${Number(user_s.match(/e/g))}${
    user_s.match(/f/g).length
  }${user_s.match(/g/g).length}${user_s.match(/h/g).length}`
);

console.log(user_s.match(/a/g));
