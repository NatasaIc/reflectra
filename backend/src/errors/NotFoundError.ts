import CustomErrors from './CustomErrors';

class NotFoundError extends CustomErrors {
  constructor(message: string) {
    super(message, 404);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

export default NotFoundError;
