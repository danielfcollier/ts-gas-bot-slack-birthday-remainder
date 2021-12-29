export default class Trigger {
  static clear() {
    const triggers = ScriptApp.getProjectTriggers();
    triggers.forEach((trigger) => ScriptApp.deleteTrigger(trigger));

    return !ScriptApp.getProjectTriggers().length ? true : false;
  }

  static init(time) {
    this.clear();

    ScriptApp.newTrigger('main').timeBased().everyDays(1).atHour(time).create();
  }
}
