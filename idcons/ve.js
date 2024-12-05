function processBlockedOn(a) {
  // Assuming Va, Wa, Xa are some global variables or part of the scope
  if (Va !== null) mc(Va, a);
  if (Wa !== null) mc(Wa, a);
  if (Xa !== null) mc(Xa, a);

  // Create a function to call mc for a given element with a as parameter
  const b = function(b) {
    return mc(b, a);
  };

  // Process the arrays jc and kc
  jc.forEach(b);
  kc.forEach(b);

  // Iterate over the Ya array and clear blockedOn if it matches a
  for (let i = 0; i < Ya.length; i++) {
    let c = Ya[i];
    if (c.blockedOn === a) {
      c.blockedOn = null;
    }
  }

  // Continue processing Ya until the first element's blockedOn is null
  while (Ya.length > 0 && Ya[0].blockedOn === null) {
    Hg(Ya[0]);
    if (Ya[0].blockedOn === null) {
      Ya.shift();
    }
  }
}

function Aj(a, b, c, d) {
  const previousZ = z;
  const previousTransition = Gb.transition;
  Gb.transition = null;

  try {
    z = 1;
    Be(a, b, c, d);
  } finally {
    z = previousZ;
    Gb.transition = previousTransition;
  }
}

function Bj(a, b, c, d) {
  const previousZ = z;
  const previousTransition = Gb.transition;
  Gb.transition = null;

  try {
    z = 4;
    Be(a, b, c, d);
  } finally {
    z = previousZ;
    Gb.transition = previousTransition;
  }
}
