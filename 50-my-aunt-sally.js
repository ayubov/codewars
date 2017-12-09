// My aunt Sally is a peculiar woman. She only likes things that have a double letter in them.
// She dislikes walking but loves running.
// She also doesn’t like driving but strangely has a passion for steering.
// I will be spending some time with aunt Sally and want to make sure we have a good time.
// I need your help writing a programme that will help me determine if aunt Sally will like
// the activities that I have selected for her.

// Remember, aunt Sally only likes activites that contain adjacent double letter in them
// (not single or tripple, or more).

// She would like:

// skiing
// but she would not like:

// skiiiing
// Your task is to return a string of activities,
// if there are more than one seperate them by a space.

// skiing running
// If there are no activites that aunt Sally likes return an empty string.
// ''

export default str =>
  str.split(' ')
    .filter(w => w.split('').filter((l, i, a) => (a[i + 1] ? a[i] === a[i + 1] : false)).length === 1 && /^[a-z]*$/.test(w)).join(' ');
