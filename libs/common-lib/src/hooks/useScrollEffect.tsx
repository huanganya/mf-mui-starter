export const useScrollEffect = (headerOffset: number) => {
  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);

    if (target) {
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return { handleScrollTo };
};
