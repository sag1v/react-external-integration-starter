# react-external-integration-starter
### This is a starter project to follow along with the toturial on how to integrate react with external applications.

It contains 2 projects:  

1) `react-counter` - a simulation of an isolated stand-alone "mini app" or a widget.
2) `main-app` - a simulation of an external application to the react mini-app / widget. 

## running the projects 
_(this project is based on create-react-app)_

### `main-app`

```bash
cd main-app
npm install
npm start
```

### `react-counter`

```bash
cd react-counter
npm install
npm start
```

## build
```bash
npm run build
```

_note: the build proccess of `react-counter` is modified, the output directory is targetting to "/main-app/public/counter_dist"._