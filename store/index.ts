import { ref } from "vue";
import { defineStore } from "pinia";
import { useStoryblokApi } from "@storyblok/vue";

export const useNavStore = defineStore("navStore", () => {
  const navAbout = ref<{[key:string]: any}>({});

  function setNavAbout(info: any) {
    navAbout.value = info;
  }

  async function loadAbout(context: any) {
    const storyblokApi = useStoryblokApi();
    const {data} = await storyblokApi
      .get(`cdn/stories/nav-about`, {
        version: context.version
      })

    setNavAbout(data.story.content)
  }

  return { navAbout, setNavAbout, loadAbout }
});
