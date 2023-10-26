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

- [Vue Router](https://router.vuejs.org/installation.html) - guide to installation
- [Vee Validate](https://vee-validate.logaretm.com/v4/tutorials/basics/) - basics on form validation
- [Page Not Found](https://medium.com/@ishoshot/page-not-found-on-reload-vuejs-netlify-c71716e97e6) - helped me fix a broken link when the link exists
- [Managing Users](https://firebase.google.com/docs/auth/web/manage-users) - Firebase documentation on managing the users.

## issues encountered

- I was having a problem using Netlify to host my vue app. Issue was I was receiving a "page not found" and "broken link" when I tried to fetch `piniatasks.netlify.app/privacypolicy`. Apparently, the issue is because vue-router uses hash mode as default. I don't really understand it much.
  The solution was to create a file named `_redirects` in `/public/` with the content `/*  /index.html  200`

## what I learned

This project started out following a pinia tutorial on [Youtube](https://www.youtube.com/watch?v=u0B9dysw29A&list=PL4cUxeGkcC9hp28dYyYBy3xoOdoeNw-hD&index=1). I have always been uneasy on using pinia because I was taught about it using `Vue 2` when I had to write code like `computed: {...mapStores(useCartStore, useUserStore)}`. This sort of hindered my approach. I was always using `Vue 2` because I didn't understand how easy pinia is using `Vue 3`. The above code snippet is literally just `const cartStore = useCartStore()`! I am glad I had time to review and learn the simplicities of using pinia using `Vue 3`'s `setup()`.

When I got a grasp of pinia, I wanted to challenge myself. The next step was to implement Firebase so that the user's data is saved and they can access it at a later date. I learned that I gotta learn _how_ to read documentation, because I sure had _many_ to read, such as Vue, Vue Router, Firebase, Meta, Netlify, and other online resources that helped me resolve issues. Continuous learning is a blessing tbh. I am glad I was able to fix and implement features I thought were difficult at the time of coding 😊.
