<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen">
      <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
        <div class="col">
          <q-input 
                v-model="newQweet" 
                class="new-qweet"
                placeholder="What's happening?" 
                maxlength="300"
                bottom-slots 
                counter 
                autogrow
          >
            <template v-slot:before>
              <q-avatar size="xl">
                <img src="https://avatars.githubusercontent.com/u/90192334?v=4">
              </q-avatar>
            </template>
          </q-input>
        </div>
        <div class="col col-shrink">
          <q-btn 
                @click="addNewQweet"
                unelevated 
                rounded
                class="q-mb-lg"
                color="primary" 
                label="Qweet" 
                no-caps
                :disable="!newQweet"
          />
        </div>
      </div>
      <q-separator 
              class="divider"
              size="10px" 
              color="grey-3" />
      <q-list seperator>
        <transition-group
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <q-item 
                v-for="qweet in qweets" 
                :key="qweet.date" 
                class="qweet q-py-md">
          <q-item-section avatar top>
            <q-avatar>
              <img src="https://avatars.githubusercontent.com/u/90192334?v=4">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-subtitle1">
              <strong class="q-mr-xs">Cagri Lacin</strong>
              <span class="text-grey-7">@chari303</span>
              <span class="text-grey-7">
                <br class="lt-md">&bull; {{ relativeDate(qweet.date) }}
              </span>
            </q-item-label>
            <q-item-label class="qweet-content text-body1">
              {{ qweet.content }}
            </q-item-label>
            <div class="qweet-icons row justify-between q-mt-sm">
              <q-btn 
                    flat 
                    round 
                    size="sm"
                    color="grey" 
                    icon="far fa-comment" />
              <q-btn 
                    flat 
                    round 
                    size="sm"
                    color="grey" 
                    icon="fas fa-retweet" />
              <q-btn 
                    flat 
                    round 
                    size="sm"
                    color="grey" 
                    icon="far fa-heart" />
              <q-btn 
                    @click="deleteQweet(qweet)"
                    flat 
                    round 
                    size="sm"
                    color="grey" 
                    icon="fas fa-trash" />
            </div>
          </q-item-section>
          </q-item>
        </transition-group>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { formatDistance } from 'date-fns'
// import { collection, query, where, onSnapshot, docChanges, orderBy } from "firebase/firestore/lite";
import db from 'src/boot/firebase'

export default defineComponent({
  name: 'PageHome',
  data() {
    return {
      newQweet: '',
      qweets: [
        // {
        //   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit obcaecati est asperiores porro eum ipsum architecto. Quasi culpa tempora architecto temporibus earum et vitae, molestias suscipit quaerat iusto commodi pariatur.',
        //   date: 1663777786614
        // },
        // {
        //   content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit obcaecati est asperiores porro eum ipsum architecto. Quasi culpa tempora architecto temporibus earum et vitae, molestias suscipit quaerat iusto commodi pariatur.',
        //   date: 1663777826139
        // }
      ]
    }
  },
  methods: {
    relativeDate(value) {
      return formatDistance(value, new Date())
    },
    addNewQweet() {
      let qweet = {
        content: this.newQweet,
        date: Date.now()
      }
      if (!qweet.content) {
        return alert('Qweet content should be filled.')
      }

      this.qweets.unshift(qweet)

      this.newQweet = ''
    },
    deleteQweet(qweet) {
      let selectedQweet = this.qweets.find(qweet => qweet.date === qweet.date)
      if (selectedQweet) {
        this.qweets.splice(this.qweets.indexOf(selectedQweet), 1)
      }
    }
  },
  mounted() {
    
    db.collection('qweets').orderBy('date').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          console.log("New qweet: ", qweetChange);
          this.qweets.unshift(qweetChange)
        }

        if (change.type === "modified") {
          console.log("Modified qweet: ", qweetChange);
        }

        if (change.type === "removed") {
          console.log("Removed qweet: ", qweetChange);
        }
      })
    })
    
  }
})
</script>

<style lang="sass">
.new-qweet
  textarea
    font-size: 19px
    line-height: 1.4 !important
.divider
  border-top: 1px solid
  border-bottom: 1px- solid
  border-color: $grey-4
.qweet-content
  white-space: pre-line
.qweet-icons
  margin-left: -5px
.qweet
  border-top: 1px solid rgba(0, 0, 0, 0.12)
</style>