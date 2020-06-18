# Keepable ✏️

Keepable is a take-nothing service and productivity app designed by Codeable
students in which users can post amazing notes.

![Main view](https://res.cloudinary.com/dotconde/image/upload/v1592461051/Main_lnvoyt.png)

## Instructions

Fork [this repo](https://github.com/codeableorg/keepable) and work in your
solution there. When you finish, create a PR with the name of your group
`[group-#]`

You should modify the README file and add a section listing the group members
and any instructions neccesary to run your project (if any).

Here is the
[Design](https://www.figma.com/file/k5rXgNdQ7UPcOdyY6S2JI7/Keepable?node-id=0%3A1)

## User personas

There's only one type of user for Keepable application, this will be referred as
"user"

## Stories:

### V1:

### User can see a message when there is no notes

As a user, I can see a message when no notes has been added yet.

- Given that I am on the main page
- And no notes has been added yet
- Then I see an empty message

### User can see a notes form

As a user, I can see a form, so I can start adding notes.

- Given that I am on the main page
- Then I see a form for notes
- And I see a _color palette icon_ and a _keep it button_

### User can add a simple note

As a user, I want to be able to add simple notes, so that I can take into
account my activities or duties.

- Given that I am on main page
- Then I see a form for notes
- Then I fill current form with an amazing content
- When a click the "Keep it" button
- Then I see the new note created underneath

### User can include custom color while creating a note

As a user, I want to be able to include an specific color for my note.

- Given that I am on main page
- And I am using the note creation form
- When a click the color palette ~~icon~~ button
- Then I see a palette of available colors ready for be selected
- When I click on a color, the palette close up and the note change color.
- And a can continue with the creation of the note.

### User see a list of added notes

As a user, I can see a list of my notes, so that I can check them at any time.

- Given that I am on main page
- Then I see a list of my notes sorted by creation date (newest first)

### User can change the color of a note

As a user, I can change the color of any of the created notes so that I can keep
them organized.

- Given that I am on the main page
- Then I see a list of my notes
- When a click the color palette ~~icon~~ button of any note
- Then I see a palette of available colors ready for be selected
- When I click on a color, the palette close up and the note change color.

### User can delete a note

As a user, I want to be able to delete notes that are non relevant for me
anymore

- Given that I am on main page
- Then I see a previously created notes
- When a click the trash ~~icon~~ button
- Then the current note will disappear from notes view and included in trash
  view

### User can see current weather

As a user, I can see my current city's weather.

- Given that I am on main page
- Then I see a header message
- Then I see a customized-by-city welcome

Implementation notes:

- The weather should correspond to the current geolocation of the browser.
- You should use a _public API to get the current weather_

### User can see sidebar

As a user, I can see a sidebar with two links, so that I can explore two views
depending of my needs.

- Given that I am on main page
- Then I see a link to notes view
- Then I see a trash view

### User can see deleted notes in trash view

As a user, I can see my deleted notes

- Given that I am on main page
- When I click the "Trash" link
- Then I see a list of deleted notes

### User can delete permanently notes

As a user, I want to be able to delete permanently a deleted note, so that I
cannot see them anymore.

- Given that I am on trash page
- Then I see a list of deleted notes
- When I click the trash ~~icon~~ button
- Then current note will be deleted permanently

### User can recover deleted notes

As a user, I want to be able to recover a deleted note.

- Given that I am on trash page
- Then I see a list of deleted notes
- When I click the arrow up ~~icon~~ button
- Then current note will be recovered and added to notes view again.

### V2:

### User can add notes with title

As a user, I want to be able to complete notes including not only content, but
also a title, so that I can create a more detailed note.

- Given that I am on main page
- Then I see a form for notes with title and content field
- When a click the "Keep it" button
- Then I see a new note created including title and content

### User can edit notes

As a user, I want to be able to edit notes, so that I can update my note's
content

- Given that I am on main page
- Then I see a list of created notes
- When I click the specific note, a modal is displayed
- Then I can update note's title, description, color and pin status.
- Then I can press 'keep it' button and the modal close up and the note is
  updated.

### User can pin a note

As a user, I want to be able to pin a note, so that I can highlight most
relevant notes

- Given that I am on main page
- Then I select my favorite note
- When I click the pin ~~icon~~ button
- Then my note will be marked as pinned and the color of the pin will turn black

### User can see a pinned note

As a user, I can see a pinned note, so I can differentiate the most important
notes

- Given that I am on main page
- And I have pinned one or more notes
- Then I see my pinned notes grouped in a _pinned area_ located at the top of
  the view
- And I see my not pinned notes grouped in a _others area_ located at the bottom
  of the view

### User can change pin status

As a user, I can change note's pin status, so I can update note's relevance

- Given that I am on main page
- And I have pinned one or more notes
- Then I see all available notes grouped by pinned and others
- When I click a note with regular pin status, it is moved from the regular
  group to the pinned group and viceversa

### Extra functionalities:

It's time to add extra power to your Keepable app, are you ready? 🏅

### User can add a note by clicking outside the form note

As a user, I want to be able to add notes by clicking outside the form note, so
that I have an additional option to the _keep it_ button.

- Given that I am on main page
- Then I fill my note's form with title, description, color and pin status
- When I click outside the form
- Then my current note will be automatically created

### User can reload the page without loosing their notes

As a user, I want my notes to persist after reloading the page.

- Given that I have added some notes to the app
- And I reload or close and open the browser tap
- Then all my notes are still there.

### User can see a simplified form

As a user, I want to see a simplified form that show only the content field, so
that my form will take up less space

- Given that I am on main page
- Then I see my note's form with only one input (content input)
- When I click my content input, the entire form will be displayed using an
  animation

HAPPY CODING! 👨‍💻 👨‍💻
