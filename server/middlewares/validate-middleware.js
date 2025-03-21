const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    console.log("Parsed Body: ", req.body);
    next();
  } catch (e) {
    const status = 422;
    const message = "Fill the form correctly";
    let extraDetails = "Validation Failed";
    console.log("Error from validate middleware: ", e);
    if (e.errors && e.errors.length > 0) {
      extraDetails = e.errors[0].message;
    }
    const error = { status, message, extraDetails };
    // console.log(error);
    next(error);
  }
};

module.exports = validate;
