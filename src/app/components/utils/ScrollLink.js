'use client';

export default function ScrollLink({ sectionId, children }) {
  function handleScroll(e) {
    e.preventDefault();

    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  return <div onClick={handleScroll}>{children}</div>;
}
