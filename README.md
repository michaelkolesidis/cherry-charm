![Cherry Charm Logo](./public/images/logo.png)

**An online 3D slot machine game.**

<a href='https://ko-fi.com/michaelkolesidis' target='_blank'><img src='https://cdn.ko-fi.com/cdn/kofi1.png' style='border:0px;height:45px;' alt='Buy Me a Coffee at ko-fi.com' /></a>

![Attention! Free Software](./public/images/attention-free-software.png)

This software is free (as in freedom). **If you use any part of this code, you must make your entire project's source code publicly available under the same license.** This applies whether you modify the code or use it as it is in your own project. This ensures that all modifications and derivative works remain free software, so that everyone can benefit. If you are not willing to comply with these terms, you must refrain from using any part of this code.

For full license terms and conditions, you can read the AGPL-3.0 at: [gnu.org/licenses/agpl-3.0.html](https://www.gnu.org/licenses/agpl-3.0.html).

## Information

The game features a slot machine with three reels and four fruits, 🍒🍎🍌🍋. Fruit combinations reward the players with 🪙.

## Features

- Fully responsive for desktop and mobile
- Players can spin the slot machine either by clicking on the _Spin button_ or by pressing _Space_
- Number of coins indicator
- Number of spins indicator
- _Spin button_ displays _Spinning_ while the reels are spinning, informing players when they can spin again
- Orbit controls: click and drag to rotate the 3D view
- Help button that opens the help modal
- Help modal containing instructions and all winning fruit combinations
- Game logo

### Roadmap

- Add music and sound effects
- Improve button functionality
- Add winning effects and animations
- Add slot machine casing

### Winning fruit combinations

| Fruits | Rewards |
| :----: | ------: |
| 🍒🍒🍒 |   50 🪙 |
| 🍎🍎🍎 |    20🪙 |
| 🍌🍌🍌 |    15🪙 |
| 🍋🍋🍋 |     3🪙 |
|  🍒🍒  |    40🪙 |
|  🍎🍎  |    10🪙 |
|  🍌🍌  |     5🪙 |

**The slot machine only considers it a match if the fruits appear consecutively from left to right**

## Instructions

To run the project locally, follow these steps:

1. Install the project dependencies:

```
yarn
```

1. Start Vite:

```
yarn dev
```

## Screenshots

### Desktop

![Game](./screenshots/game.png)
![Modal](./screenshots/modal.png)

### Mobile

![Game Mobile](./screenshots/game_mobile.png)
![Modal Mobile](./screenshots/modal_mobile.png)

## Technologies

The core technologies of _Cherry Charm_ are JavaScript, WebGL and WebAssembly (WASM). The following libraries and tools are used:

| Name              | License | Description                                  |
| ----------------- | :-----: | -------------------------------------------- |
| React             |   MIT   | Component-based, front-end interface library |
| Three.js          |   MIT   | 3D graphics API for the web, based on WebGL  |
| React Three Fiber |   MIT   | A React renderer for Three.js                |
| Drei              |   MIT   | Useful helpers for React Three Fiber         |
| R3F-Perf          |   MIT   | Performance monitoring                       |
| Zustand           |   MIT   | State management                             |
| Vite              |   MIT   | Frontend development tooling                 |
|                   |         |                                              |

## Assets

All the assets used in _Cherry Charm_ (3D models, textures, images, sound effects, music etc.) are either using Creative Commons  or in the Public Domain or they were created by me and can be freely used for commercial purposes. They were chosen primarily to enable rapid prototyping. Some (or most) of them should be replaced with more appropriate or professional assets.

## Software Used

A non-exhaustive list of all the software that was used during the development of _Cherry Charm_.

- Visual Studio Code
- Blender
- Adobe Illustrator
- Krita
- Inkscape
- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Figma

## 💖 Support the Project

Thank you so much for your interest in my project! If you want to go a step further and support my open source work, buy me a coffee:

<a href='https://ko-fi.com/michaelkolesidis' target='_blank'><img src='https://cdn.ko-fi.com/cdn/kofi1.png' style='border:0px;height:45px;' alt='Buy Me a Coffee at ko-fi.com' /></a>

## License

<a href="https://www.gnu.org/licenses/agpl-3.0.html"><img src="https://upload.wikimedia.org/wikipedia/commons/0/06/AGPLv3_Logo.svg" height="100px" /></a>

Copyright (c) Michael Kolesidis  
Licensed under the [GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0.html).

🍒
