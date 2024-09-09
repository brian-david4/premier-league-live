# Premier League Live!

## _See Premier League Results And Live Match Updates_

Select the fixture you would like to see the results of by using the menu.
The active match component will be updated to show the result(current score if live), venue and date of the match.

## Active Match Component

- Takes a prop of type `Fixture` which is used to update the score (the API endpoint updates if a match is live) depending on the current `activeID` (id of the fixture).
- For the background a React Three Fiber plane geometry is distorted via a custom shader written in `GLSL`.
- A hook is used to get the colour palette of a teams logo, of which the two most 'dominant' colours are sent to the shader via `uniforms`.

## Menu

- Allows user to toggle between live matches and past results.
- Clicking a fixture sets the `activeID` as that fixture allowing the `ActiveMatch` component to be updated.
