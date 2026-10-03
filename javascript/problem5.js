const validateSchema = (obj, schema) => {
  const errors = [];

  for (const [key, expectedType] of Object.entries(schema)) {
    // checking if the key is missing in the object
    if (!Object.hasOwn(obj, key)) {
      errors.push(`Missing key: ${key}`);
    }
    // checking if the type of the key is  not equal to the expected type in the schema
    else if (typeof obj[key] !== expectedType) {
      errors.push(
        `Wrong type for ${key}: expected ${expectedType}, got ${typeof obj[key]}`,
      );
    }
  }

  return errors;
};
const schema = { name: "string", age: "number", isAdmin: "boolean" };
console.log(validateSchema({ name: "Ada", age: 21, isAdmin: false }, schema));
// []
console.log(validateSchema({ name: "Ada", age: "21" }, schema));
// ['age: expected number, got string', 'isAdmin: missing property']
