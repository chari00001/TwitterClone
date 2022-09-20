<template>
  <q-page>
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
    <q-list>
      <q-item class="q-py-md">
        <q-item-section avatar top>
          <q-avatar>
            <img src="https://avatars.githubusercontent.com/u/90192334?v=4">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong class="q-mr-xs">Cagri Lacin</strong>
            <span class="text-grey-7">@chari303</span>
          </q-item-label>
          <q-item-label class="qweet-content text-body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit obcaecati est asperiores porro eum ipsum architecto. Quasi culpa tempora architecto temporibus earum et vitae, molestias suscipit quaerat iusto commodi pariatur.
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
                  flat 
                  round 
                  size="sm"
                  color="grey" 
                  icon="fas fa-trash" />
          </div>
        </q-item-section>
        <q-item-section side top>
          1 min ago
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageHome',
  data() {
    return {
      newQweet: ''
    }
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
</style>