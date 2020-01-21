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


## TODO
* [] ISP for Actions
* [] Web Api for Actions and Alexa
* [] Permissions
* [] Geolocation


