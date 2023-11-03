'use client';

export default function ScrollLink({ sectionId, children, ...props }) {
  function handleScroll() {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <span onClick={handleScroll} {...props}>
      {children}
    </span>
  );
}
