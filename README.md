# SkillActionFramework

## Features
Let's try to develope a simple framework for Assistant and Alexa Skill.
* DynamicEntities 
* SSML and messaging
* APL for Alexa

## Tech
### npm install


### Actions TIPS
#### Reprompt 
To uniformise Skill and Actions reprompt, we save the reprompt in sessionStorage on action when you supply one with simpleMessage.
To use it, add the ActionIntentHandlerReprompt use it in the intent you need. 
Here is the [actions doc about reprompt](https://developers.google.com/assistant/conversational/reprompts)

*Sample:*
`
    app.intent('RepromptIntent', async (conv: DialogflowConversation, params, option) => {
        if (conv.data.reprompt){ 
            conv.ask(conv.data.reprompt)
        }
    });
`

## Permission
1. Notifications
Use the askNotification in template, 
then:
`app.intent('actions.intent.PERMISSION', conv => {
  const granted = conv.arguments.get('PERMISSION')
  if (granted) {
    conv.close(`Great, I'll send an update whenever I notice a change`)
  } else {
    // Response shows that user did not grant permission
    conv.close('Alright, just let me know whenever you need the weather!')
  }
})`

## Tests
There is a PlateformMock.
To use it:
1. home
`new PlateformMock(new DialogflowConversation({body:YOUR_CONVERSATION_JSON}))`
2. skill
`
new PlateformMock({
                requestEnvelope: YOUR_HANDLERINPUT_JSON,
                attributesManager: null,
                responseBuilder: null,
            } as HandlerInput);
`

## TODO
* [] ISP for Actions
* [] Web Api for Actions and Alexa
* [] Permissions
* [] Geolocation


