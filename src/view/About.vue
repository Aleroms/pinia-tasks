<template>
  <div class="about-container">
    <div class="overview">
      <h2>Pinia Tasks</h2>
      <p>
        short project on improving my pinia state management skills. I have
        noticed that is an area I would like to improve in.
      </p>
      <p>
        I am adding vue router and connecting a firebase to it for
        authentication and basic crud operations.
      </p>
    </div>
    <div class="useful-links">
      <h2>Useful Links</h2>
      <ul>
        <li>
          <a href="https://router.vuejs.org/installation.html">Vue Router</a> -
          guide to installation.
        </li>
        <li>
          <a href="https://vee-validate.logaretm.com/v4/tutorials/basics/"
            >Vee Validate</a
          >
          - basics on form validation.
        </li>
        <li>
          <a
            href="https://medium.com/@ishoshot/page-not-found-on-reload-vuejs-netlify-c71716e97e6"
            >Page Not Found</a
          >
          - helped me fix a broken link when link does exist issue.
        </li>
        <li>
          <a href="https://firebase.google.com/docs/auth/web/manage-users"
            >Firebase Documentation</a
          >
          - Firebase documentation on managing users.
        </li>
      </ul>
    </div>
    <div class="issues-encountered">
      <h2>Issues Encountered</h2>
      <p>
        I was having a problem using Netlify to host my vue app. Issue was I was
        receiving a "page not found" and "broken link" when I tried to fetch
        <code>piniatasks.netlify.app/privacypolicy</code>. Apparently, the issue
        is because vue-router uses hash mode as default. I don't really
        understand it much. The solution was to create a file named
        <code>_redirects</code> in <code>/public/</code> with the content
        <code>/* /index.html 200</code>.
      </p>
    </div>
    <div class="post-mortem">
      <h2>Post Mortem</h2>
      <p>
        This project started out following a pinia tutorial on
        <a
          href="https://www.youtube.com/watch?v=u0B9dysw29A&list=PL4cUxeGkcC9hp28dYyYBy3xoOdoeNw-hD&index=1"
          >Youtube</a
        >. I have always been uneasy on using pinia because I was taught about
        it using <code>Vue 2</code> when I had to write code like...
      </p>
      <pre>
        <code class="code-block">
          computed: {
            ...mapStores(useCartStore, useUserStore)
          }
        </code>
      </pre>
      <p>
        This sort of hindered my approach. I was always using
        <code>Vue 2</code> because I didn't understand how easy pinia is using
        <code>Vue 3</code>. The above code snippet is literally just
      </p>
      <pre><code>const cartStore = useCartStore()</code></pre>
      <p>
        I am glad I had time to review and learn the simplicities of using pinia
        using <code>Vue 3</code>'s <code>setup()</code>.
      </p>
      <p>
        When I got a grasp of pinia, I wanted to challenge myself. The next step
        was to implement Firebase so that the user's data is saved and they can
        access it at a later date. I learned that I gotta learn <i>how</i> to
        read documentation, because I sure had <i>much</i>, such as Vue, Vue
        Router, Firebase, Meta, Netlify, and other online resources that helped
        me resolve issues. Continuous learning is a blessing tbh. I am glad I
        was able to fix and implement features I thought were difficult at the
        time of coding 😊.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
.about-container {
  margin: 1rem auto;
  padding: 1rem;
  max-width: 900px;
}
</style>
