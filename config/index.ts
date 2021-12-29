import { SHEET_ID, SLACK_ENDPOINT, SLACK_ROOM } from './env';

// Birthday

const birthdayMessages = {
  'pt-br': (slackID: string) => `Parabéns ${slackID}!!!`,
  'es-uy': (slackID: string) => `Feliz cumpleaños ${slackID}!!!`,
};

// Timer

enum TimerOptions {
  morning = 9,
  afternoon = 14,
}

const chosenTimer: number = TimerOptions.morning;

// Sheet

const sheetID = SHEET_ID;

// Slack

const slackParams = {
  channel: SLACK_ROOM,
  base: 'https://hooks.slack.com/services/',
  endpoint: SLACK_ENDPOINT,
};

// Database

const dbConfig = {
  name: 'Form Responses',
  schema: ['timestamp', 'name', 'email', 'birthday', 'language', 'id', 'status'],
};

export { birthdayMessages, TimerOptions, chosenTimer, sheetID, slackParams, dbConfig };
