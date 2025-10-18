export default function Container({ children, extraClasses, sectionId }) {
  return (
    <section
      id={sectionId}
      className={`${extraClasses} px-4  mx-auto w-full   `}
    >
      {children}
    </section>
  );
}
