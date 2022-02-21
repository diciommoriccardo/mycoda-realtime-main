import dotenv from 'dotenv';
dotenv.config();

const JWT = {
  SECRET_KEY: process.env.JWT_SECRET,
};

const SOCKET_EVENTS = {
  SESSION_ERROR: 'sessionError',
  SESSION_JOINED: 'sessionJoined',
  SESSION_USER_JOINED: 'userJoined',
  SESSION_USER_LEFT: 'userLeft',
}

const BOUNDARY_VALUES = {
  GROUP_CODE_LENGTH: 6,
  MAX_GROUP_SIZE: 5,
};

const ERRORS = {
  MISSING_PARAMETERS: 'Missing parameters',
  INVALID_REQUEST: 'Invalid request',
  INVALID_ACCESS_TOKEN: 'Invalid access token',
  INVALID_REFRESH_TOKEN: 'Invalid refresh token',
  TOKEN_EXPIRED: 'Access token expired',
};

export {
  JWT,
  SOCKET_EVENTS,
  BOUNDARY_VALUES,
  ERRORS,
};
