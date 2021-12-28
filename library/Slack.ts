import 'google-apps-script';
import { slackParams } from '../config/index';

export default class Slack {
  static sendMessage(message: string) {
    const url = slackParams.base + slackParams.endpoint;

    const payload = {
      channel: slackParams.channel,
      link_names: 1,
      username: 'Tunabot',
      text: message,
      icon_emoji: ':tuna:',
    };

    const params = {
      method: 'post' as GoogleAppsScript.URL_Fetch.HttpMethod,
      headers: {
        'content-type': 'application/json'
      },
      payload: JSON.stringify(payload),
    };

    UrlFetchApp.fetch(url, params);

    return true;
  }

  static mention(slackID) {
    return `<@${slackID}>`;
  }
}
