# Slack Birthday Remainder Bot

## Bot hosted at:

Google Sheet.

## Registration form:

Form fields and sheet data schema:

- Timestamp
- Name
- Email
- Birthday
- Language
- Slack ID
- Status

 ## Basic configuration:

### Birthday message:

At `config/index.ts` set birthday messages in multiple languages - use the template string `${slackID}` to mention the birthday person in the message body.

Examples:

```typescript
const birthdayMessages = {
  'pt-br': (slackID: string) => `Parabéns ${slackID}!!!`,
  'es-uy': (slackID: string) => `Feliz cumpleaños ${slackID}!!!`,
};
```

### Timer options:

The timer is set to send messages everyday at the time specified in the `chosenTimer` variable - by default at **9 am**. The enum `TimerOptions` contain options to send morning or afternoon messages.

### env file

The `env` file is not strictly an env file, but a TypeScript version where the settings are hidden through the `.gitignore` file. An example is provided at `env.example.ts` , where to use the file set its name to be `env.ts` 

## Getting Started with the Project

*Please note:* it is required admin access to edit the script project. Or, you can create a new script project (add the `scriptId` to the `.clasp.json` file) and push all the files to this new project.

1. Clone the project:

```bash
git clone git@github.com:danielfcollier/ts-gas-bot-slack-birthday-remainder.git
```

2. Install the packages:

```bash
npm install
```

3. Login into your Google account:

```bash
clasp login
```

4. Update the `.clasp.json` to set the project directory to the current working directory. In bash, type:

```bash
pwd | xargs clasp settings rootDir 
```

## Recommended Tools

- Formatting Tool
  - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)


