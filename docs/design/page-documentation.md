# 🖥️ Page Documentation

## Title screen
FloatingBubblesPage presents the game identity, animated background and start action. It receives theme and start callback from App.

## Match setup
WelcomePage lets players choose two to four participants and one of the available grid sizes. The preview uses the shared getCriticalMass helper.

## Game screen
Game renders controls, active-player/winner status and Board. It owns initialization, grid state, current player, participation tracking, terminal state and cascade presentation lock.

## Responsive and screenshot status
Components include viewport-specific styles, but manual narrow-screen and zoom verification remains open. No verified runtime screenshot set is checked in. Capture real images from a running build before publishing them as screenshots.
