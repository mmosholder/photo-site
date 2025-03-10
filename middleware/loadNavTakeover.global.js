import { useNavStore } from '../store';

export default defineNuxtRouteMiddleware((to, from) => {
  const navStore = useNavStore();

  navStore.loadAbout({
    version: 'published'
  });

  return true;
})
