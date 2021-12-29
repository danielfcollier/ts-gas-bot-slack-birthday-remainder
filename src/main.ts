import Birthday from '../library/Birthday';
import Database from '../library/Database';
import Slack from '../library/Slack';

const myDB = Database.get();

function main() {
  const birthdayPeople = Birthday.getPeople(myDB);

  birthdayPeople.forEach((person) => {
    const birthdayMessage = Birthday.getMessage(person.id, person.language);

    Slack.sendMessage(birthdayMessage);
  });
}

export default main;
