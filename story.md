# story Structure

| field_name                | type   | description                                 |
| ------------------------- | ------ | ------------------------------------------- |
| ID                        | int    | The ID of the story                         |
| author                    | string | The story author's user ID (numeric string) |
| name                      | string | The story's slug                            |
| type                      | string | Type of story                               |
| title                     | string | The title of the story                      |
| date                      | string | Format: YYYY-MM-DD HH:MM:SS                 |
| body                      | string | The full content of the story               |
| summary                   | string | User-defined story excerpt                  |
| status                    | string | See get_status for values                   |
| password                  | string | Returns empty string if no password         |
| parent                    | int    | Parent story ID (default 0)                 |
| modified                  | string | Format: YYYY-MM-DD HH:MM:SS                 |
| meta.description_twitter  | string | default description for Twitter             |
| meta.image_twitter        | string | default image url for Twitter               |
| meta.account_twitter      | string | author's Twitter account                    |
| meta.description_facebook | string | default description for Facebook            |
| meta.image_facebook       | string | default image url for Facebook              |
| meta.account_facebook     | string | author's Facebook account                   |
| meta.description_linkedin | string | default description for LinkedIn            |
| meta.image_linkedin       | string | default image url for LinkedIn              |
| meta.account_linkedin     | string | author's LinkedIn account                   |
| meta.description_reddit   | string | default description for Reddit              |
| meta.image_reddit         | string | default image url for Reddit                |
| meta.account_reddit       | string | author's Reddit account                     |
