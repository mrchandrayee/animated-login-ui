# Animated Login UI — Complete Runnable Project

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/animated-login-ui/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Recreated from the supplied 14.4-second screen recording titled **Animated Login UI**.

## What is visible in the video

- Heading: `Animated Login UI`
- Black page background and blue rectangular frame
- Dark teal inner panel
- Deep navy login form surrounded by an irregular animated green glowing border
- Three overlapping animated outline layers
- Login heading
- Username and Password fields
- Show / Hide password control
- Pink-to-yellow gradient `Sign in` button
- `Forgot Password?` and `Signup` links
- Status text `Logging in...`
- Caption: `Comment "Login" for code`

## CSS transcribed from the visible editor

The following declarations are readable in the recording:

```css
.square {
  position: relative;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.square i {
  position: absolute;
  inset: 0;
  border: 1px solid #fff;
  transition: 0.5s;
}

.square i:nth-child(1) {
  border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
  animation: animate 6s linear infinite;
  background-color: rgba(4, 35, 84);
}
```

## Reconstructed implementation

The recording shows the first of three `.square i` layers and the start of the animation-based blob design. The other two border-radius shapes, keyframes, HTML structure, form styling and JavaScript are completed to reproduce the visible result.

### Main animation

```css
@keyframes animate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes animate2 {
  0% { transform: rotate(360deg); }
  100% { transform: rotate(0deg); }
}
```

## Features included

- Three animated irregular border layers
- Neon green glow around the navy login panel
- Username and password inputs with focus glow
- Floating field labels
- Show / Hide password toggle
- Gradient sign-in button with hover effect
- Demo submit state
- Forgot Password and Signup demo feedback
- Responsive mobile layout

## Run

Extract the ZIP and open `index.html` in a modern browser. No npm install, build step or external dependency is required.

## Project files

- `index.html` — login form structure
- `style.css` — animated blob border, glow, form and responsive styling
- `script.js` — password visibility and demo form interactions
- `README.md` — extracted source notes and run instructions

## Source accuracy and security

The `.square`, `.square i` and first `nth-child` CSS declarations above are transcribed from the visible editor. The remainder of the source is not fully visible, so it has been reconstructed to match the demonstrated UI and interactions. The login is a front-end demo only; it does not authenticate users or send credentials to a server. Connect a secure backend authentication endpoint before production use.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
