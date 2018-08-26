# bohemian-tweets
A visual timeline of "the greatest twitter scheme of all time"

## Server Setup
### Configuration
Create a `.env` file in the root folder of the project with the following content, replacing the `xxx` with the credentials you obtain from the twitter developers website.
```
CONSUMER_KEY=xxx
CONSUMER_SECRET=xxx
ACCESS_TOKEN_KEY=xxx
ACCESS_TOKEN_SECRET=xxx
```
The app uses user authentication but it needs to be switched to application authentication. That would require a slightly different set of authentication tokens.
