function assertEquals(expect, actual) {
  var intersection = [],
    excludes = [],
    typeE = typeof expect,
    typeA = typeof actual;

  if (typeE != typeA) {
    throw Error(`Expected type ${typeE} but found type ${typeA}`);
  } else if (Array.isArray(expect) && Array.isArray(actual)) {
    actual.forEach((element) => {
      if (expect.includes(element)) {
        intersection.push(element);
      } else {
        excludes.push(element);
      }
    });
    const expectExcludes = expect.filter(
      (element) => !intersection.includes(element)
    );
    if (expect.length != actual.length) {
      throw Error(
        `Expected array of length '${expect.length}' but found '${actual.length}'`
      );
    } else if (expectExcludes.length > 0 || excludes.length > 0) {
      const expectExcludesString = expectExcludes.join(",");
      const actualExcludesString = excludes.join(",");
      throw Error(
        `Expected '${expectExcludesString}' but found '${actualExcludesString}'`
      );
    } else {
      return;
    }
  } else if (typeE == "string" && typeA == "string") {
    if (expect != actual) {
      throw Error(`Expected '${expect}' but found '${actual}'`);
    }
  } else if (typeE == "number" && typeA == "number") {
    if (expect != actual) {
      throw Error(`Expected ${expect} but found ${actual}`);
    }
  } else {
    return;
  }
}

module.exports = assertEquals;
