# pinia tasks

short project on improving my pinia state management skills. I have noticed that is an area I would like to improve in.

I am adding vue router and connecting a firebase to it for authentication and basic crud operations.

## notes

`npm install pinia`
after installing pinia you must register it.

`npm install vee-validate --save`
`npm install @vee-validate/rules`
must install both packets if using rules as well

`npm install vue-router@4`

`npm install firebase`

## useful links

- [https://router.vuejs.org/installation.html](Vue Router) - guide to installation
- [https://vee-validate.logaretm.com/v4/tutorials/basics/](Vee Validate) - basics on form validation

# issues encountered
- I was having a problem using Netlify to host my vue app. Issue was I was receiving a "page not found" and "broken link" when I tried to fetch `piniatasks.netlify.app/privacypolicy`. Apparently, the issue is because vue-router uses hash mode as default. I don't really understand it much. 
The solution was to create a file named `_redirects` in `/public/` with the content `/*  /index.html  200`