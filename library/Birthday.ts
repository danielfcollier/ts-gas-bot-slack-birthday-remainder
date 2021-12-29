import { birthdayMessages } from '../config/index';
import Slack from './Slack';

const defaultLanguage = 'pt-br';

export default class Birthday {
  static getMessage(slackID, language) {
    return birthdayMessages[language ?? defaultLanguage](Slack.mention(slackID));
  }

  static getPeople(database) {
    const today = new Date();
    const birthdayPeople = [];

    database.forEach((entry) => {
      const birthday = new Date(entry.birthday);
      const day = birthday.getDate();
      const month = birthday.getMonth();
      const isToday = day === today.getDate() && month === today.getMonth();
      const isActive = entry.status === 'Active';

      if (isToday && isActive) {
        birthdayPeople.push(entry);
      }
    });

    return birthdayPeople;
  }
}
