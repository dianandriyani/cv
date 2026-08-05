import { onMounted, onUnmounted } from 'vue';
import { useActiveSection } from './useActiveSection';

export function useScrollSpy(ids: string[]) {
  const { setActiveSection } = useActiveSection();

  let observer: IntersectionObserver;

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -50% 0px',
      }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });
  });

  onUnmounted(() => {
    observer?.disconnect();
  });
}
