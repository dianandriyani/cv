import { ref } from 'vue';

const activeSection = ref('about');

export function useActiveSection() {
  const setActiveSection = (section: string) => {
    activeSection.value = section;
  };

  return {
    activeSection,
    setActiveSection,
  };
}
