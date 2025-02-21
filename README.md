# FiveM React UI Template

A modern UI template for FiveM using React, designed to create seamless in-game interfaces.

## Features

- React-based UI system
- Input modal component with styling
- NUI (Native UI) integration with FiveM
- Keyboard controls (ESC to close)
- Clean and modern design

## Installation

1. Clone this repository to your FiveM resources folder
2. Navigate to the UI directory and install dependencies:
```bash
cd ui
npm install
```

3. Build the UI
```bash
npm run build
```

4. Add the resource to your ```server.cfg```:
```cfg
ensure fivem-react-template
```

## Usage
### Testing the Input Modal
Use the following command in-game to test the input modal:
```
/reacttest Input <placeholder text>
```

## Development
UI source files are located in the src directory  
Client-side scripts are in main.lua  
Server-side scripts are in main.lua  
Shared configuration is in config.lua  

## Project Structure
```
├── client/
│   └── main.lua
├── server/
│   └── main.lua
├── shared/
│   └── config.lua
├── ui/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── fxmanifest.lua
```

## Screenshots

<div align="center">

![1](/screenshots/1.png)

![2](/screenshots/2.png)

![3](/screenshots/3.png)

![4](/screenshots/4.png)


</div>
