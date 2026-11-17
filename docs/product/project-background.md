# 📖 Project Background

Chain Reaction is a compact grid strategy game built around a small set of rules with emergent tactical outcomes. A player places an orb in an empty or self-owned cell. A cell bursts after reaching the count of its orthogonal neighbors. The burst distributes an orb to each neighbor and transfers those cells to the initiating player.

A browser implementation makes the game easy to demonstrate without installation. React provides a component model for the title, setup and game screens. A separate pure rules module makes board transitions independently testable.

The repository currently contains a React single-page frontend. Match state is held in browser memory. There is no backend application, account service, persistent data store or online room service.

This page records repository context, not market research. Claims about retention, demand, learning outcomes or market fit require actual evidence.
