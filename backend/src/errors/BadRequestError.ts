import CustomErrors from './CustomErrors';

class BadRequestError extends CustomErrors {
  constructor(message: string) {
    super(message, 400);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}

export default BadRequestError;
