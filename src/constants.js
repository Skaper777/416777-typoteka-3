'use strict';

const DEFAULT_COMMAND = `--help`;
const DEFAULT_PORT = 3000;
const TARGET_ARGS_INDEX = 1;
const USER_ARGV_INDEX = 2;

const FILENAME = `mocks.json`;
const MAX_ADS = 1000;
const DEFAULT_COUNT = 1;

const СliMessage = Object.freeze({
  LENGTH_ERROR: `No more than 1000 cards`,
  WRITE_ERROR: `Can't write data to file...`,
  SUCCESS: `Operation success. File created.`
});

const ServerMessage = Object.freeze({
  CREATE_ERROR: `Ошибка при создании сервера`,
  PENDING: `Ожидаю соединения на `
});

const ExitCode = Object.freeze({
  SUCCESS: 0,
  ERROR: 1
});

const MockPath = Object.freeze({
  SENTENCES_PATH: `./data/sentences.txt`,
  TITLES_PATH: `./data/titles.txt`,
  CATEGORIES_PATH: `./data/categories.txt`
});

const HttpCode = Object.freeze({
  OK: 200,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  FORBIDDEN: 403,
  UNAUTHORIZED: 401,
});

module.exports = {
  DEFAULT_COMMAND,
  DEFAULT_PORT,
  TARGET_ARGS_INDEX,
  USER_ARGV_INDEX,
  FILENAME,
  MAX_ADS,
  DEFAULT_COUNT,
  СliMessage,
  ServerMessage,
  ExitCode,
  MockPath,
  HttpCode
};
