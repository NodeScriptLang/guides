### Variables

You can view your variables using the sidebar navigation. A new workspace won't have any variables to begin with, so you'll need to create one. Unless you don't need any, in which case you don't need to, but you will probably run into a situation where variables can come in handy pretty quickly.

Variables are _scoped_ to the workspace they existy in - you cannot use these variables in other workspaces and other workspaces cannot use variables in your workspace.

To create a new variable, press the `Add Variable` button. The window will allow you to give it a name. Remember that workspaces do not share variables, which may help when deciding a name. For example, we may have an API Key to integrate with the Stripe API. We could call our variable `STRIPE_API_KEY`. There's no hard rules for your casing on variable names, but an uppercase name is similar to those _actual code_ environmental variable application that we write, so we'll stay close to that.

Because this is a sensitive variable (we want it to be encrypted when saved and masked in the UI when consuming it), we should make that the `Sensitive` toggle is ON. If we were adding a variable that wasn't sensitive, and we actually wanted to read it when editing our graphs (for example the Stripe base URL), we would... well, uncheck the sensitive toggle.

Sensitive variables cannot be read back, they can only be updated, so make sure thaqt if you are generating any keys with other systems that you store them securely somewhere else as well in case you change your variable name in the future (you cannot rename your variable once you've created it, but you can add more).

Variables can also be _copied__ to other workspaces, which is useful when you start building graphs in one workspace and want to start isolating them by function/team etc. To do this, select the variable in the UI, press the `Actions` button and click `Copy variables to workspace`.
